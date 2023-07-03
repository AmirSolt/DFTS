
import { createClient } from '@supabase/supabase-js'
import type {Database} from './types'
import {PUBLIC_SUPABASE_URL} from '$env/static/public';
import {PRIVATE_SERVICE_ROLE_KEY_SUPABASE} from '$env/static/private';
import {Category, SEARCH_INPUT_LIMIT} from "$lib/utils/config"
import * as sw from 'stopword'
import { toastError } from '$lib/utils/toast';
import * as AI from "$lib/funcs/server/AI/index"

// to generate types
// npx supabase gen types typescript --project-id "ddoglkflgnvvhckqlvfx" --schema public > ./src/lib/funcs/server/supaDB/types.ts

const supabase = ()=> createClient<Database>(
    PUBLIC_SUPABASE_URL,
    PRIVATE_SERVICE_ROLE_KEY_SUPABASE,
    {auth:{persistSession:false}}
)


const IMAGE_TYPE = ".webp"
const get_image_url = (category:string, id:string) => 'https://ddoglkflgnvvhckqlvfx.supabase.co/storage/v1/object/public/thumbnail/'+category+"/"+id+IMAGE_TYPE
const DEBUG_SIGN = "@@@"


export async function getSearch(searchTerm:string, category:string):Promise<Product[] | null>{

    let isDebug:boolean = false;


    if(searchTerm.length>SEARCH_INPUT_LIMIT){
        toastError("Too many charachters", true)
        return []
    }


    [isDebug, searchTerm] = checkDebug(searchTerm)

    const cleanSearchTerm = cleanSearchTermForSearch(searchTerm);
    const embedding = await AI.embedText(searchTerm)


    
    const { data, error:err } = await supabase().rpc('search', {
        query: cleanSearchTerm,
        query_embedding: embedding,
        query_category:category,
    })


    if(err){
        console.log(`Failed to getSearch SupaDB: ${err.message}`)
        return null
    }



    
    let products:Product[] = []
    let resultIds:string[] = []
    data.forEach(result=>{
        products.push({
            title:result.title,
            year:result.year,
            image_url: get_image_url(category, result.id),
            category:category,
        })
        resultIds.push(result.id)
    })

    

    if(!isDebug)
        saveSearch(searchTerm, resultIds, category)

    return products
}



function stopWordRemover(text:string){
    return sw.removeStopwords(text.split(" ")).join(" ")
}

function cleanSearchTermForSearch(searchTerm:string){
    let query = searchTerm;
    query = stopWordRemover(query)
    query = query.replaceAll(" ", "|");
    return query
}

function checkDebug(searchTerm:string):[boolean, string]{
    if(searchTerm.includes(DEBUG_SIGN)){
        return [true, searchTerm.replace(DEBUG_SIGN, "")]
    }

    return [false, searchTerm]
}


async function saveSearch(searchTerm:string, resultIds:string[], category:string){

    const { data, error:err } = await supabase()
        .from("searches")
        .insert({search_term:searchTerm, result_ids:resultIds, category:category})
        
}

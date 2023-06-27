
import { createClient } from '@supabase/supabase-js'
import type {Database} from './types'
import {PUBLIC_SUPABASE_URL} from '$env/static/public';
import {PRIVATE_SERVICE_ROLE_KEY_SUPABASE} from '$env/static/private';
import { error } from '@sveltejs/kit';
import {Category, SEARCH_COUNT_LIMIT, SEARCH_INPUT_LIMIT} from "$lib/utils/config"
import * as AI from "$lib/funcs/server/AI/index"

// to generate types
// npx supabase gen types typescript --project-id "hksqypqduecqtjsconqx" --schema public > ./src/lib/funcs/server/supaDB/types.ts

const supabase = ()=> createClient<Database>(
    PUBLIC_SUPABASE_URL,
    PRIVATE_SERVICE_ROLE_KEY_SUPABASE,
    {auth:{persistSession:false}}
)


const IMAGE_TYPE = ".webp"


export async function getSearch(searchTerm:string, category:string):Promise<Product[] | null>{


    if(searchTerm.length>SEARCH_INPUT_LIMIT){
        return []
    }

    const embedding = await AI.embedText(searchTerm)


    let categoryConfig:CategoryConfig = getCategoryConfig(category)
    
    const { data, error:err } = await supabase().rpc(categoryConfig.rpc_func, {
        query: searchTerm,
        query_embedding: embedding,
        match_count: SEARCH_COUNT_LIMIT, 
    })


    if(err){
        console.log(`Failed to getSearch SupaDB: ${err.message}`)
        return null
    }



    
    let products:Product[] = []
    let resultIds:number[] = []
    data.forEach(result=>{
        products.push({
            title:result.title,
            image_url: categoryConfig.image_dir_dist + result.id + IMAGE_TYPE,
            category:category
        })
        resultIds.push(result.id)
    })

    
    saveSearch(searchTerm, resultIds, category)

    return products
}



function getCategoryConfig(category:string):CategoryConfig{
    if(category==Category.movie){
        return {
            rpc_func:'search_movies',
            image_dir_dist:'https://hksqypqduecqtjsconqx.supabase.co/storage/v1/object/public/thumbnail/movie/',
        }
    }


    return {
        rpc_func:'search_movies',
        image_dir_dist:'https://hksqypqduecqtjsconqx.supabase.co/storage/v1/object/public/thumbnail/movie/',
    }
}


async function saveSearch(searchTerm:string, resultIds:number[], category:string){

    const { data, error:err } = await supabase()
        .from("searches")
        .insert({search_term:searchTerm, result_ids:resultIds, category:category})
        
}
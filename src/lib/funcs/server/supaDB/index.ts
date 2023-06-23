
import { createClient } from '@supabase/supabase-js'
import type {Database} from './types'
import {PUBLIC_SUPABASE_URL} from '$env/static/public';
import {PRIVATE_SERVICE_ROLE_KEY_SUPABASE} from '$env/static/private';
import { error } from '@sveltejs/kit';
import {Category, SEARCH_COUNT_LIMIT, SEARCH_SIMILARITY_THRESH, SEARCH_INPUT_LIMIT} from "$lib/utils/config"
import * as AI from "$lib/funcs/server/AI/index"

// to generate types
// npx supabase gen types typescript --project-id "hksqypqduecqtjsconqx" --schema public > ./src/lib/funcs/server/supaDB/types.ts

const supabase = ()=> createClient<Database>(
    PUBLIC_SUPABASE_URL,
    PRIVATE_SERVICE_ROLE_KEY_SUPABASE,
    {auth:{persistSession:false}}
)




export async function getSearch(searchTerm:string, category:string):Promise<Product[] | null>{
    // const {data, error:err} = await supabase()
    //     .textSearch('fts', searchTerm,
    //         {type:"websearch",
    //         config:"english"})
    //     .limit(SEARCH_COUNT_LIMIT)

    if(searchTerm.length>SEARCH_INPUT_LIMIT){
        return []
    }

    const embedding = await AI.embedText(searchTerm)


    let rpc_func:string = ""
    if(category==Category.movie){
        rpc_func = 'search_movies';
    }
    
    const { data, error:err } = await supabase().rpc(rpc_func, {
        query_embedding: embedding,
        match_threshold: SEARCH_SIMILARITY_THRESH,
        match_count: SEARCH_COUNT_LIMIT, 
    })


    if(err){
        console.log(`Failed to getSearch SupaDB: ${err.message}`)
        return null
    }

    let products:Product[] = []
    data.forEach(result=>{
        products.push({
            title:result.title,
            image_url:result.image_id,
            similarity:result.similarity,
            category:category
        })
    })



    return products
}



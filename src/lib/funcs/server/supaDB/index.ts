
import { createClient } from '@supabase/supabase-js'
import type {Database} from './types'
import {PUBLIC_SUPABASE_URL} from '$env/static/public';
import {PRIVATE_SERVICE_ROLE_KEY_SUPABASE} from '$env/static/private';
import { error } from '@sveltejs/kit';
import {SEARCH_COUNT_LIMIT, SEARCH_SIMILARITY_THRESH} from "$lib/utils/config"
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

    const embedding = await AI.embedText(searchTerm)


    const { data, error:err } = await supabase().rpc('search_products', {
        query_embedding: embedding,
        match_threshold: SEARCH_SIMILARITY_THRESH,
        input_category:category,
        match_count: SEARCH_COUNT_LIMIT, 
    })

    if(err){
        console.log(`Failed to getSearch SupaDB: ${err.message}`)
        return null
    }
    return data
}



import { createClient } from '@supabase/supabase-js'
import type {Database} from './types'
import {PUBLIC_SUPABASE_URL} from '$env/static/public';
import {PRIVATE_SERVICE_ROLE_KEY_SUPABASE} from '$env/static/private';
import { error } from '@sveltejs/kit';
import {SEARCH_COUNT_LIMIT} from "$lib/utils/config"

// to generate types
// npx supabase gen types typescript --project-id "elznvxsklkeoszuzoqpg" --schema public > ./src/lib/funcs/server/supaDB/types.ts

const supabase = ()=> createClient<Database>(
    PUBLIC_SUPABASE_URL,
    PRIVATE_SERVICE_ROLE_KEY_SUPABASE,
    {auth:{persistSession:false}}
)




export async function getSearch(searchTerm:string, category:string):Promise<Product[] | null>{
    const {data, error:err} = await supabase()
        .from('product')
        .select('name, image_url')
        .filter("category", category)
        // .order("rating_total", { ascending: false, nullsFirst:false })
        .textSearch('fts', searchTerm,
            {type:"websearch",
            config:"english"})
        .limit(SEARCH_COUNT_LIMIT)

    if(err){
        console.log(`Failed to getSearch SupaDB: ${err.message}`)
        return null
    }
    return data
}


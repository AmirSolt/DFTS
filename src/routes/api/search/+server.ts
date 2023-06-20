import { getSearch } from '$lib/funcs/server/supaDB/index.js';
import { json } from '@sveltejs/kit';


export const POST = async ({request}) => {

    let {searchTerm, category} = await request.json()

    // TODO: Check searchTerm, category

    let products = await getSearch(searchTerm, category)

    
    return json(products)
};





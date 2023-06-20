
import { getSearch } from '$lib/funcs/server/supaDB/index.js';



export const load = async ({params, url}) => {
    const {searchTerm} = params;
    const category = url.searchParams.get('category');

    let products:Product[]|null = await getSearch(searchTerm, category)


    return{
        searchTerm,
        products,
    }
};
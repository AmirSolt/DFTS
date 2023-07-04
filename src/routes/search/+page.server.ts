
import { getSearch } from '$lib/funcs/server/supaDB/index.js';
import { Category } from '$lib/utils/config.js';


export const load = async ({url}) => {
    let searchTerm:string|null = url.searchParams.get('searchTerm');
    let category:string|null = url.searchParams.get('category');

    if(category===null)
        category = Category.movie
    if(searchTerm==null)
        searchTerm = "empty"





    return{
        searchTerm,
        category,
        streamed: {
            products:getSearch(searchTerm, category)
        }
    }
};
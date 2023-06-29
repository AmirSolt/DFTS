
import { getSearch } from '$lib/funcs/server/supaDB/index.js';
import { Category } from '$lib/utils/config.js';


export const load = async ({params}) => {
    let {category, searchTerm} = params;
    // let category = url.searchParams.get('category');

    if(category===null)
        category = Category.movie
    


    let products:Product[]|null = await getSearch(searchTerm, category)



    return{
        searchTerm,
        category,
        products,
    }
};
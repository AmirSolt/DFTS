
import {toastError} from '$lib/utils/toast'
import { Category, SEARCH_INPUT_LIMIT } from '$lib/utils/config'


export async function search(searchTerm:string, category:string):Promise<Product[]|null>{

    // check input
    console.log(searchTerm.length)
    if(!checkUserInput(searchTerm, category)){
        toastError("User Input is invalid!", true)
        return null
    }

    // convert to and or symbols


    const response:Response = await fetch('/api/search', {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            searchTerm,
            category
        })
    })

    if (!response.ok) {
        const err = await response.json()
        toastError(err.message, true)
        return null
    }

    return await response.json()
}


function checkUserInput(searchTerm:string, category:string):boolean{

    if(!(category in Object.values(Category))){
        return false;
    }

    if(searchTerm.length<=0){
        return false;
    }

    if(searchTerm.length > SEARCH_INPUT_LIMIT){
        return false;
    }

    return true

}
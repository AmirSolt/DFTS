
import {toastError} from '$lib/utils/toast'



export async function search(searchTerm:string, category:string):Promise<Product[]|null>{

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
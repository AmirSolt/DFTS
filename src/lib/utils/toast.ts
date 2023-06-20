import { toastStore } from '@skeletonlabs/skeleton';
import type { ToastSettings } from '@skeletonlabs/skeleton';
import { error } from '@sveltejs/kit';


export function toastError(message:string="Something went wrong!", isErr:boolean=true){
    const t: ToastSettings = {
        message: message,
    };
    toastStore.trigger(t);
    if(isErr)
		throw error(400, message);
}
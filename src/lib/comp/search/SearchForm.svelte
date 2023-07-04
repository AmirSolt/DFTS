
<script lang="ts">
    import {Search} from 'lucide-svelte'
    import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
	import {Category} from "$lib/utils/config"
        
    export let searchTerm:string = '';
    export let category:string = "" ;


    function onSubmit(){
        navigator.vibrate(15)
    }

</script>


<div class="my-5" >

    
    <form id="search-form" class="flex w-full justify-center w-full "  action="/search"  >

        <div class="flex flex-col justify-center items-end w-full max-w-2xl gap-2">

            <input class="input my-2 p-3 rounded-md" type="text" name="searchTerm" value={searchTerm} placeholder="e.g. similar to godfather | action thriller bruce willis" required />


            <div class="flex flex-row justify-between items-center w-full gap-2">


                <RadioGroup active="variant-filled-primary" hover="hover:variant-soft-primary" >
                    <RadioItem bind:group={category} name="category" value={Category.movie}>Movie</RadioItem>
                    <RadioItem bind:group={category} name="category" value={Category.show}>TV</RadioItem>
                    <RadioItem bind:group={category} name="category" value={Category.game}>Game</RadioItem>
                </RadioGroup>



                <button type="submit" class="btn w-1/2 variant-filled-primary "  on:click={(onSubmit)} >
                    <Search color={"#f9f9f9"} />
                </button> 

            </div>

        </div>
    </form>
</div>    


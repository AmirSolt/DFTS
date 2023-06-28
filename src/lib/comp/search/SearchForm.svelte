
<script lang="ts">
    import {Search} from 'lucide-svelte'
    import LoadingAnim from '$lib/comp/general/loading/LoadingAnim.svelte';
    import BarLoading from '$lib/comp/general/loading/BarLoading.svelte';
    import LoadingContainer from '$lib/comp/general/loading/LoadingContainer.svelte';
    import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
	import {Category} from "$lib/utils/config"
        
    export let searchTerm:string = '';
    export let category:string = "" ;
    let isLoading:boolean = false;
    let form;


    function onSubmit(){
        if(searchTerm.length==0){
            return false
        }

        navigator.vibrate(15)
        isLoading=true;

        setTimeout(()=>isLoading=false, 3000);

        

    }

    function onKeyDown(e) {
		if(e.keyCode === 13){
            onSubmit()
            document.getElementById("search-form").submit()
        }
	}
	
</script>


<div class="my-5" >

    
    <form id="search-form" class="flex w-full justify-center w-full "  action="{`/search/${category}/${searchTerm}`}" bind:this={form}  >
        <!-- <div class="input-group  max-w-2xl input-group-divider grid-cols-[1fr_auto] variant-ringed "> -->
            <div class="flex flex-col justify-center items-end w-full max-w-2xl gap-2">
                <!-- <input type="hidden" name="category" value="{category}" />  -->
                <!-- <input class="input ps-6 text-xl rounded-e-none" type="text" placeholder="Search..." bind:value={searchTerm} autocomplete="off" /> -->
                <textarea class="textarea w-full resize-none" rows="3" placeholder="Describe what you're looking for..." bind:value={searchTerm} autocomplete="off" on:keydown={onKeyDown}  />
                
            <div class="flex flex-row justify-between items-center w-full gap-2">

                <!-- <RadioGroup active="variant-filled-primary" hover="hover:variant-soft-primary" >
                    <RadioItem bind:group={category} name="" value={Category.game}>Game</RadioItem>
                    <RadioItem bind:group={category} name="" value={Category.movie}>Movie</RadioItem>
                    <RadioItem bind:group={category} name="" value={Category.show}>TV</RadioItem>
                </RadioGroup> -->
                <div></div>

                <button  class="btn w-1/2 variant-filled-primary "  on:click={onSubmit}  disabled="{searchTerm.length==0}">
                    <Search color={"#f9f9f9"} />
                </button>

            </div>
        </div>
    </form>
</div>    


{#if isLoading}

    


    <LoadingContainer >
    <LoadingAnim />
    <br>
    <BarLoading seconds={5} />
    </LoadingContainer>

{/if}

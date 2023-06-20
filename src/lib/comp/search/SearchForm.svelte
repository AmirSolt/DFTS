
<script lang="ts">
    import {Search} from 'lucide-svelte'
    import LoadingAnim from '$lib/comp/general/loading/LoadingAnim.svelte';
    import BarLoading from '$lib/comp/general/loading/BarLoading.svelte';
    import LoadingContainer from '$lib/comp/general/loading/LoadingContainer.svelte';
        
        
    export let searchTerm:string = '';
    export let category:string = "" ;
    let isLoading:boolean = false;

</script>




<h1>
    {category}
</h1>


<div class="my-5" >
    <form class="flex w-full h-14 justify-center"  action="{`/search/${searchTerm}?category=${category}`}">
        <div class="input-group  max-w-2xl input-group-divider grid-cols-[1fr_auto] variant-ringed ">
            <input class="input ps-6 text-xl rounded-e-none" type="text" placeholder="Search..." bind:value={searchTerm} autocomplete="off" />
            <button  class="variant-filled-primary" ><Search color={"#f9f9f9"} /></button>
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

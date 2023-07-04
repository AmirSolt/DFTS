<script lang="ts">

	import SearchForm from '$lib/comp/search/SearchForm.svelte';
    import CardGrid from "$lib/comp/search/CardGrid.svelte";
    import {toastError} from '$lib/utils/toast'
    import LoadingAnim from '$lib/comp/general/loading/LoadingAnim.svelte';
    import BarLoading from '$lib/comp/general/loading/BarLoading.svelte';
    import LoadingContainer from '$lib/comp/general/loading/LoadingContainer.svelte';


    export let data;

    $: ({ searchTerm, category, streamed } = data);


</script>



{#await streamed.products}

    <LoadingContainer >
    <LoadingAnim />
    <br>
    <BarLoading seconds={5} />
    </LoadingContainer>

{:then products} 
    
    <SearchForm {searchTerm} {category}   />

    <CardGrid products={products??[]} {category}  />
{/await}



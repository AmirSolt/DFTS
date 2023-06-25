<script lang="ts">

	import SearchForm from '$lib/comp/search/SearchForm.svelte';
    import CardGrid from "$lib/comp/search/CardGrid.svelte";
    import {toastError} from '$lib/utils/toast'

    export let data;
    let isLoading:boolean=false;

    $: ({ searchTerm, category, products } = data);



    if (products === null) {
      const message = 'Sorry, could not get the results!';
          toastError(message)
    }

    let lastLoadedProduct: Product|null = null 
    function checkForNewContent(){
        let newValue = products? products[0] : null
        if(lastLoadedProduct!=newValue){
            isLoading=false
        }
    }
    $: products, checkForNewContent()


</script>

<SearchForm {searchTerm} {category} bind:isLoading={isLoading} />

<CardGrid products={products??[]} {category}  />


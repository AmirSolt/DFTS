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

    $: products, isLoading=false


</script>

<SearchForm {searchTerm} {category} bind:isLoading={isLoading} />

<CardGrid products={products??[]} {category}  />

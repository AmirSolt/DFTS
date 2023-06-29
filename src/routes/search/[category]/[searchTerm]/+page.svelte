<script lang="ts">

	import SearchForm from '$lib/comp/search/SearchForm.svelte';
    import CardGrid from "$lib/comp/search/CardGrid.svelte";
    import {toastError} from '$lib/utils/toast'

    let isLoading:boolean = false;
    export let data;

    $: ({ searchTerm, category, products } = data);


    if (products === null) {
      const message = 'Sorry, could not get the results!';
          toastError(message)
    }
</script>

<SearchForm {searchTerm} {category} bind:isLoading={isLoading}  />

<CardGrid products={products??[]} {category} on:ready={()=>isLoading=false} />


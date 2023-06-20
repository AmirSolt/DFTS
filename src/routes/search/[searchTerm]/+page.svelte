<script lang="ts">

	import SearchForm from '$lib/comp/search/SearchForm.svelte';
    import CardGrid from "$lib/comp/search/CardGrid.svelte";
    import {toastError} from '$lib/utils/toast'

    export let data;

    $: ({ searchTerm, category, products } = data);

    if (products === null) {
		const message = 'Sorry, could not get the results!';
        toastError(message)
	}


</script>

<SearchForm {searchTerm} {category} />

<CardGrid products={products??[]} />

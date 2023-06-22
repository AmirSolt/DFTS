<script lang='ts'>

	import SearchForm from '$lib/comp/search/SearchForm.svelte';
    import Banner from "$lib/comp/general/Banner.svelte";
	import {Category} from "$lib/utils/config"

</script>




<SearchForm searchTerm={''} category={Category.game} />

<Banner />
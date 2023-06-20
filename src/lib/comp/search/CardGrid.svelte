
<script lang="ts">

    import Card from "./Card.svelte";

	export let products:Product[] = [];

</script>



<div class="my-5 w-full">


	

	{#if products.length === 0}
		<div class="flex justify-center items-center  w-full h-40">
			<h1 class="text-2xl">No items found</h1>
		</div>
	{:else}
		<div class="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 grid-rows-3">
			{#each products as product}
				<Card {product} />	
			{/each}
		</div>
	{/if}

</div>
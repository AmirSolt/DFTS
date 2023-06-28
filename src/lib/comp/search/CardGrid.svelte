
<script lang="ts">

    import Card from "./Card.svelte";

	export let products:Product[] = [];
	export let category:string;

	function capitilize(word:string){
		return word.charAt(0).toUpperCase()
			+ word.slice(1)
	}


	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	function onCardsReady(){
		dispatch('ready', ()=>{});
		return ""
	}


</script>




<h1 class="text-5xl">
	{capitilize(category)}s:
</h1>

<div class="my-5 w-full">

	{#if products.length === 0}
		<div class="flex justify-center items-center  w-full h-40">
			<h1 class="text-2xl">No items found</h1>
			{onCardsReady()}
		</div>
	{:else}
		{onCardsReady()}
		<div class="grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 grid-rows-3">
			{#each products as product}
				<Card {product} />	
			{/each}
		</div>
		
	{/if}

</div>
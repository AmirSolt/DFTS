<script lang="ts">
	import { truncate } from '$lib/utils/funcs';
	import {MoveRight} from 'lucide-svelte'
	import { copy } from 'svelte-copy';
	import type { ToastSettings } from '@skeletonlabs/skeleton';	

	

	export let product: Product;



</script>




{#if product.name && product.image_url}
	<div
		id="product_card"
		class=" flex flex-col card drop-shadow-md !bg-transparent rounded-lg gap-4 p-2"
	>

		<!-- Media -->
		<div class="flex justify-center items-center">
			<div
				class="flex justify-center items-center w-36 h-36 sm:w-60 sm:h-60 p-1 sm:p-2 rounded-lg bg-gray-300 shadow-gray-800/90"
			>
				<img
					class="max-w-full max-h-full rounded-lg"
					src={product.image_url}
					alt="Thumbnail"
					loading="lazy"
					width="400px"
					height="auto"
				/>
			</div>
		</div>

		<!-- Info -->
		<div id="info" class="flex flex-col justify-center items-start flex-col gap-2">

			<div class="flex flex-col justify-start items-start h-16 w-full">

				
				<!-- Name -->
				<div >
					<button 
					use:copy={product.name} 
					on:click={()=>navigator.vibrate(15)} 
					class="text-start text-base focus:text-tertiary-600 A Plague Tale: Requiem"
					>{truncate(product.name, 34)}</button>
				</div>

			</div>
			
			<div class="flex justify-between items-center w-full">
				<!-- Category -->
				<div >
					<small class="text-sm">Confidence: <br>	{product.similarity.toFixed(2)}</small>
					<!-- <small class="text-sm">{product.category}</small> -->
				</div>
				<a href="https://www.google.com/search?q={encodeURIComponent(product.name+" "+product.category)}" rel=”noopener” target="_blank">
					<div class="flex justify-center items-center gap-1 text-primary-500">
						<img src="/google.svg" alt="Google it" width="25" height="25">
						<MoveRight />
					</div>
				</a>
			</div>
		</div>


	</div>
{/if}





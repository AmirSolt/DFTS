<script lang="ts">
	import { truncate } from '$lib/utils/funcs';
	import {ExternalLink, Copy} from 'lucide-svelte'
	import { copy } from 'svelte-copy';
	import type { ToastSettings } from '@skeletonlabs/skeleton';	

	

	export let product: Product;



</script>




{#if product.title && product.image_url}
	<div
		id="product_card"
		class=" flex flex-col card drop-shadow-md !bg-transparent rounded-lg gap-4 p-2"
	>

		<!-- Media -->
		<div class="flex justify-center items-center w-full h-full">
			<div
				class="flex justify-center items-center w-36 h-54 sm:w-48 sm:h-72 rounded-lg bg-gray-800 shadow-gray-800/90"
			>
				<img
					class="w-full h-full rounded-lg"
					src={product.image_url}
					alt="Thumbnail"
				/>
			</div>
		</div>

		<!-- Info -->
		<div id="info" class="flex flex-col justify-center items-start flex-col gap-2">

			<div class="flex flex-col justify-start items-start w-full">

				
				<!-- Name -->
				<div class="w-full" >
					<button 
					use:copy={product.title} 
					on:click={()=>navigator.vibrate(15)} 
					class="flex justify-between items-between text-start text-base gap-2 focus:text-tertiary-600 w-full"
					>
					
					<span class="w-36 h-12 text-md">{truncate(product.title, 28)}</span> 
					<Copy size={16} />
					</button>
				</div>

			</div>
			
			<div class="flex justify-between items-center w-full">
				<!-- Category -->
				<div class="flex flex-col justify-start items-start w-full" >
					<small class="leading-4 text-gray-500" style="font-size:x-small;" >Word Sim: {product.word_sim.toFixed(3)}</small>
					<small class="leading-4 text-gray-500" style="font-size:x-small;" >Semantic Sim: {product.vect_sim.toFixed(3)}</small>
				</div>
				<a href="https://www.google.com/search?q={encodeURIComponent(product.title+" "+product.category)}" rel=”noopener” target="_blank">
					<div class="flex justify-center items-center gap-1 text-primary-500">
						<img src="/google.svg" alt="Google it" width="25" height="25">
						<ExternalLink />
					</div>
				</a>
			</div>
		</div>


	</div>
{/if}





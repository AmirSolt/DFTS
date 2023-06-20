<script lang="ts">
	import { truncate } from '$lib/utils/funcs';

	export let product: Product;
</script>

{#if product.name && product.image_url}
	<div
		id="product_card"
		class=" flex flex-row sm:flex-col card drop-shadow-md !bg-transparent rounded-lg sm:gap-4 p-2 sm:p-4"
	>

	<!-- Media -->
		<div class="flex justify-center items-center">
			<div
				class="flex justify-center items-center w-40 h-44 sm:w-60 sm:h-64 p-1 sm:p-2 rounded-lg bg-white shadow-gray-800/90"
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
		<div id="info" class="flex justify-center items-start flex-col gap-1 ps-4">
			<div class="flex flex-col justify-center items-start">
				<!-- Name -->
				<div class="text-start">
					<p>{truncate(product.name, 120)}</p>
				</div>
			</div>
		</div>
	</div>
{/if}

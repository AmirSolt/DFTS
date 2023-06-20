<script lang="ts">
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton'
</script>





<AppBar padding="p-2">

		<svelte:fragment slot="lead">
			<a class="flex justify-center items-center gap-2 text-xl" href="/">
				<img class="w-10 h-10" src="/logo.svg" alt="Logo">
				<h1>
					MAPYAN
				</h1> 
			</a>
			
		</svelte:fragment>
	
		<svelte:fragment slot="trail" >
			

            <LightSwitch />

			
		</svelte:fragment>
</AppBar>

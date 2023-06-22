<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Header from '$lib/comp/general/Header.svelte';
	import Footer from '$lib/comp/general/Footer.svelte';
	

	// ============== Toasts =================
	import { Toast } from '@skeletonlabs/skeleton';
	
</script>

<svelte:head>
	<title>DFTF - Describe it to Find it </title>
	<meta name="description" content="Describe any movie, game and tv show to find it. Using a full text search we can find your piece of media from our 1000's of movies, games and tv shows.">
	<meta name="keywords" content="DFTF, Find movie, Find show, Find game, AI-powered, comparison, movie search, Search engine, AI search, movie, tv, video game, show, find,search">
	<link rel="icon" type="image/svg+xml" href="/logo.svg" />

</svelte:head>



<AppShell>

	
	<svelte:fragment slot="pageHeader">
		<header>
			<Header />
		</header>
	</svelte:fragment>
	
	<Toast position='t'  background='variant-filled-error' />
	<div class="flex justify-center w-full h-full">
		<div class="max-w-7xl p-2 md:p-4 w-full h-full">
			
			<slot />
		</div>
	</div>

	<svelte:fragment slot="pageFooter">
		<footer>
			<Footer />
		</footer>
	</svelte:fragment>


</AppShell>

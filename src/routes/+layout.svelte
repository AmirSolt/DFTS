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
	<title>DFTS</title>
	<meta name="description" content="Search any product and generate a comparison table using AI. Our innovative platform empowers you to generate comprehensive and insightful comparison tables, providing you with a side-by-side analysis of key features, specifications, and more.">
	<meta name="keywords" content="Mapyan, product comparison, AI-powered comparison tables, Dynamic product comparisons, Smart shopping tool, Online shopping assistant, price comparison, Customer reviews analysis, Product feature comparison, Effortless product research,">
	<link rel="icon" type="image/svg+xml" href="/logo.svg" />

</svelte:head>



<AppShell>

	
	<svelte:fragment slot="pageHeader">
		<header>
			<Header />
		</header>
	</svelte:fragment>
	
	<Toast position='t' background='variant-filled-error' />
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

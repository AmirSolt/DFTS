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
	<title>peeqq - Modern Description search</title>
	<meta name="description" content="Describe any movie, game and tv show to find it. Using a full text search we can find your piece of media from our 1000's of movies, games and tv shows.">
	<meta name="keywords" content="peeqq, Find movie, Find show, Find game, AI-powered, comparison, movie search, Search engine, AI search, movie, tv, video game, show, find,search">
	<link rel="icon" type="image/svg+xml" href="/logo.svg" />


	<!-- Hotjar Tracking Code for https://www.peeqq.com/ -->
	<script>
		(function(h,o,t,j,a,r){
			h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
			h._hjSettings={hjid:3548552,hjsv:6};
			a=o.getElementsByTagName('head')[0];
			r=o.createElement('script');r.async=1;
			r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
			a.appendChild(r);
		})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
	</script>

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

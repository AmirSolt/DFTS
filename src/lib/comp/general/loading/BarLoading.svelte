<script lang="ts">
	import { ProgressBar } from '@skeletonlabs/skeleton';

	export let seconds:number= 40;
	// export let verbose:boolean= true;


	// ======================= Loading Logic ============================
	import { tweened } from 'svelte/motion';
	let original = seconds; // TYPE NUMBER OF SECONDS HERE
	let timer = tweened(original);
	setInterval(() => {
		if ($timer > 0) $timer--;
	}, 1000);
	$: progressValue = ((original - $timer) / original) * 100;
	// ======================= =========== ============================

</script>



<div class="flex p-2 flex-col ">
	<div>

	</div>
	<ProgressBar
		rounded="rounded-lg"
		class="rounded-lg"
		meter="bg-primary-500"
		height="h-4"
		width="w-60 md:w-80 "
		value={progressValue}
	/>

</div>
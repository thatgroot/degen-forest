<script lang="ts">
	import ezu from '$lib/assets/art/ezu.png';
	import HStackCard from '$lib/cards/HStackCard.svelte';
	import HorizontalIndicator from '$lib/indicators/HorizontalIndicator.svelte';
	import { text } from 'svelte/internal';
</script>

<div class="flex flex-col justify-between gap-6 max-w-6xl mx-auto">
	<HStackCard
		title={'A Place for All Your Crypto Needs'}
		description="The first ever cross-chain mintable Ethereum NFT collection to launch on Magic Eden’s
	Launchpad. EZU is the sister project of Psychedelics Anonymous. Available to mint in $SOL
	or $ETH."
		action={{
			title: 'Go to Launchpad',
			on_click: () => {}
		}}
		image={ezu}
	/>

	<div class="flex justify-center gap-2 w-full">
		<HorizontalIndicator />
		<HorizontalIndicator />
		<HorizontalIndicator bg="accent" />
		<HorizontalIndicator />
	</div>
</div>

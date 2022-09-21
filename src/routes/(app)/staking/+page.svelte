<script lang="ts">
	import fire from '$lib/assets/art/fire.png';
	import car from '$lib/assets/art/car.png';
	import assasin from '$lib/assets/art/assasin.png';
	import blind from '$lib/assets/art/blind.png';
	import fat from '$lib/assets/art/fat.png';
	import Popup from '$lib/popups/Popup.svelte';
	import { router } from '../about/+page';

	// svelte get current route slug

	const nfts: { title: string; time: string; nft: string; staked: boolean }[] = [
		{
			title: 'Assasin',
			time: '1d 2h 30m',
			nft: assasin,
			staked: false
		},
		{
			title: 'Car',
			time: '1d 2h 30m',
			nft: car,
			staked: true
		},
		{
			title: 'Fire',
			time: '1d 2h 30m',
			nft: fire,
			staked: false
		},
		{
			title: 'Blind',
			time: '1d 2h 30m',
			nft: blind,
			staked: false
		},
		{
			title: 'Fat',
			time: '1d 2h 30m',
			nft: fat,
			staked: false
		}
	];

	let toggle: boolean = false;

	const togglePopup = () => {
		toggle = !toggle;
	};
</script>

<div class="grid grid-cols-4 gap-5 text-primary">
	<!--  -->

	{#each nfts as { title, time, nft, staked }, i (i)}
		<div class="bg-secondary p-6 flex flex-col gap-6 rounded-lg">
			<div class="flex flex-col gap-2">
				<span class="text-lg">{title}</span>
				<span class="text-xs">{time}</span>
			</div>

			<div class="flex justify-center items-center">
				<img src={nft} alt={title} />
			</div>

			<button
				class="bg-accent text-primary rounded-lg p-2 uppercase font-bold text-xs"
				on:click={togglePopup}
			>
				{staked ? 'Un Stake' : 'Stake'}
			</button>
		</div>
	{/each}
</div>

<Popup
	bg="primary"
	rounded="lg"
	{toggle}
	onClosed={() => {
		toggle = false;
	}}
>
	<div class="flex flex-col gap-4 mx-auto max-w-lg">
		<span class="text-xl flex gap-2 text-primary">
			<span>Stake </span>
			<span class="font-bold">Hero of the Edge</span>
		</span>

		<span class="text-primary text-sm">
			Note: If you cancel the stake within 180 days, a certain amount of service fee will be
			charged, 90% of which will go into the pool and 10% will be burned. Stake less than 7 days,
			10% service fee will be charged; 7 to 14 days, 8%; 14 to 30 days, 6%; 30 to 90 days, 4%; 90 to
			180 days, 2%; more than 180 days, free of charge.
		</span>

		<button
			class="bg-secondary text-primary rounded-lg px-2 py-3 uppercase font-bold text-xs"
			on:click={togglePopup}
		>
			Confirm
		</button>
	</div>
</Popup>

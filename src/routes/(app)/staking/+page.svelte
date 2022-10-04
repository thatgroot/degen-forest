<script lang="ts">
	import fire from '$lib/assets/art/fire.png';
	import car from '$lib/assets/art/car.png';
	import assasin from '$lib/assets/art/assasin.png';
	import blind from '$lib/assets/art/blind.png';
	import fat from '$lib/assets/art/fat.png';
	import Popup from '$lib/popups/Popup.svelte';
	import logo from '$lib/assets/svg/logo-icon.svg';
	import copy from '$lib/assets/svg/icons/copy.svg';
	import info from '$lib/assets/svg/icons/info.svg';

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

<div class="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-5 text-primary">
	<!--  -->

	{#each nfts as { title, time, nft, staked }, i (i)}
		<div
			class="flex flex-col gap-6 bg-secondary-light rounded-2xl hover:scale-90 transition-all duration-300 ease-in-out"
		>
			<div class="flex flex-col  gap-4 bg-secondary rounded-2xl">
				<div class="flex justify-center items-center relative">
					<img src={nft} alt={title} class="rounded-2xl min-h-[20rem] object-cover" />
					<div
						class="flex flex-col justify-between p-4 absolute top-0 left-0 right-0 bottom-0 bg-opacity-10"
					>
						<button
							class="flex items-center justify-center px-2 py-1 w-fit rounded-full bg-primary  hover:gradient-primary"
						>
							39.54% APY
						</button>
						<span class="text-primary text-xl font-bold">Isaak Presley</span>
					</div>
				</div>
				<div class="flex items-center justify-between px-6 pb-4 pt-1">
					<div class="flex items-center gap-3 text-xs">
						<img src={logo} alt="logo" class="w-6 h-6" />
						<div class="flex flex-col gap-2">
							<span>Superfan NFT Owner</span>
							<span>4RMLd...t5nq</span>
						</div>
					</div>

					<div class="rounded-full w-8 h-8 bg-primary flex items-center justify-center">
						<img src={copy} alt="copy" class="w-4 h-4" />
					</div>
				</div>
			</div>
			<!-- footer -->

			<div class="flex flex-col p-4 gap-4">
				<div class="flex justify-between text-xxs">
					<!--  -->
					<div class="flex flex-col gap-2">
						<span class="flex gap-1">
							<span>TVL</span>
							<img src={info} alt="info" class="w-4 h-4" />
						</span>
						<span class="font-bold text-sm"> 4.8M </span>
						<span> ~$69K </span>
					</div>

					<div class="flex flex-col gap-2">
						<span class="text-sm font-bold"> Stakers </span>
						<span class=""> 133 </span>
					</div>
				</div>

				<button
					class="flex items-center justify-center w-full px-4 py-2 rounded-lg border-2 border-secondary"
					on:click={() => {
						togglePopup();
					}}
				>
					{#if staked}
						<span>Unstake</span>
					{:else}
						<span>Stake</span>
					{/if}
				</button>
			</div>
		</div>
	{/each}
</div>

<Popup
	bg="glass"
	rounded="lg"
	padding="p-0"
	{toggle}
	onClosed={() => {
		toggle = false;
	}}
>
	<div class="flex flex-col gap-4  max-w-lg rounded-lg">
		<div class="flex flex-col text-primary w-full bg-glass-dark px-6 py-3 rounded-lg">
			<span class="text-2xl font-medium"> Stake in this pool </span>
			<span class="text-lg font-light">
				Isaak Presley’s pool ( <span class="text-success"> 39.54% </span> )
			</span>
		</div>

		<div class="flex flex-col gap-3 p-4">
			<span class="text-secondary text-lg">Current balance: 0 LIKE</span>
			<div class="flex border-2 broder-secondary rounded-lg bg-primary p-2 items-center gap-2">
				<img src={logo} alt="logo" class="w-6 h-6" />
				<input
					type="text"
					class="flex-1 bg-transparent text-primary text-lg font-medium outline-none"
					placeholder="0.00"
				/>
				<div class="flex gap-2 text-primary">
					<button
						class="flex items-center justify-center px-4 py-2 rounded-lg border-2 border-secondary outline-none"
					>
						<span>Max</span>
					</button>
					<button
						class="flex items-center justify-center px-4 py-2 rounded-lg border-2 border-secondary outline-none"
					>
						<span>1/2</span>
					</button>
				</div>
			</div>

			<div class="p-4 rounded-lg flex justify-between items-center bg-primary text-primary">
				<span>Estimated APY</span>
				<span class="text-success"> 2.12% </span>
			</div>

			<div class="p-4 flex flex-col gap-1">
				<span>Calculated based on current rates.</span>
				<span>
					All figures are estimates provided for your convenience only, and by no means represent
					guaranteed returns.
				</span>
			</div>

			<div class="flex flex-col gap-3 border-2 border-secondary-light rounded-lg p-4 items-center">
				<span class="text-lg font-bold"> Please keep in mind </span>
				<span> There is a 2% platform fee for instant unstaking. </span>
			</div>
		</div>

		<div class="flex items-center p-3">
			<button
				class="bg-secondary text-primary rounded-lg px-2 py-3 uppercase font-bold text-xs w-full"
				on:click={togglePopup}
			>
				Confirm
			</button>
		</div>
	</div>
</Popup>

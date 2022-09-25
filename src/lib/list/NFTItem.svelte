<script lang="ts">
	import solana from '$lib/assets/svg/icons/solana.svg';
	import ezu from '$lib/assets/art/ezu.png';
	export let icon: string = solana;
	export let nft_img: string = ezu;
	export let number: number;
	export let bg: 'primary' | 'secondary' | 'tranparent' = 'tranparent';
	export let growth: 'up' | 'down' | 'none' = 'up';
	export let growth_value: number = 0;
</script>

<a
	class="grid grid-cols-[20px,68px,1fr] items-center gap-x-1 text-primary bg-{bg} rounded-md p-3 relative"
	href="/marketplace/simpl3r"
>
	<div class="font-bold justify-self-end mr-1">{number}</div>
	<div class="max-w-fit w-fit">
		<img draggable="false" loading="lazy" alt="..." class="rounded-full w-12 h-12" src={nft_img} />
	</div>
	<div class="flex flex-row justify-between gap-2 overflow-hidden ">
		<div class="flex flex-col justify-between">
			<h3 class="font-bold white-2 truncate">Simpl3r: Bounty Hunters</h3>
			<div class="flex items-center text-secondary-light font-light space-x-1">
				<span>Floor</span>
				<img src={icon} alt="solana" class="w-3 h-3" />
				<div class="max-w-[60px] truncate">
					<span class="truncate">3.5</span>
				</div>
			</div>
		</div>
		<div class="truncate group flex flex-col justify-between">
			<div class="flex flex-col gap-1 justify-between text-xs ">
				{#if growth_value === 0}
					<span class="text-secondary-light">--</span>
				{:else}
					<span class="text-{growth === 'up' ? 'success' : 'warning'}">
						{growth === 'up' ? '+' : '-'}{growth_value}%</span
					>
				{/if}
				<div class="flex gap-3">
					<img src={icon} alt={icon} class="w-4 h-4" />
					<span class="truncate">12.9K</span>
				</div>
			</div>
			<div
				class="hidden group-hover:block text-primary absolute -bottom-3 right-2 rounded-lg  bg-secondary border-2 border-primary px-4 py-2"
			>
				8,598.662794920001
			</div>
		</div>
	</div>
</a>

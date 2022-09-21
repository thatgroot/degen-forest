<script lang="ts">
	import solana from '$lib/assets/svg/icons/solana.svg';
	import ezu from '$lib/assets/art/ezu.png';
	export let icon: string = solana;
	export let nft_img: string = ezu;
	export let number: number;
	export let bg: 'primary' | 'secondary' | 'tranparent' = 'tranparent';
</script>

<a
	class="grid grid-cols-[20px,68px,1fr] items-center gap-x-1 text-primary bg-{bg} rounded-md p-3 relative"
	href="/marketplace/simpl3r"
>
	<div class="font-bold justify-self-end mr-1">{number}</div>
	<img draggable="false" loading="lazy" alt="..." class="rounded-full w-12 h-12" src={nft_img} />
	<div class="flex flex-col gap-1 overflow-hidden ">
		<div class="flex">
			<h3 class="font-bold white-2 truncate">Simpl3r: Bounty Hunters</h3>
			<span class="text-xs text-success">+250.72%</span>
		</div>
		<div class="flex flex-wrap gap-y-2 items-center justify-between  text-xs ">
			<div class="flex items-center text-secondary-light-light text-sm font-light space-x-1">
				<span>Floor</span>
				<img src={icon} alt="solana" class="w-4 h-4" />
				<div class="max-w-[60px] truncate">
					<span class="truncate">3.5</span>
				</div>
			</div>
			<div class="flex items-center justify-between space-x-1">
				<img src={icon} alt={icon} class="w-4 h-4" />

				<div class="truncate group ">
					<span class="truncate">12.9K</span>
					<div
						class="hidden group-hover:block text-primary absolute -bottom-3 right-2 rounded-lg  bg-secondary border-2 border-primary px-4 py-2 "
					>
						8,598.662794920001
					</div>
				</div>
			</div>
		</div>
	</div>
</a>

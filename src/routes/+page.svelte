<script lang="ts">
	import Sidenav from '$lib/navigation/Sidenav.svelte';
	import Search from '$lib/form/search.svelte';
	import ConnectWallet from '$lib/button/ConnectWallet.svelte';
	import Carousel from '$lib/carousel/Carousel.svelte';
	import Topbar from '$lib/navigation/Topbar.svelte';
	import Dropdown from '$lib/dropdown/Dropdown.svelte';
	import ezu from '$lib/assets/art/ezu.png';
	import solana from '$lib/assets/svg/icons/solana.svg';
	import heart from '$lib/assets/svg/icons/heart.svg';

	import NftItem from '$lib/list/NFTItem.svelte';
	import { each } from 'svelte/internal';
	import TabBar from '$lib/tab/TabBar.svelte';
	import Tab from '$lib/tab/Tab.svelte';
	import NftCardMinimal from '$lib/cards/nft/NFTCardMinimal.svelte';
</script>

<Carousel />

<div
	class="flex flex-col flex-wrap md:flex-row mb-6 gap-8 justify-center md:justify-start md:items-center p-4 overflow-x-hidden"
>
	<div class="flex flex-col gap-6">
		<div class="flex justify-between">
			<div class="flex justify-between items-center text-primary gap-4">
				<h3 class="mb-0 font-bold text-[28px] leading-9 ">Popular Collections</h3>

				<div class="flex">
					<Dropdown
						id="time_history"
						items={[
							'Last 5 minutes',
							'Last 15 minutes',
							'Last 1 hour',
							'Last 6 hours',
							'Last 24 hours',
							'Last 7 days',
							'Last 30 days'
						]}
					/>
				</div>
			</div>
			<a
				class="flex justify-center items-center rounded-md border-2 border-secondary px-4 text-primary"
				href="/popular-collections"
			>
				See All
			</a>
		</div>
		<div class="grid grid-cols-4 gap-4">
			{#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] as item}
				<NftItem number={item} icon={solana} nft_img={ezu} />
			{/each}
		</div>
	</div>

	<div class="flex flex-col gap-6">
		<div class="flex justify-between">
			<div class="flex justify-between items-center text-primary gap-4">
				<h3 class="mb-0 font-bold text-[28px] leading-9 ">Popular Collections</h3>

				<div class="flex">
					<Dropdown
						id="time_history"
						items={[
							'Last 5 minutes',
							'Last 15 minutes',
							'Last 1 hour',
							'Last 6 hours',
							'Last 24 hours',
							'Last 7 days',
							'Last 30 days'
						]}
					/>
				</div>
			</div>
			<a
				class="flex justify-center items-center rounded-md border-2 border-secondary px-4 text-primary"
				href="/popular-collections"
			>
				See All
			</a>
		</div>

		<div class="grid grid-cols-6 gap-4">
			{#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] as item}
				<NftCardMinimal>
					<div class="flex justify-between w-full text-primary">
						<span class="border border-secondary px-2 py-1 flex gap-2 items-center">
							<img src={heart} alt="favorite" class="w-4 h-4" />
							<span>8435</span>
						</span>
						<span class="border border-secondary px-2 py-1">Sep 23, 05:00</span>
					</div>
				</NftCardMinimal>
			{/each}
		</div>
	</div>

	<div class="flex flex-col gap-6">
		<div class="flex justify-between">
			<div class="flex justify-between items-center text-primary gap-4">
				<h3 class="mb-0 font-bold text-[28px] leading-9 ">Launchpad drops</h3>

				<div class="flex text-xs">
					<button class="rounded-full px-4 py-3 btn-secondary"> Next 7 days </button>
					<button class="rounded-full px-4 py-3 btn-secondary"> Comming soon</button>
					<button class="rounded-full px-4 py-3 btn-secondary"> Live </button>
				</div>
			</div>
			<a
				class="flex justify-center items-center rounded-md border-2 border-secondary px-4 text-primary"
				href="/popular-collections"
			>
				See All
			</a>
		</div>
		<div class="grid grid-cols-6 gap-4">
			{#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] as item}
				<NftCardMinimal />
			{/each}
		</div>
	</div>

	{#each ['Whitelist opportunities', 'Blog', 'Auctions', 'Top upvoted drops', 'Explore Art', 'Frens are watching'] as title}
		<div class="flex flex-col gap-6">
			<div class="flex justify-between items-center text-primary gap-4">
				<h3 class="mb-0 font-bold text-[28px] leading-9 ">{title}</h3>
			</div>
			<div class="w-[80vw] flex scroll gap-4 overflow-scroll">
				{#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] as item}
					<div class="w-64">
						<NftCardMinimal />
					</div>
				{/each}
			</div>
		</div>
	{/each}
</div>

<style>
	*::-webkit-scrollbar {
		display: none;
	}
</style>

<script lang="ts">
	import Carousel from '$lib/carousel/Carousel.svelte';
	import Dropdown from '$lib/dropdown/Dropdown.svelte';
	import ezu from '$lib/assets/art/ezu.png';
	import solana from '$lib/assets/svg/icons/solana.svg';
	import info_active from '$lib/assets/svg/icons/info-active.svg';
	import heart from '$lib/assets/svg/icons/heart.svg';

	import NftItem from '$lib/list/NFTItem.svelte';
	import { each } from 'svelte/internal';
	import NftCardMinimal from '$lib/cards/nft/NFTCardMinimal.svelte';

	const randomNumber = (min: number = 1, max: number = 24) => {
		return Math.floor(Math.random() * (max - min + 1) + min);
	};
</script>

<div class="flex flex-col gap-16">
	<Carousel />

	<div
		class="flex flex-col flex-wrap md:flex-row mb-6 gap-8 justify-center md:justify-start md:items-center p-4 overflow-x-hidden"
	>
		<!-- popular collections -->
		<div class="flex flex-col gap-6">
			<div class="flex flex-col laptop:flex-row justify-between">
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
			<div class="grid grid-cols-1 tablet:grid-cols-2 large:grid-cols-4 gap-4">
				{#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] as item}
					<NftItem number={item} icon={solana} nft_img={ezu} />
				{/each}
			</div>
		</div>

		<!-- launchpad drops -->
		<div class="flex flex-col gap-6">
			<div class="flex justify-between">
				<div class="flex justify-between items-center text-primary gap-4">
					<h3 class="mb-0 font-bold text-[28px] leading-9 ">Launchpad drops</h3>

					<div class="flex rounded-full border-2 border-secondary text-sm">
						<button class="rounded-full px-6 py-2 btn-secondary"> Next 7 days </button>
						<button class="rounded-full px-4 py-2 btn-secondary"> Comming soon</button>
						<button class="rounded-full px-4 py-2 btn-secondary"> Live </button>
					</div>
				</div>
				<a
					class="flex justify-center items-center rounded-md border-2 border-secondary px-4 text-primary"
					href="/popular-collections"
				>
					See All
				</a>
			</div>
			<div class="grid grid-cols-1 tablet:grid-cols-3 desktop:grid-cols-4 large:grid-cols-6 gap-4">
				{#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] as num}
					<NftCardMinimal>
						<div class="flex flex-col gap-3">
							{#if num % 4 === 0}
								<span class="bg-secondary text-success rounded-full px-6 py-1"> Live </span>
							{:else}
								<span class="bg-secondary text-primary rounded-full px-3 py-1">
									{randomNumber()}d {randomNumber()}h {randomNumber()}m
								</span>
							{/if}
						</div>
					</NftCardMinimal>
				{/each}
			</div>
		</div>

		<!-- Top Voted -->
		<div class="flex flex-col gap-6">
			<div class="flex justify-between">
				<h3 class="mb-0 font-bold text-[28px] leading-9  text-primary">Top upvoted drops</h3>

				<a
					class="flex justify-center items-center rounded-md border-2 border-secondary px-4 text-primary"
					href="/popular-collections"
				>
					See All
				</a>
			</div>

			<div class="grid grid-cols-1 tablet:grid-cols-3 desktop:grid-cols-4 large:grid-cols-6 gap-4">
				{#each [1, 2, 3, 4] as item}
					<NftCardMinimal>
						<div class="flex gap-8 font-light text-xs">
							<span class="bg-secondary text-primary rounded-full px-3 py-1 flex gap-2.5">
								<img src={heart} alt="favorite" class="w-4 h-4" />
								<span>8435</span>
							</span>
							<span class="bg-secondary text-primary rounded-full px-3 py-1">Sep 23, 05:00</span>
						</div>
					</NftCardMinimal>
				{/each}
			</div>
		</div>

		<!-- Fans Watching -->
		<div class="flex flex-col gap-6">
			<div class="flex justify-between">
				<div class="flex items-center gap-3">
					<h3 class="mb-0 font-bold text-[28px] leading-9  text-primary">Frens are watching</h3>
					<img src={info_active} alt="info" class="w-6 h-6" />
				</div>

				<a
					class="flex justify-center items-center rounded-md border-2 border-secondary px-4 text-primary"
					href="/popular-collections"
				>
					See All
				</a>
			</div>
			<div class="grid grid-cols-1 tablet:grid-cols-3 desktop:grid-cols-4 large:grid-cols-6 gap-4">
				{#each [1, 2, 3, 4, 5, 6] as item}
					<NftCardMinimal>
						<div class="flex gap-8 font-light text-xs">
							<span class="bg-secondary text-primary rounded-full px-3 py-1"
								>{randomNumber(400, 5233)} watchers</span
							>
						</div>
					</NftCardMinimal>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	*::-webkit-scrollbar {
		display: none;
	}
</style>

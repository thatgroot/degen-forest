<script lang="ts">
	import Carousel from '$lib/carousel/Carousel.svelte';
	import Dropdown from '$lib/dropdown/Dropdown.svelte';
	import ezu from '$lib/assets/art/ezu.png';
	import solana from '$lib/assets/svg/icons/solana.svg';
	import info_active from '$lib/assets/svg/icons/info-active.svg';
	import heart from '$lib/assets/svg/icons/heart.svg';
	import fire from '$lib/assets/art/fire.png';
	import car from '$lib/assets/art/car.png';
	import ape from '$lib/assets/art/ape.png';
	import degods from '$lib/assets/art/degods.png';
	import cup from '$lib/assets/art/cup.png';
	import mp from '$lib/assets/art/mp.png';

	import NftItem from '$lib/list/NFTItem.svelte';
	import { each } from 'svelte/internal';
	import NftCardMinimal from '$lib/cards/nft/NFTCardMinimal.svelte';

	const randomNumber = (min: number = 1, max: number = 24) => {
		return Math.floor(Math.random() * (max - min + 1) + min);
	};
</script>

<div class="flex flex-col gap-14">
	<Carousel />

	<div
		class="flex flex-col flex-wrap md:flex-row mb-6 gap-24 justify-center md:justify-start p-4 h-max"
	>
		<!-- popular collections -->
		<div class="flex flex-col gap-6">
			<div class="flex flex-col laptop:flex-row gap-3 justify-between">
				<div class="flex flex-col tablet:flex-row justify-between items-center text-primary gap-4">
					<h3 class="mb-0 font-bold text-[28px] leading-9 text-gradient">Popular Collections</h3>
					<div class="flex w-full tablet:w-fit">
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
			<div
				class="grid grid-cols-1 tablet:grid-cols-2  desktop:grid-cols-4  large:grid-cols-6 x-large:grid-cols-4 gap-4"
			>
				{#each ['Vandals', 'Degods', 'Dummies', 'Weeping', 'Froots', 'Degenerate', 'Rakkudos', 'Mischievous', 'Monquiat', 'Shadowy', 'Okay Bears', 'Infected Mob'] as item, i (i)}
					<NftItem
						title={item}
						number={i + 1}
						growth={i % 4 === 0 ? 'up' : 'down'}
						growth_value={i % 7 === 0 ? 0 : randomNumber(20, 350)}
						icon={solana}
						nft_img={ezu}
					/>
				{/each}
			</div>
		</div>

		<!-- launchpad drops -->
		<div class="flex flex-col gap-6">
			<div class="flex flex-col gap-3 tablet:flex-row justify-between">
				<div class="flex flex-col tablet:flex-row justify-between items-center gap-4">
					<h3 class="mb-0 font-bold text-[28px] leading-9 text-gradient ">Launchpad drops</h3>

					<div
						class="text-primary flex flex-row flex-wrap  gap-3  tablet:flex-nowrap tablet:rounded-full tablet:border-2 border-secondary text-sm"
					>
						<button
							class="rounded-full px-6 py-2 gradient-primary btn-secondary w-full tablet:w-max"
						>
							Next 7 days
						</button>

						<div class="relative group">
							<button class="rounded-full px-4 py-2  w-full tablet:w-max"> Comming soon</button>
							<div
								class="-z-10 w-32 absolute -left-24 top-0 bottom-0  rounded-full px-6 py-2 group-hover:gradient-primary transition-all duration-1000  group-hover:translate-x-12 group-hover:-left-12"
							/>
						</div>
						<div class="relative group">
							<button class="rounded-full px-4 py-2  w-full tablet:w-max">Live</button>
							<div
								class="-z-10 w-32 absolute -left-24 top-0 bottom-0  rounded-full px-6 py-2 group-hover:gradient-primary transition-all duration-1000  group-hover:translate-x-12 group-hover:-left-12 group-hover:w-14"
							/>
						</div>
					</div>
				</div>
				<a
					class="flex justify-center items-center rounded-md border-2 border-secondary px-6 py-2  text-primary"
					href="/popular-collections"
				>
					See All
				</a>
			</div>
			<div
				class="grid grid-cols-1  tablet:grid-cols-3  desktop:grid-cols-4 large:grid-cols-6 x-large:grid-cols-8 gap-4"
			>
				{#each ['Blocksmit Labs', 'Part of Me', 'Save Bear'] as title, i (i)}
					<NftCardMinimal {title} user="@{title.replaceAll(' ', '').toLocaleLowerCase()}">
						<div class="flex flex-col gap-3">
							{#if i === 1}
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
				<h3 class="mb-0 font-bold text-[28px] leading-9  text-gradient">Top upvoted drops</h3>

				<a
					class="flex justify-center items-center rounded-md border-2 border-secondary px-4 text-primary"
					href="/popular-collections"
				>
					See All
				</a>
			</div>

			<div
				class="grid grid-cols-1 tablet:grid-cols-3  desktop:grid-cols-4 large:grid-cols-6 x-large:grid-cols-8 gap-4"
			>
				{#each [{ title: 'Infinite Drive Car', nft: car }, { title: 'NFT Leguez', nft: fire }, { title: 'MechaFightClub', nft: ape }] as { title, nft }}
					<NftCardMinimal {nft} {title} user={title.replaceAll(' ', '').toLocaleLowerCase()}>
						<div class="flex gap-8 font-light text-xs">
							<span class="bg-secondary text-accent rounded-full px-3 py-1 flex gap-2.5">
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
					<h3 class="mb-0 font-bold text-[28px] leading-9  text-gradient">Frens are watching</h3>
					<img src={info_active} alt="info" class="w-6 h-6" />
				</div>

				<a
					class="flex justify-center items-center rounded-md border-2 border-secondary px-4 text-primary"
					href="/popular-collections"
				>
					See All
				</a>
			</div>
			<div
				class="grid grid-cols-1 tablet:grid-cols-3 desktop:grid-cols-4 large:grid-cols-6 x-large:grid-cols-8 gap-4"
			>
				{#each [{ title: 'Dragon Boms', nft: degods }, { title: 'MechaFight Club', nft: cup }, { title: 'Monkez Planet', nft: mp }] as { title, nft }}
					<NftCardMinimal {title} {nft} user={title.replaceAll(' ', '').toLocaleLowerCase()}>
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

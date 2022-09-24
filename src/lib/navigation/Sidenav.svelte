<script lang="ts">
	import Accordion from '$lib/accordion/Accordion.svelte';
	import arrow_down from '$lib/assets/svg/icons/arrow-down.svg';
	import dex from '$lib/assets/svg/icons/dex.svg';
	import marketplace from '$lib/assets/svg/icons/marketplace.svg';
	import insights from '$lib/assets/svg/icons/insights.svg';
	import launchpad from '$lib/assets/svg/icons/launchpad.svg';
	import airdrop from '$lib/assets/svg/icons/airdrop.svg';
	import staking from '$lib/assets/svg/icons/staking.svg';
	import news from '$lib/assets/svg/icons/news.svg';
	import guide_book from '$lib/assets/svg/icons/guide-book.svg';
	import support from '$lib/assets/svg/icons/support.svg';
	import ios from '$lib/assets/svg/icons/ios.svg';
	import discord from '$lib/assets/svg/icons/discord.svg';
	import tiktok from '$lib/assets/svg/icons/tiktok.svg';
	import youtube from '$lib/assets/svg/icons/youtube.svg';
	import twitter from '$lib/assets/svg/icons/twitter.svg';
	import instagram from '$lib/assets/svg/icons/instagram.svg';
	import fries_menu from '$lib/assets/svg/icons/fries-menu.svg';
	import close from '$lib/assets/svg/icons/close.svg';

	const side_nav_items: {
		title: string;
		href?: string;
		icon: string;
		childs: { title: string; href: string }[];
	}[] = [
		{
			title: 'Dex',
			href: '/dex',
			icon: dex,
			childs: []
		},
		{
			title: 'Marketplace',
			icon: marketplace,
			childs: [
				{
					title: 'Popular Collections',
					href: '/marketplace/popular-collections'
				},
				{
					title: 'Drop calendar',
					href: '/marketplace/drop-calendar'
				},
				{
					title: 'Auctions',
					href: '/marketplace/auctions'
				}
			]
		},
		{
			title: 'Insights',
			icon: insights,
			childs: [
				{
					title: 'Stats',
					href: '/insights/stats'
				},
				{
					title: 'My Watchlist',
					href: '/insights/watchlist'
				}
			]
		},
		{
			title: 'Launchpad',
			icon: launchpad,
			href: '/launchpad',
			childs: [
				// 'Apply for Launchpad', 'Launches', 'About'	//
				{
					title: 'Apply for Launchpad',
					href: '/launchpad/apply'
				},
				{
					title: 'Launches',
					href: '/launchpad/launches'
				}
			]
		},
		{ title: 'Airdrops', href: '/airdrops', icon: airdrop, childs: [] },
		{ title: 'NFT Staking', href: '/staking', icon: staking, childs: [] },

		{ title: 'News', href: '/news', icon: news, childs: [] },
		{ title: 'Intro To NFT', href: '/intro-to-nft', icon: guide_book, childs: [] },
		{ title: 'Support', href: '/support', icon: support, childs: [] }
	];

	const social_media_data: {
		title: string;
		icon: string;
		href: string;
	}[] = [
		{
			title: 'iOS App',
			icon: ios,
			href: 'https://apps.apple.com/us/app/collectible-world/id1562570008'
		},
		{
			title: 'Discord',
			icon: discord,
			href: 'https://discord.gg/collectibleworld'
		},
		{
			title: 'TikTok',
			icon: tiktok,
			href: 'https://www.tiktok.com/@collectibleworld'
		},
		{
			title: 'YouTube',
			icon: youtube,
			href: 'https://www.youtube.com/channel/UCZ5Z5YQZQZ5Z5YQZQZ5Z5YQ'
		},
		{
			title: 'Twitter',
			icon: twitter,
			href: 'https://twitter.com/collectiblew'
		},
		{
			title: 'Instagram',
			icon: instagram,
			href: 'https://www.instagram.com/collectibleworld/'
		}
	];
	let toggle: 'fixed' | 'hidden' = 'hidden';
	let toggle_icon: string = fries_menu;
</script>

<div
	class="w-full {toggle}  laptop:block left-0 right-0 top-0 bottom-0 z-[9999] bg-primary tablet:max-w-min transition-all duration-700"
>
	<div class="flex flex-col py-6 px-2 gap-6">
		<div class="flex flex-col gap-2  border-r-2 border-r-brown pr-2">
			{#each side_nav_items as { title, icon, childs, href }}
				<!-- content here -->
				{#if childs.length > 0}
					<!-- content here -->
					<div>
						<Accordion
							header={{
								title,
								show: 'both',
								size: 'full',
								postfix: arrow_down,
								prefix: icon
							}}
							{href}
						>
							<div class="flex flex-col text-secondary-light gap-2 py-3 px-1 w-max">
								{#each childs as { title, href }}
									<!-- content here -->
									<a
										{href}
										class="w-full tablet:bg-primary hover:bg-secondary text-sm px-2 py-1 rounded-md cursor-pointer"
									>
										{title}
									</a>
								{/each}
							</div>
						</Accordion>
					</div>
				{:else}
					<a
						{href}
						class="flex items-center gap-2 text-primary px-2 py-3 rounded-xl cursor-pointer"
					>
						<span class="w-4 h-4">
							<img src={icon} alt={`${title} app`} />
						</span>
						<span>{title}</span>
					</a>
				{/if}
			{/each}

			<div class="border-b-0 tablet:border-b-2 border-b-secondary my-4" />

			<div class="grid grid-cols-2 gap-y-2 text-primary">
				{#each social_media_data as { title, icon }}
					<!-- content here -->
					<button
						class="flex gap-2 items-center tablet:border-2 border-secondary px-2 py-1 text-xs"
					>
						<img src={icon} class="h-4 w-4" alt={`${icon}`} />
						<span>{title}</span>
					</button>
				{/each}
			</div>
		</div>
	</div>
	<!--  -->
</div>

<div class="fixed bottom-6 right-2 laptop:hidden  z-[999999]">
	<button
		class="flex items-center justify-center w-12 h-12 rounded-full bg-secondary"
		on:click={() => {
			toggle = toggle === 'hidden' ? 'fixed' : 'hidden';
			toggle_icon = toggle_icon === fries_menu ? close : fries_menu;
		}}
	>
		<img src={toggle_icon} alt="menu" class="w-6 h-6" />
	</button>
</div>

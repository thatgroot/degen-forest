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

	const side_nav_items: {
		title: string;
		href?: string;
		icon: string;
		childs: { title: string; href: string }[];
	}[] = [
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
					href: '/insights/my-watchlist'
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
				},
				{
					title: 'About',
					href: '/launchpad/about'
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
</script>

<div class="max-w-fit ">
	<div class="flex flex-col py-6 px-3 gap-6">
		<div class="flex flex-col gap-2  border-r-2 border-r-brown pr-6">
			<span
				class="flex items-center gap-2 text-primary px-2 py-3 rounded-xl cursor-pointer hover:bg-secondary"
			>
				<span class="w-4 h-4">
					<img src={dex} alt={'dex app'} />
				</span>
				<span>Dex</span>
			</span>

			{#each side_nav_items as { title, icon, childs, href }}
				<!-- content here -->
				{#if childs.length > 0}
					<!-- content here -->
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
						<div class="flex flex-col text-accent gap-2 py-3 px-1 w-max">
							{#each childs as { title, href }}
								<!-- content here -->
								<a
									{href}
									class="w-full bg-primary hover:bg-secondary px-2 py-1 rounded-md cursor-pointer"
								>
									{title}
								</a>
							{/each}
						</div>
					</Accordion>
				{:else}
					<span
						class="flex items-center gap-2 text-primary px-2 py-3 rounded-xl cursor-pointer hover:bg-secondary"
					>
						<span class="w-4 h-4">
							<img src={icon} alt={`${title} app`} />
						</span>
						<span>{title}</span>
					</span>
				{/if}
			{/each}

			<div class="border-b-2 border-b-secondary my-4" />

			<div class="flex flex-wrap max-w-[20rem] gap-y-2 justify-between text-white">
				{#each social_media_data as { title, icon }}
					<!-- content here -->
					<button
						class="flex justify-between items-center border-2 border-secondary px-2 py-1 min-w-[120px]"
					>
						<span>
							<img src={icon} alt={`${icon}`} />
						</span>
						{title}
					</button>
				{/each}
			</div>
		</div>
	</div>
	<!--  -->
</div>

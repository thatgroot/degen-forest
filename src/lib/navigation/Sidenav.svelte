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
		icon: string;
		childs: string[];
	}[] = [
		{
			title: 'Marketplace',
			icon: marketplace,
			childs: ['Popular Collections', 'Auction', 'Drops Calendar']
		},
		{ title: 'Insights', icon: insights, childs: ['Stats', 'My Watchlist'] },
		{ title: 'Launchpad', icon: launchpad, childs: ['Apply for Launchpad', 'Launches', 'About'] },
		{ title: 'Airdrops', icon: airdrop, childs: [] },
		{ title: 'NFT Staking', icon: staking, childs: [] },
		{ title: 'News', icon: news, childs: [] },
		{ title: 'Intro To NFT', icon: guide_book, childs: [] },
		{ title: 'Support', icon: support, childs: [] }
	];

	const social_media_data: {
		title: string;
		icon: string;
	}[] = [
		{
			title: 'iOS App',
			icon: ios
		},
		{
			title: 'Discord',
			icon: discord
		},
		{
			title: 'TikTok',
			icon: tiktok
		},
		{
			title: 'YouTube',
			icon: youtube
		},
		{
			title: 'Twitter',
			icon: twitter
		},
		{
			title: 'Instagram',
			icon: instagram
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

			{#each side_nav_items as { title, icon, childs }}
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
					>
						<div class="flex flex-col text-accent gap-2 py-3 px-1 w-max">
							{#each childs as child}
								<!-- content here -->
								<div
									class="w-full bg-primary hover:bg-secondary px-2 py-1 rounded-md cursor-pointer"
								>
									{child}
								</div>
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

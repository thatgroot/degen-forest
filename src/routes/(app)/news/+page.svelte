<script lang="ts">
	import rss from '$lib/assets/svg/icons/rss.svg';
	import play from '$lib/assets/svg/icons/play.svg';
	import polls from '$lib/assets/svg/icons/polls.svg';
	import oasis from '$lib/assets/svg/icons/oasis.svg';
	import portfolio from '$lib/assets/svg/icons/portfolio.svg';
	import profile from '$lib/assets/svg/icons/avatar.png';
	import develop from '$lib/assets/svg/icons/flask.svg';
	import region from '$lib/assets/svg/icons/flag.svg';
	import upvotes from '$lib/assets/svg/icons/upvotes.svg';
	import downvotes from '$lib/assets/svg/icons/downvotes.svg';
	import share from '$lib/assets/svg/icons/share1.svg';
	import coindesk from '$lib/assets/svg/icons/coindesk.svg';
	import Sidenav from '$lib/navigation/Sidenav.svelte';
	import bsc from '$lib/assets/svg/icons/bsc.svg';

	let cardDetails = [
		{
			image:
				'https://images.unsplash.com/photo-1634704784915-aacf363b021f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
			title: 'Cardano May Get Accepted',
			iconUp: upvotes,
			iconDown: downvotes,
			share: share,
			bsc: bsc,
			coindesk: coindesk,
			description: 'Cardano May Get Accepted at Many More Million Merchants in Brazil Crypto Events'
		},
		{
			image:
				'https://images.unsplash.com/photo-1629339942248-45d4b10c8c2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
			title: 'Cardano May Get Accepted',
			iconUp: upvotes,
			iconDown: downvotes,
			share: share,
			bsc: bsc,
			coindesk: coindesk,
			description: 'Cardano May Get Accepted at Many More Million Merchants in Brazil Crypto Events'
		},
		{
			image:
				'https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
			title: 'Cardano May Get Accepted',
			iconUp: upvotes,
			iconDown: downvotes,
			share: share,
			bsc: bsc,
			coindesk: coindesk,
			description: 'Cardano May Get Accepted at Many More Million Merchants in Brazil Crypto Events'
		},
		{
			image:
				'https://images.unsplash.com/photo-1609554496796-c345a5335ceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
			title: 'Cardano May Get Accepted',
			iconUp: upvotes,
			iconDown: downvotes,
			share: share,
			bsc: bsc,
			coindesk: coindesk,
			description: 'Cardano May Get Accepted at Many More Million Merchants in Brazil Crypto Events'
		},
		{
			image:
				'https://images.unsplash.com/photo-1634704760994-96e3ccf2ae85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
			title: 'Cardano May Get Accepted',
			iconUp: upvotes,
			iconDown: downvotes,
			share: share,
			bsc: bsc,
			coindesk: coindesk,
			description: 'Cardano May Get Accepted at Many More Million Merchants in Brazil Crypto Events'
		}
	];
</script>

<div
	class="flex flex-col flex-wrap md:flex-row mb-6 gap-24 justify-center md:justify-start p-4 h-max"
>
	<!-- popular collections -->
	<div class="flex flex-col gap-6 text-primary">
		<div class="flex flex-col gap-14">
			<h1 class="gradient-secondary text-[2rem] font-bold  font-mono w-fit">
				Latest News
			</h1>
			<div
				class="grid grid-cols-1 tablet:grid-cols-2 laptop-sm:grid-cols-3  desktop:grid-cols-4  large:grid-cols-6 x-large:grid-cols-4 gap-x-4 gap-y-14"
			>
				{#each cardDetails as { iconUp, title, iconDown, share, bsc, coindesk, description, image }}
					<div class="bg-secondary   rounded-md">
						<div class="flex justify-center items-center leading-none">
							<img
								src={image}
								alt="pic"
								class="h-40 w-56 rounded-md shadow-2xl  transform -translate-y-10 hover:-translate-y-4 transition duration-700"
							/>
						</div>
						<div class="p-3 mt-0 transform -translate-y-6">
							<p class="block mb-1 font-extralight">{title}</p>
							<p class="text-xs tracking-tighter text-gray-600">
								{description}
							</p>
						</div>
						<div class="flex justify-between items-center p-2 transform -translate-y-6">
							<div class="flex">
								<img src={iconUp} alt="" class="rounded-full h-4 pr-1" />
								<span class="text-sm pr-2">100</span>
								<img src={iconDown} alt="" class="rounded-full h-4 pr-1" />
								<span class="text-sm pr-1">200</span>
							</div>
							<div class="flex">
								<img src={coindesk} alt="" class="rounded-full h-4 pr-4" />

								<img src={bsc} alt="" class="rounded-full h-4 pr-1" />
							</div>
							<div class="flex transform">
								<img class="h-4 mouse-pointer" alt="" src={share} />
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
		<div class="flex flex-col gap-14">
			<h1 class="gradient-secondary text-[2rem] font-bold  font-mono w-fit">Trending News</h1>

			<div
				class="grid grid-cols-1 tablet:grid-cols-2 laptop-sm:grid-cols-3  desktop:grid-cols-4  large:grid-cols-6 x-large:grid-cols-4 gap-x-4 gap-y-14"
			>
				{#each cardDetails as { iconUp, title, iconDown, share, bsc, coindesk, description, image }}
					<div class="bg-secondary rounded-md">
						<div class="flex justify-center items-center leading-none">
							<img
								src={image}
								alt="pic"
								class="h-40 w-56 rounded-md shadow-2xl  transform -translate-y-10 hover:-translate-y-4 transition duration-700"
							/>
						</div>
						<div class="p-3 mt-0 transform -translate-y-6">
							<p class="block mb-1 font-extralight">{title}</p>
							<p class="text-xs tracking-tighter text-gray-600">
								{description}
							</p>
						</div>
						<div class="flex justify-between items-center p-2 transform -translate-y-6">
							<div class="flex">
								<img src={iconUp} alt="" class="rounded-full h-4 pr-1" />
								<span class="text-sm pr-2">100</span>
								<img src={iconDown} alt="" class="rounded-full h-4 pr-1" />
								<span class="text-sm pr-1">200</span>
							</div>
							<div class="flex">
								<img src={coindesk} alt="" class="rounded-full h-4 pr-4" />

								<img src={bsc} alt="" class="rounded-full h-4 pr-1" />
							</div>
							<div class="flex transform">
								<img class="h-4 mouse-pointer" alt="" src={share} />
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
		<div class="flex flex-col gap-14">
			<h1 class="gradient-secondary text-[2rem] font-bold  font-mono w-fit">Frens are talking</h1>
			<div
				class="grid grid-cols-1 tablet:grid-cols-2 laptop-sm:grid-cols-3  desktop:grid-cols-4  large:grid-cols-6 x-large:grid-cols-4 gap-x-4 gap-y-14"
			>
				{#each cardDetails as { iconUp, title, iconDown, share, bsc, coindesk, description, image }}
					<div class="bg-secondary  rounded-md">
						<div class="flex justify-center items-center leading-none">
							<img
								src={image}
								alt="pic"
								class="h-40 w-56 rounded-md shadow-2xl  transform -translate-y-10 hover:-translate-y-4 transition duration-700"
							/>
						</div>
						<div class="p-3 mt-0 transform -translate-y-6">
							<p class="block mb-1 font-extralight">{title}</p>
							<p class="text-xs tracking-tighter text-gray-600">
								{description}
							</p>
						</div>
						<div class="flex justify-between items-center p-2 transform -translate-y-6">
							<div class="flex">
								<img src={iconUp} alt="" class="rounded-full h-4 pr-1" />
								<span class="text-sm pr-2">100</span>
								<img src={iconDown} alt="" class="rounded-full h-4 pr-1" />
								<span class="text-sm pr-1">200</span>
							</div>
							<div class="flex">
								<img src={coindesk} alt="" class="rounded-full h-4 pr-4" />
								<img src={bsc} alt="" class="rounded-full h-4 pr-1" />
							</div>
							<div class="flex transform">
								<img class="h-4 mouse-pointer" alt="" src={share} />
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

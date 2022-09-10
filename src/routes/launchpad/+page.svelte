<script>
	import ConnectWallet from '$lib/button/ConnectWallet.svelte';
	import Carousel from '$lib/carousel/Carousel.svelte';
	import rugged from '$lib/assets/art/rugged.png';

	import Search from '$lib/form/search.svelte';

	import TabBar from '$lib/tab/TabBar.svelte';
	import Tab from '$lib/tab/Tab.svelte';
	let active = 'live';
	const nfts = [
		{
			name: 'Rad Trip Bunny',
			artist: 'Kikiverse',
			image:
				'https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://bafkreiapq6oq6bnfi6kvwg4fzzo7objbd64kxhnz6totbrmxitcije7zg4.ipfs.dweb.link/',
			items: 1000,
			price: 0.1,
			platform: 'solana',
			coin: 'sol',
			time_left: '1d 2h 30m'
		},
		{
			name: 'Rad Trip Bunny',
			artist: 'Kikiverse',
			image:
				'https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://bafkreiapq6oq6bnfi6kvwg4fzzo7objbd64kxhnz6totbrmxitcije7zg4.ipfs.dweb.link/',
			items: 1000,
			price: 0.1,
			platform: 'solana',
			coin: 'sol',
			time_left: '1d 2h 30m'
		},
		{
			name: 'Rad Trip Bunny',
			artist: 'Kikiverse',
			image:
				'https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://bafkreiapq6oq6bnfi6kvwg4fzzo7objbd64kxhnz6totbrmxitcije7zg4.ipfs.dweb.link/',
			items: 1000,
			price: 0.1,
			platform: 'solana',
			time_left: '1d 2h 30m'
		},
		{
			name: 'Rad Trip Bunny',
			artist: 'Kikiverse',
			image:
				'https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://bafkreiapq6oq6bnfi6kvwg4fzzo7objbd64kxhnz6totbrmxitcije7zg4.ipfs.dweb.link/',
			items: 1000,
			price: 0.1,
			time_left: '1d 2h 30m',
			platform: 'solana'
		},
		{
			name: 'Rad Trip Bunny',
			artist: 'Kikiverse',
			image:
				'https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://bafkreiapq6oq6bnfi6kvwg4fzzo7objbd64kxhnz6totbrmxitcije7zg4.ipfs.dweb.link/',
			items: 1000,
			price: 0.1,
			time_left: '1d 2h 30m',
			platform: 'solana',
			coin: 'sol'
		},
		{
			name: 'Rad Trip Bunny',
			artist: 'Kikiverse',
			image:
				'https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://bafkreiapq6oq6bnfi6kvwg4fzzo7objbd64kxhnz6totbrmxitcije7zg4.ipfs.dweb.link/',
			items: 1000,
			price: 0.1,
			platform: 'solana',
			time_left: 'SOLD OUT',
			coin: 'sol'
		},
		{
			name: 'Rad Trip Bunny',
			artist: 'Kikiverse',
			image:
				'https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://bafkreiapq6oq6bnfi6kvwg4fzzo7objbd64kxhnz6totbrmxitcije7zg4.ipfs.dweb.link/',
			items: 1000,
			price: 0.1,
			time_left: '1d 2h 30m',
			platform: 'solana',
			coin: 'sol'
		},
		{
			name: 'Rad Trip Bunny',
			artist: 'Kikiverse',
			image:
				'https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://bafkreiapq6oq6bnfi6kvwg4fzzo7objbd64kxhnz6totbrmxitcije7zg4.ipfs.dweb.link/',
			items: 1000,
			price: 0.1,
			time_left: 'SOLD OUT',
			platform: 'solana',
			coin: 'sol'
		},
		{
			name: 'Rad Trip Bunny',
			artist: 'Kikiverse',
			image:
				'https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://bafkreiapq6oq6bnfi6kvwg4fzzo7objbd64kxhnz6totbrmxitcije7zg4.ipfs.dweb.link/',
			items: 1000,
			price: 0.1,
			time_left: 'SOLD OUT',

			platform: 'solana',
			coin: 'sol'
		},
		{
			name: 'Rad Trip Bunny',
			artist: 'Kikiverse',
			image:
				'https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://bafkreiapq6oq6bnfi6kvwg4fzzo7objbd64kxhnz6totbrmxitcije7zg4.ipfs.dweb.link/',
			items: 1000,
			price: 0.1,
			time_left: '1d 2h 30m',
			platform: 'solana',
			coin: 'sol'
		},
		{
			name: 'Rad Trip Bunny',
			artist: 'Kikiverse',
			image:
				'https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://bafkreiapq6oq6bnfi6kvwg4fzzo7objbd64kxhnz6totbrmxitcije7zg4.ipfs.dweb.link/',
			items: 1000,
			price: 0.1,
			time_left: 'SOLD OUT',

			platform: 'solana',
			coin: 'sol'
		},
		{
			name: 'Rad Trip Bunny',
			artist: 'Kikiverse',
			image:
				'https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://bafkreiapq6oq6bnfi6kvwg4fzzo7objbd64kxhnz6totbrmxitcije7zg4.ipfs.dweb.link/',
			items: 1000,
			price: 0.1,
			time_left: 'SOLD OUT',

			platform: 'solana',
			coin: 'sol'
		}
	];
</script>

<div class="flex flex-col gap-6">
	<button class="btn-accent py-2 px-3"> Featured Launch </button>
	<div class="flex flex-col tablet:flex-row justify-around gap-12 ">
		<div class="flex-1 flex flex-col gap-6">
			<h2 class="gradient-text text-4xl font-bold">Rugged Revenants Gen</h2>
			<p class="text-base text-accent leading-8 pr-16">
				The first ever Web 3 Reforestation Competition - Project Galaxy vs. Magic Eden vs. Vera!
				Three epic projects competing to see who can activate the most community members to grow a
				forest in the real world! Whichever community mints the most NFTs wins the competition and
				will be rewarded! Additionally, a real tree will be planted on behalf of EACH AND EVERY NFT
				minted by the winning community. Let’s grow the Magic Eden Forest!! Free mint, real impact!
				Let’s grow the Magic Eden Forest!!
			</p>
		</div>
		<div class="flex-1">
			<div
				style="background-image: url('{rugged}')"
				class="bg-center bg-cover bg-no-repeat  desktop:h-[560px]  rounded-tr-[1.25rem] rounded-br-[1.25rem]"
			/>
		</div>
	</div>
</div>

<div class="mt-10 px-4 w-full">
	<div class="flex px-4 py-2">
		<TabBar>
			<Tab
				onclick={() => {
					active = 'live';
				}}
				title="Live"
				active={active === 'live'}
			/>
			<Tab
				onclick={() => {
					active = 'claims';
				}}
				active={active === 'claims'}
				title="Claims"
			/>
		</TabBar>
	</div>
	<div class="mt-4 grid gap-3 grid-cols-2 tablet:grid-cols-3 desktop:grid-cols-4 large:grid-cols-4">
		<div class="p-0 text-center rounded-2xl overflow-hidden border-2 border-secondary">
			<a href="/auction/the_lost_kiki_"
				><div class="rounded-2xl">
					<!-- svelte-ignore a11y-media-has-caption -->
					<video playsinline loop class="max-w-full "
						><source
							src="https://bafybeifi7p6xtgnpie3kxs4qv4kr5mzhzlr3ymjjqhzq7gulg374t6n6si.ipfs.nftstorage.link/thelostkiki.mp4?ext=mp4"
						/></video
					>
				</div>
				<div class="p-0  col-12 text-primary">
					<div class="px-4 pt-3 pb-3">
						<h5 class="mb-2 text-sm font-bold text-primary" title="The Lost Kiki">The Lost Kiki</h5>
						<div
							class="text-xs uppercase text-secondary flex  items-center justify-center gap-1"
							title="Live"
						>
							Live
						</div>
					</div>
					<div class="flex justify-between rounded-md px-2 py-2 bg-transparent m-2">
						<div
							class="flex  justify-between gap-3 text-left border-2 border-secondary px-4 py-2 rounded-md"
						>
							<span class="uppercase text-xs">items</span>
							<span class="text-xs font-bold flex items-center">1000</span>
						</div>
						<div
							class="flex  justify-between gap-3 text-left border-2 border-secondary px-4 py-2 rounded-md"
						>
							<span class="uppercase text-xs">price</span>
							<span class="text-xs font-bold flex items-center">1.00 SOL</span>
						</div>
					</div>
				</div>
			</a>
		</div>
	</div>

	<div class="flex flex-col gap-4">
		<h1 class="mt-8  text-start text-primary text-3xl font-bold">Upcoming</h1>

		<div class="grid gap-3 grid-cols-2 tablet:grid-cols-3 desktop:grid-cols-4 large:grid-cols-4">
			{#each nfts as { name, image, items, price, time_left }}
				<div class="p-0 text-center rounded-2xl overflow-hidden border-2 border-secondary">
					<a href="/auction/the_lost_kiki_"
						><div class="rounded-2xl">
							<!-- svelte-ignore a11y-media-has-caption -->
							<img src={image} class="max-w-full " alt="..." />
						</div>
						<div class="p-0  col-12 text-primary">
							<div class="px-4 pt-3 pb-3">
								<h5 class="mb-2 text-sm font-bold text-primary" title={name}>
									{name}
								</h5>
								<div
									class="text-xs uppercase text-secondary flex  items-center justify-center gap-1"
								>
									{time_left}
								</div>
							</div>
							<div class="flex justify-between rounded-md px-2 py-2 bg-transparent m-2">
								<div
									class="flex  justify-between gap-3 text-left border-2 border-secondary px-4 py-2 rounded-md"
								>
									<span class="uppercase text-xs">items</span>
									<span class="text-xs font-bold flex items-center">{items}</span>
								</div>
								<div
									class="flex  justify-between gap-3 text-left border-2 border-secondary px-4 py-2 rounded-md"
								>
									<span class="uppercase text-xs">price</span>
									<span class="text-xs font-bold flex items-center">{price} SOL</span>
								</div>
							</div>
						</div>
					</a>
				</div>
			{/each}
		</div>
	</div>
</div>

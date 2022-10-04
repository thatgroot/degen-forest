<script lang="ts">
	import Tab from '$lib/tab/Tab.svelte';
	import TabBar from '$lib/tab/TabBar.svelte';
	import NftFilters from '$lib/filters/NFTFilters.svelte';
	import cumulative_unique_owners from '$lib/assets/svg/graphics/cumulative-unique-owners.svg';
	import daily_mean_price from '$lib/assets/svg/graphics/daily-mean-price.svg';
	import daily_median_price from '$lib/assets/svg/graphics/daily-median-price.svg';
	import daily_nft_mints from '$lib/assets/svg/graphics/daily-nft-mints.svg';
	import marketplace_volume from '$lib/assets/svg/graphics/marketplace-volume.svg';
	import marketplace_volume_sales from '$lib/assets/svg/graphics/marketplace-volumes-sales.svg';
	import price_history from '$lib/assets/svg/graphics/price-history.svg';
	import unique_owners from '$lib/assets/svg/graphics/unique-owners.svg';
	import twitter from '$lib/assets/svg/icons/twitter.svg';
	import info from '$lib/assets/svg/icons/info.svg';
	import Dropdown from '$lib/dropdown/Dropdown.svelte';

	const toggle = () => {
		const dropdown = document.querySelector('#nft-filters');
		dropdown?.classList.toggle('hidden');
	};

	const toggle_accordion = () => {
		const dropdown = document.querySelector('#search-accordion');
		dropdown?.classList.toggle('hidden');
	};
	const collections = [
		{
			name: 'Degenerate Eggs',
			image:
				'https://img-cdn.magiceden.dev/rs:fill:32:32:0:0/plain/https://bafybeigjqyvd6mrjpqficz3hygcpttmbrlcvkakartrsmqtdfds5nfyjga.ipfs.nftstorage.link/',
			volume_total: '1.1M',
			volume_24h: '1.3K',
			volume_24h_percent: '3.51%',
			sales: '30',
			floor_price: '64.00',
			owners: '5.4K',
			total_supply: '10K'
		},
		{
			name: 'Ordinem - The Order',
			image:
				'https://img-cdn.magiceden.dev/rs:fill:32:32:0:0/plain/https://pbs.twimg.com/profile_images/1568009103208751104/nZ5VtsX0_400x400.jpg',
			volume_total: '3.4K',
			volume_24h: '1.3K',
			volume_24h_percent: '676.30%',
			sales: '663',
			floor_price: '2.49',
			owners: '787',
			total_supply: '2.2K'
		},
		{
			name: 'Shadowy Super Coder DAO',
			image:
				'https://img-cdn.magiceden.dev/rs:fill:32:32:0:0/plain/https://img-cdn.magiceden.dev/plain/https://bafybeibkdy5jstct2cctqga3wnz5jczxnu652jom6k2haxbx7wz6psehsq.ipfs.dweb.link',
			volume_total: '403.6K',
			volume_24h: '1.4K',
			volume_24h_percent: '421.82%',
			sales: '22',
			floor_price: '65.00',
			owners: '201',
			total_supply: '10K'
		},
		{
			name: 'GGSG: Galactic Geckos',
			volume_total: '407.8K',
			volume_24h: '1.5K',
			volume_24h_percent: '65.53%',
			sales: '56',
			floor_price: '23.00',
			owners: '3.2K',
			total_supply: '10K'
		},
		{
			name: 'Liberty Square: The Sinister Squirrel Syndicate',
			volume_total: '46.4K',
			volume_24h: '1.5K',
			volume_24h_percent: '254.75%',
			sales: '269',
			floor_price: '5.95',
			owners: '7.2K',
			total_supply: '10K'
		},
		{
			name: 'shremps',
			volume_total: '38.7K',
			volume_24h: '1.6K',
			volume_24h_percent: '166.07%',
			sales: '357',
			floor_price: '4.30',
			owners: '2.1K',
			total_supply: '5K'
		},
		{
			name: 'Okay Bears',
			volume_total: '2M',
			volume_24h: '1.8K',
			volume_24h_percent: '3.51%',
			sales: '30',
			floor_price: '64.00',
			owners: '5.4K',
			total_supply: '10K'
		},
		{
			name: 'Jikan Studios',
			volume_total: '80.2K',
			volume_24h: '2.1K',
			volume_24h_percent: '23.17%',
			sales: '319',
			floor_price: '6.37',
			owners: '8K',
			total_supply: '8.9K'
		},
		{
			name: 'Primates',
			volume_total: '367.3K',
			volume_24h: '2.2K',
			volume_24h_percent: '3.20%',
			sales: '121',
			floor_price: '15.99',
			owners: '4.8K',
			total_supply: '10K'
		},
		{
			name: 'CETS ON CRECK',
			volume_total: '396.1K',
			volume_24h: '2.3K',
			volume_24h_percent: '7.21%',
			sales: '53',
			floor_price: '41.99',
			owners: '4.1K',
			total_supply: '7K'
		},
		{
			name: 'Blocksmith Labs',
			volume_total: '293.3K',
			volume_24h: '3.6K',
			volume_24h_percent: '122.86%',
			sales: '35',
			floor_price: '105.00',
			owners: '2.6K',
			total_supply: '4.4K'
		},
		{
			name: 'Acid Monkeys',
			volume_total: '31.6K',
			volume_24h: '3.9K',
			volume_24h_percent: '36.20%',
			sales: '701',
			floor_price: '5.70',
			owners: '2.4K',
			total_supply: '5K'
		},
		{
			name: 'Vandals',
			volume_total: '127K',
			volume_24h: '4.7K',
			volume_24h_percent: '193.92%',
			sales: '256',
			floor_price: '17.40',
			owners: '4.4K',
			total_supply: '10K'
		},
		{
			name: 'DeGods',
			volume_total: '1.1M',
			volume_24h: '11K',
			volume_24h_percent: '17.67%',
			sales: '22',
			floor_price: '450.00',
			owners: '4.4K',
			total_supply: '10K'
		},
		{
			name: 'Satori',
			volume_total: '14.5K',
			volume_24h: '4.7K',
			volume_24h_percent: '2.64',
			sales: ' 1.1K',
			floor_price: '3.00',
			owners: '1.1K',
			total_supply: '3.3K'
		},
		{
			name: 'The 8-Bit Collection',
			volume_total: '1.1M',
			volume_24h: '11K',
			volume_24h_percent: '17.67%',
			sales: '22',
			floor_price: '450.00',
			owners: '4.4K',
			total_supply: '10K'
		}
	];

	const top_nfts = [
		{
			collection: 'Critters Cult',
			floor_price: 16.8,
			volume_1d: 9441,
			volume_1d_percent: -26.42,
			buyers_1d: 357,
			sellers_1d: 404,
			market_cap: '$3.2M',
			smart_money_1d: 100,
			floor_price_1d: '3.99%',
			wash_trading: 7
		},
		{
			collection: 'Clever Arsens Nation',
			floor_price: 5,
			volume_1d: 7366,
			volume_1d_percent: -58.66,
			buyers_1d: 0,
			sellers_1d: 0,
			market_cap: '$TBU',
			smart_money_1d: -7.59,
			floor_price_1d: 0,
			wash_trading: 0
		},
		{
			collection: 'The 8-Bit Collection',
			floor_price: 450,
			volume_1d: 11000,
			volume_1d_percent: 17.67,
			buyers_1d: 22,
			sellers_1d: 22,
			market_cap: '$3.2M',
			smart_money_1d: 90,
			floor_price_1d: '3.99%',
			wash_trading: 7
		},
		{
			collection: 'DeGods',
			floor_price: 450,
			volume_1d: 11000,
			volume_1d_percent: 17.67,
			buyers_1d: 22,
			sellers_1d: 22,
			market_cap: '$3.2M',
			smart_money_1d: -70,
			floor_price_1d: '3.99%',
			wash_trading: 7
		},
		{
			collection: 'Vandals',
			floor_price: 17.4,
			volume_1d: 4700,
			volume_1d_percent: 193.92,
			buyers_1d: 256,
			sellers_1d: 256,
			market_cap: '$1.1M',
			smart_money_1d: 100,
			floor_price_1d: '3.99%',
			wash_trading: 7
		}
	];

	const smart_minting = [
		{
			collection: 'Sachi',
			floor_price: 1.6,
			mint_price: 1.5,
			mint_vol: '9,494.90',
			minters: '2,650',
			smart_minted: 20,
			total_minted: '9,200',
			last_mint: '43m ago'
		},
		{
			collection: 'The 8-Bit Collection',
			floor_price: 450,
			mint_price: 450,
			mint_vol: '9,494.90',
			minters: '2,650',
			smart_minted: -50,
			total_minted: '9,200',
			last_mint: '43m ago'
		},
		{
			collection: 'DeGods',
			floor_price: 450,
			mint_price: 450,
			mint_vol: '9,494.90',
			minters: '2,650',
			smart_minted: 70,
			total_minted: '9,200',
			last_mint: '43m ago'
		},
		{
			collection: 'Vandals',
			floor_price: 17.4,
			mint_price: 17.4,
			mint_vol: '9,494.90',
			minters: '2,650',
			smart_minted: -36,
			total_minted: '9,200',
			last_mint: '43m ago'
		},
		{
			collection: 'Satori',
			floor_price: 3,
			mint_price: 3,
			mint_vol: '9,494.90',
			minters: '2,650',
			smart_minted: 80,
			total_minted: '9,200',
			last_mint: '43m ago'
		}
	];

	const checkForNegativeSign = (value: string | number) => {
		return value.toString().includes('-') ? true : false;
	};
	let active = 'top';
</script>

<svelte:head>
	<title>Popular Collections</title>
</svelte:head>
<div class="flex flex-col gap-6">
	<div class="flex flex-col justify-start gap-3">
		<h1 class="text-primary text-2xl">All NFTs</h1>

		<div class="grid grid-cols-1 tablet:grid-cols-2 laptop-sm:grid-cols-3 laptop:grid-cols-4 gap-3">
			{#each ['Smart Money Inflow', 'Top Social Buying', 'Top Movers', 'Smart Money Outflow'] as nft}
				<div class="flex w-full flex-col gap-4  px-6 py-4  bg-secondary  rounded-lg">
					<div class="flex justify-between items-center gap-8 text-primary">
						<span class="text-lg">{nft}</span>
						<div class="flex gap-3">
							<span>1D</span>
							<span class="text-secondary-light">1W</span>
						</div>
					</div>
					{#each [1, 2, 3, 4] as item}
						<div class="flex flex-col gap-3 text-primary w-full">
							<div class="flex gap-3 w-full">
								<div>
									<img
										src="https://www.hellomoon.io/_next/image?url=https%3A%2F%2Fimages.hellomoon.io%2Fnfts%2F60%2Fsodead.webp&w=128&q=75"
										alt=""
										class="w-10 h-10 rounded-full"
									/>
								</div>
								<div class="flex flex-col gap-2">
									<span class="text-sm"> SoDead </span>
									<div class="flex justify-between gap-6  text-secondary-light">
										<div class="flex flex-col gap-2 justify-between ">
											<span class="text-xs">Floor Price</span>
											<span class="text-xxs">38.00 ◎ <span class="text-success">-10.59%</span></span
											>
										</div>
										<div class="flex flex-col gap-2 justify-between">
											<span class="text-xs">1D Volume</span>
											<span class="text-xxs">3,311.28 ◎</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					{/each}
				</div>
			{/each}
		</div>
	</div>

	<div class="flex flex-col gap-4 w-full">
		<div class="flex px-4 py-2">
			<TabBar>
				<Tab
					title="Top NFT Projects"
					onclick={() => {
						active = 'top';
					}}
					active={active === 'top'}
				/>
				<Tab
					title="Smart Minting"
					onclick={() => {
						active = 'smart-minting';
					}}
					active={active === 'smart-minting'}
				/>
				<Tab
					title="NFT Ecosystem Analysis"
					onclick={() => {
						active = 'ecosystem-analysis';
					}}
					active={active === 'ecosystem-analysis'}
				/>
			</TabBar>
		</div>
		<NftFilters />
	</div>
</div>

<div class="overflow-x-auto relative my-4 px-2 rounded-lg  border-2 border-secondary">
	{#if active === 'top'}
		<table class="w-full text-primary text-xs">
			<thead class="text-xs border-b-2 border-secondary">
				<tr class="text-primary">
					<th class="p-3 text-start">#</th>
					<th class="p-3 text-start">Collection</th>
					<th class="p-3 text-start">Floor Price</th>
					<th class="p-3 text-start">Volume 1D</th>
					<th class="p-3 text-start">Δ Volume 1D</th>
					<th class="p-3 text-start">Buyers 1D</th>
					<th class="p-3 text-start">Sellers 1D</th>
					<th class="p-3 text-start">Market Cap</th>
					<th class="p-3 text-start">Smart Money 1D</th>
					<th class="p-3 text-start">Δ Floor Price 1D</th>
					<th class="p-3 text-start">Wash Trading</th>
				</tr>
			</thead>
			<tbody>
				{#each top_nfts as { collection, floor_price, volume_1d, volume_1d_percent, buyers_1d, sellers_1d, market_cap, floor_price_1d, smart_money_1d, wash_trading }, i (i)}
					<tr class={` ${i % 2 == 0 ? '' : 'bg-secondary r'} rounded-sm`}>
						<td class="p-3 text-start">{i}</td>
						<td class="p-3 text-start"> {collection} </td>
						<td class="p-3 text-start"> {floor_price} </td>
						<td class="p-3 text-start"> {volume_1d} </td>
						<td
							class="p-3 text-start {checkForNegativeSign(volume_1d_percent)
								? 'text-danger'
								: 'text-success'}"
						>
							{volume_1d_percent}
						</td>
						<td class="p-3 text-start ">
							{buyers_1d}
						</td>
						<td class="p-3 text-start"> {sellers_1d} </td>
						<td class="p-3 text-start"> {market_cap} </td>
						<td class="p-3 text-start">
							<div class="w-full bg-primary rounded-full h-2.5 mb-4  ">
								<div
									class="h-2.5 rounded-full {checkForNegativeSign(smart_money_1d)
										? 'bg-danger'
										: 'bg-success '} "
									style="width: {Math.abs(smart_money_1d)}%"
								/>
							</div>
						</td>
						<td
							class="p-3 text-start {checkForNegativeSign(floor_price_1d)
								? 'text-danger'
								: 'text-success'}"
						>
							{floor_price_1d}
						</td>
						<td class="p-3 text-start"> {wash_trading} </td>
					</tr>
				{/each}
			</tbody>
		</table>
	{:else if active === 'ecosystem-analysis'}
		<div class="grid grid-cols-1  laptop-sm:grid-cols-2 gap-4 p-2">
			{#each [{ title: 'Marketplace Volume', graph: marketplace_volume }, { title: 'Marketplace Volume (Sales)', graph: marketplace_volume_sales }, { title: 'Daily NFT Mints', graph: daily_nft_mints }, { title: 'Unique Owners ( > 1NFT)', graph: unique_owners }, { title: 'Cumulative Unique Owners', graph: cumulative_unique_owners }, { title: 'Daily Mean Price(SOL)', graph: daily_mean_price }, { title: 'Daily Median Price(SOL)', graph: daily_median_price }, { title: 'Price History', graph: price_history }] as { title, graph }, i (i)}
				<div class="flex flex-col gap-3 text-primary w-full">
					<div class="flex justify-between">
						<span class="text-lg">{title}</span>
						<div class="flex gap-3 items-center">
							<img src={info} alt="info" class="w-5 h-5" />
							<div class="p-2 rounded-lg bg-secondary-light cursor-pointer">
								<img src={twitter} alt="twitter" class="w-6 h-6" />
							</div>
							<div class="text-xs">
								<Dropdown id="volume_{i}" border="secondary" items={['1D', '1W', '1M', 'ALL']} />
							</div>
						</div>
					</div>
					<div class="flex gap-x-6 w-full bg-secondary rounded-xl">
						<div class="p-4 h-full flex w-full justify-center items-center">
							<img src={graph} alt={title} class="w-fit" />
						</div>
						<div class="flex flex-col w-fit bg-secondary-light">
							{#each [{ name: 'ME_V2', volume: 24.09, label: 'Total' }, { name: 'CandyMachi...', volume: 1.09, label: 'Total' }, { name: 'Metaplex A...', volume: 295.771, label: 'Total' }, { name: 'SolanArt', volume: 69.78, label: 'Total' }, { name: 'Other', volume: 40.833, label: 'Total' }] as { name, volume, label }}
								<div
									class="flex flex-col justify-center gap-1 p-2 rounded-lg  my-2 text-xs items-center"
								>
									<span>{name}</span>
									<span class="text-success">{volume}</span>
									<span class="text-secondary-light">{label}</span>
								</div>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>
	{:else}
		<table class="w-full text-primary text-xs">
			<thead class="text-xs border-b-2 border-secondary">
				<tr class="text-primary">
					<th class="p-3 text-start">Collection </th>
					<th class="p-3 text-start">Volume Total</th>
					<th class="p-3 text-start">24h Volume</th>
					<th class="p-3 text-start">24h % Volume </th>
					<th class="p-3 text-start">Sales</th>
					<th class="p-3 text-start">Floor Price</th>
					<th class="p-3 text-start">Owners </th>
					<th class="p-3 text-start">Total Supply</th>
				</tr>
			</thead>

			<tbody>
				{#each smart_minting as { collection, floor_price, mint_price, mint_vol, minters, smart_minted, total_minted, last_mint }, i (i)}
					<tr class="text-start  border-b-2 border-secondary">
						<td class="p-3 text-start">
							<img
								class="h-12 rounded-full"
								src={'https://img-cdn.magiceden.dev/rs:fill:32:32:0:0/plain/https://dl.airtable.com/.attachmentThumbnails/7bf792aeb747bc42679d845ed24fe6fe/fce75af7'}
								alt="..."
							/>
						</td>
						<td class="p-3 text-start">{collection}</td>
						<td class="p-3 text-start">{floor_price}</td>
						<td class="p-3 text-start">{mint_price}</td>
						<td class="p-3 text-start">{mint_vol}</td>
						<td class="p-3 text-start">{minters}</td>
						<td class="p-3 text-start">
							<div class="w-full bg-primary rounded-full h-2.5 mb-4  ">
								<div
									class="h-2.5 rounded-full {checkForNegativeSign(smart_minted)
										? 'bg-danger'
										: 'bg-success'} "
									style="width: {Math.abs(smart_minted)}%"
								/>
							</div>
						</td>

						<td class="p-3 text-start">{total_minted}</td>
						<td class="p-3 text-start">{last_mint}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	{/if}
</div>

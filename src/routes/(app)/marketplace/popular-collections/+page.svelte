<script lang="ts">
	import NftFilters from '$lib/filters/NFTFilters.svelte';

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
</script>

<svelte:head>
	<title>Popular Collections</title>
</svelte:head>
<!-- compo -->
<NftFilters />

<div class="overflow-x-auto relative my-4 px-2 rounded-lg  border-2 border-secondary">
	<table class="w-full text-primary">
		<thead class="text-xs border-b-2 border-secondary">
			<tr class="text-primary">
				<th class="py-3 px-6 text-start">Collection </th>
				<th class="py-3 px-6 text-start">Volume Total</th>
				<th class="py-3 px-6 text-start">24h Volume</th>
				<th class="py-3 px-6 text-start">24h % Volume </th>
				<th class="py-3 px-6 text-start">Sales</th>
				<th class="py-3 px-6 text-start">Floor Price</th>
				<th class="py-3 px-6 text-start">Owners </th>
				<th class="py-3 px-6 text-start">Total Supply</th>
			</tr>
		</thead>

		<tbody>
			{#each collections as { image, name, volume_total, volume_24h, volume_24h_percent, sales, floor_price, owners, total_supply }, i (i)}
				<tr class="text-start  border-b-2 border-secondary">
					<td class="py-4 px-6  text-start">
						<a href="/marketplace/collection">
							<img
								class="h-12 rounded-full"
								src={image ??
									'https://img-cdn.magiceden.dev/rs:fill:32:32:0:0/plain/https://dl.airtable.com/.attachmentThumbnails/7bf792aeb747bc42679d845ed24fe6fe/fce75af7'}
								alt="..."
							/></a
						>
					</td>
					<td class="py-4 px-6 font-medium text-start">
						<a href="/marketplace/collection">
							{i}
							{name}
						</a>
					</td>
					<td class="py-4 px-6  text-start">{volume_total}</td>
					<td class="py-4 px-6  text-start">{volume_24h}</td>
					<td class="py-4 px-6  text-start">{volume_24h_percent}</td>
					<td class="py-4 px-6  text-start">{sales}</td>
					<td class="py-4 px-6  text-start">{floor_price}</td>
					<td class="py-4 px-6  text-start">{owners}</td>
					<td class="py-4 px-6  text-start">{total_supply}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<script lang="ts">
	import Dropdown from '$lib/dropdown/Dropdown.svelte';
	import Input from '$lib/form/Input.svelte';
	import Search from '$lib/form/search.svelte';

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
			floor_price: '64.00',
			volume: '1.1M',
			volume_precents: '3.51%',
			floor_precents: '3.51%',
			avg_price_percents: '64.00'
		},
		{
			name: 'Ordinem - The Order',
			floor_price: '2.49',
			volume: '3.4K',
			volume_precents: '676.30%',
			floor_precents: '3.51%',
			avg_price_percents: '64.00'
		},
		{
			name: 'Shadowy Super Coder DAO',
			floor_price: '65.00',
			volume: '403.6K',
			volume_precents: '421.82%',
			floor_precents: '3.51%',
			avg_price_percents: '64.00'
		},
		{
			name: 'GGSG: Galactic Geckos',
			floor_price: '23.00',
			volume: '407.8K',
			volume_precents: '65.53%',
			floor_precents: '3.51%',
			avg_price_percents: '64.00'
		},
		{
			name: 'The 8th',
			floor_price: '0.00',
			volume: '0.0',
			volume_precents: '0.00%',
			floor_precents: '3.51%',
			avg_price_percents: '64.00'
		},
		{
			name: 'The 8th',
			floor_price: '0.00',
			volume: '0.0',
			volume_precents: '0.00%',
			floor_precents: '3.51%',
			avg_price_percents: '64.00'
		},
		{
			name: 'The 8th',
			floor_price: '0.00',
			volume: '0.0',
			volume_precents: '0.00%',
			floor_precents: '3.51%',
			avg_price_percents: '64.00'
		},
		{
			name: 'The 8th',
			floor_price: '0.00',
			volume: '0.0',
			volume_precents: '0.00%',
			floor_precents: '3.51%',
			avg_price_percents: '64.00'
		},
		{
			name: 'The 8th',
			floor_price: '0.00',
			volume: '0.0',
			volume_precents: '0.00%',
			floor_precents: '3.51%',
			avg_price_percents: '64.00'
		},
		{
			name: 'The 8th',
			floor_price: '0.00',
			volume: '0.0',
			volume_precents: '0.00%',
			floor_precents: '3.51%',
			avg_price_percents: '64.00'
		},
		{
			name: 'The 8th',
			floor_price: '0.00',
			volume: '0.0',
			volume_precents: '0.00%',
			floor_precents: '3.51%',
			avg_price_percents: '64.00'
		},
		{
			name: 'The 8th',
			floor_price: '0.00',
			volume: '0.0',
			volume_precents: '0.00%',
			floor_precents: '3.51%',
			avg_price_percents: '64.00'
		}
	];
</script>

<svelte:head>
	<title>Popular Collections</title>
</svelte:head>

<div class="flex items-start gap-6">
	<div class="bg-secondary rounded-full grow relative">
		<Search placeholder="Search Collecitons" />
	</div>

	<!-- drop down -->
	<Dropdown
		id="filter_select_duration"
		border="secondary"
		items={[
			'Last 5 minutes',
			'Last 30 minutes',
			'Last 1 hour',
			'Last 6 hours',
			'Last 12 hours',
			'Last 24 hours',
			'Last 7 days',
			'Last 30 days'
		]}
	/>
</div>

<div class="overflow-x-auto relative my-4 px-2 rounded-lg  border-2 border-secondary">
	<table class="w-full text-primary">
		<thead class="text-xs border-b-2 border-secondary">
			<tr class="text-primary">
				<th class="py-3 px-6 text-start">Collection </th>
				<th class="py-3 px-6 text-start">Floor</th>
				<th class="py-3 px-6 text-start">Volume</th>
				<th class="py-3 px-6 text-start">Volume%</th>
				<th class="py-3 px-6 text-start">Floor$</th>
				<th class="py-3 px-6 text-start">Avg Price %</th>
			</tr>
		</thead>

		<tbody>
			{#each collections as { name, floor_price, avg_price_percents, floor_precents, volume, volume_precents }, i (i)}
				<tr class="text-start  border-b-2 border-secondary">
					<td class="py-3 px-6 text-start">
						<div class="flex items-center gap-2">
							<div class="text-xs">{name}</div>
						</div>
					</td>
					<td class="py-3 px-6 text-start">{floor_price}</td>
					<td class="py-3 px-6 text-start">{volume}</td>
					<td class="py-3 px-6 text-start">{volume_precents}</td>
					<td class="py-3 px-6 text-start">{floor_precents}</td>
					<td class="py-3 px-6 text-start">{avg_price_percents}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

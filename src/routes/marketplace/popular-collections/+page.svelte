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
</script>

<div class="flex items-start gap-6">
	<div class="bg-transparent rounded-lg grow relative">
		<div
			on:click={toggle_accordion}
			class="rounded-lg border-2 border-secondary flex flex-row justify-between items-center bg-transparent false w-full  h-full transition-all ease-in-out delay-300  hover:cursor-pointer"
		>
			<Search />
			<div class="mx-2 transition-transform ease-linear delay-100 rotate-180">
				<img class="w-4" src="/src/lib/assets/svg/icons/arrow-down.svg" alt="arrow ..." />
			</div>
		</div>
		<div
			class="absolute px-4 h-auto top-[120%] right-0 left-0 transition-all ease-in-out duration-150 hidden bg-secondary rounded-md"
			id="search-accordion"
		>
			<div class="flex gap-6 text-accent py-3 px-1 w-max">
				<!--  -->
				<Dropdown
					id="filter_select_type"
					border="primary"
					items={['Me Floor Price', 'Collection name', 'Volume']}
				/>
				<Dropdown
					id="filter_select_comparator"
					border="primary"
					items={[
						'greater than',
						'greater than',
						'less than',
						'greater than or equal to',
						'less than or equal to'
					]}
				/>

				<Input size="md" placeholder="price" round="md" border="primary" />
			</div>
		</div>
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

<table class="table-auto ">
	<thead class="px-2 py-4 border-2 border-secondary text-primary text-base">
		<th>Collection</th>
		<th>Volume</th>
		<th>Total</th>
		<th>24h Volume</th>
		<th>24h % Volume </th>
		<th>Sales</th>
		<th>Floor Price</th>
		<th>Owners </th>
		<th>Total Supply</th>
	</thead>
	<tbody>
		<tr>
			<td>a</td>
		</tr>
	</tbody>
</table>

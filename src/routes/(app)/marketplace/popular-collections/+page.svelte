<script lang="ts">
	import { getTopNFTContracts } from '$lib/api/nftports';
	import NftFilters from '$lib/filters/NFTFilters.svelte';
	import { onMount } from 'svelte';

	// export let data: { collections: ContractType[] };
	export let topContracts: Array<NftPortsContract>;

	onMount(async () => {
		topContracts = await getTopNFTContracts();
	});
</script>

<svelte:head>
	<title>Popular Collections</title>
</svelte:head>

<div class="flex flex-col items-start border-2 border-secondary">
	<div class="border-b-2 border-secondary w-full">
		<h3 class="p-3 text-primary text-2xl font-bold text-start">Top Collections</h3>
	</div>

	<div class="p-4 w-full">
		<NftFilters />

		<div class="overflow-x-auto relative my-4 px-2 rounded-lg  border-2 border-secondary">
			<table class="w-full text-primary">
				<thead class="text-xs border-b-2 border-secondary">
					<tr class="text-primary">
						<th class="py-3 px-6 text-start">Collection</th>
						<th class="py-3 px-6 text-start">24h Volume</th>
						<th class="py-3 px-6 text-start">24h</th>
						<th class="py-3 px-6 text-start">Floor Price</th>
						<th class="py-3 px-6 text-start">Owners</th>
						<th class="py-3 px-6 text-start">Supply</th>
					</tr>
				</thead>

				<tbody>
					{#each topContracts ?? [] as contract}
						<tr>
							<td class="flex justify-between items-center gap-4 max-w-fit m-4">
								<img
									src={contract.metadata?.thumbnail_url ??
										'https://www.hellomoon.io/_next/image?url=https%3A%2F%2Fimages.hellomoon.io%2Fnfts%2F60%2Fsodead.webp&w=128&q=75'}
									alt="solana"
									class="h-16 inline-block rounded-sm"
								/>

								<a href="/marketplace/collection/{contract.contract_address}">
									{contract.name}
								</a>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>

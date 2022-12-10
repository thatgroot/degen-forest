import aggregator from '$lib/api/aggregator';
import type { PageLoad } from './$types';

export async function load(params: PageLoad) {
	const collections = await aggregator.get.openSea.collections(1, 100);

	return {
		collections: collections.sort((a, b) => b.stats.total_supply - a.stats.total_supply)
	};
}

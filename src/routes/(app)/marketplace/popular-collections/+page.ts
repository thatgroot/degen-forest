import { getTopNFTContracts } from '$lib/api/nftports';
import type { PageLoad } from './$types';

export async function load(params: PageLoad) {

	console.log(
		`[load] src/routes/(app)/marketplace/popular-collections/+page.ts`,
		params
	)

	// getTopNFTContracts
	const topNFTContracts = await getTopNFTContracts();
	console.log(
		`[load] src/routes/(app)/marketplace/popular-collections/+page.ts`,
		{ topNFTContracts }
	)

	return {
		collections: topNFTContracts
	};
}

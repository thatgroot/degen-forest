import aggregator from '$lib/api/aggregator';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	// sveltekit get slug from the url

	console.log('slug page params', params.contract);
	const assets = await aggregator.get.openSea.assets(params.contract);
	return {
		assets
	};
};

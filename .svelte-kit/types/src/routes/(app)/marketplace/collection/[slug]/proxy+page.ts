import aggregator from '$lib/api/aggregator';
import type { PageLoad } from './$types';

export const load = async ({ params }: Parameters<PageLoad>[0]) => {
	// sveltekit get slug from the url

	console.log('slug page params', params.slug);
	const assets = await aggregator.get.openSea.assets(params.slug);
	return {
		assets
	};
};

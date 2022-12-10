import aggregator from '$lib/api/aggregator';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	// sveltekit get slug from the url
	console.log('slug page params', params.slug);
	const slug = params.slug;
	const assets = await aggregator.get.openSea.assets(slug);
	return {
		assets
	};
};

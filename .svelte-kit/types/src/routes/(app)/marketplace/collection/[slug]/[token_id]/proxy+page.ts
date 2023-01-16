import aggregator from '$lib/api/aggregator';
import type { PageLoad } from './$types';

export const load = async ({ params }: Parameters<PageLoad>[0]) => {
	// const;

	console.log('params', params)

	const { slug: contract, token_id } = params;

	const asset = await aggregator.get.openSea.asset(contract, token_id);

	return {
		asset
	};
};

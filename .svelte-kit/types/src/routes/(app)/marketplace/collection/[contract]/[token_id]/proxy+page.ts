import type { PageLoad } from './$types';

export const load = ({ params }: Parameters<PageLoad>[0]) => {
	// const;

	const { contract, asset } = params;

	return {};
};

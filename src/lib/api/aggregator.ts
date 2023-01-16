const Endpoints = {
	env: process.env.NODE_ENV,
	server: () => {
		return Endpoints.env === 'development' ? Endpoints.testnet.opensea : Endpoints.mainnet.opensea;
	},
	testnet: {
		opensea: 'https://testnets-api.opensea.io'
	},
	mainnet: {
		opensea: 'https://api.opensea.io'
	}
};
const aggregator: Aggregator = {
	get: {
		openSea: {
			asset: async (asset_contract_address: string, token_id: string) => {
				const options = { method: 'GET', headers: { 'X-API-KEY': '40392d7387d34dea8751d0b639379f20' } };

				const data = await fetch(`https://api.opensea.io/api/v1/asset/${asset_contract_address}/${token_id}/?include_orders=true`, options)
					.then(response => response.json())

				const asset = data;
				return asset as Asset;
			},
			assets: async (contract_address: string) => {
				const options = {
					method: 'GET',
					headers: { accept: 'application/json', 'X-API-KEY': '40392d7387d34dea8751d0b639379f20' }
				};

				const data = await fetch(`https://api.opensea.io/api/v1/assets?order_direction=desc&asset_contract_address=${contract_address}&limit=20&include_orders=true`, options)
					.then(response => response.json())
				const assets = data.assets;
				// sorty assets by asset.seaport_sell_orders array current_price attribute
				const sorted_assets = assets?.sort((asset_a: any, asset_b: any) => {
					const aPrice =
						asset_a.seaport_sell_orders?.length > 0
							? asset_a.seaport_sell_orders[0]?.current_price
							: 0;
					const bPrice =
						asset_b.seaport_sell_orders?.length > 0
							? asset_b.seaport_sell_orders[0]?.current_price
							: 0;
					return bPrice - aPrice;
				});
				return sorted_assets as Promise<Asset[]>;
			},
			collections: {
				top: async () => {
					const options = {
						method: 'GET',
						headers: {
							accept: 'application/json',
							Authorization: '3bd2d1ae-705e-44cc-8154-9ffc1d7d8bff'
						}
					};
					const _json = await fetch('https://api.nftport.xyz/v0/contracts/top?page_size=10&page_number=1&period=24h&order_by=volume&chain=ethereum', options)
						.then(response => response.json())
					const contracts = _json.contracts
					return contracts;
				}
			},
			collection_stats: async (
				slug: string,
			) => {
				const options = {
					method: 'GET',
					headers: { accept: 'application/json', 'X-API-KEY': '40392d7387d34dea8751d0b639379f20' }
				};
				const json = await fetch(`https://api.opensea.io/api/v1/collection/${slug}/stats`, options)
					.then(response => response.json())
					.catch(err => console.error(err));
				return {
					asset_count: 0,
				}
			},
			collection: async (contract_address: string) => {
				const options = { method: 'GET' };

				const data = await fetch(`https://api.opensea.io/api/v1/asset_contract/${contract_address}`, options)
					.then(response => response.json())

				const collection = data.collection;
				return collection as Promise<Collection>;
			}
		},
		looksrare: undefined,
		x2y2: undefined
	},
}

export default aggregator;

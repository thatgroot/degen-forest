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
				const url = `${Endpoints.server()}/api/v1/asset/${asset_contract_address}/${token_id}`;
				const res = await fetch(url, {
					method: 'GET'
				});
				const asset = await res.json();
				return asset as Asset;
			},
			assets: async (collection: string) => {
				const url = `${Endpoints.server()}/api/v1/assets?collection=${collection}&order_direction=desc&offset=0&limit=200&include_orders=true`;
				const res = await fetch(url, {
					method: 'GET'
				});
				const data = await res.json();
				console.log('collection assets', data);
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
			collections: async (offset: number, limit: number) => {
				const res = await fetch(
					`${Endpoints.server()}/api/v1/collections?format=json&offset=2&limit=100`
				);
				// axios get
				const json = await res.json();
				const collections = json.collections;
				return collections as Promise<Collection[]>;
			}
		},
		looksrare: undefined,
		x2y2: undefined
	}
};

export default aggregator;

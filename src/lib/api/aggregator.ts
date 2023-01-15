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
					method: 'GET',
					headers: {
						'X-API-KEY': '40392d7387d34dea8751d0b639379f20'
					}
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

				const options = {
					method: 'GET',
					headers: {
						accept: 'application/json',
						Authorization: '3bd2d1ae-705e-44cc-8154-9ffc1d7d8bff'
					}
				};

				const _json = await fetch('https://api.nftport.xyz/v0/contracts/top?page_size=10&page_number=1&period=24h&order_by=volume&chain=ethereum&chain=polygon', options)
					.then(response => response.json())




				const contracts = _json.contracts;
				return contracts as Promise<ContractType[]>;
			}
		},
		looksrare: undefined,
		x2y2: undefined
	}
};

export default aggregator;

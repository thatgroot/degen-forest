type Rarity = {
	strategy_id: string | 'openrarity';
	strategy_version: string;
	rank: number;
	score: number;
	calculated_at: Date;
	max_rank: number;
	tokens_scored: number;
	ranking_features: [];
};
type ContractType = {
	chain: string,
	contract_address: string,
	name: string
	metadata: {
		description: string,
		thumbnail_url: string,
		cached_thumbnail_url: string,
		banner_url: string,
		cached_banner_url: string,
	}
	stats?: {
		one_day_volume: number,
		one_day_change: number,
		one_day_sales: number,
		one_day_average_price: number,
		seven_day_volume: number,
		seven_day_change: number,
		seven_day_sales: number,
		seven_day_average_price: number,
		thirty_day_volume: number,
		thirty_day_change: number,
		thirty_day_sales: number,
		thirty_day_average_price: number,
		total_volume: number,
		total_sales: number,
		total_supply: number,
		total_minted: number,
		num_owners: number,
		average_price: number,
		market_cap: number,
		floor_price: number,
		floor_price_historic_one_day: number,
		floor_price_historic_seven_day: number,
		floor_price_historic_thirty_day: number,
		updated_date: string
	}
}
type Collection = {
	name: string;
	slug: string;
	external_link: string;
	description: string;
	image_url: string;
	banner_image_url: string;
	fees: string;
	safelist_request_status: 'not_requested' | 'requested' | 'approved' | 'verified';
	primary_asset_contracts: Array<{ [key: string]: unknown }>;
	traits: unknown[];
	payment_tokens: [];
	editors: [];
	states: [];
	is_rarity_enabled: boolean;
	[key: string]: { [key: string]: unknown };
};
type AssetContract = {
	address: string;
	asset_contract_type: string | 'fungible' | 'non-fungible';
	name: string;
	description: string;
	schema_name: string;
	external_link: string;
	collection: Collection;
};

type Rarity = {
	strategy_id: string;
	strategy_version: string;
	rank: number;
	score: number;
	calculated_at: Date;
	max_rank: number;
	tokens_scored: number;
	ranking_features: Array<unknown>;
};

type Account = {
	address: string;
	user: string;
	config: string;
};
type Asset = {
	token_id: string;
	image_url: string;
	background_color: string;
	name: string;
	external_link: string;
	traits: any[];
	last_sale: any;
	collection: Collection;
	asset_contract: AssetContract;
	top_ownerships: Account;
	rarity_data: Rarity;
	[key: string]: any | string;
};

type OpeanSeaApi = {

	asset: (asset_contract_address: string, token_id: string) => Promise<Asset>;
	assets: (
		// owner?: string,
		// token_ids?: string,
		contract_address: string
		// collection_editor?: string,
		// order_direction: 'asc' | 'desc',
		// asset_contract_address?: string,
		// asset_contract_addresses?: string
		// limit: number,
		// cursor: number,
		// include_orders: boolean
	) => Promise<Asset[]>;
	collections: {
		top: () => Promise<{ [key: string]: unknown }>

	};
	collection: (contract_address: string) => Promise<Collection>;
	collection_stats: (
		slug: string
	) => Promise<{ [key: string]: unknown }>
};

type Aggregator = {
	get: {
		openSea: OpeanSeaApi;
		looksrare: LooksRareApi;
		x2y2: X2Y2Api;
	};
};

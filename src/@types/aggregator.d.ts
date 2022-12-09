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
type Collection = {
	name: string;
	slug: string;
	external_link: string;
	description: string;
	image_url: string;
	banner_image_url: string;
	fees: string;
	safelist_request_status: 'not_requested' | 'requested' | 'approved' | 'verified';
	primary_asset_contracts: string[];
	traits: unknown[];
	payment_tokens: [];
	editors: [];
	states: [];
	is_rarity_enabled: boolean;
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
	traits: unknown[];
	last_sale: unknown;
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
		// collection?: string,
		// collection_slug?: string,
		// collection_editor?: string,
		// order_direction: 'asc' | 'desc',
		asset_contract_address: string,
		asset_contract_addresses?: string
		// limit: number,
		// cursor: number,
		// include_orders: boolean
	) => Promise<Asset[]>;
	collections: (
		offset: number,
		limit: number
	) => Promise<Array<Collection & { [key: string]: any }>>;
};

type Aggregator = {
	get: {
		openSea: OpeanSeaApi;
		looksrare: LooksRareApi;
		x2y2: X2Y2Api;
	};
};

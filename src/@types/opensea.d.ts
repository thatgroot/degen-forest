type Asset = {
 id: number;
 num_sales: number;
 background_color: string | null;
 image_url: string;
 image_preview_url: string;
 image_thumbnail_url: string;
 image_original_url: string;
 animation_url: string | null;
 animation_original_url: string | null;
 name: string;
 description: string;
 external_link: string | null;
 asset_contract: AssetContract;
 permalink: string;
 collection: Collection;
 creator: Creator;
 traits: Trait[];
 sale: Sale | null;
 rarity: Rarity;
}

type AssetContract = {
 address: string;
 asset_contract_type: string;
 created_date: string;
 name: string;
 nft_version: string;
 opensea_version: string | null;
 owner: number;
 schema_name: string;
 symbol: string;
 total_supply: string;
 description: string;
 external_link: string | null;
 image_url: string;
 default_to_fiat: boolean;
 dev_buyer_fee_basis_points: number;
 dev_seller_fee_basis_points: number;
 [key: string]: number | string | object | null | undefined
}

type Creator = {
 name: string;
 website: string | null;
 twitter: string | null;
 github: string | null;
 email: string | null;
}

type Trait = {
 trait_type: string;
 value: string;
}

type Sale = {
 start_time: string;
 end_time: string;
 current_price: string;
 current_price_currency: string;
 current_price_usd: string;
 seller: number;
 buyer: number | null;
}

type Rarity = {
 rarity_name: string;
 rarity_value: number;
}

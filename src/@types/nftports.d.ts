interface NftPortsContract {
 chain: string;
 contract_address: string;
 name: string;
 metadata: Metadata;
}

interface Metadata {
 description: string;
 thumbnail_url: string;
 cached_thumbnail_url: string;
 banner_url: string;
 cached_banner_url: string;
}

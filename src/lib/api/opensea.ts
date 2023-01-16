import axios from 'axios';

const opensea = axios.create({
 baseURL: 'https://api.opensea.io/api/v1/',
 headers: {
  'Content-Type': 'application/json',
  'x-api-key': 'YOUR_API_KEY',
 },
});


export async function getAsset(asset_contract_address: string, token_id: string, include_orders = true) {
 const options = {
  method: 'GET',
  headers: { accept: 'application/json', 'X-API-KEY': '40392d7387d34dea8751d0b639379f20' }
 };

 const data = await fetch(`https://api.opensea.io/api/v1/asset/${asset_contract_address}/${token_id}?include_orders=${include_orders}`, options)
  .then(response => response.json())
  .catch(err => console.error(err));


 const asset: Asset = data;
 return asset;
}

export async function getAssets(contract_address: string, limit = 20, include_orders = true): Promise<Array<Asset>> {
 const options = {
  method: 'GET',
  headers: { accept: 'application/json', 'X-API-KEY': '40392d7387d34dea8751d0b639379f20' }
 };

 const data = await fetch(`https://api.opensea.io/api/v1/assets?order_direction=desc&asset_contract_address=${contract_address}&limit=${limit}&include_orders=${include_orders}`, options)
  .then(response => response.json())
  .catch(err => console.error(err));


 console.log('data', data)
 const assets: Array<Asset> = data.assets;

 const sortedAssets = assets.sort((a, b) => {
  if (!a.seaport_sell_orders || !b.seaport_sell_orders) {
   return 0;
  }
  const aCurrentPrice = a.seaport_sell_orders[0].current_price;
  const bCurrentPrice = b.seaport_sell_orders[0].current_price;
  return aCurrentPrice - bCurrentPrice;
 });

 return sortedAssets;
}




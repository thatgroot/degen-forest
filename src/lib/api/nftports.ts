import axios from "axios";

const nftport = axios.create({
 baseURL: 'https://api.nftport.xyz/v0/',
});
export async function getTopNFTContracts(pageSize = 10, pageNumber = 1, period = '24h', orderBy = 'volume', chain = 'ethereum'): Promise<Array<NftPortsContract>> {

 const options = {
  method: 'GET',
  url: 'https://api.nftport.xyz/v0/contracts/top',
  params: {
   page_size: '10',
   page_number: '1',
   period: '24h',
   order_by: 'volume',
   chain: ['ethereum', 'polygon']
  },
  headers: {
   accept: 'application/json',
   Authorization: '3bd2d1ae-705e-44cc-8154-9ffc1d7d8bff'
  }
 };

 const data = await axios
  .request(options)
  .then(function (response) {
   return response.data;
  })
  .catch(function (error) {
   console.error(error);
  });

 const contracts: Array<NftPortsContract> = data.contracts;
 return contracts;
}

export const title = "Page Title";

export async function load() {



 const swap = async () => {
  // 1inch swap API call
  const response = await fetch("https://api.1inch.exchange/v4.0/1/swap?fromTokenAddress=0x2170ed0880ac9a755fd29b2688956bd959f933f8&toTokenAddress=0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3&amount=1000000000000000000&fromAddress=0x0000000000000000000000000000000000000000&slippage=1&disableEstimate=true");
  const json = await response.json();
  console.log(json)
  return json;
 }

 const tokens = async () => {
  const response = await fetch("https://api.1inch.exchange/v4.0/1/tokens");
  const { tokens } = await response.json();
  return tokens;
 }


 return { title: "Page Title", swap, tokens };
}

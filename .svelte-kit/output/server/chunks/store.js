import { w as writable } from "./index2.js";
const wallet_store = writable({
  connected: false,
  defaultAccount: "",
  balance: "0",
  chainId: 0
});
const dex_store = writable({
  slippage: 1,
  token: {
    selected: {
      symbol: "ETH",
      name: "Ethereum",
      decimals: 18,
      address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
      logoURI: "https://tokens.1inch.io/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png",
      tags: ["tokens"]
    },
    desired: {
      symbol: "1INCH",
      name: "1INCH Token",
      decimals: 18,
      address: "0x111111111117dc0aa78b770fa6a738034120c302",
      logoURI: "https://tokens.1inch.io/0x111111111117dc0aa78b770fa6a738034120c302.png",
      tags: ["tokens"]
    }
  },
  amount: {
    selected: "10",
    desired: "0"
  },
  rate: {
    USDT: 0
  }
});
export {
  dex_store as d,
  wallet_store as w
};

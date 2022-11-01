// create a svelte store for wallet and dex app

import { writable } from "svelte/store";

type WalletStore = {
 connected?: boolean | false,
 defaultAccount: string,
 balance: string,
 chainId?: number
}
export const wallet_store = writable<WalletStore>({
 connected: false,
 defaultAccount: "",
 balance: '0',
 chainId: 0x0
});

export const dex_store = writable<DEX_STORE>({
 token: {
  selected: <Token>{},
  desired: <Token>{}
 },
 amount: {
  selected: '0',
  desired: '0'
 },
 rate: {
  USDT: 0
 },
});


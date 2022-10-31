// create a svelte store for wallet and dex app

import { writable } from "svelte/store";

export const wallet_store = writable({
 defaultAccount: "",
 balance: '0',
});

export const dex_store = writable({
 selectedToken: <Token>{},
 selectedTokenAmount: '0'
});


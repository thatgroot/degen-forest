// create a svelte store for wallet and dex app

import { writable } from 'svelte/store';

type WalletStore = {
	connected?: boolean | false;
	defaultAccount: string;
	balance: string;
	chainId?: number;
};
export const wallet_store = writable<WalletStore>({
	connected: false,
	defaultAccount: '',
	balance: '0',
	chainId: 0x0
});

export const dex_store = writable<DEX_STORE>({
	slippage: 1,
	token: {
		selected: <Token>{
			symbol: 'ETH',
			name: 'Ethereum',
			decimals: 18,
			address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
			logoURI: 'https://tokens.1inch.io/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png',
			tags: ['tokens']
		},
		desired: <Token>{
			symbol: '1INCH',
			name: '1INCH Token',
			decimals: 18,
			address: '0x111111111117dc0aa78b770fa6a738034120c302',
			logoURI: 'https://tokens.1inch.io/0x111111111117dc0aa78b770fa6a738034120c302.png',
			tags: ['tokens']
		}
	},
	amount: {
		selected: '10',
		desired: '0'
	},
	rate: {
		USDT: 0
	}
});

import { ethers } from 'ethers';
import Web3 from 'web3';
import type { Unit } from 'web3-utils';

export const toggle = (id: string, css_class: string) => {
	const dropdown = document.querySelector(`#${id}`);
	dropdown?.classList.toggle(css_class);
};
export const fromWei = (amount: string, unit: Unit | undefined) => {
	return web3.utils.fromWei(amount, unit);
};

export const checkBrowser = (browser: 'Chrome' | 'MSIE' | 'Firefox' | 'Safari') => {
	const userAgent = navigator.userAgent;
	return userAgent.indexOf(browser) > -1;
};

class Ethers {
	provider: ethers.providers.BaseProvider;
	// network
	async getNetwork() {
		const network = await this.provider.getNetwork();
		return network;
	}
	constructor() {
		this.provider = ethers.providers.getDefaultProvider();
		console.log('constructor');
	}
}

export const replaceAddresswithTokenName = (str: string, tokens: Token[]) => {
	// extract	token name from token address using regex
	const token_address = str.match(/0x[a-fA-F0-9]{40}/g);
	// replace token address with token name in the str using regex
	if (token_address) {
		const token = tokens.find((token) => token.address === token_address[0]);
		if (token) {
			// replace token address in str with token name
			str = str.replace(token_address[0], token.name);
			return str;
		} else {
			return str;
		}
	} else {
		return str;
	}
};
export const provider = {
	get: () => {
		const provider = ethers.providers.getDefaultProvider();
		return provider;
	},
	network: () => {
		const provider = ethers.providers.getDefaultProvider();
		return provider.network;
	}
};

export const web3: Web3 = new Web3(Web3.givenProvider);

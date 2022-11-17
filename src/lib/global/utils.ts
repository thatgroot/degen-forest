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

export const check = {
	ethereum: () => {
		return typeof window.ethereum === 'undefined' ? false : true;
	}
};

export const ethereum = {
	provider: () => {
		return new ethers.providers.Web3Provider(window.ethereum);
	},
	signer: () => {
		return ethereum.provider().getSigner();
	},
	accounts: async () => {
		return await ethereum.provider().listAccounts();
	},
	chainId: async () => {
		return await ethereum.provider().getNetwork();
	},
	// list of available token in the wallet
	addToken: async () => {
		const signer = ethereum.signer();
		// typescript ingore error for thsi statement
		const success = await signer.provider?.send('wallet_watchAsset', {
			type: 'ERC20',
			options: {
				address: '0xb60e8dd61c5d32be8058bb8eb970870f07233155',
				symbol: 'FOO',
				decimals: 18,
				image: 'https://foo.io/token-image.svg'
			}
		});

		return success;
	},
	tokenContractEnsName: () => {
		// get the ens name of a token
	},
	// list available metamask assets
	dai: async () => {
		const daiAddress = 'dai.tokens.ethers.eth';

		const daiAbi = [
			// Some details about the token
			'function name() view returns (string)',
			'function symbol() view returns (string)',
			'function decimals() view returns (uint8)',
			'function totalSupply() view returns (uint256)',
			// Get the account balance
			'function balanceOf(address) view returns (uint256)',
			// Send some of your tokens to someone else
			'function transfer(address to, uint amount)',
			// An event triggered whenever anyone transfers to someone else
			'event Transfer(address indexed from, address indexed to, uint amount)'
		];

		const dai = new ethers.Contract(daiAddress, daiAbi, ethereum.signer());

		const balance = await dai.balanceOf('0xE36E96A3842039d68794C15ace30ab7C9143ad1A');
		console.log('Dai balance: ' + balance.toString());

		// const tx = await dai.transfer('0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B', ethers.utils.parseEther('0.1'));
		// await tx.wait();

		// console.log('Dai sent!');

		// return balance;
	},
	requestAccounts: () => {
		// returns  an array of accounts
		return window.ethereum.request({ method: 'eth_requestAccounts' });
	}
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

// get token balance from wallet_store
export const getTokenBalance = async (token_address: string) => {
	//
};

export const putTokenName = (str: string, tokens: Token[]) => {
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

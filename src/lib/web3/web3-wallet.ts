import { dex_store, wallet_store } from '../../store';
import Web3 from 'web3';
import { ethers } from 'ethers';
import { check, ethereum } from '$lib/global/utils';

class DApp implements Wallet {
	async connect() {
		if (check.ethereum()) {
			try {
				const accounts = ethereum.requestAccounts();
				const signer = ethereum.signer();
				const address = await signer.getAddress();
				const balance = await web3.eth.getBalance(address);
				const chainId = await signer.getChainId();
				web3.eth.defaultAccount = address;
				console.log({ defaultAccount: address, chainId, balance });
				wallet_store.set({ connected: true, defaultAccount: address, chainId, balance });
			} catch (error) {
				wallet_store.set({ defaultAccount: '', balance: '0' });
				console.log(error);
			}
		} else {
			const confirm = window.confirm(
				'Non-Ethereum browser detected. You should consider trying MetaMask!'
			);
			if (confirm) window.open('https://metamask.io/download/', '_blank');
		}
	}
	defaultAccount() {
		return '';
	}
	disconnect() {
		//
	}
	on: WalletEvents = {
		connect: function (address: string): void {
			throw new Error('Function not implemented.');
		},
		disconnect: function (error: { code: number; message: string }): void {
			throw new Error('Function not implemented.');
		},
		accountsChanged: function (accounts: string[]): void {
			throw new Error('Function not implemented.');
		},
		chainChanged: function (chainId: string): void {
			throw new Error('Function not implemented.');
		}
	};
	balance(token_address: string) {
		return Promise.resolve('');
	}
}
const web3 = new Web3(Web3.givenProvider);

const web3_wallet: Wallet = {
	defaultAccount: () => web3.eth.defaultAccount ?? '',
	connect: async () => {
		if (window.ethereum) {
			try {
				await window.ethereum.request({ method: 'eth_requestAccounts' });
				const provider = new ethers.providers.Web3Provider(window.ethereum);
				const signer = provider.getSigner();
				const address = await signer.getAddress();
				const balance = await web3.eth.getBalance(address);
				const chainId = await signer.getChainId();
				web3.eth.defaultAccount = address;
				console.log({ defaultAccount: address, chainId, balance });
				wallet_store.set({ connected: true, defaultAccount: address, chainId, balance });
			} catch (error) {
				wallet_store.set({ defaultAccount: '', balance: '0' });
				console.log(error);
			}
		} else {
			const confirm = window.confirm(
				'Non-Ethereum browser detected. You should consider trying MetaMask!'
			);
			if (confirm) window.open('https://metamask.io/download/', '_blank');
		}
	},
	balance: async (token_address: string) => {
		const minABI = [
			{
				constant: true,
				inputs: [{ name: '_owner', type: 'address' }],
				name: 'balanceOf',
				outputs: [{ name: 'balance', type: 'uint256' }],
				type: 'function'
			}
		];
		const contract = new web3.eth.Contract(minABI, token_address);
		const res = await contract.methods.balanceOf(web3_wallet.defaultAccount()).call();
		const format = web3.utils.fromWei(res);
		return format;
	},

	disconnect: () => {
		//  disconnect walet using web3js
		if (window.ethereum) {
			web3.eth.defaultAccount = '';

			return true;
		} else {
			window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
			return false;
		}
	},
	on: {
		connect: async (info) => {
			console.log(info);
			// get metamask eth accounts
			const accounts = await web3.eth.getAccounts();
			const balance = await web3.eth.getBalance(accounts[0]);
			console.log(accounts, balance);
			wallet_store.set({
				defaultAccount: accounts[0],
				balance: balance
			});
			console.log('connecting');

			return true;
		},
		disconnect: (error) => {
			wallet_store.set({ defaultAccount: '', balance: '0' });

			console.error(error);
		},
		accountsChanged: async (accounts) => {
			const balance = await web3.eth.getBalance(accounts[0]);
			wallet_store.update((currentValue) => {
				currentValue.defaultAccount = accounts[0];
				currentValue.balance = balance;
				return currentValue;
			});
		},
		chainChanged: () => {
			// console.log(chainId);
		}
	}
};

export const dex: DEX = {
	set: {
		slippage: (percentage) => {
			dex_store.update((currentValue) => {
				currentValue.slippage = percentage;
				return currentValue;
			});
		},
		selectedToken: (tokens: Token[], symbol: string) => {
			const token = tokens.find((token) => token.symbol === symbol) ?? <Token>{};
			dex_store.update((currentValue) => {
				currentValue.token.selected = token;
				return currentValue;
			});
			return token;
		},
		desiredToken: (tokens: Token[], symbol: string) => {
			const token = tokens.find((token) => token.symbol === symbol) ?? <Token>{};
			dex_store.update((currentValue) => {
				currentValue.token.desired = token;
				return currentValue;
			});
			return token;
		},

		selectedTokenAmount: (amount: string) => {
			dex_store.update((currentValue) => {
				currentValue.amount.selected = amount;
				return currentValue;
			});
		},

		desiredTokenAmount: (amount: string) => {
			dex_store.update((currentValue) => {
				currentValue.amount.desired = amount;
				return currentValue;
			});
		}
	},
	request: {
		exhangeRate: async (from, to) => {
			const url = `https://min-api.cryptocompare.com/data/price?fsym=${from}&tsyms=${to}`;
			const data = fetch(url)
				.then((response) => response.json())
				.then((data) => {
					return data;
				});
			return data;
		},
		quote: async (fromTokenAddress, toTokenAddress, fromAmount, callback) => {
			// calling 1inch swap api
			let slippage: number | string = 'auto';
			// svelte subscribe
			const unsubscribe = dex_store.subscribe((store) => {
				slippage = store.slippage;
			});

			// calling 1inch quote api
			const url = `https://api.1inch.exchange/v4.0/1/quote?fromTokenAddress=${fromTokenAddress}&toTokenAddress=${toTokenAddress}&amount=${fromAmount}&slippage=${slippage}`;
			let response = undefined;
			try {
				response = await fetch(url);
			} catch (error) {
				console.log('error', error);
				dex_store.update((currentValue) => {
					currentValue.tx_error = JSON.parse(JSON.stringify(error));
					currentValue.error = undefined;
					return currentValue;
				});
			}
			const data = await response?.json();

			if (data !== undefined) {
				// eslint-disable-next-line no-prototype-builtins
				if (data.hasOwnProperty('error')) {
					dex_store.update((currentValue) => {
						currentValue.error = data;
						currentValue.tx_error = {};
						return currentValue;
					});
				} else {
					dex_store.update((currentValue) => {
						currentValue.error = undefined;
						currentValue.tx_error = {};
						return currentValue;
					});
					// if symbols is eth
					if (data.fromToken.symbol === 'ETH') {
						const quote: Quote = {
							fromToken: data.fromToken,
							fromTokenAmount: data.fromTokenAmount,
							toToken: data.toToken,
							toTokenAmount: web3.utils.fromWei(data.toTokenAmount, 'ether'),
							estimatedGas: data.estimatedGas
						};
						callback(quote);
					} else if (data.toToken.symbol === 'ETH') {
						const quote: Quote = {
							fromToken: data.fromToken,
							fromTokenAmount: data.fromTokenAmount,
							toToken: data.toToken,
							toTokenAmount: data.toTokenAmount,
							estimatedGas: data.estimatedGas
						};
						callback(quote);
					} else {
						const quote: Quote = {
							fromToken: data.fromToken,
							fromTokenAmount: data.fromTokenAmount,
							toToken: data.toToken,
							toTokenAmount: data.toTokenAmount,
							estimatedGas: data.estimatedGas
						};
						callback(quote);
					}
				}
			} else {
				alert('something went wrong!');
			}
			unsubscribe();
		},
		swap: async (fromTokenAddress, toTokenAddress, fromAmount, callback): Promise<void> => {
			console.log(fromTokenAddress, toTokenAddress, fromAmount);
			// return;
			// get connected wallet address
			const account = web3_wallet.defaultAccount();
			// calling 1inch swap api
			let slippage: number | string = 'auto';
			// svelte subscribe
			const unsubscribe = dex_store.subscribe((store) => {
				slippage = store.slippage;
			});

			// 0xF69c12BCAb3cc3Bef5a5BF7eD990B26dA2871D55
			const url = `https://api.1inch.io/v4.0/1/swap?fromTokenAddress=${fromTokenAddress}&toTokenAddress=${toTokenAddress}&amount=${fromAmount}&fromAddress=${account}&slippage=${slippage}`;

			console.log(url);
			// const url = `https://api.1inch.io/v4.0/1/swap?fromTokenAddress=${fromTokenAddress}&toTokenAddress=${toTokenAddress}&amount=${fromAmount}&fromAddress=0xE36E96A3842039d68794C15ace30ab7C9143ad1A&slippage=1`;
			try {
				fetch(url)
					.then((response) => {
						console.log('response', response);
						return response.json();
					})
					.then(async (res_data) => {
						console.log('data', res_data);

						// eslint-disable-next-line no-prototype-builtins
						if (res_data.hasOwnProperty('error')) {
							dex_store.update((currentValue) => {
								currentValue.error = res_data;
								currentValue.tx_error = {};
								return currentValue;
							});
						} else {
							try {
								dex.events.transaction.send(res_data.tx);
							} catch (error) {
								dex_store.update((currentValue) => {
									currentValue.tx_error = JSON.parse(JSON.stringify(error));
									currentValue.error = undefined;
									return currentValue;
								});
							}
						}
					});
			} catch (error) {
				console.log('error', error);
				dex_store.update((currentValue) => {
					currentValue.tx_error = JSON.parse(JSON.stringify(error));
					currentValue.error = undefined;
					return currentValue;
				});
			}

			unsubscribe();
		},
		tokens: async (): Promise<Token[]> => {
			// get tokens list
			const url = `https://api.1inch.exchange/v4.0/1/tokens`;
			// calling the network request form the above url
			const response = await fetch(url);
			const { tokens } = await response.json();
			return tokens;
		}
	},
	events: {
		shift: function (): void {
			throw new Error('Function not implemented.');
		},
		transaction: {
			send: async ({ from, to, data, value }: Transaction) => {
				const { sendTransaction } = ethereum.signer();
				const tx_response = await sendTransaction({
					from,
					to,
					data,
					value: ethers.BigNumber.from(value)
				});
				if (tx_response.hash !== undefined) {
					alert(
						`Please wait for the confirmation of the transaction. Transaction hash: ${tx_response.hash}`
					);
					const receipt = await tx_response.wait();
					if (receipt.status === 1) {
						alert(`Transaction is successfully executed. Transaction hash: ${tx_response.hash}`);
					} else {
						alert(`Transaction is failed. Transaction hash: ${tx_response.hash}`);
					}
				}
			}
		}
	}
};

export default web3_wallet;

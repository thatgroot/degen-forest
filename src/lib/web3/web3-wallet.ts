import { dex_store, wallet_store } from '../../store';
import Web3 from 'web3';
import { BigNumber, ethers } from 'ethers';
import { formatUnits } from 'ethers/lib/utils';
import type { AsyncReturnType } from 'type-fest';

const web3 = new Web3(Web3.givenProvider);

const _abi = [
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_totalSupply',
				type: 'uint256'
			}
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'constructor'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'owner',
				type: 'address'
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'spender',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'value',
				type: 'uint256'
			}
		],
		name: 'Approval',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'from',
				type: 'address'
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'to',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'value',
				type: 'uint256'
			}
		],
		name: 'Transfer',
		type: 'event'
	},
	{
		constant: true,
		inputs: [],
		name: 'DOMAIN_SEPARATOR',
		outputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32'
			}
		],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'PERMIT_TYPEHASH',
		outputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32'
			}
		],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			},
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		name: 'allowance',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'spender',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: 'value',
				type: 'uint256'
			}
		],
		name: 'approve',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool'
			}
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		name: 'balanceOf',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'decimals',
		outputs: [
			{
				internalType: 'uint8',
				name: '',
				type: 'uint8'
			}
		],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'name',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string'
			}
		],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		name: 'nonces',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'owner',
				type: 'address'
			},
			{
				internalType: 'address',
				name: 'spender',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: 'value',
				type: 'uint256'
			},
			{
				internalType: 'uint256',
				name: 'deadline',
				type: 'uint256'
			},
			{
				internalType: 'uint8',
				name: 'v',
				type: 'uint8'
			},
			{
				internalType: 'bytes32',
				name: 'r',
				type: 'bytes32'
			},
			{
				internalType: 'bytes32',
				name: 's',
				type: 'bytes32'
			}
		],
		name: 'permit',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'symbol',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string'
			}
		],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'totalSupply',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'to',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: 'value',
				type: 'uint256'
			}
		],
		name: 'transfer',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool'
			}
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'from',
				type: 'address'
			},
			{
				internalType: 'address',
				name: 'to',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: 'value',
				type: 'uint256'
			}
		],
		name: 'transferFrom',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool'
			}
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	}
];
class DApp {
	provider: ethers.providers.Web3Provider;
	signer: ethers.providers.JsonRpcSigner;

	constructor() {
		this.provider = new ethers.providers.Web3Provider(window.ethereum);
		this.signer = this.provider.getSigner();
		// ethers js get balance from wallet of selected token

		this.provider.listAccounts().then((accounts) => {
			accounts.forEach((account) => {
				this.provider.getBalance(account).then((balance) => {
					console.log('balance', balance);
				});
			});
		});
	}
}
const web3_wallet: Wallet = {
	defaultAccount: () => web3.eth.defaultAccount ?? '',
	connect: async () => {
		if (window.ethereum) {
			try {
				await window.ethereum.request({ method: 'eth_requestAccounts' });
				const dapp = new DApp();
				const signer = dapp.signer;
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
		if (window.ethereum || window.web3) {
			const balance = await web3.eth.getBalance(token_address);
			return balance;
		} else {
			return '0';
		}
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
					if (data.toToken.symbol === 'ETH') {
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
		allowance: async (amount, token, provider) => {
			if (token.symbol != 'ETH') {
				try {
					const signer = provider.getSigner();
					const contract = new ethers.Contract(token.address, _abi, signer);
					const erc20Contract = contract.connect(signer);
					const spender_response = await fetch(`https://api.1inch.io/v4.0/1/approve/spender`);
					const json_response = await spender_response.json();
					const { address: spenderAddress } = json_response; //
					const allowance = await erc20Contract.allowance(
						await signer.getAddress(),
						spenderAddress
					);
					return allowance.gte(amount);
				} catch (e) {
					alert('Approval denied. Swap cancelled.');
					console.error(e);
					throw e;
				}
			}
			return true;
			//
		},
		approve: async (amount, token, provider) => {
			// check if 1inch has allowace for the token

			if (token.symbol != 'ETH') {
				try {
					window.confirm(`Please approve us to spend your ${token.symbol}`);
					// window.open(
					// 	'https://help.1inch.exchange/en/articles/4585113-why-do-i-need-to-approve-my-tokens-before-a-trade',
					// 	'_blank'
					// );

					const signer = provider.getSigner();

					const contract = new ethers.Contract(token.address, _abi, signer);
					const erc20Contract = contract.connect(signer);

					const spender_response = await fetch(`https://api.1inch.io/v4.0/1/approve/spender`);

					const json_response = await spender_response.json();
					const { address: spenderAddress } = json_response; //
					console.log('json_response', json_response);
					const allowance = await erc20Contract.allowance(
						await signer.getAddress(),
						spenderAddress
					);
					console.log('allowance', allowance);

					if (allowance.gte(amount)) {
						return;
					}
					const tx = await erc20Contract.approve(spenderAddress, amount);
					console.log('tx', tx);
					if (tx) await waitForTx(tx.hash, provider);
					alert('Approved!');
				} catch (e) {
					alert('Approval denied. Swap cancelled.');
					console.error(e);
					throw e;
				}
			}
			//
		},
		swap: async (fromToken, toToken, amount, callback): Promise<void> => {
			console.log(fromToken, toToken, amount);
			// return;
			// get connected wallet address
			// calling 1inch swap api
			let slippage: number | string = 'auto';
			// svelte subscribe
			const unsubscribe = dex_store.subscribe((store) => {
				slippage = store.slippage;
			});

			const provider = new ethers.providers.Web3Provider(window.ethereum);

			const signer = provider.getSigner();

			const wallet_address = await signer.getAddress();
			try {
				const parsedAmountFromToken = ethers.utils.parseUnits(amount, 0);

				// 0xF69c12BCAb3cc3Bef5a5BF7eD990B26dA2871D55
				const url = `https://api.1inch.io/v4.0/1/swap?fromTokenAddress=${fromToken.address}&toTokenAddress=${toToken.address}&amount=${parsedAmountFromToken}&fromAddress=${wallet_address}&slippage=${slippage}`;

				console.log(url);
				// const url = `https://api.1inch.io/v4.0/1/swap?fromTokenAddress=${fromTokenAddress}&toTokenAddress=${toTokenAddress}&amount=${fromAmount}&fromAddress=0xE36E96A3842039d68794C15ace30ab7C9143ad1A&slippage=1`;
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
								const { from, to, data, value }: Transaction = res_data.tx;
								console.log('tx', data);
								const provider = new ethers.providers.Web3Provider(window.ethereum);
								const signer = provider.getSigner();

								const tx_response = await signer.sendTransaction({
									from,
									to,
									data,
									value: ethers.BigNumber.from(value)
								});
								console.log('tx_response', tx_response);
								const receipt = await provider.getTransactionReceipt(tx_response.hash);
							} catch (error) {
								console.log('error', error);
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
		}
	}
};

export const do_swap = (amountToSend: string, fromToken: Token, toToken: Token) => {
	type SwapStatus =
		| 'DORMANT'
		| 'PREPARING_TX'
		| 'AWAITING_CONFIRMATION'
		| 'AWAITING_APPROVAL'
		| 'AWAITING_APPROVE_TX'
		| 'SENDING_TX'
		| 'COMPLETE'
		| 'ERROR';
	const reset = () => {
		// reset state
		// reset tx
		// reset error
	};

	const execute = async () => {
		const testMode = false && process.env.NODE_ENV == 'development';

		const provider = new ethers.providers.Web3Provider(window.ethereum);

		const signer = provider.getSigner();
		try {
			// Activate
			const parsedAmountFromToken = safeParseUnits(amountToSend, fromToken);

			// Approve
			if (fromToken.symbol != 'ETH') {
				try {
					window.confirm(`Please approve us to spend your ${fromToken.symbol}`);
					// window.open(
					// 	'https://help.1inch.exchange/en/articles/4585113-why-do-i-need-to-approve-my-tokens-before-a-trade',
					// 	'_blank'
					// );

					// if (!testMode) {
					const tx = await approve(parsedAmountFromToken, fromToken, provider);
					// AWAITING APPROVE TX
					if (tx) await waitForTx(tx.hash, provider);
					alert('Approved!');
					// } else {
					//  AWAITING_APPROVE_TX
					// }
				} catch (e) {
					alert('Approval denied. Swap cancelled.');
					console.error(e);
					throw e;
				}
			}
			// PREPARING_TX
			// const swap = await repeatOnFail(
			// 	async () =>
			// 		// call dex swap function here
			// 		  ,
			// 	{
			// 		iterations: 10,
			// 		waitFor: 1000,
			// 		waitForMultiplier: 1.5
			// 	}
			// );
			// 1inch swap api call using fetch
			const from_address = await signer.getAddress();
			const response = await fetch(
				`https://api.1inch.exchange/v4.0/1/swap?fromTokenAddress=${
					fromToken.address
				}&toTokenAddress=${
					toToken.address
				}&amount=${parsedAmountFromToken.toString()}&fromAddress=${from_address}&slippage=1`
			);

			const swap = await response.json();
			console.log('swap', swap);

			// Add error toast here
			// setData(swap);

			alert('Swap confirmed!');

			setTimeout(() => alert('Please wait while Bruce swaps your tokens'), 1000);
			// SENDING_TX
			// Swap
			console.log('swap.tx', swap.tx);
			const {
				from,
				to,
				data,
				value
				// gasPrice,
				// gas
			} = await swap.tx;

			// if (!testMode) {
			const tx = await signer.sendTransaction({
				from,
				to,
				data,
				value: ethers.BigNumber.from(value)
			});
			await waitForTx(tx.hash, provider);
			// } else {
			// await new Promise((r) => setTimeout(r, 5000));
			// }
			// waiting
			alert('....');
			setTimeout(
				() =>
					alert(
						`Converted ${formatUnits(swap.fromTokenAmount, swap.fromToken.decimals)} ${
							swap.fromToken.symbol
						} to ${formatUnits(swap.toTokenAmount, swap.toToken.decimals)} ${swap.toToken.symbol}`
					),
				1000
			);
			// COMPLETE
		} catch (e) {
			// ERROR
			console.error(e);
		}
	};
	return {
		execute,
		status: 'DORMANT' as SwapStatus,
		reset
	};
};

const waitForTx = async (txHash: string, provider: ethers.providers.Web3Provider) => {
	const condition = true;
	while (condition) {
		const receipt = await provider.getTransactionReceipt(txHash);
		if (receipt) {
			break;
		} else console.log({ receipt });
		await new Promise((r) => setTimeout(r, 5000));
	}
};

const approve = async (
	parsedAmountFromToken: BigNumber,
	fromToken: Token,
	provider: ethers.providers.Web3Provider
) => {
	const signer = provider.getSigner();

	const contract = new ethers.Contract(fromToken.address, _abi, signer);
	const erc20Contract = contract.connect(signer);
	// https://api.1inch.io/v5.0/1/approve/spender
	// 1inch api check if 1inch is approved to spend the token

	const spender_response = await fetch(`https://api.1inch.io/v4.0/1/approve/spender`);

	const json_response = await spender_response.json();
	const { address: spenderAddress } = json_response; //
	const allowance = await erc20Contract.allowance(await signer.getAddress(), spenderAddress);

	if (allowance.gte(parsedAmountFromToken)) {
		return;
	}

	const tx = await erc20Contract.approve(spenderAddress, parsedAmountFromToken);
	return tx;
};

export const safeParseUnits = (tokenQuantity: string, fromToken: Token) => {
	if (!tokenQuantity) return ethers.BigNumber.from('0');
	// eslint-disable-next-line prefer-const
	let [intToSend, decimalsToSend] = tokenQuantity.split('.');
	if (decimalsToSend && decimalsToSend.length > fromToken.decimals) {
		decimalsToSend = decimalsToSend.slice(0, fromToken.decimals);
		if (decimalsToSend.length) tokenQuantity = [intToSend, decimalsToSend].join('.');
		else tokenQuantity = intToSend;
	}
	return ethers.utils.parseUnits(tokenQuantity, ethers.BigNumber.from(fromToken.decimals));
};
export async function repeatOnFail<T extends () => Promise<any>>(
	fn: T,
	{ waitFor = 500, iterations = 1, waitForMultiplier = 1 } = {}
): Promise<AsyncReturnType<T>> {
	if (!iterations) throw new Error('iterations param required for tryRun');
	let count = 0;
	let resolved = false;
	let rtn;
	const shouldRun = () => count < iterations && !resolved;
	while (shouldRun()) {
		count++;
		try {
			rtn = await fn();
			resolved = true;
			break;
		} catch (e) {
			if (!shouldRun()) {
				throw e;
			}
			await new Promise((resolve) => setTimeout(resolve, waitFor));
			waitFor = waitFor * waitForMultiplier;
		}
	}
	return rtn;
}

export default web3_wallet;

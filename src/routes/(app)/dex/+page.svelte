<script lang="ts">
	import refresh from '$lib/assets/svg/icons/refresh.svg';
	import settings from '$lib/assets/svg/icons/settings.svg';
	import eth from '$lib/assets/svg/icons/eth.svg';

	import arrow_down from '$lib/assets/svg/icons/arrow-down.svg';
	import DropdownSlot from '$lib/dropdown/DropdownSlot.svelte';
	import { onMount } from 'svelte';
	import { dex } from '$lib/web3/web3-wallet';
	import { fromWei, putTokenName, toggle } from '$lib/global/utils';
	import { dex_store, wallet_store } from '../../../store';

	const { request, set } = dex;
	const { selectedToken, desiredToken } = set;
	let tokens: Token[] = [];
	let filtered_from_tokens: Token[] = [];
	let filtered_to_tokens: Token[] = [];

	let quote: Quote = {
		fromTokenAmount: '0',
		toTokenAmount: '0',
		estimatedGas: '0',
		fromToken: {
			symbol: '1INCH',
			name: '1INCH Token',
			decimals: 18,
			address: '0x111111111117dc0aa78b770fa6a738034120c302',
			logoURI: 'https://tokens.1inch.io/0x111111111117dc0aa78b770fa6a738034120c302.png',
			tags: ['tokens']
		},
		toToken: {
			symbol: 'DAI',
			name: 'Dai Stablecoin',
			decimals: 18,
			address: '0x6b175474e89094c44da98b954eedeac495271d0f',
			logoURI: 'https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png',
			tags: ['tokens', 'PEG:USD']
		}
	};

	$: wallet_store_state = $wallet_store;
	$: dex_store_state = $dex_store;

	onMount(() => {
		request
			.tokens()
			.then((_tokens: any) => {
				tokens = Object.keys(_tokens)
					.map((key) => _tokens[key])
					.sort((a: any, b: any) => (a.symbol < b.symbol ? -1 : 1));
				filtered_to_tokens = filtered_from_tokens = tokens;
			})
			.then(() => {
				getQuote(dex_store_state.token.desired);
			});
		// requesting exchange rate
		request.exhangeRate('ETH', 'USDT').then((data: { USDT: number }) => {
			dex_store.update((currentValue) => {
				return {
					...currentValue,
					rate: data
				};
			});
		});
	});

	const getQuote = (token: Token) => {
		desiredToken(tokens, token.symbol);
		const { selected, desired } = dex_store_state.token;
		const amount = dex_store_state.amount.selected;

		request.quote(selected.address, desired.address, amount, (_quote) => {
			console.log('_quote', _quote);
			quote = _quote;
		});
	};

	const handleTokenAmount = (event: any) => {
		dex_store.update((currentValue) => {
			if (dex_store_state.token.selected.symbol === 'ETH') {
				currentValue.amount.selected = (event.target.value * +'1000000000000000000')
					.toLocaleString()
					.replaceAll(',', '');
			} else {
				currentValue.amount.selected = event.target.value.toString();
			}
			return currentValue;
		});
		setTimeout(() => {
			getQuote(dex_store_state.token.desired);
		}, 1000);
	};

	const filterFromTokens = (event: any) => {
		const value = event.target.value;
		filtered_from_tokens = tokens.filter((token) =>
			token.symbol.toLowerCase().includes(value.toLowerCase())
		);
	};
	const filterToTokens = (event: any) => {
		const value = event.target.value;
		filtered_to_tokens = tokens.filter((token) =>
			token.symbol.toLowerCase().includes(value.toLowerCase())
		);
	};
</script>

<svelte:head>
	<title>{'DEX'}</title>
</svelte:head>

<div class="flex flex-col mx-auto px-6 py-12 bg-secondary rounded-2xl w-full tablet:w-2/4 my-12">
	<!--  -->
	<div class="flex p-2 justify-between my-2">
		<span class="text-accent" />
		<div class="flex gap-2">
			<img
				src={refresh}
				alt=""
				class="w-4 cursor-pointer border-2 rounded-full border-secondary"
				on:click={() => {
					dex_store.update((currentValue) => {
						const temp_token = currentValue.token.selected;

						currentValue.token.selected = currentValue.token.desired;
						currentValue.token.desired = temp_token;

						return currentValue;
					});
					getQuote(dex_store_state.token.desired);
				}}
			/>
			<img src={settings} alt="" class="w-4 rounded-full" />
		</div>
	</div>
	<!--  -->

	<div class="flex flex-col gap-3 ">
		<div class="flex flex-col bg-secondary-light text-primary py-4 px-6 gap-3 rounded-xl relative">
			<div class="flex justify-between">
				<span />
				<span>Balance: {fromWei(wallet_store_state.balance, 'ether')} </span>
			</div>

			<div class="flex flex-col gap-2 w-full">
				<DropdownSlot bg="primary" id="from_token" border="primary" rounded="md">
					<div slot="active" class="w-full">
						<div class="flex gap-2 justify-between rounded-lg">
							<img
								src={dex_store_state.token.selected?.logoURI}
								alt=""
								class="w-4 h-4 rounded-full"
							/>
							<span>{dex_store_state.token.selected?.name} </span>
							<img src={arrow_down} alt="" class="w-4 rounded-full" />
						</div>
					</div>
					<div slot="items" class="w-full  bg-primary p-2 rounded-lg gap-y-4 flex flex-col">
						<div class="flex gap-2">
							<input
								class="w-full bg-transparent border-2 border-secondary rounded-lg p-2 text-center"
								type="text"
								placeholder="Search"
								on:input={filterFromTokens}
							/>
						</div>
						{#each filtered_from_tokens as token}
							<div
								class="flex gap-2 cursor-pointer"
								on:click={() => {
									selectedToken(tokens, token.symbol);
									dex_store.update((currentValue) => {
										currentValue.token.selected = token;
										return currentValue;
									});
									toggle('from_token', 'hidden');
								}}
							>
								<img src={token.logoURI} alt="" class="w-4 h-4 rounded-full" />
								<span>{token.symbol}</span>
							</div>
						{/each}
					</div>
				</DropdownSlot>
				<input
					type="number"
					class="px-4 py-2 rounded-lg border-2 border-secondary text-secondary"
					on:input={handleTokenAmount}
					placeholder={dex_store_state.amount.selected}
				/>
			</div>
		</div>

		<div class="flex flex-col text-primary py-4 px-6 gap-3 rounded-xl relative">
			<div class="flex justify-between">
				<span>You Buy</span>
			</div>

			<div class="flex flex-col gap-2 ">
				<DropdownSlot bg="primary" id="to_token" border="primary" rounded="md">
					<div slot="active" class="w-full">
						<div class="flex gap-2 justify-between rounded-lg">
							<img
								src={dex_store_state.token.desired?.logoURI ?? eth}
								alt=""
								class="w-4 h-4 rounded-full"
							/>
							<span>{dex_store_state.token.desired?.name ?? 'ETH'} </span>
							<img src={arrow_down} alt="" class="w-4 rounded-full" />
						</div>
					</div>
					<div slot="items" class="w-full bg-primary p-2 rounded-lg gap-y-4 flex flex-col">
						<div class="flex gap-2">
							<input
								class="w-full bg-transparent border-2 border-secondary rounded-lg p-2 text-center"
								type="text"
								placeholder="Search"
								on:input={filterToTokens}
							/>
						</div>
						{#each filtered_to_tokens as token}
							<div
								class="flex gap-2 cursor-pointer"
								on:click={() => {
									getQuote(token);
									toggle('to_token', 'hidden');
								}}
							>
								<img src={token.logoURI} alt="" class="w-4 h-4 rounded-full" />
								<span>{token.symbol}</span>
							</div>
						{/each}
					</div>
				</DropdownSlot>
				<input
					type="number"
					class="px-4 py-2 rounded-lg border-2 border-secondary text-secondary"
					bind:value={quote.toTokenAmount}
					disabled
				/>
			</div>

			<div class="flex flex-col justify-between items-start gap-4">
				<div class="flex flex-col gap-3 text-secondary-light text-lg">
					<span class="font-semibold"> LP Aggregator </span>
					<span class="font-light">
						Tx cost 0 Ξ (~ ${parseFloat(
							(
								+fromWei((+quote?.estimatedGas * 1000000000).toString(), 'ether') *
								dex_store_state.rate.USDT
							).toString()
						).toFixed(3)} Ξ)
					</span>
				</div>
				<div>
					<div class="flex gap-2 items-start justify-start">
						<button
							on:click={() => {
								dex.set.slippage(0.1);
								getQuote(dex_store_state.token.desired);
							}}
							class="border-2 border-primary px-4 py-1 rounded-lg text-primary {dex_store_state.slippage ===
							0.1
								? 'bg-accent'
								: 'bg-transparent'}"
						>
							0.1%
						</button>
						<button
							on:click={() => {
								dex.set.slippage(0.5);
								getQuote(dex_store_state.token.desired);
							}}
							class="border-2 border-primary px-4 py-1 rounded-lg text-primary {dex_store_state.slippage ===
							0.5
								? 'bg-accent'
								: 'bg-transparent'}"
						>
							0.5%
						</button>
						<button
							class="border-2 border-primary px-4 py-1 rounded-lg text-primary {dex_store_state.slippage ===
							1
								? 'bg-accent'
								: 'bg-transparent'}"
							on:click={() => {
								dex.set.slippage(1);
								getQuote(dex_store_state.token.desired);
							}}
						>
							1%
						</button>
					</div>
				</div>
			</div>
		</div>

		<div class="flex items-center justify-center  text-danger text-xs" style="word-break: all">
			<!--
			extract token address from the description or reason using regex
		 -->

			{putTokenName(
				dex_store_state.error?.description ?? dex_store_state.tx_error?.reason ?? '',
				tokens
			)}
		</div>
		<button
			class="w-full rounded-lg bg-accent text-primary font-semibold py-3"
			on:click={() => {
				const { selected, desired } = dex_store_state.token;
				const amount = dex_store_state.amount.selected;
				request.swap(selected.address, desired.address, amount,(data) => {
					console.log(data);
				});
			}}
		>
			Swap
		</button>
	</div>
</div>

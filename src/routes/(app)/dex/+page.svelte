<script lang="ts">
	import refresh from '$lib/assets/svg/icons/refresh.svg';
	import settings from '$lib/assets/svg/icons/settings.svg';
	import eth from '$lib/assets/svg/icons/eth.svg';

	import arrow_down from '$lib/assets/svg/icons/arrow-down.svg';
	import DropdownSlot from '$lib/dropdown/DropdownSlot.svelte';
	import { onMount } from 'svelte';
	import { dex } from '$lib/web3/web3-wallet';
	import { fromWei, toggle } from '$lib/global/utils';
	import { dex_store, wallet_store } from '../../../store';

	const { request, set, events } = dex;
	const { selectedToken, selectedTokenAmount, desiredToken, desiredTokenAmount } = set;
	let tokens: Token[] = [];
	let filtered_from_tokens: Token[] = [];
	let filtered_to_tokens: Token[] = [];

	let quote: Quote = {
		fromTokenAmount: '0',
		toTokenAmount: '0',
		estimatedGas: '0',
		fromToken: {
			symbol: 'ETH',
			name: '',
			decimals: 0,
			address: '',
			logoURI: '',
			tags: []
		},
		toToken: {
			symbol: 'DAI',
			name: '',
			decimals: 0,
			address: '',
			logoURI: '',
			tags: []
		}
	};

	$: wallet_store_state = $wallet_store;
	$: dex_store_state = $dex_store;

	onMount(() => {
		request.tokens().then((_tokens: any) => {
			tokens = Object.keys(_tokens)
				.map((key) => _tokens[key])
				.sort((a: any, b: any) => (a.symbol < b.symbol ? -1 : 1));
			filtered_from_tokens = tokens;
			filtered_to_tokens = tokens;
			selectedToken(tokens, 'ETH');
			desiredToken(tokens, 'DAI');
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

	const handleTokenAmount = (event: any) => {
		dex_store.update((currentValue) => {
			currentValue.amount.selected = (event.target.value * +'1000000000000000000').toString();
			return currentValue;
		});
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
		<span class="text-accent">Token</span>
		<div class="flex gap-2">
			<img src={refresh} alt="" class="w-4  rounded-full" />
			<img src={settings} alt="" class="w-4 rounded-full" />
		</div>
	</div>
	<!--  -->

	<div class="flex flex-col gap-3 ">
		<div class="flex flex-col bg-secondary-light text-primary py-4 px-6 gap-3 rounded-4xl relative">
			<div class="flex justify-between">
				<span>You sell</span>
				<span>Balance: {fromWei(wallet_store_state.balance, 'ether')} </span>
			</div>

			<div class="flex flex-col gap-2 w-48">
				<DropdownSlot bg="primary" id="from_token" border="primary" rounded="md">
					<div slot="active" class="w-full">
						<div class="flex gap-2 justify-between rounded-lg">
							<img
								src={dex_store_state.token.selected?.logoURI ?? eth}
								alt=""
								class="w-4 h-4 rounded-full"
							/>
							<span>{dex_store_state.token.selected?.symbol ?? 'ETH'} </span>
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
				/>
			</div>
		</div>

		<div
			class="flex flex-col text-primary border-2 border-secondary-light py-4 px-6 gap-3 rounded-4xl relative"
		>
			<div class="flex justify-between">
				<span>You Buy</span>
			</div>

			<div class="flex flex-col gap-2 w-48">
				<DropdownSlot bg="primary" id="to_token" border="primary" rounded="md">
					<div slot="active" class="w-full">
						<div class="flex gap-2 justify-between rounded-lg">
							<img
								src={dex_store_state.token.desired?.logoURI ?? eth}
								alt=""
								class="w-4 h-4 rounded-full"
							/>
							<span>{dex_store_state.token.desired?.symbol ?? 'ETH'} </span>
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
									desiredToken(tokens, token.symbol);
									request.quote(
										dex_store_state.token.selected.address,
										dex_store_state.token.desired.address,
										dex_store_state.amount.selected,
										(_quote) => {
											quote = _quote;
										}
									);
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

			<div
				class="flex justify-between items-center p-4 rounded-2xl border-2 border-secondary-light"
			>
				<div class="flex flex-col gap-3 text-secondary-light text-lg">
					<span class="font-semibold"> LP Aggregator </span>
					<span class="font-light">
						Tx cost 0 Ξ (~ ${+fromWei((+quote?.estimatedGas * 1000000000).toString(), 'ether') *
							dex_store_state.rate.USDT} Ξ)
					</span>
				</div>
				<span class="text-xl font-light">{quote.toTokenAmount}</span>
			</div>
		</div>

		<button
			class="w-full rounded-lg bg-accent text-primary font-semibold py-3"
			on:click={() => {
				request.swap(
					dex_store_state.token.selected.address,
					dex_store_state.token.desired.address,
					dex_store_state.amount.selected,
					(data) => {
						console.log(data);
					}
				);
			}}>Swap</button
		>
	</div>
</div>

<script lang="ts">
	import refresh from '$lib/assets/svg/icons/refresh.svg';
	import settings from '$lib/assets/svg/icons/settings.svg';
	import eth from '$lib/assets/svg/icons/eth.svg';
	import dai from '$lib/assets/svg/icons/dai.svg';

	import arrow_down from '$lib/assets/svg/icons/arrow-down.svg';
	import arrow_down_active from '$lib/assets/svg/icons/arrow-down-active.svg';
	import DropdownSlot from '$lib/dropdown/DropdownSlot.svelte';
	import { onMount } from 'svelte';
	import { each } from 'svelte/internal';
	import Dropdown from '$lib/dropdown/Dropdown.svelte';
	import Input from '$lib/form/Input.svelte';
	import web3Wallet, { dex } from '$lib/web3/web3-wallet';
	import { fromWei, toggle, web3 } from '$lib/global/utils';
	import { dex_store, wallet_store } from '../../../store';
	import web3_wallet from '$lib/web3/web3-wallet';

	const { swap, getQuote, getTokens, setSelectedToken, selectedTokenBalance } = dex;
	let tokens: Token[] = [];
	let filtered_tokens: Token[] = [];
	let selected_token: Token;
	let desired_token: Token;

	let quote: Quote;

	$: wallet_details = $wallet_store;

	onMount(() => {
		getTokens().then((_tokens: any) => {
			tokens = Object.keys(_tokens)
				.map((key) => _tokens[key])
				.sort((a: any, b: any) => (a.symbol < b.symbol ? -1 : 1));
			filtered_tokens = tokens;
			selected_token = setSelectedToken(tokens, 'ETH');
		});
	});

	const filterTokens = (event: any) => {
		const value = event.target.value;
		filtered_tokens = tokens.filter((token) =>
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
				<span>Balance: {fromWei(wallet_details.balance, 'ether')} </span>
			</div>

			<div class="flex w-48">
				<DropdownSlot bg="primary" id="from_token" border="primary" rounded="md">
					<div slot="active" class="w-full">
						<div class="flex gap-2 justify-between rounded-lg">
							<img src={selected_token?.logoURI ?? eth} alt="" class="w-4 h-4 rounded-full" />
							<span>{selected_token?.symbol ?? 'ETH'} </span>
							<img src={arrow_down} alt="" class="w-4 rounded-full" />
						</div>
					</div>
					<div slot="items" class="w-full  bg-primary p-2 rounded-lg gap-y-4 flex flex-col">
						<div class="flex gap-2">
							<input
								class="w-full bg-transparent border-2 border-secondary rounded-lg p-2 text-center"
								type="text"
								placeholder="Search"
								on:input={filterTokens}
							/>
						</div>
						{#each filtered_tokens as token}
							<div
								class="flex gap-2 cursor-pointer"
								on:click={() => {
									dex_store.update((currentValue) => {
										currentValue.selectedToken = token;
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
			</div>
		</div>

		<div
			class="flex flex-col text-primary border-2 border-secondary-light py-4 px-6 gap-3 rounded-4xl relative"
		>
			<div class="flex justify-between">
				<span>You Buy</span>
			</div>

			<div class="flex w-48">
				<DropdownSlot bg="primary" id="to_token" border="primary" rounded="md">
					<div slot="active" class="w-full">
						<div class="flex gap-2 justify-between rounded-lg">
							<img src={tokens[0]?.logoURI ?? eth} alt="" class="w-4 h-4 rounded-full" />
							<span>{tokens[0]?.symbol ?? 'ETH'} </span>
							<img src={arrow_down} alt="" class="w-4 rounded-full" />
						</div>
					</div>
					<div slot="items" class="w-full bg-primary p-2 rounded-lg gap-y-4 flex flex-col">
						{#each tokens as token}
							<div
								class="flex gap-2 cursor-pointer"
								on:click={() => {
									desired_token = token;
									getQuote(selected_token.address, desired_token.address, 1, (_quote) => {
										quote = _quote;
									});
								}}
							>
								<img src={token.logoURI} alt="" class="w-4 h-4 rounded-full" />
								<span>{token.symbol}</span>
							</div>
						{/each}
					</div>
				</DropdownSlot>
			</div>

			<div
				class="flex justify-between items-center p-4 rounded-2xl border-2 border-secondary-light"
			>
				<div class="flex flex-col gap-3 text-secondary-light text-lg">
					<span class="font-semibold"> LP Aggregator </span>
					<span class="font-light">
						Tx cost 0 Ξ (~{web3.utils.fromWei(quote?.estimatedGas.toString() ?? '0', 'ether')})
					</span>
				</div>
				<span class="text-xl font-light">0</span>
			</div>
		</div>

		<button class="w-full rounded-lg bg-accent text-primary font-semibold py-3" on:click={swap}
			>Swap</button
		>
	</div>
</div>

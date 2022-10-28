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

	export let data: DEX;
	export let tokens: any = [];

	onMount(() => {
		data.tokens().then((_tokens: any) => {
			// object of objects to array
			tokens = Object.keys(_tokens).map((key) => _tokens[key]);
			console.log(JSON.stringify(tokens), 'tokens....');
		});
	});
</script>

<svelte:head>
	<title>{data.title}</title>
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
				<span>Balance: 0.0</span>
			</div>

			<div class="flex w-48">
				<DropdownSlot bg="primary" id="from_token" border="primary" rounded="md">
					<div slot="active" class="w-full">
						<div class="flex gap-2 justify-between rounded-lg">
							<img src={tokens[0]?.logoURI ?? eth} alt="" class="w-4 h-4 rounded-full" />
							<span>{tokens[0]?.symbol ?? 'ETH'} </span>
							<img src={arrow_down} alt="" class="w-4 rounded-full" />
						</div>
					</div>
					<div slot="items" class="w-full  bg-primary p-2 rounded-lg gap-y-4 flex flex-col">
						<div class="flex gap-2">
							<Input type="text" placeholder="Search" round="lg" border="secondary" />
						</div>
						{#each tokens as token}
							<div class="flex gap-2">
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
							<div class="flex gap-2">
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
					<span class="font-light"> Tx cost 0 Ξ (~$0,00) </span>
				</div>
				<span class="text-xl font-light">0</span>
			</div>
		</div>

		<button class="w-full rounded-lg bg-accent text-primary font-semibold py-3" on:click={data.swap}
			>Swap</button
		>
	</div>
</div>

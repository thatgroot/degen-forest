<script lang="ts">
	import Tab from '$lib/tab/Tab.svelte';
	import TabBar from '$lib/tab/TabBar.svelte';
	import NftFilters from '$lib/filters/NFTFilters.svelte';
	import cumulative_unique_owners from '$lib/assets/svg/graphics/cumulative-unique-owners.svg';
	import daily_mean_price from '$lib/assets/svg/graphics/daily-mean-price.svg';
	import daily_median_price from '$lib/assets/svg/graphics/daily-median-price.svg';
	import daily_nft_mints from '$lib/assets/svg/graphics/daily-nft-mints.svg';
	import marketplace_volume from '$lib/assets/svg/graphics/marketplace-volume.svg';
	import marketplace_volume_sales from '$lib/assets/svg/graphics/marketplace-volumes-sales.svg';
	import price_history from '$lib/assets/svg/graphics/price-history.svg';
	import unique_owners from '$lib/assets/svg/graphics/unique-owners.svg';
	import twitter from '$lib/assets/svg/icons/twitter.svg';
	import info from '$lib/assets/svg/icons/info.svg';
	import Dropdown from '$lib/dropdown/Dropdown.svelte';

	import usdc from '$lib/assets/svg/icons/crypto/usdc.svg';
	import usdt from '$lib/assets/svg/icons/crypto/usdt.svg';
	import ray from '$lib/assets/svg/icons/crypto/ray.svg';
	import eth from '$lib/assets/svg/icons/crypto/eth.svg';
	import bitcoin from '$lib/assets/svg/icons/crypto/bitcoin.svg';
	import atlas from '$lib/assets/svg/icons/crypto/atlas.svg';
	import uma from '$lib/assets/svg/icons/crypto/uma.svg';
	import abt from '$lib/assets/svg/icons/crypto/abt.svg';
	import act from '$lib/assets/svg/icons/crypto/act.svg';
	import add from '$lib/assets/svg/icons/crypto/add.svg';
	import aeon from '$lib/assets/svg/icons/crypto/aeon.svg';
	import ampl from '$lib/assets/svg/icons/crypto/ampl.svg';
	import ant from '$lib/assets/svg/icons/crypto/ant.svg';
	import apex from '$lib/assets/svg/icons/crypto/apex.svg';
	import ark from '$lib/assets/svg/icons/crypto/ark.svg';
	import arn from '$lib/assets/svg/icons/crypto/arn.svg';
	import ast from '$lib/assets/svg/icons/crypto/ast.svg';
	import atm from '$lib/assets/svg/icons/crypto/atm.svg';
	import atom from '$lib/assets/svg/icons/crypto/atom.svg';
	import audr from '$lib/assets/svg/icons/crypto/audr.svg';
	import bch from '$lib/assets/svg/icons/crypto/bch.svg';

	const toggle = () => {
		const dropdown = document.querySelector('#nft-filters');
		dropdown?.classList.toggle('hidden');
	};

	const toggle_accordion = () => {
		const dropdown = document.querySelector('#search-accordion');
		dropdown?.classList.toggle('hidden');
	};

	const top_coins = [
		// 		usdc
		// usdt
		// ray
		// eth
		// atlas
		// uma
		// abt
		// act
		// add
		// aeon
		// ampl
		// ant
		// apex
		// ark
		// arn
		// ast
		// atm
		// atom
		// audr
		// bch
		{
			name: 'USDC',
			icon: usdc,
			price: '$0.999024',
			price_1d: '0.00',
			volume_1d: '$32.06M',
			volume_1d_percent: '+10.36',
			users_1d: '41,845',
			new_users_1d: '2,252'
		},
		{
			name: 'RAY',
			icon: ray,
			price: '$0.582890',
			price_1d: '+2.9',
			volume_1d: '$2.13M',
			volume_1d_percent: '-9.24',
			users_1d: '1,782',
			new_users_1d: '167'
		},
		{
			name: 'USDT',
			icon: usdt,
			price: '$0.999024',
			price_1d: '0.00',
			volume_1d: '$32.06M',
			volume_1d_percent: '+10.36',
			users_1d: '41,845',
			new_users_1d: '2,252'
		},
		{
			name: 'ETH',
			icon: eth,
			price: '$3,000.00',
			price_1d: '+0.1',
			volume_1d: '$1.01B',
			volume_1d_percent: '+0.01',
			users_1d: '1,782',
			new_users_1d: '167'
		},
		{
			name: 'ATLAS',
			icon: atlas,
			price: '$0.582890',
			price_1d: '+2.9',
			volume_1d: '$2.13M',
			volume_1d_percent: '-9.24',
			users_1d: '1,782',
			new_users_1d: '167'
		},
		{
			name: 'UMA',
			icon: uma,
			price: '$0.582890',
			price_1d: '+2.9',
			volume_1d: '$2.13M',
			volume_1d_percent: '-9.24',
			users_1d: '1,782',
			new_users_1d: '167'
		},
		{
			name: 'ABT',
			icon: abt,
			price: '$0.582890',
			price_1d: '+2.9',
			volume_1d: '$2.13M',
			volume_1d_percent: '-9.24',
			users_1d: '1,782',
			new_users_1d: '167'
		},
		{
			name: 'ACT',
			icon: act,
			price: '$0.582890',
			price_1d: '+2.9',
			volume_1d: '$2.13M',
			volume_1d_percent: '-9.24',
			users_1d: '1,782',
			new_users_1d: '167'
		},
		{
			name: 'ADD',
			icon: add,
			price: '$0.582890',
			price_1d: '+2.9',
			volume_1d: '$2.13M',
			volume_1d_percent: '-9.24',
			users_1d: '1,782',
			new_users_1d: '167'
		},
		{
			name: 'AEON',
			icon: aeon,
			price: '$0.582890',
			price_1d: '+2.9',
			volume_1d: '$2.13M',
			volume_1d_percent: '-9.24',
			users_1d: '1,782',
			new_users_1d: '167'
		},
		{
			name: 'AMPL',
			icon: ampl,
			price: '$0.582890',
			price_1d: '+2.9',
			volume_1d: '$2.13M',
			volume_1d_percent: '-9.24',
			users_1d: '1,782',
			new_users_1d: '167'
		},
		{
			name: 'ANT',
			icon: ant,
			price: '$0.582890',
			price_1d: '+2.9',
			volume_1d: '$2.13M',
			volume_1d_percent: '-9.24',
			users_1d: '1,782',
			new_users_1d: '167'
		},
		{
			name: 'APEX',
			icon: apex,
			price: '$0.582890',
			price_1d: '+2.9',
			volume_1d: '$2.13M',
			volume_1d_percent: '-9.24',
			users_1d: '1,782',
			new_users_1d: '167'
		},
		{
			name: 'ARK',
			icon: ark,
			price: '$0.582890',
			price_1d: '+2.9',
			volume_1d: '$2.13M',
			volume_1d_percent: '-9.24',
			users_1d: '1,782',
			new_users_1: '167'
		}
	];

	const top_protocols = [
		{
			icon: usdc,
			program: 'Orca Whirlpool',
			swaps_1d: '$20.26M',
			deposits_1d: '$TBU',
			withdrawals_1d: '$TBU',
			borrows_1d: '$TBU',
			repayments_1d: '$TBU',
			liquidity_provided_1d: '$4.07M',
			liquidity_removed_1d: '$3.94M',
			top_token: 'USD Coin',
			users_1d: '4,274',
			new_users_1d: '444'
		},
		{
			icon: abt,
			program: 'Jupiter v3',
			swaps_1d: '$15.48M',
			deposits_1d: '$TBU',
			withdrawals_1d: '$TBU',
			borrows_1d: '$TBU',
			repayments_1d: '$TBU',
			liquidity_provided_1d: '$TBU',
			liquidity_removed_1d: '$TBU',
			top_token: 'Wrapped SOL',
			users_1d: '1,594',
			new_users_1d: '282'
		},
		{
			icon: ampl,
			program: 'Saber Swap',
			swaps_1d: '$10.26M',
			deposits_1d: '$TBU',
			withdrawals_1d: '$TBU',
			borrows_1d: '$TBU',
			repayments_1d: '$TBU',
			liquidity_provided_1d: '$108,710.10',
			liquidity_removed_1d: '$41,015.55',
			top_token: 'USD Coin',
			users_1d: '1,251',
			new_users_1d: '254'
		},
		{
			icon: ant,
			program: 'Raydium Amm',
			swaps_1d: '$9.35M',
			deposits_1d: '$TBU',
			withdrawals_1d: '$TBU',
			borrows_1d: '$TBU',
			repayments_1d: '$TBU',
			liquidity_provided_1d: '$1.41M',
			liquidity_removed_1d: '$2.15M',
			top_token: 'USD Coin',
			users_1d: '7,629',
			new_users_1d: '718'
		},
		{
			icon: apex,
			program: 'Jupiter v2',
			swaps_1d: '$8.71M',
			deposits_1d: '$TBU',
			withdrawals_1d: '$TBU',
			borrows_1d: '$TBU',
			repayments_1d: '$TBU',
			liquidity_provided_1d: '$TBU',
			liquidity_removed_1d: '$TBU',
			top_token: 'Wrapped SOL',
			users_1d: '1,292',
			new_users_1d: '334'
		},
		{
			icon: ark,
			program: 'Orca Swap 2',
			swaps_1d: '$2.94M',
			deposits_1d: '$TBU',
			withdrawals_1d: '$TBU',
			borrows_1d: '$TBU',
			repayments_1d: '$TBU',
			liquidity_provided_1d: '$171,588.39',
			liquidity_removed_1d: '$31,491.34',
			top_token: 'USD Coin',
			users_1d: '2,062',
			new_users_1d: '306'
		},
		{
			icon: ark,
			program: 'Mercurial',
			swaps_1d: '$2.58M',
			deposits_1d: '$TBU',
			withdrawals_1d: '$TBU',
			borrows_1d: '$TBU',
			repayments_1d: '$TBU',
			liquidity_provided_1d: '$TBU',
			liquidity_removed_1d: '$TBU',
			top_token: 'Wrapped SOL',
			users_1d: '1,969',
			new_users_1d: '471'
		},
		{
			icon: atom,
			program: 'Lifinity Swap',
			swaps_1d: '$2.04M',
			deposits_1d: '$TBU',
			withdrawals_1d: '$TBU',
			borrows_1d: '$TBU',
			repayments_1d: '$TBU',
			liquidity_provided_1d: '$TBU',
			liquidity_removed_1d: '$TBU',
			top_token: 'USD Coin',
			users_1d: '6,758',
			new_users_1d: '556'
		},
		{
			icon: bch,
			program: 'Serum 3',
			swaps_1d: '$1.69M',
			deposits_1d: '$TBU',
			withdrawals_1d: '$TBU',
			borrows_1d: '$TBU',
			repayments_1d: '$TBU',
			liquidity_provided_1d: '$TBU',
			liquidity_removed_1d: '$TBU',
			top_token: 'USD Coin',
			users_1d: '1,000',
			new_users_1d: '100'
		}
	];

	const checkForNegativeSign = (value: string | number) => {
		return value.toString().includes('-') ? true : false;
	};
	let active = 'top-coins';
</script>

<svelte:head>
	<title>Popular Collections</title>
</svelte:head>
<div class="flex flex-col gap-6">
	<div class="flex flex-col justify-start gap-3">
		<h1 class="text-primary text-2xl">Solana NFTs</h1>

		<div class="grid grid-cols-1 tablet:grid-cols-2 laptop-sm:grid-cols-3 laptop:grid-cols-4 gap-3">
			{#each ['Smart Money Inflow', 'Top Social Buying', 'Top Movers', 'Smart Money Outflow'] as nft}
				<div class="flex w-full flex-col gap-4  px-6 py-4  bg-secondary  rounded-lg">
					<div class="flex justify-between items-center gap-8 text-primary">
						<span class="text-lg">{nft}</span>
						<div class="flex gap-3">
							<span>1D</span>
							<span class="text-secondary-light">1W</span>
						</div>
					</div>
					<table class="w-full table table-auto">
						<thead class="text-xs text-secondary-light">
							<tr>
								<th class="font-light">Token</th>
								<th class="font-light">Price</th>
								<th class="font-light">Price change</th>
							</tr>
						</thead>
						<tbody class="text-primary text-sm font-light">
							{#each [{ defi: 'POLIS', price: 0.38, change: -11.54 }, { defi: 'wSOL', price: 34.34, change: 2.97 }, { defi: 'mSOL', price: 36.4, change: 2.43 }, { defi: 'LDO', price: 1.61, change: 0.83 }, { defi: 'DUST', price: 1.22, change: 0.29 }] as { defi, price, change }, i (i)}
								<tr class="text-center hover:bg-secondary-light cursor-pointer">
									<td class="p-2">
										<div class="flex gap-2 items-center">
											<img
												src="https://www.hellomoon.io/_next/image?url=https%3A%2F%2Fimages.hellomoon.io%2Fnfts%2F60%2Fsodead.webp&w=128&q=75"
												alt=""
												class="w-6 h-6 rounded-full"
											/>
											<span class="text-sm"> {defi} </span>
										</div>
									</td>
									<td class="p-2">
										<span class="text-s"> {price} SOL </span>
									</td>
									<td class="p-2">
										<span
											class="text-sm  {checkForNegativeSign(change)
												? 'text-danger'
												: 'text-success'}"
										>
											{change}%
										</span>
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			{/each}
		</div>
	</div>

	<div class="flex flex-col gap-4 w-full">
		<div class="flex px-4 py-2">
			<TabBar>
				<Tab
					title="Top DeFi Coins"
					onclick={() => {
						active = 'top-coins';
					}}
					active={active === 'top-coins'}
				/>
				<Tab
					title="Top DeFi Protocols"
					onclick={() => {
						active = 'top-protocols';
					}}
					active={active === 'top-protocols'}
				/>
			</TabBar>
		</div>
		<NftFilters />
	</div>
</div>

<div class="overflow-x-auto relative my-4 px-2 rounded-lg  border-2 border-secondary">
	{#if active === 'top-coins'}
		<table class="w-full text-primary text-xs">
			<thead class="text-xs border-b-2 border-secondary">
				<tr class="text-primary">
					<th class="p-3 text-start">#</th>
					<th class="p-3 text-start">Name</th>
					<th class="p-3 text-start">Price</th>
					<th class="p-3 text-start">Δ Price 1D</th>
					<th class="p-3 text-start">Volume 1D</th>
					<th class="p-3 text-start">Δ Volume 1D</th>
					<th class="p-3 text-start">Users 1D</th>
					<th class="p-3 text-start">New Users 1D</th>
				</tr>
			</thead>
			<tbody>
				{#each top_coins as { name, icon, price, price_1d, volume_1d, volume_1d_percent, users_1d, new_users_1d }, i (i)}
					<tr class={` ${i % 2 == 0 ? '' : 'bg-secondary r'} rounded-sm`}>
						<td class="p-3 text-start">{i + 1}</td>
						<td class="p-3 text-start">
							<div class="flex gap-3 items-center">
								<img src={icon} alt="" class="w-6 h-6 rounded-full" />
								<span class="text-sm"> {name} </span>
							</div>
						</td>
						<td class="p-3 text-start">
							<span class="text-sm"> {price} </span>
						</td>
						<td class="p-3 text-start"> <span class="text-sm"> {price_1d} </span> </td>
						<td class="p-3 text-start"> <span class="text-sm"> {volume_1d} </span> </td>
						<td class="p-3 text-start"> <span class="text-sm"> {volume_1d_percent} </span> </td>
						<td class="p-3 text-start"> <span class="text-sm"> {users_1d} </span> </td>
						<td class="p-3 text-start"> <span class="text-sm"> {new_users_1d} </span> </td>
					</tr>
				{/each}
			</tbody>
		</table>
	{:else}
		<table class="w-full text-primary text-xs">
			<thead class="text-xs border-b-2 border-secondary">
				<tr class="text-primary">
					<th class="p-3 text-start">#</th>
					<th class="p-3 text-start">Program</th>
					<th class="p-3 text-start">Swaps 1D</th>
					<th class="p-3 text-start">Deposits 1D</th>
					<th class="p-3 text-start">Withdraws 1D</th>
					<th class="p-3 text-start">Borrows 1D</th>
					<th class="p-3 text-start">Repayments 1D</th>
					<th class="p-3 text-start">Liquidity Provided 1D</th>
					<th class="p-3 text-start">Liquidity Removed 1D</th>
					<th class="p-3 text-start">Top Token</th>
					<th class="p-3 text-start">Users 1D</th>
					<th class="p-3 text-start">New Users 1D</th>
				</tr>
			</thead>

			<tbody>
				{#each top_protocols as { program, icon, swaps_1d, deposits_1d, withdrawals_1d, borrows_1d, repayments_1d, liquidity_provided_1d, liquidity_removed_1d, top_token, users_1d, new_users_1d }, i (i)}
					<tr class="text-start  border-b-2 border-secondary">
						<td class="p-3 text-start">{i + 1}</td>
						<td class="p-3 text-start">
							<div class="flex gap-3 items-center">
								<img src={icon} alt="" class="w-6 h-6 rounded-full" />
								<span class="text-sm"> {program} </span>
							</div>
						</td>
						<td class="p-3 text-start"> <span class="text-sm"> {swaps_1d} </span> </td>
						<td class="p-3 text-start"> <span class="text-sm"> {deposits_1d} </span> </td>
						<td class="p-3 text-start"> <span class="text-sm"> {withdrawals_1d} </span> </td>
						<td class="p-3 text-start"> <span class="text-sm"> {borrows_1d} </span> </td>
						<td class="p-3 text-start"> <span class="text-sm"> {repayments_1d} </span> </td>
						<td class="p-3 text-start"> <span class="text-sm"> {liquidity_provided_1d} </span> </td>
						<td class="p-3 text-start"> <span class="text-sm"> {liquidity_removed_1d} </span> </td>
						<td class="p-3 text-start"> <span class="text-sm"> {top_token} </span> </td>
						<td class="p-3 text-start"> <span class="text-sm"> {users_1d} </span> </td>
						<td class="p-3 text-start"> <span class="text-sm"> {new_users_1d} </span> </td>
					</tr>
				{/each}
			</tbody>
		</table>
		<div class="p-3 flex justify-center">
			<button class="bg-primary text-white rounded-sm px-3 py-2 cursor-pointer">Load More</button>
		</div>
	{/if}
</div>

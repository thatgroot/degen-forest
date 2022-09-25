<script lang="ts">
	import TabBar from '$lib/tab/TabBar.svelte';
	import Tab from '$lib/tab/Tab.svelte';
	import solana from '$lib/assets/svg/icons/solana.svg';
	import phantom from '$lib/assets/svg/icons/phantom.svg';
	import brave from '$lib/assets/svg/icons/brave.svg';
	import metamask from '$lib/assets/svg/icons/metamask.svg';
	import walletconnect from '$lib/assets/svg/icons/walletconnect.svg';
	import coinbase from '$lib/assets/svg/icons/coinbase.svg';
	import trustwallet from '$lib/assets/svg/icons/trustwallet.svg';
	import arrow_down from '$lib/assets/svg/icons/arrow-down.svg';
	import bell from '$lib/assets/svg/icons/bell.svg';
	import copy from '$lib/assets/svg/icons/copy.svg';
	import avatar from '$lib/assets/art/avatar.png';
	// import sell, stack, referesh and poweroff svgs
	import sell from '$lib/assets/svg/icons/sell.svg';
	import stack from '$lib/assets/svg/icons/stack.svg';
	import refresh from '$lib/assets/svg/icons/refresh-active.svg';
	import poweroff from '$lib/assets/svg/icons/poweroff.svg';

	import eth from '$lib/assets/svg/icons/eth.svg';
	import ListItemCol from '$lib/list/ListItemCol.svelte';
	import ListItem from '$lib/list/ListItem.svelte';
	import Popup from '$lib/popups/Popup.svelte';

	//  list of all solana supported wallets with their icons in svg format
	const wallets = [
		{
			name: 'Phantom',
			chain: 'solana',
			subtitle: 'Detected',
			badge: 'Recommended',
			url: 'https://phantom.app/',
			logo: 'https://phantom.app/img/logo.svg'
		},
		{
			name: 'Solflare',
			chain: 'solana',
			url: 'https://solflare.com/',
			logo: 'https://solflare.com/assets/logo.26659b6d..svg'
		},

		{
			name: 'Math Wallet',
			chain: 'solana',
			url: 'https://mathwallet.org/',
			logo: 'https://doc.mathwallet.org/images/logo.svg'
		},
		{
			name: 'Brave',
			chain: 'solana',
			url: 'https://brave.com/',
			logo: brave
		},
		{
			name: 'Metamask',
			chain: 'ethereum',
			url: 'https://metamask.io/',
			logo: metamask
		},
		{
			name: 'WalletConnect',
			chain: 'ethereum',
			url: 'https://walletconnect.org/',
			logo: walletconnect
		},
		{
			name: 'Coinbase Wallet',
			chain: 'ethereum',
			url: 'https://wallet.coinbase.com/',
			logo: coinbase
		},
		{
			name: 'Trust Wallet',
			chain: 'ethereum',
			url: 'https://trustwallet.com/',
			logo: trustwallet
		}
	];

	let filtered_wallets = wallets.filter((wallet) => wallet.chain === 'solana');
	let active_chain = 'solana';

	export let toggle = false;
	export let connected = false;
	export let onClosed = () => {};
</script>

<Popup {toggle} {onClosed}>
	<div class="flex flex-col bg-secondary px-6 py-12 gap-6 h-fit min-w-[420px] relative">
		<p class="text-gradient text-center">Connect a wallet to continue</p>
		<TabBar>
			<Tab
				title="Solana"
				icon={solana}
				active={active_chain === 'solana'}
				onclick={() => {
					active_chain = 'solana';
					filtered_wallets = wallets.filter((wallet) => wallet.chain === 'solana');
				}}
			/>
			<Tab
				title="Ethereum"
				active={active_chain === 'ethereum'}
				icon={eth}
				onclick={() => {
					active_chain = 'ethereum';
					filtered_wallets = wallets.filter((wallet) => wallet.chain === 'ethereum');
				}}
			/>
		</TabBar>
		<div class="flex flex-col">
			{#each filtered_wallets as wallet}
				<ListItemCol
					title={wallet.name}
					subtitle={'Detected'}
					prefix={wallet.logo}
					badge={wallet.badge ?? ''}
				/>
			{/each}
		</div>
	</div>
</Popup>

<!--   wallet connect ui with wallet address, user avatar and a notification  -->
{#if connected}
	<div class="flex items-center gap-x-4 group relative">
		<div class="flex items-center gap-x-2">
			<img src={bell} alt="notification" class="w-8 h-8" />
		</div>
		<div
			class="flex gap-3 items-center px-3 py-1.5 hover:rounded-lg hover:bg-secondary cursor-pointer"
		>
			<img src={avatar} alt="user" class="rounded-full w-8 h-8" />

			<div class="flex items-center gap-6">
				<p class="text-sm text-primary">0x1234567890</p>
				<img src={arrow_down} alt="change wallet" />
			</div>
		</div>
		<div
			class="group-hover:block hidden absolute top-[100%] bg-primary right-0 left-0 px-2 py-2 border-2 border-secondary  rounded-lg shadow-lg"
		>
			<div class="flex flex-col justify-start gap-2 w-full">
				<ListItemCol
					title="Main Wallet"
					subtitle="1.04"
					prefix={solana}
					postfix={copy}
					insets="sm"
				/>
				<ListItemCol
					title="Bidding Wallet"
					subtitle="1.04"
					prefix={eth}
					postfix={copy}
					insets="sm"
				/>

				<div class="w-full h-[0.0625rem] rounded-full border-[0.0625rem] border-secondary" />

				<!-- listitem for sell stack refresh and poweroff -->
				<ListItem title="Sell" title_prefix={sell} />
				<ListItem title="My Items" title_prefix={stack} />
				<ListItem title="Connect a different wallet" title_prefix={refresh} />
				<ListItem title="Sign out" title_prefix={poweroff} />
			</div>
		</div>
	</div>
{/if}

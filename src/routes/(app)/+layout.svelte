<script lang="ts">
	import '../../app.css';
	import logo from '$lib/assets/svg/logo.svg';
	import wallet from '$lib/assets/svg/icons/wallet.svg';

	import Sidenav from '$lib/navigation/Sidenav.svelte';
	import Search from '$lib/form/search.svelte';
	import ConnectWallet from '$lib/button/ConnectWallet.svelte';
	import Carousel from '$lib/carousel/Carousel.svelte';
	import Topbar from '$lib/navigation/Topbar.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	let toggle: boolean = false;

	import { page } from '$app/stores';
</script>

<main class="p-0 m-0">
	<div>
		<!-- topbar -->
		<Topbar />
		<div class="flex flex-col gap-6 desktop:flex-row justify-between px-3 py-3">
			<a href="/">
				<img src={logo} alt="degen forest" class="max-w-[15rem]" />
			</a>

			<div class="flex items-center">
				<Search bg="secondary" />
			</div>
			<button
				on:click|preventDefault={() => {
					toggle = !toggle;
				}}
				class="flex btn-primary desktop:btn-accent p-0 px-2"
			>
				<img src={wallet} alt="connect wallet" class=" block px-2" />
				<div class="h-full w-2 desktop:border-r-2 desktop:border-r-accent" />
				<span class="text-sm px-6 sm:px-2 hidden desktop:block">Connect Wallet</span>
			</button>
		</div>

		<ConnectWallet
			{toggle}
			onClosed={() => {
				toggle = false;
			}}
		/>

		<!-- body -->
		<div class="flex flex-col tablet:flex-row relative">
			<!-- sidebar -->
			<Sidenav />
			<div
				class="flex flex-col w-full {$page.routeId === '(app)/marketplace/collection'
					? ''
					: 'px-8 py-6'} "
			>
				<slot />
				<Footer />
			</div>
		</div>
	</div>
</main>

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
</script>

<main class="p-0 m-0">
	<div>
		<!-- topbar -->
		<Topbar />
		<div class="flex flex-col gap-6 desktop:flex-row justify-between px-3 py-3">
			<img src={logo} alt="degen forest" />
			<div class="flex flex-row gap-3 justify-between">
				<div class="flex items-center">
					<Search bg="secondary" />
				</div>
				<button
					on:click|preventDefault={() => {
						toggle = !toggle;
					}}
					class="flex btn-primary desktop:btn-accent px-2"
				>
					<img
						src={wallet}
						alt="connect wallet"
						class="desktop:border-r-2 desktop:border-r-accent desktop:px-3 desktop:py-2 block"
					/>
					<span class="px-6 sm:px-2 hidden desktop:block">Connect Wallet</span>
				</button>
			</div>
		</div>

		<ConnectWallet
			{toggle}
			onClosed={() => {
				toggle = false;
			}}
		/>

		<!-- body -->
		<div class="flex flex-col tablet:flex-row">
			<!-- sidebar -->
			<Sidenav />
			<div class="flex flex-col w-full px-8 py-6">
				<slot />
				<Footer />
			</div>
		</div>
	</div>
</main>

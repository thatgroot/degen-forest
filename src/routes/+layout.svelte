<script lang="ts">
	import '../app.css';
	import logo from '$lib/assets/svg/logo.svg';

	import Sidenav from '$lib/navigation/Sidenav.svelte';
	import Search from '$lib/form/search.svelte';
	import ConnectWallet from '$lib/button/ConnectWallet.svelte';
	import Carousel from '$lib/carousel/Carousel.svelte';
	import Topbar from '$lib/navigation/Topbar.svelte';
</script>

<main class="p-0 m-0">
	<div>
		<!-- topbar -->
		<Topbar />
		<div class="flex justify-between px-3 py-3">
			<img src={logo} alt="degen forest" />
			<div>
				<Search bg="secondary" />
			</div>
			<ConnectWallet />
		</div>

		<!-- body -->
		<div class="flex flex-col tablet:flex-row">
			<!-- sidebar -->
			<Sidenav />
			<div class="w-full tablet:px-16 py-8">
				<slot />
			</div>
		</div>
	</div>
</main>

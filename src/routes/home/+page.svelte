<script lang="ts">
	import degods from '$lib/assets/art/degods.png';
	import Sidenav from '$lib/navigation/Sidenav.svelte';
	import Search from '$lib/form/search.svelte';
	import ConnectWallet from '$lib/button/ConnectWallet.svelte';
	import Carousel from '$lib/carousel/Carousel.svelte';
	import solana from '$lib/assets/svg/icons/solana.svg';
	import phantom from '$lib/assets/svg/icons/phantom.svg';
	import brave from '$lib/assets/svg/icons/brave.svg';
	import eth from '$lib/assets/svg/icons/eth.svg';
	import Tab from '$lib/tab/Tab.svelte';
	import TabBar from '$lib/tab/TabBar.svelte';
</script>

<div>
	<!-- topbar -->
	<div class="m-0 p-0 h-8 bg-secondary flex justify-between items-center">
		<div class="flex w-full relative  overflow-hidden">
			<div class="text-secondary bg-secondary z-4 px-6 min-w-max">Trending Collections</div>
			<div class="flex justify-around items-center animate-marquee -z-2 absolute -left-12">
				{#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as collection}
					<div class="flex justify-around min-w-max gap-2 mx-2">
						<span class="text-secondary">#{collection}</span>
						<img class="h-5 w-5 rounded-full" src={degods} alt="collection avatar" />
						<span class="text-primary">De Gods</span>
					</div>
				{/each}
			</div>
		</div>

		<div class="flex w-full relative  overflow-hidden">
			<div class="text-secondary bg-secondary z-4 px-6 min-w-max">Trending Coins</div>
			<div class="flex justify-around items-center animate-marquee -z-2 absolute left-full">
				{#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as coin}
					<div class="flex justify-around min-w-max gap-2 px-2">
						<span class="text-secondary">#{coin}</span>
						<img class="h-5 w-5 rounded-full" src={degods} alt="collection avatar" />
						<span class="text-primary">De Gods</span>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<!-- body -->
	<div class="flex flex-col tablet:flex-row">
		<!-- sidebar -->

		<Sidenav />
		<div class="w-full px-12">
			<!--  -->
			<div class="flex flex-col tablet:flex-row justify-around my-8">
				<!-- search -->
				<div>
					<Search />
				</div>
				<ConnectWallet />
			</div>
			<Carousel />
		</div>
	</div>
</div>

<div
	class="h-screen w-screen bg-glass absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center"
>
	<div class="flex flex-col items-center bg-secondary px-6 py-12 gap-6 h-fit min-w-[420px]">
		<p class="gradient-text">Connect a wallet to continue</p>
		<TabBar>
			<Tab title="Solana" icon={solana} active />
			<Tab title="Ethereum" icon={eth} />
		</TabBar>

		<div
			class="flex relative border-2 border-accent px-8 py-4 rounded-xl justify-between w-full mt-9 cursor-pointer"
		>
			<!-- phantom wallet svg -->
			<div class="flex gap-6">
				<img src={phantom} alt="phantom wallet" />
				<div class="flex flex-col items-start justify-center">
					<span class="text-primary text-sm font-bold">Phantom</span>
					<span class="text-primary text-sm">Detected</span>
				</div>
			</div>
			<div
				class="absolute right-9 -top-6 rounded-full border-2 border-accent bg-secondary px-6 py-3 text-xs text-accent"
			>
				Recomanded
			</div>
		</div>

		<div
			class="flex relative border-2 border-accent px-8 py-4 rounded-xl justify-between w-full mt-3 cursor-pointer"
		>
			<!-- phantom wallet svg -->
			<div class="flex gap-6">
				<img src={brave} alt="phantom wallet" />
				<div class="flex flex-col items-start justify-center">
					<span class="text-primary text-sm font-bold">Brave</span>
					<span class="text-primary text-sm">Detected</span>
				</div>
			</div>
		</div>
	</div>
</div>

<script lang="ts">
	import refresh from '$lib/assets/svg/icons/refresh.svg';
	import settings from '$lib/assets/svg/icons/settings.svg';
	import eth from '$lib/assets/svg/icons/eth.svg';
	import dai from '$lib/assets/svg/icons/dai.svg';

	import arrow_down from '$lib/assets/svg/icons/arrow-down.svg';
	import arrow_down_active from '$lib/assets/svg/icons/arrow-down-active.svg';
</script>

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

			<div class="flex justify-between items-center text-primary">
				<!--  -->
				<div class="flex gap-1 bg-primary p-2 rounded-lg">
					<img src={eth} alt="" class="w-4 rounded-full" />
					<span>ETH</span>
					<img src={arrow_down} alt="" class="w-4 rounded-full" />
				</div>

				<span> 0.99782534 </span>
			</div>

			<div class="flex justify-between text-secondary-light">
				<span> Ethereum </span>
				<span>~$1623.77</span>
			</div>

			<div
				class="absolute left-0 right-0 flex items-end justify-center text-primary -bottom-6 z-10"
			>
				<div class="w-8 h-8 rounded-full flex justify-center items-center bg-secondary">
					<img src={arrow_down_active} alt="switch exchange currency" />
				</div>
			</div>
		</div>

		<div
			class="flex flex-col text-primary border-2 border-secondary-light py-4 px-6 gap-3 rounded-4xl relative"
		>
			<div class="flex justify-between">
				<span>You Buy</span>
			</div>

			<div class="flex gap-1 p-2 rounded-lg">
				<img src={dai} alt="" class="w-4 rounded-full" />
				<span>DAI</span>
				<img src={arrow_down} alt="" class="w-4 rounded-full" />
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

		<button class="w-full rounded-lg bg-accent text-primary font-semibold py-3">Swap</button>
	</div>
</div>

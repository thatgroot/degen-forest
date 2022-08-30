<script lang="ts">
	import ezu from '$lib/assets/art/ezu.png';
</script>

<div class="flex flex-col justify-between gap-6">
	<div
		class="flex flex-col desktop:flex-row bg-primary rounded-[3rem] desktop:rounded-[6rem] border-4 border-x-brown border-y-brown w-full tablet:w-[50%] desktop:w-full"
	>
		<div class="flex flex-col justify-start px-8 desktop:px-14 py-8 desktop:py-28 text-accent">
			<h2 class="gradient-text text-4xl desktop:text-2xl font-bold">
				A Place for All Your Crypto Needs
			</h2>
			<p class="px-1 font-normal text-sm my-2">
				The first ever cross-chain mintable Ethereum NFT collection to launch on Magic Eden’s
				Launchpad. EZU is the sister project of Psychedelics Anonymous. Available to mint in $SOL or
				$ETH.
			</p>
			<button
				class="gradient-primary w-fit h-16 rounded-md my-2 desktop:my-8 px-6 desktop:px-12 text-primary text-sm"
			>
				Go to Launchpad
			</button>
		</div>
		<img
			class="w-full desktop:h-[560px] rounded-tr-0 desktop:rounded-tr-[6rem]  rounded-br-[3rem] desktop:rounded-br-[6rem] rounded-bl-[3rem]  desktop:rounded-bl-none"
			src={ezu}
			alt="ezu sister project"
		/>
		<!--  -->
	</div>
	<div class="flex justify-center gap-2 w-full">
		<div class="w-28 h-1 rounded-full bg-white" />
		<div class="w-28 h-1 rounded-full bg-chocolate" />
		<div class="w-28 h-1 rounded-full bg-chocolate" />
		<div class="w-28 h-1 rounded-full bg-chocolate" />
	</div>
</div>

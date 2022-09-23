<script lang="ts">
	import ezu from '$lib/assets/art/ezu.png';
</script>

<div class="flex flex-col justify-between gap-6 max-w-6xl mx-auto">
	<div
		class="flex flex-col desktop:flex-row bg-primary rounded-[3rem] desktop:rounded-[6rem] border-4 border-x-brown border-y-brown w-full"
	>
		<div
			class="flex flex-col w-full desktop:w-1/2 justify-start px-8 desktop:px-14 py-8 desktop:py-28 text-secondary-light gap-6"
		>
			<div class="flex flex-col gap-2.5">
				<h2 class="gradient-text text-[2.5rem] py-2 leading-10 font-bold">
					A Place for All Your Crypto Needs
				</h2>
				<p class="px-1 font-normal text-sm my-2">
					The first ever cross-chain mintable Ethereum NFT collection to launch on Magic Eden’s
					Launchpad. EZU is the sister project of Psychedelics Anonymous. Available to mint in $SOL
					or $ETH.
				</p>
			</div>
			<button
				class="gradient-primary max-w-[16rem] min-h-[3rem] px-6 py-4 rounded-lg text-white text-xl"
			>
				Go to Launchpad
			</button>
		</div>

		<div
			style="background-image: url('{ezu}')"
			class="bg-center bg-cover bg-no-repeat desktop:w-1/2  desktop:h-[560px] rounded-tr-0 desktop:rounded-tr-[6rem]  rounded-br-[3rem] desktop:rounded-br-[6rem] rounded-bl-[3rem]  desktop:rounded-bl-none"
		/>
		<!--  -->
	</div>
	<div class="flex justify-center gap-2 w-full">
		<div class="w-12 tablet:w-28 h-1 rounded-full bg-accent" />
		<div class="w-12 tablet:w-28 h-1 rounded-full bg-secondary" />
		<div class="w-12 tablet:w-28 h-1 rounded-full bg-secondary" />
		<div class="w-12 tablet:w-28 h-1 rounded-full bg-secondary" />
	</div>
</div>

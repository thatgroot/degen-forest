<script>
	import ConnectWallet from '$lib/button/ConnectWallet.svelte';
	import Carousel from '$lib/carousel/Carousel.svelte';
	import rugged from '$lib/assets/art/rugged.png';

	import Search from '$lib/form/search.svelte';
</script>

<div class="flex flex-col gap-6">
	<button class="btn-accent py-2 px-3"> Featured Launch </button>

	<div class="flex flex-col tablet:flex-row justify-around gap-12 ">
		<div class="flex-1 flex flex-col gap-14">
			<h2 class="gradient-text text-3xl font-bold">Rugged Revenants Gen</h2>
			<p class="text-base text-primary leading-8 pr-16">
				The first ever Web 3 Reforestation Competition - Project Galaxy vs. Magic Eden vs. Vera!
				Three epic projects competing to see who can activate the most community members to grow a
				forest in the real world! Whichever community mints the most NFTs wins the competition and
				will be rewarded! Additionally, a real tree will be planted on behalf of EACH AND EVERY NFT
				minted by the winning community. Let’s grow the Magic Eden Forest!! Free mint, real impact!
				Let’s grow the Magic Eden Forest!!
			</p>
		</div>
		<div class="flex-1">
			<div
				style="background-image: url('{rugged}')"
				class="bg-center bg-cover bg-no-repeat  desktop:h-[560px]  rounded-tr-[1.25rem] rounded-br-[1.25rem]"
			/>
		</div>
	</div>
</div>

<script>
	import ConnectWallet from '$lib/button/ConnectWallet.svelte';
	import Carousel from '$lib/carousel/Carousel.svelte';
	import rugged from '$lib/assets/art/rugged.png';

	import Search from '$lib/form/search.svelte';
</script>

<div class="flex flex-col justify-between gap-20">
	<div class="flex flex-col justify-around w-2/3 gap-6">
		<h2 class="gradient-text text-3xl font-bold">Degen Forest Launchpad Submission Form</h2>
		<p class="text-base text-primary leading-8 pr-16">
			Magic Eden is looking to onboard unique, quality projects to drop their collections via Magic
			Eden Launchpad, our white glove minting and marketing service. Announcements: We will consider
			applications on a rolling basis. If you have not heard back from us within a few weeks of your
			submission, this means we have placed you in our pipeline. You will hear from us if we are
			interested in moving forward with your project.Please Fillout the following form.
		</p>
	</div>

	<div class="flex flex-col  gap-6">
		<p class="gradient-text text-2xl">Which blockchain is your collection on? *</p>
		<div class="flex gap-6">
			<button class="gradient-primary btn-primary">Ethereum</button>
			<button class="gradient-primary btn-primary">Polygon</button>
			<button class="gradient-primary btn-primary">Solana</button>
		</div>
	</div>
</div>

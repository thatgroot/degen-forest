<script lang="ts">
	import wallet from '$lib/assets/svg/icons/wallet.svg';
</script>

<button
	class="border-2 border-x-secondary border-y-secondary text-primary flex rounded-md sm:rounded-lg justify-center items-center w-fit"
>
	<img
		src={wallet}
		alt="connect wallet"
		class="desktop:border-r-2 desktop:border-r-secondary  py-2 px-4"
	/>
	<span class="px-6 sm:px-2 hidden desktop:block">Connect Wallet</span>
</button>

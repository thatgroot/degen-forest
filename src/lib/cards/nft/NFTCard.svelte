<script lang="ts">
	import solana from '$lib/assets/svg/icons/solana.svg';
	import quick from '$lib/assets/svg/icons/quick.svg';

	export let bg: 'primary' | 'secondary' | 'accent' | 'transparent' = 'primary';
</script>

<div class="flex flex-col rounded-lg border-2 border-secondary bg-{bg}  overflow-hidden w-fit">
	<!-- header -->
	<div class="w-full cursor-pointer relative group">
		<img
			draggable="false"
			loading="lazy"
			alt="..."
			src="https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https%3A%2F%2Fbafybeidqnl4od4mjjdq6szqhj3dbf35mpg46njbt3spqqwzjwwvhyplok4.ipfs.nftstorage.link%2F6342.png%3Fext%3Dpng"
		/>

		<div
			class="w-full absolute top-0 left-0 right-0 bottom-0 items-center justify-center  hidden group-hover:flex"
		>
			<div class="btn-accent bg-accent rounded-full px-4 py-2 flex gap-1">
				<img src={quick} alt="...." class="" /> Quick buy
			</div>
		</div>

		<div class="absolute -bottom-2 right-2 bg-primary rounded-md px-2">
			<span>325</span><span>/6287</span>
		</div>
	</div>

	<!-- content -->
	<div class="p-2">
		<div class="flex flex-col gap-3">
			<div class="flex flex-col gap-1">
				<span> Bounty Hunter #7337 </span>
				<span> Simpl3r: Bounty Hunters </span>
			</div>

			<div class="flex justify-between">
				<div class="flex items-center gap-3">
					<img src={solana} alt="..." />
					<span>8</span>
				</div>

				<div>
					<button class="btn-accent px-2 py-2">Details</button>
				</div>
			</div>
		</div>
	</div>
</div>

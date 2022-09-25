<script lang="ts">
	import solana from '$lib/assets/svg/icons/solana.svg';
	import quick from '$lib/assets/svg/icons/quick.svg';
	import plus from '$lib/assets/svg/icons/plus.svg';

	export let bg: 'primary' | 'secondary' | 'accent' | 'transparent' = 'primary';
</script>

<div class="flex flex-col rounded-lg border-2 border-secondary bg-{bg}  overflow-hidden w-full">
	<!-- header -->
	<div class="w-full cursor-pointer group relative group">
		<img
			src={plus}
			alt="..."
			class=" hidden group-hover:inline-block w-8 h-8 absolute top-2 right-2 z-50"
		/>

		<img
			draggable="false"
			loading="lazy"
			alt="..."
			src="https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https%3A%2F%2Fbafybeidqnl4od4mjjdq6szqhj3dbf35mpg46njbt3spqqwzjwwvhyplok4.ipfs.nftstorage.link%2F6342.png%3Fext%3Dpng"
		/>

		<div
			class="w-full absolute top-0 left-0 right-0 bottom-0 items-center justify-center  hidden group-hover:flex"
		>
			<div class="btn-accent bg-accent  rounded-full px-4 py-2 flex gap-1 ">
				<img src={quick} alt="...." class="" /> Quick buy
			</div>
		</div>

		<div class="absolute bottom-4 right-2 bg-primary text-primary rounded-md px-2">
			<span>325</span><span>/6287</span>
		</div>
	</div>

	<!-- content -->
	<div class="p-2">
		<div class="flex flex-col gap-3">
			<div class="flex flex-col gap-1 text-primary">
				<span>Degod #3456</span>
				<span class="text-xxs text-accent">DeGods</span>
			</div>

			<div class="flex justify-between">
				<div class="flex items-center gap-3">
					<img src={solana} alt="..." class="h-3.5" />
					<span class="text-primary">8</span>
				</div>

				<a
					href="/marketplace/item-details"
					class="btn-accent border-2 border-secondary rounded-sm px-2 py-1 text-xs text-accent"
				>
					Details
				</a>
			</div>
		</div>
	</div>
</div>

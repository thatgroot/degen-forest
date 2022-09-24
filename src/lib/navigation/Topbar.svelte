<script>
	import degods from '$lib/assets/art/degods.png';
</script>

<div class="flex w-full justify-between relative  overflow-hidden text-xs bg-secondary">
	<div
		class="text-primary bg-secondary z-10 px-6 min-w-max absolute left-0 bottom-0 top-0 flex items-center"
	>
		Trending Collections
	</div>
	<div class="flex justify-around items-center animate-marquee">
		{#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as collection}
			<div class="flex x-6 justify-around min-w-max gap-2 mx-2">
				<span class="text-accent">#{collection}</span>
				<img class="h-5 w-5 rounded-full" src={degods} alt="collection avatar" />
				<span class="text-primary">De Gods</span>
			</div>
		{/each}

		<span class="text-lg text-primary font-bold mx-4"> | </span>
	</div>

	<div class="flex justify-around items-center animate-marquee">
		{#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as coin}
			<div class="flex justify-around min-w-max gap-2 px-2">
				<span class="text-accent">#{coin}</span>
				<img class="h-5 w-5 rounded-full" src={degods} alt="collection avatar" />
				<span class="text-primary">De Gods</span>
			</div>
		{/each}
	</div>
	<div
		class="text-primary bg-secondary z-10 px-6 min-w-max absolute right-0 bottom-0 top-0 flex items-center"
	>
		Trending Coins
	</div>
</div>

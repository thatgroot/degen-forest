<script>
	import degods from '$lib/assets/art/degods.png';
</script>

<div class="m-0 p-0 h-8 bg-secondary flex justify-between items-center">
	<div class="flex w-full relative  overflow-hidden">
		<div class="text-secondary bg-secondary z-10 px-6 min-w-max">Trending Collections</div>
		<div class="flex justify-around items-center animate-marquee -z-2 absolute -left-12">
			{#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as collection}
				<div class="flex x-6 justify-around min-w-max gap-2 mx-2">
					<span class="text-secondary">#{collection}</span>
					<img class="h-5 w-5 rounded-full" src={degods} alt="collection avatar" />
					<span class="text-primary">De Gods</span>
				</div>
			{/each}
		</div>
	</div>

	<div class="flex w-full relative  overflow-hidden">
		<div class="text-secondary bg-secondary z-10 px-6 min-w-max">Trending Coins</div>
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

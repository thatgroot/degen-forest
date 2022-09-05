<script>
	import Accordion from '$lib/accordion/Accordion.svelte';
	import Search from '$lib/form/search.svelte';
</script>

<div class="border-1 border-secondary rounded-sm">
	<div class="p-1 flex justify-start">
		<span>Popular Collections</span>
	</div>
	<div class="px-2 py-3">
		<!-- search -->
		<div class="flex gap-6 w-full">
			<div class="w-full">
				<Accordion
					header={{
						title: 'Search',
						show: 'slot',
						size: 'full'
					}}
				>
					<div slot="header" class="flex grow border-2 border-secondary rounded-lg">
						<Search rounded="md" bg={'tranparent'} />
					</div>
					<div slot="body">body</div>
				</Accordion>
			</div>
			<div class="group flex items-center relative">
				<button
					class="flex justify-between border-2 border-secondary px-2 py-1 rounded-sm w-max text-primary items-center gap-2"
				>
					<span class="w-full">Last 5 minutes</span>
					<span>
						<svg
							class="fill-white h-4 w-4 transform group-hover:-rotate-180
											transition duration-150 ease-in-out"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
						>
							<path
								d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
							/>
						</svg>
					</span>
				</button>
				<ul
					class="bg-primary border-2 border-secondary rounded-sm text-primary transform scale-0 group-hover:scale-100 absolute
					transition duration-150 ease-in-out origin-top min-w-32 top-[100%] w-max text-sm"
				>
					<li class="rounded-sm  hover:bg-secondary px-2 py-1 cursor-pointer">Last 5 minutes</li>
					<li class="rounded-sm  hover:bg-secondary px-2 py-1 cursor-pointer">Last 15 minutes</li>
					<li class="rounded-sm  hover:bg-secondary px-2 py-1 cursor-pointer">Last 1 hour</li>
					<li class="rounded-sm  hover:bg-secondary px-2 py-1 cursor-pointer">Last 6 hours</li>
					<li class="rounded-sm  hover:bg-secondary px-2 py-1 cursor-pointer">Last 24 hours</li>
					<li class="rounded-sm  hover:bg-secondary px-2 py-1 cursor-pointer">Last 7 days</li>
					<li class="rounded-sm  hover:bg-secondary px-2 py-1 cursor-pointer">Last 30 days</li>
				</ul>
			</div>
		</div>

		<!-- collections list -->
	</div>
</div>

<script lang="ts">
	import search_icon from '$lib/assets/svg/icons/search.svg';
	export let placeholder: string = 'Search';
	export let size: InputSize;
	export let round: RoundSize;
	const input_sizes = { lg: 'w-full', md: 'w-[196px]', sm: 'w-[64px]' };
</script>

<div class={`px-4 bg-[#21162B] rounded-${round}  flex flex-row items-center`}>
	<img class="my-4" src={search_icon} alt={'field icon'} />
	<input
		class={`bg-transparent outline-none focus:outline-none p-2 rounded-${round} ${input_sizes[size]}`}
		{placeholder}
	/>
</div>

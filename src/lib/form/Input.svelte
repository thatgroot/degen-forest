<script lang="ts">
	import search_icon from '$lib/assets/svg/icons/search.svg';
	export let placeholder: string = 'Search';
	export let size: InputSize;
	export let round: RoundSize;
	export let border: 'primary' | 'secondary' | 'transparent' = 'transparent';
	const input_sizes = { lg: 'w-full', md: 'w-[196px]', sm: 'w-[64px]' };
</script>

<div
	class={`px-2 bg-transparent border-2 border-${border} rounded-${round}  flex flex-row items-center gap-2`}
>
	<img class="" src={search_icon} alt={'field icon'} />
	<input
		class={`p-2 placeholder:text-accent text-primary bg-transparent outline-none focus:outline-none rounded-${round} ${input_sizes[size]}`}
		{placeholder}
	/>
</div>

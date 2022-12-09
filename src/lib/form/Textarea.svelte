<script lang="ts">
	export let placeholder: string = 'Search';
	export let size: InputSize = 'md';
	export let round: RoundSize = 'md';
	export let prefix: string = '';
	export let border: 'primary' | 'secondary' | 'transparent' = 'transparent';
	const input_sizes = { lg: 'w-full', md: 'w-[196px]', sm: 'w-[64px]', fit: 'fit' };
</script>

<div
	class={`px-2 bg-secondary rounded-[${round}] border-2 border-${border} rounded-${round}  flex flex-row items-center gap-2`}
>
	<img class={`${prefix ? 'block w-4 h-4' : 'hidden'}`} src={prefix} alt={'field icon'} />
	<textarea
		rows="5"
		class={`px-2 py-1 h-fit placeholder:text-secondary-light text-primary bg-transparent outline-none focus:outline-none rounded-${round} ${input_sizes[size]}`}
		{placeholder}
	/>
</div>

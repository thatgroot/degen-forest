<script lang="ts">
	export let placeholder: string = 'Search';
	export let size: InputSize = 'md';
	export let round: RoundSize = 'md';
	export let prefix: string = '';
	export let type: 'text' | 'password' | 'email' | 'number' = 'text';
	export let border: 'primary' | 'secondary' | 'transparent' = 'transparent';
	const input_sizes = { lg: 'w-full', md: 'w-[196px]', sm: 'w-[64px]' };
</script>

<div
	class={`px-2 bg-transparent border-2 border-${border} rounded-${round}  flex flex-row items-center gap-2`}
>
	<img class={`${prefix ? 'block w-4 h-4' : 'hidden'}`} src={prefix} alt={'field icon'} />
	<input
		{type}
		class={`px-2 py-1 placeholder:text-secondary-light text-primary bg-transparent outline-none focus:outline-none rounded-${round} ${input_sizes[size]}`}
		{placeholder}
	/>
</div>

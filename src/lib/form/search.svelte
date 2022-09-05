<script lang="ts">
	import search from '$lib/assets/svg/icons/search.svg';
	export let rounded: 'full' | 'sm' | 'md' | 'lg' = 'full';
	export let placeholder: string = 'Search';
	export let bg: 'primary' | 'secondary' | 'tranparent' = 'tranparent';
</script>

<div class="w-full">
	<div class={`bg-${bg} rounded-${rounded} px-6 py-1 w-full flex  flex-row gap-6`}>
		<img src={search} alt="search here" />
		<input
			{placeholder}
			class={`bg-transparent outline-none h-8 target:h11  rounded-${rounded} text-primary tablet:min-w-[30rem]`}
		/>
	</div>
</div>

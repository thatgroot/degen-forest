<script lang="ts">
	import filter from '$lib/assets/svg/icons/filter.svg';
	import arrow_left from '$lib/assets/svg/icons/arrow-left.svg';
	import arrow_up from '$lib/assets/svg/icons/arrow-up.svg';
	import arrow_down from '$lib/assets/svg/icons/arrow-down.svg';

	export let prefix_icon: string | null = null;
	export let size: AccordionSize;
	export let content: { text?: string; meta?: string } = {};
	export let show: 'text' | 'icon' | 'both' = 'icon';
	export let arrow: Arrow = 'left';

	let toggle_to: Size = size;

	const toggleAccordionHeader = () => {
		toggle_to = toggle_to === 'md' ? 'sm' : 'md';
	};
</script>

<div>
	<div
		class={`rounded-md flex flex-row justify-between items-center bg-[#120C18] w-[${
			toggle_to === 'sm' ? '144px' : '218px'
		}] min-h-[48px] px-4 py-2`}
	>
		{#if show === 'text'}
			<span class="text-white">{content.text}</span>
		{:else if show === 'icon'}
			<img class="hover:cursor-pointer" src={prefix_icon ?? filter} alt="filter icon" />
		{:else}
			<div class="flex flex-row">
				<img class="hover:cursor-pointer" src={prefix_icon ?? filter} alt="filter icon" />
				<div class="pl-2 flex flex-col">
					<span class="text-white">{content.text}</span>
					<small class="text-white">{content.meta}</small>
				</div>
			</div>
		{/if}

		{#if arrow === 'up' || 'down'}
			<img
				class="hover:cursor-pointer"
				src={arrow == 'up' ? arrow_up : arrow_down}
				alt={`arrow ${arrow}`}
				on:click={toggleAccordionHeader}
			/>
		{:else}
			<img
				class="hover:cursor-pointer"
				src={arrow == 'left' ? arrow_left : arrow_down}
				alt={`arrow ${arrow}`}
				on:click={toggleAccordionHeader}
			/>
		{/if}
	</div>

	<div class="p-2">
		<slot />
	</div>
</div>

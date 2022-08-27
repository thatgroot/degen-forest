<script lang="ts">
	import filter from '$lib/assets/svg/icons/filter.svg';
	import arrow_left from '$lib/assets/svg/icons/arrow-left.svg';

	export let toggleAccordionHeader: any;

	export let title: string = '';
	export let subtitle: string = '';
	export let show: 'icon' | 'text' | 'both' = 'icon';
	export let size: AccordionSize = 'full';
	export let sizeable: boolean = false;
	export let resize_to: AccordionSize = 'sm';
	export let prefix: string = filter;
	export let postfix: string = arrow_left;

	let collapsed: boolean = false;

	const width = {
		full: 'w-full',
		lg: 'w-[512px]',
		md: 'w-[256px]',
		sm: 'w-[120px]',
		xs: 'w-[96px]'
	};

	const onToggle = () => {
		collapsed = !collapsed;
		toggleAccordionHeader();
	};
</script>

<div
	class={`rounded-md flex flex-row justify-between items-center bg-primary ${sizeable} ${
		!sizeable ? 'w-full' : collapsed ? width[resize_to] : width[size]
	}  min-h-[48px] px-4 py-2 transition-all ease-in-out delay-300`}
>
	<div class="flex flex-row justify-start">
		{#if show === 'icon' || show === 'both'}
			<img class="hover:cursor-pointer" src={prefix} alt="filter icon" />
		{/if}
		{#if show === 'text' || show === 'both'}
			<div class={`${show === 'both' ? 'mx-6' : ''} flex flex-col items-start`}>
				<span class="text-primary">{title}</span>
				<small class="text-primary">{subtitle}</small>
			</div>
		{/if}
	</div>

	<div
		class="p-4 hover:cursor-pointer transition-transform ease-linear delay-300 {collapsed
			? 'rotate-180'
			: ''}"
		on:click={onToggle}
	>
		<img src={postfix} alt={`arrow ...`} />
	</div>
</div>

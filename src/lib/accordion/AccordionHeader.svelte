<script lang="ts">
	import filter from '$lib/assets/svg/icons/filter.svg';
	import arrow_left from '$lib/assets/svg/icons/arrow-left.svg';

	export let toggleAccordionHeader: any;

	export let title: string = '';
	export let subtitle: string = '';
	export let show: 'icon' | 'text' | 'both' | 'slot' = 'icon';
	export let rounded: 'sm' | 'md' | 'lg' | 'full' | 'none' = 'none';
	export let bg: 'primary' | 'secondary' | 'accent' | 'transparent' = 'transparent';
	export let active_bg: 'primary' | 'secondary' | 'accent' | 'transparent' = 'transparent';
	export let size: AccordionSize = 'full';
	export let sizeable: boolean = false;
	export let resize_to: AccordionSize = 'sm';
	export let prefix: string = '';
	export let postfix: string = arrow_left;
	export let border: 'primary' | 'secondary' | 'accent' | 'none' = 'none';

	/**
	 * @expanded :: wherther the body is open or not
	 */
	export let expanded: boolean = false;

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
	on:click={onToggle}
	class="rounded-{rounded} {border === 'none'
		? ''
		: 'border-2'} border-{border} flex flex-row justify-between items-center {expanded
		? 'bg-' + active_bg
		: 'bg-' + bg} {sizeable} {!sizeable
		? 'w-full'
		: collapsed
		? width[resize_to]
		: width[
				size
		  ]}  min-h-[48px] px-2 py-2 transition-all ease-in-out delay-300  hover:cursor-pointer"
>
	<div class="flex flex-row justify-start w-full">
		{#if show === 'slot'}
			<slot />
		{:else}
			<slot />
			{#if show === 'icon' || show === 'both'}
				<img class="hover:cursor-pointer" src={prefix} alt="filter icon" />
			{/if}
			{#if show === 'text' || show === 'both'}
				<div class={`${show === 'both' ? 'mx-2' : ''} flex flex-col items-start`}>
					<span class="text-primary min-w-max">{title}</span>
					<small class="text-primary">{subtitle}</small>
				</div>
			{/if}
		{/if}
		<!-- else content here -->
	</div>

	<div class="mx-2 transition-transform ease-linear delay-100 {collapsed ? 'rotate-180' : ''}">
		<img class="w-4" src={postfix} alt={`arrow ...`} />
	</div>
</div>

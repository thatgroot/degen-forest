<script lang="ts">
	import AccordionBody from './AccordionBody.svelte';
	import AccordionHeader from './AccordionHeader.svelte';

	// external props
	export let header: AccordionHeaderType;
	export let href: string = '#!';
	export let bg: 'primary' | 'secondary' | 'accent' | 'transparent' = 'primary';
	export let rounded: 'sm' | 'md' | 'lg' | 'full' | 'none' = 'lg';

	// internal state
	let toggle: boolean = false;

	// internal mutator
	const toggleAccordionHeader = () => {
		toggle = !toggle;
	};
</script>

<a class="bg-{bg} rounded-{rounded}" {href}>
	<AccordionHeader expanded={toggle} {...header} {toggleAccordionHeader}>
		<slot name="header" />
	</AccordionHeader>
	<AccordionBody {toggle}>
		<slot />
	</AccordionBody>
</a>

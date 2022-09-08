<script lang="ts">
	import AccordionBody from './AccordionBody.svelte';
	import AccordionHeader from './AccordionHeader.svelte';

	// external props
	export let header: AccordionHeaderType;
	export let href: string = '#!';

	// internal state
	let toggle: boolean = false;

	// internal mutator
	const toggleAccordionHeader = () => {
		toggle = !toggle;
	};
</script>

<a class="bg-primary rounded-lg" {href}>
	<AccordionHeader expanded={toggle} {...header} {toggleAccordionHeader}>
		<slot name="header" />
	</AccordionHeader>
	<AccordionBody {toggle}>
		<slot />
	</AccordionBody>
</a>

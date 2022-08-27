<script lang="ts">
	import AccordionBody from './AccordionBody.svelte';
	import AccordionHeader from './AccordionHeader.svelte';

	// external props
	export let header: AccordionHeaderType;

	// internal state
	let toggle: boolean = false;

	// internal mutator
	const toggleAccordionHeader = () => {
		toggle = !toggle;
	};
</script>

<div>
	<AccordionHeader {...header} {toggleAccordionHeader} />
	<AccordionBody {toggle} />
</div>

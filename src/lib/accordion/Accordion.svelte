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

<div class="bg-primary  rounded-lg">
	<AccordionHeader expanded={toggle} {...header} {toggleAccordionHeader}>
		<slot name="header" />
	</AccordionHeader>
	<AccordionBody {toggle}>
		<slot name="body" />
	</AccordionBody>
</div>

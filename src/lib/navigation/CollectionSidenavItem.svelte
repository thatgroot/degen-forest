<script lang="ts">
	import AccordionHeader from '$lib/accordion/AccordionHeader.svelte';
	import AccordionSlot from '$lib/accordion/AccordionSlot.svelte';
	import Input from '$lib/form/Input.svelte';
	import arrow_down from '$lib/assets/svg/icons/arrow-down.svg';

	export let title: string = '';
</script>

<AccordionSlot active_bg="transparent">
	<div slot="header" class="w-full">
		<AccordionHeader {title} postfix={arrow_down} show="text" toggleAccordionHeader={() => {}} />
	</div>
	<div slot="body" class="text-primary flex flex-col gap-3 py-4 px-2">
		<slot />
	</div>
</AccordionSlot>

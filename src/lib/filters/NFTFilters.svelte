<script>
	import AccordionHeader from '$lib/accordion/AccordionHeader.svelte';
	import AccordionSlot from '$lib/accordion/AccordionSlot.svelte';
	import Dropdown from '$lib/dropdown/Dropdown.svelte';
	import Input from '$lib/form/Input.svelte';
	import Search from '$lib/form/search.svelte';
	import arrow_down from '$lib/assets/svg/icons/arrow-down.svg';
	import Accordion from '$lib/accordion/Accordion.svelte';
	import search from '$lib/assets/svg/icons/search.svg';
</script>

<div class="flex flex-wrap tablet:flex-nowrap items-start gap-6">
	<div class="bg-transparent w-full rounded-lg grow relative">
		<Accordion
			bg="primary"
			header={{
				title: 'Search',
				show: 'both',
				size: 'full',
				prefix: search,
				postfix: arrow_down
			}}
		>
			<div class="flex flex-col tablet:flex-row w-full gap-3 px-6 py-8 bg-secondary ">
				<Dropdown
					id="filter_select_type"
					border="primary"
					items={['Me Floor Price', 'Collection name', 'Volume']}
				/>
				<Dropdown
					id="filter_select_comparator"
					border="primary"
					items={[
						'greater than',
						'greater than',
						'less than',
						'greater than or equal to',
						'less than or equal to'
					]}
				/>

				<Input size="md" placeholder="price" round="md" border="primary" />
			</div>
		</Accordion>
	</div>

	<!-- drop down -->
	<div class="min-w-full tablet:min-w-max">
		<Dropdown
			id="filter_select_duration"
			border="secondary"
			items={[
				'Last 5 minutes',
				'Last 30 minutes',
				'Last 1 hour',
				'Last 6 hours',
				'Last 12 hours',
				'Last 24 hours',
				'Last 7 days',
				'Last 30 days'
			]}
		/>
	</div>
</div>

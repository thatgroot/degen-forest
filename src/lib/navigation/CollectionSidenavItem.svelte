<script lang="ts">
	import AccordionSlot from '$lib/accordion/AccordionSlot.svelte';
	import Input from '$lib/form/Input.svelte';

	export let title: string = '';
</script>

<AccordionSlot active_bg="transparent">
	<div slot="header" class="w-full text-primary">
		<div class="flex justify-between p-2 cursor-pointer text-sm hover:bg-secondary">
			<div class="text-primary">{title}</div>
			<svg
				stroke="currentColor"
				fill="none"
				stroke-width="2"
				viewBox="0 0 24 24"
				stroke-linecap="round"
				stroke-linejoin="round"
				color="#f5f3f7"
				height="24"
				width="24"
				xmlns="http://www.w3.org/2000/svg"
			/>
		</div>
	</div>
	<div slot="body" class="text-primary flex flex-col gap-3 py-4">
		<div class="flex flex-col justify-between gap-3">
			<Input border="secondary" placeholder="Search" round="md" size="lg" />
			{#each [{ bg: 'Tan', value: 399, outOf: 6499, floor: '5.96' }, { bg: 'Blue', value: 399, outOf: 6499, floor: '5.96' }, { bg: 'Green', value: 399, outOf: 6499, floor: '5.96' }] as { bg, value, outOf, floor }}
				<button
					class="w-full grid grid-cols-2 gap-3 text-left rounded bg-gray-100 hover:bg-gray-200 p-2 border transition-colors border-secondary"
				>
					<span class="text-primary text-sm">{bg}</span>
					<div class="justify-self-end">
						<span class="text-primary text-sm">{value}</span>
						<span class="text-light-gray-500 text-xs">/{outOf}</span>
					</div>
					<span class="text-light-gray-500 text-sm">{floor} ◎ floor</span>
					<div class="justify-self-end row-start-2 col-start-2">
						<span class="bg-[rgba(228,37,117,0.2)] p-1 text-pink-200 rounded-sm text-[11px]"
							>6.14%</span
						>
					</div>
				</button>
			{/each}
			<button class="bg-accent p-2 btn-accent w-full"> Apply </button>
		</div>
	</div>
</AccordionSlot>

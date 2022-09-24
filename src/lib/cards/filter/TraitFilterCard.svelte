<script lang="ts">
	import Accordion from '$lib/accordion/Accordion.svelte';
	import Input from '$lib/form/Input.svelte';
	import arrow_up from '$lib/assets/svg/icons/arrow-up.svg';

	export let placeholder: string;
	export let title: string;
	export let data: Array<any> = [1, 2];
</script>

<div class="bg-[#120C18] rounded-md max-w-fit">
	<Accordion
		header={{
			size: 'md',
			title,
			subtitle: '............',
			postfix: arrow_up,
			show: 'both'
		}}
	>
		<div class="p-2">
			<div class="px-2 py-4">
				<Input {placeholder} size={'lg'} round={'full'} />
			</div>
			<div class="flex flex-col justify-between">
				{#each data as item}
					<div class="flex flex-col justify-between items-center rounded-sm p-4 border-2 my-2">
						<!-- list item -->
						<div class="flex flex-row justify-between text-primary w-full">
							<span>DeGod</span>
							<span>29/1000</span>
						</div>
						<div class="flex flex-row justify-between text-primary w-full">
							<span>279.0 ◎ floor</span>
							<span>0.29%</span>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</Accordion>
</div>

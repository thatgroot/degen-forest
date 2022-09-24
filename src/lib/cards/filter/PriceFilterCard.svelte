<script lang="ts">
	import Accordion from '$lib/accordion/Accordion.svelte';
	import Button from '$lib/button/Button.svelte';
	import Input from '$lib/form/Input.svelte';
	import arrow_up from '$lib/assets/svg/icons/arrow-up.svg';

	export let crypto_coin: string;
</script>

<div class="bg-[#120C18] rounded-md max-w-fit">
	<Accordion
		header={{
			size: 'full',
			show: 'text',
			title: 'Price',
			subtitle: '............',
			postfix: arrow_up
		}}
	>
		<div class="p-2">
			<div>{crypto_coin}</div>
			<div class="flex flex-row justify-between items-center w-fit">
				<Input placeholder={'MIN'} size={'sm'} round={'lg'} />
				<span class="text-primary p-2">to</span>
				<Input placeholder={'MAX'} size={'sm'} round={'lg'} />
			</div>
			<Button>Apply</Button>
		</div>
	</Accordion>
</div>

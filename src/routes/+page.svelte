<script lang="ts">
	import Accordion from '$lib/accordion/Accordion.svelte';
	import PriceFilterCard from '$lib/cards/filter/PriceFilterCard.svelte';
	import TraitFilterCard from '$lib/cards/filter/TraitFilterCard.svelte';
	import ListItem from '$lib/list/ListItem.svelte';
	import filter from '$lib/assets/svg/icons/filter.svg';
	import arrow_left from '$lib/assets/svg/icons/arrow-left.svg';
	import arrow_up from '$lib/assets/svg/icons/arrow-up.svg';
	import arrow_down from '$lib/assets/svg/icons/arrow-down.svg';
	import Button from '$lib/button/Button.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div>
		<Accordion
			header={{
				prefix: filter,
				postfix: arrow_left,
				sizeable: true,
				resize_to: 'md',
				show: 'both',
				size: 'full',
				title: 'Price',
				subtitle: '..............'
			}}
		/>
		<div class="m-2" />
		<Accordion
			header={{
				size: 'lg',
				sizeable: true,
				resize_to: 'sm',
				title: 'Price',
				subtitle: '',
				show: 'text',
				postfix: arrow_left
			}}
		/>
		<div class="m-2" />

		<Accordion
			header={{
				postfix: arrow_left,
				show: 'icon',
				size: 'lg',
				sizeable: true,
				resize_to: 'xs'
			}}
		/>
		<div class="m-2" />
		<PriceFilterCard crypto_coin="SOL" />
		<div class="m-2" />
		<TraitFilterCard title="Clothes" placeholder="Search" />
		<div class="m-2" />
		<ListItem content={{ text: 'TOTAL VOL', meta: '824,809.74 ◎' }} />
		<div class="m-2" />
		<ListItem content={{ text: 'TOTAL VOL', meta: '824,809.74 ◎' }} more_info={true} />
		<div class="m-2" />
		<div class="m-2" />
		<div class="m-2" />

		<Button type="primary">Text</Button>
	</div>
</section>

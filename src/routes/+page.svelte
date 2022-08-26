<script lang="ts">
	import Accordion from '$lib/accordion/Accordion.svelte';
	import PriceFilterCard from '$lib/cards/filter/PriceFilterCard.svelte';
	import TraitFilterCard from '$lib/cards/filter/TraitFilterCard.svelte';
	import ListItem from '$lib/list/ListItem.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div>
		<Accordion size={'md'} show="icon" />
		<div class="m-2" />
		<Accordion size={'sm'} content={{ text: 'Price' }} show="text" arrow="down" />
		<Accordion
			size={'sm'}
			content={{ text: 'Price', meta: 'meta goes here' }}
			show="both"
			arrow="down"
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
	</div>
</section>

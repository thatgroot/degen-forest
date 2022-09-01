<script lang="ts">
	import solana from '$lib/assets/svg/icons/solana.svg';

	export let icon: string = solana;
	export let title: string = 'Solana';
	export let active: boolean = false;
</script>

<div
	class={`flex justify-center gap-3 w-fit ${
		active ? 'border-b-2 border-b-secondary' : ''
	} px-3 min-w-[7.5rem] hover:cursor-pointer`}
>
	<img src={icon} class="h-8" alt="solana" />
	<span class="text-accent">{title}</span>
</div>

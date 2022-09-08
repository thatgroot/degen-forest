<script lang="ts">
	import solana from '$lib/assets/svg/icons/solana.svg';

	export let icon: string = '';
	export let title: string = 'Solana';
	export let active: boolean = false;
	export let onclick = () => {};
</script>

<div
	on:click={onclick}
	class={`relative flex justify-center items-center gap-3 py-1 w-fit border-b-2 border-b-secondary  ${
		active ? 'border-b-accent' : ''
	}  px-3 min-w-[7.5rem] hover:cursor-pointer transition-all ease-linear duration-150 hover:border-b-accent`}
>
	<img src={icon} class={`${icon ? 'block h-8' : 'hidden'} `} alt="solana" />
	<span class="text-accent">{title}</span>
	<!-- tailwind dot absolute top right -->
	<div
		class={`absolute top-0 right-0 w-2 h-2 rounded-full bg-accent ${active ? 'block' : 'hidden'} `}
	/>
</div>

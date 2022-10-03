<script lang="ts">
	export let text: string = '';
	export let active: boolean = false;
	export let on_click: any = () => {};
</script>

<div class="relative group">
	<button
		class="rounded-full px-4 py-2  w-full {active ? 'gradient-primary' : ''}"
		on:click={on_click}>{text}</button
	>
	<div
		class="-z-10 w-32 absolute -left-24 top-0 bottom-0   rounded-full px-6 py-2 group-hover:gradient-primary transition-all duration-1000  group-hover:translate-x-12 group-hover:-left-12"
	/>
</div>

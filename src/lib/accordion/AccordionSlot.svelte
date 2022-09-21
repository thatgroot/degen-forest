<script lang="ts">
	export let active_bg: 'primary' | 'secondary' | 'accent' | 'transparent' = 'transparent';
	export let hover_bg: 'primary' | 'secondary' | 'accent' | 'transparent' = 'secondary';
	export let rounded: 'full' | 'sm' | 'md' | 'lg' | 'none' = 'none';
	export let border: 'primary' | 'secondary' | 'accent' | 'transparent' = 'primary';

	export let collapsed: boolean = true;

	export let toggle = () => {
		collapsed = !collapsed;
	};
	export let toggled = (c: boolean) => {};
</script>

<div class="bg-primary rounded-{rounded} border-t-[1px] border-{border} w-full">
	<!--<Header>-->
	<div
		on:click={() => {
			toggle();
			toggled(collapsed);
		}}
		class="rounded-{rounded} flex flex-row justify-between items-center bg-{active_bg} {collapsed
			? 'w-full'
			: 'w-full'} h-14 cursor-pointer rounded-sm px-6 py-4 hover:bg-{hover_bg}"
	>
		<slot name="header" />
	</div>
	<!--<Body>-->
	<div class={collapsed ? 'h-auto' : 'h-0 w-0 overflow-hidden relative'}>
		<slot name="body" />
	</div>
</div>

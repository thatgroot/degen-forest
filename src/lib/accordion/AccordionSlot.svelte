<script lang="ts">
	export let active_bg: 'primary' | 'secondary' | 'accent' | 'transparent' = 'transparent';
	export let rounded: 'full' | 'sm' | 'md' | 'lg' | 'none' = 'none';
	export let border: 'primary' | 'secondary' | 'accent' | 'transparent' = 'primary';

	let toggle: boolean = false;
	const toggleIt = () => {
		toggle = !toggle;
	};
</script>

<div class="bg-primary rounded-{rounded} border-t-[1px] border-{border} " href="/launchpad">
	<!--<Header>-->
	<div
		on:click={toggleIt}
		class="rounded-{rounded} flex flex-row justify-between items-center bg-{active_bg} w-full  min-h-[48px] py-2 transition-all ease-in-out delay-300  hover:cursor-pointer"
	>
		<slot name="header" />
	</div>
	<!--<Body>-->
	<div class="px-2  {toggle ? 'h-auto' : 'h-0 overflow-hidden'}">
		<slot name="body" />
	</div>
</div>

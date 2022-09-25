<script lang="ts">
	export let toggle: boolean = false;
</script>

<div class={`px-4 ${toggle ? 'h-auto' : 'h-0 overflow-hidden'}`}>
	<slot />
</div>

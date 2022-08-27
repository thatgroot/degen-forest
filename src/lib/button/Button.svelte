<script lang="ts">
	export let type: ButtonType = 'primary';
</script>

<div class="w-full">
	<button
		class={`my-4 w-full p-2 bg-${type} text-${type} hover:bg-hover-${type} rounded-md h-[44px]`}
	>
		<slot />
	</button>
</div>

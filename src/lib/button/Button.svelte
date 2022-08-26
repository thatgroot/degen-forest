<script lang="ts">
	export let type: ButtonType = 'primary';
</script>

<div class="w-full">
	<button
		class={`my-4 w-full p-2 bg-[${type}] hover:bg-[#15D6FF] transition-colors delay-200 text-white border-2 border-x-[#15D6FF] border-y-[#15D6FF] rounded-md h-[44px]`}
	>
		<slot />
	</button>
</div>

<script lang="ts">
	import arrow_down from '$lib/assets/svg/icons/arrow-down.svg';
	export let id: string;
	export let border: 'primary' | 'secondary' | 'tranparent' = 'tranparent';
	export let rounded: 'full' | 'sm' | 'md' | 'lg' = 'md';
	const toggle = () => {
		const dropdown = document.querySelector(`#${id}`);
		dropdown?.classList.toggle('hidden');
	};
</script>

<div class="relative h-full w-full">
	<button
		on:click={toggle}
		class={`text-primary bg-transparent h-full w-full border-2 border-${border}  font-medium rounded-${rounded} text-sm px-4 py-2 text-center flex items-center justify-between`}
		type="button"
	>
		<slot name="active" />
	</button>

	<!-- Dropdown menu -->
	<div
		{id}
		class="z-[99999] w-full bg-primary border-2 border-secondary  rounded-md divide-y divide-gray-100 shadow  absolute top-[110%] right-0 hidden"
	>
		<div class="p-3 space-y-1 text-sm text-primary">
			<slot name="items" />
		</div>
	</div>
</div>

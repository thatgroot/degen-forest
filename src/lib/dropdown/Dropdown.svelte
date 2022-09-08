<script lang="ts">
	export let onclick = () => {};
	export let id: string;
	export let border: 'primary' | 'secondary' | 'tranparent' = 'tranparent';
	export let rounded: 'full' | 'sm' | 'md' | 'lg' = 'md';
	export let items: string[] = [];
	const toggle = () => {
		const dropdown = document.querySelector(`#${id}`);
		dropdown?.classList.toggle('hidden');
	};
</script>

<div class="relative">
	<button
		on:click={toggle}
		class={`text-primary bg-transparent border-2 border-${border}  font-medium rounded-${rounded} text-sm px-4 py-1 text-center inline-flex items-center`}
		type="button"
		>{items[0]}<svg
			class="ml-2 w-4 h-4"
			aria-hidden="true"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M19 9l-7 7-7-7"
			/></svg
		></button
	>

	<!-- Dropdown menu -->
	<div
		{id}
		class="z-50 w-full bg-primary border-2 border-secondary  rounded-md divide-y divide-gray-100 shadow  absolute top-[120%] right-0 hidden"
	>
		<ul class="p-3 space-y-1 text-sm text-primary" aria-labelledby="dropdownHelperRadioButton">
			{#each items as item}
				<li on:click={onclick} class="px-2 py-1 hover:bg-secondary cursor-pointer">
					<span> {item} </span>
				</li>
			{/each}
		</ul>
	</div>
</div>

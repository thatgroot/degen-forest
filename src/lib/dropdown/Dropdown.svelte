<script lang="ts">
	import arrow_down from '$lib/assets/svg/icons/arrow-down.svg';
	export let onclick: any = () => {};
	export let id: string;
	export let border: 'primary' | 'secondary' | 'none' = 'secondary';
	export let bg: 'primary' | 'secondary' | 'tranparent' = 'tranparent';
	export let rounded: 'full' | 'sm' | 'md' | 'lg' = 'md';
	export let postfix: string = arrow_down;
	export let show: 'title' | 'icon' | 'both' = 'both';
	export let items: string[] = [];
	const toggle = () => {
		const dropdown = document.querySelector(`#${id}`);
		dropdown?.classList.toggle('hidden');
	};
</script>

<div class="relative h-full w-full">
	<button
		on:click={toggle}
		class="text-primary bg-{bg} h-full w-full {border === 'none'
			? ''
			: 'border-2'} border-{border}  font-medium rounded-{rounded} text-md px-4 py-2 text-center flex items-center justify-between gap-2"
		type="button"
	>
		{#if show === 'both' || show === 'title'}
			<span>
				{items[0]}
			</span>
		{/if}
		{#if show === 'both' || show === 'icon'}
			<img src={postfix} alt="..." />
		{/if}
	</button>

	<!-- Dropdown menu -->
	<div
		{id}
		class="z-[99999] w-full bg-primary border-2 border-secondary  rounded-md divide-y divide-gray-100 shadow  absolute top-[120%] right-0 hidden"
	>
		<ul class="p-3 space-y-1 text-sm text-primary" aria-labelledby="dropdownHelperRadioButton">
			{#each items as item}
				<li
					on:click={() => {
						toggle();
						onclick();
					}}
					class="px-2 py-1 hover:bg-secondary cursor-pointer"
				>
					<span> {item} </span>
				</li>
			{/each}
		</ul>
	</div>
</div>

<script lang="ts">
	import share from '$lib/assets/svg/icons/share.svg';

	export let icon: string = share;
	export let title: string = '';
	export let dropdown_items: { text: string; icon: string; click: any }[];
	const toggle = () => {
		const dropdown = document.getElementById('context_menu');
		dropdown?.classList.toggle('hidden');
	};
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative inline-block text-left">
	<div>
		<button on:click={toggle} class="flex items-center justify-center gap-2 bg-transparent">
			<span>{title}</span>
			<img class="fill-pink" src={icon} alt="..." />
		</button>
	</div>

	<!--
			Dropdown menu, show/hide based on menu state.

			Entering: "transition ease-out duration-100"
					From: "transform opacity-0 scale-95"
					To: "transform opacity-100 scale-100"
			Leaving: "transition ease-in duration-75"
					From: "transform opacity-100 scale-100"
					To: "transform opacity-0 scale-95"
	-->
	<div
		id="context_menu"
		class="absolute hidden right-0 z-10 w-56 origin-top-right bg-primary rounded-md p-3"
	>
		<div class="flex flex-col gap-3" role="none">
			{#each dropdown_items as { text, icon, click }}
				<button on:click={click} class="p-2 hover:bg-secondary">
					<div class="flex gap-2">
						<img src={icon} class="w-6 h-6" alt="share on {text}" />
						<span class="text-accent">{text}</span>
					</div>
				</button>
			{/each}
		</div>
	</div>
</div>

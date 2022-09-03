<script lang="ts">
	import info_icon from '$lib/assets/svg/icons/info.svg';
	export let prefix: string = info_icon;
	export let postfix: string = '';
	export let title: string = '';
	export let subtitle: string = '';
	export let badge: string = '';
	export let insets: 'md' | 'sm' = 'md';
</script>

<div
	class={`group w-full flex relative border-2 border-transparent  hover:border-accent ${
		insets === 'sm' ? 'px-1.5 py-1 rounded-md gap-2' : 'px-8 py-4 rounded-xl gap-4'
	}   justify-between cursor-pointer`}
>
	<div class="flex items-center gap-6">
		<img class={`${insets === 'sm' ? 'w-7 h-7' : 'w-14 h-14'}`} src={prefix} alt="phantom wallet" />
		<div class="flex flex-col items-start justify-center">
			<span class="text-primary text-sm font-bold">{title}</span>
			<span class="text-primary text-sm">{subtitle}</span>
		</div>
		{#if postfix}
			<div>
				<img class="w-4 h-4" src={postfix} alt="postfix" />
			</div>
		{/if}
	</div>
	{#if badge}
		<div
			class="absolute right-6 -top-6 rounded-full border-2 border-transparent  group-hover:border-2  group-hover:border-accent bg-secondary px-6 py-3 text-xs text-accent"
		>
			{badge}
		</div>
	{/if}
</div>

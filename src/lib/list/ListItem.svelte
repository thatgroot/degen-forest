<script lang="ts">
	import info_icon from '$lib/assets/svg/icons/info.svg';
	export let title: string = '';
	export let subtitle: string = '';
	export let title_prefix: string = info_icon;
	export let title_postfix: string = '';
	export let text_size: 'sm' | 'md' = 'md';
</script>

<div
	class={`rounded-md flex  gap-4 text-primary items-center justify-between max-w-fit hover:bg-secondary  min-w-full min-h-[48px] px-4 py-2`}
>
	<div class={`flex gap-3 ${text_size === 'sm' ? 'text-[0.75rem]' : 'text-xs'}`}>
		{#if title_prefix}
			<img src={title_prefix} alt={'learn more'} />
		{/if}
		<span>{title}</span>
		{#if title_postfix}
			<img src={title_postfix} alt={'learn more'} />
		{/if}
	</div>
	{#if subtitle}
		<span class="text-white ml-4">{subtitle}</span>
	{/if}
</div>

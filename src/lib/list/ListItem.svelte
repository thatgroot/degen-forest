<script lang="ts">
	import info_icon from '$lib/assets/svg/icons/info.svg';
	export let content: { text: string; meta: string };
	export let more_info: boolean = false;
</script>

<div
	class={`rounded-md flex flex-row justify-between items-center bg-[#120C18] max-w-fit  min-w-[260px] min-h-[48px] px-4 py-2`}
>
	<span class="text-[#9D8AA1] mr-4 flex flex-row justify-between">
		{content.text}
		{#if more_info}
			<img class="ml-2" src={info_icon} alt={'learn more'} />
		{/if}
	</span>
	<span class="text-white ml-4">{content.meta}</span>
</div>

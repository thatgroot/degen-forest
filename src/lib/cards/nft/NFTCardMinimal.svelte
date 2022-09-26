<script lang="ts">
	import fire from '$lib/assets/art/fire.png';
	export let title: string = '';
	export let user: string = '';
	export let nft: string = fire;
</script>

<div
	class="mx-auto flex flex-col relative  w-full rounded-xl transition-all ease-in-out hover:scale-90   cursor-pointer border-2 border-secondary  pb-7 gap-3"
>
	<img draggable="false" class="rounded-xl w-full" loading="lazy" alt="..." src={nft} />

	<div class="w-full text-sm whitespace-nowrap flex flex-col items-center rounded-b-xl gap-2">
		<div class="flex flex-col gap-1 items-center">
			<span class="text-primary">{title}</span>
			<span class="text-accent flex items-center space-x-2 text-xs">{user}</span>
		</div>
		<div>
			<slot />
		</div>
	</div>
</div>

<script lang="ts">
	type Action = {
		title: string;
		on_click: (e: any) => {} | any;
	};
	export let title: string = '';
	export let description: string = '';
	export let action: Action;
	export let image: string = '';
</script>

<div
	class="flex flex-col desktop:flex-row bg-primary rounded-[3rem] desktop:rounded-[6rem] border-4 border-x-brown border-y-brown w-full"
>
	<div
		class="flex flex-col w-full desktop:w-1/2 justify-start px-8 desktop:px-14 py-8 desktop:py-28 text-secondary-light gap-6"
	>
		<div class="flex flex-col gap-2.5">
			<h2 class="text-gradient text-[2.5rem] py-2 leading-10 font-bold">{title}</h2>
			<p class="px-1 font-normal text-sm my-2">{description}</p>
		</div>
		<button
			on:click={action.on_click}
			class="gradient-primary max-w-[16rem] min-h-[3rem] px-6 py-4 rounded-lg text-primary text-xl"
		>
			{action.title}
		</button>
	</div>
	<div
		style="background-image: url('{image}')"
		class="bg-center bg-cover bg-no-repeat w-full h-[320px] desktop:w-1/2  desktop:h-[560px] rounded-tr-0 desktop:rounded-tr-[6rem]  rounded-br-[3rem] desktop:rounded-br-[6rem] rounded-bl-[3rem]  desktop:rounded-bl-none"
	/>
</div>

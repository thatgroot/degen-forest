<script lang="ts">
	import close from '$lib/assets/svg/icons/close.svg';

	// moer svg
	import more from '$lib/assets/svg/icons/more.svg';

	// export let icon: string = more;
	export let toggle: boolean = false;
	export let bg: 'primary' | 'secondary' | 'accent' | 'transparent' = 'secondary';
	export let rounded: 'full' | 'sm' | 'md' | 'lg' | 'none' = 'none';
	export let onClosed: () => void = () => {};
	const toggleModal = () => {
		toggle = !toggle;
		onClosed();
	};
</script>

<!-- <div role="button" on:click|preventDefault={toggleModal}>
	<slot name="action">
		<img src={icon} alt="..." />
	</slot>
</div> -->

<div
	id="crypto-modal"
	tabindex="-1"
	class={`${
		!toggle ? 'hidden  -z-[99999]' : ''
	} bg-glass z-[99999] transition-all ease-in-out duration-200 overflow-y-auto overflow-x-hidden fixed top-0 bottom-0 left-0 right-0  w-full tablet:w-screen h-screen  justify-center items-center flex`}
	aria-modal="true"
	role="dialog"
>
	<div
		class="flex flex-col bg-{bg}  rounded-{rounded} px-6 py-12 gap-6 h-fit min-w-[420px] relative"
	>
		<div class="flex justify-end w-full absolute -top-2 -right-2 ">
			<button
				on:click|preventDefault={toggleModal}
				class="w-12 h-12 rounded-full text- bg-accent flex justify-center items-center"
			>
				<img class="fill-blue stroke-black" src={close} alt="close now" />
			</button>
		</div>
		<slot />
	</div>
</div>

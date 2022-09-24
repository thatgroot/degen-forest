<script lang="ts">
	import Tab from '$lib/tab/Tab.svelte';
	import TabBar from '$lib/tab/TabBar.svelte';
	import dai from '$lib/assets/svg/icons/dai.svg';
	import usdc from '$lib/assets/svg/icons/usdc.icon.svg';
	import weth from '$lib/assets/png/weth.png';
	import check from '$lib/assets/svg/icons/check.svg';
	import check_success from '$lib/assets/svg/icons/check-success.svg';
	import Textarea from '$lib/form/Textarea.svelte';
	import fat from '$lib/assets/art/fat.png';
	import blind from '$lib/assets/art/blind.png';
	import ape from '$lib/assets/art/ape.png';

	let active: 'address' | 'holders' = 'address';
</script>

<div class="flex flex-col items-start justify-center tablet:flex-row  laptop:gap-12 ">
	<div class="flex flex-col gap-9  laptop:w-2/4">
		<div class="flex flex-col gap-5">
			<h2 class="gradient-text text-4xl font-bold">Airdrop Tokens</h2>
			<p class="text-base font-medium text-secondary-light leading-8 tablet:pr-16">
				Drop Collections, Eth or tokens to multiple addresses.
			</p>
		</div>
		<!-- tabs -->
		<TabBar>
			<Tab
				title="Drop To  Addresslist"
				onclick={() => (active = 'address')}
				active={active === 'address'}
			/>
			<Tab
				title="Drop To NFT Holders"
				onclick={() => (active = 'holders')}
				active={active === 'holders'}
			/>
		</TabBar>

		<div class="{active === 'address' ? 'flex' : 'hidden'}  flex-col gap-9">
			<span class="text-secondary-light">
				You have following tokens In your wallet <span class="text-danger">*</span>
			</span>

			<div class="grid grid-cols-1 tablet:grid-cols-3 gap-7">
				{#each [dai, usdc, weth] as icon}
					<div
						class="flex flex-col gap-3 pt-12 px-2 pb-4 text-primary justify-center items-center relative bg-secondary rounded-2xl"
					>
						<div class="flex  absolute -top-4 left-0 right-0 justify-center">
							<img src={icon} alt="" class="max-w-[3rem] w-full rounded-full" />
						</div>
						<span>DAI</span>
						<span>10.06</span>
					</div>
				{/each}
			</div>

			<span class="text-danger"> Selected Token = DAI ( 10.06 ) </span>

			<span class="text-secondary-light">
				Enter Recipients to drop <span class="text-danger">*</span>
			</span>

			<span class="text-secondary-light font-light">
				enter one address and amount from your collection to drop supports any format.
			</span>
		</div>

		<div class="{active === 'holders' ? 'flex' : 'hidden'}  flex-col gap-9">
			<span class="text-secondary-light">
				Select Your Collection to drop <span class="text-danger">*</span>
			</span>
			<span class="text-secondary-light font-light">
				enter one address and amount from your collection to drop supports any format.
			</span>
			<div class="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-3 w-full mx-auto">
				{#each [{ icon: fat, lable: 'DegenGods', creator: 'Eliot', verified: false }, { icon: blind, lable: 'Blind Boxes', verified: true, creator: 'Eliot' }, { icon: ape, lable: 'Ape Gods', creator: 'Eliot', verified: false }] as { icon, lable, verified, creator }, i (i)}
					<div
						class="flex flex-col gap-2 pt-32 px-2 pb-4 text-secondary-light justify-center items-center relative bg-secondary rounded-2xl w-full"
					>
						<div class="flex  absolute -top-4 left-0 right-0 justify-center">
							<img src={icon} alt="" class="max-w-[9rem] w-full rounded-full" />
						</div>

						<div
							class="{lable === 'DegenGods'
								? 'flex'
								: 'hidden'}  absolute -top-2 left-0 right-0 justify-end"
						>
							<img src={check_success} alt="" class="max-w-[1.5rem] w-full rounded-full" />
						</div>
						<span>{lable}</span>
						<span class="text-accent relative">
							{creator}
							<div
								class={`flex justify-center items-center absolute top-0 -right-4 ${
									verified ? 'block' : 'hidden'
								} `}
							>
								<img src={check} alt="" class="w-full h-full" />
							</div>
						</span>
						<button class="bg-accent text-primary rounded-lg px-4 py-1">Soalan</button>
					</div>
				{/each}
			</div>

			<span class="text-secondary-light">
				Enter Recipients to drop <span class="text-danger">*</span>
			</span>
		</div>

		<Textarea size="lg" placeholder="0x9d31ddba7f1c302028ff1c92cabed785fe0342a8" />
		<button class="bg-accent text-primary rounded-lg px-4 py-1">Submit Air drop</button>
	</div>
	<div class="">
		<!--  -->
	</div>
</div>

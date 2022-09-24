<script lang="ts">
	import solana from '$lib/assets/svg/icons/solana.svg';
	import eth from '$lib/assets/svg/icons/eth.svg';
	import tag from '$lib/assets/svg/icons/tag.svg';
	import Dropdown from '$lib/dropdown/Dropdown.svelte';
	import Input from '$lib/form/Input.svelte';
	import Popup from '$lib/popups/Popup.svelte';
	import Calendar from '../calendar/Calendar.svelte';
	import DropdownSlot from '$lib/dropdown/DropdownSlot.svelte';

	export let currency: string = solana;
	let toggle: boolean = false;
	const open_offer_popup = () => {
		toggle = !toggle;
	};
	const toggle_calendar = () => {
		const offer_calendar = document.querySelector('#offer_calendar');
		offer_calendar?.classList.toggle('hidden');
	};
</script>

<div class="flex flex-col text-primary bg-secondary p-4 rounded-md gap-3">
	<div class="flex flex-col gap-2">
		<span class="mb-1 fs-80">Current Price</span>
		<div class="flex gap-2">
			<img src={tag} alt="tag" />
			<div class="cursor-help">
				<span class="text-primary price">15 SOL</span><span style="color: rgb(0, 209, 129);">
					▲
				</span>
			</div>
		</div>
	</div>
	<!-- payment area -->
	<div class="flex flex-col">
		<div class="w-full flex flex-col gap-2">
			<DropdownSlot id="currency_selection" border="primary" rounded="md">
				<div slot="active" class="w-full">
					<div>
						<div class="grid grid-cols-[20px,1fr,22px] text-sm items-center gap-x-2.5 px-3 py-2">
							<img class="w-4 h-4" src={solana} alt="..." />
							<div class="flex flex-col items-start">
								<span class="text-primary-2 text-sm">Pay in solana</span>
								<span class="flex items-center text-xxs gap-x-1">
									<span class="text-light-gray-500">Pay with connected wallet</span>
									<b>•</b>
									<span class="text-pink-primary font-bold">Fastest</span>
								</span>
							</div>
						</div>
					</div>
				</div>
				<div slot="items">
					{#each ['sol', 'eth'] as currency}
						<div
							class="grid grid-cols-[20px,1fr,22px] items-center gap-x-2.5 px-3 py-2 border-primary border rounded hover:bg-secondary cursor-pointer"
						>
							<img class="w-4 h-4" src={currency === 'sol' ? solana : eth} alt="..." />
							<div class="flex flex-col">
								<span class="text-primary-2 text-sm">Pay in {currency}</span>
								<span class="flex items-center text-xxs gap-x-1">
									<span class="text-light-gray-500">Pay with connected wallet</span>
									<b>•</b>
									<span class="text-pink-primary font-bold">Fastest</span>
								</span>
							</div>
						</div>
					{/each}
				</div>
			</DropdownSlot>

			<div class="flex justify-between gap-2">
				<button class="flex items-center btn-accent px-6 py-3 w-full">
					<img src={currency} class="h-4" alt="..." />
					<span>Buy with SOL</span>
				</button>
				<Popup {toggle} bg="primary" rounded="lg">
					<div class="flex flex-col max-w-md gap-2">
						<span class="text-accent ">
							When you make an offer, the funds are kept in your bidding wallet to allow you to make
							multiple offers using the same funds. To view, deposit, or withdraw from your bidding
							wallet, please visit the 'Offers Made' page of your Magic Eden profile.
						</span>

						<button
							type="button"
							class="flex flex-col justify-center items-center rounded-md btn-accent px-4 py-6"
						>
							<span class="font-bold">Fund the offer</span>
							<p class="text-primary">
								Transfer money from your main wallet to the bidding wallet account.
							</p>
						</button>

						<!-- offer form -->

						<form class="flex flex-col gap-2">
							<Input placeholder="16.7" border="secondary" round="md" />
							<div class="relative">
								<Dropdown
									id="time_period"
									items={['1 day', '3 days', '7 days', '1 month', 'custom']}
									border="secondary"
									rounded="md"
									onclick={() => {
										toggle_calendar();
									}}
								/>

								<!-- calendar -->
								<Calendar {toggle_calendar} />
							</div>

							<button class="flex items-center btn-accent px-6 bg-accent py-3 w-full">
								<span>Make Offer</span>
							</button>

							<div class="py-2 flex flex-col gap-2 text-accent">
								<span> Not enough balance in the wallet</span>
								<span> Price must be lower than listing price </span>
							</div>

							<div class="flex flex-col gap-3  text-primary">
								<div class="flex justify-between text-accent">
									<span>Buy now price</span>
									<span>16.5 SOL</span>
								</div>
								<div class="flex justify-between">
									<span>Minimum offer (50%)</span>
									<span>8.25 SOL</span>
								</div>
								<div class="flex justify-between">
									<span>Main wallet balance</span>
									<span>0 SOL</span>
								</div>
								<div class="flex justify-between">
									<span>Bidding wallet balance</span>
									<span>0 SOL</span>
								</div>
							</div>

							<div class="border-2 border-secondary" />

							<div class="flex flex-col gap-3 text-primary">
								<div class="flex justify-between text-accent">
									<span>New main wallet balance <span>-16.50SOL</span> </span>
									<span>-16.5 SOL</span>
								</div>
								<div class="flex justify-between">
									<span>New bidding wallet balance <span>16.50SOL</span></span>
									<span>+16.50SOL</span>
								</div>
								<div class="flex justify-between text-accent text-xxs">
									<span>By selecting "Make offer", you agree to Terms of Service</span>
								</div>
							</div>
						</form>
					</div>
				</Popup>
				<button
					type="button"
					class="btn-accent px-6 py-3 w-full"
					on:click={() => {
						toggle = !toggle;
					}}>Make an offer</button
				>
			</div>
		</div>

		<p class="mt-2 text-accent">
			By clicking "Make an offer", you agree to the
			<a href="/terms-of-service.pdf" target="_blank" class="text-light" rel="noreferrer">
				<span class="text-pink-light">Degen Forest Terms of Service</span>
			</a>
		</p>
	</div>
</div>

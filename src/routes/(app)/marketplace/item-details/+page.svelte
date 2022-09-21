<script>
	import Accordion from '$lib/accordion/Accordion.svelte';

	import heart_line from '$lib/assets/svg/icons/heart-line.svg';
	import logo_icon from '$lib/assets/svg/logo-icon.svg';
	import refresh from '$lib/assets/svg/icons/refresh-active.svg';
	import share from '$lib/assets/svg/icons/share.svg';
	import user from '$lib/assets/svg/icons/user.svg';
	import search from '$lib/assets/svg/icons/search.svg';
	import solana from '$lib/assets/svg/icons/solana.svg';
	import solscan from '$lib/assets/ico/solscan.ico';
	import solana_fm from '$lib/assets/svg/icons/solanafm.svg';
	import paper from '$lib/assets/svg/icons/paper.svg';
	import guard from '$lib/assets/svg/icons/guard.svg';
	import energy from '$lib/assets/svg/icons/energy.svg';
	import compass from '$lib/assets/svg/icons/compass.svg';
	import price_history from '$lib/assets/svg/graphics/price-history.svg';

	import copy from '$lib/assets/svg/icons/copy.svg';
	import facebook from '$lib/assets/svg/icons/facebook.svg';
	import twitter from '$lib/assets/svg/icons/twitter.svg';
	import telegram from '$lib/assets/svg/icons/telegram.svg';
	import Dropdown from '$lib/dropdown/Dropdown.svelte';
	import ContextMenu from '$lib/dropdown/ContextMenu.svelte';
	import MakeOffer from '$lib/cards/nft/MakeOffer.svelte';
	import AccordionSlot from '$lib/accordion/AccordionSlot.svelte';
	import NftCard from '$lib/cards/nft/NFTCard.svelte';
	import Popup from '$lib/popups/Popup.svelte';
</script>

<div class="flex flex-col items-center  laptop:w-2/3 mx-auto gap-4 mt-12">
	<div class="flex flex-col laptop:flex-row justify-between gap-6">
		<div class="flex flex-col  laptop:w-1/2  gap-4">
			<img
				draggable="false"
				loading="lazy"
				class="rounded-lg"
				alt="..."
				src="https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https%3A%2F%2Fbafybeifwxtfyan65e5oxsef5mqvyyh36euguu2a72kvooy5y26gplxwi2i.ipfs.nftstorage.link%2F7337.png%3Fext%3Dpng"
			/>

			<div class="flex flex-col border-2 border-secondary roundelg">
				<!--  -->
				<Accordion
					header={{
						size: 'md',
						title: 'Price history',
						subtitle: '............',
						prefix: heart_line,
						show: 'both'
					}}
				>
					<img src={price_history} alt="Price History Graph" />
				</Accordion>
			</div>
			<!-- graph -->
		</div>
		<div class="flex flex-col gap-6 laptop:w-1/2">
			<div class="flex justify-between h-fit px-4 items-end">
				<div class="mt-5 mt-lg-0">
					<div class="flex text-primary">
						<h1 class="m-0 text-xl">Bounty Hunter #7337</h1>
						<div class="px-3 flex justify-between space-x-2">
							<div>
								<span
									class="flex items-center justify-center border-secondary w-fit-content gap-[6px] text-primary-2 text-xs roundesm px-1.5 h-5"
								>
									<img src={logo_icon} alt="..." />
									<span>1324</span>
									<span>/8008</span>
								</span>
							</div>
						</div>
					</div>
					<div class="flex align-items-center gap-4 text-accent">
						<a class="" href="/marketplace/simpl3r">
							<span class="fs-80 truncate mr-1 text-base">Simpl3r: Bounty Hunters</span>
						</a>
						<div class="w-12">
							<ContextMenu
								title="Share"
								dropdown_items={[
									{
										text: 'Copy to Clipboard',
										icon: copy,
										click: () => {}
									},
									{
										text: 'Share on Facebook',
										icon: facebook,
										click: () => {}
									},
									{
										text: 'Share on Twitter',
										icon: twitter,
										click: () => {}
									},
									{
										text: 'Share on Telegram',
										icon: telegram,
										click: () => {}
									}
								]}
							/>
							<!-- <ContextMenu dropdown_items={[{}]} /> -->
						</div>
					</div>
				</div>
				<div class="flex h-full items-end">
					<img src={refresh} alt="..." />
				</div>
			</div>
			<MakeOffer />

			<div class="border border-secondary rounded-lg p-2">
				<AccordionSlot border="transparent">
					<div slot="header" class="flex text-primary gap-2">
						<img src={user} alt="..." />
						<span> About Simpl3r: Bounty Hunters </span>
					</div>
					<div slot="body" class="text-primary bg-secondary my-2 p-2 rounded-sm">
						Evolve, Plug in, Switch on, Join the Hunt & Stake your Claim on the Future - Now. Bounty
						Hunters are a collection of 8000 unique NFT's on the solana blockchain Attributes
					</div>
				</AccordionSlot>
			</div>

			<div class="border border-secondary rounded-lg p-2">
				<AccordionSlot border="transparent">
					<div slot="header" class="flex text-primary gap-2">
						<img src={guard} alt="..." />
						<span> Attributes </span>
					</div>
					<div slot="body" class="text-primary bg-secondary my-2 p-2 rounded-sm">
						<div class="grid grid-cols-3 gap-2">
							{#each [1, 2, 3] as item}
								<div class="flex flex-col bg-primary rounded-md p-2">
									<div class="flex justify-end gap-3">
										<img src={search} class="w-3" alt="..." />
										<img src={copy} class="w-3" alt="copy" />
									</div>
									<div class="flex flex-row">
										<span title="Backgrounds" class="text-accent text-xs">Backgrounds</span>
									</div>
									<span title="Red">Red</span>
									<span class="text-accent">12% have this trait</span>
								</div>
							{/each}
						</div>
					</div>
				</AccordionSlot>
			</div>

			<div class="border border-secondary rounded-lg p-2">
				<AccordionSlot border="transparent">
					<div slot="header" class="flex text-primary gap-2">
						<img src={paper} alt="..." />
						<span> Details </span>
					</div>
					<div slot="body" class="text-primary my-2 p-2 rounded-sm">
						<div class="flex flex-col gap-2">
							{#each ['Mint Address', 'Owner', 'Creator', 'Royalties', '	Listing/Bidding/Cancel'] as item}
								<div class="flex justify-between p-2">
									<span>{item}</span>
									<span class="flex items-center gap-2">
										<img class="w-4 h-4" src={solana_fm} alt="..." />
										<img class="w-4 h-4" src={solscan} alt="..." />
										<img class="w-4 h-4" src={solana} alt="..." />
										<span> EYFYp ... JNE </span>
									</span>
								</div>
							{/each}
						</div>
					</div>
				</AccordionSlot>
			</div>
		</div>
	</div>

	<div class="flex flex-col gap-3 w-full">
		<div class="border border-secondary rounded-lg p-2">
			<AccordionSlot border="transparent">
				<div slot="header" class="flex text-primary gap-2">
					<img src={energy} alt="..." />
					<span> No Offers yet </span>
				</div>
				<div slot="body" class="text-primary bg-secondary my-2 p-2 rounded-sm">no offers yet</div>
			</AccordionSlot>
		</div>
		<!-- activities -->

		<div class="border border-secondary rounded-lg p-2">
			<div
				class="hidden tablet:block overflow-x-auto  rounded-lg  border-2 border-secondary max-w-[100vw]"
			>
				<AccordionSlot border="transparent">
					<div slot="header" class="flex text-primary gap-2">
						<img src={heart_line} alt="..." />
						<span> Activities </span>
					</div>
					<div slot="body">
						<table class="w-full text-primary">
							<thead class="text-xs border-b-2 border-secondary">
								<tr class="text-primary">
									<th class="py-3 px-6 text-start">Image</th>
									<th class="py-3 px-6 text-start">Name</th>
									<th class="py-3 px-6 text-start">Transaction ID</th>
									<th class="py-3 px-6 text-start">Transaction Type</th>
									<th class="py-3 px-6 text-start">Time</th>
									<th class="py-3 px-6 text-start">Total Amount</th>
									<th class="py-3 px-6 text-start">Buyer</th>
									<th class="py-3 px-6 text-start">Seller</th>
								</tr>
							</thead>
							<tbody>
								{#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as item}
									<tr class="text-start  border-b-2 border-secondary">
										<td class="py-4 px-6  text-start">
											<img
												class="w-10"
												src={'https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://arweave.net/d-N5n-1m64rGw2GQ_1WW1xZB5UN2FmT28Tq2a4kizP0'}
												alt="..."
											/>
										</td>
										<td class="py-4 text-start"> Ukiyan #568 </td>
										<td class="py-4 text-start"> 562nh ... 4hq </td>
										<td class="py-4 text-start"> Listing (ME v2) </td>
										<td class="py-4 text-start"> 2 minutes ago </td>
										<td class="py-4 text-start"> 10.95 SOL </td>
										<td />
										<td> BAp2s ... dDC </td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				</AccordionSlot>
			</div>
		</div>

		<!-- more info -->
		<div class="border border-secondary rounded-lg p-2">
			<AccordionSlot border="transparent">
				<div slot="header" class="flex text-primary gap-2">
					<img src={compass} alt="..." />
					<span> More from this collection </span>
				</div>
				<div slot="body" class="text-primary text-sm bg-transparent my-2 p-2 rounded-sm">
					<!--  -->
					<div class="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-3">
						{#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as item}
							<NftCard />
						{/each}
					</div>
				</div>
			</AccordionSlot>
		</div>
	</div>
</div>

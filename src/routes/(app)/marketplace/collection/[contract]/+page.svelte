<script lang="ts">
	import Popup from '$lib/popups/Popup.svelte';
	import Dropdown from '$lib/dropdown/Dropdown.svelte';
	import Search from '$lib/form/search.svelte';
	import filter from '$lib/assets/svg/icons/filter.svg';
	import arrow_left from '$lib/assets/svg/icons/arrow-left.svg';
	import arrow_down from '$lib/assets/svg/icons/arrow-down.svg';
	import stack from '$lib/assets/svg/icons/stack.svg';
	import vertical_bars from '$lib/assets/svg/icons/vertical-bars.svg';
	import heart_line from '$lib/assets/svg/icons/heart-line.svg';
	import hammer from '$lib/assets/svg/icons/hammer.svg';
	import refresh from '$lib/assets/svg/icons/refresh.svg';
	import more from '$lib/assets/svg/icons/more.svg';
	import discord from '$lib/assets/svg/icons/discord.svg';
	import binoculars from '$lib/assets/svg/icons/binoculars.svg';
	import info from '$lib/assets/svg/icons/info.svg';
	import twitter from '$lib/assets/svg/icons/twitter.svg';
	import Input from '$lib/form/Input.svelte';
	import AccordionSlot from '$lib/accordion/AccordionSlot.svelte';
	import NftCard from '$lib/cards/nft/NFTCard.svelte';
	import CollectionSidenav from '$lib/navigation/CollectionSidenavItem.svelte';
	import AccordionHeader from '$lib/accordion/AccordionHeader.svelte';
	import Textarea from '$lib/form/Textarea.svelte';
	import solana from '$lib/assets/svg/icons/solana.svg';
	import eth from '$lib/assets/svg/icons/eth.svg';
	import opensea from '$lib/assets/svg/icons/opensea.svg';

	import quick from '$lib/assets/svg/icons/quick.svg';
	import plus from '$lib/assets/svg/icons/plus.svg';
	import { fromWei } from '$lib/global/utils';
	let toggle: boolean = false;
	let toggleModel: boolean = false;

	export let data: any;
</script>

<div class="w-full flex flex-col gap-6 py-0 pt-8">
	<div class="w-full gap-6 flex rounded-full overflow-auto px-12">
		<div>
			<img
				draggable="false"
				loading="lazy"
				class="object-center object-cover max-w-[8rem]  rounded-full    overflow-auto mx-auto"
				src="https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://creator-hub-prod.s3.us-east-2.amazonaws.com/ukiyo_pfp_1663178207810.jpeg"
				alt="avatar"
			/>
		</div>
		<div class="grid grid-cols-2 laptop:grid-cols-2 tablet:w-1/2 gap-3">
			<div
				class=" truncate p-2 space-x-2 rounded-[4px] flex items-center justify-between flex-col bg-secondary tablet:flex-row"
			>
				<div class="flex justify-center items-center space-x-2">
					<span class="text-xs text-secondary-light whitespace-nowrap" title="FLOOR">FLOOR</span>
				</div>
				<div class="flex space-x-2 items-center max-w-full">
					<div
						class="cursor-help max-w-full truncate"
						data-tooltipped=""
						aria-describedby="tippy-tooltip-387"
						data-original-title="5.39 ◎"
					>
						<span class="text-primary text-14px truncate" title="5.39 ◎">5.39 ◎</span>
					</div>
				</div>
			</div>
			<div
				class=" truncate p-2 space-x-2 rounded-[4px] flex items-center justify-between flex-col bg-secondary tablet:flex-row"
			>
				<div class="flex justify-center items-center space-x-2">
					<span class="text-xs text-secondary-light whitespace-nowrap" title="LISTED">LISTED</span>
				</div>
				<div class="flex space-x-2 items-center max-w-full">
					<div class="cursor-help max-w-full truncate">
						<span class="text-primary text-14px truncate" title="1,494">1,494</span>
					</div>
				</div>
			</div>
			<div
				class=" truncate p-2 space-x-2 rounded-[4px] flex items-center justify-between flex-col bg-secondary tablet:flex-row"
			>
				<div class="flex justify-center items-center space-x-2">
					<span class="text-xs text-secondary-light whitespace-nowrap" title="TOTAL VOL"
						>TOTAL VOL
					</span>
				</div>
				<div class="flex space-x-2 items-center max-w-full">
					<div class="cursor-help max-w-full truncate">
						<span class="text-primary text-14px truncate" title="31.7K ◎">31.7K ◎</span>
					</div>
				</div>
			</div>
			<div
				class=" truncate p-2 space-x-2 rounded-[4px] flex items-center justify-between flex-col bg-secondary tablet:flex-row"
			>
				<div class="flex justify-center items-center space-x-2">
					<span class="text-xs text-secondary-light whitespace-nowrap" title="AVG. SALE (24h)"
						>AVG. SALE (24h)</span
					>
				</div>
				<div class="flex space-x-2 items-center max-w-full">
					<div class="cursor-help max-w-full truncate">
						<span class="text-primary text-14px truncate" title="5.66 ◎">5.66 ◎</span>
					</div>
				</div>
			</div>
			<div
				class=" truncate p-2 space-x-2 rounded-[4px] flex items-center justify-between flex-col bg-secondary tablet:flex-row"
			>
				<div class="flex justify-center items-center space-x-2">
					<span class="text-xs text-secondary-light whitespace-nowrap" title="OWNERS">
						OWNERS
					</span>
				</div>
				<div class="flex space-x-2 items-center max-w-full">
					<div>
						<span class="text-primary text-14px truncate" title="---">---</span>
					</div>
				</div>
			</div>
			<div
				class=" truncate p-2 space-x-2 rounded-[4px] flex items-center justify-between flex-col bg-secondary tablet:flex-row"
			>
				<div class="flex justify-center items-center space-x-2">
					<span class="text-xs text-secondary-light whitespace-nowrap" title="TOTAL SUPPLY">
						TOTAL SUPPLY
					</span>
					<div>
						<img src={info} class="w-4 h-4" alt="more info" />
					</div>
				</div>
				<div class="flex space-x-2 items-center max-w-full">
					<div
						class="cursor-help max-w-full truncate"
						data-tooltipped=""
						aria-describedby="tippy-tooltip-393"
					>
						<span class="text-primary text-14px truncate" title="---">---</span>
					</div>
				</div>
			</div>
		</div>
		<div class="flex flex-col desktop:max-w-[500px] tablet:w-1/2">
			<div class="flex flex-wrap gap-3 items-center justify-center text-primary">
				<div>
					<a href="https://www.discord.gg/EJltoquvN5" target="_blank" rel="noreferrer">
						<div class="flex items-center bg-secondary border border-secondary p-1.5 rounded">
							<img src={discord} class="w-4 h-4" alt="discord app" />
						</div>
					</a>
				</div>
				<div>
					<a href="https://twitter.com/UkiyoNFT_" target="_blank" rel="noreferrer">
						<div class="flex items-center bg-secondary border border-secondary p-1.5 rounded">
							<!-- twitter -->
							<img src={twitter} class="w-4 h-4" alt="twitter app" />

							<span
								class="px-[6px] py-[2px] ml-3 rounded bg-secondary font-medium text-xs text-primary"
								>25.7K</span
							>
						</div>
					</a>
				</div>
				<div>
					<button class="flex items-center border-secondary bg-secondary border p-1.5 rounded">
						<!-- binoculars -->
						<img src={binoculars} class="w-4 h-4" alt="binoculars" />
						<!--  -->
						<span class="text-xs font-medium ml-2 text-primary">Watch</span>
						<span
							class="px-[6px] py-[2px] ml-3 rounded bg-secondary font-medium text-xs text-primary"
							>352</span
						>
					</button>
				</div>

				<div>
					<button
						class="h-fit flex items-center"
						on:click={() => {
							toggleModel = true;
						}}
					>
						<img src={more} class="w-4 h-4 mr-2" alt="flag collection" />
					</button>
				</div>
			</div>

			<div class="max-w-3xl text-primary mt-3">
				<span>
					Ukiyo is more than a brand, it’s a lifestyle. A unique collection that brings a never
					before seen style to Solana 🌆
				</span>
			</div>
		</div>
	</div>

	<div class="flex relative">
		<div
			class="hidden tablet:flex tablet:flex-col sticky self-start bg-primary border-b border-secondary top-0 {toggle
				? 'min-w-fit'
				: 'min-w-[13.5rem]'}"
		>
			<AccordionSlot
				collapsed={toggle}
				toggle={() => {
					toggle = !toggle;
				}}
			>
				<!-- header -->
				<div class="flex justify-between w-full h-fit m-h-[52px]" slot="header">
					<img src={filter} alt="filter" class="w-4 h-4 mr-2" />
					<img src={arrow_left} alt="filter" class="w-4 h-4 mr-2 {!toggle ? '-rotate-180' : ''}" />
				</div>

				<div class="flex flex-col" slot="body">
					<div class="flex flex-col relative my-2">
						<!-- Price -->

						<div
							class=" flex flex-row justify-between items-center bg-transparent w-full h-14 cursor-pointer rounded-sm px-6 py-4 hover:bg-secondary"
						>
							<div
								class="rounded-none flex flex-row justify-between items-center bg-transparent false w-full min-h-[48px] px-2 py-2 transition-all ease-in-out delay-300 hover:cursor-pointer"
							>
								<div class="flex flex-row justify-start w-full">
									<div class=" flex flex-col items-start">
										<span class="text-primary">Buy Now</span> <small class="text-primary" />
									</div>
								</div>
								<div class="mx-2 transition-transform ease-linear delay-100 ">
									<label
										for="default-toggle"
										class="inline-flex relative items-center mb-4 cursor-pointer"
									>
										<input type="checkbox" value="" id="default-toggle" class="sr-only peer" />
										<div
											class="w-11 h-6 bg-accent rounded-full peer peer-focus:ring-4 peer-focus:ring-gradient-primary dark:peer-focus:ring-gradient-secondary peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-secondary peer-checked:bg-accent"
										/>
									</label>
								</div>
							</div>
						</div>

						<AccordionSlot active_bg="transparent" toggled={() => {}}>
							<div slot="header" class="w-full">
								<AccordionHeader
									title="Price"
									postfix={arrow_down}
									show="text"
									toggleAccordionHeader={() => {}}
								/>
							</div>
							<div slot="body" class="text-primary flex flex-col gap-3 py-4">
								<Dropdown id="price" border="secondary" items={['SOL', 'ETH', 'USDT', 'USDC']} />
								<div class="flex flex-col justify-between gap-3">
									<div class="flex justify-between">
										<Input border="secondary" placeholder="Min" round="md" size="sm" />
										<Input border="secondary" placeholder="Max" round="md" size="sm" />
									</div>
									<button class="bg-accent p-2 btn-accent w-full"> Apply </button>
								</div>
							</div>
						</AccordionSlot>

						{#each ['Version', 'Background', 'Clothes', 'Eyes', 'Head', 'Mouth', 'Neck', 'Skin'] as item}
							<CollectionSidenav title={item} />
						{/each}
					</div>
				</div>
			</AccordionSlot>
		</div>
		<div class="w-full">
			<div
				class="flex flex-col flex-wrap desktop:flex-row default:flex-nowrap laptop:justify-between items-center px-4 max-w-full pt-0"
			>
				<div
					class="flex flex-wrap text-primary gap-4 w-full tablet:w-fit items-center overflow-x-auto"
				>
					{#each [{ img: stack, title: 'Items' }, { img: hammer, title: 'Auction' }, { img: heart_line, title: 'Activity' }, { title: 'Analysis', img: vertical_bars }] as { img, title }, i (i)}
						<span class="flex items-center gap-2 group cursor-pointer h-[52px] ">
							<img src={img} alt="stack" class="h-4" />
							<h3
								class="font-normal text-lg table:text-sm  transition-[stroke,fill,color] ease-in-out duration-100"
							>
								<span>{title}</span>
							</h3>
						</span>
					{/each}
				</div>

				<div class="flex flex-col tablet:flex-row gap-3 ">
					<Dropdown
						id="sort"
						border="secondary"
						items={[
							'Recently Listed',
							'Price: Low to high',
							'Price: High to low',
							'ME Rarity: Common to Rare',
							'ME Rarity: Rare to Common'
						]}
					/>

					<div
						class="text-primary flex justify-between gap-3 h-fit px-6 py-2 last:mr-5 border-2 rounded-lg border-secondary"
						role="group"
					>
						<button type="button">
							<svg
								stroke="currentColor"
								fill="currentColor"
								stroke-width="0"
								viewBox="0 0 512 512"
								class="text-2xl"
								height="1em"
								width="1em"
								xmlns="http://www.w3.org/2000/svg"
								data-darkreader-inline-stroke=""
								data-darkreader-inline-fill=""
							>
								<path
									d="M296 32h192c13.255 0 24 10.745 24 24v160c0 13.255-10.745 24-24 24H296c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24zm-80 0H24C10.745 32 0 42.745 0 56v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zM0 296v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm296 184h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H296c-13.255 0-24 10.745-24 24v160c0 13.255 10.745 24 24 24z"
								/>
							</svg>
						</button>
						<button type="button" class="opacity-80">
							<svg
								stroke="currentColor"
								fill="currentColor"
								stroke-width="0"
								viewBox="0 0 512 512"
								class="text-2xl"
								height="1em"
								width="1em"
								xmlns="http://www.w3.org/2000/svg"
								data-darkreader-inline-stroke=""
								data-darkreader-inline-fill=""
							>
								<path
									d="M149.333 56v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zm181.334 240v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm32-240v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24zm-32 80V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm-205.334 56H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm386.667-56H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm0 160H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zM181.333 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24z"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>

			<div class="flex flex-col min-w-max laptop:w-fit">
				<div
					class="flex flex-col laptop:flex-row items-center justify-between gap-2 tablet:gap-4 p-5"
				>
					<div class="flex items-center gap-2 md:w-44 w-fit-content">
						<img src={refresh} alt="refresh" class="h-3" />
						<span class="text-xs text-accent">refreshed 3s ago</span>
					</div>
					<div class="max-w-xs">
						<Search placeholder={'Search'} bg={'secondary'} />
					</div>
					<div class="items-center gap-2 flex !duration-[0ms]">
						<button
							type="button"
							class="inline-flex justify-center items-center rounded-md text-primary w-[86px] h-8 md:h-9 text-sm !duration-[0ms] bg-secondary"
						>
							Buy
						</button>
						<button
							type="button"
							class="inline-flex justify-center items-center rounded-md text-primary w-[86px] h-8 md:h-9 text-sm !duration-[0ms] bg-secondary"
						>
							Bid
						</button>
					</div>
				</div>

				<div
					class="grid grid-cols-1 tablet:grid-cols-2 laptop-sm:grid-cols-3 desktop:grid-cols-5 large:grid-cols-6  gap-4 px-6"
				>
					{#each data.assets as asset}
						<!-- <NftCard bg="primary" /> -->
						<div
							class="flex flex-col justify-between rounded-lg border-2 border-secondary bg-primary  overflow-hidden  w-full laptop-sm:w-[10.75rem]"
						>
							<!-- header -->
							<div class="w-full flex-1 cursor-pointer group relative group">
								<img
									src={plus}
									alt="..."
									class=" hidden group-hover:inline-block w-6 h-6 absolute top-2 right-2 z-50 bg-primary rounded-full"
								/>

								<img
									src={opensea}
									alt="..."
									class="w-6 h-6 absolute top-2 left-2 z-50 bg-primary rounded-full"
								/>

								<span class="flex-1">
									<img
										class="object-fill"
										draggable="false"
										loading="lazy"
										alt="..."
										src={asset.image_url}
									/>
								</span>
								<div
									class="w-full absolute top-0 left-0 right-0 bottom-0 items-center justify-center  hidden group-hover:flex"
								>
									<div class="btn-accent bg-accent  rounded-full px-2 py-1 text-sm  flex gap-1">
										<img src={quick} alt="...." class="" /> Quick buy
									</div>
								</div>
							</div>

							<!-- content -->
							<div class="p-2">
								<div class="flex flex-col gap-3">
									<div class="flex flex-col gap-1 text-primary">
										<span>{asset.name}</span>
										<a href={asset.permalink} class="text-xxs text-accent">
											{asset.collection.name}
										</a>
									</div>

									<div class="flex justify-between">
										{#if asset.seaport_sell_orders?.length > 0}
											<div class="flex items-center gap-3">
												<img src={eth} alt="..." class="h-3.5" />
												<span class="text-primary">
													{fromWei(asset.seaport_sell_orders[0]?.current_price, 'ether')}
												</span>
											</div>
										{:else}
											<span />
										{/if}

										<a
											href="/marketplace/collection/{asset.asset_contract
												?.address}/{asset.token_id}"
											class="btn-accent border-2 border-secondary rounded-sm px-2 py-1 text-xs text-accent"
										>
											Details
										</a>
									</div>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>

<Popup
	toggle={toggleModel}
	onClosed={() => {
		toggleModel = false;
	}}
>
	<h2 class="text-primary text-xl font-bold">Report this collection</h2>
	<div class="text-primary font-bold">I think this collection is</div>
	<Dropdown
		id="report_collection"
		border="primary"
		items={[
			'Fake or possible scam',
			'Explicit and sensitive content',
			'IP infringement',
			'Derivative',
			'Other'
		]}
	/>

	<Textarea placeholder="More details" border="primary" round="lg" size="lg" />
	<button class="bg-accent p-2 btn-accent w-full"> Report </button>
</Popup>

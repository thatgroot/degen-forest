<script lang="ts">
	import Popup from '$lib/popups/Popup.svelte';
	import Dropdown from '$lib/dropdown/Dropdown.svelte';
	import Search from '$lib/form/search.svelte';
	import Accordion from '$lib/accordion/Accordion.svelte';
	import filter from '$lib/assets/svg/icons/filter.svg';
	import arrow_left from '$lib/assets/svg/icons/arrow-left.svg';
	import arrow_down from '$lib/assets/svg/icons/arrow-down.svg';
	import plus from '$lib/assets/svg/icons/plus.svg';
	import stack from '$lib/assets/svg/icons/stack.svg';
	import vertical_bars from '$lib/assets/svg/icons/vertical-bars.svg';
	import heart_line from '$lib/assets/svg/icons/heart-line.svg';
	import tag from '$lib/assets/svg/icons/tag.svg';
	import hammer from '$lib/assets/svg/icons/hammer.svg';
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
	let toggle: boolean = false;
	let toggleModel: boolean = false;
</script>

<div class="w-full py-0 sm:mt-0">
	<div class="flex flex-col">
		<div class="flex flex-col items-center laptop:flex-row justify-evenly last:items-start gap-12">
			<div class="w-full laptop:w-fit flex rounded-full overflow-auto">
				<img
					draggable="false"
					loading="lazy"
					class="object-center object-cover max-w-[8rem]  rounded-full    overflow-auto mx-auto"
					src="https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://creator-hub-prod.s3.us-east-2.amazonaws.com/ukiyo_pfp_1663178207810.jpeg"
					alt="avatar"
				/>
			</div>
			<div class="flex flex-col desktop:flex-row justify-between gap-12">
				<div class="grid grid-cols-2 laptop:grid-cols-2 tablet:w-1/2 gap-3">
					<div
						class=" truncate p-2 space-x-2 rounded-[4px] flex items-center justify-between flex-col bg-secondary tablet:flex-row"
					>
						<div class="flex justify-center items-center space-x-2">
							<span class="text-xs text-secondary-light whitespace-nowrap" title="FLOOR">FLOOR</span
							>
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
							<span class="text-xs text-secondary-light whitespace-nowrap" title="LISTED"
								>LISTED</span
							>
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
		</div>
	</div>

	<div class="flex relative">
		<div
			class="hidden tablet:flex tablet:flex-col sticky self-start bg-primary border-b border-secondary top-0 {toggle
				? 'min-w-[20rem]'
				: 'w-fit'} "
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

						{#each ['Body', 'Clothing', 'Head', 'Type', 'Clothes', 'Glasses', 'Headwear & Hair', 'Mouth & Facial Hair', 'Neck', 'Skin', 'Skins attribute'] as item}
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
					<span class="flex items-center gap-2 group cursor-pointer h-[52px] ">
						<img src={stack} alt="stack" class="w-4 h-4" />
						<h3
							class="font-normal text-lg table:text-sm  transition-[stroke,fill,color] ease-in-out duration-100"
						>
							<div class="flex">
								<span>Items</span>
								<span
									class="flex items-center border rounded text-xxs leading-none px-[5px] py-1 mx-2 text-primary text-center border-accent mr-0"
								>
									Live
								</span>
							</div>
						</h3>
					</span>
					<span class="flex items-center gap-2 group cursor-pointer h-[52px] ">
						<img src={vertical_bars} alt="stack" class="w-4 h-4" />
						<h3
							class="font-normal text-sm group-hover:!text-pink-dark transition-[stroke,fill,color] ease-in-out duration-100"
						>
							<span class="flex lists-center">
								<span> Pro Trade </span>
								<span
									class="flex items-center border rounded text-xxs leading-none px-[5px] py-1 mx-2 text-primary text-center border-accent mr-0"
								>
									Live
								</span>
								<span
									class="flex items-center border rounded text-xxs leading-none px-[5px] py-1 mx-2 text-primary text-center border-accent mr-0"
								>
									Beta
								</span>
							</span>
						</h3>
					</span>
					<span class="flex items-center gap-2 group cursor-pointer h-[52px] ">
						<img src={heart_line} alt="stack" class="w-4 h-4" />
						<h3
							class="font-normal text-sm group-hover:!text-pink-dark transition-[stroke,fill,color] ease-in-out duration-100"
						>
							Activity
						</h3>
					</span>
					<span class="flex items-center gap-2 group cursor-pointer h-[52px] ">
						<img src={tag} alt="tag" class="w-4 h-4" />
						<h3
							class="font-normal text-sm group-hover:!text-pink-dark transition-[stroke,fill,color] ease-in-out duration-100"
						>
							Research
						</h3>
					</span>
					<span class="flex items-center gap-2 group cursor-pointer h-[52px] ">
						<svg
							x="0"
							y="0"
							enable-background="new 0 0 512 512"
							viewBox="0 0 512 512"
							fill="currentColor"
							stroke-width="2"
							xml:space="preserve"
							color="#15D6FF"
							width="20"
							height="20"
							class="fill-[#f5f3f7] group-hover:!fill-[#B7185A] transition-[stroke,fill,color] ease-in-out duration-100"
						>
							<path
								d="M424.787 235.476c-10.711-10.709-26.775-12.866-39.652-6.488L244.446 88.301c6.378-12.878 4.222-28.942-6.488-39.651-6.503-6.503-15.15-10.085-24.348-10.085s-17.844 3.581-24.348 10.085l-83.65 83.65c-13.424 13.425-13.424 35.269 0 48.694h.001c6.713 6.712 15.53 10.069 24.348 10.069a34.49 34.49 0 0015.305-3.581l45.445 45.445L2.987 420.648c-3.983 3.983-3.983 10.441 0 14.424l35.376 35.376a10.203 10.203 0 0014.424 0l187.724-187.724 45.432 45.432a34.285 34.285 0 00-3.586 15.317c0 9.198 3.583 17.845 10.086 24.346 6.503 6.503 15.15 10.085 24.348 10.085 9.198 0 17.844-3.582 24.347-10.085l83.649-83.65c6.504-6.503 10.086-15.15 10.086-24.348s-3.583-17.842-10.086-24.345zm-284.908-68.903c-5.469 5.466-14.37 5.466-19.841-.004-5.472-5.472-5.472-14.376 0-19.847l83.65-83.65a13.942 13.942 0 019.923-4.11c3.749 0 7.273 1.46 9.923 4.11 5.471 5.472 5.471 14.375 0 19.847l-83.655 83.654zM45.575 448.812L24.623 427.86l180.513-180.512 20.952 20.952L45.575 448.812zm115.394-274.479l70.331-70.331 138.134 138.135-70.331 70.331-138.134-138.135zm249.394 95.415l-83.65 83.65a13.94 13.94 0 01-9.923 4.11c-3.749 0-7.273-1.46-9.923-4.11h-.001c-2.651-2.651-4.11-6.175-4.11-9.923s1.461-7.273 4.111-9.923l83.655-83.654a13.938 13.938 0 019.917-4.105 13.932 13.932 0 019.925 4.109c2.651 2.651 4.109 6.175 4.109 9.923s-1.46 7.272-4.11 9.923zM477.567 404.402H319.663c-18.986 0-34.432 15.447-34.432 34.432 0 18.986 15.447 34.432 34.432 34.432h157.904c18.986 0 34.433-15.447 34.433-34.433 0-18.985-15.446-34.431-34.433-34.431zm0 48.465H319.663c-7.738 0-14.034-6.296-14.034-14.034s6.296-14.033 14.034-14.033h157.904c7.738 0 14.034 6.296 14.034 14.034s-6.296 14.033-14.034 14.033z"
							/>
							<path
								d="M296.389 181.215l-4.169-4.168c-3.982-3.983-10.441-3.983-14.424 0-3.983 3.984-3.983 10.441.001 14.424l4.169 4.168c1.991 1.992 4.601 2.987 7.211 2.987s5.221-.996 7.212-2.987c3.983-3.983 3.983-10.441 0-14.424zM269.306 153.908l-30.789-30.565c-3.998-3.97-10.455-3.945-14.424.052s-3.945 10.455.053 14.424l30.789 30.566a10.162 10.162 0 007.185 2.961 10.17 10.17 0 007.238-3.014c3.969-3.997 3.946-10.455-.052-14.424z"
							/>
						</svg>
						<h3
							class="font-normal text-sm group-hover:!text-pink-dark transition-[stroke,fill,color] ease-in-out duration-100"
						>
							Auctions
						</h3>
					</span>
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

			<div
				class="flex flex-col laptop:flex-row items-center justify-between gap-2 tablet:gap-4 p-5"
			>
				<div class="flex items-center gap-2 md:w-44 w-fit-content">
					<span
						class="h-9 w-9 box-border border border-solid border-secondary flex items-center justify-center rounded cursor-pointer"
					>
						<svg
							stroke="#F5F3F7"
							fill="none"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke-linecap="round"
							stroke-linejoin="round"
							color="#15D6FF"
							height="20"
							width="20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<polyline points="23 4 23 10 17 10" />
							<polyline points="1 20 1 14 7 14" />
							<path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
						</svg>
					</span>
					<span class="text-xs text-secondary-light hidden md:block">refreshed 18s ago</span>
				</div>
				<div class="w-fit">
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
					<button
						type="button"
						class="inline-flex justify-center items-center rounded-md text-primary w-[86px] h-8 md:h-9 text-sm !duration-[0ms] bg-secondary"
					>
						Sweep
					</button>
				</div>
			</div>

			<div
				class="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 large:grid-cols-5  gap-4 px-6"
			>
				{#each [1, 2, 3, 4, 5] as item}
					<NftCard bg="primary" />
				{/each}
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

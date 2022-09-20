<script>
	import Popup from '$lib/popups/Popup.svelte';
	import Dropdown from '$lib/dropdown/Dropdown.svelte';
	import Search from '$lib/form/search.svelte';
	import Accordion from '$lib/accordion/Accordion.svelte';
	// arrow up svg from icons
	import solana from '$lib/assets/svg/icons/solana.svg';
	import Input from '$lib/form/Input.svelte';
	import AccordionSlot from '$lib/accordion/AccordionSlot.svelte';
	import NftCard from '$lib/cards/nft/NFTCard.svelte';
	import CollectionSidenav from '$lib/navigation/CollectionSidenavItem.svelte';
</script>

<div class="w-full py-0 sm:mt-0">
	<div class="flex flex-col">
		<div class="flex gap-12">
			<div
				class="min-w-[170px] max-w-[170px] min-h-[170px] max-h-[170px] rounded-full overflow-auto"
			>
				<img
					draggable="false"
					loading="lazy"
					class="object-center object-cover min-w-[170px] max-w-[170px] min-h-[170px] max-h-[170px] rounded-full overflow-auto"
					src="https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://creator-hub-prod.s3.us-east-2.amazonaws.com/ukiyo_pfp_1663178207810.jpeg"
					alt="avatar"
				/>
			</div>
			<div class="flex flex-col tablet:flex-row justify-between gap-12">
				<div
					class="mt-1 md:mt-4 space-y-7 flex flex-col sm:items-center md:items-start row-start-2"
				>
					<div class="grid grid-cols-2 tablet:grid-cols-[350px,350px] gap-3">
						<div
							class=" truncate p-2 space-x-2 rounded-[4px] flex items-center justify-between flex-col bg-secondary tablet:flex-row"
						>
							<div class="flex justify-center items-center space-x-2">
								<span class="text-xs text-accent whitespace-nowrap" title="FLOOR">FLOOR</span>
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
								<span class="text-xs text-accent whitespace-nowrap" title="LISTED">LISTED</span>
							</div>
							<div class="flex space-x-2 items-center max-w-full">
								<div
									class="cursor-help max-w-full truncate"
									data-tooltipped=""
									aria-describedby="tippy-tooltip-388"
									data-original-title="1,494"
								>
									<span class="text-primary text-14px truncate" title="1,494">1,494</span>
								</div>
							</div>
						</div>
						<div
							class=" truncate p-2 space-x-2 rounded-[4px] flex items-center justify-between flex-col bg-secondary tablet:flex-row"
						>
							<div class="flex justify-center items-center space-x-2">
								<span class="text-xs text-accent whitespace-nowrap" title="TOTAL VOL"
									>TOTAL VOL</span
								>
							</div>
							<div class="flex space-x-2 items-center max-w-full">
								<div
									class="cursor-help max-w-full truncate"
									data-tooltipped=""
									aria-describedby="tippy-tooltip-389"
									data-original-title="31.7K ◎"
								>
									<span class="text-primary text-14px truncate" title="31.7K ◎">31.7K ◎</span>
								</div>
							</div>
						</div>
						<div
							class=" truncate p-2 space-x-2 rounded-[4px] flex items-center justify-between flex-col bg-secondary tablet:flex-row"
						>
							<div class="flex justify-center items-center space-x-2">
								<span class="text-xs text-accent whitespace-nowrap" title="AVG. SALE (24h)"
									>AVG. SALE (24h)</span
								>
							</div>
							<div class="flex space-x-2 items-center max-w-full">
								<div
									class="cursor-help max-w-full truncate"
									data-tooltipped=""
									aria-describedby="tippy-tooltip-390"
									data-original-title="5.66 ◎"
								>
									<span class="text-primary text-14px truncate" title="5.66 ◎">5.66 ◎</span>
								</div>
							</div>
						</div>
						<div
							class=" truncate p-2 space-x-2 rounded-[4px] flex items-center justify-between flex-col bg-secondary tablet:flex-row"
						>
							<div class="flex justify-center items-center space-x-2">
								<span class="text-xs text-accent whitespace-nowrap" title="OWNERS">OWNERS</span>
							</div>
							<div class="flex space-x-2 items-center max-w-full">
								<div
									class="cursor-help max-w-full truncate"
									data-tooltipped=""
									aria-describedby="tippy-tooltip-391"
									data-original-title="---"
								>
									<span class="text-primary text-14px truncate" title="---">---</span>
								</div>
							</div>
						</div>
						<div
							class=" truncate p-2 space-x-2 rounded-[4px] flex items-center justify-between flex-col bg-secondary tablet:flex-row"
						>
							<div class="flex justify-center items-center space-x-2">
								<span class="text-xs text-accent whitespace-nowrap" title="TOTAL SUPPLY"
									>TOTAL SUPPLY</span
								>
								<div
									class=""
									data-tooltipped=""
									aria-describedby="tippy-tooltip-392"
									data-original-title="Total Supply may be updated if collection is still being minted or if items are burned."
								>
									<svg
										width="1.2rem"
										height="1.2rem"
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										><path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M10 2.16666C5.67379 2.16666 2.16669 5.67376 2.16669 9.99999C2.16669 14.3262 5.67379 17.8333 10 17.8333C14.3263 17.8333 17.8334 14.3262 17.8334 9.99999C17.8334 5.67376 14.3263 2.16666 10 2.16666ZM1.16669 9.99999C1.16669 5.12147 5.1215 1.16666 10 1.16666C14.8785 1.16666 18.8334 5.12147 18.8334 9.99999C18.8334 14.8785 14.8785 18.8333 10 18.8333C5.1215 18.8333 1.16669 14.8785 1.16669 9.99999Z"
											fill="#F5F3F7"
										/><path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M9.5 13.3333C9.5 13.0572 9.72386 12.8333 10 12.8333H10.0083C10.2845 12.8333 10.5083 13.0572 10.5083 13.3333C10.5083 13.6095 10.2845 13.8333 10.0083 13.8333H10C9.72386 13.8333 9.5 13.6095 9.5 13.3333Z"
											fill="#F5F3F7"
										/><path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M10 6.16666C10.2761 6.16666 10.5 6.39051 10.5 6.66666V9.99999C10.5 10.2761 10.2761 10.5 10 10.5C9.72386 10.5 9.5 10.2761 9.5 9.99999V6.66666C9.5 6.39051 9.72386 6.16666 10 6.16666Z"
											fill="#F5F3F7"
										/></svg
									>
								</div>
							</div>
							<div class="flex space-x-2 items-center max-w-full">
								<div
									class="cursor-help max-w-full truncate"
									data-tooltipped=""
									aria-describedby="tippy-tooltip-393"
									data-original-title="---"
								>
									<span class="text-primary text-14px truncate" title="---">---</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="flex flex-col sm:max-w-[500px]">
					<div class="">
						<div
							class="flex flex-wrap gap-3 items-center justify-start md:justify-start text-primary"
						>
							<div
								class=""
								data-tooltipped=""
								aria-describedby="tippy-tooltip-394"
								data-original-title="Discord"
							>
								<a href="https://www.discord.gg/EJltoquvN5" target="_blank" rel="noreferrer">
									<div class="flex items-center bg-secondary border border-secondary p-1.5 rounded">
										<svg
											stroke="currentColor"
											fill="currentColor"
											stroke-width="0"
											viewBox="0 0 640 512"
											color="#fff"
											height="16"
											width="16"
											xmlns="http://www.w3.org/2000/svg"
											><path
												d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
											/></svg
										>
									</div>
								</a>
							</div>
							<div
								class=""
								data-tooltipped=""
								aria-describedby="tippy-tooltip-395"
								data-original-title="Twitter"
							>
								<a href="https://twitter.com/UkiyoNFT_" target="_blank" rel="noreferrer"
									><div
										class="flex items-center bg-secondary border border-secondary p-1.5 rounded"
									>
										<svg
											stroke="currentColor"
											fill="currentColor"
											stroke-width="0"
											viewBox="0 0 512 512"
											color="#fff"
											height="16"
											width="16"
											xmlns="http://www.w3.org/2000/svg"
											><path
												d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
											/></svg
										><span
											class="px-[6px] py-[2px] ml-3 rounded bg-secondary font-medium text-xs text-primary"
											>25.7K</span
										>
									</div></a
								>
							</div>
							<div
								class=""
								data-tooltipped=""
								aria-describedby="tippy-tooltip-396"
								data-original-title="Watch"
							>
								<button class="flex items-center border-secondary bg-secondary border p-1.5 rounded"
									><svg
										width="20"
										height="16"
										viewBox="0 0 20 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										color="#fff"
										><path
											d="M7.9231 4.80493H12.077"
											stroke="#F5F3F7"
											stroke-linecap="round"
											stroke-linejoin="round"
										/><path
											d="M18.7923 10.1963L15.0106 1.603C14.6201 1.21668 14.093 1 13.5437 1C12.9945 1 12.4674 1.21668 12.0769 1.603V11.3819"
											stroke="#F5F3F7"
											stroke-linecap="round"
											stroke-linejoin="round"
										/><path
											d="M7.92292 11.3819V1.603C7.53246 1.21668 7.00536 1 6.45609 1C5.90682 1 5.37972 1.21668 4.98926 1.603L1.20752 10.1963"
											stroke="#F5F3F7"
											stroke-linecap="round"
											stroke-linejoin="round"
										/><path
											d="M4.46155 14.8434C6.37331 14.8434 7.92309 13.2936 7.92309 11.3819C7.92309 9.47011 6.37331 7.92032 4.46155 7.92032C2.54979 7.92032 1 9.47011 1 11.3819C1 13.2936 2.54979 14.8434 4.46155 14.8434Z"
											stroke="#F5F3F7"
											stroke-linecap="round"
											stroke-linejoin="round"
										/><path
											d="M15.5385 14.8434C17.4502 14.8434 19 13.2936 19 11.3819C19 9.47011 17.4502 7.92032 15.5385 7.92032C13.6267 7.92032 12.0769 9.47011 12.0769 11.3819C12.0769 13.2936 13.6267 14.8434 15.5385 14.8434Z"
											stroke="#F5F3F7"
											stroke-linecap="round"
											stroke-linejoin="round"
										/></svg
									><span class="text-xs font-medium ml-2 text-primary">Watch</span><span
										class="px-[6px] py-[2px] ml-3 rounded bg-secondary font-medium text-xs text-primary"
										>352</span
									></button
								>
							</div>
							<div class="me-dropdown-container w-min flex items-center">
								<Popup>
									<div class="modal fade" tabindex="-1" role="dialog">
										<div class="modal-dialog modal-dialog-centered" role="document">
											<div
												class="modal-content position-relative bg-secondary rounded-20px p-2 border-secondary"
											>
												<div class="modal-header">
													<div><h2 class="text-xl font-bold">Report this collection</h2></div>
													<span class="modal-close-btn" />
												</div>
												<div class="modal-body">
													<div class="flex flex-col gap-3">
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
														<textarea class="w-full rounded-lg p-4" placeholder="More details" />
														<button class="bg-accent px-2 py-4 btn-accent w-full"> Report </button>
													</div>
												</div>
											</div>
										</div>
									</div></Popup
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="row mt-4">
		<div class="flex justify-center border-secondary border-b border-solid" />
	</div>
	<div class="flex relative">
		<div
			class="sticky self-start tablet:flex w-[300px] h-[calc(100vh-81px)] overflow-y-auto bg-primary border-b border-secondary top-[81px]"
		>
			<div class="overflow-y-auto flex-1 dark-scroll-bar">
				<div class="flex flex-col">
					<header
						class="flex py-4 px-2 text-lg border-solid sticky top-0 cursor-pointer z-50 border-r bg-secondary hover:bg-accent border-secondary"
					>
						<svg
							stroke="currentColor"
							fill="none"
							stroke-width="2"
							viewBox="0 0 29 29"
							stroke-linecap="round"
							stroke-linejoin="round"
							color="#f5f3f7"
							height="29"
							width="29"
							xmlns="http://www.w3.org/2000/svg"
							><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg
						>
						<div class="cursor-pointer ml-auto hover:opacity-80">
							<svg
								stroke="currentColor"
								fill="none"
								stroke-width="2"
								viewBox="0 0 24 24"
								stroke-linecap="round"
								stroke-linejoin="round"
								color="#f5f3f7"
								height="24"
								width="24"
								xmlns="http://www.w3.org/2000/svg"
							/>
						</div>
					</header>
					<div class="flex flex-col relative my-2">
						<!-- Price -->
						<AccordionSlot active_bg="transparent">
							<div slot="header" class="w-full text-primary">
								<div
									class="flex justify-between p-2 cursor-pointer text-sm border-b-1 border-t-1 border-secondary hover:bg-secondary"
								>
									<div class="text-primary">Price</div>
									<svg
										stroke="currentColor"
										fill="none"
										stroke-width="2"
										viewBox="0 0 24 24"
										stroke-linecap="round"
										stroke-linejoin="round"
										color="#f5f3f7"
										height="24"
										width="24"
										xmlns="http://www.w3.org/2000/svg"
									/>
								</div>
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
			</div>
		</div>
		<div class="flex-auto max-w-full pt-0">
			<div class=" large:hidden sticky top-[79px] z-10 bg-secondary">
				<div class="flex items-center gap-x-3 tablet:gap-x-10 overflow-x-auto px-5 py-0.5">
					s
					<span class="flex items-center gap-2 group cursor-pointer flex-shrink-0 h-[52px] "
						><svg
							stroke="currentColor"
							fill="none"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke-linecap="round"
							stroke-linejoin="round"
							color="#15D6FF"
							class="group-hover:!stroke-[#B7185A] !stroke-[#15D6FF] transition-[stroke,fill,color] ease-in-out duration-100"
							height="20"
							width="20"
							xmlns="http://www.w3.org/2000/svg"
							><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline
								points="2 17 12 22 22 17"
							/><polyline points="2 12 12 17 22 12" /></svg
						>
						<h3
							class="font-normal text-sm group-hover:!text-pink-dark !text-pink-primary transition-[stroke,fill,color] ease-in-out duration-100"
						>
							<div class="flex">Items</div>
						</h3></span
					><span class="flex items-center gap-2 group cursor-pointer flex-shrink-0 h-[52px] "
						><svg
							stroke="currentColor"
							fill="none"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke-linecap="round"
							stroke-linejoin="round"
							color="#15D6FF"
							width="24"
							height="24"
							class="stroke-[#f5f3f7] group-hover:!stroke-[#B7185A] transition-[stroke,fill,color] ease-in-out duration-100"
							xmlns="http://www.w3.org/2000/svg"
							><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line
								x1="6"
								y1="20"
								x2="6"
								y2="14"
							/></svg
						>
						<h3
							class="font-normal text-sm group-hover:!text-pink-dark transition-[stroke,fill,color] ease-in-out duration-100"
						>
							<span class="flex lists-center"
								>Pro Trade<span
									class="border rounded text-xxs leading-none px-[5px] py-1 mx-2 text-primary text-center inline-block border-pink-primary bg-pink-primary/20 mr-0"
									>Live</span
								><span
									class="border rounded text-xxs leading-none px-[5px] py-1 mx-2 text-primary text-center inline-block border-pink-primary bg-pink-primary/20 mr-0"
									>Beta</span
								></span
							>
						</h3></span
					>
					<span class="flex items-center gap-2 group cursor-pointer flex-shrink-0 h-[52px] "
						><svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							color="#15D6FF"
							class="stroke-[#f5f3f7] group-hover:!stroke-[#B7185A] transition-[stroke,fill,color] ease-in-out duration-100"
							><path
								d="M18.3337 10H15.0003L12.5003 17.5L7.50033 2.5L5.00033 10H1.66699"
								stroke-linecap="round"
								stroke-linejoin="round"
							/></svg
						>
						<h3
							class="font-normal text-sm group-hover:!text-pink-dark transition-[stroke,fill,color] ease-in-out duration-100"
						>
							Activity
						</h3></span
					><span class="flex items-center gap-2 group cursor-pointer flex-shrink-0 h-[52px] "
						><svg
							stroke="currentColor"
							fill="none"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke-linecap="round"
							stroke-linejoin="round"
							color="#15D6FF"
							width="24"
							height="24"
							class="stroke-[#f5f3f7] group-hover:!stroke-[#B7185A] transition-[stroke,fill,color] ease-in-out duration-100"
							xmlns="http://www.w3.org/2000/svg"
							><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></svg
						>
						<h3
							class="font-normal text-sm group-hover:!text-pink-dark transition-[stroke,fill,color] ease-in-out duration-100"
						>
							Research
						</h3></span
					><span class="flex items-center gap-2 group cursor-pointer flex-shrink-0 h-[52px] "
						><svg
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
							><path
								d="M424.787 235.476c-10.711-10.709-26.775-12.866-39.652-6.488L244.446 88.301c6.378-12.878 4.222-28.942-6.488-39.651-6.503-6.503-15.15-10.085-24.348-10.085s-17.844 3.581-24.348 10.085l-83.65 83.65c-13.424 13.425-13.424 35.269 0 48.694h.001c6.713 6.712 15.53 10.069 24.348 10.069a34.49 34.49 0 0015.305-3.581l45.445 45.445L2.987 420.648c-3.983 3.983-3.983 10.441 0 14.424l35.376 35.376a10.203 10.203 0 0014.424 0l187.724-187.724 45.432 45.432a34.285 34.285 0 00-3.586 15.317c0 9.198 3.583 17.845 10.086 24.346 6.503 6.503 15.15 10.085 24.348 10.085 9.198 0 17.844-3.582 24.347-10.085l83.649-83.65c6.504-6.503 10.086-15.15 10.086-24.348s-3.583-17.842-10.086-24.345zm-284.908-68.903c-5.469 5.466-14.37 5.466-19.841-.004-5.472-5.472-5.472-14.376 0-19.847l83.65-83.65a13.942 13.942 0 019.923-4.11c3.749 0 7.273 1.46 9.923 4.11 5.471 5.472 5.471 14.375 0 19.847l-83.655 83.654zM45.575 448.812L24.623 427.86l180.513-180.512 20.952 20.952L45.575 448.812zm115.394-274.479l70.331-70.331 138.134 138.135-70.331 70.331-138.134-138.135zm249.394 95.415l-83.65 83.65a13.94 13.94 0 01-9.923 4.11c-3.749 0-7.273-1.46-9.923-4.11h-.001c-2.651-2.651-4.11-6.175-4.11-9.923s1.461-7.273 4.111-9.923l83.655-83.654a13.938 13.938 0 019.917-4.105 13.932 13.932 0 019.925 4.109c2.651 2.651 4.109 6.175 4.109 9.923s-1.46 7.272-4.11 9.923zM477.567 404.402H319.663c-18.986 0-34.432 15.447-34.432 34.432 0 18.986 15.447 34.432 34.432 34.432h157.904c18.986 0 34.433-15.447 34.433-34.433 0-18.985-15.446-34.431-34.433-34.431zm0 48.465H319.663c-7.738 0-14.034-6.296-14.034-14.034s6.296-14.033 14.034-14.033h157.904c7.738 0 14.034 6.296 14.034 14.034s-6.296 14.033-14.034 14.033z"
							/><path
								d="M296.389 181.215l-4.169-4.168c-3.982-3.983-10.441-3.983-14.424 0-3.983 3.984-3.983 10.441.001 14.424l4.169 4.168c1.991 1.992 4.601 2.987 7.211 2.987s5.221-.996 7.212-2.987c3.983-3.983 3.983-10.441 0-14.424zM269.306 153.908l-30.789-30.565c-3.998-3.97-10.455-3.945-14.424.052s-3.945 10.455.053 14.424l30.789 30.566a10.162 10.162 0 007.185 2.961 10.17 10.17 0 007.238-3.014c3.969-3.997 3.946-10.455-.052-14.424z"
							/></svg
						>
						<h3
							class="font-normal text-sm group-hover:!text-pink-dark transition-[stroke,fill,color] ease-in-out duration-100"
						>
							Auctions
						</h3></span
					>
				</div>
			</div>
			<div
				class="flex w-full flex-col tablet:flex-row flex-nowrap md:flex-wrap box-border min-h-[52px] border-0 border-solid border-secondary border-b px-0 py-0.5 large:sticky large:top-[79px] z-10 bg-secondary"
			>
				<div class="hidden large:block">
					<div class="flex items-center gap-x-3 large:gap-x-10 overflow-x-auto px-5 py-0.5">
						<span class="flex items-center gap-2 group cursor-pointer flex-shrink-0 h-[52px] "
							><svg
								stroke="currentColor"
								fill="none"
								stroke-width="2"
								viewBox="0 0 24 24"
								stroke-linecap="round"
								stroke-linejoin="round"
								color="#15D6FF"
								class="group-hover:!stroke-[#B7185A] !stroke-[#15D6FF] transition-[stroke,fill,color] ease-in-out duration-100"
								height="20"
								width="20"
								xmlns="http://www.w3.org/2000/svg"
								><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline
									points="2 17 12 22 22 17"
								/><polyline points="2 12 12 17 22 12" /></svg
							>
							<h3
								class="font-normal text-sm group-hover:!text-pink-dark !text-pink-primary transition-[stroke,fill,color] ease-in-out duration-100"
							>
								<div class="flex">Items</div>
							</h3></span
						><span class="flex items-center gap-2 group cursor-pointer flex-shrink-0 h-[52px] "
							><svg
								stroke="currentColor"
								fill="none"
								stroke-width="2"
								viewBox="0 0 24 24"
								stroke-linecap="round"
								stroke-linejoin="round"
								color="#15D6FF"
								width="24"
								height="24"
								class="stroke-[#f5f3f7] group-hover:!stroke-[#B7185A] transition-[stroke,fill,color] ease-in-out duration-100"
								xmlns="http://www.w3.org/2000/svg"
								><line x1="18" y1="20" x2="18" y2="10" /><line
									x1="12"
									y1="20"
									x2="12"
									y2="4"
								/><line x1="6" y1="20" x2="6" y2="14" /></svg
							>
							<h3
								class="font-normal text-sm group-hover:!text-pink-dark transition-[stroke,fill,color] ease-in-out duration-100"
							>
								<span class="flex lists-center"
									>Pro Trade<span
										class="border rounded text-xxs leading-none px-[5px] py-1 mx-2 text-primary text-center inline-block border-pink-primary bg-pink-primary/20 mr-0"
										>Live</span
									><span
										class="border rounded text-xxs leading-none px-[5px] py-1 mx-2 text-primary text-center inline-block border-pink-primary bg-pink-primary/20 mr-0"
										>Beta</span
									></span
								>
							</h3></span
						><span class="flex items-center gap-2 group cursor-pointer flex-shrink-0 h-[52px] "
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								color="#15D6FF"
								class="stroke-[#f5f3f7] group-hover:!stroke-[#B7185A] transition-[stroke,fill,color] ease-in-out duration-100"
								><path
									d="M18.3337 10H15.0003L12.5003 17.5L7.50033 2.5L5.00033 10H1.66699"
									stroke-linecap="round"
									stroke-linejoin="round"
								/></svg
							>
							<h3
								class="font-normal text-sm group-hover:!text-pink-dark transition-[stroke,fill,color] ease-in-out duration-100"
							>
								Activity
							</h3></span
						><span class="flex items-center gap-2 group cursor-pointer flex-shrink-0 h-[52px] "
							><svg
								stroke="currentColor"
								fill="none"
								stroke-width="2"
								viewBox="0 0 24 24"
								stroke-linecap="round"
								stroke-linejoin="round"
								color="#15D6FF"
								width="24"
								height="24"
								class="stroke-[#f5f3f7] group-hover:!stroke-[#B7185A] transition-[stroke,fill,color] ease-in-out duration-100"
								xmlns="http://www.w3.org/2000/svg"
								><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></svg
							>
							<h3
								class="font-normal text-sm group-hover:!text-pink-dark transition-[stroke,fill,color] ease-in-out duration-100"
							>
								Research
							</h3></span
						><span class="flex items-center gap-2 group cursor-pointer flex-shrink-0 h-[52px] "
							><svg
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
								><path
									d="M424.787 235.476c-10.711-10.709-26.775-12.866-39.652-6.488L244.446 88.301c6.378-12.878 4.222-28.942-6.488-39.651-6.503-6.503-15.15-10.085-24.348-10.085s-17.844 3.581-24.348 10.085l-83.65 83.65c-13.424 13.425-13.424 35.269 0 48.694h.001c6.713 6.712 15.53 10.069 24.348 10.069a34.49 34.49 0 0015.305-3.581l45.445 45.445L2.987 420.648c-3.983 3.983-3.983 10.441 0 14.424l35.376 35.376a10.203 10.203 0 0014.424 0l187.724-187.724 45.432 45.432a34.285 34.285 0 00-3.586 15.317c0 9.198 3.583 17.845 10.086 24.346 6.503 6.503 15.15 10.085 24.348 10.085 9.198 0 17.844-3.582 24.347-10.085l83.649-83.65c6.504-6.503 10.086-15.15 10.086-24.348s-3.583-17.842-10.086-24.345zm-284.908-68.903c-5.469 5.466-14.37 5.466-19.841-.004-5.472-5.472-5.472-14.376 0-19.847l83.65-83.65a13.942 13.942 0 019.923-4.11c3.749 0 7.273 1.46 9.923 4.11 5.471 5.472 5.471 14.375 0 19.847l-83.655 83.654zM45.575 448.812L24.623 427.86l180.513-180.512 20.952 20.952L45.575 448.812zm115.394-274.479l70.331-70.331 138.134 138.135-70.331 70.331-138.134-138.135zm249.394 95.415l-83.65 83.65a13.94 13.94 0 01-9.923 4.11c-3.749 0-7.273-1.46-9.923-4.11h-.001c-2.651-2.651-4.11-6.175-4.11-9.923s1.461-7.273 4.111-9.923l83.655-83.654a13.938 13.938 0 019.917-4.105 13.932 13.932 0 019.925 4.109c2.651 2.651 4.109 6.175 4.109 9.923s-1.46 7.272-4.11 9.923zM477.567 404.402H319.663c-18.986 0-34.432 15.447-34.432 34.432 0 18.986 15.447 34.432 34.432 34.432h157.904c18.986 0 34.433-15.447 34.433-34.433 0-18.985-15.446-34.431-34.433-34.431zm0 48.465H319.663c-7.738 0-14.034-6.296-14.034-14.034s6.296-14.033 14.034-14.033h157.904c7.738 0 14.034 6.296 14.034 14.034s-6.296 14.033-14.034 14.033z"
								/><path
									d="M296.389 181.215l-4.169-4.168c-3.982-3.983-10.441-3.983-14.424 0-3.983 3.984-3.983 10.441.001 14.424l4.169 4.168c1.991 1.992 4.601 2.987 7.211 2.987s5.221-.996 7.212-2.987c3.983-3.983 3.983-10.441 0-14.424zM269.306 153.908l-30.789-30.565c-3.998-3.97-10.455-3.945-14.424.052s-3.945 10.455.053 14.424l30.789 30.566a10.162 10.162 0 007.185 2.961 10.17 10.17 0 007.238-3.014c3.969-3.997 3.946-10.455-.052-14.424z"
								/></svg
							>
							<h3
								class="font-normal text-sm group-hover:!text-pink-dark transition-[stroke,fill,color] ease-in-out duration-100"
							>
								Auctions
							</h3></span
						>
					</div>
				</div>
				<div class="flex items-center flex-grow justify-around">
					<div class="h-fit">
						<Dropdown
							id="sort"
							items={[
								'Recently Listed',
								'Price: Low to high',
								'Price: High to low',
								'ME Rarity: Common to Rare',
								'ME Rarity: Rare to Common'
							]}
						/>
					</div>

					<div
						class="hidden tablet:flex gap-3 h-fit px-6 py-2 last:mr-5 border-2 rounded-sm border-secondary"
						role="group"
					>
						<button type="button"
							><svg
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
								><path
									d="M296 32h192c13.255 0 24 10.745 24 24v160c0 13.255-10.745 24-24 24H296c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24zm-80 0H24C10.745 32 0 42.745 0 56v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zM0 296v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm296 184h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H296c-13.255 0-24 10.745-24 24v160c0 13.255 10.745 24 24 24z"
								/></svg
							></button
						>
						<button type="button" class="opacity-80"
							><svg
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
								><path
									d="M149.333 56v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zm181.334 240v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm32-240v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24zm-32 80V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm-205.334 56H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm386.667-56H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm0 160H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zM181.333 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24z"
								/></svg
							></button
						>
					</div>
				</div>
			</div>
			<div class="flex items-center justify-between tablet:gap-4 p-5">
				<div class="flex items-center gap-2 md:w-44 w-fit-content">
					<span
						class="h-9 w-9 box-border border border-solid border-secondary flex items-center justify-center rounded cursor-pointer"
						><svg
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
							><polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path
								d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"
							/></svg
						></span
					><span class="text-xs text-accent hidden md:block">refreshed 18s ago</span>
				</div>
				<Search placeholder={'Search'} bg={'secondary'} />
				<div class="items-center gap-2 hidden tablet:flex !duration-[0ms]">
					<button
						type="button"
						class="inline-flex justify-center items-center rounded-md text-primary w-[86px] h-8 md:h-9 text-sm !duration-[0ms] !border-secondary "
						><button
							type="button"
							class="inline-flex justify-center items-center rounded-md text-primary w-[86px] h-8 md:h-9 text-sm !duration-[0ms] !border-secondary "
							><button
								type="button"
								class="inline-flex justify-center items-center rounded-md text-primary w-[86px] h-8 md:h-9 text-sm !duration-[0ms] !border-secondary "
							/></button
						></button
					>
				</div>
			</div>

			<div class="grid grid-cols-4 gap-4 px-6">
				{#each [1, 2, 3, 4, 5] as item}
					<NftCard bg="primary" />
				{/each}
			</div>
		</div>
	</div>
</div>

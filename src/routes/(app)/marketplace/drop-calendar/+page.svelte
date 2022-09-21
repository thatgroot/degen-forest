<script>
	import Tab from '$lib/tab/Tab.svelte';
	import TabBar from '$lib/tab/TabBar.svelte';
	// solana and eth svg import
	import solana from '$lib/assets/svg/icons/solana.svg';
	import eth from '$lib/assets/svg/icons/eth.svg';
	import website from '$lib/assets/svg/icons/website.svg';
	import twitter from '$lib/assets/svg/icons/twitter.svg';
	import discord from '$lib/assets/svg/icons/discord.svg';
	import alert_triangle from '$lib/assets/svg/icons/alert-triangle.svg';
	import Input from '$lib/form/Input.svelte';
	import Dropdown from '$lib/dropdown/Dropdown.svelte';

	const projects = [
		{
			name: 'Sachi',
			href: 'https://sachi.art',
			community: {
				twitter: 'https://twitter.com/weareLUX_space',
				discord: 'https://discord.gg/2Z7Y4Z2'
			},
			expectedMintDate: 'Sep 7, 1:00 AM GMT+5',

			blockchain: 'Solana',
			blockchainIcon: solana,
			requiredRoles: 'Diamond hand Whitelist, VIP Whitelist',
			status: 'Closed',
			wld: 'No'
		},
		{
			name: 'Camp Solana Whitelist',
			href: 'https://camp.solana.com',
			community: {
				website: 'https://www.campsolana.com/',
				twitter: 'https://twitter.com/campsolana',
				discord: 'https://discord.gg/2Z7Y4Z2'
			},
			expectedMintDate: 'Sep 7, 9:00 PM GMT+5',

			blockchain: 'Solana',
			blockchainIcon: solana,
			requiredRoles: 'Camplist, OG Camper',
			status: 'Active',
			wld: 'No'
		},
		{
			name: "Daddy's from USSR Whitelist",
			community: {
				twitter: 'https://twitter.com/DaddysfromUSSR',
				discord: 'https://discord.gg/2Z7Y4Z2'
			},
			expectedMintDate: 'Sep 7, 9:00 PM GMT+5',

			blockchain: 'Solana',
			blockchainIcon: solana,
			requiredRoles: 'WL',
			status: 'Active',
			wld: 'No'
		},
		{
			name: "Crypto'Clock Society Whitelist",
			community: {
				website: 'https://cryptoclock.io/',
				twitter: 'https://twitter.com/CryptoClockSoc',
				discord: 'https://discord.gg/2Z7Y4Z2'
			},
			expectedMintDate: 'Sep 7, 10:00 PM GMT+5',

			blockchain: 'Solana',
			blockchainIcon: solana,
			requiredRoles: '',
			status: 'Active',
			wld: 'No'
		},
		{
			name: 'SolTotems Whitelist',
			community: {
				twitter: 'https://twitter.com/SolTotems',
				discord: 'https://discord.gg/2Z7Y4Z2'
			},
			expectedMintDate: 'Sep 7, 11:00 PM GMT+5',

			blockchain: 'Solana',
			blockchainIcon: solana,
			requiredRoles: 'Totemlist, Old totem',
			status: 'Closed',
			wld: 'No'
		},
		{
			name: 'BattleMancers Genesis Whitelist',
			community: {
				website: 'https://www.battlemancers.com/',
				twitter: 'https://twitter.com/BattleMancers',
				discord: 'https://discord.gg/2Z7Y4Z2'
			},
			expectedMintDate: 'Sep 8, 12:00 AM GMT+5',

			blockchain: 'Ethereum',
			blockchainIcon: eth,
			requiredRoles: 'Verified',
			status: 'Active',
			wld: 'No'
		}
	];
</script>

<div class="flex flex-col justify-center gap-12">
	<div class="flex flex-col items-center">
		<h1 class="text-center text-primary text-3xl font-bold">Upcoming Drops</h1>
		<p class="text-accent text-center text-xs">
			Mark your calendars. Get ready to mint the latest NFT projects<br />Minting across
			<a class=" text-pink-primary" href="/launchpad">Launchpad</a> on a Blockchain near you!
		</p>
		<!-- alert with border tailwindcss -->
		<div
			class="flex justify-between items-center gap-3 max-w-fit border-secondary-light border-2   text-primary  rounded-lg  p-4  mt-4  mb-4  text-center"
		>
			<!-- information triangle svg -->
			<img src={alert_triangle} alt="alert" class="w-6 h-6" />

			<p class="text-center text-xs">
				Please note that the dates and times are subject to change. We will update this page as soon
				as we have more information.
			</p>
		</div>
	</div>

	<div class="flex flex-col gap-6 tablet:flex-row tablet:gap-1 tablet:justify-between">
		<div>
			<TabBar>
				<Tab title="Drops" />
				<Tab title="Whitelists" active />
			</TabBar>
		</div>

		<div class="flex flex-wrap tablet:flex-nowrap justify-center gap-3 max-h-fit">
			<button
				class="btn-secondary rounded-full px-4 py-1 text-xxs tablet:text-xs text-primary max-h-fit"
			>
				Show all
			</button>
			<!-- solana and eth button -->
			<button
				class="btn-secondary flex gap-2 items-center border-2 border-secondary rounded-full px-4 py-1 text-xxs tablet:text-xs text-primary"
			>
				<img src={solana} alt="solana" class="h-6 w-6 " />
				<span>Solana</span>
			</button>
			<button
				class="btn-secondary flex items-center gap-2 border-2 border-secondary  rounded-full px-4 py-1 text-xxs tablet:text-xs text-primary"
			>
				<img src={eth} alt="solana" class="h-6 w-6 " />
				<span>Ethereum</span>
			</button>
			<button class="px-6 py-2 btn-secondary rounded-md text-primary"> List your project </button>
		</div>
	</div>

	<div class="overflow-x-auto relative my-2 mb-0 px-2 rounded-lg  border-2 border-secondary">
		<table class="w-full text-primary">
			<thead class="text-sm border-b-2 border-secondary">
				<tr class="text-left">
					<th class="p-4">#Upvotes</th>
					<th class="p-4">Project Name</th>
					<th class="p-4">Community</th>
					<th class="p-4">Expected Mint Date</th>
					<th class="p-4">Blockchain</th>
					<th class="p-4">Required Roles</th>
					<th class="p-4">Status</th>
					<th class="p-4">WL'd?</th>
				</tr>
			</thead>
			<tbody>
				{#each projects as { name, community, expectedMintDate, blockchain, blockchainIcon, requiredRoles, status, wld }}
					<tr class="text-sm border-b-2 pu border-secondary">
						<td>
							<div class="cursor-help flex items-center justify-center">
								<button
									class="hover:bg-secondary w-12 h-12 hover:scale-125 transition-all ease-in-out border-secondary border-2 px-4 py-4 flex flex-col items-center justify-center  rounded-xl "
									><span class="mb-1"
										><svg
											stroke-width="0"
											viewBox="0 0 512 512"
											xmlns="http://www.w3.org/2000/svg"
											stroke="#15D6FF"
											fill="#4D3D5C"
											width="1rem"
											height="1rem"
											><path
												d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
											/></svg
										></span
									><span class="text-xs">6165</span></button
								>
							</div>
						</td>
						<td class="p-4">
							{name}
						</td>
						<td class="p-4">
							<!-- extract website,twitter and discord from community -->
							<!-- loop a javascript object  -->
							<div class="flex gap-2">
								<a href={community.website} target="_blank" rel="noopener noreferrer">
									<img src={website} alt="twitter" class="w-4 h-4" />
								</a>
								<a href={community.twitter} target="_blank" rel="noopener noreferrer">
									<img src={twitter} alt="twitter" class="w-4 h-4" />
								</a>
								<a href={community.discord} target="_blank" rel="noopener noreferrer">
									<img src={discord} alt="discord" class="w-4 h-4" />
								</a>
							</div>
						</td>
						<td class="p-4">{expectedMintDate}</td>
						<td class="p-4 flex gap-2">
							<img src={blockchainIcon} alt="blockchain" class="w-4 h-4" />
							<span>{blockchain}</span>
						</td>
						<td class="p-4">{requiredRoles}</td>
						<td class={`p-4 ${status === 'Closed' ? 'text-accent' : ''}`}>{status}</td>
						<td class="p-4">{wld}</td>
					</tr>{/each}
			</tbody>
		</table>
	</div>

	<div class="flex flex-col gap-3 items-center tablet:flex-row justify-between  px-4 ">
		<div class="flex flex-row items-center gap-2 h-fit">
			<div class="flex gap-2 h-fit">
				<button class="bg-secondary rounded-full px-4 py-1 text-xs text-primary max-h-fit"
					>Prev</button
				>
				<button class="bg-secondary rounded-full px-4 py-1 text-xs text-primary max-h-fit"
					>Next</button
				>
			</div>
			<Input border="secondary" type="number" placeholder="Go to page" />
		</div>
		<div class="flex gap-2 w-full tablet:w-max">
			<button class="bg-secondary rounded-full px-4 py-1 text-xs text-primary max-h-fit w-full">
				1-10 of 100
			</button>
			<Dropdown id="project_to_show" border="secondary" items={['10', '25', '50', '100']} />
		</div>
	</div>
</div>

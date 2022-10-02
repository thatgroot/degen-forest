<script>
	import Input from '$lib/form/Input.svelte';

	const form = [
		{
			label: 'Project Name *',
			placeholder: '',
			hint: '',
			type: 'text'
		},
		{
			label: 'Twitter Link *',
			placeholder: '',
			hint: '',
			type: 'text'
		},
		{
			label: 'Creator Name (if different than Project Name):  ',
			placeholder: '',
			hint: '',
			type: 'text'
		},
		{
			label: 'How many twitter followers do you have? ',
			placeholder: '50000',
			hint: 'Over-reporting vs. actual will result in rejection',
			type: 'number'
		},
		{
			label: 'Twitter Followers',
			placeholder: '1000k',
			type: 'text'
		},
		{
			label: 'If yes, please list the projects: ',
			placeholder: '',
			hint: '',
			type: 'text'
		},
		{
			label: 'Is your collection a derivative? *',
			placeholder: '',
			hint: '',
			type: 'text'
		},
		{
			label: 'Expected mint date? *',
			placeholder: '',
			hint: '',
			type: 'date'
		},
		{
			label: 'Mint price',
			placeholder: '1.004 sol',
			hint: '',
			type: 'text'
		},
		{
			label: 'Discord ID for main contact: *',
			placeholder: 'https://discord.gg/#80001',
			hint: '',
			type: 'text'
		},
		{
			label: 'Discord Server (add link): *',
			placeholder: 'https://discord.gg/lazybot',
			hint: '',
			type: 'text'
		},
		{
			label: 'Mint Website (add link): *',
			placeholder: 'https://lazybot.nft',
			hint: '',
			type: 'text'
		},
		{
			label: 'Please tell us about your team: *',
			hint: `1. How many core members are on the team? ( Working on the project daily ) \n
2. What is the current occupation of the core members?
3. Past accomplishments or projects?
4. How did the team meet?
5. Please add links to LinkedIn for all team members.`,
			placholder: '',
			type: 'textarea'
		},
		{
			label: 'Partnerships *',
			hint: `1. Who are the current ecosystem partners for this project?
2. How were the partnerships formed?`,
			placeholder: '',
			type: 'textarea'
		},
		{
			label: 'Whitepaper and Roadmap *',
			hint: `1. Is there a whitepaper?
2. Is there a clearly defined roadmap?
3. How will the project use the funding raised during the mint? Please be as specific as possible.
4. What will the project do in the case it's not able to sell out and raise the required funding?`,
			placeholder: '',
			type: 'textarea'
		},
		{
			label: 'If selected for Launchpad, I will comply with all the requirements below: *',
			hint: `- Founding team will dox
- One team member will KYC through a major exchange (Crypto.com, FTX, Coinbase) and mint funds will be deposited to the major exchange wallet
- I will sign a formal legal partnership agreement
- I am required to escrow funds with Magic Eden following the mint
`,
			placeholder: '',
			type: 'checkbox'
		}
	];
</script>

<div class="flex flex-col justify-between gap-20">
	<div class="flex flex-col justify-around tablet:w-2/3 gap-6">
		<h2 class="text-gradient text-3xl font-bold">Degen Forest Launchpad Submission Form</h2>
		<p class="text-base text-primary leading-8 tablet:pr-16">
			Magic Eden is looking to onboard unique, quality projects to drop their collections via Magic
			Eden Launchpad, our white glove minting and marketing service. Announcements: We will consider
			applications on a rolling basis. If you have not heard back from us within a few weeks of your
			submission, this means we have placed you in our pipeline. You will hear from us if we are
			interested in moving forward with your project.Please Fillout the following form.
		</p>
	</div>

	<div class="flex flex-col  gap-6">
		<p class="text-gradient text-2xl">Which blockchain is your collection on? *</p>
		<div class="flex flex-wrap tablet:flex-nowrap gap-6">
			<button class="gradient-primary btn-primary">Ethereum</button>
			<button class="gradient-primary btn-primary">Polygon</button>
			<button class="gradient-primary btn-primary">Solana</button>
		</div>
	</div>
</div>

<div class="flex flex-col py-8 w-full items-center">
	<div class="tablet:max-w-md laptop-sm:max-w-3xl laptop:max-w-4xl flex flex-col gap-10">
		{#each form as { label, placeholder, hint, type }}
			<!-- tailwind gradient bordred input and label -->
			<div class="flex flex-col gap-6 text-primary">
				{#if type === 'checkbox'}
					<div class="flex flex-col gap-1">
						<label for="" class="text-gradient text-2xl">{label}</label>
						<small class="text-secondary-light text-sm opacity-50">{hint}</small>
					</div>
					<input type="checkbox" value="" class="w-8 h-8 ring-0" />
				{:else if type === 'textarea'}
					<div class="flex flex-col gap-1">
						<label for="" class="text-gradient text-2xl">{label}</label>
						<small class="text-secondary text-sm -light opacity-50">{hint}</small>
					</div>
					<div class="rounded-lg gradient-primary p-1 w-full">
						<textarea rows="5" class="w-full p-4 rounded-lg bg-primary" />
					</div>
				{:else}
					<div class="flex flex-col gap-1">
						<label for="" class="text-gradient text-2xl">{label}</label>
						<small class="text-secondary text-sm -light opacity-50">{hint}</small>
					</div>
					<div class="rounded-lg gradient-primary p-1 w-full">
						<input
							{type}
							class="w-full px-6 py-2 text-primary bg-primary border-none rounded-lg placeholder:text-secondary-light placeholder:opacity-50"
							{placeholder}
						/>
					</div>
				{/if}
			</div>
		{/each}

		<button class="gradient-primary btn-primary px-6 py-2 w-fit mx-auto">Submit</button>
	</div>
</div>

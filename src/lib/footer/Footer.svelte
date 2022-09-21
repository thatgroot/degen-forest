<script>
	import logo from '$lib/assets/svg/logo.svg';
</script>

<footer class="p-4 bg-primary py-6">
	<div class="flex flex-col tablet:flex-row gap-12 tablet:gap-3 justify-between">
		<div class="flex flex-col gap-6 tablet:gap-3 justify-between">
			<a href="/" class="flex items-center">
				<img src={logo} class="mr-3 h-8" alt="DegenForest Logo" />
			</a>
			<div class="sm:flex sm:items-center sm:justify-between">
				<div class="flex flex-col gap-5">
					<span class="text-sm text-primary sm:text-center">Degen Forest the homepage of NFT's</span
					>
					<span class="text-sm text-primary sm:text-center">
						©2022 Euclid Labs, Inc. All Rights Reserved.
					</span>
				</div>
			</div>
		</div>

		<div class="grid grid-cols-1 tablet:grid-cols-3 gap-4 tablet:gap-24">
			<ul class="text-primary">
				{#each [{ name: 'Marketplace', href: '/marketplace' }, { name: 'Popular Collection', href: '/marketplace/popular-collections' }, { name: 'Launchpad', href: '/launchpad' }, { name: 'Auction', href: '/marketplace/auction' }] as { name, href }}
					<li class="mb-4">
						<a {href} class="hover:underline">{name}</a>
					</li>
				{/each}
			</ul>
			<ul class="text-primary">
				{#each [{ name: 'Insights', href: '/insights' }, { name: 'News', href: '/news' }, { name: 'Intro to NFT', href: '/intro-to-nft' }, { name: 'Launch with us', href: '/launch-with-us' }] as { name, href }}
					<li class="mb-4">
						<a {href} class="hover:underline">{name}</a>
					</li>
				{/each}
			</ul>

			<ul class="text-primary">
				{#each [{ name: 'Resources', href: '/resources' }, { name: 'About Us', href: '/about-us' }, { name: 'API', href: '/api' }, { name: 'Career', href: '/career' }, { name: 'Copyright Policy', href: '/copyright-policy' }, { name: 'Terms of services', href: '/terms-of-services' }, { name: 'Privacy Policy', href: '/privacy-policy' }] as { name, href }}
					<li class="mb-4">
						<a {href} class="hover:underline">{name}</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</footer>

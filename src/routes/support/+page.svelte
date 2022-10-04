<script lang="ts">
	import logo from '$lib/assets/svg/logo.svg';
	import goTo from '$lib/assets/svg/icons/link.svg';
	import avatar from '$lib/assets/svg/icons/avatar.png';
	import plus from '$lib/assets/svg/icons/plus1.svg';
	import started from '$lib/assets/svg/icons/started.svg';
	import buying from '$lib/assets/svg/icons/buying.svg';
	import selling from '$lib/assets/svg/icons/selling.svg';
	import listed from '$lib/assets/svg/icons/listing.svg';
	import promotions from '$lib/assets/svg/icons/promotions.svg';
	import trust from '$lib/assets/svg/icons/trust.svg';
	import Search from '$lib/form/search.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	
	//vars
	let cardData = [
			{
			icon: started,
			title: 'Getting Started',
			desc: 'All the basics so you can trade NFTs using Magic Eden',
			img1: "https://static.intercomassets.com/avatars/5522517/square_128/3ah1rlRM56NUwVHTts2sDPhx3nTCLdQG-3q_ZqDkJbk-1651805779.png",
			img2:"https://static.intercomassets.com/avatars/5346159/square_128/2892_%281%29-1664434738.png",
			img3: "https://static.intercomassets.com/avatars/5386205/square_128/solgod-1651463067.png",
			written:"manny",
		},	
		{
			icon: buying,
			title: 'Buying',
			desc: 'All the basics so you can trade NFTs using Magic Eden',
			img1: "https://static.intercomassets.com/avatars/5522517/square_128/3ah1rlRM56NUwVHTts2sDPhx3nTCLdQG-3q_ZqDkJbk-1651805779.png",
			img2:"https://static.intercomassets.com/avatars/5346159/square_128/2892_%281%29-1664434738.png",
			img3: "https://static.intercomassets.com/avatars/5386205/square_128/solgod-1651463067.png",
			written:"kaboom",
		},
		{
			icon: selling,
			title: 'Selling',
			desc: 'All the basics so you can trade NFTs using Magic Eden',
			img1: "https://static.intercomassets.com/avatars/5522517/square_128/3ah1rlRM56NUwVHTts2sDPhx3nTCLdQG-3q_ZqDkJbk-1651805779.png",
			img2:"https://static.intercomassets.com/avatars/5346159/square_128/2892_%281%29-1664434738.png",
			img3: "https://static.intercomassets.com/avatars/5386205/square_128/solgod-1651463067.png",
			written:"jordan",
		},
		{
			icon: listed,
			title: 'Getting Listed',
			desc: 'All the basics so you can trade NFTs using Magic Eden',
			img1: "https://static.intercomassets.com/avatars/5522517/square_128/3ah1rlRM56NUwVHTts2sDPhx3nTCLdQG-3q_ZqDkJbk-1651805779.png",
			img2:"https://static.intercomassets.com/avatars/5346159/square_128/2892_%281%29-1664434738.png",
			img3: "https://static.intercomassets.com/avatars/5386205/square_128/solgod-1651463067.png",
			written:"lazytron",
		},
		{
			icon: promotions,
			title: 'Promotions & Partnerships',
			desc: 'All the basics so you can trade NFTs using Magic Eden',
			img1: "https://static.intercomassets.com/avatars/5522517/square_128/3ah1rlRM56NUwVHTts2sDPhx3nTCLdQG-3q_ZqDkJbk-1651805779.png",
			img2:"https://static.intercomassets.com/avatars/5346159/square_128/2892_%281%29-1664434738.png",
			img3: "https://static.intercomassets.com/avatars/5386205/square_128/solgod-1651463067.png",
			written:"paco",
		},
		{
			icon: trust,
			title: 'Trust & Safety',
			desc: 'All the basics so you can trade NFTs using Magic Eden',
			img1: "https://static.intercomassets.com/avatars/5522517/square_128/3ah1rlRM56NUwVHTts2sDPhx3nTCLdQG-3q_ZqDkJbk-1651805779.png",
			img2:"https://static.intercomassets.com/avatars/5346159/square_128/2892_%281%29-1664434738.png",
			img3: "https://static.intercomassets.com/avatars/5386205/square_128/solgod-1651463067.png",
			written:"nimzo",
		},	
	
	];
</script>
<!-- content -->
<div class="flex flex-col gap-4 w-full">	
<div class="bg-primary w-full  m t-2 py-4 text-primary">
	<div class="flex justify-evenly items-center">
		<img src={logo} alt="logo" class="p-4" />
		<div class=" flex">
			<img src={goTo} alt="link to home" class="w-6 pr-2" />
			<a href="/">Go to Degen Forest</a>
		</div>
	</div>
	<div class="flex flex-col items-center gap-8 w-full text-center">
		<h1 class="text-gradient text-[2rem] font-bold leading-10 ">
			Advice and Answers from the Team
		</h1>
		<div class="flex items-center justify-center w-full mx-auto">
			<div>
				<Search bg="secondary" />
			</div>
		</div>
	</div>
</div>

<!-- news  -->
{#each cardData as { icon, title, desc,img1,img2,img3,written }}

<div class="flex flex-col gap-1 w-full">
	<div class="flex p-4 gap-10 bg-secondary max-w-sm tablet:max-w-md laptop-sm:max-w-2xl laptop:max-w-3xl desktop:max-w-3xl mx-auto">
		<div class="w-fit">
			<img src={icon} class="w-14 h-14 mt-6" alt="logo"/>
		</div>
		<div class="flex flex-col gap-2">
			 <p class="text-accent text-xl">{title}</p>
			 <p class="text-primary">{desc}</p>
			 <div class="relative ">
				<img src={avatar} alt="img-1 rounded-full" class="w-6 h-6 absolute left-0 top-1 rounded-full">
				<img src={img1} alt="img-1 rounded-full" class="w-6 h-6 absolute left-4 top-1 rounded-full">
				<img src={img2} alt="img-1 rounded-full" class="w-6 h-6 absolute left-8 top-1 rounded-full">
				<img src={img3} alt="img-1 rounded-full" class="w-6 h-6 absolute left-12 mr-4 top-1 rounded-full">
				<img src={plus} alt="img-1 rounded-full" class="w-6 h-6 absolute left-16 mr-4 top-1 rounded-full">
				<p class="text-primary relative left-24 text-xs" id="author">{desc}</p>
				<p class="text-primary relative left-24 text-xs" id="author">written by <span class="text-accent">{written}</span> and 1 other</p>
			 </div>
		</div>
	</div>

</div>
{/each}
<div class="flex justify-center">
	<Footer />
</div>

</div>


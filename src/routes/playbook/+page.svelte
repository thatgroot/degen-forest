<script lang="ts">
	import rss from '$lib/assets/svg/icons/rss.svg';
	import play from '$lib/assets/svg/icons/play.svg';
	import polls from '$lib/assets/svg/icons/polls.svg';
	import oasis from '$lib/assets/svg/icons/oasis.svg';
	import portfolio from '$lib/assets/svg/icons/portfolio.svg';
	import profile from '$lib/assets/svg/icons/avatar.png';
	import develop from '$lib/assets/svg/icons/flask.svg';
	import region from '$lib/assets/svg/icons/flag.svg';
	import anchor from '$lib/assets/svg/icons/anchor.svg';
	import upvotes from '$lib/assets/svg/icons/upvotes.svg';
	import downvotes from '$lib/assets/svg/icons/downvotes.svg';
	import warning from '$lib/assets/svg/icons/warning.svg';
	import comments from '$lib/assets/svg/icons/comment.svg';
	import likes from '$lib/assets/svg/icons/like.svg';
	import dislikes from '$lib/assets/svg/icons/dislike.svg';
	import star from '$lib/assets/svg/icons/star.svg';
	import drop from '$lib/assets/svg/icons/downarrow.svg';
	import smiley from '$lib/assets/svg/icons/smiley.svg';
	import Dropdown from '$lib/dropdown/Dropdown.svelte';
	import Input from '$lib/form/Input.svelte';

	let navItems = [
		{
			icon: rss,
			text: 'News',
			active: true
		},
		{
			icon: play,
			text: 'Media',
			active: false
		},
		{
			icon: polls,
			text: 'Polls',
			active: false
		},
		{
			icon: oasis,
			text: 'Oasis',
			active: false
		},
		{
			icon: portfolio,
			text: 'Portfolio',
			active: false
		},
		{
			icon: profile,
			text: 'Profile',
			active: false
		},
		{
			icon: develop,
			text: 'Develop',
			active: false
		},
		{
			icon: region,
			text: 'Region',
			active: false
		}
	];
    let details =[
        {
            text: "4",
            icon: upvotes,
            bnb: "BNB",
            cordano: "ADA",
            avax:    "AVAX",
            description: "Cardano May Get Accepted at Many More Million Merchants in Brazil Crypto Events",
            time: "40min",
            today: "u.today",
        },
        {
            text: "4",
            icon: downvotes,
            bnb: "BTC",
            cordano: "ADA",
            avax:    "AVAX",
            description: "Cardano May Get Accepted at Many More Million Merchants in Brazil Crypto Events",
            time: "40min",
            today: "u.today",
        },
        {
            text: "4",
            icon: warning,
            bnb: "BNB",
            cordano: "ADA",
            avax:    "AVAX",
            description: "Cardano May Get Accepted at Many More Million Merchants in Brazil Crypto Events",
            time: "40min",
            today: "u.today",
        },
        {
            text: "4",
            icon: comments,
            bnb: "BNB",
            cordano: "ADA",
            avax:    "AVAX",
            description: "Cardano May Get Accepted at Many More Million Merchants in Brazil Crypto Events",
            time: "40min",
            today: "u.today",
        },
        {
            text: "4",
            icon: likes,
            bnb: "BNB",
            cordano: "ADA",
            avax:    "AVAX",
            description: "Cardano May Get Accepted at Many More Million Merchants in Brazil Crypto Events",
            time: "40min",
            today: "u.today",
        },
        {
            text: "4",
            icon: dislikes,
            bnb: "BNB",
            cordano: "ADA",
            avax:    "AVAX",
            description: "Cardano May Get Accepted at Many More Million Merchants in Brazil Crypto Events",
            time: "40min",
            today: "u.today",
        },
        {
            text: "4",
            icon: star,
            bnb: "BNB",
            cordano: "ADA",
            avax:    "AVAX",
            description: "Cardano May Get Accepted at Many More Million Merchants in Brazil Crypto Events",
            time: "40min",
            today: "u.today",
        },
        {
            text: "4",
            icon: smiley,
            bnb: "BNB",
            cordano: "ADA",
            avax:    "AVAX",
            time: "40min",
            description: "Cardano May Get Accepted at Many More Million Merchants in Brazil Events",
            today: "u.today",
        },

    ];
</script>
<div class="flex news-font w-fit pt-2">
	<div class="flex flex-col gap-2 min-w-[8.5rem] border-r-2 border-secondary text-xs">
		{#each navItems as { icon, text, active }}
			<div
				class="flex gap-3 bg-primary mx-3 p-2 hover:bg-secondary hover:rounded-lg cursor-pointer">
				<img class="w-4 h-4" src={icon} alt={text} />
				<p class="text-primary">{text}</p>
			</div>
		{/each}
	</div>
	<div class="flex w-full">
        <div class="flex w-1/2 text-primary">
            <div class="flex flex-col">
                <div class="flex justify-between h-fit pb-2 border-b-2 border-r-2 border-secondary items-center">
                    <div class="h-fit flex w-full">
                       <div class="w-fit flex gap-3 items-center pl-2">
                            <span class="text-xs">Top News</span>
                            <img src={drop} alt="icon" class="w-2">
                            <span class="text-xs ">All News</span>
                            <img src={drop} alt="icon" class="w-2">
                        </div>
                    </div>
                    <div class="w-fit flex text-xs text-primary justify-end">
                        <Input placeholder="Search..." type="text"  />
                    </div>
                </div>
                {#each details as {time, today, bnb, cordano, avax, description }}
                <div class="w-max pt-2 pb-2 pr-2 pl-2  border-b-2 border-r-2 border-secondary">
                    <div class="flex flex-col">
                        <div class="flex gap-3 text-xs text-secondary">
                            <span>
                                <time class="clr-icon">
                                    {time}
                                </time>
                            </span>
                            <p class="text-primary break-word-wrap">
                                {description}
                                <span class="flex">
                                    <img src={anchor} alt="anchor cursor-pointer" class="w-4 pr-1" />
                                    <span class="si-source-domain text-secondary clr-icon"> {today}</span>
                                </span>
                            </p>
        
                            <div class="text-accent">
                                <a href="/news/binancecoin/" class="colored-link">{bnb}</a>
                                <a href="/news/cardano/" class="colored-link">{cordano}</a>
                                <a href="/news/avalanche-2/" class="colored-link">{avax}</a>
                                <!---->
                            </div>
                        </div>
                        <div>
                            <div/>
                            <div class="flex flex-row mt-1">
                                {#each details as {icon, text }}
                                <span title="4 positive votes" class="flex gap-1  pr-4">
                                    <img  class="w-3 cursor-pointer" src={icon} alt="upvotes" />
                                    <span class="text-xxs"> {text} </span>
                                </span>
                                {/each}
                            </div>
                          
                        </div>
                        <a href="/news/16393638/Cardano-May-Get-Accepted-at-Many-More-Million-Merchants-in-Brazil-Following-These-Events">
                        </a>
                    </div>
                </div>
                {/each}
                
            </div>
            <div class="flex flex-col text-primary">
                <div class="flex justify-between h-fit pt-1 pb-2 border-b-2 border-r-2 border-secondary items-center ">
                    <div class="hover:bg-secondary">
                        <button class="h-fit flex bor-r-2 border-secondary ">
                            <div class="w-fit items-center pl-32 text-center bor-r-2 border-secondary">
                                 <span class="text-xs">Home</span>
                             </div>
                         </button>
                    </div>
                 <div class="hover:bg-secondary">
                    <button class="w-fit flex text-xs text-primary items-center pr-32 border-l-2 border-secondary ">
                        <span class="text-xs">About</span>
                    </button>
                 </div>
                  
                </div>
                {#each details as {time, today, bnb, cordano, avax, description }}
                <div class="w-max pt-2 pb-2 pr-2 pl-2  border-b-2 border-r-2 border-secondary">
                    <div class="flex flex-col">
                        <div class="flex gap-3 text-xs text-grey">
                            <span>
                                <time class="clr-icon">
                                    {time}
                                </time>
                            </span>
                            <p class="text-primary break-word-wrap">
                                {description}
                                <span class="flex">
                                    <img src={anchor} alt="anchor cursor-pointer" class="w-4 pr-1" />
                                    <span class="si-source-domain text-secondary clr-icon"> {today}</span>
                                </span>
                            </p>
        
                            <div class="text-accent">
                                <a href="/news/binancecoin/" class="colored-link">{bnb}</a>
                                <a href="/news/cardano/" class="colored-link">{cordano}</a>
                                <a href="/news/avalanche-2/" class="colored-link">{avax}</a>
                                <!---->
                            </div>
                        </div>
                        <div>
                            <div/>
                            <div class="flex flex-row mt-1">
                                {#each details as {icon, text }}
                                <span title="4 positive votes" class="flex gap-1  pr-4">
                                    <img  class="w-3 cursor-pointer" src={icon} alt="upvotes" />
                                    <span class="text-xxs"> {text} </span>
                                </span>
                                {/each}
                            </div>
                          
                        </div>
                        <a href="/news/16393638/Cardano-May-Get-Accepted-at-Many-More-Million-Merchants-in-Brazil-Following-These-Events">
                        </a>
                    </div>
                </div>
                {/each}
            </div>
        </div>
    </div>
</div>

<!-- <style>
	.left-pane {
		height: 600px !important;
		margin-left: -56px !important;
	}
</style> -->

import { c as create_ssr_component, e as escape, d as add_attribute, f as each, v as validate_component, b as subscribe } from "../../../chunks/index.js";
/* empty css                   */import { l as logo, F as Footer } from "../../../chunks/Footer.js";
import { A as Accordion } from "../../../chunks/Accordion.js";
import { a as arrow_down } from "../../../chunks/arrow-down.js";
import { d as discord } from "../../../chunks/discord.js";
import { t as twitter } from "../../../chunks/twitter.js";
import { a as arrow_left } from "../../../chunks/AccordionHeader.js";
import { S as Search } from "../../../chunks/search.js";
import { C as ConnectWallet } from "../../../chunks/ConnectWallet.js";
import { d as degods } from "../../../chunks/degods.js";
import { p as page } from "../../../chunks/stores.js";
import "../../../chunks/search2.js";
import "../../../chunks/Tab.js";
import "../../../chunks/solana.js";
import "../../../chunks/copy.js";
import "../../../chunks/stack.js";
import "../../../chunks/eth.js";
import "../../../chunks/info.js";
import "../../../chunks/ListItem.js";
import "../../../chunks/Popup.js";
const wallet = "/_app/immutable/assets/wallet-f16dc00f.svg";
const dex = "/_app/immutable/assets/dex-db1e6bc0.svg";
const marketplace = "/_app/immutable/assets/marketplace-eb29da77.svg";
const analytics = "/_app/immutable/assets/analytics-40d6869f.svg";
const launchpad = "/_app/immutable/assets/launchpad-6642ec81.svg";
const airdrop = "/_app/immutable/assets/airdrop-27006a3d.svg";
const staking = "/_app/immutable/assets/staking-a8c1b098.svg";
const news = "/_app/immutable/assets/news-1e9733bb.svg";
const guide_book = "/_app/immutable/assets/guide-book-25abfc48.svg";
const support = "/_app/immutable/assets/support-d7765be5.svg";
const ios = "/_app/immutable/assets/ios-0f901282.svg";
const tiktok = "/_app/immutable/assets/tiktok-49d063f3.svg";
const youtube = "/_app/immutable/assets/youtube-b3f5cb7f.svg";
const instagram = "/_app/immutable/assets/instagram-995ce057.svg";
const fries_menu = "/_app/immutable/assets/fries-menu-1a0c02f2.svg";
const Sidenav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const side_nav_items = [
    {
      title: "Dex",
      href: "/dex",
      icon: dex,
      childs: []
    },
    {
      title: "Marketplace",
      icon: marketplace,
      childs: [
        {
          title: "Popular Collections",
          href: "/marketplace/popular-collections"
        },
        {
          title: "Drop calendar",
          href: "/marketplace/drop-calendar"
        },
        {
          title: "Auctions",
          href: "/marketplace/auctions"
        }
      ]
    },
    {
      title: "Insights",
      icon: analytics,
      childs: [
        {
          title: "NFT Insights",
          href: "/analytics/nft"
        },
        {
          title: "Defi Insights",
          href: "/analytics/defi"
        }
      ]
    },
    {
      title: "Launchpad",
      icon: launchpad,
      href: "/launchpad",
      childs: [
        {
          title: "Apply for Launchpad",
          href: "/launchpad/apply"
        },
        {
          title: "Launches",
          href: "/launchpad/launches"
        }
      ]
    },
    {
      title: "Airdrops",
      href: "/airdrops",
      icon: airdrop,
      childs: []
    },
    {
      title: "NFT Staking",
      href: "/staking",
      icon: staking,
      childs: []
    },
    {
      title: "News",
      href: "/news",
      icon: news,
      childs: []
    },
    {
      title: "Intro To NFT",
      href: "/intro-to-nft",
      icon: guide_book,
      childs: []
    },
    {
      title: "Support",
      href: "/support",
      icon: support,
      childs: []
    }
  ];
  const social_media_data = [
    {
      title: "iOS App",
      icon: ios,
      href: "https://apps.apple.com/us/app/collectible-world/id1562570008"
    },
    {
      title: "Discord",
      icon: discord,
      href: "https://discord.gg/collectibleworld"
    },
    {
      title: "TikTok",
      icon: tiktok,
      href: "https://www.tiktok.com/@collectibleworld"
    },
    {
      title: "YouTube",
      icon: youtube,
      href: "https://www.youtube.com/channel/UCZ5Z5YQZQZ5Z5YQZQZ5Z5YQ"
    },
    {
      title: "Twitter",
      icon: twitter,
      href: "https://twitter.com/collectiblew"
    },
    {
      title: "Instagram",
      icon: instagram,
      href: "https://www.instagram.com/collectibleworld/"
    }
  ];
  let toggle = "hidden";
  let desktop_toggle = "block";
  let toggle_icon = fries_menu;
  return `<div class="${"w-full " + escape(toggle, true) + " laptop:block left-0 right-0 top-0 bottom-0 z-[9999] bg-primary tablet:max-w-min transition-all duration-300 " + escape(
    "border-r-2 border-r-brown relative",
    true
  )}"><button class="${"flex justify-end px-2 pt-4 " + escape("w-full", true)}"><img${add_attribute("src", arrow_left, 0)} alt="${"collapse"}" class="${"w-6 h-4 transition-all duration-500 ease-in-out " + escape("", true)}"></button>
	<div class="${"flex flex-col py-6 gap-6 sticky top-0 laptop:" + escape(desktop_toggle, true)}"><div class="${"flex flex-col gap-2 "}"><div class="${"flex flex-col gap-2 px-3"}">${each(side_nav_items, ({ title, icon, childs, href }) => {
    return `
					${childs.length > 0 ? `
						<div>${validate_component(Accordion, "Accordion").$$render(
      $$result,
      {
        header: {
          title,
          show: "both",
          size: "full",
          postfix: arrow_down,
          prefix: icon
        },
        href
      },
      {},
      {
        default: () => {
          return `<div class="${"flex flex-col text-secondary-light gap-2 py-3 px-1 w-full"}">${each(childs, ({ title: title2, href: href2 }) => {
            return `
										<a${add_attribute("href", href2, 0)} class="${"w-full tablet:bg-primary hover:bg-secondary text-xs px-2 py-1 rounded-md cursor-pointer"}">${escape(title2)}
										</a>`;
          })}</div>
							`;
        }
      }
    )}
						</div>` : `<a${add_attribute("href", href, 0)} class="${"flex items-center gap-2 text-primary text-sm px-2 py-3 rounded-xl cursor-pointer"}"><span class="${"w-4 h-4"}"><img${add_attribute("src", icon, 0)}${add_attribute("alt", `${title} app`, 0)}></span>
							<span>${escape(title)}</span>
						</a>`}`;
  })}</div>

			<div class="${"grid grid-cols-2 gap-2 text-primary border-t-0 tablet:border-t-2 border-t-secondary w-max px-3 py-6"}">${each(social_media_data, ({ title, icon }) => {
    return `
					<button class="${"flex gap-2 items-center tablet:border-2 border-secondary px-2 py-1 text-xs transition-colors duration-300 hover:bg-secondary"}"><img${add_attribute("src", icon, 0)} class="${"h-4 w-4"}"${add_attribute("alt", `${icon}`, 0)}>
						<span>${escape(title)}</span>
					</button>`;
  })}</div></div></div>
	</div>

<div class="${"fixed bottom-6 right-2 laptop:hidden z-[999999]"}"><button class="${"flex items-center justify-center w-12 h-12 rounded-full bg-secondary"}"><img${add_attribute("src", toggle_icon, 0)} alt="${"menu"}" class="${"w-6 h-6"}"></button></div>`;
});
const Topbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"flex w-full justify-between relative overflow-hidden text-xs bg-secondary"}"><div class="${"text-primary bg-secondary z-10 px-6 min-w-max absolute left-0 bottom-0 top-0 flex items-center"}">Trending Collections
	</div>
	<div class="${"flex justify-around items-center animate-marquee"}">${each([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (collection) => {
    return `<div class="${"flex x-6 justify-around min-w-max gap-2 mx-2"}"><span class="${"text-accent"}">#${escape(collection)}</span>
				<img class="${"h-5 w-5 rounded-full"}"${add_attribute("src", degods, 0)} alt="${"collection avatar"}">
				<span class="${"text-primary"}">De Gods</span>
			</div>`;
  })}

		<span class="${"text-lg text-primary font-bold mx-4"}">| </span></div>

	<div class="${"flex justify-around items-center animate-marquee"}">${each([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (coin) => {
    return `<div class="${"flex justify-around min-w-max gap-2 px-2"}"><span class="${"text-accent"}">#${escape(coin)}</span>
				<img class="${"h-5 w-5 rounded-full"}"${add_attribute("src", degods, 0)} alt="${"collection avatar"}">
				<span class="${"text-primary"}">De Gods</span>
			</div>`;
  })}</div>
	<div class="${"text-primary bg-secondary z-10 px-6 min-w-max absolute right-0 bottom-0 top-0 flex items-center"}">Trending Coins
	</div></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let toggle = false;
  $$unsubscribe_page();
  return `<main class="${"p-0 m-0"}"><div>
		${validate_component(Topbar, "Topbar").$$render($$result, {}, {}, {})}
		<div class="${"flex flex-col gap-6 desktop:flex-row justify-between px-3 py-3"}"><a href="${"/"}"><img${add_attribute("src", logo, 0)} alt="${"degen forest"}" class="${"max-w-[15rem]"}"></a>

			<div class="${"flex items-center"}">${validate_component(Search, "Search").$$render($$result, { bg: "secondary" }, {}, {})}</div>
			<button class="${"flex btn-primary desktop:btn-accent p-0 px-2"}"><img${add_attribute("src", wallet, 0)} alt="${"connect wallet"}" class="${"block px-2"}">
				<div class="${"h-full w-2 desktop:border-r-2 desktop:border-r-accent"}"></div>
				<span class="${"text-sm px-6 sm:px-2 hidden desktop:block"}">Connect Wallet</span></button></div>

		${validate_component(ConnectWallet, "ConnectWallet").$$render(
    $$result,
    {
      toggle,
      onClosed: () => {
        toggle = false;
      }
    },
    {},
    {}
  )}

		
		<div class="${"flex flex-col tablet:flex-row relative"}">
			${validate_component(Sidenav, "Sidenav").$$render($$result, {}, {}, {})}
			<div class="${"flex flex-col w-full " + escape(
    $page.routeId === "(app)/marketplace/collection" ? "" : "px-8 py-6",
    true
  )}">${slots.default ? slots.default({}) : ``}
				${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div></div></div></main>`;
});
export {
  Layout as default
};

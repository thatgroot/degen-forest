import { c as create_ssr_component, d as add_attribute, f as each, e as escape } from "./index.js";
const logo = "/_app/immutable/assets/logo-ba495177.svg";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="${"p-4 bg-primary py-6"}"><div class="${"flex flex-col tablet:flex-row gap-12 tablet:gap-3 justify-between"}"><div class="${"flex flex-col gap-6 tablet:gap-3 justify-between"}"><a href="${"/"}" class="${"flex items-center"}"><img${add_attribute("src", logo, 0)} class="${"mr-3 h-8"}" alt="${"DegenForest Logo"}"></a>
			<div class="${"sm:flex sm:items-center sm:justify-between"}"><div class="${"flex flex-col gap-5"}"><span class="${"text-sm text-primary sm:text-center"}">Degen Forest the homepage of NFT&#39;s</span>
					<span class="${"text-sm text-primary sm:text-center"}">\xA92022 Euclid Labs, Inc. All Rights Reserved.
					</span></div></div></div>

		<div class="${"grid grid-cols-1 tablet:grid-cols-3 gap-4 tablet:gap-24"}"><ul class="${"text-primary"}">${each(
    [
      {
        name: "Marketplace",
        href: "/marketplace"
      },
      {
        name: "Popular Collection",
        href: "/marketplace/popular-collections"
      },
      { name: "Launchpad", href: "/launchpad" },
      {
        name: "Auction",
        href: "/marketplace/auction"
      }
    ],
    ({ name, href }) => {
      return `<li class="${"mb-4"}"><a${add_attribute("href", href, 0)} class="${"hover:underline"}">${escape(name)}</a>
					</li>`;
    }
  )}</ul>
			<ul class="${"text-primary"}">${each(
    [
      { name: "Insights", href: "/insights" },
      { name: "News", href: "/news" },
      {
        name: "Intro to NFT",
        href: "/intro-to-nft"
      },
      {
        name: "Launch with us",
        href: "/launch-with-us"
      }
    ],
    ({ name, href }) => {
      return `<li class="${"mb-4"}"><a${add_attribute("href", href, 0)} class="${"hover:underline"}">${escape(name)}</a>
					</li>`;
    }
  )}</ul>

			<ul class="${"text-primary"}">${each(
    [
      { name: "Resources", href: "/resources" },
      { name: "About Us", href: "/about-us" },
      { name: "API", href: "/api" },
      { name: "Career", href: "/career" },
      {
        name: "Copyright Policy",
        href: "/copyright-policy"
      },
      {
        name: "Terms of services",
        href: "/terms-of-services"
      },
      {
        name: "Privacy Policy",
        href: "/privacy-policy"
      }
    ],
    ({ name, href }) => {
      return `<li class="${"mb-4"}"><a${add_attribute("href", href, 0)} class="${"hover:underline"}">${escape(name)}</a>
					</li>`;
    }
  )}</ul></div></div></footer>`;
});
export {
  Footer as F,
  logo as l
};

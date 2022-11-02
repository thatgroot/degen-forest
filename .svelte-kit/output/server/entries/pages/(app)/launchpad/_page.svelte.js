import { c as create_ssr_component, e as escape, v as validate_component, f as each, d as add_attribute } from "../../../../chunks/index.js";
import { T as TabBar, a as Tab } from "../../../../chunks/Tab.js";
const rugged = "/_app/immutable/assets/rugged-60023869.png";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let active = "live";
  const nfts = [
    {
      name: "Rad Trip Bunny",
      artist: "Kikiverse",
      image: "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://bafkreiapq6oq6bnfi6kvwg4fzzo7objbd64kxhnz6totbrmxitcije7zg4.ipfs.dweb.link/",
      items: 1e3,
      price: 0.1,
      platform: "solana",
      coin: "sol",
      time_left: "1d 2h 30m"
    },
    {
      name: "Rad Trip Bunny",
      artist: "Kikiverse",
      image: "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://bafkreiapq6oq6bnfi6kvwg4fzzo7objbd64kxhnz6totbrmxitcije7zg4.ipfs.dweb.link/",
      items: 1e3,
      price: 0.1,
      platform: "solana",
      coin: "sol",
      time_left: "1d 2h 30m"
    },
    {
      name: "Rad Trip Bunny",
      artist: "Kikiverse",
      image: "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://bafkreiapq6oq6bnfi6kvwg4fzzo7objbd64kxhnz6totbrmxitcije7zg4.ipfs.dweb.link/",
      items: 1e3,
      price: 0.1,
      platform: "solana",
      time_left: "1d 2h 30m"
    },
    {
      name: "Rad Trip Bunny",
      artist: "Kikiverse",
      image: "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://bafkreiapq6oq6bnfi6kvwg4fzzo7objbd64kxhnz6totbrmxitcije7zg4.ipfs.dweb.link/",
      items: 1e3,
      price: 0.1,
      time_left: "1d 2h 30m",
      platform: "solana"
    },
    {
      name: "Rad Trip Bunny",
      artist: "Kikiverse",
      image: "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://bafkreiapq6oq6bnfi6kvwg4fzzo7objbd64kxhnz6totbrmxitcije7zg4.ipfs.dweb.link/",
      items: 1e3,
      price: 0.1,
      time_left: "1d 2h 30m",
      platform: "solana",
      coin: "sol"
    },
    {
      name: "Rad Trip Bunny",
      artist: "Kikiverse",
      image: "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://bafkreiapq6oq6bnfi6kvwg4fzzo7objbd64kxhnz6totbrmxitcije7zg4.ipfs.dweb.link/",
      items: 1e3,
      price: 0.1,
      platform: "solana",
      time_left: "SOLD OUT",
      coin: "sol"
    },
    {
      name: "Rad Trip Bunny",
      artist: "Kikiverse",
      image: "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://bafkreiapq6oq6bnfi6kvwg4fzzo7objbd64kxhnz6totbrmxitcije7zg4.ipfs.dweb.link/",
      items: 1e3,
      price: 0.1,
      time_left: "1d 2h 30m",
      platform: "solana",
      coin: "sol"
    },
    {
      name: "Rad Trip Bunny",
      artist: "Kikiverse",
      image: "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://bafkreiapq6oq6bnfi6kvwg4fzzo7objbd64kxhnz6totbrmxitcije7zg4.ipfs.dweb.link/",
      items: 1e3,
      price: 0.1,
      time_left: "SOLD OUT",
      platform: "solana",
      coin: "sol"
    },
    {
      name: "Rad Trip Bunny",
      artist: "Kikiverse",
      image: "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://bafkreiapq6oq6bnfi6kvwg4fzzo7objbd64kxhnz6totbrmxitcije7zg4.ipfs.dweb.link/",
      items: 1e3,
      price: 0.1,
      time_left: "SOLD OUT",
      platform: "solana",
      coin: "sol"
    },
    {
      name: "Rad Trip Bunny",
      artist: "Kikiverse",
      image: "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://bafkreiapq6oq6bnfi6kvwg4fzzo7objbd64kxhnz6totbrmxitcije7zg4.ipfs.dweb.link/",
      items: 1e3,
      price: 0.1,
      time_left: "1d 2h 30m",
      platform: "solana",
      coin: "sol"
    },
    {
      name: "Rad Trip Bunny",
      artist: "Kikiverse",
      image: "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://bafkreiapq6oq6bnfi6kvwg4fzzo7objbd64kxhnz6totbrmxitcije7zg4.ipfs.dweb.link/",
      items: 1e3,
      price: 0.1,
      time_left: "SOLD OUT",
      platform: "solana",
      coin: "sol"
    },
    {
      name: "Rad Trip Bunny",
      artist: "Kikiverse",
      image: "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://bafkreiapq6oq6bnfi6kvwg4fzzo7objbd64kxhnz6totbrmxitcije7zg4.ipfs.dweb.link/",
      items: 1e3,
      price: 0.1,
      time_left: "SOLD OUT",
      platform: "solana",
      coin: "sol"
    }
  ];
  return `<div class="${"flex flex-col gap-6"}"><button class="${"btn-accent py-2 px-3"}">Featured Launch </button>
	<div class="${"flex flex-col laptop:flex-row justify-around gap-12 "}"><div class="${"flex-1 flex flex-col gap-6"}"><h2 class="${"text-gradient text-4xl font-bold"}">Rugged Revenants Gen</h2>
			<p class="${"text-base text-accent leading-8 tablet:pr-16"}">The first ever Web 3 Reforestation Competition - Project Galaxy vs. Magic Eden vs. Vera!
				Three epic projects competing to see who can activate the most community members to grow a
				forest in the real world! Whichever community mints the most NFTs wins the competition and
				will be rewarded! Additionally, a real tree will be planted on behalf of EACH AND EVERY NFT
				minted by the winning community. Let\u2019s grow the Magic Eden Forest!! Free mint, real impact!
				Let\u2019s grow the Magic Eden Forest!!
			</p></div>
		<div class="${"flex-1"}"><div style="${"background-image: url('" + escape(rugged, true) + "')"}" class="${"bg-center bg-cover bg-no-repeat desktop:h-[560px] rounded-tr-[1.25rem] rounded-br-[1.25rem]"}"></div></div></div></div>

<div class="${"mt-10 px-4 w-full"}"><div class="${"flex px-4 py-2"}">${validate_component(TabBar, "TabBar").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Tab, "Tab").$$render(
        $$result,
        {
          onclick: () => {
            active = "live";
          },
          title: "Live",
          active: active === "live"
        },
        {},
        {}
      )}
			${validate_component(Tab, "Tab").$$render(
        $$result,
        {
          onclick: () => {
            active = "claims";
          },
          active: active === "claims",
          title: "Claims"
        },
        {},
        {}
      )}`;
    }
  })}</div>

	<div class="${"grid gap-3 gird-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 large:grid-cols-4 my-6"}"><div class="${"p-0 text-center rounded-2xl overflow-hidden border-2 border-secondary"}"><a href="${"/auction/the_lost_kiki_"}"><div class="${"rounded-2xl"}"><img src="${"https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://bafkreiapq6oq6bnfi6kvwg4fzzo7objbd64kxhnz6totbrmxitcije7zg4.ipfs.dweb.link/"}" class="${"max-w-full "}" alt="${"..."}"></div>
				<div class="${"p-0 col-12 text-primary"}"><div class="${"px-4 pt-3 pb-3"}"><h5 class="${"mb-2 text-sm font-bold text-primary"}">The Lost Kiki</h5>
						<div class="${"text-xs uppercase text-accent flex items-center justify-center gap-1"}">1d 2h 30m
						</div></div>
					<div class="${"flex justify-between rounded-md px-2 py-2 bg-transparent m-2"}"><div class="${"flex justify-between gap-3 text-left border-2 border-secondary px-4 py-2 rounded-md"}"><span class="${"uppercase text-xs"}">items</span>
							<span class="${"text-xs font-bold flex items-center"}">1000</span></div>
						<div class="${"flex justify-between gap-3 text-left border-2 border-secondary px-4 py-2 rounded-md"}"><span class="${"uppercase text-xs"}">price</span>
							<span class="${"text-xs font-bold flex items-center"}">0.1 SOL</span></div></div></div></a></div></div>

	<div class="${"flex flex-col gap-4"}"><h1 class="${"mt-8 text-start text-primary text-3xl font-bold"}">Upcoming</h1>

		<div class="${"grid gap-3 gird-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 large:grid-cols-4"}">${each(nfts, ({ name, image, items, price, time_left }) => {
    return `<div class="${"p-0 text-center rounded-2xl overflow-hidden border-2 border-secondary"}"><a href="${"/auction/the_lost_kiki_"}"><div class="${"rounded-2xl"}">
							<img${add_attribute("src", image, 0)} class="${"max-w-full w-full"}" alt="${"..."}"></div>
						<div class="${"p-0 col-12 text-primary"}"><div class="${"px-4 pt-3 pb-3"}"><h5 class="${"mb-2 text-sm font-bold text-primary"}"${add_attribute("title", name, 0)}>${escape(name)}</h5>
								<div class="${"text-xs uppercase text-accent flex items-center justify-center gap-1"}">${escape(time_left)}
								</div></div>
							<div class="${"flex justify-between rounded-md px-2 py-2 bg-transparent m-2"}"><div class="${"flex justify-between gap-3 text-left border-2 border-secondary px-4 py-2 rounded-md"}"><span class="${"uppercase text-xs"}">items</span>
									<span class="${"text-xs font-bold flex items-center"}">${escape(items)}</span></div>
								<div class="${"flex justify-between gap-3 text-left border-2 border-secondary px-4 py-2 rounded-md"}"><span class="${"uppercase text-xs"}">price</span>
									<span class="${"text-xs font-bold flex items-center"}">${escape(price)} SOL</span>
								</div></div>
						</div></a>
				</div>`;
  })}</div></div></div>`;
});
export {
  Page as default
};

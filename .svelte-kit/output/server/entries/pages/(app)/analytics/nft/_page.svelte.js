import { c as create_ssr_component, f as each, v as validate_component, e as escape, d as add_attribute } from "../../../../../chunks/index.js";
import { T as TabBar, a as Tab } from "../../../../../chunks/Tab.js";
import { N as NFTFilters } from "../../../../../chunks/NFTFilters.js";
import { p as price_history } from "../../../../../chunks/price-history.js";
import { t as twitter } from "../../../../../chunks/twitter.js";
import { i as info } from "../../../../../chunks/info.js";
import { D as Dropdown } from "../../../../../chunks/Dropdown.js";
import "../../../../../chunks/Input.js";
import "../../../../../chunks/search2.js";
import "../../../../../chunks/arrow-down.js";
import "../../../../../chunks/Accordion.js";
import "../../../../../chunks/AccordionHeader.js";
const cumulative_unique_owners = "/_app/immutable/assets/cumulative-unique-owners-8bc7026e.svg";
const daily_mean_price = "/_app/immutable/assets/daily-mean-price-7f4090af.svg";
const daily_median_price = "/_app/immutable/assets/daily-median-price-fdeed4ae.svg";
const daily_nft_mints = "/_app/immutable/assets/daily-nft-mints-d4c2f549.svg";
const marketplace_volume = "/_app/immutable/assets/marketplace-volume-7e1d0206.svg";
const marketplace_volume_sales = "/_app/immutable/assets/marketplace-volumes-sales-907bbfbf.svg";
const unique_owners = "/_app/immutable/assets/unique-owners-c3a66168.svg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const top_nfts = [
    {
      collection: "Critters Cult",
      floor_price: 16.8,
      volume_1d: 9441,
      volume_1d_percent: -26.42,
      buyers_1d: 357,
      sellers_1d: 404,
      market_cap: "$3.2M",
      smart_money_1d: 100,
      floor_price_1d: "3.99%",
      wash_trading: 7
    },
    {
      collection: "Clever Arsens Nation",
      floor_price: 5,
      volume_1d: 7366,
      volume_1d_percent: -58.66,
      buyers_1d: 0,
      sellers_1d: 0,
      market_cap: "$TBU",
      smart_money_1d: -7.59,
      floor_price_1d: 0,
      wash_trading: 0
    },
    {
      collection: "The 8-Bit Collection",
      floor_price: 450,
      volume_1d: 11e3,
      volume_1d_percent: 17.67,
      buyers_1d: 22,
      sellers_1d: 22,
      market_cap: "$3.2M",
      smart_money_1d: 90,
      floor_price_1d: "3.99%",
      wash_trading: 7
    },
    {
      collection: "DeGods",
      floor_price: 450,
      volume_1d: 11e3,
      volume_1d_percent: 17.67,
      buyers_1d: 22,
      sellers_1d: 22,
      market_cap: "$3.2M",
      smart_money_1d: -70,
      floor_price_1d: "3.99%",
      wash_trading: 7
    },
    {
      collection: "Vandals",
      floor_price: 17.4,
      volume_1d: 4700,
      volume_1d_percent: 193.92,
      buyers_1d: 256,
      sellers_1d: 256,
      market_cap: "$1.1M",
      smart_money_1d: 100,
      floor_price_1d: "3.99%",
      wash_trading: 7
    }
  ];
  const smart_minting = [
    {
      collection: "Sachi",
      floor_price: 1.6,
      mint_price: 1.5,
      mint_vol: "9,494.90",
      minters: "2,650",
      smart_minted: 20,
      total_minted: "9,200",
      last_mint: "43m ago"
    },
    {
      collection: "The 8-Bit Collection",
      floor_price: 450,
      mint_price: 450,
      mint_vol: "9,494.90",
      minters: "2,650",
      smart_minted: -50,
      total_minted: "9,200",
      last_mint: "43m ago"
    },
    {
      collection: "DeGods",
      floor_price: 450,
      mint_price: 450,
      mint_vol: "9,494.90",
      minters: "2,650",
      smart_minted: 70,
      total_minted: "9,200",
      last_mint: "43m ago"
    },
    {
      collection: "Vandals",
      floor_price: 17.4,
      mint_price: 17.4,
      mint_vol: "9,494.90",
      minters: "2,650",
      smart_minted: -36,
      total_minted: "9,200",
      last_mint: "43m ago"
    },
    {
      collection: "Satori",
      floor_price: 3,
      mint_price: 3,
      mint_vol: "9,494.90",
      minters: "2,650",
      smart_minted: 80,
      total_minted: "9,200",
      last_mint: "43m ago"
    }
  ];
  const checkForNegativeSign = (value) => {
    return value.toString().includes("-") ? true : false;
  };
  let active = "top";
  return `${$$result.head += `${$$result.title = `<title>Popular Collections</title>`, ""}`, ""}
<div class="${"flex flex-col gap-6"}"><div class="${"flex flex-col justify-start gap-3"}"><h1 class="${"text-primary text-2xl"}">All NFTs</h1>

		<div class="${"grid grid-cols-1 tablet:grid-cols-2 laptop-sm:grid-cols-3 laptop:grid-cols-4 gap-3"}">${each(["Smart Money Inflow", "Top Social Buying", "Top Movers", "Smart Money Outflow"], (nft) => {
    return `<div class="${"flex w-full flex-col gap-4 px-6 py-4 bg-secondary rounded-lg"}"><div class="${"flex justify-between items-center gap-8 text-primary"}"><span class="${"text-lg"}">${escape(nft)}</span>
						<div class="${"flex gap-3"}"><span>1D</span>
							<span class="${"text-secondary-light"}">1W</span>
						</div></div>
					${each([1, 2, 3, 4], (item) => {
      return `<div class="${"flex flex-col gap-3 text-primary w-full"}"><div class="${"flex gap-3 w-full"}"><div><img src="${"https://www.hellomoon.io/_next/image?url=https%3A%2F%2Fimages.hellomoon.io%2Fnfts%2F60%2Fsodead.webp&w=128&q=75"}" alt="${""}" class="${"w-10 h-10 rounded-full"}"></div>
								<div class="${"flex flex-col gap-2"}"><span class="${"text-sm"}">SoDead </span>
									<div class="${"flex justify-between gap-6 text-secondary-light"}"><div class="${"flex flex-col gap-2 justify-between "}"><span class="${"text-xs"}">Floor Price</span>
											<span class="${"text-xxs"}">38.00 \u25CE <span class="${"text-success"}">-10.59%</span></span></div>
										<div class="${"flex flex-col gap-2 justify-between"}"><span class="${"text-xs"}">1D Volume</span>
											<span class="${"text-xxs"}">3,311.28 \u25CE</span>
										</div></div>
								</div></div>
						</div>`;
    })}
				</div>`;
  })}</div></div>

	<div class="${"flex flex-col gap-4 w-full"}"><div class="${"flex px-4 py-2"}">${validate_component(TabBar, "TabBar").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Tab, "Tab").$$render(
        $$result,
        {
          title: "Top NFT Projects",
          onclick: () => {
            active = "top";
          },
          active: active === "top"
        },
        {},
        {}
      )}
				${validate_component(Tab, "Tab").$$render(
        $$result,
        {
          title: "Smart Minting",
          onclick: () => {
            active = "smart-minting";
          },
          active: active === "smart-minting"
        },
        {},
        {}
      )}
				${validate_component(Tab, "Tab").$$render(
        $$result,
        {
          title: "NFT Ecosystem Analysis",
          onclick: () => {
            active = "ecosystem-analysis";
          },
          active: active === "ecosystem-analysis"
        },
        {},
        {}
      )}`;
    }
  })}</div>
		${validate_component(NFTFilters, "NftFilters").$$render($$result, {}, {}, {})}</div></div>

<div class="${"overflow-x-auto relative my-4 px-2 rounded-lg border-2 border-secondary"}">${active === "top" ? `<table class="${"w-full text-primary text-xs"}"><thead class="${"text-xs border-b-2 border-secondary"}"><tr class="${"text-primary"}"><th class="${"p-3 text-start"}">#</th>
					<th class="${"p-3 text-start"}">Collection</th>
					<th class="${"p-3 text-start"}">Floor Price</th>
					<th class="${"p-3 text-start"}">Volume 1D</th>
					<th class="${"p-3 text-start"}">\u0394 Volume 1D</th>
					<th class="${"p-3 text-start"}">Buyers 1D</th>
					<th class="${"p-3 text-start"}">Sellers 1D</th>
					<th class="${"p-3 text-start"}">Market Cap</th>
					<th class="${"p-3 text-start"}">Smart Money 1D</th>
					<th class="${"p-3 text-start"}">\u0394 Floor Price 1D</th>
					<th class="${"p-3 text-start"}">Wash Trading</th></tr></thead>
			<tbody>${each(top_nfts, ({ collection, floor_price, volume_1d, volume_1d_percent, buyers_1d, sellers_1d, market_cap, floor_price_1d, smart_money_1d, wash_trading }, i) => {
    return `<tr${add_attribute("class", ` ${i % 2 == 0 ? "" : "bg-secondary r"} rounded-sm`, 0)}><td class="${"p-3 text-start"}">${escape(i)}</td>
						<td class="${"p-3 text-start"}">${escape(collection)}</td>
						<td class="${"p-3 text-start"}">${escape(floor_price)}</td>
						<td class="${"p-3 text-start"}">${escape(volume_1d)}</td>
						<td class="${"p-3 text-start " + escape(
      checkForNegativeSign(volume_1d_percent) ? "text-danger" : "text-success",
      true
    )}">${escape(volume_1d_percent)}</td>
						<td class="${"p-3 text-start "}">${escape(buyers_1d)}</td>
						<td class="${"p-3 text-start"}">${escape(sellers_1d)}</td>
						<td class="${"p-3 text-start"}">${escape(market_cap)}</td>
						<td class="${"p-3 text-start"}"><div class="${"w-full bg-primary rounded-full h-2.5 mb-4 "}"><div class="${"h-2.5 rounded-full " + escape(
      checkForNegativeSign(smart_money_1d) ? "bg-danger" : "bg-success ",
      true
    )}" style="${"width: " + escape(Math.abs(smart_money_1d), true) + "%"}"></div>
							</div></td>
						<td class="${"p-3 text-start " + escape(
      checkForNegativeSign(floor_price_1d) ? "text-danger" : "text-success",
      true
    )}">${escape(floor_price_1d)}</td>
						<td class="${"p-3 text-start"}">${escape(wash_trading)}</td>
					</tr>`;
  })}</tbody></table>` : `${active === "ecosystem-analysis" ? `<div class="${"grid grid-cols-1 laptop-sm:grid-cols-2 gap-4 p-2"}">${each(
    [
      {
        title: "Marketplace Volume",
        graph: marketplace_volume
      },
      {
        title: "Marketplace Volume (Sales)",
        graph: marketplace_volume_sales
      },
      {
        title: "Daily NFT Mints",
        graph: daily_nft_mints
      },
      {
        title: "Unique Owners ( > 1NFT)",
        graph: unique_owners
      },
      {
        title: "Cumulative Unique Owners",
        graph: cumulative_unique_owners
      },
      {
        title: "Daily Mean Price(SOL)",
        graph: daily_mean_price
      },
      {
        title: "Daily Median Price(SOL)",
        graph: daily_median_price
      },
      {
        title: "Price History",
        graph: price_history
      }
    ],
    ({ title, graph }, i) => {
      return `<div class="${"flex flex-col gap-3 text-primary w-full"}"><div class="${"flex justify-between"}"><span class="${"text-lg"}">${escape(title)}</span>
						<div class="${"flex gap-3 items-center"}"><img${add_attribute("src", info, 0)} alt="${"info"}" class="${"w-5 h-5"}">
							<div class="${"p-2 rounded-lg bg-secondary-light cursor-pointer"}"><img${add_attribute("src", twitter, 0)} alt="${"twitter"}" class="${"w-6 h-6"}"></div>
							<div class="${"text-xs"}">${validate_component(Dropdown, "Dropdown").$$render(
        $$result,
        {
          id: "volume_" + i,
          border: "secondary",
          items: ["1D", "1W", "1M", "ALL"]
        },
        {},
        {}
      )}</div>
						</div></div>
					<div class="${"flex gap-x-6 w-full bg-secondary rounded-xl"}"><div class="${"p-4 h-full flex w-full justify-center items-center"}"><img${add_attribute("src", graph, 0)}${add_attribute("alt", title, 0)} class="${"w-fit"}"></div>
						<div class="${"flex flex-col w-fit bg-secondary-light"}">${each(
        [
          {
            name: "ME_V2",
            volume: 24.09,
            label: "Total"
          },
          {
            name: "CandyMachi...",
            volume: 1.09,
            label: "Total"
          },
          {
            name: "Metaplex A...",
            volume: 295.771,
            label: "Total"
          },
          {
            name: "SolanArt",
            volume: 69.78,
            label: "Total"
          },
          {
            name: "Other",
            volume: 40.833,
            label: "Total"
          }
        ],
        ({ name, volume, label }) => {
          return `<div class="${"flex flex-col justify-center gap-1 p-2 rounded-lg my-2 text-xs items-center"}"><span>${escape(name)}</span>
									<span class="${"text-success"}">${escape(volume)}</span>
									<span class="${"text-secondary-light"}">${escape(label)}</span>
								</div>`;
        }
      )}
						</div></div>
				</div>`;
    }
  )}</div>` : `<table class="${"w-full text-primary text-xs"}"><thead class="${"text-xs border-b-2 border-secondary"}"><tr class="${"text-primary"}"><th class="${"p-3 text-start"}">Collection </th>
					<th class="${"p-3 text-start"}">Volume Total</th>
					<th class="${"p-3 text-start"}">24h Volume</th>
					<th class="${"p-3 text-start"}">24h % Volume </th>
					<th class="${"p-3 text-start"}">Sales</th>
					<th class="${"p-3 text-start"}">Floor Price</th>
					<th class="${"p-3 text-start"}">Owners </th>
					<th class="${"p-3 text-start"}">Total Supply</th></tr></thead>

			<tbody>${each(smart_minting, ({ collection, floor_price, mint_price, mint_vol, minters, smart_minted, total_minted, last_mint }, i) => {
    return `<tr class="${"text-start border-b-2 border-secondary"}"><td class="${"p-3 text-start"}"><img class="${"h-12 rounded-full"}"${add_attribute("src", "https://img-cdn.magiceden.dev/rs:fill:32:32:0:0/plain/https://dl.airtable.com/.attachmentThumbnails/7bf792aeb747bc42679d845ed24fe6fe/fce75af7", 0)} alt="${"..."}"></td>
						<td class="${"p-3 text-start"}">${escape(collection)}</td>
						<td class="${"p-3 text-start"}">${escape(floor_price)}</td>
						<td class="${"p-3 text-start"}">${escape(mint_price)}</td>
						<td class="${"p-3 text-start"}">${escape(mint_vol)}</td>
						<td class="${"p-3 text-start"}">${escape(minters)}</td>
						<td class="${"p-3 text-start"}"><div class="${"w-full bg-primary rounded-full h-2.5 mb-4 "}"><div class="${"h-2.5 rounded-full " + escape(
      checkForNegativeSign(smart_minted) ? "bg-danger" : "bg-success",
      true
    )}" style="${"width: " + escape(Math.abs(smart_minted), true) + "%"}"></div>
							</div></td>

						<td class="${"p-3 text-start"}">${escape(total_minted)}</td>
						<td class="${"p-3 text-start"}">${escape(last_mint)}</td>
					</tr>`;
  })}</tbody></table>`}`}</div>`;
});
export {
  Page as default
};

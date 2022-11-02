import { c as create_ssr_component, f as each, v as validate_component, e as escape, d as add_attribute } from "../../../../../chunks/index.js";
import { T as TabBar, a as Tab } from "../../../../../chunks/Tab.js";
import { N as NFTFilters } from "../../../../../chunks/NFTFilters.js";
import "../../../../../chunks/Dropdown.js";
import "../../../../../chunks/arrow-down.js";
import "../../../../../chunks/Input.js";
import "../../../../../chunks/search2.js";
import "../../../../../chunks/Accordion.js";
import "../../../../../chunks/AccordionHeader.js";
const usdc = "/_app/immutable/assets/usdc-7281e8ca.svg";
const usdt = "/_app/immutable/assets/usdt-cddba428.svg";
const ray = "/_app/immutable/assets/ray-8e1f9652.svg";
const eth = "/_app/immutable/assets/eth-1f94df85.svg";
const atlas = "/_app/immutable/assets/atlas-46f515a1.svg";
const uma = "/_app/immutable/assets/uma-ca8856ce.svg";
const abt = "/_app/immutable/assets/abt-8171ed59.svg";
const act = "/_app/immutable/assets/act-e9e8faa7.svg";
const add = "/_app/immutable/assets/add-174d78d4.svg";
const aeon = "/_app/immutable/assets/aeon-dd442629.svg";
const ampl = "/_app/immutable/assets/ampl-3f495858.svg";
const ant = "/_app/immutable/assets/ant-4e0b7ff2.svg";
const apex = "/_app/immutable/assets/apex-6f3c3fed.svg";
const ark = "/_app/immutable/assets/ark-7323db83.svg";
const atom = "/_app/immutable/assets/atom-e4ad7c3b.svg";
const bch = "/_app/immutable/assets/bch-b4067ef1.svg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const top_coins = [
    {
      name: "USDC",
      icon: usdc,
      price: "$0.999024",
      price_1d: "0.00",
      volume_1d: "$32.06M",
      volume_1d_percent: "+10.36",
      users_1d: "41,845",
      new_users_1d: "2,252"
    },
    {
      name: "RAY",
      icon: ray,
      price: "$0.582890",
      price_1d: "+2.9",
      volume_1d: "$2.13M",
      volume_1d_percent: "-9.24",
      users_1d: "1,782",
      new_users_1d: "167"
    },
    {
      name: "USDT",
      icon: usdt,
      price: "$0.999024",
      price_1d: "0.00",
      volume_1d: "$32.06M",
      volume_1d_percent: "+10.36",
      users_1d: "41,845",
      new_users_1d: "2,252"
    },
    {
      name: "ETH",
      icon: eth,
      price: "$3,000.00",
      price_1d: "+0.1",
      volume_1d: "$1.01B",
      volume_1d_percent: "+0.01",
      users_1d: "1,782",
      new_users_1d: "167"
    },
    {
      name: "ATLAS",
      icon: atlas,
      price: "$0.582890",
      price_1d: "+2.9",
      volume_1d: "$2.13M",
      volume_1d_percent: "-9.24",
      users_1d: "1,782",
      new_users_1d: "167"
    },
    {
      name: "UMA",
      icon: uma,
      price: "$0.582890",
      price_1d: "+2.9",
      volume_1d: "$2.13M",
      volume_1d_percent: "-9.24",
      users_1d: "1,782",
      new_users_1d: "167"
    },
    {
      name: "ABT",
      icon: abt,
      price: "$0.582890",
      price_1d: "+2.9",
      volume_1d: "$2.13M",
      volume_1d_percent: "-9.24",
      users_1d: "1,782",
      new_users_1d: "167"
    },
    {
      name: "ACT",
      icon: act,
      price: "$0.582890",
      price_1d: "+2.9",
      volume_1d: "$2.13M",
      volume_1d_percent: "-9.24",
      users_1d: "1,782",
      new_users_1d: "167"
    },
    {
      name: "ADD",
      icon: add,
      price: "$0.582890",
      price_1d: "+2.9",
      volume_1d: "$2.13M",
      volume_1d_percent: "-9.24",
      users_1d: "1,782",
      new_users_1d: "167"
    },
    {
      name: "AEON",
      icon: aeon,
      price: "$0.582890",
      price_1d: "+2.9",
      volume_1d: "$2.13M",
      volume_1d_percent: "-9.24",
      users_1d: "1,782",
      new_users_1d: "167"
    },
    {
      name: "AMPL",
      icon: ampl,
      price: "$0.582890",
      price_1d: "+2.9",
      volume_1d: "$2.13M",
      volume_1d_percent: "-9.24",
      users_1d: "1,782",
      new_users_1d: "167"
    },
    {
      name: "ANT",
      icon: ant,
      price: "$0.582890",
      price_1d: "+2.9",
      volume_1d: "$2.13M",
      volume_1d_percent: "-9.24",
      users_1d: "1,782",
      new_users_1d: "167"
    },
    {
      name: "APEX",
      icon: apex,
      price: "$0.582890",
      price_1d: "+2.9",
      volume_1d: "$2.13M",
      volume_1d_percent: "-9.24",
      users_1d: "1,782",
      new_users_1d: "167"
    },
    {
      name: "ARK",
      icon: ark,
      price: "$0.582890",
      price_1d: "+2.9",
      volume_1d: "$2.13M",
      volume_1d_percent: "-9.24",
      users_1d: "1,782",
      new_users_1: "167"
    }
  ];
  const top_protocols = [
    {
      icon: usdc,
      program: "Orca Whirlpool",
      swaps_1d: "$20.26M",
      deposits_1d: "$TBU",
      withdrawals_1d: "$TBU",
      borrows_1d: "$TBU",
      repayments_1d: "$TBU",
      liquidity_provided_1d: "$4.07M",
      liquidity_removed_1d: "$3.94M",
      top_token: "USD Coin",
      users_1d: "4,274",
      new_users_1d: "444"
    },
    {
      icon: abt,
      program: "Jupiter v3",
      swaps_1d: "$15.48M",
      deposits_1d: "$TBU",
      withdrawals_1d: "$TBU",
      borrows_1d: "$TBU",
      repayments_1d: "$TBU",
      liquidity_provided_1d: "$TBU",
      liquidity_removed_1d: "$TBU",
      top_token: "Wrapped SOL",
      users_1d: "1,594",
      new_users_1d: "282"
    },
    {
      icon: ampl,
      program: "Saber Swap",
      swaps_1d: "$10.26M",
      deposits_1d: "$TBU",
      withdrawals_1d: "$TBU",
      borrows_1d: "$TBU",
      repayments_1d: "$TBU",
      liquidity_provided_1d: "$108,710.10",
      liquidity_removed_1d: "$41,015.55",
      top_token: "USD Coin",
      users_1d: "1,251",
      new_users_1d: "254"
    },
    {
      icon: ant,
      program: "Raydium Amm",
      swaps_1d: "$9.35M",
      deposits_1d: "$TBU",
      withdrawals_1d: "$TBU",
      borrows_1d: "$TBU",
      repayments_1d: "$TBU",
      liquidity_provided_1d: "$1.41M",
      liquidity_removed_1d: "$2.15M",
      top_token: "USD Coin",
      users_1d: "7,629",
      new_users_1d: "718"
    },
    {
      icon: apex,
      program: "Jupiter v2",
      swaps_1d: "$8.71M",
      deposits_1d: "$TBU",
      withdrawals_1d: "$TBU",
      borrows_1d: "$TBU",
      repayments_1d: "$TBU",
      liquidity_provided_1d: "$TBU",
      liquidity_removed_1d: "$TBU",
      top_token: "Wrapped SOL",
      users_1d: "1,292",
      new_users_1d: "334"
    },
    {
      icon: ark,
      program: "Orca Swap 2",
      swaps_1d: "$2.94M",
      deposits_1d: "$TBU",
      withdrawals_1d: "$TBU",
      borrows_1d: "$TBU",
      repayments_1d: "$TBU",
      liquidity_provided_1d: "$171,588.39",
      liquidity_removed_1d: "$31,491.34",
      top_token: "USD Coin",
      users_1d: "2,062",
      new_users_1d: "306"
    },
    {
      icon: ark,
      program: "Mercurial",
      swaps_1d: "$2.58M",
      deposits_1d: "$TBU",
      withdrawals_1d: "$TBU",
      borrows_1d: "$TBU",
      repayments_1d: "$TBU",
      liquidity_provided_1d: "$TBU",
      liquidity_removed_1d: "$TBU",
      top_token: "Wrapped SOL",
      users_1d: "1,969",
      new_users_1d: "471"
    },
    {
      icon: atom,
      program: "Lifinity Swap",
      swaps_1d: "$2.04M",
      deposits_1d: "$TBU",
      withdrawals_1d: "$TBU",
      borrows_1d: "$TBU",
      repayments_1d: "$TBU",
      liquidity_provided_1d: "$TBU",
      liquidity_removed_1d: "$TBU",
      top_token: "USD Coin",
      users_1d: "6,758",
      new_users_1d: "556"
    },
    {
      icon: bch,
      program: "Serum 3",
      swaps_1d: "$1.69M",
      deposits_1d: "$TBU",
      withdrawals_1d: "$TBU",
      borrows_1d: "$TBU",
      repayments_1d: "$TBU",
      liquidity_provided_1d: "$TBU",
      liquidity_removed_1d: "$TBU",
      top_token: "USD Coin",
      users_1d: "1,000",
      new_users_1d: "100"
    }
  ];
  const checkForNegativeSign = (value) => {
    return value.toString().includes("-") ? true : false;
  };
  let active = "top-coins";
  return `${$$result.head += `${$$result.title = `<title>Popular Collections</title>`, ""}`, ""}
<div class="${"flex flex-col gap-6"}"><div class="${"flex flex-col justify-start gap-3"}"><h1 class="${"text-primary text-2xl"}">DeFi</h1>

		<div class="${"grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-3"}">${each(["Smart Money Inflow", "Top Social Buying", "Top Movers", "Smart Money Outflow"], (nft) => {
    return `<div class="${"flex w-full flex-col gap-4 px-6 py-4 bg-secondary rounded-lg"}"><div class="${"flex justify-between items-center gap-8 text-primary"}"><span class="${"text-lg"}">${escape(nft)}</span>
						<div class="${"flex gap-3"}"><span>1D</span>
							<span class="${"text-secondary-light"}">1W</span>
						</div></div>
					<table class="${"w-full table table-auto"}"><thead class="${"text-xs text-secondary-light"}"><tr><th class="${"font-light"}">Token</th>
								<th class="${"font-light"}">Price</th>
								<th class="${"font-light"}">Price change</th>
							</tr></thead>
						<tbody class="${"text-primary text-sm font-light"}">${each(
      [
        {
          defi: "POLIS",
          price: 0.38,
          change: -11.54
        },
        { defi: "wSOL", price: 34.34, change: 2.97 },
        { defi: "mSOL", price: 36.4, change: 2.43 },
        { defi: "LDO", price: 1.61, change: 0.83 },
        { defi: "DUST", price: 1.22, change: 0.29 }
      ],
      ({ defi, price, change }, i) => {
        return `<tr class="${"text-center hover:bg-secondary-light cursor-pointer"}"><td class="${"p-2"}"><div class="${"flex gap-2 items-center"}"><img src="${"https://www.hellomoon.io/_next/image?url=https%3A%2F%2Fimages.hellomoon.io%2Fnfts%2F60%2Fsodead.webp&w=128&q=75"}" alt="${""}" class="${"w-6 h-6 rounded-full"}">
											<span class="${"text-sm"}">${escape(defi)}</span>
										</div></td>
									<td class="${"p-2"}"><span class="${"text-s"}">${escape(price)} SOL </span></td>
									<td class="${"p-2"}"><span class="${"text-sm " + escape(
          checkForNegativeSign(change) ? "text-danger" : "text-success",
          true
        )}">${escape(change)}%
										</span></td>
								</tr>`;
      }
    )}
						</tbody></table>
				</div>`;
  })}</div></div>

	<div class="${"flex flex-col gap-4 w-full"}"><div class="${"flex px-4 py-2"}">${validate_component(TabBar, "TabBar").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Tab, "Tab").$$render(
        $$result,
        {
          title: "Top DeFi Coins",
          onclick: () => {
            active = "top-coins";
          },
          active: active === "top-coins"
        },
        {},
        {}
      )}
				${validate_component(Tab, "Tab").$$render(
        $$result,
        {
          title: "Top DeFi Protocols",
          onclick: () => {
            active = "top-protocols";
          },
          active: active === "top-protocols"
        },
        {},
        {}
      )}`;
    }
  })}</div>
		${validate_component(NFTFilters, "NftFilters").$$render($$result, {}, {}, {})}</div></div>

<div class="${"overflow-x-auto relative my-4 px-2 rounded-lg border-2 border-secondary"}">${active === "top-coins" ? `<table class="${"w-full text-primary text-xs"}"><thead class="${"text-xs border-b-2 border-secondary"}"><tr class="${"text-primary"}"><th class="${"p-3 text-start"}">#</th>
					<th class="${"p-3 text-start"}">Name</th>
					<th class="${"p-3 text-start"}">Price</th>
					<th class="${"p-3 text-start"}">\u0394 Price 1D</th>
					<th class="${"p-3 text-start"}">Volume 1D</th>
					<th class="${"p-3 text-start"}">\u0394 Volume 1D</th>
					<th class="${"p-3 text-start"}">Users 1D</th>
					<th class="${"p-3 text-start"}">New Users 1D</th></tr></thead>
			<tbody>${each(top_coins, ({ name, icon, price, price_1d, volume_1d, volume_1d_percent, users_1d, new_users_1d }, i) => {
    return `<tr${add_attribute("class", ` ${i % 2 == 0 ? "" : "bg-secondary r"} rounded-sm`, 0)}><td class="${"p-3 text-start"}">${escape(i + 1)}</td>
						<td class="${"p-3 text-start"}"><div class="${"flex gap-3 items-center"}"><img${add_attribute("src", icon, 0)} alt="${""}" class="${"w-6 h-6 rounded-full"}">
								<span class="${"text-sm"}">${escape(name)}</span>
							</div></td>
						<td class="${"p-3 text-start"}"><span class="${"text-sm"}">${escape(price)} </span></td>
						<td class="${"p-3 text-start"}"><span class="${"text-sm"}">${escape(price_1d)} </span></td>
						<td class="${"p-3 text-start"}"><span class="${"text-sm"}">${escape(volume_1d)} </span></td>
						<td class="${"p-3 text-start"}"><span class="${"text-sm"}">${escape(volume_1d_percent)} </span></td>
						<td class="${"p-3 text-start"}"><span class="${"text-sm"}">${escape(users_1d)} </span></td>
						<td class="${"p-3 text-start"}"><span class="${"text-sm"}">${escape(new_users_1d)} </span></td>
					</tr>`;
  })}</tbody></table>` : `<table class="${"w-full text-primary text-xs"}"><thead class="${"text-xs border-b-2 border-secondary"}"><tr class="${"text-primary"}"><th class="${"p-3 text-start"}">#</th>
					<th class="${"p-3 text-start"}">Program</th>
					<th class="${"p-3 text-start"}">Swaps 1D</th>
					<th class="${"p-3 text-start"}">Deposits 1D</th>
					<th class="${"p-3 text-start"}">Withdraws 1D</th>
					<th class="${"p-3 text-start"}">Borrows 1D</th>
					<th class="${"p-3 text-start"}">Repayments 1D</th>
					<th class="${"p-3 text-start"}">Liquidity Provided 1D</th>
					<th class="${"p-3 text-start"}">Liquidity Removed 1D</th>
					<th class="${"p-3 text-start"}">Top Token</th>
					<th class="${"p-3 text-start"}">Users 1D</th>
					<th class="${"p-3 text-start"}">New Users 1D</th></tr></thead>

			<tbody>${each(top_protocols, ({ program, icon, swaps_1d, deposits_1d, withdrawals_1d, borrows_1d, repayments_1d, liquidity_provided_1d, liquidity_removed_1d, top_token, users_1d, new_users_1d }, i) => {
    return `<tr class="${"text-start border-b-2 border-secondary"}"><td class="${"p-3 text-start"}">${escape(i + 1)}</td>
						<td class="${"p-3 text-start"}"><div class="${"flex gap-3 items-center"}"><img${add_attribute("src", icon, 0)} alt="${""}" class="${"w-6 h-6 rounded-full"}">
								<span class="${"text-sm"}">${escape(program)}</span>
							</div></td>
						<td class="${"p-3 text-start"}"><span class="${"text-sm"}">${escape(swaps_1d)} </span></td>
						<td class="${"p-3 text-start"}"><span class="${"text-sm"}">${escape(deposits_1d)} </span></td>
						<td class="${"p-3 text-start"}"><span class="${"text-sm"}">${escape(withdrawals_1d)} </span></td>
						<td class="${"p-3 text-start"}"><span class="${"text-sm"}">${escape(borrows_1d)} </span></td>
						<td class="${"p-3 text-start"}"><span class="${"text-sm"}">${escape(repayments_1d)} </span></td>
						<td class="${"p-3 text-start"}"><span class="${"text-sm"}">${escape(liquidity_provided_1d)} </span></td>
						<td class="${"p-3 text-start"}"><span class="${"text-sm"}">${escape(liquidity_removed_1d)} </span></td>
						<td class="${"p-3 text-start"}"><span class="${"text-sm"}">${escape(top_token)} </span></td>
						<td class="${"p-3 text-start"}"><span class="${"text-sm"}">${escape(users_1d)} </span></td>
						<td class="${"p-3 text-start"}"><span class="${"text-sm"}">${escape(new_users_1d)} </span></td>
					</tr>`;
  })}</tbody></table>
		<div class="${"p-3 flex justify-center"}"><button class="${"bg-primary text-white rounded-sm px-3 py-2 cursor-pointer"}">Load More</button></div>`}</div>`;
});
export {
  Page as default
};

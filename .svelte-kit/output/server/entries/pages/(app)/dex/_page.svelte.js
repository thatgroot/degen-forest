import { c as create_ssr_component, b as subscribe, e as escape, d as add_attribute, v as validate_component, f as each } from "../../../../chunks/index.js";
import { r as refresh } from "../../../../chunks/refresh.js";
import { e as eth } from "../../../../chunks/eth.js";
import { a as arrow_down } from "../../../../chunks/arrow-down.js";
import { D as DropdownSlot } from "../../../../chunks/DropdownSlot.js";
import { f as fromWei, r as replaceAddresswithTokenName } from "../../../../chunks/web3-wallet.js";
import { d as dex_store, w as wallet_store } from "../../../../chunks/store.js";
import "web3";
import "../../../../chunks/index2.js";
const settings = "/_app/immutable/assets/settings-6dcbfb12.svg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a, _b, _c, _d, _e;
  let wallet_store_state;
  let dex_store_state;
  let $dex_store, $$unsubscribe_dex_store;
  let $wallet_store, $$unsubscribe_wallet_store;
  $$unsubscribe_dex_store = subscribe(dex_store, (value) => $dex_store = value);
  $$unsubscribe_wallet_store = subscribe(wallet_store, (value) => $wallet_store = value);
  let tokens = [];
  let filtered_from_tokens = [];
  let filtered_to_tokens = [];
  let allowance = true;
  let quote = {
    fromTokenAmount: "0",
    toTokenAmount: "0",
    estimatedGas: "0",
    fromToken: {
      symbol: "1INCH",
      name: "1INCH Token",
      decimals: 18,
      address: "0x111111111117dc0aa78b770fa6a738034120c302",
      logoURI: "https://tokens.1inch.io/0x111111111117dc0aa78b770fa6a738034120c302.png",
      tags: ["tokens"]
    },
    toToken: {
      symbol: "DAI",
      name: "Dai Stablecoin",
      decimals: 18,
      address: "0x6b175474e89094c44da98b954eedeac495271d0f",
      logoURI: "https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png",
      tags: ["tokens", "PEG:USD"]
    }
  };
  wallet_store_state = $wallet_store;
  dex_store_state = $dex_store;
  $$unsubscribe_dex_store();
  $$unsubscribe_wallet_store();
  return `${$$result.head += `${$$result.title = `<title>${escape("DEX")}</title>`, ""}`, ""}

<div class="${"flex flex-col mx-auto px-6 py-12 bg-secondary rounded-2xl w-full tablet:w-2/4 my-12"}">
	<div class="${"flex p-2 justify-between my-2"}"><span class="${"text-accent"}"></span>
		<div class="${"flex gap-2"}"><img${add_attribute("src", refresh, 0)} alt="${""}" class="${"w-4 cursor-pointer border-2 rounded-full border-secondary"}">
			<img${add_attribute("src", settings, 0)} alt="${""}" class="${"w-4 rounded-full"}"></div></div>
	

	<div class="${"flex flex-col gap-3 "}"><div class="${"flex flex-col bg-secondary-light text-primary py-4 px-6 gap-3 rounded-xl relative"}"><div class="${"flex justify-between"}"><span></span>
				<span>Balance: ${escape(wallet_store_state.balance)}</span></div>

			<div class="${"flex flex-col gap-2 w-full"}">${validate_component(DropdownSlot, "DropdownSlot").$$render(
    $$result,
    {
      bg: "primary",
      id: "from_token",
      border: "primary",
      rounded: "md"
    },
    {},
    {
      items: () => {
        return `<div slot="${"items"}" class="${"w-full bg-primary p-2 rounded-lg gap-y-4 flex flex-col"}"><div class="${"flex gap-2"}"><input class="${"w-full bg-transparent border-2 border-secondary rounded-lg p-2 text-center"}" type="${"text"}" placeholder="${"Search"}"></div>
						${each(filtered_from_tokens, (token) => {
          return `<div class="${"flex gap-2 cursor-pointer"}"><img${add_attribute("src", token.logoURI, 0)} alt="${""}" class="${"w-4 h-4 rounded-full"}">
								<span>${escape(token.symbol)}</span>
							</div>`;
        })}</div>`;
      },
      active: () => {
        var _a2, _b2;
        return `<div slot="${"active"}" class="${"w-full"}"><div class="${"flex gap-2 justify-between rounded-lg"}"><img${add_attribute("src", (_a2 = dex_store_state.token.selected) == null ? void 0 : _a2.logoURI, 0)} alt="${""}" class="${"w-4 h-4 rounded-full"}">
							<span>${escape((_b2 = dex_store_state.token.selected) == null ? void 0 : _b2.name)}</span>
							<img${add_attribute("src", arrow_down, 0)} alt="${""}" class="${"w-4 rounded-full"}"></div></div>`;
      }
    }
  )}
				<input type="${"number"}" class="${"px-4 py-2 rounded-lg border-2 border-secondary text-secondary"}"${add_attribute("placeholder", dex_store_state.amount.selected, 0)}></div></div>

		<div class="${"flex flex-col text-primary py-4 px-6 gap-3 rounded-xl relative"}"><div class="${"flex justify-between"}"><span>You Buy</span></div>

			<div class="${"flex flex-col gap-2 "}">${validate_component(DropdownSlot, "DropdownSlot").$$render(
    $$result,
    {
      bg: "primary",
      id: "to_token",
      border: "primary",
      rounded: "md"
    },
    {},
    {
      items: () => {
        return `<div slot="${"items"}" class="${"w-full bg-primary p-2 rounded-lg gap-y-4 flex flex-col"}"><div class="${"flex gap-2"}"><input class="${"w-full bg-transparent border-2 border-secondary rounded-lg p-2 text-center"}" type="${"text"}" placeholder="${"Search"}"></div>
						${each(filtered_to_tokens, (token) => {
          return `<div class="${"flex gap-2 cursor-pointer"}"><img${add_attribute("src", token.logoURI, 0)} alt="${""}" class="${"w-4 h-4 rounded-full"}">
								<span>${escape(token.symbol)}</span>
							</div>`;
        })}</div>`;
      },
      active: () => {
        var _a2, _b2;
        return `<div slot="${"active"}" class="${"w-full"}"><div class="${"flex gap-2 justify-between rounded-lg"}"><img${add_attribute("src", ((_a2 = dex_store_state.token.desired) == null ? void 0 : _a2.logoURI) ?? eth, 0)} alt="${""}" class="${"w-4 h-4 rounded-full"}">
							<span>${escape(((_b2 = dex_store_state.token.desired) == null ? void 0 : _b2.name) ?? "ETH")}</span>
							<img${add_attribute("src", arrow_down, 0)} alt="${""}" class="${"w-4 rounded-full"}"></div></div>`;
      }
    }
  )}
				<input type="${"number"}" class="${"px-4 py-2 rounded-lg border-2 border-secondary text-secondary"}" disabled${add_attribute("value", quote.toTokenAmount, 0)}></div>

			<div class="${"flex flex-col justify-between items-start gap-4"}"><div class="${"flex flex-col gap-3 text-secondary-light text-lg"}"><span class="${"font-semibold"}">LP Aggregator </span>
					<span class="${"font-light"}">Tx cost 0 \u039E (~ $${escape(parseFloat((+fromWei((+(quote == null ? void 0 : quote.estimatedGas) * 1e9).toString(), "ether") * dex_store_state.rate.USDT).toString()).toFixed(3))} \u039E)
					</span></div>
				<div><div class="${"flex gap-2 items-start justify-start"}"><button class="${"border-2 border-primary px-4 py-1 rounded-lg text-primary " + escape(
    dex_store_state.slippage === 0.1 ? "bg-accent" : "bg-transparent",
    true
  )}">0.1%
						</button>
						<button class="${"border-2 border-primary px-4 py-1 rounded-lg text-primary " + escape(
    dex_store_state.slippage === 0.5 ? "bg-accent" : "bg-transparent",
    true
  )}">0.5%
						</button>
						<button class="${"border-2 border-primary px-4 py-1 rounded-lg text-primary " + escape(
    dex_store_state.slippage === 1 ? "bg-accent" : "bg-transparent",
    true
  )}">1%
						</button></div></div></div></div>

		<div class="${"flex items-center justify-center text-danger text-xs"}" style="${"word-break: all"}">

			${escape(replaceAddresswithTokenName(((_a = dex_store_state.error) == null ? void 0 : _a.description) ?? ((_b = dex_store_state.tx_error) == null ? void 0 : _b.reason) ?? "", tokens))}</div>

		
		${((_c = dex_store_state.token.desired) == null ? void 0 : _c.symbol) !== "ETH" && !allowance ? `<button class="${"w-full bg-accent text-white rounded-lg p-2 mt-4"}" ${((_d = dex_store_state.token.desired) == null ? void 0 : _d.symbol) === "ETH" ? "disabled" : ""}>${escape("Allow degen forest to swap " + ((_e = dex_store_state.token.selected) == null ? void 0 : _e.symbol))}</button>` : ``}

		<button class="${"w-full rounded-lg bg-accent text-primary font-semibold py-3"}">Swap
		</button></div></div>`;
});
export {
  Page as default
};

import { c as create_ssr_component, d as add_attribute, e as escape, b as subscribe, v as validate_component, f as each } from "./index.js";
import { T as TabBar, a as Tab } from "./Tab.js";
import { s as solana } from "./solana.js";
import { a as arrow_down } from "./arrow-down.js";
import { c as copy } from "./copy.js";
import { s as stack } from "./stack.js";
import { e as eth } from "./eth.js";
import { i as info } from "./info.js";
import { L as ListItem } from "./ListItem.js";
import { P as Popup } from "./Popup.js";
import "./web3-wallet.js";
import "web3";
import { w as wallet_store } from "./store.js";
const wallet = "/_app/immutable/assets/wallet-f16dc00f.svg";
const brave = "/_app/immutable/assets/brave-8998d646.svg";
const metamask = "/_app/immutable/assets/metamask-26b8617d.svg";
const walletconnect = "/_app/immutable/assets/walletconnect-1d8996a9.svg";
const coinbase = "/_app/immutable/assets/coinbase-f0aa38c1.svg";
const trustwallet = "/_app/immutable/assets/trustwallet-ef7c1c4d.svg";
const bell = "/_app/immutable/assets/bell-7e387961.svg";
const avatar = "/_app/immutable/assets/avatar-3dfd2373.png";
const sell = "/_app/immutable/assets/sell-10b6dd1d.svg";
const refresh = "/_app/immutable/assets/refresh-active-f45b5527.svg";
const poweroff = "/_app/immutable/assets/poweroff-bf8b5d16.svg";
const ListItemCol = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { prefix = info } = $$props;
  let { postfix = "" } = $$props;
  let { title = "" } = $$props;
  let { subtitle = "" } = $$props;
  let { badge = "" } = $$props;
  let { insets = "md" } = $$props;
  if ($$props.prefix === void 0 && $$bindings.prefix && prefix !== void 0)
    $$bindings.prefix(prefix);
  if ($$props.postfix === void 0 && $$bindings.postfix && postfix !== void 0)
    $$bindings.postfix(postfix);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.badge === void 0 && $$bindings.badge && badge !== void 0)
    $$bindings.badge(badge);
  if ($$props.insets === void 0 && $$bindings.insets && insets !== void 0)
    $$bindings.insets(insets);
  return `<div${add_attribute(
    "class",
    `group w-full flex relative border-2 border-transparent  hover:border-accent ${insets === "sm" ? "px-1.5 py-1 rounded-md gap-2" : "px-8 py-4 rounded-xl gap-4"}   justify-between cursor-pointer`,
    0
  )}><div class="${"flex items-center gap-6"}"><img${add_attribute("class", `${insets === "sm" ? "w-7 h-7" : "w-14 h-14"}`, 0)}${add_attribute("src", prefix, 0)} alt="${"phantom wallet"}">
		<div class="${"flex flex-col items-start justify-center"}"><span class="${"text-primary text-sm font-bold"}">${escape(title)}</span>
			<span class="${"text-primary text-sm"}">${escape(subtitle)}</span></div>
		${postfix ? `<div><img class="${"w-4 h-4"}"${add_attribute("src", postfix, 0)} alt="${"postfix"}"></div>` : ``}</div>
	${badge ? `<div class="${"absolute right-6 -top-6 rounded-full border-2 border-transparent group-hover:border-2 group-hover:border-accent bg-secondary px-6 py-3 text-xs text-accent"}">${escape(badge)}</div>` : ``}</div>`;
});
const ConnectWallet = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let wallet_store_state;
  let $wallet_store, $$unsubscribe_wallet_store;
  $$unsubscribe_wallet_store = subscribe(wallet_store, (value) => $wallet_store = value);
  const wallets = [
    {
      name: "Phantom",
      chain: "solana",
      subtitle: "Detected",
      badge: "Recommended",
      url: "https://phantom.app/",
      logo: "https://phantom.app/img/logo.svg"
    },
    {
      name: "Solflare",
      chain: "solana",
      url: "https://solflare.com/",
      logo: "https://solflare.com/assets/logo.26659b6d..svg"
    },
    {
      name: "Math Wallet",
      chain: "solana",
      url: "https://mathwallet.org/",
      logo: "https://doc.mathwallet.org/images/logo.svg"
    },
    {
      name: "Brave",
      chain: "solana",
      url: "https://brave.com/",
      logo: brave
    },
    {
      name: "Metamask",
      chain: "ethereum",
      url: "https://metamask.io/",
      logo: metamask
    },
    {
      name: "WalletConnect",
      chain: "ethereum",
      url: "https://walletconnect.org/",
      logo: walletconnect
    },
    {
      name: "Coinbase Wallet",
      chain: "ethereum",
      url: "https://wallet.coinbase.com/",
      logo: coinbase
    },
    {
      name: "Trust Wallet",
      chain: "ethereum",
      url: "https://trustwallet.com/",
      logo: trustwallet
    }
  ];
  let filtered_wallets = wallets.filter((wallet2) => wallet2.chain === "solana");
  let active_chain = "solana";
  let { toggle = false } = $$props;
  let { onClosed = () => {
  } } = $$props;
  if ($$props.toggle === void 0 && $$bindings.toggle && toggle !== void 0)
    $$bindings.toggle(toggle);
  if ($$props.onClosed === void 0 && $$bindings.onClosed && onClosed !== void 0)
    $$bindings.onClosed(onClosed);
  wallet_store_state = $wallet_store;
  $$unsubscribe_wallet_store();
  return `${validate_component(Popup, "Popup").$$render($$result, { toggle, onClosed }, {}, {
    default: () => {
      return `<div class="${"flex flex-col bg-secondary px-6 py-12 gap-6 h-fit min-w-[420px] relative"}"><p class="${"text-gradient text-center"}">Connect a wallet to continue</p>
		${validate_component(TabBar, "TabBar").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Tab, "Tab").$$render(
            $$result,
            {
              title: "Solana",
              icon: solana,
              active: active_chain === "solana",
              onclick: () => {
                active_chain = "solana";
                filtered_wallets = wallets.filter((wallet2) => wallet2.chain === "solana");
              }
            },
            {},
            {}
          )}
			${validate_component(Tab, "Tab").$$render(
            $$result,
            {
              title: "Ethereum",
              active: active_chain === "ethereum",
              icon: eth,
              onclick: () => {
                active_chain = "ethereum";
                filtered_wallets = wallets.filter((wallet2) => wallet2.chain === "ethereum");
              }
            },
            {},
            {}
          )}`;
        }
      })}
		<div class="${"flex flex-col"}">${each(filtered_wallets, (wallet2) => {
        return `<div>${validate_component(ListItemCol, "ListItemCol").$$render(
          $$result,
          {
            title: wallet2.name,
            subtitle: "Detected",
            prefix: wallet2.logo,
            badge: wallet2.badge ?? ""
          },
          {},
          {}
        )}
				</div>`;
      })}</div></div>`;
    }
  })}


${wallet_store_state.connected ? `<div class="${"flex items-center gap-x-4 group relative"}"><div class="${"flex items-center gap-x-2"}"><img${add_attribute("src", bell, 0)} alt="${"notification"}" class="${"w-8 h-8"}"></div>
		<div class="${"flex gap-3 items-center px-3 py-1.5 hover:rounded-lg hover:bg-secondary cursor-pointer"}"><img${add_attribute("src", avatar, 0)} alt="${"user"}" class="${"rounded-full w-8 h-8"}">

			<div class="${"flex items-center gap-6"}"><p class="${"text-sm text-primary"}">0x1234567890</p>
				<img${add_attribute("src", arrow_down, 0)} alt="${"change wallet"}"></div></div>
		<div class="${"group-hover:block hidden absolute z-50 top-[100%] bg-primary right-0 left-0 px-2 py-2 border-2 border-secondary rounded-lg shadow-lg"}"><div class="${"flex flex-col justify-start gap-2 w-full"}">${validate_component(ListItemCol, "ListItemCol").$$render(
    $$result,
    {
      title: "Main Wallet",
      subtitle: "0.04",
      prefix: solana,
      postfix: copy,
      insets: "sm"
    },
    {},
    {}
  )}
				${validate_component(ListItemCol, "ListItemCol").$$render(
    $$result,
    {
      title: "Bidding Wallet",
      subtitle: "1.04",
      prefix: eth,
      postfix: copy,
      insets: "sm"
    },
    {},
    {}
  )}

				<div class="${"w-full h-[0.0625rem] rounded-full border-[0.0625rem] border-secondary"}"></div>

				
				${validate_component(ListItem, "ListItem").$$render($$result, { title: "Sell", title_prefix: sell }, {}, {})}
				${validate_component(ListItem, "ListItem").$$render($$result, { title: "My Items", title_prefix: stack }, {}, {})}
				${validate_component(ListItem, "ListItem").$$render(
    $$result,
    {
      title: "Connect a different wallet",
      title_prefix: refresh
    },
    {},
    {}
  )}
				${validate_component(ListItem, "ListItem").$$render(
    $$result,
    {
      title: "Sign out",
      title_prefix: poweroff
    },
    {},
    {}
  )}</div></div></div>` : `<button class="${"flex btn-primary desktop:btn-accent p-0 px-2"}"><img${add_attribute("src", wallet, 0)} alt="${"connect wallet"}" class="${"block px-2"}">
		<div class="${"h-full w-2 desktop:border-r-2 desktop:border-r-accent"}"></div>
		<span class="${"text-sm px-6 sm:px-2 hidden desktop:block"}">Connect Wallet</span></button>`}`;
});
export {
  ConnectWallet as C,
  refresh as r
};

import { c as create_ssr_component, v as validate_component, e as escape, f as each, d as add_attribute } from "../../../../chunks/index.js";
import { T as TabBar, a as Tab } from "../../../../chunks/Tab.js";
import { d as dai } from "../../../../chunks/dai.js";
import { T as Textarea } from "../../../../chunks/Textarea.js";
import { f as fat, b as blind } from "../../../../chunks/blind.js";
import { a as ape } from "../../../../chunks/ape.js";
const usdc = "/_app/immutable/assets/usdc.icon-c029acb9.svg";
const weth = "/_app/immutable/assets/weth-7983df0b.png";
const check = "/_app/immutable/assets/check-1609f72b.svg";
const check_success = "/_app/immutable/assets/check-success-3ffae90d.svg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let active = "address";
  return `<div class="${"flex flex-col items-start justify-center tablet:flex-row laptop:gap-12 "}"><div class="${"flex flex-col gap-9 laptop:w-2/4"}"><div class="${"flex flex-col gap-5"}"><h2 class="${"text-gradient text-4xl font-bold"}">Airdrop Tokens</h2>
			<p class="${"text-base font-medium text-secondary-light leading-8 tablet:pr-16"}">Drop Collections, Eth or tokens to multiple addresses.
			</p></div>
		
		${validate_component(TabBar, "TabBar").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Tab, "Tab").$$render(
        $$result,
        {
          title: "Drop To  Addresslist",
          onclick: () => active = "address",
          active: active === "address"
        },
        {},
        {}
      )}
			${validate_component(Tab, "Tab").$$render(
        $$result,
        {
          title: "Drop To NFT Holders",
          onclick: () => active = "holders",
          active: active === "holders"
        },
        {},
        {}
      )}`;
    }
  })}

		<div class="${escape(active === "address" ? "flex" : "hidden", true) + " flex-col gap-9"}"><span class="${"text-secondary-light"}">You have following tokens In your wallet <span class="${"text-danger"}">*</span></span>

			<div class="${"grid grid-cols-1 tablet:grid-cols-3 gap-7"}">${each([dai, usdc, weth], (icon) => {
    return `<div class="${"flex flex-col gap-3 pt-12 px-2 pb-4 text-primary justify-center items-center relative bg-secondary rounded-2xl"}"><div class="${"flex absolute -top-4 left-0 right-0 justify-center"}"><img${add_attribute("src", icon, 0)} alt="${""}" class="${"max-w-[3rem] w-full rounded-full"}"></div>
						<span>DAI</span>
						<span>10.06</span>
					</div>`;
  })}</div>

			<span class="${"text-danger"}">Selected Token = DAI ( 10.06 ) </span>

			<span class="${"text-secondary-light"}">Enter Recipients to drop <span class="${"text-danger"}">*</span></span>

			<span class="${"text-secondary-light font-light"}">enter one address and amount from your collection to drop supports any format.
			</span></div>

		<div class="${escape(active === "holders" ? "flex" : "hidden", true) + " flex-col gap-9"}"><span class="${"text-secondary-light"}">Select Your Collection to drop <span class="${"text-danger"}">*</span></span>
			<span class="${"text-secondary-light font-light"}">enter one address and amount from your collection to drop supports any format.
			</span>
			<div class="${"grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-3 w-full mx-auto"}">${each(
    [
      {
        icon: fat,
        lable: "DegenGods",
        creator: "Eliot",
        verified: false
      },
      {
        icon: blind,
        lable: "Blind Boxes",
        verified: true,
        creator: "Eliot"
      },
      {
        icon: ape,
        lable: "Ape Gods",
        creator: "Eliot",
        verified: false
      }
    ],
    ({ icon, lable, verified, creator }, i) => {
      return `<div class="${"flex flex-col gap-2 pt-32 px-2 pb-4 text-secondary-light justify-center items-center relative bg-secondary rounded-2xl w-full"}"><div class="${"flex absolute -top-4 left-0 right-0 justify-center"}"><img${add_attribute("src", icon, 0)} alt="${""}" class="${"max-w-[9rem] w-full rounded-full"}"></div>

						<div class="${escape(lable === "DegenGods" ? "flex" : "hidden", true) + " absolute -top-2 left-0 right-0 justify-end"}"><img${add_attribute("src", check_success, 0)} alt="${""}" class="${"max-w-[1.5rem] w-full rounded-full"}"></div>
						<span>${escape(lable)}</span>
						<span class="${"text-accent relative"}">${escape(creator)}
							<div${add_attribute("class", `flex justify-center items-center absolute top-0 -right-4 ${verified ? "block" : "hidden"} `, 0)}><img${add_attribute("src", check, 0)} alt="${""}" class="${"w-full h-full"}">
							</div></span>
						<button class="${"bg-accent text-primary rounded-lg px-4 py-1"}">Soalan</button>
					</div>`;
    }
  )}</div>

			<span class="${"text-secondary-light"}">Enter Recipients to drop <span class="${"text-danger"}">*</span></span></div>

		${validate_component(Textarea, "Textarea").$$render(
    $$result,
    {
      size: "lg",
      placeholder: "0x9d31ddba7f1c302028ff1c92cabed785fe0342a8"
    },
    {},
    {}
  )}
		<button class="${"bg-accent text-primary rounded-lg px-4 py-1"}">Submit Air drop</button></div>
	<div class="${""}"></div></div>`;
});
export {
  Page as default
};

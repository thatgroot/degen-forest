import { c as create_ssr_component, f as each, v as validate_component, d as add_attribute } from "../../../../chunks/index.js";
import { c as car, f as fire } from "../../../../chunks/car.js";
import { b as blind, f as fat } from "../../../../chunks/blind.js";
import { P as Popup } from "../../../../chunks/Popup.js";
import { l as logo } from "../../../../chunks/logo-icon.js";
import { c as copy } from "../../../../chunks/copy.js";
import { i as info } from "../../../../chunks/info.js";
const assasin = "/_app/immutable/assets/assasin-3d222471.png";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const nfts = [
    {
      title: "Assasin",
      time: "1d 2h 30m",
      nft: assasin,
      staked: false
    },
    {
      title: "Car",
      time: "1d 2h 30m",
      nft: car,
      staked: true
    },
    {
      title: "Fire",
      time: "1d 2h 30m",
      nft: fire,
      staked: false
    },
    {
      title: "Blind",
      time: "1d 2h 30m",
      nft: blind,
      staked: false
    },
    {
      title: "Fat",
      time: "1d 2h 30m",
      nft: fat,
      staked: false
    }
  ];
  let toggle = false;
  return `<div class="${"grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-5 text-primary"}">

	${each(nfts, ({ title, time, nft, staked }, i) => {
    return `<div class="${"flex flex-col gap-6 bg-secondary-light rounded-2xl hover:scale-90 transition-all duration-300 ease-in-out"}"><div class="${"flex flex-col gap-4 bg-secondary rounded-2xl"}"><div class="${"flex justify-center items-center relative"}"><img${add_attribute("src", nft, 0)}${add_attribute("alt", title, 0)} class="${"rounded-2xl min-h-[20rem] object-cover"}">
					<div class="${"flex flex-col justify-between p-4 absolute top-0 left-0 right-0 bottom-0 bg-opacity-10"}"><button class="${"flex items-center justify-center px-2 py-1 w-fit rounded-full bg-primary hover:gradient-primary"}">39.54% APY
						</button>
						<span class="${"text-primary text-xl font-bold"}">Isaak Presley</span>
					</div></div>
				<div class="${"flex items-center justify-between px-6 pb-4 pt-1"}"><div class="${"flex items-center gap-3 text-xs"}"><img${add_attribute("src", logo, 0)} alt="${"logo"}" class="${"w-6 h-6"}">
						<div class="${"flex flex-col gap-2"}"><span>Superfan NFT Owner</span>
							<span>4RMLd...t5nq</span>
						</div></div>

					<div class="${"rounded-full w-8 h-8 bg-primary flex items-center justify-center"}"><img${add_attribute("src", copy, 0)} alt="${"copy"}" class="${"w-4 h-4"}"></div>
				</div></div>
			

			<div class="${"flex flex-col p-4 gap-4"}"><div class="${"flex justify-between text-xxs"}">
					<div class="${"flex flex-col gap-2"}"><span class="${"flex gap-1"}"><span>TVL</span>
							<img${add_attribute("src", info, 0)} alt="${"info"}" class="${"w-4 h-4"}"></span>
						<span class="${"font-bold text-sm"}">4.8M </span>
						<span>~$69K </span></div>

					<div class="${"flex flex-col gap-2"}"><span class="${"text-sm font-bold"}">Stakers </span>
						<span class="${""}">133 </span>
					</div></div>

				<button class="${"flex items-center justify-center w-full px-4 py-2 rounded-lg border-2 border-secondary"}">${staked ? `<span>Unstake</span>` : `<span>Stake</span>`}
				</button></div>
		</div>`;
  })}</div>

${validate_component(Popup, "Popup").$$render(
    $$result,
    {
      bg: "glass",
      rounded: "lg",
      padding: "p-0",
      toggle,
      onClosed: () => {
        toggle = false;
      }
    },
    {},
    {
      default: () => {
        return `<div class="${"flex flex-col gap-4 max-w-lg rounded-lg"}"><div class="${"flex flex-col text-primary w-full bg-glass-dark px-6 py-3 rounded-lg"}"><span class="${"text-2xl font-medium"}">Stake in this pool </span>
			<span class="${"text-lg font-light"}">Isaak Presley\u2019s pool ( <span class="${"text-success"}">39.54% </span> )
			</span></div>

		<div class="${"flex flex-col gap-3 p-4"}"><span class="${"text-secondary text-lg"}">Current balance: 0 LIKE</span>
			<div class="${"flex border-2 broder-secondary rounded-lg bg-primary p-2 items-center gap-2"}"><img${add_attribute("src", logo, 0)} alt="${"logo"}" class="${"w-6 h-6"}">
				<input type="${"text"}" class="${"flex-1 bg-transparent text-primary text-lg font-medium outline-none"}" placeholder="${"0.00"}">
				<div class="${"flex gap-2 text-primary"}"><button class="${"flex items-center justify-center px-4 py-2 rounded-lg border-2 border-secondary outline-none"}"><span>Max</span></button>
					<button class="${"flex items-center justify-center px-4 py-2 rounded-lg border-2 border-secondary outline-none"}"><span>1/2</span></button></div></div>

			<div class="${"p-4 rounded-lg flex justify-between items-center bg-primary text-primary"}"><span>Estimated APY</span>
				<span class="${"text-success"}">2.12% </span></div>

			<div class="${"p-4 flex flex-col gap-1"}"><span>Calculated based on current rates.</span>
				<span>All figures are estimates provided for your convenience only, and by no means represent
					guaranteed returns.
				</span></div>

			<div class="${"flex flex-col gap-3 border-2 border-secondary-light rounded-lg p-4 items-center"}"><span class="${"text-lg font-bold"}">Please keep in mind </span>
				<span>There is a 2% platform fee for instant unstaking. </span></div></div>

		<div class="${"flex items-center p-3"}"><button class="${"bg-secondary text-primary rounded-lg px-2 py-3 uppercase font-bold text-xs w-full"}">Confirm
			</button></div></div>`;
      }
    }
  )}`;
});
export {
  Page as default
};

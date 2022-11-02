import { c as create_ssr_component, d as add_attribute } from "../../../../chunks/index.js";
import { r as refresh } from "../../../../chunks/refresh.js";
import { e as eth } from "../../../../chunks/eth.js";
import { d as dai } from "../../../../chunks/dai.js";
import { a as arrow_down } from "../../../../chunks/arrow-down.js";
const settings = "/_app/immutable/assets/settings-6dcbfb12.svg";
const arrow_down_active = "/_app/immutable/assets/arrow-down-active-337e3617.svg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"flex flex-col mx-auto px-6 py-12 bg-secondary rounded-2xl w-full tablet:w-2/4 my-12"}">
	<div class="${"flex p-2 justify-between my-2"}"><span class="${"text-accent"}">Token</span>
		<div class="${"flex gap-2"}"><img${add_attribute("src", refresh, 0)} alt="${""}" class="${"w-4 rounded-full"}">
			<img${add_attribute("src", settings, 0)} alt="${""}" class="${"w-4 rounded-full"}"></div></div>
	

	<div class="${"flex flex-col gap-3 "}"><div class="${"flex flex-col bg-secondary-light text-primary py-4 px-6 gap-3 rounded-4xl relative"}"><div class="${"flex justify-between"}"><span>You sell</span>
				<span>Balance: 0.0</span></div>

			<div class="${"flex justify-between items-center text-primary"}">
				<div class="${"flex gap-1 bg-primary p-2 rounded-lg"}"><img${add_attribute("src", eth, 0)} alt="${""}" class="${"w-4 rounded-full"}">
					<span>ETH</span>
					<img${add_attribute("src", arrow_down, 0)} alt="${""}" class="${"w-4 rounded-full"}"></div>

				<span>0.99782534 </span></div>

			<div class="${"flex justify-between text-secondary-light"}"><span>Ethereum </span>
				<span>~$1623.77</span></div>

			<div class="${"absolute left-0 right-0 flex items-end justify-center text-primary -bottom-6 z-10"}"><div class="${"w-8 h-8 rounded-full flex justify-center items-center bg-secondary"}"><img${add_attribute("src", arrow_down_active, 0)} alt="${"switch exchange currency"}"></div></div></div>

		<div class="${"flex flex-col text-primary border-2 border-secondary-light py-4 px-6 gap-3 rounded-4xl relative"}"><div class="${"flex justify-between"}"><span>You Buy</span></div>

			<div class="${"flex gap-1 p-2 rounded-lg"}"><img${add_attribute("src", dai, 0)} alt="${""}" class="${"w-4 rounded-full"}">
				<span>DAI</span>
				<img${add_attribute("src", arrow_down, 0)} alt="${""}" class="${"w-4 rounded-full"}"></div>

			<div class="${"flex justify-between items-center p-4 rounded-2xl border-2 border-secondary-light"}"><div class="${"flex flex-col gap-3 text-secondary-light text-lg"}"><span class="${"font-semibold"}">LP Aggregator </span>
					<span class="${"font-light"}">Tx cost 0 \u039E (~$0,00) </span></div>
				<span class="${"text-xl font-light"}">0</span></div></div>

		<button class="${"w-full rounded-lg bg-accent text-primary font-semibold py-3"}">Swap</button></div></div>`;
});
export {
  Page as default
};

import { c as create_ssr_component, e as escape, d as add_attribute } from "./index.js";
import { s as solana } from "./solana.js";
const AccordionSlot = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { active_bg = "transparent" } = $$props;
  let { hover_bg = "secondary" } = $$props;
  let { rounded = "none" } = $$props;
  let { border = "primary" } = $$props;
  let { collapsed = true } = $$props;
  let { toggle = () => {
    collapsed = !collapsed;
  } } = $$props;
  let { toggled = (c) => {
  } } = $$props;
  if ($$props.active_bg === void 0 && $$bindings.active_bg && active_bg !== void 0)
    $$bindings.active_bg(active_bg);
  if ($$props.hover_bg === void 0 && $$bindings.hover_bg && hover_bg !== void 0)
    $$bindings.hover_bg(hover_bg);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.collapsed === void 0 && $$bindings.collapsed && collapsed !== void 0)
    $$bindings.collapsed(collapsed);
  if ($$props.toggle === void 0 && $$bindings.toggle && toggle !== void 0)
    $$bindings.toggle(toggle);
  if ($$props.toggled === void 0 && $$bindings.toggled && toggled !== void 0)
    $$bindings.toggled(toggled);
  return `<div class="${"bg-primary rounded-" + escape(rounded, true) + " border-t-[1px] border-" + escape(border, true) + " w-full"}">
	<div class="${"rounded-" + escape(rounded, true) + " flex flex-row justify-between items-center bg-" + escape(active_bg, true) + " " + escape(collapsed ? "w-full" : "w-full", true) + " h-14 cursor-pointer rounded-sm px-6 py-4 hover:bg-" + escape(hover_bg, true)}">${slots.header ? slots.header({}) : ``}</div>
	
	<div${add_attribute(
    "class",
    !collapsed ? "h-auto" : "h-0 w-0 overflow-hidden relative",
    0
  )}>${slots.body ? slots.body({}) : ``}</div></div>`;
});
const plus = "/_app/immutable/assets/plus-40b72e61.svg";
const quick = "/_app/immutable/assets/quick-5174006c.svg";
const NFTCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { bg = "primary" } = $$props;
  if ($$props.bg === void 0 && $$bindings.bg && bg !== void 0)
    $$bindings.bg(bg);
  return `<div class="${"flex flex-col rounded-lg border-2 border-secondary bg-" + escape(bg, true) + " overflow-hidden w-full"}">
	<div class="${"w-full cursor-pointer group relative group"}"><img${add_attribute("src", plus, 0)} alt="${"..."}" class="${"hidden group-hover:inline-block w-8 h-8 absolute top-2 right-2 z-50"}">

		<img draggable="${"false"}" loading="${"lazy"}" alt="${"..."}" src="${"https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https%3A%2F%2Fbafybeidqnl4od4mjjdq6szqhj3dbf35mpg46njbt3spqqwzjwwvhyplok4.ipfs.nftstorage.link%2F6342.png%3Fext%3Dpng"}">

		<div class="${"w-full absolute top-0 left-0 right-0 bottom-0 items-center justify-center hidden group-hover:flex"}"><div class="${"btn-accent bg-accent rounded-full px-4 py-2 flex gap-1 "}"><img${add_attribute("src", quick, 0)} alt="${"...."}" class="${""}"> Quick buy
			</div></div>

		<div class="${"absolute bottom-4 right-2 bg-primary text-primary rounded-md px-2"}"><span>325</span><span>/6287</span></div></div>

	
	<div class="${"p-2"}"><div class="${"flex flex-col gap-3"}"><div class="${"flex flex-col gap-1 text-primary"}"><span>Degod #3456</span>
				<span class="${"text-xxs text-accent"}">DeGods</span></div>

			<div class="${"flex justify-between"}"><div class="${"flex items-center gap-3"}"><img${add_attribute("src", solana, 0)} alt="${"..."}" class="${"h-3.5"}">
					<span class="${"text-primary"}">8</span></div>

				<a href="${"/marketplace/item-details"}" class="${"btn-accent border-2 border-secondary rounded-sm px-2 py-1 text-xs text-accent"}">Details
				</a></div></div></div></div>`;
});
export {
  AccordionSlot as A,
  NFTCard as N
};

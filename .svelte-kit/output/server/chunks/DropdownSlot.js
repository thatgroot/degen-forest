import { c as create_ssr_component, e as escape, d as add_attribute } from "./index.js";
import "./web3-wallet.js";
const DropdownSlot = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let { border = "tranparent" } = $$props;
  let { bg = "tranparent" } = $$props;
  let { rounded = "md" } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.bg === void 0 && $$bindings.bg && bg !== void 0)
    $$bindings.bg(bg);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  return `<div class="${"relative h-full w-full"}"><button class="${"text-primary bg-" + escape(bg, true) + " h-full w-full border-2 border-" + escape(border, true) + " font-medium rounded-" + escape(rounded, true) + " text-sm px-4 py-2 text-center flex items-center justify-between"}" type="${"button"}">${slots.active ? slots.active({}) : ``}</button>

	
	<div${add_attribute("id", id, 0)} class="${"z-[99999] w-full h-[50vh] overflow-y-scroll overflow-x-hidden bg-primary border-2 border-secondary rounded-md divide-y divide-gray-100 shadow absolute top-[110%] right-0 hidden"}"><div class="${"p-3 space-y-1 text-sm text-primary"}">${slots.items ? slots.items({}) : ``}</div></div></div>`;
});
export {
  DropdownSlot as D
};

import { c as create_ssr_component, e as escape, d as add_attribute, f as each } from "./index.js";
import { a as arrow_down } from "./arrow-down.js";
const Dropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { onclick = () => {
  } } = $$props;
  let { id } = $$props;
  let { border = "secondary" } = $$props;
  let { bg = "tranparent" } = $$props;
  let { rounded = "md" } = $$props;
  let { postfix = arrow_down } = $$props;
  let { show = "both" } = $$props;
  let { items = [] } = $$props;
  if ($$props.onclick === void 0 && $$bindings.onclick && onclick !== void 0)
    $$bindings.onclick(onclick);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.bg === void 0 && $$bindings.bg && bg !== void 0)
    $$bindings.bg(bg);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.postfix === void 0 && $$bindings.postfix && postfix !== void 0)
    $$bindings.postfix(postfix);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  return `<div class="${"relative h-full w-full"}"><button class="${"text-primary bg-" + escape(bg, true) + " h-full w-full " + escape(border === "none" ? "" : "border-2", true) + " border-" + escape(border, true) + " font-medium rounded-" + escape(rounded, true) + " text-md px-4 py-2 text-center flex items-center justify-between gap-2"}" type="${"button"}">${show === "both" || show === "title" ? `<span>${escape(items[0])}</span>` : ``}
		${show === "both" || show === "icon" ? `<img${add_attribute("src", postfix, 0)} alt="${"..."}">` : ``}</button>

	
	<div${add_attribute("id", id, 0)} class="${"z-[99999] w-full bg-primary border-2 border-secondary rounded-md divide-y divide-gray-100 shadow absolute top-[120%] right-0 hidden"}"><ul class="${"p-3 space-y-1 text-sm text-primary"}" aria-labelledby="${"dropdownHelperRadioButton"}">${each(items, (item) => {
    return `<li class="${"px-2 py-1 hover:bg-secondary cursor-pointer"}"><span>${escape(item)}</span>
				</li>`;
  })}</ul></div></div>`;
});
export {
  Dropdown as D
};

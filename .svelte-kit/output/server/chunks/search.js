import { c as create_ssr_component, d as add_attribute } from "./index.js";
import { s as search } from "./search2.js";
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { rounded = "full" } = $$props;
  let { placeholder = "Search" } = $$props;
  let { bg = "tranparent" } = $$props;
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.bg === void 0 && $$bindings.bg && bg !== void 0)
    $$bindings.bg(bg);
  return `<div class="${"w-full"}"><div${add_attribute("class", `bg-${bg} rounded-${rounded} px-6 py-1 w-full flex  flex-row gap-6`, 0)}><img${add_attribute("src", search, 0)} alt="${"search here"}">
		<input${add_attribute("placeholder", placeholder, 0)}${add_attribute("class", `bg-transparent outline-none h-8 target:h11  rounded-${rounded} text-primary tablet:min-w-[30rem]`, 0)}></div></div>`;
});
export {
  Search as S
};

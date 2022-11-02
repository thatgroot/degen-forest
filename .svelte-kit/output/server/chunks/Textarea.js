import { c as create_ssr_component, d as add_attribute } from "./index.js";
const Textarea = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { placeholder = "Search" } = $$props;
  let { size = "md" } = $$props;
  let { round = "md" } = $$props;
  let { prefix = "" } = $$props;
  let { border = "transparent" } = $$props;
  const input_sizes = {
    lg: "w-full",
    md: "w-[196px]",
    sm: "w-[64px]"
  };
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.round === void 0 && $$bindings.round && round !== void 0)
    $$bindings.round(round);
  if ($$props.prefix === void 0 && $$bindings.prefix && prefix !== void 0)
    $$bindings.prefix(prefix);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  return `<div${add_attribute("class", `px-2 bg-secondary rounded-[${round}] border-2 border-${border} rounded-${round}  flex flex-row items-center gap-2`, 0)}><img${add_attribute("class", `${prefix ? "block w-4 h-4" : "hidden"}`, 0)}${add_attribute("src", prefix, 0)}${add_attribute("alt", "field icon", 0)}>
	<textarea rows="${"5"}"${add_attribute("class", `px-2 py-1 h-fit placeholder:text-secondary-light text-primary bg-transparent outline-none focus:outline-none rounded-${round} ${input_sizes[size]}`, 0)}${add_attribute("placeholder", placeholder, 0)}></textarea></div>`;
});
export {
  Textarea as T
};

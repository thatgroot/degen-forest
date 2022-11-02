import { c as create_ssr_component, d as add_attribute } from "./index.js";
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { placeholder = "Search" } = $$props;
  let { size = "md" } = $$props;
  let { round = "md" } = $$props;
  let { prefix = "" } = $$props;
  let { type = "text" } = $$props;
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
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  return `<div${add_attribute("class", `px-2 bg-transparent border-2 border-${border} rounded-${round}  flex flex-row items-center gap-2`, 0)}><img${add_attribute("class", `${prefix ? "block w-4 h-4" : "hidden"}`, 0)}${add_attribute("src", prefix, 0)}${add_attribute("alt", "field icon", 0)}>
	<input${add_attribute("type", type, 0)}${add_attribute("class", `px-2 py-1 placeholder:text-secondary-light text-primary bg-transparent outline-none focus:outline-none rounded-${round} ${input_sizes[size]}`, 0)}${add_attribute("placeholder", placeholder, 0)}></div>`;
});
export {
  Input as I
};

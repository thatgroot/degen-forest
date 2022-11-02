import { c as create_ssr_component, d as add_attribute, e as escape } from "./index.js";
const TabBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"flex justify-start items-center gap-8"}">${slots.default ? slots.default({}) : ``}</div>`;
});
const Tab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon = "" } = $$props;
  let { title = "Solana" } = $$props;
  let { active = false } = $$props;
  let { onclick = () => {
  } } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.onclick === void 0 && $$bindings.onclick && onclick !== void 0)
    $$bindings.onclick(onclick);
  return `<div${add_attribute("class", `relative flex justify-center items-center gap-3 py-1 w-fit border-b-2 border-b-secondary  ${active ? "border-b-accent" : ""}  px-3 min-w-[7.5rem] hover:cursor-pointer transition-all ease-linear duration-150 hover:border-b-accent`, 0)}><img${add_attribute("src", icon, 0)}${add_attribute("class", `${icon ? "block h-8" : "hidden"} `, 0)} alt="${"solana"}">
	<span class="${"text-secondary-light"}">${escape(title)}</span>
	
	<div${add_attribute("class", `absolute top-0 right-0 w-2 h-2 rounded-full bg-accent ${active ? "block" : "hidden"} `, 0)}></div></div>`;
});
export {
  TabBar as T,
  Tab as a
};

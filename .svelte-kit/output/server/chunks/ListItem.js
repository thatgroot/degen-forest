import { c as create_ssr_component, d as add_attribute, e as escape } from "./index.js";
import { i as info } from "./info.js";
const ListItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { subtitle = "" } = $$props;
  let { title_prefix = info } = $$props;
  let { title_postfix = "" } = $$props;
  let { text_size = "md" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.title_prefix === void 0 && $$bindings.title_prefix && title_prefix !== void 0)
    $$bindings.title_prefix(title_prefix);
  if ($$props.title_postfix === void 0 && $$bindings.title_postfix && title_postfix !== void 0)
    $$bindings.title_postfix(title_postfix);
  if ($$props.text_size === void 0 && $$bindings.text_size && text_size !== void 0)
    $$bindings.text_size(text_size);
  return `<div${add_attribute("class", `rounded-md flex  gap-4 text-primary items-center justify-between max-w-fit hover:bg-secondary  min-w-full min-h-[48px] px-4 py-2`, 0)}><div${add_attribute("class", `flex gap-3 ${text_size === "sm" ? "text-[0.75rem]" : "text-xs"}`, 0)}>${title_prefix ? `<img${add_attribute("src", title_prefix, 0)}${add_attribute("alt", "learn more", 0)}>` : ``}
		<span>${escape(title)}</span>
		${title_postfix ? `<img${add_attribute("src", title_postfix, 0)}${add_attribute("alt", "learn more", 0)}>` : ``}</div>
	${subtitle ? `<span class="${"text-primary ml-4"}">${escape(subtitle)}</span>` : ``}</div>`;
});
export {
  ListItem as L
};

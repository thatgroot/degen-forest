import { c as create_ssr_component, e as escape, d as add_attribute } from "./index.js";
const arrow_left = "/_app/immutable/assets/arrow-left-271a08fc.svg";
const AccordionHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { toggleAccordionHeader } = $$props;
  let { title = "" } = $$props;
  let { subtitle = "" } = $$props;
  let { show = "icon" } = $$props;
  let { rounded = "none" } = $$props;
  let { bg = "transparent" } = $$props;
  let { active_bg = "transparent" } = $$props;
  let { size = "full" } = $$props;
  let { sizeable = false } = $$props;
  let { resize_to = "sm" } = $$props;
  let { prefix = "" } = $$props;
  let { postfix = arrow_left } = $$props;
  let { border = "none" } = $$props;
  let { expanded = false } = $$props;
  const width = {
    full: "w-full",
    lg: "w-[512px]",
    md: "w-[256px]",
    sm: "w-[120px]",
    xs: "w-[96px]"
  };
  if ($$props.toggleAccordionHeader === void 0 && $$bindings.toggleAccordionHeader && toggleAccordionHeader !== void 0)
    $$bindings.toggleAccordionHeader(toggleAccordionHeader);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.bg === void 0 && $$bindings.bg && bg !== void 0)
    $$bindings.bg(bg);
  if ($$props.active_bg === void 0 && $$bindings.active_bg && active_bg !== void 0)
    $$bindings.active_bg(active_bg);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.sizeable === void 0 && $$bindings.sizeable && sizeable !== void 0)
    $$bindings.sizeable(sizeable);
  if ($$props.resize_to === void 0 && $$bindings.resize_to && resize_to !== void 0)
    $$bindings.resize_to(resize_to);
  if ($$props.prefix === void 0 && $$bindings.prefix && prefix !== void 0)
    $$bindings.prefix(prefix);
  if ($$props.postfix === void 0 && $$bindings.postfix && postfix !== void 0)
    $$bindings.postfix(postfix);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.expanded === void 0 && $$bindings.expanded && expanded !== void 0)
    $$bindings.expanded(expanded);
  return `<div class="${"rounded-" + escape(rounded, true) + " " + escape(border === "none" ? "" : "border-2", true) + " border-" + escape(border, true) + " flex flex-row justify-between items-center " + escape(expanded ? "bg-" + active_bg : "bg-" + bg, true) + " " + escape(sizeable, true) + " " + escape(
    !sizeable ? "w-full" : width[size],
    true
  ) + " min-h-[48px] px-2 py-2 transition-all ease-in-out delay-300 hover:cursor-pointer"}"><div class="${"flex flex-row justify-start w-full"}">${show === "slot" ? `${slots.default ? slots.default({}) : ``}` : `${slots.default ? slots.default({}) : ``}
			${show === "icon" || show === "both" ? `<img class="${"hover:cursor-pointer"}"${add_attribute("src", prefix, 0)} alt="${"filter icon"}">` : ``}
			${show === "text" || show === "both" ? `<div${add_attribute("class", `${show === "both" ? "mx-2" : ""} flex flex-col items-start`, 0)}><span class="${"text-primary min-w-max text-sm"}">${escape(title)}</span>
					<small class="${"text-primary"}">${escape(subtitle)}</small></div>` : ``}`}
		</div>

	<div class="${"mx-2 transition-transform ease-linear delay-100 " + escape("", true)}"><img class="${"w-4"}"${add_attribute("src", postfix, 0)}${add_attribute("alt", `arrow ...`, 0)}></div></div>`;
});
export {
  AccordionHeader as A,
  arrow_left as a
};

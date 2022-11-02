import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component } from "./index.js";
import { A as AccordionHeader } from "./AccordionHeader.js";
const AccordionBody = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { toggle = false } = $$props;
  if ($$props.toggle === void 0 && $$bindings.toggle && toggle !== void 0)
    $$bindings.toggle(toggle);
  return `<div${add_attribute("class", `px-4 ${toggle ? "h-auto" : "h-0 overflow-hidden"}`, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const Accordion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { header } = $$props;
  let { href = "#!" } = $$props;
  let { bg = "primary" } = $$props;
  let { rounded = "lg" } = $$props;
  let toggle = false;
  const toggleAccordionHeader = () => {
    toggle = !toggle;
  };
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.bg === void 0 && $$bindings.bg && bg !== void 0)
    $$bindings.bg(bg);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  return `<a class="${"bg-" + escape(bg, true) + " rounded-" + escape(rounded, true)}"${add_attribute("href", href, 0)}>${validate_component(AccordionHeader, "AccordionHeader").$$render($$result, Object.assign({ expanded: toggle }, header, { toggleAccordionHeader }), {}, {
    default: () => {
      return `${slots.header ? slots.header({}) : ``}`;
    }
  })}
	${validate_component(AccordionBody, "AccordionBody").$$render($$result, { toggle }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</a>`;
});
export {
  Accordion as A
};

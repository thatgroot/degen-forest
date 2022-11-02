import { c as create_ssr_component, d as add_attribute, e as escape } from "./index.js";
const close = "/_app/immutable/assets/close-a95a107e.svg";
const Popup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { toggle = false } = $$props;
  let { bg = "secondary" } = $$props;
  let { rounded = "none" } = $$props;
  let { padding = "px-6 py-12" } = $$props;
  let { close_bg = "primary" } = $$props;
  let { onClosed = () => {
  } } = $$props;
  if ($$props.toggle === void 0 && $$bindings.toggle && toggle !== void 0)
    $$bindings.toggle(toggle);
  if ($$props.bg === void 0 && $$bindings.bg && bg !== void 0)
    $$bindings.bg(bg);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.close_bg === void 0 && $$bindings.close_bg && close_bg !== void 0)
    $$bindings.close_bg(close_bg);
  if ($$props.onClosed === void 0 && $$bindings.onClosed && onClosed !== void 0)
    $$bindings.onClosed(onClosed);
  return `

<div id="${"crypto-modal"}" tabindex="${"-1"}"${add_attribute("class", `${!toggle ? "hidden  -z-[99999]" : ""} bg-glass z-[99999] transition-all ease-in-out duration-200 overflow-y-auto overflow-x-hidden fixed top-0 bottom-0 left-0 right-0  w-full tablet:w-screen h-screen  justify-center items-center flex`, 0)} aria-modal="${"true"}" role="${"dialog"}"><div class="${"flex flex-col bg-" + escape(bg, true) + " rounded-" + escape(rounded, true) + " " + escape(padding, true) + " gap-6 h-fit min-w-[420px] relative"}"><div class="${"flex justify-end w-full absolute -top-2 -right-2 "}"><button class="${"w-12 h-12 rounded-full text- bg-" + escape(close_bg, true) + " z-50 flex justify-center items-center"}"><img class="${"stroke-black"}"${add_attribute("src", close, 0)} alt="${"close now"}"></button></div>
		${slots.default ? slots.default({}) : ``}</div></div>`;
});
export {
  Popup as P
};

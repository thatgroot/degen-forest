import { c as create_ssr_component } from "../../../chunks/index.js";
/* empty css                   */const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="${"p-0 m-0"}"><div>
		<div class="${"flex flex-col tablet:flex-row"}">${slots.default ? slots.default({}) : ``}</div></div></main>`;
});
export {
  Layout as default
};

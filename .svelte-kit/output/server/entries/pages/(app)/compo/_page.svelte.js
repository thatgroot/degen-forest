import { c as create_ssr_component, d as add_attribute, v as validate_component, e as escape, f as each } from "../../../../chunks/index.js";
import { A as Accordion } from "../../../../chunks/Accordion.js";
import { I as Input } from "../../../../chunks/Input.js";
import { L as ListItem } from "../../../../chunks/ListItem.js";
import { f as filter } from "../../../../chunks/filter.js";
import { a as arrow_left } from "../../../../chunks/AccordionHeader.js";
import "../../../../chunks/info.js";
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type = "primary" } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  return `<div class="${"w-full"}"><button${add_attribute("class", `my-4 w-full p-2 bg-${type} text-${type} hover:bg-hover-${type} rounded-md h-[44px]`, 0)}>${slots.default ? slots.default({}) : ``}</button></div>`;
});
const arrow_up = "/_app/immutable/assets/arrow-up-8d8fa52d.svg";
const PriceFilterCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { crypto_coin } = $$props;
  if ($$props.crypto_coin === void 0 && $$bindings.crypto_coin && crypto_coin !== void 0)
    $$bindings.crypto_coin(crypto_coin);
  return `<div class="${"bg-[#120C18] rounded-md max-w-fit"}">${validate_component(Accordion, "Accordion").$$render(
    $$result,
    {
      header: {
        size: "full",
        show: "text",
        title: "Price",
        subtitle: "............",
        postfix: arrow_up
      }
    },
    {},
    {
      default: () => {
        return `<div class="${"p-2"}"><div>${escape(crypto_coin)}</div>
			<div class="${"flex flex-row justify-between items-center w-fit"}">${validate_component(Input, "Input").$$render(
          $$result,
          {
            placeholder: "MIN",
            size: "sm",
            round: "lg"
          },
          {},
          {}
        )}
				<span class="${"text-primary p-2"}">to</span>
				${validate_component(Input, "Input").$$render(
          $$result,
          {
            placeholder: "MAX",
            size: "sm",
            round: "lg"
          },
          {},
          {}
        )}</div>
			${validate_component(Button, "Button").$$render($$result, {}, {}, {
          default: () => {
            return `Apply`;
          }
        })}</div>`;
      }
    }
  )}</div>`;
});
const TraitFilterCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { placeholder } = $$props;
  let { title } = $$props;
  let { data = [1, 2] } = $$props;
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"bg-[#120C18] rounded-md max-w-fit"}">${validate_component(Accordion, "Accordion").$$render(
    $$result,
    {
      header: {
        size: "md",
        title,
        subtitle: "............",
        postfix: arrow_up,
        show: "both"
      }
    },
    {},
    {
      default: () => {
        return `<div class="${"p-2"}"><div class="${"px-2 py-4"}">${validate_component(Input, "Input").$$render($$result, { placeholder, size: "lg", round: "full" }, {}, {})}</div>
			<div class="${"flex flex-col justify-between"}">${each(data, (item) => {
          return `<div class="${"flex flex-col justify-between items-center rounded-sm p-4 border-2 my-2"}">
						<div class="${"flex flex-row justify-between text-primary w-full"}"><span>DeGod</span>
							<span>29/1000</span></div>
						<div class="${"flex flex-row justify-between text-primary w-full"}"><span>279.0 \u25CE floor</span>
							<span>0.29%</span></div>
					</div>`;
        })}</div></div>`;
      }
    }
  )}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Home</title>`, ""}<meta name="${"description"}" content="${"Svelte demo app"}" data-svelte="svelte-t32ptj">`, ""}

<section><div>${validate_component(Accordion, "Accordion").$$render(
    $$result,
    {
      header: {
        prefix: filter,
        postfix: arrow_left,
        sizeable: true,
        resize_to: "md",
        show: "both",
        size: "full",
        title: "Price",
        subtitle: ".............."
      }
    },
    {},
    {}
  )}
		<div class="${"m-2"}"></div>
		${validate_component(Accordion, "Accordion").$$render(
    $$result,
    {
      header: {
        size: "lg",
        sizeable: true,
        resize_to: "sm",
        title: "Price",
        subtitle: "",
        show: "text",
        postfix: arrow_left
      }
    },
    {},
    {}
  )}
		<div class="${"m-2"}"></div>

		${validate_component(Accordion, "Accordion").$$render(
    $$result,
    {
      header: {
        postfix: arrow_left,
        show: "icon",
        size: "lg",
        sizeable: true,
        resize_to: "xs"
      }
    },
    {},
    {}
  )}
		<div class="${"m-2"}"></div>
		${validate_component(PriceFilterCard, "PriceFilterCard").$$render($$result, { crypto_coin: "SOL" }, {}, {})}
		<div class="${"m-2"}"></div>
		${validate_component(TraitFilterCard, "TraitFilterCard").$$render($$result, { title: "Clothes", placeholder: "Search" }, {}, {})}
		<div class="${"m-2"}"></div>
		${validate_component(ListItem, "ListItem").$$render(
    $$result,
    {
      title: "TOTAL VOL",
      subtitle: "824,809.74 \u25CE"
    },
    {},
    {}
  )}
		<div class="${"m-2"}"></div>
		${validate_component(ListItem, "ListItem").$$render(
    $$result,
    {
      title: "TOTAL VOL",
      subtitle: "824,809.74 \u25CE"
    },
    {},
    {}
  )}
		<div class="${"m-2"}"></div>
		<div class="${"m-2"}"></div>
		<div class="${"m-2"}"></div>

		${validate_component(Button, "Button").$$render($$result, { type: "primary" }, {}, {
    default: () => {
      return `Text`;
    }
  })}</div></section>`;
});
export {
  Page as default
};

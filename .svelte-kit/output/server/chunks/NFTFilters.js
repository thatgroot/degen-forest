import { c as create_ssr_component, v as validate_component } from "./index.js";
import { D as Dropdown } from "./Dropdown.js";
import { I as Input } from "./Input.js";
import { s as search } from "./search2.js";
import { a as arrow_down } from "./arrow-down.js";
import { A as Accordion } from "./Accordion.js";
const NFTFilters = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"flex flex-wrap tablet:flex-nowrap items-start gap-6"}"><div class="${"bg-transparent w-full rounded-lg grow relative"}">${validate_component(Accordion, "Accordion").$$render(
    $$result,
    {
      bg: "primary",
      header: {
        title: "Search",
        show: "both",
        size: "full",
        prefix: search,
        postfix: arrow_down,
        border: "secondary",
        rounded: "sm"
      }
    },
    {},
    {
      default: () => {
        return `<div class="${"flex flex-col tablet:flex-row w-full gap-3 px-6 py-8 bg-secondary "}">${validate_component(Dropdown, "Dropdown").$$render(
          $$result,
          {
            id: "filter_select_type",
            border: "primary",
            items: ["Me Floor Price", "Collection name", "Volume"]
          },
          {},
          {}
        )}
				${validate_component(Dropdown, "Dropdown").$$render(
          $$result,
          {
            id: "filter_select_comparator",
            border: "primary",
            items: [
              "greater than",
              "greater than",
              "less than",
              "greater than or equal to",
              "less than or equal to"
            ]
          },
          {},
          {}
        )}

				${validate_component(Input, "Input").$$render(
          $$result,
          {
            size: "md",
            placeholder: "price",
            round: "md",
            border: "primary"
          },
          {},
          {}
        )}</div>`;
      }
    }
  )}</div>

	
	<div class="${"min-w-full tablet:min-w-max"}">${validate_component(Dropdown, "Dropdown").$$render(
    $$result,
    {
      id: "filter_select_duration",
      border: "secondary",
      items: [
        "Last 5 minutes",
        "Last 30 minutes",
        "Last 1 hour",
        "Last 6 hours",
        "Last 12 hours",
        "Last 24 hours",
        "Last 7 days",
        "Last 30 days"
      ]
    },
    {},
    {}
  )}</div></div>`;
});
export {
  NFTFilters as N
};

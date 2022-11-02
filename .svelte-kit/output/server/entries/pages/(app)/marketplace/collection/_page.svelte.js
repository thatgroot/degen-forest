import { c as create_ssr_component, v as validate_component, f as each, e as escape, d as add_attribute } from "../../../../../chunks/index.js";
import { P as Popup } from "../../../../../chunks/Popup.js";
import { D as Dropdown } from "../../../../../chunks/Dropdown.js";
import { S as Search } from "../../../../../chunks/search.js";
import { f as filter } from "../../../../../chunks/filter.js";
import { A as AccordionHeader, a as arrow_left } from "../../../../../chunks/AccordionHeader.js";
import { a as arrow_down } from "../../../../../chunks/arrow-down.js";
import { s as stack } from "../../../../../chunks/stack.js";
import { h as heart_line } from "../../../../../chunks/heart-line.js";
import { r as refresh } from "../../../../../chunks/refresh.js";
import { d as discord } from "../../../../../chunks/discord.js";
import { i as info } from "../../../../../chunks/info.js";
import { t as twitter } from "../../../../../chunks/twitter.js";
import { I as Input } from "../../../../../chunks/Input.js";
import { A as AccordionSlot, N as NFTCard } from "../../../../../chunks/NFTCard.js";
import { T as Textarea } from "../../../../../chunks/Textarea.js";
import "../../../../../chunks/search2.js";
import "../../../../../chunks/solana.js";
const more = "/_app/immutable/assets/more-5fd3f8fa.svg";
const CollectionSidenavItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `${validate_component(AccordionSlot, "AccordionSlot").$$render($$result, { active_bg: "transparent" }, {}, {
    body: () => {
      return `<div slot="${"body"}" class="${"text-primary flex flex-col gap-3 py-4 px-2"}"><div class="${"flex flex-col justify-between gap-3"}">${validate_component(Input, "Input").$$render(
        $$result,
        {
          border: "secondary",
          placeholder: "Search",
          round: "md",
          size: "lg"
        },
        {},
        {}
      )}
			${each(
        [
          {
            bg: "Tan",
            value: 399,
            outOf: 6499,
            floor: "5.96"
          },
          {
            bg: "Blue",
            value: 399,
            outOf: 6499,
            floor: "5.96"
          },
          {
            bg: "Green",
            value: 399,
            outOf: 6499,
            floor: "5.96"
          }
        ],
        ({ bg, value, outOf, floor }) => {
          return `<button class="${"w-full grid grid-cols-2 gap-3 text-left rounded bg-gray-100 hover:bg-gray-200 p-2 border transition-colors border-secondary"}"><span class="${"text-primary text-sm"}">${escape(bg)}</span>
					<div class="${"justify-self-end"}"><span class="${"text-primary text-sm"}">${escape(value)}</span>
						<span class="${"text-light-gray-500 text-xs"}">/${escape(outOf)}</span></div>
					<span class="${"text-light-gray-500 text-sm"}">${escape(floor)} \u25CE floor</span>
					<div class="${"justify-self-end row-start-2 col-start-2"}"><span class="${"bg-[rgba(228,37,117,0.2)] p-1 text-pink-200 rounded-sm text-[11px]"}">6.14%</span></div>
				</button>`;
        }
      )}
			<button class="${"bg-accent p-2 btn-accent w-full"}">Apply </button></div></div>`;
    },
    header: () => {
      return `<div slot="${"header"}" class="${"w-full"}">${validate_component(AccordionHeader, "AccordionHeader").$$render(
        $$result,
        {
          title,
          postfix: arrow_down,
          show: "text",
          toggleAccordionHeader: () => {
          }
        },
        {},
        {}
      )}</div>`;
    }
  })}`;
});
const vertical_bars = "/_app/immutable/assets/vertical-bars-fa00e118.svg";
const hammer = "/_app/immutable/assets/hammer-5597931d.svg";
const binoculars = "/_app/immutable/assets/binoculars-8aeb2068.svg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let toggle = false;
  let toggleModel = false;
  return `<div class="${"w-full flex flex-col gap-6 py-0 pt-8"}"><div class="${"w-full gap-6 flex rounded-full overflow-auto px-12"}"><div><img draggable="${"false"}" loading="${"lazy"}" class="${"object-center object-cover max-w-[8rem] rounded-full overflow-auto mx-auto"}" src="${"https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://creator-hub-prod.s3.us-east-2.amazonaws.com/ukiyo_pfp_1663178207810.jpeg"}" alt="${"avatar"}"></div>
		<div class="${"grid grid-cols-2 laptop:grid-cols-2 tablet:w-1/2 gap-3"}"><div class="${"truncate p-2 space-x-2 rounded-[4px] flex items-center justify-between flex-col bg-secondary tablet:flex-row"}"><div class="${"flex justify-center items-center space-x-2"}"><span class="${"text-xs text-secondary-light whitespace-nowrap"}" title="${"FLOOR"}">FLOOR</span></div>
				<div class="${"flex space-x-2 items-center max-w-full"}"><div class="${"cursor-help max-w-full truncate"}" data-tooltipped="${""}" aria-describedby="${"tippy-tooltip-387"}" data-original-title="${"5.39 \u25CE"}"><span class="${"text-primary text-14px truncate"}" title="${"5.39 \u25CE"}">5.39 \u25CE</span></div></div></div>
			<div class="${"truncate p-2 space-x-2 rounded-[4px] flex items-center justify-between flex-col bg-secondary tablet:flex-row"}"><div class="${"flex justify-center items-center space-x-2"}"><span class="${"text-xs text-secondary-light whitespace-nowrap"}" title="${"LISTED"}">LISTED</span></div>
				<div class="${"flex space-x-2 items-center max-w-full"}"><div class="${"cursor-help max-w-full truncate"}"><span class="${"text-primary text-14px truncate"}" title="${"1,494"}">1,494</span></div></div></div>
			<div class="${"truncate p-2 space-x-2 rounded-[4px] flex items-center justify-between flex-col bg-secondary tablet:flex-row"}"><div class="${"flex justify-center items-center space-x-2"}"><span class="${"text-xs text-secondary-light whitespace-nowrap"}" title="${"TOTAL VOL"}">TOTAL VOL
					</span></div>
				<div class="${"flex space-x-2 items-center max-w-full"}"><div class="${"cursor-help max-w-full truncate"}"><span class="${"text-primary text-14px truncate"}" title="${"31.7K \u25CE"}">31.7K \u25CE</span></div></div></div>
			<div class="${"truncate p-2 space-x-2 rounded-[4px] flex items-center justify-between flex-col bg-secondary tablet:flex-row"}"><div class="${"flex justify-center items-center space-x-2"}"><span class="${"text-xs text-secondary-light whitespace-nowrap"}" title="${"AVG. SALE (24h)"}">AVG. SALE (24h)</span></div>
				<div class="${"flex space-x-2 items-center max-w-full"}"><div class="${"cursor-help max-w-full truncate"}"><span class="${"text-primary text-14px truncate"}" title="${"5.66 \u25CE"}">5.66 \u25CE</span></div></div></div>
			<div class="${"truncate p-2 space-x-2 rounded-[4px] flex items-center justify-between flex-col bg-secondary tablet:flex-row"}"><div class="${"flex justify-center items-center space-x-2"}"><span class="${"text-xs text-secondary-light whitespace-nowrap"}" title="${"OWNERS"}">OWNERS
					</span></div>
				<div class="${"flex space-x-2 items-center max-w-full"}"><div><span class="${"text-primary text-14px truncate"}" title="${"---"}">---</span></div></div></div>
			<div class="${"truncate p-2 space-x-2 rounded-[4px] flex items-center justify-between flex-col bg-secondary tablet:flex-row"}"><div class="${"flex justify-center items-center space-x-2"}"><span class="${"text-xs text-secondary-light whitespace-nowrap"}" title="${"TOTAL SUPPLY"}">TOTAL SUPPLY
					</span>
					<div><img${add_attribute("src", info, 0)} class="${"w-4 h-4"}" alt="${"more info"}"></div></div>
				<div class="${"flex space-x-2 items-center max-w-full"}"><div class="${"cursor-help max-w-full truncate"}" data-tooltipped="${""}" aria-describedby="${"tippy-tooltip-393"}"><span class="${"text-primary text-14px truncate"}" title="${"---"}">---</span></div></div></div></div>
		<div class="${"flex flex-col desktop:max-w-[500px] tablet:w-1/2"}"><div class="${"flex flex-wrap gap-3 items-center justify-center text-primary"}"><div><a href="${"https://www.discord.gg/EJltoquvN5"}" target="${"_blank"}" rel="${"noreferrer"}"><div class="${"flex items-center bg-secondary border border-secondary p-1.5 rounded"}"><img${add_attribute("src", discord, 0)} class="${"w-4 h-4"}" alt="${"discord app"}"></div></a></div>
				<div><a href="${"https://twitter.com/UkiyoNFT_"}" target="${"_blank"}" rel="${"noreferrer"}"><div class="${"flex items-center bg-secondary border border-secondary p-1.5 rounded"}">
							<img${add_attribute("src", twitter, 0)} class="${"w-4 h-4"}" alt="${"twitter app"}">

							<span class="${"px-[6px] py-[2px] ml-3 rounded bg-secondary font-medium text-xs text-primary"}">25.7K</span></div></a></div>
				<div><button class="${"flex items-center border-secondary bg-secondary border p-1.5 rounded"}">
						<img${add_attribute("src", binoculars, 0)} class="${"w-4 h-4"}" alt="${"binoculars"}">
						
						<span class="${"text-xs font-medium ml-2 text-primary"}">Watch</span>
						<span class="${"px-[6px] py-[2px] ml-3 rounded bg-secondary font-medium text-xs text-primary"}">352</span></button></div>

				<div><button class="${"h-fit flex items-center"}"><img${add_attribute("src", more, 0)} class="${"w-4 h-4 mr-2"}" alt="${"flag collection"}"></button></div></div>

			<div class="${"max-w-3xl text-primary mt-3"}"><span>Ukiyo is more than a brand, it\u2019s a lifestyle. A unique collection that brings a never
					before seen style to Solana \u{1F306}
				</span></div></div></div>

	<div class="${"flex relative"}"><div class="${"hidden tablet:flex tablet:flex-col sticky self-start bg-primary border-b border-secondary top-0 " + escape(toggle ? "min-w-fit" : "min-w-[13.5rem]", true)}">${validate_component(AccordionSlot, "AccordionSlot").$$render(
    $$result,
    {
      collapsed: toggle,
      toggle: () => {
        toggle = !toggle;
      }
    },
    {},
    {
      body: () => {
        return `<div class="${"flex flex-col"}" slot="${"body"}"><div class="${"flex flex-col relative my-2"}">

						<div class="${"flex flex-row justify-between items-center bg-transparent w-full h-14 cursor-pointer rounded-sm px-6 py-4 hover:bg-secondary"}"><div class="${"rounded-none flex flex-row justify-between items-center bg-transparent false w-full min-h-[48px] px-2 py-2 transition-all ease-in-out delay-300 hover:cursor-pointer"}"><div class="${"flex flex-row justify-start w-full"}"><div class="${"flex flex-col items-start"}"><span class="${"text-primary"}">Buy Now</span> <small class="${"text-primary"}"></small></div></div>
								<div class="${"mx-2 transition-transform ease-linear delay-100 "}"><label for="${"default-toggle"}" class="${"inline-flex relative items-center mb-4 cursor-pointer"}"><input type="${"checkbox"}" value="${""}" id="${"default-toggle"}" class="${"sr-only peer"}">
										<div class="${"w-11 h-6 bg-accent rounded-full peer peer-focus:ring-4 peer-focus:ring-gradient-primary dark:peer-focus:ring-gradient-secondary peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-secondary peer-checked:bg-accent"}"></div></label></div></div></div>

						${validate_component(AccordionSlot, "AccordionSlot").$$render(
          $$result,
          {
            active_bg: "transparent",
            toggled: () => {
            }
          },
          {},
          {
            body: () => {
              return `<div slot="${"body"}" class="${"text-primary flex flex-col gap-3 py-4"}">${validate_component(Dropdown, "Dropdown").$$render(
                $$result,
                {
                  id: "price",
                  border: "secondary",
                  items: ["SOL", "ETH", "USDT", "USDC"]
                },
                {},
                {}
              )}
								<div class="${"flex flex-col justify-between gap-3"}"><div class="${"flex justify-between"}">${validate_component(Input, "Input").$$render(
                $$result,
                {
                  border: "secondary",
                  placeholder: "Min",
                  round: "md",
                  size: "sm"
                },
                {},
                {}
              )}
										${validate_component(Input, "Input").$$render(
                $$result,
                {
                  border: "secondary",
                  placeholder: "Max",
                  round: "md",
                  size: "sm"
                },
                {},
                {}
              )}</div>
									<button class="${"bg-accent p-2 btn-accent w-full"}">Apply </button></div></div>`;
            },
            header: () => {
              return `<div slot="${"header"}" class="${"w-full"}">${validate_component(AccordionHeader, "AccordionHeader").$$render(
                $$result,
                {
                  title: "Price",
                  postfix: arrow_down,
                  show: "text",
                  toggleAccordionHeader: () => {
                  }
                },
                {},
                {}
              )}</div>`;
            }
          }
        )}

						${each(
          [
            "Version",
            "Background",
            "Clothes",
            "Eyes",
            "Head",
            "Mouth",
            "Neck",
            "Skin"
          ],
          (item) => {
            return `${validate_component(CollectionSidenavItem, "CollectionSidenav").$$render($$result, { title: item }, {}, {})}`;
          }
        )}</div></div>`;
      },
      header: () => {
        return `<div class="${"flex justify-between w-full h-fit m-h-[52px]"}" slot="${"header"}"><img${add_attribute("src", filter, 0)} alt="${"filter"}" class="${"w-4 h-4 mr-2"}">
					<img${add_attribute("src", arrow_left, 0)} alt="${"filter"}" class="${"w-4 h-4 mr-2 " + escape(!toggle ? "-rotate-180" : "", true)}"></div>`;
      }
    }
  )}</div>
		<div class="${"w-full"}"><div class="${"flex flex-col flex-wrap desktop:flex-row default:flex-nowrap laptop:justify-between items-center px-4 max-w-full pt-0"}"><div class="${"flex flex-wrap text-primary gap-4 w-full tablet:w-fit items-center overflow-x-auto"}">${each(
    [
      { img: stack, title: "Items" },
      { img: hammer, title: "Auction" },
      { img: heart_line, title: "Activity" },
      { title: "Analysis", img: vertical_bars }
    ],
    ({ img, title }, i) => {
      return `<span class="${"flex items-center gap-2 group cursor-pointer h-[52px] "}"><img${add_attribute("src", img, 0)} alt="${"stack"}" class="${"h-4"}">
							<h3 class="${"font-normal text-lg table:text-sm transition-[stroke,fill,color] ease-in-out duration-100"}"><span>${escape(title)}</span></h3>
						</span>`;
    }
  )}</div>

				<div class="${"flex flex-col tablet:flex-row gap-3 "}">${validate_component(Dropdown, "Dropdown").$$render(
    $$result,
    {
      id: "sort",
      border: "secondary",
      items: [
        "Recently Listed",
        "Price: Low to high",
        "Price: High to low",
        "ME Rarity: Common to Rare",
        "ME Rarity: Rare to Common"
      ]
    },
    {},
    {}
  )}

					<div class="${"text-primary flex justify-between gap-3 h-fit px-6 py-2 last:mr-5 border-2 rounded-lg border-secondary"}" role="${"group"}"><button type="${"button"}"><svg stroke="${"currentColor"}" fill="${"currentColor"}" stroke-width="${"0"}" viewBox="${"0 0 512 512"}" class="${"text-2xl"}" height="${"1em"}" width="${"1em"}" xmlns="${"http://www.w3.org/2000/svg"}" data-darkreader-inline-stroke="${""}" data-darkreader-inline-fill="${""}"><path d="${"M296 32h192c13.255 0 24 10.745 24 24v160c0 13.255-10.745 24-24 24H296c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24zm-80 0H24C10.745 32 0 42.745 0 56v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zM0 296v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm296 184h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H296c-13.255 0-24 10.745-24 24v160c0 13.255 10.745 24 24 24z"}"></path></svg></button>
						<button type="${"button"}" class="${"opacity-80"}"><svg stroke="${"currentColor"}" fill="${"currentColor"}" stroke-width="${"0"}" viewBox="${"0 0 512 512"}" class="${"text-2xl"}" height="${"1em"}" width="${"1em"}" xmlns="${"http://www.w3.org/2000/svg"}" data-darkreader-inline-stroke="${""}" data-darkreader-inline-fill="${""}"><path d="${"M149.333 56v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zm181.334 240v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm32-240v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24zm-32 80V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm-205.334 56H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm386.667-56H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm0 160H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zM181.333 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24z"}"></path></svg></button></div></div></div>

			<div class="${"flex flex-col min-w-max laptop:w-fit"}"><div class="${"flex flex-col laptop:flex-row items-center justify-between gap-2 tablet:gap-4 p-5"}"><div class="${"flex items-center gap-2 md:w-44 w-fit-content"}"><img${add_attribute("src", refresh, 0)} alt="${"refresh"}" class="${"h-3"}">
						<span class="${"text-xs text-accent"}">refreshed 3s ago</span></div>
					<div class="${"max-w-xs"}">${validate_component(Search, "Search").$$render($$result, { placeholder: "Search", bg: "secondary" }, {}, {})}</div>
					<div class="${"items-center gap-2 flex !duration-[0ms]"}"><button type="${"button"}" class="${"inline-flex justify-center items-center rounded-md text-primary w-[86px] h-8 md:h-9 text-sm !duration-[0ms] bg-secondary"}">Buy
						</button>
						<button type="${"button"}" class="${"inline-flex justify-center items-center rounded-md text-primary w-[86px] h-8 md:h-9 text-sm !duration-[0ms] bg-secondary"}">Bid
						</button></div></div>

				<div class="${"grid grid-cols-1 tablet:grid-cols-2 laptop-sm:grid-cols-3 desktop:grid-cols-5 large:grid-cols-6 gap-4 px-6"}">${each([1, 2, 3, 4, 5, 6, 7, 8], (item) => {
    return `<div class="${"w-full laptop-sm:w-[10.75rem]"}">${validate_component(NFTCard, "NftCard").$$render($$result, { bg: "primary" }, {}, {})}
						</div>`;
  })}</div></div></div></div></div>

${validate_component(Popup, "Popup").$$render(
    $$result,
    {
      toggle: toggleModel,
      onClosed: () => {
        toggleModel = false;
      }
    },
    {},
    {
      default: () => {
        return `<h2 class="${"text-primary text-xl font-bold"}">Report this collection</h2>
	<div class="${"text-primary font-bold"}">I think this collection is</div>
	${validate_component(Dropdown, "Dropdown").$$render(
          $$result,
          {
            id: "report_collection",
            border: "primary",
            items: [
              "Fake or possible scam",
              "Explicit and sensitive content",
              "IP infringement",
              "Derivative",
              "Other"
            ]
          },
          {},
          {}
        )}

	${validate_component(Textarea, "Textarea").$$render(
          $$result,
          {
            placeholder: "More details",
            border: "primary",
            round: "lg",
            size: "lg"
          },
          {},
          {}
        )}
	<button class="${"bg-accent p-2 btn-accent w-full"}">Report </button>`;
      }
    }
  )}`;
});
export {
  Page as default
};

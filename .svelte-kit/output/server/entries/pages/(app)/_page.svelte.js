import { c as create_ssr_component, e as escape, v as validate_component, d as add_attribute, f as each } from "../../../chunks/index.js";
import { D as Dropdown } from "../../../chunks/Dropdown.js";
import { s as solana } from "../../../chunks/solana.js";
import { f as fire, c as car } from "../../../chunks/car.js";
import { a as ape } from "../../../chunks/ape.js";
import { d as degods } from "../../../chunks/degods.js";
import "../../../chunks/arrow-down.js";
const ezu = "/_app/immutable/assets/ezu-440cc54c.png";
const HStackCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { description = "" } = $$props;
  let { action } = $$props;
  let { image = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  return `<div class="${"flex flex-col desktop:flex-row bg-primary rounded-[3rem] desktop:rounded-[6rem] border-4 border-x-brown border-y-brown w-full"}"><div class="${"flex flex-col w-full desktop:w-1/2 justify-start px-8 desktop:px-14 py-8 desktop:py-28 text-secondary-light gap-6"}"><div class="${"flex flex-col gap-2.5"}"><h2 class="${"text-gradient text-[2.5rem] py-2 leading-10 font-bold"}">${escape(title)}</h2>
			<p class="${"px-1 font-normal text-sm my-2"}">${escape(description)}</p></div>
		<button class="${"gradient-primary max-w-[16rem] min-h-[3rem] px-6 py-4 rounded-lg text-primary text-xl"}">${escape(action.title)}</button></div>
	<div style="${"background-image: url('" + escape(image, true) + "')"}" class="${"bg-center bg-cover bg-no-repeat w-full h-[320px] desktop:w-1/2 desktop:h-[560px] rounded-tr-0 desktop:rounded-tr-[6rem] rounded-br-[3rem] desktop:rounded-br-[6rem] rounded-bl-[3rem] desktop:rounded-bl-none"}"></div></div>`;
});
const HorizontalIndicator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { bg = "secondary" } = $$props;
  if ($$props.bg === void 0 && $$bindings.bg && bg !== void 0)
    $$bindings.bg(bg);
  return `<div class="${"w-12 tablet:w-28 h-1 rounded-full bg-" + escape(bg, true)}"></div>`;
});
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"flex flex-col justify-between gap-6 max-w-6xl mx-auto"}">${validate_component(HStackCard, "HStackCard").$$render(
    $$result,
    {
      title: "A Place for All Your Crypto Needs",
      description: "The first ever cross-chain mintable Ethereum NFT collection to launch on Magic Eden\u2019s\r\n	Launchpad. EZU is the sister project of Psychedelics Anonymous. Available to mint in $SOL\r\n	or $ETH.",
      action: {
        title: "Go to Launchpad",
        on_click: () => {
        }
      },
      image: ezu
    },
    {},
    {}
  )}

	<div class="${"flex justify-center gap-2 w-full"}">${validate_component(HorizontalIndicator, "HorizontalIndicator").$$render($$result, {}, {}, {})}
		${validate_component(HorizontalIndicator, "HorizontalIndicator").$$render($$result, {}, {}, {})}
		${validate_component(HorizontalIndicator, "HorizontalIndicator").$$render($$result, { bg: "accent" }, {}, {})}
		${validate_component(HorizontalIndicator, "HorizontalIndicator").$$render($$result, {}, {}, {})}</div></div>`;
});
const info_active = "/_app/immutable/assets/info-active-ce03758d.svg";
const heart = "/_app/immutable/assets/heart-3fff25f6.svg";
const cup = "/_app/immutable/assets/cup-a6206346.png";
const mp = "/_app/immutable/assets/mp-4657113d.png";
const NFTItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { icon = solana } = $$props;
  let { nft_img = ezu } = $$props;
  let { number } = $$props;
  let { bg = "tranparent" } = $$props;
  let { growth = "up" } = $$props;
  let { growth_value = 0 } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.nft_img === void 0 && $$bindings.nft_img && nft_img !== void 0)
    $$bindings.nft_img(nft_img);
  if ($$props.number === void 0 && $$bindings.number && number !== void 0)
    $$bindings.number(number);
  if ($$props.bg === void 0 && $$bindings.bg && bg !== void 0)
    $$bindings.bg(bg);
  if ($$props.growth === void 0 && $$bindings.growth && growth !== void 0)
    $$bindings.growth(growth);
  if ($$props.growth_value === void 0 && $$bindings.growth_value && growth_value !== void 0)
    $$bindings.growth_value(growth_value);
  return `<a class="${"grid grid-cols-[20px,68px,1fr] items-center gap-x-1 text-primary bg-" + escape(bg, true) + " rounded-md p-3 relative"}" href="${"/marketplace/simpl3r"}"><div class="${"font-bold justify-self-end mr-1"}">${escape(number)}</div>
	<div class="${"max-w-fit w-fit"}"><img draggable="${"false"}" loading="${"lazy"}" alt="${"..."}" class="${"rounded-full w-12 h-12"}"${add_attribute("src", nft_img, 0)}></div>
	<div class="${"flex flex-row justify-between gap-2 overflow-hidden text-secondary-light"}"><div class="${"flex flex-col justify-between"}"><h3 class="${"font-bold white-2 truncate text-primary"}">${escape(title)}</h3>
			<div class="${"flex items-center text-secondary-light font-light text-sm"}"><span>Floor</span>
				<img${add_attribute("src", icon, 0)} alt="${"solana"}" class="${"w-3 h-3"}">
				<div class="${"max-w-[60px] truncate"}"><span class="${"truncate"}">3.5</span></div></div></div>
		<div class="${"truncate group flex flex-col justify-between text-sm"}"><div class="${"flex flex-col gap-1 justify-between "}">${growth_value === 0 ? `<span class="${""}">--</span>` : `<span class="${"text-" + escape(growth === "up" ? "success" : "warning", true)}">${escape(growth === "up" ? "+" : "-")}${escape(growth_value)}%</span>`}
				<div class="${"flex gap-3 "}"><img${add_attribute("src", icon, 0)}${add_attribute("alt", icon, 0)} class="${"w-4 h-4"}">
					<span class="${"truncate"}">12.9K</span></div></div>
			<div class="${"hidden group-hover:block text-primary absolute -bottom-3 right-2 rounded-lg bg-secondary border-2 border-primary px-4 py-2"}">8,598.662794920001
			</div></div></div></a>`;
});
const NFTCardMinimal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { user = "" } = $$props;
  let { nft = fire } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  if ($$props.nft === void 0 && $$bindings.nft && nft !== void 0)
    $$bindings.nft(nft);
  return `<div class="${"mx-auto flex flex-col relative w-full rounded-xl transition-all ease-in-out hover:scale-90 cursor-pointer border-2 border-secondary pb-7 gap-3"}"><img draggable="${"false"}" class="${"rounded-xl w-full"}" loading="${"lazy"}" alt="${"..."}"${add_attribute("src", nft, 0)}>

	<div class="${"w-full text-sm whitespace-nowrap flex flex-col items-center rounded-b-xl gap-2"}"><div class="${"flex flex-col gap-1 items-center"}"><span class="${"text-primary"}">${escape(title)}</span>
			<span class="${"text-accent flex items-center space-x-2 text-xs"}">${escape(user)}</span></div>
		<div>${slots.default ? slots.default({}) : ``}</div></div></div>`;
});
const ButtonLiquid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "" } = $$props;
  let { active = false } = $$props;
  let { on_click = () => {
  } } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.on_click === void 0 && $$bindings.on_click && on_click !== void 0)
    $$bindings.on_click(on_click);
  return `<div class="${"relative group"}"><button class="${"rounded-full px-4 py-2 w-full " + escape(active ? "gradient-primary" : "", true)}">${escape(text)}</button>
	<div class="${"-z-10 w-32 absolute -left-24 top-0 bottom-0 rounded-full px-6 py-2 group-hover:gradient-primary transition-all duration-1000 group-hover:translate-x-12 group-hover:-left-12"}"></div></div>`;
});
const Heading3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "" } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  return `<h3 class="${"font-bold text-[1.75rem] leading-9 text-gradient"}">${escape(text)}</h3>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-54thjw::-webkit-scrollbar{display:none}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const randomNumber = (min = 1, max = 24) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  let active_button = "next";
  $$result.css.add(css);
  return `<div class="${"flex flex-col gap-14 svelte-54thjw"}">${validate_component(Carousel, "Carousel").$$render($$result, {}, {}, {})}

	<div class="${"flex flex-col flex-wrap md:flex-row mb-6 gap-24 justify-center md:justify-start p-4 h-max svelte-54thjw"}">
		<div class="${"flex flex-col gap-6 svelte-54thjw"}"><div class="${"flex flex-col laptop:flex-row gap-3 justify-between svelte-54thjw"}"><div class="${"flex flex-col tablet:flex-row justify-between items-center text-primary gap-4 svelte-54thjw"}">${validate_component(Heading3, "Heading3").$$render($$result, { text: "Popular Collections" }, {}, {})}
					<div class="${"flex w-full tablet:w-fit svelte-54thjw"}">${validate_component(Dropdown, "Dropdown").$$render(
    $$result,
    {
      id: "time_history",
      items: [
        "Last 5 minutes",
        "Last 15 minutes",
        "Last 1 hour",
        "Last 6 hours",
        "Last 24 hours",
        "Last 7 days",
        "Last 30 days"
      ]
    },
    {},
    {}
  )}</div></div>
				<a class="${"flex justify-center items-center rounded-md border-2 border-secondary px-4 text-primary svelte-54thjw"}" href="${"/marketplace/popular-collections"}">See All
				</a></div>
			<div class="${"grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 large:grid-cols-6 x-large:grid-cols-4 gap-4 svelte-54thjw"}">${each(
    [
      "Vandals",
      "Degods",
      "Dummies",
      "Weeping",
      "Froots",
      "Degenerate",
      "Rakkudos",
      "Mischievous",
      "Monquiat",
      "Shadowy",
      "Okay Bears",
      "Infected Mob"
    ],
    (item, i) => {
      return `${validate_component(NFTItem, "NftItem").$$render(
        $$result,
        {
          title: item,
          number: i + 1,
          growth: i % 4 === 0 ? "up" : "down",
          growth_value: i % 7 === 0 ? 0 : randomNumber(20, 350),
          icon: solana,
          nft_img: ezu
        },
        {},
        {}
      )}`;
    }
  )}</div></div>

		
		<div class="${"flex flex-col gap-6 svelte-54thjw"}"><div class="${"flex flex-col gap-3 tablet:flex-row justify-between svelte-54thjw"}"><div class="${"flex flex-col tablet:flex-row justify-between items-center gap-4 svelte-54thjw"}">${validate_component(Heading3, "Heading3").$$render($$result, { text: "Launchpad drops" }, {}, {})}
					<div class="${"text-primary flex overflow-hidden flex-row flex-wrap gap-3 tablet:flex-nowrap tablet:rounded-full tablet:border-2 border-secondary text-sm svelte-54thjw"}">${validate_component(ButtonLiquid, "ButtonLiquid").$$render(
    $$result,
    {
      text: "Next 7 days",
      active: active_button === "next",
      on_click: () => {
        active_button = "next";
      }
    },
    {},
    {}
  )}
						${validate_component(ButtonLiquid, "ButtonLiquid").$$render(
    $$result,
    {
      text: "Comming Soon",
      active: active_button === "comming",
      on_click: () => {
        active_button = "comming";
      }
    },
    {},
    {}
  )}
						${validate_component(ButtonLiquid, "ButtonLiquid").$$render(
    $$result,
    {
      text: "Live",
      active: active_button === "live",
      on_click: () => {
        active_button = "live";
      }
    },
    {},
    {}
  )}</div></div>
				<a class="${"flex justify-center items-center rounded-md border-2 border-secondary px-6 py-2 text-primary svelte-54thjw"}" href="${"/marketplace/popular-collections"}">See All
				</a></div>
			<div class="${"grid grid-cols-1 tablet:grid-cols-3 desktop:grid-cols-4 large:grid-cols-6 x-large:grid-cols-8 gap-4 svelte-54thjw"}">${each(["Blocksmit Labs", "Part of Me", "Save Bear"], (title, i) => {
    return `${validate_component(NFTCardMinimal, "NftCardMinimal").$$render(
      $$result,
      {
        title,
        user: "@" + title.replaceAll(" ", "").toLocaleLowerCase()
      },
      {},
      {
        default: () => {
          return `<div class="${"flex flex-col gap-3 svelte-54thjw"}">${i === 1 ? `<span class="${"bg-secondary text-success rounded-full px-6 py-1 svelte-54thjw"}">Live </span>` : `<span class="${"bg-secondary text-primary rounded-full px-3 py-1 svelte-54thjw"}">${escape(randomNumber())}d ${escape(randomNumber())}h ${escape(randomNumber())}m
								</span>`}</div>
					`;
        }
      }
    )}`;
  })}</div></div>

		
		<div class="${"flex flex-col gap-6 svelte-54thjw"}"><div class="${"flex justify-between svelte-54thjw"}">${validate_component(Heading3, "Heading3").$$render($$result, { text: "Top upvoted drops" }, {}, {})}
				<a class="${"flex justify-center items-center rounded-md border-2 border-secondary px-4 text-primary svelte-54thjw"}" href="${"/marketplace/popular-collections"}">See All
				</a></div>

			<div class="${"grid grid-cols-1 tablet:grid-cols-3 desktop:grid-cols-4 large:grid-cols-6 x-large:grid-cols-8 gap-4 svelte-54thjw"}">${each(
    [
      { title: "Infinite Drive Car", nft: car },
      { title: "NFT Leguez", nft: fire },
      { title: "MechaFightClub", nft: ape }
    ],
    ({ title, nft }) => {
      return `${validate_component(NFTCardMinimal, "NftCardMinimal").$$render(
        $$result,
        {
          nft,
          title,
          user: title.replaceAll(" ", "").toLocaleLowerCase()
        },
        {},
        {
          default: () => {
            return `<div class="${"flex gap-8 font-light text-xs svelte-54thjw"}"><span class="${"bg-secondary text-accent rounded-full px-3 py-1 flex gap-2.5 svelte-54thjw"}"><img${add_attribute("src", heart, 0)} alt="${"favorite"}" class="${"w-4 h-4 svelte-54thjw"}">
								<span class="${"svelte-54thjw"}">8435</span></span>
							<span class="${"bg-secondary text-primary rounded-full px-3 py-1 svelte-54thjw"}">Sep 23, 05:00</span></div>
					`;
          }
        }
      )}`;
    }
  )}</div></div>

		
		<div class="${"flex flex-col gap-6 svelte-54thjw"}"><div class="${"flex justify-between svelte-54thjw"}"><div class="${"flex items-center gap-3 svelte-54thjw"}"><h3 class="${"mb-0 font-bold text-[28px] leading-9 text-gradient svelte-54thjw"}">Frens are watching</h3>
					<img${add_attribute("src", info_active, 0)} alt="${"info"}" class="${"w-6 h-6 svelte-54thjw"}"></div>

				<a class="${"flex justify-center items-center rounded-md border-2 border-secondary px-4 text-primary svelte-54thjw"}" href="${"/marketplace/popular-collections"}">See All
				</a></div>
			<div class="${"grid grid-cols-1 tablet:grid-cols-3 desktop:grid-cols-4 large:grid-cols-6 x-large:grid-cols-8 gap-4 svelte-54thjw"}">${each(
    [
      { title: "Dragon Boms", nft: degods },
      { title: "MechaFight Club", nft: cup },
      { title: "Monkez Planet", nft: mp }
    ],
    ({ title, nft }) => {
      return `${validate_component(NFTCardMinimal, "NftCardMinimal").$$render(
        $$result,
        {
          title,
          nft,
          user: title.replaceAll(" ", "").toLocaleLowerCase()
        },
        {},
        {
          default: () => {
            return `<div class="${"flex gap-8 font-light text-xs svelte-54thjw"}"><span class="${"bg-secondary text-primary rounded-full px-3 py-1 svelte-54thjw"}">${escape(randomNumber(400, 5233))} watchers</span></div>
					`;
          }
        }
      )}`;
    }
  )}</div></div></div>
</div>`;
});
export {
  Page as default
};

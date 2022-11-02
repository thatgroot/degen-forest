import { c as create_ssr_component, e as escape, d as add_attribute, f as each, v as validate_component } from "../../../../../chunks/index.js";
import { A as Accordion } from "../../../../../chunks/Accordion.js";
import { h as heart_line } from "../../../../../chunks/heart-line.js";
import { l as logo } from "../../../../../chunks/logo-icon.js";
import { C as ConnectWallet, r as refresh } from "../../../../../chunks/ConnectWallet.js";
import { s as search } from "../../../../../chunks/search2.js";
import { s as solana } from "../../../../../chunks/solana.js";
import { p as price_history } from "../../../../../chunks/price-history.js";
import { c as copy } from "../../../../../chunks/copy.js";
import { t as twitter } from "../../../../../chunks/twitter.js";
import { e as eth } from "../../../../../chunks/eth.js";
import { D as Dropdown } from "../../../../../chunks/Dropdown.js";
import { I as Input } from "../../../../../chunks/Input.js";
import { P as Popup } from "../../../../../chunks/Popup.js";
import { A as AccordionSlot, N as NFTCard } from "../../../../../chunks/NFTCard.js";
import "../../../../../chunks/AccordionHeader.js";
import "../../../../../chunks/Tab.js";
import "../../../../../chunks/arrow-down.js";
import "../../../../../chunks/stack.js";
import "../../../../../chunks/info.js";
import "../../../../../chunks/ListItem.js";
const share = "/_app/immutable/assets/share-ede009b5.svg";
const user = "/_app/immutable/assets/user-cfeaa768.svg";
const solscan = "/_app/immutable/assets/solscan-6968b0c6.ico";
const solana_fm = "/_app/immutable/assets/solanafm-e988932d.svg";
const paper = "/_app/immutable/assets/paper-bd7b14d6.svg";
const guard = "/_app/immutable/assets/guard-7d5e8681.svg";
const energy = "/_app/immutable/assets/energy-eb3165c7.svg";
const compass = "/_app/immutable/assets/compass-534172d8.svg";
const facebook = "/_app/immutable/assets/facebook-dc8f3817.svg";
const telegram = "/_app/immutable/assets/telegram-6ce56920.svg";
const ContextMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon = share } = $$props;
  let { title = "" } = $$props;
  let { dropdown_items } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.dropdown_items === void 0 && $$bindings.dropdown_items && dropdown_items !== void 0)
    $$bindings.dropdown_items(dropdown_items);
  return `
<div class="${"relative inline-block text-left"}"><div><button class="${"flex items-center justify-center gap-2 bg-transparent"}"><span>${escape(title)}</span>
			<img class="${"fill-pink"}"${add_attribute("src", icon, 0)} alt="${"..."}"></button></div>

	
	<div id="${"context_menu"}" class="${"absolute hidden right-0 z-10 w-56 origin-top-right bg-primary rounded-md p-3"}"><div class="${"flex flex-col gap-3"}" role="${"none"}">${each(dropdown_items, ({ text, icon: icon2, click }) => {
    return `<button class="${"p-2 hover:bg-secondary"}"><div class="${"flex gap-2"}"><img${add_attribute("src", icon2, 0)} class="${"w-6 h-6"}" alt="${"share on " + escape(text, true)}">
						<span class="${"text-accent"}">${escape(text)}</span></div>
				</button>`;
  })}</div></div></div>`;
});
const tag = "/_app/immutable/assets/tag-4ce076fc.svg";
const clock = "/_app/immutable/assets/clock-6a35cc22.svg";
const Calendar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { toggle_calendar = () => {
  } } = $$props;
  if ($$props.toggle_calendar === void 0 && $$bindings.toggle_calendar && toggle_calendar !== void 0)
    $$bindings.toggle_calendar(toggle_calendar);
  return `<div id="${"offer_calendar"}" class="${"md:p-8 p-5 hidden bg-primary border border-secondary rounded-lg absolute bottom-12 left-0 right-0"}"><div class="${"px-4 flex items-center justify-between"}"><span tabindex="${"0"}" class="${"focus:outline-none text-base font-bold dark:text-gray-100 text-gray-800"}">October 2020
		</span>
		<div class="${"flex items-center"}"><button aria-label="${"calendar backward"}" class="${"focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"icon icon-tabler icon-tabler-chevron-left"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" fill="${"none"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"><path stroke="${"none"}" d="${"M0 0h24v24H0z"}" fill="${"none"}"></path><polyline points="${"15 6 9 12 15 18"}"></polyline></svg></button>
			<button aria-label="${"calendar forward"}" class="${"focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"icon icon-tabler icon-tabler-chevron-right"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" fill="${"none"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"><path stroke="${"none"}" d="${"M0 0h24v24H0z"}" fill="${"none"}"></path><polyline points="${"9 6 15 12 9 18"}"></polyline></svg></button></div></div>
	<div class="${"flex items-center flex-col gap-2 justify-between pt-12 overflow-x-auto"}"><table class="${"w-full"}"><thead><tr>${each(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], (day) => {
    return `<th><div class="${"w-full flex justify-center"}"><p class="${"text-base font-medium text-center text-gray-800 dark:text-gray-100"}">${escape(day)}
								</p></div>
						</th>`;
  })}</tr></thead>
			<tbody><tr>${each(["", "", "", 1, 2, 3, 4], (date) => {
    return `<td class="${"p-2 rounded-full hover:bg-accent"}"><div class="${"px-2 py-2 cursor-pointer flex w-full justify-center"}"><p class="${"text-base text-gray-500 dark:text-gray-100"}">${escape(date)}</p></div>
						</td>`;
  })}</tr>
				<tr>${each([5, 6, 7, 8, 9, 10, 11], (date) => {
    return `<td class="${"p-2 rounded-full hover:bg-accent"}"><div class="${"px-2 py-2 cursor-pointer flex w-full justify-center"}"><p class="${"text-base text-gray-800 dark:text-gray-100"}">${escape(date)}</p></div>
						</td>`;
  })}</tr>
				<tr>${each([12, 13, 14, 15, 16, 17, 18], (date) => {
    return `<td class="${"p-2 rounded-full hover:bg-accent"}"><div class="${"px-2 py-2 cursor-pointer flex w-full justify-center"}"><p class="${"text-base text-gray-800 dark:text-gray-100"}">${escape(date)}</p></div>
						</td>`;
  })}</tr>
				<tr>${each([19, 20, 21, 22, 23, 24, 25], (date) => {
    return `<td class="${"p-2 rounded-full hover:bg-accent"}"><div class="${"px-2 py-2 cursor-pointer flex w-full justify-center"}"><p class="${"text-base text-gray-800 dark:text-gray-100"}">${escape(date)}</p></div>
						</td>`;
  })}</tr>
				<tr>${each([26, 27, 28, 29, 30, 31, ""], (date) => {
    return `<td class="${"p-2 rounded-full hover:bg-accent"}"><div class="${"px-2 py-2 cursor-pointer flex w-full justify-center"}"><p class="${"text-base text-gray-500 dark:text-gray-100"}">${escape(date)}</p></div>
						</td>`;
  })}</tr></tbody></table>

		<div class="${"w-full"}">${validate_component(Input, "Input").$$render(
    $$result,
    {
      border: "secondary",
      round: "md",
      prefix: clock,
      placeholder: "hh:mm"
    },
    {},
    {}
  )}</div></div></div>`;
});
const DropdownSlot = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let { border = "tranparent" } = $$props;
  let { bg = "tranparent" } = $$props;
  let { rounded = "md" } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.bg === void 0 && $$bindings.bg && bg !== void 0)
    $$bindings.bg(bg);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  return `<div class="${"relative h-full w-full"}"><button class="${"text-primary bg-" + escape(bg, true) + " h-full w-full border-2 border-" + escape(border, true) + " font-medium rounded-" + escape(rounded, true) + " text-sm px-4 py-2 text-center flex items-center justify-between"}" type="${"button"}">${slots.active ? slots.active({}) : ``}</button>

	
	<div${add_attribute("id", id, 0)} class="${"z-[99999] w-full bg-primary border-2 border-secondary rounded-md divide-y divide-gray-100 shadow absolute top-[110%] right-0 hidden"}"><div class="${"p-3 space-y-1 text-sm text-primary"}">${slots.items ? slots.items({}) : ``}</div></div></div>`;
});
const MakeOffer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let toggle = false;
  let connect_wallet = false;
  const toggle_calendar = () => {
    const offer_calendar = document.querySelector("#offer_calendar");
    offer_calendar == null ? void 0 : offer_calendar.classList.toggle("hidden");
  };
  return `<div class="${"flex flex-col text-primary bg-secondary p-4 rounded-md gap-3"}"><div class="${"flex flex-col gap-2"}"><span class="${"mb-1 fs-80"}">Current Price</span>
		<div class="${"flex gap-2"}"><img${add_attribute("src", tag, 0)} alt="${"tag"}">
			<div class="${"cursor-help"}"><span class="${"text-primary price"}">15 SOL</span><span style="${"color: rgb(0, 209, 129);"}">\u25B2
				</span></div></div></div>
	
	<div class="${"flex flex-col"}"><div class="${"w-full flex flex-col gap-2"}">${validate_component(DropdownSlot, "DropdownSlot").$$render(
    $$result,
    {
      bg: "primary",
      id: "currency_selection",
      border: "primary",
      rounded: "md"
    },
    {},
    {
      items: () => {
        return `<div slot="${"items"}">${each(["sol", "eth"], (currency) => {
          return `<div class="${"grid grid-cols-[20px,1fr,22px] items-center gap-x-2.5 px-3 py-2 border-primary border rounded hover:bg-secondary cursor-pointer"}"><img class="${"w-4 h-4"}"${add_attribute("src", currency === "sol" ? solana : eth, 0)} alt="${"..."}">
							<div class="${"flex flex-col"}"><span class="${"text-primary-2 text-sm"}">Pay in ${escape(currency)}</span>
								<span class="${"flex items-center text-xxs gap-x-1"}"><span class="${"text-light-gray-500"}">Pay with connected wallet</span>
									<b>\u2022</b>
									<span class="${"text-pink-primary font-bold"}">Fastest</span>
								</span></div>
						</div>`;
        })}</div>`;
      },
      active: () => {
        return `<div slot="${"active"}" class="${"w-full "}"><div class="${"grid grid-cols-[20px,1fr,22px] text-sm items-center gap-x-2.5 px-3 py-2"}"><img class="${"w-4 h-4"}"${add_attribute("src", solana, 0)} alt="${"..."}">
						<div class="${"flex flex-col items-start"}"><span class="${"text-primary-2 text-sm"}">Pay in solana</span>
							<span class="${"flex items-center text-xxs gap-x-1"}"><span class="${"text-light-gray-500"}">Pay with connected wallet</span>
								<b>\u2022</b>
								<span class="${"text-pink-primary font-bold"}">Fastest</span></span></div></div></div>`;
      }
    }
  )}

			<div class="${"flex justify-between gap-2"}"><button class="${"btn-accent hover:bg-accent px-6 py-3 w-full"}"><span>Buy now</span></button>

				${validate_component(ConnectWallet, "ConnectWallet").$$render(
    $$result,
    {
      toggle: connect_wallet,
      onClosed: () => {
        connect_wallet = false;
      }
    },
    {},
    {}
  )}
				${validate_component(Popup, "Popup").$$render(
    $$result,
    {
      toggle,
      bg: "primary",
      rounded: "lg",
      onClosed: () => {
        toggle = false;
      }
    },
    {},
    {
      default: () => {
        return `<div class="${"flex flex-col max-w-md gap-2"}"><span class="${"text-accent "}">When you make an offer, the funds are kept in your bidding wallet to allow you to make
							multiple offers using the same funds. To view, deposit, or withdraw from your bidding
							wallet, please visit the &#39;Offers Made&#39; page of your Magic Eden profile.
						</span>

						<button type="${"button"}" class="${"flex flex-col justify-center items-center rounded-md btn-accent px-4 py-6"}"><span class="${"font-bold"}">Fund the offer</span>
							<p class="${"text-primary"}">Transfer money from your main wallet to the bidding wallet account.
							</p></button>

						

						<form class="${"flex flex-col gap-2"}">${validate_component(Input, "Input").$$render(
          $$result,
          {
            placeholder: "16.7",
            border: "secondary",
            round: "md"
          },
          {},
          {}
        )}
							<div class="${"relative"}">${validate_component(Dropdown, "Dropdown").$$render(
          $$result,
          {
            id: "time_period",
            items: ["1 day", "3 days", "7 days", "1 month", "custom"],
            border: "secondary",
            rounded: "md",
            onclick: () => {
              toggle_calendar();
            }
          },
          {},
          {}
        )}

								
								${validate_component(Calendar, "Calendar").$$render($$result, { toggle_calendar }, {}, {})}</div>

							<button class="${"flex items-center btn-accent px-6 bg-accent py-3 w-full"}"><span>Make Offer</span></button>

							<div class="${"py-2 flex flex-col gap-2 text-accent"}"><span>Not enough balance in the wallet</span>
								<span>Price must be lower than listing price </span></div>

							<div class="${"flex flex-col gap-3 text-primary"}"><div class="${"flex justify-between text-accent"}"><span>Buy now price</span>
									<span>16.5 SOL</span></div>
								<div class="${"flex justify-between"}"><span>Minimum offer (50%)</span>
									<span>8.25 SOL</span></div>
								<div class="${"flex justify-between"}"><span>Main wallet balance</span>
									<span>0 SOL</span></div>
								<div class="${"flex justify-between"}"><span>Bidding wallet balance</span>
									<span>0 SOL</span></div></div>

							<div class="${"border-2 border-secondary"}"></div>

							<div class="${"flex flex-col gap-3 text-primary"}"><div class="${"flex justify-between text-accent"}"><span>New main wallet balance <span>-16.50SOL</span></span>
									<span>-16.5 SOL</span></div>
								<div class="${"flex justify-between"}"><span>New bidding wallet balance <span>16.50SOL</span></span>
									<span>+16.50SOL</span></div>
								<div class="${"flex justify-between text-accent text-xxs"}"><span>By selecting &quot;Make offer&quot;, you agree to Terms of Service</span></div></div></form></div>`;
      }
    }
  )}
				<button type="${"button"}" class="${"btn-accent hover:bg-accent px-6 py-3 w-full"}">Make an offer</button></div></div>

		<p class="${"mt-2 text-accent"}">By clicking &quot;Make an offer&quot;, you agree to the
			<a href="${"/terms-of-service.pdf"}" target="${"_blank"}" class="${"text-light"}" rel="${"noreferrer"}"><span class="${"text-pink-light"}">Degen Forest Terms of Service</span></a></p></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"flex flex-col items-center mx-auto gap-4 mt-12 w-full"}"><div class="${"flex flex-col laptop:flex-row gap-6 w-full"}"><div class="${"flex flex-col w-2/3 gap-4"}"><img draggable="${"false"}" loading="${"lazy"}" class="${"rounded-lg"}" alt="${"..."}" src="${"https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https%3A%2F%2Fbafybeifwxtfyan65e5oxsef5mqvyyh36euguu2a72kvooy5y26gplxwi2i.ipfs.nftstorage.link%2F7337.png%3Fext%3Dpng"}">

			<div class="${"flex flex-col border-2 border-secondary roundelg"}">
				${validate_component(Accordion, "Accordion").$$render(
    $$result,
    {
      header: {
        size: "md",
        title: "Price history",
        subtitle: "............",
        prefix: heart_line,
        show: "both"
      }
    },
    {},
    {
      default: () => {
        return `<img${add_attribute("src", price_history, 0)} alt="${"Price History Graph"}">`;
      }
    }
  )}</div>
			</div>
		<div class="${"flex flex-col gap-6 w-full"}"><div class="${"flex justify-between h-fit px-4 items-end"}"><div class="${"mt-5 mt-lg-0"}"><div class="${"flex text-primary"}"><h1 class="${"m-0 text-xl"}">Bounty Hunter #7337</h1>
						<div class="${"px-3 flex justify-between space-x-2"}"><div><span class="${"flex items-center justify-center border-secondary w-fit-content gap-[6px] text-primary-2 text-xs roundesm px-1.5 h-5"}"><img${add_attribute("src", logo, 0)} alt="${"..."}">
									<span>1324</span>
									<span>/8008</span></span></div></div></div>
					<div class="${"flex align-items-center gap-4 text-accent"}"><a class="${""}" href="${"/marketplace/simpl3r"}"><span class="${"fs-80 truncate mr-1 text-base"}">Simpl3r: Bounty Hunters</span></a>
						<div class="${"w-12"}">${validate_component(ContextMenu, "ContextMenu").$$render(
    $$result,
    {
      title: "Share",
      dropdown_items: [
        {
          text: "Copy to Clipboard",
          icon: copy,
          click: () => {
          }
        },
        {
          text: "Share on Facebook",
          icon: facebook,
          click: () => {
          }
        },
        {
          text: "Share on Twitter",
          icon: twitter,
          click: () => {
          }
        },
        {
          text: "Share on Telegram",
          icon: telegram,
          click: () => {
          }
        }
      ]
    },
    {},
    {}
  )}
							</div></div></div>
				<div class="${"flex h-full items-end"}"><img${add_attribute("src", refresh, 0)} alt="${"..."}"></div></div>
			${validate_component(MakeOffer, "MakeOffer").$$render($$result, {}, {}, {})}

			<div class="${"border border-secondary rounded-lg p-2"}">${validate_component(AccordionSlot, "AccordionSlot").$$render($$result, { border: "transparent" }, {}, {
    body: () => {
      return `<div slot="${"body"}" class="${"text-primary bg-secondary my-2 p-2 rounded-sm"}">Evolve, Plug in, Switch on, Join the Hunt &amp; Stake your Claim on the Future - Now. Bounty
						Hunters are a collection of 8000 unique NFT&#39;s on the solana blockchain Attributes
					</div>`;
    },
    header: () => {
      return `<div slot="${"header"}" class="${"flex text-primary gap-2"}"><img${add_attribute("src", user, 0)} alt="${"..."}">
						<span>About Simpl3r: Bounty Hunters </span></div>`;
    }
  })}</div>

			<div class="${"border border-secondary rounded-lg p-2"}">${validate_component(AccordionSlot, "AccordionSlot").$$render($$result, { border: "transparent" }, {}, {
    body: () => {
      return `<div slot="${"body"}" class="${"text-primary bg-secondary my-2 p-2 rounded-sm"}"><div class="${"grid grid-cols-3 gap-2"}">${each([1, 2, 3], (item) => {
        return `<div class="${"flex flex-col bg-primary rounded-md p-2"}"><div class="${"flex justify-end gap-3"}"><img${add_attribute("src", search, 0)} class="${"w-3"}" alt="${"..."}">
										<img${add_attribute("src", copy, 0)} class="${"w-3"}" alt="${"copy"}"></div>
									<div class="${"flex flex-row"}"><span title="${"Backgrounds"}" class="${"text-accent text-xs"}">Backgrounds</span></div>
									<span title="${"Red"}">Red</span>
									<span class="${"text-accent"}">12% have this trait</span>
								</div>`;
      })}</div></div>`;
    },
    header: () => {
      return `<div slot="${"header"}" class="${"flex text-primary gap-2"}"><img${add_attribute("src", guard, 0)} alt="${"..."}">
						<span>Attributes </span></div>`;
    }
  })}</div>

			<div class="${"border border-secondary rounded-lg p-2"}">${validate_component(AccordionSlot, "AccordionSlot").$$render($$result, { border: "transparent" }, {}, {
    body: () => {
      return `<div slot="${"body"}" class="${"text-primary my-2 p-2 rounded-sm"}"><div class="${"flex flex-col gap-2"}">${each(["Mint Address", "Owner", "Creator", "Royalties", "	Listing/Bidding/Cancel"], (item) => {
        return `<div class="${"flex justify-between p-2"}"><span>${escape(item)}</span>
									<span class="${"flex items-center gap-2"}"><img class="${"w-4 h-4"}"${add_attribute("src", solana_fm, 0)} alt="${"..."}">
										<img class="${"w-4 h-4"}"${add_attribute("src", solscan, 0)} alt="${"..."}">
										<img class="${"w-4 h-4"}"${add_attribute("src", solana, 0)} alt="${"..."}">
										<span>EYFYp ... JNE </span></span>
								</div>`;
      })}</div></div>`;
    },
    header: () => {
      return `<div slot="${"header"}" class="${"flex text-primary gap-2"}"><img${add_attribute("src", paper, 0)} alt="${"..."}">
						<span>Details </span></div>`;
    }
  })}</div></div></div>

	<div class="${"flex flex-col gap-3 w-full"}"><div class="${"border border-secondary rounded-lg p-2"}">${validate_component(AccordionSlot, "AccordionSlot").$$render($$result, { border: "transparent" }, {}, {
    body: () => {
      return `<div slot="${"body"}" class="${"text-primary bg-secondary my-2 p-2 rounded-sm"}">no offers yet</div>`;
    },
    header: () => {
      return `<div slot="${"header"}" class="${"flex text-primary gap-2"}"><img${add_attribute("src", energy, 0)} alt="${"..."}">
					<span>No Offers yet </span></div>`;
    }
  })}</div>
		

		<div class="${"border border-secondary rounded-lg p-2"}"><div class="${"hidden tablet:block overflow-x-auto rounded-lg border-2 border-secondary max-w-[100vw]"}">${validate_component(AccordionSlot, "AccordionSlot").$$render($$result, { border: "transparent" }, {}, {
    body: () => {
      return `<div slot="${"body"}"><table class="${"w-full text-primary"}"><thead class="${"text-xs border-b-2 border-secondary"}"><tr class="${"text-primary"}"><th class="${"py-3 px-6 text-start"}">Image</th>
									<th class="${"py-3 px-6 text-start"}">Name</th>
									<th class="${"py-3 px-6 text-start"}">Transaction ID</th>
									<th class="${"py-3 px-6 text-start"}">Transaction Type</th>
									<th class="${"py-3 px-6 text-start"}">Time</th>
									<th class="${"py-3 px-6 text-start"}">Total Amount</th>
									<th class="${"py-3 px-6 text-start"}">Buyer</th>
									<th class="${"py-3 px-6 text-start"}">Seller</th></tr></thead>
							<tbody>${each([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (item) => {
        return `<tr class="${"text-start border-b-2 border-secondary"}"><td class="${"py-4 px-6 text-start"}"><img class="${"w-10"}"${add_attribute("src", "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://arweave.net/d-N5n-1m64rGw2GQ_1WW1xZB5UN2FmT28Tq2a4kizP0", 0)} alt="${"..."}"></td>
										<td class="${"py-4 text-start"}">Ukiyan #568 </td>
										<td class="${"py-4 text-start"}">562nh ... 4hq </td>
										<td class="${"py-4 text-start"}">Listing (ME v2) </td>
										<td class="${"py-4 text-start"}">2 minutes ago </td>
										<td class="${"py-4 text-start"}">10.95 SOL </td>
										<td></td>
										<td>BAp2s ... dDC </td>
									</tr>`;
      })}</tbody></table></div>`;
    },
    header: () => {
      return `<div slot="${"header"}" class="${"flex text-primary gap-2"}"><img${add_attribute("src", heart_line, 0)} alt="${"..."}">
						<span>Activities </span></div>`;
    }
  })}</div></div>

		
		<div class="${"border border-secondary rounded-lg p-2"}">${validate_component(AccordionSlot, "AccordionSlot").$$render($$result, { border: "transparent" }, {}, {
    body: () => {
      return `<div slot="${"body"}" class="${"text-primary text-sm bg-transparent my-2 p-2 rounded-sm"}">
					<div class="${"grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-3"}">${each([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (item) => {
        return `${validate_component(NFTCard, "NftCard").$$render($$result, {}, {}, {})}`;
      })}</div></div>`;
    },
    header: () => {
      return `<div slot="${"header"}" class="${"flex text-primary gap-2"}"><img${add_attribute("src", compass, 0)} alt="${"..."}">
					<span>More from this collection </span></div>`;
    }
  })}</div></div></div>`;
});
export {
  Page as default
};

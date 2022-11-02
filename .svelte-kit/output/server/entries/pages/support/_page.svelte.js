import { c as create_ssr_component, d as add_attribute, v as validate_component, f as each, e as escape } from "../../../chunks/index.js";
import { l as logo, F as Footer } from "../../../chunks/Footer.js";
import { a as avatar } from "../../../chunks/avatar.js";
import { S as Search } from "../../../chunks/search.js";
import "../../../chunks/search2.js";
const goTo = "/_app/immutable/assets/link-d31035fe.svg";
const plus = "/_app/immutable/assets/plus1-3e7de0f7.svg";
const started = "/_app/immutable/assets/started-c6df19fb.svg";
const buying = "/_app/immutable/assets/buying-1507d71c.svg";
const selling = "/_app/immutable/assets/selling-311c45cf.svg";
const listed = "/_app/immutable/assets/listing-a828cedb.svg";
const promotions = "/_app/immutable/assets/promotions-dba51530.svg";
const trust = "/_app/immutable/assets/trust-de834dce.svg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cardData = [
    {
      icon: started,
      title: "Getting Started",
      desc: "All the basics so you can trade NFTs using Magic Eden",
      img1: "https://static.intercomassets.com/avatars/5522517/square_128/3ah1rlRM56NUwVHTts2sDPhx3nTCLdQG-3q_ZqDkJbk-1651805779.png",
      img2: "https://static.intercomassets.com/avatars/5346159/square_128/2892_%281%29-1664434738.png",
      img3: "https://static.intercomassets.com/avatars/5386205/square_128/solgod-1651463067.png",
      written: "manny"
    },
    {
      icon: buying,
      title: "Buying",
      desc: "All the basics so you can trade NFTs using Magic Eden",
      img1: "https://static.intercomassets.com/avatars/5522517/square_128/3ah1rlRM56NUwVHTts2sDPhx3nTCLdQG-3q_ZqDkJbk-1651805779.png",
      img2: "https://static.intercomassets.com/avatars/5346159/square_128/2892_%281%29-1664434738.png",
      img3: "https://static.intercomassets.com/avatars/5386205/square_128/solgod-1651463067.png",
      written: "kaboom"
    },
    {
      icon: selling,
      title: "Selling",
      desc: "All the basics so you can trade NFTs using Magic Eden",
      img1: "https://static.intercomassets.com/avatars/5522517/square_128/3ah1rlRM56NUwVHTts2sDPhx3nTCLdQG-3q_ZqDkJbk-1651805779.png",
      img2: "https://static.intercomassets.com/avatars/5346159/square_128/2892_%281%29-1664434738.png",
      img3: "https://static.intercomassets.com/avatars/5386205/square_128/solgod-1651463067.png",
      written: "jordan"
    },
    {
      icon: listed,
      title: "Getting Listed",
      desc: "All the basics so you can trade NFTs using Magic Eden",
      img1: "https://static.intercomassets.com/avatars/5522517/square_128/3ah1rlRM56NUwVHTts2sDPhx3nTCLdQG-3q_ZqDkJbk-1651805779.png",
      img2: "https://static.intercomassets.com/avatars/5346159/square_128/2892_%281%29-1664434738.png",
      img3: "https://static.intercomassets.com/avatars/5386205/square_128/solgod-1651463067.png",
      written: "lazytron"
    },
    {
      icon: promotions,
      title: "Promotions & Partnerships",
      desc: "All the basics so you can trade NFTs using Magic Eden",
      img1: "https://static.intercomassets.com/avatars/5522517/square_128/3ah1rlRM56NUwVHTts2sDPhx3nTCLdQG-3q_ZqDkJbk-1651805779.png",
      img2: "https://static.intercomassets.com/avatars/5346159/square_128/2892_%281%29-1664434738.png",
      img3: "https://static.intercomassets.com/avatars/5386205/square_128/solgod-1651463067.png",
      written: "paco"
    },
    {
      icon: trust,
      title: "Trust & Safety",
      desc: "All the basics so you can trade NFTs using Magic Eden",
      img1: "https://static.intercomassets.com/avatars/5522517/square_128/3ah1rlRM56NUwVHTts2sDPhx3nTCLdQG-3q_ZqDkJbk-1651805779.png",
      img2: "https://static.intercomassets.com/avatars/5346159/square_128/2892_%281%29-1664434738.png",
      img3: "https://static.intercomassets.com/avatars/5386205/square_128/solgod-1651463067.png",
      written: "nimzo"
    }
  ];
  return `
<div class="${"flex flex-col gap-4 w-full"}"><div class="${"bg-primary w-full m t-2 py-4 text-primary"}"><div class="${"flex justify-evenly items-center"}"><img${add_attribute("src", logo, 0)} alt="${"logo"}" class="${"p-4"}">
		<div class="${"flex"}"><img${add_attribute("src", goTo, 0)} alt="${"link to home"}" class="${"w-6 pr-2"}">
			<a href="${"/"}">Go to Degen Forest</a></div></div>
	<div class="${"flex flex-col items-center gap-8 w-full text-center"}"><h1 class="${"text-gradient text-[2rem] font-bold leading-10 "}">Advice and Answers from the Team
		</h1>
		<div class="${"flex items-center justify-center w-full mx-auto"}"><div>${validate_component(Search, "Search").$$render($$result, { bg: "secondary" }, {}, {})}</div></div></div></div>


${each(cardData, ({ icon, title, desc, img1, img2, img3, written }) => {
    return `<div class="${"flex flex-col gap-1 w-full"}"><div class="${"flex p-4 gap-10 bg-secondary max-w-sm tablet:max-w-md laptop-sm:max-w-2xl laptop:max-w-3xl desktop:max-w-3xl mx-auto"}"><div class="${"w-fit"}"><img${add_attribute("src", icon, 0)} class="${"w-14 h-14 mt-6"}" alt="${"logo"}"></div>
		<div class="${"flex flex-col gap-2"}"><p class="${"text-accent text-xl"}">${escape(title)}</p>
			 <p class="${"text-primary"}">${escape(desc)}</p>
			 <div class="${"relative "}"><img${add_attribute("src", avatar, 0)} alt="${"img-1 rounded-full"}" class="${"w-6 h-6 absolute left-0 top-1 rounded-full"}">
				<img${add_attribute("src", img1, 0)} alt="${"img-1 rounded-full"}" class="${"w-6 h-6 absolute left-4 top-1 rounded-full"}">
				<img${add_attribute("src", img2, 0)} alt="${"img-1 rounded-full"}" class="${"w-6 h-6 absolute left-8 top-1 rounded-full"}">
				<img${add_attribute("src", img3, 0)} alt="${"img-1 rounded-full"}" class="${"w-6 h-6 absolute left-12 mr-4 top-1 rounded-full"}">
				<img${add_attribute("src", plus, 0)} alt="${"img-1 rounded-full"}" class="${"w-6 h-6 absolute left-16 mr-4 top-1 rounded-full"}">
				<p class="${"text-primary relative left-24 text-xs"}" id="${"author"}">${escape(desc)}</p>
				<p class="${"text-primary relative left-24 text-xs"}" id="${"author"}">written by <span class="${"text-accent"}">${escape(written)}</span> and 1 other</p></div>
		</div></div>

</div>`;
  })}
<div class="${"flex justify-center"}">${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div></div>`;
});
export {
  Page as default
};

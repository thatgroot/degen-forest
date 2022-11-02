import { c as create_ssr_component, f as each, d as add_attribute, v as validate_component, e as escape } from "../../../chunks/index.js";
import { a as avatar } from "../../../chunks/avatar.js";
import { u as upvotes, d as downvotes } from "../../../chunks/downvotes.js";
import { I as Input } from "../../../chunks/Input.js";
const rss = "/_app/immutable/assets/rss-25164b77.svg";
const play = "/_app/immutable/assets/play-25d922c9.svg";
const polls = "/_app/immutable/assets/polls-ee3593d0.svg";
const oasis = "/_app/immutable/assets/oasis-037118f9.svg";
const portfolio = "/_app/immutable/assets/portfolio-fc217f40.svg";
const develop = "/_app/immutable/assets/flask-962e6745.svg";
const region = "/_app/immutable/assets/flag-ee1196cd.svg";
const anchor = "/_app/immutable/assets/anchor-1b24ca54.svg";
const warning = "/_app/immutable/assets/warning-be553108.svg";
const comments = "/_app/immutable/assets/comment-b58cdb3a.svg";
const likes = "/_app/immutable/assets/like-eaf71ae8.svg";
const dislikes = "/_app/immutable/assets/dislike-51bd12f9.svg";
const star = "/_app/immutable/assets/star-7384dd9d.svg";
const drop = "/_app/immutable/assets/downarrow-fdf26963.svg";
const smiley = "/_app/immutable/assets/smiley-49e0b26f.svg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let navItems = [
    { icon: rss, text: "News", active: true },
    { icon: play, text: "Media", active: false },
    {
      icon: polls,
      text: "Polls",
      active: false
    },
    {
      icon: oasis,
      text: "Oasis",
      active: false
    },
    {
      icon: portfolio,
      text: "Portfolio",
      active: false
    },
    {
      icon: avatar,
      text: "Profile",
      active: false
    },
    {
      icon: develop,
      text: "Develop",
      active: false
    },
    {
      icon: region,
      text: "Region",
      active: false
    }
  ];
  let details = [
    {
      text: "4",
      icon: upvotes,
      bnb: "BNB",
      cordano: "ADA",
      avax: "AVAX",
      description: "Cardano May Get Accepted at Many More Million Merchants in Brazil Crypto Events",
      time: "40min",
      today: "u.today"
    },
    {
      text: "4",
      icon: downvotes,
      bnb: "BTC",
      cordano: "ADA",
      avax: "AVAX",
      description: "Cardano May Get Accepted at Many More Million Merchants in Brazil Crypto Events",
      time: "40min",
      today: "u.today"
    },
    {
      text: "4",
      icon: warning,
      bnb: "BNB",
      cordano: "ADA",
      avax: "AVAX",
      description: "Cardano May Get Accepted at Many More Million Merchants in Brazil Crypto Events",
      time: "40min",
      today: "u.today"
    },
    {
      text: "4",
      icon: comments,
      bnb: "BNB",
      cordano: "ADA",
      avax: "AVAX",
      description: "Cardano May Get Accepted at Many More Million Merchants in Brazil Crypto Events",
      time: "40min",
      today: "u.today"
    },
    {
      text: "4",
      icon: likes,
      bnb: "BNB",
      cordano: "ADA",
      avax: "AVAX",
      description: "Cardano May Get Accepted at Many More Million Merchants in Brazil Crypto Events",
      time: "40min",
      today: "u.today"
    },
    {
      text: "4",
      icon: dislikes,
      bnb: "BNB",
      cordano: "ADA",
      avax: "AVAX",
      description: "Cardano May Get Accepted at Many More Million Merchants in Brazil Crypto Events",
      time: "40min",
      today: "u.today"
    },
    {
      text: "4",
      icon: star,
      bnb: "BNB",
      cordano: "ADA",
      avax: "AVAX",
      description: "Cardano May Get Accepted at Many More Million Merchants in Brazil Crypto Events",
      time: "40min",
      today: "u.today"
    },
    {
      text: "4",
      icon: smiley,
      bnb: "BNB",
      cordano: "ADA",
      avax: "AVAX",
      time: "40min",
      description: "Cardano May Get Accepted at Many More Million Merchants in Brazil Events",
      today: "u.today"
    }
  ];
  return `<div class="${"flex news-font w-fit pt-2"}"><div class="${"flex flex-col gap-2 min-w-[8.5rem] border-r-2 border-secondary text-xs"}">${each(navItems, ({ icon, text, active }) => {
    return `<div class="${"flex gap-3 bg-primary mx-3 p-2 hover:bg-secondary hover:rounded-lg cursor-pointer"}"><img class="${"w-4 h-4"}"${add_attribute("src", icon, 0)}${add_attribute("alt", text, 0)}>
				<p class="${"text-primary"}">${escape(text)}</p>
			</div>`;
  })}</div>
	<div class="${"flex w-full"}"><div class="${"flex w-1/2 text-primary"}"><div class="${"flex flex-col"}"><div class="${"flex justify-between h-fit pb-2 border-b-2 border-r-2 border-secondary items-center"}"><div class="${"h-fit flex w-full"}"><div class="${"w-fit flex gap-3 items-center pl-2"}"><span class="${"text-xs"}">Top News</span>
                            <img${add_attribute("src", drop, 0)} alt="${"icon"}" class="${"w-2"}">
                            <span class="${"text-xs "}">All News</span>
                            <img${add_attribute("src", drop, 0)} alt="${"icon"}" class="${"w-2"}"></div></div>
                    <div class="${"w-fit flex text-xs text-primary justify-end"}">${validate_component(Input, "Input").$$render($$result, { placeholder: "Search...", type: "text" }, {}, {})}</div></div>
                ${each(details, ({ time, today, bnb, cordano, avax, description }) => {
    return `<div class="${"w-max pt-2 pb-2 pr-2 pl-2 border-b-2 border-r-2 border-secondary"}"><div class="${"flex flex-col"}"><div class="${"flex gap-3 text-xs text-secondary"}"><span><time class="${"clr-icon"}">${escape(time)}
                                </time></span>
                            <p class="${"text-primary break-word-wrap"}">${escape(description)}
                                <span class="${"flex"}"><img${add_attribute("src", anchor, 0)} alt="${"anchor cursor-pointer"}" class="${"w-4 pr-1"}">
                                    <span class="${"si-source-domain text-secondary clr-icon"}">${escape(today)}</span>
                                </span></p>
        
                            <div class="${"text-accent"}"><a href="${"/news/binancecoin/"}" class="${"colored-link"}">${escape(bnb)}</a>
                                <a href="${"/news/cardano/"}" class="${"colored-link"}">${escape(cordano)}</a>
                                <a href="${"/news/avalanche-2/"}" class="${"colored-link"}">${escape(avax)}</a>
                                
                            </div></div>
                        <div><div></div>
                            <div class="${"flex flex-row mt-1"}">${each(details, ({ icon, text }) => {
      return `<span title="${"4 positive votes"}" class="${"flex gap-1 pr-4"}"><img class="${"w-3 cursor-pointer"}"${add_attribute("src", icon, 0)} alt="${"upvotes"}">
                                    <span class="${"text-xxs"}">${escape(text)}</span>
                                </span>`;
    })}
                            </div></div>
                        <a href="${"/news/16393638/Cardano-May-Get-Accepted-at-Many-More-Million-Merchants-in-Brazil-Following-These-Events"}"></a></div>
                </div>`;
  })}</div>
            <div class="${"flex flex-col text-primary"}"><div class="${"flex justify-between h-fit pt-1 pb-2 border-b-2 border-r-2 border-secondary items-center "}"><div class="${"hover:bg-secondary"}"><button class="${"h-fit flex bor-r-2 border-secondary "}"><div class="${"w-fit items-center pl-32 text-center bor-r-2 border-secondary"}"><span class="${"text-xs"}">Home</span></div></button></div>
                 <div class="${"hover:bg-secondary"}"><button class="${"w-fit flex text-xs text-primary items-center pr-32 border-l-2 border-secondary "}"><span class="${"text-xs"}">About</span></button></div></div>
                ${each(details, ({ time, today, bnb, cordano, avax, description }) => {
    return `<div class="${"w-max pt-2 pb-2 pr-2 pl-2 border-b-2 border-r-2 border-secondary"}"><div class="${"flex flex-col"}"><div class="${"flex gap-3 text-xs text-grey"}"><span><time class="${"clr-icon"}">${escape(time)}
                                </time></span>
                            <p class="${"text-primary break-word-wrap"}">${escape(description)}
                                <span class="${"flex"}"><img${add_attribute("src", anchor, 0)} alt="${"anchor cursor-pointer"}" class="${"w-4 pr-1"}">
                                    <span class="${"si-source-domain text-secondary clr-icon"}">${escape(today)}</span>
                                </span></p>
        
                            <div class="${"text-accent"}"><a href="${"/news/binancecoin/"}" class="${"colored-link"}">${escape(bnb)}</a>
                                <a href="${"/news/cardano/"}" class="${"colored-link"}">${escape(cordano)}</a>
                                <a href="${"/news/avalanche-2/"}" class="${"colored-link"}">${escape(avax)}</a>
                                
                            </div></div>
                        <div><div></div>
                            <div class="${"flex flex-row mt-1"}">${each(details, ({ icon, text }) => {
      return `<span title="${"4 positive votes"}" class="${"flex gap-1 pr-4"}"><img class="${"w-3 cursor-pointer"}"${add_attribute("src", icon, 0)} alt="${"upvotes"}">
                                    <span class="${"text-xxs"}">${escape(text)}</span>
                                </span>`;
    })}
                            </div></div>
                        <a href="${"/news/16393638/Cardano-May-Get-Accepted-at-Many-More-Million-Merchants-in-Brazil-Following-These-Events"}"></a></div>
                </div>`;
  })}</div></div></div></div>

`;
});
export {
  Page as default
};

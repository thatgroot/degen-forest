import { c as create_ssr_component, f as each, d as add_attribute, e as escape } from "../../../../chunks/index.js";
import { u as upvotes, d as downvotes } from "../../../../chunks/downvotes.js";
const share = "/_app/immutable/assets/share1-a682f952.svg";
const coindesk = "/_app/immutable/assets/coindesk-16e51a71.svg";
const bsc = "/_app/immutable/assets/bsc-0adf4b0a.svg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cardDetails = [
    {
      image: "https://images.unsplash.com/photo-1634704784915-aacf363b021f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Cardano May Get Accepted",
      iconUp: upvotes,
      iconDown: downvotes,
      share,
      bsc,
      coindesk,
      description: "Cardano May Get Accepted at Many More Million Merchants in Brazil Crypto Events"
    },
    {
      image: "https://images.unsplash.com/photo-1629339942248-45d4b10c8c2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
      title: "Cardano May Get Accepted",
      iconUp: upvotes,
      iconDown: downvotes,
      share,
      bsc,
      coindesk,
      description: "Cardano May Get Accepted at Many More Million Merchants in Brazil Crypto Events"
    },
    {
      image: "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Cardano May Get Accepted",
      iconUp: upvotes,
      iconDown: downvotes,
      share,
      bsc,
      coindesk,
      description: "Cardano May Get Accepted at Many More Million Merchants in Brazil Crypto Events"
    },
    {
      image: "https://images.unsplash.com/photo-1609554496796-c345a5335ceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Cardano May Get Accepted",
      iconUp: upvotes,
      iconDown: downvotes,
      share,
      bsc,
      coindesk,
      description: "Cardano May Get Accepted at Many More Million Merchants in Brazil Crypto Events"
    },
    {
      image: "https://images.unsplash.com/photo-1634704760994-96e3ccf2ae85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Cardano May Get Accepted",
      iconUp: upvotes,
      iconDown: downvotes,
      share,
      bsc,
      coindesk,
      description: "Cardano May Get Accepted at Many More Million Merchants in Brazil Crypto Events"
    }
  ];
  return `<div class="${"flex flex-col flex-wrap md:flex-row mb-6 gap-24 justify-center md:justify-start p-4 h-max"}">
	<div class="${"flex flex-col gap-6 text-primary"}"><div class="${"flex flex-col gap-14"}"><h1 class="${"gradient-secondary text-[2rem] font-bold font-mono w-fit"}">Latest News
			</h1>
			<div class="${"grid grid-cols-1 tablet:grid-cols-2 laptop-sm:grid-cols-3 desktop:grid-cols-4 large:grid-cols-6 x-large:grid-cols-4 gap-x-4 gap-y-14"}">${each(cardDetails, ({ iconUp, title, iconDown, share: share2, bsc: bsc2, coindesk: coindesk2, description, image }) => {
    return `<div class="${"bg-secondary rounded-md"}"><div class="${"flex justify-center items-center leading-none"}"><img${add_attribute("src", image, 0)} alt="${"pic"}" class="${"h-40 w-56 rounded-md shadow-2xl transform -translate-y-10 hover:-translate-y-4 transition duration-700"}"></div>
						<div class="${"p-3 mt-0 transform -translate-y-6"}"><p class="${"block mb-1 font-extralight"}">${escape(title)}</p>
							<p class="${"text-xs tracking-tighter text-gray-600"}">${escape(description)}
							</p></div>
						<div class="${"flex justify-between items-center p-2 transform -translate-y-6"}"><div class="${"flex"}"><img${add_attribute("src", iconUp, 0)} alt="${""}" class="${"rounded-full h-4 pr-1"}">
								<span class="${"text-sm pr-2"}">100</span>
								<img${add_attribute("src", iconDown, 0)} alt="${""}" class="${"rounded-full h-4 pr-1"}">
								<span class="${"text-sm pr-1"}">200</span></div>
							<div class="${"flex"}"><img${add_attribute("src", coindesk2, 0)} alt="${""}" class="${"rounded-full h-4 pr-4"}">

								<img${add_attribute("src", bsc2, 0)} alt="${""}" class="${"rounded-full h-4 pr-1"}"></div>
							<div class="${"flex transform"}"><img class="${"h-4 mouse-pointer"}" alt="${""}"${add_attribute("src", share2, 0)}>
							</div></div>
					</div>`;
  })}</div></div>
		<div class="${"flex flex-col gap-14"}"><h1 class="${"gradient-secondary text-[2rem] font-bold font-mono w-fit"}">Trending News</h1>

			<div class="${"grid grid-cols-1 tablet:grid-cols-2 laptop-sm:grid-cols-3 desktop:grid-cols-4 large:grid-cols-6 x-large:grid-cols-4 gap-x-4 gap-y-14"}">${each(cardDetails, ({ iconUp, title, iconDown, share: share2, bsc: bsc2, coindesk: coindesk2, description, image }) => {
    return `<div class="${"bg-secondary rounded-md"}"><div class="${"flex justify-center items-center leading-none"}"><img${add_attribute("src", image, 0)} alt="${"pic"}" class="${"h-40 w-56 rounded-md shadow-2xl transform -translate-y-10 hover:-translate-y-4 transition duration-700"}"></div>
						<div class="${"p-3 mt-0 transform -translate-y-6"}"><p class="${"block mb-1 font-extralight"}">${escape(title)}</p>
							<p class="${"text-xs tracking-tighter text-gray-600"}">${escape(description)}
							</p></div>
						<div class="${"flex justify-between items-center p-2 transform -translate-y-6"}"><div class="${"flex"}"><img${add_attribute("src", iconUp, 0)} alt="${""}" class="${"rounded-full h-4 pr-1"}">
								<span class="${"text-sm pr-2"}">100</span>
								<img${add_attribute("src", iconDown, 0)} alt="${""}" class="${"rounded-full h-4 pr-1"}">
								<span class="${"text-sm pr-1"}">200</span></div>
							<div class="${"flex"}"><img${add_attribute("src", coindesk2, 0)} alt="${""}" class="${"rounded-full h-4 pr-4"}">

								<img${add_attribute("src", bsc2, 0)} alt="${""}" class="${"rounded-full h-4 pr-1"}"></div>
							<div class="${"flex transform"}"><img class="${"h-4 mouse-pointer"}" alt="${""}"${add_attribute("src", share2, 0)}>
							</div></div>
					</div>`;
  })}</div></div>
		<div class="${"flex flex-col gap-14"}"><h1 class="${"gradient-secondary text-[2rem] font-bold font-mono w-fit"}">Frens are talking</h1>
			<div class="${"grid grid-cols-1 tablet:grid-cols-2 laptop-sm:grid-cols-3 desktop:grid-cols-4 large:grid-cols-6 x-large:grid-cols-4 gap-x-4 gap-y-14"}">${each(cardDetails, ({ iconUp, title, iconDown, share: share2, bsc: bsc2, coindesk: coindesk2, description, image }) => {
    return `<div class="${"bg-secondary rounded-md"}"><div class="${"flex justify-center items-center leading-none"}"><img${add_attribute("src", image, 0)} alt="${"pic"}" class="${"h-40 w-56 rounded-md shadow-2xl transform -translate-y-10 hover:-translate-y-4 transition duration-700"}"></div>
						<div class="${"p-3 mt-0 transform -translate-y-6"}"><p class="${"block mb-1 font-extralight"}">${escape(title)}</p>
							<p class="${"text-xs tracking-tighter text-gray-600"}">${escape(description)}
							</p></div>
						<div class="${"flex justify-between items-center p-2 transform -translate-y-6"}"><div class="${"flex"}"><img${add_attribute("src", iconUp, 0)} alt="${""}" class="${"rounded-full h-4 pr-1"}">
								<span class="${"text-sm pr-2"}">100</span>
								<img${add_attribute("src", iconDown, 0)} alt="${""}" class="${"rounded-full h-4 pr-1"}">
								<span class="${"text-sm pr-1"}">200</span></div>
							<div class="${"flex"}"><img${add_attribute("src", coindesk2, 0)} alt="${""}" class="${"rounded-full h-4 pr-4"}">
								<img${add_attribute("src", bsc2, 0)} alt="${""}" class="${"rounded-full h-4 pr-1"}"></div>
							<div class="${"flex transform"}"><img class="${"h-4 mouse-pointer"}" alt="${""}"${add_attribute("src", share2, 0)}>
							</div></div>
					</div>`;
  })}</div></div></div></div>`;
});
export {
  Page as default
};

import { c as create_ssr_component, v as validate_component, f as each, e as escape, d as add_attribute } from "../../../../../chunks/index.js";
import { N as NFTFilters } from "../../../../../chunks/NFTFilters.js";
import { s as solana } from "../../../../../chunks/solana.js";
import "../../../../../chunks/Dropdown.js";
import "../../../../../chunks/arrow-down.js";
import "../../../../../chunks/Input.js";
import "../../../../../chunks/search2.js";
import "../../../../../chunks/Accordion.js";
import "../../../../../chunks/AccordionHeader.js";
const up_triangle = "/_app/immutable/assets/up-triangle-6549392e.svg";
const down_triangle = "/_app/immutable/assets/down-triangle-9c01dbb1.svg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const collections = [
    {
      name: "Degenerate Eggs",
      image: "https://img-cdn.magiceden.dev/rs:fill:32:32:0:0/plain/https://bafybeigjqyvd6mrjpqficz3hygcpttmbrlcvkakartrsmqtdfds5nfyjga.ipfs.nftstorage.link/",
      volume_total: "1.1M",
      volume_24h: "1.3K",
      volume_24h_percent: 1.3,
      sales: "30",
      floor_price: "64.00",
      owners: "5.4K",
      total_supply: "10K"
    },
    {
      name: "Ordinem - The Order",
      image: "https://img-cdn.magiceden.dev/rs:fill:32:32:0:0/plain/https://pbs.twimg.com/profile_images/1568009103208751104/nZ5VtsX0_400x400.jpg",
      volume_total: "3.4K",
      volume_24h: "1.3K",
      volume_24h_percent: 51.3,
      sales: "663",
      floor_price: "2.49",
      owners: "787",
      total_supply: "2.2K"
    },
    {
      name: "Shadowy Super Coder DAO",
      image: "https://img-cdn.magiceden.dev/rs:fill:32:32:0:0/plain/https://img-cdn.magiceden.dev/plain/https://bafybeibkdy5jstct2cctqga3wnz5jczxnu652jom6k2haxbx7wz6psehsq.ipfs.dweb.link",
      volume_total: "403.6K",
      volume_24h: "1.4K",
      volume_24h_percent: 25.2,
      sales: "22",
      floor_price: "65.00",
      owners: "201",
      total_supply: "10K"
    },
    {
      name: "GGSG: Galactic Geckos",
      volume_total: "407.8K",
      volume_24h: "1.5K",
      volume_24h_percent: 35.2,
      sales: "56",
      floor_price: "23.00",
      owners: "3.2K",
      total_supply: "10K"
    },
    {
      name: "Liberty Square: The Sinister Squirrel Syndicate",
      volume_total: "46.4K",
      volume_24h: "1.5K",
      volume_24h_percent: -121.1,
      sales: "269",
      floor_price: "5.95",
      owners: "7.2K",
      total_supply: "10K"
    },
    {
      name: "shremps",
      volume_total: "38.7K",
      volume_24h: "1.6K",
      volume_24h_percent: 123.1,
      sales: "357",
      floor_price: "4.30",
      owners: "2.1K",
      total_supply: "5K"
    },
    {
      name: "Okay Bears",
      volume_total: "2M",
      volume_24h: "1.8K",
      volume_24h_percent: -12.1,
      sales: "30",
      floor_price: "64.00",
      owners: "5.4K",
      total_supply: "10K"
    },
    {
      name: "Jikan Studios",
      volume_total: "80.2K",
      volume_24h: "2.1K",
      volume_24h_percent: -231.1,
      sales: "319",
      floor_price: "6.37",
      owners: "8K",
      total_supply: "8.9K"
    },
    {
      name: "Primates",
      volume_total: "367.3K",
      volume_24h: "2.2K",
      volume_24h_percent: 143.1,
      sales: "121",
      floor_price: "15.99",
      owners: "4.8K",
      total_supply: "10K"
    },
    {
      name: "CETS ON CRECK",
      volume_total: "396.1K",
      volume_24h: "2.3K",
      volume_24h_percent: 123,
      sales: "53",
      floor_price: "41.99",
      owners: "4.1K",
      total_supply: "7K"
    },
    {
      name: "Blocksmith Labs",
      volume_total: "293.3K",
      volume_24h: "3.6K",
      volume_24h_percent: -187.1,
      sales: "35",
      floor_price: "105.00",
      owners: "2.6K",
      total_supply: "4.4K"
    },
    {
      name: "Acid Monkeys",
      volume_total: "31.6K",
      volume_24h: "3.9K",
      volume_24h_percent: -12.23,
      sales: "701",
      floor_price: "5.70",
      owners: "2.4K",
      total_supply: "5K"
    },
    {
      name: "Vandals",
      volume_total: "127K",
      volume_24h: "4.7K",
      volume_24h_percent: -15.23,
      sales: "256",
      floor_price: "17.40",
      owners: "4.4K",
      total_supply: "10K"
    },
    {
      name: "DeGods",
      volume_total: "1.1M",
      volume_24h: "11K",
      volume_24h_percent: 245.23,
      sales: "22",
      floor_price: "450.00",
      owners: "4.4K",
      total_supply: "10K"
    },
    {
      name: "Satori",
      volume_total: "14.5K",
      volume_24h: "4.7K",
      volume_24h_percent: 234.54,
      sales: " 1.1K",
      floor_price: "3.00",
      owners: "1.1K",
      total_supply: "3.3K"
    },
    {
      name: "The 8-Bit Collection",
      volume_total: "1.1M",
      volume_24h: "11K",
      volume_24h_percent: 245.23,
      sales: "22",
      floor_price: "450.00",
      owners: "4.4K",
      total_supply: "10K"
    }
  ];
  return `${$$result.head += `${$$result.title = `<title>Popular Collections</title>`, ""}`, ""}


<div class="${"flex flex-col items-start border-2 border-secondary"}"><div class="${"border-b-2 border-secondary w-full"}"><h3 class="${"p-3 text-primary text-2xl font-bold text-start"}">Top Collections</h3></div>

	<div class="${"p-4 w-full"}">${validate_component(NFTFilters, "NftFilters").$$render($$result, {}, {}, {})}

		<div class="${"overflow-x-auto relative my-4 px-2 rounded-lg border-2 border-secondary"}"><table class="${"w-full text-primary"}"><thead class="${"text-xs border-b-2 border-secondary"}"><tr class="${"text-primary"}"><th class="${"py-3 px-6 text-start"}">Collection </th>
						<th class="${"py-3 px-6 text-start"}">Volume Total</th>
						<th class="${"py-3 px-6 text-start"}">24h Volume</th>
						<th class="${"py-3 px-6 text-start"}">24h % Volume </th>
						<th class="${"py-3 px-6 text-start"}">Sales</th>
						<th class="${"py-3 px-6 text-start"}">Floor Price</th></tr></thead>

				<tbody>${each(collections, ({ image, name, volume_total, volume_24h, volume_24h_percent, sales, floor_price }, i) => {
    return `<tr class="${"text-start borderorder-secondary"}"><td class="${"py-4 px-6 text-start"}"><a class="${"flex gap-2 items-center"}" href="${"/marketplace/collection"}"><span>${escape(i + 1)}</span>
									<img class="${"h-12 rounded-full inline-block"}"${add_attribute("src", image ?? "https://img-cdn.magiceden.dev/rs:fill:32:32:0:0/plain/https://dl.airtable.com/.attachmentThumbnails/7bf792aeb747bc42679d845ed24fe6fe/fce75af7", 0)} alt="${"..."}">

									${escape(name)}
								</a></td>
							<td class="${"py-4 px-6 text-start"}">${escape(volume_total)}
								<img${add_attribute("src", solana, 0)} alt="${"solana"}" class="${"h-4 inline-block"}"></td>
							<td class="${"py-4 px-6 text-start"}">${escape(volume_24h)}
								<img${add_attribute("src", solana, 0)} alt="${"solana"}" class="${"h-4 inline-block"}"></td>
							<td class="${"py-4 px-6 text-start " + escape(volume_24h_percent > 0 ? "text-success" : "text-warning", true)}">${volume_24h_percent > 0 ? `<img${add_attribute("src", up_triangle, 0)} alt="${"up"}" class="${"h-4 inline-block"}">` : `<img${add_attribute("src", down_triangle, 0)} alt="${"down"}" class="${"h-4 inline-block"}">`}
								<span>${escape(volume_24h_percent)} %
								</span></td>
							<td class="${"py-4 px-t"}">${escape(sales)}</td>
							<td class="${"py-4 px-6 text-start"}">${escape(floor_price)}
								<img${add_attribute("src", solana, 0)} alt="${"solana"}" class="${"h-4 inline-block"}"></td>
						</tr>`;
  })}</tbody></table></div></div></div>`;
});
export {
  Page as default
};

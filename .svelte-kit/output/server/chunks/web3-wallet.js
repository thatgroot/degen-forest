import "./index.js";
import Web3 from "web3";
const fromWei = (amount, unit) => {
  return web3.utils.fromWei(amount, unit);
};
const replaceAddresswithTokenName = (str, tokens) => {
  const token_address = str.match(/0x[a-fA-F0-9]{40}/g);
  if (token_address) {
    const token = tokens.find((token2) => token2.address === token_address[0]);
    if (token) {
      str = str.replace(token_address[0], token.name);
      return str;
    } else {
      return str;
    }
  } else {
    return str;
  }
};
const web3 = new Web3(Web3.givenProvider);
new Web3(Web3.givenProvider);
export {
  fromWei as f,
  replaceAddresswithTokenName as r
};

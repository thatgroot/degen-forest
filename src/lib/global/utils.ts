import Web3 from "web3";

export const toggle = (id: string, css_class: string) => {
 const dropdown = document.querySelector(`#${id}`);
 dropdown?.classList.toggle(css_class);
};

export const web3: Web3 = new Web3(Web3.givenProvider);

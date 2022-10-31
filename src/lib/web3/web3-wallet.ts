import { dex_store, wallet_store } from "../../store";
import Web3 from "web3";

const web3 = new Web3(Web3.givenProvider)

const web3_wallet: Wallet = {
  defaultAccount: () => web3.eth.defaultAccount ?? "",
  connect: async () => {
    if (window.ethereum) {
      await window.ethereum.request({ method: 'eth_requestAccounts' })
    } else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }

  },
  balance: async (token_address: string) => {
    if (window.ethereum || window.web3) {
      const balance = await web3.eth.getBalance(token_address);
      return balance;
    } else {
      return '0';
    }
  },

  disconnect: () => {
    if (window.ethereum) {

      return true;
    } else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
      return false;
    }
  },
  on: {
    connect: async (info) => {
      console.log(info)
      // get metamask eth accounts
      const accounts = await web3.eth.getAccounts();
      const balance = await web3.eth.getBalance(accounts[0]);
      console.log(accounts, balance)
      wallet_store.set({
        defaultAccount: accounts[0],
        balance: balance,
      })

      console.log('connecting')

      return true;
    },
    disconnect: (error) => {
      wallet_store.set({ defaultAccount: '', balance: '0' })
      dex_store.set({
        selectedToken: <Token>{},
        selectedTokenAmount: '0'
      })
      console.error(error);
    },
    accountsChanged: async (accounts) => {
      const balance = await web3.eth.getBalance(accounts[0]);
      wallet_store.update(currentValue => {
        currentValue.defaultAccount = accounts[0];
        currentValue.balance = balance;
        return currentValue;
      })
    },
    chainChanged: (chainId) => {
      // console.log(chainId);
    }
  }
}

export const dex: DEX = {
  selectedToken: {
    name: 'Ether',
    symbol: 'ETH',
    address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png',
    tags: []
  },
  setSelectedToken: (tokens: Token[], symbol: string) => {
    const selected_token = tokens.find((token) => token.symbol === symbol) ?? tokens[0];
    dex_store.update(currentValue => {
      currentValue.selectedToken = selected_token;
      return currentValue;
    });
    return selected_token;
  },
  selectedTokenBalance: (address, callback) => {
    web3_wallet.balance(address).then((balance: string | number) => {
      callback(balance);
    });
  },
  // ETH -> DAI
  getQuote(fromTokenAddress = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', toTokenAddress = "0x9d47894f8becb68b9cf3428d256311affe8b068b", fromAmount, callback) {
    // calling 1inch quote api
    const url = `https://api.1inch.exchange/v4.0/1/quote?fromTokenAddress=${fromTokenAddress}&toTokenAddress=${toTokenAddress}&amount=${fromAmount}`;

    // calling the network request form the above url
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const quote: Quote = {
          fromToken: data.fromToken,
          toToken: data.toToken,
          toTokenAmount: data.toTokenAmount,
          fromTokenAmount: data.fromTokenAmount,
          estimatedGas: data.estimatedGas
        };
        callback(quote);
      });

    return {
      fromToken: {
        symbol: "",
        name: "",
        decimals: 0,
        address: "",
        logoURI: "",
        tags: []
      },
      toToken: {
        symbol: "",
        name: "",
        decimals: 0,
        address: "",
        logoURI: "",
        tags: []
      },
      toTokenAmount: "",
      fromTokenAmount: "",
      estimatedGas: ""
    };
  },
  swap: function (): void {
    // calling 1inch swap api
    const url = `https://api.1inch.io/v4.0/1/swap?fromTokenAddress=0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE&toTokenAddress=0x111111111117dc0aa78b770fa6a738034120c302&amount=0000000000003367762&fromAddress=0xF69c12BCAb3cc3Bef5a5BF7eD990B26dA2871D55&slippage=1`

    fetch(url).then((response) => response.json())
      .then((data) => {
        // console.log(data)
      });

  },
  getTokens: function (): Promise<Token[]> {
    // get tokens list
    const url = `https://api.1inch.exchange/v4.0/1/tokens`;
    // calling the network request form the above url
    return fetch(url)
      .then((response) => response.json())
      .then(({ tokens }) => {
        return tokens;
      });
  }
}





export default web3_wallet;



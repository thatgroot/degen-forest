import { dex_store, wallet_store } from "../../store";
import Web3 from "web3";
import { ethers } from "ethers";

const web3 = new Web3(Web3.givenProvider)

const web3_wallet: Wallet = {
  defaultAccount: () => web3.eth.defaultAccount ?? "",
  connect: async () => {

    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' })
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        const balance = await web3.eth.getBalance(address);
        const chainId = await signer.getChainId();
        web3.eth.defaultAccount = address;
        console.log({ defaultAccount: address, chainId, balance })
        wallet_store.set({ connected: true, defaultAccount: address, chainId, balance });
      } catch (error) {
        wallet_store.set({ defaultAccount: '', balance: '0' });
        console.log(error)
      }

    } else {
      const confirm = window.confirm('Non-Ethereum browser detected. You should consider trying MetaMask!')
      if (confirm)
        window.open('https://metamask.io/download/', '_blank');
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
        token: {
          selected: <Token>{},
          desired: <Token>{}
        },
        amount: {
          selected: '0',
          desired: '0'
        },
        rate: {
          USDT: 0
        }
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
    chainChanged: () => {
      // console.log(chainId);
    }
  }
}

export const dex: DEX = {
  set: {
    selectedToken: (tokens: Token[], symbol: string) => {
      const token = tokens.find(token => token.symbol === symbol) ?? <Token>{};
      dex_store.update(currentValue => {
        currentValue.token.selected = token;
        return currentValue;
      });
      return token;
    },
    desiredToken: (tokens: Token[], symbol: string) => {
      const token = tokens.find(token => token.symbol === symbol) ?? <Token>{};
      dex_store.update(currentValue => {
        currentValue.token.desired = token;
        return currentValue;
      });
      return token;
    },

    selectedTokenAmount: (amount: string) => {
      dex_store.update(currentValue => {
        currentValue.amount.selected = amount;
        return currentValue;
      });
    },

    desiredTokenAmount: (amount: string) => {
      dex_store.update(currentValue => {
        currentValue.amount.desired = amount;
        return currentValue;
      });
    }
  },
  request: {
    exhangeRate: async (from, to) => {
      const url = `https://min-api.cryptocompare.com/data/price?fsym=${from}&tsyms=${to}`;
      const data = fetch(url).then((response) => response.json()).then(data => {
        return data;
      });
      return data;
    },
    quote: (fromTokenAddress, toTokenAddress, fromAmount, callback) => {
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
    swap: async (fromTokenAddress, toTokenAddress, fromAmount, callback): Promise<void> => {
      // calling 1inch swap api
      const url = `https://api.1inch.io/v4.0/1/swap?fromTokenAddress=${fromTokenAddress}&toTokenAddress=${toTokenAddress}&amount=${fromAmount}&fromAddress=0xE36E96A3842039d68794C15ace30ab7C9143ad1A&slippage=1`;
      fetch(url).then((response) => response.json())
        .then((data) => {
          callback(data);
        });
    },
    tokens: async (): Promise<Token[]> => {
      // get tokens list
      const url = `https://api.1inch.exchange/v4.0/1/tokens`;
      // calling the network request form the above url
      const response = await fetch(url);
      const { tokens } = await response.json();
      return tokens;
    }
  },
  events: {
    shift: function (): void {
      throw new Error("Function not implemented.");
    }
  }

}





export default web3_wallet;



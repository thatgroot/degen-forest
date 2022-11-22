type WalletEvents = {
	connect: (address: string) => void;
	disconnect: (error: { code: number; message: string }) => void;
	accountsChanged: (accounts: string[]) => void;
	chainChanged: (chainId: string) => void;
};

type Wallet = {
	balanceof: (token: Token) => Promise<string>;
	connect: () => void | Promise<void>;
	defaultAccount: () => string;
	disconnect: () => void;
	on: WalletEvents;
};

type Token = {
	symbol: string;
	name: string;
	decimals: number;
	address: string;
	logoURI: string;
	tags: string[];
};

type Quote = {
	fromToken: Token;
	toToken: Token;
	toTokenAmount: string;
	fromTokenAmount: string;
	estimatedGas: string;
};

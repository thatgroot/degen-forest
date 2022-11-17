type TX_ERROR = {
	reason?: string;
	code?: string;
	operation?: string;
	transactionType?: number;
};
type DEX_STORE = {
	slippage: number | 'auto';
	error?: {
		statusCode: number;
		error: string;
		description: string;
		meta: Array<{
			type: string;
			value: string;
		}>;
		requestId: string;
	};
	tx_error?: TX_ERROR;
	token: {
		selected: Token;
		desired: Token;
	};
	amount: {
		selected: string;
		desired: string;
	};
	rate: {
		USDT: number;
	};
};
type DEX = {
	set: {
		selectedToken: (tokens: Token[], symbol: string) => Token;
		desiredToken: (tokens: Token[], symbol: string) => Token;
		selectedTokenAmount: (address: string, amount: string) => void;
		desiredTokenAmount: (address: string, amount: string) => void;
		slippage: (percentage: 'auto' | 0.1 | 0.5 | 1) => void;
	};
	events: {
		shift: () => void;
		transaction: {
			send: (tx: Transaction) => Prommise<void>;
		};
	};
	request: {
		exhangeRate: (from: string, to: string) => Promise<{ USDT: number }>;
		quote: (
			fromTokenAddress: string,
			toTokenAddress: string,
			fromAmount: string,
			callback: (quote: Quote) => void
		) => void;
		swap: (
			fromTokenAddress: string,
			toTokenAddress: string,
			fromAmount: string,
			callback: (data: unknown) => void
		) => void;

		tokens: () => Promise<Token[]>;
	};
};

type Transaction = {
	from: string;
	to: string;
	data: string;
	value: string;
	gas: number;
	gasPrice: string;
};

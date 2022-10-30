type DEX = {
 selectedToken: (tokens: Token[], token: string) => Token;
 selectedTokenBalance: (address: string, callback: (balance: string | number) => void) => void
 getQuote: (fromTokenAddress: string, toTokenAddress: string, fromAmount: number | string, callback: (quote: Quote) => void) => void;
 swap: () => void;
 getTokens: () => Promise<Token[]>;
}

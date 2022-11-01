type DEX_STORE = {
 token: {
  selected: Token,
  desired: Token
 },
 amount: {
  selected: string,
  desired: string
 },
 rate: {
  USDT: number,
 },
}
type DEX = {
 set: {
  selectedToken: (tokens: Token[], symbol: string) => Token,
  desiredToken: (tokens: Token[], symbol: string) => Token,
  selectedTokenAmount: (address: string, amount: string) => void,
  desiredTokenAmount: (address: string, amount: string) => void,
 },
 events: {
  shift: () => void;
 },
 request: {
  exhangeRate: (from: string, to: string) => Promise<{ 'USDT': number }>;
  quote: (fromTokenAddress: string, toTokenAddress: string, fromAmount: string, callback: (quote: Quote) => void) => void;
  swap: (fromTokenAddress: string, toTokenAddress: string, fromAmount: string, callback: (data: unknown) => void) => void;
  tokens: () => Promise<Token[]>;
 },
}

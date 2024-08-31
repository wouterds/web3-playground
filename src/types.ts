export interface Token {
  address: string;
  symbol: string;
}

export interface TokenPair {
  token0: Token;
  token1: Token;
}

export interface PriceInfo {
  dex: string;
  price: number;
}

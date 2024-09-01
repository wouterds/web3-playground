import { TOKENS } from '~/config';
import { Token } from '~/types';

export const getTokens = (): Token[] => {
  return TOKENS;
};

export const getTokenByAddress = (address: string): Token | undefined => {
  return getTokens().find((token: Token) => token.address === address);
};

export const getTokenBySymbol = (symbol: string): Token | undefined => {
  return getTokens().find((token: Token) => token.symbol === symbol);
};

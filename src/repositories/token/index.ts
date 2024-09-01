import { TOKENS } from '~/config';
import { Token } from '~/types';

const getAll = (): Token[] => {
  return TOKENS;
};

const getByAddress = (address: string): Token | undefined => {
  return getAll().find((token: Token) => token.address === address);
};

const getBySymbol = (symbol: string): Token | undefined => {
  return getAll().find((token: Token) => token.symbol === symbol);
};

export const TokenRepository = {
  getAll,
  getByAddress,
  getBySymbol,
};

import dotenv from 'dotenv';

import { Token } from './types';

dotenv.config();

export const INFURA_URL = process.env.INFURA_URL;

export const WETH_TOKEN: Token = {
  address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  symbol: 'WETH',
};

export const DEX_CONTRACTS = {
  SUSHISWAP_V2: '0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac',
  UNISWAP_V2: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
};

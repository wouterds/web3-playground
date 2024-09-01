import dotenv from 'dotenv';

import { Token } from './types';

dotenv.config();

export const INFURA_URL = `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`;
export const INFURA_WS_URL = `wss://mainnet.infura.io/ws/v3/${process.env.INFURA_API_KEY}`;

export const WETH_TOKEN: Token = {
  address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  symbol: 'WETH',
};

export const DEX_CONTRACTS = {
  SUSHISWAP_V2_FACTORY: '0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac',
  SUSHISWAP_V2_ROUTER: '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F',
  UNISWAP_V2_FACTORY: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  UNISWAP_V2_ROUTER: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
};

import dotenv from 'dotenv';

import { Token } from './types';

dotenv.config();

export const INFURA_URL = process.env.INFURA_URL;

export const WETH_TOKEN_ADDRESS = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';
export const WETH_TOKEN_SYMBOL = 'WETH';

export const WETH_TOKEN: Token = {
  address: WETH_TOKEN_ADDRESS,
  symbol: WETH_TOKEN_SYMBOL,
};

export const DEX_ADDRESSES = {
  UNISWAP: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
  SUSHISWAP: '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F',
};

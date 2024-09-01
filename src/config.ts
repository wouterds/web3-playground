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

export const TOKENS: Token[] = [
  { symbol: 'DAI', address: '0x6B175474E89094C44Da98b954EedeAC495271d0F' },
  { symbol: 'USDC', address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48' },
  { symbol: 'USDT', address: '0xdAC17F958D2ee523a2206206994597C13D831ec7' },
  { symbol: 'WBTC', address: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599' },
  { symbol: 'LINK', address: '0x514910771AF9Ca656af840dff83E8264EcF986CA' },
  { symbol: 'FTM', address: '0x4E15361FD6b4BB609Fa63C81A2be19d873717870' },
  { symbol: 'CREAM', address: '0x2ba592F78dB6436527729929AAf6c908497cB200' },
  { symbol: 'COMP', address: '0xc00e94Cb662C3520282E6f5717214004A7f26888' },
];

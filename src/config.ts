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
  { symbol: 'PEPE', address: '0x6982508145454ce325ddbe47a25d4ec3d2311933' },
  { symbol: 'BONK', address: '0x1151CB3d861920e07a38e03eEAd12C32178567F6' },
  { symbol: 'SHIB', address: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce' },
  { symbol: 'FLOKI', address: '0xcf0c122c6b73ff809c693db761e7baebe62b6a2e' },
  { symbol: 'TURBO', address: '0xa35923162c49cf95e6bf26623385eb431ad920d3' },
  { symbol: 'TRUMP', address: '0x576e2BeD8F7b46D34016198911Cdf9886f78bea7' },
];

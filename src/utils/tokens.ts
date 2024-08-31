import { Token } from '~/types';

export const getPopularTokens = async () => {
  const tokens: Token[] = [
    { symbol: 'DAI', address: '0x6B175474E89094C44Da98b954EedeAC495271d0F' },
    { symbol: 'USDC', address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48' },
    { symbol: 'PEPE', address: '0x6982508145454Ce325dDbE47a25d4ec3d2311933' },
    { symbol: 'FLOKI', address: '0x43f11C02439E2736800433B4594994BD43Cd066D' },
    { symbol: 'SNX', address: '0xC011A72400E58ecD99Ee497CF89E3775d4bd732F' },
  ];

  return tokens;
};

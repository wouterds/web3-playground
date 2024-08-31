import { PriceInfo } from '../types';

export const calculateArbitrage = (prices: PriceInfo[]) => {
  const maxPrice = Math.max(...prices.map((p) => p.price));
  const minPrice = Math.min(...prices.map((p) => p.price));

  return (maxPrice - minPrice) / minPrice;
};

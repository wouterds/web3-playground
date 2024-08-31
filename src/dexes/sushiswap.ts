import { ethers } from 'ethers';

import { DEX_ADDRESSES } from '~/config';
import { getProvider } from '~/utils/web3';

import { TokenPair } from '../types';

const SUSHISWAP_ABI = [
  'function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts)',
];

export const getSushiSwapPrice = async (pair: TokenPair, amountIn: number) => {
  const provider = getProvider();
  const sushiswap = new ethers.Contract(DEX_ADDRESSES.SUSHISWAP, SUSHISWAP_ABI, provider);

  const parsedAmountIn = ethers.utils.parseEther(amountIn.toString());
  const amounts = await sushiswap.getAmountsOut(parsedAmountIn, [
    pair.token0.address,
    pair.token1.address,
  ]);
  const price = ethers.utils.formatEther(amounts[1]);

  return { dex: 'SushiSwap', price: parseFloat(price) };
};

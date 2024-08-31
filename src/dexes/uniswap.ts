import { ethers } from 'ethers';

import { DEX_ADDRESSES } from '../config';
import { TokenPair } from '../types';
import { getProvider } from '../utils/web3';

const UNISWAP_ABI = [
  'function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts)',
];

export const getUniswapPrice = async (pair: TokenPair, amountIn: number) => {
  const provider = getProvider();
  const uniswap = new ethers.Contract(DEX_ADDRESSES.UNISWAP, UNISWAP_ABI, provider);

  const parsedAmountIn = ethers.utils.parseEther(amountIn.toString());
  const amounts = await uniswap.getAmountsOut(parsedAmountIn, [
    pair.token0.address,
    pair.token1.address,
  ]);
  const price = ethers.utils.formatEther(amounts[1]);

  return { dex: 'Uniswap', price: parseFloat(price) };
};

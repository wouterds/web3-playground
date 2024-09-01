import { ethers } from 'ethers';

import { DEX_CONTRACTS } from '~/config';
import { getProvider } from '~/utils/web3';

import { ERC20_ABI, FACTORY_ABI, PAIR_ABI } from './abi';
import { SushiSwapPairDoesNotExistError } from './errors';

const getExchangeRate = async (baseTokenAddress: string, quoteTokenAddress: string) => {
  const provider = getProvider();
  const factory = new ethers.Contract(DEX_CONTRACTS.SUSHISWAP_V2, FACTORY_ABI, provider);

  const pairAddress = await factory.getPair(baseTokenAddress, quoteTokenAddress);
  if (pairAddress === ethers.constants.AddressZero) {
    throw new SushiSwapPairDoesNotExistError(`${baseTokenAddress}-${quoteTokenAddress}`);
  }

  const pair = new ethers.Contract(pairAddress, PAIR_ABI, provider);
  const [token0, token1, [reserve0, reserve1]] = await Promise.all([
    pair.token0(),
    pair.token1(),
    pair.getReserves(),
  ]);

  const token0Contract = new ethers.Contract(token0, ERC20_ABI, provider);
  const token1Contract = new ethers.Contract(token1, ERC20_ABI, provider);
  const [decimals0, decimals1] = await Promise.all([
    token0Contract.decimals(),
    token1Contract.decimals(),
  ]);

  if (token0.toLowerCase() === baseTokenAddress.toLowerCase()) {
    return (
      parseFloat(ethers.utils.formatUnits(reserve1, decimals1)) /
      parseFloat(ethers.utils.formatUnits(reserve0, decimals0))
    );
  }

  return (
    parseFloat(ethers.utils.formatUnits(reserve0, decimals0)) /
    parseFloat(ethers.utils.formatUnits(reserve1, decimals1))
  );
};

export const SushiSwapRepository = {
  getExchangeRate,
};

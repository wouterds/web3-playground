import { ethers } from 'ethers';

import { INFURA_URL } from '../config';

export const getProvider = () => {
  return new ethers.providers.JsonRpcProvider(INFURA_URL);
};

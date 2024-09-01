import { ethers } from 'ethers';

import { INFURA_URL, INFURA_WS_URL } from '~/config';

export const getProvider = () => {
  return new ethers.providers.JsonRpcProvider(INFURA_URL);
};

export const getWsProvider = () => {
  return new ethers.providers.WebSocketProvider(INFURA_WS_URL);
};

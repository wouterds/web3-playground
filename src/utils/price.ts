import { logger } from './logger';

const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3';

export const getEthUsdPrice = async () => {
  try {
    const response = await fetch(
      `${COINGECKO_API_URL}/simple/price?ids=ethereum&vs_currencies=usd`,
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data && data.ethereum && data.ethereum.usd) {
      return data.ethereum.usd as number;
    } else {
      throw new Error('Unable to fetch ETH price from CoinGecko');
    }
  } catch (error) {
    logger.error('Error fetching ETH price:', error);
    throw error;
  }
};

import picocolors from 'picocolors';

import { WETH_TOKEN } from './config';
import { getSushiSwapPrice } from './dexes/sushiswap';
import { getUniswapPrice } from './dexes/uniswap';
import { PriceInfo, TokenPair } from './types';
import { logger } from './utils/logger';
import { calculateArbitrage } from './utils/math';
import { getPopularTokens as getTokens } from './utils/tokens';

async function findArbitrageOpportunities(pair: TokenPair, amountIn: number) {
  const tokenSymbol = picocolors.blue(pair.token1.symbol.padEnd(6));
  const tokenAddress = picocolors.cyan(pair.token1.address.padEnd(43));

  try {
    const prices: PriceInfo[] = await Promise.all([
      getUniswapPrice(pair, amountIn),
      getSushiSwapPrice(pair, amountIn),
    ]);

    const arbitragePercentage = calculateArbitrage(prices);
    const formattedArbitrage = (arbitragePercentage * 100).toFixed(2);

    const uniswapPrice = picocolors.yellow(prices[0].price.toFixed(6).padEnd(12));
    const sushiSwapPrice = picocolors.yellow(prices[1].price.toFixed(6).padEnd(12));
    const arbitrage = picocolors.green(formattedArbitrage.padStart(4) + '%');

    const logMessage = `${tokenSymbol} ${tokenAddress} Uniswap: ${uniswapPrice} SushiSwap: ${sushiSwapPrice} Arbitrage: ${arbitrage}`;

    if (arbitragePercentage < 0.002) {
      logger.error(logMessage);
    } else if (arbitragePercentage < 0.01) {
      logger.warn(logMessage);
    } else {
      logger.event(logMessage);
    }
  } catch (_error) {
    logger.error(`${tokenSymbol} ${tokenAddress}`);
  }
}

async function main() {
  const ETH_AMOUNT = 0.25;
  const tokens = await getTokens();

  logger.wait(picocolors.white('Checking arbitrage opportunities:'));
  for (const token of tokens) {
    const pair: TokenPair = {
      token0: WETH_TOKEN,
      token1: token,
    };

    await findArbitrageOpportunities(pair, ETH_AMOUNT);
  }
}

main().catch(logger.error);

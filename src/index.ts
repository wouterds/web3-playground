import picocolors from 'picocolors';

import { WETH_TOKEN } from './config';
import { CoinpaprikaRepository, SushiSwapRepository } from './repositories';
import { TokenRepository } from './repositories/token';
import { logger } from './utils/logger';

const main = async () => {
  const start = Date.now();
  logger.wait('Fetching WETH USD price...');
  const wethPrice = await CoinpaprikaRepository.getUSDPrice(WETH_TOKEN.address);
  logger.info(picocolors.yellow(`1 ${WETH_TOKEN.symbol} = $${wethPrice.toFixed(2)}`));

  logger.wait('Fetching Sushiswap WETH quotes for tokens...');
  const tokens = TokenRepository.getAll();

  await Promise.all(
    tokens.map(async (token) => {
      const tokenSymbol = picocolors.blue(token.symbol.padEnd(6));
      const tokenAddress = picocolors.cyan(token.address.padEnd(42));
      const quote = await SushiSwapRepository.getExchangeRate(token.address, WETH_TOKEN.address);
      const usdPrice = quote * wethPrice;

      logger.event(
        `${tokenSymbol} ${tokenAddress} ${picocolors.yellow(`${quote.toFixed(8)} ${WETH_TOKEN.symbol}`)} ${picocolors.green(`$${usdPrice.toFixed(2)}`)}`,
      );
    }),
  );

  logger.info(
    `Fetched WETH quotes for ${tokens.length} tokens in ${((Date.now() - start) / 1000).toFixed(3)}s`,
  );
};

main().catch(logger.error);

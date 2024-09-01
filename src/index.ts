import { Table } from 'console-table-printer';
import picocolors from 'picocolors';

import { WETH_TOKEN } from './config';
import { CoinpaprikaRepository, SushiSwapRepository } from './repositories';
import { TokenRepository } from './repositories/token';
import { formatUSDPrice, logger } from './utils';

const main = async () => {
  logger.wait('Fetching SushiSwap WETH quotes...');
  const wethPrice = await CoinpaprikaRepository.getUSDPrice(WETH_TOKEN.address);
  logger.info(picocolors.yellow(`1 ${WETH_TOKEN.symbol} = $${wethPrice.toFixed(2)}`));

  const tokens = TokenRepository.getAll();

  const table = new Table({
    columns: [
      { name: 'Symbol', alignment: 'left', color: 'blue' },
      { name: 'Contract', alignment: 'left', color: 'cyan' },
      { name: 'WETH', alignment: 'right', color: 'yellow' },
      { name: 'USD', alignment: 'right', color: 'green' },
    ],
  });

  await Promise.all(
    tokens.map(async (token) => {
      const quote = await SushiSwapRepository.getExchangeRate(token.address, WETH_TOKEN.address);
      const usdPrice = quote * wethPrice;

      table.addRow({
        Symbol: token.symbol,
        Contract: token.address,
        WETH: quote.toFixed(9),
        USD: formatUSDPrice(usdPrice),
      });
    }),
  );

  table.printTable();
};

main().catch(logger.error);

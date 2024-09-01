import { Table } from 'console-table-printer';

import { WETH_TOKEN } from '~/config';
import {
  getSushiSwapExchangeRate,
  getTokens,
  getUniswapExchangeRate,
  logger,
  SushiSwapPairDoesNotExistError,
  UniswapPairDoesNotExistError,
} from '~/utils';

const main = async () => {
  logger.wait('Fetching onchain WETH quotes...');

  const table = new Table({
    columns: [
      { name: 'Symbol', alignment: 'left', color: 'blue' },
      { name: 'Contract', alignment: 'left', color: 'cyan' },
      { name: 'Sushi', alignment: 'right', color: 'yellow' },
      { name: 'Uni', alignment: 'right', color: 'yellow' },
      { name: 'Diff', alignment: 'right', color: 'green' },
    ],
  });

  await Promise.all(
    getTokens().map(async (token) => {
      try {
        const [sushiQuote, uniQuote] = await Promise.all([
          getSushiSwapExchangeRate(token.address, WETH_TOKEN.address),
          getUniswapExchangeRate(token.address, WETH_TOKEN.address),
        ]);

        const diff = (Math.abs(sushiQuote - uniQuote) / ((sushiQuote + uniQuote) / 2)) * 100;

        table.addRow({
          Symbol: token.symbol,
          Contract: token.address,
          Sushi: `${sushiQuote.toFixed(9)} WETH`,
          Uni: `${uniQuote.toFixed(9)} WETH`,
          Diff: `${diff.toFixed(2)}%`,
        });
      } catch (e) {
        if (
          e instanceof UniswapPairDoesNotExistError ||
          e instanceof SushiSwapPairDoesNotExistError
        ) {
          logger.warn(e.message);
        }
      }
    }),
  );

  table.printTable();
};

main().catch(logger.error);

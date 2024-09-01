import { Table } from 'console-table-printer';

import { WETH_TOKEN } from '~/config';
import { Token } from '~/types';
import {
  getSushiSwapExchangeRate,
  getUniswapExchangeRate,
  logger,
  SushiSwapPairDoesNotExistError,
  UniswapPairDoesNotExistError,
} from '~/utils';

const TOKENS: Token[] = [
  { symbol: 'DAI', address: '0x6B175474E89094C44Da98b954EedeAC495271d0F' },
  { symbol: 'USDC', address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48' },
  { symbol: 'USDT', address: '0xdAC17F958D2ee523a2206206994597C13D831ec7' },
  { symbol: 'WBTC', address: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599' },
  { symbol: 'LINK', address: '0x514910771AF9Ca656af840dff83E8264EcF986CA' },
  { symbol: 'FTM', address: '0x4E15361FD6b4BB609Fa63C81A2be19d873717870' },
  { symbol: 'CREAM', address: '0x2ba592F78dB6436527729929AAf6c908497cB200' },
  { symbol: 'COMP', address: '0xc00e94Cb662C3520282E6f5717214004A7f26888' },
  { symbol: 'PEPE', address: '0x6982508145454ce325ddbe47a25d4ec3d2311933' },
  { symbol: 'SHIB', address: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce' },
  { symbol: 'FLOKI', address: '0xcf0c122c6b73ff809c693db761e7baebe62b6a2e' },
];

const main = async () => {
  const quotePair = WETH_TOKEN;

  logger.wait(`Fetching ${quotePair.symbol} quotes...`);

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
    TOKENS.map(async (token) => {
      try {
        const [sushiQuote, uniQuote] = await Promise.all([
          getSushiSwapExchangeRate(token.address, quotePair.address),
          getUniswapExchangeRate(token.address, quotePair.address),
        ]);

        const diff = (Math.abs(sushiQuote - uniQuote) / ((sushiQuote + uniQuote) / 2)) * 100;

        table.addRow({
          Symbol: token.symbol,
          Contract: token.address,
          Sushi: `${sushiQuote.toFixed(9)} ${quotePair.symbol}`,
          Uni: `${uniQuote.toFixed(9)} ${quotePair.symbol}`,
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

import { getWsProvider, logger } from '~/utils';

async function scanPendingTransactions() {
  const provider = getWsProvider();
  provider.on('pending', async (txHash) => {
    logger.wait(`analyzing ${txHash}...`);
  });

  logger.wait('scanning pending DEX transactions...');
}

scanPendingTransactions();

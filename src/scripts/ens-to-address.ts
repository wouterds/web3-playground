import { getProvider, logger } from '~/utils';

const ENS = 'wouterds.eth';

const main = async () => {
  logger.wait(`Fetching ${ENS}...`);

  const provider = getProvider();
  const resolver = await provider.getResolver(ENS);
  if (!resolver) {
    logger.error(`No resolver found for ${ENS}`);
    return;
  }

  const address = await resolver.getAddress();
  logger.event(`${ENS} = ${address}`);
};

main().catch(logger.error);

export class UniswapPairDoesNotExistError extends Error {
  constructor(baseTokenAddress: string, quoteTokenAddress: string) {
    super(`Uniswap pair does not exist ${baseTokenAddress}/${quoteTokenAddress}`);
  }
}

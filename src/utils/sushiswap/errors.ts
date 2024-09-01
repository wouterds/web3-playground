export class SushiSwapPairDoesNotExistError extends Error {
  constructor(baseTokenAddress: string, quoteTokenAddress: string) {
    super(`SushiSwap pair does not exist ${baseTokenAddress}/${quoteTokenAddress}`);
  }
}

export class SushiSwapPairDoesNotExistError extends Error {
  constructor(tokenAddress: string) {
    super(`SushiSwap pair does not exist for token ${tokenAddress}`);
  }
}

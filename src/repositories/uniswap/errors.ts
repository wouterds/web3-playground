export class UniswapPairDoesNotExistError extends Error {
  constructor(tokenAddress: string) {
    super(`Uniswap pair does not exist for token ${tokenAddress}`);
  }
}

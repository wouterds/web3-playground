export const getUSDPrice = async (tokenAddress: string) => {
  const response = await fetch(
    `https://api.coinpaprika.com/v1/contracts/eth-ethereum/${tokenAddress}`,
  );
  const data = await response.json();

  return data.quotes.USD.price;
};

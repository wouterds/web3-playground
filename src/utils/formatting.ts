export const formatUSDPrice = (usdPrice: number) => {
  if (usdPrice > 10_000) {
    return `$${usdPrice.toFixed(0)}`;
  } else if (usdPrice < 0.01) {
    return `$${usdPrice.toFixed(4)}`;
  } else if (usdPrice < 0.1) {
    return `$${usdPrice.toFixed(3)}`;
  } else {
    return `$${usdPrice.toFixed(2)}`;
  }
};

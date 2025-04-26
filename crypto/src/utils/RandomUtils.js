export const getRandomPriceChange = (asset) => {
  const randomFactor = Math.random() * 0.04 - 0.02; // -2% to +2%

  const newPrice = asset.price + asset.price * randomFactor;
  const newVolume24h = asset.volume24h + asset.volume24h * randomFactor;

  return {
    price: newPrice,
    percentChange1h: asset.percentChange1h + randomFactor * 10,
    percentChange24h: asset.percentChange24h + randomFactor * 5,
    volume24h: newVolume24h,
  };
};

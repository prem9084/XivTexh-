import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assets: [
    {
      id: 1,
      name: "Bitcoin",
      symbol: "BTC",
      logoUrl: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
      price: 93759.48,
      percentChange1h: 0.43,
      percentChange24h: 0.93,
      percentChange7d: 11.11,
      marketCap: 1861618902186,
      volume24h: 43874950947,
      circulatingSupply: 19.85,
      maxSupply: 21,
      chartImageUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/049/100/827/small/rising-green-arrow-with-grid-background-isolated-against-transparent-background-png.png",
    },
    {
      id: 2,
      name: "Ethereum",
      symbol: "ETH",
      logoUrl:
        "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
      price: 4995.48,
      percentChange1h: 0.31,
      percentChange24h: 1.03,
      percentChange7d: 5.41,
      marketCap: 600161890218,
      volume24h: 2843950947,
      circulatingSupply: 120,
      maxSupply: 20,
      chartImageUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/049/100/827/small/rising-green-arrow-with-grid-background-isolated-against-transparent-background-png.png",
    },
  ],
};

export const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    updateAsset: (state, action) => {
      const { id, updatedFields } = action.payload;
      const index = state.assets.findIndex((asset) => asset.id === id);
      if (index !== -1) {
        state.assets[index] = { ...state.assets[index], ...updatedFields };
      }
    },
  },
});

export const { updateAsset } = cryptoSlice.actions;
export default cryptoSlice.reducer;

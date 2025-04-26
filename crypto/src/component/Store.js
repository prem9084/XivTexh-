import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer from "../feature/CrypetoSlice.js";

export const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import rootSlice from "../ListReducer.js";
const store = configureStore({
  reducer: {
    rootSlice,
  },
});

export default store;

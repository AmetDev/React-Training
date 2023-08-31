import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { imageSLice } from "./slice/imageSlice";

const reducers = combineReducers({
  images: imageSLice.reducer,
});

export const store = configureStore({
  reducer: reducers,
});

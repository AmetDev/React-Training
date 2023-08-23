import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./favorites/fevorites.slice";

export const store = configureStore({
  reducer,
})

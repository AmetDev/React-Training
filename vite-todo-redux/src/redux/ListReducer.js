import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  writeText: "",
  ArrText: [],
};

const rootSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setWriteText(state, action) {
      state.writeText = action.payload;
    },
    setArrText(state, action) {
      state.ArrText = [...state.ArrText, action.payload];
    },
  },
});
export const { setArrText, setWriteText} = rootSlice.actions;

export default rootSlice.reducer;

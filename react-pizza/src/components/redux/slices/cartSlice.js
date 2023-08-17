
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
 
};
//
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCaterId(state, action) {
      state.categoryId = action.payload;
    },
    
  },
});
export const {setCaterId} = filterSlice.actions;

export default filterSlice.reducer;

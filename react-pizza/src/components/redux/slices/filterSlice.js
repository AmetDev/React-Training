import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoriesId: 0,
  sort: {
    name: 'популярности',
    propertyObjName: 'rating',

  }
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCaterId(state, action) {
      console.log(action)
      state.categoriesId = action.payload;

    },
  },
});

export const { setCaterId } = filterSlice.actions;

export default filterSlice.reducer;

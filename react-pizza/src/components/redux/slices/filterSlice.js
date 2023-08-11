import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
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
      console.log('action', action)
      state.categoryId = action.payload;
    },
    setSortType(state, action) {
      state.sort = action.payload
    }
    ,
  },
});

export const { setCaterId, setSortType } = filterSlice.actions;

export default filterSlice.reducer;

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/filterSlice'
export const store = configureStore({
	reducer: { counter: counterReducer },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
console.log(store)

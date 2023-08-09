import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../counter/SliceCounter'

export const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
})

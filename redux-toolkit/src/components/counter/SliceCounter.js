import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: ''
}

export const counterSlice = createSlice({
	name: 'counter',
  initialState,
	reducers: {
		handlerInput: (state) => {
			state.value = `${state.value}`
      console.log(state.value)
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload
		},
	},
})

export const { handlerInput, incrementByAmount } =
	counterSlice.actions

export default counterSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	writeText: '',
	ArrText: [],
	counter: 0,
	isClicked: false,
}

const rootSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		setWriteText(state, action) {
			state.writeText = action.payload
		},
		setArrText(state, action) {
			state.ArrText = action.payload
		},
		setCounter(state) {
			state.counter += 1
		},
		setIsClicked(state, action) {
			state.isClicked = action.payload
		},
	},
})
export const { setArrText, setWriteText, setCounter, setIsClicked } =
	rootSlice.actions

export default rootSlice.reducer

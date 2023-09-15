import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchImages = createAsyncThunk(
	'images/fetchImages',
	async ({ counter }) => {
		console.log(counter)
		const { data } = await axios.get(
			'https://jsonplaceholder.typicode.com/photos?_limit=10&_page=' + counter
		)
		return data
	}
)

export const imageSLice = createSlice({
	name: 'images',
	initialState: {
		images: [],
		isLoading: false,
		error: null,
		counter: 0,
		refClick: '',
	},
	reducers: {
		setCounter(state) {
			state.counter += 1
		},
		setRef(state, action) {
			state.refClick = action.payload;
		}
	},
	extraReducers: builder => {
		builder
			.addCase(fetchImages.pending, state => {
				state.isLoading = true
			})
			.addCase(fetchImages.fulfilled, (state, action) => {
				state.isLoading = false
				state.images = [...state.images, ...action.payload]
			})
			.addCase(fetchImages.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.error
				state.images = []
			})
	},
})
export const { setCounter, setRef } = imageSLice.actions

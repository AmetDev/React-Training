import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchImages = createAsyncThunk('images/fetchImages', async () => {
	console.log('aaa')
	const { data } = await axios.get(
		'https://jsonplaceholder.typicode.com/photos?_limit=10&_page=1'
	)
	return data
})

export const imageSLice = createSlice({
	name: 'images',
	initialState: {
		images: [],
		isLoading: false,
		error: null,
	},
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchImages.pending, state => {
				state.isLoading = true
			})
			.addCase(fetchImages.fulfilled, (state, action) => {
				state.isLoading = false
				state.images = action.payload
			})
			.addCase(fetchImages.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.error
				state.images = []
			})
	},
})

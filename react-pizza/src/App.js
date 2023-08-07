import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header.jsx'
import Cart from './pages/Cart.jsx'
import Home from './pages/Home'
import NoteFoundBlock from './pages/NoteFound'
import './scss/app.scss'

import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './components/redux/slices/filterSlice'
export const SearchContext = React.createContext()
function App() {
	const count = useSelector(state => state.counter.count)
	const dispatch = useDispatch()

	const [searchValue, setSearchValue] = React.useState('')

	console.log(searchValue)
	return (
		<div className='wrapper'>
			<div>
				<div>
					<button
						aria-label='Increment value'
						onClick={() => dispatch(increment())}
					>
						Increment
					</button>
					<span>{count}</span>
					<button
						aria-label='Decrement value'
						onClick={() => dispatch(decrement())}
					>
						Decrement
					</button>
				</div>
			</div>
			<SearchContext.Provider value={{ searchValue, setSearchValue }}>
				<Header />
				<div className='content'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='*' element={<NoteFoundBlock />} />
						<Route path='cart' element={<Cart />} />
					</Routes>
				</div>
			</SearchContext.Provider>
		</div>
	)
}

export default App

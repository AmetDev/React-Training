import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header.jsx'
import Cart from './pages/Cart.jsx'
import Home from './pages/Home'
import NoteFoundBlock from './pages/NoteFound'
import './scss/app.scss'

export const SearchContext = React.createContext()
function App() {

	const [searchValue, setSearchValue] = React.useState('')

	return (
		<div className='wrapper'>

			<SearchContext.Provider value={{ searchValue, setSearchValue }}>
				<Header />
				<div className='content'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='*' element={<NoteFoundBlock/>} />
						<Route path='cart' element={<Cart/>} />
						
					</Routes>
				</div>
			</SearchContext.Provider>
		</div>
	)
}

export default App 


import React from 'react'
import './App.css'
import Header from './components/Header.jsx'
import './scss/app.scss'
import Home from './pages/Home'
import NoteFoundBlock from './pages/NoteFound'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart.jsx'

function App() {
	const [searchValue, setSearchValue] = React.useState('')
	console.log(searchValue)
	return (
		<div className='wrapper'>
			<Header searchValue={searchValue} setSearchValue={setSearchValue} />
			<div className='content'>
		
					<Routes>
						<Route path='/' element={<Home searchValue={searchValue} setSearchValue={setSearchValue}  />}/>
						<Route path='*' element={<NoteFoundBlock/>}/>
						<Route path='cart' element={<Cart/>}/>
					</Routes>
				</div>
		
		</div>
	)
}

export default App

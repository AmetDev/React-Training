import React from 'react'
import './App.css'
import Header from './components/Header.jsx'
import './scss/app.scss'
import Home from './pages/Home'
import NoteFoundBlock from './pages/NoteFound'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart.jsx'

function App() {


	return (
		<div className='wrapper'>
			<Header />
			<div className='content'>
				<div className='container'>
					<Routes>
						<Route path='/' element={<Home/>}/>
						<Route path='*' element={<NoteFoundBlock/>}/>
						<Route path='cart' element={<Cart/>}/>
					</Routes>
				</div>
			</div>
		</div>
	)
}

export default App

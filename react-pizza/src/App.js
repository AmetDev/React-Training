import React from 'react'
import './App.css'
import Catagories from './components/Catagories.jsx'
import Header from './components/Header.jsx'
import Sort from './components/Sort.jsx'
import './scss/app.scss'
import PizzaSkeleton from './components/PizzaBlock/Skeleton'
import PizzaBlock from './components/PizzaBlock/index.jsx'

function App() {
	const [pizzas, setPizza] = React.useState([])
	const [isLoading, setIsLoading] = React.useState(true)
	const fakeArr = [[undefined], [undefined], [undefined], [undefined], [undefined]]
	React.useEffect(() => {
		fetch('https://64c4f551c853c26efada564f.mockapi.io/items')
			.then(response => {
				return response.json()
			})
			.then(arr => setPizza(arr))
			setIsLoading(false)

	}, [])
	console.log(pizzas)

	return (
		<div className='wrapper'>
			<Header />
			<div className='content'>
				<div className='container'>
					<div className='content__top'>
						<Catagories />
						<Sort />
					</div>
					<h2 className='content__title'>Все пиццы</h2>
					<div className='content__items'>
						{/* {pizzas.map(obj => {
							return <PizzaBlock key={obj.id} {...obj} />
						})} */}
						{
							isLoading? fakeArr.map(obj => {
								return <PizzaSkeleton key={obj.id} {...obj} />
							}): pizzas.map(obj => {
									return <PizzaBlock key={obj.id} {...obj} />
								})
							})
						
					</div>
				</div>
			</div>
		</div>
	)
}

export default App

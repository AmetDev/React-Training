import React from 'react';
import Catagories from '../components/Catagories.jsx'
import PizzaSkeleton from '../components/PizzaBlock/Skeleton'
import PizzaBlock from '../components/PizzaBlock/index.jsx'
import Sort from '../components/Sort.jsx'

const Home = () => {
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
		<>
			{' '}
			<div className='content__top'>
				<Catagories />
				<Sort />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{isLoading
					? fakeArr.map(obj => {
							return <PizzaSkeleton key={obj.id} {...obj} />
					  })
					: pizzas.map(obj => {
							return <PizzaBlock key={obj.id} {...obj} />
					  })}
				)
			</div>
		</>
	)
}

export default Home

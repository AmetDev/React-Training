import React from 'react'
import Catagories from '../components/Catagories.jsx'
import PizzaSkeleton from '../components/PizzaBlock/Skeleton'
import PizzaBlock from '../components/PizzaBlock/index.jsx'
import Sort from '../components/Sort.jsx'

const Home = ({ searchValue, setSearchValue }) => {
	const [pizzas, setPizza] = React.useState([])
	const [isLoading, setIsLoading] = React.useState(false)
	const [categoriesId, setCategoriesId] = React.useState(0)
	const [sortType, setSortType] = React.useState({
		name: 'популярности',
		propertyObjName: 'rating',
		orderProperty: 'desc',
		index: 0,
	})
	const fakeArr = [
		[undefined],
		[undefined],
		[undefined],
		[undefined],
		[undefined],
	]
	console.log(categoriesId)
	console.log('typesort', sortType)
	const searchsValue = searchValue ? `&search=${searchValue}` : ''
	React.useEffect(() => {
		setIsLoading(true)
		fetch(
			'https://64c4f551c853c26efada564f.mockapi.io/items?' +
				`${categoriesId === 0 ? '' : `category=${categoriesId}`}` +
				`&sortBy=${sortType.propertyObjName}&order=${sortType.orderProperty}` +
				searchsValue
		)
			.then(response => {
				return response.json()
			})
			.then(arr => {
				setPizza(arr)
				setIsLoading(false)
			})

		window.scrollTo(0, 0)
	}, [categoriesId, sortType, searchValue])
	console.log(isLoading)
	const pizzasFilter = pizzas.filter(obj => {
		return obj.title.toLowerCase().includes(searchValue.toLowerCase())
	})
	pizzasFilter.map(obj => {
		return <PizzaBlock key={obj.id} {...obj} />
	})
	console.log(pizzasFilter)
	return (
		<>
			<div className='container'>
				{' '}
				<div className='content__top'>
					<Catagories
						value={categoriesId}
						onClickCategory={i => setCategoriesId(i)}
					/>
					<Sort selectValue={sortType} onClickSort={i => setSortType(i)} />
				</div>
				<h2 className='content__title'>Все пиццы</h2>
				<div className='content__items'>
					{isLoading
						? fakeArr.map(obj => {
								return <PizzaSkeleton key={obj.id} {...obj} />
						  })
						: pizzasFilter
						? pizzasFilter.map(obj => {
								return <PizzaBlock key={obj.id} {...obj} />
						  })
						: pizzas.map(obj => {
								return <PizzaBlock key={obj.id} {...obj} />
						  })}
				</div>
			</div>
		</>
	)
}

export default Home

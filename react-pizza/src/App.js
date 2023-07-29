import './App.css'
import './scss/app.scss'
import Header from './components/Header.jsx'
import Catagories from './components/Catagories.jsx'
import Sort from './components/Sort.jsx'
import PizzaBlock from "./components/PizzaBlock.jsx"

import pizzas from "./assets/pizzas.json"

function App() {
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
						{pizzas.map(obj => {
							return (
								<PizzaBlock  key={obj.id}  {...obj}/>
							
							)
						})}
					
					
						
					</div>
				</div>
			</div>
		</div>
	)
}

export default App

import React from 'react'

function Catagories() {

	const [activeIndex, setActiveIndex] = React.useState(0)
	const categories = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые',
	]
	const onClickCategory = index => {
		setActiveIndex(index)
	}
	return (
		<div className='categories'>
			<ul>
				{categories.map((el, index) => {
					return (
						<li key={index}
							onClick={() => onClickCategory(index)}
							className={activeIndex === index ? 'active' : ''}
						>
							{el}
						</li>
					)
				})}
			</ul>
		</div>
	)
}
export default Catagories


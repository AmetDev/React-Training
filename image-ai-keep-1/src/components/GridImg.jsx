import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchImages, setCounter } from '../redux/slice/imageSlice'
import ImageItem from './ImageItem'

const GridImg = () => {
	const imgFunc = (bool, element) => {
		setSwitcher(bool)
		setCurrentElement(element)
	}
	const dispatch = useDispatch()
	const [switcher, setSwitcher] = useState(false)
	const [currentElement, setCurrentElement] = useState({})
	const { counter, images, error, isLoading } = useSelector(
		state => state.images
	)

	console.log(counter, images, error, isLoading)
	useEffect(() => {
		const func = async () => {
			await dispatch(fetchImages({ counter }))
		}
		func()
	}, [counter])
	return (
		<>
			{switcher && <ImageItem {...currentElement} />}
			{isLoading ? (
				<div>загрузка...{isLoading}</div>
			) : error ? (
				<div>{error}</div>
			) : images ? (
				<ul className='grid grid-cols-3 gap-4 mt-5'>
					{images.map(el => (
						<li
							onClick={() => imgFunc(true, el)}
							className='w-[454px] h-[460px] m-2'
							key={el.id}
						>
							<img className='rounded-[50px]' src={el.url} alt={el.title} />
						</li>
					))}
				</ul>
			) : (
				''
			)}

			<button
				onClick={() => dispatch(setCounter())}
				className='bg-white w-16 h-8'
				type='button'
			>
				<h1>MORE...</h1>
			</button>
		</>
	)
}

export default GridImg

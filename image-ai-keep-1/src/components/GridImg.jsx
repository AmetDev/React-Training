import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchImages } from '../redux/slice/imageSlice'

const GridImg = () => {
	const dispatch = useDispatch()

	const { images, error, isLoading } = useSelector(state => state.images)
	console.log(images, error, isLoading)
	useEffect(() => {
		const func = async () => {
			await dispatch(fetchImages())
		}
		func()
	}, [])
	return (
		<>
			{isLoading ? (
				<div>загрузка...{isLoading}</div>
			) : error ? (
				<div>{error}</div>
			) : images ? (
				<ul className='grid grid-cols-3 gap-4 mt-5'>
					{images.map(el => (
						<li className='w-[454px] h-[460px] m-2 rounded-[50px]' key={el.id}>
							<img src={el.url} alt={el.title} />
						</li>
					))}
				</ul>
			) : (
				''
			)}
			{/*<div className="grid grid-cols-3 gap-4 mt-5">
        <div className="bg-white w-[454px] h-[460px] m-2 rounded-[50px]"></div>
        <div className="bg-white w-[454px] h-[460px] m-2 rounded-[50px]"></div>
        <div className="bg-white w-[454px] h-[460px] m-2 rounded-[50px]"></div>
        <div className="bg-white w-[454px] h-[460px] m-2 rounded-[50px]"></div>
        <div className="bg-white w-[454px] h-[460px] m-2 rounded-[50px]"></div>
        <div className="bg-white w-[454px] h-[460px] m-2 rounded-[50px]"></div>
      </div>*/}
		</>
	)
}

export default GridImg

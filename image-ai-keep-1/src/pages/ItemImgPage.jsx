import GridImg from '../components/GridImg'
import { Header } from '../components/Header'


export const MainPage = () => {
	return (
		<>
			<div className='flex justify-center items-center flex-col'>
				<Header />
				<GridImg />
			</div>
		</>
	)
}

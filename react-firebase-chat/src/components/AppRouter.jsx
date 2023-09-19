import { Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from './Router'

const AppRouter = () => {
	const user = false
	return user ? (
		<Routes>
			<Route path={privateRoutes.path} element={privateRoutes.component}>
				{' '}
			</Route>
		</Routes>
	) : (
		<Routes>
			<Route path={publicRoutes.path} element={publicRoutes.component}></Route>
		</Routes>
	)
}

export default AppRouter

import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import InputFileUpload from './components/Button'
import { setArrText, setWriteText } from './redux/ListReducer'
function App() {
	const dispatch = useDispatch()
	const { writeText, ArrText } = useSelector(state => state.rootSlice)
	const funcOnSubmit = () => {
		dispatch(setArrText(writeText))
	}
	return (
		<>
			<div className='addTodo'>
				<input
					onChange={event => dispatch(setWriteText(event.target.value))}
					type='text'
					placeholder='write some text...'
				/>
				<button onClick={() => funcOnSubmit()}>click</button>
			</div>
			<div>
				<ul>
					{ArrText.map(el => {
						return (
							<div className='elementsList' key={el}>
								<div>{el}</div>
								<div>
									<button className='btnDelete'>x</button>
									<button className='btnDelete'>RED</button>
									<InputFileUpload />
									<input type='checkbox' id='scales' name='scales' />
								</div>
							</div>
						)
					})}
				</ul>
			</div>
		</>
	)
}

export default App

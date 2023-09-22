import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { Button, ThemeProvider } from '@mui/material'
import Icon from '@mui/material/Icon'
import TextField from '@mui/material/TextField'
import { green, red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { setArrText, setCounter, setWriteText } from './redux/ListReducer'

function App() {
	const theme = createTheme({
		palette: {
			mode: 'light',
			secondary: {
				main: red[500],
			},

			third: {
				main: green[500],
			},
		},
	})

	const dispatch = useDispatch()
	const { writeText, ArrText, counter } = useSelector(state => state.rootSlice)
	const funcOnSubmit = () => {
		dispatch(setCounter(counter))
		dispatch(setArrText([...ArrText, { text: writeText, id: counter }]))
		dispatch(setWriteText(''))
	}

	const deleteElement = el => {
		const { id } = el
		const deletedElementInArray = ArrText.filter(el => (el.id !== id ? el : ''))
		dispatch(setArrText(deletedElementInArray))
	}
	const onClickChooseElement = el => {
		dispatch(setWriteText(el.text))
	}
	const editElement = el => {
		const { id } = el
		const deletedElementInArray = ArrText.filter(el => (el.id !== id ? el : ''))
		dispatch(setArrText(deletedElementInArray))
		dispatch(
			setArrText([...deletedElementInArray, { text: writeText, id: id }])
		)
		dispatch(setWriteText(''))
	}
	return (
		<ThemeProvider theme={theme}>
			<div className=''>
				<div className='addTodo'>
					<TextField
						id='outlined-basic'
						label='Write 1th task...'
						variant='outlined'
						value={writeText}
						onChange={event => dispatch(setWriteText(event.target.value))}
					/>

					<Button
						onClick={() => funcOnSubmit()}
						component='label'
						variant='contained'
						startIcon={<Icon>add_circle</Icon>}
					>
						ADD
					</Button>
				</div>
				<div>
					<ul>
						{ArrText.map(el => {
							return (
								<div
									onClick={() => onClickChooseElement(el)}
									className='elementsList'
									key={el.id}
								>
									<div data-id={el.id}>{el.text}</div>
									<div>
										<Button
											color='third'
											component='label'
											variant='contained'
											startIcon={<EditIcon />}
											className='btnDelete'
											onClick={() => editElement(el)}
										>
											EDIT
										</Button>

										<Button
											color='secondary'
											component='label'
											variant='contained'
											startIcon={<DeleteIcon />}
											onClick={() => deleteElement(el)}
										>
											DELETE
										</Button>
									</div>
								</div>
							)
						})}
					</ul>
				</div>
			</div>
		</ThemeProvider>
	)
}

export default App

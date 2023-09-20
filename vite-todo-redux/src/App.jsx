import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { Button, ThemeProvider } from '@mui/material'
import Icon from '@mui/material/Icon'
import TextField from '@mui/material/TextField'
import { green, red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { setArrText, setWriteText } from './redux/ListReducer'

function App() {
	const dispatch = useDispatch()
	const { writeText, ArrText } = useSelector(state => state.rootSlice)
	const funcOnSubmit = () => {
		console.log('hello')
		dispatch(setArrText(writeText))
	}

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

	const deleteElement = e => {
		console.log(e)
	}

	return (
		<ThemeProvider theme={theme}>
			<div className=''>
				<div className='addTodo'>
					<TextField
						id='outlined-basic'
						label='Write 1th task...'
						variant='outlined'
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
								<div className='elementsList' key={el}>
									<div>{el}</div>
									<div>
										<Button
											color='third'
											component='label'
											variant='contained'
											startIcon={<EditIcon />}
											className='btnDelete'
										>
											EDIT
										</Button>

										<Button
											color='secondary'
											component='label'
											variant='contained'
											startIcon={<DeleteIcon />}
											onClick={e => deleteElement(e)}
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

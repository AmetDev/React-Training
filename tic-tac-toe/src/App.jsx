import { useState } from 'react'
import './App.css'

function App() {
	const [squarevalues, setSquarevalues] = useState(Array(9).fill(null))
	const handleClick = i => {
		squarevalues[i] = 'x'
		setSquarevalues(squarevalues)
	}
	const Square = ({ squarevalues, handleClick }) => {
		return (
			<button
				onClick={handleClick}
				className='text-white border-2 h-[30px] w-[30px]'
			>
				{squarevalues}
			</button>
		)
	}
	return (
		<div>
			<div className=''>
				<div className='level_1'>
					<Square squarevalues={squarevalues[0]} />
					<Square squarevalues={squarevalues[1]} />
					<Square squarevalues={squarevalues[2]} />
				</div>
				<div className='level_1'>
					<Square squarevalues={squarevalues[3]} />
					<Square squarevalues={squarevalues[4]} />
					<Square squarevalues={squarevalues[5]} />
				</div>
				<div className='level_1'>
					<Square squarevalues={squarevalues[6]} />
					<Square squarevalues={squarevalues[7]} />
					<Square squarevalues={squarevalues[8]} />
				</div>
			</div>
		</div>
	)
}

export default App

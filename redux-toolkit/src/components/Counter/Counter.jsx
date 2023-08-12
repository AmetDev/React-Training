import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handlerInput } from '../counter/SliceCounter.js'

export function Counter() {
	const valueText = useSelector(state => state.counter.value)
	const dispatch = useDispatch()
	return (
		<div>
			<div>
				<input
					type='text'
					value={valueText}
					onChange={() => dispatch(handlerInput(valueText))}
				/>
			</div>
      <div>{valueText}</div>
		</div>
	)
}

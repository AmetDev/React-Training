import Button from '@mui/material/Button'
import * as React from 'react'

export default function ButtonBlue({ contain, icon }) {
	return (
		<Button component='label' variant='contained' startIcon={icon}>
			{contain}
		</Button>
	)
}

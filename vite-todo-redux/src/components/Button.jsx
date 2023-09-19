import DeleteIcon from '@mui/icons-material/Delete'
import Button from '@mui/material/Button'
import * as React from 'react'

export default function InputFileUpload() {
	return (
		<Button component='label' variant='contained' startIcon={<DeleteIcon />}>
			DELETE
		</Button>
	)
}



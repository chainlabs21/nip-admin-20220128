import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

interface SearchProps {
  label: string
  disable?: boolean
}

export default function BasicTextFields({ label, disable }: SearchProps) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        disabled={disable}
        id="outlined-basic"
        label={label}
        variant="outlined"
      />
    </Box>
  )
}

import * as React from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

interface ButtonProps {
  subject: string
}

export default function ContainedButton({ subject }: ButtonProps) {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained">{subject}</Button>
    </Stack>
  )
}

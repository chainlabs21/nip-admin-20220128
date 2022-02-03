import * as React from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

interface ButtonProps {
  subject: string
  handleOpen?: () => void
}

export default function ContainedButton({ subject, handleOpen }: ButtonProps) {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        sx={{
          height: 55.1,
        }}
        onClick={handleOpen}
        variant="contained"
      >
        {subject}
      </Button>
    </Stack>
  )
}

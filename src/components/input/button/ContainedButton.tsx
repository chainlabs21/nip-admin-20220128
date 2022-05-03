import * as React from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

interface ButtonProps {
  subject: string
  handleOpen?: () => void
  setUuid?: (uuid: string) => void
}

export default function ContainedButton({ subject, handleOpen, setUuid }: ButtonProps) {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        sx={{
          width: '162px',
          height: '55.1px',
        }}
        onClick={() => {
          if (handleOpen && setUuid) {
            setUuid("");
            handleOpen();
          }
        }}
        variant="contained"
      >
        {subject}
      </Button>
    </Stack>
  )
}

import React from 'react'
import Button from '@mui/material/Button'

interface ButtonTitles {
  first: string
  second: string
}

const ButtonGroup: React.FC<ButtonTitles> = ({ first, second }) => {
  return (
    <>
      <Button sx={{ width: '162px', height: '44px' }} variant="outlined">
        {first}
      </Button>
      <Button
        sx={{ marginLeft: '8px', width: '162px', height: '44px' }}
        variant="contained"
      >
        {second}
      </Button>
    </>
  )
}

export default ButtonGroup

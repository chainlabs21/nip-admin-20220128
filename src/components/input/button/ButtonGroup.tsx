import React from 'react'
import Button from '@mui/material/Button'

interface ButtonTitles {
  first: string
  second: string
}

const ButtonGroup: React.FC<ButtonTitles> = ({ first, second }) => {
  return (
    <>
      <Button variant="contained">{first}</Button>
      <Button sx={{ marginLeft: '8px' }} variant="outlined">
        {second}
      </Button>
    </>
  )
}

export default ButtonGroup

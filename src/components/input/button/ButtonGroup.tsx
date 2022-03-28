import React from 'react'
import Button from '@mui/material/Button'
import axios from 'axios'
import { API } from '../../../configs/api'

interface ButtonTitles {
  first: string
  second?: string
  style?: any
}

const ButtonGroup: React.FC<ButtonTitles> = ({ first, second }) => {
  const onclickPutStartBtn = () => {
    axios.put(API.API_PUTTIME, {}).then((resp) => {
      console.log(resp)
    })
  }
  const onclickPutStopBtn = () => {
    axios.put(API.API_PUTTIME, {}).then((resp) => {
      console.log(resp)
    })
  }

  return (
    <>
      <Button
        onClick={onclickPutStartBtn}
        sx={{ width: '162px', height: '44px' }}
        variant="outlined"
      >
        {first}
      </Button>
      <Button
        onClick={onclickPutStopBtn}
        sx={{ marginLeft: '8px', width: '162px', height: '44px' }}
        variant="contained"
      >
        {second}
      </Button>
    </>
  )
}
export const ButtonGroupSeconed: React.FC<ButtonTitles> = ({
  first,
  second,
  style,
}) => {
  return (
    <>
      <Button
        sx={{
          width: '162px',
          height: '44px',
          bgcolor: 'text.disabled',
          color: 'black',
        }}
        variant="contained"
      >
        {first}
      </Button>
    </>
  )
}
export const ButtonGroupThird: React.FC<ButtonTitles> = ({ first }) => {
  return (
    <>
      <Button
        sx={{
          cursor: 'none',
          width: '162px',
          height: '44px',
          bgcolor: 'text.disabled',
          color: 'black',
          marginRight: '30px',
        }}
        variant="contained"
      >
        {first}
      </Button>
    </>
  )
}

export default ButtonGroup

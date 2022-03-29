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
    axios
      .put(API.API_PUTSTATE + '/START', {
        BALLOT_ACTIVE: 'START',
      })
      .then((resp) => {
        let { status, respdata } = resp.data
        if (status == 'OK') {
          axios
            .post(API.API_MQ, {
              BALLOT_ACTIVE: 'START',
            })
            .then((resp) => {
              let { status, respdata } = resp.data
              if (status == 'OK') {
                console.log('mqSTART')
                console.log(resp)
                window.location.replace('manage-auction')
              }
            })
        }
      })
  }
  const onclickPutStopBtn = () => {
    axios
      .put(API.API_PUTSTATE + '/PAUSE', {
        BALLOT_ACTIVE: 'PAUSE',
      })
      .then((resp) => {
        let { status, respdata } = resp.data
        if (status == 'OK') {
          axios
            .post(API.API_MQ, {
              BALLOT_ACTIVE: 'PAUSE',
            })
            .then((resp) => {
              let { status, respdata } = resp.data
              if (status == 'OK') {
                console.log('mqPUASE')
                console.log(resp)
                window.location.replace('manage-auction')
              }
            })
        }
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
          width: '200px',
          height: '100px',
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

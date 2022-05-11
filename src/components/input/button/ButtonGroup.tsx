import React from 'react'
import Button from '@mui/material/Button'
import axios from 'axios'
import { API } from '../../../configs/api'
import { net } from '../../../configs/net'

interface ButtonTitles {
  first: string
  second?: string
  style?: any
}

const ButtonGroup: React.FC<ButtonTitles> = ({ first, second }) => {
  return (
    <div style={{ display: 'flex', marginTop: '50px', marginBottom: '50px' }}>
      <Button sx={{ width: '162px', height: '44px' }} variant="outlined">
        {first}
      </Button>
      <Button
        sx={{ marginLeft: '30px', width: '162px', height: '44px' }}
        variant="contained"
      >
        {second}
      </Button>
    </div>
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

export const Button_Manage_Aution: React.FC<ButtonTitles> = ({
  first,
  second,
}) => {
  const onclickPutStartBtn = () => {
    axios
      .put(API.API_PUTSTATE + `/START?nettype=${net}`, {
        BALLOT_ACTIVE: 'START',
      })
      .then((resp) => {
        let { status, respdata } = resp.data
        if (status == 'OK') {
          window.location.reload()
        }
      })
  }
  const onclickPutStopBtn = () => {
    axios
      .put(API.API_PUTSTATE + `/PAUSE?nettype=${net}`, {
        BALLOT_ACTIVE: 'PAUSE',
      })
      .then((resp) => {
        let { status, respdata } = resp.data
        if (status == 'OK') {
          window.location.reload()
        }
      })
  }

  return (
    <div style={{ display: 'flex', marginTop: '50px', marginBottom: '50px' }}>
      <Button
        onClick={onclickPutStartBtn}
        sx={{ width: '162px', height: '44px' }}
        variant="outlined"
      >
        {first}
      </Button>
      <Button
        onClick={onclickPutStopBtn}
        sx={{ marginLeft: '30px', width: '162px', height: '44px' }}
        variant="contained"
      >
        {second}
      </Button>
    </div>
  )
}

export const Button_Periodic: React.FC<ButtonTitles> = ({ first, second }) => {
  const onclick_Periodic_StartBtn = () => {
    axios
      .put(API.API_PUTSTATE + `/PERIODIC_START?nettype=${net}`, {
        BALLOT_PERIODIC_ACTIVE: '1',
      })
      .then((resp) => {
        let { status, respdata } = resp.data
        if (status == 'OK') {
          axios
            .post(API.API_MQ + `?nettype=${net}`, {
              BALLOT_PERIODIC_ACTIVE: '1',
            })
            .then((resp) => {
              let { status, respdata } = resp.data
              if (status == 'OK') {
                console.log('mqSTART')
                console.log(resp)
                window.location.reload()
              }
            })
        }
      })
  }
  const onclick_Periodic_Pause_Btn = () => {
    axios
      .put(API.API_PUTSTATE + `/PERIODIC_START?nettype=${net}`, {
        BALLOT_PERIODIC_ACTIVE: '0',
      })
      .then((resp) => {
        let { status, respdata } = resp.data
        if (status == 'OK') {
          axios
            .post(API.API_MQ + `?nettype=${net}`, {
              BALLOT_PERIODIC_ACTIVE: '0',
            })
            .then((resp) => {
              let { status, respdata } = resp.data
              if (status == 'OK') {
                console.log('mqPUASE')
                console.log(resp)
                window.location.reload()
              }
            })
        }
      })
  }

  return (
    <div style={{ display: 'flex', marginTop: '50px', marginBottom: '50px' }}>
      <Button
        onClick={onclick_Periodic_StartBtn}
        sx={{ width: '162px', height: '44px' }}
        variant="outlined"
      >
        {first}
      </Button>
      <Button
        onClick={onclick_Periodic_Pause_Btn}
        sx={{ marginLeft: '30px', width: '162px', height: '44px' }}
        variant="contained"
      >
        {second}
      </Button>
    </div>
  )
}

export default ButtonGroup

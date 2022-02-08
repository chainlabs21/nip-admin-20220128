import { Checkbox } from '@mui/material'
import React from 'react'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

const CheckBox = () => {
  return <Checkbox {...label} />
}

export default CheckBox

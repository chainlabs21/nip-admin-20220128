import { MenuItem, TextField } from '@mui/material'
import React from 'react'

interface ISelectViewer {
  title: string
  menu: any[]
}

const SelectViewer: React.FC<ISelectViewer> = ({ title, menu }) => {
  
  return (
    <TextField
      sx={{
        width: '100%',
      }}
      id="outlined-select-currency"
      select
      label={title}
    >
      {menu.map((option: any, index: number) => (
        <MenuItem key={index} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  )
}

export default SelectViewer

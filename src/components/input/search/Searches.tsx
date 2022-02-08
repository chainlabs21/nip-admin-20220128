import { InputAdornment, TextField } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search'

const Searches = () => {
  return (
    <TextField
      label="검색"
      id="outlined-start-adornment"
      sx={{ m: 1, width: '100%' }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  )
}

export default Searches

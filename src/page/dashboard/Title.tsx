import React from 'react'
import Typography from '@mui/material/Typography'

const Title: React.FC = ({ children }) => {
  return (
    <Typography component="h2" variant="h6" color="#000000" gutterBottom>
      {children}
    </Typography>
  )
}

export default Title

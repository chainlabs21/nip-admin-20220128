import React from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

interface IPapers {
  title?: string
}

const Papers: React.FC<IPapers> = ({ children, title }) => {
  return (
    <Paper
      sx={{
        p: 2,
        maxWidth: '3000px',
        maxHeight: '3000px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
      }}
    >
      <Typography
        sx={{
          p: 2,
        }}
        component="h2"
        variant="h6"
        color="#000000"
        gutterBottom
      >
        {title}
      </Typography>
      {children}
    </Paper>
  )
}

export default Papers

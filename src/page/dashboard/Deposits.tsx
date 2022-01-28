import * as React from 'react'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Title from './Title'

function preventDefault(event: React.MouseEvent) {
  event.preventDefault()
}

export default function Deposits() {
  const money = '999,999,999,999,999,999,999,99'

  return (
    <React.Fragment>
      <Title>제목 없음</Title>
      <Typography component="p" variant="h4">
        {money.length > 10 ? money.slice(0, 10) + ' ...' : money.slice(0, 10)}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        2022.01.28 금요일
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          제목 없음
        </Link>
      </div>
    </React.Fragment>
  )
}

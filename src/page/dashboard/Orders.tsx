import * as React from 'react'
import Link from '@mui/material/Link'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Title from './Title'
import Paginating from './Paginating'

function createData(
  id: number,
  date: string,
  name: string,
  shipTo: string,
  paymentMethod: string,
  amount: number,
) {
  return { id, date, name, shipTo, paymentMethod, amount }
}

const rows = [
  createData(0, '2022.01.28', '동웅', '동탄', 'VISA ⠀•••• 3719', 999.99),
  createData(1, '2022.01.28', '동웅', '동탄', 'VISA ⠀•••• 3719', 999.99),
  createData(2, '2022.01.28', '동웅', '동탄', 'VISA ⠀•••• 3719', 999.99),
  createData(3, '2022.01.28', '동웅', '동탄', 'VISA ⠀•••• 3719', 999.99),
  createData(4, '2022.01.28', '동웅', '동탄', 'VISA ⠀•••• 3719', 999.99),
]

function preventDefault(event: React.MouseEvent) {
  event.preventDefault()
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>최근 주문</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>날짜</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>지역</TableCell>
            <TableCell>카드</TableCell>
            <TableCell align="right">판매</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link
        color="primary"
        href="#"
        onClick={preventDefault}
        sx={{
          mt: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Paginating />
      </Link>
    </React.Fragment>
  )
}

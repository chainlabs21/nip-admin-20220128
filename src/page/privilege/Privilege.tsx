import React from 'react'
import Title from '../dashboard/Title'
import {
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from '@mui/material'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import Table from '@mui/material/Table'
import ContainedButton from '../../components/input/button/ContainedButton'
import Paginating from '../../components/paginating/Paginating'

function createData(id: number, accountId: string) {
  return { id, accountId }
}

const rows = [
  createData(0, '최고 관리자'),
  createData(1, '중간 관리자'),
  createData(2, '일반 관리자'),
  createData(3, '열람용'),
]

const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

const Privilege = () => {
  return (
    <>
      <Title>관리자 권한 관리</Title>

      <Paper
        sx={{
          p: 2,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <article
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem',
          }}
        >
          <FormControl
            sx={{
              width: 150,
            }}
          >
            <InputLabel id="demo-simple-select-label">10개씩 보기</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
            >
              <MenuItem value={10}>10개씩</MenuItem>
              <MenuItem value={20}>20개씩</MenuItem>
              <MenuItem value={30}>30개씩</MenuItem>
            </Select>
          </FormControl>

          <article style={{ display: 'flex', alignItems: 'center' }}>
            <span>
              <ContainedButton subject={'그룹추가'} />
            </span>
            <span style={{ marginLeft: '5px' }}>
              <ContainedButton subject={'저장'} />
            </span>
          </article>
        </article>

        <Table
          style={{
            marginBottom: '1rem',
          }}
          size="medium"
        >
          <TableHead>
            <TableRow>
              <TableCell>그룹명</TableCell>
              <TableCell>전체기능</TableCell>
              <TableCell>기능1</TableCell>
              <TableCell>기능2</TableCell>
              <TableCell>기능3</TableCell>
              <TableCell>기능4</TableCell>
              <TableCell>기능5</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.accountId}</TableCell>
                <TableCell>
                  <Checkbox {...label} />
                </TableCell>
                <TableCell>
                  <Checkbox {...label} />
                </TableCell>
                <TableCell>
                  <Checkbox {...label} />
                </TableCell>
                <TableCell>
                  <Checkbox {...label} />
                </TableCell>
                <TableCell>
                  <Checkbox {...label} />
                </TableCell>
                <TableCell>
                  <Checkbox {...label} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Paginating />
      </Paper>
    </>
  )
}

export default Privilege

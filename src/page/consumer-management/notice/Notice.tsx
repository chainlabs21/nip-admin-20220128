import React from 'react'
import Title from '../../dashboard/Title'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import Link from '@mui/material/Link'
import Paginating from '../../../components/paginating/Paginating'
import { FormControl, InputLabel, MenuItem, Paper, Select } from '@mui/material'
import BasicDateRangePicker from '../../../components/date-range/DateRangePicker'
import BasicTextFields from '../../../components/input/search/SearchField'
import ContainedButton from '../../../components/input/button/ContainedButton'
import { useNavigate } from 'react-router-dom'

const rows = [
  {
    number: '0',
    role: '공지',
    title: 'ssss',
    owner: 'aaaaaaaa',
    date: '2022-02-04',
    views: '111',
  },
]

const Notice = () => {
  const navigate = useNavigate()

  const handleOpen = () => {
    navigate('/notice/register')
  }

  return (
    <>
      <Title>공지사항</Title>
      <Paper
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <article
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
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

          <BasicDateRangePicker />

          <article style={{ display: 'flex', alignItems: 'center' }}>
            <BasicTextFields label={'Search'} />
            <ContainedButton handleOpen={handleOpen} subject={'등록'} />
          </article>
        </article>

        <Table size="medium">
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>분류</TableCell>
              <TableCell>제목</TableCell>
              <TableCell>게시자</TableCell>
              <TableCell>등록일</TableCell>
              <TableCell>조회수</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.number}>
                <TableCell>{+row.number + 1}</TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.owner}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.views}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Link
          color="primary"
          href="#"
          sx={{
            mt: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Paginating />
        </Link>
      </Paper>
    </>
  )
}
export default Notice

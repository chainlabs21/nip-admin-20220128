import React, { useCallback, useState } from 'react'
import Title from '../dashboard/Title'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import Link from '@mui/material/Link'
import Paginating from '../../components/paginating/Paginating'
import {
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from '@mui/material'
import BasicDateRangePicker from '../../components/date-range/DateRangePicker'
import BasicTextFields from '../../components/input/search/SearchField'
import ContainedButton from '../../components/input/button/ContainedButton'

function createData(
  id: number,
  accountId: string,
  name: string,
  group: string,
  use: string,
  owner: string,
  fixer: string,
  createAt: string,
  updateAt: string,
) {
  return { id, accountId, name, group, use, owner, fixer, createAt, updateAt }
}

const rows = [
  createData(
    0,
    'soefjseojf',
    '2022.01.28',
    '기타관리자',
    'Y',
    '동웅',
    '동웅',
    '2022-02-01',
    '2022-02-02',
  ),
  createData(
    1,
    'soefjseojf',
    '2022.01.28',
    '기타관리자',
    'Y',
    '동웅',
    '동웅',
    '2022-02-01',
    '2022-02-02',
  ),
  createData(
    2,
    'soefjseojf',
    '2022.01.28',
    '기타관리자',
    'Y',
    '동웅',
    '동웅',
    '2022-02-01',
    '2022-02-02',
  ),
  createData(
    3,
    'soefjseojf',
    '2022.01.28',
    '기타관리자',
    'Y',
    '동웅',
    '동웅',
    '2022-02-01',
    '2022-02-02',
  ),
  createData(
    4,
    'soefjseojf',
    '2022.01.28',
    '기타관리자',
    'Y',
    '동웅',
    '동웅',
    '2022-02-01',
    '2022-02-02',
  ),
  createData(
    5,
    'soefjseojf',
    '2022.01.28',
    '기타관리자',
    'Y',
    '동웅',
    '동웅',
    '2022-02-01',
    '2022-02-02',
  ),
  createData(
    6,
    'soefjseojf',
    '2022.01.28',
    '기타관리자',
    'Y',
    '동웅',
    '동웅',
    '2022-02-01',
    '2022-02-02',
  ),
  createData(
    7,
    'soefjseojf',
    '2022.01.28',
    '기타관리자',
    'Y',
    '동웅',
    '동웅',
    '2022-02-01',
    '2022-02-02',
  ),
]

const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

const Users = () => {
  return (
    <>
      <Title>관리자 계정 관리</Title>
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
            <ContainedButton subject={'등록'} />
          </article>
        </article>

        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>
                <Checkbox
                  {...label}
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                />
                ID
              </TableCell>
              <TableCell>사용자명</TableCell>
              <TableCell>그룹명</TableCell>
              <TableCell>사용</TableCell>
              <TableCell>등록자</TableCell>
              <TableCell>수정자</TableCell>
              <TableCell>등록일</TableCell>
              <TableCell>수정일</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <Checkbox
                    {...label}
                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                  />
                  {row.accountId}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.group}</TableCell>
                <TableCell>{row.use}</TableCell>
                <TableCell>{row.owner}</TableCell>
                <TableCell>{row.fixer}</TableCell>
                <TableCell>{row.createAt}</TableCell>
                <TableCell>{row.updateAt}</TableCell>
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
export default Users

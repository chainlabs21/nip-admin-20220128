import React from 'react'
import Title from '../../dashboard/Title'
import { Paper } from '@mui/material'
import { useParams } from 'react-router-dom'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import Table from '@mui/material/Table'

const UserDetails = () => {
  const params = useParams()

  return (
    <>
      <Title>{params.nickname} 정보</Title>
      <Paper
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>닉네임</TableCell>
              <TableCell>스토어</TableCell>
              <TableCell>이메일</TableCell>
              <TableCell>등록 아이템</TableCell>
              <TableCell>보유 아이템</TableCell>
              <TableCell>지갑주소</TableCell>
            </TableRow>
          </TableHead>
          <TableBody></TableBody>
        </Table>
        {params.nickname}
      </Paper>
    </>
  )
}

export default UserDetails

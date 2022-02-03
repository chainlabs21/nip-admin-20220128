import React from 'react'
import Title from '../dashboard/Title'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import Link from '@mui/material/Link'
import Paginating from '../../components/paginating/Paginating'
import {
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Paper,
  Select,
} from '@mui/material'
import BasicDateRangePicker from '../../components/date-range/DateRangePicker'
import BasicTextFields from '../../components/input/search/SearchField'
import ContainedButton from '../../components/input/button/ContainedButton'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import SignUp from '../sign-up/SignUp'
import { Link as Router } from 'react-router-dom'

function createData(
  id: number,
  nickname: string,
  store: string,
  email: string,
  registerItem: string,
  myItem: string,
  walletAddress: string,
) {
  return {
    id,
    nickname,
    store,
    email,
    registerItem,
    myItem,
    walletAddress,
  }
}

const rows = [
  createData(0, 'soefjseojf', 'store', 's@gmail.com', 'SS', 'ZZZZ', 'Ox'),
  createData(1, 'soefjseojf', 'store', 's@gmail.com', 'SS', 'ZZZZ', 'Ox'),
  createData(2, 'soefjseojf', 'store', 's@gmail.com', 'SS', 'ZZZZ', 'Ox'),
  createData(3, 'soefjseojf', 'store', 's@gmail.com', 'SS', 'ZZZZ', 'Ox'),
  createData(4, 'soefjseojf', 'store', 's@gmail.com', 'SS', 'ZZZZ', 'Ox'),
  createData(5, 'soefjseojf', 'store', 's@gmail.com', 'SS', 'ZZZZ', 'Ox'),
  createData(6, 'soefjseojf', 'store', 's@gmail.com', 'SS', 'ZZZZ', 'Ox'),
  createData(7, 'soefjseojf', 'store', 's@gmail.com', 'SS', 'ZZZZ', 'Ox'),
]

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '30%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const Users = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      {/* Create myItem modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            관리자 등록
          </Typography>
          <SignUp />
        </Box>
      </Modal>

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
            <ContainedButton subject={'찾기'} />
          </article>
        </article>

        <Table size="medium">
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
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id + 1}</TableCell>
                <TableCell>
                  <Router
                    className="text-decorator-none"
                    style={{ color: 'blue' }}
                    to={`/user/${row.nickname}`}
                  >
                    {row.nickname}
                  </Router>
                </TableCell>
                <TableCell>{row.store}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.registerItem}</TableCell>
                <TableCell>{row.myItem}</TableCell>
                <TableCell>{row.walletAddress}</TableCell>
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

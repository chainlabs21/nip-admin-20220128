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
  Divider,
  FormControl,
  InputLabel,
  ListItem,
  ListItemText,
  MenuItem,
  Modal,
  Paper,
  Select,
} from '@mui/material'
import BasicDateRangePicker from '../../components/date-range/DateRangePicker'
import BasicTextFields from '../../components/input/search/BasicTextFields'
import ContainedButton from '../../components/input/button/ContainedButton'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import SignUp from '../../modals/sign-up/SignUp'
import { Link as Router } from 'react-router-dom'
import List from '@mui/material/List'

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

function createData(
  id: number,
  kind: string,
  market: string,
  divide: string,
  item: string,
  seller: string,
  consumer: string,
  token: string,
  price: string,
  date: string,
) {
  return {
    id,
    kind,
    market,
    divide,
    item,
    seller,
    consumer,
    token,
    price,
    date,
  }
}

const rows = [
  createData(
    0,
    'zzz',
    'store',
    '구매',
    'SS',
    'ZZZZ',
    'sss',
    'hh',
    '23ETC',
    '2022-02-03',
  ),
  createData(
    1,
    'sss',
    'store',
    '구매',
    'SS',
    'ZZZZ',
    'sss',
    'hh',
    '23ETC',
    '2022-02-03',
  ),
  createData(
    2,
    'www',
    'store',
    '구매',
    'SS',
    'ZZZZ',
    'sss',
    'hh',
    '23ETC',
    '2022-02-03',
  ),
  createData(
    3,
    'gg',
    'store',
    '구매',
    'SS',
    'ZZZZ',
    'sss',
    'hh',
    '23ETC',
    '2022-02-03',
  ),
  createData(
    4,
    'bb',
    'store',
    '구매',
    'SS',
    'ZZZZ',
    'sss',
    'hh',
    '23ETC',
    '2022-02-03',
  ),
  createData(
    5,
    'aaa',
    'store',
    '구매',
    'SS',
    'ZZZZ',
    'sss',
    'hh',
    '23ETC',
    '2022-02-03',
  ),
  createData(
    6,
    'ccc',
    'store',
    '구매',
    'SS',
    'ZZZZ',
    'sss',
    'hh',
    '23ETC',
    '2022-02-03',
  ),
  createData(
    7,
    'ddd',
    'store',
    '구매',
    'SS',
    'ZZZZ',
    'sss',
    'hh',
    '23ETC',
    '2022-02-03',
  ),
]

const TransactionManagement = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            거래세부
          </Typography>
          <ListItem>
            <article style={{ width: '40%' }}>
              <ListItemText primary="거래일시" />
            </article>
            <article style={{ width: '60%' }}>
              <ListItemText secondary="sefsfes" />
            </article>
          </ListItem>
          <Divider />
          <ListItem divider>
            <article style={{ width: '40%' }}>
              <ListItemText primary="마켓" />
            </article>
            <article style={{ width: '60%' }}>
              <ListItemText secondary="sefsfes" />
            </article>
          </ListItem>
          <ListItem>
            <article style={{ width: '40%' }}>
              <ListItemText primary="구분" />
            </article>
            <article style={{ width: '60%' }}>
              <ListItemText secondary="sefsfes" />
            </article>
          </ListItem>
          <Divider light />
          <ListItem>
            <article style={{ width: '40%' }}>
              <ListItemText primary="판매자" />
            </article>
            <article style={{ width: '60%' }}>
              <ListItemText secondary="sefsfes" />
            </article>
          </ListItem>
          <Divider light />
          <ListItem>
            <article style={{ width: '40%' }}>
              <ListItemText primary="구매자" />
            </article>
            <article style={{ width: '60%' }}>
              <ListItemText secondary="sefsfes" />
            </article>
          </ListItem>
          <Divider light />
          <ListItem>
            <article style={{ width: '40%' }}>
              <ListItemText primary="결제 토큰 및 금액" />
            </article>
            <article style={{ width: '60%' }}>
              <ListItemText secondary="sefsfes" />
            </article>
          </ListItem>
          <Divider light />
          <ListItem>
            <article style={{ width: '40%' }}>
              <ListItemText primary="아이템 제목" />
            </article>
            <article style={{ width: '60%' }}>
              <ListItemText secondary="sefsfes" />
            </article>
          </ListItem>
          <Divider light />
          <ListItem>
            <article style={{ width: '40%' }}>
              <ListItemText primary="아이템 고유번호" />
            </article>
            <article style={{ width: '60%' }}>
              <ListItemText secondary="sefsfes" />
            </article>
          </ListItem>
        </Box>
      </Modal>

      <Title>거래관리</Title>
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

          <BasicDateRangePicker dateState={value=>{console.log(value)}} />

          <article style={{ display: 'flex', alignItems: 'center' }}>
            <BasicTextFields label={'Search'} />
            <ContainedButton subject={'찾기'} />
          </article>
        </article>

        <Table size="medium">
          <TableHead>
            <TableRow>
              <TableCell>종류</TableCell>
              <TableCell>마켓</TableCell>
              <TableCell>구분</TableCell>
              <TableCell>아이템명</TableCell>
              <TableCell>판매자</TableCell>
              <TableCell>구매자</TableCell>
              <TableCell>결제토큰</TableCell>
              <TableCell>금액</TableCell>
              <TableCell>거래일시</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell onClick={handleOpen}>
                  <span style={{ color: 'blue', cursor: 'pointer' }}>
                    {row.kind}
                  </span>
                </TableCell>
                <TableCell>{row.market}</TableCell>
                <TableCell>{row.divide}</TableCell>
                <TableCell>{row.item}</TableCell>
                <TableCell>{row.seller}</TableCell>
                <TableCell>{row.consumer}</TableCell>
                <TableCell>{row.token}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.date}</TableCell>
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
export default TransactionManagement

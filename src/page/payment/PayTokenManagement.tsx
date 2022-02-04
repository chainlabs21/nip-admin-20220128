import React from 'react'
import Title from '../dashboard/Title'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import Paginating from '../../components/paginating/Paginating'
import {
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Paper,
  Select,
  Switch,
} from '@mui/material'
import BasicTextFields from '../../components/input/search/SearchField'
import ContainedButton from '../../components/input/button/ContainedButton'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import RegisterPayToken from '../../modals/register-pay-token/RegisterPayToken'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

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
  createData(0, 'soefjseojf', '이더리움', 'ETH', 'SS', 'ZZZZ', 'Ox'),
  createData(1, 'soefjseojf', '이더리움', 'ETH', 'SS', 'ZZZZ', 'Ox'),
  createData(2, 'soefjseojf', '이더리움', 'ETH', 'SS', 'ZZZZ', 'Ox'),
  createData(3, 'soefjseojf', '이더리움', 'ETH', 'SS', 'ZZZZ', 'Ox'),
  createData(4, 'soefjseojf', '이더리움', 'ETH', 'SS', 'ZZZZ', 'Ox'),
  createData(5, 'soefjseojf', '이더리움', 'ETH', 'SS', 'ZZZZ', 'Ox'),
  createData(6, 'soefjseojf', '이더리움', 'ETH', 'SS', 'ZZZZ', 'Ox'),
  createData(7, 'soefjseojf', '이더리움', 'ETH', 'SS', 'ZZZZ', 'Ox'),
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

const PayTokenManagement = () => {
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
            결제 토큰 추가
          </Typography>
          <RegisterPayToken />
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
          <article>
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

            <Button
              variant="outlined"
              sx={{
                height: 55.1,
                marginLeft: '8px',
              }}
            >
              선택 숨김
            </Button>
          </article>

          <article style={{ display: 'flex', alignItems: 'center' }}>
            <BasicTextFields label={'Search'} />
            <ContainedButton handleOpen={handleOpen} subject={'등록'} />
          </article>
        </article>

        <Table size="medium">
          <TableHead>
            <TableRow>
              <TableCell>선택</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>단위</TableCell>
              <TableCell>수수료</TableCell>
              <TableCell>컨트랙트</TableCell>
              <TableCell>결제활성</TableCell>
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
                </TableCell>

                <TableCell>{row.store}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.registerItem}</TableCell>
                <TableCell>{row.myItem}</TableCell>
                <TableCell>
                  <Switch
                    defaultChecked={true}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div
          style={{
            marginTop: '2rem',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Paginating />
        </div>
      </Paper>
    </>
  )
}
export default PayTokenManagement

import React, { useEffect, useState } from 'react'
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
  Modal,
  Paper,
  Select,
} from '@mui/material'
import BasicDateRangePicker from '../../components/date-range/DateRangePicker'
import BasicTextFields from '../../components/input/search/SearchField'
import ContainedButton from '../../components/input/button/ContainedButton'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import SignUp from '../../modals/sign-up/SignUp'

const rows = [
  {
    id: 0,
    accountId: 'ossososo',
    name: 'woong',
    group: '기타 관리자',
    use: 'Y',
    owner: 'dd',
    fixer: 'dd',
    createAt: '2022-02-01',
    updateAt: '2022-02-02',
  },
  {
    id: 1,
    accountId: 'sssss',
    name: 'wwwww',
    group: '기타 관리자',
    use: 'Y',
    owner: 'dd',
    fixer: 'dd',
    createAt: '2022-02-01',
    updateAt: '2022-02-02',
  },
]

const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

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

const Owners = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [users, setUsers] = useState<any>([])

  useEffect(() => {
    setUsers(rows)
  }, [])

  const onCheckHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    let tempUser: any = []
    if (name === 'allSelect') {
      tempUser = users.map((user: any) => {
        return {
          ...user,
          isChecked: checked,
        }
      })
      setUsers(tempUser)
    } else {
      tempUser = users.map((user: any) =>
        user.name === name ? { ...user, isChecked: checked } : user,
      )
      setUsers(tempUser)
    }
  }

  return (
    <>
      {/* Create owner modal */}
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
            <ContainedButton handleOpen={handleOpen} subject={'등록'} />
          </article>
        </article>

        <Table size="medium">
          <TableHead>
            <TableRow>
              <TableCell>
                <Checkbox
                  {...label}
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                  name="allSelect"
                  onChange={onCheckHandler}
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
            {users.map((user: any) => (
              <TableRow key={user.id}>
                <TableCell>
                  <Checkbox
                    {...label}
                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                    checked={user?.isChecked || false}
                    name={user.name}
                    onChange={onCheckHandler}
                  />
                  {user.accountId}
                </TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.group}</TableCell>
                <TableCell>{user.use}</TableCell>
                <TableCell>{user.owner}</TableCell>
                <TableCell>{user.fixer}</TableCell>
                <TableCell>{user.createAt}</TableCell>
                <TableCell>{user.updateAt}</TableCell>
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
export default Owners

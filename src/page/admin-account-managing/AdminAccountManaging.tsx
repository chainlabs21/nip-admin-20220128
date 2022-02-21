import React from 'react'
import Papers from '../../components/paper/Papers'
import SelectViewer from '../../components/select-viewer/SelectViewer'
import Searches from '../../components/input/search/Searches'
import ContainedButton from '../../components/input/button/ContainedButton'
import Checkbox from '@mui/material/Checkbox'
import TableDefault from '../../components/table/TableDefault'
import { useState } from 'react'
import SignUp from '../../modals/sign-up/SignUp'
import { Modal } from '@mui/material'
import Box from '@mui/material/Box'
import CheckBox from '../../components/input/check-box/CheckBox'
import Pagination from '@mui/material/Pagination'

const countViewers = [
  {
    value: 10,
    label: '10개씩 보기',
  },
  {
    value: 20,
    label: '20개씩 보기',
  },
  {
    value: 30,
    label: '30개씩 보기',
  },
]

const emailViewers = [
  {
    value: 10,
    label: 'email1',
  },
  {
    value: 20,
    label: 'email2',
  },
  {
    value: 30,
    label: 'email3',
  },
]

const tableSet = [
  {
    checkBox: () => {
      return <CheckBox />
    },
  },
  {
    field: '순서',
  },
  {
    field: '계정',
  },
  {
    field: '그룹명',
  },
  {
    field: '사용',
  },
  {
    field: '등록자',
  },
  {
    field: '등록일',
  },
  {
    field: '수정자',
  },
  {
    field: '수정일',
  },
]

const testField = [
  {
    checkBox: () => {
      return <CheckBox />
    },
  },
  {
    field: '1',
  },
  {
    field: 'seofj@gmail.com',
  },
  {
    field: '최고관리자',
  },
  {
    field: 'Y',
  },
  {
    field: 'seofij@gmail.com',
  },
  {
    field: '2022-11-11',
  },
  {
    field: 'sss@gmail.com',
  },
  {
    field: '2022-11-11',
  },
]

const AdminAccountManaging = () => {
  const [open, setOpen] = useState(false)
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
        <Box
          sx={{
            position: 'absolute' as 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '30%',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <SignUp />
        </Box>
      </Modal>

      <Papers title="관리자 계정관리">
        <section
          style={{
            padding: '1rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <article
              style={{
                width: '150px',
              }}
            >
              <SelectViewer title="10개씩 보기" menu={countViewers} />
            </article>

            <article
              style={{
                marginLeft: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                width: '700px',
              }}
            >
              <SelectViewer title="Email" menu={emailViewers} />
              <Searches />
              <ContainedButton subject="등록" handleOpen={handleOpen} />
            </article>
          </div>

          <div>
            <TableDefault columns={tableSet} testFields={testField} />
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              margin: '20px 0 0 0',
            }}
          >
            <Pagination count={10} showFirstButton showLastButton />
          </div>
        </section>
      </Papers>
    </>
  )
}

export default AdminAccountManaging

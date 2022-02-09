import React, { useState } from 'react'
import SelectViewer from '../../components/select-viewer/SelectViewer'
import Searches from '../../components/input/search/Searches'
import ContainedButton from '../../components/input/button/ContainedButton'
import Papers from '../../components/paper/Papers'
import BasicDateRangePicker from '../../components/date-range/DateRangePicker'
import CheckBox from '../../components/input/check-box/CheckBox'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import Table from '@mui/material/Table'
import { Modal, TableCell } from '@mui/material'
import banner_pc from '../../assets/images/banner-pc.png'
import banner_mobile from '../../assets/images/banner-mobile.png'
import { FormControlLabel } from '@mui/material'
import { Android12Switch } from '../nft-register/one/NftRegisterOne'
import Box from '@mui/material/Box'
import RegisterBanner from '../../modals/register-banner/RegisterBanner'

const BannerManagement = () => {
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
            width: '40%',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <RegisterBanner />
        </Box>
      </Modal>

      <Papers title="배너관리">
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
              <SelectViewer
                title="10개씩 보기"
                menu={[
                  {
                    value: 10,
                    label: '10개씩 보기',
                  },
                  { value: 20, label: '20개씩 보기' },
                ]}
              />
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
              <BasicDateRangePicker />
              <Searches />
              <ContainedButton handleOpen={handleOpen} subject="등록" />
            </article>
          </div>

          <div>
            <Table size="medium">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <CheckBox />
                  </TableCell>

                  <TableCell>순서</TableCell>
                  <TableCell>위치</TableCell>
                  <TableCell>URL</TableCell>
                  <TableCell>이미지(PC)</TableCell>
                  <TableCell>이미지(Mobile)</TableCell>
                  <TableCell>기간</TableCell>
                  <TableCell>상태</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                <TableRow>
                  <TableCell>
                    <CheckBox />
                  </TableCell>

                  <TableCell>1</TableCell>
                  <TableCell>main_rolling_banner</TableCell>
                  <TableCell>https://nips.net</TableCell>
                  <TableCell>
                    <img width="200px" src={banner_pc} alt="banner_pc" />
                  </TableCell>
                  <TableCell>
                    <img width="60px" src={banner_mobile} alt="banner_mobile" />
                  </TableCell>

                  <TableCell>2022.02.02 - 2022.02.02</TableCell>
                  <TableCell>
                    <FormControlLabel
                      control={<Android12Switch defaultChecked />}
                      label=""
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>
      </Papers>
    </>
  )
}

export default BannerManagement

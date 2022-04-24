import { useEffect, useState } from 'react'
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
import { Modal, Pagination, TableCell } from '@mui/material'
import banner_pc from '../../assets/images/banner-pc.png'
import banner_mobile from '../../assets/images/banner-mobile.png'
import { FormControlLabel } from '@mui/material'
import { Android12Switch } from '../nft-register/one/NftRegisterOne'
import Box from '@mui/material/Box'
import { API } from '../../configs/api'
import axios from 'axios'
import RegisterBanner from '../../modals/register-banner/RegisterBanner'
import moment from "moment";

const BannerManagement = () => {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState([]);
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  useEffect(() => {
    axios.get(API.API_BANNER(0, 10)).then((res: any) => {
      console.log("banner data", res);
      if (res && res.data) { } else {
        return;
      }
      let { list } = res.data;
      console.log("list", list);
      setData(list);
    }).catch(err => console.log(err))
  }, [])

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
              <BasicDateRangePicker
                dateState={(value) => {
                  console.log(value)
                }}
              />
              <Searches searchState={(e) => console.log(e)} />
              <ContainedButton handleOpen={handleOpen} subject="등록" />
            </article>
          </div>

          <div>
            <Table size="medium">
              <TableHead>
                <TableRow>
                  {/* <TableCell>
                    <CheckBox />
                  </TableCell> */}

                  <TableCell>순서</TableCell>
                  <TableCell>위치</TableCell>
                  <TableCell>URL</TableCell>
                  <TableCell>이미지(PC)</TableCell>
                  <TableCell>이미지(Mobile)</TableCell>
                  <TableCell>기간</TableCell>
                  <TableCell>상태</TableCell>
                </TableRow>
              </TableHead>



              {data.map((item: any, index) => {
                let dateFormat = moment(item.updatedat).format("lll");
                return (
                  <TableBody key={index}>
                    <TableRow>
                      <TableCell>
                        <CheckBox />
                      </TableCell>
                      <TableCell>{item.id}</TableCell>
                      <TableCell>main_rolling_banner</TableCell>
                      <TableCell>https://nips.net</TableCell>
                      <TableCell><img width="200px" src={item.imageurlpc} alt="banner_pc" /></TableCell>
                      <TableCell><img width="200px" src={item.imageurlmobile} alt="banner_mobile" /></TableCell>
                      <TableCell>{dateFormat}</TableCell>
                      <TableCell>
                        <FormControlLabel
                          control={<Android12Switch defaultChecked />}
                          label=""
                        />
                      </TableCell>

                    </TableRow>
                  </TableBody>
                )
              })}


            </Table>
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

export default BannerManagement

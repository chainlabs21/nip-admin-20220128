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
import moment from 'moment'
import { net } from '../../configs/net'
import { SelectChangeEvent } from '@mui/material'
import { Switch } from '@mui/material'

const BannerManagement = () => {
  const [open, setOpen] = useState(false)
  const [data, setData]: any = useState([])
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [uuid, setUuid] = useState<String>('')
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [rows, setRows] = useState<any>(10)
  const [searchkey, setSearchKey] = useState<any>('')

  useEffect(() => {
    axios
      .get(API.API_BANNER(page * rows, rows) + `?nettype=${net}`, {
        params: { searchkey },
      })
      .then((res: any) => {
        console.log('banner data', res)
        if (res && res.data) {
        } else {
          return
        }
        let { list } = res.data
        console.log('list', list)
        setData(list)
        setTotalPages(Math.ceil((res.data.payload.count as number) / rows))
      })
      .catch((err) => console.log(err))
  }, [])

  const handleRows = (event: SelectChangeEvent<{ value: any }>) => {
    setRows(event.target.value)
  }

  const onToggle = (id: any, value: any, uuid: any) => {
    console.log('uuid', uuid)
    setData(
      data.map((item: any, index: any) =>
        index === id ? { ...item, active: value } : { ...item },
      ),
    )
    if (uuid) {
      axios
        .put(API.API_POST_BANNER + '/' + uuid + `?nettype=${net}`, {
          isinuse: value === true ? 1 : 0,
        })
        .then((res) => {
          console.log(res)
          alert('변경완료')
          window.location.reload()
        })
        .catch((err) => console.log(err))
    }
    // axios
    //   .put(api.API_PUT_ADMINS_ROLE + `?nettype=${net}`, {
    //     id: itemId,
    //     active: value === true ? 1 : 0,
    //   })
    //   .then((resp) => {
    //     let { status, respdata } = resp.data;
    //     if (status === "OK") {
    //       alert("저장이 완료 되었습니다.");
    //       window.location.reload();
    //     }
    //   });
    alert('OK')
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            width: '900px',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
          }}
        >
          <RegisterBanner uuid={uuid} handleClose={handleClose} />
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

              <ContainedButton
                handleOpen={handleOpen}
                subject="배너등록"
                setUuid={setUuid}
              />
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

                  <TableCell>이미지(Mobile)</TableCell>
                  <TableCell>등록날짜</TableCell>
                  <TableCell>상태</TableCell>
                </TableRow>
              </TableHead>

              {data.map((item: any, index: any) => {
                let dateFormat = moment(item.createdat).format('YYYY-MM-DD')
                return (
                  <TableBody key={index}>
                    <TableRow
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        setUuid(item.uuid)
                      }}
                    >
                      <TableCell>{item.id}</TableCell>

                      <TableCell>
                        <img
                          width="200px"
                          src={item.imageurlpc}
                          alt="banner_pc"
                        />
                      </TableCell>
                      <TableCell>{dateFormat}</TableCell>
                      <TableCell>
                        <Switch
                          checked={item.isinuse === 1 ? true : false}
                          onChange={(e: any) => {
                            onToggle(index, e.target.checked, item.uuid)
                          }}
                        />{' '}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )
              })}
            </Table>
          </div>

          {totalPages > 1 ? (
            <Pagination
              onChange={(e, v) => {
                setPage(v - 1)
              }}
              count={totalPages}
              showFirstButton
              showLastButton
            />
          ) : (
            ''
          )}
        </section>
      </Papers>
    </>
  )
}

export default BannerManagement

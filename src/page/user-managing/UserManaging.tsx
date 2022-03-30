import React, { useEffect, useState } from 'react'
import DateRangePicker, { DateRange } from '@mui/lab/DateRangePicker'
import { TextField, Box } from '@mui/material'
import SelectViewer from '../../components/select-viewer/SelectViewer'
import Searches from '../../components/input/search/Searches'
import ContainedButton from '../../components/input/button/ContainedButton'
import TableDefault from '../../components/table/TableDefault'
import TableDefaultUserManaging from '../../components/table/TableDefaultUserManaging'
import Papers from '../../components/paper/Papers'
import BasicDateRangePicker from '../../components/date-range/DateRangePicker'
import { Pagination } from '@mui/material'
import axios from 'axios'
import { API } from '../../configs/api'
import { LOGGER, strDot } from '../../utils/common'
import { Select, MenuItem } from '@mui/material'
import { SelectChangeEvent } from '@mui/material'
// import moment from 'moment'
const tableSet = [
  { field: 'id' },
  { field: 'username' },
  { field: 'email' },
  { field: 'nickname' },
  { field: 'staked' },
  { field: 'myreferercode' },
  { field: '가입일' },
  /** 	{    field: '순서',  },
  {    field: '계정',  },
  {    field: '지갑주소',  },
  {    field: '몬스터 보유',  },
  {    field: 'Stake',  },
  {    field: 'USDT 보유',  },
  {    field: 'NIP 보유',  },
  {    field: '회원상태',  },
  {    field: '가입일',  },*/
]
const testField = [
  { field: '1' },
  { field: 'seofij@gmail.com' },
  { field: '0xb6.2ef0' },
  { field: 'Success' },
  { field: '100 USDT' },
  { field: '1548 USDT' },
  { field: '122 NIP' },
  { field: '일반' },
  { field: '2022-01-29' },
]

const UserManaging = () => {
  //	let [ testField , settestField ]=useState( [] )
  let [listlist, setlistlist] = useState([])
  const [value, setValue] = useState<DateRange<Date>>([null, null])
  const [count, setCount] = useState(0)
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [rows, setRows] = useState<any>(10)
  const [searchkey, setSearchKey] = useState<any>('')
  const handleRows = (event: SelectChangeEvent<{ value: any }>) => {
    setRows(event.target.value)
  }

  console.log('totalPages')
  console.log(totalPages)

  const fetchdata = async () => {
    axios
      .get(API.API_USERS + `/${page * rows}/${rows}/id/DESC`, {
        params: { date0: value[0], date1: value[1], searchkey },
      })
      .then((resp) => {
        LOGGER('resp', resp.data)
        setCount(resp.data.payload.count as number)
        let { status, list: list_raw } = resp.data
        if (status == 'OK') {
          //		settestField ( list )
          let list = list_raw.map((elem: any) => {
            return [
              { field: elem['id'] },
              { field: strDot(elem['username'], 20, 0) },
              { field: elem['email'] },
              { field: elem['nickname'] },
              { field: elem['isstaked'] },
              { field: elem['myreferercode'] },
              { field: elem['createdat']?.split('.')[0] },
            ]
          })
          LOGGER('', list)
          setlistlist(list)
          setTotalPages(Math.ceil((resp.data.payload.count as number) / rows))
        }
      })
  }
  useEffect(() => {
    fetchdata()
  }, [])

  useEffect(() => {
    fetchdata()
  }, [page, rows, value, searchkey])
  return (
    <>
      <Papers title="회원관리">
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
              <Select id="RowsSelectLabel" value={rows} onChange={handleRows}>
                <MenuItem value={10}>10개씩 보기</MenuItem>
                <MenuItem value={20}>20개씩 보기</MenuItem>
              </Select>
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
                  setValue(value)
                }}
              />
              <Searches searchState={(e) => setSearchKey(e)} />
              <ContainedButton subject="EXCEL" />
            </article>
          </div>

          <div>
            <TableDefaultUserManaging
              listlist={listlist}
              columns={tableSet}
              testFields={testField}
            />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              margin: '20px 0 0 0',
            }}
          >
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
          </div>
        </section>
      </Papers>
    </>
  )
}

export default UserManaging

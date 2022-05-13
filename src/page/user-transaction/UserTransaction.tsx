import React, { useEffect, useState } from 'react'
import SelectViewer from '../../components/select-viewer/SelectViewer'
import Searches from '../../components/input/search/Searches'
import ContainedButton from '../../components/input/button/ContainedButton'
import TableDefault from '../../components/table/TableDefault'
import Papers from '../../components/paper/Papers'
import BasicDateRangePicker from '../../components/date-range/DateRangePicker'
import { MenuItem, Pagination, Select, SelectChangeEvent } from '@mui/material'
import { DateRange } from '@mui/lab'
import axios from 'axios'
import { LOGGER, strDot } from '../../utils/common'
import { API } from '../../configs/api'
import TableDefaultUserManaging from '../../components/table/TableDefaultUserManaging'
import moment from 'moment'
import { net } from '../../configs/net'

const tableSet = [
  {
    field: 'id',
  },
  {
    field: 'createdat',
  },
  {
    field: 'username',
  },
  {
    field: 'amount',
  },
  {
    field: 'address',
  },
  {
    field: 'currency',
  },
  {
    field: 'itemid',
  },

  {
    field: 'txhash',
  },
  {
    field: 'status',
  },
  {
    field: 'typestr',
  },
  {
    field: 'nettype',
  },
]

const testField = [
  {
    field: '1',
  },
  {
    field: 'kong #112',
  },
  {
    field: '168 USDT',
  },
  {
    field: '경매',
  },
  {
    field: '완료',
  },
  {
    field: '211 USDT',
  },
  {
    field: '0.7 USDT',
  },
  {
    field: '0.3 USDT',
  },
  {
    field: '0xb6..2x',
  },
  {
    field: '0xb6..2x',
  },
  {
    field: '2022-02-02',
  },
]

const UserTranSaction = () => {
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

  const fetchdata = async () => {
    console.log(value)
    axios
      .get(
        API.API_TRANSACTIONS +
          `/${net}/${page * rows}/${rows}/id/DESC?nettype=${net}`,
        {
          params: { date0: value[0], date1: value[1], searchkey },
        },
      )
      .then((resp) => {
        LOGGER('resp', resp.data)
        setCount(resp.data.payload.count as number)
        let { status, list: list_raw } = resp.data
        if (status == 'OK') {
          // settestField ( list )
          let list = list_raw.map((elem: any) => {
            return [
              { field: elem['id'] },
              { field: moment(elem['createdat']).format('YYYY-MM-DD') },
              { field: strDot(elem['username'], 20, 0) },
              { field: elem['amount'] },
              { field: elem['address'] },
              { field: elem['currency'] },
              { field: elem['itemid'] },

              { field: strDot(elem['txhash'], 20) },
              { field: elem['status'] },
              { field: elem['typestr'] },
              { field: elem['nettype'] },
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
    console.log(totalPages)
  }, [page, rows, value, searchkey])

  return (
    <>
      <Papers title="회원상세">
        <section
          style={{
            width: '100%',
            padding: '1rem',
          }}
        >
          <section
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div
              style={{
                display: 'flex',
                width: '350px',
              }}
            >
              <article style={{ width: '100%' }}>
                <Select id="RowsSelectLabel" value={rows} onChange={handleRows}>
                  <MenuItem value={10}>10개씩 보기</MenuItem>
                  <MenuItem value={20}>20개씩 보기</MenuItem>
                </Select>
              </article>

              <article style={{ width: '100%', marginLeft: '8px' }}></article>
            </div>

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
              <ContainedButton subject="EXCEL" />
            </article>
          </section>

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

export default UserTranSaction

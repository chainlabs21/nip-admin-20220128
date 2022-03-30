import React, { useEffect, useState } from 'react'
import SelectViewer from '../../components/select-viewer/SelectViewer'
import Searches from '../../components/input/search/Searches'
import ContainedButton from '../../components/input/button/ContainedButton'
import TableDefault from '../../components/table/TableDefault'
import Papers from '../../components/paper/Papers'
import BasicDateRangePicker from '../../components/date-range/DateRangePicker'
import { Pagination, SelectChangeEvent } from '@mui/material'
import { DateRange } from '@mui/lab'
import axios from 'axios'
import { LOGGER, strDot } from '../../utils/common'
import { API } from '../../configs/api'
import TableDefaultUserManaging from '../../components/table/TableDefaultUserManaging'
import moment from 'moment'

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
    field: 'nettype',
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
    field: 'updatedat',
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

  const fetchdata = async () => {
    console.log(value)
    axios
      .get(API.API_TRANSACTIONS + `/${page * rows}/${rows}/id/DESC`, {
        params: { date0: value[0], date1: value[1], searchkey },
      })
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
              { field: elem['nettype'] },
              { field: elem['txhash'] },
              { field: elem['status'] },
              { field: elem['typestr'] },
              { field: moment(elem['updatedat']).format('YYYY-MM-DD') },
            ]
          })
          LOGGER('', list)
          setlistlist(list)
        }
      })
  }
  useEffect(() => {
    fetchdata()
  }, [])

  useEffect(() => {
    setTotalPages(Math.ceil(count / rows))
    fetchdata()
    console.log(totalPages)
  }, [page, rows, value, searchkey])

  return (
    <>
      <Papers title="회원상세">
        <section
          style={{
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

              <article style={{ width: '100%', marginLeft: '8px' }}>
                <SelectViewer
                  title="체결상태"
                  menu={[
                    { value: 1, label: '완료' },
                    { value: 2, label: '대기' },
                  ]}
                />
              </article>
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
                  setPage(v)
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

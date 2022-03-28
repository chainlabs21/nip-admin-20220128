import React, { useEffect, useState } from 'react'
import Papers from '../../components/paper/Papers'
import Box from '@mui/material/Box'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Pagination, Tab } from '@mui/material'
import TableDefault from '../../components/table/TableDefault'
import SelectViewer from '../../components/select-viewer/SelectViewer'
import BasicDateRangePicker from '../../components/date-range/DateRangePicker'
import Searches from '../../components/input/search/Searches'
import ContainedButton from '../../components/input/button/ContainedButton'
import axios from 'axios'
import { getmyaddress, LOGGER } from '../../utils/common'
import { API } from '../../configs/api'
import TableDefaultUserManaging from '../../components/table/TableDefaultUserManaging'

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
    field: 'itemid',
  },
  {
    field: 'amount',
  },
  {
    field: 'statusstr',
  },
  {
    field: 'roundnumber',
  },
  {
    field: 'duetimeunix',
  },
  {
    field: 'duetime',
  },
]

const testField = [
  {
    field: '1',
  },
  {
    field: 'Moong #11',
  },
  {
    field: '100 USDT',
  },
  {
    field: 'Success',
  },
  {
    field: '100',
  },
  {
    field: 'https://nip1.net',
  },
  {
    field: '2022-02-02',
  },
  {
    field: '2022-02-02',
  },
  {
    field: '2022-02-02',
  },
]

const AuctionList = () => {
  const [value, setValue] = React.useState('1')
  let [listlist, setlistlist] = useState([])
  const [count, setCount] = useState(0)
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [rows, setRows] = useState<any>(10)
  const [searchkey, setSearchKey] = useState<any>('')

  const fetchData = () => {
    axios
      .get(API.API_RECEIVABLES + `/${page * rows}/${rows}/id/DESC`, {
        params: { date0: value[0], date1: value[1], searchkey },
      })
      .then((resp) => {
        LOGGER('', resp.data)
        setCount(resp.data.payload.count as number)
        let { status, list: list_raw } = resp.data
        console.log('list_raw')
        console.log(list_raw)
        if (status == 'OK') {
          let list = list_raw.map((elem: any, index: any) => {
            return [
              { field: elem['id'] },
              { field: elem['createdat']?.split('T')[0] },
              { field: elem['username'] },
              { field: elem['itemid'] },
              { field: elem['amount'] },
              { field: elem['statusstr'] },
              { field: elem['roundnumber'] },
              { field: elem['duetimeunix'] },
              { field: elem['duetime']?.split('T')[0] },
            ]
          })
          LOGGER('', list)
          setlistlist(list)
        }
      })
  }
  useEffect(() => {
    setTotalPages(Math.ceil(count / rows))
    fetchData()
  }, [page, rows, value, searchkey])

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }
  return (
    <>
      <Papers>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="결제대기(신규)" value="1" />
              </TabList>
            </Box>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '1rem',
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
                <ContainedButton subject="EXCEL" />
              </article>
            </div>
            <TabPanel value="1">
              <TableDefaultUserManaging
                listlist={listlist}
                columns={tableSet}
                testFields={testField}
              />
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
                  />
                ) : (
                  ''
                )}
              </div>
            </TabPanel>
          </TabContext>
        </Box>
      </Papers>
    </>
  )
}

export default AuctionList

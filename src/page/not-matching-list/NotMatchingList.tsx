import React, { useEffect, useState } from 'react'
import Papers from '../../components/paper/Papers'
import Box from '@mui/material/Box'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import {
  Pagination,
  Select,
  Tab,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material'
import TableDefault from '../../components/table/TableDefault'
import SelectViewer from '../../components/select-viewer/SelectViewer'
import BasicDateRangePicker from '../../components/date-range/DateRangePicker'
import Searches from '../../components/input/search/Searches'
import ContainedButton from '../../components/input/button/ContainedButton'
import axios from 'axios'
import { getmyaddress, LOGGER, strDot } from '../../utils/common'
import { API } from '../../configs/api'
import TableDefaultUserManaging from '../../components/table/TableDefaultUserManaging'
import { net } from '../../configs/net'

const tableSet = [
  {
    field: 'id',
  },
  {
    field: 'createdat',
  },
  //  {    field: 'updatedat',  },
  {
    field: 'username',
  },
  {
    field: 'itemid',
  },
  {
    field: 'seller',
  },
  {
    field: 'amount',
  },
  {
    field: 'currency',
  },
  {
    field: 'currencyaddress',
  },
  //  {    field: 'statusstr',  },
  {
    field: 'roundnumber',
  },
  {
    field: 'duetime',
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

const NotMatchingList = () => {
  const [value, setValue] = React.useState('1')
  let [listlist, setlistlist] = useState([])
  const [count, setCount] = useState(0)
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [rows, setRows] = useState<any>(10)
  const [searchkey, setSearchKey] = useState<any>('')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }
  const handleRows = (event: SelectChangeEvent<{ value: any }>) => {
    setRows(event.target.value)
  }

  const fetchData = () => {
    axios
      .get(
        API.API_DELINQUENCIES +
          `/${net}/${page * rows}/${rows}/id/DESC?nettype=${net}`,
        {
          params: { date0: value[0], date1: value[1], searchkey },
        },
      )
      .then((resp) => {
        LOGGER('', resp.data)
        setCount(resp.data.payload.count as number)
        let { status, list: list_raw } = resp.data
        console.log('list_raw')
        console.log(list_raw)
        if (status == 'OK') {
          LOGGER('', list_raw)
          setlistlist(list_raw)
          setTotalPages(Math.ceil((resp.data.payload.count as number) / rows))
        }
      })
  }
  useEffect(() => {
    fetchData()
  }, [page, rows, value, searchkey])

  const onClick_ManauallyPay_Btn = (uuid: any) => {
    axios
      .post(API.API_MANUAL_PAYDELINQUENCY + `/${uuid}?nettype=${net}`)
      .then((resp) => {
        if (resp.data.status === 'OK') {
          alert('Succeed')
          fetchData()
        } else {
          alert('Fail')
        }
      })
      .catch((error: any) => console.log(error))
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
                <Tab label="연체" value="1" />
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
                    console.log(value)
                  }}
                />
                <Searches searchState={(e) => console.log(e)} />
                <ContainedButton subject="EXCEL" />
              </article>
            </div>
            <div>
              <table className="nft-table">
                <thead className="nft-th">
                  <tr>
                    <td className="nft-td" rowSpan={2}>
                      ID
                    </td>
                    <td className="nft-td">createdat</td>
                    <td className="nft-td">username</td>
                    <td className="nft-td">itemid</td>

                    <td className="nft-td">amount</td>
                    <td className="nft-td">roundnumber</td>
                    <td className="nft-td">duetimeunix</td>
                    <td className="nft-td">duetime</td>
                    <td className="nft-td">manually pay</td>
                  </tr>
                </thead>

                <tbody>
                  {listlist &&
                    listlist.map((elem: any, idx: number) => (
                      <tr key={idx}>
                        <td className="nft-td" rowSpan={1}>
                          {elem.id}
                        </td>

                        <td className="nft-td" rowSpan={1}>
                          {elem.createdat.split('.')[0]}
                        </td>
                        <td className="nft-td">{elem.username}</td>
                        <td className="nft-td">{elem.itemid}</td>

                        <td className="nft-td">{elem.amount}</td>
                        <td className="nft-td">{elem.roundnumber}</td>
                        <td className="nft-td"> {elem.duetimeunix}</td>
                        <td className="nft-td"> {elem.duetime}</td>
                        <td className="nft-td" rowSpan={1}>
                          <button
                            style={{
                              marginRight: '20px',
                              height: '40px',
                              cursor: 'pointer',
                            }}
                            onClick={() => {
                              onClick_ManauallyPay_Btn(elem.uuid)
                            }}
                          >
                            manually pay
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </TabContext>
        </Box>
      </Papers>
    </>
  )
}

export default NotMatchingList

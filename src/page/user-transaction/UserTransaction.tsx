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
import {
  browserName,
  browserVersion,
  isChrome,
  isFirefox,
  isSafari,
  isEdge,
} from 'react-device-detect'

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

          LOGGER('', list_raw)
          setlistlist(list_raw)
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

  const onClick_tx_open_window = (txhash: any, nettype: any) => {
    if (nettype === 'ETH_TESTNET') {
      if (isChrome) {
        window.open(`https://ropsten.etherscan.io/tx/${txhash}`, '_blank')
      }
      if (isSafari) {
        window.open(`https://ropsten.etherscan.io/tx/${txhash}`, '_blank')
      }
      if (isEdge) {
        window.open(`https://ropsten.etherscan.io/tx/${txhash}`, '_blank')
      }
    }
    if (nettype === 'BSC_MAINNET') {
      if (isChrome) {
        window.open(`https://www.bscscan.com/tx/${txhash}`, '_blank')
      }
      if (isSafari) {
        window.open(`https://www.bscscan.com/tx/${txhash}`, '_blank')
      }
      if (isEdge) {
        window.open(`https://www.bscscan.com/tx/${txhash}`, '_blank')
      }
    }
  }

  return (
    <>
      <Papers title="Transaction">
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
            <table className="nft-table">
              <thead className="nft-th">
                <tr>
                  <td className="nft-td" rowSpan={2}>
                    순서
                  </td>
                  <td className="nft-td">username</td>
                  <td className="nft-td">txhash</td>
                  <td className="nft-td">typestr</td>

                  <td className="nft-td">생성일</td>
                  <td className="nft-td">nettype</td>
                </tr>
              </thead>

              <tbody>
                {listlist &&
                  listlist.map((elem: any, idx: number) => (
                    <tr key={idx}>
                      <td className="nft-td">{elem.id}</td>

                      <td className="nft-td">{elem.username}</td>
                      <td
                        className="nft-td"
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                          onClick_tx_open_window(elem.txhash, elem.nettype)
                        }}
                      >
                        {elem.txhash}
                      </td>
                      <td className="nft-td">{elem.typestr}</td>

                      <td className="nft-td"> {strDot(elem.createdat, 10)}</td>
                      <td className="nft-td"> {elem.nettype}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
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

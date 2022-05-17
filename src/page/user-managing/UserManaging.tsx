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
import { CSVLink } from 'react-csv'
import Toggle from 'react-toggle'
import { net } from '../../configs/net'

// import moment from 'moment'
const tableSet = [
  { field: 'id' },
  { field: 'username' },
  { field: 'email' },
  { field: 'nickname' },
  { field: 'staked' },
  { field: 'myreferercode' },
  { field: '가입일' },
  { field: '계정활성화' },
]

const UserManaging = () => {
  //	let [ testField , settestField ]=useState( [] )
  let [listlist, setlistlist] = useState<any>([])

  const [csv, setCsv] = useState([])
  const [value, setValue] = useState<DateRange<Date>>([null, null])
  const [count, setCount] = useState(0)
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [rows, setRows] = useState<any>(10)
  const [searchkey, setSearchKey] = useState<any>('')
  const [isOpen, setMenu] = useState(false) // 메뉴의 초기값을 false로 설정

  const toggleMenu = () => {
    setMenu((isOpen) => !isOpen) // on,off 개념 boolean
  }

  const handleRows = (event: SelectChangeEvent<{ value: any }>) => {
    setRows(event.target.value)
  }

  const fetchdata = async () => {
    axios
      .get(
        API.API_USERS + `/${net}/${page * rows}/${rows}/id/DESC?nettype=${net}`,
        {
          params: { date0: value[0], date1: value[1], searchkey },
        },
      )
      .then((resp) => {
        LOGGER('respasdasdas', resp.data)
        setCount(resp.data.payload.count as number)
        let { status, list: list_raw } = resp.data
        if (status == 'OK') {
          //		settestField ( list )
          setlistlist(resp.data.list)

          setTotalPages(Math.ceil((resp.data.payload.count as number) / rows))
        }
      })
  }

  useEffect(() => {
    fetchdata()
  }, [page, rows, value, searchkey])

  const onclick_user_active_btn = (elem: any) => {
    console.log('asodijfoasidj', elem)
    if (listlist) {
      axios
        .put(API.API_SET_ACTIVE_USER + `/${elem.username}?nettype=${net}`, {
          active: 1,
          nettype: net,
        })
        .then((res) => {
          if (res.data.status === 'OK') {
            alert('succed modify userInfo')
            window.location.reload()
          } else {
            alert('Falied')
          }
        })
        .catch((err) => {})
    }
  }
  const onclick_user_unactive_btn = (elem: any) => {
    console.log('asodijfoasidj', elem)
    if (listlist) {
      axios
        .put(API.API_SET_ACTIVE_USER + `/${elem.username}?nettype=${net}`, {
          active: 0,
          nettype: net,
        })
        .then((res) => {
          if (res.data.status === 'OK') {
            alert('succed modify userInfo')

            window.location.reload()
          } else {
            alert('Falied')
          }
        })
        .catch((err) => {})
    }
  }

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
              <CSVLink
                data={csv}
                filename={'user_data.csv'}
                target="_blank"
                style={{
                  textDecoration: 'none',
                  color: '#ffffff',
                  padding: '15px',
                  borderRadius: '5px',
                  backgroundColor: '#1A76D2',
                  width: '200px',
                  textAlign: 'center',
                }}
              >
                등록
              </CSVLink>
              {/* <ContainedButton subject="EXCEL" /> */}
            </article>
          </div>
          <div>
            <table className="nft-table">
              <thead className="nft-th">
                <tr>
                  <td className="nft-td" rowSpan={2}>
                    순서
                  </td>
                  <td className="nft-td">username</td>
                  <td className="nft-td">email</td>
                  <td className="nft-td">nickname</td>
                  <td className="nft-td">staked</td>
                  <td className="nft-td">myreferercode</td>
                  <td className="nft-td">가입일</td>
                  <td className="nft-td">delinquent</td>
                  <td className="nft-td">nettype</td>
                  <td className="nft-td">계정활성화</td>
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
                        {strDot(elem.username, 15)}
                      </td>
                      <td className="nft-td">{elem.email}</td>
                      <td className="nft-td">{elem.nickname}</td>
                      <td className="nft-td">{elem.isstaked}</td>
                      <td className="nft-td">{elem.referer}</td>
                      <td className="nft-td"> {strDot(elem.createdat, 10)}</td>
                      <td className="nft-td"> {elem.isdelinquent}</td>
                      <td className="nft-td"> {elem.nettype}</td>
                      <td className="nft-td" rowSpan={1}>
                        <td className="nft-td">
                          {elem.active ? '활성' : '비활성'}
                        </td>
                        <button
                          style={{ marginRight: '20px' }}
                          onClick={() => {
                            onclick_user_active_btn(elem)
                          }}
                        >
                          활성화
                        </button>
                        <button
                          onClick={() => {
                            onclick_user_unactive_btn(elem)
                          }}
                        >
                          비활성화
                        </button>
                      </td>
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

export default UserManaging

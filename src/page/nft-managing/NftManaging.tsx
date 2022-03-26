import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Papers from '../../components/paper/Papers'
import PaperBodyContent from '../../components/paper/PaperBodyContent'
import SelectViewer from '../../components/select-viewer/SelectViewer'
import { Select, MenuItem } from '@mui/material'
import { SelectChangeEvent } from '@mui/material'
import BasicDateRangePicker from '../../components/date-range/DateRangePicker'
import Searches from '../../components/input/search/Searches'
import ContainedButton from '../../components/input/button/ContainedButton'
import eg_image from '../../assets/images/ex-image.png'
import { Pagination } from '@mui/material'
import Toggle from 'react-toggle'
import 'react-toggle/style.css'
import { API } from '../../configs/api'
import { LOGGER } from '../../utils/common'
import axios from 'axios'

const fields_01 = [
  {
    content: () => {
      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '1rem',
          }}
        >
          <article
            style={{ width: '30%', color: '#7A7A7A', fontWeight: 'bold' }}
          >
            대기
          </article>
          <article
            style={{ width: '70%', display: 'flex', fontWeight: 'bold' }}
          >
            25
          </article>
        </div>
      )
    },
  },
  {
    content: () => {
      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '1rem',
          }}
        >
          <article
            style={{ width: '30%', color: '#7A7A7A', fontWeight: 'bold' }}
          >
            누적 등록수
          </article>
          <article
            style={{ width: '70%', display: 'flex', fontWeight: 'bold' }}
          >
            2,456,123,222
          </article>
        </div>
      )
    },
  },
]

const fields_02 = [
  {
    content: () => {
      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '1rem',
          }}
        >
          <article
            style={{ width: '30%', color: '#7A7A7A', fontWeight: 'bold' }}
          >
            대기
          </article>
          <article
            style={{ width: '70%', display: 'flex', fontWeight: 'bold' }}
          >
            25
          </article>
        </div>
      )
    },
  },
  {
    content: () => {
      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '1rem',
          }}
        >
          <article
            style={{ width: '30%', color: '#7A7A7A', fontWeight: 'bold' }}
          >
            누적 MINTING 수
          </article>
          <article
            style={{ width: '70%', display: 'flex', fontWeight: 'bold' }}
          >
            56,123,222
          </article>
        </div>
      )
    },
  },
]

const NftManaging = () => {
  let [list, setlist] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [page, setPage] = useState<number>(1)
  const [rows, setRows] = useState<any>(20)
  const [count, setCount] = useState<number>(0)
  const countdata = () => {
    axios.get(`${API.API_COUNT}/items`).then((resp) => {
      LOGGER('COUNT', resp)
      setCount(resp.data.payload.count)
    })
  }
  const fetchdata = () => {
    axios
      .get(
        API.API_COMMONITEMS +
          `/items/group_/kong/${page * rows}/${rows}/id/DESC`,
      )
      .then((resp) => {
        LOGGER('', resp.data)
        let { status, list } = resp.data
        if (status == 'OK') {
          setCount(resp.data.payload.count as number)
          setTotalPages(Math.ceil(resp.data.payload.count / rows))
          setlist(list)
        }
      })
  }
  const handleRows = (event: SelectChangeEvent<{ value: any }>) => {
    setRows(event.target.value)
  }
  useEffect(() => {
    //countdata()

    fetchdata()
  }, [])
  useEffect(() => {
    setTotalPages(Math.ceil(count / rows))
    fetchdata()
  }, [page, rows])

  console.log('list')
  console.log(list)
  return (
    <>
      <div
        style={{
          display: 'flex',
        }}
      >
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: '100%',
          }}
        >
          <Typography
            sx={{
              p: 2,
            }}
            component="h2"
            variant="h6"
            color="#000000"
            gutterBottom
          >
            Subscription Auction
          </Typography>
          <div>
            <PaperBodyContent fields={fields_01} />
          </div>
        </Paper>
        <Paper
          sx={{
            marginLeft: '45px',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: '100%',
          }}
        >
          <Typography
            sx={{
              p: 2,
            }}
            component="h2"
            variant="h6"
            color="#000000"
            gutterBottom
          >
            Market Place
          </Typography>
          <div>
            <PaperBodyContent fields={fields_02} />
          </div>
        </Paper>
      </div>

      <div
        style={{
          marginTop: '3rem',
        }}
      >
        <Papers title="NFT 관리">
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
                  <Select
                    id="RowsSelectLabel"
                    value={rows}
                    onChange={handleRows}
                  >
                    <MenuItem value={10}>10개씩 보기</MenuItem>
                    <MenuItem value={20}>20개씩 보기</MenuItem>
                  </Select>
                  {/*<SelectViewer
                    title="10개씩 보기"
                    menu={[
                      {
                        value: 10,
                        label: '10개씩 보기',
                      },
                      { value: 20, label: '20개씩 보기' },
                    ]}
                  />*/}
                </article>

                <article style={{ width: '100%', marginLeft: '8px' }}>
                  <SelectViewer
                    title="입찰 신청자 수"
                    menu={[
                      { value: 1, label: '1' },
                      { value: 2, label: '2' },
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
                {/*<BasicDateRangePicker dateState={value=>{console.log(value)}} />*/}
                <Searches searchState={(e) => console.log(e)} />
                <ContainedButton subject="등록" />
              </article>
            </section>

            <div>
              <table className="nft-table">
                <thead className="nft-th">
                  <tr>
                    <td className="nft-td" rowSpan={2}>
                      순서
                    </td>
                    <td className="nft-td" rowSpan={2}>
                      이미지
                    </td>
                    <td className="nft-td" rowSpan={2}>
                      일련번호
                    </td>
                    <td className="nft-td">그룹</td>
                    <td className="nft-td">스왑시 지급 토큰</td>
                    <td className="nft-td">매칭 대기기간</td>
                    <td className="nft-td">몬스터 가격</td>
                    <td className="nft-td">유통상태</td>
                    <td className="nft-td">입찰 참여 시작일</td>
                    <td className="nft-td">생성일</td>
                  </tr>
                  {/**                   <tr>
                    <td className="nft-td">스테이킹 지급 일수</td>
                    <td className="nft-td">스테이킹 지급 토큰</td>
                    <td className="nft-td">상태</td>
                    <td className="nft-td">거래 가격</td>
                    <td className="nft-td">설정된 수익률</td>
                    <td className="nft-td">입찰 참여 종료일</td>
                    <td className="nft-td">다음 매칭</td>
                  </tr>*/}
                </thead>

                <tbody>
                  {list.map((elem: any, idx: number) => (
                    <tr key={idx}>
                      <td className="nft-td" rowSpan={1}>
                        {elem.id}
                      </td>
                      <td className="nft-td" rowSpan={1}>
                        <img
                          src={elem.url}
                          style={{ height: '50px' }}
                          alt="eg_image"
                        />
                      </td>
                      <td className="nft-td" rowSpan={1}>
                        {elem.titlename}
                      </td>
                      <td className="nft-td"> {elem.group_} </td>
                      <td className="nft-td">100</td>
                      <td className="nft-td">3</td>
                      <td className="nft-td">126</td>
                      <td className="nft-td">
                        {elem.salesstatusstr === 'on_reserve'
                          ? '예약'
                          : elem.salesstatusstr === 'assigned'
                          ? '할당'
                          : elem.salesstatusstr === 'user_owned'
                          ? '유저소유'
                          : ''}
                      </td>
                      <td className="nft-td">
                        <input
                          type="date"
                          id="start"
                          name="trip-start"
                          value="2022-02-02"
                          min="2022-02-02"
                          max="2022-03-03"
                          style={{
                            width: '100%',
                            height: '40px',
                            borderRadius: '12px',
                            border: '1px solid #D9D9D9',
                            textAlign: 'center',
                          }}
                        />
                      </td>
                      <td className="nft-td" rowSpan={1}>
                        <Toggle
                          defaultChecked={false}
                          disabled={false}
                          icons={false}
                        />
                        <br />
                        <span>On sale</span>
                      </td>
                    </tr>
                  ))}

                  {/**                   <tr>
                    <td className="nft-td" rowSpan={1}>
                      1
                    </td>
                    <td className="nft-td" rowSpan={1}>
                      <img src={eg_image} style={{height:'50px'}} alt="eg_image" />
                    </td>
                    <td className="nft-td" rowSpan={1}>
                      0xb6..2ef0
                    </td>
                    <td className="nft-td">NIP</td>
                    <td className="nft-td">100</td>
                    <td className="nft-td">3</td>
                    <td className="nft-td">126</td>
                    <td className="nft-td">8%</td>
                    <td className="nft-td">
                      <input
                        type="date"                        id="start"
                        name="trip-start"                        value="2022-02-02"
                        min="2022-02-02"                        max="2022-03-03"
                        style={{                          width: '100%',
                          height: '40px',                          borderRadius: '12px',
                          border: '1px solid #D9D9D9',                          textAlign: 'center',
                        }}
                      />
                    </td>
                    <td className="nft-td" rowSpan={2}>											
											<Toggle
    defaultChecked={false}
    disabled={false } icons={false} /><br/><span>On sale</span>
										</td>
                  </tr>*/}
                  {/**                   <tr>
                    <td className="nft-td">100</td>
                    <td className="nft-td">100</td>
                    <td className="nft-td">Stay</td>
                    <td className="nft-td">136</td>
                    <td className="nft-td">8%</td>
                    <td className="nft-td">
                      <input
                        type="date"
                        id="start"
                        name="trip-start"
                        value="2022-02-02"
                        min="2022-02-02"
                        max="2022-03-03"
                        style={{
                          width: '100%',
                          height: '40px',
                          borderRadius: '12px',
                          border: '1px solid #D9D9D9',
                          textAlign: 'center',
                        }}
                      />
                    </td>
                    <td className="nft-td">2022-02-02</td>
                  </tr>*/}
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
      </div>
    </>
  )
}

export default NftManaging

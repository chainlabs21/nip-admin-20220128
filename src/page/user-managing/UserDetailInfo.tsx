import React, { useEffect, useState } from 'react'
import DateRangePicker, { DateRange } from '@mui/lab/DateRangePicker'
import { TextField, Box } from '@mui/material'
import SelectViewer from '../../components/select-viewer/SelectViewer'
import Searches from '../../components/input/search/Searches'
import ContainedButton from '../../components/input/button/ContainedButton'
import TableDefault from '../../components/table/TableDefault'
import TableDefaultUserManaging from '../../components/table/TableDefaultUserManaging'
import Papers, { PapersOne } from '../../components/paper/Papers'
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
import { useLocation } from 'react-router-dom'
import {
  browserName,
  browserVersion,
  isChrome,
  isFirefox,
  isSafari,
  isEdge,
} from 'react-device-detect'
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

const UserManagingDetail = () => {
  const address = useLocation().state

  let [listlist, setlistlist] = useState<any>([])
  let [listBallots, setlistBallots] = useState<any>([])
  let [listCirculations, setCirculations] = useState<any>([])
  let [listDelinquencies, setDelinquencies] = useState<any>([])
  let [listItembalances, setItembalances] = useState<any>([])
  let [listLogactions, setLogactions] = useState<any>([])
  let [listLogdelinquents, setLogdelinquents] = useState<any>([])
  let [listLogfeepayments, setLogfeepayments] = useState<any>([])
  let [listLogitembalances, setLogitembalances] = useState<any>([])
  let [listLogpayments, setLogpayments] = useState<any>([])
  let [listLogsales, setLogsales] = useState<any>([])
  let [listReceivalbes, setReceivalbes] = useState<any>([])
  let [listTransactions, setTransactions] = useState<any>([])

  const fetchdata = async () => {
    axios
      .get(API.API_USER_DETAIL + `/${address}?nettype=${net}`)
      .then((resp) => {
        LOGGER('userDetail', resp.data)
        let { status } = resp.data
        if (status == 'OK') {
          //		settestField ( list )
          setlistlist([resp.data.respdata])
          setlistBallots(resp.data.respdata.ballots)
          setCirculations(resp.data.respdata.circulations)
          setDelinquencies(resp.data.respdata.delinquencies)
          setItembalances(resp.data.respdata.itembalances)
          setLogactions(resp.data.respdata.logactions)
          setLogdelinquents(resp.data.respdata.logdelinquents)
          setLogfeepayments(resp.data.respdata.logfeepayments)
          setLogitembalances(resp.data.respdata.logitembalances)
          setLogpayments(resp.data.respdata.logpayments)
          setLogsales(resp.data.respdata.logsales)
          setReceivalbes(resp.data.respdata.receivables)
          setTransactions(resp.data.respdata.transactions)
        }
      })
  }

  console.log('listBallots', listTransactions)
  useEffect(() => {
    fetchdata()
  }, [address])

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
      <PapersOne title="회원상세정보">
        <section
          style={{
            padding: '1rem',
          }}
        >
          <p style={{ fontSize: '30px' }}>Info</p>
          <div>
            <table className="nft-table" style={{ width: '100rem' }}>
              <thead className="nft-th">
                <tr>
                  <td className="nft-td" rowSpan={2}>
                    순서
                  </td>
                  <td className="nft-td">Username</td>
                  <td className="nft-td">활성상태</td>
                  <td className="nft-td">Email</td>
                  <td className="nft-td">Staked</td>
                  <td className="nft-td">가입일</td>
                  <td className="nft-td">Referer</td>
                  <td className="nft-td">Nettype</td>
                </tr>
              </thead>

              <tbody>
                {listlist &&
                  listlist?.map((elem: any, idx: number) => (
                    <tr key={idx}>
                      <td className="nft-td">{elem.id}</td>

                      <td className="nft-td">{strDot(elem.username, 15)}</td>
                      <td className="nft-td">
                        {elem.active === 0 ? '비활성' : '활성'}
                      </td>
                      <td className="nft-td">{elem.email}</td>
                      <td className="nft-td">{elem.isstaked}</td>
                      <td className="nft-td"> {strDot(elem.createdat, 10)}</td>
                      <td className="nft-td"> {elem.referer}</td>
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
          ></div>
        </section>
        <section
          style={{
            padding: '1rem',
          }}
        >
          <p style={{ fontSize: '30px' }}>Ballots</p>
          <div>
            <table className="nft-table" style={{ width: '140rem' }}>
              <thead className="nft-th">
                <tr>
                  <td className="nft-td" rowSpan={2}>
                    순서
                  </td>
                  <td className="nft-td">Username</td>
                  <td className="nft-td">활성상태</td>
                  <td className="nft-td">Countdelinquencies</td>
                  <td className="nft-td">Counthelditems</td>
                  <td className="nft-td">Stake</td>
                  <td className="nft-td">Lastassigneddate</td>
                  <td className="nft-td">Lastroundmadepaymentfor</td>
                  <td className="nft-td">Lasttimemadepaymentat</td>
                  <td className="nft-td">Nettype</td>
                  <td className="nft-td">생성일</td>
                  <td className="nft-td">수정일</td>
                </tr>
              </thead>

              <tbody>
                {listlist &&
                  listBallots?.map((elem: any, idx: number) => (
                    <tr key={idx}>
                      <td className="nft-td">{elem.id}</td>

                      <td className="nft-td">{strDot(elem.username, 15)}</td>
                      <td className="nft-td">
                        {elem.active === 0 ? '비활성' : '활성'}
                      </td>
                      <td className="nft-td">
                        {elem.countdelinquencies === null
                          ? '0'
                          : elem.countdelinquencies}
                      </td>
                      <td className="nft-td"> {elem.counthelditems}</td>
                      <td className="nft-td"> {elem.isstaked}</td>
                      <td className="nft-td">
                        {' '}
                        {elem.lastassigneddate === null
                          ? '0'
                          : elem.lastassigneddate}
                      </td>
                      <td className="nft-td">
                        {' '}
                        {elem.lastroundmadepaymentfor}
                      </td>
                      <td className="nft-td">
                        {' '}
                        {elem.lasttimemadepaymentat === null
                          ? '0'
                          : elem.lasttimemadepaymentat}
                      </td>
                      <td className="nft-td"> {elem.nettype}</td>
                      <td className="nft-td">
                        {' '}
                        {elem.createdat?.split('.')[0]}
                      </td>
                      <td className="nft-td">
                        {' '}
                        {elem.updatedat?.split('.')[0]}
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
          ></div>
        </section>
        <section
          style={{
            padding: '1rem',
          }}
        >
          <p style={{ fontSize: '30px' }}>Circulations</p>
          <div>
            <table className="nft-table" style={{ width: '160rem' }}>
              <thead className="nft-th">
                <tr>
                  <td className="nft-td" rowSpan={2}>
                    순서
                  </td>
                  <td className="nft-td">Username</td>
                  <td className="nft-td">활성상태</td>
                  <td className="nft-td">Countdelinquencies</td>
                  <td className="nft-td">Counthelditems</td>
                  <td className="nft-td">Stake</td>
                  <td className="nft-td">Lastassigneddate</td>
                  <td className="nft-td">Lastroundmadepaymentfor</td>
                  <td className="nft-td">Lasttimemadepaymentat</td>
                  <td className="nft-td">Nettype</td>
                  <td className="nft-td">생성일</td>
                  <td className="nft-td">수정일</td>
                </tr>
              </thead>

              <tbody>
                {listlist &&
                  listCirculations?.map((elem: any, idx: number) => (
                    <tr key={idx}>
                      <td className="nft-td">{elem.id}</td>

                      <td className="nft-td">{strDot(elem.username, 15)}</td>
                      <td className="nft-td">
                        {elem.active === 0 ? '비활성' : '활성'}
                      </td>
                      <td className="nft-td">
                        {elem.countdelinquencies === null
                          ? '0'
                          : elem.countdelinquencies}
                      </td>
                      <td className="nft-td"> {elem.counthelditems}</td>
                      <td className="nft-td"> {elem.isstaked}</td>
                      <td className="nft-td">
                        {' '}
                        {elem.lastassigneddate === null
                          ? '0'
                          : elem.lastassigneddate}
                      </td>
                      <td className="nft-td">
                        {' '}
                        {elem.lastroundmadepaymentfor}
                      </td>
                      <td className="nft-td">
                        {' '}
                        {elem.lasttimemadepaymentat === null
                          ? '0'
                          : elem.lasttimemadepaymentat}
                      </td>
                      <td className="nft-td"> {elem.nettype}</td>
                      <td className="nft-td">
                        {' '}
                        {elem.createdat?.split('.')[0]}
                      </td>
                      <td className="nft-td">
                        {' '}
                        {elem.updatedat?.split('.')[0]}
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
          ></div>
        </section>
        <section
          style={{
            padding: '1rem',
          }}
        >
          <p style={{ fontSize: '30px' }}>Delinquencies</p>
          <div>
            <table className="nft-table" style={{ width: '160rem' }}>
              <thead className="nft-th">
                <tr>
                  <td className="nft-td" rowSpan={2}>
                    순서
                  </td>
                  <td className="nft-td">Username</td>
                  <td className="nft-td">Countchangehands</td>
                  <td className="nft-td">Itemid</td>
                  <td className="nft-td">Price</td>
                  <td className="nft-td">Priceunit</td>
                  <td className="nft-td">priceunitcurrency</td>
                  <td className="nft-td">Roundnumber</td>
                  <td className="nft-td">Nettype</td>
                  <td className="nft-td">생성일</td>
                  <td className="nft-td">수정일</td>
                </tr>
              </thead>

              <tbody>
                {listlist &&
                  listDelinquencies?.map((elem: any, idx: number) => (
                    <tr key={idx}>
                      <td className="nft-td">{elem.id}</td>

                      <td className="nft-td">{strDot(elem.username, 15)}</td>
                      <td className="nft-td">{elem.countchangehands}</td>
                      <td className="nft-td">{strDot(elem.itemid, 10)}</td>

                      <td className="nft-td">
                        {' '}
                        {parseInt(elem.price).toFixed(2)}
                      </td>
                      <td className="nft-td"> {elem.priceunit}</td>
                      <td className="nft-td">
                        {' '}
                        {elem.priceunitcurrency === null
                          ? '0'
                          : elem.priceunitcurrency}
                      </td>
                      <td className="nft-td"> {elem.roundnumber}</td>
                      <td className="nft-td"> {elem.nettype}</td>
                      <td className="nft-td">
                        {' '}
                        {elem.createdat?.split('.')[0]}
                      </td>
                      <td className="nft-td">
                        {' '}
                        {elem.updatedat?.split('.')[0]}
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
          ></div>
        </section>
        <section
          style={{
            padding: '1rem',
          }}
        >
          <p style={{ fontSize: '30px' }}>ItemBalances</p>
          <div>
            <table className="nft-table" style={{ width: '160rem' }}>
              <thead className="nft-th">
                <tr>
                  <td className="nft-td" rowSpan={2}>
                    순서
                  </td>
                  <td className="nft-td">Username</td>
                  <td className="nft-td">Itemid</td>
                  <td className="nft-td">상태</td>
                  <td className="nft-td">Buyprice</td>
                  <td className="nft-td">Paymeans</td>
                  <td className="nft-td">Paymeansaddress</td>
                  <td className="nft-td">Amount</td>
                  <td className="nft-td">Nettype</td>
                  <td className="nft-td">생성일</td>
                  <td className="nft-td">수정일</td>
                </tr>
              </thead>

              <tbody>
                {listlist &&
                  listItembalances?.map((elem: any, idx: number) => (
                    <tr key={idx}>
                      <td className="nft-td">{elem.id}</td>

                      <td className="nft-td">{strDot(elem.username, 15)}</td>
                      <td className="nft-td">{strDot(elem.itemid, 10)}</td>

                      <td className="nft-td"> {elem.status}</td>
                      <td className="nft-td"> {elem.buyprice}</td>
                      <td className="nft-td"> {elem.paymeans}</td>
                      <td className="nft-td"> {elem.paymeansaddress}</td>
                      <td className="nft-td"> {elem.amount}</td>
                      <td className="nft-td"> {elem.nettype}</td>
                      <td className="nft-td">
                        {' '}
                        {elem.createdat?.split('.')[0]}
                      </td>
                      <td className="nft-td">
                        {' '}
                        {elem.updatedat?.split('.')[0]}
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
          ></div>
        </section>
        <section
          style={{
            padding: '1rem',
          }}
        >
          <p style={{ fontSize: '30px' }}>Logactions</p>
          <div>
            <table className="nft-table" style={{ width: '160rem' }}>
              <thead className="nft-th">
                <tr>
                  <td className="nft-td">순서</td>
                  <td className="nft-td">Username</td>
                  <td className="nft-td">Actiontype</td>
                  <td className="nft-td">Actionname</td>
                  <td className="nft-td">Seller</td>
                  <td className="nft-td">Buyer</td>
                  <td className="nft-td">Amount</td>
                  <td className="nft-td">Note</td>
                  <td className="nft-td">Itemid</td>
                  <td className="nft-td">Priceunit</td>
                  <td className="nft-td">Typestr</td>
                  <td className="nft-td">Txhash</td>
                  <td className="nft-td">Price</td>
                  <td className="nft-td">From_</td>
                  <td className="nft-td">To_</td>
                  <td className="nft-td">Nettype</td>
                  <td className="nft-td">상태</td>
                  <td className="nft-td">roundnumber</td>
                  <td className="nft-td">Createdat</td>
                  <td className="nft-td">Updataedat</td>
                </tr>
              </thead>

              <tbody>
                {listlist &&
                  listLogactions.map((elem: any, idx: number) => (
                    <tr key={idx}>
                      <td className="nft-td">{elem.id}</td>

                      <td className="nft-td">{strDot(elem.username, 15)}</td>
                      <td className="nft-td"> {elem.actiontype}</td>
                      <td className="nft-td"> {elem.actionname}</td>
                      <td className="nft-td"> {strDot(elem.seller, 15)}</td>
                      <td className="nft-td"> {strDot(elem.buyer, 15)}</td>
                      <td className="nft-td"> {elem.amount}</td>
                      <td className="nft-td"> {elem.note}</td>
                      <td className="nft-td">{strDot(elem.itemid, 10)}</td>
                      <td className="nft-td"> {elem.priceunit}</td>
                      <td className="nft-td"> {elem.typestr}</td>
                      <td
                        className="nft-td"
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                          onClick_tx_open_window(elem.txhash, elem.nettype)
                        }}
                      >
                        {strDot(elem.txhash, 10)}
                      </td>
                      <td className="nft-td"> {elem.price}</td>
                      <td className="nft-td">{strDot(elem.from_, 15)}</td>
                      <td className="nft-td">{strDot(elem.to_, 15)}</td>
                      <td className="nft-td"> {elem.nettype}</td>
                      <td className="nft-td"> {elem.status}</td>
                      <td className="nft-td"> {elem.roundnumber}</td>
                      <td className="nft-td"> {elem.createdat}</td>
                      <td className="nft-td"> {elem.updatedat}</td>
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
          ></div>
        </section>
        <section
          style={{
            padding: '1rem',
          }}
        >
          <p style={{ fontSize: '30px' }}>Logdelinquents</p>
          <div>
            <table className="nft-table" style={{ width: '160rem' }}>
              <thead className="nft-th">
                <tr>
                  <td className="nft-td">순서</td>
                  <td className="nft-td">Username</td>
                  <td className="nft-td">Itemid</td>
                  <td className="nft-td">Amount</td>
                  <td className="nft-td">Currency</td>
                  <td className="nft-td">Currencyaddress</td>
                  <td className="nft-td">Statusstr</td>
                  <td className="nft-td">Status</td>
                  <td className="nft-td">Roundnumber</td>
                  <td className="nft-td">Txhash</td>
                  <td className="nft-td">Active</td>
                  <td className="nft-td">Nettype</td>
                  <td className="nft-td">생성일</td>
                  <td className="nft-td">수정일</td>
                </tr>
              </thead>

              <tbody>
                {listlist &&
                  listLogdelinquents?.map((elem: any, idx: number) => (
                    <tr key={idx}>
                      <td className="nft-td">{elem.id}</td>

                      <td className="nft-td">{strDot(elem.username, 15)}</td>
                      <td className="nft-td">{strDot(elem.itemid, 10)}</td>
                      <td className="nft-td"> {elem.amount}</td>
                      <td className="nft-td"> {elem.currency}</td>
                      <td className="nft-td">
                        {' '}
                        {strDot(elem.currencyaddress, 15)}
                      </td>
                      <td className="nft-td"> {elem.statusstr}</td>
                      <td className="nft-td"> {elem.status}</td>
                      <td className="nft-td"> {elem.roundnumber}</td>
                      <td
                        className="nft-td"
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                          onClick_tx_open_window(elem.txhash, elem.nettype)
                        }}
                      >
                        {' '}
                        {strDot(elem.txhash, 15)}
                      </td>
                      <td className="nft-td"> {elem.active}</td>
                      <td className="nft-td"> {elem.nettype}</td>
                      <td className="nft-td">
                        {' '}
                        {elem.createdat?.split('.')[0]}
                      </td>
                      <td className="nft-td">
                        {' '}
                        {elem.updatedat?.split('.')[0]}
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
          ></div>
        </section>
        <section
          style={{
            padding: '1rem',
          }}
        >
          <p style={{ fontSize: '30px' }}>Logfeepayments</p>
          <div>
            <table className="nft-table" style={{ width: '160rem' }}>
              <thead className="nft-th">
                <tr>
                  <td className="nft-td">순서</td>
                  <td className="nft-td">Username</td>
                  <td className="nft-td">Amount</td>
                  <td className="nft-td">Typestr</td>
                  <td className="nft-td">Paymeansname</td>
                  <td className="nft-td">Paymeansaddress</td>
                  <td className="nft-td">Status</td>
                  <td className="nft-td">Roundnumber</td>
                  <td className="nft-td">Txhash</td>
                  <td className="nft-td">Active</td>
                  <td className="nft-td">Nettype</td>
                  <td className="nft-td">생성일</td>
                  <td className="nft-td">수정일</td>
                </tr>
              </thead>

              <tbody>
                {listlist &&
                  listLogfeepayments?.map((elem: any, idx: number) => (
                    <tr key={idx}>
                      <td className="nft-td">{elem.id}</td>

                      <td className="nft-td">{strDot(elem.username, 15)}</td>
                      <td className="nft-td"> {elem.amount}</td>
                      <td className="nft-td"> {elem.typestr}</td>
                      <td className="nft-td"> {elem.paymeansname}</td>
                      <td className="nft-td">
                        {' '}
                        {strDot(elem.paymeansaddress, 15)}
                      </td>
                      <td
                        className="nft-td"
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                          onClick_tx_open_window(elem.txhash, elem.nettype)
                        }}
                      >
                        {' '}
                        {strDot(elem.txhash, 15)}
                      </td>
                      <td className="nft-td"> {elem.active}</td>
                      <td className="nft-td"> {elem.nettype}</td>
                      <td className="nft-td">
                        {' '}
                        {elem.createdat?.split('.')[0]}
                      </td>
                      <td className="nft-td">
                        {' '}
                        {elem.updatedat?.split('.')[0]}
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
          ></div>
        </section>
        <section
          style={{
            padding: '1rem',
          }}
        >
          <p style={{ fontSize: '30px' }}>Logitembalances</p>
          <div>
            <table className="nft-table" style={{ width: '160rem' }}>
              <thead className="nft-th">
                <tr>
                  <td className="nft-td">순서</td>
                  <td className="nft-td">Username</td>
                  <td className="nft-td">Itemid</td>
                  <td className="nft-td">Status</td>
                  <td className="nft-td">Buyprice</td>
                  <td className="nft-td">Paymeans</td>
                  <td className="nft-td">Paymeansaddress</td>
                  <td className="nft-td">Amount</td>
                  <td className="nft-td">Nettype</td>
                  <td className="nft-td">생성일</td>
                  <td className="nft-td">수정일</td>
                </tr>
              </thead>

              <tbody>
                {listlist &&
                  listLogitembalances?.map((elem: any, idx: number) => (
                    <tr key={idx}>
                      <td className="nft-td">{elem.id}</td>

                      <td className="nft-td">{strDot(elem.username, 15)}</td>
                      <td className="nft-td"> {strDot(elem.itemid, 15)}</td>
                      <td className="nft-td"> {elem.status}</td>
                      <td className="nft-td"> {elem.buyprice}</td>
                      <td className="nft-td"> {elem.paymeans}</td>
                      <td className="nft-td">
                        {' '}
                        {strDot(elem.paymeansaddress, 15)}
                      </td>
                      <td className="nft-td"> {elem.amount}</td>
                      <td className="nft-td"> {elem.nettype}</td>
                      <td className="nft-td">
                        {' '}
                        {elem.createdat?.split('.')[0]}
                      </td>
                      <td className="nft-td">
                        {' '}
                        {elem.updatedat?.split('.')[0]}
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
          ></div>
        </section>
        <section
          style={{
            padding: '1rem',
          }}
        >
          <p style={{ fontSize: '30px' }}>Logpayments</p>
          <div>
            <table className="nft-table" style={{ width: '160rem' }}>
              <thead className="nft-th">
                <tr>
                  <td className="nft-td">순서</td>
                  <td className="nft-td">Username</td>
                  <td className="nft-td">Itemid</td>
                  <td className="nft-td">Status</td>
                  <td className="nft-td">Buyprice</td>
                  <td className="nft-td">Paymeans</td>
                  <td className="nft-td">Paymeansaddress</td>
                  <td className="nft-td">Amount</td>
                  <td className="nft-td">Nettype</td>
                  <td className="nft-td">생성일</td>
                  <td className="nft-td">수정일</td>
                </tr>
              </thead>

              <tbody>
                {listlist &&
                  listLogpayments?.map((elem: any, idx: number) => (
                    <tr key={idx}>
                      <td className="nft-td">{elem.id}</td>

                      <td className="nft-td">{strDot(elem.username, 15)}</td>
                      <td className="nft-td"> {strDot(elem.itemid, 15)}</td>
                      <td className="nft-td"> {elem.status}</td>
                      <td className="nft-td">
                        {' '}
                        {parseInt(elem.buyprice).toFixed(2)}
                      </td>
                      <td className="nft-td"> {elem.paymeans}</td>
                      <td className="nft-td">
                        {' '}
                        {strDot(elem.paymeansaddress, 15)}
                      </td>
                      <td className="nft-td"> {elem.amount}</td>
                      <td className="nft-td"> {elem.nettype}</td>
                      <td className="nft-td">
                        {' '}
                        {elem.createdat?.split('.')[0]}
                      </td>
                      <td className="nft-td">
                        {' '}
                        {elem.updatedat?.split('.')[0]}
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
          ></div>
        </section>
        <section
          style={{
            padding: '1rem',
          }}
        >
          <p style={{ fontSize: '30px' }}>Logsales</p>
          <div>
            <table className="nft-table" style={{ width: '160rem' }}>
              <thead className="nft-th">
                <tr>
                  <td className="nft-td">순서</td>
                  <td className="nft-td">Username</td>
                  <td className="nft-td">Itemid</td>
                  <td className="nft-td">Amount</td>
                  <td className="nft-td">Currency</td>
                  <td className="nft-td">Currencyaddress</td>
                  <td className="nft-td">Statusstr</td>
                  <td className="nft-td">Status</td>
                  <td className="nft-td">Roundnumber</td>
                  <td className="nft-td">Txhash</td>
                  <td className="nft-td">Active</td>
                  <td className="nft-td">Seller</td>
                  <td className="nft-td">Nettype</td>
                  <td className="nft-td">생성일</td>
                  <td className="nft-td">수정일</td>
                </tr>
              </thead>

              <tbody>
                {listlist &&
                  listLogsales.map((elem: any, idx: number) => (
                    <tr key={idx}>
                      <td className="nft-td">{elem.id}</td>

                      <td className="nft-td">{strDot(elem.username, 15)}</td>
                      <td className="nft-td"> {strDot(elem.itemid, 15)}</td>
                      <td className="nft-td"> {elem.amount}</td>
                      <td className="nft-td"> {elem.currency}</td>
                      <td className="nft-td">
                        {' '}
                        {strDot(elem.currencyaddress, 15)}
                      </td>
                      <td className="nft-td"> {elem.statusstr}</td>
                      <td className="nft-td"> {elem.status}</td>
                      <td className="nft-td"> {elem.roundnumber}</td>
                      <td
                        className="nft-td"
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                          onClick_tx_open_window(elem.txhash, elem.nettype)
                        }}
                      >
                        {' '}
                        {strDot(elem.txhash, 15)}
                      </td>
                      <td className="nft-td"> {elem.active}</td>
                      <td className="nft-td"> {strDot(elem.seller, 15)}</td>
                      <td className="nft-td"> {elem.nettype}</td>
                      <td className="nft-td">
                        {' '}
                        {elem.createdat?.split('.')[0]}
                      </td>
                      <td className="nft-td">
                        {' '}
                        {elem.updatedat?.split('.')[0]}
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
          ></div>
        </section>
        <section
          style={{
            padding: '1rem',
          }}
        >
          <p style={{ fontSize: '30px' }}>Receivables</p>
          <div>
            <table className="nft-table" style={{ width: '160rem' }}>
              <thead className="nft-th">
                <tr>
                  <td className="nft-td">순서</td>
                  <td className="nft-td">Username</td>
                  <td className="nft-td">Itemid</td>
                  <td className="nft-td">Amount</td>
                  <td className="nft-td">Currency</td>
                  <td className="nft-td">Currencyaddress</td>
                  <td className="nft-td">Statusstr</td>
                  <td className="nft-td">Status</td>
                  <td className="nft-td">Roundnumber</td>
                  <td className="nft-td">Duetime</td>
                  <td className="nft-td">Active</td>
                  <td className="nft-td">Seller</td>
                  <td className="nft-td">Nettype</td>
                  <td className="nft-td">생성일</td>
                  <td className="nft-td">수정일</td>
                </tr>
              </thead>

              <tbody>
                {listlist &&
                  listReceivalbes?.map((elem: any, idx: number) => (
                    <tr key={idx}>
                      <td className="nft-td">{elem.id}</td>

                      <td className="nft-td">{strDot(elem.username, 15)}</td>
                      <td className="nft-td"> {strDot(elem.itemid, 15)}</td>
                      <td className="nft-td">
                        {' '}
                        {parseInt(elem.amount).toFixed(2)}
                      </td>
                      <td className="nft-td"> {elem.currency}</td>
                      <td className="nft-td">
                        {' '}
                        {strDot(elem.currencyaddress, 15)}
                      </td>
                      <td className="nft-td"> {elem.statusstr}</td>
                      <td className="nft-td"> {elem.status}</td>
                      <td className="nft-td"> {elem.roundnumber}</td>
                      <td className="nft-td"> {elem.duetime}</td>
                      <td className="nft-td"> {elem.active}</td>
                      <td className="nft-td"> {strDot(elem.seller, 15)}</td>
                      <td className="nft-td"> {elem.nettype}</td>
                      <td className="nft-td">
                        {' '}
                        {elem.createdat?.split('.')[0]}
                      </td>
                      <td className="nft-td">
                        {' '}
                        {elem.updatedat?.split('.')[0]}
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
          ></div>
        </section>
        <section
          style={{
            padding: '1rem',
          }}
        >
          <p style={{ fontSize: '30px' }}>Transactions</p>
          <div>
            <table className="nft-table" style={{ width: '160rem' }}>
              <thead className="nft-th">
                <tr>
                  <td className="nft-td">순서</td>
                  <td className="nft-td">Username</td>
                  <td className="nft-td">Txhash</td>
                  <td className="nft-td">Typestr</td>
                  <td className="nft-td">Nettype</td>
                  <td className="nft-td">생성일</td>
                  <td className="nft-td">수정일</td>
                </tr>
              </thead>

              <tbody>
                {listlist &&
                  listTransactions?.map((elem: any, idx: number) => (
                    <tr key={idx}>
                      <td className="nft-td">{elem.id}</td>
                      <td className="nft-td">{strDot(elem.username, 15)}</td>

                      <td
                        className="nft-td"
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                          onClick_tx_open_window(elem.txhash, elem.nettype)
                        }}
                      >
                        {strDot(elem.txhash, 15)}
                      </td>

                      <td className="nft-td"> {elem.typestr}</td>

                      <td className="nft-td"> {elem.nettype}</td>

                      <td className="nft-td">
                        {' '}
                        {elem.createdat.split('.')[0]}
                      </td>
                      <td className="nft-td">
                        {' '}
                        {elem.updatedat?.split('.')[0]}
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
          ></div>
        </section>
      </PapersOne>
    </>
  )
}

export default UserManagingDetail

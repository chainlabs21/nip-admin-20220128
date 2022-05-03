import React, { useEffect, useState } from 'react'
import Papers from '../../components/paper/Papers'
import PaperBodyContent from '../../components/paper/PaperBodyContent'
import { TextField } from '@mui/material'
import {
  ButtonGroupThird,
  Button_Periodic,
} from '../../components/input/button/ButtonGroup'
import axios from 'axios'
import { API } from '../../configs/api'
import moment from 'moment'
// or @mui/lab/Adapter{Dayjs,Luxon,Moment} or any valid date-io adapter
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { DateTimePicker } from '@mui/lab'
import { LOGGER } from '../../utils/common'
import { query_noarg } from '../../utils/contract-calls'
import { addresses } from '../../configs/addresses'

const ManageAuctionDaily = () => {
  const [getBALLOT, setGetBALLOT] = useState<any>()
  const [selectedCurrentDateDraw, setSelectedCurrentDateDraw] = useState<any>()
  const [selectedCurrentDateClose, setSelectedCurrentDateClose] =
    useState<any>()

  let [isloader_00, setisloader_00] = useState(false)

  const fetchData = async () => {
    axios.get(API.API_BALLOT).then((resp) => {
      let { status, respdata } = resp.data
      if (status == 'OK') {
        LOGGER('resp', resp)
        setGetBALLOT(respdata)
        setSelectedCurrentDateDraw(
          moment.unix(respdata.BALLOT_PERIODIC_DRAW_TIMEOFDAY_INSECONDS),
        )
        setSelectedCurrentDateClose(
          moment.unix(respdata.BALLOT_PERIODIC_PAYMENTDUE_TIMEOFDAY_INSECONDS),
        )
      }
    })
  }
  useEffect(() => {
    fetchData()
  }, [])

  const onReset = () => {
    window.location.reload()
  }

  const fields = [
    {
      content: () => {
        const thtdStyle = {
          border: '1px solid #444444',
          padding: '10px',
          align: 'center',
        }

        return (
          <div>
            <table
              style={{
                display: 'flex-start',
                width: '100%',
                border: '1px solid #444444',
              }}
            >
              <tbody>
                <tr>
                  <td style={thtdStyle}>할당 </td>
                  <td style={thtdStyle}>
                    할당시간 :{' '}
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DateTimePicker
                        renderInput={(props) => <TextField {...props} />}
                        value={selectedCurrentDateDraw}
                        onChange={(newValue) => {
                          setSelectedCurrentDateDraw(newValue)
                        }}
                      />
                    </LocalizationProvider>
                  </td>
                  <td style={thtdStyle}>... : </td>
                  <td style={thtdStyle}>... : </td>
                  <td style={thtdStyle}>... : </td>
                </tr>
                <tr>
                  <td style={thtdStyle}>마감</td>
                  <td style={thtdStyle}>
                    마감시각 :{' '}
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DateTimePicker
                        renderInput={(props) => <TextField {...props} />}
                        value={selectedCurrentDateClose}
                        onChange={(newValue) => {
                          setSelectedCurrentDateClose(newValue)
                        }}
                      />
                    </LocalizationProvider>
                  </td>
                  <td style={thtdStyle}>... : </td>
                  <td style={thtdStyle}>... : </td>
                  <td style={thtdStyle}>... : </td>
                </tr>
              </tbody>
            </table>
            <button
              style={{
                width: '7rem',
                marginTop: '3rem',
                marginLeft: '40rem',
                marginRight: '2rem',
              }}
              onClick={() => {
                onclickSubmitCurrentRoundBtn()
              }}
            >
              저장
            </button>
            <button
              style={{
                width: '7rem',
              }}
              onClick={onReset}
            >
              취소
            </button>
          </div>
        )
      },
    },

    {
      content: () => (
        <hr
          style={{
            marginTop: '3rem',
          }}
        />
      ),
    },
  ]

  const onclickSubmitCurrentRoundBtn = () => {
    if (selectedCurrentDateDraw < selectedCurrentDateClose) {
      setisloader_00(true)
      axios
        .put(API.API_PUTTIME, {
          BALLOT_PERIODIC_DRAW_TIMEOFDAY_INSECONDS: moment(
            selectedCurrentDateDraw,
          ).unix(),
          BALLOT_PERIODIC_PAYMENTDUE_TIMEOFDAY_INSECONDS: moment(
            selectedCurrentDateClose,
          ).unix(),
        })
        .then((resp) => {
          let { status, respdata } = resp.data
          if (status === 'OK') {
            alert('저장이 완료 되었습니다.')
            window.location.reload()
          }
        })
    } else {
      alert('설정 시간을 다시 확인해주세요')
    }
  }

  return (
    <>
      <div style={{ display: 'flex', marginLeft: '40px' }}>
        <ButtonGroupThird
          first={
            getBALLOT?.BALLOT_PERIODIC_ACTIVE === '1' ? '진행중' : '중지중'
          }
        />
        <ButtonGroupThird
          first={`Round : ${getBALLOT?.BALLOT_PERIODIC_ROUNDNUMBER}`}
        />
      </div>
      <Button_Periodic first="시작하기" second="중지하기" />
      <Papers title="일단위 주기적 라운드 관리">
        <PaperBodyContent fields={fields} />
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        ></div>
      </Papers>
    </>
  )
}

export default ManageAuctionDaily

import React, { useEffect, useState } from 'react'
import Papers from '../../components/paper/Papers'
import PaperBodyContent from '../../components/paper/PaperBodyContent'
import {
  CircularProgress,
  FormControlLabel,
  FormGroup,
  OutlinedInput,
  Switch,
  TextField,
} from '@mui/material'
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
import { TimePicker } from '@mui/lab'
import { LOGGER } from '../../utils/common'
import { query_noarg } from '../../utils/contract-calls'
import { addresses } from '../../configs/addresses'
import { net } from '../../configs/net'

const ManageAuctionDaily = (props: any) => {
  const [getBALLOT, setGetBALLOT] = useState<any>()
  const [selectedCurrentDateDraw, setSelectedCurrentDateDraw] = useState<any>()
  const [selectedCurrentDateClose, setSelectedCurrentDateClose] =
    useState<any>()
  const [ballot_delinquency, setBallot_delinquency] = useState<any>()
  const [maxRound, setMaxRound] = useState<any>()
  const [ballot_draw_fraction, setBallot_draw_fraction] = useState<any>()
  const [feecollector_staker, setFeecollector_staker] = useState<any>()
  const [feecollector_pay, setFeecollector_pay] = useState<any>()
  const [feecollector_delinquent, setFeecollector_delinquent] = useState<any>()
  const [checked, setChecked] = useState<any>(
    getBALLOT?.BALLOT_PERIODIC_DRAW_ACTIVE === '1' ? true : false,
  )
  const [checkedPay, setCheckedPay] = useState<any>(
    getBALLOT?.BALLOT_PERIODIC_PAYMENTDUE_ACTIVE === '1' ? true : false,
  )
  let [isloader_00, setisloader_00] = useState(false)
  let [isloader_01, setisloader_01] = useState(false)
  let [isloader_02, setisloader_02] = useState(false)

  const onclickSubmitballot_delinquency = () => {
    if (ballot_delinquency >= 0 && ballot_delinquency <= 100) {
      axios
        .put(API.API_PUTTIME + `?nettype=${net}`, {
          BALLOT_DELINQUENCY_DISCOUNT_FACTOR_BP: ballot_delinquency * 100,
          nettype: net,
        })
        .then((resp) => {
          let { status, respdata } = resp.data
          if (status === 'OK') {
            alert('저장이 완료 되었습니다.')
            window.location.reload()
          }
        })
    } else {
      alert('범위 값은 0%에서 100%까지입니다.')
    }
  }
  const onclickSubmitballot_draw_fun_btn = () => {
    if (ballot_draw_fraction >= 0 && ballot_draw_fraction <= 50) {
      axios
        .put(API.API_PUTTIME + `?nettype=${net}`, {
          BALLOT_DRAW_FRACTION_BP: ballot_draw_fraction * 100,
          nettype: net,
        })
        .then((resp) => {
          let { status, respdata } = resp.data
          if (status === 'OK') {
            alert('저장이 완료 되었습니다.')
            window.location.reload()
          }
        })
    } else {
      alert('범위 값은 0%에서 50%까지입니다.')
    }
  }

  const onclickSubmit_max_round_to_reach_def_fun_btn = () => {
    if (maxRound >= 0 && maxRound <= 17) {
      axios
        .put(API.API_PUTSTATE + `/MAX_ROUND_TO_REACH_DEF?nettype=${net}`, {
          MAX_ROUND_TO_REACH_DEF: maxRound,
          nettype: net,
        })
        .then((resp) => {
          let { status, respdata } = resp.data
          if (status === 'OK') {
            alert('저장이 완료 되었습니다.')
            window.location.reload()
          }
        })
    } else {
      alert('범위 값은 0에서 17 라운드까지입니다.')
    }
  }

  const fetchData = async () => {
    axios.get(API.API_BALLOT + `/?nettype=${net}`).then((resp) => {
      let { status, respdata } = resp.data
      if (status == 'OK') {
        LOGGER('resp1', resp)
        setGetBALLOT(respdata)
        setSelectedCurrentDateDraw(
          moment.unix(respdata.BALLOT_PERIODIC_DRAW_TIMEOFDAY_INSECONDS),
        )
        setSelectedCurrentDateClose(
          moment.unix(respdata.BALLOT_PERIODIC_PAYMENTDUE_TIMEOFDAY_INSECONDS),
        )
        setChecked(respdata.BALLOT_PERIODIC_DRAW_ACTIVE === '1' ? true : false)
        setCheckedPay(
          respdata.BALLOT_PERIODIC_PAYMENTDUE_ACTIVE === '1' ? true : false,
        )
        setMaxRound(respdata.MAX_ROUND_TO_REACH_DEF)
        setBallot_draw_fraction(respdata.BALLOT_DRAW_FRACTION_BP / 100)

        setBallot_delinquency(
          respdata.BALLOT_DELINQUENCY_DISCOUNT_FACTOR_BP / 100,
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
                      <TimePicker
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
                      <TimePicker
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
            <article style={{ width: '30%' }}>사용자-아이템 할당 비율</article>
            <article style={{ width: '70%' }}>
              <OutlinedInput
                type="number"
                id="outlined-adornment-weight"
                aria-describedby="outlined-weight-helper-text"
                inputProps={{ 'aria-label': 'weight' }}
                placeholder={`현재 설정 비율 : ${ballot_draw_fraction}%`}
                defaultValue={ballot_draw_fraction}
                onChange={(e) => {
                  setBallot_draw_fraction(e.target.value)
                }}
                sx={{
                  width: '450px',
                  height: '38px',
                  borderRadius: '12px',
                  marginLeft: '5px',
                  marginRight: '5px',
                }}
              />
              <button
                style={{
                  width: '7rem',
                  marginTop: '2rem',
                  marginLeft: '5rem',
                  // marginRight: '2rem',
                }}
                onClick={() => {
                  onclickSubmitballot_draw_fun_btn()
                }}
              >
                저장
              </button>
              <article
                style={{
                  width: '30%',
                  marginTop: '0.3rem',
                  marginLeft: '1rem',
                }}
              >
                범위 값은 0%에서 50%까지입니다.
              </article>
            </article>
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
            <article style={{ width: '30%' }}>MAX ROUND 설정</article>
            <article style={{ width: '70%' }}>
              <OutlinedInput
                type="number"
                id="outlined-adornment-weight"
                aria-describedby="outlined-weight-helper-text"
                inputProps={{ 'aria-label': 'weight' }}
                // placeholder={`현재 설정 라운드 : ${maxRound} 라운드`}
                // defaultValue={maxRound}
                onChange={(e) => {
                  setMaxRound(e.target.value)
                }}
                sx={{
                  width: '450px',
                  height: '38px',
                  borderRadius: '12px',
                  marginLeft: '5px',
                  marginRight: '5px',
                }}
              />
              <button
                style={{
                  width: '7rem',
                  marginTop: '2rem',
                  marginLeft: '5rem',
                  // marginRight: '2rem',
                }}
                onClick={() => {
                  onclickSubmit_max_round_to_reach_def_fun_btn()
                }}
              >
                저장
              </button>
              <article
                style={{
                  width: '30%',
                  marginTop: '0.3rem',
                  marginLeft: 'rem',
                }}
              >
                라운드는 0에서 17까지 입니다.
              </article>
            </article>
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
            <article style={{ width: '30%' }}>DELINQUENCY 할인률</article>
            <article style={{ width: '70%' }}>
              <OutlinedInput
                type="number"
                id="outlined-adornment-weight"
                aria-describedby="outlined-weight-helper-text"
                inputProps={{ 'aria-label': 'weight' }}
                placeholder={`현재 설정 비율 : ${ballot_delinquency}%`}
                defaultValue={ballot_delinquency}
                onChange={(e) => {
                  setBallot_delinquency(e.target.value)
                }}
                sx={{
                  width: '450px',
                  height: '38px',
                  borderRadius: '12px',
                  marginLeft: '5px',
                  marginRight: '5px',
                }}
              />
              <button
                style={{
                  width: '7rem',
                  marginTop: '2rem',
                  marginLeft: '5rem',
                  // marginRight: '2rem',
                }}
                onClick={() => {
                  onclickSubmitballot_delinquency()
                }}
              >
                저장
              </button>
              <article
                style={{
                  width: '30%',
                  marginTop: '0.3rem',
                  marginLeft: 'rem',
                }}
              >
                범위 값은 0%에서 100%까지입니다.
              </article>
            </article>
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
            <article style={{ width: '30%' }}>티켓 매출 계정</article>

            <OutlinedInput
              id="outlined-adornment-weight"
              aria-describedby="outlined-weight-helper-text"
              inputProps={{ 'aria-label': 'weight' }}
              sx={{
                width: '450px',
                height: '38px',
                borderRadius: '12px',
                marginLeft: '5px',
                marginRight: '5px',
              }}
              readOnly
              placeholder="0xdd9938393815bCe3695956CAc73c3123AA1f6b1d"
            />
            <button
              style={{
                width: '7rem',
                marginLeft: '80px',
              }}
              disabled={true}
              onClick={() => {
                alert('준비중입니다.')
              }}
            >
              저장
            </button>
            <CircularProgress
              sx={{
                display: isloader_00 ? 'block' : 'none',
                marginLeft: '2rem',
              }}
            />
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
            <article style={{ width: '30%' }}>결제 매출 계정</article>

            <OutlinedInput
              id="outlined-adornment-weight"
              aria-describedby="outlined-weight-helper-text"
              inputProps={{ 'aria-label': 'weight' }}
              readOnly
              sx={{
                width: '450px',
                height: '38px',
                borderRadius: '12px',
                marginLeft: '5px',
                marginRight: '5px',
              }}
              placeholder="0xa6d9B48b3D869271fF84F9E62B9E48986EE3Aa7b"
              // placeholder={feecollector_pay}
              // defaultValue={feecollector_pay}
            />
            <button
              style={{
                width: '7rem',
                marginLeft: '80px',
              }}
              disabled={true}
              onClick={() => {
                alert('준비중입니다.')
              }}
            >
              저장
            </button>
            <CircularProgress
              sx={{
                display: isloader_01 ? 'block' : 'none',
                marginLeft: '2rem',
              }}
            />
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
            <article style={{ width: '30%' }}>연체 매출 계정</article>

            <OutlinedInput
              readOnly
              id="outlined-adornment-weight"
              aria-describedby="outlined-weight-helper-text"
              inputProps={{ 'aria-label': 'weight' }}
              sx={{
                width: '450px',
                height: '38px',
                borderRadius: '12px',
                marginLeft: '5px',
                marginRight: '5px',
              }}
              placeholder="0xa6d9B48b3D869271fF84F9E62B9E48986EE3Aa7b"
              // placeholder={feecollector_delinquent}
              // defaultValue={feecollector_delinquent}
            />
            <button
              style={{
                width: '7rem',
                marginLeft: '80px',
              }}
              disabled={true}
              onClick={() => {
                alert('준비중입니다.')
              }}
            >
              저장
            </button>
            <CircularProgress
              sx={{
                display: isloader_02 ? 'block' : 'none',
                marginLeft: '2rem',
              }}
            />
          </div>
        )
      },
    },
  ]

  // console.log(
  //   'BALLOT_PERIODIC_DRAW_TIMEOFDAY_INSECONDS',
  //   moment(selectedCurrentDateDraw).unix(),
  // )
  console.log(
    'BALLOT_PERIODIC_PAYMENTDUE_TIMEOFDAY_INSECONDS',
    moment(selectedCurrentDateClose).unix(),
  )
  const onclickSubmitCurrentRoundBtn = () => {
    axios
      .put(API.API_PUTTIME + `?nettype=${net}`, {
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
  }

  const onclick_put_BALLOT_PERIODIC_DRAW_ACTIVE_btn = (e: any) => {
    if (e.target.checked) {
      axios
        .put(API.API_PUTSTATE + `/BALLOT_PERIODIC_DRAW_ACTIVE?nettype=${net}`, {
          BALLOT_PERIODIC_DRAW_ACTIVE: '1',
          nettype: net,
        })
        .then((resp) => {
          let { status, respdata } = resp.data
          if (status === 'OK') {
            alert('저장이 완료 되었습니다.')
            window.location.reload()
          }
        })
    } else if (!e.target.checked) {
      axios
        .put(API.API_PUTSTATE + `/BALLOT_PERIODIC_DRAW_ACTIVE?nettype=${net}`, {
          BALLOT_PERIODIC_DRAW_ACTIVE: '0',
          nettype: net,
        })
        .then((resp) => {
          let { status, respdata } = resp.data
          if (status === 'OK') {
            alert('저장이 완료 되었습니다.')
            window.location.reload()
          }
        })
    }
  }
  const onclick_put_BALLOT_PERIODIC_PAYMENTDUE_ACTIVE_btn = (e: any) => {
    if (e.target.checked) {
      axios
        .put(
          API.API_PUTSTATE +
            `/BALLOT_PERIODIC_PAYMENTDUE_ACTIVE?nettype=${net}`,
          {
            BALLOT_PERIODIC_PAYMENTDUE_ACTIVE: '1',
            nettype: net,
          },
        )
        .then((resp) => {
          let { status, respdata } = resp.data
          if (status === 'OK') {
            alert('저장이 완료 되었습니다.')
            window.location.reload()
          }
        })
    } else if (!e.target.checked) {
      axios
        .put(
          API.API_PUTSTATE +
            `/BALLOT_PERIODIC_PAYMENTDUE_ACTIVE?nettype=${net}`,
          {
            BALLOT_PERIODIC_PAYMENTDUE_ACTIVE: '0',
            nettype: net,
          },
        )
        .then((resp) => {
          let { status, respdata } = resp.data
          if (status === 'OK') {
            alert('저장이 완료 되었습니다.')
            window.location.reload()
          }
        })
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }
  const handleChangePay = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedPay(event.target.checked)
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
        <div>
          <Switch
            checked={checked}
            onChange={handleChange}
            onClick={(e) => {
              onclick_put_BALLOT_PERIODIC_DRAW_ACTIVE_btn(e)
            }}
          />
          <p style={{ fontSize: '20px' }}>PERIODIC_ACTIVE</p>
        </div>
        <div style={{ marginLeft: '30px' }}>
          <Switch
            checked={checkedPay}
            onChange={handleChangePay}
            onClick={(e) => {
              onclick_put_BALLOT_PERIODIC_PAYMENTDUE_ACTIVE_btn(e)
            }}
          />
          <p style={{ fontSize: '20px' }}>PERIODIC_PAYMENTDUE_ACTIVE</p>
        </div>
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

import React, { useEffect, useState } from 'react'
import Papers from '../../components/paper/Papers'
import PaperBodyContent from '../../components/paper/PaperBodyContent'
import {
  CircularProgress,
  FormControl,
  FormControlLabel,
  InputAdornment,
  OutlinedInput,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material'
import ButtonGroup, {
  ButtonGroupSeconed,
  ButtonGroupThird,
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

const ManageAuction = () => {
  const [getBALLOT, setGetBALLOT] = useState<any>()
  const [selectedDate, setSelectedDate] = useState<any>()
  const [selectedDatePay, setSelectedDatePay] = useState<any>()
  const [selectedDateClose, setSelectedDateClose] = useState<any>()
  const [selectedDateDraw, setSelectedDateDraw] = useState<any>()
  const [selectedCurrentDate, setSelectedCurrentDate] = useState<any>()
  const [selectedCurrentDatePay, setSelectedCurrentDatePay] = useState<any>()
  const [selectedCurrentDateClose, setSelectedCurrentDateClose] =
    useState<any>()
  const [selectedCurrentDateDraw, setSelectedCurrentDateDraw] = useState<any>()
  const [ballot_draw_fraction, setBallot_draw_fraction] = useState<any>()
  const [ballot_delinquency, setBallot_delinquency] = useState<any>()
  const [feecollector_staker, setFeecollector_staker] = useState<any>()
  const [feecollector_pay, setFeecollector_pay] = useState<any>()
  const [feecollector_delinquent, setFeecollector_delinquent] = useState<any>()
  let [isloader_00, setisloader_00] = useState(false)
  let [isloader_01, setisloader_01] = useState(false)
  let [isloader_02, setisloader_02] = useState(false)

  const fetchData = async () => {
    axios.get(API.API_BALLOT).then((resp) => {
      let { status, respdata } = resp.data
      if (status == 'OK') {
        LOGGER('resp', resp)
        setGetBALLOT(respdata)
        setSelectedDate(moment.unix(respdata.BALLOT_NEXT_ROUND_START))
        setSelectedDatePay(moment.unix(respdata.BALLOT_NEXT_ROUND_PAYMENT_DUE))
        setSelectedDateClose(moment.unix(respdata.BALLOT_NEXT_ROUND_CLOSE))
        setSelectedDateDraw(moment.unix(respdata.BALLOT_NEXT_ROUND_DRAW))
        setSelectedCurrentDate(moment.unix(respdata.BALLOT_CURRENT_ROUND_START))
        setSelectedCurrentDatePay(
          moment.unix(respdata.BALLOT_CURRENT_ROUND_PAYMENT_DUE),
        )
        setSelectedCurrentDateClose(
          moment.unix(respdata.BALLOT_CURRENT_ROUND_CLOSE),
        )
        setSelectedCurrentDateDraw(
          moment.unix(respdata.BALLOT_CURRENT_ROUND_DRAW),
        )
        setBallot_draw_fraction(respdata.BALLOT_DRAW_FRACTION_BP / 100)
        setBallot_delinquency(
          respdata.BALLOT_DELINQUENCY_DISCOUNT_FACTOR_BP / 100,
        )
      }
    })
  }

  const contract_fatchData = async () => {
    setisloader_00(true)
    setisloader_01(true)
    setisloader_02(true)
    query_noarg({
      contractaddress: addresses.contract_stake, // ETH_TESTNET.
      abikind: 'STAKE',
      methodname: '_feecollector',
    }).then((resp) => {
      // LOGGER('stake', resp)
      setisloader_00(false)
      setFeecollector_staker(resp)
    })
    query_noarg({
      contractaddress: addresses.contract_pay_for_assigned_item, // ETH_TESTNET.
      abikind: 'PAY',
      methodname: '_feecollector',
    }).then((resp) => {
      // LOGGER('pay', resp)
      setisloader_01(false)
      setFeecollector_pay(resp)
    })
    query_noarg({
      contractaddress: addresses.payment_for_delinquency, // ETH_TESTNET.
      abikind: 'DELINQUENT',
      methodname: '_feecollector',
    }).then((resp) => {
      // LOGGER('delinquent', resp)
      setisloader_02(false)
      setFeecollector_delinquent(resp)
    })
  }

  const onclickSubmitCurrentRoundBtn = () => {
    if (
      selectedCurrentDate < selectedCurrentDateDraw &&
      selectedCurrentDateDraw < selectedCurrentDatePay &&
      selectedCurrentDatePay < selectedCurrentDateClose
    ) {
      axios
        .put(API.API_PUTTIME, {
          BALLOT_CURRENT_ROUND_START: moment(selectedCurrentDate).unix(),
          BALLOT_CURRENT_ROUND_DRAW: moment(selectedCurrentDateDraw).unix(),
          BALLOT_CURRENT_ROUND_PAYMENT_DUE: moment(
            selectedCurrentDatePay,
          ).unix(),
          BALLOT_CURRENT_ROUND_CLOSE: moment(selectedCurrentDateClose).unix(),
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

  const onclickSubmitNextRoundBtn = () => {
    if (
      selectedDate < selectedDateDraw &&
      selectedDateDraw < selectedDatePay &&
      selectedDatePay < selectedDateClose
    ) {
      axios
        .put(API.API_PUTTIME, {
          BALLOT_NEXT_ROUND_START: moment(selectedDate).unix(),
          BALLOT_NEXT_ROUND_PAYMENT_DUE: moment(selectedDatePay).unix(),
          BALLOT_NEXT_ROUND_CLOSE: moment(selectedDateClose).unix(),
          BALLOT_NEXT_ROUND_DRAW: moment(selectedDateDraw).unix(),
        })
        .then((resp) => {
          let { status, respdata } = resp.data
          if (status === 'OK') {
            alert('저장이 완료 되었습니다.')
            window.location.reload()
          }
        })
    } else {
      alert('설정 시간을 다시 확인해 주세요')
    }
  }
  const onclickSubmitballot_delinquency = () => {
    if (
      ballot_delinquency !== undefined &&
      ballot_delinquency >= 0 &&
      ballot_delinquency < 100
    ) {
      axios
        .put(API.API_PUTTIME, {
          BALLOT_DELINQUENCY_DISCOUNT_FACTOR_BP: ballot_delinquency * 100,
        })
        .then((resp) => {
          let { status, respdata } = resp.data
          if (status === 'OK') {
            alert('저장이 완료 되었습니다.')
            window.location.reload()
          }
        })
    } else {
      alert('입력값을 다시 확인해 주세요')
    }
  }
  const onclickSubmitballot_draw_fun_btn = () => {
    if (
      ballot_draw_fraction !== undefined &&
      ballot_draw_fraction <= 0 &&
      ballot_draw_fraction > 50
    ) {
      axios
        .put(API.API_PUTTIME, {
          BALLOT_DRAW_FRACTION_BP: ballot_draw_fraction * 100,
        })
        .then((resp) => {
          let { status, respdata } = resp.data
          if (status === 'OK') {
            alert('저장이 완료 되었습니다.')
            window.location.reload()
          }
        })
    } else {
      alert('입력값을 다시 확인해 주세요')
    }
  }

  const onResetInput = () => {
    setBallot_delinquency('')
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    contract_fatchData()
  }, [])

  const onReset = () => {
    window.location.reload()
  }

  const fields = [
    {
      content: () => <h1 style={{ padding: '10px' }}>현재 라운드 </h1>,
    },
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
                  <td style={thtdStyle}>시작</td>
                  <td style={thtdStyle}>
                    시작시각 :{' '}
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DateTimePicker
                        renderInput={(props) => <TextField {...props} />}
                        value={selectedCurrentDate}
                        onChange={(newValue) => {
                          setSelectedCurrentDate(newValue)
                        }}
                      />
                    </LocalizationProvider>
                  </td>
                  <td style={thtdStyle}>할당받은 계정 수 : </td>
                  <td style={thtdStyle}>분배된 아이템 수 : </td>
                  <td
                    style={{
                      border: '1px solid #444444',
                      padding: '10px',
                      background: '#cfccc6',
                    }}
                  >
                    완료
                  </td>
                </tr>
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
                  <td style={thtdStyle}>결제된 아이템 수 : </td>
                  <td style={thtdStyle}>미결정 계정 수 : </td>
                  <td
                    style={{
                      border: '1px solid #444444',
                      padding: '10px',
                      background: '#bae3bd',
                    }}
                  >
                    진행중
                  </td>
                </tr>
                <tr>
                  <td style={thtdStyle}>결제마감</td>
                  <td style={thtdStyle}>
                    결제마감시각 :{' '}
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DateTimePicker
                        renderInput={(props) => <TextField {...props} />}
                        value={selectedCurrentDatePay}
                        onChange={(newValue) => {
                          setSelectedCurrentDatePay(newValue)
                        }}
                      />
                    </LocalizationProvider>
                  </td>
                  <td style={thtdStyle}>... : </td>
                  <td style={thtdStyle}>... : </td>
                  <td style={thtdStyle}>... : </td>
                </tr>
                <tr>
                  <td style={thtdStyle}>종료</td>
                  <td style={thtdStyle}>
                    종료시각 :{' '}
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

    {
      content: () => <h1 style={{ padding: '10px' }}>다음 라운드</h1>,
    },
    {
      content: () => {
        const thtdStyle = {
          border: '1px solid #444444',
          padding: '10px',
        }

        return (
          <div>
            <table
              style={{
                width: '100%',
                border: '1px solid #444444',
              }}
            >
              <tbody>
                <tr>
                  <td style={thtdStyle}>시작</td>
                  <td style={thtdStyle}>
                    시작시각:{' '}
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DateTimePicker
                        renderInput={(props) => <TextField {...props} />}
                        value={selectedDate}
                        onChange={(newValue) => {
                          setSelectedDate(newValue)
                        }}
                      />
                    </LocalizationProvider>
                  </td>
                  <td style={thtdStyle}>... : </td>
                  <td style={thtdStyle}>... : </td>
                  <td style={thtdStyle}>... : </td>
                </tr>
                <tr>
                  <td style={thtdStyle}>할당 </td>
                  <td style={thtdStyle}>
                    할당시각 :{' '}
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DateTimePicker
                        renderInput={(props) => <TextField {...props} />}
                        value={selectedDateDraw}
                        onChange={(newValue) => {
                          setSelectedDateDraw(newValue)
                        }}
                      />
                    </LocalizationProvider>
                  </td>
                  <td style={thtdStyle}>... : </td>
                  <td style={thtdStyle}>... : </td>
                  <td style={thtdStyle}>... : </td>
                </tr>

                <tr>
                  <td style={thtdStyle}>결제마감 </td>
                  <td style={thtdStyle}>
                    결제마감시각 :{' '}
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DateTimePicker
                        renderInput={(props) => <TextField {...props} />}
                        value={selectedDatePay}
                        onChange={(newValue) => {
                          setSelectedDatePay(newValue)
                        }}
                      />
                    </LocalizationProvider>
                  </td>
                  <td style={thtdStyle}>... : </td>
                  <td style={thtdStyle}>... : </td>
                  <td style={thtdStyle}>... : </td>
                </tr>

                <tr>
                  <td style={thtdStyle}>종료 </td>
                  <td style={thtdStyle}>
                    종료시각 :{' '}
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DateTimePicker
                        renderInput={(props) => <TextField {...props} />}
                        value={selectedDateClose}
                        onChange={(newValue) => {
                          setSelectedDateClose(newValue)
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
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                padding: 30,
              }}
            >
              <button
                style={{
                  width: '7rem',
                  marginRight: '2rem',
                }}
                onClick={() => {
                  onclickSubmitNextRoundBtn()
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
              defaultValue={feecollector_staker}
              placeholder={feecollector_staker}
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
              placeholder={feecollector_pay}
              defaultValue={feecollector_pay}
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
              placeholder={feecollector_delinquent}
              defaultValue={feecollector_delinquent}
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
                id="outlined-adornment-weight"
                aria-describedby="outlined-weight-helper-text"
                inputProps={{ 'aria-label': 'weight' }}
                placeholder={`${ballot_draw_fraction}%`}
                defaultValue={ballot_draw_fraction}
                onChange={(e) => {
                  if (
                    parseInt(e.target.value) > 0 &&
                    parseInt(e.target.value) <= 50
                  ) {
                    setBallot_draw_fraction(e.target.value)
                  } else {
                    alert('범위값은 0%에서 50%까지 입니다')
                    setBallot_draw_fraction('')
                  }
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
            <article style={{ width: '30%' }}>DELINQUENCY 할인률</article>
            <article style={{ width: '70%' }}>
              <OutlinedInput
                id="outlined-adornment-weight"
                aria-describedby="outlined-weight-helper-text"
                inputProps={{ 'aria-label': 'weight' }}
                placeholder={`${ballot_delinquency}%`}
                defaultValue={ballot_delinquency}
                onChange={(e) => {
                  if (
                    parseInt(e.target.value) >= 0 &&
                    parseInt(e.target.value) <= 100
                  ) {
                    setBallot_delinquency(e.target.value)
                  } else {
                    alert('범위는 0%에서 100% 까지입니다.')
                    setBallot_delinquency('')
                  }
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
    // { content: () => <hr /> },
    // {
    //   content: () => {
    //     return (
    //       <div
    //         style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}
    //       >
    //         <article style={{ width: '30%' }}>Current round</article>
    //         <article style={{ width: '70%' }}>
    //           <OutlinedInput
    //             id="outlined-adornment-weight"
    //             aria-describedby="outlined-weight-helper-text"
    //             inputProps={{ 'aria-label': 'weight' }}
    //             sx={{
    //               width: '450px',
    //               height: '38px',
    //               borderRadius: '12px',
    //               marginLeft: '5px',
    //               marginRight: '5px',
    //             }}
    //           />
    //         </article>
    //       </div>
    //     )
    //   },
    // },
    // {
    //   content: () => {
    //     return (
    //       <div
    //         style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}
    //       >
    //         <article style={{ width: '30%' }}>
    //           Item Min/Median/Max price
    //         </article>
    //         <article style={{ width: '70%' }}>
    //           <OutlinedInput
    //             id="outlined-adornment-weight"
    //             aria-describedby="outlined-weight-helper-text"
    //             inputProps={{ 'aria-label': 'weight' }}
    //             sx={{
    //               width: '450px',
    //               height: '38px',
    //               borderRadius: '12px',
    //               marginLeft: '5px',
    //               marginRight: '5px',
    //             }}
    //           />
    //         </article>
    //       </div>
    //     )
    //   },
    // },
    // {
    //   content: () => {
    //     return (
    //       <div
    //         style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}
    //       >
    //         <article style={{ width: '30%' }}>Total / New stakers</article>
    //         <article style={{ width: '70%' }}>
    //           <OutlinedInput
    //             id="outlined-adornment-weight"
    //             aria-describedby="outlined-weight-helper-text"
    //             inputProps={{ 'aria-label': 'weight' }}
    //             sx={{
    //               width: '450px',
    //               height: '38px',
    //               borderRadius: '12px',
    //               marginLeft: '5px',
    //               marginRight: '5px',
    //             }}
    //           />
    //         </article>
    //       </div>
    //     )
    //   },
    // },
    // {
    //   content: () => {
    //     return (
    //       <div
    //         style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}
    //       >
    //         <article style={{ width: '30%' }}>Stakers / Items ratio</article>
    //         <article style={{ width: '70%' }}>
    //           <OutlinedInput
    //             id="outlined-adornment-weight"
    //             aria-describedby="outlined-weight-helper-text"
    //             inputProps={{ 'aria-label': 'weight' }}
    //             sx={{
    //               width: '450px',
    //               height: '38px',
    //               borderRadius: '12px',
    //               marginLeft: '5px',
    //               marginRight: '5px',
    //             }}
    //           />
    //         </article>
    //       </div>
    //     )
    //   },
    // },

    // { content: () => <hr /> },
    // {
    //   content: () => {
    //     return (
    //       <div
    //         style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}
    //       >
    //         <article style={{ width: '30%' }}>Last round</article>
    //         <article style={{ width: '70%' }}>
    //           <OutlinedInput
    //             id="outlined-adornment-weight"
    //             aria-describedby="outlined-weight-helper-text"
    //             inputProps={{ 'aria-label': 'weight' }}
    //             sx={{
    //               width: '450px',
    //               height: '38px',
    //               borderRadius: '12px',
    //               marginLeft: '5px',
    //               marginRight: '5px',
    //             }}
    //           />
    //         </article>
    //       </div>
    //     )
    //   },
    // },
    // {
    //   content: () => {
    //     return (
    //       <div
    //         style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}
    //       >
    //         <article style={{ width: '30%' }}>Count Paid / Unpaid </article>
    //         <article style={{ width: '70%' }}>
    //           <OutlinedInput
    //             id="outlined-adornment-weight"
    //             aria-describedby="outlined-weight-helper-text"
    //             inputProps={{ 'aria-label': 'weight' }}
    //             sx={{
    //               width: '450px',
    //               height: '38px',
    //               borderRadius: '12px',
    //               marginLeft: '5px',
    //               marginRight: '5px',
    //             }}
    //           />
    //         </article>
    //       </div>
    //     )
    //   },
    // },
    // {
    //   content: () => {
    //     return (
    //       <div
    //         style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}
    //       >
    //         <article style={{ width: '30%' }}>
    //           Sum payments / Penalties Paid / Unpaid{' '}
    //         </article>
    //         <article style={{ width: '70%' }}>
    //           <OutlinedInput
    //             id="outlined-adornment-weight"
    //             aria-describedby="outlined-weight-helper-text"
    //             inputProps={{ 'aria-label': 'weight' }}
    //             sx={{
    //               width: '450px',
    //               height: '38px',
    //               borderRadius: '12px',
    //               marginLeft: '5px',
    //               marginRight: '5px',
    //             }}
    //           />
    //         </article>
    //       </div>
    //     )
    //   },
    // },

    // // {content :()=> {return ( <> <p>Settings<p/></> ) } },
    // { content: () => <hr /> },
    // {
    //   content: () => {
    //     return (
    //       <div
    //         style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}
    //       >
    //         <article style={{ width: '30%' }}>Ballot time of day </article>
    //         <article style={{ width: '70%' }}>
    //           <OutlinedInput
    //             id="outlined-adornment-weight"
    //             aria-describedby="outlined-weight-helper-text"
    //             inputProps={{ 'aria-label': 'weight' }}
    //             sx={{
    //               width: '450px',
    //               height: '38px',
    //               borderRadius: '12px',
    //               marginLeft: '5px',
    //               marginRight: '5px',
    //             }}
    //           />
    //         </article>
    //       </div>
    //     )
    //   },
    // },
    // {
    //   content: () => {
    //     return (
    //       <div
    //         style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}
    //       >
    //         <article style={{ width: '30%' }}>Payment due time </article>
    //         <article style={{ width: '70%' }}>
    //           <OutlinedInput
    //             id="outlined-adornment-weight"
    //             aria-describedby="outlined-weight-helper-text"
    //             inputProps={{ 'aria-label': 'weight' }}
    //             sx={{
    //               width: '450px',
    //               height: '38px',
    //               borderRadius: '12px',
    //               marginLeft: '5px',
    //               marginRight: '5px',
    //             }}
    //           />
    //         </article>
    //       </div>
    //     )
    //   },
    // },
    // {
    //   content: () => {
    //     return (
    //       <div
    //         style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}
    //       >
    //         <article style={{ width: '30%' }}>Duration of growth </article>
    //         <article style={{ width: '70%' }}>
    //           <OutlinedInput
    //             id="outlined-adornment-weight"
    //             aria-describedby="outlined-weight-helper-text"
    //             inputProps={{ 'aria-label': 'weight' }}
    //             sx={{
    //               width: '450px',
    //               height: '38px',
    //               borderRadius: '12px',
    //               marginLeft: '5px',
    //               marginRight: '5px',
    //             }}
    //           />
    //         </article>
    //       </div>
    //     )
    //   },
    // },

    // { content: () => <hr /> },
  ]

  return (
    <>
      <ButtonGroupThird
        first={getBALLOT?.BALLOT_ACTIVE === 'START' ? '진행중' : '중지중'}
      />
      <ButtonGroupThird first={`Round : ${getBALLOT?.BALLOT_ROUND_NUMBER}`} />
      <ButtonGroupThird
        first={`다음라운드 시작시간 : ${moment(
          moment.unix(getBALLOT?.BALLOT_NEXT_ROUND_START),
        ).format('DD일 HH시 mm분 ss초')}`}
      />
      <ButtonGroup first="시작하기" second="중지하기" />
      <Papers title="경매관리">
        <PaperBodyContent fields={fields} />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '1rem',
          }}
        >
          {/* <article style={{ width: '30%' }}>결제 토큰</article>
          <article style={{ width: '70%' }}>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="USDT"
                  control={<Radio />}
                  label="USDT"
                />
                <FormControlLabel value="NIP" control={<Radio />} label="NIP" />
                <FormControlLabel value="ETH" control={<Radio />} label="ETH" />
              </RadioGroup>
            </FormControl>
          </article> */}
        </div>

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

export default ManageAuction

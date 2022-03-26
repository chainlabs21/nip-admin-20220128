import React, { useEffect, useState } from 'react'
import Papers from '../../components/paper/Papers'
import PaperBodyContent from '../../components/paper/PaperBodyContent'
import {
  FormControl,
  FormControlLabel,
  InputAdornment,
  OutlinedInput,
  Radio,
  RadioGroup,
} from '@mui/material'
import ButtonGroup, {
  ButtonGroupSeconed,
  ButtonGroupThird,
} from '../../components/input/button/ButtonGroup'
import axios from 'axios'
import { API } from '../../configs/api'
import moment from 'moment'

const ManageAuction = () => {
  const [getBALLOT, setGetBALLOT] = useState<any>()
  const [putData, setPutData] = useState<any>({
    BALLOT_NEXT_ROUND_START: '',
    BALLOT_NEXT_ROUND_PAYMENT_DUE: '',
    BALLOT_NEXT_ROUND_CLOSE: '',
  })

  const fetchData = () => {
    axios.get(API.API_BALLOT).then((resp) => {
      let { status, respdata } = resp.data
      if (status == 'OK') {
        setGetBALLOT(respdata)
      }
    })
  }

  const onclickSubmitBtn = () => {
    axios
      .put(API.API_PUTTIME, {
        BALLOT_NEXT_ROUND_START: putData.BALLOT_NEXT_ROUND_START,
        BALLOT_NEXT_ROUND_PAYMENT_DUE: putData.BALLOT_NEXT_ROUND_PAYMENT_DUE,
        BALLOT_NEXT_ROUND_CLOSE: putData.BALLOT_NEXT_ROUND_CLOSE,
      })
      .then((resp) => {
        let { status, respdata } = resp.data
        if (status === 'OK') {
          alert('저장이 완료 되었습니다.')
        }
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const onReset = () => {
    setPutData('')
    window.location.replace('/manage-auction')
  }

  console.log('getBALLOT')
  console.log(putData)

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
                  <td style={thtdStyle}>배분 및 할당</td>
                  <td style={thtdStyle}>
                    시작시각 : {getBALLOT?.BALLOT_CURRENT_ROUND_START}
                  </td>
                  <td style={thtdStyle}>할당받은 계정 수 : </td>
                  <td style={thtdStyle}>분배된 아이템 수 : </td>
                  <td style={thtdStyle}>완료 </td>
                </tr>
                <tr>
                  <td style={thtdStyle}>결제마감 </td>
                  <td style={thtdStyle}>
                    마감시각 : {getBALLOT?.BALLOT_CURRENT_ROUND_PAYMENT_DUE}{' '}
                  </td>
                  <td style={thtdStyle}>결제된 아이템 수 : </td>
                  <td style={thtdStyle}>미결정 계정 수 : </td>
                  <td style={thtdStyle}>진행중</td>
                </tr>
                <tr>
                  <td style={thtdStyle}>... : </td>
                  <td style={thtdStyle}>... : </td>
                  <td style={thtdStyle}>... : </td>
                  <td style={thtdStyle}>... : </td>
                  <td style={thtdStyle}>... : </td>
                </tr>
              </tbody>
            </table>
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
                  <td style={thtdStyle}>배분 및 할당</td>
                  <td style={thtdStyle}>
                    시작시각:{' '}
                    <input
                      onChange={(e) => {
                        setPutData({
                          ...putData,
                          BALLOT_NEXT_ROUND_START: e.target.value,
                        })
                      }}
                    />
                  </td>
                  <td style={thtdStyle}>... : </td>
                  <td style={thtdStyle}>... : </td>
                  <td style={thtdStyle}>... : </td>
                </tr>
                <tr>
                  <td style={thtdStyle}>결제 : </td>
                  <td style={thtdStyle}>
                    마감시각 :{' '}
                    <input
                      onChange={(e) => {
                        setPutData({
                          ...putData,
                          BALLOT_NEXT_ROUND_PAYMENT_DUE: e.target.value,
                        })
                      }}
                    />
                  </td>
                  <td style={thtdStyle}>... : </td>
                  <td style={thtdStyle}>... : </td>
                  <td style={thtdStyle}>... : </td>
                </tr>

                <tr>
                  <td style={thtdStyle}>라운드종료시각 : </td>
                  <td style={thtdStyle}>
                    종료시각 :{' '}
                    <input
                      onChange={(e) => {
                        setPutData({
                          ...putData,
                          BALLOT_NEXT_ROUND_CLOSE: e.target.value,
                        })
                      }}
                    />
                  </td>
                  <td style={thtdStyle}>... : </td>
                  <td style={thtdStyle}>... : </td>
                  <td style={thtdStyle}>... : </td>
                </tr>
              </tbody>
            </table>
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
            <article style={{ width: '30%' }}>
              Kongs released(in circulation)/reserve
            </article>
            <article style={{ width: '70%' }}>
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
              />
            </article>
          </div>
        )
      },
    },
    { content: () => <hr /> },
    {
      content: () => {
        return (
          <div
            style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}
          >
            <article style={{ width: '30%' }}>Current round</article>
            <article style={{ width: '70%' }}>
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
              />
            </article>
          </div>
        )
      },
    },
    {
      content: () => {
        return (
          <div
            style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}
          >
            <article style={{ width: '30%' }}>
              Item Min/Median/Max price
            </article>
            <article style={{ width: '70%' }}>
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
              />
            </article>
          </div>
        )
      },
    },
    {
      content: () => {
        return (
          <div
            style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}
          >
            <article style={{ width: '30%' }}>Total / New stakers</article>
            <article style={{ width: '70%' }}>
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
              />
            </article>
          </div>
        )
      },
    },
    {
      content: () => {
        return (
          <div
            style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}
          >
            <article style={{ width: '30%' }}>Stakers / Items ratio</article>
            <article style={{ width: '70%' }}>
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
              />
            </article>
          </div>
        )
      },
    },

    { content: () => <hr /> },
    {
      content: () => {
        return (
          <div
            style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}
          >
            <article style={{ width: '30%' }}>Last round</article>
            <article style={{ width: '70%' }}>
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
              />
            </article>
          </div>
        )
      },
    },
    {
      content: () => {
        return (
          <div
            style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}
          >
            <article style={{ width: '30%' }}>Count Paid / Unpaid </article>
            <article style={{ width: '70%' }}>
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
              />
            </article>
          </div>
        )
      },
    },
    {
      content: () => {
        return (
          <div
            style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}
          >
            <article style={{ width: '30%' }}>
              Sum payments / Penalties Paid / Unpaid{' '}
            </article>
            <article style={{ width: '70%' }}>
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
              />
            </article>
          </div>
        )
      },
    },

    // {content :()=> {return ( <> <p>Settings<p/></> ) } },
    { content: () => <hr /> },
    {
      content: () => {
        return (
          <div
            style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}
          >
            <article style={{ width: '30%' }}>Ballot time of day </article>
            <article style={{ width: '70%' }}>
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
              />
            </article>
          </div>
        )
      },
    },
    {
      content: () => {
        return (
          <div
            style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}
          >
            <article style={{ width: '30%' }}>Payment due time </article>
            <article style={{ width: '70%' }}>
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
              />
            </article>
          </div>
        )
      },
    },
    {
      content: () => {
        return (
          <div
            style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}
          >
            <article style={{ width: '30%' }}>Duration of growth </article>
            <article style={{ width: '70%' }}>
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
              />
            </article>
          </div>
        )
      },
    },

    { content: () => <hr /> },
  ]

  return (
    <>
      <ButtonGroupThird
        first={getBALLOT?.BALLOT_ACTIVE === '1' ? '진행중' : '중지중'}
      />
      <ButtonGroupThird first={`Round : ${getBALLOT?.BALLOT_ROUND_NUMBER}`} />

      <Papers title="경매관리">
        <PaperBodyContent fields={fields} />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '1rem',
          }}
        >
          <article style={{ width: '30%' }}>결제 토큰</article>
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
          </article>
        </div>

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
              onclickSubmitBtn()
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
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <ButtonGroup first="시작하기" second="중지하기" />
        </div>
      </Papers>
    </>
  )
}

export default ManageAuction
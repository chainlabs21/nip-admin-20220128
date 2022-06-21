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
import Button from '@mui/material/Button'
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
import SetErrorBar from '../../modals/SetErrorBar/SetErrorBar'
import { net } from '../../configs/net'

const ForceAdvanceRound = (props: any) => {
  const [currentRoundNum, setCurrentRoundNum] = useState<any>(0)
  const [currentRoundState, setCurrentRoundState] = useState<any>(0)
  const [maxRound, setMaxRound] = useState<any>()
  const [maxKingKongRound, setMaxKingKongRound] = useState<any>()

  const queryCurrentRoundNum = async () => {
    try {
      const res = await axios.get(API.API_CURRENT_ROUND_NUM + `?nettype=${net}`)
      if (res.data && res.data.respdata) {
        console.log(res)
        let { value_ } = res.data.respdata

        SetErrorBar('Current Round Number: ' + value_)

        setCurrentRoundNum(value_)
      }
    } catch (err) {
      console.log(err)
    }
  }
  const queryCurrentRoundState = async () => {
    try {
      const res = await axios.get(
        API.API_CURRENT_ROUND_STATE + `?nettype=${net}`,
      )
      if (res.data && res.data.respdata) {
        console.log(res)
        let { value_ } = res.data.respdata
        SetErrorBar('Current Round State: ' + value_)
        setCurrentRoundState(value_)
      }
    } catch (err) {
      console.log(err)
    }
  }
  const allocateItems = async () => {
    try {
      const res = await axios.post(API.API_ALLOCATE_ITEMS + `?nettype=${net}`, {
        roundstate: 0,
      })
      if (res) {
        queryCurrentRoundNum()
        queryCurrentRoundState()
        console.log('1')
      }
    } catch (err) {
      console.log(err)
    }
  }
  const closeAllocateItems = async () => {
    try {
      const res = await axios.post(API.API_ALLOCATE_ITEMS + `?nettype=${net}`, {
        roundstate: 1,
      })
      if (res) {
        queryCurrentRoundNum()
        queryCurrentRoundState()
        console.log('1')
      }
    } catch (err) {
      console.log(err)
    }
  }
  const initializeRounds = async () => {
    try {
      const res = await axios.post(
        API.API_INITIALIZE_ROUNDS + `?nettype=${net}`,
        { rounds: currentRoundNum },
      )
      if (res) {
        console.log(res)
        SetErrorBar('Status: ' + res.data.status)
        queryCurrentRoundNum()
        queryCurrentRoundState()
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    queryCurrentRoundNum()
    queryCurrentRoundState()
  }, [])

  const onclickSubmit_max_round_to_reach_def_fun_btn = () => {
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
  }
  const onclickSubmit_max_kingkong_round_to_reach_def_fun_btn = () => {
    axios
      .put(
        API.API_PUTSTATE + `/COUNT_KONGS_TO_ASSIGN_ON_MAX_ROUND?nettype=${net}`,
        {
          COUNT_KONGS_TO_ASSIGN_ON_MAX_ROUND: maxKingKongRound,
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

  const fetchData = async () => {
    axios.get(API.API_BALLOT + `/?nettype=${net}`).then((resp) => {
      let { status, respdata } = resp.data
      if (status == 'OK') {
        LOGGER('resp1', resp)

        setMaxRound(respdata.MAX_ROUND_TO_REACH_DEF)
        setMaxKingKongRound(respdata.COUNT_KONGS_TO_ASSIGN_ON_MAX_ROUND)
      }
    })
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'column',
        height: '100vh',
        width: '100%',
      }}
    >
      <h1>Manually Force advance round</h1>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          width: '500px',
          border: '1px solid #000000',
          flexWrap: 'wrap',
        }}
      >
        <p>Current Round Number</p>
        <p>Current Round State</p>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            width: '100%',
          }}
        >
          <p>{currentRoundNum}</p>
          <p>{currentRoundState === '0' ? '할당대기' : '마감대기'}</p>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
        }}
      >
        <article style={{ width: '30%' }}>MAX ROUND 설정</article>
        <article style={{ width: '70%' }}>
          <OutlinedInput
            type="number"
            id="outlined-adornment-weight"
            aria-describedby="outlined-weight-helper-text"
            inputProps={{ 'aria-label': 'weight' }}
            placeholder={`현재 설정 라운드 : ${maxRound} 라운드`}
            defaultValue={maxRound}
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
          <article style={{ marginLeft: '10px' }}>
            라운드는 0에서 17까지 입니다.
          </article>
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
        </article>
      </div>
      <div
        style={{
          display: 'flex',
        }}
      >
        <article style={{ width: '30%' }}>
          COUNT_KONGS_TO_ASSIGN_ON_MAX_ROUND
        </article>
        <article style={{ width: '70%' }}>
          <OutlinedInput
            type="number"
            id="outlined-adornment-weight"
            aria-describedby="outlined-weight-helper-text"
            inputProps={{ 'aria-label': 'weight' }}
            placeholder={`현재 킹콩 -> 콩 분배 개수 : ${maxKingKongRound} 개`}
            defaultValue={maxRound}
            onChange={(e) => {
              setMaxKingKongRound(e.target.value)
            }}
            sx={{
              width: '450px',
              height: '38px',
              borderRadius: '12px',
              marginLeft: '100px',
              marginRight: '5px',
            }}
          />
          <article style={{ marginLeft: '10px' }}></article>
          <button
            style={{
              width: '7rem',
              marginTop: '2rem',
              marginLeft: '5rem',
              // marginRight: '2rem',
            }}
            onClick={() => {
              onclickSubmit_max_kingkong_round_to_reach_def_fun_btn()
            }}
          >
            저장
          </button>
        </article>
      </div>
      <div style={{ display: 'flex', marginTop: '50px', marginBottom: '50px' }}>
        <Button
          disabled={currentRoundState === '0' ? false : true}
          onClick={() => allocateItems()}
          sx={{ width: '162px', height: '44px' }}
          variant="outlined"
        >
          Allocate Items
        </Button>
        <Button
          disabled={currentRoundState === '1' ? false : true}
          onClick={() => closeAllocateItems()}
          sx={{ marginLeft: '30px', width: '162px', height: '44px' }}
          variant="contained"
        >
          Close payment
        </Button>
        <Button
          onClick={() => initializeRounds()}
          sx={{ marginLeft: '30px', width: '172px', height: '44px' }}
          variant="outlined"
        >
          Initialize rounds
        </Button>
      </div>
    </div>
  )
}

export default ForceAdvanceRound

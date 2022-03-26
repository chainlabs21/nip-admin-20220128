import React from 'react'
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

const fields = [
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
              value={'10/10000'}
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
        <div style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}>
          <article style={{ width: '30%' }}>Current round</article>
          <article style={{ width: '70%' }}>
            <OutlinedInput
              value={'15'}
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
        <div style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}>
          <article style={{ width: '30%' }}>Item Min/Median/Max price</article>
          <article style={{ width: '70%' }}>
            <OutlinedInput
              value={'100 / 112 / 230'}
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
        <div style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}>
          <article style={{ width: '30%' }}>Total / New stakers</article>
          <article style={{ width: '70%' }}>
            <OutlinedInput
              value={'300 / 5'}
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
        <div style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}>
          <article style={{ width: '30%' }}>Stakers / Items ratio</article>
          <article style={{ width: '70%' }}>
            <OutlinedInput
              value={'300 / 410'}
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
        <div style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}>
          <article style={{ width: '30%' }}>Last round</article>
          <article style={{ width: '70%' }}>
            <OutlinedInput
              value={'14'}
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
        <div style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}>
          <article style={{ width: '30%' }}>Count Paid / Unpaid </article>
          <article style={{ width: '70%' }}>
            <OutlinedInput
              value={'10 / 3'}
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
        <div style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}>
          <article style={{ width: '30%' }}>
            Sum payments / Penalties Paid / Unpaid{' '}
          </article>
          <article style={{ width: '70%' }}>
            <OutlinedInput
              value={'1700 / 300 / 150'}
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
        <div style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}>
          <article style={{ width: '30%' }}>Ballot time of day </article>
          <article style={{ width: '70%' }}>
            <OutlinedInput
              value={'9 AM KST'}
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
        <div style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}>
          <article style={{ width: '30%' }}>Payment due time </article>
          <article style={{ width: '70%' }}>
            <OutlinedInput
              value={'23:00 KST'}
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
        <div style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}>
          <article style={{ width: '30%' }}>Duration of growth </article>
          <article style={{ width: '70%' }}>
            <OutlinedInput
              value={'2 days'}
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
    content: () => (
      <h1 style={{ padding: '10px' }}>현재 라운드 / 배분 및 할 당</h1>
    ),
  },

  {
    content: () => {
      return (
        <div style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}>
          <article style={{ width: '30%' }}>시작 및 시각 </article>
          <article style={{ width: '70%' }}>
            <OutlinedInput
              value={'2 days'}
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
        <div style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}>
          <article style={{ width: '30%' }}>할당받은 계정 수</article>
          <article style={{ width: '70%' }}>
            <OutlinedInput
              value={'2 days'}
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
        <div style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}>
          <article style={{ width: '30%' }}>분배된 아이템 수 </article>
          <article style={{ width: '70%' }}>
            <OutlinedInput
              value={'2 days'}
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
    content: () => <h1 style={{ padding: '10px' }}>현재 라운드 / 결제 마감</h1>,
  },

  {
    content: () => {
      return (
        <div style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}>
          <article style={{ width: '30%' }}>마감시각 </article>
          <article style={{ width: '70%' }}>
            <OutlinedInput
              value={'2 days'}
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
        <div style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}>
          <article style={{ width: '30%' }}>결제된 아이템 수 </article>
          <article style={{ width: '70%' }}>
            <OutlinedInput
              value={'2 days'}
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
        <div style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}>
          <article style={{ width: '30%' }}>미결제 계정 수 </article>
          <article style={{ width: '70%' }}>
            <OutlinedInput
              value={'2 days'}
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
    content: () => (
      <h1 style={{ padding: '10px' }}>다음 라운드 / 배분 및 할당</h1>
    ),
  },

  {
    content: () => {
      return (
        <div style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}>
          <article style={{ width: '30%' }}>시작시간 </article>
          <article style={{ width: '70%' }}>
            <OutlinedInput
              value={'2 days'}
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
        <div style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}>
          <article style={{ width: '30%' }}>결제 / 마감시각</article>
          <article style={{ width: '70%' }}>
            <OutlinedInput
              value={'2 days'}
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
        <div style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}>
          <article style={{ width: '30%' }}>라운드종료시각 / 종료시각 </article>
          <article style={{ width: '70%' }}>
            <OutlinedInput
              value={'2 days'}
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

const ManageAuction = () => {
  return (
    <>
      <ButtonGroupThird first="진행중" />
      <ButtonGroupThird first="Round:" />
      <ButtonGroupThird first="중지중" />

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
          <ButtonGroupSeconed first="저장" second="취소" />
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

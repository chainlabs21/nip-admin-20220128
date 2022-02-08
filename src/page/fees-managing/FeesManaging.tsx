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
import ButtonGroup from '../../components/input/button/ButtonGroup'

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
          <article style={{ width: '30%' }}>관리자 수수료</article>
          <article style={{ width: '70%' }}>
            <OutlinedInput
              placeholder="0"
              id="outlined-adornment-weight"
              aria-describedby="outlined-weight-helper-text"
              endAdornment={<InputAdornment position="end">%</InputAdornment>}
              inputProps={{
                'aria-label': 'weight',
              }}
              sx={{
                width: '100px',
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
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '1rem',
          }}
        >
          <article style={{ width: '30%' }}>판매자 수수료</article>
          <article style={{ width: '70%' }}>
            <OutlinedInput
              placeholder="0"
              id="outlined-adornment-weight"
              aria-describedby="outlined-weight-helper-text"
              endAdornment={<InputAdornment position="end">%</InputAdornment>}
              inputProps={{
                'aria-label': 'weight',
              }}
              sx={{
                width: '100px',
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
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '1rem',
          }}
        >
          <article style={{ width: '30%' }}>컨트랙트</article>
          <article style={{ width: '70%' }}>
            <OutlinedInput
              id="outlined-adornment-weight"
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
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
]

const FeesManaging = () => {
  return (
    <>
      <Papers title="수수료 관리">
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
            justifyContent: 'flex-end',
          }}
        >
          <ButtonGroup first="취소" second="저장" />
        </div>
      </Papers>
    </>
  )
}

export default FeesManaging

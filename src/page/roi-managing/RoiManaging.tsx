import React from 'react'
import Papers from '../../components/paper/Papers'
import PaperBodyContent from '../../components/paper/PaperBodyContent'
import { InputAdornment, OutlinedInput, Switch } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel/FormControlLabel'
import { styled } from '@mui/material/styles'
import ButtonGroup from '../../components/input/button/ButtonGroup'

const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 16,
      height: 16,
    },
    '&:before': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main),
      )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      left: 12,
    },
    '&:after': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main),
      )}" d="M19,13H5V11H19V13Z" /></svg>')`,
      right: 12,
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'none',
    width: 16,
    height: 16,
    margin: 2,
  },
}))

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
          <article style={{ width: '30%' }}>스테이킹 몬스터</article>
          <article style={{ width: '70%', display: 'flex' }}>
            <select
              style={{
                width: '160px',
                height: '38px',
                borderRadius: '12px',
                border: '1px solid #D9D9D9',
                textAlign: 'center',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
              name="monster"
            >
              <option value="">Monster</option>
              <option value="nip">Moong</option>
              <option value="???">Ming</option>
            </select>
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
          <article style={{ width: '30%' }}>스테이킹 지급 토큰</article>
          <article style={{ width: '70%', display: 'flex' }}>
            <select
              style={{
                width: '160px',
                height: '38px',
                borderRadius: '12px',
                border: '1px solid #D9D9D9',
                textAlign: 'center',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
              name="token"
            >
              <option value="">TOKEN</option>
              <option value="nip">NIP</option>
              <option value="???">???</option>
            </select>
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
          <article style={{ width: '30%' }}>스테이킹 수익률</article>
          <article style={{ width: '70%', display: 'flex' }}>
            <OutlinedInput
              placeholder="0"
              id="outlined-adornment-weight"
              aria-describedby="outlined-weight-helper-text"
              endAdornment={
                <InputAdornment position="end">
                  <span style={{ fontWeight: 'bold' }}>%</span>
                </InputAdornment>
              }
              inputProps={{
                'aria-label': 'weight',
              }}
              sx={{
                width: '160px',
                height: '40px',
                borderRadius: '12px',
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
          <article style={{ width: '30%' }}>스테이킹 지급 기간</article>
          <article style={{ width: '70%', display: 'flex' }}>
            <OutlinedInput
              placeholder="365"
              id="outlined-adornment-weight"
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
              sx={{
                width: '160px',
                height: '40px',
                borderRadius: '12px',
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
          <article style={{ width: '70%', display: 'flex' }}>
            <OutlinedInput
              id="outlined-adornment-weight"
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
              sx={{
                width: '430px',
                height: '40px',
                borderRadius: '12px',
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
          <article style={{ width: '30%' }}>사용유무</article>
          <article style={{ width: '70%', display: 'flex' }}>
            <FormControlLabel
              control={<Android12Switch defaultChecked />}
              label=""
            />
          </article>
        </div>
      )
    },
  },
]

const RoiManaging = () => {
  return (
    <>
      <Papers title="Roi 관리">
        <PaperBodyContent fields={fields} />
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

export default RoiManaging

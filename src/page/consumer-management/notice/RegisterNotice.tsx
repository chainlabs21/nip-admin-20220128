import React from 'react'
import Title from '../../dashboard/Title'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import Jodit from '../../../components/text-editor/Jodit'
import ButtonGroup from '../../../components/input/button/ButtonGroup'

const RegisterNotice = () => {
  return (
    <>
      <Title>NIP 마켓 설정</Title>

      <Paper
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <Grid container padding={8} spacing={2}>
          <div
            style={{
              display: 'flex',
              width: '100%',
            }}
          >
            <article
              style={{
                margin: '1rem',
                width: '20%',
                textAlign: 'center',
              }}
            >
              공지/일반
            </article>

            <article
              style={{
                width: '80%',
              }}
            >
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="normal"
                  name="radio-buttons-group"
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: '0.5rem',
                    marginBottom: '1rem',
                  }}
                >
                  <FormControlLabel
                    value="normal"
                    control={<Radio />}
                    label="일반"
                  />
                  <FormControlLabel
                    value="notice"
                    control={<Radio />}
                    label="공지"
                  />
                </RadioGroup>
              </FormControl>
            </article>
          </div>

          <div
            style={{
              display: 'flex',
              width: '100%',
            }}
          >
            <article
              style={{
                margin: '1rem',
                width: '20%',
                textAlign: 'center',
              }}
            >
              제목
            </article>

            <article
              style={{
                width: '80%',
              }}
            >
              <Grid item xs={12}>
                <TextField
                  sx={{
                    marginBottom: '1rem',
                  }}
                  fullWidth
                  name="title"
                  label="제목을 입력하세요"
                  id="title"
                  autoComplete="off"
                />
              </Grid>
            </article>
          </div>

          <div
            style={{
              display: 'flex',
              width: '100%',
            }}
          >
            <article
              style={{
                margin: '1rem',
                width: '20%',
                textAlign: 'center',
              }}
            >
              내용
            </article>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '80%',
                justifyContent: 'center',
              }}
            >
              <Jodit />
            </div>
          </div>

          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: '1rem',
            }}
          >
            <ButtonGroup first="저장" second="취소" />
          </div>
        </Grid>
      </Paper>
    </>
  )
}

export default RegisterNotice

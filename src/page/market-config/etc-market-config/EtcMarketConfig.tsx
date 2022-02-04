import React from 'react'
import Title from '../../dashboard/Title'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { FormControlLabel, InputAdornment, Radio } from '@mui/material'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

const payToken = [
  {
    id: 0,
    name: '이더리움',
  },
  {
    id: 1,
    name: '이더리움',
  },
  {
    id: 2,
    name: '이더리움',
  },
  {
    id: 3,
    name: '이더리움',
  },
  {
    id: 4,
    name: '이더리움',
  },
  {
    id: 5,
    name: '이더리움',
  },
  {
    id: 6,
    name: '이더리움',
  },
]

export default function EtcMarketConfig() {
  return (
    <>
      <Title>ETC 마켓 설정</Title>

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
              수수료 관리
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
                  name="transaction-commission"
                  label="거래 체결 수수료"
                  id="transaction-commission"
                  autoComplete="off"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">%</InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  sx={{
                    marginBottom: '1rem',
                  }}
                  fullWidth
                  name="seller-commission"
                  label="판매자 수수료"
                  id="seller-commission"
                  autoComplete="off"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">%</InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  sx={{
                    marginBottom: '1rem',
                  }}
                  fullWidth
                  name="consumer-commission"
                  label="거래자 수수료"
                  id="consumer-commission"
                  autoComplete="off"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">%</InputAdornment>
                    ),
                  }}
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
              컨트랙트
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
              결제 토큰
            </article>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '80%',
                justifyContent: 'center',
              }}
            >
              <article
                style={{
                  marginTop: '1rem',
                  marginBottom: '1rem',
                }}
              >
                <Grid item xs={12}>
                  <Button
                    sx={{
                      width: 120,
                    }}
                    variant="contained"
                  >
                    전체 활성
                  </Button>
                  <Button
                    sx={{
                      width: 120,
                      marginLeft: '8px',
                    }}
                    variant="outlined"
                  >
                    전체 비활성
                  </Button>
                </Grid>
              </article>

              <article>
                <Grid container spacing={2}>
                  {payToken.map((item) => (
                    <Grid key={item.id} item xs={4}>
                      <FormControlLabel
                        value={item.name}
                        control={<Radio />}
                        label={item.name}
                      />
                    </Grid>
                  ))}
                </Grid>
              </article>
            </div>
          </div>
        </Grid>
      </Paper>
    </>
  )
}

import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material'

const theme = createTheme()

export default function RegisterItem() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    마켓 선택
                  </InputLabel>
                  <Select labelId="select-label" id="select" label="마켓 선택">
                    <MenuItem value={10}>ABC</MenuItem>
                    <MenuItem value={20}>DEF</MenuItem>
                    <MenuItem value={30}>GHI</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                item
                xs={12}
              >
                <Button
                  sx={{
                    width: 120,
                  }}
                  variant="outlined"
                  size="large"
                >
                  일반 판매
                </Button>

                <Button
                  sx={{
                    width: 120,
                  }}
                  variant="outlined"
                  size="large"
                >
                  경매
                </Button>

                <Button
                  sx={{
                    width: 120,
                  }}
                  variant="outlined"
                  size="large"
                >
                  분할 판매
                </Button>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    결제 토큰 선택
                  </InputLabel>
                  <Select
                    labelId="select-label"
                    id="select"
                    label="결제 토큰 선택"
                  >
                    <MenuItem value={10}>ABC</MenuItem>
                    <MenuItem value={20}>DEF</MenuItem>
                    <MenuItem value={30}>GHI</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="price"
                  label="금액"
                  id="price"
                  autoComplete="off"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="royalty"
                  label="로열티"
                  id="royalty"
                  autoComplete="off"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">%</InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    카테고리
                  </InputLabel>
                  <Select labelId="select-label" id="select" label="카테고리">
                    <MenuItem value={10}>ABC</MenuItem>
                    <MenuItem value={20}>DEF</MenuItem>
                    <MenuItem value={30}>GHI</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="item-title"
                  label="아이템 제목"
                  id="item-title"
                  autoComplete="off"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="outlined-multiline-static"
                  label="아이템 소개"
                  multiline
                  rows={4}
                />
              </Grid>

              <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                item
                xs={12}
              >
                <label htmlFor="upload-photo">
                  <input
                    style={{ display: 'none' }}
                    id="upload-photo"
                    name="upload-photo"
                    type="file"
                  />

                  <Button
                    color="secondary"
                    variant="contained"
                    component="span"
                  >
                    파일 첨부
                  </Button>
                </label>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              등록
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

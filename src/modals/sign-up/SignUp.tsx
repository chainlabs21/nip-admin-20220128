import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import SelectViewer from '../../components/select-viewer/SelectViewer'

const theme = createTheme()

export default function SignUp() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            관리자 등록
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="accountId"
                  label="사용자 계정"
                  name="accountId"
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="password"
                  label="비밀번호"
                  name="password"
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="password"
                  label="비밀번호"
                  name="password"
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="call"
                  label="연락처"
                  id="call"
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={12}>
                <SelectViewer
                  title="사용여부 *"
                  menu={[
                    { value: true, label: 'Y' },
                    { value: false, label: 'N' },
                  ]}
                />
              </Grid>
              <Grid item xs={12}>
                <SelectViewer
                  title="사용자 그룹 *"
                  menu={[
                    { value: '1111', label: '최고관리자' },
                    { value: '2222', label: '일반관리자' },
                  ]}
                />
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

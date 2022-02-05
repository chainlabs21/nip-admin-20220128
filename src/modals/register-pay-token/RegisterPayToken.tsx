import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { FormControlLabel, InputAdornment, Switch } from '@mui/material'

const theme = createTheme()

export default function RegisterPayToken() {
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
                <TextField
                  fullWidth
                  name="name"
                  label="이름 (eg 이더리움)"
                  id="name"
                  autoComplete="off"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="unit"
                  label="단위 (eg ETH)"
                  id="unit"
                  autoComplete="off"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="commission"
                  label="수수료"
                  id="commission"
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
                  fullWidth
                  name="contract"
                  label="컨트랙트"
                  id="contract"
                  autoComplete="off"
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="결제 활성"
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

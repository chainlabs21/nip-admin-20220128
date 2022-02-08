import { CssBaseline } from '@mui/material'
import { Container } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

const RegisterMonster = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    })
  }

  return (
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
          몬스터 등록
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              padding: '1rem',
            }}
          >
            <article style={{ width: '100%', display: 'flex' }}>
              <div
                style={{
                  width: '430px',
                  height: '40px',
                  borderRadius: '12px',
                  border: '1px solid #D9D9D9',
                }}
              />
              <button
                style={{
                  width: '80px',
                  height: '40px',
                  borderRadius: '12px',
                  border: '1px solid #004CE0',
                  backgroundColor: 'white',
                  color: '#004CE0',
                  marginLeft: '8px',
                  cursor: 'pointer',
                }}
              >
                선택
              </button>
            </article>
          </div>
          <div
            style={{
              width: '100%',
              padding: '12px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <article>Untitled</article>
            <article>
              <DeleteForeverIcon />
            </article>
          </div>
          <div
            style={{
              width: '100%',
              padding: '12px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <article>Untitled</article>
            <article>
              <DeleteForeverIcon />
            </article>
          </div>
          <div
            style={{
              width: '100%',
              padding: '12px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <article>Untitled</article>
            <article>
              <DeleteForeverIcon />
            </article>
          </div>
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Button
              type="submit"
              style={{
                width: '430px',
              }}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              등록
            </Button>
          </div>
        </Box>
      </Box>
    </Container>
  )
}

export default RegisterMonster

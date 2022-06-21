import { useState } from 'react'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import PaperBodyContent from '../../components/paper/PaperBodyContent'
import { OutlinedInput } from '@mui/material'
import { API } from '../../configs/api'
import axios from 'axios'
import { net } from '../../configs/net'

const theme = createTheme()

interface ID {
  uuid: any
  handleClose: () => void
}

const RegisterBanner: React.FC<ID> = ({ uuid, handleClose }) => {
  const formData = new FormData()
  const [imageBase64, setImageBase64] = useState<any>('')
  const [imageTitle, setImageTitle] = useState<String>('')

  function onChangeBannerImg(e: any) {
    const maxSize = 50 * 1024 * 1024
    let file = e.target.files[0]
    if (file.size > maxSize) {
      alert('File size is too large')
      return
    }
    setImageTitle(file.name)
    console.log('file name', file)
    let reader = new FileReader()
    reader.onloadend = function (e: any) {
      console.log('base64', e.target.result)
      setImageBase64(e.target.result)
    }
    reader.readAsDataURL(file)
    console.log('e.target.result', imageBase64)
  }

  const bannerManagementBody = [
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
            <article style={{ width: '30%' }}>배너 등록</article>
            <article
              style={{ width: '70%', display: 'flex', flexDirection: 'column' }}
            >
              <input
                style={{ margin: '10px' }}
                onChange={(e) => onChangeBannerImg(e)}
                type="file"
              ></input>
            </article>
          </div>
        )
      },
    },
  ]
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault()
  //   const data = new FormData(event.currentTarget)
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   })
  // }

  // const uploadImg = (file: any) => {
  //   if (file.size >= 10 * 1024 * 1024) {
  //     alert('파일의 용량이 초과되었습니다')
  //     return
  //   }
  //   console.log('FILE', file.type, file.size, file.name)
  //   if (
  //     file.type !== 'image/png' &&
  //     file.type !== 'image/jpg' &&
  //     file.type !== 'image/jpeg' &&
  //     file.type !== 'image/gif'
  //   ) {
  //     alert('파일의 형식을 확인 해 주세요')
  //     return
  //   }
  //   setImageTitle(file.name)
  //   formData.append('file', file)
  //   let reader = new FileReader()

  //   reader.onloadend = function () {
  //     var b64 = reader.result
  //     console.log('base64 ', b64)
  //     setImageBase64(b64)
  //   }
  //   reader.readAsDataURL(file)
  // }

  const postBanner = () => {
    let data = {
      imagepc: imageBase64,
      writer: 'admin00',
      isinuse: '1',
      filenamepc: imageTitle,
      nettype: net,
    }
    if (uuid) {
      axios
        .put(API.API_POST_BANNER + '/' + uuid + `?nettype=${net}`, data)
        .then((res) => {
          console.log(res)
          handleClose()
        })
        .catch((err) => console.log(err))
    } else {
      axios
        .post(API.API_POST_BANNER + `?nettype=${net}`, data)
        .then((res) => {
          console.log(res)
          handleClose()
          window.location.reload()
        })
        .catch((err) => console.log(err))
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Typography component="h1" variant="h5">
              배너 등록
            </Typography>
            <Box
              component="form"
              noValidate
              // onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <PaperBodyContent fields={bannerManagementBody} />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => postBanner()}
              >
                확인
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default RegisterBanner

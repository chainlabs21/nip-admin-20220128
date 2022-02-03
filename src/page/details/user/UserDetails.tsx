import * as React from 'react'
import Paper from '@mui/material/Paper'
import Title from '../../dashboard/Title'
import { useParams } from 'react-router-dom'
import List from '@mui/material/List'
import { Divider, ListItem, ListItemText } from '@mui/material'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import ContainedButton from '../../../components/input/button/ContainedButton'

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
}

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

export default function UserDetails() {
  const params = useParams()

  return (
    <>
      <Title>회원 정보 {params.nickname}</Title>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>
            <List sx={style} component="nav" aria-label="mailbox folders">
              <ListItem>
                <article style={{ width: '50%' }}>
                  <ListItemText primary="아이디" />
                </article>
                <article style={{ width: '50%' }}>
                  <ListItemText secondary="sefsfes" />
                </article>
              </ListItem>
              <Divider />
              <ListItem divider>
                <article style={{ width: '50%' }}>
                  <ListItemText primary="마켓명" />
                </article>
                <article style={{ width: '50%' }}>
                  <ListItemText secondary="sefsfes" />
                </article>
              </ListItem>
              <ListItem>
                <article style={{ width: '50%' }}>
                  <ListItemText primary="이메일" />
                </article>
                <article style={{ width: '50%' }}>
                  <ListItemText secondary="sefsfes" />
                </article>
              </ListItem>
              <Divider light />
              <ListItem>
                <article style={{ width: '50%' }}>
                  <ListItemText primary="이메일 인증 일시" />
                </article>
                <article style={{ width: '50%' }}>
                  <ListItemText secondary="sefsfes" />
                </article>
              </ListItem>
              <Divider light />
              <ListItem>
                <article style={{ width: '50%' }}>
                  <ListItemText primary="프로필 이미지" />
                </article>
                <article style={{ width: '50%' }}>
                  <ListItemText secondary="sefsfes" />
                </article>
              </ListItem>
              <Divider light />
              <ListItem>
                <article style={{ width: '50%' }}>
                  <ListItemText primary="계정 활성" />
                </article>
                <article style={{ width: '50%' }}>
                  <ListItemText secondary="sefsfes" />
                </article>
              </ListItem>
            </List>
          </Item>
        </Grid>

        <Grid item xs={6}>
          <Item>
            <List sx={style} component="nav" aria-label="mailbox folders">
              <ListItem>
                <article style={{ width: '50%' }}>
                  <ListItemText primary="지갑주소" />
                </article>
                <article style={{ width: '50%' }}>
                  <ListItemText secondary="sefsfes" />
                </article>
              </ListItem>
              <Divider />
              <ListItem divider>
                <article style={{ width: '50%' }}>
                  <ListItemText primary="지갑 연동일" />
                </article>
                <article style={{ width: '50%' }}>
                  <ListItemText secondary="sefsfes" />
                </article>
              </ListItem>
              <ListItem>
                <article style={{ width: '50%' }}>
                  <ListItemText primary="등록 아이템 수" />
                </article>
                <article style={{ width: '50%' }}>
                  <ListItemText secondary="sefsfes" />
                </article>
              </ListItem>
              <Divider light />
              <ListItem>
                <article style={{ width: '50%' }}>
                  <ListItemText primary="구매 아이템 수" />
                </article>
                <article style={{ width: '50%' }}>
                  <ListItemText secondary="sefsfes" />
                </article>
              </ListItem>
              <Divider light />
              <ListItem>
                <article style={{ width: '50%' }}>
                  <ListItemText primary="배경 이미지" />
                </article>
                <article style={{ width: '50%' }}>
                  <ListItemText secondary="sefsfes" />
                </article>
              </ListItem>
              <Divider light />
              <ListItem>
                <article style={{ width: '50%' }}>
                  <ListItemText primary="-" />
                </article>
                <article style={{ width: '50%' }}>
                  <ListItemText secondary="-" />
                </article>
              </ListItem>
            </List>
          </Item>
        </Grid>
      </Grid>

      <div
        style={{
          float: 'right',
          marginTop: '1rem',
        }}
      >
        <ContainedButton subject="저장" />
      </div>
    </>
  )
}

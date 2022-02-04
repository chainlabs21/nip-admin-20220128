import * as React from 'react'
import Paper from '@mui/material/Paper'
import Title from '../../dashboard/Title'
import { Link as Router, useParams } from 'react-router-dom'
import List from '@mui/material/List'
import {
  Checkbox,
  Divider,
  ListItem,
  ListItemText,
  Switch,
} from '@mui/material'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import Table from '@mui/material/Table'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Paginating from '../../../components/paginating/Paginating'

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

const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

const rows = [
  {
    id: '0',
    number: '243',
    classification: '옥션 취소',
    date: '2022.02.04',
    nickname: '닉네임',
    token: '이더리움',
    count: '0.05 ETH',
    pay: '14,348 원',
    transactionDetails: 'Oxcda720a...',
  },
]

export default function ItemDetails() {
  const params = useParams()

  return (
    <>
      <Title>아이템 정보</Title>

      <Paper
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '2rem',
            marginBottom: '1rem',
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            아이템 정보 {params.title}
          </Typography>

          <article>
            <Button variant="contained">아이템 감추기</Button>
            <Button
              sx={{
                marginLeft: '8px',
              }}
              variant="outlined"
            >
              수정사항 저장
            </Button>
          </article>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Item>
              <List sx={style} component="nav" aria-label="mailbox folders">
                <ListItem>
                  <article style={{ width: '50%' }}>
                    <ListItemText primary="아이템 제목" />
                  </article>
                  <article style={{ width: '50%' }}>
                    <ListItemText secondary="sefsfes" />
                  </article>
                </ListItem>
                <Divider />
                <ListItem divider>
                  <article style={{ width: '50%' }}>
                    <ListItemText primary="아이템 고유 번호" />
                  </article>
                  <article style={{ width: '50%' }}>
                    <ListItemText secondary="sefsfes" />
                  </article>
                </ListItem>
                <ListItem>
                  <article style={{ width: '50%' }}>
                    <ListItemText primary="판매방" />
                  </article>
                  <article style={{ width: '50%' }}>
                    <ListItemText secondary="sefsfes" />
                  </article>
                </ListItem>
                <Divider light />
                <ListItem>
                  <article style={{ width: '50%' }}>
                    <ListItemText primary="시작일" />
                  </article>
                  <article style={{ width: '50%' }}>
                    <ListItemText secondary="sefsfes" />
                  </article>
                </ListItem>
                <Divider light />
                <ListItem>
                  <article style={{ width: '50%' }}>
                    <ListItemText primary="결제토큰" />
                  </article>
                  <article style={{ width: '50%' }}>
                    <ListItemText secondary="sefsfes" />
                  </article>
                </ListItem>
                <Divider light />
                <ListItem>
                  <article style={{ width: '50%' }}>
                    <ListItemText primary="카테고리" />
                  </article>
                  <article style={{ width: '50%' }}>
                    <ListItemText secondary="sefsfes" />
                  </article>
                </ListItem>
                <Divider light />
                <ListItem>
                  <article style={{ width: '50%' }}>
                    <ListItemText primary="로열티" />
                  </article>
                  <article style={{ width: '50%' }}>
                    <ListItemText secondary="sefsfes" />
                  </article>
                </ListItem>
                <Divider light />
                <ListItem>
                  <article style={{ width: '50%' }}>
                    <ListItemText primary="아이템 숨김" />
                  </article>
                  <article style={{ width: '50%', display: 'flex' }}>
                    <ListItemText secondary="ON | OFF" />
                    <Switch
                      defaultChecked={true}
                      inputProps={{ 'aria-label': 'controlled' }}
                    />
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
                    <ListItemText primary="게시자" />
                  </article>
                  <article style={{ width: '50%' }}>
                    <ListItemText secondary="sefsfes" />
                  </article>
                </ListItem>
                <Divider />
                <ListItem divider>
                  <article style={{ width: '50%' }}>
                    <ListItemText primary="Txid" />
                  </article>
                  <article style={{ width: '50%' }}>
                    <ListItemText secondary="sefsfes" />
                  </article>
                </ListItem>
                <ListItem>
                  <article style={{ width: '50%' }}>
                    <ListItemText primary="업로드 일시" />
                  </article>
                  <article style={{ width: '50%' }}>
                    <ListItemText secondary="sefsfes" />
                  </article>
                </ListItem>
                <Divider light />
                <ListItem>
                  <article style={{ width: '50%' }}>
                    <ListItemText primary="종료일" />
                  </article>
                  <article style={{ width: '50%' }}>
                    <ListItemText secondary="sefsfes" />
                  </article>
                </ListItem>
                <Divider light />
                <ListItem>
                  <article style={{ width: '50%' }}>
                    <ListItemText primary="상태" />
                  </article>
                  <article style={{ width: '50%' }}>
                    <ListItemText secondary="sefsfes" />
                  </article>
                </ListItem>
                <Divider light />
                <ListItem>
                  <article style={{ width: '50%' }}>
                    <ListItemText primary="아이템 확인" />
                  </article>
                  <article style={{ width: '50%' }}>
                    <ListItemText secondary="sefsf" />
                  </article>
                </ListItem>
                <Divider light />
                <ListItem>
                  <article style={{ width: '50%' }}>
                    <ListItemText primary="소유자" />
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

        <Typography
          sx={{
            marginTop: '5rem',
          }}
          id="modal-modal-title"
          variant="h6"
          component="h2"
        >
          Trading History
        </Typography>

        <Table size="medium">
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>분류</TableCell>
              <TableCell>일시</TableCell>
              <TableCell>닉네임</TableCell>
              <TableCell>결제토큰</TableCell>
              <TableCell>수량</TableCell>
              <TableCell>가격</TableCell>
              <TableCell>거래 상세</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.number}</TableCell>
                <TableCell>{row.classification}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.nickname}</TableCell>
                <TableCell>{row.token}</TableCell>
                <TableCell>{row.count}</TableCell>
                <TableCell>{row.pay}</TableCell>
                <TableCell>{row.transactionDetails} </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div
          style={{
            marginTop: '2rem',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Paginating />
        </div>
      </Paper>
    </>
  )
}

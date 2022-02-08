import React from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Papers from '../../components/paper/Papers'
import PaperBodyContent from '../../components/paper/PaperBodyContent'
import SelectViewer from '../../components/select-viewer/SelectViewer'
import BasicDateRangePicker from '../../components/date-range/DateRangePicker'
import Searches from '../../components/input/search/Searches'
import ContainedButton from '../../components/input/button/ContainedButton'
import TableDefault from '../../components/table/TableDefault'
import ex_image from '../../assets/images/ex-image.png'

const fields_01 = [
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
          <article
            style={{ width: '30%', color: '#7A7A7A', fontWeight: 'bold' }}
          >
            대기
          </article>
          <article
            style={{ width: '70%', display: 'flex', fontWeight: 'bold' }}
          >
            25
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
          <article
            style={{ width: '30%', color: '#7A7A7A', fontWeight: 'bold' }}
          >
            누적 등록수
          </article>
          <article
            style={{ width: '70%', display: 'flex', fontWeight: 'bold' }}
          >
            2,456,123,222
          </article>
        </div>
      )
    },
  },
]

const fields_02 = [
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
          <article
            style={{ width: '30%', color: '#7A7A7A', fontWeight: 'bold' }}
          >
            대기
          </article>
          <article
            style={{ width: '70%', display: 'flex', fontWeight: 'bold' }}
          >
            25
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
          <article
            style={{ width: '30%', color: '#7A7A7A', fontWeight: 'bold' }}
          >
            누적 MINTING 수
          </article>
          <article
            style={{ width: '70%', display: 'flex', fontWeight: 'bold' }}
          >
            56,123,222
          </article>
        </div>
      )
    },
  },
]

const tableSet = [
  {
    field: '순서',
  },
  {
    field: '이미지',
  },
  {
    field: '종류',
  },
  {
    field: '취급 토큰',
  },
  {
    field: '스테이킹 지급 일수',
  },
  {
    field: '스왑시 지급 토큰',
  },
  {
    field: '스테이킹 지급 토큰',
  },
  {
    field: '매칭 대기기간',
  },
  {
    field: '상태',
  },
  {
    field: '몬스터 가격',
  },
  {
    field: '거래 가격',
  },
  {
    field: '수익률',
  },
  {
    field: '설정된 수익률',
  },
  {
    field: '입찰 참여 시작일',
  },
  {
    field: '입찰 참여 종료일',
  },
  {
    field: '생성일',
  },
  {
    field: '다음 매칭일',
  },
]

const testField = [
  {
    field: '1',
  },
  {
    field: '이미지',
  },
  {
    field: '168 USDT',
  },
  {
    field: '경매',
  },
  {
    field: '완료',
  },
  {
    field: '211 USDT',
  },
  {
    field: '0.7 USDT',
  },
  {
    field: '0.3 USDT',
  },
  {
    field: '0xb6..2x',
  },
  {
    field: '0xb6..2x',
  },
  {
    field: '2022-02-02',
  },
]

const NftManaging = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
        }}
      >
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: '100%',
          }}
        >
          <Typography
            sx={{
              p: 2,
            }}
            component="h2"
            variant="h6"
            color="#000000"
            gutterBottom
          >
            Subscription Auction
          </Typography>
          <div>
            <PaperBodyContent fields={fields_01} />
          </div>
        </Paper>
        <Paper
          sx={{
            marginLeft: '45px',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: '100%',
          }}
        >
          <Typography
            sx={{
              p: 2,
            }}
            component="h2"
            variant="h6"
            color="#000000"
            gutterBottom
          >
            Market Place
          </Typography>
          <div>
            <PaperBodyContent fields={fields_02} />
          </div>
        </Paper>
      </div>

      <div
        style={{
          marginTop: '3rem',
        }}
      >
        <Papers title="NFT 관리">
          <section
            style={{
              padding: '1rem',
            }}
          >
            <section
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  width: '350px',
                }}
              >
                <article style={{ width: '100%' }}>
                  <SelectViewer
                    title="10개씩 보기"
                    menu={[
                      {
                        value: 10,
                        label: '10개씩 보기',
                      },
                      { value: 20, label: '20개씩 보기' },
                    ]}
                  />
                </article>

                <article style={{ width: '100%', marginLeft: '8px' }}>
                  <SelectViewer
                    title="입찰 신청자 수"
                    menu={[
                      { value: 1, label: '1' },
                      { value: 2, label: '2' },
                    ]}
                  />
                </article>
              </div>

              <article
                style={{
                  marginLeft: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  width: '700px',
                }}
              >
                <BasicDateRangePicker />
                <Searches />
                <ContainedButton subject="등록" />
              </article>
            </section>

            <div>
              <TableDefault columns={tableSet} testFields={testField} />
            </div>
          </section>
        </Papers>
      </div>
    </>
  )
}

export default NftManaging

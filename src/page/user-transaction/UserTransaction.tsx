import React from 'react'
import SelectViewer from '../../components/select-viewer/SelectViewer'
import Searches from '../../components/input/search/Searches'
import ContainedButton from '../../components/input/button/ContainedButton'
import TableDefault from '../../components/table/TableDefault'
import Papers from '../../components/paper/Papers'
import BasicDateRangePicker from '../../components/date-range/DateRangePicker'
import { Pagination } from '@mui/material'

const tableSet = [
  {
    field: '순서',
  },
  {
    field: '몬스터',
  },
  {
    field: '아이템 가격',
  },
  {
    field: '거래 방식',
  },
  {
    field: '체결 상태',
  },
  {
    field: '결제 금액',
  },
  {
    field: '수수료',
  },
  {
    field: 'royalty',
  },
  {
    field: 'From',
  },
  {
    field: 'To',
  },
  {
    field: '거래일시',
  },
]

const testField = [
  {
    field: '1',
  },
  {
    field: 'kong #112',
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

const UserTranSaction = () => {
  return (
    <>
      <Papers title="회원상세">
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
                  title="체결상태"
                  menu={[
                    { value: 1, label: '완료' },
                    { value: 2, label: '대기' },
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
              <ContainedButton subject="EXCEL" />
            </article>
          </section>

          <div>
            <TableDefault columns={tableSet} testFields={testField} />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              margin: '20px 0 0 0',
            }}
          >
            <Pagination count={10} showFirstButton showLastButton />
          </div>
        </section>
      </Papers>
    </>
  )
}

export default UserTranSaction

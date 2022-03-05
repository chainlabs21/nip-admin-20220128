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
    field: '계정',
  },
  {
    field: '지갑주소',
  },
  {
    field: 'TX_ID',
  },
  {
    field: '-',
  },
  {
    field: '-',
  },
  {
    field: '-',
  },
  {
    field: '-',
  },
  {
    field: '지급일',
  },
]

const testField = [
  {
    field: '1',
  },
  {
    field: 'seofij@gmail.com',
  },
  {
    field: '0xb6.2ef0',
  },
  {
    field: '-',
  },
  {
    field: '-',
  },
  {
    field: '-',
  },
  {
    field: '-',
  },
  {
    field: '-',
  },
  {
    field: '-',
  },
]

const PaymentDetails = () => {
  return (
    <>
      <Papers title="추천인 지급 리스트">
        <section
          style={{
            padding: '1rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <article
              style={{
                width: '150px',
              }}
            >
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

            <article
              style={{
                marginLeft: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                width: '700px',
              }}
            >
              <BasicDateRangePicker dateState={value=>{console.log(value)}} />
              <Searches searchState={e=>console.log(e)}/>
              <ContainedButton subject="EXCEL" />
            </article>
          </div>

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

export default PaymentDetails

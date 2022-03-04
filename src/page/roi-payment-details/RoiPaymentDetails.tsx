import React from 'react'
import Papers from '../../components/paper/Papers'
import SelectViewer from '../../components/select-viewer/SelectViewer'
import Searches from '../../components/input/search/Searches'
import ContainedButton from '../../components/input/button/ContainedButton'
import TableDefault from '../../components/table/TableDefault'
import CheckBox from '../../components/input/check-box/CheckBox'
import { Pagination } from '@mui/material'

const countViewers = [
  {
    value: 10,
    label: '10개씩 보기',
  },
  {
    value: 20,
    label: '20개씩 보기',
  },
  {
    value: 30,
    label: '30개씩 보기',
  },
]

const emailViewers = [
  {
    value: 10,
    label: 'email1',
  },
  {
    value: 20,
    label: 'email2',
  },
  {
    value: 30,
    label: 'email3',
  },
]

const tableSet = [
  {
    checkBox: () => {
      return <CheckBox />
    },
  },
  {
    field: '순서',
  },
  {
    field: '계정',
  },
  {
    field: 'Event',
  },
  {
    field: 'Staking 시작일',
  },
  {
    field: '지급일',
  },
  {
    field: '몬스터',
  },
  {
    field: '몬스터 가격',
  },
  {
    field: 'Roi 지급금액',
  },
  {
    field: 'TRANSACTION',
  },
]

const testField = [
  {
    checkBox: () => {
      return <CheckBox />
    },
  },
  {
    field: '1',
  },
  {
    field: 'seofj@gmail.com',
  },
  {
    field: 'Staking',
  },
  {
    field: '2022-02-02',
  },
  {
    field: '2022-02-02',
  },
  {
    field: 'Kingkong',
  },
  {
    field: '122 USDT',
  },
  {
    field: '10 NIP',
  },
  {
    field: '0x60bdse123404..',
  },
]

const RoiPaymentDetails = () => {
  return (
    <>
      <Papers title="Roi 지급내역">
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
              <SelectViewer title="10개씩 보기" menu={countViewers} />
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
              <SelectViewer title="Email" menu={emailViewers} />
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

export default RoiPaymentDetails

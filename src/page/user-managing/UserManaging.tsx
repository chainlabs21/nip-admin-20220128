import React from 'react'
import SelectViewer from '../../components/select-viewer/SelectViewer'
import Searches from '../../components/input/search/Searches'
import ContainedButton from '../../components/input/button/ContainedButton'
import TableDefault from '../../components/table/TableDefault'
import Papers from '../../components/paper/Papers'
import BasicDateRangePicker from '../../components/date-range/DateRangePicker'

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
    field: '몬스터 보유',
  },
  {
    field: 'Stake',
  },
  {
    field: 'USDT 보유',
  },
  {
    field: 'NIP 보유',
  },
  {
    field: '회원상태',
  },
  {
    field: '가입일',
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
    field: 'Success',
  },
  {
    field: '100 USDT',
  },
  {
    field: '1548 USDT',
  },
  {
    field: '122 NIP',
  },
  {
    field: '일반',
  },
  {
    field: '2022-01-29',
  },
]

const UserManaging = () => {
  return (
    <>
      <Papers title="회원관리">
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
              <BasicDateRangePicker />
              <Searches />
              <ContainedButton subject="EXCEL" />
            </article>
          </div>

          <div>
            <TableDefault columns={tableSet} testFields={testField} />
          </div>
        </section>
      </Papers>
    </>
  )
}

export default UserManaging

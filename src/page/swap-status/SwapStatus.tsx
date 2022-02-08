import React from 'react'
import Papers from '../../components/paper/Papers'
import Box from '@mui/material/Box'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Tab } from '@mui/material'
import TableDefault from '../../components/table/TableDefault'
import SelectViewer from '../../components/select-viewer/SelectViewer'
import BasicDateRangePicker from '../../components/date-range/DateRangePicker'
import Searches from '../../components/input/search/Searches'
import ContainedButton from '../../components/input/button/ContainedButton'

const tableSet = [
  {
    field: '순서',
  },
  {
    field: '몬스터 이름',
  },
  {
    field: '계정',
  },
  {
    field: '지갑주소',
  },
  {
    field: '스테이킹 기간',
  },
  {
    field: '스테이킹 가격',
  },
  {
    field: 'Roi',
  },
  {
    field: '스테이킹 시작일',
  },
  {
    field: '스테이킹 마감일',
  },
]

const testField = [
  {
    field: '1',
  },
  {
    field: 'Moong #11',
  },
  {
    field: 'soejf@gmail.com',
  },
  {
    field: '0xb6...2ef0',
  },
  {
    field: '100일',
  },
  {
    field: '100 USDT',
  },
  {
    field: '30%',
  },
  {
    field: '2022-02-02',
  },
  {
    field: '2022-02-02',
  },
]

const swapSet = [
  {
    field: '순서',
  },
  {
    field: '몬스터 이름',
  },
  {
    field: '계정',
  },
  {
    field: '지갑주소',
  },
  {
    field: '상태',
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
    field: '날짜',
  },
]

const swapField = [
  {
    field: '1',
  },
  {
    field: 'Moong #11',
  },
  {
    field: 'soejf@gmail.com',
  },
  {
    field: '0xb6...2ef0',
  },
  {
    field: 'Swap',
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
    field: '2022-02-02',
  },
]

const SwapStatus = () => {
  const [value, setValue] = React.useState('2')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }
  return (
    <>
      <Papers>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="스테이킹 현황" value="1" />
                <Tab label="스왑 현황" value="2" />
              </TabList>
            </Box>

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
            <TabPanel value="1">
              <TableDefault columns={tableSet} testFields={testField} />
            </TabPanel>
            <TabPanel value="2">
              <TableDefault columns={swapSet} testFields={swapField} />
            </TabPanel>
          </TabContext>
        </Box>
      </Papers>
    </>
  )
}

export default SwapStatus

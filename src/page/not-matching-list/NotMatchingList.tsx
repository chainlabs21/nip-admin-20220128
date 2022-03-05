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
    field: '가격',
  },
  {
    field: '상태',
  },
  {
    field: '신청자 수',
  },
  {
    field: 'URL',
  },
  {
    field: '몬스터 생성일',
  },
  {
    field: '입찰 시작일',
  },
  {
    field: '입찰 종료일',
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
    field: '100 USDT',
  },
  {
    field: 'Success',
  },
  {
    field: '100',
  },
  {
    field: 'https://nip1.net',
  },
  {
    field: '2022-02-02',
  },
  {
    field: '2022-02-02',
  },
  {
    field: '2022-02-02',
  },
]

const NotMatchingList = () => {
  const [value, setValue] = React.useState('3')

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
                <Tab label="입찰참여 리스트" value="1" />
                <Tab label="매칭현황 리스트" value="2" />
                <Tab label="미매칭건 리스트" value="3" />
                <Tab label="매칭가능 리스트" value="4" />
              </TabList>
            </Box>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '1rem',
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
            <TabPanel value="1">
              <TableDefault columns={tableSet} testFields={testField} />
            </TabPanel>
            <TabPanel value="2">
              <TableDefault columns={tableSet} testFields={testField} />
            </TabPanel>
            <TabPanel value="3">
              <TableDefault columns={tableSet} testFields={testField} />
            </TabPanel>
            <TabPanel value="4">
              <TableDefault columns={tableSet} testFields={testField} />
            </TabPanel>
          </TabContext>
        </Box>
      </Papers>
    </>
  )
}

export default NotMatchingList

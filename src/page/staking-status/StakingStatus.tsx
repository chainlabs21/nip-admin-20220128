import React, { useEffect , useState } from 'react'
import DateRangePicker, {DateRange} from '@mui/lab/DateRangePicker'
import Papers from '../../components/paper/Papers'
import Box from '@mui/material/Box'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Pagination, Tab } from '@mui/material'
// import TableDe fault from '../../components/table/TableD efault'
import TableDefaultListlist from '../../components/table/TableDefaultListlist'

import SelectViewer from '../../components/select-viewer/SelectViewer'
import { Select, MenuItem } from '@mui/material'
import { SelectChangeEvent } from '@mui/material'
import BasicDateRangePicker from '../../components/date-range/DateRangePicker'
import Searches from '../../components/input/search/Searches'
import ContainedButton from '../../components/input/button/ContainedButton'
import { API } from '../../configs/api';
import axios from 'axios'
import { strDot } from '../../utils/common';

const LOGGER=console.log
const tableSet = [
  {    field: 'id',  }, // 0
  {    field: 'createdat',  }, // 1
	{    field: 'amount',  }, // 2
	{	field : 'username'} ,
  {    field: 'currency',  }, // 3
  {    field: 'currency-addr',  }, // 4
	{    field: 'status',  }, // 5
	{	field : 'txhash'},
	{ field : 'net'}
//  {    field: 'Roi',  },
  //{    field: '스테이킹 시작일',  },
//  {    field: '스테이킹 마감일',  },
]
const testField = [
  {    field: '1',  },
  {    field: 'Moong #11',  },
  {    field: 'soejf@gmail.com',  },
  {    field: '0xb6...2ef0',  },
  {    field: '100일',  },
  {    field: '100 USDT',  },
  {    field: '30%',  },
  {    field: '2022-02-02',  },
  {    field: '2022-02-02',  },
]
const StakingStatus = () => {
  const [count, setCount] = useState(0)
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [rows, setRows] = useState<any>(10)
  const [datevalue, setDateValue] = useState<DateRange<Date>>([null, null])
	const [value, setValue] = React.useState('1')
//	let [ test Field , settes tField ]= useState ( [] )
	let [ listlist , setlistlist ] = useState( [] )
  const [searchkey, setSearchKey]=useState<String>('');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
	}
  const handleRows=(event: SelectChangeEvent<{value: any}>)=>{
    setRows(event.target.value)
   }
  const fetchdata = async()=>{
    let url=API.API_TXS_STAKE + `/0/10/id/DESC`
    let resp = await axios.get( `${API.API_TXS_STAKE}/${page * rows}/${rows}/id/DESC`, {params:{date0: datevalue[0], date1: datevalue[1], searchkey}} )
    LOGGER( '', url , resp.data )
    
    let { status , list : list_raw  }=resp.data 
    if ( status =='OK'){ //				settest Field ( list )
      setCount(resp.data.payload.count as number)
    setTotalPages(resp.data.payload.count /rows)
      let list = list_raw.map ( (elem : any) => {
        return [ { field : elem['id'] } // 0
          , { field : elem['createdat']?.split('.')[0] } // 1
					, { field : elem['amount'] } // 2
					, { field : strDot(elem['username'] , 20 , 0)}	
          , { field : elem['currency'] } // 3 
          , { field : strDot(elem['currencyaddress'], 8, 0) } // 4
          , { field : elem['status']==1? 'Ok':'Err' } // 5
          , { field : strDot(elem['txhash'] , 20, 0 )  } // 6
          , { field : elem['nettype'] } // 7
        ]
      })
      LOGGER('F4wjxixHX2' , list )
      setlistlist( list )
    }
  }
	useEffect (()=>{
		fetchdata()
	}
	,	[] )
  useEffect(()=>{
    setTotalPages(count/rows)
    fetchdata()
    console.log(totalPages)

  },[page, rows, datevalue, searchkey])
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
                <Tab label="스왑 현황" value="2" onClick={(
									evt:any
								)=>{evt.preventDefault()
									evt.stopPropagation()
									LOGGER('abc')}}/>
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
                <Select
                  id="RowsSelectLabel"
                  value={rows}
                  onChange={handleRows}

                  >
                    
                      <MenuItem value={10}>10개씩 보기</MenuItem>
                      <MenuItem value={20}>20개씩 보기</MenuItem>
                    
                  </Select>
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
                <BasicDateRangePicker dateState={value=>{setDateValue(value)}} />
                <Searches searchState={e=>setSearchKey(e)}/>
                <ContainedButton subject="등록" />
              </article>
            </section>
            <TabPanel value="1">
              <TableDefaultListlist columns={tableSet} testFields={testField} 
							listlist= { listlist }
							/>
              <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              margin: '20px 0 0 0',
            }}
          >
            {totalPages>1?(<Pagination onChange={(e, v)=>{setPage(v)}} count={totalPages} showFirstButton showLastButton />):""}
          </div>
            </TabPanel>
            <TabPanel value="2">
              <TableDefaultListlist columns={swapSet} testFields={swapField} />
              <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              margin: '20px 0 0 0',
            }}
          >
            <Pagination count={10} showFirstButton showLastButton />
          </div>
            </TabPanel>
          </TabContext>
        </Box>
      </Papers>
    </>
  )
}

export default StakingStatus
const swapSet = [
  {    field: '순서',  },
  {    field: '몬스터 이름',  },
  {    field: '계정',  },
  {    field: '지갑주소',  },
  {    field: '상태',  },
  {    field: '-',  },
  {    field: '-',  },
  {    field: '-',  },
  {    field: '날짜',  },
]
const swapField = [
  {    field: '1',  },
  {    field: 'Moong #11',  },
  {    field: 'soejf@gmail.com',  },
  {    field: '0xb6...2ef0',  },
  {    field: 'Swap',  },
  {    field: '-',  },
  {    field: '-',  },
  {    field: '-',  },
  {    field: '2022-02-02',  },
]

import React, { useEffect, useState } from 'react'
import SelectViewer from '../../components/select-viewer/SelectViewer'
import Searches from '../../components/input/search/Searches'
import ContainedButton from '../../components/input/button/ContainedButton'
import TableDefault from '../../components/table/TableDefault'
import TableDefaultUserManaging from '../../components/table/TableDefaultUserManaging'
import Papers from '../../components/paper/Papers'
import BasicDateRangePicker from '../../components/date-range/DateRangePicker'
import { Pagination } from '@mui/material'
import axios from 'axios'
import { API} from '../../configs/api'
import { LOGGER} from '../../utils/common'
// import moment from 'moment'
const tableSet = [
		{ field : 'id'}
	, { field : 'username'}
	, { field : 'email'}
	, { field : 'staked'}
	, { field : 'myreferercode' }
	, { field : '가입일'}
/** 	{    field: '순서',  },
  {    field: '계정',  },
  {    field: '지갑주소',  },
  {    field: '몬스터 보유',  },
  {    field: 'Stake',  },
  {    field: 'USDT 보유',  },
  {    field: 'NIP 보유',  },
  {    field: '회원상태',  },
  {    field: '가입일',  },*/
]
const testField = [
  {    field: '1',  },
  {    field: 'seofij@gmail.com',  },
  {    field: '0xb6.2ef0',  },
  {    field: 'Success',  },
	{    field: '100 USDT',  },
  {    field: '1548 USDT',  },
  {    field: '122 NIP',  },
  {    field: '일반',  },
  {    field: '2022-01-29',  },
]
const UserManaging = () => {
//	let [ testField , settestField ]=useState( [] )
	let [ listlist , setlistlist] = useState( [] )
	useEffect(()=>{
		const fetchdata=async ()=>{
			axios.get(API.API_USERS + `/0/10/id/DESC` ).then(resp=>{				LOGGER ('' , resp.data )
				let { status , list : list_raw }=resp.data
				if ( status =='OK' ){			//		settestField ( list )
					let list = list_raw.map ( (elem : any) =>{
						return [ {field: elem['id']} 
							, {field : elem['username'] } 
							, {field : elem['email'] } 
							, { field: elem['isstaked'] }
							, {field : elem['myreferercode']}
							, {field : elem['createdat']?.split('.')[0] }
						] }
					)
					LOGGER( '' , list )
					setlistlist ( list )			
				}
			})
		}
		fetchdata()
	} , [] )
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
            <TableDefaultUserManaging listlist={ listlist } columns={tableSet} testFields={testField} />
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

export default UserManaging

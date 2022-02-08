import React from 'react'
import SelectViewer from '../../components/select-viewer/SelectViewer'
import TableDefault from '../../components/table/TableDefault'
import Papers from '../../components/paper/Papers'
import ButtonGroup from '../../components/input/button/ButtonGroup'
import Radio from '@mui/material/Radio'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

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

const tableSet = [
  {
    field: '그룹명',
  },
  {
    field: '전체기능',
  },
  {
    field: '기능1',
  },
  {
    field: '기능2',
  },
  {
    field: '기능3',
  },
  {
    field: '기능4',
  },
  {
    field: '기능5',
  },
  {
    field: '기능6',
  },
  {
    field: '그룹삭제',
  },
]

const testField = [
  {
    field: () => '최고관리자',
  },
  {
    field: () => (
      <Radio
        value="b"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'B' }}
      />
    ),
  },
  {
    field: () => (
      <Radio
        value="b"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'B' }}
      />
    ),
  },
  {
    field: () => (
      <Radio
        value="b"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'B' }}
      />
    ),
  },
  {
    field: () => (
      <Radio
        value="b"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'B' }}
      />
    ),
  },
  {
    field: () => (
      <Radio
        value="b"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'B' }}
      />
    ),
  },
  {
    field: () => (
      <Radio
        value="b"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'B' }}
      />
    ),
  },
  {
    field: () => (
      <Radio
        value="b"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'B' }}
      />
    ),
  },
  {
    field: () => <DeleteForeverIcon />,
  },
]

const AdminAccountAuthority = () => {
  return (
    <>
      <Papers title="관리자 계정관리">
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
                width: '100%',
              }}
            >
              <ButtonGroup first="그룹 추가" second="등록" />
            </article>
          </div>

          <div>
            <TableDefault columns={tableSet} checkFields={testField} />
          </div>
        </section>
      </Papers>
    </>
  )
}

export default AdminAccountAuthority

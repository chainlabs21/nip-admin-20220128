import * as React from 'react'
import TextField from '@mui/material/TextField'
import DateRangePicker, { DateRange } from '@mui/lab/DateRangePicker'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import Box from '@mui/material/Box'

type ChildProps = {
  dateState: (value: DateRange<Date>) => void;
 }
 
const BasicDateRangePicker: React.FC<ChildProps>=(props)=> {
  const [value, setValue] = React.useState<DateRange<Date>>([null, null])
  //props.toggleState = (value: DateRange<Date>) => void;
  

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        startText="2022/02/02"
        endText="2022/02/03"
        value={value}
        onChange={(newValue) => {
          setValue(newValue)
          props.dateState(newValue)
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}>-</Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  )
}

export default BasicDateRangePicker;

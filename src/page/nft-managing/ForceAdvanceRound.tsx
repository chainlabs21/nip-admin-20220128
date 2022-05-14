import React, { useEffect, useState } from 'react'
import Papers from '../../components/paper/Papers'
import PaperBodyContent from '../../components/paper/PaperBodyContent'
import {
    CircularProgress,
    FormControlLabel,
    FormGroup,
    OutlinedInput,
    Switch,
    TextField,
} from '@mui/material'
import {
    ButtonGroupThird,
    Button_Periodic,
} from '../../components/input/button/ButtonGroup'
import Button from '@mui/material/Button'
import axios from 'axios'
import { API } from '../../configs/api'
import moment from 'moment'
// or @mui/lab/Adapter{Dayjs,Luxon,Moment} or any valid date-io adapter
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { TimePicker } from '@mui/lab'
import { LOGGER } from '../../utils/common'
import { query_noarg } from '../../utils/contract-calls'
import { addresses } from '../../configs/addresses'
import { net } from '../../configs/net'

const ForceAdvanceRound = (props: any) => {


    return (

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", flexDirection: "column", height: "100vh", width: "100%" }}>
            <h1>Manually Force advance round</h1>

            <div style={{ display: 'flex', alignItems: "center", justifyContent: "space-around", width: '500px', border: "1px solid #000000", flexWrap: "wrap" }}>
                <p>Current Round Number</p>
                <p>Current Round State</p>
                <div style={{ display: 'flex', alignItems: "center", justifyContent: "space-around", width: "100%" }}>
                    <p>1</p>
                    <p>0</p>
                </div>
            </div >

            <div style={{ display: 'flex', marginTop: '50px', marginBottom: '50px' }}>
                <Button sx={{ width: '162px', height: '44px' }}
                    variant="outlined">Allocate Items</Button>
                <Button
                    sx={{ marginLeft: '30px', width: '162px', height: '44px' }}
                    variant="contained"
                >
                    Close payment
                </Button>
                <Button
                    sx={{ marginLeft: '30px', width: '172px', height: '44px' }}
                    variant="outlined"
                >
                    Initialize rounds
                </Button>
            </div >
        </div >
    )
}

export default ForceAdvanceRound

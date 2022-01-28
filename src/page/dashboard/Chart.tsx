import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import {
  BarChart,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
  Tooltip,
  Legend,
  CartesianGrid,
  Bar,
} from 'recharts'
import Title from './Title'

function createData(time: string, amount?: number) {
  return { time, amount }
}

const data = [
  createData('00:00', 1000),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 800),
  createData('24:00', 2700),
]

export default function Chart() {
  const theme = useTheme()

  return (
    <React.Fragment>
      <Title>차트</Title>
      <ResponsiveContainer>
        <BarChart
          width={800}
          height={600}
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              판매량 ($)
            </Label>
          </YAxis>
          <Tooltip
            wrapperStyle={{
              width: 120,
              backgroundColor: '#ccc',
            }}
          />
          <Legend
            width={100}
            wrapperStyle={{
              top: 40,
              right: 20,
              backgroundColor: '#f5f5f5',
              border: '1px solid #d5d5d5',
              borderRadius: 3,
              lineHeight: '40px',
            }}
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="amount" fill="#8884d8" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  )
}

import * as React from 'react'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PeopleIcon from '@mui/icons-material/People'
import BarChartIcon from '@mui/icons-material/BarChart'
import LayersIcon from '@mui/icons-material/Layers'
import AssignmentIcon from '@mui/icons-material/Assignment'
import { Link } from 'react-router-dom'

export const mainListItems = (
  <div>
    <Link className="text-decorator-none" to="/">
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="대시보드" />
      </ListItem>
    </Link>

    <Link className="text-decorator-none" to="/owners">
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="관리자 계정 관리" />
      </ListItem>
    </Link>

    <Link className="text-decorator-none" to="/privilege">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="관리자 권한 관리" />
      </ListItem>
    </Link>

    <Link className="text-decorator-none" to="/users">
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="회원관리" />
      </ListItem>
    </Link>

    <Link className="text-decorator-none" to="/transaction-management">
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="거래관리" />
      </ListItem>
    </Link>
  </div>
)

export const secondaryListItems = (
  <div>
    <ListSubheader inset>기타</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="없음" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="없음" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="없음" />
    </ListItem>
  </div>
)

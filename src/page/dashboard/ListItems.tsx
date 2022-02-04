import * as React from 'react'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PeopleIcon from '@mui/icons-material/People'
import { Link } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add'
import StoreIcon from '@mui/icons-material/Store'
import StorefrontIcon from '@mui/icons-material/Storefront'
import PaidIcon from '@mui/icons-material/Paid'

export const dashboard = (
  <div>
    <Link className="text-decorator-none" to="/">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>

        <ListItemText primary="대시보드" />
      </ListItem>
    </Link>
  </div>
)

export const ownerAccount = (
  <div>
    <ListSubheader inset>관리자 계정 관리</ListSubheader>
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
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="관리자 권한 관리" />
      </ListItem>
    </Link>
  </div>
)

export const userAccount = (
  <div>
    <ListSubheader inset>회원 관리</ListSubheader>
    <Link className="text-decorator-none" to="/users">
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="회원관리" />
      </ListItem>
    </Link>

    <Link className="text-decorator-none" to="/transaction-management">
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="거래관리" />
      </ListItem>
    </Link>
  </div>
)

export const margetManagement = (
  <div>
    <ListSubheader inset>마켓 관리</ListSubheader>

    <Link className="text-decorator-none" to="/register-items">
      <ListItem button>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary="아이템 등록 현황" />
      </ListItem>
    </Link>

    <Link className="text-decorator-none" to="/nip-market-config">
      <ListItem button>
        <ListItemIcon>
          <StoreIcon />
        </ListItemIcon>
        <ListItemText primary="NIP 마켓 설정" />
      </ListItem>
    </Link>

    <Link className="text-decorator-none" to="/etc-market-config">
      <ListItem button>
        <ListItemIcon>
          <StorefrontIcon />
        </ListItemIcon>
        <ListItemText primary="ETC 마켓 설정" />
      </ListItem>
    </Link>

    <Link className="text-decorator-none" to="/pay-token-config">
      <ListItem button>
        <ListItemIcon>
          <PaidIcon />
        </ListItemIcon>
        <ListItemText primary="결제 토큰 관리" />
      </ListItem>
    </Link>
  </div>
)

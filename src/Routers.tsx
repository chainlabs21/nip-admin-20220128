import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from './page/main/Main'
import Owners from './page/owners/Owners'
import Privilege from './page/privilege/Privilege'
import Users from './page/users/Users'
import UserDetails from './page/details/user/UserDetails'
import TransactionManagement from './page/transaction-management/TransactionManagement'
import ItemsManagement from './page/items-management/ItemsManagement'
import ItemDetails from './page/details/item/ItemDetails'
import NipMarketConfig from './page/market-config/nip-market-config/NipMarketConfig'
import EtcMarketConfig from './page/market-config/etc-market-config/EtcMarketConfig'
import PayTokenManagement from './page/payment/PayTokenManagement'
import Notice from './page/consumer-management/notice/Notice'
import RegisterNotice from './page/consumer-management/notice/RegisterNotice'
import SiteManagement from './page/site-management/SiteManagement'
import AdminAccountManaging from './page/admin-account-managing/AdminAccountManaging'
import AdminAccountAuthority from './page/admin-account-authority/AdminAccountAuthority'

const Routers = () => {
  return (
    <Routes>
      <Route path="/site-managing" element={<SiteManagement />} />

      <Route
        path="/admin-account-managing"
        element={<AdminAccountManaging />}
      />

      <Route
        path="/admin-authority-managing"
        element={<AdminAccountAuthority />}
      />



        <Route
            path="/user-managing"
            element={<AdminAccountAuthority />}
        />
      <Route path="/" element={<Main />} />
      <Route path="/owners" element={<Owners />} />
      <Route path="/privilege" element={<Privilege />} />
      <Route path="/users" element={<Users />} />
      <Route path="/user/:nickname" element={<UserDetails />} />
      <Route path="/item/:title" element={<ItemDetails />} />
      <Route
        path="/transaction-management"
        element={<TransactionManagement />}
      />
      <Route path="/register-items" element={<ItemsManagement />} />
      <Route path="/nip-market-config" element={<NipMarketConfig />} />
      <Route path="/etc-market-config" element={<EtcMarketConfig />} />
      <Route path="/pay-token-config" element={<PayTokenManagement />} />
      <Route path="/notice" element={<Notice />} />
      <Route path="/notice/register" element={<RegisterNotice />} />
    </Routes>
  )
}

export default Routers

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

const Routers = () => {
  return (
    <Routes>
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
    </Routes>
  )
}

export default Routers

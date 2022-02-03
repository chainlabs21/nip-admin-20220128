import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from './page/main/Main'
import Owners from './page/owners/Owners'
import Privilege from './page/privilege/Privilege'
import Users from './page/users/Users'
import UserDetails from './page/details/user/UserDetails'
import TransactionManagement from './page/transaction-management/TransactionManagement'
import RegisterItems from './page/register-items/RegisterItems'

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/owners" element={<Owners />} />
      <Route path="/privilege" element={<Privilege />} />
      <Route path="/users" element={<Users />} />
      <Route path="/user/:nickname" element={<UserDetails />} />
      <Route
        path="/transaction-management"
        element={<TransactionManagement />}
      />
      <Route path="/register-items" element={<RegisterItems />} />
    </Routes>
  )
}

export default Routers

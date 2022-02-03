import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from './page/main/Main'
import Users from './page/users/Users'
import Privilege from './page/privilege/Privilege'

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/users" element={<Users />} />
      <Route path="/privilege" element={<Privilege />} />
    </Routes>
  )
}

export default Routers

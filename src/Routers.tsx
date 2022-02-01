import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from './page/main/Main'
import Users from './page/users/Users'

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  )
}

export default Routers

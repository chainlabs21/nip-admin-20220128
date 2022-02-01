import React from 'react'
import Dashboard from './page/dashboard/Dashboard'
import SignIn from './page/sign-in/SignIn'

const App = () => {
  // Load redux state when component did(or will) mount
  // if logged in => Dashboard, else => Sign in
  return (
    <section>
      {/*<SignIn />*/}
      <Dashboard />
    </section>
  )
}

export default App

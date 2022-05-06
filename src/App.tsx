import Dashboard from './page/dashboard/Dashboard'
import SignIn from './page/sign-in/SignIn'
import moment from 'moment'
import { query_noarg } from '../src/utils/contract-calls'
import { addresses } from '../src/configs/addresses'

const App = () => {
  // Load redux state when component did(or will) mount
  // if logged in => Dashboard, else => Sign in

  return (
    <section>
      <Dashboard />
    </section>
  )
}

export default App

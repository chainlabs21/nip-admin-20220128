import Dashboard from './page/dashboard/Dashboard'


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

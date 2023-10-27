import { Navigate, Outlet, useLocation } from 'react-router-dom'

function Staging() {
  const location = useLocation()
  return (
    <>
      {location.pathname === '/staging' && <Navigate to="/staging/live" />}
      <Outlet />
    </>
  )
}

export default Staging

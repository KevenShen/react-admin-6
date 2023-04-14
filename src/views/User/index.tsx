import { Navigate, Outlet, useLocation } from 'react-router-dom'

function User() {
  console.log('User 渲染')
  const location = useLocation()
  return (
    <>
      {location.pathname === '/user' && <Navigate to="/user/manage" />}
      <Outlet />
    </>
  )
}

export default User

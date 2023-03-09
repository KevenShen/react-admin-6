import { Outlet } from 'react-router-dom'

function User() {
  console.log('User 渲染')
  return <Outlet />
}

export default User

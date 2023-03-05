import { token } from '@/store/Module/user'
import { useRecoilValue } from 'recoil'
import { Navigate, useLocation } from 'react-router-dom'

const Auth = (props: any) => {
  const { children } = props
  const { pathname } = useLocation()
  const tokenRec = useRecoilValue(token)
  return <>{tokenRec || pathname === '/login' ? children : <Navigate to="/login" replace />}</>
}

export default Auth

import { menu, token } from '@/store/Module/user'
import { Navigate, useLocation } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

const Auth = (props: any) => {
  const { children } = props
  const { pathname } = useLocation()
  const tokenRec = useRecoilValue(token)
  const menuArr = useRecoilValue(menu)

  // 解决详情页越权访问    或者在获取菜单时就把详情页路由从路由表中过滤出来效率比较差
  const routerAuth = (path: string, arr: any[], num: number = 1): boolean => {
    const parts = path.split('/')
    const name = parts[num]
    if (!name) return true // 放行
    const obj = arr.find((item) => item.path === `/${name}`)
    if (!obj || (obj && !obj.isShow)) return false // 不存在菜单或者菜单存在但设置为隐藏
    if (num <= 2 && obj.children) return routerAuth(path, obj.children, num + 1) // 检查一级菜单和二级菜单
    return true
  }
  console.log(routerAuth(pathname, menuArr))

  return <>{tokenRec || pathname === '/login' ? children : <Navigate to="/login" replace />}</>
}

export default Auth

import Layout from '@/layout'
import { menu } from '@/store/Module/user'
import Error from '@/views/404'
import Login from '@/views/Login'
import { lazy, Suspense } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { Router } from './routerDto'

const Mod: any = import.meta.glob('../views/**/*.tsx') // 在vite中必须这样动态引入所有组件

// 快速导入工具函数
const lazyLoad = (moduleName: string) => {
  const Module = lazy(Mod[`../views/${moduleName}/index.tsx`])

  return (
    <Suspense fallback={<div />}>
      <Module></Module>
    </Suspense>
  )
}

// 默认路由
export const defRouter: Array<Router> = [
  // 需要在路由最前面添加 优先匹配 重定向
  {
    path: '/',
    name: '',
    isShow: false,
    element: <Navigate to={'/home'} />
  },
  {
    path: '/login',
    name: '登录',
    isShow: false,
    element: <Login></Login>
  },
  {
    path: '*',
    name: '404',
    isShow: false,
    element: <Error></Error>
  }
]
// 合并路由
const marRouter = (arr) => {
  return [
    ...defRouter,
    {
      path: '/',
      name: '',
      isShow: false,
      element: <Layout></Layout>,
      children: arr
    }
  ]
}

// 根据菜单筛选路由
const filterAsyncRouter = (menus: Array<Router> = []) => {
  const addRouter: Array<Router> = []
  menus.forEach((item: Router) => {
    const route: Router = {
      name: item.name,
      path: item.path,
      isShow: item.isShow,
      element: ''
    }

    route.element = lazyLoad(item.component)

    if (item.children) {
      route.children = filterAsyncRouter(item.children)
    }

    addRouter.push(route)
  })
  return addRouter
}

const RouterCom = () => {
  const menuArr = useRecoilValue(menu)
  const [r, setR] = useState<Router[]>([])

  useEffect(() => {
    const asyncArr = filterAsyncRouter(menuArr)
    setR(marRouter(asyncArr))
  }, [menuArr])

  const routes = useRoutes(r)
  return routes
}

export default RouterCom

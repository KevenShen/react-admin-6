import { lazy, Suspense, useMemo } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import { Router } from './routerDto'
import Login from '@/views/Login'
import Layout from '@/layout'
import { menu } from '@/store/Module/user'
import { useRecoilValue } from 'recoil'

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

// 菜单
const R: Array<Router> = [
  {
    path: '/',
    name: '',
    isShow: false,
    element: 'Layout',
    children: [
      {
        path: '/home',
        name: '主页',
        isShow: true,
        element: 'Home'
      },
      {
        path: '/user',
        name: 'CRM管理',
        isShow: true,
        element: 'User',
        children: [
          {
            path: '/user/manage',
            name: '用户管理',
            isShow: true,
            element: 'User/Manage'
          },
          {
            path: '/user/role',
            name: '角色管理',
            isShow: true,
            element: 'User/Role'
          },
          {
            path: '/user/menu',
            name: '菜单管理',
            isShow: true,
            element: 'User/Menu'
          }
        ]
      },
      {
        path: '/about',
        name: '关于',
        isShow: true,
        element: 'About'
      },
      {
        path: '/chatgpt',
        name: 'ChatGPT',
        isShow: true,
        element: 'ChatGPT'
      }
    ]
  },
  {
    path: '*',
    name: '',
    isShow: false,
    element: '',
    redirectTo: '/'
  }
]

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
    name: '登录',
    isShow: false,
    element: <Login></Login>
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
      element: '',
      redirectTo: item.redirectTo
    }

    route.element = lazyLoad(item.component)

    if (item.children) {
      route.children = filterAsyncRouter(item.children)
    }
    if (item.redirectTo) {
      route.element = <Navigate to={item.redirectTo} />
    }
    addRouter.push(route)
  })
  return addRouter
}

export const RR = R

const RouterCom = () => {
  const menuArr = useRecoilValue(menu)

  const r = useMemo(() => {
    const asyncArr = filterAsyncRouter(menuArr)
    return marRouter(asyncArr)
  }, [menuArr]) // 只有在变化的时候才去重新生成路由

  const routes = useRoutes(r)
  return routes
}

export default RouterCom

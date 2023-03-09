import { lazy, Suspense } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import Layout from '@/layout'
import { Router } from './routerDto'
import Login from '@/views/Login'
import routerModules, { res } from './modules'
const mo: any = import.meta.glob('../views/**/*.tsx') // 在vite中必须这样动态引入所有组件

// 快速导入工具函数
const lazyLoad = (moduleName: string) => {
  const Module = lazy(mo[`../views/${moduleName}/index.tsx`])
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
    isMenu: false,
    element: 'Layout',
    children: [
      {
        path: '/home',
        name: '主页',
        isMenu: true,
        element: 'Home'
      },
      {
        path: '/user',
        name: 'CRM管理',
        isMenu: true,
        element: 'User',
        children: [
          {
            path: '/user/manage',
            name: '用户管理',
            isMenu: true,
            element: 'User/Manage'
          },
          {
            path: '/user/role',
            name: '角色管理',
            isMenu: true,
            element: 'User/Role'
          },
          {
            path: '/user/menu',
            name: '菜单管理',
            isMenu: true,
            element: 'User/Menu'
          }
        ]
      },
      {
        path: '/about',
        name: '关于',
        isMenu: true,
        element: 'About'
      },
      {
        path: '/chatgpt',
        name: 'ChatGPT',
        isMenu: true,
        element: 'ChatGPT'
      }
    ]
  },
  {
    path: '*',
    name: '',
    isMenu: false,
    element: '',
    redirectTo: '/'
  }
]

// 默认路由
const defRouter: Array<Router> = [
  // 需要在路由最前面添加 优先匹配 重定向
  {
    path: '/',
    name: '',
    isMenu: false,
    element: <Navigate to={'/home'} />
  },
  {
    path: '/login',
    name: '登录',
    isMenu: false,
    element: <Login></Login>
  }
]

// 合并路由
export const mergeRouter = (router: Array<Router> = []) => {
  return [...defRouter, ...router]
}

// 根据菜单筛选路由
export const filterAsyncRouter = (menus: Array<Router> = []) => {
  const addRouter: Array<Router> = []

  menus.forEach((item: Router) => {
    const route: Router = {
      name: item.name,
      path: item.path,
      isMenu: item.isMenu,
      element: '',
      redirectTo: item.redirectTo
    }
    if (item.element) {
      if (item.element === 'Layout') {
        route.element = <Layout></Layout>
      } else {
        route.element = lazyLoad(item.element)
      }
    }
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

const asyncRouter = filterAsyncRouter(R)

const rootRouter = [...defRouter, ...asyncRouter]

export const RR = R

const RouterCom = () => {
  const routes = useRoutes(rootRouter)
  return routes
}

export default RouterCom

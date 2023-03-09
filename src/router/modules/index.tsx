import Layout from '@/layout'
import About from '@/views/About'
import ChatGPT from '@/views/ChatGPT'
import Home from '@/views/Home'
import User from '@/views/User'
import Manage from '@/views/User/Manage'
import Menu from '@/views/User/Menu'
import Role from '@/views/User/Role'

export default [
  {
    path: '/home',
    element: <Home></Home>
  },
  {
    path: '/user',
    element: <User></User>
  },
  {
    path: '/user/manage',
    element: <Manage></Manage>
  },
  {
    path: '/user/role',
    element: <Role></Role>
  },
  {
    path: '/user/menu',
    element: <Menu></Menu>
  },
  {
    path: '/about',
    element: <About></About>
  },
  {
    path: '/chatgpt',
    element: <ChatGPT></ChatGPT>
  }
]

export const res = [
  {
    path: '/',
    name: '',
    isMenu: false,
    element: <Layout></Layout>,
    children: [
      {
        path: '/home',
        name: '主页',
        isMenu: true,
        element: <Home></Home>
      },
      {
        path: '/user',
        name: 'CRM管理',
        isMenu: true,
        element: <User></User>
      },
      {
        path: '/about',
        name: '关于',
        isMenu: true,
        element: <About></About>
      },
      {
        path: '/chatgpt',
        name: 'ChatGPT',
        isMenu: true,
        element: <ChatGPT></ChatGPT>
      },
      {
        path: '/user/manage',
        name: '用户管理',
        isMenu: true,
        element: <Manage></Manage>
      },
      {
        path: '/user/role',
        name: '角色管理',
        isMenu: true,
        element: <Role></Role>
      },
      {
        path: '/user/menu',
        name: '菜单管理',
        isMenu: true,
        element: <Menu></Menu>
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

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { MenuProps, MenuTheme } from 'antd'
import { Menu } from 'antd'
import { Router } from '@/router/routerDto'
import { menu } from '@/store/Module/user'
import { useRecoilValue } from 'recoil'

type MenuItem = Required<MenuProps>['items'][number]
const Menus = () => {
  const navigate = useNavigate()
  const menuArr = useRecoilValue(menu)
  const [theme] = useState<MenuTheme>('light')

  //用于渲染路由，通过递归实现任意层级渲染
  const renderMenuItem = (menuArr: Array<Router>): Array<MenuItem> => {
    const ret = menuArr.map((item) => {
      const menu = {}
      menu.key = item.path
      menu.label = item.name
      menu.title = item.name
      if (item.children) {
        const children = renderMenuItem(item.children)
        if (children.length) menu.children = children
      } else {
        menu.path = item.path
      }
      return menu
    })
    return ret
  }
  const menus = renderMenuItem(menuArr)
  console.log(menus)
  const onClick = (item: any) => {
    navigate(item.key)
  }
  return <Menu theme={theme} mode="inline" onClick={onClick} items={menus}></Menu>
}

export default Menus

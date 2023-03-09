import { Component, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { MenuProps, MenuTheme } from 'antd'
import { Menu } from 'antd'
import { RR } from '@/router'
import { Router } from '@/router/routerDto'
type MenuItem = Required<MenuProps>['items'][number]
const Menus = () => {
  const navigate = useNavigate()
  const [theme] = useState<MenuTheme>('light')
  const menuConfig = RR[0].children

  //用于渲染路由，通过递归实现任意层级渲染
  const renderMenuItem = (menuArr: Array<Router>): Array<MenuItem> => {
    const ret = menuArr.map((item) => {
      const menu = {}
      menu.key = item.path
      menu.label = item.name
      menu.title = item.name
      if (item.children) {
        const children = renderMenuItem(item.children)
        menu.children = children
      } else {
        menu.path = item.path
      }
      return menu
    })
    return ret
  }
  const menus = renderMenuItem(menuConfig)
  const onClick = (item: any) => {
    navigate(item.key)
  }
  return (
    <Menu theme={theme} mode="inline" inlineCollapsed={true} onClick={onClick} items={menus}></Menu>
  )
}

// export default connect((state) => state.user, { addTag })(withRouter(Meun))
export default Menus

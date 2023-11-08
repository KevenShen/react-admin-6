import { useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import type { MenuProps, MenuTheme } from 'antd'
import { Menu } from 'antd'
import { Router } from '@/router/routerDto'
import { menu } from '@/store/Module/user'
import { useRecoilValue } from 'recoil'
import SvgImage from '@/components/SvgImage'
import './index.less'

type MenuItem = Required<MenuProps>['items'][number]
const Menus = ({ className }) => {
  const navigate = useNavigate()
  const menuArr = useRecoilValue(menu)
  const [theme] = useState<MenuTheme>('light')
  const location = useLocation()
  const pathSnippets = location.pathname.split('/').filter((i) => i)
  const openKeys = useMemo(() => {
    return pathSnippets.map((item, index) => {
      return `/${pathSnippets.slice(0, index + 1).join('/')}`
    })
  }, [pathSnippets])
  //用于渲染路由，通过递归实现任意层级渲染
  const renderMenuItem = (menuArr: Array<Router>): Array<MenuItem> => {
    const ret = menuArr.map((item) => {
      const menu = {}
      menu.key = item.path
      menu.label = item.name
      menu.title = item.name
      menu.icon = <SvgImage name={item.icon} size="14px" fill="#4D4D4D"></SvgImage>
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
  const onClick = (item: any) => {
    navigate(item.key)
  }

  return (
    <Menu
      className={className}
      theme={theme}
      mode="inline"
      defaultOpenKeys={openKeys}
      selectedKeys={openKeys}
      onClick={onClick}
      items={menus}
    ></Menu>
  )
}

export default Menus

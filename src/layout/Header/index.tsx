import { Avatar, Breadcrumb, Drawer, Layout, Popover, Space, theme } from 'antd'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CommentOutlined, BulbOutlined, DashboardOutlined } from '@ant-design/icons'
import { useRecoilState, useRecoilValue } from 'recoil'
import { menu as m, userInfo } from '@/store/Module/user'
import SvgImage from '@/components/SvgImage'
const { Header } = Layout
import './index.less'
import { collapsed, navShow, navType } from '@/store/Module/com'
import { Router } from '@/Type'
import Config from '@/components/Config'
import Logo from '../Sider/Logo'
import Tags from '../Tags'

const asyncUrl = (arr: Array<Router>) => {
  let urlObj: Record<string, string> = {}
  arr.forEach((item: any) => {
    urlObj[item.path] = item.name
    if (item.children) urlObj = { ...urlObj, ...asyncUrl(item.children) }
  })
  return urlObj
}
const Headers: React.FC = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken()
  const [config, setConfig] = useState(false)
  const nav = useRecoilValue(navType)
  const isNav = useRecoilValue(navShow)
  const user = useRecoilValue(userInfo)
  const menuArr = useRecoilValue(m)
  const breadcrumbNameMap: Record<string, string> = asyncUrl(menuArr)
  const location = useLocation()
  const pathSnippets = location.pathname.split('/').filter((i) => i)

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
    return {
      key: url,
      title: <Link to={url}>{breadcrumbNameMap[url]}</Link>
    }
  })
  const breadcrumbItems = [
    {
      title: <Link to="/">Home</Link>,
      key: 'home'
    }
  ].concat(extraBreadcrumbItems)

  const exitlogin = () => {
    localStorage.removeItem('comStore')
    localStorage.removeItem('user')
    window.location.reload()
  }
  // 用户自定义框
  const content = (
    <div className="user-center">
      <p>个人中心</p>
      <p>首页</p>
      <p className="danger" onClick={exitlogin}>
        退出登录
      </p>
    </div>
  )

  return (
    <Header style={{ padding: 0, background: colorBgContainer }}>
      <div className="logo">{true ? <Logo /> : null}</div>

      <div className="nav-user">
        {nav === 'nav' && isNav ? <Breadcrumb items={breadcrumbItems} /> : <div />}
        {nav === 'navNimble' && isNav ? <Tags></Tags> : <div />}
        <div className="rightBox">
          <Space size={18}>
            <CommentOutlined style={{ fontSize: 18 }} />
            <BulbOutlined style={{ fontSize: 18 }} />
            <DashboardOutlined style={{ fontSize: 18 }} onClick={() => setConfig(true)} />
            <Popover placement="bottom" trigger="click" content={content}>
              <Avatar src={user.avatar} size={30}></Avatar>
              <span className="user-name">{user.username}</span>
            </Popover>
          </Space>
        </div>
      </div>
      <Drawer
        title="全局配置"
        placement="right"
        closable={false}
        extra={
          <Space>
            <SvgImage size="18px" name="icon-tishi"></SvgImage>
          </Space>
        }
        onClose={() => setConfig(false)}
        open={config}>
        <Config></Config>
      </Drawer>
    </Header>
  )
}

export default Headers

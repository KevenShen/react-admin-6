import { Avatar, Breadcrumb, Layout, Popover, Space, theme } from 'antd'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  CommentOutlined,
  BulbOutlined,
  DashboardOutlined
} from '@ant-design/icons'
import { useRecoilState, useRecoilValue } from 'recoil'
import { menu as m, userInfo } from '@/store/Module/user'

const { Header } = Layout
import './index.less'
import { collapsed } from '@/store/Module/com'
import { Router } from '@/Type'

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
  const user = useRecoilValue(userInfo)

  const [coll, setColl] = useRecoilState(collapsed)
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
      <div className="nav-user">
        <div className="leftBox">
          {React.createElement(coll ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setColl(!coll)
          })}
          <Breadcrumb items={breadcrumbItems} />
        </div>
        <div className="rightBox">
          <Space size={18}>
            <CommentOutlined style={{ fontSize: 18 }} />
            <BulbOutlined style={{ fontSize: 18 }} />
            <DashboardOutlined style={{ fontSize: 18 }} />
            <Popover placement="bottom" trigger="click" content={content}>
              <Avatar src={user.avatar} size={30}></Avatar>
              <span className="user-name">{user.username}</span>
            </Popover>
          </Space>
        </div>
      </div>
    </Header>
  )
}

export default Headers

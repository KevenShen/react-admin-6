import { Avatar, Breadcrumb, Drawer, Layout, Modal, Popover, Space, theme } from 'antd'
import React, { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  CompressOutlined,
  BulbOutlined,
  SearchOutlined,
  DashboardOutlined,
  ExpandOutlined
} from '@ant-design/icons'
import { useRecoilValue } from 'recoil'
import { menu as m, userInfo } from '@/store/Module/user'
import SvgImage from '@/components/SvgImage'
const { Header } = Layout
import './index.less'
import { fullScreen, navShow, navType, search, tipBtn } from '@/store/Module/com'
import { Router } from '@/Type'
import Config from '@/components/Config'
import Logo from '../Sider/Logo'
import Tags from '../Tags'
import { Box } from '@/components/FullScreenBox'

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
  const seach = useRecoilValue(search)
  const tip = useRecoilValue(tipBtn)
  const full = useRecoilValue(fullScreen)

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
  // 全屏
  const handle = useContext(Box)

  return (
    <Header style={{ padding: 0, background: colorBgContainer }}>
      <div className="logo">{true ? <Logo /> : null}</div>

      <div className="nav-user">
        {nav === 'nav' && isNav ? <Breadcrumb items={breadcrumbItems} /> : <div />}
        {nav === 'navNimble' && isNav ? <Tags></Tags> : <div />}
        <div className="rightBox">
          <Space size={18}>
            {seach && <SearchOutlined style={{ fontSize: 18 }} />}
            {tip && <BulbOutlined style={{ fontSize: 18 }} />}
            {full && !handle?.active && (
              <ExpandOutlined onClick={handle?.enter} style={{ fontSize: 18 }} />
            )}
            {full && handle?.active && (
              <CompressOutlined onClick={handle?.exit} style={{ fontSize: 18 }} />
            )}
            <DashboardOutlined style={{ fontSize: 18 }} onClick={() => setConfig(true)} />
            <Popover placement="bottom" trigger="click" content={content}>
              <Avatar src={user.avatar} size={30}></Avatar>
              <span className="user-name">{user.username}</span>
            </Popover>
          </Space>
        </div>
      </div>
      {/* 全局配置模态框 */}
      <Drawer
        title="全局配置"
        placement="right"
        getContainer={document.querySelector('.fullscreen') || document.body}
        closable={false}
        extra={
          <Space>
            <SvgImage size="18px" name="icon-tishi"></SvgImage>
          </Space>
        }
        onClose={() => setConfig(false)}
        open={config}
      >
        <Config></Config>
      </Drawer>
      {/* 搜索模态框 */}
      <Modal></Modal>
    </Header>
  )
}

export default Headers

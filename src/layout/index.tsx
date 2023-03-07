import React, { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Layout, Menu, theme } from 'antd'
import Sider from './Sider'

const { Header, Content } = Layout

const App: React.FC = () => {
  const location = useLocation()
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer }
  } = theme.useToken()
  return (
    <Layout>
      <Sider sidebarCollapsed={collapsed}></Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed)
          })}
        </Header>
        <TransitionGroup style={{ flex: 1 }}>
          <CSSTransition timeout={500} key={location.pathname} classNames="fade" exit={false}>
            <Content
              style={{
                padding: '16px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}>
              <Outlet />
            </Content>
          </CSSTransition>
        </TransitionGroup>
      </Layout>
    </Layout>
  )
}

export default App

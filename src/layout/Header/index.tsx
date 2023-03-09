import { Layout, theme } from 'antd'

const { Header } = Layout

const Headers: React.FC = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken()
  return <Header style={{ padding: 0, background: colorBgContainer }}></Header>
}

export default Headers

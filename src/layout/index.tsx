import { Layout } from 'antd'
import Sider from './Sider'
import Content from './Content'
import Header from './Header'

const App: React.FC = () => {
  return (
    <Layout hasSider>
      <Sider></Sider>
      <Layout className="site-layout">
        <Header></Header>
        <Content></Content>
      </Layout>
    </Layout>
  )
}

export default App

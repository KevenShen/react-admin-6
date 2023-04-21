import { ConfigProvider, Layout } from 'antd'
import Sider from './Sider'
import Content from './Content'
import Header from './Header'
import Tags from './Tags'

const App: React.FC = () => {
  return (
    <ConfigProvider componentiddle" theme={{ token: { colorPrimary: '#172f4a' } }}>
      <Layout>
        <Header></Header>
        <Layout className="site-layout">
          <Sider></Sider>
          <Layout className="site-layout">
            {/* <Tags></Tags> */}
            <Content></Content>
          </Layout>
        </Layout>
      </Layout>
    </ConfigProvider>
  )
}

export default App

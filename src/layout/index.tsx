import { FullScreenBox } from '@/components'
import { btnSize, thColor } from '@/store/Module/com'
import { ConfigProvider, Layout } from 'antd'
import { useRecoilValue } from 'recoil'
import Content from './Content'
import Header from './Header'
import Sider from './Sider'

const App: React.FC = () => {
  const bsize = useRecoilValue(btnSize)
  const color = useRecoilValue(thColor)
  return (
    <ConfigProvider componentSize={bsize} theme={{ token: { colorPrimary: color } }}>
      <FullScreenBox>
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
      </FullScreenBox>
    </ConfigProvider>
  )
}
export default App

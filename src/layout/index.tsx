import { ConfigProvider, Layout } from 'antd'
import Sider from './Sider'
import Content from './Content'
import Header from './Header'
import { useRecoilValue } from 'recoil'
import { btnSize, thColor } from '@/store/Module/com'
import { FullScreenBox } from '@/components/FullScreenBox'

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

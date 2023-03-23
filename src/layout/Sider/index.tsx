import { Layout } from 'antd'
import Logo from './Logo'
import Menu from './Menu'
const { Sider } = Layout
import { collapsed } from '@/store/Module/com'
import { useRecoilValue } from 'recoil'

const LayoutSider = () => {
  const collapseds = useRecoilValue(collapsed)

  return (
    <Sider collapsible collapsed={collapseds} trigger={null} style={{ zIndex: '10' }}>
      {true ? <Logo /> : null}
      <Menu />
    </Sider>
  )
}

export default LayoutSider

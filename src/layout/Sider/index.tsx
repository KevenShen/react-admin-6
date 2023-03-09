import { Layout } from 'antd'
import Logo from './Logo'
import Menu from './Menu'
const { Sider } = Layout

const LayoutSider = () => {
  return (
    <Sider collapsible collapsed={false} trigger={null} style={{ zIndex: '10' }}>
      {true ? <Logo /> : null}
      <Menu />
    </Sider>
  )
}

export default LayoutSider

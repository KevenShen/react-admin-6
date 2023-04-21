import logo from '@/assets/images/logo.png'
import './index.less'
import { Switch } from 'antd'
import { collapsed, collbtn } from '@/store/Module/com'
import { useRecoilValue, useRecoilState } from 'recoil'
const Logo = () => {
  const [coll, setColl] = useRecoilState(collapsed)
  const btn = useRecoilValue(collbtn)

  const onChange = (checked: boolean) => {
    setColl(checked)
  }

  return (
    <div className="sidebar-logo-container">
      <img src={logo} className="sidebar-logo" alt="" />
      {btn && <Switch checked={coll} onChange={onChange} defaultChecked />}
    </div>
  )
}

export default Logo

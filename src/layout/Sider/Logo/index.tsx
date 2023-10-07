import './index.less'
import { Switch } from 'antd'
import { collapsed, collbtn } from '@/store/Module/com'
import { useRecoilValue, useRecoilState } from 'recoil'
import SvgImage from '@/components/SvgImage'
const Logo = () => {
  const [coll, setColl] = useRecoilState(collapsed)
  const btn = useRecoilValue(collbtn)

  const onChange = (checked: boolean) => {
    setColl(checked)
  }

  return (
    <div className="sidebar-logo-container">
      <SvgImage className="sidebar-logo" size="40px" name="icon-react"></SvgImage>
      {btn && <Switch checked={coll} onChange={onChange} defaultChecked />}
    </div>
  )
}

export default Logo

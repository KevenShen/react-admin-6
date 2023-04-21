import { Col, Radio, Row, Select, Switch } from 'antd'
import './index.less'
import { useRecoilState } from 'recoil'
import { collbtn, navShow, navType } from '@/store/Module/com'
const Config = () => {
  const [btn, setBtn] = useRecoilState(collbtn)
  const [nav, setNav] = useRecoilState(navType)
  const [isNav, setIsNav] = useRecoilState(navShow)
  // const [btnSize, setBtnSize] = useRecoilState(btnSize)

  return (
    <div className="config-box">
      <Row justify="space-between">
        <Col span={8}>侧边栏按钮</Col>
        <Col span={4}>
          <Switch checked={btn} onChange={(value) => setBtn(value)} defaultChecked />
        </Col>
      </Row>
      <Row justify="space-between">
        <Col span={8}>导航栏</Col>
        <Col span={4}>
          <Switch checked={isNav} onChange={(value) => setIsNav(value)} defaultChecked />
        </Col>
      </Row>
      <Row justify="space-between">
        <Col span={5}>按钮大小</Col>
        <Col span={18}>
          <Radio.Group>
            <Radio.Button value="large">大</Radio.Button>
            <Radio.Button value="middle">默认</Radio.Button>
            <Radio.Button value="small">小</Radio.Button>
          </Radio.Group>
        </Col>
      </Row>
      <Row justify="space-between">
        <Col span={8}>全局主题</Col>
        <Col span={6}>
          <Select
            // defaultValue={nav}
            style={{ width: 80 }}
            // onChange={(value) => setNav(value)}
            options={[
              { value: 'nav', label: '标签' },
              { value: 'navNimble', label: '灵动' }
            ]}
          />
        </Col>
      </Row>
      <Row justify="space-between">
        <Col span={8}>导航栏样式</Col>
        <Col span={6}>
          <Select
            defaultValue={nav}
            style={{ width: 80 }}
            onChange={(value) => setNav(value)}
            options={[
              { value: 'nav', label: '标签' },
              { value: 'navNimble', label: '灵动' }
            ]}
          />
        </Col>
      </Row>
    </div>
  )
}
export default Config

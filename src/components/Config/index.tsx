import { Col, Radio, Row, Select, Switch } from 'antd'
import './index.less'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { btnSize, collbtn, navShow, navType, thColor } from '@/store/Module/com'
import { SketchPicker } from 'react-color'
import { useState } from 'react'
const Config = () => {
  const [btn, setBtn] = useRecoilState(collbtn)
  const [nav, setNav] = useRecoilState(navType)
  const [isNav, setIsNav] = useRecoilState(navShow)
  const [btnsz, setBtnSize] = useRecoilState(btnSize)
  const [color, setColor] = useRecoilState(thColor)
  return (
    <div className="config-box">
      <Row justify="space-between" align="middle">
        <Col span={8}>侧边栏按钮</Col>
        <Col span={4}>
          <Switch checked={btn} onChange={(value) => setBtn(value)} defaultChecked />
        </Col>
      </Row>
      <Row justify="space-between" align="middle">
        <Col span={8}>导航栏</Col>
        <Col span={4}>
          <Switch checked={isNav} onChange={(value) => setIsNav(value)} defaultChecked />
        </Col>
      </Row>
      <Row justify="space-between" align="middle">
        <Col span={5}>按钮大小</Col>
        <Col span={18}>
          <Radio.Group
            optionType="button"
            buttonStyle="solid"
            defaultValue={btnsz}
            onChange={(value) => setBtnSize(value.target.value)}>
            <Radio.Button value="large">大</Radio.Button>
            <Radio.Button value="middle">默认</Radio.Button>
            <Radio.Button value="small">小</Radio.Button>
          </Radio.Group>
        </Col>
      </Row>
      <Row justify="space-between" align="middle">
        <Col span={5}>全局主题</Col>
        <Col span={18}>
          <Radio.Group
            optionType="button"
            buttonStyle="solid"
            onChange={(value) => setColor(value.target.value)}>
            <Radio style={{ backgroundColor: '#ff7588' }} value="#ff7588"></Radio>
            <Radio style={{ backgroundColor: '#16d39a' }} value="#16d39a"></Radio>
            <Radio style={{ backgroundColor: '#2196f3' }} value="#2196f3"></Radio>
            <Radio style={{ backgroundColor: '#7c4dff' }} value="#7c4dff"></Radio>
            <Radio style={{ backgroundColor: color }} value="#7c4dff"></Radio>
          </Radio.Group>
        </Col>
      </Row>
      <Row justify="space-between" align="middle">
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
      <SketchPicker color={color} onChange={(value) => setColor(value.hex)}></SketchPicker>
    </div>
  )
}
export default Config

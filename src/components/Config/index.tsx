import { Col, Radio, Row, Select, Switch } from 'antd'
import './index.less'
import { useRecoilState, useSetRecoilState } from 'recoil'
import {
  btnSize,
  collbtn,
  fullScreen,
  navShow,
  navType,
  navTypeOption,
  search,
  switchAnt,
  switchOption,
  thColor,
  tipBtn
} from '@/store/Module/com'
import { SketchPicker } from 'react-color'
import { useState } from 'react'
const Config = () => {
  const [isPicker, setPicker] = useState(false)
  const [picColor, setPicColor] = useState('')

  const [btn, setBtn] = useRecoilState(collbtn)
  const [nav, setNav] = useRecoilState(navType)
  const [isNav, setIsNav] = useRecoilState(navShow)
  const [btnsz, setBtnSize] = useRecoilState(btnSize)
  const [color, setColor] = useRecoilState(thColor)
  const [sAnt, setSAnt] = useRecoilState(switchAnt)
  const [tip, setStip] = useRecoilState(tipBtn)
  const [full, setSFull] = useRecoilState(fullScreen)
  const [seach, setSSeach] = useRecoilState(search)

  return (
    <div className="config-box">
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
          </Radio.Group>
        </Col>
      </Row>
      <Row justify="space-between" align="middle">
        <Col span={8}>自定义主题</Col>
        <Col span={14}>
          <Radio.Group optionType="button" buttonStyle="solid">
            <Radio style={{ backgroundColor: picColor }} onClick={() => setPicker(true)}>
              &nbsp;
            </Radio>
            <Radio
              style={{ backgroundColor: '#fff', color: '#000' }}
              onClick={() => {
                setColor(picColor), setPicker(false)
              }}>
              应用
            </Radio>
          </Radio.Group>
        </Col>
      </Row>
      <Row justify="space-between" align="middle">
        <Col span={8}>导航栏样式</Col>
        <Col span={6}>
          <Select
            defaultValue={nav}
            style={{ width: 80 }}
            onChange={(value: navTypeOption) => setNav(value)}
            options={[
              { value: 'nav', label: '标签' },
              { value: 'navNimble', label: '灵动' }
            ]}
          />
        </Col>
      </Row>
      <Row justify="space-between" align="middle">
        <Col span={8}>切换动画</Col>
        <Col span={6}>
          <Select
            defaultValue={sAnt}
            style={{ width: 80 }}
            onChange={(value: switchOption) => setSAnt(value)}
            options={[
              { value: 'fade', label: '消失' },
              { value: 'slide', label: '滑动' }
            ]}
          />
        </Col>
      </Row>
      <Row justify="space-between" align="middle">
        <Col span={8}>侧边栏</Col>
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
        <Col span={8}>提示</Col>
        <Col span={4}>
          <Switch checked={tip} onChange={(value) => setStip(value)} defaultChecked />
        </Col>
      </Row>
      <Row justify="space-between" align="middle">
        <Col span={8}>全屏</Col>
        <Col span={4}>
          <Switch checked={full} onChange={(value) => setSFull(value)} defaultChecked />
        </Col>
      </Row>
      <Row justify="space-between" align="middle">
        <Col span={8}>搜索</Col>
        <Col span={4}>
          <Switch checked={seach} onChange={(value) => setSSeach(value)} defaultChecked />
        </Col>
      </Row>
      {isPicker && (
        <SketchPicker
          color={picColor}
          onChange={(value) => {
            setPicColor(value.hex)
          }}></SketchPicker>
      )}
    </div>
  )
}
export default Config

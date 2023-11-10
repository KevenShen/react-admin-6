import {
  btnSize,
  collbtn,
  fullScreen,
  menuTip,
  navShow,
  navType,
  navTypeOption,
  search,
  switchAnt,
  switchOption,
  thColor,
  tipBtn
} from '@/store/Module/com'
import { Button, Col, Popover, Radio, Row, Select, Switch } from 'antd'
import { useState } from 'react'
import { SketchPicker } from 'react-color'
import { useRecoilState } from 'recoil'
import './index.less'
const Config = () => {
  const [isPicker, setPicker] = useState(false)
  const [picColor, setPicColor] = useState('')
  const [share, setshare] = useState('')
  const [title, settitle] = useState('分享码')
  const [open, setopen] = useState(false)

  const [collbtnValue, setcollbtn] = useRecoilState(collbtn)
  const [navTypeValue, setnavType] = useRecoilState(navType)
  const [navShowValue, setnavShow] = useRecoilState(navShow)
  const [btnSizeValue, setbtnSize] = useRecoilState(btnSize)
  const [thColorValue, setthColor] = useRecoilState(thColor)
  const [switchAntValue, setswitchAnt] = useRecoilState(switchAnt)
  const [tipBtnValue, settipBtn] = useRecoilState(tipBtn)
  const [fullScreenValue, setfullScreen] = useRecoilState(fullScreen)
  const [searchValue, setsearch] = useRecoilState(search)
  const [menuTipValue, setmenuTip] = useRecoilState(menuTip)

  const setFx = () => {
    const loc = window.localStorage.getItem('comStore')
    if (!loc) {
      settitle('提示')
      setshare('您没有修改任何配置无需分享')
    } else {
      const shareCode = btoa(loc)
      setshare(shareCode)
      navigator.clipboard.writeText(shareCode).then(
        function () {
          settitle('分享码已成功复制到剪贴板')
        },
        function (err) {
          settitle('请手动复制到剪切板')
        }
      )
    }
    setopen(true)
  }
  return (
    <div className="config-box">
      {/* 控制区域 */}
      <div>
        <Row justify="space-between" align="middle">
          <Col span={5}>按钮大小</Col>
          <Col span={18}>
            <Radio.Group
              optionType="button"
              buttonStyle="solid"
              defaultValue={btnSizeValue}
              onChange={(value) => setbtnSize(value.target.value)}>
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
              onChange={(value) => setthColor(value.target.value)}>
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
                  setthColor(picColor), setPicker(false)
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
              defaultValue={navTypeValue}
              style={{ width: 80 }}
              onChange={(value: navTypeOption) => setnavType(value)}
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
              defaultValue={switchAntValue}
              style={{ width: 80 }}
              onChange={(value: switchOption) => setswitchAnt(value)}
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
            <Switch checked={collbtnValue} onChange={(value) => setcollbtn(value)} defaultChecked />
          </Col>
        </Row>
        <Row justify="space-between" align="middle">
          <Col span={8}>导航栏</Col>
          <Col span={4}>
            <Switch checked={navShowValue} onChange={(value) => setnavShow(value)} defaultChecked />
          </Col>
        </Row>
        <Row justify="space-between" align="middle">
          <Col span={8}>提示</Col>
          <Col span={4}>
            <Switch checked={tipBtnValue} onChange={(value) => settipBtn(value)} defaultChecked />
          </Col>
        </Row>
        <Row justify="space-between" align="middle">
          <Col span={8}>全屏</Col>
          <Col span={4}>
            <Switch
              checked={fullScreenValue}
              onChange={(value) => setfullScreen(value)}
              defaultChecked
            />
          </Col>
        </Row>
        <Row justify="space-between" align="middle">
          <Col span={8}>搜索</Col>
          <Col span={4}>
            <Switch checked={searchValue} onChange={(value) => setsearch(value)} defaultChecked />
          </Col>
        </Row>
        <Row justify="space-between" align="middle">
          <Col span={8}>菜单提示</Col>
          <Col span={4}>
            <Switch checked={menuTipValue} onChange={(value) => setmenuTip(value)} defaultChecked />
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
      {/* 分享 */}
      <Popover
        open={open}
        onOpenChange={() => setopen(false)}
        content={share}
        title={title}
        trigger="click">
        <Button type="primary" block onClick={setFx}>
          分享配置
        </Button>
      </Popover>
    </div>
  )
}
export default Config

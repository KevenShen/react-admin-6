import Panl from '@/components/TypingCard'
import { useEffect, useRef, useState } from 'react'
import { Button, Card, Input, Popconfirm, Segmented, Space, Tabs, TabsProps, message } from 'antd'
import './index.less'
import ReactPlayer from 'react-player'
import flvjs from 'flv.js'
import { PoweroffOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import { getlivelist } from '@/api/live'
import Hls from 'hls.js'

window.Hls = Hls
const Live = () => {
  const refPlay = useRef(null)
  const [messageApi, contextHolder] = message.useMessage()
  const [reload, setReload] = useState(0) // 添加一个状态变量
  const [title, settitle] = useState('直播')
  const [inputValue, setInputValue] = useState('')

  const [url, seturl] = useState('http://127.0.0.1:8887/live/mylive2/index.m3u8')
  const myPlay = () => {
    seturl(inputValue)
    upload()
  }
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: '视频直播',
      children: 'Content of Tab Pane 1'
    },
    {
      key: '2',
      label: '录播',
      children: 'Content of Tab Pane 2'
    },
    {
      key: '3',
      label: '自定义播放',
      children: (
        <Space.Compact style={{ width: '100%' }}>
          <Input
            placeholder="请输入自定义视频地址"
            defaultValue="请输入自定义视频地址"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <Button type="primary" onClick={myPlay}>
            播放
          </Button>
        </Space.Compact>
      )
    }
  ]

  const startplay = () => {
    if (flvjs.isSupported()) {
      const videoElement = document.getElementById('myvideo')
      const flvPlayer = flvjs.createPlayer({
        type: 'flv',
        url: 'http://127.0.0.1:8887/live/mylive.flv'
      })
      flvPlayer.attachMediaElement(videoElement)
      flvPlayer.load()
      flvPlayer.play()
    }
  }

  // 重新加载直播
  const upload = () => {
    setReload(reload + 1) // 更新状态，强制重新加载视频
  }
  // 获取直播列表
  const getlist = async () => {
    const { data } = await getlivelist()
  }

  const tabsChange = (activeKey: string) => {
    const label = (items.find((item) => item.key === activeKey)?.label as string) || ''

    settitle(label)
  }

  const playError = () => {
    messageApi.open({
      type: 'error',
      content: '播放失败,请确定播放地址是否正确或重新加载播放!'
    })
  }

  useEffect(() => {
    getlist()
  }, [])

  return (
    <Panl title="工作台" source={'您的工作台'}>
      {contextHolder}
      <div className="live-box">
        <Card title="聊天" bordered={false} style={{ width: 300 }}>
          <p>Card content</p>
        </Card>
        <div className="live-content">
          <Card title={title} bordered={false}>
            <div className="live-video">
              <ReactPlayer
                ref={refPlay}
                key={reload} // 将key设置为状态变量
                className="live-player"
                onError={playError}
                url={url}
                config={{
                  file: {
                    attributes: {
                      poster:
                        'https://gitee.com/jiuxiangyangguang/myimg/raw/master/tree/master/c759ef18204881fd870e0450ddf50b0.jpg1695697934393' // 将此URL替换为你的封面图像URL
                    },
                    hlsOptions: { autoStartLoad: true }, // HLS.js选项
                    hlsVersion: '1.4.12', // HLS.js版本（可选）
                    forceHLS: true // 强制HLS播放（可选）
                  }
                }}
                controls
                playing
              />
            </div>
          </Card>
          <Card title="" bordered={false}>
            <Tabs defaultActiveKey="1" onChange={tabsChange} items={items} />
          </Card>
        </div>

        <div className="live-info">
          <Card title="直播数据" bordered={false} style={{ width: 300 }}>
            <p>Card content</p>
          </Card>
          <Card title="快捷操作" bordered={false} style={{ width: 300 }}>
            <Segmented options={['普通', '超清']} />
            <Button block type="dashed" onClick={upload} style={{ marginTop: '10px' }}>
              重新加载
            </Button>
            <Button block type="dashed" style={{ marginTop: '10px' }}>
              全屏播放
            </Button>
            <Popconfirm
              title="关闭直播"
              description="确定关闭直播吗?"
              icon={<QuestionCircleOutlined style={{ color: 'red' }} />}>
              <Button
                style={{ marginTop: '10px' }}
                block
                type="dashed"
                danger
                icon={<PoweroffOutlined />}>
                关闭直播
              </Button>
            </Popconfirm>
          </Card>
        </div>
      </div>
    </Panl>
  )
}

export default Live

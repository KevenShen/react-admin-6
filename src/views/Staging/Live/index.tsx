import Panl from '@/components/TypingCard'
import { useEffect, useState } from 'react'
import { Button, Card, Popconfirm, Segmented, Tabs, TabsProps } from 'antd'
import './index.less'
import ReactPlayer from 'react-player'
import flvjs from 'flv.js'
import { PoweroffOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import { getlivelist } from '@/api/live'
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
  }
]
const Live = () => {
  const [reload, setReload] = useState(0) // 添加一个状态变量
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
  // 启动服务

  useEffect(() => {
    getlist()
  }, [])

  return (
    <Panl title="工作台" source={'您的工作台'}>
      <div className="live-box">
        <Card title="聊天" bordered={false} style={{ width: 300 }}>
          <p>Card content</p>
        </Card>
        <div className="live-content">
          <Card title="直播" bordered={false}>
            <div className="live-video">
              <ReactPlayer
                key={reload} // 将key设置为状态变量
                className="live-player"
                url="http://127.0.0.1:8887/live/mylive_360.flv"
                config={{
                  file: {
                    attributes: {
                      poster:
                        'https://gitee.com/jiuxiangyangguang/myimg/raw/master/tree/master/c759ef18204881fd870e0450ddf50b0.jpg1695697934393' // 将此URL替换为你的封面图像URL
                    }
                  }
                }}
                controls
                playing
              />
              {/* <video className="live-player" id="myvideo"></video> */}
            </div>
          </Card>
          <Card title="" bordered={false}>
            <Tabs defaultActiveKey="1" items={items} />
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

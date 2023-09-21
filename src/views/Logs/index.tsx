import Panl from '@/components/TypingCard'
import { Radio, Select, Space } from 'antd'
import { useEffect, useState } from 'react'
import { SmileTwoTone } from '@ant-design/icons'
import './index.less'
import { getLogList } from '@/api/logs'
import TextArea from 'antd/es/input/TextArea'
const Logs = () => {
  const [value, setvalue] = useState('access')
  const [list, setlist] = useState([])
  const [log, setlog] = useState('')
  const getList = async (item) => {
    setlog('')
    const eventSource = new EventSource(`api/logs/detail?name=${item}`)
    eventSource.onmessage = (event) => {
      setlog(value + event.data.replace(/\n/g, '<br />'))
    }
    eventSource.onerror = (event) => {
      eventSource.close()
      setlog('文件不存在')
      console.log(event)
    }

    return () => {
      eventSource.close()
    }
  }
  const radioChange = async (e) => {
    setvalue(e.target.value)
  }
  useEffect(() => {
    ;(async () => {
      // 在这里执行您想要在状态更新后执行的操作
      const { data } = await getLogList(value)
      const list = data.map((item) => {
        return { value: item, label: item }
      })
      setlist(list)
    })()
  }, [value])

  const text = ''

  return (
    <Panl title="日志信息" source={'日志信息'}>
      <div className="app-card logs" style={{ height: '100%' }}>
        <div className="logs-header">
          <Radio.Group value={value} onChange={radioChange}>
            <Radio.Button value="access">成功</Radio.Button>
            <Radio.Button value="errors">失败</Radio.Button>
            <Radio.Button value="app-out">app</Radio.Button>
          </Radio.Group>

          <Select onChange={getList} style={{ width: 240 }} options={list} />
        </div>
        <div className="logs-body">
          <TextArea rows={4} value={log} />
        </div>
      </div>
    </Panl>
  )
}

export default Logs

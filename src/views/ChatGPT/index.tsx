import { Mes } from '@/Type'
import getGPT from '@/api/chatgpt'
import Panl from '@/components/Panl'
import { chatGPTMes } from '@/store/Module/chatGPT'
import { Input } from 'antd'
import { useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import Box from './Box'
import './index.less'
const { Search } = Input

function ChatGPT() {
  const [gptMes, setGptMes] = useRecoilState(chatGPTMes)
  const [value, setValue] = useState('')
  const [lod, setLod] = useState(false)
  const input = useRef(document.createElement('input'))
  const onSearch = async (value: string) => {
    input.current.blur()
    if (!value) return
    const arr: Array<Mes> = [
      ...gptMes,
      { role: 'user', content: value, time: new Date().getTime() }
    ]
    setValue('') // 重置
    setGptMes(arr)
    setLod(true)
    const gptData = arr.map((item) => {
      return { role: item.role, content: item.content }
    })
    // 发请求时不需要time否则chatgpt会报错
    const { data }: any = await getGPT(gptData).catch((e) => {
      setLod(false)
      console.log(e)
    })
    const assistant = data.choices[0]?.message
    setLod(false)
    setGptMes([
      ...arr,
      { role: assistant.role, content: assistant.content, time: new Date().getTime() }
    ])
  }

  return (
    <Panl title="openAI 交互" source={'ChatGPT模型'}>
      <div className="app-card chat">
        {/* 内容盒子 */}
        <Box></Box>
        <Search
          ref={input}
          className="chat-search"
          placeholder="请输入你的问题"
          allowClear
          value={value}
          enterButton={lod ? '' : '发送'}
          loading={lod}
          onChange={(e) => setValue(e.target.value.trim())}
          onSearch={onSearch}
        />
      </div>
    </Panl>
  )
}

export default ChatGPT

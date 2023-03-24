import { useRef, useEffect } from 'react'
import { Card } from 'antd'
import Typing from '@/utils/typing'

const Panl = (props: { title: any; source: any; children: any; className: any }) => {
  const { title, source, children, className } = props

  const sourceEl = useRef()
  const outputEl = useRef()

  useEffect(() => {
    const typing = new Typing({
      source: sourceEl.current,
      output: outputEl.current,
      delay: 30
    })
    typing.start()
  }, [])
  return (
    <div className="card-wrapper">
      <Card bordered={false} className="card-item" title={title}>
        <div
          style={{ display: 'none' }}
          ref={sourceEl}
          dangerouslySetInnerHTML={{ __html: source }}
        />
        <div ref={outputEl} />
      </Card>
      <div className={className} style={{ flex: 1 }}>
        {children}
      </div>
    </div>
  )
}

export default Panl

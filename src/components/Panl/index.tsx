import { menuTip } from '@/store/Module/com'
import Typing from '@/utils/typing'
import { Card } from 'antd'
import { useEffect, useRef } from 'react'
import { useRecoilValue } from 'recoil'
import './index.less'

const Panl = (props: { title: any; source: any; children: any; className?: any }) => {
  const { title, source, children, className } = props

  const sourceEl = useRef()
  const outputEl = useRef()
  const menuTipValue = useRecoilValue(menuTip)
  useEffect(() => {
    if (menuTipValue) {
      const typing = new Typing({
        source: sourceEl.current,
        output: outputEl.current,
        delay: 30
      })
      typing.start()
    }
  }, [menuTipValue])
  return (
    <div className="card-wrapper">
      {menuTipValue && (
        <Card bordered={false} className="card-item" title={title}>
          <div
            style={{ display: 'none' }}
            ref={sourceEl}
            dangerouslySetInnerHTML={{ __html: source }}
          />
          <div ref={outputEl} />
        </Card>
      )}
      <div className={className} style={{ flex: 1 }}>
        {children}
      </div>
    </div>
  )
}

export default Panl

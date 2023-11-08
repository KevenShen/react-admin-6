import Panl from '@/components/TypingCard'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from 'antd'
import './index.less'
import { CloseCircleOutlined } from '@ant-design/icons'
import AntVOne from './components/AntVOne'

const Home = () => {
  const [selectedId, setSelectedId] = useState('')

  return (
    <Panl title="主页" source={'主页可以作为您的工作台'}>
      <div className="card-layout">
        <div className="card-box">
          <motion.div layoutId={'1'} onClick={() => setSelectedId('1')}>
            <Card title="数据展示" bordered={false}>
              <AntVOne></AntVOne>
            </Card>
          </motion.div>
          <motion.div layoutId={'2'} onClick={() => setSelectedId('2')}>
            <Card title="直播数据" bordered={false} style={{ width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </motion.div>
          <motion.div layoutId={'3'} onClick={() => setSelectedId('3')}>
            <Card title="收益数据" bordered={false} style={{ width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </motion.div>
        </div>
        <AnimatePresence>
          {selectedId && (
            <div className="mask-card-box">
              <motion.div layoutId={selectedId}>
                <Card
                  title="Card title"
                  extra={
                    <CloseCircleOutlined
                      onClick={() => {
                        setSelectedId('')
                      }}
                    />
                  }
                  bordered={false}
                  style={{ width: 400 }}>
                  <p>{selectedId}</p>
                </Card>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
        {selectedId && <div className="mask-f"></div>}
      </div>
    </Panl>
  )
}

export default Home

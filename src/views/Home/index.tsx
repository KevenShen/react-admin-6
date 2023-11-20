import { CountUp, Panl } from '@/components'
import { CloseCircleOutlined, PayCircleOutlined, SketchOutlined } from '@ant-design/icons'
import { AnimatePresence, motion } from 'framer-motion'
import AntVTwo from './components/AntTwo'
import AntVOne from './components/AntVOne'
import DragM from './components/DragM'
import './index.less'
const Home = () => {
  const [selectedId, setSelectedId] = useState('')

  return (
    <Panl title="主页" className="apex-home" source={'主页可以作为您的工作台'}>
      <div className="card-layout-home">
        <div className="card-box">
          <motion.div className="card-sy" layoutId={'1'} onClick={() => setSelectedId('1')}>
            <Card title="总收益" bordered={false}>
              <AntVOne></AntVOne>
            </Card>
          </motion.div>
          <div className="card-center-box">
            <div className="df">
              <motion.div layoutId={'2'} onClick={() => setSelectedId('2')}>
                <Card title="收益" bordered={false}>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Statistic
                        title="昨收 (CNY)"
                        prefix={<PayCircleOutlined />}
                        valueStyle={{ color: '#cf1322' }}
                        value={1183.0}
                        precision={2}
                        formatter={CountUp}
                      />
                    </Col>
                    <Col span={12}>
                      <Statistic
                        title="今收 (CNY)"
                        prefix={<PayCircleOutlined />}
                        valueStyle={{ color: '#cf1322' }}
                        value={5000.0}
                        precision={2}
                        formatter={CountUp}
                      />
                    </Col>
                  </Row>
                </Card>
              </motion.div>
              <motion.div layoutId={'3'} onClick={() => setSelectedId('3')}>
                <Card title="销量" bordered={false}>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Statistic
                        title="总销量(件)"
                        prefix={<SketchOutlined />}
                        value={68594}
                        precision={2}
                        formatter={CountUp}
                      />
                    </Col>
                    <Col span={12}>
                      <Statistic
                        title="今日销量(件)"
                        prefix={<SketchOutlined />}
                        value={50}
                        precision={2}
                        formatter={CountUp}
                      />
                    </Col>
                  </Row>
                </Card>
              </motion.div>
            </div>
            <motion.div className="chant" layoutId={'4'} onClick={() => setSelectedId('4')}>
              <Card title="占比" bordered={false}>
                <AntVTwo></AntVTwo>
              </Card>
            </motion.div>
          </div>
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
      <Card title="模块拖拽" bordered={false}>
        <DragM></DragM>
      </Card>
    </Panl>
  )
}

export default Home

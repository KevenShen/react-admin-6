import { Collapse } from 'antd'
const { Panel } = Collapse
import './index.less'

const CollCard = (props: { title: any; children: any; className?: any; style?: any }) => {
  const { title, children, className, style } = props
  return (
    <Collapse
      defaultActiveKey={[title]}
      expandIconPosition="end"
      className={'collcard ' + className}
      style={style}
    >
      <Panel key={title} header={title}>
        {children}
      </Panel>
    </Collapse>
  )
}

export default CollCard

import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Layout } from 'antd'
import { useLocation, useOutlet } from 'react-router-dom'
const { Content } = Layout

const Contents = () => {
  const location = useLocation()
  const current = useOutlet()
  return (
    <TransitionGroup style={{ flex: 1 }}>
      <CSSTransition timeout={500} key={location.pathname} classNames="fade" exit={false}>
        <Content
          style={{
            padding: '16px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}>
          {current}
        </Content>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default Contents

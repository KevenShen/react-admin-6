import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Layout } from 'antd'
import { Outlet, useLocation } from 'react-router-dom'
const { Content } = Layout

const Contents = () => {
  // const l = useLocation() // 只要变化就会导致组件重新渲染   子组件也会重新渲染一次
  return (
    <TransitionGroup style={{ flex: 1 }}>
      <CSSTransition timeout={500} key={Math.random()} classNames="fade" exit={false}>
        <Content
          style={{
            padding: '16px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}>
          <Outlet />
        </Content>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default Contents

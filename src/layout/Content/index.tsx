import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Layout } from 'antd'
import { useLocation, useOutlet } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { switchAnt } from '@/store/Module/com'

const { Content } = Layout

const Contents = () => {
  const location = useLocation()
  const current = useOutlet()
  const ant = useRecoilValue(switchAnt)

  return (
    <TransitionGroup
      style={{
        flex: 1,
        overflow: 'hidden',
        whiteSpace: 'nowrap'
      }}>
      <CSSTransition timeout={300} key={location.pathname} classNames={ant}>
        <Content
          style={{
            padding: '16px',
            height: '100%'
          }}>
          {current}
        </Content>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default Contents

import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Layout } from 'antd'
import { useLocation, useOutlet } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { switchAnt } from '@/store/Module/com'
import KeepAlive from 'react-activation'
const { Content } = Layout
import { AliveScope } from 'react-activation'

const Contents = () => {
  const location = useLocation()
  const current = useOutlet()
  const ant = useRecoilValue(switchAnt)

  // 使用KeepAlive  要将模态框设置成非强制渲染  模态框是全屏的有背景颜色导致切换缓存页面会闪现模态框背景颜色
  return (
    <AliveScope>
      <TransitionGroup
        style={{
          flex: 1,
          overflowY: 'scroll'
        }}
      >
        <CSSTransition
          timeout={300}
          key={location.pathname}
          mountOnEnter
          unmountOnExit
          classNames={ant}
        >
          <Content
            style={{
              padding: '16px',
              height: '100%'
            }}
          >
            <KeepAlive saveScrollPosition={false} name={location.pathname}>
              {current}
            </KeepAlive>
          </Content>
        </CSSTransition>
      </TransitionGroup>
    </AliveScope>
  )
}

export default Contents

import { LeftOutlined, RightOutlined, CloseOutlined } from '@ant-design/icons'
import './index.less'
import { useEffect, useRef, useState } from 'react'
import useTab from '@/hooks/useTab'
import { useLocation, useNavigate } from 'react-router-dom'
import SvgImage from '@/components/SvgImage'
import { theme, ThemeType } from 'antd'
const { useToken } = theme
interface HistoryList {
  pathname: string
  name: string
}
const Tags = () => {
  const { token }: { token: ThemeType } = useToken()
  const navigate = useNavigate()
  const [activeKey, setActiveKey] = useState('')
  const [historyList, removeTab] = useTab()
  const location = useLocation()
  const boxRef = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState(false)
  useEffect(() => {
    setActiveKey(location.pathname)
  }, [location.pathname])
  const deltab = async (pathname: string) => {
    console.log(historyList)
    if (pathname === '/home') return
    const newHistoryList = (await removeTab(pathname)) as unknown as Array<HistoryList>
    if (!newHistoryList.length) return navigate('/')
    navigate(newHistoryList[newHistoryList.length - 1].pathname)
  }

  const isActive = (pathname: string) => {
    return pathname === activeKey
  }
  useEffect(() => {
    const box = boxRef.current
    if (!box) return
    setTimeout(() => {
      if (box.scrollHeight > box.clientHeight || box.scrollWidth > box.clientWidth) {
        setShow(true)
      } else {
        setShow(false)
      }
    })
    const resizeObserver = new ResizeObserver(() => {
      if (box.scrollHeight > box.clientHeight || box.scrollWidth > box.clientWidth) {
        setShow(true)
      } else {
        setShow(false)
      }
    })

    resizeObserver.observe(box)

    return () => {
      resizeObserver.disconnect()
    }
  }, [location.pathname])
  return (
    <div className="leftBox">
      <div className="tabs-nav">
        {show && (
          <LeftOutlined
            onClick={() => boxRef.current?.scrollBy({ left: -80, behavior: 'smooth' })}
          />
        )}
        <div className="tabs-nav-wrap" ref={boxRef}>
          <div className="tabs-nav-list">
            {historyList.map((item) => (
              <div
                className="tabs-nav-box ant-tabs"
                key={item.pathname + item.state}
                onClick={() => navigate(item.pathname)}
              >
                <div
                  className={
                    (isActive(item.pathname) ? 'ant-tabs-tab-active' : '') + '  ant-tabs-tab'
                  }
                >
                  {item.icon && (
                    <SvgImage
                      name={item.icon}
                      size="14px"
                      fill={activeKey === item.pathname ? '#1677ff' : '#000'}
                    ></SvgImage>
                  )}
                  <span className="ant-tabs-tab-btn">{item.name}</span>
                  {item.pathname !== '/home' && (
                    <CloseOutlined
                      className="close-icon"
                      onClick={() => deltab(item.pathname)}
                      style={{
                        marginLeft: '5px'
                      }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        {show && (
          <RightOutlined
            onClick={() => boxRef.current?.scrollBy({ left: 80, behavior: 'smooth' })}
          />
        )}
      </div>
    </div>

    // <Tabs
    //   className="header-tags "
    //   hideAdd
    //   tabPosition="top"
    //   activeKey={activeKey}
    //   onTabClick={(key) => navigate(key)}
    //   onChange={(activeKey) => setActiveKey(activeKey)}
    //   style={{ height: '50px' }}
    //   items={historyList.map((_, i) => {
    //     return {
    //       label: (
    //         <span className="tabName">
    //           <SvgImage
    //             name={_.icon}
    //             size="14px"
    //             fill={activeKey === _.pathname ? '#1677ff' : '#000'}></SvgImage>
    //           {_.name}
    //           <CloseOutlined
    //             onClick={() => deltab(_.pathname)}
    //             style={{
    //               opacity: activeKey === _.pathname && activeKey !== '/home' ? 1 : 0,
    //               marginLeft: '5px'
    //             }}
    //           />
    //         </span>
    //       ),
    //       key: _.pathname
    //     }
    //   })}
    // />
  )
}

export default Tags

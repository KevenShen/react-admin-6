import { AndroidOutlined, CloseOutlined } from '@ant-design/icons'
import { Tabs } from 'antd'

import './index.less'
import { useEffect, useState } from 'react'
import useTab from '@/hooks/useTab'
import { useLocation, useNavigate } from 'react-router-dom'
interface HistoryList {
  pathname: string
  name: string
}
const Tags = () => {
  const navigate = useNavigate()
  const [activeKey, setActiveKey] = useState('')
  const [historyList, removeTab] = useTab()
  const location = useLocation()
  useEffect(() => {
    setActiveKey(location.pathname)
  }, [location.pathname])
  const deltab = async (pathname: string) => {
    if (pathname === '/home') return
    const newHistoryList = (await removeTab(pathname)) as unknown as Array<HistoryList>
    if (!newHistoryList.length) return navigate('/')
    navigate(newHistoryList[newHistoryList.length - 1].pathname)
  }
  return (
    <div className="header-tags">
      <Tabs
        tabPosition="top"
        activeKey={activeKey}
        onTabClick={(key) => navigate(key)}
        onChange={(activeKey) => setActiveKey(activeKey)}
        style={{ height: '50px' }}
        items={historyList.map((_, i) => {
          return {
            label: (
              <span className="tabName">
                {_.name}
                <CloseOutlined
                  onClick={() => deltab(_.pathname)}
                  style={{
                    opacity: activeKey === _.pathname && activeKey !== '/home' ? 1 : 0,
                    marginLeft: '5px'
                  }}
                />
              </span>
            ),
            key: _.pathname
          }
        })}
      />
    </div>
  )
}

export default Tags

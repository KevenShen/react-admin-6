import { menu } from '@/store/Module/user'
import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

interface HistoryList {
  pathname: string
  name: string
  icon?: string
  state?: any
}

function findname(arr: string | any[], name: string) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].path === name) {
      return arr[i]
    } else if (arr[i].children) {
      const childerName = findname(arr[i].children, name)
      if (childerName) return childerName
    }
  }
}
export default function useTab(): [HistoryList[], (pathname: string) => void] {
  const menuArr = useRecoilValue(menu)
  const [historyList, setHistoryList] = useState<HistoryList[]>([
    { pathname: '/home', name: '主页' }
  ])
  const location = useLocation()

  useEffect(() => {
    const menu = findname(menuArr, location.pathname)
    if (menu.redirectTo) return // 又重定向就是父菜单不展示tabs
    setHistoryList((prev) => {
      const index = prev.findIndex((item) => item.pathname === location.pathname)
      if (index !== -1) {
        const newHistoryList = [...prev]
        newHistoryList[index] = { ...location, ...menu }
        return newHistoryList
      }

      return [...prev, { ...location, ...menu }]
    })
  }, [location.pathname])

  function removeTab(pathname: string) {
    return new Promise((resolve) => {
      setHistoryList((prevHistoryList) => {
        const newHistoryList = prevHistoryList.filter((item) => item.pathname !== pathname)
        resolve(newHistoryList)
        return newHistoryList
      })
    })
  }

  return [historyList, removeTab]
}

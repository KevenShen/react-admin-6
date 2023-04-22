// 全局状态  用户自定义状态等
import { Router, User } from '@/Type'
import { SizeType } from 'antd/es/config-provider/SizeContext'
import { atom } from 'recoil'

import { recoilPersist } from 'recoil-persist'
//Recoil持久化存储，默认为localStroge
const { persistAtom } = recoilPersist({ key: 'comStore' })

// menu 是否展开
export const collapsed = atom<boolean>({
  key: 'collapsed',
  default: false,
  effects_UNSTABLE: [persistAtom]
})

// 侧边栏按钮是否显示
export const collbtn = atom<boolean>({
  key: 'collbtn',
  default: false,
  effects_UNSTABLE: [persistAtom]
})

// 导航栏是否显示
export const navShow = atom<boolean>({
  key: 'navShow',
  default: false,
  effects_UNSTABLE: [persistAtom]
})

// 按钮大小
export const btnSize = atom<SizeType>({
  key: 'btnSize',
  default: 'middle',
  effects_UNSTABLE: [persistAtom]
})

// 导航栏样式
export const navType = atom<string | 'nav' | 'navNimble'>({
  key: 'navType',
  default: 'navNimble',
  effects_UNSTABLE: [persistAtom]
})

export const thColor = atom<string>({
  key: 'thColor',
  default: '#7c4dff',
  effects_UNSTABLE: [persistAtom]
})

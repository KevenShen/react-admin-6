// 全局状态  用户自定义状态等
import { SizeType } from 'antd/es/config-provider/SizeContext'
import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'
//Recoil持久化存储，默认为localStroge
const { persistAtom } = recoilPersist({ key: 'comStore' })

// 公共设置

export type navTypeOption = 'nav' | 'navNimble'
export type switchOption = 'fade' | 'slide'
// menu 是否展开
export const collapsed = atom<boolean>({
  key: 'collapsed',
  default: true,
  effects_UNSTABLE: [persistAtom]
})

// 侧边栏按钮是否显示
export const collbtn = atom<boolean>({
  key: 'collbtn',
  default: true,
  effects_UNSTABLE: [persistAtom]
})

// 导航栏是否显示
export const navShow = atom<boolean>({
  key: 'navShow',
  default: true,
  effects_UNSTABLE: [persistAtom]
})

// 按钮大小
export const btnSize = atom<SizeType>({
  key: 'btnSize',
  default: 'middle',
  effects_UNSTABLE: [persistAtom]
})

// 导航栏样式
export const navType = atom<navTypeOption>({
  key: 'navType',
  default: 'navNimble',
  effects_UNSTABLE: [persistAtom]
})

// 主题颜色
export const thColor = atom<string>({
  key: 'thColor',
  default: '#7c4dff',
  effects_UNSTABLE: [persistAtom]
})

// 切换动画
export const switchAnt = atom<switchOption>({
  key: 'switchAnt',
  default: 'fade',
  effects_UNSTABLE: [persistAtom]
})

// 提示
export const tipBtn = atom<boolean>({
  key: 'tipBtn',
  default: true,
  effects_UNSTABLE: [persistAtom]
})

// 全屏
export const fullScreen = atom<boolean>({
  key: 'fullScreen',
  default: true,
  effects_UNSTABLE: [persistAtom]
})
// 搜索
export const search = atom<boolean>({
  key: 'search',
  default: true,
  effects_UNSTABLE: [persistAtom]
})
// 搜索
export const menuTip = atom<boolean>({
  key: 'menuTip',
  default: true,
  effects_UNSTABLE: [persistAtom]
})

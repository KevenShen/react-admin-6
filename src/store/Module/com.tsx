// 全局状态  用户自定义状态等
import { Router, User } from '@/Type'
import { atom } from 'recoil'

import { recoilPersist } from 'recoil-persist'
//Recoil持久化存储，默认为localStroge
const { persistAtom } = recoilPersist({ key: 'comStore' })

export const collapsed = atom<boolean>({
  key: 'collapsed',
  default: false,
  effects_UNSTABLE: [persistAtom]
})

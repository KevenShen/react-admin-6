import { Router, User } from '@/Type'
import { atom } from 'recoil'

import { recoilPersist } from 'recoil-persist'
//Recoil持久化存储，默认为localStroge
const { persistAtom } = recoilPersist()

export const userInfo = atom<User>({
  key: 'userInfo',
  default: {},
  effects_UNSTABLE: [persistAtom]
})

export const menus = atom<Array<Router>>({
  key: 'menus',
  default: [],
  effects_UNSTABLE: [persistAtom]
})

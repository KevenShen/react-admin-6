import { Router, User } from '@/Type'
import { atom } from 'recoil'

import { recoilPersist } from 'recoil-persist'
//Recoil持久化存储，默认为localStroge
const { persistAtom } = recoilPersist({ key: 'user' })
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

export const token = atom<string>({
  key: 'token',
  default: '',
  effects_UNSTABLE: [persistAtom]
})

export const menu = atom<[]>({
  key: 'menu',
  default: [],
  effects_UNSTABLE: [persistAtom]
})
export const router = atom({
  key: 'router',
  default: [],
  effects_UNSTABLE: [persistAtom]
})

export interface Router {
  name?: string
  path?: string
  children?: Array<Router>
  element?: any
  isMenu?: boolean
  redirect?: any
}

export interface User {
  username?: string // 唯一值   liming
  nickname?: string // 昵称 李明
  id?: string
  avatar?: string //头像
  role?: Array<number> // 用户角色
}

export interface Mes {
  role?: 'user' | 'assistant'
  content: string
  time: string | number
}
export interface chatcmpl {
  choices: Array<Mes>
}

export interface Color {
  color: string
  name: string // 颜色类型
  describe: string // 描述
}
// 任务列表
export interface TaskList {
  color: string
  name: string // 颜色类型
  describe: string // 描述
  value: string // 事件描述
}

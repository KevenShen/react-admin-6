import { Mes } from '@/Type'
import { atom, selector } from 'recoil'
import MarkdownIt from 'markdown-it'
import mdKatex from 'markdown-it-katex'
import mdHighlight from 'markdown-it-highlightjs'
const htmlString = (message: string) => {
  const md = MarkdownIt().use(mdKatex).use(mdHighlight)
  if (!message) return ''
  return md.render(message)
}
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist({ key: 'chatgpt' })

export const chatGPTMes = atom<Mes[]>({
  key: 'chatGPTMes',
  default: [],
  effects_UNSTABLE: [persistAtom]
})

export const messGPT = selector({
  key: 'messGPT',
  get: ({ get }) => {
    const chat = get(chatGPTMes)
    return chat.map((msg) => {
      return { role: msg.role, content: htmlString(msg.content), time: msg.time }
    })
  }
})

import { y as h, b as T, r as c, j as r, d as B, I as C } from './index-7ec5c925.js'
import { P } from './index-75272ee3.js'
import { c as b, B as j } from './Box-2a066153.js'
import './PlusOutlined-b08ffc51.js'
const v = { model: 'gpt-3.5-turbo', max_tokens: 1e3, temperature: 0 },
  d = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer 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'
  }
h.create({ baseURL: 'https://api.openai.com/v1/chat/completions', timeout: 5e3, headers: d })
function G(o) {
  const t = { ...v, messages: o }
  return h.post('https://api.openai.com/v1/chat/completions', t, { headers: d })
}
const { Search: N } = C
function M() {
  const [o, t] = T(b),
    [f, i] = c.useState(''),
    [l, n] = c.useState(!1),
    p = c.useRef(document.createElement('input'))
  return r(P, {
    title: 'openAI 交互',
    source: 'ChatGPT模型',
    children: B('div', {
      className: 'app-card chat',
      children: [
        r(j, {}),
        r(N, {
          ref: p,
          className: 'chat-search',
          placeholder: '请输入你的问题',
          allowClear: !0,
          value: f,
          enterButton: l ? '' : '发送',
          loading: l,
          onChange: (e) => i(e.target.value.trim()),
          onSearch: async (e) => {
            var m
            if ((p.current.blur(), !e)) return
            const s = [...o, { role: 'user', content: e, time: new Date().getTime() }]
            i(''), t(s), n(!0)
            const g = s.map((a) => ({ role: a.role, content: a.content })),
              { data: x } = await G(g).catch((a) => {
                n(!1), console.log(a)
              }),
              u = (m = x.choices[0]) == null ? void 0 : m.message
            n(!1), t([...s, { role: u.role, content: u.content, time: new Date().getTime() }])
          }
        })
      ]
    })
  })
}
export { M as default }
//# sourceMappingURL=index-4ec7e21c.js.map

import { J as S, r as n, j as e, d as c, L as r, M as y, T as f } from './index-7ec5c925.js'
import { P as x } from './index-75272ee3.js'
import './PlusOutlined-b08ffc51.js'
function L(t) {
  return S({ url: `/logs/list?type=${t}`, method: 'get' })
}
const B = () => {
  const [t, d] = n.useState('access'),
    [g, i] = n.useState([]),
    [p, l] = n.useState(''),
    [h, u] = n.useState(null),
    v = async (s) => {
      u(s), l('')
      const a = new EventSource(`api/logs/detail?name=${s}`)
      return (
        (a.onmessage = (o) => {
          l(t + o.data.replace(/\n/g, '<br />'))
        }),
        (a.onerror = (o) => {
          a.close(), l('文件不存在')
        }),
        () => {
          a.close()
        }
      )
    },
    m = async (s) => {
      l(''), i([]), u(null), d(s.target.value)
    }
  return (
    n.useEffect(() => {
      ;(async () => {
        const { data: s } = await L(t),
          a = s.map((o) => ({ value: o, label: o }))
        i(a)
      })()
    }, [t]),
    e(x, {
      title: '日志信息',
      source: '日志信息',
      children: c('div', {
        className: 'app-card logs',
        style: { height: '100%' },
        children: [
          c('div', {
            className: 'logs-header',
            children: [
              c(r.Group, {
                value: t,
                onChange: m,
                children: [
                  e(r.Button, { value: 'access', children: '成功' }),
                  e(r.Button, { value: 'error', children: '失败' }),
                  e(r.Button, { value: 'app', children: 'app' })
                ]
              }),
              e(y, { onChange: v, style: { width: 240 }, value: h, options: g })
            ]
          }),
          e('div', { className: 'logs-body', children: e(f, { rows: 4, value: p }) })
        ]
      })
    })
  )
}
export { B as default }
//# sourceMappingURL=index-3316e155.js.map

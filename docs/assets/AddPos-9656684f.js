import { r as a, as as o, j as t, at as g, d as x } from './index-7ec5c925.js'
import { p as b } from './menu-40c162b1.js'
import { c as y } from './user-d95f46ea.js'
import { A as S } from './index-a65e002a.js'
const w = (d, i) => {
    const [n] = o.useForm(),
      [A, r] = a.useState(''),
      [u, c] = a.useState([]),
      [p, l] = a.useState(!1),
      [m, F] = a.useState(!1)
    a.useImperativeHandle(i, () => ({
      showModal: (e) => {
        l(!0)
      }
    }))
    const f = async () => {
        try {
          const e = await y({ userpos: { user_id: d.id, posId: n.getFieldsValue().posid } })
        } catch (e) {
          console.log('Failed:', e)
        }
      },
      h = async () => {
        const { data: e } = await b()
        c(e.map((s) => ({ label: s.name, value: s.name, id: s.id })))
      }
    a.useEffect(() => {
      h()
    }, [])
    const C = (e, s) => {
      r(s.label), n.setFieldValue('posid', s.id)
    }
    return t(g, {
      title: '新增用户岗位',
      open: p,
      onOk: f,
      destroyOnClose: !0,
      getContainer: !1,
      confirmLoading: m,
      onCancel: () => {
        l(!1)
      },
      children: x(o, {
        form: n,
        style: { padding: '10px 60px 10px 0' },
        labelCol: { span: 6 },
        name: 'basic',
        initialValues: { remember: !0 },
        autoComplete: 'off',
        children: [
          t(o.Item, {
            label: '选择岗位',
            name: 'username',
            rules: [{ required: !0, message: 'Please input your username!' }],
            children: t(S, {
              options: u,
              onSelect: C,
              onSearch: (e) => r(e),
              placeholder: 'input here'
            })
          }),
          t(o.Item, { name: 'posid', hidden: !0 })
        ]
      })
    })
  },
  j = a.forwardRef(w)
export { j as default }
//# sourceMappingURL=AddPos-9656684f.js.map

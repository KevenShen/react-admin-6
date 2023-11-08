import { r as e, as as o, j as t, at as C, d as g, I } from './index-7ec5c925.js'
import { b as x } from './user-d95f46ea.js'
import { A as S } from './index-a65e002a.js'
function V(l, u, n) {
  const [a, d] = e.useState(l)
  return (
    e.useEffect(() => {
      const c = setTimeout(() => {
        d(l)
      }, u)
      return () => {
        clearTimeout(c)
      }
    }, [l, u]),
    e.useEffect(() => {
      a && n(a)
    }, [a]),
    a
  )
}
const y = (l, u) => {
    const [n] = o.useForm(),
      [a, d] = e.useState(''),
      [c, m] = e.useState([]),
      [p, i] = e.useState(!1),
      [f, O] = e.useState(!1)
    e.useImperativeHandle(u, () => ({
      showModal: (r) => {
        i(!0)
      }
    }))
    const h = async () => {}
    V(a, 1e3, async () => {
      const { data: r } = await x({ name: a })
      m(r.map((s) => ({ label: s.username, value: s.username, id: s.id })))
    })
    const b = (r, s) => {
      d(s.label), n.setFieldValue('userId', s.id), console.log(n.getFieldsValue(), s.id)
    }
    return t(C, {
      title: '新增用户岗位',
      open: p,
      onOk: h,
      destroyOnClose: !0,
      getContainer: !1,
      confirmLoading: f,
      onCancel: () => {
        i(!1)
      },
      children: g(o, {
        form: n,
        style: { padding: '10px 60px 10px 0' },
        labelCol: { span: 6 },
        name: 'basic',
        initialValues: { remember: !0 },
        autoComplete: 'off',
        children: [
          t(o.Item, {
            label: '选择用户',
            name: 'username',
            rules: [{ required: !0, message: 'Please input your username!' }],
            children: t(S, {
              options: c,
              onSelect: b,
              onSearch: (r) => d(r),
              placeholder: 'input here'
            })
          }),
          t(o.Item, { name: 'userId', hidden: !0 }),
          t(o.Item, {
            label: '用户昵称',
            name: 'nickname',
            rules: [{ required: !0, message: 'Please input your nickname!' }],
            children: t(I, { autoComplete: 'off' })
          })
        ]
      })
    })
  },
  j = e.forwardRef(y)
export { j as default }
//# sourceMappingURL=AddUser-3e44aee0.js.map

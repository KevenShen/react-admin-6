import { r as e, as as h, av as k, j as s, at as p, au as y } from './index-7ec5c925.js'
import { T as C } from './index-fa08fb69.js'
const g = (M, n) => {
    const [o] = h.useForm(),
      [c, r] = e.useState(!1),
      [d, a] = e.useState([]),
      [l, O] = e.useState([]),
      [i, w] = e.useState(!1)
    e.useImperativeHandle(n, () => ({
      showModal: (t) => {
        m(t), r(!0)
      }
    }))
    const u = async () => {
        const { data: t } = await y()
        a(t)
      },
      m = async (t) => {
        const { data: f } = await k(t)
        a(f)
      }
    return (
      e.useEffect(() => {
        u()
      }, []),
      s(p, {
        title: '编辑',
        open: c,
        onOk: async () => {},
        getContainer: !1,
        confirmLoading: i,
        destroyOnClose: !0,
        onCancel: () => {
          o.resetFields()
        },
        children: s(C, {
          checkable: !0,
          blockNode: !0,
          fieldNames: { title: 'name', key: 'id' },
          onCheck: () => {},
          checkedKeys: l,
          treeData: d
        })
      })
    )
  },
  L = e.memo(e.forwardRef(g))
export { L as default }
//# sourceMappingURL=editPos-09767350.js.map

import { r as e, as as E, av as S, j as r, at as w, au as I } from './index-7ec5c925.js'
import { a as K } from './menu-40c162b1.js'
import { T as O } from './index-fa08fb69.js'
const x = (L, l) => {
    E.useForm()
    const [u, a] = e.useState(!1),
      [i, f] = e.useState(),
      [h, m] = e.useState([]),
      [p, k] = e.useState([]),
      [d, s] = e.useState([]),
      [y, b] = e.useState(!1)
    e.useImperativeHandle(l, () => ({
      showModal: (t) => {
        f(t), M(t), a(!0)
      }
    }))
    const C = async () => {
        const { data: t } = await I()
        k(t)
      },
      M = async (t) => {
        const { data: n } = await S(t),
          o = []
        n.forEach((c) => {
          if (c.children) return o.push(...c.children.map((g) => g.id))
          o.push(c.id)
        }),
          s(o)
      }
    return (
      e.useEffect(() => {
        C()
      }, []),
      r(w, {
        title: '编辑',
        open: u,
        onOk: async () => {
          await K({ menu: [...d, ...h], id: i }), a(!1)
        },
        getContainer: !1,
        confirmLoading: y,
        destroyOnClose: !0,
        onCancel: () => {
          a(!1), s([])
        },
        children: r(O, {
          checkable: !0,
          blockNode: !0,
          fieldNames: { title: 'name', key: 'id' },
          onCheck: (t, n) => {
            m(n.halfCheckedKeys), s(t)
          },
          defaultExpandAll: !0,
          checkedKeys: d,
          treeData: p
        })
      })
    )
  },
  T = e.forwardRef(x)
export { T as default }
//# sourceMappingURL=editMenu-7be7161b.js.map

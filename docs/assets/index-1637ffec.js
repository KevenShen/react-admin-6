import {
  r as n,
  j as e,
  d as s,
  aw as p,
  ax as r,
  Y as o,
  X as v,
  ay as E,
  au as j
} from './index-7ec5c925.js'
import { P as N } from './index-75272ee3.js'
import { T as D, C as c } from './Table-e3aebe67.js'
import { e as I, g as L } from './menu-40c162b1.js'
import { T } from './index-fa08fb69.js'
import { E as O } from './EditOutlined-b7b41a9c.js'
import { D as P } from './DeleteOutlined-51525ffd.js'
import './PlusOutlined-b08ffc51.js'
const A = () => {
  console.log('Role 渲染')
  const [y, f] = n.useState([]),
    [w, C] = n.useState([]),
    [k, g] = n.useState([]),
    [l, m] = n.useState([]),
    [i, u] = n.useState([]),
    h = async () => {
      const { data: t } = await E()
      f(t)
    },
    x = async () => {
      const { data: t } = await j()
      C(t)
    },
    K = (t, a) => {
      g(a.halfCheckedKeys), m(t)
    },
    S = async () => {
      await I({ id: i[0], menu: [...l, ...k] })
    },
    b = async () => {
      const { data: t } = await L(i[0]),
        a = []
      t.forEach((d) => {
        if (d.children) return a.push(...d.children.map((R) => R.id))
        a.push(d.id)
      }),
        m(a)
    }
  return (
    n.useEffect(() => {
      h(), x()
    }, []),
    n.useEffect(() => {
      i.length && b()
    }, [i]),
    e(N, {
      title: '角色管理',
      source:
        '在这里，你可以对系统中的用户进行管理，例如添加一个新用户，或者修改系统中已经存在的用户。',
      children: s('div', {
        className: 'app-card role',
        children: [
          s('div', {
            className: 'role-info',
            children: [
              s(p, {
                justify: 'space-between',
                align: 'middle',
                children: [
                  e(r, { children: '角色列表' }),
                  e(r, { children: e(o, { type: 'primary', onClick: h, children: '查询' }) })
                ]
              }),
              s(D, {
                bordered: !0,
                dataSource: y,
                rowSelection: {
                  type: 'radio',
                  selectedRowKeys: i,
                  onChange: (t, a) => u([a[0].id])
                },
                onRow: (t) => ({
                  onClick: () => {
                    u([t.id])
                  }
                }),
                rowKey: (t) => t.id,
                children: [
                  e(c, { title: '角色名称', dataIndex: 'name' }, 'name'),
                  e(c, { title: '角色代码', dataIndex: 'code' }, 'code'),
                  e(c, { title: '角色等级', dataIndex: 'level' }, 'level'),
                  e(c, { title: '角色描述', dataIndex: 'description' }, 'description'),
                  e(
                    c,
                    {
                      title: '操作',
                      render: (t, a) =>
                        s(v, {
                          children: [
                            e(o, { type: 'primary', shape: 'circle', icon: e(O, {}) }),
                            e(o, { type: 'primary', danger: !0, shape: 'circle', icon: e(P, {}) })
                          ]
                        })
                    },
                    'action'
                  )
                ]
              })
            ]
          }),
          s('div', {
            className: 'role-menu',
            children: [
              s(p, {
                justify: 'space-between',
                align: 'middle',
                children: [
                  e(r, { children: '角色列表' }),
                  s(r, {
                    children: [
                      ' ',
                      e(o, { type: 'primary', disabled: !i[0], onClick: S, children: '保存' })
                    ]
                  })
                ]
              }),
              e(T, {
                checkable: !0,
                blockNode: !0,
                fieldNames: { title: 'name', key: 'id' },
                onCheck: K,
                selectedKeys: [1, 2, 3],
                checkedKeys: l,
                treeData: w
              })
            ]
          })
        ]
      })
    })
  )
}
export { A as default }
//# sourceMappingURL=index-1637ffec.js.map

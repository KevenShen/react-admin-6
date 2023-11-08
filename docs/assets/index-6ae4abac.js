import { r as i, j as t, d as n, X as c, Y as r, au as p } from './index-7ec5c925.js'
import { P as m } from './index-75272ee3.js'
import { T as u, C as e } from './Table-e3aebe67.js'
import { E as h } from './EditOutlined-b7b41a9c.js'
import { D as x } from './DeleteOutlined-51525ffd.js'
import './PlusOutlined-b08ffc51.js'
import './index-fa08fb69.js'
const b = () => {
  console.log('Menu 渲染')
  const o = i.useRef(null),
    [d, l] = i.useState([]),
    s = async () => {
      const { data: a } = await p()
      l(a)
    }
  return (
    i.useEffect(() => {
      s()
    }, []),
    t(m, {
      title: '菜单管理',
      source:
        '在这里，你可以对系统中的用户进行管理，例如添加一个新用户，或者修改系统中已经存在的用户。',
      children: n('div', {
        className: 'app-card',
        children: [
          n(c, {
            wrap: !0,
            children: [
              t(r, { type: 'primary', onClick: s, children: '查询' }),
              t(r, {
                type: 'primary',
                onClick: () => (o == null ? void 0 : o.current.showModal()),
                className: 'btn-pink',
                children: '新增'
              })
            ]
          }),
          n(u, {
            bordered: !0,
            dataSource: d,
            rowKey: (a) => a.id,
            children: [
              t(e, { title: '菜单名称', dataIndex: 'name' }, 'name'),
              t(e, { title: '图标', dataIndex: 'icon' }, 'icon'),
              t(e, { title: '路径', dataIndex: 'path' }, 'path'),
              t(e, { title: '组件路径', dataIndex: 'component' }, 'component'),
              t(e, { title: '显示', dataIndex: 'isShow' }, 'isShow'),
              t(e, { title: '排序', dataIndex: 'sort_num' }, 'sort_num'),
              t(
                e,
                {
                  title: '操作',
                  render: (a, f) =>
                    n(c, {
                      children: [
                        t(r, { type: 'primary', shape: 'circle', icon: t(h, {}) }),
                        t(r, { type: 'primary', danger: !0, shape: 'circle', icon: t(x, {}) })
                      ]
                    })
                },
                'action'
              )
            ]
          })
        ]
      })
    })
  )
}
export { b as default }
//# sourceMappingURL=index-6ae4abac.js.map

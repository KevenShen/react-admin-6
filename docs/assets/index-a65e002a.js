import {
  r as o,
  M as l,
  t as y,
  am as C,
  l as P,
  v as w,
  e as A,
  bh as _
} from './index-7ec5c925.js'
const { Option: c } = l
function m(t) {
  return t && t.type && (t.type.isSelectOption || t.type.isSelectOptGroup)
}
const h = (t, d) => {
    const {
        prefixCls: O,
        className: x,
        popupClassName: E,
        dropdownClassName: N,
        children: p,
        dataSource: u
      } = t,
      s = y(p)
    let a
    s.length === 1 && C(s[0]) && !m(s[0]) && ([a] = s)
    const S = a ? () => a : void 0
    let r
    s.length && m(s[0])
      ? (r = p)
      : (r = u
          ? u.map((e) => {
              if (C(e)) return e
              switch (typeof e) {
                case 'string':
                  return o.createElement(c, { key: e, value: e }, e)
                case 'object': {
                  const { value: f } = e
                  return o.createElement(c, { key: f, value: f }, e.text)
                }
                default:
                  return
              }
            })
          : [])
    const { getPrefixCls: g } = o.useContext(P),
      i = g('select', O)
    return o.createElement(
      l,
      Object.assign(
        { ref: d, showArrow: !1 },
        w(t, ['dataSource', 'dropdownClassName']),
        {
          prefixCls: i,
          popupClassName: E || N,
          className: A(`${i}-auto-complete`, x),
          mode: l.SECRET_COMBOBOX_MODE_DO_NOT_USE
        },
        { getInputElement: S }
      ),
      r
    )
  },
  n = o.forwardRef(h),
  v = _(n)
n.Option = c
n._InternalPanelDoNotUseOrYouWillBeFired = v
const B = n
export { B as A }
//# sourceMappingURL=index-a65e002a.js.map

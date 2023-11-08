import {
  m as I,
  r as l,
  l as b,
  aM as z,
  e as h,
  aq as B,
  ar as R,
  aN as E,
  Y as K,
  aO as W,
  aP as D,
  aQ as S,
  u as L,
  aR as V,
  v as F,
  x as H,
  K as M
} from './index-7ec5c925.js'
const q = (e) => {
    const {
      componentCls: n,
      iconCls: s,
      zIndexPopup: t,
      colorText: o,
      colorWarning: m,
      marginXS: c,
      fontSize: r,
      fontWeightStrong: f,
      lineHeight: g
    } = e
    return {
      [n]: {
        zIndex: t,
        [`${n}-inner-content`]: { color: o },
        [`${n}-message`]: {
          position: 'relative',
          marginBottom: c,
          color: o,
          fontSize: r,
          display: 'flex',
          flexWrap: 'nowrap',
          alignItems: 'start',
          [`> ${n}-message-icon ${s}`]: {
            color: m,
            fontSize: r,
            flex: 'none',
            lineHeight: 1,
            paddingTop: (Math.round(r * g) - r) / 2
          },
          '&-title': { flex: 'auto', marginInlineStart: c },
          '&-title-only': { fontWeight: f }
        },
        [`${n}-description`]: {
          position: 'relative',
          marginInlineStart: r + c,
          marginBottom: c,
          color: o,
          fontSize: r
        },
        [`${n}-buttons`]: { textAlign: 'end', button: { marginInlineStart: c } }
      }
    }
  },
  N = I(
    'Popconfirm',
    (e) => q(e),
    (e) => {
      const { zIndexPopupBase: n } = e
      return { zIndexPopup: n + 60 }
    }
  )
var A =
  (globalThis && globalThis.__rest) ||
  function (e, n) {
    var s = {}
    for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && n.indexOf(t) < 0 && (s[t] = e[t])
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var o = 0, t = Object.getOwnPropertySymbols(e); o < t.length; o++)
        n.indexOf(t[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, t[o]) &&
          (s[t[o]] = e[t[o]])
    return s
  }
const T = (e) => {
  const {
      prefixCls: n,
      okButtonProps: s,
      cancelButtonProps: t,
      title: o,
      description: m,
      cancelText: c,
      okText: r,
      okType: f = 'primary',
      icon: g = l.createElement(S, null),
      showCancel: v = !0,
      close: y,
      onConfirm: C,
      onCancel: x
    } = e,
    { getPrefixCls: P } = l.useContext(b),
    [p] = B('Popconfirm', R.Popconfirm)
  return l.createElement(
    'div',
    { className: `${n}-inner-content` },
    l.createElement(
      'div',
      { className: `${n}-message` },
      g && l.createElement('span', { className: `${n}-message-icon` }, g),
      l.createElement(
        'div',
        { className: h(`${n}-message-title`, { [`${n}-message-title-only`]: !!m }) },
        E(o)
      )
    ),
    m && l.createElement('div', { className: `${n}-description` }, E(m)),
    l.createElement(
      'div',
      { className: `${n}-buttons` },
      v &&
        l.createElement(
          K,
          Object.assign({ onClick: x, size: 'small' }, t),
          c ?? (p == null ? void 0 : p.cancelText)
        ),
      l.createElement(
        W,
        {
          buttonProps: Object.assign(Object.assign({ size: 'small' }, D(f)), s),
          actionFn: C,
          close: y,
          prefixCls: P('btn'),
          quitOnNullishReturnValue: !0,
          emitEvent: !0
        },
        r ?? (p == null ? void 0 : p.okText)
      )
    )
  )
}
function Y(e) {
  const { prefixCls: n, placement: s, className: t, style: o } = e,
    m = A(e, ['prefixCls', 'placement', 'className', 'style']),
    { getPrefixCls: c } = l.useContext(b),
    r = c('popconfirm', n),
    [f] = N(r)
  return f(
    l.createElement(z, {
      placement: s,
      className: h(r, t),
      style: o,
      content: l.createElement(T, Object.assign({ prefixCls: r }, m))
    })
  )
}
var Q =
  (globalThis && globalThis.__rest) ||
  function (e, n) {
    var s = {}
    for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && n.indexOf(t) < 0 && (s[t] = e[t])
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var o = 0, t = Object.getOwnPropertySymbols(e); o < t.length; o++)
        n.indexOf(t[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, t[o]) &&
          (s[t[o]] = e[t[o]])
    return s
  }
const $ = l.forwardRef((e, n) => {
  const { getPrefixCls: s } = l.useContext(b),
    [t, o] = L(!1, { value: e.open, defaultValue: e.defaultOpen }),
    m = (a, i) => {
      var u
      o(a, !0), (u = e.onOpenChange) === null || u === void 0 || u.call(e, a, i)
    },
    c = (a) => {
      m(!1, a)
    },
    r = (a) => {
      var i
      return (i = e.onConfirm) === null || i === void 0 ? void 0 : i.call(globalThis, a)
    },
    f = (a) => {
      var i
      m(!1, a), (i = e.onCancel) === null || i === void 0 || i.call(globalThis, a)
    },
    g = (a) => {
      a.keyCode === M.ESC && t && m(!1, a)
    },
    v = (a) => {
      const { disabled: i = !1 } = e
      i || m(a)
    },
    {
      prefixCls: y,
      placement: C = 'top',
      trigger: x = 'click',
      okType: P = 'primary',
      icon: p = l.createElement(S, null),
      children: d,
      overlayClassName: j
    } = e,
    w = Q(e, [
      'prefixCls',
      'placement',
      'trigger',
      'okType',
      'icon',
      'children',
      'overlayClassName'
    ]),
    O = s('popconfirm', y),
    _ = h(O, j),
    [k] = N(O)
  return k(
    l.createElement(
      V,
      Object.assign({}, F(w, ['title']), {
        trigger: x,
        placement: C,
        onOpenChange: v,
        open: t,
        ref: n,
        overlayClassName: _,
        content: l.createElement(
          T,
          Object.assign({ okType: P, icon: p }, e, {
            prefixCls: O,
            close: c,
            onConfirm: r,
            onCancel: f
          })
        ),
        'data-popover-inject': !0
      }),
      H(d, {
        onKeyDown: (a) => {
          var i, u
          l.isValidElement(d) &&
            ((u = d == null ? void 0 : (i = d.props).onKeyDown) === null ||
              u === void 0 ||
              u.call(i, a)),
            g(a)
        }
      })
    )
  )
})
$._InternalPanelDoNotUseOrYouWillBeFired = Y
const X = $
export { X as P }
//# sourceMappingURL=index-be5ad900.js.map

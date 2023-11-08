import {
  aa as Z,
  O as A,
  t as kt,
  g as Ne,
  k as G,
  v as Ct,
  i as Le,
  r as m,
  G as de,
  h as H,
  e as B,
  f as T,
  ab as at,
  ac as ot,
  ad as it,
  be as Q,
  ae as dt,
  af as st,
  _ as oe,
  N as lt,
  C as St,
  bf as Dt,
  K as ce,
  R as ae,
  al as wt,
  am as ze,
  x as Ue,
  m as Ot,
  bg as $t,
  o as Pt,
  a5 as Tt,
  n as Mt,
  p as Lt,
  aU as Ve,
  l as ct,
  s as It
} from './index-7ec5c925.js'
function j(r, a) {
  return r[a]
}
function ut(r, a) {
  var d = new Set()
  return (
    r.forEach(function (e) {
      a.has(e) || d.add(e)
    }),
    d
  )
}
function Rt(r) {
  var a = r || {},
    d = a.disabled,
    e = a.disableCheckbox,
    i = a.checkable
  return !!(d || e) || i === !1
}
function At(r, a, d, e) {
  for (var i = new Set(r), s = new Set(), u = 0; u <= d; u += 1) {
    var t = a.get(u) || new Set()
    t.forEach(function (c) {
      var f = c.key,
        v = c.node,
        g = c.children,
        h = g === void 0 ? [] : g
      i.has(f) &&
        !e(v) &&
        h
          .filter(function (y) {
            return !e(y.node)
          })
          .forEach(function (y) {
            i.add(y.key)
          })
    })
  }
  for (var n = new Set(), o = d; o >= 0; o -= 1) {
    var l = a.get(o) || new Set()
    l.forEach(function (c) {
      var f = c.parent,
        v = c.node
      if (!(e(v) || !c.parent || n.has(c.parent.key))) {
        if (e(c.parent.node)) {
          n.add(f.key)
          return
        }
        var g = !0,
          h = !1
        ;(f.children || [])
          .filter(function (y) {
            return !e(y.node)
          })
          .forEach(function (y) {
            var p = y.key,
              K = i.has(p)
            g && !K && (g = !1), !h && (K || s.has(p)) && (h = !0)
          }),
          g && i.add(f.key),
          h && s.add(f.key),
          n.add(f.key)
      }
    })
  }
  return { checkedKeys: Array.from(i), halfCheckedKeys: Array.from(ut(s, i)) }
}
function Ht(r, a, d, e, i) {
  for (var s = new Set(r), u = new Set(a), t = 0; t <= e; t += 1) {
    var n = d.get(t) || new Set()
    n.forEach(function (f) {
      var v = f.key,
        g = f.node,
        h = f.children,
        y = h === void 0 ? [] : h
      !s.has(v) &&
        !u.has(v) &&
        !i(g) &&
        y
          .filter(function (p) {
            return !i(p.node)
          })
          .forEach(function (p) {
            s.delete(p.key)
          })
    })
  }
  u = new Set()
  for (var o = new Set(), l = e; l >= 0; l -= 1) {
    var c = d.get(l) || new Set()
    c.forEach(function (f) {
      var v = f.parent,
        g = f.node
      if (!(i(g) || !f.parent || o.has(f.parent.key))) {
        if (i(f.parent.node)) {
          o.add(v.key)
          return
        }
        var h = !0,
          y = !1
        ;(v.children || [])
          .filter(function (p) {
            return !i(p.node)
          })
          .forEach(function (p) {
            var K = p.key,
              x = s.has(K)
            h && !x && (h = !1), !y && (x || u.has(K)) && (y = !0)
          }),
          h || s.delete(v.key),
          y && u.add(v.key),
          o.add(v.key)
      }
    })
  }
  return { checkedKeys: Array.from(s), halfCheckedKeys: Array.from(ut(u, s)) }
}
function we(r, a, d, e) {
  var i = [],
    s
  e ? (s = e) : (s = Rt)
  var u = new Set(
      r.filter(function (l) {
        var c = !!j(d, l)
        return c || i.push(l), c
      })
    ),
    t = new Map(),
    n = 0
  Object.keys(d).forEach(function (l) {
    var c = d[l],
      f = c.level,
      v = t.get(f)
    v || ((v = new Set()), t.set(f, v)), v.add(c), (n = Math.max(n, f))
  }),
    Z(
      !i.length,
      'Tree missing follow keys: '.concat(
        i
          .slice(0, 100)
          .map(function (l) {
            return "'".concat(l, "'")
          })
          .join(', ')
      )
    )
  var o
  return a === !0 ? (o = At(u, t, n, s)) : (o = Ht(u, a.halfCheckedKeys, t, n, s)), o
}
var _t = ['children']
function ft(r, a) {
  return ''.concat(r, '-').concat(a)
}
function Ft(r) {
  return r && r.type && r.type.isTreeNode
}
function ye(r, a) {
  return r ?? a
}
function be(r) {
  var a = r || {},
    d = a.title,
    e = a._title,
    i = a.key,
    s = a.children,
    u = d || 'title'
  return { title: u, _title: e || [u], key: i || 'key', children: s || 'children' }
}
function pt(r) {
  function a(d) {
    var e = kt(d)
    return e
      .map(function (i) {
        if (!Ft(i)) return Z(!i, 'Tree/TreeNode can only accept TreeNode as children.'), null
        var s = i.key,
          u = i.props,
          t = u.children,
          n = Ne(u, _t),
          o = A({ key: s }, n),
          l = a(t)
        return l.length && (o.children = l), o
      })
      .filter(function (i) {
        return i
      })
  }
  return a(r)
}
function Oe(r, a, d) {
  var e = be(d),
    i = e._title,
    s = e.key,
    u = e.children,
    t = new Set(a === !0 ? [] : a),
    n = []
  function o(l) {
    var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null
    return l.map(function (f, v) {
      for (var g = ft(c ? c.pos : '0', v), h = ye(f[s], g), y, p = 0; p < i.length; p += 1) {
        var K = i[p]
        if (f[K] !== void 0) {
          y = f[K]
          break
        }
      }
      var x = A(
        A({}, Ct(f, [].concat(G(i), [s, u]))),
        {},
        {
          title: y,
          key: h,
          parent: c,
          pos: g,
          children: null,
          data: f,
          isStart: [].concat(G(c ? c.isStart : []), [v === 0]),
          isEnd: [].concat(G(c ? c.isEnd : []), [v === l.length - 1])
        }
      )
      return (
        n.push(x), a === !0 || t.has(h) ? (x.children = o(f[u] || [], x)) : (x.children = []), x
      )
    })
  }
  return o(r), n
}
function Bt(r, a, d) {
  var e = {}
  Le(d) === 'object' ? (e = d) : (e = { externalGetKey: d }), (e = e || {})
  var i = e,
    s = i.childrenPropName,
    u = i.externalGetKey,
    t = i.fieldNames,
    n = be(t),
    o = n.key,
    l = n.children,
    c = s || l,
    f
  u
    ? typeof u == 'string'
      ? (f = function (h) {
          return h[u]
        })
      : typeof u == 'function' &&
        (f = function (h) {
          return u(h)
        })
    : (f = function (h, y) {
        return ye(h[o], y)
      })
  function v(g, h, y, p) {
    var K = g ? g[c] : r,
      x = g ? ft(y.pos, h) : '0',
      b = g ? [].concat(G(p), [g]) : []
    if (g) {
      var N = f(g, x),
        k = {
          node: g,
          index: h,
          pos: x,
          key: N,
          parentPos: y.node ? y.pos : null,
          level: y.level + 1,
          nodes: b
        }
      a(k)
    }
    K &&
      K.forEach(function (C, S) {
        v(C, S, { node: g, pos: x, level: y ? y.level + 1 : -1 }, b)
      })
  }
  v(null)
}
function vt(r) {
  var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    d = a.initWrapper,
    e = a.processEntity,
    i = a.onProcessFinished,
    s = a.externalGetKey,
    u = a.childrenPropName,
    t = a.fieldNames,
    n = arguments.length > 2 ? arguments[2] : void 0,
    o = s || n,
    l = {},
    c = {},
    f = { posEntities: l, keyEntities: c }
  return (
    d && (f = d(f) || f),
    Bt(
      r,
      function (v) {
        var g = v.node,
          h = v.index,
          y = v.pos,
          p = v.key,
          K = v.parentPos,
          x = v.level,
          b = v.nodes,
          N = { node: g, nodes: b, index: h, key: p, pos: y, level: x },
          k = ye(p, y)
        ;(l[y] = N),
          (c[k] = N),
          (N.parent = l[K]),
          N.parent && ((N.parent.children = N.parent.children || []), N.parent.children.push(N)),
          e && e(N, f)
      },
      { externalGetKey: o, childrenPropName: u, fieldNames: t }
    ),
    i && i(f),
    f
  )
}
function he(r, a) {
  var d = a.expandedKeys,
    e = a.selectedKeys,
    i = a.loadedKeys,
    s = a.loadingKeys,
    u = a.checkedKeys,
    t = a.halfCheckedKeys,
    n = a.dragOverNodeKey,
    o = a.dropPosition,
    l = a.keyEntities,
    c = j(l, r),
    f = {
      eventKey: r,
      expanded: d.indexOf(r) !== -1,
      selected: e.indexOf(r) !== -1,
      loaded: i.indexOf(r) !== -1,
      loading: s.indexOf(r) !== -1,
      checked: u.indexOf(r) !== -1,
      halfChecked: t.indexOf(r) !== -1,
      pos: String(c ? c.pos : ''),
      dragOver: n === r && o === 0,
      dragOverGapTop: n === r && o === -1,
      dragOverGapBottom: n === r && o === 1
    }
  return f
}
function L(r) {
  var a = r.data,
    d = r.expanded,
    e = r.selected,
    i = r.checked,
    s = r.loaded,
    u = r.loading,
    t = r.halfChecked,
    n = r.dragOver,
    o = r.dragOverGapTop,
    l = r.dragOverGapBottom,
    c = r.pos,
    f = r.active,
    v = r.eventKey,
    g = A(
      A({}, a),
      {},
      {
        expanded: d,
        selected: e,
        checked: i,
        loaded: s,
        loading: u,
        halfChecked: t,
        dragOver: n,
        dragOverGapTop: o,
        dragOverGapBottom: l,
        pos: c,
        active: f,
        key: v
      }
    )
  return (
    'props' in g ||
      Object.defineProperty(g, 'props', {
        get: function () {
          return (
            Z(
              !1,
              'Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`.'
            ),
            r
          )
        }
      }),
    g
  )
}
var jt = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z'
        }
      }
    ]
  },
  name: 'caret-down',
  theme: 'filled'
}
const zt = jt
var Ut = function (a, d) {
  return m.createElement(de, H({}, a, { ref: d, icon: zt }))
}
const Vt = m.forwardRef(Ut)
var Gt = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z'
        }
      }
    ]
  },
  name: 'file',
  theme: 'outlined'
}
const qt = Gt
var Wt = function (a, d) {
  return m.createElement(de, H({}, a, { ref: d, icon: qt }))
}
const gt = m.forwardRef(Wt)
var Xt = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 00-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z'
        }
      }
    ]
  },
  name: 'folder-open',
  theme: 'outlined'
}
const Yt = Xt
var Jt = function (a, d) {
  return m.createElement(de, H({}, a, { ref: d, icon: Yt }))
}
const Qt = m.forwardRef(Jt)
var Zt = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z'
        }
      }
    ]
  },
  name: 'folder',
  theme: 'outlined'
}
const en = Zt
var tn = function (a, d) {
  return m.createElement(de, H({}, a, { ref: d, icon: en }))
}
const nn = m.forwardRef(tn)
var rn = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M300 276.5a56 56 0 1056-97 56 56 0 00-56 97zm0 284a56 56 0 1056-97 56 56 0 00-56 97zM640 228a56 56 0 10112 0 56 56 0 00-112 0zm0 284a56 56 0 10112 0 56 56 0 00-112 0zM300 844.5a56 56 0 1056-97 56 56 0 00-56 97zM640 796a56 56 0 10112 0 56 56 0 00-112 0z'
        }
      }
    ]
  },
  name: 'holder',
  theme: 'outlined'
}
const an = rn
var on = function (a, d) {
  return m.createElement(de, H({}, a, { ref: d, icon: an }))
}
const dn = m.forwardRef(on)
var sn = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z'
        }
      },
      {
        tag: 'path',
        attrs: {
          d: 'M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z'
        }
      }
    ]
  },
  name: 'minus-square',
  theme: 'outlined'
}
const ln = sn
var cn = function (a, d) {
  return m.createElement(de, H({}, a, { ref: d, icon: ln }))
}
const un = m.forwardRef(cn)
var fn = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z'
        }
      },
      {
        tag: 'path',
        attrs: {
          d: 'M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z'
        }
      }
    ]
  },
  name: 'plus-square',
  theme: 'outlined'
}
const pn = fn
var vn = function (a, d) {
  return m.createElement(de, H({}, a, { ref: d, icon: pn }))
}
const gn = m.forwardRef(vn)
var Ie = m.createContext(null)
function hn(r) {
  var a = r.dropPosition,
    d = r.dropLevelOffset,
    e = r.indent,
    i = { pointerEvents: 'none', position: 'absolute', right: 0, backgroundColor: 'red', height: 2 }
  switch (a) {
    case -1:
      ;(i.top = 0), (i.left = -d * e)
      break
    case 1:
      ;(i.bottom = 0), (i.left = -d * e)
      break
    case 0:
      ;(i.bottom = 0), (i.left = e)
      break
  }
  return m.createElement('div', { style: i })
}
function ht(r) {
  if (r == null) throw new TypeError('Cannot destructure ' + r)
}
var yn = function (a) {
  for (
    var d = a.prefixCls,
      e = a.level,
      i = a.isStart,
      s = a.isEnd,
      u = ''.concat(d, '-indent-unit'),
      t = [],
      n = 0;
    n < e;
    n += 1
  ) {
    var o
    t.push(
      m.createElement('span', {
        key: n,
        className: B(
          u,
          ((o = {}), T(o, ''.concat(u, '-start'), i[n]), T(o, ''.concat(u, '-end'), s[n]), o)
        )
      })
    )
  }
  return m.createElement('span', { 'aria-hidden': 'true', className: ''.concat(d, '-indent') }, t)
}
const mn = m.memo(yn)
var Kn = [
    'eventKey',
    'className',
    'style',
    'dragOver',
    'dragOverGapTop',
    'dragOverGapBottom',
    'isLeaf',
    'isStart',
    'isEnd',
    'expanded',
    'selected',
    'checked',
    'halfChecked',
    'loading',
    'domRef',
    'active',
    'data',
    'onMouseMove',
    'selectable'
  ],
  Ge = 'open',
  qe = 'close',
  xn = '---',
  bn = (function (r) {
    at(d, r)
    var a = ot(d)
    function d() {
      var e
      it(this, d)
      for (var i = arguments.length, s = new Array(i), u = 0; u < i; u++) s[u] = arguments[u]
      return (
        (e = a.call.apply(a, [this].concat(s))),
        (e.state = { dragNodeHighlight: !1 }),
        (e.selectHandle = void 0),
        (e.cacheIndent = void 0),
        (e.onSelectorClick = function (t) {
          var n = e.props.context.onNodeClick
          n(t, L(e.props)), e.isSelectable() ? e.onSelect(t) : e.onCheck(t)
        }),
        (e.onSelectorDoubleClick = function (t) {
          var n = e.props.context.onNodeDoubleClick
          n(t, L(e.props))
        }),
        (e.onSelect = function (t) {
          if (!e.isDisabled()) {
            var n = e.props.context.onNodeSelect
            n(t, L(e.props))
          }
        }),
        (e.onCheck = function (t) {
          if (!e.isDisabled()) {
            var n = e.props,
              o = n.disableCheckbox,
              l = n.checked,
              c = e.props.context.onNodeCheck
            if (!(!e.isCheckable() || o)) {
              var f = !l
              c(t, L(e.props), f)
            }
          }
        }),
        (e.onMouseEnter = function (t) {
          var n = e.props.context.onNodeMouseEnter
          n(t, L(e.props))
        }),
        (e.onMouseLeave = function (t) {
          var n = e.props.context.onNodeMouseLeave
          n(t, L(e.props))
        }),
        (e.onContextMenu = function (t) {
          var n = e.props.context.onNodeContextMenu
          n(t, L(e.props))
        }),
        (e.onDragStart = function (t) {
          var n = e.props.context.onNodeDragStart
          t.stopPropagation(), e.setState({ dragNodeHighlight: !0 }), n(t, Q(e))
          try {
            t.dataTransfer.setData('text/plain', '')
          } catch {}
        }),
        (e.onDragEnter = function (t) {
          var n = e.props.context.onNodeDragEnter
          t.preventDefault(), t.stopPropagation(), n(t, Q(e))
        }),
        (e.onDragOver = function (t) {
          var n = e.props.context.onNodeDragOver
          t.preventDefault(), t.stopPropagation(), n(t, Q(e))
        }),
        (e.onDragLeave = function (t) {
          var n = e.props.context.onNodeDragLeave
          t.stopPropagation(), n(t, Q(e))
        }),
        (e.onDragEnd = function (t) {
          var n = e.props.context.onNodeDragEnd
          t.stopPropagation(), e.setState({ dragNodeHighlight: !1 }), n(t, Q(e))
        }),
        (e.onDrop = function (t) {
          var n = e.props.context.onNodeDrop
          t.preventDefault(), t.stopPropagation(), e.setState({ dragNodeHighlight: !1 }), n(t, Q(e))
        }),
        (e.onExpand = function (t) {
          var n = e.props,
            o = n.loading,
            l = n.context.onNodeExpand
          o || l(t, L(e.props))
        }),
        (e.setSelectHandle = function (t) {
          e.selectHandle = t
        }),
        (e.getNodeState = function () {
          var t = e.props.expanded
          return e.isLeaf() ? null : t ? Ge : qe
        }),
        (e.hasChildren = function () {
          var t = e.props.eventKey,
            n = e.props.context.keyEntities,
            o = j(n, t) || {},
            l = o.children
          return !!(l || []).length
        }),
        (e.isLeaf = function () {
          var t = e.props,
            n = t.isLeaf,
            o = t.loaded,
            l = e.props.context.loadData,
            c = e.hasChildren()
          return n === !1 ? !1 : n || (!l && !c) || (l && o && !c)
        }),
        (e.isDisabled = function () {
          var t = e.props.disabled,
            n = e.props.context.disabled
          return !!(n || t)
        }),
        (e.isCheckable = function () {
          var t = e.props.checkable,
            n = e.props.context.checkable
          return !n || t === !1 ? !1 : n
        }),
        (e.syncLoadData = function (t) {
          var n = t.expanded,
            o = t.loading,
            l = t.loaded,
            c = e.props.context,
            f = c.loadData,
            v = c.onNodeLoad
          o || (f && n && !e.isLeaf() && !e.hasChildren() && !l && v(L(e.props)))
        }),
        (e.isDraggable = function () {
          var t = e.props,
            n = t.data,
            o = t.context.draggable
          return !!(o && (!o.nodeDraggable || o.nodeDraggable(n)))
        }),
        (e.renderDragHandler = function () {
          var t = e.props.context,
            n = t.draggable,
            o = t.prefixCls
          return n != null && n.icon
            ? m.createElement('span', { className: ''.concat(o, '-draggable-icon') }, n.icon)
            : null
        }),
        (e.renderSwitcherIconDom = function (t) {
          var n = e.props.switcherIcon,
            o = e.props.context.switcherIcon,
            l = n || o
          return typeof l == 'function' ? l(A(A({}, e.props), {}, { isLeaf: t })) : l
        }),
        (e.renderSwitcher = function () {
          var t = e.props.expanded,
            n = e.props.context.prefixCls
          if (e.isLeaf()) {
            var o = e.renderSwitcherIconDom(!0)
            return o !== !1
              ? m.createElement(
                  'span',
                  { className: B(''.concat(n, '-switcher'), ''.concat(n, '-switcher-noop')) },
                  o
                )
              : null
          }
          var l = B(''.concat(n, '-switcher'), ''.concat(n, '-switcher_').concat(t ? Ge : qe)),
            c = e.renderSwitcherIconDom(!1)
          return c !== !1 ? m.createElement('span', { onClick: e.onExpand, className: l }, c) : null
        }),
        (e.renderCheckbox = function () {
          var t = e.props,
            n = t.checked,
            o = t.halfChecked,
            l = t.disableCheckbox,
            c = e.props.context.prefixCls,
            f = e.isDisabled(),
            v = e.isCheckable()
          if (!v) return null
          var g = typeof v != 'boolean' ? v : null
          return m.createElement(
            'span',
            {
              className: B(
                ''.concat(c, '-checkbox'),
                n && ''.concat(c, '-checkbox-checked'),
                !n && o && ''.concat(c, '-checkbox-indeterminate'),
                (f || l) && ''.concat(c, '-checkbox-disabled')
              ),
              onClick: e.onCheck
            },
            g
          )
        }),
        (e.renderIcon = function () {
          var t = e.props.loading,
            n = e.props.context.prefixCls
          return m.createElement('span', {
            className: B(
              ''.concat(n, '-iconEle'),
              ''.concat(n, '-icon__').concat(e.getNodeState() || 'docu'),
              t && ''.concat(n, '-icon_loading')
            )
          })
        }),
        (e.renderSelector = function () {
          var t = e.state.dragNodeHighlight,
            n = e.props,
            o = n.title,
            l = o === void 0 ? xn : o,
            c = n.selected,
            f = n.icon,
            v = n.loading,
            g = n.data,
            h = e.props.context,
            y = h.prefixCls,
            p = h.showIcon,
            K = h.icon,
            x = h.loadData,
            b = h.titleRender,
            N = e.isDisabled(),
            k = ''.concat(y, '-node-content-wrapper'),
            C
          if (p) {
            var S = f || K
            C = S
              ? m.createElement(
                  'span',
                  { className: B(''.concat(y, '-iconEle'), ''.concat(y, '-icon__customize')) },
                  typeof S == 'function' ? S(e.props) : S
                )
              : e.renderIcon()
          } else x && v && (C = e.renderIcon())
          var E
          typeof l == 'function' ? (E = l(g)) : b ? (E = b(g)) : (E = l)
          var D = m.createElement('span', { className: ''.concat(y, '-title') }, E)
          return m.createElement(
            'span',
            {
              ref: e.setSelectHandle,
              title: typeof l == 'string' ? l : '',
              className: B(
                ''.concat(k),
                ''.concat(k, '-').concat(e.getNodeState() || 'normal'),
                !N && (c || t) && ''.concat(y, '-node-selected')
              ),
              onMouseEnter: e.onMouseEnter,
              onMouseLeave: e.onMouseLeave,
              onContextMenu: e.onContextMenu,
              onClick: e.onSelectorClick,
              onDoubleClick: e.onSelectorDoubleClick
            },
            C,
            D,
            e.renderDropIndicator()
          )
        }),
        (e.renderDropIndicator = function () {
          var t = e.props,
            n = t.disabled,
            o = t.eventKey,
            l = e.props.context,
            c = l.draggable,
            f = l.dropLevelOffset,
            v = l.dropPosition,
            g = l.prefixCls,
            h = l.indent,
            y = l.dropIndicatorRender,
            p = l.dragOverNodeKey,
            K = l.direction,
            x = !!c,
            b = !n && x && p === o,
            N = h ?? e.cacheIndent
          return (
            (e.cacheIndent = h),
            b
              ? y({ dropPosition: v, dropLevelOffset: f, indent: N, prefixCls: g, direction: K })
              : null
          )
        }),
        e
      )
    }
    return (
      dt(d, [
        {
          key: 'componentDidMount',
          value: function () {
            this.syncLoadData(this.props)
          }
        },
        {
          key: 'componentDidUpdate',
          value: function () {
            this.syncLoadData(this.props)
          }
        },
        {
          key: 'isSelectable',
          value: function () {
            var i = this.props.selectable,
              s = this.props.context.selectable
            return typeof i == 'boolean' ? i : s
          }
        },
        {
          key: 'render',
          value: function () {
            var i,
              s = this.props,
              u = s.eventKey,
              t = s.className,
              n = s.style,
              o = s.dragOver,
              l = s.dragOverGapTop,
              c = s.dragOverGapBottom,
              f = s.isLeaf,
              v = s.isStart,
              g = s.isEnd,
              h = s.expanded,
              y = s.selected,
              p = s.checked,
              K = s.halfChecked,
              x = s.loading,
              b = s.domRef,
              N = s.active
            s.data
            var k = s.onMouseMove,
              C = s.selectable,
              S = Ne(s, Kn),
              E = this.props.context,
              D = E.prefixCls,
              $ = E.filterTreeNode,
              O = E.keyEntities,
              w = E.dropContainerKey,
              P = E.dropTargetKey,
              I = E.draggingNodeKey,
              R = this.isDisabled(),
              _ = st(S, { aria: !0, data: !0 }),
              z = j(O, u) || {},
              F = z.level,
              fe = g[g.length - 1],
              U = this.isDraggable(),
              V = !R && U,
              ee = I === u,
              pe = C !== void 0 ? { 'aria-selected': !!C } : void 0
            return m.createElement(
              'div',
              H(
                {
                  ref: b,
                  className: B(
                    t,
                    ''.concat(D, '-treenode'),
                    ((i = {}),
                    T(i, ''.concat(D, '-treenode-disabled'), R),
                    T(i, ''.concat(D, '-treenode-switcher-').concat(h ? 'open' : 'close'), !f),
                    T(i, ''.concat(D, '-treenode-checkbox-checked'), p),
                    T(i, ''.concat(D, '-treenode-checkbox-indeterminate'), K),
                    T(i, ''.concat(D, '-treenode-selected'), y),
                    T(i, ''.concat(D, '-treenode-loading'), x),
                    T(i, ''.concat(D, '-treenode-active'), N),
                    T(i, ''.concat(D, '-treenode-leaf-last'), fe),
                    T(i, ''.concat(D, '-treenode-draggable'), U),
                    T(i, 'dragging', ee),
                    T(i, 'drop-target', P === u),
                    T(i, 'drop-container', w === u),
                    T(i, 'drag-over', !R && o),
                    T(i, 'drag-over-gap-top', !R && l),
                    T(i, 'drag-over-gap-bottom', !R && c),
                    T(i, 'filter-node', $ && $(L(this.props))),
                    i)
                  ),
                  style: n,
                  draggable: V,
                  'aria-grabbed': ee,
                  onDragStart: V ? this.onDragStart : void 0,
                  onDragEnter: U ? this.onDragEnter : void 0,
                  onDragOver: U ? this.onDragOver : void 0,
                  onDragLeave: U ? this.onDragLeave : void 0,
                  onDrop: U ? this.onDrop : void 0,
                  onDragEnd: U ? this.onDragEnd : void 0,
                  onMouseMove: k
                },
                pe,
                _
              ),
              m.createElement(mn, { prefixCls: D, level: F, isStart: v, isEnd: g }),
              this.renderDragHandler(),
              this.renderSwitcher(),
              this.renderCheckbox(),
              this.renderSelector()
            )
          }
        }
      ]),
      d
    )
  })(m.Component),
  ue = function (a) {
    return m.createElement(Ie.Consumer, null, function (d) {
      return m.createElement(bn, H({}, a, { context: d }))
    })
  }
ue.displayName = 'TreeNode'
ue.isTreeNode = 1
function Nn(r, a) {
  var d = m.useState(!1),
    e = oe(d, 2),
    i = e[0],
    s = e[1]
  m.useLayoutEffect(
    function () {
      if (i)
        return (
          r(),
          function () {
            a()
          }
        )
    },
    [i]
  ),
    m.useLayoutEffect(function () {
      return (
        s(!0),
        function () {
          s(!1)
        }
      )
    }, [])
}
var En = [
    'className',
    'style',
    'motion',
    'motionNodes',
    'motionType',
    'onMotionStart',
    'onMotionEnd',
    'active',
    'treeNodeRequiredProps'
  ],
  yt = function (a, d) {
    var e = a.className,
      i = a.style,
      s = a.motion,
      u = a.motionNodes,
      t = a.motionType,
      n = a.onMotionStart,
      o = a.onMotionEnd,
      l = a.active,
      c = a.treeNodeRequiredProps,
      f = Ne(a, En),
      v = m.useState(!0),
      g = oe(v, 2),
      h = g[0],
      y = g[1],
      p = m.useContext(Ie),
      K = p.prefixCls,
      x = u && t !== 'hide'
    lt(
      function () {
        u && x !== h && y(x)
      },
      [u]
    )
    var b = function () {
        u && n()
      },
      N = m.useRef(!1),
      k = function () {
        u && !N.current && ((N.current = !0), o())
      }
    Nn(b, k)
    var C = function (E) {
      x === E && k()
    }
    return u
      ? m.createElement(
          St,
          H({ ref: d, visible: h }, s, { motionAppear: t === 'show', onVisibleChanged: C }),
          function (S, E) {
            var D = S.className,
              $ = S.style
            return m.createElement(
              'div',
              { ref: E, className: B(''.concat(K, '-treenode-motion'), D), style: $ },
              u.map(function (O) {
                var w = H({}, (ht(O.data), O.data)),
                  P = O.title,
                  I = O.key,
                  R = O.isStart,
                  _ = O.isEnd
                delete w.children
                var z = he(I, c)
                return m.createElement(
                  ue,
                  H({}, w, z, { title: P, active: l, data: O.data, key: I, isStart: R, isEnd: _ })
                )
              })
            )
          }
        )
      : m.createElement(ue, H({ domRef: d, className: e, style: i }, f, { active: l }))
  }
yt.displayName = 'MotionTreeNode'
var kn = m.forwardRef(yt)
function Cn() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
    d = r.length,
    e = a.length
  if (Math.abs(d - e) !== 1) return { add: !1, key: null }
  function i(s, u) {
    var t = new Map()
    s.forEach(function (o) {
      t.set(o, !0)
    })
    var n = u.filter(function (o) {
      return !t.has(o)
    })
    return n.length === 1 ? n[0] : null
  }
  return d < e ? { add: !0, key: i(r, a) } : { add: !1, key: i(a, r) }
}
function We(r, a, d) {
  var e = r.findIndex(function (t) {
      return t.key === d
    }),
    i = r[e + 1],
    s = a.findIndex(function (t) {
      return t.key === d
    })
  if (i) {
    var u = a.findIndex(function (t) {
      return t.key === i.key
    })
    return a.slice(s + 1, u)
  }
  return a.slice(s + 1)
}
var Sn = [
    'prefixCls',
    'data',
    'selectable',
    'checkable',
    'expandedKeys',
    'selectedKeys',
    'checkedKeys',
    'loadedKeys',
    'loadingKeys',
    'halfCheckedKeys',
    'keyEntities',
    'disabled',
    'dragging',
    'dragOverNodeKey',
    'dropPosition',
    'motion',
    'height',
    'itemHeight',
    'virtual',
    'focusable',
    'activeItem',
    'focused',
    'tabIndex',
    'onKeyDown',
    'onFocus',
    'onBlur',
    'onActiveChange',
    'onListChangeStart',
    'onListChangeEnd'
  ],
  Xe = {
    width: 0,
    height: 0,
    display: 'flex',
    overflow: 'hidden',
    opacity: 0,
    border: 0,
    padding: 0,
    margin: 0
  },
  Dn = function () {},
  ie = 'RC_TREE_MOTION_'.concat(Math.random()),
  Te = { key: ie },
  mt = { key: ie, level: 0, index: 0, pos: '0', node: Te, nodes: [Te] },
  Ye = {
    parent: null,
    children: [],
    pos: mt.pos,
    data: Te,
    title: null,
    key: ie,
    isStart: [],
    isEnd: []
  }
function Je(r, a, d, e) {
  return a === !1 || !d ? r : r.slice(0, Math.ceil(d / e) + 1)
}
function Qe(r) {
  var a = r.key,
    d = r.pos
  return ye(a, d)
}
function wn(r) {
  for (var a = String(r.data.key), d = r; d.parent; )
    (d = d.parent), (a = ''.concat(d.data.key, ' > ').concat(a))
  return a
}
var Kt = m.forwardRef(function (r, a) {
  var d = r.prefixCls,
    e = r.data
  r.selectable, r.checkable
  var i = r.expandedKeys,
    s = r.selectedKeys,
    u = r.checkedKeys,
    t = r.loadedKeys,
    n = r.loadingKeys,
    o = r.halfCheckedKeys,
    l = r.keyEntities,
    c = r.disabled,
    f = r.dragging,
    v = r.dragOverNodeKey,
    g = r.dropPosition,
    h = r.motion,
    y = r.height,
    p = r.itemHeight,
    K = r.virtual,
    x = r.focusable,
    b = r.activeItem,
    N = r.focused,
    k = r.tabIndex,
    C = r.onKeyDown,
    S = r.onFocus,
    E = r.onBlur,
    D = r.onActiveChange,
    $ = r.onListChangeStart,
    O = r.onListChangeEnd,
    w = Ne(r, Sn),
    P = m.useRef(null),
    I = m.useRef(null)
  m.useImperativeHandle(a, function () {
    return {
      scrollTo: function (Y) {
        P.current.scrollTo(Y)
      },
      getIndentWidth: function () {
        return I.current.offsetWidth
      }
    }
  })
  var R = m.useState(i),
    _ = oe(R, 2),
    z = _[0],
    F = _[1],
    fe = m.useState(e),
    U = oe(fe, 2),
    V = U[0],
    ee = U[1],
    pe = m.useState(e),
    me = oe(pe, 2),
    Ee = me[0],
    se = me[1],
    ke = m.useState([]),
    Ke = oe(ke, 2),
    Ce = Ke[0],
    X = Ke[1],
    bt = m.useState(null),
    Fe = oe(bt, 2),
    Nt = Fe[0],
    Se = Fe[1],
    Be = m.useRef(e)
  Be.current = e
  function De() {
    var M = Be.current
    ee(M), se(M), X([]), Se(null), O()
  }
  lt(
    function () {
      F(i)
      var M = Cn(z, i)
      if (M.key !== null)
        if (M.add) {
          var Y = V.findIndex(function (ve) {
              var ge = ve.key
              return ge === M.key
            }),
            te = Je(We(V, e, M.key), K, y, p),
            le = V.slice()
          le.splice(Y + 1, 0, Ye), se(le), X(te), Se('show')
        } else {
          var ne = e.findIndex(function (ve) {
              var ge = ve.key
              return ge === M.key
            }),
            re = Je(We(e, V, M.key), K, y, p),
            xe = e.slice()
          xe.splice(ne + 1, 0, Ye), se(xe), X(re), Se('hide')
        }
      else V !== e && (ee(e), se(e))
    },
    [i, e]
  ),
    m.useEffect(
      function () {
        f || De()
      },
      [f]
    )
  var Et = h ? Ee : e,
    je = {
      expandedKeys: i,
      selectedKeys: s,
      loadedKeys: t,
      loadingKeys: n,
      checkedKeys: u,
      halfCheckedKeys: o,
      dragOverNodeKey: v,
      dropPosition: g,
      keyEntities: l
    }
  return m.createElement(
    m.Fragment,
    null,
    N && b && m.createElement('span', { style: Xe, 'aria-live': 'assertive' }, wn(b)),
    m.createElement(
      'div',
      null,
      m.createElement('input', {
        style: Xe,
        disabled: x === !1 || c,
        tabIndex: x !== !1 ? k : null,
        onKeyDown: C,
        onFocus: S,
        onBlur: E,
        value: '',
        onChange: Dn,
        'aria-label': 'for screen reader'
      })
    ),
    m.createElement(
      'div',
      {
        className: ''.concat(d, '-treenode'),
        'aria-hidden': !0,
        style: {
          position: 'absolute',
          pointerEvents: 'none',
          visibility: 'hidden',
          height: 0,
          overflow: 'hidden',
          border: 0,
          padding: 0
        }
      },
      m.createElement(
        'div',
        { className: ''.concat(d, '-indent') },
        m.createElement('div', { ref: I, className: ''.concat(d, '-indent-unit') })
      )
    ),
    m.createElement(
      Dt,
      H({}, w, {
        data: Et,
        itemKey: Qe,
        height: y,
        fullHeight: !1,
        virtual: K,
        itemHeight: p,
        prefixCls: ''.concat(d, '-list'),
        ref: P,
        onVisibleChange: function (Y, te) {
          var le = new Set(Y),
            ne = te.filter(function (re) {
              return !le.has(re)
            })
          ne.some(function (re) {
            return Qe(re) === ie
          }) && De()
        }
      }),
      function (M) {
        var Y = M.pos,
          te = H({}, (ht(M.data), M.data)),
          le = M.title,
          ne = M.key,
          re = M.isStart,
          xe = M.isEnd,
          ve = ye(ne, Y)
        delete te.key, delete te.children
        var ge = he(ve, je)
        return m.createElement(
          kn,
          H({}, te, ge, {
            title: le,
            active: !!b && ne === b.key,
            pos: Y,
            data: M.data,
            isStart: re,
            isEnd: xe,
            motion: h,
            motionNodes: ne === ie ? Ce : null,
            motionType: Nt,
            onMotionStart: $,
            onMotionEnd: De,
            treeNodeRequiredProps: je,
            onMouseMove: function () {
              D(null)
            }
          })
        )
      }
    )
  )
})
Kt.displayName = 'NodeList'
function q(r, a) {
  if (!r) return []
  var d = r.slice(),
    e = d.indexOf(a)
  return e >= 0 && d.splice(e, 1), d
}
function J(r, a) {
  var d = (r || []).slice()
  return d.indexOf(a) === -1 && d.push(a), d
}
function Re(r) {
  return r.split('-')
}
function On(r, a) {
  var d = [],
    e = j(a, r)
  function i() {
    var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
    s.forEach(function (u) {
      var t = u.key,
        n = u.children
      d.push(t), i(n)
    })
  }
  return i(e.children), d
}
function $n(r) {
  if (r.parent) {
    var a = Re(r.pos)
    return Number(a[a.length - 1]) === r.parent.children.length - 1
  }
  return !1
}
function Pn(r) {
  var a = Re(r.pos)
  return Number(a[a.length - 1]) === 0
}
function Ze(r, a, d, e, i, s, u, t, n, o) {
  var l,
    c = r.clientX,
    f = r.clientY,
    v = r.target.getBoundingClientRect(),
    g = v.top,
    h = v.height,
    y = (o === 'rtl' ? -1 : 1) * (((i == null ? void 0 : i.x) || 0) - c),
    p = (y - 12) / e,
    K = j(t, d.props.eventKey)
  if (f < g + h / 2) {
    var x = u.findIndex(function (I) {
        return I.key === K.key
      }),
      b = x <= 0 ? 0 : x - 1,
      N = u[b].key
    K = j(t, N)
  }
  var k = K.key,
    C = K,
    S = K.key,
    E = 0,
    D = 0
  if (!n.includes(k)) for (var $ = 0; $ < p && $n(K); $ += 1) (K = K.parent), (D += 1)
  var O = a.props.data,
    w = K.node,
    P = !0
  return (
    Pn(K) &&
    K.level === 0 &&
    f < g + h / 2 &&
    s({ dragNode: O, dropNode: w, dropPosition: -1 }) &&
    K.key === d.props.eventKey
      ? (E = -1)
      : (C.children || []).length && n.includes(S)
      ? s({ dragNode: O, dropNode: w, dropPosition: 0 })
        ? (E = 0)
        : (P = !1)
      : D === 0
      ? p > -1.5
        ? s({ dragNode: O, dropNode: w, dropPosition: 1 })
          ? (E = 1)
          : (P = !1)
        : s({ dragNode: O, dropNode: w, dropPosition: 0 })
        ? (E = 0)
        : s({ dragNode: O, dropNode: w, dropPosition: 1 })
        ? (E = 1)
        : (P = !1)
      : s({ dragNode: O, dropNode: w, dropPosition: 1 })
      ? (E = 1)
      : (P = !1),
    {
      dropPosition: E,
      dropLevelOffset: D,
      dropTargetKey: K.key,
      dropTargetPos: K.pos,
      dragOverNodeKey: S,
      dropContainerKey:
        E === 0 ? null : ((l = K.parent) === null || l === void 0 ? void 0 : l.key) || null,
      dropAllowed: P
    }
  )
}
function et(r, a) {
  if (r) {
    var d = a.multiple
    return d ? r.slice() : r.length ? [r[0]] : r
  }
}
function $e(r) {
  if (!r) return null
  var a
  if (Array.isArray(r)) a = { checkedKeys: r, halfCheckedKeys: void 0 }
  else if (Le(r) === 'object')
    a = { checkedKeys: r.checked || void 0, halfCheckedKeys: r.halfChecked || void 0 }
  else return Z(!1, '`checkedKeys` is not an array or an object'), null
  return a
}
function Me(r, a) {
  var d = new Set()
  function e(i) {
    if (!d.has(i)) {
      var s = j(a, i)
      if (s) {
        d.add(i)
        var u = s.parent,
          t = s.node
        t.disabled || (u && e(u.key))
      }
    }
  }
  return (
    (r || []).forEach(function (i) {
      e(i)
    }),
    G(d)
  )
}
var Tn = 10,
  Ae = (function (r) {
    at(d, r)
    var a = ot(d)
    function d() {
      var e
      it(this, d)
      for (var i = arguments.length, s = new Array(i), u = 0; u < i; u++) s[u] = arguments[u]
      return (
        (e = a.call.apply(a, [this].concat(s))),
        (e.destroyed = !1),
        (e.delayedDragEnterLogic = void 0),
        (e.loadingRetryTimes = {}),
        (e.state = {
          keyEntities: {},
          indent: null,
          selectedKeys: [],
          checkedKeys: [],
          halfCheckedKeys: [],
          loadedKeys: [],
          loadingKeys: [],
          expandedKeys: [],
          draggingNodeKey: null,
          dragChildrenKeys: [],
          dropTargetKey: null,
          dropPosition: null,
          dropContainerKey: null,
          dropLevelOffset: null,
          dropTargetPos: null,
          dropAllowed: !0,
          dragOverNodeKey: null,
          treeData: [],
          flattenNodes: [],
          focused: !1,
          activeKey: null,
          listChanging: !1,
          prevProps: null,
          fieldNames: be()
        }),
        (e.dragStartMousePosition = null),
        (e.dragNode = void 0),
        (e.currentMouseOverDroppableNodeKey = null),
        (e.listRef = m.createRef()),
        (e.onNodeDragStart = function (t, n) {
          var o = e.state,
            l = o.expandedKeys,
            c = o.keyEntities,
            f = e.props.onDragStart,
            v = n.props.eventKey
          ;(e.dragNode = n), (e.dragStartMousePosition = { x: t.clientX, y: t.clientY })
          var g = q(l, v)
          e.setState({
            draggingNodeKey: v,
            dragChildrenKeys: On(v, c),
            indent: e.listRef.current.getIndentWidth()
          }),
            e.setExpandedKeys(g),
            window.addEventListener('dragend', e.onWindowDragEnd),
            f == null || f({ event: t, node: L(n.props) })
        }),
        (e.onNodeDragEnter = function (t, n) {
          var o = e.state,
            l = o.expandedKeys,
            c = o.keyEntities,
            f = o.dragChildrenKeys,
            v = o.flattenNodes,
            g = o.indent,
            h = e.props,
            y = h.onDragEnter,
            p = h.onExpand,
            K = h.allowDrop,
            x = h.direction,
            b = n.props,
            N = b.pos,
            k = b.eventKey,
            C = Q(e),
            S = C.dragNode
          if (
            (e.currentMouseOverDroppableNodeKey !== k && (e.currentMouseOverDroppableNodeKey = k),
            !S)
          ) {
            e.resetDragState()
            return
          }
          var E = Ze(t, S, n, g, e.dragStartMousePosition, K, v, c, l, x),
            D = E.dropPosition,
            $ = E.dropLevelOffset,
            O = E.dropTargetKey,
            w = E.dropContainerKey,
            P = E.dropTargetPos,
            I = E.dropAllowed,
            R = E.dragOverNodeKey
          if (f.indexOf(O) !== -1 || !I) {
            e.resetDragState()
            return
          }
          if (
            (e.delayedDragEnterLogic || (e.delayedDragEnterLogic = {}),
            Object.keys(e.delayedDragEnterLogic).forEach(function (_) {
              clearTimeout(e.delayedDragEnterLogic[_])
            }),
            S.props.eventKey !== n.props.eventKey &&
              (t.persist(),
              (e.delayedDragEnterLogic[N] = window.setTimeout(function () {
                if (e.state.draggingNodeKey !== null) {
                  var _ = G(l),
                    z = j(c, n.props.eventKey)
                  z && (z.children || []).length && (_ = J(l, n.props.eventKey)),
                    'expandedKeys' in e.props || e.setExpandedKeys(_),
                    p == null ||
                      p(_, { node: L(n.props), expanded: !0, nativeEvent: t.nativeEvent })
                }
              }, 800))),
            S.props.eventKey === O && $ === 0)
          ) {
            e.resetDragState()
            return
          }
          e.setState({
            dragOverNodeKey: R,
            dropPosition: D,
            dropLevelOffset: $,
            dropTargetKey: O,
            dropContainerKey: w,
            dropTargetPos: P,
            dropAllowed: I
          }),
            y == null || y({ event: t, node: L(n.props), expandedKeys: l })
        }),
        (e.onNodeDragOver = function (t, n) {
          var o = e.state,
            l = o.dragChildrenKeys,
            c = o.flattenNodes,
            f = o.keyEntities,
            v = o.expandedKeys,
            g = o.indent,
            h = e.props,
            y = h.onDragOver,
            p = h.allowDrop,
            K = h.direction,
            x = Q(e),
            b = x.dragNode
          if (b) {
            var N = Ze(t, b, n, g, e.dragStartMousePosition, p, c, f, v, K),
              k = N.dropPosition,
              C = N.dropLevelOffset,
              S = N.dropTargetKey,
              E = N.dropContainerKey,
              D = N.dropAllowed,
              $ = N.dropTargetPos,
              O = N.dragOverNodeKey
            l.indexOf(S) !== -1 ||
              !D ||
              (b.props.eventKey === S && C === 0
                ? (e.state.dropPosition === null &&
                    e.state.dropLevelOffset === null &&
                    e.state.dropTargetKey === null &&
                    e.state.dropContainerKey === null &&
                    e.state.dropTargetPos === null &&
                    e.state.dropAllowed === !1 &&
                    e.state.dragOverNodeKey === null) ||
                  e.resetDragState()
                : (k === e.state.dropPosition &&
                    C === e.state.dropLevelOffset &&
                    S === e.state.dropTargetKey &&
                    E === e.state.dropContainerKey &&
                    $ === e.state.dropTargetPos &&
                    D === e.state.dropAllowed &&
                    O === e.state.dragOverNodeKey) ||
                  e.setState({
                    dropPosition: k,
                    dropLevelOffset: C,
                    dropTargetKey: S,
                    dropContainerKey: E,
                    dropTargetPos: $,
                    dropAllowed: D,
                    dragOverNodeKey: O
                  }),
              y == null || y({ event: t, node: L(n.props) }))
          }
        }),
        (e.onNodeDragLeave = function (t, n) {
          e.currentMouseOverDroppableNodeKey === n.props.eventKey &&
            !t.currentTarget.contains(t.relatedTarget) &&
            (e.resetDragState(), (e.currentMouseOverDroppableNodeKey = null))
          var o = e.props.onDragLeave
          o == null || o({ event: t, node: L(n.props) })
        }),
        (e.onWindowDragEnd = function (t) {
          e.onNodeDragEnd(t, null, !0), window.removeEventListener('dragend', e.onWindowDragEnd)
        }),
        (e.onNodeDragEnd = function (t, n) {
          var o = e.props.onDragEnd
          e.setState({ dragOverNodeKey: null }),
            e.cleanDragState(),
            o == null || o({ event: t, node: L(n.props) }),
            (e.dragNode = null),
            window.removeEventListener('dragend', e.onWindowDragEnd)
        }),
        (e.onNodeDrop = function (t, n) {
          var o,
            l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
            c = e.state,
            f = c.dragChildrenKeys,
            v = c.dropPosition,
            g = c.dropTargetKey,
            h = c.dropTargetPos,
            y = c.dropAllowed
          if (y) {
            var p = e.props.onDrop
            if ((e.setState({ dragOverNodeKey: null }), e.cleanDragState(), g !== null)) {
              var K = A(
                  A({}, he(g, e.getTreeNodeRequiredProps())),
                  {},
                  {
                    active:
                      ((o = e.getActiveItem()) === null || o === void 0 ? void 0 : o.key) === g,
                    data: j(e.state.keyEntities, g).node
                  }
                ),
                x = f.indexOf(g) !== -1
              Z(
                !x,
                "Can not drop to dragNode's children node. This is a bug of rc-tree. Please report an issue."
              )
              var b = Re(h),
                N = {
                  event: t,
                  node: L(K),
                  dragNode: e.dragNode ? L(e.dragNode.props) : null,
                  dragNodesKeys: [e.dragNode.props.eventKey].concat(f),
                  dropToGap: v !== 0,
                  dropPosition: v + Number(b[b.length - 1])
                }
              l || p == null || p(N), (e.dragNode = null)
            }
          }
        }),
        (e.cleanDragState = function () {
          var t = e.state.draggingNodeKey
          t !== null &&
            e.setState({
              draggingNodeKey: null,
              dropPosition: null,
              dropContainerKey: null,
              dropTargetKey: null,
              dropLevelOffset: null,
              dropAllowed: !0,
              dragOverNodeKey: null
            }),
            (e.dragStartMousePosition = null),
            (e.currentMouseOverDroppableNodeKey = null)
        }),
        (e.triggerExpandActionExpand = function (t, n) {
          var o = e.state,
            l = o.expandedKeys,
            c = o.flattenNodes,
            f = n.expanded,
            v = n.key,
            g = n.isLeaf
          if (!(g || t.shiftKey || t.metaKey || t.ctrlKey)) {
            var h = c.filter(function (p) {
                return p.key === v
              })[0],
              y = L(A(A({}, he(v, e.getTreeNodeRequiredProps())), {}, { data: h.data }))
            e.setExpandedKeys(f ? q(l, v) : J(l, v)), e.onNodeExpand(t, y)
          }
        }),
        (e.onNodeClick = function (t, n) {
          var o = e.props,
            l = o.onClick,
            c = o.expandAction
          c === 'click' && e.triggerExpandActionExpand(t, n), l == null || l(t, n)
        }),
        (e.onNodeDoubleClick = function (t, n) {
          var o = e.props,
            l = o.onDoubleClick,
            c = o.expandAction
          c === 'doubleClick' && e.triggerExpandActionExpand(t, n), l == null || l(t, n)
        }),
        (e.onNodeSelect = function (t, n) {
          var o = e.state.selectedKeys,
            l = e.state,
            c = l.keyEntities,
            f = l.fieldNames,
            v = e.props,
            g = v.onSelect,
            h = v.multiple,
            y = n.selected,
            p = n[f.key],
            K = !y
          K ? (h ? (o = J(o, p)) : (o = [p])) : (o = q(o, p))
          var x = o
            .map(function (b) {
              var N = j(c, b)
              return N ? N.node : null
            })
            .filter(function (b) {
              return b
            })
          e.setUncontrolledState({ selectedKeys: o }),
            g == null ||
              g(o, {
                event: 'select',
                selected: K,
                node: n,
                selectedNodes: x,
                nativeEvent: t.nativeEvent
              })
        }),
        (e.onNodeCheck = function (t, n, o) {
          var l = e.state,
            c = l.keyEntities,
            f = l.checkedKeys,
            v = l.halfCheckedKeys,
            g = e.props,
            h = g.checkStrictly,
            y = g.onCheck,
            p = n.key,
            K,
            x = { event: 'check', node: n, checked: o, nativeEvent: t.nativeEvent }
          if (h) {
            var b = o ? J(f, p) : q(f, p),
              N = q(v, p)
            ;(K = { checked: b, halfChecked: N }),
              (x.checkedNodes = b
                .map(function ($) {
                  return j(c, $)
                })
                .filter(function ($) {
                  return $
                })
                .map(function ($) {
                  return $.node
                })),
              e.setUncontrolledState({ checkedKeys: b })
          } else {
            var k = we([].concat(G(f), [p]), !0, c),
              C = k.checkedKeys,
              S = k.halfCheckedKeys
            if (!o) {
              var E = new Set(C)
              E.delete(p)
              var D = we(Array.from(E), { checked: !1, halfCheckedKeys: S }, c)
              ;(C = D.checkedKeys), (S = D.halfCheckedKeys)
            }
            ;(K = C),
              (x.checkedNodes = []),
              (x.checkedNodesPositions = []),
              (x.halfCheckedKeys = S),
              C.forEach(function ($) {
                var O = j(c, $)
                if (O) {
                  var w = O.node,
                    P = O.pos
                  x.checkedNodes.push(w), x.checkedNodesPositions.push({ node: w, pos: P })
                }
              }),
              e.setUncontrolledState({ checkedKeys: C }, !1, { halfCheckedKeys: S })
          }
          y == null || y(K, x)
        }),
        (e.onNodeLoad = function (t) {
          var n = t.key,
            o = new Promise(function (l, c) {
              e.setState(function (f) {
                var v = f.loadedKeys,
                  g = v === void 0 ? [] : v,
                  h = f.loadingKeys,
                  y = h === void 0 ? [] : h,
                  p = e.props,
                  K = p.loadData,
                  x = p.onLoad
                if (!K || g.indexOf(n) !== -1 || y.indexOf(n) !== -1) return null
                var b = K(t)
                return (
                  b
                    .then(function () {
                      var N = e.state.loadedKeys,
                        k = J(N, n)
                      x == null || x(k, { event: 'load', node: t }),
                        e.setUncontrolledState({ loadedKeys: k }),
                        e.setState(function (C) {
                          return { loadingKeys: q(C.loadingKeys, n) }
                        }),
                        l()
                    })
                    .catch(function (N) {
                      if (
                        (e.setState(function (C) {
                          return { loadingKeys: q(C.loadingKeys, n) }
                        }),
                        (e.loadingRetryTimes[n] = (e.loadingRetryTimes[n] || 0) + 1),
                        e.loadingRetryTimes[n] >= Tn)
                      ) {
                        var k = e.state.loadedKeys
                        Z(!1, 'Retry for `loadData` many times but still failed. No more retry.'),
                          e.setUncontrolledState({ loadedKeys: J(k, n) }),
                          l()
                      }
                      c(N)
                    }),
                  { loadingKeys: J(y, n) }
                )
              })
            })
          return o.catch(function () {}), o
        }),
        (e.onNodeMouseEnter = function (t, n) {
          var o = e.props.onMouseEnter
          o == null || o({ event: t, node: n })
        }),
        (e.onNodeMouseLeave = function (t, n) {
          var o = e.props.onMouseLeave
          o == null || o({ event: t, node: n })
        }),
        (e.onNodeContextMenu = function (t, n) {
          var o = e.props.onRightClick
          o && (t.preventDefault(), o({ event: t, node: n }))
        }),
        (e.onFocus = function () {
          var t = e.props.onFocus
          e.setState({ focused: !0 })
          for (var n = arguments.length, o = new Array(n), l = 0; l < n; l++) o[l] = arguments[l]
          t == null || t.apply(void 0, o)
        }),
        (e.onBlur = function () {
          var t = e.props.onBlur
          e.setState({ focused: !1 }), e.onActiveChange(null)
          for (var n = arguments.length, o = new Array(n), l = 0; l < n; l++) o[l] = arguments[l]
          t == null || t.apply(void 0, o)
        }),
        (e.getTreeNodeRequiredProps = function () {
          var t = e.state,
            n = t.expandedKeys,
            o = t.selectedKeys,
            l = t.loadedKeys,
            c = t.loadingKeys,
            f = t.checkedKeys,
            v = t.halfCheckedKeys,
            g = t.dragOverNodeKey,
            h = t.dropPosition,
            y = t.keyEntities
          return {
            expandedKeys: n || [],
            selectedKeys: o || [],
            loadedKeys: l || [],
            loadingKeys: c || [],
            checkedKeys: f || [],
            halfCheckedKeys: v || [],
            dragOverNodeKey: g,
            dropPosition: h,
            keyEntities: y
          }
        }),
        (e.setExpandedKeys = function (t) {
          var n = e.state,
            o = n.treeData,
            l = n.fieldNames,
            c = Oe(o, t, l)
          e.setUncontrolledState({ expandedKeys: t, flattenNodes: c }, !0)
        }),
        (e.onNodeExpand = function (t, n) {
          var o = e.state.expandedKeys,
            l = e.state,
            c = l.listChanging,
            f = l.fieldNames,
            v = e.props,
            g = v.onExpand,
            h = v.loadData,
            y = n.expanded,
            p = n[f.key]
          if (!c) {
            var K = o.indexOf(p),
              x = !y
            if (
              (Z((y && K !== -1) || (!y && K === -1), 'Expand state not sync with index check'),
              x ? (o = J(o, p)) : (o = q(o, p)),
              e.setExpandedKeys(o),
              g == null || g(o, { node: n, expanded: x, nativeEvent: t.nativeEvent }),
              x && h)
            ) {
              var b = e.onNodeLoad(n)
              b &&
                b
                  .then(function () {
                    var N = Oe(e.state.treeData, o, f)
                    e.setUncontrolledState({ flattenNodes: N })
                  })
                  .catch(function () {
                    var N = e.state.expandedKeys,
                      k = q(N, p)
                    e.setExpandedKeys(k)
                  })
            }
          }
        }),
        (e.onListChangeStart = function () {
          e.setUncontrolledState({ listChanging: !0 })
        }),
        (e.onListChangeEnd = function () {
          setTimeout(function () {
            e.setUncontrolledState({ listChanging: !1 })
          })
        }),
        (e.onActiveChange = function (t) {
          var n = e.state.activeKey,
            o = e.props.onActiveChange
          n !== t &&
            (e.setState({ activeKey: t }), t !== null && e.scrollTo({ key: t }), o == null || o(t))
        }),
        (e.getActiveItem = function () {
          var t = e.state,
            n = t.activeKey,
            o = t.flattenNodes
          return n === null
            ? null
            : o.find(function (l) {
                var c = l.key
                return c === n
              }) || null
        }),
        (e.offsetActiveKey = function (t) {
          var n = e.state,
            o = n.flattenNodes,
            l = n.activeKey,
            c = o.findIndex(function (g) {
              var h = g.key
              return h === l
            })
          c === -1 && t < 0 && (c = o.length), (c = (c + t + o.length) % o.length)
          var f = o[c]
          if (f) {
            var v = f.key
            e.onActiveChange(v)
          } else e.onActiveChange(null)
        }),
        (e.onKeyDown = function (t) {
          var n = e.state,
            o = n.activeKey,
            l = n.expandedKeys,
            c = n.checkedKeys,
            f = n.fieldNames,
            v = e.props,
            g = v.onKeyDown,
            h = v.checkable,
            y = v.selectable
          switch (t.which) {
            case ce.UP: {
              e.offsetActiveKey(-1), t.preventDefault()
              break
            }
            case ce.DOWN: {
              e.offsetActiveKey(1), t.preventDefault()
              break
            }
          }
          var p = e.getActiveItem()
          if (p && p.data) {
            var K = e.getTreeNodeRequiredProps(),
              x = p.data.isLeaf === !1 || !!(p.data[f.children] || []).length,
              b = L(A(A({}, he(o, K)), {}, { data: p.data, active: !0 }))
            switch (t.which) {
              case ce.LEFT: {
                x && l.includes(o)
                  ? e.onNodeExpand({}, b)
                  : p.parent && e.onActiveChange(p.parent.key),
                  t.preventDefault()
                break
              }
              case ce.RIGHT: {
                x && !l.includes(o)
                  ? e.onNodeExpand({}, b)
                  : p.children && p.children.length && e.onActiveChange(p.children[0].key),
                  t.preventDefault()
                break
              }
              case ce.ENTER:
              case ce.SPACE: {
                h && !b.disabled && b.checkable !== !1 && !b.disableCheckbox
                  ? e.onNodeCheck({}, b, !c.includes(o))
                  : !h && y && !b.disabled && b.selectable !== !1 && e.onNodeSelect({}, b)
                break
              }
            }
          }
          g == null || g(t)
        }),
        (e.setUncontrolledState = function (t) {
          var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
            o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null
          if (!e.destroyed) {
            var l = !1,
              c = !0,
              f = {}
            Object.keys(t).forEach(function (v) {
              if (v in e.props) {
                c = !1
                return
              }
              ;(l = !0), (f[v] = t[v])
            }),
              l && (!n || c) && e.setState(A(A({}, f), o))
          }
        }),
        (e.scrollTo = function (t) {
          e.listRef.current.scrollTo(t)
        }),
        e
      )
    }
    return (
      dt(
        d,
        [
          {
            key: 'componentDidMount',
            value: function () {
              ;(this.destroyed = !1), this.onUpdated()
            }
          },
          {
            key: 'componentDidUpdate',
            value: function () {
              this.onUpdated()
            }
          },
          {
            key: 'onUpdated',
            value: function () {
              var i = this.props.activeKey
              i !== void 0 &&
                i !== this.state.activeKey &&
                (this.setState({ activeKey: i }), i !== null && this.scrollTo({ key: i }))
            }
          },
          {
            key: 'componentWillUnmount',
            value: function () {
              window.removeEventListener('dragend', this.onWindowDragEnd), (this.destroyed = !0)
            }
          },
          {
            key: 'resetDragState',
            value: function () {
              this.setState({
                dragOverNodeKey: null,
                dropPosition: null,
                dropLevelOffset: null,
                dropTargetKey: null,
                dropContainerKey: null,
                dropTargetPos: null,
                dropAllowed: !1
              })
            }
          },
          {
            key: 'render',
            value: function () {
              var i,
                s = this.state,
                u = s.focused,
                t = s.flattenNodes,
                n = s.keyEntities,
                o = s.draggingNodeKey,
                l = s.activeKey,
                c = s.dropLevelOffset,
                f = s.dropContainerKey,
                v = s.dropTargetKey,
                g = s.dropPosition,
                h = s.dragOverNodeKey,
                y = s.indent,
                p = this.props,
                K = p.prefixCls,
                x = p.className,
                b = p.style,
                N = p.showLine,
                k = p.focusable,
                C = p.tabIndex,
                S = C === void 0 ? 0 : C,
                E = p.selectable,
                D = p.showIcon,
                $ = p.icon,
                O = p.switcherIcon,
                w = p.draggable,
                P = p.checkable,
                I = p.checkStrictly,
                R = p.disabled,
                _ = p.motion,
                z = p.loadData,
                F = p.filterTreeNode,
                fe = p.height,
                U = p.itemHeight,
                V = p.virtual,
                ee = p.titleRender,
                pe = p.dropIndicatorRender,
                me = p.onContextMenu,
                Ee = p.onScroll,
                se = p.direction,
                ke = p.rootClassName,
                Ke = p.rootStyle,
                Ce = st(this.props, { aria: !0, data: !0 }),
                X
              return (
                w &&
                  (Le(w) === 'object'
                    ? (X = w)
                    : typeof w == 'function'
                    ? (X = { nodeDraggable: w })
                    : (X = {})),
                m.createElement(
                  Ie.Provider,
                  {
                    value: {
                      prefixCls: K,
                      selectable: E,
                      showIcon: D,
                      icon: $,
                      switcherIcon: O,
                      draggable: X,
                      draggingNodeKey: o,
                      checkable: P,
                      checkStrictly: I,
                      disabled: R,
                      keyEntities: n,
                      dropLevelOffset: c,
                      dropContainerKey: f,
                      dropTargetKey: v,
                      dropPosition: g,
                      dragOverNodeKey: h,
                      indent: y,
                      direction: se,
                      dropIndicatorRender: pe,
                      loadData: z,
                      filterTreeNode: F,
                      titleRender: ee,
                      onNodeClick: this.onNodeClick,
                      onNodeDoubleClick: this.onNodeDoubleClick,
                      onNodeExpand: this.onNodeExpand,
                      onNodeSelect: this.onNodeSelect,
                      onNodeCheck: this.onNodeCheck,
                      onNodeLoad: this.onNodeLoad,
                      onNodeMouseEnter: this.onNodeMouseEnter,
                      onNodeMouseLeave: this.onNodeMouseLeave,
                      onNodeContextMenu: this.onNodeContextMenu,
                      onNodeDragStart: this.onNodeDragStart,
                      onNodeDragEnter: this.onNodeDragEnter,
                      onNodeDragOver: this.onNodeDragOver,
                      onNodeDragLeave: this.onNodeDragLeave,
                      onNodeDragEnd: this.onNodeDragEnd,
                      onNodeDrop: this.onNodeDrop
                    }
                  },
                  m.createElement(
                    'div',
                    {
                      role: 'tree',
                      className: B(
                        K,
                        x,
                        ke,
                        ((i = {}),
                        T(i, ''.concat(K, '-show-line'), N),
                        T(i, ''.concat(K, '-focused'), u),
                        T(i, ''.concat(K, '-active-focused'), l !== null),
                        i)
                      ),
                      style: Ke
                    },
                    m.createElement(
                      Kt,
                      H(
                        {
                          ref: this.listRef,
                          prefixCls: K,
                          style: b,
                          data: t,
                          disabled: R,
                          selectable: E,
                          checkable: !!P,
                          motion: _,
                          dragging: o !== null,
                          height: fe,
                          itemHeight: U,
                          virtual: V,
                          focusable: k,
                          focused: u,
                          tabIndex: S,
                          activeItem: this.getActiveItem(),
                          onFocus: this.onFocus,
                          onBlur: this.onBlur,
                          onKeyDown: this.onKeyDown,
                          onActiveChange: this.onActiveChange,
                          onListChangeStart: this.onListChangeStart,
                          onListChangeEnd: this.onListChangeEnd,
                          onContextMenu: me,
                          onScroll: Ee
                        },
                        this.getTreeNodeRequiredProps(),
                        Ce
                      )
                    )
                  )
                )
              )
            }
          }
        ],
        [
          {
            key: 'getDerivedStateFromProps',
            value: function (i, s) {
              var u = s.prevProps,
                t = { prevProps: i }
              function n(k) {
                return (!u && k in i) || (u && u[k] !== i[k])
              }
              var o,
                l = s.fieldNames
              if (
                (n('fieldNames') && ((l = be(i.fieldNames)), (t.fieldNames = l)),
                n('treeData')
                  ? (o = i.treeData)
                  : n('children') &&
                    (Z(!1, '`children` of Tree is deprecated. Please use `treeData` instead.'),
                    (o = pt(i.children))),
                o)
              ) {
                t.treeData = o
                var c = vt(o, { fieldNames: l })
                t.keyEntities = A(T({}, ie, mt), c.keyEntities)
              }
              var f = t.keyEntities || s.keyEntities
              if (n('expandedKeys') || (u && n('autoExpandParent')))
                t.expandedKeys =
                  i.autoExpandParent || (!u && i.defaultExpandParent)
                    ? Me(i.expandedKeys, f)
                    : i.expandedKeys
              else if (!u && i.defaultExpandAll) {
                var v = A({}, f)
                delete v[ie],
                  (t.expandedKeys = Object.keys(v).map(function (k) {
                    return v[k].key
                  }))
              } else
                !u &&
                  i.defaultExpandedKeys &&
                  (t.expandedKeys =
                    i.autoExpandParent || i.defaultExpandParent
                      ? Me(i.defaultExpandedKeys, f)
                      : i.defaultExpandedKeys)
              if ((t.expandedKeys || delete t.expandedKeys, o || t.expandedKeys)) {
                var g = Oe(o || s.treeData, t.expandedKeys || s.expandedKeys, l)
                t.flattenNodes = g
              }
              if (
                (i.selectable &&
                  (n('selectedKeys')
                    ? (t.selectedKeys = et(i.selectedKeys, i))
                    : !u &&
                      i.defaultSelectedKeys &&
                      (t.selectedKeys = et(i.defaultSelectedKeys, i))),
                i.checkable)
              ) {
                var h
                if (
                  (n('checkedKeys')
                    ? (h = $e(i.checkedKeys) || {})
                    : !u && i.defaultCheckedKeys
                    ? (h = $e(i.defaultCheckedKeys) || {})
                    : o &&
                      (h = $e(i.checkedKeys) || {
                        checkedKeys: s.checkedKeys,
                        halfCheckedKeys: s.halfCheckedKeys
                      }),
                  h)
                ) {
                  var y = h,
                    p = y.checkedKeys,
                    K = p === void 0 ? [] : p,
                    x = y.halfCheckedKeys,
                    b = x === void 0 ? [] : x
                  if (!i.checkStrictly) {
                    var N = we(K, !0, f)
                    ;(K = N.checkedKeys), (b = N.halfCheckedKeys)
                  }
                  ;(t.checkedKeys = K), (t.halfCheckedKeys = b)
                }
              }
              return n('loadedKeys') && (t.loadedKeys = i.loadedKeys), t
            }
          }
        ]
      ),
      d
    )
  })(m.Component)
Ae.defaultProps = {
  prefixCls: 'rc-tree',
  showLine: !1,
  showIcon: !0,
  selectable: !0,
  multiple: !1,
  checkable: !1,
  disabled: !1,
  checkStrictly: !1,
  draggable: !1,
  defaultExpandParent: !0,
  autoExpandParent: !1,
  defaultExpandAll: !1,
  defaultExpandedKeys: [],
  defaultCheckedKeys: [],
  defaultSelectedKeys: [],
  dropIndicatorRender: hn,
  allowDrop: function () {
    return !0
  },
  expandAction: !1
}
Ae.TreeNode = ue
const tt = 4
function Mn(r) {
  const { dropPosition: a, dropLevelOffset: d, prefixCls: e, indent: i, direction: s = 'ltr' } = r,
    u = s === 'ltr' ? 'left' : 'right',
    t = s === 'ltr' ? 'right' : 'left',
    n = { [u]: -d * i + tt, [t]: 0 }
  switch (a) {
    case -1:
      n.top = -3
      break
    case 1:
      n.bottom = -3
      break
    default:
      ;(n.bottom = -3), (n[u] = i + tt)
      break
  }
  return ae.createElement('div', { style: n, className: `${e}-drop-indicator` })
}
function Ln(r, a, d, e) {
  const { isLeaf: i, expanded: s, loading: u } = d
  if (u) return m.createElement(wt, { className: `${r}-switcher-loading-icon` })
  let t
  if ((e && typeof e == 'object' && (t = e.showLeafIcon), i)) {
    if (!e) return null
    if (typeof t != 'boolean' && t) {
      const l = typeof t == 'function' ? t(d) : t,
        c = `${r}-switcher-line-custom-icon`
      return ze(l) ? Ue(l, { className: B(l.props.className || '', c) }) : l
    }
    return t
      ? m.createElement(gt, { className: `${r}-switcher-line-icon` })
      : m.createElement('span', { className: `${r}-switcher-leaf-line` })
  }
  const n = `${r}-switcher-icon`,
    o = typeof a == 'function' ? a(d) : a
  return ze(o)
    ? Ue(o, { className: B(o.props.className || '', n) })
    : o ||
        (e
          ? s
            ? m.createElement(un, { className: `${r}-switcher-line-icon` })
            : m.createElement(gn, { className: `${r}-switcher-line-icon` })
          : m.createElement(Vt, { className: n }))
}
const In = new Tt('ant-tree-node-fx-do-not-use', { '0%': { opacity: 0 }, '100%': { opacity: 1 } }),
  Rn = (r, a) => ({
    [`.${r}-switcher-icon`]: {
      display: 'inline-block',
      fontSize: 10,
      verticalAlign: 'baseline',
      svg: { transition: `transform ${a.motionDurationSlow}` }
    }
  }),
  An = (r, a) => ({
    [`.${r}-drop-indicator`]: {
      position: 'absolute',
      zIndex: 1,
      height: 2,
      backgroundColor: a.colorPrimary,
      borderRadius: 1,
      pointerEvents: 'none',
      '&:after': {
        position: 'absolute',
        top: -3,
        insetInlineStart: -6,
        width: 8,
        height: 8,
        backgroundColor: 'transparent',
        border: `${a.lineWidthBold}px solid ${a.colorPrimary}`,
        borderRadius: '50%',
        content: '""'
      }
    }
  }),
  Hn = (r, a) => {
    const { treeCls: d, treeNodeCls: e, treeNodePadding: i, treeTitleHeight: s } = a,
      u = (s - a.fontSizeLG) / 2,
      t = a.paddingXS
    return {
      [d]: Object.assign(Object.assign({}, Lt(a)), {
        background: a.colorBgContainer,
        borderRadius: a.borderRadius,
        transition: `background-color ${a.motionDurationSlow}`,
        [`&${d}-rtl`]: {
          [`${d}-switcher`]: {
            '&_close': { [`${d}-switcher-icon`]: { svg: { transform: 'rotate(90deg)' } } }
          }
        },
        [`&-focused:not(:hover):not(${d}-active-focused)`]: Object.assign({}, Ve(a)),
        [`${d}-list-holder-inner`]: { alignItems: 'flex-start' },
        [`&${d}-block-node`]: {
          [`${d}-list-holder-inner`]: {
            alignItems: 'stretch',
            [`${d}-node-content-wrapper`]: { flex: 'auto' },
            [`${e}.dragging`]: {
              position: 'relative',
              '&:after': {
                position: 'absolute',
                top: 0,
                insetInlineEnd: 0,
                bottom: i,
                insetInlineStart: 0,
                border: `1px solid ${a.colorPrimary}`,
                opacity: 0,
                animationName: In,
                animationDuration: a.motionDurationSlow,
                animationPlayState: 'running',
                animationFillMode: 'forwards',
                content: '""',
                pointerEvents: 'none'
              }
            }
          }
        },
        [`${e}`]: {
          display: 'flex',
          alignItems: 'flex-start',
          padding: `0 0 ${i}px 0`,
          outline: 'none',
          '&-rtl': { direction: 'rtl' },
          '&-disabled': {
            [`${d}-node-content-wrapper`]: {
              color: a.colorTextDisabled,
              cursor: 'not-allowed',
              '&:hover': { background: 'transparent' }
            }
          },
          [`&-active ${d}-node-content-wrapper`]: Object.assign({}, Ve(a)),
          [`&:not(${e}-disabled).filter-node ${d}-title`]: { color: 'inherit', fontWeight: 500 },
          '&-draggable': {
            [`${d}-draggable-icon`]: {
              width: s,
              lineHeight: `${s}px`,
              textAlign: 'center',
              visibility: 'visible',
              opacity: 0.2,
              transition: `opacity ${a.motionDurationSlow}`,
              [`${e}:hover &`]: { opacity: 0.45 }
            },
            [`&${e}-disabled`]: { [`${d}-draggable-icon`]: { visibility: 'hidden' } }
          }
        },
        [`${d}-indent`]: {
          alignSelf: 'stretch',
          whiteSpace: 'nowrap',
          userSelect: 'none',
          '&-unit': { display: 'inline-block', width: s }
        },
        [`${d}-draggable-icon`]: { visibility: 'hidden' },
        [`${d}-switcher`]: Object.assign(Object.assign({}, Rn(r, a)), {
          position: 'relative',
          flex: 'none',
          alignSelf: 'stretch',
          width: s,
          margin: 0,
          lineHeight: `${s}px`,
          textAlign: 'center',
          cursor: 'pointer',
          userSelect: 'none',
          '&-noop': { cursor: 'default' },
          '&_close': { [`${d}-switcher-icon`]: { svg: { transform: 'rotate(-90deg)' } } },
          '&-loading-icon': { color: a.colorPrimary },
          '&-leaf-line': {
            position: 'relative',
            zIndex: 1,
            display: 'inline-block',
            width: '100%',
            height: '100%',
            '&:before': {
              position: 'absolute',
              top: 0,
              insetInlineEnd: s / 2,
              bottom: -i,
              marginInlineStart: -1,
              borderInlineEnd: `1px solid ${a.colorBorder}`,
              content: '""'
            },
            '&:after': {
              position: 'absolute',
              width: (s / 2) * 0.8,
              height: s / 2,
              borderBottom: `1px solid ${a.colorBorder}`,
              content: '""'
            }
          }
        }),
        [`${d}-checkbox`]: { top: 'initial', marginInlineEnd: t, marginBlockStart: u },
        [`${d}-node-content-wrapper, ${d}-checkbox + span`]: {
          position: 'relative',
          zIndex: 'auto',
          minHeight: s,
          margin: 0,
          padding: `0 ${a.paddingXS / 2}px`,
          color: 'inherit',
          lineHeight: `${s}px`,
          background: 'transparent',
          borderRadius: a.borderRadius,
          cursor: 'pointer',
          transition: `all ${a.motionDurationMid}, border 0s, line-height 0s, box-shadow 0s`,
          '&:hover': { backgroundColor: a.controlItemBgHover },
          [`&${d}-node-selected`]: { backgroundColor: a.controlItemBgActive },
          [`${d}-iconEle`]: {
            display: 'inline-block',
            width: s,
            height: s,
            lineHeight: `${s}px`,
            textAlign: 'center',
            verticalAlign: 'top',
            '&:empty': { display: 'none' }
          }
        },
        [`${d}-unselectable ${d}-node-content-wrapper:hover`]: { backgroundColor: 'transparent' },
        [`${d}-node-content-wrapper`]: Object.assign(
          { lineHeight: `${s}px`, userSelect: 'none' },
          An(r, a)
        ),
        [`${e}.drop-container`]: { '> [draggable]': { boxShadow: `0 0 0 2px ${a.colorPrimary}` } },
        '&-show-line': {
          [`${d}-indent`]: {
            '&-unit': {
              position: 'relative',
              height: '100%',
              '&:before': {
                position: 'absolute',
                top: 0,
                insetInlineEnd: s / 2,
                bottom: -i,
                borderInlineEnd: `1px solid ${a.colorBorder}`,
                content: '""'
              },
              '&-end': { '&:before': { display: 'none' } }
            }
          },
          [`${d}-switcher`]: {
            background: 'transparent',
            '&-line-icon': { verticalAlign: '-0.15em' }
          }
        },
        [`${e}-leaf-last`]: {
          [`${d}-switcher`]: {
            '&-leaf-line': {
              '&:before': {
                top: 'auto !important',
                bottom: 'auto !important',
                height: `${s / 2}px !important`
              }
            }
          }
        }
      })
    }
  },
  _n = (r) => {
    const { treeCls: a, treeNodeCls: d, treeNodePadding: e } = r
    return {
      [`${a}${a}-directory`]: {
        [d]: {
          position: 'relative',
          '&:before': {
            position: 'absolute',
            top: 0,
            insetInlineEnd: 0,
            bottom: e,
            insetInlineStart: 0,
            transition: `background-color ${r.motionDurationMid}`,
            content: '""',
            pointerEvents: 'none'
          },
          '&:hover': { '&:before': { background: r.controlItemBgHover } },
          '> *': { zIndex: 1 },
          [`${a}-switcher`]: { transition: `color ${r.motionDurationMid}` },
          [`${a}-node-content-wrapper`]: {
            borderRadius: 0,
            userSelect: 'none',
            '&:hover': { background: 'transparent' },
            [`&${a}-node-selected`]: { color: r.colorTextLightSolid, background: 'transparent' }
          },
          '&-selected': {
            '\n            &:hover::before,\n            &::before\n          ': {
              background: r.colorPrimary
            },
            [`${a}-switcher`]: { color: r.colorTextLightSolid },
            [`${a}-node-content-wrapper`]: {
              color: r.colorTextLightSolid,
              background: 'transparent'
            }
          }
        }
      }
    }
  },
  Fn = (r, a) => {
    const d = `.${r}`,
      e = `${d}-treenode`,
      i = a.paddingXS / 2,
      s = a.controlHeightSM,
      u = Mt(a, { treeCls: d, treeNodeCls: e, treeNodePadding: i, treeTitleHeight: s })
    return [Hn(r, u), _n(u)]
  },
  Bn = Ot('Tree', (r, a) => {
    let { prefixCls: d } = a
    return [{ [r.componentCls]: $t(`${d}-checkbox`, r) }, Fn(d, r), Pt(r)]
  }),
  jn = ae.forwardRef((r, a) => {
    const { getPrefixCls: d, direction: e, virtual: i } = ae.useContext(ct),
      {
        prefixCls: s,
        className: u,
        showIcon: t = !1,
        showLine: n,
        switcherIcon: o,
        blockNode: l = !1,
        children: c,
        checkable: f = !1,
        selectable: v = !0,
        draggable: g,
        motion: h
      } = r,
      y = d('tree', s),
      p = d(),
      K = h ?? Object.assign(Object.assign({}, It(p)), { motionAppear: !1 }),
      x = Object.assign(Object.assign({}, r), {
        checkable: f,
        selectable: v,
        showIcon: t,
        motion: K,
        blockNode: l,
        showLine: !!n,
        dropIndicatorRender: Mn
      }),
      [b, N] = Bn(y),
      k = ae.useMemo(() => {
        if (!g) return !1
        let C = {}
        switch (typeof g) {
          case 'function':
            C.nodeDraggable = g
            break
          case 'object':
            C = Object.assign({}, g)
            break
        }
        return C.icon !== !1 && (C.icon = C.icon || ae.createElement(dn, null)), C
      }, [g])
    return b(
      ae.createElement(
        Ae,
        Object.assign({ itemHeight: 20, ref: a, virtual: i }, x, {
          prefixCls: y,
          className: B(
            {
              [`${y}-icon-hide`]: !t,
              [`${y}-block-node`]: l,
              [`${y}-unselectable`]: !v,
              [`${y}-rtl`]: e === 'rtl'
            },
            u,
            N
          ),
          direction: e,
          checkable: f && ae.createElement('span', { className: `${y}-checkbox-inner` }),
          selectable: v,
          switcherIcon: (C) => Ln(y, o, C, n),
          draggable: k
        }),
        c
      )
    )
  }),
  xt = jn
var W
;(function (r) {
  ;(r[(r.None = 0)] = 'None'), (r[(r.Start = 1)] = 'Start'), (r[(r.End = 2)] = 'End')
})(W || (W = {}))
function He(r, a) {
  function d(e) {
    const { key: i, children: s } = e
    a(i, e) !== !1 && He(s || [], a)
  }
  r.forEach(d)
}
function zn(r) {
  let { treeData: a, expandedKeys: d, startKey: e, endKey: i } = r
  const s = []
  let u = W.None
  if (e && e === i) return [e]
  if (!e || !i) return []
  function t(n) {
    return n === e || n === i
  }
  return (
    He(a, (n) => {
      if (u === W.End) return !1
      if (t(n)) {
        if ((s.push(n), u === W.None)) u = W.Start
        else if (u === W.Start) return (u = W.End), !1
      } else u === W.Start && s.push(n)
      return d.includes(n)
    }),
    s
  )
}
function Pe(r, a) {
  const d = G(a),
    e = []
  return (
    He(r, (i, s) => {
      const u = d.indexOf(i)
      return u !== -1 && (e.push(s), d.splice(u, 1)), !!d.length
    }),
    e
  )
}
var nt =
  (globalThis && globalThis.__rest) ||
  function (r, a) {
    var d = {}
    for (var e in r) Object.prototype.hasOwnProperty.call(r, e) && a.indexOf(e) < 0 && (d[e] = r[e])
    if (r != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var i = 0, e = Object.getOwnPropertySymbols(r); i < e.length; i++)
        a.indexOf(e[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(r, e[i]) &&
          (d[e[i]] = r[e[i]])
    return d
  }
function Un(r) {
  const { isLeaf: a, expanded: d } = r
  return a ? m.createElement(gt, null) : d ? m.createElement(Qt, null) : m.createElement(nn, null)
}
function rt(r) {
  let { treeData: a, children: d } = r
  return a || pt(d)
}
const Vn = (r, a) => {
    var { defaultExpandAll: d, defaultExpandParent: e, defaultExpandedKeys: i } = r,
      s = nt(r, ['defaultExpandAll', 'defaultExpandParent', 'defaultExpandedKeys'])
    const u = m.useRef(),
      t = m.useRef(),
      n = () => {
        const { keyEntities: S } = vt(rt(s))
        let E
        return (
          d
            ? (E = Object.keys(S))
            : e
            ? (E = Me(s.expandedKeys || i || [], S))
            : (E = s.expandedKeys || i),
          E
        )
      },
      [o, l] = m.useState(s.selectedKeys || s.defaultSelectedKeys || []),
      [c, f] = m.useState(() => n())
    m.useEffect(() => {
      'selectedKeys' in s && l(s.selectedKeys)
    }, [s.selectedKeys]),
      m.useEffect(() => {
        'expandedKeys' in s && f(s.expandedKeys)
      }, [s.expandedKeys])
    const v = (S, E) => {
        var D
        return (
          'expandedKeys' in s || f(S),
          (D = s.onExpand) === null || D === void 0 ? void 0 : D.call(s, S, E)
        )
      },
      g = (S, E) => {
        var D
        const { multiple: $ } = s,
          { node: O, nativeEvent: w } = E,
          { key: P = '' } = O,
          I = rt(s),
          R = Object.assign(Object.assign({}, E), { selected: !0 }),
          _ = (w == null ? void 0 : w.ctrlKey) || (w == null ? void 0 : w.metaKey),
          z = w == null ? void 0 : w.shiftKey
        let F
        $ && _
          ? ((F = S), (u.current = P), (t.current = F), (R.selectedNodes = Pe(I, F)))
          : $ && z
          ? ((F = Array.from(
              new Set(
                [].concat(
                  G(t.current || []),
                  G(zn({ treeData: I, expandedKeys: c, startKey: P, endKey: u.current }))
                )
              )
            )),
            (R.selectedNodes = Pe(I, F)))
          : ((F = [P]), (u.current = P), (t.current = F), (R.selectedNodes = Pe(I, F))),
          (D = s.onSelect) === null || D === void 0 || D.call(s, F, R),
          'selectedKeys' in s || l(F)
      },
      { getPrefixCls: h, direction: y } = m.useContext(ct),
      { prefixCls: p, className: K, showIcon: x = !0, expandAction: b = 'click' } = s,
      N = nt(s, ['prefixCls', 'className', 'showIcon', 'expandAction']),
      k = h('tree', p),
      C = B(`${k}-directory`, { [`${k}-directory-rtl`]: y === 'rtl' }, K)
    return m.createElement(
      xt,
      Object.assign({ icon: Un, ref: a, blockNode: !0 }, N, {
        showIcon: x,
        expandAction: b,
        prefixCls: k,
        className: C,
        expandedKeys: c,
        selectedKeys: o,
        onSelect: g,
        onExpand: v
      })
    )
  },
  Gn = m.forwardRef(Vn),
  qn = Gn,
  _e = xt
_e.DirectoryTree = qn
_e.TreeNode = ue
const Yn = _e
export { Yn as T, we as a, q as b, vt as c, J as d }
//# sourceMappingURL=index-fa08fb69.js.map

import {
  e as R,
  r as i,
  m as Ye,
  n as Qe,
  a5 as Zt,
  l as ee,
  v as Te,
  G as ea,
  h as se,
  k as qe,
  f as V,
  g as Ee,
  C as ta,
  O as q,
  _ as M,
  az as aa,
  i as Je,
  aA as na,
  aB as ra,
  aC as ia,
  K as Z,
  aD as oa,
  aE as ht,
  aF as $t,
  aG as sa,
  aH as la,
  u as yt,
  aI as ca,
  t as da,
  aJ as St,
  p as Ze,
  Q as et,
  aK as zt,
  S as Lt,
  aL as ua,
  a7 as pa,
  an as Pe,
  d as xt,
  j as Ke
} from './index-7ec5c925.js'
import { P as ba } from './PlusOutlined-b08ffc51.js'
const fa = (e) => {
    const { prefixCls: t, className: a, style: n, size: r, shape: o } = e,
      s = R({ [`${t}-lg`]: r === 'large', [`${t}-sm`]: r === 'small' }),
      c = R({
        [`${t}-circle`]: o === 'circle',
        [`${t}-square`]: o === 'square',
        [`${t}-round`]: o === 'round'
      }),
      l = i.useMemo(
        () => (typeof r == 'number' ? { width: r, height: r, lineHeight: `${r}px` } : {}),
        [r]
      )
    return i.createElement('span', {
      className: R(t, s, c, a),
      style: Object.assign(Object.assign({}, l), n)
    })
  },
  Re = fa,
  va = new Zt('ant-skeleton-loading', {
    '0%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0 50%' }
  }),
  Oe = (e) => ({ height: e, lineHeight: `${e}px` }),
  pe = (e) => Object.assign({ width: e }, Oe(e)),
  ga = (e) => ({
    background: e.skeletonLoadingBackground,
    backgroundSize: '400% 100%',
    animationName: va,
    animationDuration: e.skeletonLoadingMotionDuration,
    animationTimingFunction: 'ease',
    animationIterationCount: 'infinite'
  }),
  Xe = (e) => Object.assign({ width: e * 5, minWidth: e * 5 }, Oe(e)),
  ma = (e) => {
    const {
      skeletonAvatarCls: t,
      color: a,
      controlHeight: n,
      controlHeightLG: r,
      controlHeightSM: o
    } = e
    return {
      [`${t}`]: Object.assign(
        { display: 'inline-block', verticalAlign: 'top', background: a },
        pe(n)
      ),
      [`${t}${t}-circle`]: { borderRadius: '50%' },
      [`${t}${t}-lg`]: Object.assign({}, pe(r)),
      [`${t}${t}-sm`]: Object.assign({}, pe(o))
    }
  },
  ha = (e) => {
    const {
      controlHeight: t,
      borderRadiusSM: a,
      skeletonInputCls: n,
      controlHeightLG: r,
      controlHeightSM: o,
      color: s
    } = e
    return {
      [`${n}`]: Object.assign(
        { display: 'inline-block', verticalAlign: 'top', background: s, borderRadius: a },
        Xe(t)
      ),
      [`${n}-lg`]: Object.assign({}, Xe(r)),
      [`${n}-sm`]: Object.assign({}, Xe(o))
    }
  },
  Ct = (e) => Object.assign({ width: e }, Oe(e)),
  $a = (e) => {
    const { skeletonImageCls: t, imageSizeBase: a, color: n, borderRadiusSM: r } = e
    return {
      [`${t}`]: Object.assign(
        Object.assign(
          {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            verticalAlign: 'top',
            background: n,
            borderRadius: r
          },
          Ct(a * 2)
        ),
        {
          [`${t}-path`]: { fill: '#bfbfbf' },
          [`${t}-svg`]: Object.assign(Object.assign({}, Ct(a)), {
            maxWidth: a * 4,
            maxHeight: a * 4
          }),
          [`${t}-svg${t}-svg-circle`]: { borderRadius: '50%' }
        }
      ),
      [`${t}${t}-circle`]: { borderRadius: '50%' }
    }
  },
  Ve = (e, t, a) => {
    const { skeletonButtonCls: n } = e
    return {
      [`${a}${n}-circle`]: { width: t, minWidth: t, borderRadius: '50%' },
      [`${a}${n}-round`]: { borderRadius: t }
    }
  },
  Fe = (e) => Object.assign({ width: e * 2, minWidth: e * 2 }, Oe(e)),
  ya = (e) => {
    const {
      borderRadiusSM: t,
      skeletonButtonCls: a,
      controlHeight: n,
      controlHeightLG: r,
      controlHeightSM: o,
      color: s
    } = e
    return Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(
              {
                [`${a}`]: Object.assign(
                  {
                    display: 'inline-block',
                    verticalAlign: 'top',
                    background: s,
                    borderRadius: t,
                    width: n * 2,
                    minWidth: n * 2
                  },
                  Fe(n)
                )
              },
              Ve(e, n, a)
            ),
            { [`${a}-lg`]: Object.assign({}, Fe(r)) }
          ),
          Ve(e, r, `${a}-lg`)
        ),
        { [`${a}-sm`]: Object.assign({}, Fe(o)) }
      ),
      Ve(e, o, `${a}-sm`)
    )
  },
  Sa = (e) => {
    const {
      componentCls: t,
      skeletonAvatarCls: a,
      skeletonTitleCls: n,
      skeletonParagraphCls: r,
      skeletonButtonCls: o,
      skeletonInputCls: s,
      skeletonImageCls: c,
      controlHeight: l,
      controlHeightLG: u,
      controlHeightSM: p,
      color: d,
      padding: f,
      marginSM: y,
      borderRadius: v,
      skeletonTitleHeight: _,
      skeletonBlockRadius: N,
      skeletonParagraphLineHeight: S,
      controlHeightXS: C,
      skeletonParagraphMarginTop: m
    } = e
    return {
      [`${t}`]: {
        display: 'table',
        width: '100%',
        [`${t}-header`]: {
          display: 'table-cell',
          paddingInlineEnd: f,
          verticalAlign: 'top',
          [`${a}`]: Object.assign(
            { display: 'inline-block', verticalAlign: 'top', background: d },
            pe(l)
          ),
          [`${a}-circle`]: { borderRadius: '50%' },
          [`${a}-lg`]: Object.assign({}, pe(u)),
          [`${a}-sm`]: Object.assign({}, pe(p))
        },
        [`${t}-content`]: {
          display: 'table-cell',
          width: '100%',
          verticalAlign: 'top',
          [`${n}`]: {
            width: '100%',
            height: _,
            background: d,
            borderRadius: N,
            [`+ ${r}`]: { marginBlockStart: p }
          },
          [`${r}`]: {
            padding: 0,
            '> li': {
              width: '100%',
              height: S,
              listStyle: 'none',
              background: d,
              borderRadius: N,
              '+ li': { marginBlockStart: C }
            }
          },
          [`${r}> li:last-child:not(:first-child):not(:nth-child(2))`]: { width: '61%' }
        },
        [`&-round ${t}-content`]: { [`${n}, ${r} > li`]: { borderRadius: v } }
      },
      [`${t}-with-avatar ${t}-content`]: {
        [`${n}`]: { marginBlockStart: y, [`+ ${r}`]: { marginBlockStart: m } }
      },
      [`${t}${t}-element`]: Object.assign(
        Object.assign(
          Object.assign(Object.assign({ display: 'inline-block', width: 'auto' }, ya(e)), ma(e)),
          ha(e)
        ),
        $a(e)
      ),
      [`${t}${t}-block`]: {
        width: '100%',
        [`${o}`]: { width: '100%' },
        [`${s}`]: { width: '100%' }
      },
      [`${t}${t}-active`]: {
        [`
        ${n},
        ${r} > li,
        ${a},
        ${o},
        ${s},
        ${c}
      `]: Object.assign({}, ga(e))
      }
    }
  },
  be = Ye(
    'Skeleton',
    (e) => {
      const { componentCls: t } = e,
        a = Qe(e, {
          skeletonAvatarCls: `${t}-avatar`,
          skeletonTitleCls: `${t}-title`,
          skeletonParagraphCls: `${t}-paragraph`,
          skeletonButtonCls: `${t}-button`,
          skeletonInputCls: `${t}-input`,
          skeletonImageCls: `${t}-image`,
          imageSizeBase: e.controlHeight * 1.5,
          skeletonTitleHeight: e.controlHeight / 2,
          skeletonBlockRadius: e.borderRadiusSM,
          skeletonParagraphLineHeight: e.controlHeight / 2,
          skeletonParagraphMarginTop: e.marginLG + e.marginXXS,
          borderRadius: 100,
          skeletonLoadingBackground: `linear-gradient(90deg, ${e.color} 25%, ${e.colorGradientEnd} 37%, ${e.color} 63%)`,
          skeletonLoadingMotionDuration: '1.4s'
        })
      return [Sa(a)]
    },
    (e) => {
      const { colorFillContent: t, colorFill: a } = e
      return { color: t, colorGradientEnd: a }
    }
  ),
  xa = (e) => {
    const {
        prefixCls: t,
        className: a,
        rootClassName: n,
        active: r,
        shape: o = 'circle',
        size: s = 'default'
      } = e,
      { getPrefixCls: c } = i.useContext(ee),
      l = c('skeleton', t),
      [u, p] = be(l),
      d = Te(e, ['prefixCls', 'className']),
      f = R(l, `${l}-element`, { [`${l}-active`]: r }, a, n, p)
    return u(
      i.createElement(
        'div',
        { className: f },
        i.createElement(Re, Object.assign({ prefixCls: `${l}-avatar`, shape: o, size: s }, d))
      )
    )
  },
  Ca = xa,
  wa = (e) => {
    const {
        prefixCls: t,
        className: a,
        rootClassName: n,
        active: r,
        block: o = !1,
        size: s = 'default'
      } = e,
      { getPrefixCls: c } = i.useContext(ee),
      l = c('skeleton', t),
      [u, p] = be(l),
      d = Te(e, ['prefixCls']),
      f = R(l, `${l}-element`, { [`${l}-active`]: r, [`${l}-block`]: o }, a, n, p)
    return u(
      i.createElement(
        'div',
        { className: f },
        i.createElement(Re, Object.assign({ prefixCls: `${l}-button`, size: s }, d))
      )
    )
  },
  Ea = wa
var Ta = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z'
        }
      }
    ]
  },
  name: 'dot-chart',
  theme: 'outlined'
}
const Pa = Ta
var Ra = function (t, a) {
  return i.createElement(ea, se({}, t, { ref: a, icon: Pa }))
}
const Oa = i.forwardRef(Ra),
  _a = (e) => {
    const { prefixCls: t, className: a, rootClassName: n, style: r, active: o, children: s } = e,
      { getPrefixCls: c } = i.useContext(ee),
      l = c('skeleton', t),
      [u, p] = be(l),
      d = R(l, `${l}-element`, { [`${l}-active`]: o }, p, a, n),
      f = s ?? i.createElement(Oa, null)
    return u(
      i.createElement(
        'div',
        { className: d },
        i.createElement('div', { className: R(`${l}-image`, a), style: r }, f)
      )
    )
  },
  Na = _a,
  Ia =
    'M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z',
  za = (e) => {
    const { prefixCls: t, className: a, rootClassName: n, style: r, active: o } = e,
      { getPrefixCls: s } = i.useContext(ee),
      c = s('skeleton', t),
      [l, u] = be(c),
      p = R(c, `${c}-element`, { [`${c}-active`]: o }, a, n, u)
    return l(
      i.createElement(
        'div',
        { className: p },
        i.createElement(
          'div',
          { className: R(`${c}-image`, a), style: r },
          i.createElement(
            'svg',
            {
              viewBox: '0 0 1098 1024',
              xmlns: 'http://www.w3.org/2000/svg',
              className: `${c}-image-svg`
            },
            i.createElement('path', { d: Ia, className: `${c}-image-path` })
          )
        )
      )
    )
  },
  La = za,
  ja = (e) => {
    const {
        prefixCls: t,
        className: a,
        rootClassName: n,
        active: r,
        block: o,
        size: s = 'default'
      } = e,
      { getPrefixCls: c } = i.useContext(ee),
      l = c('skeleton', t),
      [u, p] = be(l),
      d = Te(e, ['prefixCls']),
      f = R(l, `${l}-element`, { [`${l}-active`]: r, [`${l}-block`]: o }, a, n, p)
    return u(
      i.createElement(
        'div',
        { className: f },
        i.createElement(Re, Object.assign({ prefixCls: `${l}-input`, size: s }, d))
      )
    )
  },
  Ba = ja,
  Ma = (e) => {
    const t = (c) => {
        const { width: l, rows: u = 2 } = e
        if (Array.isArray(l)) return l[c]
        if (u - 1 === c) return l
      },
      { prefixCls: a, className: n, style: r, rows: o } = e,
      s = qe(Array(o)).map((c, l) => i.createElement('li', { key: l, style: { width: t(l) } }))
    return i.createElement('ul', { className: R(a, n), style: r }, s)
  },
  Aa = Ma,
  Ha = (e) => {
    let { prefixCls: t, className: a, width: n, style: r } = e
    return i.createElement('h3', { className: R(t, a), style: Object.assign({ width: n }, r) })
  },
  ka = Ha
function Ue(e) {
  return e && typeof e == 'object' ? e : {}
}
function Da(e, t) {
  return e && !t ? { size: 'large', shape: 'square' } : { size: 'large', shape: 'circle' }
}
function Ga(e, t) {
  return !e && t ? { width: '38%' } : e && t ? { width: '50%' } : {}
}
function Wa(e, t) {
  const a = {}
  return (!e || !t) && (a.width = '61%'), !e && t ? (a.rows = 3) : (a.rows = 2), a
}
const fe = (e) => {
  const {
      prefixCls: t,
      loading: a,
      className: n,
      rootClassName: r,
      style: o,
      children: s,
      avatar: c = !1,
      title: l = !0,
      paragraph: u = !0,
      active: p,
      round: d
    } = e,
    { getPrefixCls: f, direction: y } = i.useContext(ee),
    v = f('skeleton', t),
    [_, N] = be(v)
  if (a || !('loading' in e)) {
    const S = !!c,
      C = !!l,
      m = !!u
    let L
    if (S) {
      const w = Object.assign(Object.assign({ prefixCls: `${v}-avatar` }, Da(C, m)), Ue(c))
      L = i.createElement(
        'div',
        { className: `${v}-header` },
        i.createElement(Re, Object.assign({}, w))
      )
    }
    let z
    if (C || m) {
      let w
      if (C) {
        const x = Object.assign(Object.assign({ prefixCls: `${v}-title` }, Ga(S, m)), Ue(l))
        w = i.createElement(ka, Object.assign({}, x))
      }
      let j
      if (m) {
        const x = Object.assign(Object.assign({ prefixCls: `${v}-paragraph` }, Wa(S, C)), Ue(u))
        j = i.createElement(Aa, Object.assign({}, x))
      }
      z = i.createElement('div', { className: `${v}-content` }, w, j)
    }
    const P = R(
      v,
      { [`${v}-with-avatar`]: S, [`${v}-active`]: p, [`${v}-rtl`]: y === 'rtl', [`${v}-round`]: d },
      n,
      r,
      N
    )
    return _(i.createElement('div', { className: P, style: o }, L, z))
  }
  return typeof s < 'u' ? s : null
}
fe.Button = Ea
fe.Avatar = Ca
fe.Input = Ba
fe.Image = La
fe.Node = Na
const Ka = fe,
  _e = i.createContext(null)
var jt = i.forwardRef(function (e, t) {
    var a = e.prefixCls,
      n = e.className,
      r = e.style,
      o = e.id,
      s = e.active,
      c = e.tabKey,
      l = e.children
    return i.createElement(
      'div',
      {
        id: o && ''.concat(o, '-panel-').concat(c),
        role: 'tabpanel',
        tabIndex: s ? 0 : -1,
        'aria-labelledby': o && ''.concat(o, '-tab-').concat(c),
        'aria-hidden': !s,
        style: r,
        className: R(a, s && ''.concat(a, '-active'), n),
        ref: t
      },
      l
    )
  }),
  Xa = ['key', 'forceRender', 'style', 'className']
function Va(e) {
  var t = e.id,
    a = e.activeKey,
    n = e.animated,
    r = e.tabPosition,
    o = e.destroyInactiveTabPane,
    s = i.useContext(_e),
    c = s.prefixCls,
    l = s.tabs,
    u = n.tabPane,
    p = ''.concat(c, '-tabpane')
  return i.createElement(
    'div',
    { className: R(''.concat(c, '-content-holder')) },
    i.createElement(
      'div',
      {
        className: R(
          ''.concat(c, '-content'),
          ''.concat(c, '-content-').concat(r),
          V({}, ''.concat(c, '-content-animated'), u)
        )
      },
      l.map(function (d) {
        var f = d.key,
          y = d.forceRender,
          v = d.style,
          _ = d.className,
          N = Ee(d, Xa),
          S = f === a
        return i.createElement(
          ta,
          se(
            {
              key: f,
              visible: S,
              forceRender: y,
              removeOnLeave: !!o,
              leavedClassName: ''.concat(p, '-hidden')
            },
            n.tabPaneMotion
          ),
          function (C, m) {
            var L = C.style,
              z = C.className
            return i.createElement(
              jt,
              se({}, N, {
                prefixCls: p,
                id: t,
                tabKey: f,
                animated: u,
                active: S,
                style: q(q({}, v), L),
                className: R(_, z),
                ref: m
              })
            )
          }
        )
      })
    )
  )
}
var wt = { width: 0, height: 0, left: 0, top: 0 }
function Fa(e, t, a) {
  return i.useMemo(
    function () {
      for (
        var n,
          r = new Map(),
          o = t.get((n = e[0]) === null || n === void 0 ? void 0 : n.key) || wt,
          s = o.left + o.width,
          c = 0;
        c < e.length;
        c += 1
      ) {
        var l = e[c].key,
          u = t.get(l)
        if (!u) {
          var p
          u = t.get((p = e[c - 1]) === null || p === void 0 ? void 0 : p.key) || wt
        }
        var d = r.get(l) || q({}, u)
        ;(d.right = s - d.left - d.width), r.set(l, d)
      }
      return r
    },
    [
      e
        .map(function (n) {
          return n.key
        })
        .join('_'),
      t,
      a
    ]
  )
}
function Et(e, t) {
  var a = i.useRef(e),
    n = i.useState({}),
    r = M(n, 2),
    o = r[1]
  function s(c) {
    var l = typeof c == 'function' ? c(a.current) : c
    l !== a.current && t(l, a.current), (a.current = l), o({})
  }
  return [a.current, s]
}
var Ua = 0.1,
  Tt = 0.01,
  we = 20,
  Pt = Math.pow(0.995, we)
function qa(e, t) {
  var a = i.useState(),
    n = M(a, 2),
    r = n[0],
    o = n[1],
    s = i.useState(0),
    c = M(s, 2),
    l = c[0],
    u = c[1],
    p = i.useState(0),
    d = M(p, 2),
    f = d[0],
    y = d[1],
    v = i.useState(),
    _ = M(v, 2),
    N = _[0],
    S = _[1],
    C = i.useRef()
  function m(x) {
    var I = x.touches[0],
      g = I.screenX,
      b = I.screenY
    o({ x: g, y: b }), window.clearInterval(C.current)
  }
  function L(x) {
    if (r) {
      x.preventDefault()
      var I = x.touches[0],
        g = I.screenX,
        b = I.screenY
      o({ x: g, y: b })
      var $ = g - r.x,
        T = b - r.y
      t($, T)
      var W = Date.now()
      u(W), y(W - l), S({ x: $, y: T })
    }
  }
  function z() {
    if (r && (o(null), S(null), N)) {
      var x = N.x / f,
        I = N.y / f,
        g = Math.abs(x),
        b = Math.abs(I)
      if (Math.max(g, b) < Ua) return
      var $ = x,
        T = I
      C.current = window.setInterval(function () {
        if (Math.abs($) < Tt && Math.abs(T) < Tt) {
          window.clearInterval(C.current)
          return
        }
        ;($ *= Pt), (T *= Pt), t($ * we, T * we)
      }, we)
    }
  }
  var P = i.useRef()
  function w(x) {
    var I = x.deltaX,
      g = x.deltaY,
      b = 0,
      $ = Math.abs(I),
      T = Math.abs(g)
    $ === T
      ? (b = P.current === 'x' ? I : g)
      : $ > T
      ? ((b = I), (P.current = 'x'))
      : ((b = g), (P.current = 'y')),
      t(-b, -b) && x.preventDefault()
  }
  var j = i.useRef(null)
  ;(j.current = { onTouchStart: m, onTouchMove: L, onTouchEnd: z, onWheel: w }),
    i.useEffect(function () {
      function x($) {
        j.current.onTouchStart($)
      }
      function I($) {
        j.current.onTouchMove($)
      }
      function g($) {
        j.current.onTouchEnd($)
      }
      function b($) {
        j.current.onWheel($)
      }
      return (
        document.addEventListener('touchmove', I, { passive: !1 }),
        document.addEventListener('touchend', g, { passive: !1 }),
        e.current.addEventListener('touchstart', x, { passive: !1 }),
        e.current.addEventListener('wheel', b),
        function () {
          document.removeEventListener('touchmove', I), document.removeEventListener('touchend', g)
        }
      )
    }, [])
}
function Bt(e) {
  var t = i.useState(0),
    a = M(t, 2),
    n = a[0],
    r = a[1],
    o = i.useRef(0),
    s = i.useRef()
  return (
    (s.current = e),
    aa(
      function () {
        var c
        ;(c = s.current) === null || c === void 0 || c.call(s)
      },
      [n]
    ),
    function () {
      o.current === n && ((o.current += 1), r(o.current))
    }
  )
}
function Ya(e) {
  var t = i.useRef([]),
    a = i.useState({}),
    n = M(a, 2),
    r = n[1],
    o = i.useRef(typeof e == 'function' ? e() : e),
    s = Bt(function () {
      var l = o.current
      t.current.forEach(function (u) {
        l = u(l)
      }),
        (t.current = []),
        (o.current = l),
        r({})
    })
  function c(l) {
    t.current.push(l), s()
  }
  return [o.current, c]
}
var Rt = { width: 0, height: 0, left: 0, top: 0, right: 0 }
function Qa(e, t, a, n, r, o, s) {
  var c = s.tabs,
    l = s.tabPosition,
    u = s.rtl,
    p,
    d,
    f
  return (
    ['top', 'bottom'].includes(l)
      ? ((p = 'width'), (d = u ? 'right' : 'left'), (f = Math.abs(a)))
      : ((p = 'height'), (d = 'top'), (f = -a)),
    i.useMemo(
      function () {
        if (!c.length) return [0, 0]
        for (var y = c.length, v = y, _ = 0; _ < y; _ += 1) {
          var N = e.get(c[_].key) || Rt
          if (N[d] + N[p] > f + t) {
            v = _ - 1
            break
          }
        }
        for (var S = 0, C = y - 1; C >= 0; C -= 1) {
          var m = e.get(c[C].key) || Rt
          if (m[d] < f) {
            S = C + 1
            break
          }
        }
        return [S, v]
      },
      [
        e,
        t,
        n,
        r,
        o,
        f,
        l,
        c
          .map(function (y) {
            return y.key
          })
          .join('_'),
        u
      ]
    )
  )
}
function Ot(e) {
  var t
  return (
    e instanceof Map
      ? ((t = {}),
        e.forEach(function (a, n) {
          t[n] = a
        }))
      : (t = e),
    JSON.stringify(t)
  )
}
var Ja = 'TABS_DQ'
function Mt(e) {
  return String(e).replace(/"/g, Ja)
}
function Za(e, t) {
  var a = e.prefixCls,
    n = e.editable,
    r = e.locale,
    o = e.style
  return !n || n.showAdd === !1
    ? null
    : i.createElement(
        'button',
        {
          ref: t,
          type: 'button',
          className: ''.concat(a, '-nav-add'),
          style: o,
          'aria-label': (r == null ? void 0 : r.addAriaLabel) || 'Add tab',
          onClick: function (c) {
            n.onEdit('add', { event: c })
          }
        },
        n.addIcon || '+'
      )
}
const At = i.forwardRef(Za)
var _t = i.forwardRef(function (e, t) {
  var a = e.position,
    n = e.prefixCls,
    r = e.extra
  if (!r) return null
  var o,
    s = {}
  return (
    Je(r) === 'object' && !i.isValidElement(r) ? (s = r) : (s.right = r),
    a === 'right' && (o = s.right),
    a === 'left' && (o = s.left),
    o ? i.createElement('div', { className: ''.concat(n, '-extra-content'), ref: t }, o) : null
  )
})
function en(e, t) {
  var a = e.prefixCls,
    n = e.id,
    r = e.tabs,
    o = e.locale,
    s = e.mobile,
    c = e.moreIcon,
    l = c === void 0 ? 'More' : c,
    u = e.moreTransitionName,
    p = e.style,
    d = e.className,
    f = e.editable,
    y = e.tabBarGutter,
    v = e.rtl,
    _ = e.removeAriaLabel,
    N = e.onTabClick,
    S = e.getPopupContainer,
    C = e.popupClassName,
    m = i.useState(!1),
    L = M(m, 2),
    z = L[0],
    P = L[1],
    w = i.useState(null),
    j = M(w, 2),
    x = j[0],
    I = j[1],
    g = ''.concat(n, '-more-popup'),
    b = ''.concat(a, '-dropdown'),
    $ = x !== null ? ''.concat(g, '-').concat(x) : null,
    T = o == null ? void 0 : o.dropdownAriaLabel
  function W(h, A) {
    h.preventDefault(), h.stopPropagation(), f.onEdit('remove', { key: A, event: h })
  }
  var ae = i.createElement(
    na,
    {
      onClick: function (A) {
        var F = A.key,
          G = A.domEvent
        N(F, G), P(!1)
      },
      prefixCls: ''.concat(b, '-menu'),
      id: g,
      tabIndex: -1,
      role: 'listbox',
      'aria-activedescendant': $,
      selectedKeys: [x],
      'aria-label': T !== void 0 ? T : 'expanded dropdown'
    },
    r.map(function (h) {
      var A = f && h.closable !== !1 && !h.disabled
      return i.createElement(
        ra,
        {
          key: h.key,
          id: ''.concat(g, '-').concat(h.key),
          role: 'option',
          'aria-controls': n && ''.concat(n, '-panel-').concat(h.key),
          disabled: h.disabled
        },
        i.createElement('span', null, h.label),
        A &&
          i.createElement(
            'button',
            {
              type: 'button',
              'aria-label': _ || 'remove',
              tabIndex: 0,
              className: ''.concat(b, '-menu-item-remove'),
              onClick: function (G) {
                G.stopPropagation(), W(G, h.key)
              }
            },
            h.closeIcon || f.removeIcon || '×'
          )
      )
    })
  )
  function Y(h) {
    for (
      var A = r.filter(function (ce) {
          return !ce.disabled
        }),
        F =
          A.findIndex(function (ce) {
            return ce.key === x
          }) || 0,
        G = A.length,
        D = 0;
      D < G;
      D += 1
    ) {
      F = (F + h + G) % G
      var H = A[F]
      if (!H.disabled) {
        I(H.key)
        return
      }
    }
  }
  function K(h) {
    var A = h.which
    if (!z) {
      ;[Z.DOWN, Z.SPACE, Z.ENTER].includes(A) && (P(!0), h.preventDefault())
      return
    }
    switch (A) {
      case Z.UP:
        Y(-1), h.preventDefault()
        break
      case Z.DOWN:
        Y(1), h.preventDefault()
        break
      case Z.ESC:
        P(!1)
        break
      case Z.SPACE:
      case Z.ENTER:
        x !== null && N(x, h)
        break
    }
  }
  i.useEffect(
    function () {
      var h = document.getElementById($)
      h && h.scrollIntoView && h.scrollIntoView(!1)
    },
    [x]
  ),
    i.useEffect(
      function () {
        z || I(null)
      },
      [z]
    )
  var U = V({}, v ? 'marginRight' : 'marginLeft', y)
  r.length || ((U.visibility = 'hidden'), (U.order = 1))
  var le = R(V({}, ''.concat(b, '-rtl'), v)),
    te = s
      ? null
      : i.createElement(
          ia,
          {
            prefixCls: b,
            overlay: ae,
            trigger: ['hover'],
            visible: r.length ? z : !1,
            transitionName: u,
            onVisibleChange: P,
            overlayClassName: R(le, C),
            mouseEnterDelay: 0.1,
            mouseLeaveDelay: 0.1,
            getPopupContainer: S
          },
          i.createElement(
            'button',
            {
              type: 'button',
              className: ''.concat(a, '-nav-more'),
              style: U,
              tabIndex: -1,
              'aria-hidden': 'true',
              'aria-haspopup': 'listbox',
              'aria-controls': g,
              id: ''.concat(n, '-more'),
              'aria-expanded': z,
              onKeyDown: K
            },
            l
          )
        )
  return i.createElement(
    'div',
    { className: R(''.concat(a, '-nav-operations'), d), style: p, ref: t },
    te,
    i.createElement(At, { prefixCls: a, locale: o, editable: f })
  )
}
const tn = i.memo(i.forwardRef(en), function (e, t) {
  return t.tabMoving
})
function an(e) {
  var t,
    a = e.prefixCls,
    n = e.id,
    r = e.active,
    o = e.tab,
    s = o.key,
    c = o.label,
    l = o.disabled,
    u = o.closeIcon,
    p = e.closable,
    d = e.renderWrapper,
    f = e.removeAriaLabel,
    y = e.editable,
    v = e.onClick,
    _ = e.onFocus,
    N = e.style,
    S = ''.concat(a, '-tab'),
    C = y && p !== !1 && !l
  function m(P) {
    l || v(P)
  }
  function L(P) {
    P.preventDefault(), P.stopPropagation(), y.onEdit('remove', { key: s, event: P })
  }
  var z = i.createElement(
    'div',
    {
      key: s,
      'data-node-key': Mt(s),
      className: R(
        S,
        ((t = {}),
        V(t, ''.concat(S, '-with-remove'), C),
        V(t, ''.concat(S, '-active'), r),
        V(t, ''.concat(S, '-disabled'), l),
        t)
      ),
      style: N,
      onClick: m
    },
    i.createElement(
      'div',
      {
        role: 'tab',
        'aria-selected': r,
        id: n && ''.concat(n, '-tab-').concat(s),
        className: ''.concat(S, '-btn'),
        'aria-controls': n && ''.concat(n, '-panel-').concat(s),
        'aria-disabled': l,
        tabIndex: l ? null : 0,
        onClick: function (w) {
          w.stopPropagation(), m(w)
        },
        onKeyDown: function (w) {
          ;[Z.SPACE, Z.ENTER].includes(w.which) && (w.preventDefault(), m(w))
        },
        onFocus: _
      },
      c
    ),
    C &&
      i.createElement(
        'button',
        {
          type: 'button',
          'aria-label': f || 'remove',
          tabIndex: 0,
          className: ''.concat(S, '-remove'),
          onClick: function (w) {
            w.stopPropagation(), L(w)
          }
        },
        u || y.removeIcon || '×'
      )
  )
  return d ? d(z) : z
}
var ue = function (t) {
    var a = t.current || {},
      n = a.offsetWidth,
      r = n === void 0 ? 0 : n,
      o = a.offsetHeight,
      s = o === void 0 ? 0 : o
    return [r, s]
  },
  Ce = function (t, a) {
    return t[a ? 0 : 1]
  }
function nn(e, t) {
  var a,
    n = i.useContext(_e),
    r = n.prefixCls,
    o = n.tabs,
    s = e.className,
    c = e.style,
    l = e.id,
    u = e.animated,
    p = e.activeKey,
    d = e.rtl,
    f = e.extra,
    y = e.editable,
    v = e.locale,
    _ = e.tabPosition,
    N = e.tabBarGutter,
    S = e.children,
    C = e.onTabClick,
    m = e.onTabScroll,
    L = i.useRef(),
    z = i.useRef(),
    P = i.useRef(),
    w = i.useRef(),
    j = i.useRef(),
    x = i.useRef(),
    I = i.useRef(),
    g = _ === 'top' || _ === 'bottom',
    b = Et(0, function (O, E) {
      g && m && m({ direction: O > E ? 'left' : 'right' })
    }),
    $ = M(b, 2),
    T = $[0],
    W = $[1],
    ae = Et(0, function (O, E) {
      !g && m && m({ direction: O > E ? 'top' : 'bottom' })
    }),
    Y = M(ae, 2),
    K = Y[0],
    U = Y[1],
    le = i.useState([0, 0]),
    te = M(le, 2),
    h = te[0],
    A = te[1],
    F = i.useState([0, 0]),
    G = M(F, 2),
    D = G[0],
    H = G[1],
    ce = i.useState([0, 0]),
    ve = M(ce, 2),
    Ne = ve[0],
    Ie = ve[1],
    ze = i.useState([0, 0]),
    ge = M(ze, 2),
    Le = ge[0],
    je = ge[1],
    B = Ya(new Map()),
    ne = M(B, 2),
    me = ne[0],
    Dt = ne[1],
    ye = Fa(o, me, D[0]),
    Be = Ce(h, g),
    he = Ce(D, g),
    Me = Ce(Ne, g),
    at = Ce(Le, g),
    nt = Be < he + Me,
    Q = nt ? Be - at : Be - Me,
    Gt = ''.concat(r, '-nav-operations-hidden'),
    re = 0,
    de = 0
  g && d ? ((re = 0), (de = Math.max(0, he - Q))) : ((re = Math.min(0, Q - he)), (de = 0))
  function Ae(O) {
    return O < re ? re : O > de ? de : O
  }
  var rt = i.useRef(),
    Wt = i.useState(),
    it = M(Wt, 2),
    Se = it[0],
    ot = it[1]
  function He() {
    ot(Date.now())
  }
  function ke() {
    window.clearTimeout(rt.current)
  }
  qa(w, function (O, E) {
    function k(X, oe) {
      X(function (J) {
        var Jt = Ae(J + oe)
        return Jt
      })
    }
    return nt ? (g ? k(W, O) : k(U, E), ke(), He(), !0) : !1
  }),
    i.useEffect(
      function () {
        return (
          ke(),
          Se &&
            (rt.current = window.setTimeout(function () {
              ot(0)
            }, 100)),
          ke
        )
      },
      [Se]
    )
  var Kt = Qa(ye, Q, g ? T : K, he, Me, at, q(q({}, e), {}, { tabs: o })),
    st = M(Kt, 2),
    Xt = st[0],
    Vt = st[1],
    lt = oa(function () {
      var O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : p,
        E = ye.get(O) || { width: 0, height: 0, left: 0, right: 0, top: 0 }
      if (g) {
        var k = T
        d
          ? E.right < T
            ? (k = E.right)
            : E.right + E.width > T + Q && (k = E.right + E.width - Q)
          : E.left < -T
          ? (k = -E.left)
          : E.left + E.width > -T + Q && (k = -(E.left + E.width - Q)),
          U(0),
          W(Ae(k))
      } else {
        var X = K
        E.top < -K ? (X = -E.top) : E.top + E.height > -K + Q && (X = -(E.top + E.height - Q)),
          W(0),
          U(Ae(X))
      }
    }),
    xe = {}
  _ === 'top' || _ === 'bottom' ? (xe[d ? 'marginRight' : 'marginLeft'] = N) : (xe.marginTop = N)
  var ct = o.map(function (O, E) {
      var k = O.key
      return i.createElement(an, {
        id: l,
        prefixCls: r,
        key: k,
        tab: O,
        style: E === 0 ? void 0 : xe,
        closable: O.closable,
        editable: y,
        active: k === p,
        renderWrapper: S,
        removeAriaLabel: v == null ? void 0 : v.removeAriaLabel,
        onClick: function (oe) {
          C(k, oe)
        },
        onFocus: function () {
          lt(k), He(), w.current && (d || (w.current.scrollLeft = 0), (w.current.scrollTop = 0))
        }
      })
    }),
    dt = function () {
      return Dt(function () {
        var E = new Map()
        return (
          o.forEach(function (k) {
            var X,
              oe = k.key,
              J =
                (X = j.current) === null || X === void 0
                  ? void 0
                  : X.querySelector('[data-node-key="'.concat(Mt(oe), '"]'))
            J &&
              E.set(oe, {
                width: J.offsetWidth,
                height: J.offsetHeight,
                left: J.offsetLeft,
                top: J.offsetTop
              })
          }),
          E
        )
      })
    }
  i.useEffect(
    function () {
      dt()
    },
    [
      o
        .map(function (O) {
          return O.key
        })
        .join('_')
    ]
  )
  var De = Bt(function () {
      var O = ue(L),
        E = ue(z),
        k = ue(P)
      A([O[0] - E[0] - k[0], O[1] - E[1] - k[1]])
      var X = ue(I)
      Ie(X)
      var oe = ue(x)
      je(oe)
      var J = ue(j)
      H([J[0] - X[0], J[1] - X[1]]), dt()
    }),
    Ft = o.slice(0, Xt),
    Ut = o.slice(Vt + 1),
    ut = [].concat(qe(Ft), qe(Ut)),
    qt = i.useState(),
    pt = M(qt, 2),
    Yt = pt[0],
    Qt = pt[1],
    ie = ye.get(p),
    bt = i.useRef()
  function ft() {
    ht.cancel(bt.current)
  }
  i.useEffect(
    function () {
      var O = {}
      return (
        ie &&
          (g
            ? (d ? (O.right = ie.right) : (O.left = ie.left), (O.width = ie.width))
            : ((O.top = ie.top), (O.height = ie.height))),
        ft(),
        (bt.current = ht(function () {
          Qt(O)
        })),
        ft
      )
    },
    [ie, g, d]
  ),
    i.useEffect(
      function () {
        lt()
      },
      [p, re, de, Ot(ie), Ot(ye), g]
    ),
    i.useEffect(
      function () {
        De()
      },
      [d]
    )
  var vt = !!ut.length,
    $e = ''.concat(r, '-nav-wrap'),
    Ge,
    We,
    gt,
    mt
  return (
    g
      ? d
        ? ((We = T > 0), (Ge = T !== de))
        : ((Ge = T < 0), (We = T !== re))
      : ((gt = K < 0), (mt = K !== re)),
    i.createElement(
      $t,
      { onResize: De },
      i.createElement(
        'div',
        {
          ref: sa(t, L),
          role: 'tablist',
          className: R(''.concat(r, '-nav'), s),
          style: c,
          onKeyDown: function () {
            He()
          }
        },
        i.createElement(_t, { ref: z, position: 'left', extra: f, prefixCls: r }),
        i.createElement(
          'div',
          {
            className: R(
              $e,
              ((a = {}),
              V(a, ''.concat($e, '-ping-left'), Ge),
              V(a, ''.concat($e, '-ping-right'), We),
              V(a, ''.concat($e, '-ping-top'), gt),
              V(a, ''.concat($e, '-ping-bottom'), mt),
              a)
            ),
            ref: w
          },
          i.createElement(
            $t,
            { onResize: De },
            i.createElement(
              'div',
              {
                ref: j,
                className: ''.concat(r, '-nav-list'),
                style: {
                  transform: 'translate('.concat(T, 'px, ').concat(K, 'px)'),
                  transition: Se ? 'none' : void 0
                }
              },
              ct,
              i.createElement(At, {
                ref: I,
                prefixCls: r,
                locale: v,
                editable: y,
                style: q(
                  q({}, ct.length === 0 ? void 0 : xe),
                  {},
                  { visibility: vt ? 'hidden' : null }
                )
              }),
              i.createElement('div', {
                className: R(
                  ''.concat(r, '-ink-bar'),
                  V({}, ''.concat(r, '-ink-bar-animated'), u.inkBar)
                ),
                style: Yt
              })
            )
          )
        ),
        i.createElement(
          tn,
          se({}, e, {
            removeAriaLabel: v == null ? void 0 : v.removeAriaLabel,
            ref: x,
            prefixCls: r,
            tabs: ut,
            className: !vt && Gt,
            tabMoving: !!Se
          })
        ),
        i.createElement(_t, { ref: P, position: 'right', extra: f, prefixCls: r })
      )
    )
  )
}
const Nt = i.forwardRef(nn)
var rn = ['renderTabBar'],
  on = ['label', 'key']
function sn(e) {
  var t = e.renderTabBar,
    a = Ee(e, rn),
    n = i.useContext(_e),
    r = n.tabs
  if (t) {
    var o = q(
      q({}, a),
      {},
      {
        panes: r.map(function (s) {
          var c = s.label,
            l = s.key,
            u = Ee(s, on)
          return i.createElement(jt, se({ tab: c, key: l, tabKey: l }, u))
        })
      }
    )
    return t(o, Nt)
  }
  return i.createElement(Nt, a)
}
function ln() {
  var e =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { inkBar: !0, tabPane: !1 },
    t
  return (
    e === !1
      ? (t = { inkBar: !1, tabPane: !1 })
      : e === !0
      ? (t = { inkBar: !0, tabPane: !1 })
      : (t = q({ inkBar: !0 }, Je(e) === 'object' ? e : {})),
    t.tabPaneMotion && t.tabPane === void 0 && (t.tabPane = !0),
    !t.tabPaneMotion && t.tabPane && (t.tabPane = !1),
    t
  )
}
var cn = [
    'id',
    'prefixCls',
    'className',
    'items',
    'direction',
    'activeKey',
    'defaultActiveKey',
    'editable',
    'animated',
    'tabPosition',
    'tabBarGutter',
    'tabBarStyle',
    'tabBarExtraContent',
    'locale',
    'moreIcon',
    'moreTransitionName',
    'destroyInactiveTabPane',
    'renderTabBar',
    'onChange',
    'onTabClick',
    'onTabScroll',
    'getPopupContainer',
    'popupClassName'
  ],
  It = 0
function dn(e, t) {
  var a,
    n = e.id,
    r = e.prefixCls,
    o = r === void 0 ? 'rc-tabs' : r,
    s = e.className,
    c = e.items,
    l = e.direction,
    u = e.activeKey,
    p = e.defaultActiveKey,
    d = e.editable,
    f = e.animated,
    y = e.tabPosition,
    v = y === void 0 ? 'top' : y,
    _ = e.tabBarGutter,
    N = e.tabBarStyle,
    S = e.tabBarExtraContent,
    C = e.locale,
    m = e.moreIcon,
    L = e.moreTransitionName,
    z = e.destroyInactiveTabPane,
    P = e.renderTabBar,
    w = e.onChange,
    j = e.onTabClick,
    x = e.onTabScroll,
    I = e.getPopupContainer,
    g = e.popupClassName,
    b = Ee(e, cn),
    $ = i.useMemo(
      function () {
        return (c || []).filter(function (B) {
          return B && Je(B) === 'object' && 'key' in B
        })
      },
      [c]
    ),
    T = l === 'rtl',
    W = ln(f),
    ae = i.useState(!1),
    Y = M(ae, 2),
    K = Y[0],
    U = Y[1]
  i.useEffect(function () {
    U(la())
  }, [])
  var le = yt(
      function () {
        var B
        return (B = $[0]) === null || B === void 0 ? void 0 : B.key
      },
      { value: u, defaultValue: p }
    ),
    te = M(le, 2),
    h = te[0],
    A = te[1],
    F = i.useState(function () {
      return $.findIndex(function (B) {
        return B.key === h
      })
    }),
    G = M(F, 2),
    D = G[0],
    H = G[1]
  i.useEffect(
    function () {
      var B = $.findIndex(function (me) {
        return me.key === h
      })
      if (B === -1) {
        var ne
        ;(B = Math.max(0, Math.min(D, $.length - 1))),
          A((ne = $[B]) === null || ne === void 0 ? void 0 : ne.key)
      }
      H(B)
    },
    [
      $.map(function (B) {
        return B.key
      }).join('_'),
      h,
      D
    ]
  )
  var ce = yt(null, { value: n }),
    ve = M(ce, 2),
    Ne = ve[0],
    Ie = ve[1]
  i.useEffect(function () {
    n || (Ie('rc-tabs-'.concat(It)), (It += 1))
  }, [])
  function ze(B, ne) {
    j == null || j(B, ne)
    var me = B !== h
    A(B), me && (w == null || w(B))
  }
  var ge = { id: Ne, activeKey: h, animated: W, tabPosition: v, rtl: T, mobile: K },
    Le,
    je = q(
      q({}, ge),
      {},
      {
        editable: d,
        locale: C,
        moreIcon: m,
        moreTransitionName: L,
        tabBarGutter: _,
        onTabClick: ze,
        onTabScroll: x,
        extra: S,
        style: N,
        panes: null,
        getPopupContainer: I,
        popupClassName: g
      }
    )
  return i.createElement(
    _e.Provider,
    { value: { tabs: $, prefixCls: o } },
    i.createElement(
      'div',
      se(
        {
          ref: t,
          id: n,
          className: R(
            o,
            ''.concat(o, '-').concat(v),
            ((a = {}),
            V(a, ''.concat(o, '-mobile'), K),
            V(a, ''.concat(o, '-editable'), d),
            V(a, ''.concat(o, '-rtl'), T),
            a),
            s
          )
        },
        b
      ),
      Le,
      i.createElement(sn, se({}, je, { renderTabBar: P })),
      i.createElement(Va, se({ destroyInactiveTabPane: z }, ge, { animated: W }))
    )
  )
}
var un = i.forwardRef(dn)
const pn = { motionAppear: !1, motionEnter: !0, motionLeave: !0 }
function bn(e) {
  let t =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { inkBar: !0, tabPane: !1 },
    a
  return (
    t === !1
      ? (a = { inkBar: !1, tabPane: !1 })
      : t === !0
      ? (a = { inkBar: !0, tabPane: !0 })
      : (a = Object.assign({ inkBar: !0 }, typeof t == 'object' ? t : {})),
    a.tabPane &&
      (a.tabPaneMotion = Object.assign(Object.assign({}, pn), { motionName: ca(e, 'switch') })),
    a
  )
}
var fn =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var a = {}
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n])
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
        t.indexOf(n[r]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
          (a[n[r]] = e[n[r]])
    return a
  }
function vn(e) {
  return e.filter((t) => t)
}
function gn(e, t) {
  if (e) return e
  const a = da(t).map((n) => {
    if (i.isValidElement(n)) {
      const { key: r, props: o } = n,
        s = o || {},
        { tab: c } = s,
        l = fn(s, ['tab'])
      return Object.assign(Object.assign({ key: String(r) }, l), { label: c })
    }
    return null
  })
  return vn(a)
}
const mn = () => null,
  hn = mn,
  $n = (e) => {
    const { componentCls: t, motionDurationSlow: a } = e
    return [
      {
        [t]: {
          [`${t}-switch`]: {
            '&-appear, &-enter': {
              transition: 'none',
              '&-start': { opacity: 0 },
              '&-active': { opacity: 1, transition: `opacity ${a}` }
            },
            '&-leave': {
              position: 'absolute',
              transition: 'none',
              inset: 0,
              '&-start': { opacity: 1 },
              '&-active': { opacity: 0, transition: `opacity ${a}` }
            }
          }
        }
      },
      [St(e, 'slide-up'), St(e, 'slide-down')]
    ]
  },
  yn = $n,
  Sn = (e) => {
    const {
      componentCls: t,
      tabsCardHorizontalPadding: a,
      tabsCardHeadBackground: n,
      tabsCardGutter: r,
      colorSplit: o
    } = e
    return {
      [`${t}-card`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab`]: {
            margin: 0,
            padding: a,
            background: n,
            border: `${e.lineWidth}px ${e.lineType} ${o}`,
            transition: `all ${e.motionDurationSlow} ${e.motionEaseInOut}`
          },
          [`${t}-tab-active`]: { color: e.colorPrimary, background: e.colorBgContainer },
          [`${t}-ink-bar`]: { visibility: 'hidden' }
        },
        [`&${t}-top, &${t}-bottom`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            [`${t}-tab + ${t}-tab`]: { marginLeft: { _skip_check_: !0, value: `${r}px` } }
          }
        },
        [`&${t}-top`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            [`${t}-tab`]: { borderRadius: `${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0` },
            [`${t}-tab-active`]: { borderBottomColor: e.colorBgContainer }
          }
        },
        [`&${t}-bottom`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            [`${t}-tab`]: { borderRadius: `0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px` },
            [`${t}-tab-active`]: { borderTopColor: e.colorBgContainer }
          }
        },
        [`&${t}-left, &${t}-right`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: { [`${t}-tab + ${t}-tab`]: { marginTop: `${r}px` } }
        },
        [`&${t}-left`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            [`${t}-tab`]: {
              borderRadius: {
                _skip_check_: !0,
                value: `${e.borderRadiusLG}px 0 0 ${e.borderRadiusLG}px`
              }
            },
            [`${t}-tab-active`]: {
              borderRightColor: { _skip_check_: !0, value: e.colorBgContainer }
            }
          }
        },
        [`&${t}-right`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            [`${t}-tab`]: {
              borderRadius: {
                _skip_check_: !0,
                value: `0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px 0`
              }
            },
            [`${t}-tab-active`]: {
              borderLeftColor: { _skip_check_: !0, value: e.colorBgContainer }
            }
          }
        }
      }
    }
  },
  xn = (e) => {
    const { componentCls: t, tabsHoverColor: a, dropdownEdgeChildVerticalPadding: n } = e
    return {
      [`${t}-dropdown`]: Object.assign(Object.assign({}, Ze(e)), {
        position: 'absolute',
        top: -9999,
        left: { _skip_check_: !0, value: -9999 },
        zIndex: e.zIndexPopup,
        display: 'block',
        '&-hidden': { display: 'none' },
        [`${t}-dropdown-menu`]: {
          maxHeight: e.tabsDropdownHeight,
          margin: 0,
          padding: `${n}px 0`,
          overflowX: 'hidden',
          overflowY: 'auto',
          textAlign: { _skip_check_: !0, value: 'left' },
          listStyleType: 'none',
          backgroundColor: e.colorBgContainer,
          backgroundClip: 'padding-box',
          borderRadius: e.borderRadiusLG,
          outline: 'none',
          boxShadow: e.boxShadowSecondary,
          '&-item': Object.assign(Object.assign({}, et), {
            display: 'flex',
            alignItems: 'center',
            minWidth: e.tabsDropdownWidth,
            margin: 0,
            padding: `${e.paddingXXS}px ${e.paddingSM}px`,
            color: e.colorText,
            fontWeight: 'normal',
            fontSize: e.fontSize,
            lineHeight: e.lineHeight,
            cursor: 'pointer',
            transition: `all ${e.motionDurationSlow}`,
            '> span': { flex: 1, whiteSpace: 'nowrap' },
            '&-remove': {
              flex: 'none',
              marginLeft: { _skip_check_: !0, value: e.marginSM },
              color: e.colorTextDescription,
              fontSize: e.fontSizeSM,
              background: 'transparent',
              border: 0,
              cursor: 'pointer',
              '&:hover': { color: a }
            },
            '&:hover': { background: e.controlItemBgHover },
            '&-disabled': {
              '&, &:hover': {
                color: e.colorTextDisabled,
                background: 'transparent',
                cursor: 'not-allowed'
              }
            }
          })
        }
      })
    }
  },
  Cn = (e) => {
    const { componentCls: t, margin: a, colorSplit: n } = e
    return {
      [`${t}-top, ${t}-bottom`]: {
        flexDirection: 'column',
        [`> ${t}-nav, > div > ${t}-nav`]: {
          margin: `0 0 ${a}px 0`,
          '&::before': {
            position: 'absolute',
            right: { _skip_check_: !0, value: 0 },
            left: { _skip_check_: !0, value: 0 },
            borderBottom: `${e.lineWidth}px ${e.lineType} ${n}`,
            content: "''"
          },
          [`${t}-ink-bar`]: {
            height: e.lineWidthBold,
            '&-animated': {
              transition: `width ${e.motionDurationSlow}, left ${e.motionDurationSlow},
            right ${e.motionDurationSlow}`
            }
          },
          [`${t}-nav-wrap`]: {
            '&::before, &::after': { top: 0, bottom: 0, width: e.controlHeight },
            '&::before': {
              left: { _skip_check_: !0, value: 0 },
              boxShadow: e.boxShadowTabsOverflowLeft
            },
            '&::after': {
              right: { _skip_check_: !0, value: 0 },
              boxShadow: e.boxShadowTabsOverflowRight
            },
            [`&${t}-nav-wrap-ping-left::before`]: { opacity: 1 },
            [`&${t}-nav-wrap-ping-right::after`]: { opacity: 1 }
          }
        }
      },
      [`${t}-top`]: {
        [`> ${t}-nav,
        > div > ${t}-nav`]: { '&::before': { bottom: 0 }, [`${t}-ink-bar`]: { bottom: 0 } }
      },
      [`${t}-bottom`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          order: 1,
          marginTop: `${a}px`,
          marginBottom: 0,
          '&::before': { top: 0 },
          [`${t}-ink-bar`]: { top: 0 }
        },
        [`> ${t}-content-holder, > div > ${t}-content-holder`]: { order: 0 }
      },
      [`${t}-left, ${t}-right`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          flexDirection: 'column',
          minWidth: e.controlHeight * 1.25,
          [`${t}-tab`]: { padding: `${e.paddingXS}px ${e.paddingLG}px`, textAlign: 'center' },
          [`${t}-tab + ${t}-tab`]: { margin: `${e.margin}px 0 0 0` },
          [`${t}-nav-wrap`]: {
            flexDirection: 'column',
            '&::before, &::after': {
              right: { _skip_check_: !0, value: 0 },
              left: { _skip_check_: !0, value: 0 },
              height: e.controlHeight
            },
            '&::before': { top: 0, boxShadow: e.boxShadowTabsOverflowTop },
            '&::after': { bottom: 0, boxShadow: e.boxShadowTabsOverflowBottom },
            [`&${t}-nav-wrap-ping-top::before`]: { opacity: 1 },
            [`&${t}-nav-wrap-ping-bottom::after`]: { opacity: 1 }
          },
          [`${t}-ink-bar`]: {
            width: e.lineWidthBold,
            '&-animated': {
              transition: `height ${e.motionDurationSlow}, top ${e.motionDurationSlow}`
            }
          },
          [`${t}-nav-list, ${t}-nav-operations`]: { flex: '1 0 auto', flexDirection: 'column' }
        }
      },
      [`${t}-left`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-ink-bar`]: { right: { _skip_check_: !0, value: 0 } }
        },
        [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
          marginLeft: { _skip_check_: !0, value: `-${e.lineWidth}px` },
          borderLeft: {
            _skip_check_: !0,
            value: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`
          },
          [`> ${t}-content > ${t}-tabpane`]: {
            paddingLeft: { _skip_check_: !0, value: e.paddingLG }
          }
        }
      },
      [`${t}-right`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          order: 1,
          [`${t}-ink-bar`]: { left: { _skip_check_: !0, value: 0 } }
        },
        [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
          order: 0,
          marginRight: { _skip_check_: !0, value: -e.lineWidth },
          borderRight: {
            _skip_check_: !0,
            value: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`
          },
          [`> ${t}-content > ${t}-tabpane`]: {
            paddingRight: { _skip_check_: !0, value: e.paddingLG }
          }
        }
      }
    }
  },
  wn = (e) => {
    const { componentCls: t, padding: a } = e
    return {
      [t]: {
        '&-small': {
          [`> ${t}-nav`]: { [`${t}-tab`]: { padding: `${e.paddingXS}px 0`, fontSize: e.fontSize } }
        },
        '&-large': {
          [`> ${t}-nav`]: { [`${t}-tab`]: { padding: `${a}px 0`, fontSize: e.fontSizeLG } }
        }
      },
      [`${t}-card`]: {
        [`&${t}-small`]: {
          [`> ${t}-nav`]: { [`${t}-tab`]: { padding: `${e.paddingXXS * 1.5}px ${a}px` } },
          [`&${t}-bottom`]: {
            [`> ${t}-nav ${t}-tab`]: { borderRadius: `0 0 ${e.borderRadius}px ${e.borderRadius}px` }
          },
          [`&${t}-top`]: {
            [`> ${t}-nav ${t}-tab`]: { borderRadius: `${e.borderRadius}px ${e.borderRadius}px 0 0` }
          },
          [`&${t}-right`]: {
            [`> ${t}-nav ${t}-tab`]: {
              borderRadius: {
                _skip_check_: !0,
                value: `0 ${e.borderRadius}px ${e.borderRadius}px 0`
              }
            }
          },
          [`&${t}-left`]: {
            [`> ${t}-nav ${t}-tab`]: {
              borderRadius: {
                _skip_check_: !0,
                value: `${e.borderRadius}px 0 0 ${e.borderRadius}px`
              }
            }
          }
        },
        [`&${t}-large`]: {
          [`> ${t}-nav`]: {
            [`${t}-tab`]: { padding: `${e.paddingXS}px ${a}px ${e.paddingXXS * 1.5}px` }
          }
        }
      }
    }
  },
  En = (e) => {
    const {
        componentCls: t,
        tabsActiveColor: a,
        tabsHoverColor: n,
        iconCls: r,
        tabsHorizontalGutter: o
      } = e,
      s = `${t}-tab`
    return {
      [s]: {
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        padding: `${e.paddingSM}px 0`,
        fontSize: `${e.fontSize}px`,
        background: 'transparent',
        border: 0,
        outline: 'none',
        cursor: 'pointer',
        '&-btn, &-remove': Object.assign(
          { '&:focus:not(:focus-visible), &:active': { color: a } },
          zt(e)
        ),
        '&-btn': { outline: 'none', transition: 'all 0.3s' },
        '&-remove': {
          flex: 'none',
          marginRight: { _skip_check_: !0, value: -e.marginXXS },
          marginLeft: { _skip_check_: !0, value: e.marginXS },
          color: e.colorTextDescription,
          fontSize: e.fontSizeSM,
          background: 'transparent',
          border: 'none',
          outline: 'none',
          cursor: 'pointer',
          transition: `all ${e.motionDurationSlow}`,
          '&:hover': { color: e.colorTextHeading }
        },
        '&:hover': { color: n },
        [`&${s}-active ${s}-btn`]: { color: e.colorPrimary, textShadow: e.tabsActiveTextShadow },
        [`&${s}-disabled`]: { color: e.colorTextDisabled, cursor: 'not-allowed' },
        [`&${s}-disabled ${s}-btn, &${s}-disabled ${t}-remove`]: {
          '&:focus, &:active': { color: e.colorTextDisabled }
        },
        [`& ${s}-remove ${r}`]: { margin: 0 },
        [r]: { marginRight: { _skip_check_: !0, value: e.marginSM } }
      },
      [`${s} + ${s}`]: { margin: { _skip_check_: !0, value: `0 0 0 ${o}px` } }
    }
  },
  Tn = (e) => {
    const { componentCls: t, tabsHorizontalGutter: a, iconCls: n, tabsCardGutter: r } = e
    return {
      [`${t}-rtl`]: {
        direction: 'rtl',
        [`${t}-nav`]: {
          [`${t}-tab`]: {
            margin: { _skip_check_: !0, value: `0 0 0 ${a}px` },
            [`${t}-tab:last-of-type`]: { marginLeft: { _skip_check_: !0, value: 0 } },
            [n]: {
              marginRight: { _skip_check_: !0, value: 0 },
              marginLeft: { _skip_check_: !0, value: `${e.marginSM}px` }
            },
            [`${t}-tab-remove`]: {
              marginRight: { _skip_check_: !0, value: `${e.marginXS}px` },
              marginLeft: { _skip_check_: !0, value: `-${e.marginXXS}px` },
              [n]: { margin: 0 }
            }
          }
        },
        [`&${t}-left`]: { [`> ${t}-nav`]: { order: 1 }, [`> ${t}-content-holder`]: { order: 0 } },
        [`&${t}-right`]: { [`> ${t}-nav`]: { order: 0 }, [`> ${t}-content-holder`]: { order: 1 } },
        [`&${t}-card${t}-top, &${t}-card${t}-bottom`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            [`${t}-tab + ${t}-tab`]: {
              marginRight: { _skip_check_: !0, value: `${r}px` },
              marginLeft: { _skip_check_: !0, value: 0 }
            }
          }
        }
      },
      [`${t}-dropdown-rtl`]: { direction: 'rtl' },
      [`${t}-menu-item`]: {
        [`${t}-dropdown-rtl`]: { textAlign: { _skip_check_: !0, value: 'right' } }
      }
    }
  },
  Pn = (e) => {
    const {
      componentCls: t,
      tabsCardHorizontalPadding: a,
      tabsCardHeight: n,
      tabsCardGutter: r,
      tabsHoverColor: o,
      tabsActiveColor: s,
      colorSplit: c
    } = e
    return {
      [t]: Object.assign(
        Object.assign(
          Object.assign(Object.assign({}, Ze(e)), {
            display: 'flex',
            [`> ${t}-nav, > div > ${t}-nav`]: {
              position: 'relative',
              display: 'flex',
              flex: 'none',
              alignItems: 'center',
              [`${t}-nav-wrap`]: {
                position: 'relative',
                display: 'flex',
                flex: 'auto',
                alignSelf: 'stretch',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                transform: 'translate(0)',
                '&::before, &::after': {
                  position: 'absolute',
                  zIndex: 1,
                  opacity: 0,
                  transition: `opacity ${e.motionDurationSlow}`,
                  content: "''",
                  pointerEvents: 'none'
                }
              },
              [`${t}-nav-list`]: {
                position: 'relative',
                display: 'flex',
                transition: `opacity ${e.motionDurationSlow}`
              },
              [`${t}-nav-operations`]: { display: 'flex', alignSelf: 'stretch' },
              [`${t}-nav-operations-hidden`]: {
                position: 'absolute',
                visibility: 'hidden',
                pointerEvents: 'none'
              },
              [`${t}-nav-more`]: {
                position: 'relative',
                padding: a,
                background: 'transparent',
                border: 0,
                color: e.colorText,
                '&::after': {
                  position: 'absolute',
                  right: { _skip_check_: !0, value: 0 },
                  bottom: 0,
                  left: { _skip_check_: !0, value: 0 },
                  height: e.controlHeightLG / 8,
                  transform: 'translateY(100%)',
                  content: "''"
                }
              },
              [`${t}-nav-add`]: Object.assign(
                {
                  minWidth: `${n}px`,
                  marginLeft: { _skip_check_: !0, value: `${r}px` },
                  padding: `0 ${e.paddingXS}px`,
                  background: 'transparent',
                  border: `${e.lineWidth}px ${e.lineType} ${c}`,
                  borderRadius: `${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`,
                  outline: 'none',
                  cursor: 'pointer',
                  color: e.colorText,
                  transition: `all ${e.motionDurationSlow} ${e.motionEaseInOut}`,
                  '&:hover': { color: o },
                  '&:active, &:focus:not(:focus-visible)': { color: s }
                },
                zt(e)
              )
            },
            [`${t}-extra-content`]: { flex: 'none' },
            [`${t}-ink-bar`]: {
              position: 'absolute',
              background: e.colorPrimary,
              pointerEvents: 'none'
            }
          }),
          En(e)
        ),
        {
          [`${t}-content`]: { position: 'relative', width: '100%' },
          [`${t}-content-holder`]: { flex: 'auto', minWidth: 0, minHeight: 0 },
          [`${t}-tabpane`]: { outline: 'none', '&-hidden': { display: 'none' } }
        }
      ),
      [`${t}-centered`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-nav-wrap`]: {
            [`&:not([class*='${t}-nav-wrap-ping'])`]: { justifyContent: 'center' }
          }
        }
      }
    }
  },
  Rn = Ye(
    'Tabs',
    (e) => {
      const t = e.controlHeightLG,
        a = Qe(e, {
          tabsHoverColor: e.colorPrimaryHover,
          tabsActiveColor: e.colorPrimaryActive,
          tabsCardHorizontalPadding: `${
            (t - Math.round(e.fontSize * e.lineHeight)) / 2 - e.lineWidth
          }px ${e.padding}px`,
          tabsCardHeight: t,
          tabsCardGutter: e.marginXXS / 2,
          tabsHorizontalGutter: 32,
          tabsCardHeadBackground: e.colorFillAlter,
          dropdownEdgeChildVerticalPadding: e.paddingXXS,
          tabsActiveTextShadow: '0 0 0.25px currentcolor',
          tabsDropdownHeight: 200,
          tabsDropdownWidth: 120
        })
      return [wn(a), Tn(a), Cn(a), xn(a), Sn(a), Pn(a), yn(a)]
    },
    (e) => ({ zIndexPopup: e.zIndexPopupBase + 50 })
  )
var On =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var a = {}
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n])
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
        t.indexOf(n[r]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
          (a[n[r]] = e[n[r]])
    return a
  }
function Ht(e) {
  var {
      type: t,
      className: a,
      rootClassName: n,
      size: r,
      onEdit: o,
      hideAdd: s,
      centered: c,
      addIcon: l,
      popupClassName: u,
      children: p,
      items: d,
      animated: f
    } = e,
    y = On(e, [
      'type',
      'className',
      'rootClassName',
      'size',
      'onEdit',
      'hideAdd',
      'centered',
      'addIcon',
      'popupClassName',
      'children',
      'items',
      'animated'
    ])
  const { prefixCls: v, moreIcon: _ = i.createElement(ua, null) } = y,
    { direction: N, getPrefixCls: S, getPopupContainer: C } = i.useContext(ee),
    m = S('tabs', v),
    [L, z] = Rn(m)
  let P
  t === 'editable-card' &&
    (P = {
      onEdit: (b, $) => {
        let { key: T, event: W } = $
        o == null || o(b === 'add' ? W : T, b)
      },
      removeIcon: i.createElement(pa, null),
      addIcon: l || i.createElement(ba, null),
      showAdd: s !== !0
    })
  const w = S(),
    j = gn(d, p),
    x = bn(m, f),
    I = i.useContext(Lt),
    g = r !== void 0 ? r : I
  return L(
    i.createElement(
      un,
      Object.assign(
        { direction: N, getPopupContainer: C, moreTransitionName: `${w}-slide-up` },
        y,
        {
          items: j,
          className: R(
            {
              [`${m}-${g}`]: g,
              [`${m}-card`]: ['card', 'editable-card'].includes(t),
              [`${m}-editable-card`]: t === 'editable-card',
              [`${m}-centered`]: c
            },
            a,
            n,
            z
          ),
          popupClassName: R(u, z),
          editable: P,
          moreIcon: _,
          prefixCls: m,
          animated: x
        }
      )
    )
  )
}
Ht.TabPane = hn
var _n =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var a = {}
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n])
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
        t.indexOf(n[r]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
          (a[n[r]] = e[n[r]])
    return a
  }
const Nn = (e) => {
    var { prefixCls: t, className: a, hoverable: n = !0 } = e,
      r = _n(e, ['prefixCls', 'className', 'hoverable'])
    const { getPrefixCls: o } = i.useContext(ee),
      s = o('card', t),
      c = R(`${s}-grid`, a, { [`${s}-grid-hoverable`]: n })
    return i.createElement('div', Object.assign({}, r, { className: c }))
  },
  kt = Nn,
  In = (e) => {
    const {
      antCls: t,
      componentCls: a,
      cardHeadHeight: n,
      cardPaddingBase: r,
      cardHeadTabsMarginBottom: o
    } = e
    return Object.assign(
      Object.assign(
        {
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          minHeight: n,
          marginBottom: -1,
          padding: `0 ${r}px`,
          color: e.colorTextHeading,
          fontWeight: e.fontWeightStrong,
          fontSize: e.fontSizeLG,
          background: 'transparent',
          borderBottom: `${e.lineWidth}px ${e.lineType} ${e.colorBorderSecondary}`,
          borderRadius: `${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`
        },
        Pe()
      ),
      {
        '&-wrapper': { width: '100%', display: 'flex', alignItems: 'center' },
        '&-title': Object.assign(Object.assign({ display: 'inline-block', flex: 1 }, et), {
          [`
          > ${a}-typography,
          > ${a}-typography-edit-content
        `]: { insetInlineStart: 0, marginTop: 0, marginBottom: 0 }
        }),
        [`${t}-tabs-top`]: {
          clear: 'both',
          marginBottom: o,
          color: e.colorText,
          fontWeight: 'normal',
          fontSize: e.fontSize,
          '&-bar': { borderBottom: `${e.lineWidth}px ${e.lineType} ${e.colorBorderSecondary}` }
        }
      }
    )
  },
  zn = (e) => {
    const { cardPaddingBase: t, colorBorderSecondary: a, cardShadow: n, lineWidth: r } = e
    return {
      width: '33.33%',
      padding: t,
      border: 0,
      borderRadius: 0,
      boxShadow: `
      ${r}px 0 0 0 ${a},
      0 ${r}px 0 0 ${a},
      ${r}px ${r}px 0 0 ${a},
      ${r}px 0 0 0 ${a} inset,
      0 ${r}px 0 0 ${a} inset;
    `,
      transition: `all ${e.motionDurationMid}`,
      '&-hoverable:hover': { position: 'relative', zIndex: 1, boxShadow: n }
    }
  },
  Ln = (e) => {
    const {
      componentCls: t,
      iconCls: a,
      cardActionsLiMargin: n,
      cardActionsIconSize: r,
      colorBorderSecondary: o
    } = e
    return Object.assign(
      Object.assign(
        {
          margin: 0,
          padding: 0,
          listStyle: 'none',
          background: e.colorBgContainer,
          borderTop: `${e.lineWidth}px ${e.lineType} ${o}`,
          display: 'flex',
          borderRadius: `0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px `
        },
        Pe()
      ),
      {
        '& > li': {
          margin: n,
          color: e.colorTextDescription,
          textAlign: 'center',
          '> span': {
            position: 'relative',
            display: 'block',
            minWidth: e.cardActionsIconSize * 2,
            fontSize: e.fontSize,
            lineHeight: e.lineHeight,
            cursor: 'pointer',
            '&:hover': { color: e.colorPrimary, transition: `color ${e.motionDurationMid}` },
            [`a:not(${t}-btn), > ${a}`]: {
              display: 'inline-block',
              width: '100%',
              color: e.colorTextDescription,
              lineHeight: `${e.fontSize * e.lineHeight}px`,
              transition: `color ${e.motionDurationMid}`,
              '&:hover': { color: e.colorPrimary }
            },
            [`> ${a}`]: { fontSize: r, lineHeight: `${r * e.lineHeight}px` }
          },
          '&:not(:last-child)': { borderInlineEnd: `${e.lineWidth}px ${e.lineType} ${o}` }
        }
      }
    )
  },
  jn = (e) =>
    Object.assign(Object.assign({ margin: `-${e.marginXXS}px 0`, display: 'flex' }, Pe()), {
      '&-avatar': { paddingInlineEnd: e.padding },
      '&-detail': {
        overflow: 'hidden',
        flex: 1,
        '> div:not(:last-child)': { marginBottom: e.marginXS }
      },
      '&-title': Object.assign(
        { color: e.colorTextHeading, fontWeight: e.fontWeightStrong, fontSize: e.fontSizeLG },
        et
      ),
      '&-description': { color: e.colorTextDescription }
    }),
  Bn = (e) => {
    const { componentCls: t, cardPaddingBase: a, colorFillAlter: n } = e
    return {
      [`${t}-head`]: { padding: `0 ${a}px`, background: n, '&-title': { fontSize: e.fontSize } },
      [`${t}-body`]: { padding: `${e.padding}px ${a}px` }
    }
  },
  Mn = (e) => {
    const { componentCls: t } = e
    return { overflow: 'hidden', [`${t}-body`]: { userSelect: 'none' } }
  },
  An = (e) => {
    const {
      componentCls: t,
      cardShadow: a,
      cardHeadPadding: n,
      colorBorderSecondary: r,
      boxShadowTertiary: o,
      cardPaddingBase: s
    } = e
    return {
      [t]: Object.assign(Object.assign({}, Ze(e)), {
        position: 'relative',
        background: e.colorBgContainer,
        borderRadius: e.borderRadiusLG,
        [`&:not(${t}-bordered)`]: { boxShadow: o },
        [`${t}-head`]: In(e),
        [`${t}-extra`]: {
          marginInlineStart: 'auto',
          color: '',
          fontWeight: 'normal',
          fontSize: e.fontSize
        },
        [`${t}-body`]: Object.assign(
          { padding: s, borderRadius: ` 0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px` },
          Pe()
        ),
        [`${t}-grid`]: zn(e),
        [`${t}-cover`]: {
          '> *': { display: 'block', width: '100%' },
          img: { borderRadius: `${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0` }
        },
        [`${t}-actions`]: Ln(e),
        [`${t}-meta`]: jn(e)
      }),
      [`${t}-bordered`]: {
        border: `${e.lineWidth}px ${e.lineType} ${r}`,
        [`${t}-cover`]: { marginTop: -1, marginInlineStart: -1, marginInlineEnd: -1 }
      },
      [`${t}-hoverable`]: {
        cursor: 'pointer',
        transition: `box-shadow ${e.motionDurationMid}, border-color ${e.motionDurationMid}`,
        '&:hover': { borderColor: 'transparent', boxShadow: a }
      },
      [`${t}-contain-grid`]: {
        [`${t}-body`]: { display: 'flex', flexWrap: 'wrap' },
        [`&:not(${t}-loading) ${t}-body`]: {
          marginBlockStart: -e.lineWidth,
          marginInlineStart: -e.lineWidth,
          padding: 0
        }
      },
      [`${t}-contain-tabs`]: {
        [`> ${t}-head`]: { [`${t}-head-title, ${t}-extra`]: { paddingTop: n } }
      },
      [`${t}-type-inner`]: Bn(e),
      [`${t}-loading`]: Mn(e),
      [`${t}-rtl`]: { direction: 'rtl' }
    }
  },
  Hn = (e) => {
    const { componentCls: t, cardPaddingSM: a, cardHeadHeightSM: n } = e
    return {
      [`${t}-small`]: {
        [`> ${t}-head`]: {
          minHeight: n,
          padding: `0 ${a}px`,
          fontSize: e.fontSize,
          [`> ${t}-head-wrapper`]: { [`> ${t}-extra`]: { fontSize: e.fontSize } }
        },
        [`> ${t}-body`]: { padding: a }
      },
      [`${t}-small${t}-contain-tabs`]: {
        [`> ${t}-head`]: {
          [`${t}-head-title, ${t}-extra`]: {
            minHeight: n,
            paddingTop: 0,
            display: 'flex',
            alignItems: 'center'
          }
        }
      }
    }
  },
  kn = Ye('Card', (e) => {
    const t = Qe(e, {
      cardShadow: e.boxShadowCard,
      cardHeadHeight: e.fontSizeLG * e.lineHeightLG + e.padding * 2,
      cardHeadHeightSM: e.fontSize * e.lineHeight + e.paddingXS * 2,
      cardHeadPadding: e.padding,
      cardPaddingBase: e.paddingLG,
      cardHeadTabsMarginBottom: -e.padding - e.lineWidth,
      cardActionsLiMargin: `${e.paddingSM}px 0`,
      cardActionsIconSize: e.fontSize,
      cardPaddingSM: 12
    })
    return [An(t), Hn(t)]
  })
var Dn =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var a = {}
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n])
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
        t.indexOf(n[r]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
          (a[n[r]] = e[n[r]])
    return a
  }
function Gn(e) {
  return e.map((a, n) =>
    i.createElement(
      'li',
      { style: { width: `${100 / e.length}%` }, key: `action-${n}` },
      i.createElement('span', null, a)
    )
  )
}
const Wn = i.forwardRef((e, t) => {
    const { getPrefixCls: a, direction: n } = i.useContext(ee),
      r = i.useContext(Lt),
      o = (D) => {
        var H
        ;(H = e.onTabChange) === null || H === void 0 || H.call(e, D)
      },
      s = () => {
        let D
        return (
          i.Children.forEach(e.children, (H) => {
            H && H.type && H.type === kt && (D = !0)
          }),
          D
        )
      },
      {
        prefixCls: c,
        className: l,
        rootClassName: u,
        extra: p,
        headStyle: d = {},
        bodyStyle: f = {},
        title: y,
        loading: v,
        bordered: _ = !0,
        size: N,
        type: S,
        cover: C,
        actions: m,
        tabList: L,
        children: z,
        activeTabKey: P,
        defaultActiveTabKey: w,
        tabBarExtraContent: j,
        hoverable: x,
        tabProps: I = {}
      } = e,
      g = Dn(e, [
        'prefixCls',
        'className',
        'rootClassName',
        'extra',
        'headStyle',
        'bodyStyle',
        'title',
        'loading',
        'bordered',
        'size',
        'type',
        'cover',
        'actions',
        'tabList',
        'children',
        'activeTabKey',
        'defaultActiveTabKey',
        'tabBarExtraContent',
        'hoverable',
        'tabProps'
      ]),
      b = a('card', c),
      [$, T] = kn(b),
      W = i.createElement(Ka, { loading: !0, active: !0, paragraph: { rows: 4 }, title: !1 }, z),
      ae = P !== void 0,
      Y = Object.assign(Object.assign({}, I), {
        [ae ? 'activeKey' : 'defaultActiveKey']: ae ? P : w,
        tabBarExtraContent: j
      })
    let K
    const U =
      L && L.length
        ? i.createElement(
            Ht,
            Object.assign({ size: 'large' }, Y, {
              className: `${b}-head-tabs`,
              onChange: o,
              items: L.map((D) => {
                var H
                return {
                  label: D.tab,
                  key: D.key,
                  disabled: (H = D.disabled) !== null && H !== void 0 ? H : !1
                }
              })
            })
          )
        : null
    ;(y || p || U) &&
      (K = i.createElement(
        'div',
        { className: `${b}-head`, style: d },
        i.createElement(
          'div',
          { className: `${b}-head-wrapper` },
          y && i.createElement('div', { className: `${b}-head-title` }, y),
          p && i.createElement('div', { className: `${b}-extra` }, p)
        ),
        U
      ))
    const le = C ? i.createElement('div', { className: `${b}-cover` }, C) : null,
      te = i.createElement('div', { className: `${b}-body`, style: f }, v ? W : z),
      h = m && m.length ? i.createElement('ul', { className: `${b}-actions` }, Gn(m)) : null,
      A = Te(g, ['onTabChange']),
      F = N || r,
      G = R(
        b,
        {
          [`${b}-loading`]: v,
          [`${b}-bordered`]: _,
          [`${b}-hoverable`]: x,
          [`${b}-contain-grid`]: s(),
          [`${b}-contain-tabs`]: L && L.length,
          [`${b}-${F}`]: F,
          [`${b}-type-${S}`]: !!S,
          [`${b}-rtl`]: n === 'rtl'
        },
        l,
        u,
        T
      )
    return $(i.createElement('div', Object.assign({ ref: t }, A, { className: G }), K, le, te, h))
  }),
  Kn = Wn
var Xn =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var a = {}
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n])
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
        t.indexOf(n[r]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
          (a[n[r]] = e[n[r]])
    return a
  }
const Vn = (e) => {
    const { prefixCls: t, className: a, avatar: n, title: r, description: o } = e,
      s = Xn(e, ['prefixCls', 'className', 'avatar', 'title', 'description']),
      { getPrefixCls: c } = i.useContext(ee),
      l = c('card', t),
      u = R(`${l}-meta`, a),
      p = n ? i.createElement('div', { className: `${l}-meta-avatar` }, n) : null,
      d = r ? i.createElement('div', { className: `${l}-meta-title` }, r) : null,
      f = o ? i.createElement('div', { className: `${l}-meta-description` }, o) : null,
      y = d || f ? i.createElement('div', { className: `${l}-meta-detail` }, d, f) : null
    return i.createElement('div', Object.assign({}, s, { className: u }), p, y)
  },
  Fn = Vn,
  tt = Kn
tt.Grid = kt
tt.Meta = Fn
const Un = tt
class qn {
  constructor(t) {
    ;(this.opts = t || {}),
      (this.source = t.source),
      (this.output = t.output),
      (this.delay = t.delay || 120),
      (this.chain = { parent: null, dom: this.output, val: [] }),
      typeof this.opts.done != 'function' && (this.opts.done = function () {})
  }
  init() {
    this.chain.val = this.convert(this.source, this.chain.val)
  }
  convert(t, a) {
    const n = Array.from(t.childNodes)
    for (let r = 0; r < n.length; r++) {
      const o = n[r]
      if (o.nodeType === 3) a = a.concat(o.nodeValue.split(''))
      else if (o.nodeType === 1) {
        let s = []
        ;(s = this.convert(o, s)), a.push({ dom: o, val: s })
      }
    }
    return a
  }
  print(t, a, n) {
    setTimeout(function () {
      t.appendChild(document.createTextNode(a)), n()
    }, this.delay)
  }
  play(t) {
    if (!t.val.length) {
      t.parent ? this.play(t.parent) : this.opts.done()
      return
    }
    const a = t.val.shift()
    if (typeof a == 'string')
      this.print(t.dom, a, () => {
        this.play(t)
      })
    else {
      const n = a.dom.cloneNode()
      t.dom.appendChild(n), this.play({ parent: t, dom: n, val: a.val })
    }
  }
  start() {
    this.init(), this.play(this.chain)
  }
}
const Jn = (e) => {
  const { title: t, source: a, children: n, className: r } = e,
    o = i.useRef(),
    s = i.useRef()
  return (
    i.useEffect(() => {
      new qn({ source: o.current, output: s.current, delay: 30 }).start()
    }, []),
    xt('div', {
      className: 'card-wrapper',
      children: [
        xt(Un, {
          bordered: !1,
          className: 'card-item',
          title: t,
          children: [
            Ke('div', {
              style: { display: 'none' },
              ref: o,
              dangerouslySetInnerHTML: { __html: a }
            }),
            Ke('div', { ref: s })
          ]
        }),
        Ke('div', { className: r, style: { flex: 1 }, children: n })
      ]
    })
  )
}
export { Un as C, Jn as P, Ht as T }
//# sourceMappingURL=index-75272ee3.js.map

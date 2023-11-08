import {
  r as l,
  _ as $t,
  a2 as wt,
  O as _e,
  g as Ze,
  i as ge,
  h as ne,
  e as A,
  a3 as je,
  a4 as et,
  m as tt,
  n as rt,
  a5 as ke,
  p as nt,
  l as $e,
  v as Ct,
  a6 as St,
  a7 as Et,
  a8 as It,
  a9 as xt,
  G as we,
  aa as Ot,
  ab as ot,
  ac as at,
  ad as it,
  k as ie,
  ae as st,
  f as Ie,
  R as Ne,
  af as Pt,
  ag as Dt,
  ah as ze,
  ai as Ft,
  C as lt,
  aj as Lt,
  s as Rt,
  ak as jt,
  x as We,
  al as Te,
  am as He,
  Y as Be,
  an as ct,
  Q as dt,
  ao as Nt,
  o as Tt,
  ap as Mt,
  u as kt,
  aq as At,
  ar as Ut,
  a as Xe,
  J as _t,
  as as ce,
  j as K,
  at as zt,
  d as qe,
  I as xe,
  W as Oe
} from './index-7ec5c925.js'
import { u as Wt, s as Ht } from './user-d95f46ea.js'
import { D as Bt } from './DeleteOutlined-51525ffd.js'
import { P as Xt } from './PlusOutlined-b08ffc51.js'
var qt = {
    percent: 0,
    prefixCls: 'rc-progress',
    strokeColor: '#2db7f5',
    strokeLinecap: 'round',
    strokeWidth: 1,
    trailColor: '#D9D9D9',
    trailWidth: 1,
    gapPosition: 'bottom'
  },
  Vt = function () {
    var t = l.useRef([]),
      r = l.useRef(null)
    return (
      l.useEffect(function () {
        var n = Date.now(),
          a = !1
        t.current.forEach(function (i) {
          if (i) {
            a = !0
            var s = i.style
            ;(s.transitionDuration = '.3s, .3s, .3s, .06s'),
              r.current && n - r.current < 100 && (s.transitionDuration = '0s, 0s')
          }
        }),
          a && (r.current = Date.now())
      }),
      t.current
    )
  },
  Ve = 0,
  Gt = wt()
function Kt() {
  var e
  return Gt ? ((e = Ve), (Ve += 1)) : (e = 'TEST_OR_SSR'), e
}
const Jt = function (e) {
  var t = l.useState(),
    r = $t(t, 2),
    n = r[0],
    a = r[1]
  return (
    l.useEffect(function () {
      a('rc_progress_'.concat(Kt()))
    }, []),
    e || n
  )
}
var Yt = [
  'id',
  'prefixCls',
  'steps',
  'strokeWidth',
  'trailWidth',
  'gapDegree',
  'gapPosition',
  'trailColor',
  'strokeLinecap',
  'style',
  'className',
  'strokeColor',
  'percent'
]
function Ge(e) {
  return +e.replace('%', '')
}
function Ke(e) {
  var t = e ?? []
  return Array.isArray(t) ? t : [t]
}
var me = 100,
  Pe = function (t, r, n, a, i, s, o, d, c, p) {
    var m = arguments.length > 10 && arguments[10] !== void 0 ? arguments[10] : 0,
      f = (n / 100) * 360 * ((360 - s) / 360),
      y = s === 0 ? 0 : { bottom: 0, top: 180, left: 90, right: -90 }[o],
      h = ((100 - a) / 100) * r
    return (
      c === 'round' && a !== 100 && ((h += p / 2), h >= r && (h = r - 0.01)),
      {
        stroke: typeof d == 'string' ? d : void 0,
        strokeDasharray: ''.concat(r, 'px ').concat(t),
        strokeDashoffset: h + m,
        transform: 'rotate('.concat(i + f + y, 'deg)'),
        transformOrigin: '0 0',
        transition:
          'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s',
        fillOpacity: 0
      }
    )
  },
  Qt = function (t) {
    var r = _e(_e({}, qt), t),
      n = r.id,
      a = r.prefixCls,
      i = r.steps,
      s = r.strokeWidth,
      o = r.trailWidth,
      d = r.gapDegree,
      c = d === void 0 ? 0 : d,
      p = r.gapPosition,
      m = r.trailColor,
      f = r.strokeLinecap,
      y = r.style,
      h = r.className,
      I = r.strokeColor,
      $ = r.percent,
      v = Ze(r, Yt),
      x = Jt(n),
      O = ''.concat(x, '-gradient'),
      w = me / 2 - s / 2,
      u = Math.PI * 2 * w,
      P = c > 0 ? 90 + c / 2 : -90,
      C = u * ((360 - c) / 360),
      X = ge(i) === 'object' ? i : { count: i, space: 2 },
      j = X.count,
      D = X.space,
      B = Pe(u, C, 0, 100, P, c, p, m, f, s),
      Y = Ke($),
      q = Ke(I),
      W = q.find(function (H) {
        return H && ge(H) === 'object'
      }),
      L = Vt(),
      Q = function () {
        var _ = 0
        return Y.map(function (M, V) {
          var g = q[V] || q[q.length - 1],
            F = g && ge(g) === 'object' ? 'url(#'.concat(O, ')') : void 0,
            k = Pe(u, C, _, M, P, c, p, g, f, s)
          return (
            (_ += M),
            l.createElement('circle', {
              key: V,
              className: ''.concat(a, '-circle-path'),
              r: w,
              cx: 0,
              cy: 0,
              stroke: F,
              strokeLinecap: f,
              strokeWidth: s,
              opacity: M === 0 ? 0 : 1,
              style: k,
              ref: function (G) {
                L[V] = G
              }
            })
          )
        }).reverse()
      },
      oe = function () {
        var _ = Math.round(j * (Y[0] / 100)),
          M = 100 / j,
          V = 0
        return new Array(j).fill(null).map(function (g, F) {
          var k = F <= _ - 1 ? q[0] : m,
            U = k && ge(k) === 'object' ? 'url(#'.concat(O, ')') : void 0,
            G = Pe(u, C, V, M, P, c, p, k, 'butt', s, D)
          return (
            (V += ((C - G.strokeDashoffset + D) * 100) / C),
            l.createElement('circle', {
              key: F,
              className: ''.concat(a, '-circle-path'),
              r: w,
              cx: 0,
              cy: 0,
              stroke: U,
              strokeWidth: s,
              opacity: 1,
              style: G,
              ref: function (de) {
                L[F] = de
              }
            })
          )
        })
      }
    return l.createElement(
      'svg',
      ne(
        {
          className: A(''.concat(a, '-circle'), h),
          viewBox: ''
            .concat(-me / 2, ' ')
            .concat(-me / 2, ' ')
            .concat(me, ' ')
            .concat(me),
          style: y,
          id: n,
          role: 'presentation'
        },
        v
      ),
      W &&
        l.createElement(
          'defs',
          null,
          l.createElement(
            'linearGradient',
            { id: O, x1: '100%', y1: '0%', x2: '0%', y2: '0%' },
            Object.keys(W)
              .sort(function (H, _) {
                return Ge(H) - Ge(_)
              })
              .map(function (H, _) {
                return l.createElement('stop', { key: _, offset: H, stopColor: W[H] })
              })
          )
        ),
      !j &&
        l.createElement('circle', {
          className: ''.concat(a, '-circle-trail'),
          r: w,
          cx: 0,
          cy: 0,
          stroke: m,
          strokeLinecap: f,
          strokeWidth: o || s,
          style: B
        }),
      j ? oe() : Q()
    )
  }
function se(e) {
  return !e || e < 0 ? 0 : e > 100 ? 100 : e
}
function ye(e) {
  let { success: t, successPercent: r } = e,
    n = r
  return t && 'progress' in t && (n = t.progress), t && 'percent' in t && (n = t.percent), n
}
const Zt = (e) => {
    let { percent: t, success: r, successPercent: n } = e
    const a = se(ye({ success: r, successPercent: n }))
    return [a, se(se(t) - a)]
  },
  er = (e) => {
    let { success: t = {}, strokeColor: r } = e
    const { strokeColor: n } = t
    return [n || je.green, r || null]
  },
  Ce = (e, t, r) => {
    var n, a, i, s
    let o = -1,
      d = -1
    if (t === 'step') {
      const c = r.steps,
        p = r.strokeWidth
      typeof e == 'string' || typeof e > 'u'
        ? ((o = e === 'small' ? 2 : 14), (d = p ?? 8))
        : typeof e == 'number'
        ? ([o, d] = [e, e])
        : ([o = 14, d = 8] = e),
        (o *= c)
    } else if (t === 'line') {
      const c = r == null ? void 0 : r.strokeWidth
      typeof e == 'string' || typeof e > 'u'
        ? (d = c || (e === 'small' ? 6 : 8))
        : typeof e == 'number'
        ? ([o, d] = [e, e])
        : ([o = -1, d = 8] = e)
    } else
      (t === 'circle' || t === 'dashboard') &&
        (typeof e == 'string' || typeof e > 'u'
          ? ([o, d] = e === 'small' ? [60, 60] : [120, 120])
          : typeof e == 'number'
          ? ([o, d] = [e, e])
          : ((o =
              (a = (n = e[0]) !== null && n !== void 0 ? n : e[1]) !== null && a !== void 0
                ? a
                : 120),
            (d =
              (s = (i = e[0]) !== null && i !== void 0 ? i : e[1]) !== null && s !== void 0
                ? s
                : 120)))
    return [o, d]
  },
  tr = 3,
  rr = (e) => (tr / e) * 100,
  nr = (e) => {
    const {
        prefixCls: t,
        trailColor: r = null,
        strokeLinecap: n = 'round',
        gapPosition: a,
        gapDegree: i,
        width: s = 120,
        type: o,
        children: d,
        success: c,
        size: p
      } = e,
      m = p ?? [s, s],
      [f, y] = Ce(m, 'circle')
    let { strokeWidth: h } = e
    h === void 0 && (h = Math.max(rr(f), 6))
    const I = { width: f, height: y, fontSize: f * 0.15 + 6 },
      $ = l.useMemo(() => {
        if (i || i === 0) return i
        if (o === 'dashboard') return 75
      }, [i, o]),
      v = a || (o === 'dashboard' && 'bottom') || void 0,
      x = Object.prototype.toString.call(e.strokeColor) === '[object Object]',
      O = er({ success: c, strokeColor: e.strokeColor }),
      w = A(`${t}-inner`, { [`${t}-circle-gradient`]: x }),
      u = l.createElement(Qt, {
        percent: Zt(e),
        strokeWidth: h,
        trailWidth: h,
        strokeColor: O,
        strokeLinecap: n,
        trailColor: r,
        prefixCls: t,
        gapDegree: $,
        gapPosition: v
      })
    return l.createElement(
      'div',
      { className: w, style: I },
      f <= 20
        ? l.createElement(et, { title: d }, l.createElement('span', null, u))
        : l.createElement(l.Fragment, null, u, d)
    )
  },
  or = nr
var ar =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var r = {}
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n])
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
        t.indexOf(n[a]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
          (r[n[a]] = e[n[a]])
    return r
  }
const ir = (e) => {
    let t = []
    return (
      Object.keys(e).forEach((r) => {
        const n = parseFloat(r.replace(/%/g, ''))
        isNaN(n) || t.push({ key: n, value: e[r] })
      }),
      (t = t.sort((r, n) => r.key - n.key)),
      t
        .map((r) => {
          let { key: n, value: a } = r
          return `${a} ${n}%`
        })
        .join(', ')
    )
  },
  sr = (e, t) => {
    const {
        from: r = je.blue,
        to: n = je.blue,
        direction: a = t === 'rtl' ? 'to left' : 'to right'
      } = e,
      i = ar(e, ['from', 'to', 'direction'])
    if (Object.keys(i).length !== 0) {
      const s = ir(i)
      return { backgroundImage: `linear-gradient(${a}, ${s})` }
    }
    return { backgroundImage: `linear-gradient(${a}, ${r}, ${n})` }
  },
  lr = (e) => {
    const {
        prefixCls: t,
        direction: r,
        percent: n,
        size: a,
        strokeWidth: i,
        strokeColor: s,
        strokeLinecap: o = 'round',
        children: d,
        trailColor: c = null,
        success: p
      } = e,
      m = s && typeof s != 'string' ? sr(s, r) : { backgroundColor: s },
      f = o === 'square' || o === 'butt' ? 0 : void 0,
      y = { backgroundColor: c || void 0, borderRadius: f },
      h = a ?? [-1, i || (a === 'small' ? 6 : 8)],
      [I, $] = Ce(h, 'line', { strokeWidth: i }),
      v = Object.assign({ width: `${se(n)}%`, height: $, borderRadius: f }, m),
      x = ye(e),
      O = {
        width: `${se(x)}%`,
        height: $,
        borderRadius: f,
        backgroundColor: p == null ? void 0 : p.strokeColor
      },
      w = { width: I < 0 ? '100%' : I, height: $ }
    return l.createElement(
      l.Fragment,
      null,
      l.createElement(
        'div',
        { className: `${t}-outer`, style: w },
        l.createElement(
          'div',
          { className: `${t}-inner`, style: y },
          l.createElement('div', { className: `${t}-bg`, style: v }),
          x !== void 0 ? l.createElement('div', { className: `${t}-success-bg`, style: O }) : null
        )
      ),
      d
    )
  },
  cr = lr,
  dr = (e) => {
    const {
        size: t,
        steps: r,
        percent: n = 0,
        strokeWidth: a = 8,
        strokeColor: i,
        trailColor: s = null,
        prefixCls: o,
        children: d
      } = e,
      c = Math.round(r * (n / 100)),
      m = t ?? [t === 'small' ? 2 : 14, a],
      [f, y] = Ce(m, 'step', { steps: r, strokeWidth: a }),
      h = f / r,
      I = new Array(r)
    for (let $ = 0; $ < r; $++) {
      const v = Array.isArray(i) ? i[$] : i
      I[$] = l.createElement('div', {
        key: $,
        className: A(`${o}-steps-item`, { [`${o}-steps-item-active`]: $ <= c - 1 }),
        style: { backgroundColor: $ <= c - 1 ? v : s, width: h, height: y }
      })
    }
    return l.createElement('div', { className: `${o}-steps-outer` }, I, d)
  },
  ur = dr,
  pr = new ke('antProgressActive', {
    '0%': { transform: 'translateX(-100%) scaleX(0)', opacity: 0.1 },
    '20%': { transform: 'translateX(-100%) scaleX(0)', opacity: 0.5 },
    to: { transform: 'translateX(0) scaleX(1)', opacity: 0 }
  }),
  fr = (e) => {
    const { componentCls: t, iconCls: r } = e
    return {
      [t]: Object.assign(Object.assign({}, nt(e)), {
        display: 'inline-block',
        '&-rtl': { direction: 'rtl' },
        '&-line': {
          position: 'relative',
          width: '100%',
          fontSize: e.fontSize,
          marginInlineEnd: e.marginXS,
          marginBottom: e.marginXS
        },
        [`${t}-outer`]: { display: 'inline-block', width: '100%' },
        [`&${t}-show-info`]: {
          [`${t}-outer`]: {
            marginInlineEnd: `calc(-2em - ${e.marginXS}px)`,
            paddingInlineEnd: `calc(2em + ${e.paddingXS}px)`
          }
        },
        [`${t}-inner`]: {
          position: 'relative',
          display: 'inline-block',
          width: '100%',
          overflow: 'hidden',
          verticalAlign: 'middle',
          backgroundColor: e.progressRemainingColor,
          borderRadius: e.progressLineRadius
        },
        [`${t}-inner:not(${t}-circle-gradient)`]: { [`${t}-circle-path`]: { stroke: e.colorInfo } },
        [`${t}-success-bg, ${t}-bg`]: {
          position: 'relative',
          backgroundColor: e.colorInfo,
          borderRadius: e.progressLineRadius,
          transition: `all ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`
        },
        [`${t}-success-bg`]: {
          position: 'absolute',
          insetBlockStart: 0,
          insetInlineStart: 0,
          backgroundColor: e.colorSuccess
        },
        [`${t}-text`]: {
          display: 'inline-block',
          width: '2em',
          marginInlineStart: e.marginXS,
          color: e.progressInfoTextColor,
          lineHeight: 1,
          whiteSpace: 'nowrap',
          textAlign: 'start',
          verticalAlign: 'middle',
          wordBreak: 'normal',
          [r]: { fontSize: e.fontSize }
        },
        [`&${t}-status-active`]: {
          [`${t}-bg::before`]: {
            position: 'absolute',
            inset: 0,
            backgroundColor: e.colorBgContainer,
            borderRadius: e.progressLineRadius,
            opacity: 0,
            animationName: pr,
            animationDuration: e.progressActiveMotionDuration,
            animationTimingFunction: e.motionEaseOutQuint,
            animationIterationCount: 'infinite',
            content: '""'
          }
        },
        [`&${t}-status-exception`]: {
          [`${t}-bg`]: { backgroundColor: e.colorError },
          [`${t}-text`]: { color: e.colorError }
        },
        [`&${t}-status-exception ${t}-inner:not(${t}-circle-gradient)`]: {
          [`${t}-circle-path`]: { stroke: e.colorError }
        },
        [`&${t}-status-success`]: {
          [`${t}-bg`]: { backgroundColor: e.colorSuccess },
          [`${t}-text`]: { color: e.colorSuccess }
        },
        [`&${t}-status-success ${t}-inner:not(${t}-circle-gradient)`]: {
          [`${t}-circle-path`]: { stroke: e.colorSuccess }
        }
      })
    }
  },
  mr = (e) => {
    const { componentCls: t, iconCls: r } = e
    return {
      [t]: {
        [`${t}-circle-trail`]: { stroke: e.progressRemainingColor },
        [`&${t}-circle ${t}-inner`]: {
          position: 'relative',
          lineHeight: 1,
          backgroundColor: 'transparent'
        },
        [`&${t}-circle ${t}-text`]: {
          position: 'absolute',
          insetBlockStart: '50%',
          insetInlineStart: 0,
          width: '100%',
          margin: 0,
          padding: 0,
          color: e.colorText,
          lineHeight: 1,
          whiteSpace: 'normal',
          textAlign: 'center',
          transform: 'translateY(-50%)',
          [r]: { fontSize: `${e.fontSize / e.fontSizeSM}em` }
        },
        [`${t}-circle&-status-exception`]: { [`${t}-text`]: { color: e.colorError } },
        [`${t}-circle&-status-success`]: { [`${t}-text`]: { color: e.colorSuccess } }
      },
      [`${t}-inline-circle`]: { lineHeight: 1, [`${t}-inner`]: { verticalAlign: 'bottom' } }
    }
  },
  gr = (e) => {
    const { componentCls: t } = e
    return {
      [t]: {
        [`${t}-steps`]: {
          display: 'inline-block',
          '&-outer': { display: 'flex', flexDirection: 'row', alignItems: 'center' },
          '&-item': {
            flexShrink: 0,
            minWidth: e.progressStepMinWidth,
            marginInlineEnd: e.progressStepMarginInlineEnd,
            backgroundColor: e.progressRemainingColor,
            transition: `all ${e.motionDurationSlow}`,
            '&-active': { backgroundColor: e.colorInfo }
          }
        }
      }
    }
  },
  hr = (e) => {
    const { componentCls: t, iconCls: r } = e
    return {
      [t]: { [`${t}-small&-line, ${t}-small&-line ${t}-text ${r}`]: { fontSize: e.fontSizeSM } }
    }
  },
  vr = tt('Progress', (e) => {
    const t = e.marginXXS / 2,
      r = rt(e, {
        progressLineRadius: 100,
        progressInfoTextColor: e.colorText,
        progressDefaultColor: e.colorInfo,
        progressRemainingColor: e.colorFillSecondary,
        progressStepMarginInlineEnd: t,
        progressStepMinWidth: t,
        progressActiveMotionDuration: '2.4s'
      })
    return [fr(r), mr(r), gr(r), hr(r)]
  })
var br =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var r = {}
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n])
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
        t.indexOf(n[a]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
          (r[n[a]] = e[n[a]])
    return r
  }
const yr = ['normal', 'exception', 'active', 'success'],
  $r = (e) => {
    const {
        prefixCls: t,
        className: r,
        rootClassName: n,
        steps: a,
        strokeColor: i,
        percent: s = 0,
        size: o = 'default',
        showInfo: d = !0,
        type: c = 'line',
        status: p,
        format: m
      } = e,
      f = br(e, [
        'prefixCls',
        'className',
        'rootClassName',
        'steps',
        'strokeColor',
        'percent',
        'size',
        'showInfo',
        'type',
        'status',
        'format'
      ]),
      y = l.useMemo(() => {
        var j, D
        const B = ye(e)
        return parseInt(
          B !== void 0
            ? (j = B ?? 0) === null || j === void 0
              ? void 0
              : j.toString()
            : (D = s ?? 0) === null || D === void 0
            ? void 0
            : D.toString(),
          10
        )
      }, [s, e.success, e.successPercent]),
      h = l.useMemo(() => (!yr.includes(p) && y >= 100 ? 'success' : p || 'normal'), [p, y]),
      { getPrefixCls: I, direction: $ } = l.useContext($e),
      v = I('progress', t),
      [x, O] = vr(v),
      w = l.useMemo(() => {
        if (!d) return null
        const j = ye(e)
        let D
        const B = m || ((q) => `${q}%`),
          Y = c === 'line'
        return (
          m || (h !== 'exception' && h !== 'success')
            ? (D = B(se(s), se(j)))
            : h === 'exception'
            ? (D = Y ? l.createElement(St, null) : l.createElement(Et, null))
            : h === 'success' && (D = Y ? l.createElement(It, null) : l.createElement(xt, null)),
          l.createElement(
            'span',
            { className: `${v}-text`, title: typeof D == 'string' ? D : void 0 },
            D
          )
        )
      }, [d, s, y, h, c, v, m]),
      u = Array.isArray(i) ? i[0] : i,
      P = typeof i == 'string' || Array.isArray(i) ? i : void 0
    let C
    c === 'line'
      ? (C = a
          ? l.createElement(ur, Object.assign({}, e, { strokeColor: P, prefixCls: v, steps: a }), w)
          : l.createElement(
              cr,
              Object.assign({}, e, { strokeColor: u, prefixCls: v, direction: $ }),
              w
            ))
      : (c === 'circle' || c === 'dashboard') &&
        (C = l.createElement(
          or,
          Object.assign({}, e, { strokeColor: u, prefixCls: v, progressStatus: h }),
          w
        ))
    const X = A(
      v,
      {
        [`${v}-inline-circle`]: c === 'circle' && Ce(o, 'circle')[0] <= 20,
        [`${v}-${(c === 'dashboard' && 'circle') || (a && 'steps') || c}`]: !0,
        [`${v}-status-${h}`]: !0,
        [`${v}-show-info`]: d,
        [`${v}-${o}`]: typeof o == 'string',
        [`${v}-rtl`]: $ === 'rtl'
      },
      r,
      n,
      O
    )
    return x(
      l.createElement(
        'div',
        Object.assign(
          { className: X, role: 'progressbar' },
          Ct(f, [
            'trailColor',
            'strokeWidth',
            'width',
            'gapDegree',
            'gapPosition',
            'strokeLinecap',
            'success',
            'successPercent'
          ])
        ),
        C
      )
    )
  },
  wr = $r
var Cr = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z'
        }
      }
    ]
  },
  name: 'download',
  theme: 'outlined'
}
const Sr = Cr
var Er = function (t, r) {
  return l.createElement(we, ne({}, t, { ref: r, icon: Sr }))
}
const Ir = l.forwardRef(Er)
var xr = {
  icon: function (t, r) {
    return {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: { d: 'M534 352V136H232v752h560V394H576a42 42 0 01-42-42z', fill: r }
        },
        {
          tag: 'path',
          attrs: {
            d: 'M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0042 42h216v494z',
            fill: t
          }
        }
      ]
    }
  },
  name: 'file',
  theme: 'twotone'
}
const Or = xr
var Pr = function (t, r) {
  return l.createElement(we, ne({}, t, { ref: r, icon: Or }))
}
const Dr = l.forwardRef(Pr)
var Fr = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 00174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z'
        }
      }
    ]
  },
  name: 'paper-clip',
  theme: 'outlined'
}
const Lr = Fr
var Rr = function (t, r) {
  return l.createElement(we, ne({}, t, { ref: r, icon: Lr }))
}
const jr = l.forwardRef(Rr)
var Nr = {
  icon: function (t, r) {
    return {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2z',
            fill: t
          }
        },
        {
          tag: 'path',
          attrs: { d: 'M424.6 765.8l-150.1-178L136 752.1V792h752v-30.4L658.1 489z', fill: r }
        },
        {
          tag: 'path',
          attrs: {
            d: 'M136 652.7l132.4-157c3.2-3.8 9-3.8 12.2 0l144 170.7L652 396.8c3.2-3.8 9-3.8 12.2 0L888 662.2V232H136v420.7zM304 280a88 88 0 110 176 88 88 0 010-176z',
            fill: r
          }
        },
        { tag: 'path', attrs: { d: 'M276 368a28 28 0 1056 0 28 28 0 10-56 0z', fill: r } },
        {
          tag: 'path',
          attrs: {
            d: 'M304 456a88 88 0 100-176 88 88 0 000 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z',
            fill: t
          }
        }
      ]
    }
  },
  name: 'picture',
  theme: 'twotone'
}
const Tr = Nr
var Mr = function (t, r) {
  return l.createElement(we, ne({}, t, { ref: r, icon: Tr }))
}
const kr = l.forwardRef(Mr)
function Ar(e, t) {
  var r = 'cannot '.concat(e.method, ' ').concat(e.action, ' ').concat(t.status, "'"),
    n = new Error(r)
  return (n.status = t.status), (n.method = e.method), (n.url = e.action), n
}
function Je(e) {
  var t = e.responseText || e.response
  if (!t) return t
  try {
    return JSON.parse(t)
  } catch {
    return t
  }
}
function Ur(e) {
  var t = new XMLHttpRequest()
  e.onProgress &&
    t.upload &&
    (t.upload.onprogress = function (i) {
      i.total > 0 && (i.percent = (i.loaded / i.total) * 100), e.onProgress(i)
    })
  var r = new FormData()
  e.data &&
    Object.keys(e.data).forEach(function (a) {
      var i = e.data[a]
      if (Array.isArray(i)) {
        i.forEach(function (s) {
          r.append(''.concat(a, '[]'), s)
        })
        return
      }
      r.append(a, i)
    }),
    e.file instanceof Blob
      ? r.append(e.filename, e.file, e.file.name)
      : r.append(e.filename, e.file),
    (t.onerror = function (i) {
      e.onError(i)
    }),
    (t.onload = function () {
      return t.status < 200 || t.status >= 300 ? e.onError(Ar(e, t), Je(t)) : e.onSuccess(Je(t), t)
    }),
    t.open(e.method, e.action, !0),
    e.withCredentials && 'withCredentials' in t && (t.withCredentials = !0)
  var n = e.headers || {}
  return (
    n['X-Requested-With'] !== null && t.setRequestHeader('X-Requested-With', 'XMLHttpRequest'),
    Object.keys(n).forEach(function (a) {
      n[a] !== null && t.setRequestHeader(a, n[a])
    }),
    t.send(r),
    {
      abort: function () {
        t.abort()
      }
    }
  )
}
var _r = +new Date(),
  zr = 0
function De() {
  return 'rc-upload-'.concat(_r, '-').concat(++zr)
}
const Fe = function (e, t) {
  if (e && t) {
    var r = Array.isArray(t) ? t : t.split(','),
      n = e.name || '',
      a = e.type || '',
      i = a.replace(/\/.*$/, '')
    return r.some(function (s) {
      var o = s.trim()
      if (/^\*(\/\*)?$/.test(s)) return !0
      if (o.charAt(0) === '.') {
        var d = n.toLowerCase(),
          c = o.toLowerCase(),
          p = [c]
        return (
          (c === '.jpg' || c === '.jpeg') && (p = ['.jpg', '.jpeg']),
          p.some(function (m) {
            return d.endsWith(m)
          })
        )
      }
      return /\/\*$/.test(o)
        ? i === o.replace(/\/.*$/, '')
        : a === o
        ? !0
        : /^\w+$/.test(o)
        ? (Ot(!1, "Upload takes an invalidate 'accept' type '".concat(o, "'.Skip for check.")), !0)
        : !1
    })
  }
  return !0
}
function Wr(e, t) {
  var r = e.createReader(),
    n = []
  function a() {
    r.readEntries(function (i) {
      var s = Array.prototype.slice.apply(i)
      n = n.concat(s)
      var o = !s.length
      o ? t(n) : a()
    })
  }
  a()
}
var Hr = function (t, r, n) {
    var a = function i(s, o) {
      s &&
        ((s.path = o || ''),
        s.isFile
          ? s.file(function (d) {
              n(d) &&
                (s.fullPath &&
                  !d.webkitRelativePath &&
                  (Object.defineProperties(d, { webkitRelativePath: { writable: !0 } }),
                  (d.webkitRelativePath = s.fullPath.replace(/^\//, '')),
                  Object.defineProperties(d, { webkitRelativePath: { writable: !1 } })),
                r([d]))
            })
          : s.isDirectory &&
            Wr(s, function (d) {
              d.forEach(function (c) {
                i(c, ''.concat(o).concat(s.name, '/'))
              })
            }))
    }
    t.forEach(function (i) {
      a(i.webkitGetAsEntry())
    })
  },
  Br = [
    'component',
    'prefixCls',
    'className',
    'disabled',
    'id',
    'style',
    'multiple',
    'accept',
    'capture',
    'children',
    'directory',
    'openFileDialogOnClick',
    'onMouseEnter',
    'onMouseLeave'
  ],
  Xr = (function (e) {
    ot(r, e)
    var t = at(r)
    function r() {
      var n
      it(this, r)
      for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++) i[s] = arguments[s]
      return (
        (n = t.call.apply(t, [this].concat(i))),
        (n.state = { uid: De() }),
        (n.reqs = {}),
        (n.fileInput = void 0),
        (n._isMounted = void 0),
        (n.onChange = function (o) {
          var d = n.props,
            c = d.accept,
            p = d.directory,
            m = o.target.files,
            f = ie(m).filter(function (y) {
              return !p || Fe(y, c)
            })
          n.uploadFiles(f), n.reset()
        }),
        (n.onClick = function (o) {
          var d = n.fileInput
          if (d) {
            var c = n.props,
              p = c.children,
              m = c.onClick
            if (p && p.type === 'button') {
              var f = d.parentNode
              f.focus(), f.querySelector('button').blur()
            }
            d.click(), m && m(o)
          }
        }),
        (n.onKeyDown = function (o) {
          o.key === 'Enter' && n.onClick(o)
        }),
        (n.onFileDrop = function (o) {
          var d = n.props.multiple
          if ((o.preventDefault(), o.type !== 'dragover'))
            if (n.props.directory)
              Hr(Array.prototype.slice.call(o.dataTransfer.items), n.uploadFiles, function (p) {
                return Fe(p, n.props.accept)
              })
            else {
              var c = ie(o.dataTransfer.files).filter(function (p) {
                return Fe(p, n.props.accept)
              })
              d === !1 && (c = c.slice(0, 1)), n.uploadFiles(c)
            }
        }),
        (n.uploadFiles = function (o) {
          var d = ie(o),
            c = d.map(function (p) {
              return (p.uid = De()), n.processFile(p, d)
            })
          Promise.all(c).then(function (p) {
            var m = n.props.onBatchStart
            m == null ||
              m(
                p.map(function (f) {
                  var y = f.origin,
                    h = f.parsedFile
                  return { file: y, parsedFile: h }
                })
              ),
              p
                .filter(function (f) {
                  return f.parsedFile !== null
                })
                .forEach(function (f) {
                  n.post(f)
                })
          })
        }),
        (n.processFile = (function () {
          var o = Dt(
            ze().mark(function d(c, p) {
              var m, f, y, h, I, $, v, x, O
              return ze().wrap(
                function (u) {
                  for (;;)
                    switch ((u.prev = u.next)) {
                      case 0:
                        if (((m = n.props.beforeUpload), (f = c), !m)) {
                          u.next = 14
                          break
                        }
                        return (u.prev = 3), (u.next = 6), m(c, p)
                      case 6:
                        ;(f = u.sent), (u.next = 12)
                        break
                      case 9:
                        ;(u.prev = 9), (u.t0 = u.catch(3)), (f = !1)
                      case 12:
                        if (f !== !1) {
                          u.next = 14
                          break
                        }
                        return u.abrupt('return', {
                          origin: c,
                          parsedFile: null,
                          action: null,
                          data: null
                        })
                      case 14:
                        if (((y = n.props.action), typeof y != 'function')) {
                          u.next = 21
                          break
                        }
                        return (u.next = 18), y(c)
                      case 18:
                        ;(h = u.sent), (u.next = 22)
                        break
                      case 21:
                        h = y
                      case 22:
                        if (((I = n.props.data), typeof I != 'function')) {
                          u.next = 29
                          break
                        }
                        return (u.next = 26), I(c)
                      case 26:
                        ;($ = u.sent), (u.next = 30)
                        break
                      case 29:
                        $ = I
                      case 30:
                        return (
                          (v = (ge(f) === 'object' || typeof f == 'string') && f ? f : c),
                          v instanceof File
                            ? (x = v)
                            : (x = new File([v], c.name, { type: c.type })),
                          (O = x),
                          (O.uid = c.uid),
                          u.abrupt('return', { origin: c, data: $, parsedFile: O, action: h })
                        )
                      case 35:
                      case 'end':
                        return u.stop()
                    }
                },
                d,
                null,
                [[3, 9]]
              )
            })
          )
          return function (d, c) {
            return o.apply(this, arguments)
          }
        })()),
        (n.saveFileInput = function (o) {
          n.fileInput = o
        }),
        n
      )
    }
    return (
      st(r, [
        {
          key: 'componentDidMount',
          value: function () {
            this._isMounted = !0
          }
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            ;(this._isMounted = !1), this.abort()
          }
        },
        {
          key: 'post',
          value: function (a) {
            var i = this,
              s = a.data,
              o = a.origin,
              d = a.action,
              c = a.parsedFile
            if (this._isMounted) {
              var p = this.props,
                m = p.onStart,
                f = p.customRequest,
                y = p.name,
                h = p.headers,
                I = p.withCredentials,
                $ = p.method,
                v = o.uid,
                x = f || Ur,
                O = {
                  action: d,
                  filename: y,
                  data: s,
                  file: c,
                  headers: h,
                  withCredentials: I,
                  method: $ || 'post',
                  onProgress: function (u) {
                    var P = i.props.onProgress
                    P == null || P(u, c)
                  },
                  onSuccess: function (u, P) {
                    var C = i.props.onSuccess
                    C == null || C(u, c, P), delete i.reqs[v]
                  },
                  onError: function (u, P) {
                    var C = i.props.onError
                    C == null || C(u, P, c), delete i.reqs[v]
                  }
                }
              m(o), (this.reqs[v] = x(O))
            }
          }
        },
        {
          key: 'reset',
          value: function () {
            this.setState({ uid: De() })
          }
        },
        {
          key: 'abort',
          value: function (a) {
            var i = this.reqs
            if (a) {
              var s = a.uid ? a.uid : a
              i[s] && i[s].abort && i[s].abort(), delete i[s]
            } else
              Object.keys(i).forEach(function (o) {
                i[o] && i[o].abort && i[o].abort(), delete i[o]
              })
          }
        },
        {
          key: 'render',
          value: function () {
            var a,
              i = this.props,
              s = i.component,
              o = i.prefixCls,
              d = i.className,
              c = i.disabled,
              p = i.id,
              m = i.style,
              f = i.multiple,
              y = i.accept,
              h = i.capture,
              I = i.children,
              $ = i.directory,
              v = i.openFileDialogOnClick,
              x = i.onMouseEnter,
              O = i.onMouseLeave,
              w = Ze(i, Br),
              u = A(((a = {}), Ie(a, o, !0), Ie(a, ''.concat(o, '-disabled'), c), Ie(a, d, d), a)),
              P = $ ? { directory: 'directory', webkitdirectory: 'webkitdirectory' } : {},
              C = c
                ? {}
                : {
                    onClick: v ? this.onClick : function () {},
                    onKeyDown: v ? this.onKeyDown : function () {},
                    onMouseEnter: x,
                    onMouseLeave: O,
                    onDrop: this.onFileDrop,
                    onDragOver: this.onFileDrop,
                    tabIndex: '0'
                  }
            return Ne.createElement(
              s,
              ne({}, C, { className: u, role: 'button', style: m }),
              Ne.createElement(
                'input',
                ne(
                  {},
                  Pt(w, { aria: !0, data: !0 }),
                  {
                    id: p,
                    disabled: c,
                    type: 'file',
                    ref: this.saveFileInput,
                    onClick: function (j) {
                      return j.stopPropagation()
                    },
                    key: this.state.uid,
                    style: { display: 'none' },
                    accept: y
                  },
                  P,
                  { multiple: f, onChange: this.onChange },
                  h != null ? { capture: h } : {}
                )
              ),
              I
            )
          }
        }
      ]),
      r
    )
  })(l.Component)
function Le() {}
var Me = (function (e) {
  ot(r, e)
  var t = at(r)
  function r() {
    var n
    it(this, r)
    for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++) i[s] = arguments[s]
    return (
      (n = t.call.apply(t, [this].concat(i))),
      (n.uploader = void 0),
      (n.saveUploader = function (o) {
        n.uploader = o
      }),
      n
    )
  }
  return (
    st(r, [
      {
        key: 'abort',
        value: function (a) {
          this.uploader.abort(a)
        }
      },
      {
        key: 'render',
        value: function () {
          return Ne.createElement(Xr, ne({}, this.props, { ref: this.saveUploader }))
        }
      }
    ]),
    r
  )
})(l.Component)
Me.defaultProps = {
  component: 'span',
  prefixCls: 'rc-upload',
  data: {},
  headers: {},
  name: 'file',
  multipart: !1,
  onStart: Le,
  onError: Le,
  onSuccess: Le,
  multiple: !1,
  beforeUpload: null,
  customRequest: null,
  withCredentials: !1,
  openFileDialogOnClick: !0
}
function ve(e) {
  return Object.assign(Object.assign({}, e), {
    lastModified: e.lastModified,
    lastModifiedDate: e.lastModifiedDate,
    name: e.name,
    size: e.size,
    type: e.type,
    uid: e.uid,
    percent: 0,
    originFileObj: e
  })
}
function be(e, t) {
  const r = ie(t),
    n = r.findIndex((a) => {
      let { uid: i } = a
      return i === e.uid
    })
  return n === -1 ? r.push(e) : (r[n] = e), r
}
function Re(e, t) {
  const r = e.uid !== void 0 ? 'uid' : 'name'
  return t.filter((n) => n[r] === e[r])[0]
}
function qr(e, t) {
  const r = e.uid !== void 0 ? 'uid' : 'name',
    n = t.filter((a) => a[r] !== e[r])
  return n.length === t.length ? null : n
}
const Vr = function () {
    const t = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '').split('/'),
      n = t[t.length - 1].split(/#|\?/)[0]
    return (/\.[^./\\]*$/.exec(n) || [''])[0]
  },
  ut = (e) => e.indexOf('image/') === 0,
  Gr = (e) => {
    if (e.type && !e.thumbUrl) return ut(e.type)
    const t = e.thumbUrl || e.url || '',
      r = Vr(t)
    return /^data:image\//.test(t) ||
      /(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico|heic|heif)$/i.test(r)
      ? !0
      : !(/^data:/.test(t) || r)
  },
  re = 200
function Kr(e) {
  return new Promise((t) => {
    if (!e.type || !ut(e.type)) {
      t('')
      return
    }
    const r = document.createElement('canvas')
    ;(r.width = re),
      (r.height = re),
      (r.style.cssText = `position: fixed; left: 0; top: 0; width: ${re}px; height: ${re}px; z-index: 9999; display: none;`),
      document.body.appendChild(r)
    const n = r.getContext('2d'),
      a = new Image()
    if (
      ((a.onload = () => {
        const { width: i, height: s } = a
        let o = re,
          d = re,
          c = 0,
          p = 0
        i > s ? ((d = s * (re / i)), (p = -(d - o) / 2)) : ((o = i * (re / s)), (c = -(o - d) / 2)),
          n.drawImage(a, c, p, o, d)
        const m = r.toDataURL()
        document.body.removeChild(r), t(m)
      }),
      (a.crossOrigin = 'anonymous'),
      e.type.startsWith('image/svg+xml'))
    ) {
      const i = new FileReader()
      i.addEventListener('load', () => {
        i.result && (a.src = i.result)
      }),
        i.readAsDataURL(e)
    } else a.src = window.URL.createObjectURL(e)
  })
}
const Jr = l.forwardRef((e, t) => {
    let {
      prefixCls: r,
      className: n,
      style: a,
      locale: i,
      listType: s,
      file: o,
      items: d,
      progress: c,
      iconRender: p,
      actionIconRender: m,
      itemRender: f,
      isImgUrl: y,
      showPreviewIcon: h,
      showRemoveIcon: I,
      showDownloadIcon: $,
      previewIcon: v,
      removeIcon: x,
      downloadIcon: O,
      onPreview: w,
      onDownload: u,
      onClose: P
    } = e
    var C, X
    const { status: j } = o,
      [D, B] = l.useState(j)
    l.useEffect(() => {
      j !== 'removed' && B(j)
    }, [j])
    const [Y, q] = l.useState(!1),
      W = l.useRef(null)
    l.useEffect(
      () => (
        (W.current = setTimeout(() => {
          q(!0)
        }, 300)),
        () => {
          W.current && clearTimeout(W.current)
        }
      ),
      []
    )
    const L = p(o)
    let Q = l.createElement('div', { className: `${r}-icon` }, L)
    if (s === 'picture' || s === 'picture-card' || s === 'picture-circle')
      if (D === 'uploading' || (!o.thumbUrl && !o.url)) {
        const z = A({
          [`${r}-list-item-thumbnail`]: !0,
          [`${r}-list-item-file`]: D !== 'uploading'
        })
        Q = l.createElement('div', { className: z }, L)
      } else {
        const z =
            y != null && y(o)
              ? l.createElement('img', {
                  src: o.thumbUrl || o.url,
                  alt: o.name,
                  className: `${r}-list-item-image`,
                  crossOrigin: o.crossOrigin
                })
              : L,
          te = A({ [`${r}-list-item-thumbnail`]: !0, [`${r}-list-item-file`]: y && !y(o) })
        Q = l.createElement(
          'a',
          {
            className: te,
            onClick: (pe) => w(o, pe),
            href: o.url || o.thumbUrl,
            target: '_blank',
            rel: 'noopener noreferrer'
          },
          z
        )
      }
    const oe = A(`${r}-list-item`, `${r}-list-item-${D}`),
      H = typeof o.linkProps == 'string' ? JSON.parse(o.linkProps) : o.linkProps,
      _ = I
        ? m(
            (typeof x == 'function' ? x(o) : x) || l.createElement(Bt, null),
            () => P(o),
            r,
            i.removeFile
          )
        : null,
      M =
        $ && D === 'done'
          ? m(
              (typeof O == 'function' ? O(o) : O) || l.createElement(Ir, null),
              () => u(o),
              r,
              i.downloadFile
            )
          : null,
      V =
        s !== 'picture-card' &&
        s !== 'picture-circle' &&
        l.createElement(
          'span',
          {
            key: 'download-delete',
            className: A(`${r}-list-item-actions`, { picture: s === 'picture' })
          },
          M,
          _
        ),
      g = A(`${r}-list-item-name`),
      F = o.url
        ? [
            l.createElement(
              'a',
              Object.assign(
                {
                  key: 'view',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  className: g,
                  title: o.name
                },
                H,
                { href: o.url, onClick: (z) => w(o, z) }
              ),
              o.name
            ),
            V
          ]
        : [
            l.createElement(
              'span',
              { key: 'view', className: g, onClick: (z) => w(o, z), title: o.name },
              o.name
            ),
            V
          ],
      k = { pointerEvents: 'none', opacity: 0.5 },
      U = h
        ? l.createElement(
            'a',
            {
              href: o.url || o.thumbUrl,
              target: '_blank',
              rel: 'noopener noreferrer',
              style: o.url || o.thumbUrl ? void 0 : k,
              onClick: (z) => w(o, z),
              title: i.previewFile
            },
            typeof v == 'function' ? v(o) : v || l.createElement(Ft, null)
          )
        : null,
      G =
        (s === 'picture-card' || s === 'picture-circle') &&
        D !== 'uploading' &&
        l.createElement('span', { className: `${r}-list-item-actions` }, U, D === 'done' && M, _),
      { getPrefixCls: Z } = l.useContext($e),
      de = Z(),
      ue = l.createElement(
        'div',
        { className: oe },
        Q,
        F,
        G,
        Y &&
          l.createElement(
            lt,
            { motionName: `${de}-fade`, visible: D === 'uploading', motionDeadline: 2e3 },
            (z) => {
              let { className: te } = z
              const pe =
                'percent' in o
                  ? l.createElement(wr, Object.assign({}, c, { type: 'line', percent: o.percent }))
                  : null
              return l.createElement('div', { className: A(`${r}-list-item-progress`, te) }, pe)
            }
          )
      ),
      N =
        o.response && typeof o.response == 'string'
          ? o.response
          : ((C = o.error) === null || C === void 0 ? void 0 : C.statusText) ||
            ((X = o.error) === null || X === void 0 ? void 0 : X.message) ||
            i.uploadError,
      ee =
        D === 'error'
          ? l.createElement(et, { title: N, getPopupContainer: (z) => z.parentNode }, ue)
          : ue
    return l.createElement(
      'div',
      { className: A(`${r}-list-item-container`, n), style: a, ref: t },
      f
        ? f(ee, o, d, {
            download: u.bind(null, o),
            preview: w.bind(null, o),
            remove: P.bind(null, o)
          })
        : ee
    )
  }),
  Yr = Jr,
  Qr = (e, t) => {
    const {
        listType: r = 'text',
        previewFile: n = Kr,
        onPreview: a,
        onDownload: i,
        onRemove: s,
        locale: o,
        iconRender: d,
        isImageUrl: c = Gr,
        prefixCls: p,
        items: m = [],
        showPreviewIcon: f = !0,
        showRemoveIcon: y = !0,
        showDownloadIcon: h = !1,
        removeIcon: I,
        previewIcon: $,
        downloadIcon: v,
        progress: x = { size: [-1, 2], showInfo: !1 },
        appendAction: O,
        appendActionVisible: w = !0,
        itemRender: u
      } = e,
      P = Lt(),
      [C, X] = l.useState(!1)
    l.useEffect(() => {
      ;(r !== 'picture' && r !== 'picture-card' && r !== 'picture-circle') ||
        (m || []).forEach((g) => {
          typeof document > 'u' ||
            typeof window > 'u' ||
            !window.FileReader ||
            !window.File ||
            !(g.originFileObj instanceof File || g.originFileObj instanceof Blob) ||
            g.thumbUrl !== void 0 ||
            ((g.thumbUrl = ''),
            n &&
              n(g.originFileObj).then((F) => {
                ;(g.thumbUrl = F || ''), P()
              }))
        })
    }, [r, m, n]),
      l.useEffect(() => {
        X(!0)
      }, [])
    const j = (g, F) => {
        if (a) return F == null || F.preventDefault(), a(g)
      },
      D = (g) => {
        typeof i == 'function' ? i(g) : g.url && window.open(g.url)
      },
      B = (g) => {
        s == null || s(g)
      },
      Y = (g) => {
        if (d) return d(g, r)
        const F = g.status === 'uploading',
          k = c && c(g) ? l.createElement(kr, null) : l.createElement(Dr, null)
        let U = F ? l.createElement(Te, null) : l.createElement(jr, null)
        return (
          r === 'picture'
            ? (U = F ? l.createElement(Te, null) : k)
            : (r === 'picture-card' || r === 'picture-circle') && (U = F ? o.uploading : k),
          U
        )
      },
      q = (g, F, k, U) => {
        const G = {
          type: 'text',
          size: 'small',
          title: U,
          onClick: (Z) => {
            F(), He(g) && g.props.onClick && g.props.onClick(Z)
          },
          className: `${k}-list-item-action`
        }
        if (He(g)) {
          const Z = We(g, Object.assign(Object.assign({}, g.props), { onClick: () => {} }))
          return l.createElement(Be, Object.assign({}, G, { icon: Z }))
        }
        return l.createElement(Be, Object.assign({}, G), l.createElement('span', null, g))
      }
    l.useImperativeHandle(t, () => ({ handlePreview: j, handleDownload: D }))
    const { getPrefixCls: W } = l.useContext($e),
      L = W('upload', p),
      Q = W(),
      oe = A({ [`${L}-list`]: !0, [`${L}-list-${r}`]: !0 }),
      H = ie(m.map((g) => ({ key: g.uid, file: g })))
    let M = {
      motionDeadline: 2e3,
      motionName: `${L}-${
        r === 'picture-card' || r === 'picture-circle' ? 'animate-inline' : 'animate'
      }`,
      keys: H,
      motionAppear: C
    }
    const V = l.useMemo(() => {
      const g = Object.assign({}, Rt(Q))
      return delete g.onAppearEnd, delete g.onEnterEnd, delete g.onLeaveEnd, g
    }, [Q])
    return (
      r !== 'picture-card' &&
        r !== 'picture-circle' &&
        (M = Object.assign(Object.assign({}, V), M)),
      l.createElement(
        'div',
        { className: oe },
        l.createElement(jt, Object.assign({}, M, { component: !1 }), (g) => {
          let { key: F, file: k, className: U, style: G } = g
          return l.createElement(Yr, {
            key: F,
            locale: o,
            prefixCls: L,
            className: U,
            style: G,
            file: k,
            items: m,
            progress: x,
            listType: r,
            isImgUrl: c,
            showPreviewIcon: f,
            showRemoveIcon: y,
            showDownloadIcon: h,
            removeIcon: I,
            previewIcon: $,
            downloadIcon: v,
            iconRender: Y,
            actionIconRender: q,
            itemRender: u,
            onPreview: j,
            onDownload: D,
            onClose: B
          })
        }),
        O &&
          l.createElement(lt, Object.assign({}, M, { visible: w, forceRender: !0 }), (g) => {
            let { className: F, style: k } = g
            return We(O, (U) => ({
              className: A(U.className, F),
              style: Object.assign(
                Object.assign(Object.assign({}, k), { pointerEvents: F ? 'none' : void 0 }),
                U.style
              )
            }))
          })
      )
    )
  },
  Zr = l.forwardRef(Qr),
  en = Zr,
  tn = (e) => {
    const { componentCls: t, iconCls: r } = e
    return {
      [`${t}-wrapper`]: {
        [`${t}-drag`]: {
          position: 'relative',
          width: '100%',
          height: '100%',
          textAlign: 'center',
          background: e.colorFillAlter,
          border: `${e.lineWidth}px dashed ${e.colorBorder}`,
          borderRadius: e.borderRadiusLG,
          cursor: 'pointer',
          transition: `border-color ${e.motionDurationSlow}`,
          [t]: { padding: `${e.padding}px 0` },
          [`${t}-btn`]: { display: 'table', width: '100%', height: '100%', outline: 'none' },
          [`${t}-drag-container`]: { display: 'table-cell', verticalAlign: 'middle' },
          [`&:not(${t}-disabled):hover`]: { borderColor: e.colorPrimaryHover },
          [`p${t}-drag-icon`]: {
            marginBottom: e.margin,
            [r]: { color: e.colorPrimary, fontSize: e.uploadThumbnailSize }
          },
          [`p${t}-text`]: {
            margin: `0 0 ${e.marginXXS}px`,
            color: e.colorTextHeading,
            fontSize: e.fontSizeLG
          },
          [`p${t}-hint`]: { color: e.colorTextDescription, fontSize: e.fontSize },
          [`&${t}-disabled`]: {
            cursor: 'not-allowed',
            [`p${t}-drag-icon ${r},
            p${t}-text,
            p${t}-hint
          `]: { color: e.colorTextDisabled }
          }
        }
      }
    }
  },
  rn = tn,
  nn = (e) => {
    const { componentCls: t, antCls: r, iconCls: n, fontSize: a, lineHeight: i } = e,
      s = `${t}-list-item`,
      o = `${s}-actions`,
      d = `${s}-action`,
      c = Math.round(a * i)
    return {
      [`${t}-wrapper`]: {
        [`${t}-list`]: Object.assign(Object.assign({}, ct()), {
          lineHeight: e.lineHeight,
          [s]: {
            position: 'relative',
            height: e.lineHeight * a,
            marginTop: e.marginXS,
            fontSize: a,
            display: 'flex',
            alignItems: 'center',
            transition: `background-color ${e.motionDurationSlow}`,
            '&:hover': { backgroundColor: e.controlItemBgHover },
            [`${s}-name`]: Object.assign(Object.assign({}, dt), {
              padding: `0 ${e.paddingXS}px`,
              lineHeight: i,
              flex: 'auto',
              transition: `all ${e.motionDurationSlow}`
            }),
            [o]: {
              [d]: { opacity: 0 },
              [`${d}${r}-btn-sm`]: {
                height: c,
                border: 0,
                lineHeight: 1,
                '> span': { transform: 'scale(1)' }
              },
              [`
              ${d}:focus,
              &.picture ${d}
            `]: { opacity: 1 },
              [n]: { color: e.colorTextDescription, transition: `all ${e.motionDurationSlow}` },
              [`&:hover ${n}`]: { color: e.colorText }
            },
            [`${t}-icon ${n}`]: { color: e.colorTextDescription, fontSize: a },
            [`${s}-progress`]: {
              position: 'absolute',
              bottom: -e.uploadProgressOffset,
              width: '100%',
              paddingInlineStart: a + e.paddingXS,
              fontSize: a,
              lineHeight: 0,
              pointerEvents: 'none',
              '> div': { margin: 0 }
            }
          },
          [`${s}:hover ${d}`]: { opacity: 1, color: e.colorText },
          [`${s}-error`]: {
            color: e.colorError,
            [`${s}-name, ${t}-icon ${n}`]: { color: e.colorError },
            [o]: { [`${n}, ${n}:hover`]: { color: e.colorError }, [d]: { opacity: 1 } }
          },
          [`${t}-list-item-container`]: {
            transition: `opacity ${e.motionDurationSlow}, height ${e.motionDurationSlow}`,
            '&::before': { display: 'table', width: 0, height: 0, content: '""' }
          }
        })
      }
    }
  },
  on = nn,
  Ye = new ke('uploadAnimateInlineIn', {
    from: { width: 0, height: 0, margin: 0, padding: 0, opacity: 0 }
  }),
  Qe = new ke('uploadAnimateInlineOut', {
    to: { width: 0, height: 0, margin: 0, padding: 0, opacity: 0 }
  }),
  an = (e) => {
    const { componentCls: t } = e,
      r = `${t}-animate-inline`
    return [
      {
        [`${t}-wrapper`]: {
          [`${r}-appear, ${r}-enter, ${r}-leave`]: {
            animationDuration: e.motionDurationSlow,
            animationTimingFunction: e.motionEaseInOutCirc,
            animationFillMode: 'forwards'
          },
          [`${r}-appear, ${r}-enter`]: { animationName: Ye },
          [`${r}-leave`]: { animationName: Qe }
        }
      },
      Ye,
      Qe
    ]
  },
  sn = an,
  ln = (e) => {
    const { componentCls: t, iconCls: r, uploadThumbnailSize: n, uploadProgressOffset: a } = e,
      i = `${t}-list`,
      s = `${i}-item`
    return {
      [`${t}-wrapper`]: {
        [`
        ${i}${i}-picture,
        ${i}${i}-picture-card,
        ${i}${i}-picture-circle
      `]: {
          [s]: {
            position: 'relative',
            height: n + e.lineWidth * 2 + e.paddingXS * 2,
            padding: e.paddingXS,
            border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
            borderRadius: e.borderRadiusLG,
            '&:hover': { background: 'transparent' },
            [`${s}-thumbnail`]: Object.assign(Object.assign({}, dt), {
              width: n,
              height: n,
              lineHeight: `${n + e.paddingSM}px`,
              textAlign: 'center',
              flex: 'none',
              [r]: { fontSize: e.fontSizeHeading2, color: e.colorPrimary },
              img: { display: 'block', width: '100%', height: '100%', overflow: 'hidden' }
            }),
            [`${s}-progress`]: {
              bottom: a,
              width: `calc(100% - ${e.paddingSM * 2}px)`,
              marginTop: 0,
              paddingInlineStart: n + e.paddingXS
            }
          },
          [`${s}-error`]: {
            borderColor: e.colorError,
            [`${s}-thumbnail ${r}`]: {
              "svg path[fill='#e6f7ff']": { fill: e.colorErrorBg },
              "svg path[fill='#1890ff']": { fill: e.colorError }
            }
          },
          [`${s}-uploading`]: { borderStyle: 'dashed', [`${s}-name`]: { marginBottom: a } }
        },
        [`${i}${i}-picture-circle ${s}`]: {
          [`&, &::before, ${s}-thumbnail`]: { borderRadius: '50%' }
        }
      }
    }
  },
  cn = (e) => {
    const { componentCls: t, iconCls: r, fontSizeLG: n, colorTextLightSolid: a } = e,
      i = `${t}-list`,
      s = `${i}-item`,
      o = e.uploadPicCardSize
    return {
      [`
      ${t}-wrapper${t}-picture-card-wrapper,
      ${t}-wrapper${t}-picture-circle-wrapper
    `]: Object.assign(Object.assign({}, ct()), {
        display: 'inline-block',
        width: '100%',
        [`${t}${t}-select`]: {
          width: o,
          height: o,
          marginInlineEnd: e.marginXS,
          marginBottom: e.marginXS,
          textAlign: 'center',
          verticalAlign: 'top',
          backgroundColor: e.colorFillAlter,
          border: `${e.lineWidth}px dashed ${e.colorBorder}`,
          borderRadius: e.borderRadiusLG,
          cursor: 'pointer',
          transition: `border-color ${e.motionDurationSlow}`,
          [`> ${t}`]: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            textAlign: 'center'
          },
          [`&:not(${t}-disabled):hover`]: { borderColor: e.colorPrimary }
        },
        [`${i}${i}-picture-card, ${i}${i}-picture-circle`]: {
          [`${i}-item-container`]: {
            display: 'inline-block',
            width: o,
            height: o,
            marginBlock: `0 ${e.marginXS}px`,
            marginInline: `0 ${e.marginXS}px`,
            verticalAlign: 'top'
          },
          '&::after': { display: 'none' },
          [s]: {
            height: '100%',
            margin: 0,
            '&::before': {
              position: 'absolute',
              zIndex: 1,
              width: `calc(100% - ${e.paddingXS * 2}px)`,
              height: `calc(100% - ${e.paddingXS * 2}px)`,
              backgroundColor: e.colorBgMask,
              opacity: 0,
              transition: `all ${e.motionDurationSlow}`,
              content: '" "'
            }
          },
          [`${s}:hover`]: { [`&::before, ${s}-actions`]: { opacity: 1 } },
          [`${s}-actions`]: {
            position: 'absolute',
            insetInlineStart: 0,
            zIndex: 10,
            width: '100%',
            whiteSpace: 'nowrap',
            textAlign: 'center',
            opacity: 0,
            transition: `all ${e.motionDurationSlow}`,
            [`${r}-eye, ${r}-download, ${r}-delete`]: {
              zIndex: 10,
              width: n,
              margin: `0 ${e.marginXXS}px`,
              fontSize: n,
              cursor: 'pointer',
              transition: `all ${e.motionDurationSlow}`,
              svg: { verticalAlign: 'baseline' }
            }
          },
          [`${s}-actions, ${s}-actions:hover`]: {
            [`${r}-eye, ${r}-download, ${r}-delete`]: {
              color: new Nt(a).setAlpha(0.65).toRgbString(),
              '&:hover': { color: a }
            }
          },
          [`${s}-thumbnail, ${s}-thumbnail img`]: {
            position: 'static',
            display: 'block',
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          },
          [`${s}-name`]: { display: 'none', textAlign: 'center' },
          [`${s}-file + ${s}-name`]: {
            position: 'absolute',
            bottom: e.margin,
            display: 'block',
            width: `calc(100% - ${e.paddingXS * 2}px)`
          },
          [`${s}-uploading`]: {
            [`&${s}`]: { backgroundColor: e.colorFillAlter },
            [`&::before, ${r}-eye, ${r}-download, ${r}-delete`]: { display: 'none' }
          },
          [`${s}-progress`]: {
            bottom: e.marginXL,
            width: `calc(100% - ${e.paddingXS * 2}px)`,
            paddingInlineStart: 0
          }
        }
      }),
      [`${t}-wrapper${t}-picture-circle-wrapper`]: { [`${t}${t}-select`]: { borderRadius: '50%' } }
    }
  },
  dn = (e) => {
    const { componentCls: t } = e
    return { [`${t}-rtl`]: { direction: 'rtl' } }
  },
  un = dn,
  pn = (e) => {
    const { componentCls: t, colorTextDisabled: r } = e
    return {
      [`${t}-wrapper`]: Object.assign(Object.assign({}, nt(e)), {
        [t]: { outline: 0, "input[type='file']": { cursor: 'pointer' } },
        [`${t}-select`]: { display: 'inline-block' },
        [`${t}-disabled`]: { color: r, cursor: 'not-allowed' }
      })
    }
  },
  fn = tt('Upload', (e) => {
    const { fontSizeHeading3: t, fontSize: r, lineHeight: n, lineWidth: a, controlHeightLG: i } = e,
      s = Math.round(r * n),
      o = rt(e, {
        uploadThumbnailSize: t * 2,
        uploadProgressOffset: s / 2 + a,
        uploadPicCardSize: i * 2.55
      })
    return [pn(o), rn(o), ln(o), cn(o), on(o), sn(o), un(o), Tt(o)]
  })
var mn =
  (globalThis && globalThis.__awaiter) ||
  function (e, t, r, n) {
    function a(i) {
      return i instanceof r
        ? i
        : new r(function (s) {
            s(i)
          })
    }
    return new (r || (r = Promise))(function (i, s) {
      function o(p) {
        try {
          c(n.next(p))
        } catch (m) {
          s(m)
        }
      }
      function d(p) {
        try {
          c(n.throw(p))
        } catch (m) {
          s(m)
        }
      }
      function c(p) {
        p.done ? i(p.value) : a(p.value).then(o, d)
      }
      c((n = n.apply(e, t || [])).next())
    })
  }
const he = `__LIST_IGNORE_${Date.now()}__`,
  gn = (e, t) => {
    const {
        fileList: r,
        defaultFileList: n,
        onRemove: a,
        showUploadList: i = !0,
        listType: s = 'text',
        onPreview: o,
        onDownload: d,
        onChange: c,
        onDrop: p,
        previewFile: m,
        disabled: f,
        locale: y,
        iconRender: h,
        isImageUrl: I,
        progress: $,
        prefixCls: v,
        className: x,
        type: O = 'select',
        children: w,
        style: u,
        itemRender: P,
        maxCount: C,
        data: X = {},
        multiple: j = !1,
        action: D = '',
        accept: B = '',
        supportServerRender: Y = !0
      } = e,
      q = l.useContext(Mt),
      W = f ?? q,
      [L, Q] = kt(n || [], { value: r, postState: (b) => b ?? [] }),
      [oe, H] = l.useState('drop'),
      _ = l.useRef(null)
    l.useMemo(() => {
      const b = Date.now()
      ;(r || []).forEach((E, T) => {
        !E.uid && !Object.isFrozen(E) && (E.uid = `__AUTO__${b}_${T}__`)
      })
    }, [r])
    const M = (b, E, T) => {
        let S = ie(E)
        C === 1 ? (S = S.slice(-1)) : C && (S = S.slice(0, C)),
          Xe.flushSync(() => {
            Q(S)
          })
        const R = { file: b, fileList: S }
        T && (R.event = T),
          Xe.flushSync(() => {
            c == null || c(R)
          })
      },
      V = (b, E) =>
        mn(void 0, void 0, void 0, function* () {
          const { beforeUpload: T, transformFile: S } = e
          let R = b
          if (T) {
            const J = yield T(b, E)
            if (J === !1) return !1
            if ((delete b[he], J === he))
              return Object.defineProperty(b, he, { value: !0, configurable: !0 }), !1
            typeof J == 'object' && J && (R = J)
          }
          return S && (R = yield S(R)), R
        }),
      g = (b) => {
        const E = b.filter((R) => !R.file[he])
        if (!E.length) return
        const T = E.map((R) => ve(R.file))
        let S = ie(L)
        T.forEach((R) => {
          S = be(R, S)
        }),
          T.forEach((R, J) => {
            let fe = R
            if (E[J].parsedFile) R.status = 'uploading'
            else {
              const { originFileObj: le } = R
              let ae
              try {
                ae = new File([le], le.name, { type: le.type })
              } catch {
                ;(ae = new Blob([le], { type: le.type })),
                  (ae.name = le.name),
                  (ae.lastModifiedDate = new Date()),
                  (ae.lastModified = new Date().getTime())
              }
              ;(ae.uid = R.uid), (fe = ae)
            }
            M(fe, S)
          })
      },
      F = (b, E, T) => {
        try {
          typeof b == 'string' && (b = JSON.parse(b))
        } catch {}
        if (!Re(E, L)) return
        const S = ve(E)
        ;(S.status = 'done'), (S.percent = 100), (S.response = b), (S.xhr = T)
        const R = be(S, L)
        M(S, R)
      },
      k = (b, E) => {
        if (!Re(E, L)) return
        const T = ve(E)
        ;(T.status = 'uploading'), (T.percent = b.percent)
        const S = be(T, L)
        M(T, S, b)
      },
      U = (b, E, T) => {
        if (!Re(T, L)) return
        const S = ve(T)
        ;(S.error = b), (S.response = E), (S.status = 'error')
        const R = be(S, L)
        M(S, R)
      },
      G = (b) => {
        let E
        Promise.resolve(typeof a == 'function' ? a(b) : a).then((T) => {
          var S
          if (T === !1) return
          const R = qr(b, L)
          R &&
            ((E = Object.assign(Object.assign({}, b), { status: 'removed' })),
            L == null ||
              L.forEach((J) => {
                const fe = E.uid !== void 0 ? 'uid' : 'name'
                J[fe] === E[fe] && !Object.isFrozen(J) && (J.status = 'removed')
              }),
            (S = _.current) === null || S === void 0 || S.abort(E),
            M(E, R))
        })
      },
      Z = (b) => {
        H(b.type), b.type === 'drop' && (p == null || p(b))
      }
    l.useImperativeHandle(t, () => ({
      onBatchStart: g,
      onSuccess: F,
      onProgress: k,
      onError: U,
      fileList: L,
      upload: _.current
    }))
    const { getPrefixCls: de, direction: ue } = l.useContext($e),
      N = de('upload', v),
      ee = Object.assign(
        Object.assign({ onBatchStart: g, onError: U, onProgress: k, onSuccess: F }, e),
        {
          data: X,
          multiple: j,
          action: D,
          accept: B,
          supportServerRender: Y,
          prefixCls: N,
          disabled: W,
          beforeUpload: V,
          onChange: void 0
        }
      )
    delete ee.className, delete ee.style, (!w || W) && delete ee.id
    const [z, te] = fn(N),
      [pe] = At('Upload', Ut.Upload),
      {
        showRemoveIcon: ft,
        showPreviewIcon: mt,
        showDownloadIcon: gt,
        removeIcon: ht,
        previewIcon: vt,
        downloadIcon: bt
      } = typeof i == 'boolean' ? {} : i,
      Se = (b, E) =>
        i
          ? l.createElement(en, {
              prefixCls: N,
              listType: s,
              items: L,
              previewFile: m,
              onPreview: o,
              onDownload: d,
              onRemove: G,
              showRemoveIcon: !W && ft,
              showPreviewIcon: mt,
              showDownloadIcon: gt,
              removeIcon: ht,
              previewIcon: vt,
              downloadIcon: bt,
              iconRender: h,
              locale: Object.assign(Object.assign({}, pe), y),
              isImageUrl: I,
              progress: $,
              appendAction: b,
              appendActionVisible: E,
              itemRender: P
            })
          : b,
      Ee = { [`${N}-rtl`]: ue === 'rtl' }
    if (O === 'drag') {
      const b = A(
        N,
        {
          [`${N}-drag`]: !0,
          [`${N}-drag-uploading`]: L.some((E) => E.status === 'uploading'),
          [`${N}-drag-hover`]: oe === 'dragover',
          [`${N}-disabled`]: W,
          [`${N}-rtl`]: ue === 'rtl'
        },
        te
      )
      return z(
        l.createElement(
          'span',
          { className: A(`${N}-wrapper`, Ee, x, te) },
          l.createElement(
            'div',
            { className: b, onDrop: Z, onDragOver: Z, onDragLeave: Z, style: u },
            l.createElement(
              Me,
              Object.assign({}, ee, { ref: _, className: `${N}-btn` }),
              l.createElement('div', { className: `${N}-drag-container` }, w)
            )
          ),
          Se()
        )
      )
    }
    const yt = A(N, `${N}-select`, { [`${N}-disabled`]: W }),
      Ue = ((b) =>
        l.createElement(
          'div',
          { className: yt, style: b },
          l.createElement(Me, Object.assign({}, ee, { ref: _ }))
        ))(w ? void 0 : { display: 'none' })
    return z(
      s === 'picture-card' || s === 'picture-circle'
        ? l.createElement(
            'span',
            {
              className: A(
                `${N}-wrapper`,
                {
                  [`${N}-picture-card-wrapper`]: s === 'picture-card',
                  [`${N}-picture-circle-wrapper`]: s === 'picture-circle'
                },
                Ee,
                x,
                te
              )
            },
            Se(Ue, !!w)
          )
        : l.createElement('span', { className: A(`${N}-wrapper`, Ee, x, te) }, Ue, Se())
    )
  },
  hn = l.forwardRef(gn),
  pt = hn
var vn =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var r = {}
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n])
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
        t.indexOf(n[a]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
          (r[n[a]] = e[n[a]])
    return r
  }
const bn = l.forwardRef((e, t) => {
    var { style: r, height: n } = e,
      a = vn(e, ['style', 'height'])
    return l.createElement(
      pt,
      Object.assign({ ref: t }, a, {
        type: 'drag',
        style: Object.assign(Object.assign({}, r), { height: n })
      })
    )
  }),
  yn = bn,
  Ae = pt
Ae.Dragger = yn
Ae.LIST_IGNORE = he
const $n = Ae
function wn(e) {
  return _t({ url: '/upload', method: 'post', data: e })
}
const Cn = (e, t) => {
    console.log('编辑弹窗刷新')
    const [r] = ce.useForm(),
      [n, a] = l.useState(!1),
      [i, s] = l.useState({}),
      [o, d] = l.useState(''),
      [c, p] = l.useState(''),
      [m, f] = l.useState(!1),
      [y, h] = l.useState(!1)
    l.useImperativeHandle(t, () => ({
      showModal: (u) => {
        u && (s(u), r.setFieldsValue({ username: u.username, nickname: u.nickname }), d(u.avatar)),
          f(!0)
      }
    }))
    const I = async () => {
        try {
          const u = await r.validateFields()
          h(!0),
            i.id
              ? await Wt({ ...u, id: i.id, avatar: o || '' }).catch(() => {
                  h(!1)
                })
              : await Ht({ ...u, avatar: o || '' }).catch(() => {
                  h(!1)
                }),
            e.getList(),
            Oe.success('创建成功'),
            f(!1)
        } catch (u) {
          console.log('Failed:', u)
        }
      },
      $ = qe('div', {
        children: [
          n ? K(Te, {}) : K(Xt, {}),
          K('div', { style: { marginTop: 8 }, children: '上传' })
        ]
      }),
      v = (u) => {
        const P = u.type === 'image/jpeg' || u.type === 'image/png'
        P || Oe.error('文件格式应为 JPG/PNG !')
        const C = u.size / 1024 / 1024 < 2
        return C || Oe.error('文件不能超过2MB!'), P && C && (d(''), a(!0), p(u)), !1
      }
    l.useEffect(() => {
      c && x()
    }, [c]),
      l.useEffect(() => {
        m || (a(!1), d(''), p(''), h(!1), r.resetFields(), s({}))
      }, [m])
    const x = async () => {
        const u = new FormData()
        u.append('avatar', c)
        const { data: P } = await wn(u)
        a(!1), d(P)
      },
      O = (u) => (
        console.log('Upload event:', u), Array.isArray(u) ? u : u == null ? void 0 : u.fileList
      )
    return K(zt, {
      title: '编辑',
      open: m,
      onOk: I,
      confirmLoading: y,
      destroyOnClose: !0,
      getContainer: !1,
      onCancel: () => {
        a(!1), d(''), f(!1), r.resetFields()
      },
      children: qe(ce, {
        form: r,
        style: { padding: '10px 60px 10px 0' },
        labelCol: { span: 6 },
        name: 'basic',
        initialValues: { remember: !0 },
        autoComplete: 'off',
        children: [
          K(ce.Item, {
            label: '用户名称',
            name: 'username',
            rules: [{ required: !0, message: 'Please input your username!' }],
            children: K(xe, { autoComplete: 'off' })
          }),
          K(ce.Item, {
            label: '用户昵称',
            name: 'nickname',
            rules: [{ required: !0, message: 'Please input your nickname!' }],
            children: K(xe, { autoComplete: 'off' })
          }),
          K(ce.Item, {
            label: '用户密码',
            name: 'password',
            rules: [{ required: !0, message: 'Please input your password!' }],
            children: K(xe.Password, { autoComplete: 'off' })
          }),
          K(ce.Item, {
            label: '用户头像',
            name: 'avatar',
            valuePropName: 'fileList',
            getValueFromEvent: O,
            rules: [{ required: !1, message: 'Please input your avatar!' }],
            children: K($n, {
              name: 'avatar',
              listType: 'picture-card',
              className: 'avatar-uploader',
              showUploadList: !1,
              beforeUpload: v,
              children: o
                ? K('img', { src: o, alt: 'avatar', style: { width: '100%', height: '100%' } })
                : $
            })
          })
        ]
      })
    })
  },
  Dn = l.memo(l.forwardRef(Cn))
export { Dn as default }
//# sourceMappingURL=editUser-5663cf53.js.map

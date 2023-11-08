import { r as v, G as Ui, h as Ni, R as ps, j as B, d as It } from './index-7ec5c925.js'
import { P as Gi, C as Ot } from './index-75272ee3.js'
import $i from './AntVOne-7b4c080f.js'
import './PlusOutlined-b08ffc51.js'
var zi = {
  icon: {
    tag: 'svg',
    attrs: { 'fill-rule': 'evenodd', viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm128.01 198.83c.03 0 .05.01.09.06l45.02 45.01a.2.2 0 01.05.09.12.12 0 010 .07c0 .02-.01.04-.05.08L557.25 512l127.87 127.86a.27.27 0 01.05.06v.02a.12.12 0 010 .07c0 .03-.01.05-.05.09l-45.02 45.02a.2.2 0 01-.09.05.12.12 0 01-.07 0c-.02 0-.04-.01-.08-.05L512 557.25 384.14 685.12c-.04.04-.06.05-.08.05a.12.12 0 01-.07 0c-.03 0-.05-.01-.09-.05l-45.02-45.02a.2.2 0 01-.05-.09.12.12 0 010-.07c0-.02.01-.04.06-.08L466.75 512 338.88 384.14a.27.27 0 01-.05-.06l-.01-.02a.12.12 0 010-.07c0-.03.01-.05.05-.09l45.02-45.02a.2.2 0 01.09-.05.12.12 0 01.07 0c.02 0 .04.01.08.06L512 466.75l127.86-127.86c.04-.05.06-.06.08-.06a.12.12 0 01.07 0z'
        }
      }
    ]
  },
  name: 'close-circle',
  theme: 'outlined'
}
const Wi = zi
var Hi = function (e, n) {
  return v.createElement(Ui, Ni({}, e, { ref: n, icon: Wi }))
}
const Ki = v.forwardRef(Hi),
  gs = v.createContext({ transformPagePoint: (t) => t, isStatic: !1, reducedMotion: 'never' }),
  te = v.createContext({}),
  ee = v.createContext(null),
  ne = typeof document < 'u',
  ke = ne ? v.useLayoutEffect : v.useEffect,
  ys = v.createContext({ strict: !1 })
function _i(t, e, n, s) {
  const { visualElement: i } = v.useContext(te),
    o = v.useContext(ys),
    r = v.useContext(ee),
    a = v.useContext(gs).reducedMotion,
    c = v.useRef()
  ;(s = s || o.renderer),
    !c.current &&
      s &&
      (c.current = s(t, {
        visualState: e,
        parent: i,
        props: n,
        presenceContext: r,
        blockInitialAnimation: r ? r.initial === !1 : !1,
        reducedMotionConfig: a
      }))
  const l = c.current
  v.useInsertionEffect(() => {
    l && l.update(n, r)
  })
  const u = v.useRef(!!window.HandoffAppearAnimations)
  return (
    ke(() => {
      l && (l.render(), u.current && l.animationState && l.animationState.animateChanges())
    }),
    v.useEffect(() => {
      l &&
        (l.updateFeatures(),
        !u.current && l.animationState && l.animationState.animateChanges(),
        (window.HandoffAppearAnimations = void 0),
        (u.current = !1))
    }),
    l
  )
}
function mt(t) {
  return typeof t == 'object' && Object.prototype.hasOwnProperty.call(t, 'current')
}
function Xi(t, e, n) {
  return v.useCallback(
    (s) => {
      s && t.mount && t.mount(s),
        e && (s ? e.mount(s) : e.unmount()),
        n && (typeof n == 'function' ? n(s) : mt(n) && (n.current = s))
    },
    [e]
  )
}
function Mt(t) {
  return typeof t == 'string' || Array.isArray(t)
}
function se(t) {
  return typeof t == 'object' && typeof t.start == 'function'
}
const je = ['animate', 'whileInView', 'whileFocus', 'whileHover', 'whileTap', 'whileDrag', 'exit'],
  Ie = ['initial', ...je]
function ie(t) {
  return se(t.animate) || Ie.some((e) => Mt(t[e]))
}
function vs(t) {
  return !!(ie(t) || t.variants)
}
function Yi(t, e) {
  if (ie(t)) {
    const { initial: n, animate: s } = t
    return { initial: n === !1 || Mt(n) ? n : void 0, animate: Mt(s) ? s : void 0 }
  }
  return t.inherit !== !1 ? e : {}
}
function qi(t) {
  const { initial: e, animate: n } = Yi(t, v.useContext(te))
  return v.useMemo(() => ({ initial: e, animate: n }), [hn(e), hn(n)])
}
function hn(t) {
  return Array.isArray(t) ? t.join(' ') : t
}
const fn = {
    animation: [
      'animate',
      'variants',
      'whileHover',
      'whileTap',
      'exit',
      'whileInView',
      'whileFocus',
      'whileDrag'
    ],
    exit: ['exit'],
    drag: ['drag', 'dragControls'],
    focus: ['whileFocus'],
    hover: ['whileHover', 'onHoverStart', 'onHoverEnd'],
    tap: ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
    pan: ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
    inView: ['whileInView', 'onViewportEnter', 'onViewportLeave'],
    layout: ['layout', 'layoutId']
  },
  Rt = {}
for (const t in fn) Rt[t] = { isEnabled: (e) => fn[t].some((n) => !!e[n]) }
function Zi(t) {
  for (const e in t) Rt[e] = { ...Rt[e], ...t[e] }
}
const Oe = v.createContext({}),
  xs = v.createContext({}),
  Qi = Symbol.for('motionComponentSymbol')
function Ji({
  preloadedFeatures: t,
  createVisualElement: e,
  useRender: n,
  useVisualState: s,
  Component: i
}) {
  t && Zi(t)
  function o(a, c) {
    let l
    const u = { ...v.useContext(gs), ...a, layoutId: tr(a) },
      { isStatic: h } = u,
      f = qi(a),
      d = s(a, h)
    if (!h && ne) {
      f.visualElement = _i(i, d, u, e)
      const m = v.useContext(xs),
        y = v.useContext(ys).strict
      f.visualElement && (l = f.visualElement.loadFeatures(u, y, t, m))
    }
    return v.createElement(
      te.Provider,
      { value: f },
      l && f.visualElement ? v.createElement(l, { visualElement: f.visualElement, ...u }) : null,
      n(i, a, Xi(d, f.visualElement, c), d, h, f.visualElement)
    )
  }
  const r = v.forwardRef(o)
  return (r[Qi] = i), r
}
function tr({ layoutId: t }) {
  const e = v.useContext(Oe).id
  return e && t !== void 0 ? e + '-' + t : t
}
function er(t) {
  function e(s, i = {}) {
    return Ji(t(s, i))
  }
  if (typeof Proxy > 'u') return e
  const n = new Map()
  return new Proxy(e, { get: (s, i) => (n.has(i) || n.set(i, e(i)), n.get(i)) })
}
const nr = [
  'animate',
  'circle',
  'defs',
  'desc',
  'ellipse',
  'g',
  'image',
  'line',
  'filter',
  'marker',
  'mask',
  'metadata',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'rect',
  'stop',
  'switch',
  'symbol',
  'svg',
  'text',
  'tspan',
  'use',
  'view'
]
function Ue(t) {
  return typeof t != 'string' || t.includes('-') ? !1 : !!(nr.indexOf(t) > -1 || /[A-Z]/.test(t))
}
const Kt = {}
function sr(t) {
  Object.assign(Kt, t)
}
const Et = [
    'transformPerspective',
    'x',
    'y',
    'z',
    'translateX',
    'translateY',
    'translateZ',
    'scale',
    'scaleX',
    'scaleY',
    'rotate',
    'rotateX',
    'rotateY',
    'rotateZ',
    'skew',
    'skewX',
    'skewY'
  ],
  ut = new Set(Et)
function Ps(t, { layout: e, layoutId: n }) {
  return (
    ut.has(t) || t.startsWith('origin') || ((e || n !== void 0) && (!!Kt[t] || t === 'opacity'))
  )
}
const O = (t) => !!(t && t.getVelocity),
  ir = { x: 'translateX', y: 'translateY', z: 'translateZ', transformPerspective: 'perspective' },
  rr = Et.length
function or(t, { enableHardwareAcceleration: e = !0, allowTransformNone: n = !0 }, s, i) {
  let o = ''
  for (let r = 0; r < rr; r++) {
    const a = Et[r]
    if (t[a] !== void 0) {
      const c = ir[a] || a
      o += `${c}(${t[a]}) `
    }
  }
  return (
    e && !t.z && (o += 'translateZ(0)'),
    (o = o.trim()),
    i ? (o = i(t, s ? '' : o)) : n && s && (o = 'none'),
    o
  )
}
const Ts = (t) => (e) => typeof e == 'string' && e.startsWith(t),
  bs = Ts('--'),
  be = Ts('var(--'),
  ar = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
  cr = (t, e) => (e && typeof t == 'number' ? e.transform(t) : t),
  nt = (t, e, n) => Math.min(Math.max(n, t), e),
  ht = { test: (t) => typeof t == 'number', parse: parseFloat, transform: (t) => t },
  St = { ...ht, transform: (t) => nt(0, 1, t) },
  Ut = { ...ht, default: 1 },
  At = (t) => Math.round(t * 1e5) / 1e5,
  re = /(-)?([\d]*\.?[\d])+/g,
  Vs =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  lr =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i
function Ft(t) {
  return typeof t == 'string'
}
const Bt = (t) => ({
    test: (e) => Ft(e) && e.endsWith(t) && e.split(' ').length === 1,
    parse: parseFloat,
    transform: (e) => `${e}${t}`
  }),
  Q = Bt('deg'),
  $ = Bt('%'),
  P = Bt('px'),
  ur = Bt('vh'),
  hr = Bt('vw'),
  dn = { ...$, parse: (t) => $.parse(t) / 100, transform: (t) => $.transform(t * 100) },
  mn = { ...ht, transform: Math.round },
  Cs = {
    borderWidth: P,
    borderTopWidth: P,
    borderRightWidth: P,
    borderBottomWidth: P,
    borderLeftWidth: P,
    borderRadius: P,
    radius: P,
    borderTopLeftRadius: P,
    borderTopRightRadius: P,
    borderBottomRightRadius: P,
    borderBottomLeftRadius: P,
    width: P,
    maxWidth: P,
    height: P,
    maxHeight: P,
    size: P,
    top: P,
    right: P,
    bottom: P,
    left: P,
    padding: P,
    paddingTop: P,
    paddingRight: P,
    paddingBottom: P,
    paddingLeft: P,
    margin: P,
    marginTop: P,
    marginRight: P,
    marginBottom: P,
    marginLeft: P,
    rotate: Q,
    rotateX: Q,
    rotateY: Q,
    rotateZ: Q,
    scale: Ut,
    scaleX: Ut,
    scaleY: Ut,
    scaleZ: Ut,
    skew: Q,
    skewX: Q,
    skewY: Q,
    distance: P,
    translateX: P,
    translateY: P,
    translateZ: P,
    x: P,
    y: P,
    z: P,
    perspective: P,
    transformPerspective: P,
    opacity: St,
    originX: dn,
    originY: dn,
    originZ: P,
    zIndex: mn,
    fillOpacity: St,
    strokeOpacity: St,
    numOctaves: mn
  }
function Ne(t, e, n, s) {
  const { style: i, vars: o, transform: r, transformOrigin: a } = t
  let c = !1,
    l = !1,
    u = !0
  for (const h in e) {
    const f = e[h]
    if (bs(h)) {
      o[h] = f
      continue
    }
    const d = Cs[h],
      m = cr(f, d)
    if (ut.has(h)) {
      if (((c = !0), (r[h] = m), !u)) continue
      f !== (d.default || 0) && (u = !1)
    } else h.startsWith('origin') ? ((l = !0), (a[h] = m)) : (i[h] = m)
  }
  if (
    (e.transform ||
      (c || s ? (i.transform = or(t.transform, n, u, s)) : i.transform && (i.transform = 'none')),
    l)
  ) {
    const { originX: h = '50%', originY: f = '50%', originZ: d = 0 } = a
    i.transformOrigin = `${h} ${f} ${d}`
  }
}
const Ge = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} })
function Ss(t, e, n) {
  for (const s in e) !O(e[s]) && !Ps(s, n) && (t[s] = e[s])
}
function fr({ transformTemplate: t }, e, n) {
  return v.useMemo(() => {
    const s = Ge()
    return Ne(s, e, { enableHardwareAcceleration: !n }, t), Object.assign({}, s.vars, s.style)
  }, [e])
}
function dr(t, e, n) {
  const s = t.style || {},
    i = {}
  return Ss(i, s, t), Object.assign(i, fr(t, e, n)), t.transformValues ? t.transformValues(i) : i
}
function mr(t, e, n) {
  const s = {},
    i = dr(t, e, n)
  return (
    t.drag &&
      t.dragListener !== !1 &&
      ((s.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = 'none'),
      (i.touchAction = t.drag === !0 ? 'none' : `pan-${t.drag === 'x' ? 'y' : 'x'}`)),
    t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (s.tabIndex = 0),
    (s.style = i),
    s
  )
}
const pr = new Set([
  'animate',
  'exit',
  'variants',
  'initial',
  'style',
  'values',
  'variants',
  'transition',
  'transformTemplate',
  'transformValues',
  'custom',
  'inherit',
  'onLayoutAnimationStart',
  'onLayoutAnimationComplete',
  'onLayoutMeasure',
  'onBeforeLayoutMeasure',
  'onAnimationStart',
  'onAnimationComplete',
  'onUpdate',
  'onDragStart',
  'onDrag',
  'onDragEnd',
  'onMeasureDragConstraints',
  'onDirectionLock',
  'onDragTransitionEnd',
  '_dragX',
  '_dragY',
  'onHoverStart',
  'onHoverEnd',
  'onViewportEnter',
  'onViewportLeave',
  'ignoreStrict',
  'viewport'
])
function _t(t) {
  return (
    t.startsWith('while') ||
    (t.startsWith('drag') && t !== 'draggable') ||
    t.startsWith('layout') ||
    t.startsWith('onTap') ||
    t.startsWith('onPan') ||
    pr.has(t)
  )
}
let As = (t) => !_t(t)
function gr(t) {
  t && (As = (e) => (e.startsWith('on') ? !_t(e) : t(e)))
}
try {
  gr(require('@emotion/is-prop-valid').default)
} catch {}
function yr(t, e, n) {
  const s = {}
  for (const i in t)
    (i === 'values' && typeof t.values == 'object') ||
      ((As(i) ||
        (n === !0 && _t(i)) ||
        (!e && !_t(i)) ||
        (t.draggable && i.startsWith('onDrag'))) &&
        (s[i] = t[i]))
  return s
}
function pn(t, e, n) {
  return typeof t == 'string' ? t : P.transform(e + n * t)
}
function vr(t, e, n) {
  const s = pn(e, t.x, t.width),
    i = pn(n, t.y, t.height)
  return `${s} ${i}`
}
const xr = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
  Pr = { offset: 'strokeDashoffset', array: 'strokeDasharray' }
function Tr(t, e, n = 1, s = 0, i = !0) {
  t.pathLength = 1
  const o = i ? xr : Pr
  t[o.offset] = P.transform(-s)
  const r = P.transform(e),
    a = P.transform(n)
  t[o.array] = `${r} ${a}`
}
function $e(
  t,
  {
    attrX: e,
    attrY: n,
    attrScale: s,
    originX: i,
    originY: o,
    pathLength: r,
    pathSpacing: a = 1,
    pathOffset: c = 0,
    ...l
  },
  u,
  h,
  f
) {
  if ((Ne(t, l, u, f), h)) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox)
    return
  }
  ;(t.attrs = t.style), (t.style = {})
  const { attrs: d, style: m, dimensions: y } = t
  d.transform && (y && (m.transform = d.transform), delete d.transform),
    y &&
      (i !== void 0 || o !== void 0 || m.transform) &&
      (m.transformOrigin = vr(y, i !== void 0 ? i : 0.5, o !== void 0 ? o : 0.5)),
    e !== void 0 && (d.x = e),
    n !== void 0 && (d.y = n),
    s !== void 0 && (d.scale = s),
    r !== void 0 && Tr(d, r, a, c, !1)
}
const ws = () => ({ ...Ge(), attrs: {} }),
  ze = (t) => typeof t == 'string' && t.toLowerCase() === 'svg'
function br(t, e, n, s) {
  const i = v.useMemo(() => {
    const o = ws()
    return (
      $e(o, e, { enableHardwareAcceleration: !1 }, ze(s), t.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    )
  }, [e])
  if (t.style) {
    const o = {}
    Ss(o, t.style, t), (i.style = { ...o, ...i.style })
  }
  return i
}
function Vr(t = !1) {
  return (n, s, i, { latestValues: o }, r) => {
    const c = (Ue(n) ? br : mr)(s, o, r, n),
      u = { ...yr(s, typeof n == 'string', t), ...c, ref: i },
      { children: h } = s,
      f = v.useMemo(() => (O(h) ? h.get() : h), [h])
    return v.createElement(n, { ...u, children: f })
  }
}
const We = (t) => t.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
function Ds(t, { style: e, vars: n }, s, i) {
  Object.assign(t.style, e, i && i.getProjectionStyles(s))
  for (const o in n) t.style.setProperty(o, n[o])
}
const Ms = new Set([
  'baseFrequency',
  'diffuseConstant',
  'kernelMatrix',
  'kernelUnitLength',
  'keySplines',
  'keyTimes',
  'limitingConeAngle',
  'markerHeight',
  'markerWidth',
  'numOctaves',
  'targetX',
  'targetY',
  'surfaceScale',
  'specularConstant',
  'specularExponent',
  'stdDeviation',
  'tableValues',
  'viewBox',
  'gradientTransform',
  'pathLength',
  'startOffset',
  'textLength',
  'lengthAdjust'
])
function Rs(t, e, n, s) {
  Ds(t, e, void 0, s)
  for (const i in e.attrs) t.setAttribute(Ms.has(i) ? i : We(i), e.attrs[i])
}
function He(t, e) {
  const { style: n } = t,
    s = {}
  for (const i in n) (O(n[i]) || (e.style && O(e.style[i])) || Ps(i, t)) && (s[i] = n[i])
  return s
}
function Ls(t, e) {
  const n = He(t, e)
  for (const s in t)
    if (O(t[s]) || O(e[s])) {
      const i = Et.indexOf(s) !== -1 ? 'attr' + s.charAt(0).toUpperCase() + s.substring(1) : s
      n[i] = t[s]
    }
  return n
}
function Ke(t, e, n, s = {}, i = {}) {
  return (
    typeof e == 'function' && (e = e(n !== void 0 ? n : t.custom, s, i)),
    typeof e == 'string' && (e = t.variants && t.variants[e]),
    typeof e == 'function' && (e = e(n !== void 0 ? n : t.custom, s, i)),
    e
  )
}
function Es(t) {
  const e = v.useRef(null)
  return e.current === null && (e.current = t()), e.current
}
const Xt = (t) => Array.isArray(t),
  Cr = (t) => !!(t && typeof t == 'object' && t.mix && t.toValue),
  Sr = (t) => (Xt(t) ? t[t.length - 1] || 0 : t)
function Wt(t) {
  const e = O(t) ? t.get() : t
  return Cr(e) ? e.toValue() : e
}
function Ar({ scrapeMotionValuesFromProps: t, createRenderState: e, onMount: n }, s, i, o) {
  const r = { latestValues: wr(s, i, o, t), renderState: e() }
  return n && (r.mount = (a) => n(s, a, r)), r
}
const Fs = (t) => (e, n) => {
  const s = v.useContext(te),
    i = v.useContext(ee),
    o = () => Ar(t, e, s, i)
  return n ? o() : Es(o)
}
function wr(t, e, n, s) {
  const i = {},
    o = s(t, {})
  for (const f in o) i[f] = Wt(o[f])
  let { initial: r, animate: a } = t
  const c = ie(t),
    l = vs(t)
  e &&
    l &&
    !c &&
    t.inherit !== !1 &&
    (r === void 0 && (r = e.initial), a === void 0 && (a = e.animate))
  let u = n ? n.initial === !1 : !1
  u = u || r === !1
  const h = u ? a : r
  return (
    h &&
      typeof h != 'boolean' &&
      !se(h) &&
      (Array.isArray(h) ? h : [h]).forEach((d) => {
        const m = Ke(t, d)
        if (!m) return
        const { transitionEnd: y, transition: x, ...V } = m
        for (const g in V) {
          let p = V[g]
          if (Array.isArray(p)) {
            const T = u ? p.length - 1 : 0
            p = p[T]
          }
          p !== null && (i[g] = p)
        }
        for (const g in y) i[g] = y[g]
      }),
    i
  )
}
const R = (t) => t
class gn {
  constructor() {
    ;(this.order = []), (this.scheduled = new Set())
  }
  add(e) {
    if (!this.scheduled.has(e)) return this.scheduled.add(e), this.order.push(e), !0
  }
  remove(e) {
    const n = this.order.indexOf(e)
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(e))
  }
  clear() {
    ;(this.order.length = 0), this.scheduled.clear()
  }
}
function Dr(t) {
  let e = new gn(),
    n = new gn(),
    s = 0,
    i = !1,
    o = !1
  const r = new WeakSet(),
    a = {
      schedule: (c, l = !1, u = !1) => {
        const h = u && i,
          f = h ? e : n
        return l && r.add(c), f.add(c) && h && i && (s = e.order.length), c
      },
      cancel: (c) => {
        n.remove(c), r.delete(c)
      },
      process: (c) => {
        if (i) {
          o = !0
          return
        }
        if (((i = !0), ([e, n] = [n, e]), n.clear(), (s = e.order.length), s))
          for (let l = 0; l < s; l++) {
            const u = e.order[l]
            u(c), r.has(u) && (a.schedule(u), t())
          }
        ;(i = !1), o && ((o = !1), a.process(c))
      }
    }
  return a
}
const Nt = ['prepare', 'read', 'update', 'preRender', 'render', 'postRender'],
  Mr = 40
function Rr(t, e) {
  let n = !1,
    s = !0
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = Nt.reduce((h, f) => ((h[f] = Dr(() => (n = !0))), h), {}),
    r = (h) => o[h].process(i),
    a = () => {
      const h = performance.now()
      ;(n = !1),
        (i.delta = s ? 1e3 / 60 : Math.max(Math.min(h - i.timestamp, Mr), 1)),
        (i.timestamp = h),
        (i.isProcessing = !0),
        Nt.forEach(r),
        (i.isProcessing = !1),
        n && e && ((s = !1), t(a))
    },
    c = () => {
      ;(n = !0), (s = !0), i.isProcessing || t(a)
    }
  return {
    schedule: Nt.reduce((h, f) => {
      const d = o[f]
      return (h[f] = (m, y = !1, x = !1) => (n || c(), d.schedule(m, y, x))), h
    }, {}),
    cancel: (h) => Nt.forEach((f) => o[f].cancel(h)),
    state: i,
    steps: o
  }
}
const {
    schedule: S,
    cancel: X,
    state: j,
    steps: le
  } = Rr(typeof requestAnimationFrame < 'u' ? requestAnimationFrame : R, !0),
  Lr = {
    useVisualState: Fs({
      scrapeMotionValuesFromProps: Ls,
      createRenderState: ws,
      onMount: (t, e, { renderState: n, latestValues: s }) => {
        S.read(() => {
          try {
            n.dimensions = typeof e.getBBox == 'function' ? e.getBBox() : e.getBoundingClientRect()
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 }
          }
        }),
          S.render(() => {
            $e(n, s, { enableHardwareAcceleration: !1 }, ze(e.tagName), t.transformTemplate),
              Rs(e, n)
          })
      }
    })
  },
  Er = { useVisualState: Fs({ scrapeMotionValuesFromProps: He, createRenderState: Ge }) }
function Fr(t, { forwardMotionProps: e = !1 }, n, s) {
  return {
    ...(Ue(t) ? Lr : Er),
    preloadedFeatures: n,
    useRender: Vr(e),
    createVisualElement: s,
    Component: t
  }
}
function H(t, e, n, s = { passive: !0 }) {
  return t.addEventListener(e, n, s), () => t.removeEventListener(e, n)
}
const Bs = (t) =>
  t.pointerType === 'mouse' ? typeof t.button != 'number' || t.button <= 0 : t.isPrimary !== !1
function oe(t, e = 'page') {
  return { point: { x: t[e + 'X'], y: t[e + 'Y'] } }
}
const Br = (t) => (e) => Bs(e) && t(e, oe(e))
function K(t, e, n, s) {
  return H(t, e, Br(n), s)
}
const kr = (t, e) => (n) => e(t(n)),
  tt = (...t) => t.reduce(kr)
function ks(t) {
  let e = null
  return () => {
    const n = () => {
      e = null
    }
    return e === null ? ((e = t), n) : !1
  }
}
const yn = ks('dragHorizontal'),
  vn = ks('dragVertical')
function js(t) {
  let e = !1
  if (t === 'y') e = vn()
  else if (t === 'x') e = yn()
  else {
    const n = yn(),
      s = vn()
    n && s
      ? (e = () => {
          n(), s()
        })
      : (n && n(), s && s())
  }
  return e
}
function Is() {
  const t = js(!0)
  return t ? (t(), !1) : !0
}
class it {
  constructor(e) {
    ;(this.isMounted = !1), (this.node = e)
  }
  update() {}
}
function xn(t, e) {
  const n = 'pointer' + (e ? 'enter' : 'leave'),
    s = 'onHover' + (e ? 'Start' : 'End'),
    i = (o, r) => {
      if (o.type === 'touch' || Is()) return
      const a = t.getProps()
      t.animationState && a.whileHover && t.animationState.setActive('whileHover', e),
        a[s] && S.update(() => a[s](o, r))
    }
  return K(t.current, n, i, { passive: !t.getProps()[s] })
}
class jr extends it {
  mount() {
    this.unmount = tt(xn(this.node, !0), xn(this.node, !1))
  }
  unmount() {}
}
class Ir extends it {
  constructor() {
    super(...arguments), (this.isActive = !1)
  }
  onFocus() {
    let e = !1
    try {
      e = this.node.current.matches(':focus-visible')
    } catch {
      e = !0
    }
    !e ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !0), (this.isActive = !0))
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !1), (this.isActive = !1))
  }
  mount() {
    this.unmount = tt(
      H(this.node.current, 'focus', () => this.onFocus()),
      H(this.node.current, 'blur', () => this.onBlur())
    )
  }
  unmount() {}
}
const Os = (t, e) => (e ? (t === e ? !0 : Os(t, e.parentElement)) : !1)
function ue(t, e) {
  if (!e) return
  const n = new PointerEvent('pointer' + t)
  e(n, oe(n))
}
class Or extends it {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = R),
      (this.removeEndListeners = R),
      (this.removeAccessibleListeners = R),
      (this.startPointerPress = (e, n) => {
        if ((this.removeEndListeners(), this.isPressing)) return
        const s = this.node.getProps(),
          o = K(
            window,
            'pointerup',
            (a, c) => {
              if (!this.checkPressEnd()) return
              const { onTap: l, onTapCancel: u } = this.node.getProps()
              S.update(() => {
                Os(this.node.current, a.target) ? l && l(a, c) : u && u(a, c)
              })
            },
            { passive: !(s.onTap || s.onPointerUp) }
          ),
          r = K(window, 'pointercancel', (a, c) => this.cancelPress(a, c), {
            passive: !(s.onTapCancel || s.onPointerCancel)
          })
        ;(this.removeEndListeners = tt(o, r)), this.startPress(e, n)
      }),
      (this.startAccessiblePress = () => {
        const e = (o) => {
            if (o.key !== 'Enter' || this.isPressing) return
            const r = (a) => {
              a.key !== 'Enter' ||
                !this.checkPressEnd() ||
                ue('up', (c, l) => {
                  const { onTap: u } = this.node.getProps()
                  u && S.update(() => u(c, l))
                })
            }
            this.removeEndListeners(),
              (this.removeEndListeners = H(this.node.current, 'keyup', r)),
              ue('down', (a, c) => {
                this.startPress(a, c)
              })
          },
          n = H(this.node.current, 'keydown', e),
          s = () => {
            this.isPressing && ue('cancel', (o, r) => this.cancelPress(o, r))
          },
          i = H(this.node.current, 'blur', s)
        this.removeAccessibleListeners = tt(n, i)
      })
  }
  startPress(e, n) {
    this.isPressing = !0
    const { onTapStart: s, whileTap: i } = this.node.getProps()
    i && this.node.animationState && this.node.animationState.setActive('whileTap', !0),
      s && S.update(() => s(e, n))
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive('whileTap', !1),
      !Is()
    )
  }
  cancelPress(e, n) {
    if (!this.checkPressEnd()) return
    const { onTapCancel: s } = this.node.getProps()
    s && S.update(() => s(e, n))
  }
  mount() {
    const e = this.node.getProps(),
      n = K(this.node.current, 'pointerdown', this.startPointerPress, {
        passive: !(e.onTapStart || e.onPointerStart)
      }),
      s = H(this.node.current, 'focus', this.startAccessiblePress)
    this.removeStartListeners = tt(n, s)
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
  }
}
const Ve = new WeakMap(),
  he = new WeakMap(),
  Ur = (t) => {
    const e = Ve.get(t.target)
    e && e(t)
  },
  Nr = (t) => {
    t.forEach(Ur)
  }
function Gr({ root: t, ...e }) {
  const n = t || document
  he.has(n) || he.set(n, {})
  const s = he.get(n),
    i = JSON.stringify(e)
  return s[i] || (s[i] = new IntersectionObserver(Nr, { root: t, ...e })), s[i]
}
function $r(t, e, n) {
  const s = Gr(e)
  return (
    Ve.set(t, n),
    s.observe(t),
    () => {
      Ve.delete(t), s.unobserve(t)
    }
  )
}
const zr = { some: 0, all: 1 }
class Wr extends it {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1)
  }
  startObserver() {
    this.unmount()
    const { viewport: e = {} } = this.node.getProps(),
      { root: n, margin: s, amount: i = 'some', once: o } = e,
      r = {
        root: n ? n.current : void 0,
        rootMargin: s,
        threshold: typeof i == 'number' ? i : zr[i]
      },
      a = (c) => {
        const { isIntersecting: l } = c
        if (this.isInView === l || ((this.isInView = l), o && !l && this.hasEnteredView)) return
        l && (this.hasEnteredView = !0),
          this.node.animationState && this.node.animationState.setActive('whileInView', l)
        const { onViewportEnter: u, onViewportLeave: h } = this.node.getProps(),
          f = l ? u : h
        f && f(c)
      }
    return $r(this.node.current, r, a)
  }
  mount() {
    this.startObserver()
  }
  update() {
    if (typeof IntersectionObserver > 'u') return
    const { props: e, prevProps: n } = this.node
    ;['amount', 'margin', 'root'].some(Hr(e, n)) && this.startObserver()
  }
  unmount() {}
}
function Hr({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n]
}
const Kr = {
  inView: { Feature: Wr },
  tap: { Feature: Or },
  focus: { Feature: Ir },
  hover: { Feature: jr }
}
function Us(t, e) {
  if (!Array.isArray(e)) return !1
  const n = e.length
  if (n !== t.length) return !1
  for (let s = 0; s < n; s++) if (e[s] !== t[s]) return !1
  return !0
}
function _r(t) {
  const e = {}
  return t.values.forEach((n, s) => (e[s] = n.get())), e
}
function Xr(t) {
  const e = {}
  return t.values.forEach((n, s) => (e[s] = n.getVelocity())), e
}
function ae(t, e, n) {
  const s = t.getProps()
  return Ke(s, e, n !== void 0 ? n : s.custom, _r(t), Xr(t))
}
const Yr = 'framerAppearId',
  qr = 'data-' + We(Yr)
let Zr = R,
  _e = R
const et = (t) => t * 1e3,
  _ = (t) => t / 1e3,
  Qr = { current: !1 },
  Ns = (t) => Array.isArray(t) && typeof t[0] == 'number'
function Gs(t) {
  return !!(!t || (typeof t == 'string' && $s[t]) || Ns(t) || (Array.isArray(t) && t.every(Gs)))
}
const Ct = ([t, e, n, s]) => `cubic-bezier(${t}, ${e}, ${n}, ${s})`,
  $s = {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    circIn: Ct([0, 0.65, 0.55, 1]),
    circOut: Ct([0.55, 0, 1, 0.45]),
    backIn: Ct([0.31, 0.01, 0.66, -0.59]),
    backOut: Ct([0.33, 1.53, 0.69, 0.99])
  }
function zs(t) {
  if (t) return Ns(t) ? Ct(t) : Array.isArray(t) ? t.map(zs) : $s[t]
}
function Jr(
  t,
  e,
  n,
  { delay: s = 0, duration: i, repeat: o = 0, repeatType: r = 'loop', ease: a, times: c } = {}
) {
  const l = { [e]: n }
  c && (l.offset = c)
  const u = zs(a)
  return (
    Array.isArray(u) && (l.easing = u),
    t.animate(l, {
      delay: s,
      duration: i,
      easing: Array.isArray(u) ? 'linear' : u,
      fill: 'both',
      iterations: o + 1,
      direction: r === 'reverse' ? 'alternate' : 'normal'
    })
  )
}
function to(t, { repeat: e, repeatType: n = 'loop' }) {
  const s = e && n !== 'loop' && e % 2 === 1 ? 0 : t.length - 1
  return t[s]
}
const Ws = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t,
  eo = 1e-7,
  no = 12
function so(t, e, n, s, i) {
  let o,
    r,
    a = 0
  do (r = e + (n - e) / 2), (o = Ws(r, s, i) - t), o > 0 ? (n = r) : (e = r)
  while (Math.abs(o) > eo && ++a < no)
  return r
}
function kt(t, e, n, s) {
  if (t === e && n === s) return R
  const i = (o) => so(o, 0, 1, t, n)
  return (o) => (o === 0 || o === 1 ? o : Ws(i(o), e, s))
}
const io = kt(0.42, 0, 1, 1),
  ro = kt(0, 0, 0.58, 1),
  Hs = kt(0.42, 0, 0.58, 1),
  oo = (t) => Array.isArray(t) && typeof t[0] != 'number',
  Ks = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
  _s = (t) => (e) => 1 - t(1 - e),
  Xs = (t) => 1 - Math.sin(Math.acos(t)),
  Xe = _s(Xs),
  ao = Ks(Xe),
  Ys = kt(0.33, 1.53, 0.69, 0.99),
  Ye = _s(Ys),
  co = Ks(Ye),
  lo = (t) => ((t *= 2) < 1 ? 0.5 * Ye(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)))),
  uo = {
    linear: R,
    easeIn: io,
    easeInOut: Hs,
    easeOut: ro,
    circIn: Xs,
    circInOut: ao,
    circOut: Xe,
    backIn: Ye,
    backInOut: co,
    backOut: Ys,
    anticipate: lo
  },
  Pn = (t) => {
    if (Array.isArray(t)) {
      _e(t.length === 4)
      const [e, n, s, i] = t
      return kt(e, n, s, i)
    } else if (typeof t == 'string') return uo[t]
    return t
  },
  qe = (t, e) => (n) =>
    !!(
      (Ft(n) && lr.test(n) && n.startsWith(t)) ||
      (e && Object.prototype.hasOwnProperty.call(n, e))
    ),
  qs = (t, e, n) => (s) => {
    if (!Ft(s)) return s
    const [i, o, r, a] = s.match(re)
    return {
      [t]: parseFloat(i),
      [e]: parseFloat(o),
      [n]: parseFloat(r),
      alpha: a !== void 0 ? parseFloat(a) : 1
    }
  },
  ho = (t) => nt(0, 255, t),
  fe = { ...ht, transform: (t) => Math.round(ho(t)) },
  lt = {
    test: qe('rgb', 'red'),
    parse: qs('red', 'green', 'blue'),
    transform: ({ red: t, green: e, blue: n, alpha: s = 1 }) =>
      'rgba(' +
      fe.transform(t) +
      ', ' +
      fe.transform(e) +
      ', ' +
      fe.transform(n) +
      ', ' +
      At(St.transform(s)) +
      ')'
  }
function fo(t) {
  let e = '',
    n = '',
    s = '',
    i = ''
  return (
    t.length > 5
      ? ((e = t.substring(1, 3)),
        (n = t.substring(3, 5)),
        (s = t.substring(5, 7)),
        (i = t.substring(7, 9)))
      : ((e = t.substring(1, 2)),
        (n = t.substring(2, 3)),
        (s = t.substring(3, 4)),
        (i = t.substring(4, 5)),
        (e += e),
        (n += n),
        (s += s),
        (i += i)),
    {
      red: parseInt(e, 16),
      green: parseInt(n, 16),
      blue: parseInt(s, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1
    }
  )
}
const Ce = { test: qe('#'), parse: fo, transform: lt.transform },
  pt = {
    test: qe('hsl', 'hue'),
    parse: qs('hue', 'saturation', 'lightness'),
    transform: ({ hue: t, saturation: e, lightness: n, alpha: s = 1 }) =>
      'hsla(' +
      Math.round(t) +
      ', ' +
      $.transform(At(e)) +
      ', ' +
      $.transform(At(n)) +
      ', ' +
      At(St.transform(s)) +
      ')'
  },
  I = {
    test: (t) => lt.test(t) || Ce.test(t) || pt.test(t),
    parse: (t) => (lt.test(t) ? lt.parse(t) : pt.test(t) ? pt.parse(t) : Ce.parse(t)),
    transform: (t) => (Ft(t) ? t : t.hasOwnProperty('red') ? lt.transform(t) : pt.transform(t))
  },
  M = (t, e, n) => -n * t + n * e + t
function de(t, e, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
  )
}
function mo({ hue: t, saturation: e, lightness: n, alpha: s }) {
  ;(t /= 360), (e /= 100), (n /= 100)
  let i = 0,
    o = 0,
    r = 0
  if (!e) i = o = r = n
  else {
    const a = n < 0.5 ? n * (1 + e) : n + e - n * e,
      c = 2 * n - a
    ;(i = de(c, a, t + 1 / 3)), (o = de(c, a, t)), (r = de(c, a, t - 1 / 3))
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(r * 255),
    alpha: s
  }
}
const me = (t, e, n) => {
    const s = t * t
    return Math.sqrt(Math.max(0, n * (e * e - s) + s))
  },
  po = [Ce, lt, pt],
  go = (t) => po.find((e) => e.test(t))
function Tn(t) {
  const e = go(t)
  let n = e.parse(t)
  return e === pt && (n = mo(n)), n
}
const Zs = (t, e) => {
  const n = Tn(t),
    s = Tn(e),
    i = { ...n }
  return (o) => (
    (i.red = me(n.red, s.red, o)),
    (i.green = me(n.green, s.green, o)),
    (i.blue = me(n.blue, s.blue, o)),
    (i.alpha = M(n.alpha, s.alpha, o)),
    lt.transform(i)
  )
}
function yo(t) {
  var e, n
  return (
    isNaN(t) &&
    Ft(t) &&
    (((e = t.match(re)) === null || e === void 0 ? void 0 : e.length) || 0) +
      (((n = t.match(Vs)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  )
}
const Qs = { regex: ar, countKey: 'Vars', token: '${v}', parse: R },
  Js = { regex: Vs, countKey: 'Colors', token: '${c}', parse: I.parse },
  ti = { regex: re, countKey: 'Numbers', token: '${n}', parse: ht.parse }
function pe(t, { regex: e, countKey: n, token: s, parse: i }) {
  const o = t.tokenised.match(e)
  o &&
    ((t['num' + n] = o.length),
    (t.tokenised = t.tokenised.replace(e, s)),
    t.values.push(...o.map(i)))
}
function Yt(t) {
  const e = t.toString(),
    n = { value: e, tokenised: e, values: [], numVars: 0, numColors: 0, numNumbers: 0 }
  return n.value.includes('var(--') && pe(n, Qs), pe(n, Js), pe(n, ti), n
}
function ei(t) {
  return Yt(t).values
}
function ni(t) {
  const { values: e, numColors: n, numVars: s, tokenised: i } = Yt(t),
    o = e.length
  return (r) => {
    let a = i
    for (let c = 0; c < o; c++)
      c < s
        ? (a = a.replace(Qs.token, r[c]))
        : c < s + n
        ? (a = a.replace(Js.token, I.transform(r[c])))
        : (a = a.replace(ti.token, At(r[c])))
    return a
  }
}
const vo = (t) => (typeof t == 'number' ? 0 : t)
function xo(t) {
  const e = ei(t)
  return ni(t)(e.map(vo))
}
const st = { test: yo, parse: ei, createTransformer: ni, getAnimatableNone: xo },
  si = (t, e) => (n) => `${n > 0 ? e : t}`
function ii(t, e) {
  return typeof t == 'number'
    ? (n) => M(t, e, n)
    : I.test(t)
    ? Zs(t, e)
    : t.startsWith('var(')
    ? si(t, e)
    : oi(t, e)
}
const ri = (t, e) => {
    const n = [...t],
      s = n.length,
      i = t.map((o, r) => ii(o, e[r]))
    return (o) => {
      for (let r = 0; r < s; r++) n[r] = i[r](o)
      return n
    }
  },
  Po = (t, e) => {
    const n = { ...t, ...e },
      s = {}
    for (const i in n) t[i] !== void 0 && e[i] !== void 0 && (s[i] = ii(t[i], e[i]))
    return (i) => {
      for (const o in s) n[o] = s[o](i)
      return n
    }
  },
  oi = (t, e) => {
    const n = st.createTransformer(e),
      s = Yt(t),
      i = Yt(e)
    return s.numVars === i.numVars && s.numColors === i.numColors && s.numNumbers >= i.numNumbers
      ? tt(ri(s.values, i.values), n)
      : si(t, e)
  },
  Lt = (t, e, n) => {
    const s = e - t
    return s === 0 ? 1 : (n - t) / s
  },
  bn = (t, e) => (n) => M(t, e, n)
function To(t) {
  return typeof t == 'number'
    ? bn
    : typeof t == 'string'
    ? I.test(t)
      ? Zs
      : oi
    : Array.isArray(t)
    ? ri
    : typeof t == 'object'
    ? Po
    : bn
}
function bo(t, e, n) {
  const s = [],
    i = n || To(t[0]),
    o = t.length - 1
  for (let r = 0; r < o; r++) {
    let a = i(t[r], t[r + 1])
    if (e) {
      const c = Array.isArray(e) ? e[r] || R : e
      a = tt(c, a)
    }
    s.push(a)
  }
  return s
}
function ai(t, e, { clamp: n = !0, ease: s, mixer: i } = {}) {
  const o = t.length
  if ((_e(o === e.length), o === 1)) return () => e[0]
  t[0] > t[o - 1] && ((t = [...t].reverse()), (e = [...e].reverse()))
  const r = bo(e, s, i),
    a = r.length,
    c = (l) => {
      let u = 0
      if (a > 1) for (; u < t.length - 2 && !(l < t[u + 1]); u++);
      const h = Lt(t[u], t[u + 1], l)
      return r[u](h)
    }
  return n ? (l) => c(nt(t[0], t[o - 1], l)) : c
}
function Vo(t, e) {
  const n = t[t.length - 1]
  for (let s = 1; s <= e; s++) {
    const i = Lt(0, e, s)
    t.push(M(n, 1, i))
  }
}
function Co(t) {
  const e = [0]
  return Vo(e, t.length - 1), e
}
function So(t, e) {
  return t.map((n) => n * e)
}
function Ao(t, e) {
  return t.map(() => e || Hs).splice(0, t.length - 1)
}
function qt({ duration: t = 300, keyframes: e, times: n, ease: s = 'easeInOut' }) {
  const i = oo(s) ? s.map(Pn) : Pn(s),
    o = { done: !1, value: e[0] },
    r = So(n && n.length === e.length ? n : Co(e), t),
    a = ai(r, e, { ease: Array.isArray(i) ? i : Ao(e, i) })
  return { calculatedDuration: t, next: (c) => ((o.value = a(c)), (o.done = c >= t), o) }
}
function ci(t, e) {
  return e ? t * (1e3 / e) : 0
}
const wo = 5
function li(t, e, n) {
  const s = Math.max(e - wo, 0)
  return ci(n - t(s), e - s)
}
const ge = 0.001,
  Do = 0.01,
  Vn = 10,
  Mo = 0.05,
  Ro = 1
function Lo({ duration: t = 800, bounce: e = 0.25, velocity: n = 0, mass: s = 1 }) {
  let i, o
  Zr(t <= et(Vn))
  let r = 1 - e
  ;(r = nt(Mo, Ro, r)),
    (t = nt(Do, Vn, _(t))),
    r < 1
      ? ((i = (l) => {
          const u = l * r,
            h = u * t,
            f = u - n,
            d = Se(l, r),
            m = Math.exp(-h)
          return ge - (f / d) * m
        }),
        (o = (l) => {
          const h = l * r * t,
            f = h * n + n,
            d = Math.pow(r, 2) * Math.pow(l, 2) * t,
            m = Math.exp(-h),
            y = Se(Math.pow(l, 2), r)
          return ((-i(l) + ge > 0 ? -1 : 1) * ((f - d) * m)) / y
        }))
      : ((i = (l) => {
          const u = Math.exp(-l * t),
            h = (l - n) * t + 1
          return -ge + u * h
        }),
        (o = (l) => {
          const u = Math.exp(-l * t),
            h = (n - l) * (t * t)
          return u * h
        }))
  const a = 5 / t,
    c = Fo(i, o, a)
  if (((t = et(t)), isNaN(c))) return { stiffness: 100, damping: 10, duration: t }
  {
    const l = Math.pow(c, 2) * s
    return { stiffness: l, damping: r * 2 * Math.sqrt(s * l), duration: t }
  }
}
const Eo = 12
function Fo(t, e, n) {
  let s = n
  for (let i = 1; i < Eo; i++) s = s - t(s) / e(s)
  return s
}
function Se(t, e) {
  return t * Math.sqrt(1 - e * e)
}
const Bo = ['duration', 'bounce'],
  ko = ['stiffness', 'damping', 'mass']
function Cn(t, e) {
  return e.some((n) => t[n] !== void 0)
}
function jo(t) {
  let e = { velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1, ...t }
  if (!Cn(t, ko) && Cn(t, Bo)) {
    const n = Lo(t)
    ;(e = { ...e, ...n, velocity: 0, mass: 1 }), (e.isResolvedFromDuration = !0)
  }
  return e
}
function ui({ keyframes: t, restDelta: e, restSpeed: n, ...s }) {
  const i = t[0],
    o = t[t.length - 1],
    r = { done: !1, value: i },
    {
      stiffness: a,
      damping: c,
      mass: l,
      velocity: u,
      duration: h,
      isResolvedFromDuration: f
    } = jo(s),
    d = u ? -_(u) : 0,
    m = c / (2 * Math.sqrt(a * l)),
    y = o - i,
    x = _(Math.sqrt(a / l)),
    V = Math.abs(y) < 5
  n || (n = V ? 0.01 : 2), e || (e = V ? 0.005 : 0.5)
  let g
  if (m < 1) {
    const p = Se(x, m)
    g = (T) => {
      const b = Math.exp(-m * x * T)
      return o - b * (((d + m * x * y) / p) * Math.sin(p * T) + y * Math.cos(p * T))
    }
  } else if (m === 1) g = (p) => o - Math.exp(-x * p) * (y + (d + x * y) * p)
  else {
    const p = x * Math.sqrt(m * m - 1)
    g = (T) => {
      const b = Math.exp(-m * x * T),
        L = Math.min(p * T, 300)
      return o - (b * ((d + m * x * y) * Math.sinh(L) + p * y * Math.cosh(L))) / p
    }
  }
  return {
    calculatedDuration: (f && h) || null,
    next: (p) => {
      const T = g(p)
      if (f) r.done = p >= h
      else {
        let b = d
        p !== 0 && (m < 1 ? (b = li(g, p, T)) : (b = 0))
        const L = Math.abs(b) <= n,
          A = Math.abs(o - T) <= e
        r.done = L && A
      }
      return (r.value = r.done ? o : T), r
    }
  }
}
function Sn({
  keyframes: t,
  velocity: e = 0,
  power: n = 0.8,
  timeConstant: s = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: r,
  min: a,
  max: c,
  restDelta: l = 0.5,
  restSpeed: u
}) {
  const h = t[0],
    f = { done: !1, value: h },
    d = (C) => (a !== void 0 && C < a) || (c !== void 0 && C > c),
    m = (C) => (a === void 0 ? c : c === void 0 || Math.abs(a - C) < Math.abs(c - C) ? a : c)
  let y = n * e
  const x = h + y,
    V = r === void 0 ? x : r(x)
  V !== x && (y = V - h)
  const g = (C) => -y * Math.exp(-C / s),
    p = (C) => V + g(C),
    T = (C) => {
      const w = g(C),
        z = p(C)
      ;(f.done = Math.abs(w) <= l), (f.value = f.done ? V : z)
    }
  let b, L
  const A = (C) => {
    d(f.value) &&
      ((b = C),
      (L = ui({
        keyframes: [f.value, m(f.value)],
        velocity: li(p, C, f.value),
        damping: i,
        stiffness: o,
        restDelta: l,
        restSpeed: u
      })))
  }
  return (
    A(0),
    {
      calculatedDuration: null,
      next: (C) => {
        let w = !1
        return (
          !L && b === void 0 && ((w = !0), T(C), A(C)),
          b !== void 0 && C > b ? L.next(C - b) : (!w && T(C), f)
        )
      }
    }
  )
}
const Io = (t) => {
    const e = ({ timestamp: n }) => t(n)
    return {
      start: () => S.update(e, !0),
      stop: () => X(e),
      now: () => (j.isProcessing ? j.timestamp : performance.now())
    }
  },
  An = 2e4
function wn(t) {
  let e = 0
  const n = 50
  let s = t.next(e)
  for (; !s.done && e < An; ) (e += n), (s = t.next(e))
  return e >= An ? 1 / 0 : e
}
const Oo = { decay: Sn, inertia: Sn, tween: qt, keyframes: qt, spring: ui }
function Zt({
  autoplay: t = !0,
  delay: e = 0,
  driver: n = Io,
  keyframes: s,
  type: i = 'keyframes',
  repeat: o = 0,
  repeatDelay: r = 0,
  repeatType: a = 'loop',
  onPlay: c,
  onStop: l,
  onComplete: u,
  onUpdate: h,
  ...f
}) {
  let d = 1,
    m = !1,
    y,
    x
  const V = () => {
    x = new Promise((D) => {
      y = D
    })
  }
  V()
  let g
  const p = Oo[i] || qt
  let T
  p !== qt && typeof s[0] != 'number' && ((T = ai([0, 100], s, { clamp: !1 })), (s = [0, 100]))
  const b = p({ ...f, keyframes: s })
  let L
  a === 'mirror' && (L = p({ ...f, keyframes: [...s].reverse(), velocity: -(f.velocity || 0) }))
  let A = 'idle',
    C = null,
    w = null,
    z = null
  b.calculatedDuration === null && o && (b.calculatedDuration = wn(b))
  const { calculatedDuration: W } = b
  let Y = 1 / 0,
    q = 1 / 0
  W !== null && ((Y = W + r), (q = Y * (o + 1) - r))
  let k = 0
  const F = (D) => {
      if (w === null) return
      d > 0 && (w = Math.min(w, D)),
        d < 0 && (w = Math.min(D - q / d, w)),
        C !== null ? (k = C) : (k = Math.round(D - w) * d)
      const Pt = k - e * (d >= 0 ? 1 : -1),
        rn = d >= 0 ? Pt < 0 : Pt > q
      ;(k = Math.max(Pt, 0)), A === 'finished' && C === null && (k = q)
      let on = k,
        an = b
      if (o) {
        const ce = k / Y
        let jt = Math.floor(ce),
          rt = ce % 1
        !rt && ce >= 1 && (rt = 1), rt === 1 && jt--, (jt = Math.min(jt, o + 1))
        const ln = !!(jt % 2)
        ln && (a === 'reverse' ? ((rt = 1 - rt), r && (rt -= r / Y)) : a === 'mirror' && (an = L))
        let un = nt(0, 1, rt)
        k > q && (un = a === 'reverse' && ln ? 1 : 0), (on = un * Y)
      }
      const Tt = rn ? { done: !1, value: s[0] } : an.next(on)
      T && (Tt.value = T(Tt.value))
      let { done: cn } = Tt
      !rn && W !== null && (cn = d >= 0 ? k >= q : k <= 0)
      const Oi = C === null && (A === 'finished' || (A === 'running' && cn))
      return h && h(Tt.value), Oi && Ii(), Tt
    },
    Z = () => {
      g && g.stop(), (g = void 0)
    },
    ft = () => {
      ;(A = 'idle'), Z(), y(), V(), (w = z = null)
    },
    Ii = () => {
      ;(A = 'finished'), u && u(), Z(), y()
    },
    nn = () => {
      if (m) return
      g || (g = n(F))
      const D = g.now()
      c && c(),
        C !== null ? (w = D - C) : (!w || A === 'finished') && (w = D),
        A === 'finished' && V(),
        (z = w),
        (C = null),
        (A = 'running'),
        g.start()
    }
  t && nn()
  const sn = {
    then(D, Pt) {
      return x.then(D, Pt)
    },
    get time() {
      return _(k)
    },
    set time(D) {
      ;(D = et(D)), (k = D), C !== null || !g || d === 0 ? (C = D) : (w = g.now() - D / d)
    },
    get duration() {
      const D = b.calculatedDuration === null ? wn(b) : b.calculatedDuration
      return _(D)
    },
    get speed() {
      return d
    },
    set speed(D) {
      D === d || !g || ((d = D), (sn.time = _(k)))
    },
    get state() {
      return A
    },
    play: nn,
    pause: () => {
      ;(A = 'paused'), (C = k)
    },
    stop: () => {
      ;(m = !0), A !== 'idle' && ((A = 'idle'), l && l(), ft())
    },
    cancel: () => {
      z !== null && F(z), ft()
    },
    complete: () => {
      A = 'finished'
    },
    sample: (D) => ((w = 0), F(D))
  }
  return sn
}
function Uo(t) {
  let e
  return () => (e === void 0 && (e = t()), e)
}
const No = Uo(() => Object.hasOwnProperty.call(Element.prototype, 'animate')),
  Go = new Set(['opacity', 'clipPath', 'filter', 'transform', 'backgroundColor']),
  Gt = 10,
  $o = 2e4,
  zo = (t, e) => e.type === 'spring' || t === 'backgroundColor' || !Gs(e.ease)
function Wo(t, e, { onUpdate: n, onComplete: s, ...i }) {
  if (
    !(
      No() &&
      Go.has(e) &&
      !i.repeatDelay &&
      i.repeatType !== 'mirror' &&
      i.damping !== 0 &&
      i.type !== 'inertia'
    )
  )
    return !1
  let r = !1,
    a,
    c
  const l = () => {
    c = new Promise((g) => {
      a = g
    })
  }
  l()
  let { keyframes: u, duration: h = 300, ease: f, times: d } = i
  if (zo(e, i)) {
    const g = Zt({ ...i, repeat: 0, delay: 0 })
    let p = { done: !1, value: u[0] }
    const T = []
    let b = 0
    for (; !p.done && b < $o; ) (p = g.sample(b)), T.push(p.value), (b += Gt)
    ;(d = void 0), (u = T), (h = b - Gt), (f = 'linear')
  }
  const m = Jr(t.owner.current, e, u, { ...i, duration: h, ease: f, times: d })
  i.syncStart &&
    (m.startTime = j.isProcessing
      ? j.timestamp
      : document.timeline
      ? document.timeline.currentTime
      : performance.now())
  const y = () => m.cancel(),
    x = () => {
      S.update(y), a(), l()
    }
  return (
    (m.onfinish = () => {
      t.set(to(u, i)), s && s(), x()
    }),
    {
      then(g, p) {
        return c.then(g, p)
      },
      attachTimeline(g) {
        return (m.timeline = g), (m.onfinish = null), R
      },
      get time() {
        return _(m.currentTime || 0)
      },
      set time(g) {
        m.currentTime = et(g)
      },
      get speed() {
        return m.playbackRate
      },
      set speed(g) {
        m.playbackRate = g
      },
      get duration() {
        return _(h)
      },
      play: () => {
        r || (m.play(), X(y))
      },
      pause: () => m.pause(),
      stop: () => {
        if (((r = !0), m.playState === 'idle')) return
        const { currentTime: g } = m
        if (g) {
          const p = Zt({ ...i, autoplay: !1 })
          t.setWithVelocity(p.sample(g - Gt).value, p.sample(g).value, Gt)
        }
        x()
      },
      complete: () => m.finish(),
      cancel: x
    }
  )
}
function Ho({ keyframes: t, delay: e, onUpdate: n, onComplete: s }) {
  const i = () => (
    n && n(t[t.length - 1]),
    s && s(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: R,
      pause: R,
      stop: R,
      then: (o) => (o(), Promise.resolve()),
      cancel: R,
      complete: R
    }
  )
  return e ? Zt({ keyframes: [0, 1], duration: 0, delay: e, onComplete: i }) : i()
}
const Ko = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
  _o = (t) => ({
    type: 'spring',
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
  }),
  Xo = { type: 'keyframes', duration: 0.8 },
  Yo = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  qo = (t, { keyframes: e }) =>
    e.length > 2 ? Xo : ut.has(t) ? (t.startsWith('scale') ? _o(e[1]) : Ko) : Yo,
  Ae = (t, e) =>
    t === 'zIndex'
      ? !1
      : !!(
          typeof e == 'number' ||
          Array.isArray(e) ||
          (typeof e == 'string' && (st.test(e) || e === '0') && !e.startsWith('url('))
        ),
  Zo = new Set(['brightness', 'contrast', 'saturate', 'opacity'])
function Qo(t) {
  const [e, n] = t.slice(0, -1).split('(')
  if (e === 'drop-shadow') return t
  const [s] = n.match(re) || []
  if (!s) return t
  const i = n.replace(s, '')
  let o = Zo.has(e) ? 1 : 0
  return s !== n && (o *= 100), e + '(' + o + i + ')'
}
const Jo = /([a-z-]*)\(.*?\)/g,
  we = {
    ...st,
    getAnimatableNone: (t) => {
      const e = t.match(Jo)
      return e ? e.map(Qo).join(' ') : t
    }
  },
  ta = {
    ...Cs,
    color: I,
    backgroundColor: I,
    outlineColor: I,
    fill: I,
    stroke: I,
    borderColor: I,
    borderTopColor: I,
    borderRightColor: I,
    borderBottomColor: I,
    borderLeftColor: I,
    filter: we,
    WebkitFilter: we
  },
  Ze = (t) => ta[t]
function hi(t, e) {
  let n = Ze(t)
  return n !== we && (n = st), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
}
const fi = (t) => /^0[^.\s]+$/.test(t)
function ea(t) {
  if (typeof t == 'number') return t === 0
  if (t !== null) return t === 'none' || t === '0' || fi(t)
}
function na(t, e, n, s) {
  const i = Ae(e, n)
  let o
  Array.isArray(n) ? (o = [...n]) : (o = [null, n])
  const r = s.from !== void 0 ? s.from : t.get()
  let a
  const c = []
  for (let l = 0; l < o.length; l++)
    o[l] === null && (o[l] = l === 0 ? r : o[l - 1]),
      ea(o[l]) && c.push(l),
      typeof o[l] == 'string' && o[l] !== 'none' && o[l] !== '0' && (a = o[l])
  if (i && c.length && a)
    for (let l = 0; l < c.length; l++) {
      const u = c[l]
      o[u] = hi(e, a)
    }
  return o
}
function sa({
  when: t,
  delay: e,
  delayChildren: n,
  staggerChildren: s,
  staggerDirection: i,
  repeat: o,
  repeatType: r,
  repeatDelay: a,
  from: c,
  elapsed: l,
  ...u
}) {
  return !!Object.keys(u).length
}
function di(t, e) {
  return t[e] || t.default || t
}
const Qe =
  (t, e, n, s = {}) =>
  (i) => {
    const o = di(s, t) || {},
      r = o.delay || s.delay || 0
    let { elapsed: a = 0 } = s
    a = a - et(r)
    const c = na(e, t, n, o),
      l = c[0],
      u = c[c.length - 1],
      h = Ae(t, l),
      f = Ae(t, u)
    let d = {
      keyframes: c,
      velocity: e.getVelocity(),
      ease: 'easeOut',
      ...o,
      delay: -a,
      onUpdate: (m) => {
        e.set(m), o.onUpdate && o.onUpdate(m)
      },
      onComplete: () => {
        i(), o.onComplete && o.onComplete()
      }
    }
    if (
      (sa(o) || (d = { ...d, ...qo(t, d) }),
      d.duration && (d.duration = et(d.duration)),
      d.repeatDelay && (d.repeatDelay = et(d.repeatDelay)),
      !h || !f || Qr.current || o.type === !1)
    )
      return Ho(d)
    if (e.owner && e.owner.current instanceof HTMLElement && !e.owner.getProps().onUpdate) {
      const m = Wo(e, t, d)
      if (m) return m
    }
    return Zt(d)
  }
function Qt(t) {
  return !!(O(t) && t.add)
}
const mi = (t) => /^\-?\d*\.?\d+$/.test(t)
function Je(t, e) {
  t.indexOf(e) === -1 && t.push(e)
}
function tn(t, e) {
  const n = t.indexOf(e)
  n > -1 && t.splice(n, 1)
}
class en {
  constructor() {
    this.subscriptions = []
  }
  add(e) {
    return Je(this.subscriptions, e), () => tn(this.subscriptions, e)
  }
  notify(e, n, s) {
    const i = this.subscriptions.length
    if (i)
      if (i === 1) this.subscriptions[0](e, n, s)
      else
        for (let o = 0; o < i; o++) {
          const r = this.subscriptions[o]
          r && r(e, n, s)
        }
  }
  getSize() {
    return this.subscriptions.length
  }
  clear() {
    this.subscriptions.length = 0
  }
}
const ia = (t) => !isNaN(parseFloat(t))
class ra {
  constructor(e, n = {}) {
    ;(this.version = '10.16.4'),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (s, i = !0) => {
        ;(this.prev = this.current), (this.current = s)
        const { delta: o, timestamp: r } = j
        this.lastUpdated !== r &&
          ((this.timeDelta = o), (this.lastUpdated = r), S.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current &&
            this.events.change &&
            this.events.change.notify(this.current),
          this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()),
          i && this.events.renderRequest && this.events.renderRequest.notify(this.current)
      }),
      (this.scheduleVelocityCheck = () => S.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: s }) => {
        s !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = e),
      (this.canTrackVelocity = ia(this.current)),
      (this.owner = n.owner)
  }
  onChange(e) {
    return this.on('change', e)
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new en())
    const s = this.events[e].add(n)
    return e === 'change'
      ? () => {
          s(),
            S.read(() => {
              this.events.change.getSize() || this.stop()
            })
        }
      : s
  }
  clearListeners() {
    for (const e in this.events) this.events[e].clear()
  }
  attach(e, n) {
    ;(this.passiveEffect = e), (this.stopPassiveEffect = n)
  }
  set(e, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(e, n)
      : this.passiveEffect(e, this.updateAndNotify)
  }
  setWithVelocity(e, n, s) {
    this.set(n), (this.prev = e), (this.timeDelta = s)
  }
  jump(e) {
    this.updateAndNotify(e),
      (this.prev = e),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect()
  }
  get() {
    return this.current
  }
  getPrevious() {
    return this.prev
  }
  getVelocity() {
    return this.canTrackVelocity
      ? ci(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      : 0
  }
  start(e) {
    return (
      this.stop(),
      new Promise((n) => {
        ;(this.hasAnimated = !0),
          (this.animation = e(n)),
          this.events.animationStart && this.events.animationStart.notify()
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation()
      })
    )
  }
  stop() {
    this.animation &&
      (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation()
  }
  isAnimating() {
    return !!this.animation
  }
  clearAnimation() {
    delete this.animation
  }
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
  }
}
function vt(t, e) {
  return new ra(t, e)
}
const pi = (t) => (e) => e.test(t),
  oa = { test: (t) => t === 'auto', parse: (t) => t },
  gi = [ht, P, $, Q, hr, ur, oa],
  bt = (t) => gi.find(pi(t)),
  aa = [...gi, I, st],
  ca = (t) => aa.find(pi(t))
function la(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, vt(n))
}
function ua(t, e) {
  const n = ae(t, e)
  let { transitionEnd: s = {}, transition: i = {}, ...o } = n ? t.makeTargetAnimatable(n, !1) : {}
  o = { ...o, ...s }
  for (const r in o) {
    const a = Sr(o[r])
    la(t, r, a)
  }
}
function ha(t, e, n) {
  var s, i
  const o = Object.keys(e).filter((a) => !t.hasValue(a)),
    r = o.length
  if (r)
    for (let a = 0; a < r; a++) {
      const c = o[a],
        l = e[c]
      let u = null
      Array.isArray(l) && (u = l[0]),
        u === null &&
          (u =
            (i = (s = n[c]) !== null && s !== void 0 ? s : t.readValue(c)) !== null && i !== void 0
              ? i
              : e[c]),
        u != null &&
          (typeof u == 'string' && (mi(u) || fi(u))
            ? (u = parseFloat(u))
            : !ca(u) && st.test(l) && (u = hi(c, l)),
          t.addValue(c, vt(u, { owner: t })),
          n[c] === void 0 && (n[c] = u),
          u !== null && t.setBaseTarget(c, u))
    }
}
function fa(t, e) {
  return e ? (e[t] || e.default || e).from : void 0
}
function da(t, e, n) {
  const s = {}
  for (const i in t) {
    const o = fa(i, e)
    if (o !== void 0) s[i] = o
    else {
      const r = n.getValue(i)
      r && (s[i] = r.get())
    }
  }
  return s
}
function ma({ protectedKeys: t, needsAnimating: e }, n) {
  const s = t.hasOwnProperty(n) && e[n] !== !0
  return (e[n] = !1), s
}
function yi(t, e, { delay: n = 0, transitionOverride: s, type: i } = {}) {
  let {
    transition: o = t.getDefaultTransition(),
    transitionEnd: r,
    ...a
  } = t.makeTargetAnimatable(e)
  const c = t.getValue('willChange')
  s && (o = s)
  const l = [],
    u = i && t.animationState && t.animationState.getState()[i]
  for (const h in a) {
    const f = t.getValue(h),
      d = a[h]
    if (!f || d === void 0 || (u && ma(u, h))) continue
    const m = { delay: n, elapsed: 0, ...o }
    if (window.HandoffAppearAnimations && !f.hasAnimated) {
      const x = t.getProps()[qr]
      x && ((m.elapsed = window.HandoffAppearAnimations(x, h, f, S)), (m.syncStart = !0))
    }
    f.start(Qe(h, f, d, t.shouldReduceMotion && ut.has(h) ? { type: !1 } : m))
    const y = f.animation
    Qt(c) && (c.add(h), y.then(() => c.remove(h))), l.push(y)
  }
  return (
    r &&
      Promise.all(l).then(() => {
        r && ua(t, r)
      }),
    l
  )
}
function De(t, e, n = {}) {
  const s = ae(t, e, n.custom)
  let { transition: i = t.getDefaultTransition() || {} } = s || {}
  n.transitionOverride && (i = n.transitionOverride)
  const o = s ? () => Promise.all(yi(t, s, n)) : () => Promise.resolve(),
    r =
      t.variantChildren && t.variantChildren.size
        ? (c = 0) => {
            const { delayChildren: l = 0, staggerChildren: u, staggerDirection: h } = i
            return pa(t, e, l + c, u, h, n)
          }
        : () => Promise.resolve(),
    { when: a } = i
  if (a) {
    const [c, l] = a === 'beforeChildren' ? [o, r] : [r, o]
    return c().then(() => l())
  } else return Promise.all([o(), r(n.delay)])
}
function pa(t, e, n = 0, s = 0, i = 1, o) {
  const r = [],
    a = (t.variantChildren.size - 1) * s,
    c = i === 1 ? (l = 0) => l * s : (l = 0) => a - l * s
  return (
    Array.from(t.variantChildren)
      .sort(ga)
      .forEach((l, u) => {
        l.notify('AnimationStart', e),
          r.push(De(l, e, { ...o, delay: n + c(u) }).then(() => l.notify('AnimationComplete', e)))
      }),
    Promise.all(r)
  )
}
function ga(t, e) {
  return t.sortNodePosition(e)
}
function ya(t, e, n = {}) {
  t.notify('AnimationStart', e)
  let s
  if (Array.isArray(e)) {
    const i = e.map((o) => De(t, o, n))
    s = Promise.all(i)
  } else if (typeof e == 'string') s = De(t, e, n)
  else {
    const i = typeof e == 'function' ? ae(t, e, n.custom) : e
    s = Promise.all(yi(t, i, n))
  }
  return s.then(() => t.notify('AnimationComplete', e))
}
const va = [...je].reverse(),
  xa = je.length
function Pa(t) {
  return (e) => Promise.all(e.map(({ animation: n, options: s }) => ya(t, n, s)))
}
function Ta(t) {
  let e = Pa(t)
  const n = Va()
  let s = !0
  const i = (c, l) => {
    const u = ae(t, l)
    if (u) {
      const { transition: h, transitionEnd: f, ...d } = u
      c = { ...c, ...d, ...f }
    }
    return c
  }
  function o(c) {
    e = c(t)
  }
  function r(c, l) {
    const u = t.getProps(),
      h = t.getVariantContext(!0) || {},
      f = [],
      d = new Set()
    let m = {},
      y = 1 / 0
    for (let V = 0; V < xa; V++) {
      const g = va[V],
        p = n[g],
        T = u[g] !== void 0 ? u[g] : h[g],
        b = Mt(T),
        L = g === l ? p.isActive : null
      L === !1 && (y = V)
      let A = T === h[g] && T !== u[g] && b
      if (
        (A && s && t.manuallyAnimateOnMount && (A = !1),
        (p.protectedKeys = { ...m }),
        (!p.isActive && L === null) || (!T && !p.prevProp) || se(T) || typeof T == 'boolean')
      )
        continue
      const C = ba(p.prevProp, T)
      let w = C || (g === l && p.isActive && !A && b) || (V > y && b)
      const z = Array.isArray(T) ? T : [T]
      let W = z.reduce(i, {})
      L === !1 && (W = {})
      const { prevResolvedValues: Y = {} } = p,
        q = { ...Y, ...W },
        k = (F) => {
          ;(w = !0), d.delete(F), (p.needsAnimating[F] = !0)
        }
      for (const F in q) {
        const Z = W[F],
          ft = Y[F]
        m.hasOwnProperty(F) ||
          (Z !== ft
            ? Xt(Z) && Xt(ft)
              ? !Us(Z, ft) || C
                ? k(F)
                : (p.protectedKeys[F] = !0)
              : Z !== void 0
              ? k(F)
              : d.add(F)
            : Z !== void 0 && d.has(F)
            ? k(F)
            : (p.protectedKeys[F] = !0))
      }
      ;(p.prevProp = T),
        (p.prevResolvedValues = W),
        p.isActive && (m = { ...m, ...W }),
        s && t.blockInitialAnimation && (w = !1),
        w && !A && f.push(...z.map((F) => ({ animation: F, options: { type: g, ...c } })))
    }
    if (d.size) {
      const V = {}
      d.forEach((g) => {
        const p = t.getBaseTarget(g)
        p !== void 0 && (V[g] = p)
      }),
        f.push({ animation: V })
    }
    let x = !!f.length
    return (
      s && u.initial === !1 && !t.manuallyAnimateOnMount && (x = !1),
      (s = !1),
      x ? e(f) : Promise.resolve()
    )
  }
  function a(c, l, u) {
    var h
    if (n[c].isActive === l) return Promise.resolve()
    ;(h = t.variantChildren) === null ||
      h === void 0 ||
      h.forEach((d) => {
        var m
        return (m = d.animationState) === null || m === void 0 ? void 0 : m.setActive(c, l)
      }),
      (n[c].isActive = l)
    const f = r(u, c)
    for (const d in n) n[d].protectedKeys = {}
    return f
  }
  return { animateChanges: r, setActive: a, setAnimateFunction: o, getState: () => n }
}
function ba(t, e) {
  return typeof e == 'string' ? e !== t : Array.isArray(e) ? !Us(e, t) : !1
}
function ot(t = !1) {
  return { isActive: t, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} }
}
function Va() {
  return {
    animate: ot(!0),
    whileInView: ot(),
    whileHover: ot(),
    whileTap: ot(),
    whileDrag: ot(),
    whileFocus: ot(),
    exit: ot()
  }
}
class Ca extends it {
  constructor(e) {
    super(e), e.animationState || (e.animationState = Ta(e))
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps()
    this.unmount(), se(e) && (this.unmount = e.subscribe(this.node))
  }
  mount() {
    this.updateAnimationControlsSubscription()
  }
  update() {
    const { animate: e } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {}
    e !== n && this.updateAnimationControlsSubscription()
  }
  unmount() {}
}
let Sa = 0
class Aa extends it {
  constructor() {
    super(...arguments), (this.id = Sa++)
  }
  update() {
    if (!this.node.presenceContext) return
    const { isPresent: e, onExitComplete: n, custom: s } = this.node.presenceContext,
      { isPresent: i } = this.node.prevPresenceContext || {}
    if (!this.node.animationState || e === i) return
    const o = this.node.animationState.setActive('exit', !e, {
      custom: s ?? this.node.getProps().custom
    })
    n && !e && o.then(() => n(this.id))
  }
  mount() {
    const { register: e } = this.node.presenceContext || {}
    e && (this.unmount = e(this.id))
  }
  unmount() {}
}
const wa = { animation: { Feature: Ca }, exit: { Feature: Aa } },
  Dn = (t, e) => Math.abs(t - e)
function Da(t, e) {
  const n = Dn(t.x, e.x),
    s = Dn(t.y, e.y)
  return Math.sqrt(n ** 2 + s ** 2)
}
class vi {
  constructor(e, n, { transformPagePoint: s } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return
        const l = ve(this.lastMoveEventInfo, this.history),
          u = this.startEvent !== null,
          h = Da(l.offset, { x: 0, y: 0 }) >= 3
        if (!u && !h) return
        const { point: f } = l,
          { timestamp: d } = j
        this.history.push({ ...f, timestamp: d })
        const { onStart: m, onMove: y } = this.handlers
        u || (m && m(this.lastMoveEvent, l), (this.startEvent = this.lastMoveEvent)),
          y && y(this.lastMoveEvent, l)
      }),
      (this.handlePointerMove = (l, u) => {
        ;(this.lastMoveEvent = l),
          (this.lastMoveEventInfo = ye(u, this.transformPagePoint)),
          S.update(this.updatePoint, !0)
      }),
      (this.handlePointerUp = (l, u) => {
        if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))) return
        const { onEnd: h, onSessionEnd: f } = this.handlers,
          d = ve(
            l.type === 'pointercancel' ? this.lastMoveEventInfo : ye(u, this.transformPagePoint),
            this.history
          )
        this.startEvent && h && h(l, d), f && f(l, d)
      }),
      !Bs(e))
    )
      return
    ;(this.handlers = n), (this.transformPagePoint = s)
    const i = oe(e),
      o = ye(i, this.transformPagePoint),
      { point: r } = o,
      { timestamp: a } = j
    this.history = [{ ...r, timestamp: a }]
    const { onSessionStart: c } = n
    c && c(e, ve(o, this.history)),
      (this.removeListeners = tt(
        K(window, 'pointermove', this.handlePointerMove),
        K(window, 'pointerup', this.handlePointerUp),
        K(window, 'pointercancel', this.handlePointerUp)
      ))
  }
  updateHandlers(e) {
    this.handlers = e
  }
  end() {
    this.removeListeners && this.removeListeners(), X(this.updatePoint)
  }
}
function ye(t, e) {
  return e ? { point: e(t.point) } : t
}
function Mn(t, e) {
  return { x: t.x - e.x, y: t.y - e.y }
}
function ve({ point: t }, e) {
  return { point: t, delta: Mn(t, xi(e)), offset: Mn(t, Ma(e)), velocity: Ra(e, 0.1) }
}
function Ma(t) {
  return t[0]
}
function xi(t) {
  return t[t.length - 1]
}
function Ra(t, e) {
  if (t.length < 2) return { x: 0, y: 0 }
  let n = t.length - 1,
    s = null
  const i = xi(t)
  for (; n >= 0 && ((s = t[n]), !(i.timestamp - s.timestamp > et(e))); ) n--
  if (!s) return { x: 0, y: 0 }
  const o = _(i.timestamp - s.timestamp)
  if (o === 0) return { x: 0, y: 0 }
  const r = { x: (i.x - s.x) / o, y: (i.y - s.y) / o }
  return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r
}
function U(t) {
  return t.max - t.min
}
function Me(t, e = 0, n = 0.01) {
  return Math.abs(t - e) <= n
}
function Rn(t, e, n, s = 0.5) {
  ;(t.origin = s),
    (t.originPoint = M(e.min, e.max, t.origin)),
    (t.scale = U(n) / U(e)),
    (Me(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
    (t.translate = M(n.min, n.max, t.origin) - t.originPoint),
    (Me(t.translate) || isNaN(t.translate)) && (t.translate = 0)
}
function wt(t, e, n, s) {
  Rn(t.x, e.x, n.x, s ? s.originX : void 0), Rn(t.y, e.y, n.y, s ? s.originY : void 0)
}
function Ln(t, e, n) {
  ;(t.min = n.min + e.min), (t.max = t.min + U(e))
}
function La(t, e, n) {
  Ln(t.x, e.x, n.x), Ln(t.y, e.y, n.y)
}
function En(t, e, n) {
  ;(t.min = e.min - n.min), (t.max = t.min + U(e))
}
function Dt(t, e, n) {
  En(t.x, e.x, n.x), En(t.y, e.y, n.y)
}
function Ea(t, { min: e, max: n }, s) {
  return (
    e !== void 0 && t < e
      ? (t = s ? M(e, t, s.min) : Math.max(t, e))
      : n !== void 0 && t > n && (t = s ? M(n, t, s.max) : Math.min(t, n)),
    t
  )
}
function Fn(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
  }
}
function Fa(t, { top: e, left: n, bottom: s, right: i }) {
  return { x: Fn(t.x, n, i), y: Fn(t.y, e, s) }
}
function Bn(t, e) {
  let n = e.min - t.min,
    s = e.max - t.max
  return e.max - e.min < t.max - t.min && ([n, s] = [s, n]), { min: n, max: s }
}
function Ba(t, e) {
  return { x: Bn(t.x, e.x), y: Bn(t.y, e.y) }
}
function ka(t, e) {
  let n = 0.5
  const s = U(t),
    i = U(e)
  return (
    i > s ? (n = Lt(e.min, e.max - s, t.min)) : s > i && (n = Lt(t.min, t.max - i, e.min)),
    nt(0, 1, n)
  )
}
function ja(t, e) {
  const n = {}
  return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n
}
const Re = 0.35
function Ia(t = Re) {
  return (
    t === !1 ? (t = 0) : t === !0 && (t = Re),
    { x: kn(t, 'left', 'right'), y: kn(t, 'top', 'bottom') }
  )
}
function kn(t, e, n) {
  return { min: jn(t, e), max: jn(t, n) }
}
function jn(t, e) {
  return typeof t == 'number' ? t : t[e] || 0
}
const In = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  gt = () => ({ x: In(), y: In() }),
  On = () => ({ min: 0, max: 0 }),
  E = () => ({ x: On(), y: On() })
function G(t) {
  return [t('x'), t('y')]
}
function Pi({ top: t, left: e, right: n, bottom: s }) {
  return { x: { min: e, max: n }, y: { min: t, max: s } }
}
function Oa({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min }
}
function Ua(t, e) {
  if (!e) return t
  const n = e({ x: t.left, y: t.top }),
    s = e({ x: t.right, y: t.bottom })
  return { top: n.y, left: n.x, bottom: s.y, right: s.x }
}
function xe(t) {
  return t === void 0 || t === 1
}
function Le({ scale: t, scaleX: e, scaleY: n }) {
  return !xe(t) || !xe(e) || !xe(n)
}
function at(t) {
  return Le(t) || Ti(t) || t.z || t.rotate || t.rotateX || t.rotateY
}
function Ti(t) {
  return Un(t.x) || Un(t.y)
}
function Un(t) {
  return t && t !== '0%'
}
function Jt(t, e, n) {
  const s = t - n,
    i = e * s
  return n + i
}
function Nn(t, e, n, s, i) {
  return i !== void 0 && (t = Jt(t, i, s)), Jt(t, n, s) + e
}
function Ee(t, e = 0, n = 1, s, i) {
  ;(t.min = Nn(t.min, e, n, s, i)), (t.max = Nn(t.max, e, n, s, i))
}
function bi(t, { x: e, y: n }) {
  Ee(t.x, e.translate, e.scale, e.originPoint), Ee(t.y, n.translate, n.scale, n.originPoint)
}
function Na(t, e, n, s = !1) {
  const i = n.length
  if (!i) return
  e.x = e.y = 1
  let o, r
  for (let a = 0; a < i; a++) {
    ;(o = n[a]), (r = o.projectionDelta)
    const c = o.instance
    ;(c && c.style && c.style.display === 'contents') ||
      (s &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        yt(t, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      r && ((e.x *= r.x.scale), (e.y *= r.y.scale), bi(t, r)),
      s && at(o.latestValues) && yt(t, o.latestValues))
  }
  ;(e.x = Gn(e.x)), (e.y = Gn(e.y))
}
function Gn(t) {
  return Number.isInteger(t) || t > 1.0000000000001 || t < 0.999999999999 ? t : 1
}
function J(t, e) {
  ;(t.min = t.min + e), (t.max = t.max + e)
}
function $n(t, e, [n, s, i]) {
  const o = e[i] !== void 0 ? e[i] : 0.5,
    r = M(t.min, t.max, o)
  Ee(t, e[n], e[s], r, e.scale)
}
const Ga = ['x', 'scaleX', 'originX'],
  $a = ['y', 'scaleY', 'originY']
function yt(t, e) {
  $n(t.x, e, Ga), $n(t.y, e, $a)
}
function Vi(t, e) {
  return Pi(Ua(t.getBoundingClientRect(), e))
}
function za(t, e, n) {
  const s = Vi(t, n),
    { scroll: i } = e
  return i && (J(s.x, i.offset.x), J(s.y, i.offset.y)), s
}
const Wa = new WeakMap()
class Ha {
  constructor(e) {
    ;(this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = E()),
      (this.visualElement = e)
  }
  start(e, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: s } = this.visualElement
    if (s && s.isPresent === !1) return
    const i = (c) => {
        this.stopAnimation(), n && this.snapToCursor(oe(c, 'page').point)
      },
      o = (c, l) => {
        const { drag: u, dragPropagation: h, onDragStart: f } = this.getProps()
        if (
          u &&
          !h &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = js(u)),
          !this.openGlobalLock)
        )
          return
        ;(this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          G((m) => {
            let y = this.getAxisMotionValue(m).get() || 0
            if ($.test(y)) {
              const { projection: x } = this.visualElement
              if (x && x.layout) {
                const V = x.layout.layoutBox[m]
                V && (y = U(V) * (parseFloat(y) / 100))
              }
            }
            this.originPoint[m] = y
          }),
          f && S.update(() => f(c, l), !1, !0)
        const { animationState: d } = this.visualElement
        d && d.setActive('whileDrag', !0)
      },
      r = (c, l) => {
        const {
          dragPropagation: u,
          dragDirectionLock: h,
          onDirectionLock: f,
          onDrag: d
        } = this.getProps()
        if (!u && !this.openGlobalLock) return
        const { offset: m } = l
        if (h && this.currentDirection === null) {
          ;(this.currentDirection = Ka(m)),
            this.currentDirection !== null && f && f(this.currentDirection)
          return
        }
        this.updateAxis('x', l.point, m),
          this.updateAxis('y', l.point, m),
          this.visualElement.render(),
          d && d(c, l)
      },
      a = (c, l) => this.stop(c, l)
    this.panSession = new vi(
      e,
      { onSessionStart: i, onStart: o, onMove: r, onSessionEnd: a },
      { transformPagePoint: this.visualElement.getTransformPagePoint() }
    )
  }
  stop(e, n) {
    const s = this.isDragging
    if ((this.cancel(), !s)) return
    const { velocity: i } = n
    this.startAnimation(i)
    const { onDragEnd: o } = this.getProps()
    o && S.update(() => o(e, n))
  }
  cancel() {
    this.isDragging = !1
    const { projection: e, animationState: n } = this.visualElement
    e && (e.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0)
    const { dragPropagation: s } = this.getProps()
    !s && this.openGlobalLock && (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive('whileDrag', !1)
  }
  updateAxis(e, n, s) {
    const { drag: i } = this.getProps()
    if (!s || !$t(e, i, this.currentDirection)) return
    const o = this.getAxisMotionValue(e)
    let r = this.originPoint[e] + s[e]
    this.constraints && this.constraints[e] && (r = Ea(r, this.constraints[e], this.elastic[e])),
      o.set(r)
  }
  resolveConstraints() {
    const { dragConstraints: e, dragElastic: n } = this.getProps(),
      { layout: s } = this.visualElement.projection || {},
      i = this.constraints
    e && mt(e)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : e && s
      ? (this.constraints = Fa(s.layoutBox, e))
      : (this.constraints = !1),
      (this.elastic = Ia(n)),
      i !== this.constraints &&
        s &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        G((o) => {
          this.getAxisMotionValue(o) &&
            (this.constraints[o] = ja(s.layoutBox[o], this.constraints[o]))
        })
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps()
    if (!e || !mt(e)) return !1
    const s = e.current,
      { projection: i } = this.visualElement
    if (!i || !i.layout) return !1
    const o = za(s, i.root, this.visualElement.getTransformPagePoint())
    let r = Ba(i.layout.layoutBox, o)
    if (n) {
      const a = n(Oa(r))
      ;(this.hasMutatedConstraints = !!a), a && (r = Pi(a))
    }
    return r
  }
  startAnimation(e) {
    const {
        drag: n,
        dragMomentum: s,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: r,
        onDragTransitionEnd: a
      } = this.getProps(),
      c = this.constraints || {},
      l = G((u) => {
        if (!$t(u, n, this.currentDirection)) return
        let h = (c && c[u]) || {}
        r && (h = { min: 0, max: 0 })
        const f = i ? 200 : 1e6,
          d = i ? 40 : 1e7,
          m = {
            type: 'inertia',
            velocity: s ? e[u] : 0,
            bounceStiffness: f,
            bounceDamping: d,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...h
          }
        return this.startAxisValueAnimation(u, m)
      })
    return Promise.all(l).then(a)
  }
  startAxisValueAnimation(e, n) {
    const s = this.getAxisMotionValue(e)
    return s.start(Qe(e, s, 0, n))
  }
  stopAnimation() {
    G((e) => this.getAxisMotionValue(e).stop())
  }
  getAxisMotionValue(e) {
    const n = '_drag' + e.toUpperCase(),
      s = this.visualElement.getProps(),
      i = s[n]
    return i || this.visualElement.getValue(e, (s.initial ? s.initial[e] : void 0) || 0)
  }
  snapToCursor(e) {
    G((n) => {
      const { drag: s } = this.getProps()
      if (!$t(n, s, this.currentDirection)) return
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n)
      if (i && i.layout) {
        const { min: r, max: a } = i.layout.layoutBox[n]
        o.set(e[n] - M(r, a, 0.5))
      }
    })
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return
    const { drag: e, dragConstraints: n } = this.getProps(),
      { projection: s } = this.visualElement
    if (!mt(n) || !s || !this.constraints) return
    this.stopAnimation()
    const i = { x: 0, y: 0 }
    G((r) => {
      const a = this.getAxisMotionValue(r)
      if (a) {
        const c = a.get()
        i[r] = ka({ min: c, max: c }, this.constraints[r])
      }
    })
    const { transformTemplate: o } = this.visualElement.getProps()
    ;(this.visualElement.current.style.transform = o ? o({}, '') : 'none'),
      s.root && s.root.updateScroll(),
      s.updateLayout(),
      this.resolveConstraints(),
      G((r) => {
        if (!$t(r, e, null)) return
        const a = this.getAxisMotionValue(r),
          { min: c, max: l } = this.constraints[r]
        a.set(M(c, l, i[r]))
      })
  }
  addListeners() {
    if (!this.visualElement.current) return
    Wa.set(this.visualElement, this)
    const e = this.visualElement.current,
      n = K(e, 'pointerdown', (c) => {
        const { drag: l, dragListener: u = !0 } = this.getProps()
        l && u && this.start(c)
      }),
      s = () => {
        const { dragConstraints: c } = this.getProps()
        mt(c) && (this.constraints = this.resolveRefConstraints())
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener('measure', s)
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), s()
    const r = H(window, 'resize', () => this.scalePositionWithinConstraints()),
      a = i.addEventListener('didUpdate', ({ delta: c, hasLayoutChanged: l }) => {
        this.isDragging &&
          l &&
          (G((u) => {
            const h = this.getAxisMotionValue(u)
            h && ((this.originPoint[u] += c[u].translate), h.set(h.get() + c[u].translate))
          }),
          this.visualElement.render())
      })
    return () => {
      r(), n(), o(), a && a()
    }
  }
  getProps() {
    const e = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: s = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: r = Re,
        dragMomentum: a = !0
      } = e
    return {
      ...e,
      drag: n,
      dragDirectionLock: s,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: r,
      dragMomentum: a
    }
  }
}
function $t(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t)
}
function Ka(t, e = 10) {
  let n = null
  return Math.abs(t.y) > e ? (n = 'y') : Math.abs(t.x) > e && (n = 'x'), n
}
class _a extends it {
  constructor(e) {
    super(e),
      (this.removeGroupControls = R),
      (this.removeListeners = R),
      (this.controls = new Ha(e))
  }
  mount() {
    const { dragControls: e } = this.node.getProps()
    e && (this.removeGroupControls = e.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || R)
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners()
  }
}
const zn = (t) => (e, n) => {
  t && S.update(() => t(e, n))
}
class Xa extends it {
  constructor() {
    super(...arguments), (this.removePointerDownListener = R)
  }
  onPointerDown(e) {
    this.session = new vi(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint()
    })
  }
  createPanHandlers() {
    const { onPanSessionStart: e, onPanStart: n, onPan: s, onPanEnd: i } = this.node.getProps()
    return {
      onSessionStart: zn(e),
      onStart: zn(n),
      onMove: s,
      onEnd: (o, r) => {
        delete this.session, i && S.update(() => i(o, r))
      }
    }
  }
  mount() {
    this.removePointerDownListener = K(this.node.current, 'pointerdown', (e) =>
      this.onPointerDown(e)
    )
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers())
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end()
  }
}
function Ya() {
  const t = v.useContext(ee)
  if (t === null) return [!0, null]
  const { isPresent: e, onExitComplete: n, register: s } = t,
    i = v.useId()
  return v.useEffect(() => s(i), []), !e && n ? [!1, () => n && n(i)] : [!0]
}
const Ht = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 }
function Wn(t, e) {
  return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100
}
const Vt = {
    correct: (t, e) => {
      if (!e.target) return t
      if (typeof t == 'string')
        if (P.test(t)) t = parseFloat(t)
        else return t
      const n = Wn(t, e.target.x),
        s = Wn(t, e.target.y)
      return `${n}% ${s}%`
    }
  },
  qa = {
    correct: (t, { treeScale: e, projectionDelta: n }) => {
      const s = t,
        i = st.parse(t)
      if (i.length > 5) return s
      const o = st.createTransformer(t),
        r = typeof i[0] != 'number' ? 1 : 0,
        a = n.x.scale * e.x,
        c = n.y.scale * e.y
      ;(i[0 + r] /= a), (i[1 + r] /= c)
      const l = M(a, c, 0.5)
      return (
        typeof i[2 + r] == 'number' && (i[2 + r] /= l),
        typeof i[3 + r] == 'number' && (i[3 + r] /= l),
        o(i)
      )
    }
  }
class Za extends ps.Component {
  componentDidMount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: s, layoutId: i } = this.props,
      { projection: o } = e
    sr(Qa),
      o &&
        (n.group && n.group.add(o),
        s && s.register && i && s.register(o),
        o.root.didUpdate(),
        o.addEventListener('animationComplete', () => {
          this.safeToRemove()
        }),
        o.setOptions({ ...o.options, onExitComplete: () => this.safeToRemove() })),
      (Ht.hasEverUpdated = !0)
  }
  getSnapshotBeforeUpdate(e) {
    const { layoutDependency: n, visualElement: s, drag: i, isPresent: o } = this.props,
      r = s.projection
    return (
      r &&
        ((r.isPresent = o),
        i || e.layoutDependency !== n || n === void 0 ? r.willUpdate() : this.safeToRemove(),
        e.isPresent !== o &&
          (o
            ? r.promote()
            : r.relegate() ||
              S.postRender(() => {
                const a = r.getStack()
                ;(!a || !a.members.length) && this.safeToRemove()
              }))),
      null
    )
  }
  componentDidUpdate() {
    const { projection: e } = this.props.visualElement
    e &&
      (e.root.didUpdate(),
      queueMicrotask(() => {
        !e.currentAnimation && e.isLead() && this.safeToRemove()
      }))
  }
  componentWillUnmount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: s } = this.props,
      { projection: i } = e
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      s && s.deregister && s.deregister(i))
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props
    e && e()
  }
  render() {
    return null
  }
}
function Ci(t) {
  const [e, n] = Ya(),
    s = v.useContext(Oe)
  return ps.createElement(Za, {
    ...t,
    layoutGroup: s,
    switchLayoutGroup: v.useContext(xs),
    isPresent: e,
    safeToRemove: n
  })
}
const Qa = {
    borderRadius: {
      ...Vt,
      applyTo: [
        'borderTopLeftRadius',
        'borderTopRightRadius',
        'borderBottomLeftRadius',
        'borderBottomRightRadius'
      ]
    },
    borderTopLeftRadius: Vt,
    borderTopRightRadius: Vt,
    borderBottomLeftRadius: Vt,
    borderBottomRightRadius: Vt,
    boxShadow: qa
  },
  Si = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
  Ja = Si.length,
  Hn = (t) => (typeof t == 'string' ? parseFloat(t) : t),
  Kn = (t) => typeof t == 'number' || P.test(t)
function tc(t, e, n, s, i, o) {
  i
    ? ((t.opacity = M(0, n.opacity !== void 0 ? n.opacity : 1, ec(s))),
      (t.opacityExit = M(e.opacity !== void 0 ? e.opacity : 1, 0, nc(s))))
    : o &&
      (t.opacity = M(e.opacity !== void 0 ? e.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, s))
  for (let r = 0; r < Ja; r++) {
    const a = `border${Si[r]}Radius`
    let c = _n(e, a),
      l = _n(n, a)
    if (c === void 0 && l === void 0) continue
    c || (c = 0),
      l || (l = 0),
      c === 0 || l === 0 || Kn(c) === Kn(l)
        ? ((t[a] = Math.max(M(Hn(c), Hn(l), s), 0)), ($.test(l) || $.test(c)) && (t[a] += '%'))
        : (t[a] = l)
  }
  ;(e.rotate || n.rotate) && (t.rotate = M(e.rotate || 0, n.rotate || 0, s))
}
function _n(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius
}
const ec = Ai(0, 0.5, Xe),
  nc = Ai(0.5, 0.95, R)
function Ai(t, e, n) {
  return (s) => (s < t ? 0 : s > e ? 1 : n(Lt(t, e, s)))
}
function Xn(t, e) {
  ;(t.min = e.min), (t.max = e.max)
}
function N(t, e) {
  Xn(t.x, e.x), Xn(t.y, e.y)
}
function Yn(t, e, n, s, i) {
  return (t -= e), (t = Jt(t, 1 / n, s)), i !== void 0 && (t = Jt(t, 1 / i, s)), t
}
function sc(t, e = 0, n = 1, s = 0.5, i, o = t, r = t) {
  if (
    ($.test(e) && ((e = parseFloat(e)), (e = M(r.min, r.max, e / 100) - r.min)),
    typeof e != 'number')
  )
    return
  let a = M(o.min, o.max, s)
  t === o && (a -= e), (t.min = Yn(t.min, e, n, a, i)), (t.max = Yn(t.max, e, n, a, i))
}
function qn(t, e, [n, s, i], o, r) {
  sc(t, e[n], e[s], e[i], e.scale, o, r)
}
const ic = ['x', 'scaleX', 'originX'],
  rc = ['y', 'scaleY', 'originY']
function Zn(t, e, n, s) {
  qn(t.x, e, ic, n ? n.x : void 0, s ? s.x : void 0),
    qn(t.y, e, rc, n ? n.y : void 0, s ? s.y : void 0)
}
function Qn(t) {
  return t.translate === 0 && t.scale === 1
}
function wi(t) {
  return Qn(t.x) && Qn(t.y)
}
function oc(t, e) {
  return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max
}
function Di(t, e) {
  return (
    Math.round(t.x.min) === Math.round(e.x.min) &&
    Math.round(t.x.max) === Math.round(e.x.max) &&
    Math.round(t.y.min) === Math.round(e.y.min) &&
    Math.round(t.y.max) === Math.round(e.y.max)
  )
}
function Jn(t) {
  return U(t.x) / U(t.y)
}
class ac {
  constructor() {
    this.members = []
  }
  add(e) {
    Je(this.members, e), e.scheduleRender()
  }
  remove(e) {
    if ((tn(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead)) {
      const n = this.members[this.members.length - 1]
      n && this.promote(n)
    }
  }
  relegate(e) {
    const n = this.members.findIndex((i) => e === i)
    if (n === 0) return !1
    let s
    for (let i = n; i >= 0; i--) {
      const o = this.members[i]
      if (o.isPresent !== !1) {
        s = o
        break
      }
    }
    return s ? (this.promote(s), !0) : !1
  }
  promote(e, n) {
    const s = this.lead
    if (e !== s && ((this.prevLead = s), (this.lead = e), e.show(), s)) {
      s.instance && s.scheduleRender(),
        e.scheduleRender(),
        (e.resumeFrom = s),
        n && (e.resumeFrom.preserveOpacity = !0),
        s.snapshot &&
          ((e.snapshot = s.snapshot),
          (e.snapshot.latestValues = s.animationValues || s.latestValues)),
        e.root && e.root.isUpdating && (e.isLayoutDirty = !0)
      const { crossfade: i } = e.options
      i === !1 && s.hide()
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      const { options: n, resumingFrom: s } = e
      n.onExitComplete && n.onExitComplete(),
        s && s.options.onExitComplete && s.options.onExitComplete()
    })
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1)
    })
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
  }
}
function ts(t, e, n) {
  let s = ''
  const i = t.x.translate / e.x,
    o = t.y.translate / e.y
  if (
    ((i || o) && (s = `translate3d(${i}px, ${o}px, 0) `),
    (e.x !== 1 || e.y !== 1) && (s += `scale(${1 / e.x}, ${1 / e.y}) `),
    n)
  ) {
    const { rotate: c, rotateX: l, rotateY: u } = n
    c && (s += `rotate(${c}deg) `), l && (s += `rotateX(${l}deg) `), u && (s += `rotateY(${u}deg) `)
  }
  const r = t.x.scale * e.x,
    a = t.y.scale * e.y
  return (r !== 1 || a !== 1) && (s += `scale(${r}, ${a})`), s || 'none'
}
const cc = (t, e) => t.depth - e.depth
class lc {
  constructor() {
    ;(this.children = []), (this.isDirty = !1)
  }
  add(e) {
    Je(this.children, e), (this.isDirty = !0)
  }
  remove(e) {
    tn(this.children, e), (this.isDirty = !0)
  }
  forEach(e) {
    this.isDirty && this.children.sort(cc), (this.isDirty = !1), this.children.forEach(e)
  }
}
function uc(t, e) {
  const n = performance.now(),
    s = ({ timestamp: i }) => {
      const o = i - n
      o >= e && (X(s), t(o - e))
    }
  return S.read(s, !0), () => X(s)
}
function hc(t) {
  window.MotionDebug && window.MotionDebug.record(t)
}
function fc(t) {
  return t instanceof SVGElement && t.tagName !== 'svg'
}
function dc(t, e, n) {
  const s = O(t) ? t : vt(t)
  return s.start(Qe('', s, e, n)), s.animation
}
const es = ['', 'X', 'Y', 'Z'],
  ns = 1e3
let mc = 0
const ct = {
  type: 'projectionFrame',
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
}
function Mi({
  attachResizeListener: t,
  defaultParent: e,
  measureScroll: n,
  checkIsScrollRoot: s,
  resetTransform: i
}) {
  return class {
    constructor(r = {}, a = e == null ? void 0 : e()) {
      ;(this.id = mc++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots())
        }),
        (this.updateProjection = () => {
          ;(ct.totalNodes = ct.resolvedTargetDeltas = ct.recalculatedProjection = 0),
            this.nodes.forEach(yc),
            this.nodes.forEach(bc),
            this.nodes.forEach(Vc),
            this.nodes.forEach(vc),
            hc(ct)
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = r),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0)
      for (let c = 0; c < this.path.length; c++) this.path[c].shouldResetTransform = !0
      this.root === this && (this.nodes = new lc())
    }
    addEventListener(r, a) {
      return (
        this.eventHandlers.has(r) || this.eventHandlers.set(r, new en()),
        this.eventHandlers.get(r).add(a)
      )
    }
    notifyListeners(r, ...a) {
      const c = this.eventHandlers.get(r)
      c && c.notify(...a)
    }
    hasListeners(r) {
      return this.eventHandlers.has(r)
    }
    mount(r, a = this.root.hasTreeAnimated) {
      if (this.instance) return
      ;(this.isSVG = fc(r)), (this.instance = r)
      const { layoutId: c, layout: l, visualElement: u } = this.options
      if (
        (u && !u.current && u.mount(r),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (l || c) && (this.isLayoutDirty = !0),
        t)
      ) {
        let h
        const f = () => (this.root.updateBlockedByResize = !1)
        t(r, () => {
          ;(this.root.updateBlockedByResize = !0),
            h && h(),
            (h = uc(f, 250)),
            Ht.hasAnimatedSinceResize && ((Ht.hasAnimatedSinceResize = !1), this.nodes.forEach(is))
        })
      }
      c && this.root.registerSharedNode(c, this),
        this.options.animate !== !1 &&
          u &&
          (c || l) &&
          this.addEventListener(
            'didUpdate',
            ({ delta: h, hasLayoutChanged: f, hasRelativeTargetChanged: d, layout: m }) => {
              if (this.isTreeAnimationBlocked()) {
                ;(this.target = void 0), (this.relativeTarget = void 0)
                return
              }
              const y = this.options.transition || u.getDefaultTransition() || Dc,
                { onLayoutAnimationStart: x, onLayoutAnimationComplete: V } = u.getProps(),
                g = !this.targetLayout || !Di(this.targetLayout, m) || d,
                p = !f && d
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                p ||
                (f && (g || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(h, p)
                const T = { ...di(y, 'layout'), onPlay: x, onComplete: V }
                ;(u.shouldReduceMotion || this.options.layoutRoot) &&
                  ((T.delay = 0), (T.type = !1)),
                  this.startAnimation(T)
              } else
                f || is(this),
                  this.isLead() && this.options.onExitComplete && this.options.onExitComplete()
              this.targetLayout = m
            }
          )
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this)
      const r = this.getStack()
      r && r.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        X(this.updateProjection)
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || (this.parent && this.parent.isTreeAnimationBlocked()) || !1
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0), this.nodes && this.nodes.forEach(Cc), this.animationId++)
    }
    getTransformTemplate() {
      const { visualElement: r } = this.options
      return r && r.getProps().transformTemplate
    }
    willUpdate(r = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete()
        return
      }
      if ((!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)) return
      this.isLayoutDirty = !0
      for (let u = 0; u < this.path.length; u++) {
        const h = this.path[u]
        ;(h.shouldResetTransform = !0),
          h.updateScroll('snapshot'),
          h.options.layoutRoot && h.willUpdate(!1)
      }
      const { layoutId: a, layout: c } = this.options
      if (a === void 0 && !c) return
      const l = this.getTransformTemplate()
      ;(this.prevTransformTemplateValue = l ? l(this.latestValues, '') : void 0),
        this.updateSnapshot(),
        r && this.notifyListeners('willUpdate')
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(ss)
        return
      }
      this.isUpdating || this.nodes.forEach(Pc),
        (this.isUpdating = !1),
        this.nodes.forEach(Tc),
        this.nodes.forEach(pc),
        this.nodes.forEach(gc),
        this.clearAllSnapshots()
      const a = performance.now()
      ;(j.delta = nt(0, 1e3 / 60, a - j.timestamp)),
        (j.timestamp = a),
        (j.isProcessing = !0),
        le.update.process(j),
        le.preRender.process(j),
        le.render.process(j),
        (j.isProcessing = !1)
    }
    didUpdate() {
      this.updateScheduled || ((this.updateScheduled = !0), queueMicrotask(() => this.update()))
    }
    clearAllSnapshots() {
      this.nodes.forEach(xc), this.sharedNodes.forEach(Sc)
    }
    scheduleUpdateProjection() {
      S.preRender(this.updateProjection, !1, !0)
    }
    scheduleCheckAfterUnmount() {
      S.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
      })
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure())
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)
      )
        return
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let c = 0; c < this.path.length; c++) this.path[c].updateScroll()
      const r = this.layout
      ;(this.layout = this.measure(!1)),
        (this.layoutCorrected = E()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners('measure', this.layout.layoutBox)
      const { visualElement: a } = this.options
      a && a.notify('LayoutMeasure', this.layout.layoutBox, r ? r.layoutBox : void 0)
    }
    updateScroll(r = 'measure') {
      let a = !!(this.options.layoutScroll && this.instance)
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === r &&
        (a = !1),
        a &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: r,
            isRoot: s(this.instance),
            offset: n(this.instance)
          })
    }
    resetTransform() {
      if (!i) return
      const r = this.isLayoutDirty || this.shouldResetTransform,
        a = this.projectionDelta && !wi(this.projectionDelta),
        c = this.getTransformTemplate(),
        l = c ? c(this.latestValues, '') : void 0,
        u = l !== this.prevTransformTemplateValue
      r &&
        (a || at(this.latestValues) || u) &&
        (i(this.instance, l), (this.shouldResetTransform = !1), this.scheduleRender())
    }
    measure(r = !0) {
      const a = this.measurePageBox()
      let c = this.removeElementScroll(a)
      return (
        r && (c = this.removeTransform(c)),
        Mc(c),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: c,
          latestValues: {},
          source: this.id
        }
      )
    }
    measurePageBox() {
      const { visualElement: r } = this.options
      if (!r) return E()
      const a = r.measureViewportBox(),
        { scroll: c } = this.root
      return c && (J(a.x, c.offset.x), J(a.y, c.offset.y)), a
    }
    removeElementScroll(r) {
      const a = E()
      N(a, r)
      for (let c = 0; c < this.path.length; c++) {
        const l = this.path[c],
          { scroll: u, options: h } = l
        if (l !== this.root && u && h.layoutScroll) {
          if (u.isRoot) {
            N(a, r)
            const { scroll: f } = this.root
            f && (J(a.x, -f.offset.x), J(a.y, -f.offset.y))
          }
          J(a.x, u.offset.x), J(a.y, u.offset.y)
        }
      }
      return a
    }
    applyTransform(r, a = !1) {
      const c = E()
      N(c, r)
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l]
        !a &&
          u.options.layoutScroll &&
          u.scroll &&
          u !== u.root &&
          yt(c, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }),
          at(u.latestValues) && yt(c, u.latestValues)
      }
      return at(this.latestValues) && yt(c, this.latestValues), c
    }
    removeTransform(r) {
      const a = E()
      N(a, r)
      for (let c = 0; c < this.path.length; c++) {
        const l = this.path[c]
        if (!l.instance || !at(l.latestValues)) continue
        Le(l.latestValues) && l.updateSnapshot()
        const u = E(),
          h = l.measurePageBox()
        N(u, h), Zn(a, l.latestValues, l.snapshot ? l.snapshot.layoutBox : void 0, u)
      }
      return at(this.latestValues) && Zn(a, this.latestValues), a
    }
    setTargetDelta(r) {
      ;(this.targetDelta = r), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0)
    }
    setOptions(r) {
      this.options = { ...this.options, ...r, crossfade: r.crossfade !== void 0 ? r.crossfade : !0 }
    }
    clearMeasurements() {
      ;(this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1)
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== j.timestamp &&
        this.relativeParent.resolveTargetDelta(!0)
    }
    resolveTargetDelta(r = !1) {
      var a
      const c = this.getLead()
      this.isProjectionDirty || (this.isProjectionDirty = c.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = c.isTransformDirty),
        this.isSharedProjectionDirty || (this.isSharedProjectionDirty = c.isSharedProjectionDirty)
      const l = !!this.resumingFrom || this !== c
      if (
        !(
          r ||
          (l && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) && a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return
      const { layout: h, layoutId: f } = this.options
      if (!(!this.layout || !(h || f))) {
        if (
          ((this.resolvedRelativeTargetAt = j.timestamp), !this.targetDelta && !this.relativeTarget)
        ) {
          const d = this.getClosestProjectingParent()
          d && d.layout && this.animationProgress !== 1
            ? ((this.relativeParent = d),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = E()),
              (this.relativeTargetOrigin = E()),
              Dt(this.relativeTargetOrigin, this.layout.layoutBox, d.layout.layoutBox),
              N(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0)
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target || ((this.target = E()), (this.targetWithTransforms = E())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                La(this.target, this.relativeTarget, this.relativeParent.target))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : N(this.target, this.layout.layoutBox),
                bi(this.target, this.targetDelta))
              : N(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1
            const d = this.getClosestProjectingParent()
            d &&
            !!d.resumingFrom == !!this.resumingFrom &&
            !d.options.layoutScroll &&
            d.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = d),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = E()),
                (this.relativeTargetOrigin = E()),
                Dt(this.relativeTargetOrigin, this.target, d.target),
                N(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0)
          }
          ct.resolvedTargetDeltas++
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Le(this.parent.latestValues) || Ti(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
    }
    calcProjection() {
      var r
      const a = this.getLead(),
        c = !!this.resumingFrom || this !== a
      let l = !0
      if (
        ((this.isProjectionDirty ||
          (!((r = this.parent) === null || r === void 0) && r.isProjectionDirty)) &&
          (l = !1),
        c && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1),
        this.resolvedRelativeTargetAt === j.timestamp && (l = !1),
        l)
      )
        return
      const { layout: u, layoutId: h } = this.options
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(u || h))
      )
        return
      N(this.layoutCorrected, this.layout.layoutBox)
      const f = this.treeScale.x,
        d = this.treeScale.y
      Na(this.layoutCorrected, this.treeScale, this.path, c),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          (a.target = a.layout.layoutBox)
      const { target: m } = a
      if (!m) {
        this.projectionTransform &&
          ((this.projectionDelta = gt()),
          (this.projectionTransform = 'none'),
          this.scheduleRender())
        return
      }
      this.projectionDelta ||
        ((this.projectionDelta = gt()), (this.projectionDeltaWithTransform = gt()))
      const y = this.projectionTransform
      wt(this.projectionDelta, this.layoutCorrected, m, this.latestValues),
        (this.projectionTransform = ts(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== y || this.treeScale.x !== f || this.treeScale.y !== d) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners('projectionUpdate', m)),
        ct.recalculatedProjection++
    }
    hide() {
      this.isVisible = !1
    }
    show() {
      this.isVisible = !0
    }
    scheduleRender(r = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), r)) {
        const a = this.getStack()
        a && a.scheduleRender()
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
    }
    setAnimationOrigin(r, a = !1) {
      const c = this.snapshot,
        l = c ? c.latestValues : {},
        u = { ...this.latestValues },
        h = gt()
      ;(!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a)
      const f = E(),
        d = c ? c.source : void 0,
        m = this.layout ? this.layout.source : void 0,
        y = d !== m,
        x = this.getStack(),
        V = !x || x.members.length <= 1,
        g = !!(y && !V && this.options.crossfade === !0 && !this.path.some(wc))
      this.animationProgress = 0
      let p
      ;(this.mixTargetDelta = (T) => {
        const b = T / 1e3
        rs(h.x, r.x, b),
          rs(h.y, r.y, b),
          this.setTargetDelta(h),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Dt(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            Ac(this.relativeTarget, this.relativeTargetOrigin, f, b),
            p && oc(this.relativeTarget, p) && (this.isProjectionDirty = !1),
            p || (p = E()),
            N(p, this.relativeTarget)),
          y && ((this.animationValues = u), tc(u, l, this.latestValues, b, g, V)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = b)
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
    }
    startAnimation(r) {
      this.notifyListeners('animationStart'),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation && (X(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = S.update(() => {
          ;(Ht.hasAnimatedSinceResize = !0),
            (this.currentAnimation = dc(0, ns, {
              ...r,
              onUpdate: (a) => {
                this.mixTargetDelta(a), r.onUpdate && r.onUpdate(a)
              },
              onComplete: () => {
                r.onComplete && r.onComplete(), this.completeAnimation()
              }
            })),
            this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0)
        }))
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0))
      const r = this.getStack()
      r && r.exitAnimationComplete(),
        (this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
        this.notifyListeners('animationComplete')
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(ns), this.currentAnimation.stop()),
        this.completeAnimation()
    }
    applyTransformsToTarget() {
      const r = this.getLead()
      let { targetWithTransforms: a, target: c, layout: l, latestValues: u } = r
      if (!(!a || !c || !l)) {
        if (
          this !== r &&
          this.layout &&
          l &&
          Ri(this.options.animationType, this.layout.layoutBox, l.layoutBox)
        ) {
          c = this.target || E()
          const h = U(this.layout.layoutBox.x)
          ;(c.x.min = r.target.x.min), (c.x.max = c.x.min + h)
          const f = U(this.layout.layoutBox.y)
          ;(c.y.min = r.target.y.min), (c.y.max = c.y.min + f)
        }
        N(a, c), yt(a, u), wt(this.projectionDeltaWithTransform, this.layoutCorrected, a, u)
      }
    }
    registerSharedNode(r, a) {
      this.sharedNodes.has(r) || this.sharedNodes.set(r, new ac()), this.sharedNodes.get(r).add(a)
      const l = a.options.initialPromotionConfig
      a.promote({
        transition: l ? l.transition : void 0,
        preserveFollowOpacity:
          l && l.shouldPreserveFollowOpacity ? l.shouldPreserveFollowOpacity(a) : void 0
      })
    }
    isLead() {
      const r = this.getStack()
      return r ? r.lead === this : !0
    }
    getLead() {
      var r
      const { layoutId: a } = this.options
      return a ? ((r = this.getStack()) === null || r === void 0 ? void 0 : r.lead) || this : this
    }
    getPrevLead() {
      var r
      const { layoutId: a } = this.options
      return a ? ((r = this.getStack()) === null || r === void 0 ? void 0 : r.prevLead) : void 0
    }
    getStack() {
      const { layoutId: r } = this.options
      if (r) return this.root.sharedNodes.get(r)
    }
    promote({ needsReset: r, transition: a, preserveFollowOpacity: c } = {}) {
      const l = this.getStack()
      l && l.promote(this, c),
        r && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a })
    }
    relegate() {
      const r = this.getStack()
      return r ? r.relegate(this) : !1
    }
    resetRotation() {
      const { visualElement: r } = this.options
      if (!r) return
      let a = !1
      const { latestValues: c } = r
      if (((c.rotate || c.rotateX || c.rotateY || c.rotateZ) && (a = !0), !a)) return
      const l = {}
      for (let u = 0; u < es.length; u++) {
        const h = 'rotate' + es[u]
        c[h] && ((l[h] = c[h]), r.setStaticValue(h, 0))
      }
      r.render()
      for (const u in l) r.setStaticValue(u, l[u])
      r.scheduleRender()
    }
    getProjectionStyles(r = {}) {
      var a, c
      const l = {}
      if (!this.instance || this.isSVG) return l
      if (this.isVisible) l.visibility = ''
      else return { visibility: 'hidden' }
      const u = this.getTransformTemplate()
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (l.opacity = ''),
          (l.pointerEvents = Wt(r.pointerEvents) || ''),
          (l.transform = u ? u(this.latestValues, '') : 'none'),
          l
        )
      const h = this.getLead()
      if (!this.projectionDelta || !this.layout || !h.target) {
        const y = {}
        return (
          this.options.layoutId &&
            ((y.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
            (y.pointerEvents = Wt(r.pointerEvents) || '')),
          this.hasProjected &&
            !at(this.latestValues) &&
            ((y.transform = u ? u({}, '') : 'none'), (this.hasProjected = !1)),
          y
        )
      }
      const f = h.animationValues || h.latestValues
      this.applyTransformsToTarget(),
        (l.transform = ts(this.projectionDeltaWithTransform, this.treeScale, f)),
        u && (l.transform = u(f, l.transform))
      const { x: d, y: m } = this.projectionDelta
      ;(l.transformOrigin = `${d.origin * 100}% ${m.origin * 100}% 0`),
        h.animationValues
          ? (l.opacity =
              h === this
                ? (c = (a = f.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !==
                    null && c !== void 0
                  ? c
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : f.opacityExit)
          : (l.opacity =
              h === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ''
                : f.opacityExit !== void 0
                ? f.opacityExit
                : 0)
      for (const y in Kt) {
        if (f[y] === void 0) continue
        const { correct: x, applyTo: V } = Kt[y],
          g = l.transform === 'none' ? f[y] : x(f[y], h)
        if (V) {
          const p = V.length
          for (let T = 0; T < p; T++) l[V[T]] = g
        } else l[y] = g
      }
      return (
        this.options.layoutId &&
          (l.pointerEvents = h === this ? Wt(r.pointerEvents) || '' : 'none'),
        l
      )
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0
    }
    resetTree() {
      this.root.nodes.forEach((r) => {
        var a
        return (a = r.currentAnimation) === null || a === void 0 ? void 0 : a.stop()
      }),
        this.root.nodes.forEach(ss),
        this.root.sharedNodes.clear()
    }
  }
}
function pc(t) {
  t.updateLayout()
}
function gc(t) {
  var e
  const n = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot
  if (t.isLead() && t.layout && n && t.hasListeners('didUpdate')) {
    const { layoutBox: s, measuredBox: i } = t.layout,
      { animationType: o } = t.options,
      r = n.source !== t.layout.source
    o === 'size'
      ? G((h) => {
          const f = r ? n.measuredBox[h] : n.layoutBox[h],
            d = U(f)
          ;(f.min = s[h].min), (f.max = f.min + d)
        })
      : Ri(o, n.layoutBox, s) &&
        G((h) => {
          const f = r ? n.measuredBox[h] : n.layoutBox[h],
            d = U(s[h])
          ;(f.max = f.min + d),
            t.relativeTarget &&
              !t.currentAnimation &&
              ((t.isProjectionDirty = !0), (t.relativeTarget[h].max = t.relativeTarget[h].min + d))
        })
    const a = gt()
    wt(a, s, n.layoutBox)
    const c = gt()
    r ? wt(c, t.applyTransform(i, !0), n.measuredBox) : wt(c, s, n.layoutBox)
    const l = !wi(a)
    let u = !1
    if (!t.resumeFrom) {
      const h = t.getClosestProjectingParent()
      if (h && !h.resumeFrom) {
        const { snapshot: f, layout: d } = h
        if (f && d) {
          const m = E()
          Dt(m, n.layoutBox, f.layoutBox)
          const y = E()
          Dt(y, s, d.layoutBox),
            Di(m, y) || (u = !0),
            h.options.layoutRoot &&
              ((t.relativeTarget = y), (t.relativeTargetOrigin = m), (t.relativeParent = h))
        }
      }
    }
    t.notifyListeners('didUpdate', {
      layout: s,
      snapshot: n,
      delta: c,
      layoutDelta: a,
      hasLayoutChanged: l,
      hasRelativeTargetChanged: u
    })
  } else if (t.isLead()) {
    const { onExitComplete: s } = t.options
    s && s()
  }
  t.options.transition = void 0
}
function yc(t) {
  ct.totalNodes++,
    t.parent &&
      (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
      t.isSharedProjectionDirty ||
        (t.isSharedProjectionDirty = !!(
          t.isProjectionDirty ||
          t.parent.isProjectionDirty ||
          t.parent.isSharedProjectionDirty
        )),
      t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
}
function vc(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
}
function xc(t) {
  t.clearSnapshot()
}
function ss(t) {
  t.clearMeasurements()
}
function Pc(t) {
  t.isLayoutDirty = !1
}
function Tc(t) {
  const { visualElement: e } = t.options
  e && e.getProps().onBeforeLayoutMeasure && e.notify('BeforeLayoutMeasure'), t.resetTransform()
}
function is(t) {
  t.finishAnimation(),
    (t.targetDelta = t.relativeTarget = t.target = void 0),
    (t.isProjectionDirty = !0)
}
function bc(t) {
  t.resolveTargetDelta()
}
function Vc(t) {
  t.calcProjection()
}
function Cc(t) {
  t.resetRotation()
}
function Sc(t) {
  t.removeLeadSnapshot()
}
function rs(t, e, n) {
  ;(t.translate = M(e.translate, 0, n)),
    (t.scale = M(e.scale, 1, n)),
    (t.origin = e.origin),
    (t.originPoint = e.originPoint)
}
function os(t, e, n, s) {
  ;(t.min = M(e.min, n.min, s)), (t.max = M(e.max, n.max, s))
}
function Ac(t, e, n, s) {
  os(t.x, e.x, n.x, s), os(t.y, e.y, n.y, s)
}
function wc(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0
}
const Dc = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  as = (t) => typeof navigator < 'u' && navigator.userAgent.toLowerCase().includes(t),
  cs = as('applewebkit/') && !as('chrome/') ? Math.round : R
function ls(t) {
  ;(t.min = cs(t.min)), (t.max = cs(t.max))
}
function Mc(t) {
  ls(t.x), ls(t.y)
}
function Ri(t, e, n) {
  return t === 'position' || (t === 'preserve-aspect' && !Me(Jn(e), Jn(n), 0.2))
}
const Rc = Mi({
    attachResizeListener: (t, e) => H(t, 'resize', e),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
  }),
  Pe = { current: void 0 },
  Li = Mi({
    measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
    defaultParent: () => {
      if (!Pe.current) {
        const t = new Rc({})
        t.mount(window), t.setOptions({ layoutScroll: !0 }), (Pe.current = t)
      }
      return Pe.current
    },
    resetTransform: (t, e) => {
      t.style.transform = e !== void 0 ? e : 'none'
    },
    checkIsScrollRoot: (t) => window.getComputedStyle(t).position === 'fixed'
  }),
  Lc = { pan: { Feature: Xa }, drag: { Feature: _a, ProjectionNode: Li, MeasureLayout: Ci } },
  Ec = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/
function Fc(t) {
  const e = Ec.exec(t)
  if (!e) return [,]
  const [, n, s] = e
  return [n, s]
}
function Fe(t, e, n = 1) {
  const [s, i] = Fc(t)
  if (!s) return
  const o = window.getComputedStyle(e).getPropertyValue(s)
  if (o) {
    const r = o.trim()
    return mi(r) ? parseFloat(r) : r
  } else return be(i) ? Fe(i, e, n + 1) : i
}
function Bc(t, { ...e }, n) {
  const s = t.current
  if (!(s instanceof Element)) return { target: e, transitionEnd: n }
  n && (n = { ...n }),
    t.values.forEach((i) => {
      const o = i.get()
      if (!be(o)) return
      const r = Fe(o, s)
      r && i.set(r)
    })
  for (const i in e) {
    const o = e[i]
    if (!be(o)) continue
    const r = Fe(o, s)
    r && ((e[i] = r), n || (n = {}), n[i] === void 0 && (n[i] = o))
  }
  return { target: e, transitionEnd: n }
}
const kc = new Set([
    'width',
    'height',
    'top',
    'left',
    'right',
    'bottom',
    'x',
    'y',
    'translateX',
    'translateY'
  ]),
  Ei = (t) => kc.has(t),
  jc = (t) => Object.keys(t).some(Ei),
  us = (t) => t === ht || t === P,
  hs = (t, e) => parseFloat(t.split(', ')[e]),
  fs =
    (t, e) =>
    (n, { transform: s }) => {
      if (s === 'none' || !s) return 0
      const i = s.match(/^matrix3d\((.+)\)$/)
      if (i) return hs(i[1], e)
      {
        const o = s.match(/^matrix\((.+)\)$/)
        return o ? hs(o[1], t) : 0
      }
    },
  Ic = new Set(['x', 'y', 'z']),
  Oc = Et.filter((t) => !Ic.has(t))
function Uc(t) {
  const e = []
  return (
    Oc.forEach((n) => {
      const s = t.getValue(n)
      s !== void 0 && (e.push([n, s.get()]), s.set(n.startsWith('scale') ? 1 : 0))
    }),
    e.length && t.render(),
    e
  )
}
const xt = {
  width: ({ x: t }, { paddingLeft: e = '0', paddingRight: n = '0' }) =>
    t.max - t.min - parseFloat(e) - parseFloat(n),
  height: ({ y: t }, { paddingTop: e = '0', paddingBottom: n = '0' }) =>
    t.max - t.min - parseFloat(e) - parseFloat(n),
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  x: fs(4, 13),
  y: fs(5, 14)
}
xt.translateX = xt.x
xt.translateY = xt.y
const Nc = (t, e, n) => {
    const s = e.measureViewportBox(),
      i = e.current,
      o = getComputedStyle(i),
      { display: r } = o,
      a = {}
    r === 'none' && e.setStaticValue('display', t.display || 'block'),
      n.forEach((l) => {
        a[l] = xt[l](s, o)
      }),
      e.render()
    const c = e.measureViewportBox()
    return (
      n.forEach((l) => {
        const u = e.getValue(l)
        u && u.jump(a[l]), (t[l] = xt[l](c, o))
      }),
      t
    )
  },
  Gc = (t, e, n = {}, s = {}) => {
    ;(e = { ...e }), (s = { ...s })
    const i = Object.keys(e).filter(Ei)
    let o = [],
      r = !1
    const a = []
    if (
      (i.forEach((c) => {
        const l = t.getValue(c)
        if (!t.hasValue(c)) return
        let u = n[c],
          h = bt(u)
        const f = e[c]
        let d
        if (Xt(f)) {
          const m = f.length,
            y = f[0] === null ? 1 : 0
          ;(u = f[y]), (h = bt(u))
          for (let x = y; x < m && f[x] !== null; x++) d ? _e(bt(f[x]) === d) : (d = bt(f[x]))
        } else d = bt(f)
        if (h !== d)
          if (us(h) && us(d)) {
            const m = l.get()
            typeof m == 'string' && l.set(parseFloat(m)),
              typeof f == 'string'
                ? (e[c] = parseFloat(f))
                : Array.isArray(f) && d === P && (e[c] = f.map(parseFloat))
          } else
            h != null && h.transform && d != null && d.transform && (u === 0 || f === 0)
              ? u === 0
                ? l.set(d.transform(u))
                : (e[c] = h.transform(f))
              : (r || ((o = Uc(t)), (r = !0)),
                a.push(c),
                (s[c] = s[c] !== void 0 ? s[c] : e[c]),
                l.jump(f))
      }),
      a.length)
    ) {
      const c = a.indexOf('height') >= 0 ? window.pageYOffset : null,
        l = Nc(e, t, a)
      return (
        o.length &&
          o.forEach(([u, h]) => {
            t.getValue(u).set(h)
          }),
        t.render(),
        ne && c !== null && window.scrollTo({ top: c }),
        { target: l, transitionEnd: s }
      )
    } else return { target: e, transitionEnd: s }
  }
function $c(t, e, n, s) {
  return jc(e) ? Gc(t, e, n, s) : { target: e, transitionEnd: s }
}
const zc = (t, e, n, s) => {
    const i = Bc(t, e, s)
    return (e = i.target), (s = i.transitionEnd), $c(t, e, n, s)
  },
  Be = { current: null },
  Fi = { current: !1 }
function Wc() {
  if (((Fi.current = !0), !!ne))
    if (window.matchMedia) {
      const t = window.matchMedia('(prefers-reduced-motion)'),
        e = () => (Be.current = t.matches)
      t.addListener(e), e()
    } else Be.current = !1
}
function Hc(t, e, n) {
  const { willChange: s } = e
  for (const i in e) {
    const o = e[i],
      r = n[i]
    if (O(o)) t.addValue(i, o), Qt(s) && s.add(i)
    else if (O(r)) t.addValue(i, vt(o, { owner: t })), Qt(s) && s.remove(i)
    else if (r !== o)
      if (t.hasValue(i)) {
        const a = t.getValue(i)
        !a.hasAnimated && a.set(o)
      } else {
        const a = t.getStaticValue(i)
        t.addValue(i, vt(a !== void 0 ? a : o, { owner: t }))
      }
  }
  for (const i in n) e[i] === void 0 && t.removeValue(i)
  return e
}
const ds = new WeakMap(),
  Bi = Object.keys(Rt),
  Kc = Bi.length,
  ms = [
    'AnimationStart',
    'AnimationComplete',
    'Update',
    'BeforeLayoutMeasure',
    'LayoutMeasure',
    'LayoutAnimationStart',
    'LayoutAnimationComplete'
  ],
  _c = Ie.length
class Xc {
  constructor(
    { parent: e, props: n, presenceContext: s, reducedMotionConfig: i, visualState: o },
    r = {}
  ) {
    ;(this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify('Update', this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
      }),
      (this.scheduleRender = () => S.render(this.render, !1, !0))
    const { latestValues: a, renderState: c } = o
    ;(this.latestValues = a),
      (this.baseTarget = { ...a }),
      (this.initialValues = n.initial ? { ...a } : {}),
      (this.renderState = c),
      (this.parent = e),
      (this.props = n),
      (this.presenceContext = s),
      (this.depth = e ? e.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = r),
      (this.isControllingVariants = ie(n)),
      (this.isVariantNode = vs(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(e && e.current))
    const { willChange: l, ...u } = this.scrapeMotionValuesFromProps(n, {})
    for (const h in u) {
      const f = u[h]
      a[h] !== void 0 && O(f) && (f.set(a[h], !1), Qt(l) && l.add(h))
    }
  }
  scrapeMotionValuesFromProps(e, n) {
    return {}
  }
  mount(e) {
    ;(this.current = e),
      ds.set(e, this),
      this.projection && !this.projection.instance && this.projection.mount(e),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, s) => this.bindToMotionValue(s, n)),
      Fi.current || Wc(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === 'never'
          ? !1
          : this.reducedMotionConfig === 'always'
          ? !0
          : Be.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext)
  }
  unmount() {
    ds.delete(this.current),
      this.projection && this.projection.unmount(),
      X(this.notifyUpdate),
      X(this.render),
      this.valueSubscriptions.forEach((e) => e()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this)
    for (const e in this.events) this.events[e].clear()
    for (const e in this.features) this.features[e].unmount()
    this.current = null
  }
  bindToMotionValue(e, n) {
    const s = ut.has(e),
      i = n.on('change', (r) => {
        ;(this.latestValues[e] = r),
          this.props.onUpdate && S.update(this.notifyUpdate, !1, !0),
          s && this.projection && (this.projection.isTransformDirty = !0)
      }),
      o = n.on('renderRequest', this.scheduleRender)
    this.valueSubscriptions.set(e, () => {
      i(), o()
    })
  }
  sortNodePosition(e) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== e.type
      ? 0
      : this.sortInstanceNodePosition(this.current, e.current)
  }
  loadFeatures({ children: e, ...n }, s, i, o) {
    let r, a
    for (let c = 0; c < Kc; c++) {
      const l = Bi[c],
        { isEnabled: u, Feature: h, ProjectionNode: f, MeasureLayout: d } = Rt[l]
      f && (r = f),
        u(n) && (!this.features[l] && h && (this.features[l] = new h(this)), d && (a = d))
    }
    if (!this.projection && r) {
      this.projection = new r(this.latestValues, this.parent && this.parent.projection)
      const {
        layoutId: c,
        layout: l,
        drag: u,
        dragConstraints: h,
        layoutScroll: f,
        layoutRoot: d
      } = n
      this.projection.setOptions({
        layoutId: c,
        layout: l,
        alwaysMeasureLayout: !!u || (h && mt(h)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof l == 'string' ? l : 'both',
        initialPromotionConfig: o,
        layoutScroll: f,
        layoutRoot: d
      })
    }
    return a
  }
  updateFeatures() {
    for (const e in this.features) {
      const n = this.features[e]
      n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0))
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props)
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : E()
  }
  getStaticValue(e) {
    return this.latestValues[e]
  }
  setStaticValue(e, n) {
    this.latestValues[e] = n
  }
  makeTargetAnimatable(e, n = !0) {
    return this.makeTargetAnimatableFromInstance(e, this.props, n)
  }
  update(e, n) {
    ;(e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = e),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n)
    for (let s = 0; s < ms.length; s++) {
      const i = ms[s]
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i])
      const o = e['on' + i]
      o && (this.propEventSubscriptions[i] = this.on(i, o))
    }
    ;(this.prevMotionValues = Hc(
      this,
      this.scrapeMotionValuesFromProps(e, this.prevProps),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue()
  }
  getProps() {
    return this.props
  }
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0
  }
  getDefaultTransition() {
    return this.props.transition
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
  }
  getVariantContext(e = !1) {
    if (e) return this.parent ? this.parent.getVariantContext() : void 0
    if (!this.isControllingVariants) {
      const s = this.parent ? this.parent.getVariantContext() || {} : {}
      return this.props.initial !== void 0 && (s.initial = this.props.initial), s
    }
    const n = {}
    for (let s = 0; s < _c; s++) {
      const i = Ie[s],
        o = this.props[i]
      ;(Mt(o) || o === !1) && (n[i] = o)
    }
    return n
  }
  addVariantChild(e) {
    const n = this.getClosestVariantNode()
    if (n) return n.variantChildren && n.variantChildren.add(e), () => n.variantChildren.delete(e)
  }
  addValue(e, n) {
    n !== this.values.get(e) && (this.removeValue(e), this.bindToMotionValue(e, n)),
      this.values.set(e, n),
      (this.latestValues[e] = n.get())
  }
  removeValue(e) {
    this.values.delete(e)
    const n = this.valueSubscriptions.get(e)
    n && (n(), this.valueSubscriptions.delete(e)),
      delete this.latestValues[e],
      this.removeValueFromRenderState(e, this.renderState)
  }
  hasValue(e) {
    return this.values.has(e)
  }
  getValue(e, n) {
    if (this.props.values && this.props.values[e]) return this.props.values[e]
    let s = this.values.get(e)
    return s === void 0 && n !== void 0 && ((s = vt(n, { owner: this })), this.addValue(e, s)), s
  }
  readValue(e) {
    var n
    return this.latestValues[e] !== void 0 || !this.current
      ? this.latestValues[e]
      : (n = this.getBaseTargetFromProps(this.props, e)) !== null && n !== void 0
      ? n
      : this.readValueFromInstance(this.current, e, this.options)
  }
  setBaseTarget(e, n) {
    this.baseTarget[e] = n
  }
  getBaseTarget(e) {
    var n
    const { initial: s } = this.props,
      i =
        typeof s == 'string' || typeof s == 'object'
          ? (n = Ke(this.props, s)) === null || n === void 0
            ? void 0
            : n[e]
          : void 0
    if (s && i !== void 0) return i
    const o = this.getBaseTargetFromProps(this.props, e)
    return o !== void 0 && !O(o)
      ? o
      : this.initialValues[e] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[e]
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new en()), this.events[e].add(n)
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n)
  }
}
class ki extends Xc {
  sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n) & 2 ? 1 : -1
  }
  getBaseTargetFromProps(e, n) {
    return e.style ? e.style[n] : void 0
  }
  removeValueFromRenderState(e, { vars: n, style: s }) {
    delete n[e], delete s[e]
  }
  makeTargetAnimatableFromInstance(
    { transition: e, transitionEnd: n, ...s },
    { transformValues: i },
    o
  ) {
    let r = da(s, e || {}, this)
    if ((i && (n && (n = i(n)), s && (s = i(s)), r && (r = i(r))), o)) {
      ha(this, s, r)
      const a = zc(this, s, r, n)
      ;(n = a.transitionEnd), (s = a.target)
    }
    return { transition: e, transitionEnd: n, ...s }
  }
}
function Yc(t) {
  return window.getComputedStyle(t)
}
class qc extends ki {
  readValueFromInstance(e, n) {
    if (ut.has(n)) {
      const s = Ze(n)
      return (s && s.default) || 0
    } else {
      const s = Yc(e),
        i = (bs(n) ? s.getPropertyValue(n) : s[n]) || 0
      return typeof i == 'string' ? i.trim() : i
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return Vi(e, n)
  }
  build(e, n, s, i) {
    Ne(e, n, s, i.transformTemplate)
  }
  scrapeMotionValuesFromProps(e, n) {
    return He(e, n)
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription)
    const { children: e } = this.props
    O(e) &&
      (this.childSubscription = e.on('change', (n) => {
        this.current && (this.current.textContent = `${n}`)
      }))
  }
  renderInstance(e, n, s, i) {
    Ds(e, n, s, i)
  }
}
class Zc extends ki {
  constructor() {
    super(...arguments), (this.isSVGTag = !1)
  }
  getBaseTargetFromProps(e, n) {
    return e[n]
  }
  readValueFromInstance(e, n) {
    if (ut.has(n)) {
      const s = Ze(n)
      return (s && s.default) || 0
    }
    return (n = Ms.has(n) ? n : We(n)), e.getAttribute(n)
  }
  measureInstanceViewportBox() {
    return E()
  }
  scrapeMotionValuesFromProps(e, n) {
    return Ls(e, n)
  }
  build(e, n, s, i) {
    $e(e, n, s, this.isSVGTag, i.transformTemplate)
  }
  renderInstance(e, n, s, i) {
    Rs(e, n, s, i)
  }
  mount(e) {
    ;(this.isSVGTag = ze(e.tagName)), super.mount(e)
  }
}
const Qc = (t, e) =>
    Ue(t)
      ? new Zc(e, { enableHardwareAcceleration: !1 })
      : new qc(e, { enableHardwareAcceleration: !0 }),
  Jc = { layout: { ProjectionNode: Li, MeasureLayout: Ci } },
  tl = { ...wa, ...Kr, ...Lc, ...Jc },
  zt = er((t, e) => Fr(t, e, tl, Qc))
function ji() {
  const t = v.useRef(!1)
  return (
    ke(
      () => (
        (t.current = !0),
        () => {
          t.current = !1
        }
      ),
      []
    ),
    t
  )
}
function el() {
  const t = ji(),
    [e, n] = v.useState(0),
    s = v.useCallback(() => {
      t.current && n(e + 1)
    }, [e])
  return [v.useCallback(() => S.postRender(s), [s]), e]
}
class nl extends v.Component {
  getSnapshotBeforeUpdate(e) {
    const n = this.props.childRef.current
    if (n && e.isPresent && !this.props.isPresent) {
      const s = this.props.sizeRef.current
      ;(s.height = n.offsetHeight || 0),
        (s.width = n.offsetWidth || 0),
        (s.top = n.offsetTop),
        (s.left = n.offsetLeft)
    }
    return null
  }
  componentDidUpdate() {}
  render() {
    return this.props.children
  }
}
function sl({ children: t, isPresent: e }) {
  const n = v.useId(),
    s = v.useRef(null),
    i = v.useRef({ width: 0, height: 0, top: 0, left: 0 })
  return (
    v.useInsertionEffect(() => {
      const { width: o, height: r, top: a, left: c } = i.current
      if (e || !s.current || !o || !r) return
      s.current.dataset.motionPopId = n
      const l = document.createElement('style')
      return (
        document.head.appendChild(l),
        l.sheet &&
          l.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${r}px !important;
            top: ${a}px !important;
            left: ${c}px !important;
          }
        `),
        () => {
          document.head.removeChild(l)
        }
      )
    }, [e]),
    v.createElement(nl, { isPresent: e, childRef: s, sizeRef: i }, v.cloneElement(t, { ref: s }))
  )
}
const Te = ({
  children: t,
  initial: e,
  isPresent: n,
  onExitComplete: s,
  custom: i,
  presenceAffectsLayout: o,
  mode: r
}) => {
  const a = Es(il),
    c = v.useId(),
    l = v.useMemo(
      () => ({
        id: c,
        initial: e,
        isPresent: n,
        custom: i,
        onExitComplete: (u) => {
          a.set(u, !0)
          for (const h of a.values()) if (!h) return
          s && s()
        },
        register: (u) => (a.set(u, !1), () => a.delete(u))
      }),
      o ? void 0 : [n]
    )
  return (
    v.useMemo(() => {
      a.forEach((u, h) => a.set(h, !1))
    }, [n]),
    v.useEffect(() => {
      !n && !a.size && s && s()
    }, [n]),
    r === 'popLayout' && (t = v.createElement(sl, { isPresent: n }, t)),
    v.createElement(ee.Provider, { value: l }, t)
  )
}
function il() {
  return new Map()
}
function rl(t) {
  return v.useEffect(() => () => t(), [])
}
const dt = (t) => t.key || ''
function ol(t, e) {
  t.forEach((n) => {
    const s = dt(n)
    e.set(s, n)
  })
}
function al(t) {
  const e = []
  return (
    v.Children.forEach(t, (n) => {
      v.isValidElement(n) && e.push(n)
    }),
    e
  )
}
const cl = ({
  children: t,
  custom: e,
  initial: n = !0,
  onExitComplete: s,
  exitBeforeEnter: i,
  presenceAffectsLayout: o = !0,
  mode: r = 'sync'
}) => {
  const a = v.useContext(Oe).forceRender || el()[0],
    c = ji(),
    l = al(t)
  let u = l
  const h = v.useRef(new Map()).current,
    f = v.useRef(u),
    d = v.useRef(new Map()).current,
    m = v.useRef(!0)
  if (
    (ke(() => {
      ;(m.current = !1), ol(l, d), (f.current = u)
    }),
    rl(() => {
      ;(m.current = !0), d.clear(), h.clear()
    }),
    m.current)
  )
    return v.createElement(
      v.Fragment,
      null,
      u.map((g) =>
        v.createElement(
          Te,
          {
            key: dt(g),
            isPresent: !0,
            initial: n ? void 0 : !1,
            presenceAffectsLayout: o,
            mode: r
          },
          g
        )
      )
    )
  u = [...u]
  const y = f.current.map(dt),
    x = l.map(dt),
    V = y.length
  for (let g = 0; g < V; g++) {
    const p = y[g]
    x.indexOf(p) === -1 && !h.has(p) && h.set(p, void 0)
  }
  return (
    r === 'wait' && h.size && (u = []),
    h.forEach((g, p) => {
      if (x.indexOf(p) !== -1) return
      const T = d.get(p)
      if (!T) return
      const b = y.indexOf(p)
      let L = g
      if (!L) {
        const A = () => {
          d.delete(p), h.delete(p)
          const C = f.current.findIndex((w) => w.key === p)
          if ((f.current.splice(C, 1), !h.size)) {
            if (((f.current = l), c.current === !1)) return
            a(), s && s()
          }
        }
        ;(L = v.createElement(
          Te,
          {
            key: dt(T),
            isPresent: !1,
            onExitComplete: A,
            custom: e,
            presenceAffectsLayout: o,
            mode: r
          },
          T
        )),
          h.set(p, L)
      }
      u.splice(b, 0, L)
    }),
    (u = u.map((g) => {
      const p = g.key
      return h.has(p)
        ? g
        : v.createElement(Te, { key: dt(g), isPresent: !0, presenceAffectsLayout: o, mode: r }, g)
    })),
    v.createElement(v.Fragment, null, h.size ? u : u.map((g) => v.cloneElement(g)))
  )
}
const ml = () => {
  const [t, e] = v.useState('')
  return B(Gi, {
    title: '主页',
    source: '主页可以作为您的工作台',
    children: It('div', {
      className: 'card-layout',
      children: [
        It('div', {
          className: 'card-box',
          children: [
            B(zt.div, {
              layoutId: '1',
              onClick: () => e('1'),
              children: B(Ot, { title: '数据展示', bordered: !1, children: B($i, {}) })
            }),
            B(zt.div, {
              layoutId: '2',
              onClick: () => e('2'),
              children: It(Ot, {
                title: '直播数据',
                bordered: !1,
                style: { width: 300 },
                children: [
                  B('p', { children: 'Card content' }),
                  B('p', { children: 'Card content' }),
                  B('p', { children: 'Card content' })
                ]
              })
            }),
            B(zt.div, {
              layoutId: '3',
              onClick: () => e('3'),
              children: It(Ot, {
                title: '收益数据',
                bordered: !1,
                style: { width: 300 },
                children: [
                  B('p', { children: 'Card content' }),
                  B('p', { children: 'Card content' }),
                  B('p', { children: 'Card content' })
                ]
              })
            })
          ]
        }),
        B(cl, {
          children:
            t &&
            B('div', {
              className: 'mask-card-box',
              children: B(zt.div, {
                layoutId: t,
                children: B(Ot, {
                  title: 'Card title',
                  extra: B(Ki, {
                    onClick: () => {
                      e('')
                    }
                  }),
                  bordered: !1,
                  style: { width: 400 },
                  children: B('p', { children: t })
                })
              })
            })
        }),
        t && B('div', { className: 'mask-f' })
      ]
    })
  })
}
export { ml as default }
//# sourceMappingURL=index-6f92f71e.js.map

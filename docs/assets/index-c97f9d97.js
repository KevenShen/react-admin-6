import {
  r as se,
  R as hr,
  a as Is,
  b as Vl,
  c as Gl,
  d as Wt,
  j as ve,
  I as Yl
} from './index-7ec5c925.js'
import { P as ql, C as Ql } from './index-75272ee3.js'
import { C as Zl } from './index-16b13495.js'
import './PlusOutlined-b08ffc51.js'
/**!
 * Sortable 1.15.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */ function vi(n, e) {
  var t = Object.keys(n)
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n)
    e &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(n, i).enumerable
      })),
      t.push.apply(t, r)
  }
  return t
}
function Se(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {}
    e % 2
      ? vi(Object(t), !0).forEach(function (r) {
          Xl(n, r, t[r])
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
      : vi(Object(t)).forEach(function (r) {
          Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r))
        })
  }
  return n
}
function nn(n) {
  '@babel/helpers - typeof'
  return (
    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
      ? (nn = function (e) {
          return typeof e
        })
      : (nn = function (e) {
          return e &&
            typeof Symbol == 'function' &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? 'symbol'
            : typeof e
        }),
    nn(n)
  )
}
function Xl(n, e, t) {
  return (
    e in n
      ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 })
      : (n[e] = t),
    n
  )
}
function Re() {
  return (
    (Re =
      Object.assign ||
      function (n) {
        for (var e = 1; e < arguments.length; e++) {
          var t = arguments[e]
          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r])
        }
        return n
      }),
    Re.apply(this, arguments)
  )
}
function $l(n, e) {
  if (n == null) return {}
  var t = {},
    r = Object.keys(n),
    i,
    s
  for (s = 0; s < r.length; s++) (i = r[s]), !(e.indexOf(i) >= 0) && (t[i] = n[i])
  return t
}
function Jl(n, e) {
  if (n == null) return {}
  var t = $l(n, e),
    r,
    i
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(n)
    for (i = 0; i < s.length; i++)
      (r = s[i]),
        !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(n, r) && (t[r] = n[r])
  }
  return t
}
var Kl = '1.15.0'
function Ce(n) {
  if (typeof window < 'u' && window.navigator) return !!navigator.userAgent.match(n)
}
var Ie = Ce(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),
  Pt = Ce(/Edge/i),
  bi = Ce(/firefox/i),
  wt = Ce(/safari/i) && !Ce(/chrome/i) && !Ce(/android/i),
  Ms = Ce(/iP(ad|od|hone)/i),
  ks = Ce(/chrome/i) && Ce(/android/i),
  Os = { capture: !1, passive: !1 }
function H(n, e, t) {
  n.addEventListener(e, t, !Ie && Os)
}
function N(n, e, t) {
  n.removeEventListener(e, t, !Ie && Os)
}
function hn(n, e) {
  if (e) {
    if ((e[0] === '>' && (e = e.substring(1)), n))
      try {
        if (n.matches) return n.matches(e)
        if (n.msMatchesSelector) return n.msMatchesSelector(e)
        if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e)
      } catch {
        return !1
      }
    return !1
  }
}
function ea(n) {
  return n.host && n !== document && n.host.nodeType ? n.host : n.parentNode
}
function be(n, e, t, r) {
  if (n) {
    t = t || document
    do {
      if (
        (e != null && (e[0] === '>' ? n.parentNode === t && hn(n, e) : hn(n, e))) ||
        (r && n === t)
      )
        return n
      if (n === t) break
    } while ((n = ea(n)))
  }
  return null
}
var yi = /\s+/g
function re(n, e, t) {
  if (n && e)
    if (n.classList) n.classList[t ? 'add' : 'remove'](e)
    else {
      var r = (' ' + n.className + ' ').replace(yi, ' ').replace(' ' + e + ' ', ' ')
      n.className = (r + (t ? ' ' + e : '')).replace(yi, ' ')
    }
}
function R(n, e, t) {
  var r = n && n.style
  if (r) {
    if (t === void 0)
      return (
        document.defaultView && document.defaultView.getComputedStyle
          ? (t = document.defaultView.getComputedStyle(n, ''))
          : n.currentStyle && (t = n.currentStyle),
        e === void 0 ? t : t[e]
      )
    !(e in r) && e.indexOf('webkit') === -1 && (e = '-webkit-' + e),
      (r[e] = t + (typeof t == 'string' ? '' : 'px'))
  }
}
function dt(n, e) {
  var t = ''
  if (typeof n == 'string') t = n
  else
    do {
      var r = R(n, 'transform')
      r && r !== 'none' && (t = r + ' ' + t)
    } while (!e && (n = n.parentNode))
  var i = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix
  return i && new i(t)
}
function Ns(n, e, t) {
  if (n) {
    var r = n.getElementsByTagName(e),
      i = 0,
      s = r.length
    if (t) for (; i < s; i++) t(r[i], i)
    return r
  }
  return []
}
function Ee() {
  var n = document.scrollingElement
  return n || document.documentElement
}
function q(n, e, t, r, i) {
  if (!(!n.getBoundingClientRect && n !== window)) {
    var s, o, l, a, c, d, u
    if (
      (n !== window && n.parentNode && n !== Ee()
        ? ((s = n.getBoundingClientRect()),
          (o = s.top),
          (l = s.left),
          (a = s.bottom),
          (c = s.right),
          (d = s.height),
          (u = s.width))
        : ((o = 0),
          (l = 0),
          (a = window.innerHeight),
          (c = window.innerWidth),
          (d = window.innerHeight),
          (u = window.innerWidth)),
      (e || t) && n !== window && ((i = i || n.parentNode), !Ie))
    )
      do
        if (
          i &&
          i.getBoundingClientRect &&
          (R(i, 'transform') !== 'none' || (t && R(i, 'position') !== 'static'))
        ) {
          var h = i.getBoundingClientRect()
          ;(o -= h.top + parseInt(R(i, 'border-top-width'))),
            (l -= h.left + parseInt(R(i, 'border-left-width'))),
            (a = o + s.height),
            (c = l + s.width)
          break
        }
      while ((i = i.parentNode))
    if (r && n !== window) {
      var f = dt(i || n),
        p = f && f.a,
        m = f && f.d
      f && ((o /= m), (l /= p), (u /= p), (d /= m), (a = o + d), (c = l + u))
    }
    return { top: o, left: l, bottom: a, right: c, width: u, height: d }
  }
}
function Ei(n, e, t) {
  for (var r = He(n, !0), i = q(n)[e]; r; ) {
    var s = q(r)[t],
      o = void 0
    if ((t === 'top' || t === 'left' ? (o = i >= s) : (o = i <= s), !o)) return r
    if (r === Ee()) break
    r = He(r, !1)
  }
  return !1
}
function gt(n, e, t, r) {
  for (var i = 0, s = 0, o = n.children; s < o.length; ) {
    if (
      o[s].style.display !== 'none' &&
      o[s] !== T.ghost &&
      (r || o[s] !== T.dragged) &&
      be(o[s], t.draggable, n, !1)
    ) {
      if (i === e) return o[s]
      i++
    }
    s++
  }
  return null
}
function Nr(n, e) {
  for (
    var t = n.lastElementChild;
    t && (t === T.ghost || R(t, 'display') === 'none' || (e && !hn(t, e)));

  )
    t = t.previousElementSibling
  return t || null
}
function ue(n, e) {
  var t = 0
  if (!n || !n.parentNode) return -1
  for (; (n = n.previousElementSibling); )
    n.nodeName.toUpperCase() !== 'TEMPLATE' && n !== T.clone && (!e || hn(n, e)) && t++
  return t
}
function Si(n) {
  var e = 0,
    t = 0,
    r = Ee()
  if (n)
    do {
      var i = dt(n),
        s = i.a,
        o = i.d
      ;(e += n.scrollLeft * s), (t += n.scrollTop * o)
    } while (n !== r && (n = n.parentNode))
  return [e, t]
}
function ta(n, e) {
  for (var t in n)
    if (n.hasOwnProperty(t)) {
      for (var r in e) if (e.hasOwnProperty(r) && e[r] === n[t][r]) return Number(t)
    }
  return -1
}
function He(n, e) {
  if (!n || !n.getBoundingClientRect) return Ee()
  var t = n,
    r = !1
  do
    if (t.clientWidth < t.scrollWidth || t.clientHeight < t.scrollHeight) {
      var i = R(t)
      if (
        (t.clientWidth < t.scrollWidth && (i.overflowX == 'auto' || i.overflowX == 'scroll')) ||
        (t.clientHeight < t.scrollHeight && (i.overflowY == 'auto' || i.overflowY == 'scroll'))
      ) {
        if (!t.getBoundingClientRect || t === document.body) return Ee()
        if (r || e) return t
        r = !0
      }
    }
  while ((t = t.parentNode))
  return Ee()
}
function na(n, e) {
  if (n && e) for (var t in e) e.hasOwnProperty(t) && (n[t] = e[t])
  return n
}
function zn(n, e) {
  return (
    Math.round(n.top) === Math.round(e.top) &&
    Math.round(n.left) === Math.round(e.left) &&
    Math.round(n.height) === Math.round(e.height) &&
    Math.round(n.width) === Math.round(e.width)
  )
}
var Ct
function Ps(n, e) {
  return function () {
    if (!Ct) {
      var t = arguments,
        r = this
      t.length === 1 ? n.call(r, t[0]) : n.apply(r, t),
        (Ct = setTimeout(function () {
          Ct = void 0
        }, e))
    }
  }
}
function ra() {
  clearTimeout(Ct), (Ct = void 0)
}
function Hs(n, e, t) {
  ;(n.scrollLeft += e), (n.scrollTop += t)
}
function Bs(n) {
  var e = window.Polymer,
    t = window.jQuery || window.Zepto
  return e && e.dom ? e.dom(n).cloneNode(!0) : t ? t(n).clone(!0)[0] : n.cloneNode(!0)
}
var oe = 'Sortable' + new Date().getTime()
function ia() {
  var n = [],
    e
  return {
    captureAnimationState: function () {
      if (((n = []), !!this.options.animation)) {
        var r = [].slice.call(this.el.children)
        r.forEach(function (i) {
          if (!(R(i, 'display') === 'none' || i === T.ghost)) {
            n.push({ target: i, rect: q(i) })
            var s = Se({}, n[n.length - 1].rect)
            if (i.thisAnimationDuration) {
              var o = dt(i, !0)
              o && ((s.top -= o.f), (s.left -= o.e))
            }
            i.fromRect = s
          }
        })
      }
    },
    addAnimationState: function (r) {
      n.push(r)
    },
    removeAnimationState: function (r) {
      n.splice(ta(n, { target: r }), 1)
    },
    animateAll: function (r) {
      var i = this
      if (!this.options.animation) {
        clearTimeout(e), typeof r == 'function' && r()
        return
      }
      var s = !1,
        o = 0
      n.forEach(function (l) {
        var a = 0,
          c = l.target,
          d = c.fromRect,
          u = q(c),
          h = c.prevFromRect,
          f = c.prevToRect,
          p = l.rect,
          m = dt(c, !0)
        m && ((u.top -= m.f), (u.left -= m.e)),
          (c.toRect = u),
          c.thisAnimationDuration &&
            zn(h, u) &&
            !zn(d, u) &&
            (p.top - u.top) / (p.left - u.left) === (d.top - u.top) / (d.left - u.left) &&
            (a = oa(p, h, f, i.options)),
          zn(u, d) ||
            ((c.prevFromRect = d),
            (c.prevToRect = u),
            a || (a = i.options.animation),
            i.animate(c, p, u, a)),
          a &&
            ((s = !0),
            (o = Math.max(o, a)),
            clearTimeout(c.animationResetTimer),
            (c.animationResetTimer = setTimeout(function () {
              ;(c.animationTime = 0),
                (c.prevFromRect = null),
                (c.fromRect = null),
                (c.prevToRect = null),
                (c.thisAnimationDuration = null)
            }, a)),
            (c.thisAnimationDuration = a))
      }),
        clearTimeout(e),
        s
          ? (e = setTimeout(function () {
              typeof r == 'function' && r()
            }, o))
          : typeof r == 'function' && r(),
        (n = [])
    },
    animate: function (r, i, s, o) {
      if (o) {
        R(r, 'transition', ''), R(r, 'transform', '')
        var l = dt(this.el),
          a = l && l.a,
          c = l && l.d,
          d = (i.left - s.left) / (a || 1),
          u = (i.top - s.top) / (c || 1)
        ;(r.animatingX = !!d),
          (r.animatingY = !!u),
          R(r, 'transform', 'translate3d(' + d + 'px,' + u + 'px,0)'),
          (this.forRepaintDummy = sa(r)),
          R(
            r,
            'transition',
            'transform ' + o + 'ms' + (this.options.easing ? ' ' + this.options.easing : '')
          ),
          R(r, 'transform', 'translate3d(0,0,0)'),
          typeof r.animated == 'number' && clearTimeout(r.animated),
          (r.animated = setTimeout(function () {
            R(r, 'transition', ''),
              R(r, 'transform', ''),
              (r.animated = !1),
              (r.animatingX = !1),
              (r.animatingY = !1)
          }, o))
      }
    }
  }
}
function sa(n) {
  return n.offsetWidth
}
function oa(n, e, t, r) {
  return (
    (Math.sqrt(Math.pow(e.top - n.top, 2) + Math.pow(e.left - n.left, 2)) /
      Math.sqrt(Math.pow(e.top - t.top, 2) + Math.pow(e.left - t.left, 2))) *
    r.animation
  )
}
var it = [],
  Wn = { initializeByDefault: !0 },
  Ht = {
    mount: function (e) {
      for (var t in Wn) Wn.hasOwnProperty(t) && !(t in e) && (e[t] = Wn[t])
      it.forEach(function (r) {
        if (r.pluginName === e.pluginName)
          throw 'Sortable: Cannot mount plugin '.concat(e.pluginName, ' more than once')
      }),
        it.push(e)
    },
    pluginEvent: function (e, t, r) {
      var i = this
      ;(this.eventCanceled = !1),
        (r.cancel = function () {
          i.eventCanceled = !0
        })
      var s = e + 'Global'
      it.forEach(function (o) {
        t[o.pluginName] &&
          (t[o.pluginName][s] && t[o.pluginName][s](Se({ sortable: t }, r)),
          t.options[o.pluginName] &&
            t[o.pluginName][e] &&
            t[o.pluginName][e](Se({ sortable: t }, r)))
      })
    },
    initializePlugins: function (e, t, r, i) {
      it.forEach(function (l) {
        var a = l.pluginName
        if (!(!e.options[a] && !l.initializeByDefault)) {
          var c = new l(e, t, e.options)
          ;(c.sortable = e), (c.options = e.options), (e[a] = c), Re(r, c.defaults)
        }
      })
      for (var s in e.options)
        if (e.options.hasOwnProperty(s)) {
          var o = this.modifyOption(e, s, e.options[s])
          typeof o < 'u' && (e.options[s] = o)
        }
    },
    getEventProperties: function (e, t) {
      var r = {}
      return (
        it.forEach(function (i) {
          typeof i.eventProperties == 'function' &&
            Re(r, i.eventProperties.call(t[i.pluginName], e))
        }),
        r
      )
    },
    modifyOption: function (e, t, r) {
      var i
      return (
        it.forEach(function (s) {
          e[s.pluginName] &&
            s.optionListeners &&
            typeof s.optionListeners[t] == 'function' &&
            (i = s.optionListeners[t].call(e[s.pluginName], r))
        }),
        i
      )
    }
  }
function la(n) {
  var e = n.sortable,
    t = n.rootEl,
    r = n.name,
    i = n.targetEl,
    s = n.cloneEl,
    o = n.toEl,
    l = n.fromEl,
    a = n.oldIndex,
    c = n.newIndex,
    d = n.oldDraggableIndex,
    u = n.newDraggableIndex,
    h = n.originalEvent,
    f = n.putSortable,
    p = n.extraEventProperties
  if (((e = e || (t && t[oe])), !!e)) {
    var m,
      b = e.options,
      y = 'on' + r.charAt(0).toUpperCase() + r.substr(1)
    window.CustomEvent && !Ie && !Pt
      ? (m = new CustomEvent(r, { bubbles: !0, cancelable: !0 }))
      : ((m = document.createEvent('Event')), m.initEvent(r, !0, !0)),
      (m.to = o || t),
      (m.from = l || t),
      (m.item = i || t),
      (m.clone = s),
      (m.oldIndex = a),
      (m.newIndex = c),
      (m.oldDraggableIndex = d),
      (m.newDraggableIndex = u),
      (m.originalEvent = h),
      (m.pullMode = f ? f.lastPutMode : void 0)
    var E = Se(Se({}, p), Ht.getEventProperties(r, e))
    for (var w in E) m[w] = E[w]
    t && t.dispatchEvent(m), b[y] && b[y].call(e, m)
  }
}
var aa = ['evt'],
  ee = function (e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      i = r.evt,
      s = Jl(r, aa)
    Ht.pluginEvent.bind(T)(
      e,
      t,
      Se(
        {
          dragEl: S,
          parentEl: G,
          ghostEl: I,
          rootEl: U,
          nextEl: Ye,
          lastDownEl: rn,
          cloneEl: W,
          cloneHidden: Pe,
          dragStarted: St,
          putSortable: Q,
          activeSortable: T.active,
          originalEvent: i,
          oldIndex: at,
          oldDraggableIndex: _t,
          newIndex: ie,
          newDraggableIndex: Ne,
          hideGhostForTarget: Us,
          unhideGhostForTarget: zs,
          cloneNowHidden: function () {
            Pe = !0
          },
          cloneNowShown: function () {
            Pe = !1
          },
          dispatchSortableEvent: function (l) {
            J({ sortable: t, name: l, originalEvent: i })
          }
        },
        s
      )
    )
  }
function J(n) {
  la(
    Se(
      {
        putSortable: Q,
        cloneEl: W,
        targetEl: S,
        rootEl: U,
        oldIndex: at,
        oldDraggableIndex: _t,
        newIndex: ie,
        newDraggableIndex: Ne
      },
      n
    )
  )
}
var S,
  G,
  I,
  U,
  Ye,
  rn,
  W,
  Pe,
  at,
  ie,
  _t,
  Ne,
  Vt,
  Q,
  ot = !1,
  gn = !1,
  pn = [],
  Ve,
  he,
  Vn,
  Gn,
  Ai,
  Di,
  St,
  st,
  Rt,
  Tt = !1,
  Gt = !1,
  sn,
  Z,
  Yn = [],
  gr = !1,
  mn = [],
  On = typeof document < 'u',
  Yt = Ms,
  wi = Pt || Ie ? 'cssFloat' : 'float',
  ca = On && !ks && !Ms && 'draggable' in document.createElement('div'),
  Ls = (function () {
    if (On) {
      if (Ie) return !1
      var n = document.createElement('x')
      return (n.style.cssText = 'pointer-events:auto'), n.style.pointerEvents === 'auto'
    }
  })(),
  Fs = function (e, t) {
    var r = R(e),
      i =
        parseInt(r.width) -
        parseInt(r.paddingLeft) -
        parseInt(r.paddingRight) -
        parseInt(r.borderLeftWidth) -
        parseInt(r.borderRightWidth),
      s = gt(e, 0, t),
      o = gt(e, 1, t),
      l = s && R(s),
      a = o && R(o),
      c = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + q(s).width,
      d = a && parseInt(a.marginLeft) + parseInt(a.marginRight) + q(o).width
    if (r.display === 'flex')
      return r.flexDirection === 'column' || r.flexDirection === 'column-reverse'
        ? 'vertical'
        : 'horizontal'
    if (r.display === 'grid')
      return r.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal'
    if (s && l.float && l.float !== 'none') {
      var u = l.float === 'left' ? 'left' : 'right'
      return o && (a.clear === 'both' || a.clear === u) ? 'vertical' : 'horizontal'
    }
    return s &&
      (l.display === 'block' ||
        l.display === 'flex' ||
        l.display === 'table' ||
        l.display === 'grid' ||
        (c >= i && r[wi] === 'none') ||
        (o && r[wi] === 'none' && c + d > i))
      ? 'vertical'
      : 'horizontal'
  },
  da = function (e, t, r) {
    var i = r ? e.left : e.top,
      s = r ? e.right : e.bottom,
      o = r ? e.width : e.height,
      l = r ? t.left : t.top,
      a = r ? t.right : t.bottom,
      c = r ? t.width : t.height
    return i === l || s === a || i + o / 2 === l + c / 2
  },
  ua = function (e, t) {
    var r
    return (
      pn.some(function (i) {
        var s = i[oe].options.emptyInsertThreshold
        if (!(!s || Nr(i))) {
          var o = q(i),
            l = e >= o.left - s && e <= o.right + s,
            a = t >= o.top - s && t <= o.bottom + s
          if (l && a) return (r = i)
        }
      }),
      r
    )
  },
  js = function (e) {
    function t(s, o) {
      return function (l, a, c, d) {
        var u =
          l.options.group.name &&
          a.options.group.name &&
          l.options.group.name === a.options.group.name
        if (s == null && (o || u)) return !0
        if (s == null || s === !1) return !1
        if (o && s === 'clone') return s
        if (typeof s == 'function') return t(s(l, a, c, d), o)(l, a, c, d)
        var h = (o ? l : a).options.group.name
        return s === !0 || (typeof s == 'string' && s === h) || (s.join && s.indexOf(h) > -1)
      }
    }
    var r = {},
      i = e.group
    ;(!i || nn(i) != 'object') && (i = { name: i }),
      (r.name = i.name),
      (r.checkPull = t(i.pull, !0)),
      (r.checkPut = t(i.put)),
      (r.revertClone = i.revertClone),
      (e.group = r)
  },
  Us = function () {
    !Ls && I && R(I, 'display', 'none')
  },
  zs = function () {
    !Ls && I && R(I, 'display', '')
  }
On &&
  !ks &&
  document.addEventListener(
    'click',
    function (n) {
      if (gn)
        return (
          n.preventDefault(),
          n.stopPropagation && n.stopPropagation(),
          n.stopImmediatePropagation && n.stopImmediatePropagation(),
          (gn = !1),
          !1
        )
    },
    !0
  )
var Ge = function (e) {
    if (S) {
      e = e.touches ? e.touches[0] : e
      var t = ua(e.clientX, e.clientY)
      if (t) {
        var r = {}
        for (var i in e) e.hasOwnProperty(i) && (r[i] = e[i])
        ;(r.target = r.rootEl = t),
          (r.preventDefault = void 0),
          (r.stopPropagation = void 0),
          t[oe]._onDragOver(r)
      }
    }
  },
  fa = function (e) {
    S && S.parentNode[oe]._isOutsideThisEl(e.target)
  }
function T(n, e) {
  if (!(n && n.nodeType && n.nodeType === 1))
    throw 'Sortable: `el` must be an HTMLElement, not '.concat({}.toString.call(n))
  ;(this.el = n), (this.options = e = Re({}, e)), (n[oe] = this)
  var t = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(n.nodeName) ? '>li' : '>*',
    swapThreshold: 1,
    invertSwap: !1,
    invertedSwapThreshold: null,
    removeCloneOnHide: !0,
    direction: function () {
      return Fs(n, this.options)
    },
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    dragClass: 'sortable-drag',
    ignore: 'a, img',
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function (o, l) {
      o.setData('Text', l.textContent)
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: 'data-id',
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold:
      (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: 'sortable-fallback',
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: { x: 0, y: 0 },
    supportPointer: T.supportPointer !== !1 && 'PointerEvent' in window && !wt,
    emptyInsertThreshold: 5
  }
  Ht.initializePlugins(this, n, t)
  for (var r in t) !(r in e) && (e[r] = t[r])
  js(e)
  for (var i in this)
    i.charAt(0) === '_' && typeof this[i] == 'function' && (this[i] = this[i].bind(this))
  ;(this.nativeDraggable = e.forceFallback ? !1 : ca),
    this.nativeDraggable && (this.options.touchStartThreshold = 1),
    e.supportPointer
      ? H(n, 'pointerdown', this._onTapStart)
      : (H(n, 'mousedown', this._onTapStart), H(n, 'touchstart', this._onTapStart)),
    this.nativeDraggable && (H(n, 'dragover', this), H(n, 'dragenter', this)),
    pn.push(this.el),
    e.store && e.store.get && this.sort(e.store.get(this) || []),
    Re(this, ia())
}
T.prototype = {
  constructor: T,
  _isOutsideThisEl: function (e) {
    !this.el.contains(e) && e !== this.el && (st = null)
  },
  _getDirection: function (e, t) {
    return typeof this.options.direction == 'function'
      ? this.options.direction.call(this, e, t, S)
      : this.options.direction
  },
  _onTapStart: function (e) {
    if (e.cancelable) {
      var t = this,
        r = this.el,
        i = this.options,
        s = i.preventOnFilter,
        o = e.type,
        l = (e.touches && e.touches[0]) || (e.pointerType && e.pointerType === 'touch' && e),
        a = (l || e).target,
        c =
          (e.target.shadowRoot &&
            ((e.path && e.path[0]) || (e.composedPath && e.composedPath()[0]))) ||
          a,
        d = i.filter
      if (
        (Ea(r),
        !S &&
          !((/mousedown|pointerdown/.test(o) && e.button !== 0) || i.disabled) &&
          !c.isContentEditable &&
          !(!this.nativeDraggable && wt && a && a.tagName.toUpperCase() === 'SELECT') &&
          ((a = be(a, i.draggable, r, !1)), !(a && a.animated) && rn !== a))
      ) {
        if (((at = ue(a)), (_t = ue(a, i.draggable)), typeof d == 'function')) {
          if (d.call(this, e, a, this)) {
            J({ sortable: t, rootEl: c, name: 'filter', targetEl: a, toEl: r, fromEl: r }),
              ee('filter', t, { evt: e }),
              s && e.cancelable && e.preventDefault()
            return
          }
        } else if (
          d &&
          ((d = d.split(',').some(function (u) {
            if (((u = be(c, u.trim(), r, !1)), u))
              return (
                J({ sortable: t, rootEl: u, name: 'filter', targetEl: a, fromEl: r, toEl: r }),
                ee('filter', t, { evt: e }),
                !0
              )
          })),
          d)
        ) {
          s && e.cancelable && e.preventDefault()
          return
        }
        ;(i.handle && !be(c, i.handle, r, !1)) || this._prepareDragStart(e, l, a)
      }
    }
  },
  _prepareDragStart: function (e, t, r) {
    var i = this,
      s = i.el,
      o = i.options,
      l = s.ownerDocument,
      a
    if (r && !S && r.parentNode === s) {
      var c = q(r)
      if (
        ((U = s),
        (S = r),
        (G = S.parentNode),
        (Ye = S.nextSibling),
        (rn = r),
        (Vt = o.group),
        (T.dragged = S),
        (Ve = { target: S, clientX: (t || e).clientX, clientY: (t || e).clientY }),
        (Ai = Ve.clientX - c.left),
        (Di = Ve.clientY - c.top),
        (this._lastX = (t || e).clientX),
        (this._lastY = (t || e).clientY),
        (S.style['will-change'] = 'all'),
        (a = function () {
          if ((ee('delayEnded', i, { evt: e }), T.eventCanceled)) {
            i._onDrop()
            return
          }
          i._disableDelayedDragEvents(),
            !bi && i.nativeDraggable && (S.draggable = !0),
            i._triggerDragStart(e, t),
            J({ sortable: i, name: 'choose', originalEvent: e }),
            re(S, o.chosenClass, !0)
        }),
        o.ignore.split(',').forEach(function (d) {
          Ns(S, d.trim(), qn)
        }),
        H(l, 'dragover', Ge),
        H(l, 'mousemove', Ge),
        H(l, 'touchmove', Ge),
        H(l, 'mouseup', i._onDrop),
        H(l, 'touchend', i._onDrop),
        H(l, 'touchcancel', i._onDrop),
        bi && this.nativeDraggable && ((this.options.touchStartThreshold = 4), (S.draggable = !0)),
        ee('delayStart', this, { evt: e }),
        o.delay && (!o.delayOnTouchOnly || t) && (!this.nativeDraggable || !(Pt || Ie)))
      ) {
        if (T.eventCanceled) {
          this._onDrop()
          return
        }
        H(l, 'mouseup', i._disableDelayedDrag),
          H(l, 'touchend', i._disableDelayedDrag),
          H(l, 'touchcancel', i._disableDelayedDrag),
          H(l, 'mousemove', i._delayedDragTouchMoveHandler),
          H(l, 'touchmove', i._delayedDragTouchMoveHandler),
          o.supportPointer && H(l, 'pointermove', i._delayedDragTouchMoveHandler),
          (i._dragStartTimer = setTimeout(a, o.delay))
      } else a()
    }
  },
  _delayedDragTouchMoveHandler: function (e) {
    var t = e.touches ? e.touches[0] : e
    Math.max(Math.abs(t.clientX - this._lastX), Math.abs(t.clientY - this._lastY)) >=
      Math.floor(
        this.options.touchStartThreshold / ((this.nativeDraggable && window.devicePixelRatio) || 1)
      ) && this._disableDelayedDrag()
  },
  _disableDelayedDrag: function () {
    S && qn(S), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents()
  },
  _disableDelayedDragEvents: function () {
    var e = this.el.ownerDocument
    N(e, 'mouseup', this._disableDelayedDrag),
      N(e, 'touchend', this._disableDelayedDrag),
      N(e, 'touchcancel', this._disableDelayedDrag),
      N(e, 'mousemove', this._delayedDragTouchMoveHandler),
      N(e, 'touchmove', this._delayedDragTouchMoveHandler),
      N(e, 'pointermove', this._delayedDragTouchMoveHandler)
  },
  _triggerDragStart: function (e, t) {
    ;(t = t || (e.pointerType == 'touch' && e)),
      !this.nativeDraggable || t
        ? this.options.supportPointer
          ? H(document, 'pointermove', this._onTouchMove)
          : t
          ? H(document, 'touchmove', this._onTouchMove)
          : H(document, 'mousemove', this._onTouchMove)
        : (H(S, 'dragend', this), H(U, 'dragstart', this._onDragStart))
    try {
      document.selection
        ? on(function () {
            document.selection.empty()
          })
        : window.getSelection().removeAllRanges()
    } catch {}
  },
  _dragStarted: function (e, t) {
    if (((ot = !1), U && S)) {
      ee('dragStarted', this, { evt: t }), this.nativeDraggable && H(document, 'dragover', fa)
      var r = this.options
      !e && re(S, r.dragClass, !1),
        re(S, r.ghostClass, !0),
        (T.active = this),
        e && this._appendGhost(),
        J({ sortable: this, name: 'start', originalEvent: t })
    } else this._nulling()
  },
  _emulateDragOver: function () {
    if (he) {
      ;(this._lastX = he.clientX), (this._lastY = he.clientY), Us()
      for (
        var e = document.elementFromPoint(he.clientX, he.clientY), t = e;
        e && e.shadowRoot && ((e = e.shadowRoot.elementFromPoint(he.clientX, he.clientY)), e !== t);

      )
        t = e
      if ((S.parentNode[oe]._isOutsideThisEl(e), t))
        do {
          if (t[oe]) {
            var r = void 0
            if (
              ((r = t[oe]._onDragOver({
                clientX: he.clientX,
                clientY: he.clientY,
                target: e,
                rootEl: t
              })),
              r && !this.options.dragoverBubble)
            )
              break
          }
          e = t
        } while ((t = t.parentNode))
      zs()
    }
  },
  _onTouchMove: function (e) {
    if (Ve) {
      var t = this.options,
        r = t.fallbackTolerance,
        i = t.fallbackOffset,
        s = e.touches ? e.touches[0] : e,
        o = I && dt(I, !0),
        l = I && o && o.a,
        a = I && o && o.d,
        c = Yt && Z && Si(Z),
        d = (s.clientX - Ve.clientX + i.x) / (l || 1) + (c ? c[0] - Yn[0] : 0) / (l || 1),
        u = (s.clientY - Ve.clientY + i.y) / (a || 1) + (c ? c[1] - Yn[1] : 0) / (a || 1)
      if (!T.active && !ot) {
        if (r && Math.max(Math.abs(s.clientX - this._lastX), Math.abs(s.clientY - this._lastY)) < r)
          return
        this._onDragStart(e, !0)
      }
      if (I) {
        o
          ? ((o.e += d - (Vn || 0)), (o.f += u - (Gn || 0)))
          : (o = { a: 1, b: 0, c: 0, d: 1, e: d, f: u })
        var h = 'matrix('
          .concat(o.a, ',')
          .concat(o.b, ',')
          .concat(o.c, ',')
          .concat(o.d, ',')
          .concat(o.e, ',')
          .concat(o.f, ')')
        R(I, 'webkitTransform', h),
          R(I, 'mozTransform', h),
          R(I, 'msTransform', h),
          R(I, 'transform', h),
          (Vn = d),
          (Gn = u),
          (he = s)
      }
      e.cancelable && e.preventDefault()
    }
  },
  _appendGhost: function () {
    if (!I) {
      var e = this.options.fallbackOnBody ? document.body : U,
        t = q(S, !0, Yt, !0, e),
        r = this.options
      if (Yt) {
        for (
          Z = e;
          R(Z, 'position') === 'static' && R(Z, 'transform') === 'none' && Z !== document;

        )
          Z = Z.parentNode
        Z !== document.body && Z !== document.documentElement
          ? (Z === document && (Z = Ee()), (t.top += Z.scrollTop), (t.left += Z.scrollLeft))
          : (Z = Ee()),
          (Yn = Si(Z))
      }
      ;(I = S.cloneNode(!0)),
        re(I, r.ghostClass, !1),
        re(I, r.fallbackClass, !0),
        re(I, r.dragClass, !0),
        R(I, 'transition', ''),
        R(I, 'transform', ''),
        R(I, 'box-sizing', 'border-box'),
        R(I, 'margin', 0),
        R(I, 'top', t.top),
        R(I, 'left', t.left),
        R(I, 'width', t.width),
        R(I, 'height', t.height),
        R(I, 'opacity', '0.8'),
        R(I, 'position', Yt ? 'absolute' : 'fixed'),
        R(I, 'zIndex', '100000'),
        R(I, 'pointerEvents', 'none'),
        (T.ghost = I),
        e.appendChild(I),
        R(
          I,
          'transform-origin',
          (Ai / parseInt(I.style.width)) * 100 + '% ' + (Di / parseInt(I.style.height)) * 100 + '%'
        )
    }
  },
  _onDragStart: function (e, t) {
    var r = this,
      i = e.dataTransfer,
      s = r.options
    if ((ee('dragStart', this, { evt: e }), T.eventCanceled)) {
      this._onDrop()
      return
    }
    ee('setupClone', this),
      T.eventCanceled ||
        ((W = Bs(S)),
        W.removeAttribute('id'),
        (W.draggable = !1),
        (W.style['will-change'] = ''),
        this._hideClone(),
        re(W, this.options.chosenClass, !1),
        (T.clone = W)),
      (r.cloneId = on(function () {
        ee('clone', r),
          !T.eventCanceled &&
            (r.options.removeCloneOnHide || U.insertBefore(W, S),
            r._hideClone(),
            J({ sortable: r, name: 'clone' }))
      })),
      !t && re(S, s.dragClass, !0),
      t
        ? ((gn = !0), (r._loopId = setInterval(r._emulateDragOver, 50)))
        : (N(document, 'mouseup', r._onDrop),
          N(document, 'touchend', r._onDrop),
          N(document, 'touchcancel', r._onDrop),
          i && ((i.effectAllowed = 'move'), s.setData && s.setData.call(r, i, S)),
          H(document, 'drop', r),
          R(S, 'transform', 'translateZ(0)')),
      (ot = !0),
      (r._dragStartId = on(r._dragStarted.bind(r, t, e))),
      H(document, 'selectstart', r),
      (St = !0),
      wt && R(document.body, 'user-select', 'none')
  },
  _onDragOver: function (e) {
    var t = this.el,
      r = e.target,
      i,
      s,
      o,
      l = this.options,
      a = l.group,
      c = T.active,
      d = Vt === a,
      u = l.sort,
      h = Q || c,
      f,
      p = this,
      m = !1
    if (gr) return
    function b(yt, zl) {
      ee(
        yt,
        p,
        Se(
          {
            evt: e,
            isOwner: d,
            axis: f ? 'vertical' : 'horizontal',
            revert: o,
            dragRect: i,
            targetRect: s,
            canSort: u,
            fromSortable: h,
            target: r,
            completed: E,
            onMove: function (mi, Wl) {
              return qt(U, t, S, i, mi, q(mi), e, Wl)
            },
            changed: w
          },
          zl
        )
      )
    }
    function y() {
      b('dragOverAnimationCapture'), p.captureAnimationState(), p !== h && h.captureAnimationState()
    }
    function E(yt) {
      return (
        b('dragOverCompleted', { insertion: yt }),
        yt &&
          (d ? c._hideClone() : c._showClone(p),
          p !== h &&
            (re(S, Q ? Q.options.ghostClass : c.options.ghostClass, !1), re(S, l.ghostClass, !0)),
          Q !== p && p !== T.active ? (Q = p) : p === T.active && Q && (Q = null),
          h === p && (p._ignoreWhileAnimating = r),
          p.animateAll(function () {
            b('dragOverAnimationComplete'), (p._ignoreWhileAnimating = null)
          }),
          p !== h && (h.animateAll(), (h._ignoreWhileAnimating = null))),
        ((r === S && !S.animated) || (r === t && !r.animated)) && (st = null),
        !l.dragoverBubble &&
          !e.rootEl &&
          r !== document &&
          (S.parentNode[oe]._isOutsideThisEl(e.target), !yt && Ge(e)),
        !l.dragoverBubble && e.stopPropagation && e.stopPropagation(),
        (m = !0)
      )
    }
    function w() {
      ;(ie = ue(S)),
        (Ne = ue(S, l.draggable)),
        J({
          sortable: p,
          name: 'change',
          toEl: t,
          newIndex: ie,
          newDraggableIndex: Ne,
          originalEvent: e
        })
    }
    if (
      (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(),
      (r = be(r, l.draggable, t, !0)),
      b('dragOver'),
      T.eventCanceled)
    )
      return m
    if (
      S.contains(e.target) ||
      (r.animated && r.animatingX && r.animatingY) ||
      p._ignoreWhileAnimating === r
    )
      return E(!1)
    if (
      ((gn = !1),
      c &&
        !l.disabled &&
        (d
          ? u || (o = G !== U)
          : Q === this ||
            ((this.lastPutMode = Vt.checkPull(this, c, S, e)) && a.checkPut(this, c, S, e))))
    ) {
      if (
        ((f = this._getDirection(e, r) === 'vertical'),
        (i = q(S)),
        b('dragOverValid'),
        T.eventCanceled)
      )
        return m
      if (o)
        return (
          (G = U),
          y(),
          this._hideClone(),
          b('revert'),
          T.eventCanceled || (Ye ? U.insertBefore(S, Ye) : U.appendChild(S)),
          E(!0)
        )
      var D = Nr(t, l.draggable)
      if (!D || (ma(e, f, this) && !D.animated)) {
        if (D === S) return E(!1)
        if ((D && t === e.target && (r = D), r && (s = q(r)), qt(U, t, S, i, r, s, e, !!r) !== !1))
          return (
            y(),
            D && D.nextSibling ? t.insertBefore(S, D.nextSibling) : t.appendChild(S),
            (G = t),
            w(),
            E(!0)
          )
      } else if (D && pa(e, f, this)) {
        var P = gt(t, 0, l, !0)
        if (P === S) return E(!1)
        if (((r = P), (s = q(r)), qt(U, t, S, i, r, s, e, !1) !== !1))
          return y(), t.insertBefore(S, P), (G = t), w(), E(!0)
      } else if (r.parentNode === t) {
        s = q(r)
        var x = 0,
          k,
          A = S.parentNode !== t,
          O = !da((S.animated && S.toRect) || i, (r.animated && r.toRect) || s, f),
          L = f ? 'top' : 'left',
          ne = Ei(r, 'top', 'top') || Ei(S, 'top', 'top'),
          pe = ne ? ne.scrollTop : void 0
        st !== r && ((k = s[L]), (Tt = !1), (Gt = (!O && l.invertSwap) || A)),
          (x = va(
            e,
            r,
            s,
            f,
            O ? 1 : l.swapThreshold,
            l.invertedSwapThreshold == null ? l.swapThreshold : l.invertedSwapThreshold,
            Gt,
            st === r
          ))
        var de
        if (x !== 0) {
          var me = ue(S)
          do (me -= x), (de = G.children[me])
          while (de && (R(de, 'display') === 'none' || de === I))
        }
        if (x === 0 || de === r) return E(!1)
        ;(st = r), (Rt = x)
        var Oe = r.nextElementSibling,
          fe = !1
        fe = x === 1
        var zt = qt(U, t, S, i, r, s, e, fe)
        if (zt !== !1)
          return (
            (zt === 1 || zt === -1) && (fe = zt === 1),
            (gr = !0),
            setTimeout(ga, 30),
            y(),
            fe && !Oe ? t.appendChild(S) : r.parentNode.insertBefore(S, fe ? Oe : r),
            ne && Hs(ne, 0, pe - ne.scrollTop),
            (G = S.parentNode),
            k !== void 0 && !Gt && (sn = Math.abs(k - q(r)[L])),
            w(),
            E(!0)
          )
      }
      if (t.contains(S)) return E(!1)
    }
    return !1
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function () {
    N(document, 'mousemove', this._onTouchMove),
      N(document, 'touchmove', this._onTouchMove),
      N(document, 'pointermove', this._onTouchMove),
      N(document, 'dragover', Ge),
      N(document, 'mousemove', Ge),
      N(document, 'touchmove', Ge)
  },
  _offUpEvents: function () {
    var e = this.el.ownerDocument
    N(e, 'mouseup', this._onDrop),
      N(e, 'touchend', this._onDrop),
      N(e, 'pointerup', this._onDrop),
      N(e, 'touchcancel', this._onDrop),
      N(document, 'selectstart', this)
  },
  _onDrop: function (e) {
    var t = this.el,
      r = this.options
    if (
      ((ie = ue(S)),
      (Ne = ue(S, r.draggable)),
      ee('drop', this, { evt: e }),
      (G = S && S.parentNode),
      (ie = ue(S)),
      (Ne = ue(S, r.draggable)),
      T.eventCanceled)
    ) {
      this._nulling()
      return
    }
    ;(ot = !1),
      (Gt = !1),
      (Tt = !1),
      clearInterval(this._loopId),
      clearTimeout(this._dragStartTimer),
      pr(this.cloneId),
      pr(this._dragStartId),
      this.nativeDraggable && (N(document, 'drop', this), N(t, 'dragstart', this._onDragStart)),
      this._offMoveEvents(),
      this._offUpEvents(),
      wt && R(document.body, 'user-select', ''),
      R(S, 'transform', ''),
      e &&
        (St && (e.cancelable && e.preventDefault(), !r.dropBubble && e.stopPropagation()),
        I && I.parentNode && I.parentNode.removeChild(I),
        (U === G || (Q && Q.lastPutMode !== 'clone')) &&
          W &&
          W.parentNode &&
          W.parentNode.removeChild(W),
        S &&
          (this.nativeDraggable && N(S, 'dragend', this),
          qn(S),
          (S.style['will-change'] = ''),
          St && !ot && re(S, Q ? Q.options.ghostClass : this.options.ghostClass, !1),
          re(S, this.options.chosenClass, !1),
          J({
            sortable: this,
            name: 'unchoose',
            toEl: G,
            newIndex: null,
            newDraggableIndex: null,
            originalEvent: e
          }),
          U !== G
            ? (ie >= 0 &&
                (J({ rootEl: G, name: 'add', toEl: G, fromEl: U, originalEvent: e }),
                J({ sortable: this, name: 'remove', toEl: G, originalEvent: e }),
                J({ rootEl: G, name: 'sort', toEl: G, fromEl: U, originalEvent: e }),
                J({ sortable: this, name: 'sort', toEl: G, originalEvent: e })),
              Q && Q.save())
            : ie !== at &&
              ie >= 0 &&
              (J({ sortable: this, name: 'update', toEl: G, originalEvent: e }),
              J({ sortable: this, name: 'sort', toEl: G, originalEvent: e })),
          T.active &&
            ((ie == null || ie === -1) && ((ie = at), (Ne = _t)),
            J({ sortable: this, name: 'end', toEl: G, originalEvent: e }),
            this.save()))),
      this._nulling()
  },
  _nulling: function () {
    ee('nulling', this),
      (U =
        S =
        G =
        I =
        Ye =
        W =
        rn =
        Pe =
        Ve =
        he =
        St =
        ie =
        Ne =
        at =
        _t =
        st =
        Rt =
        Q =
        Vt =
        T.dragged =
        T.ghost =
        T.clone =
        T.active =
          null),
      mn.forEach(function (e) {
        e.checked = !0
      }),
      (mn.length = Vn = Gn = 0)
  },
  handleEvent: function (e) {
    switch (e.type) {
      case 'drop':
      case 'dragend':
        this._onDrop(e)
        break
      case 'dragenter':
      case 'dragover':
        S && (this._onDragOver(e), ha(e))
        break
      case 'selectstart':
        e.preventDefault()
        break
    }
  },
  toArray: function () {
    for (var e = [], t, r = this.el.children, i = 0, s = r.length, o = this.options; i < s; i++)
      (t = r[i]), be(t, o.draggable, this.el, !1) && e.push(t.getAttribute(o.dataIdAttr) || ya(t))
    return e
  },
  sort: function (e, t) {
    var r = {},
      i = this.el
    this.toArray().forEach(function (s, o) {
      var l = i.children[o]
      be(l, this.options.draggable, i, !1) && (r[s] = l)
    }, this),
      t && this.captureAnimationState(),
      e.forEach(function (s) {
        r[s] && (i.removeChild(r[s]), i.appendChild(r[s]))
      }),
      t && this.animateAll()
  },
  save: function () {
    var e = this.options.store
    e && e.set && e.set(this)
  },
  closest: function (e, t) {
    return be(e, t || this.options.draggable, this.el, !1)
  },
  option: function (e, t) {
    var r = this.options
    if (t === void 0) return r[e]
    var i = Ht.modifyOption(this, e, t)
    typeof i < 'u' ? (r[e] = i) : (r[e] = t), e === 'group' && js(r)
  },
  destroy: function () {
    ee('destroy', this)
    var e = this.el
    ;(e[oe] = null),
      N(e, 'mousedown', this._onTapStart),
      N(e, 'touchstart', this._onTapStart),
      N(e, 'pointerdown', this._onTapStart),
      this.nativeDraggable && (N(e, 'dragover', this), N(e, 'dragenter', this)),
      Array.prototype.forEach.call(e.querySelectorAll('[draggable]'), function (t) {
        t.removeAttribute('draggable')
      }),
      this._onDrop(),
      this._disableDelayedDragEvents(),
      pn.splice(pn.indexOf(this.el), 1),
      (this.el = e = null)
  },
  _hideClone: function () {
    if (!Pe) {
      if ((ee('hideClone', this), T.eventCanceled)) return
      R(W, 'display', 'none'),
        this.options.removeCloneOnHide && W.parentNode && W.parentNode.removeChild(W),
        (Pe = !0)
    }
  },
  _showClone: function (e) {
    if (e.lastPutMode !== 'clone') {
      this._hideClone()
      return
    }
    if (Pe) {
      if ((ee('showClone', this), T.eventCanceled)) return
      S.parentNode == U && !this.options.group.revertClone
        ? U.insertBefore(W, S)
        : Ye
        ? U.insertBefore(W, Ye)
        : U.appendChild(W),
        this.options.group.revertClone && this.animate(S, W),
        R(W, 'display', ''),
        (Pe = !1)
    }
  }
}
function ha(n) {
  n.dataTransfer && (n.dataTransfer.dropEffect = 'move'), n.cancelable && n.preventDefault()
}
function qt(n, e, t, r, i, s, o, l) {
  var a,
    c = n[oe],
    d = c.options.onMove,
    u
  return (
    window.CustomEvent && !Ie && !Pt
      ? (a = new CustomEvent('move', { bubbles: !0, cancelable: !0 }))
      : ((a = document.createEvent('Event')), a.initEvent('move', !0, !0)),
    (a.to = e),
    (a.from = n),
    (a.dragged = t),
    (a.draggedRect = r),
    (a.related = i || e),
    (a.relatedRect = s || q(e)),
    (a.willInsertAfter = l),
    (a.originalEvent = o),
    n.dispatchEvent(a),
    d && (u = d.call(c, a, o)),
    u
  )
}
function qn(n) {
  n.draggable = !1
}
function ga() {
  gr = !1
}
function pa(n, e, t) {
  var r = q(gt(t.el, 0, t.options, !0)),
    i = 10
  return e
    ? n.clientX < r.left - i || (n.clientY < r.top && n.clientX < r.right)
    : n.clientY < r.top - i || (n.clientY < r.bottom && n.clientX < r.left)
}
function ma(n, e, t) {
  var r = q(Nr(t.el, t.options.draggable)),
    i = 10
  return e
    ? n.clientX > r.right + i ||
        (n.clientX <= r.right && n.clientY > r.bottom && n.clientX >= r.left)
    : (n.clientX > r.right && n.clientY > r.top) ||
        (n.clientX <= r.right && n.clientY > r.bottom + i)
}
function va(n, e, t, r, i, s, o, l) {
  var a = r ? n.clientY : n.clientX,
    c = r ? t.height : t.width,
    d = r ? t.top : t.left,
    u = r ? t.bottom : t.right,
    h = !1
  if (!o) {
    if (l && sn < c * i) {
      if ((!Tt && (Rt === 1 ? a > d + (c * s) / 2 : a < u - (c * s) / 2) && (Tt = !0), Tt)) h = !0
      else if (Rt === 1 ? a < d + sn : a > u - sn) return -Rt
    } else if (a > d + (c * (1 - i)) / 2 && a < u - (c * (1 - i)) / 2) return ba(e)
  }
  return (
    (h = h || o), h && (a < d + (c * s) / 2 || a > u - (c * s) / 2) ? (a > d + c / 2 ? 1 : -1) : 0
  )
}
function ba(n) {
  return ue(S) < ue(n) ? 1 : -1
}
function ya(n) {
  for (var e = n.tagName + n.className + n.src + n.href + n.textContent, t = e.length, r = 0; t--; )
    r += e.charCodeAt(t)
  return r.toString(36)
}
function Ea(n) {
  mn.length = 0
  for (var e = n.getElementsByTagName('input'), t = e.length; t--; ) {
    var r = e[t]
    r.checked && mn.push(r)
  }
}
function on(n) {
  return setTimeout(n, 0)
}
function pr(n) {
  return clearTimeout(n)
}
On &&
  H(document, 'touchmove', function (n) {
    ;(T.active || ot) && n.cancelable && n.preventDefault()
  })
T.utils = {
  on: H,
  off: N,
  css: R,
  find: Ns,
  is: function (e, t) {
    return !!be(e, t, e, !1)
  },
  extend: na,
  throttle: Ps,
  closest: be,
  toggleClass: re,
  clone: Bs,
  index: ue,
  nextTick: on,
  cancelNextTick: pr,
  detectDirection: Fs,
  getChild: gt
}
T.get = function (n) {
  return n[oe]
}
T.mount = function () {
  for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++) e[t] = arguments[t]
  e[0].constructor === Array && (e = e[0]),
    e.forEach(function (r) {
      if (!r.prototype || !r.prototype.constructor)
        throw 'Sortable: Mounted plugin must be a constructor function, not '.concat(
          {}.toString.call(r)
        )
      r.utils && (T.utils = Se(Se({}, T.utils), r.utils)), Ht.mount(r)
    })
}
T.create = function (n, e) {
  return new T(n, e)
}
T.version = Kl
var Y = [],
  At,
  mr,
  vr = !1,
  Qn,
  Zn,
  vn,
  Dt
function Sa() {
  function n() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    }
    for (var e in this)
      e.charAt(0) === '_' && typeof this[e] == 'function' && (this[e] = this[e].bind(this))
  }
  return (
    (n.prototype = {
      dragStarted: function (t) {
        var r = t.originalEvent
        this.sortable.nativeDraggable
          ? H(document, 'dragover', this._handleAutoScroll)
          : this.options.supportPointer
          ? H(document, 'pointermove', this._handleFallbackAutoScroll)
          : r.touches
          ? H(document, 'touchmove', this._handleFallbackAutoScroll)
          : H(document, 'mousemove', this._handleFallbackAutoScroll)
      },
      dragOverCompleted: function (t) {
        var r = t.originalEvent
        !this.options.dragOverBubble && !r.rootEl && this._handleAutoScroll(r)
      },
      drop: function () {
        this.sortable.nativeDraggable
          ? N(document, 'dragover', this._handleAutoScroll)
          : (N(document, 'pointermove', this._handleFallbackAutoScroll),
            N(document, 'touchmove', this._handleFallbackAutoScroll),
            N(document, 'mousemove', this._handleFallbackAutoScroll)),
          Ci(),
          ln(),
          ra()
      },
      nulling: function () {
        ;(vn = mr = At = vr = Dt = Qn = Zn = null), (Y.length = 0)
      },
      _handleFallbackAutoScroll: function (t) {
        this._handleAutoScroll(t, !0)
      },
      _handleAutoScroll: function (t, r) {
        var i = this,
          s = (t.touches ? t.touches[0] : t).clientX,
          o = (t.touches ? t.touches[0] : t).clientY,
          l = document.elementFromPoint(s, o)
        if (((vn = t), r || this.options.forceAutoScrollFallback || Pt || Ie || wt)) {
          Xn(t, this.options, l, r)
          var a = He(l, !0)
          vr &&
            (!Dt || s !== Qn || o !== Zn) &&
            (Dt && Ci(),
            (Dt = setInterval(function () {
              var c = He(document.elementFromPoint(s, o), !0)
              c !== a && ((a = c), ln()), Xn(t, i.options, c, r)
            }, 10)),
            (Qn = s),
            (Zn = o))
        } else {
          if (!this.options.bubbleScroll || He(l, !0) === Ee()) {
            ln()
            return
          }
          Xn(t, this.options, He(l, !1), !1)
        }
      }
    }),
    Re(n, { pluginName: 'scroll', initializeByDefault: !0 })
  )
}
function ln() {
  Y.forEach(function (n) {
    clearInterval(n.pid)
  }),
    (Y = [])
}
function Ci() {
  clearInterval(Dt)
}
var Xn = Ps(function (n, e, t, r) {
    if (e.scroll) {
      var i = (n.touches ? n.touches[0] : n).clientX,
        s = (n.touches ? n.touches[0] : n).clientY,
        o = e.scrollSensitivity,
        l = e.scrollSpeed,
        a = Ee(),
        c = !1,
        d
      mr !== t && ((mr = t), ln(), (At = e.scroll), (d = e.scrollFn), At === !0 && (At = He(t, !0)))
      var u = 0,
        h = At
      do {
        var f = h,
          p = q(f),
          m = p.top,
          b = p.bottom,
          y = p.left,
          E = p.right,
          w = p.width,
          D = p.height,
          P = void 0,
          x = void 0,
          k = f.scrollWidth,
          A = f.scrollHeight,
          O = R(f),
          L = f.scrollLeft,
          ne = f.scrollTop
        f === a
          ? ((P =
              w < k &&
              (O.overflowX === 'auto' || O.overflowX === 'scroll' || O.overflowX === 'visible')),
            (x =
              D < A &&
              (O.overflowY === 'auto' || O.overflowY === 'scroll' || O.overflowY === 'visible')))
          : ((P = w < k && (O.overflowX === 'auto' || O.overflowX === 'scroll')),
            (x = D < A && (O.overflowY === 'auto' || O.overflowY === 'scroll')))
        var pe = P && (Math.abs(E - i) <= o && L + w < k) - (Math.abs(y - i) <= o && !!L),
          de = x && (Math.abs(b - s) <= o && ne + D < A) - (Math.abs(m - s) <= o && !!ne)
        if (!Y[u]) for (var me = 0; me <= u; me++) Y[me] || (Y[me] = {})
        ;(Y[u].vx != pe || Y[u].vy != de || Y[u].el !== f) &&
          ((Y[u].el = f),
          (Y[u].vx = pe),
          (Y[u].vy = de),
          clearInterval(Y[u].pid),
          (pe != 0 || de != 0) &&
            ((c = !0),
            (Y[u].pid = setInterval(
              function () {
                r && this.layer === 0 && T.active._onTouchMove(vn)
                var Oe = Y[this.layer].vy ? Y[this.layer].vy * l : 0,
                  fe = Y[this.layer].vx ? Y[this.layer].vx * l : 0
                ;(typeof d == 'function' &&
                  d.call(T.dragged.parentNode[oe], fe, Oe, n, vn, Y[this.layer].el) !==
                    'continue') ||
                  Hs(Y[this.layer].el, fe, Oe)
              }.bind({ layer: u }),
              24
            )))),
          u++
      } while (e.bubbleScroll && h !== a && (h = He(h, !1)))
      vr = c
    }
  }, 30),
  Ws = function (e) {
    var t = e.originalEvent,
      r = e.putSortable,
      i = e.dragEl,
      s = e.activeSortable,
      o = e.dispatchSortableEvent,
      l = e.hideGhostForTarget,
      a = e.unhideGhostForTarget
    if (t) {
      var c = r || s
      l()
      var d = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t,
        u = document.elementFromPoint(d.clientX, d.clientY)
      a(), c && !c.el.contains(u) && (o('spill'), this.onSpill({ dragEl: i, putSortable: r }))
    }
  }
function Pr() {}
Pr.prototype = {
  startIndex: null,
  dragStart: function (e) {
    var t = e.oldDraggableIndex
    this.startIndex = t
  },
  onSpill: function (e) {
    var t = e.dragEl,
      r = e.putSortable
    this.sortable.captureAnimationState(), r && r.captureAnimationState()
    var i = gt(this.sortable.el, this.startIndex, this.options)
    i ? this.sortable.el.insertBefore(t, i) : this.sortable.el.appendChild(t),
      this.sortable.animateAll(),
      r && r.animateAll()
  },
  drop: Ws
}
Re(Pr, { pluginName: 'revertOnSpill' })
function Hr() {}
Hr.prototype = {
  onSpill: function (e) {
    var t = e.dragEl,
      r = e.putSortable,
      i = r || this.sortable
    i.captureAnimationState(), t.parentNode && t.parentNode.removeChild(t), i.animateAll()
  },
  drop: Ws
}
Re(Hr, { pluginName: 'removeOnSpill' })
T.mount(new Sa())
T.mount(Hr, Pr)
var Aa = {
    code: 'zh-cn',
    week: { dow: 1, doy: 4 },
    buttonText: {
      prev: '上月',
      next: '下月',
      today: '今天',
      year: '年',
      month: '月',
      week: '周',
      day: '日',
      list: '日程'
    },
    weekText: '周',
    allDayText: '全天',
    moreLinkText(n) {
      return '另外 ' + n + ' 个'
    },
    noEventsText: '没有事件显示'
  },
  Nn,
  C,
  Vs,
  Gs,
  pt,
  Ze,
  _i,
  Ys,
  qs,
  bn = {},
  Qs = [],
  Da = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i
function Be(n, e) {
  for (var t in e) n[t] = e[t]
  return n
}
function Zs(n) {
  var e = n.parentNode
  e && e.removeChild(n)
}
function g(n, e, t) {
  var r,
    i,
    s,
    o = {}
  for (s in e) s == 'key' ? (r = e[s]) : s == 'ref' ? (i = e[s]) : (o[s] = e[s])
  if (
    (arguments.length > 2 && (o.children = arguments.length > 3 ? Nn.call(arguments, 2) : t),
    typeof n == 'function' && n.defaultProps != null)
  )
    for (s in n.defaultProps) o[s] === void 0 && (o[s] = n.defaultProps[s])
  return an(n, o, r, i, null)
}
function an(n, e, t, r, i) {
  var s = {
    type: n,
    props: e,
    key: t,
    ref: r,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: i ?? ++Vs
  }
  return i == null && C.vnode != null && C.vnode(s), s
}
function K() {
  return { current: null }
}
function j(n) {
  return n.children
}
function wa(n, e, t, r, i) {
  var s
  for (s in t) s === 'children' || s === 'key' || s in e || yn(n, s, null, t[s], r)
  for (s in e)
    (i && typeof e[s] != 'function') ||
      s === 'children' ||
      s === 'key' ||
      s === 'value' ||
      s === 'checked' ||
      t[s] === e[s] ||
      yn(n, s, e[s], t[s], r)
}
function Ri(n, e, t) {
  e[0] === '-'
    ? n.setProperty(e, t ?? '')
    : (n[e] = t == null ? '' : typeof t != 'number' || Da.test(e) ? t : t + 'px')
}
function yn(n, e, t, r, i) {
  var s
  e: if (e === 'style')
    if (typeof t == 'string') n.style.cssText = t
    else {
      if ((typeof r == 'string' && (n.style.cssText = r = ''), r))
        for (e in r) (t && e in t) || Ri(n.style, e, '')
      if (t) for (e in t) (r && t[e] === r[e]) || Ri(n.style, e, t[e])
    }
  else if (e[0] === 'o' && e[1] === 'n')
    (s = e !== (e = e.replace(/Capture$/, ''))),
      (e = e.toLowerCase() in n ? e.toLowerCase().slice(2) : e.slice(2)),
      n.l || (n.l = {}),
      (n.l[e + s] = t),
      t ? r || n.addEventListener(e, s ? xi : Ti, s) : n.removeEventListener(e, s ? xi : Ti, s)
  else if (e !== 'dangerouslySetInnerHTML') {
    if (i) e = e.replace(/xlink(H|:h)/, 'h').replace(/sName$/, 's')
    else if (
      e !== 'width' &&
      e !== 'height' &&
      e !== 'href' &&
      e !== 'list' &&
      e !== 'form' &&
      e !== 'tabIndex' &&
      e !== 'download' &&
      e in n
    )
      try {
        n[e] = t ?? ''
        break e
      } catch {}
    typeof t == 'function' ||
      (t == null || (t === !1 && e.indexOf('-') == -1)
        ? n.removeAttribute(e)
        : n.setAttribute(e, t))
  }
}
function Ti(n) {
  pt = !0
  try {
    return this.l[n.type + !1](C.event ? C.event(n) : n)
  } finally {
    pt = !1
  }
}
function xi(n) {
  pt = !0
  try {
    return this.l[n.type + !0](C.event ? C.event(n) : n)
  } finally {
    pt = !1
  }
}
function le(n, e) {
  ;(this.props = n), (this.context = e)
}
function kt(n, e) {
  if (e == null) return n.__ ? kt(n.__, n.__.__k.indexOf(n) + 1) : null
  for (var t; e < n.__k.length; e++) if ((t = n.__k[e]) != null && t.__e != null) return t.__e
  return typeof n.type == 'function' ? kt(n) : null
}
function Xs(n) {
  var e, t
  if ((n = n.__) != null && n.__c != null) {
    for (n.__e = n.__c.base = null, e = 0; e < n.__k.length; e++)
      if ((t = n.__k[e]) != null && t.__e != null) {
        n.__e = n.__c.base = t.__e
        break
      }
    return Xs(n)
  }
}
function Ca(n) {
  pt ? setTimeout(n) : Ys(n)
}
function br(n) {
  ;((!n.__d && (n.__d = !0) && Ze.push(n) && !En.__r++) || _i !== C.debounceRendering) &&
    ((_i = C.debounceRendering) || Ca)(En)
}
function En() {
  var n, e, t, r, i, s, o, l
  for (
    Ze.sort(function (a, c) {
      return a.__v.__b - c.__v.__b
    });
    (n = Ze.shift());

  )
    n.__d &&
      ((e = Ze.length),
      (r = void 0),
      (i = void 0),
      (o = (s = (t = n).__v).__e),
      (l = t.__P) &&
        ((r = []),
        ((i = Be({}, s)).__v = s.__v + 1),
        Br(
          l,
          s,
          i,
          t.__n,
          l.ownerSVGElement !== void 0,
          s.__h != null ? [o] : null,
          r,
          o ?? kt(s),
          s.__h
        ),
        to(r, s),
        s.__e != o && Xs(s)),
      Ze.length > e &&
        Ze.sort(function (a, c) {
          return a.__v.__b - c.__v.__b
        }))
  En.__r = 0
}
function $s(n, e, t, r, i, s, o, l, a, c) {
  var d,
    u,
    h,
    f,
    p,
    m,
    b,
    y = (r && r.__k) || Qs,
    E = y.length
  for (t.__k = [], d = 0; d < e.length; d++)
    if (
      (f = t.__k[d] =
        (f = e[d]) == null || typeof f == 'boolean'
          ? null
          : typeof f == 'string' || typeof f == 'number' || typeof f == 'bigint'
          ? an(null, f, null, null, f)
          : Array.isArray(f)
          ? an(j, { children: f }, null, null, null)
          : f.__b > 0
          ? an(f.type, f.props, f.key, f.ref ? f.ref : null, f.__v)
          : f) != null
    ) {
      if (
        ((f.__ = t),
        (f.__b = t.__b + 1),
        (h = y[d]) === null || (h && f.key == h.key && f.type === h.type))
      )
        y[d] = void 0
      else
        for (u = 0; u < E; u++) {
          if ((h = y[u]) && f.key == h.key && f.type === h.type) {
            y[u] = void 0
            break
          }
          h = null
        }
      Br(n, f, (h = h || bn), i, s, o, l, a, c),
        (p = f.__e),
        (u = f.ref) &&
          h.ref != u &&
          (b || (b = []), h.ref && b.push(h.ref, null, f), b.push(u, f.__c || p, f)),
        p != null
          ? (m == null && (m = p),
            typeof f.type == 'function' && f.__k === h.__k
              ? (f.__d = a = Js(f, a, n))
              : (a = Ks(n, f, h, y, p, a)),
            typeof t.type == 'function' && (t.__d = a))
          : a && h.__e == a && a.parentNode != n && (a = kt(h))
    }
  for (t.__e = m, d = E; d--; )
    y[d] != null &&
      (typeof t.type == 'function' &&
        y[d].__e != null &&
        y[d].__e == t.__d &&
        (t.__d = eo(r).nextSibling),
      ro(y[d], y[d]))
  if (b) for (d = 0; d < b.length; d++) no(b[d], b[++d], b[++d])
}
function Js(n, e, t) {
  for (var r, i = n.__k, s = 0; i && s < i.length; s++)
    (r = i[s]) &&
      ((r.__ = n), (e = typeof r.type == 'function' ? Js(r, e, t) : Ks(t, r, r, i, r.__e, e)))
  return e
}
function Sn(n, e) {
  return (
    (e = e || []),
    n == null ||
      typeof n == 'boolean' ||
      (Array.isArray(n)
        ? n.some(function (t) {
            Sn(t, e)
          })
        : e.push(n)),
    e
  )
}
function Ks(n, e, t, r, i, s) {
  var o, l, a
  if (e.__d !== void 0) (o = e.__d), (e.__d = void 0)
  else if (t == null || i != s || i.parentNode == null)
    e: if (s == null || s.parentNode !== n) n.appendChild(i), (o = null)
    else {
      for (l = s, a = 0; (l = l.nextSibling) && a < r.length; a += 1) if (l == i) break e
      n.insertBefore(i, s), (o = s)
    }
  return o !== void 0 ? o : i.nextSibling
}
function eo(n) {
  var e, t, r
  if (n.type == null || typeof n.type == 'string') return n.__e
  if (n.__k) {
    for (e = n.__k.length - 1; e >= 0; e--) if ((t = n.__k[e]) && (r = eo(t))) return r
  }
  return null
}
function Br(n, e, t, r, i, s, o, l, a) {
  var c,
    d,
    u,
    h,
    f,
    p,
    m,
    b,
    y,
    E,
    w,
    D,
    P,
    x,
    k,
    A = e.type
  if (e.constructor !== void 0) return null
  t.__h != null && ((a = t.__h), (l = e.__e = t.__e), (e.__h = null), (s = [l])),
    (c = C.__b) && c(e)
  try {
    e: if (typeof A == 'function') {
      if (
        ((b = e.props),
        (y = (c = A.contextType) && r[c.__c]),
        (E = c ? (y ? y.props.value : c.__) : r),
        t.__c
          ? (m = (d = e.__c = t.__c).__ = d.__E)
          : ('prototype' in A && A.prototype.render
              ? (e.__c = d = new A(b, E))
              : ((e.__c = d = new le(b, E)), (d.constructor = A), (d.render = Ra)),
            y && y.sub(d),
            (d.props = b),
            d.state || (d.state = {}),
            (d.context = E),
            (d.__n = r),
            (u = d.__d = !0),
            (d.__h = []),
            (d._sb = [])),
        d.__s == null && (d.__s = d.state),
        A.getDerivedStateFromProps != null &&
          (d.__s == d.state && (d.__s = Be({}, d.__s)),
          Be(d.__s, A.getDerivedStateFromProps(b, d.__s))),
        (h = d.props),
        (f = d.state),
        (d.__v = e),
        u)
      )
        A.getDerivedStateFromProps == null &&
          d.componentWillMount != null &&
          d.componentWillMount(),
          d.componentDidMount != null && d.__h.push(d.componentDidMount)
      else {
        if (
          (A.getDerivedStateFromProps == null &&
            b !== h &&
            d.componentWillReceiveProps != null &&
            d.componentWillReceiveProps(b, E),
          (!d.__e &&
            d.shouldComponentUpdate != null &&
            d.shouldComponentUpdate(b, d.__s, E) === !1) ||
            e.__v === t.__v)
        ) {
          for (
            e.__v !== t.__v && ((d.props = b), (d.state = d.__s), (d.__d = !1)),
              e.__e = t.__e,
              e.__k = t.__k,
              e.__k.forEach(function (O) {
                O && (O.__ = e)
              }),
              w = 0;
            w < d._sb.length;
            w++
          )
            d.__h.push(d._sb[w])
          ;(d._sb = []), d.__h.length && o.push(d)
          break e
        }
        d.componentWillUpdate != null && d.componentWillUpdate(b, d.__s, E),
          d.componentDidUpdate != null &&
            d.__h.push(function () {
              d.componentDidUpdate(h, f, p)
            })
      }
      if (
        ((d.context = E),
        (d.props = b),
        (d.__P = n),
        (D = C.__r),
        (P = 0),
        'prototype' in A && A.prototype.render)
      ) {
        for (
          d.state = d.__s, d.__d = !1, D && D(e), c = d.render(d.props, d.state, d.context), x = 0;
          x < d._sb.length;
          x++
        )
          d.__h.push(d._sb[x])
        d._sb = []
      } else
        do (d.__d = !1), D && D(e), (c = d.render(d.props, d.state, d.context)), (d.state = d.__s)
        while (d.__d && ++P < 25)
      ;(d.state = d.__s),
        d.getChildContext != null && (r = Be(Be({}, r), d.getChildContext())),
        u || d.getSnapshotBeforeUpdate == null || (p = d.getSnapshotBeforeUpdate(h, f)),
        (k = c != null && c.type === j && c.key == null ? c.props.children : c),
        $s(n, Array.isArray(k) ? k : [k], e, t, r, i, s, o, l, a),
        (d.base = e.__e),
        (e.__h = null),
        d.__h.length && o.push(d),
        m && (d.__E = d.__ = null),
        (d.__e = !1)
    } else
      s == null && e.__v === t.__v
        ? ((e.__k = t.__k), (e.__e = t.__e))
        : (e.__e = _a(t.__e, e, t, r, i, s, o, a))
    ;(c = C.diffed) && c(e)
  } catch (O) {
    ;(e.__v = null),
      (a || s != null) && ((e.__e = l), (e.__h = !!a), (s[s.indexOf(l)] = null)),
      C.__e(O, e, t)
  }
}
function to(n, e) {
  C.__c && C.__c(e, n),
    n.some(function (t) {
      try {
        ;(n = t.__h),
          (t.__h = []),
          n.some(function (r) {
            r.call(t)
          })
      } catch (r) {
        C.__e(r, t.__v)
      }
    })
}
function _a(n, e, t, r, i, s, o, l) {
  var a,
    c,
    d,
    u = t.props,
    h = e.props,
    f = e.type,
    p = 0
  if ((f === 'svg' && (i = !0), s != null)) {
    for (; p < s.length; p++)
      if ((a = s[p]) && 'setAttribute' in a == !!f && (f ? a.localName === f : a.nodeType === 3)) {
        ;(n = a), (s[p] = null)
        break
      }
  }
  if (n == null) {
    if (f === null) return document.createTextNode(h)
    ;(n = i
      ? document.createElementNS('http://www.w3.org/2000/svg', f)
      : document.createElement(f, h.is && h)),
      (s = null),
      (l = !1)
  }
  if (f === null) u === h || (l && n.data === h) || (n.data = h)
  else {
    if (
      ((s = s && Nn.call(n.childNodes)),
      (c = (u = t.props || bn).dangerouslySetInnerHTML),
      (d = h.dangerouslySetInnerHTML),
      !l)
    ) {
      if (s != null)
        for (u = {}, p = 0; p < n.attributes.length; p++)
          u[n.attributes[p].name] = n.attributes[p].value
      ;(d || c) &&
        ((d && ((c && d.__html == c.__html) || d.__html === n.innerHTML)) ||
          (n.innerHTML = (d && d.__html) || ''))
    }
    if ((wa(n, h, u, i, l), d)) e.__k = []
    else if (
      ((p = e.props.children),
      $s(
        n,
        Array.isArray(p) ? p : [p],
        e,
        t,
        r,
        i && f !== 'foreignObject',
        s,
        o,
        s ? s[0] : t.__k && kt(t, 0),
        l
      ),
      s != null)
    )
      for (p = s.length; p--; ) s[p] != null && Zs(s[p])
    l ||
      ('value' in h &&
        (p = h.value) !== void 0 &&
        (p !== n.value || (f === 'progress' && !p) || (f === 'option' && p !== u.value)) &&
        yn(n, 'value', p, u.value, !1),
      'checked' in h &&
        (p = h.checked) !== void 0 &&
        p !== n.checked &&
        yn(n, 'checked', p, u.checked, !1))
  }
  return n
}
function no(n, e, t) {
  try {
    typeof n == 'function' ? n(e) : (n.current = e)
  } catch (r) {
    C.__e(r, t)
  }
}
function ro(n, e, t) {
  var r, i
  if (
    (C.unmount && C.unmount(n),
    (r = n.ref) && ((r.current && r.current !== n.__e) || no(r, null, e)),
    (r = n.__c) != null)
  ) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount()
      } catch (s) {
        C.__e(s, e)
      }
    ;(r.base = r.__P = null), (n.__c = void 0)
  }
  if ((r = n.__k))
    for (i = 0; i < r.length; i++) r[i] && ro(r[i], e, t || typeof n.type != 'function')
  t || n.__e == null || Zs(n.__e), (n.__ = n.__e = n.__d = void 0)
}
function Ra(n, e, t) {
  return this.constructor(n, t)
}
function Ot(n, e, t) {
  var r, i, s
  C.__ && C.__(n, e),
    (i = (r = typeof t == 'function') ? null : (t && t.__k) || e.__k),
    (s = []),
    Br(
      e,
      (n = ((!r && t) || e).__k = g(j, null, [n])),
      i || bn,
      bn,
      e.ownerSVGElement !== void 0,
      !r && t ? [t] : i ? null : e.firstChild ? Nn.call(e.childNodes) : null,
      s,
      !r && t ? t : i ? i.__e : e.firstChild,
      r
    ),
    to(s, n)
}
function Ta(n, e) {
  var t = {
    __c: (e = '__cC' + qs++),
    __: n,
    Consumer: function (r, i) {
      return r.children(i)
    },
    Provider: function (r) {
      var i, s
      return (
        this.getChildContext ||
          ((i = []),
          ((s = {})[e] = this),
          (this.getChildContext = function () {
            return s
          }),
          (this.shouldComponentUpdate = function (o) {
            this.props.value !== o.value &&
              i.some(function (l) {
                ;(l.__e = !0), br(l)
              })
          }),
          (this.sub = function (o) {
            i.push(o)
            var l = o.componentWillUnmount
            o.componentWillUnmount = function () {
              i.splice(i.indexOf(o), 1), l && l.call(o)
            }
          })),
        r.children
      )
    }
  }
  return (t.Provider.__ = t.Consumer.contextType = t)
}
;(Nn = Qs.slice),
  (C = {
    __e: function (n, e, t, r) {
      for (var i, s, o; (e = e.__); )
        if ((i = e.__c) && !i.__)
          try {
            if (
              ((s = i.constructor) &&
                s.getDerivedStateFromError != null &&
                (i.setState(s.getDerivedStateFromError(n)), (o = i.__d)),
              i.componentDidCatch != null && (i.componentDidCatch(n, r || {}), (o = i.__d)),
              o)
            )
              return (i.__E = i)
          } catch (l) {
            n = l
          }
      throw n
    }
  }),
  (Vs = 0),
  (Gs = function (n) {
    return n != null && n.constructor === void 0
  }),
  (pt = !1),
  (le.prototype.setState = function (n, e) {
    var t
    ;(t = this.__s != null && this.__s !== this.state ? this.__s : (this.__s = Be({}, this.state))),
      typeof n == 'function' && (n = n(Be({}, t), this.props)),
      n && Be(t, n),
      n != null && this.__v && (e && this._sb.push(e), br(this))
  }),
  (le.prototype.forceUpdate = function (n) {
    this.__v && ((this.__e = !0), n && this.__h.push(n), br(this))
  }),
  (le.prototype.render = j),
  (Ze = []),
  (Ys = typeof Promise == 'function' ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout),
  (En.__r = 0),
  (qs = 0)
var ye,
  $n,
  Ii,
  io = [],
  Jn = [],
  Mi = C.__b,
  ki = C.__r,
  Oi = C.diffed,
  Ni = C.__c,
  Pi = C.unmount
function xa() {
  for (var n; (n = io.shift()); )
    if (n.__P && n.__H)
      try {
        n.__H.__h.forEach(cn), n.__H.__h.forEach(yr), (n.__H.__h = [])
      } catch (e) {
        ;(n.__H.__h = []), C.__e(e, n.__v)
      }
}
;(C.__b = function (n) {
  ;(ye = null), Mi && Mi(n)
}),
  (C.__r = function (n) {
    ki && ki(n)
    var e = (ye = n.__c).__H
    e &&
      ($n === ye
        ? ((e.__h = []),
          (ye.__h = []),
          e.__.forEach(function (t) {
            t.__N && (t.__ = t.__N), (t.__V = Jn), (t.__N = t.i = void 0)
          }))
        : (e.__h.forEach(cn), e.__h.forEach(yr), (e.__h = []))),
      ($n = ye)
  }),
  (C.diffed = function (n) {
    Oi && Oi(n)
    var e = n.__c
    e &&
      e.__H &&
      (e.__H.__h.length &&
        ((io.push(e) !== 1 && Ii === C.requestAnimationFrame) ||
          ((Ii = C.requestAnimationFrame) || Ia)(xa)),
      e.__H.__.forEach(function (t) {
        t.i && (t.__H = t.i), t.__V !== Jn && (t.__ = t.__V), (t.i = void 0), (t.__V = Jn)
      })),
      ($n = ye = null)
  }),
  (C.__c = function (n, e) {
    e.some(function (t) {
      try {
        t.__h.forEach(cn),
          (t.__h = t.__h.filter(function (r) {
            return !r.__ || yr(r)
          }))
      } catch (r) {
        e.some(function (i) {
          i.__h && (i.__h = [])
        }),
          (e = []),
          C.__e(r, t.__v)
      }
    }),
      Ni && Ni(n, e)
  }),
  (C.unmount = function (n) {
    Pi && Pi(n)
    var e,
      t = n.__c
    t &&
      t.__H &&
      (t.__H.__.forEach(function (r) {
        try {
          cn(r)
        } catch (i) {
          e = i
        }
      }),
      (t.__H = void 0),
      e && C.__e(e, t.__v))
  })
var Hi = typeof requestAnimationFrame == 'function'
function Ia(n) {
  var e,
    t = function () {
      clearTimeout(r), Hi && cancelAnimationFrame(e), setTimeout(n)
    },
    r = setTimeout(t, 100)
  Hi && (e = requestAnimationFrame(t))
}
function cn(n) {
  var e = ye,
    t = n.__c
  typeof t == 'function' && ((n.__c = void 0), t()), (ye = e)
}
function yr(n) {
  var e = ye
  ;(n.__c = n.__()), (ye = e)
}
function Ma(n, e) {
  for (var t in e) n[t] = e[t]
  return n
}
function Bi(n, e) {
  for (var t in n) if (t !== '__source' && !(t in e)) return !0
  for (var r in e) if (r !== '__source' && n[r] !== e[r]) return !0
  return !1
}
function Li(n) {
  this.props = n
}
;((Li.prototype = new le()).isPureReactComponent = !0),
  (Li.prototype.shouldComponentUpdate = function (n, e) {
    return Bi(this.props, n) || Bi(this.state, e)
  })
var Fi = C.__b
C.__b = function (n) {
  n.type && n.type.__f && n.ref && ((n.props.ref = n.ref), (n.ref = null)), Fi && Fi(n)
}
var ka = C.__e
C.__e = function (n, e, t, r) {
  if (n.then) {
    for (var i, s = e; (s = s.__); )
      if ((i = s.__c) && i.__c)
        return e.__e == null && ((e.__e = t.__e), (e.__k = t.__k)), i.__c(n, e)
  }
  ka(n, e, t, r)
}
var ji = C.unmount
function so(n, e, t) {
  return (
    n &&
      (n.__c &&
        n.__c.__H &&
        (n.__c.__H.__.forEach(function (r) {
          typeof r.__c == 'function' && r.__c()
        }),
        (n.__c.__H = null)),
      (n = Ma({}, n)).__c != null && (n.__c.__P === t && (n.__c.__P = e), (n.__c = null)),
      (n.__k =
        n.__k &&
        n.__k.map(function (r) {
          return so(r, e, t)
        }))),
    n
  )
}
function oo(n, e, t) {
  return (
    n &&
      ((n.__v = null),
      (n.__k =
        n.__k &&
        n.__k.map(function (r) {
          return oo(r, e, t)
        })),
      n.__c &&
        n.__c.__P === e &&
        (n.__e && t.insertBefore(n.__e, n.__d), (n.__c.__e = !0), (n.__c.__P = t))),
    n
  )
}
function Kn() {
  ;(this.__u = 0), (this.t = null), (this.__b = null)
}
function lo(n) {
  var e = n.__.__c
  return e && e.__a && e.__a(n)
}
function Qt() {
  ;(this.u = null), (this.o = null)
}
;(C.unmount = function (n) {
  var e = n.__c
  e && e.__R && e.__R(), e && n.__h === !0 && (n.type = null), ji && ji(n)
}),
  ((Kn.prototype = new le()).__c = function (n, e) {
    var t = e.__c,
      r = this
    r.t == null && (r.t = []), r.t.push(t)
    var i = lo(r.__v),
      s = !1,
      o = function () {
        s || ((s = !0), (t.__R = null), i ? i(l) : l())
      }
    t.__R = o
    var l = function () {
        if (!--r.__u) {
          if (r.state.__a) {
            var c = r.state.__a
            r.__v.__k[0] = oo(c, c.__c.__P, c.__c.__O)
          }
          var d
          for (r.setState({ __a: (r.__b = null) }); (d = r.t.pop()); ) d.forceUpdate()
        }
      },
      a = e.__h === !0
    r.__u++ || a || r.setState({ __a: (r.__b = r.__v.__k[0]) }), n.then(o, o)
  }),
  (Kn.prototype.componentWillUnmount = function () {
    this.t = []
  }),
  (Kn.prototype.render = function (n, e) {
    if (this.__b) {
      if (this.__v.__k) {
        var t = document.createElement('div'),
          r = this.__v.__k[0].__c
        this.__v.__k[0] = so(this.__b, t, (r.__O = r.__P))
      }
      this.__b = null
    }
    var i = e.__a && g(j, null, n.fallback)
    return i && (i.__h = null), [g(j, null, e.__a ? null : n.children), i]
  })
var Ui = function (n, e, t) {
  if (
    (++t[1] === t[0] && n.o.delete(e),
    n.props.revealOrder && (n.props.revealOrder[0] !== 't' || !n.o.size))
  )
    for (t = n.u; t; ) {
      for (; t.length > 3; ) t.pop()()
      if (t[1] < t[0]) break
      n.u = t = t[2]
    }
}
function Oa(n) {
  return (
    (this.getChildContext = function () {
      return n.context
    }),
    n.children
  )
}
function Na(n) {
  var e = this,
    t = n.i
  ;(e.componentWillUnmount = function () {
    Ot(null, e.l), (e.l = null), (e.i = null)
  }),
    e.i && e.i !== t && e.componentWillUnmount(),
    n.__v
      ? (e.l ||
          ((e.i = t),
          (e.l = {
            nodeType: 1,
            parentNode: t,
            childNodes: [],
            appendChild: function (r) {
              this.childNodes.push(r), e.i.appendChild(r)
            },
            insertBefore: function (r, i) {
              this.childNodes.push(r), e.i.appendChild(r)
            },
            removeChild: function (r) {
              this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), e.i.removeChild(r)
            }
          })),
        Ot(g(Oa, { context: e.context }, n.__v), e.l))
      : e.l && e.componentWillUnmount()
}
function Pa(n, e) {
  var t = g(Na, { __v: n, i: e })
  return (t.containerInfo = e), t
}
;((Qt.prototype = new le()).__a = function (n) {
  var e = this,
    t = lo(e.__v),
    r = e.o.get(n)
  return (
    r[0]++,
    function (i) {
      var s = function () {
        e.props.revealOrder ? (r.push(i), Ui(e, n, r)) : i()
      }
      t ? t(s) : s()
    }
  )
}),
  (Qt.prototype.render = function (n) {
    ;(this.u = null), (this.o = new Map())
    var e = Sn(n.children)
    n.revealOrder && n.revealOrder[0] === 'b' && e.reverse()
    for (var t = e.length; t--; ) this.o.set(e[t], (this.u = [1, 0, this.u]))
    return n.children
  }),
  (Qt.prototype.componentDidUpdate = Qt.prototype.componentDidMount =
    function () {
      var n = this
      this.o.forEach(function (e, t) {
        Ui(n, t, e)
      })
    })
var Ha = (typeof Symbol < 'u' && Symbol.for && Symbol.for('react.element')) || 60103,
  Ba =
    /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
  La = typeof document < 'u',
  Fa = function (n) {
    return (
      typeof Symbol < 'u' && typeof Symbol() == 'symbol' ? /fil|che|rad/i : /fil|che|ra/i
    ).test(n)
  }
;(le.prototype.isReactComponent = {}),
  ['componentWillMount', 'componentWillReceiveProps', 'componentWillUpdate'].forEach(function (n) {
    Object.defineProperty(le.prototype, n, {
      configurable: !0,
      get: function () {
        return this['UNSAFE_' + n]
      },
      set: function (e) {
        Object.defineProperty(this, n, { configurable: !0, writable: !0, value: e })
      }
    })
  })
var zi = C.event
function ja() {}
function Ua() {
  return this.cancelBubble
}
function za() {
  return this.defaultPrevented
}
C.event = function (n) {
  return (
    zi && (n = zi(n)),
    (n.persist = ja),
    (n.isPropagationStopped = Ua),
    (n.isDefaultPrevented = za),
    (n.nativeEvent = n)
  )
}
var Wi = {
    configurable: !0,
    get: function () {
      return this.class
    }
  },
  Vi = C.vnode
C.vnode = function (n) {
  var e = n.type,
    t = n.props,
    r = t
  if (typeof e == 'string') {
    var i = e.indexOf('-') === -1
    for (var s in ((r = {}), t)) {
      var o = t[s]
      ;(La && s === 'children' && e === 'noscript') ||
        (s === 'value' && 'defaultValue' in t && o == null) ||
        (s === 'defaultValue' && 'value' in t && t.value == null
          ? (s = 'value')
          : s === 'download' && o === !0
          ? (o = '')
          : /ondoubleclick/i.test(s)
          ? (s = 'ondblclick')
          : /^onchange(textarea|input)/i.test(s + e) && !Fa(t.type)
          ? (s = 'oninput')
          : /^onfocus$/i.test(s)
          ? (s = 'onfocusin')
          : /^onblur$/i.test(s)
          ? (s = 'onfocusout')
          : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(s)
          ? (s = s.toLowerCase())
          : i && Ba.test(s)
          ? (s = s.replace(/[A-Z0-9]/g, '-$&').toLowerCase())
          : o === null && (o = void 0),
        /^oninput$/i.test(s) && ((s = s.toLowerCase()), r[s] && (s = 'oninputCapture')),
        (r[s] = o))
    }
    e == 'select' &&
      r.multiple &&
      Array.isArray(r.value) &&
      (r.value = Sn(t.children).forEach(function (l) {
        l.props.selected = r.value.indexOf(l.props.value) != -1
      })),
      e == 'select' &&
        r.defaultValue != null &&
        (r.value = Sn(t.children).forEach(function (l) {
          l.props.selected = r.multiple
            ? r.defaultValue.indexOf(l.props.value) != -1
            : r.defaultValue == l.props.value
        })),
      (n.props = r),
      t.class != t.className &&
        ((Wi.enumerable = 'className' in t),
        t.className != null && (r.class = t.className),
        Object.defineProperty(r, 'className', Wi))
  }
  ;(n.$$typeof = Ha), Vi && Vi(n)
}
var Gi = C.__r
C.__r = function (n) {
  Gi && Gi(n), n.__c
}
const ao = [],
  Er = new Map()
function Lr(n) {
  ao.push(n),
    Er.forEach((e) => {
      uo(e, n)
    })
}
function Wa(n) {
  n.isConnected && co(n.getRootNode())
}
function co(n) {
  let e = Er.get(n)
  if (!e || !e.isConnected) {
    if (((e = n.querySelector('style[data-fullcalendar]')), !e)) {
      ;(e = document.createElement('style')), e.setAttribute('data-fullcalendar', '')
      const t = Ga()
      t && (e.nonce = t)
      const r = n === document ? document.head : n,
        i =
          n === document
            ? r.querySelector('script,link[rel=stylesheet],link[as=style],style')
            : r.firstChild
      r.insertBefore(e, i)
    }
    Er.set(n, e), Va(e)
  }
}
function Va(n) {
  for (const e of ao) uo(n, e)
}
function uo(n, e) {
  const { sheet: t } = n,
    r = t.cssRules.length
  e.split('}').forEach((i, s) => {
    ;(i = i.trim()), i && t.insertRule(i + '}', r + s)
  })
}
let er
function Ga() {
  return er === void 0 && (er = Ya()), er
}
function Ya() {
  const n = document.querySelector('meta[name="csp-nonce"]')
  if (n && n.hasAttribute('content')) return n.getAttribute('content')
  const e = document.querySelector('script[nonce]')
  return (e && e.nonce) || ''
}
typeof document < 'u' && co(document)
var qa =
  ':root{--fc-small-font-size:.85em;--fc-page-bg-color:#fff;--fc-neutral-bg-color:hsla(0,0%,82%,.3);--fc-neutral-text-color:grey;--fc-border-color:#ddd;--fc-button-text-color:#fff;--fc-button-bg-color:#2c3e50;--fc-button-border-color:#2c3e50;--fc-button-hover-bg-color:#1e2b37;--fc-button-hover-border-color:#1a252f;--fc-button-active-bg-color:#1a252f;--fc-button-active-border-color:#151e27;--fc-event-bg-color:#3788d8;--fc-event-border-color:#3788d8;--fc-event-text-color:#fff;--fc-event-selected-overlay-color:rgba(0,0,0,.25);--fc-more-link-bg-color:#d0d0d0;--fc-more-link-text-color:inherit;--fc-event-resizer-thickness:8px;--fc-event-resizer-dot-total-width:8px;--fc-event-resizer-dot-border-width:1px;--fc-non-business-color:hsla(0,0%,84%,.3);--fc-bg-event-color:#8fdf82;--fc-bg-event-opacity:0.3;--fc-highlight-color:rgba(188,232,241,.3);--fc-today-bg-color:rgba(255,220,40,.15);--fc-now-indicator-color:red}.fc-not-allowed,.fc-not-allowed .fc-event{cursor:not-allowed}.fc{display:flex;flex-direction:column;font-size:1em}.fc,.fc *,.fc :after,.fc :before{box-sizing:border-box}.fc table{border-collapse:collapse;border-spacing:0;font-size:1em}.fc th{text-align:center}.fc td,.fc th{padding:0;vertical-align:top}.fc a[data-navlink]{cursor:pointer}.fc a[data-navlink]:hover{text-decoration:underline}.fc-direction-ltr{direction:ltr;text-align:left}.fc-direction-rtl{direction:rtl;text-align:right}.fc-theme-standard td,.fc-theme-standard th{border:1px solid var(--fc-border-color)}.fc-liquid-hack td,.fc-liquid-hack th{position:relative}@font-face{font-family:fcicons;font-style:normal;font-weight:400;src:url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBfAAAAC8AAAAYGNtYXAXVtKNAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZgYydxIAAAF4AAAFNGhlYWQUJ7cIAAAGrAAAADZoaGVhB20DzAAABuQAAAAkaG10eCIABhQAAAcIAAAALGxvY2ED4AU6AAAHNAAAABhtYXhwAA8AjAAAB0wAAAAgbmFtZXsr690AAAdsAAABhnBvc3QAAwAAAAAI9AAAACAAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpBgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6Qb//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAWIAjQKeAskAEwAAJSc3NjQnJiIHAQYUFwEWMjc2NCcCnuLiDQ0MJAz/AA0NAQAMJAwNDcni4gwjDQwM/wANIwz/AA0NDCMNAAAAAQFiAI0CngLJABMAACUBNjQnASYiBwYUHwEHBhQXFjI3AZ4BAA0N/wAMJAwNDeLiDQ0MJAyNAQAMIw0BAAwMDSMM4uINIwwNDQAAAAIA4gC3Ax4CngATACcAACUnNzY0JyYiDwEGFB8BFjI3NjQnISc3NjQnJiIPAQYUHwEWMjc2NCcB87e3DQ0MIw3VDQ3VDSMMDQ0BK7e3DQ0MJAzVDQ3VDCQMDQ3zuLcMJAwNDdUNIwzWDAwNIwy4twwkDA0N1Q0jDNYMDA0jDAAAAgDiALcDHgKeABMAJwAAJTc2NC8BJiIHBhQfAQcGFBcWMjchNzY0LwEmIgcGFB8BBwYUFxYyNwJJ1Q0N1Q0jDA0Nt7cNDQwjDf7V1Q0N1QwkDA0Nt7cNDQwkDLfWDCMN1Q0NDCQMt7gMIw0MDNYMIw3VDQ0MJAy3uAwjDQwMAAADAFUAAAOrA1UAMwBoAHcAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMhMjY1NCYjISIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAAVYRGRkR/qoRGRkRA1UFBAUOCQkVDAsZDf2rDRkLDBUJCA4FBQUFBQUOCQgVDAsZDQJVDRkLDBUJCQ4FBAVVAgECBQMCBwQECAX9qwQJAwQHAwMFAQICAgIBBQMDBwQDCQQCVQUIBAQHAgMFAgEC/oAZEhEZGRESGQAAAAADAFUAAAOrA1UAMwBoAIkAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMzFRQWMzI2PQEzMjY1NCYrATU0JiMiBh0BIyIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAgBkSEhmAERkZEYAZEhIZgBEZGREDVQUEBQ4JCRUMCxkN/asNGQsMFQkIDgUFBQUFBQ4JCBUMCxkNAlUNGQsMFQkJDgUEBVUCAQIFAwIHBAQIBf2rBAkDBAcDAwUBAgICAgEFAwMHBAMJBAJVBQgEBAcCAwUCAQL+gIASGRkSgBkSERmAEhkZEoAZERIZAAABAOIAjQMeAskAIAAAExcHBhQXFjI/ARcWMjc2NC8BNzY0JyYiDwEnJiIHBhQX4uLiDQ0MJAzi4gwkDA0N4uINDQwkDOLiDCQMDQ0CjeLiDSMMDQ3h4Q0NDCMN4uIMIw0MDOLiDAwNIwwAAAABAAAAAQAAa5n0y18PPPUACwQAAAAAANivOVsAAAAA2K85WwAAAAADqwNVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAOrAAEAAAAAAAAAAAAAAAAAAAALBAAAAAAAAAAAAAAAAgAAAAQAAWIEAAFiBAAA4gQAAOIEAABVBAAAVQQAAOIAAAAAAAoAFAAeAEQAagCqAOoBngJkApoAAQAAAAsAigADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGZjaWNvbnMAZgBjAGkAYwBvAG4Ac1ZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGZjaWNvbnMAZgBjAGkAYwBvAG4Ac2ZjaWNvbnMAZgBjAGkAYwBvAG4Ac1JlZ3VsYXIAUgBlAGcAdQBsAGEAcmZjaWNvbnMAZgBjAGkAYwBvAG4Ac0ZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=") format("truetype")}.fc-icon{speak:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:inline-block;font-family:fcicons!important;font-style:normal;font-variant:normal;font-weight:400;height:1em;line-height:1;text-align:center;text-transform:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:1em}.fc-icon-chevron-left:before{content:"\\e900"}.fc-icon-chevron-right:before{content:"\\e901"}.fc-icon-chevrons-left:before{content:"\\e902"}.fc-icon-chevrons-right:before{content:"\\e903"}.fc-icon-minus-square:before{content:"\\e904"}.fc-icon-plus-square:before{content:"\\e905"}.fc-icon-x:before{content:"\\e906"}.fc .fc-button{border-radius:0;font-family:inherit;font-size:inherit;line-height:inherit;margin:0;overflow:visible;text-transform:none}.fc .fc-button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}.fc .fc-button{-webkit-appearance:button}.fc .fc-button:not(:disabled){cursor:pointer}.fc .fc-button{background-color:transparent;border:1px solid transparent;border-radius:.25em;display:inline-block;font-size:1em;font-weight:400;line-height:1.5;padding:.4em .65em;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle}.fc .fc-button:hover{text-decoration:none}.fc .fc-button:focus{box-shadow:0 0 0 .2rem rgba(44,62,80,.25);outline:0}.fc .fc-button:disabled{opacity:.65}.fc .fc-button-primary{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:hover{background-color:var(--fc-button-hover-bg-color);border-color:var(--fc-button-hover-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:disabled{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button-primary:not(:disabled).fc-button-active,.fc .fc-button-primary:not(:disabled):active{background-color:var(--fc-button-active-bg-color);border-color:var(--fc-button-active-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:not(:disabled).fc-button-active:focus,.fc .fc-button-primary:not(:disabled):active:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button .fc-icon{font-size:1.5em;vertical-align:middle}.fc .fc-button-group{display:inline-flex;position:relative;vertical-align:middle}.fc .fc-button-group>.fc-button{flex:1 1 auto;position:relative}.fc .fc-button-group>.fc-button.fc-button-active,.fc .fc-button-group>.fc-button:active,.fc .fc-button-group>.fc-button:focus,.fc .fc-button-group>.fc-button:hover{z-index:1}.fc-direction-ltr .fc-button-group>.fc-button:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0;margin-left:-1px}.fc-direction-ltr .fc-button-group>.fc-button:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.fc-direction-rtl .fc-button-group>.fc-button:not(:first-child){border-bottom-right-radius:0;border-top-right-radius:0;margin-right:-1px}.fc-direction-rtl .fc-button-group>.fc-button:not(:last-child){border-bottom-left-radius:0;border-top-left-radius:0}.fc .fc-toolbar{align-items:center;display:flex;justify-content:space-between}.fc .fc-toolbar.fc-header-toolbar{margin-bottom:1.5em}.fc .fc-toolbar.fc-footer-toolbar{margin-top:1.5em}.fc .fc-toolbar-title{font-size:1.75em;margin:0}.fc-direction-ltr .fc-toolbar>*>:not(:first-child){margin-left:.75em}.fc-direction-rtl .fc-toolbar>*>:not(:first-child){margin-right:.75em}.fc-direction-rtl .fc-toolbar-ltr{flex-direction:row-reverse}.fc .fc-scroller{-webkit-overflow-scrolling:touch;position:relative}.fc .fc-scroller-liquid{height:100%}.fc .fc-scroller-liquid-absolute{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-scroller-harness{direction:ltr;overflow:hidden;position:relative}.fc .fc-scroller-harness-liquid{height:100%}.fc-direction-rtl .fc-scroller-harness>.fc-scroller{direction:rtl}.fc-theme-standard .fc-scrollgrid{border:1px solid var(--fc-border-color)}.fc .fc-scrollgrid,.fc .fc-scrollgrid table{table-layout:fixed;width:100%}.fc .fc-scrollgrid table{border-left-style:hidden;border-right-style:hidden;border-top-style:hidden}.fc .fc-scrollgrid{border-bottom-width:0;border-collapse:separate;border-right-width:0}.fc .fc-scrollgrid-liquid{height:100%}.fc .fc-scrollgrid-section,.fc .fc-scrollgrid-section table,.fc .fc-scrollgrid-section>td{height:1px}.fc .fc-scrollgrid-section-liquid>td{height:100%}.fc .fc-scrollgrid-section>*{border-left-width:0;border-top-width:0}.fc .fc-scrollgrid-section-footer>*,.fc .fc-scrollgrid-section-header>*{border-bottom-width:0}.fc .fc-scrollgrid-section-body table,.fc .fc-scrollgrid-section-footer table{border-bottom-style:hidden}.fc .fc-scrollgrid-section-sticky>*{background:var(--fc-page-bg-color);position:sticky;z-index:3}.fc .fc-scrollgrid-section-header.fc-scrollgrid-section-sticky>*{top:0}.fc .fc-scrollgrid-section-footer.fc-scrollgrid-section-sticky>*{bottom:0}.fc .fc-scrollgrid-sticky-shim{height:1px;margin-bottom:-1px}.fc-sticky{position:sticky}.fc .fc-view-harness{flex-grow:1;position:relative}.fc .fc-view-harness-active>.fc-view{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-col-header-cell-cushion{display:inline-block;padding:2px 4px}.fc .fc-bg-event,.fc .fc-highlight,.fc .fc-non-business{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-non-business{background:var(--fc-non-business-color)}.fc .fc-bg-event{background:var(--fc-bg-event-color);opacity:var(--fc-bg-event-opacity)}.fc .fc-bg-event .fc-event-title{font-size:var(--fc-small-font-size);font-style:italic;margin:.5em}.fc .fc-highlight{background:var(--fc-highlight-color)}.fc .fc-cell-shaded,.fc .fc-day-disabled{background:var(--fc-neutral-bg-color)}a.fc-event,a.fc-event:hover{text-decoration:none}.fc-event.fc-event-draggable,.fc-event[href]{cursor:pointer}.fc-event .fc-event-main{position:relative;z-index:2}.fc-event-dragging:not(.fc-event-selected){opacity:.75}.fc-event-dragging.fc-event-selected{box-shadow:0 2px 7px rgba(0,0,0,.3)}.fc-event .fc-event-resizer{display:none;position:absolute;z-index:4}.fc-event-selected .fc-event-resizer,.fc-event:hover .fc-event-resizer{display:block}.fc-event-selected .fc-event-resizer{background:var(--fc-page-bg-color);border-color:inherit;border-radius:calc(var(--fc-event-resizer-dot-total-width)/2);border-style:solid;border-width:var(--fc-event-resizer-dot-border-width);height:var(--fc-event-resizer-dot-total-width);width:var(--fc-event-resizer-dot-total-width)}.fc-event-selected .fc-event-resizer:before{bottom:-20px;content:"";left:-20px;position:absolute;right:-20px;top:-20px}.fc-event-selected,.fc-event:focus{box-shadow:0 2px 5px rgba(0,0,0,.2)}.fc-event-selected:before,.fc-event:focus:before{bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:3}.fc-event-selected:after,.fc-event:focus:after{background:var(--fc-event-selected-overlay-color);bottom:-1px;content:"";left:-1px;position:absolute;right:-1px;top:-1px;z-index:1}.fc-h-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-h-event .fc-event-main{color:var(--fc-event-text-color)}.fc-h-event .fc-event-main-frame{display:flex}.fc-h-event .fc-event-time{max-width:100%;overflow:hidden}.fc-h-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-width:0}.fc-h-event .fc-event-title{display:inline-block;left:0;max-width:100%;overflow:hidden;right:0;vertical-align:top}.fc-h-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-start),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-end){border-bottom-left-radius:0;border-left-width:0;border-top-left-radius:0}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-end),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-start){border-bottom-right-radius:0;border-right-width:0;border-top-right-radius:0}.fc-h-event:not(.fc-event-selected) .fc-event-resizer{bottom:0;top:0;width:var(--fc-event-resizer-thickness)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end{cursor:w-resize;left:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start{cursor:e-resize;right:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-h-event.fc-event-selected .fc-event-resizer{margin-top:calc(var(--fc-event-resizer-dot-total-width)*-.5);top:50%}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-start,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-end{left:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-end,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-start{right:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc .fc-popover{box-shadow:0 2px 6px rgba(0,0,0,.15);position:absolute;z-index:9999}.fc .fc-popover-header{align-items:center;display:flex;flex-direction:row;justify-content:space-between;padding:3px 4px}.fc .fc-popover-title{margin:0 2px}.fc .fc-popover-close{cursor:pointer;font-size:1.1em;opacity:.65}.fc-theme-standard .fc-popover{background:var(--fc-page-bg-color);border:1px solid var(--fc-border-color)}.fc-theme-standard .fc-popover-header{background:var(--fc-neutral-bg-color)}'
Lr(qa)
class Fr {
  constructor(e) {
    ;(this.drainedOption = e),
      (this.isRunning = !1),
      (this.isDirty = !1),
      (this.pauseDepths = {}),
      (this.timeoutId = 0)
  }
  request(e) {
    ;(this.isDirty = !0),
      this.isPaused() ||
        (this.clearTimeout(),
        e == null ? this.tryDrain() : (this.timeoutId = setTimeout(this.tryDrain.bind(this), e)))
  }
  pause(e = '') {
    let { pauseDepths: t } = this
    ;(t[e] = (t[e] || 0) + 1), this.clearTimeout()
  }
  resume(e = '', t) {
    let { pauseDepths: r } = this
    e in r && (t ? delete r[e] : ((r[e] -= 1), r[e] <= 0 && delete r[e]), this.tryDrain())
  }
  isPaused() {
    return Object.keys(this.pauseDepths).length
  }
  tryDrain() {
    if (!this.isRunning && !this.isPaused()) {
      for (this.isRunning = !0; this.isDirty; ) (this.isDirty = !1), this.drained()
      this.isRunning = !1
    }
  }
  clear() {
    this.clearTimeout(), (this.isDirty = !1), (this.pauseDepths = {})
  }
  clearTimeout() {
    this.timeoutId && (clearTimeout(this.timeoutId), (this.timeoutId = 0))
  }
  drained() {
    this.drainedOption && this.drainedOption()
  }
}
function jr(n) {
  n.parentNode && n.parentNode.removeChild(n)
}
function X(n, e) {
  if (n.closest) return n.closest(e)
  if (!document.documentElement.contains(n)) return null
  do {
    if (Qa(n, e)) return n
    n = n.parentElement || n.parentNode
  } while (n !== null && n.nodeType === 1)
  return null
}
function Qa(n, e) {
  return (n.matches || n.matchesSelector || n.msMatchesSelector).call(n, e)
}
function Za(n, e) {
  let t = n instanceof HTMLElement ? [n] : n,
    r = []
  for (let i = 0; i < t.length; i += 1) {
    let s = t[i].querySelectorAll(e)
    for (let o = 0; o < s.length; o += 1) r.push(s[o])
  }
  return r
}
const Xa = /(top|left|right|bottom|width|height)$/i
function xt(n, e) {
  for (let t in e) fo(n, t, e[t])
}
function fo(n, e, t) {
  t == null
    ? (n.style[e] = '')
    : typeof t == 'number' && Xa.test(e)
    ? (n.style[e] = `${t}px`)
    : (n.style[e] = t)
}
function ho(n) {
  var e, t
  return (t = (e = n.composedPath) === null || e === void 0 ? void 0 : e.call(n)[0]) !== null &&
    t !== void 0
    ? t
    : n.target
}
let Yi = 0
function Pn() {
  return (Yi += 1), 'fc-dom-' + Yi
}
function Hn(n) {
  n.preventDefault()
}
function $a(n, e) {
  return (t) => {
    let r = X(t.target, n)
    r && e.call(r, t, r)
  }
}
function go(n, e, t, r) {
  let i = $a(t, r)
  return (
    n.addEventListener(e, i),
    () => {
      n.removeEventListener(e, i)
    }
  )
}
function Ja(n, e, t, r) {
  let i
  return go(n, 'mouseover', e, (s, o) => {
    if (o !== i) {
      ;(i = o), t(s, o)
      let l = (a) => {
        ;(i = null), r(a, o), o.removeEventListener('mouseleave', l)
      }
      o.addEventListener('mouseleave', l)
    }
  })
}
const qi = [
  'webkitTransitionEnd',
  'otransitionend',
  'oTransitionEnd',
  'msTransitionEnd',
  'transitionend'
]
function Ka(n, e) {
  let t = (r) => {
    e(r),
      qi.forEach((i) => {
        n.removeEventListener(i, t)
      })
  }
  qi.forEach((r) => {
    n.addEventListener(r, t)
  })
}
function po(n) {
  return Object.assign({ onClick: n }, mo(n))
}
function mo(n) {
  return {
    tabIndex: 0,
    onKeyDown(e) {
      ;(e.key === 'Enter' || e.key === ' ') && (n(e), e.preventDefault())
    }
  }
}
let Qi = 0
function tt() {
  return (Qi += 1), String(Qi)
}
function Ur() {
  document.body.classList.add('fc-not-allowed')
}
function zr() {
  document.body.classList.remove('fc-not-allowed')
}
function ec(n) {
  ;(n.style.userSelect = 'none'),
    (n.style.webkitUserSelect = 'none'),
    n.addEventListener('selectstart', Hn)
}
function tc(n) {
  ;(n.style.userSelect = ''),
    (n.style.webkitUserSelect = ''),
    n.removeEventListener('selectstart', Hn)
}
function nc(n) {
  n.addEventListener('contextmenu', Hn)
}
function rc(n) {
  n.removeEventListener('contextmenu', Hn)
}
function ic(n) {
  let e = [],
    t = [],
    r,
    i
  for (
    typeof n == 'string'
      ? (t = n.split(/\s*,\s*/))
      : typeof n == 'function'
      ? (t = [n])
      : Array.isArray(n) && (t = n),
      r = 0;
    r < t.length;
    r += 1
  )
    (i = t[r]),
      typeof i == 'string'
        ? e.push(
            i.charAt(0) === '-' ? { field: i.substring(1), order: -1 } : { field: i, order: 1 }
          )
        : typeof i == 'function' && e.push({ func: i })
  return e
}
function sc(n, e, t) {
  let r, i
  for (r = 0; r < t.length; r += 1) if (((i = oc(n, e, t[r])), i)) return i
  return 0
}
function oc(n, e, t) {
  return t.func ? t.func(n, e) : lc(n[t.field], e[t.field]) * (t.order || 1)
}
function lc(n, e) {
  return !n && !e
    ? 0
    : e == null
    ? -1
    : n == null
    ? 1
    : typeof n == 'string' || typeof e == 'string'
    ? String(n).localeCompare(String(e))
    : n - e
}
function ut(n, e) {
  let t = String(n)
  return '000'.substr(0, e - t.length) + t
}
function It(n, e, t) {
  return typeof n == 'function'
    ? n(...e)
    : typeof n == 'string'
    ? e.reduce((r, i, s) => r.replace('$' + s, i || ''), n)
    : t
}
function ac(n, e) {
  return n - e
}
function dn(n) {
  return n % 1 === 0
}
function cc(n) {
  let e = n.querySelector('.fc-scrollgrid-shrink-frame'),
    t = n.querySelector('.fc-scrollgrid-shrink-cushion')
  if (!e) throw new Error('needs fc-scrollgrid-shrink-frame className')
  if (!t) throw new Error('needs fc-scrollgrid-shrink-cushion className')
  return (
    n.getBoundingClientRect().width -
    e.getBoundingClientRect().width +
    t.getBoundingClientRect().width
  )
}
const Zi = ['years', 'months', 'days', 'milliseconds'],
  dc = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/
function M(n, e) {
  return typeof n == 'string'
    ? uc(n)
    : typeof n == 'object' && n
    ? Xi(n)
    : typeof n == 'number'
    ? Xi({ [e || 'milliseconds']: n })
    : null
}
function uc(n) {
  let e = dc.exec(n)
  if (e) {
    let t = e[1] ? -1 : 1
    return {
      years: 0,
      months: 0,
      days: t * (e[2] ? parseInt(e[2], 10) : 0),
      milliseconds:
        t *
        ((e[3] ? parseInt(e[3], 10) : 0) * 60 * 60 * 1e3 +
          (e[4] ? parseInt(e[4], 10) : 0) * 60 * 1e3 +
          (e[5] ? parseInt(e[5], 10) : 0) * 1e3 +
          (e[6] ? parseInt(e[6], 10) : 0))
    }
  }
  return null
}
function Xi(n) {
  let e = {
      years: n.years || n.year || 0,
      months: n.months || n.month || 0,
      days: n.days || n.day || 0,
      milliseconds:
        (n.hours || n.hour || 0) * 60 * 60 * 1e3 +
        (n.minutes || n.minute || 0) * 60 * 1e3 +
        (n.seconds || n.second || 0) * 1e3 +
        (n.milliseconds || n.millisecond || n.ms || 0)
    },
    t = n.weeks || n.week
  return t && ((e.days += t * 7), (e.specifiedWeeks = !0)), e
}
function fc(n, e) {
  return (
    n.years === e.years &&
    n.months === e.months &&
    n.days === e.days &&
    n.milliseconds === e.milliseconds
  )
}
function Sr(n, e) {
  return {
    years: n.years + e.years,
    months: n.months + e.months,
    days: n.days + e.days,
    milliseconds: n.milliseconds + e.milliseconds
  }
}
function hc(n, e) {
  return {
    years: n.years - e.years,
    months: n.months - e.months,
    days: n.days - e.days,
    milliseconds: n.milliseconds - e.milliseconds
  }
}
function gc(n, e) {
  return {
    years: n.years * e,
    months: n.months * e,
    days: n.days * e,
    milliseconds: n.milliseconds * e
  }
}
function pc(n) {
  return ft(n) / 365
}
function mc(n) {
  return ft(n) / 30
}
function ft(n) {
  return ge(n) / 864e5
}
function ge(n) {
  return n.years * (365 * 864e5) + n.months * (30 * 864e5) + n.days * 864e5 + n.milliseconds
}
function Wr(n, e) {
  let t = null
  for (let r = 0; r < Zi.length; r += 1) {
    let i = Zi[r]
    if (e[i]) {
      let s = n[i] / e[i]
      if (!dn(s) || (t !== null && t !== s)) return null
      t = s
    } else if (n[i]) return null
  }
  return t
}
function Ar(n) {
  let e = n.milliseconds
  if (e) {
    if (e % 1e3 !== 0) return { unit: 'millisecond', value: e }
    if (e % (1e3 * 60) !== 0) return { unit: 'second', value: e / 1e3 }
    if (e % (1e3 * 60 * 60) !== 0) return { unit: 'minute', value: e / (1e3 * 60) }
    if (e) return { unit: 'hour', value: e / (1e3 * 60 * 60) }
  }
  return n.days
    ? n.specifiedWeeks && n.days % 7 === 0
      ? { unit: 'week', value: n.days / 7 }
      : { unit: 'day', value: n.days }
    : n.months
    ? { unit: 'month', value: n.months }
    : n.years
    ? { unit: 'year', value: n.years }
    : { unit: 'millisecond', value: 0 }
}
function Ue(n, e, t) {
  if (n === e) return !0
  let r = n.length,
    i
  if (r !== e.length) return !1
  for (i = 0; i < r; i += 1) if (!(t ? t(n[i], e[i]) : n[i] === e[i])) return !1
  return !0
}
const vc = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
function $i(n, e) {
  let t = Le(n)
  return (t[2] += e * 7), te(t)
}
function $(n, e) {
  let t = Le(n)
  return (t[2] += e), te(t)
}
function ze(n, e) {
  let t = Le(n)
  return (t[6] += e), te(t)
}
function bc(n, e) {
  return nt(n, e) / 7
}
function nt(n, e) {
  return (e.valueOf() - n.valueOf()) / (1e3 * 60 * 60 * 24)
}
function yc(n, e) {
  return (e.valueOf() - n.valueOf()) / (1e3 * 60 * 60)
}
function Ec(n, e) {
  return (e.valueOf() - n.valueOf()) / (1e3 * 60)
}
function Sc(n, e) {
  return (e.valueOf() - n.valueOf()) / 1e3
}
function Ac(n, e) {
  let t = F(n),
    r = F(e)
  return {
    years: 0,
    months: 0,
    days: Math.round(nt(t, r)),
    milliseconds: e.valueOf() - r.valueOf() - (n.valueOf() - t.valueOf())
  }
}
function Dc(n, e) {
  let t = An(n, e)
  return t !== null && t % 7 === 0 ? t / 7 : null
}
function An(n, e) {
  return Fe(n) === Fe(e) ? Math.round(nt(n, e)) : null
}
function F(n) {
  return te([n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()])
}
function wc(n) {
  return te([n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate(), n.getUTCHours()])
}
function Cc(n) {
  return te([
    n.getUTCFullYear(),
    n.getUTCMonth(),
    n.getUTCDate(),
    n.getUTCHours(),
    n.getUTCMinutes()
  ])
}
function _c(n) {
  return te([
    n.getUTCFullYear(),
    n.getUTCMonth(),
    n.getUTCDate(),
    n.getUTCHours(),
    n.getUTCMinutes(),
    n.getUTCSeconds()
  ])
}
function Rc(n, e, t) {
  let r = n.getUTCFullYear(),
    i = tr(n, r, e, t)
  if (i < 1) return tr(n, r - 1, e, t)
  let s = tr(n, r + 1, e, t)
  return s >= 1 ? Math.min(i, s) : i
}
function tr(n, e, t, r) {
  let i = te([e, 0, 1 + Tc(e, t, r)]),
    s = F(n),
    o = Math.round(nt(i, s))
  return Math.floor(o / 7) + 1
}
function Tc(n, e, t) {
  let r = 7 + e - t
  return -((7 + te([n, 0, r]).getUTCDay() - e) % 7) + r - 1
}
function Ji(n) {
  return [
    n.getFullYear(),
    n.getMonth(),
    n.getDate(),
    n.getHours(),
    n.getMinutes(),
    n.getSeconds(),
    n.getMilliseconds()
  ]
}
function Ki(n) {
  return new Date(n[0], n[1] || 0, n[2] == null ? 1 : n[2], n[3] || 0, n[4] || 0, n[5] || 0)
}
function Le(n) {
  return [
    n.getUTCFullYear(),
    n.getUTCMonth(),
    n.getUTCDate(),
    n.getUTCHours(),
    n.getUTCMinutes(),
    n.getUTCSeconds(),
    n.getUTCMilliseconds()
  ]
}
function te(n) {
  return n.length === 1 && (n = n.concat([0])), new Date(Date.UTC(...n))
}
function vo(n) {
  return !isNaN(n.valueOf())
}
function Fe(n) {
  return (
    n.getUTCHours() * 1e3 * 60 * 60 +
    n.getUTCMinutes() * 1e3 * 60 +
    n.getUTCSeconds() * 1e3 +
    n.getUTCMilliseconds()
  )
}
function bo(n, e, t = !1) {
  let r = n.toISOString()
  return (
    (r = r.replace('.000', '')),
    t && (r = r.replace('T00:00:00Z', '')),
    r.length > 10 &&
      (e == null ? (r = r.replace('Z', '')) : e !== 0 && (r = r.replace('Z', Gr(e, !0)))),
    r
  )
}
function Vr(n) {
  return n.toISOString().replace(/T.*$/, '')
}
function xc(n) {
  return n.toISOString().match(/^\d{4}-\d{2}/)[0]
}
function Ic(n) {
  return ut(n.getUTCHours(), 2) + ':' + ut(n.getUTCMinutes(), 2) + ':' + ut(n.getUTCSeconds(), 2)
}
function Gr(n, e = !1) {
  let t = n < 0 ? '-' : '+',
    r = Math.abs(n),
    i = Math.floor(r / 60),
    s = Math.round(r % 60)
  return e ? `${t + ut(i, 2)}:${ut(s, 2)}` : `GMT${t}${i}${s ? `:${ut(s, 2)}` : ''}`
}
function _(n, e, t) {
  let r, i
  return function (...s) {
    if (!r) i = n.apply(this, s)
    else if (!Ue(r, s)) {
      t && t(i)
      let o = n.apply(this, s)
      ;(!e || !e(o, i)) && (i = o)
    }
    return (r = s), i
  }
}
function un(n, e, t) {
  let r, i
  return (s) => {
    if (!r) i = n.call(this, s)
    else if (!Ae(r, s)) {
      t && t(i)
      let o = n.call(this, s)
      ;(!e || !e(o, i)) && (i = o)
    }
    return (r = s), i
  }
}
const es = { week: 3, separator: 0, omitZeroMinute: 0, meridiem: 0, omitCommas: 0 },
  Dn = {
    timeZoneName: 7,
    era: 6,
    year: 5,
    month: 4,
    day: 2,
    weekday: 2,
    hour: 1,
    minute: 1,
    second: 1
  },
  Zt = /\s*([ap])\.?m\.?/i,
  Mc = /,/g,
  kc = /\s+/g,
  Oc = /\u200e/g,
  Nc = /UTC|GMT/
class Pc {
  constructor(e) {
    let t = {},
      r = {},
      i = 0
    for (let s in e)
      s in es
        ? ((r[s] = e[s]), (i = Math.max(es[s], i)))
        : ((t[s] = e[s]), s in Dn && (i = Math.max(Dn[s], i)))
    ;(this.standardDateProps = t),
      (this.extendedSettings = r),
      (this.severity = i),
      (this.buildFormattingFunc = _(ts))
  }
  format(e, t) {
    return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, t)(e)
  }
  formatRange(e, t, r, i) {
    let { standardDateProps: s, extendedSettings: o } = this,
      l = Uc(e.marker, t.marker, r.calendarSystem)
    if (!l) return this.format(e, r)
    let a = l
    a > 1 &&
      (s.year === 'numeric' || s.year === '2-digit') &&
      (s.month === 'numeric' || s.month === '2-digit') &&
      (s.day === 'numeric' || s.day === '2-digit') &&
      (a = 1)
    let c = this.format(e, r),
      d = this.format(t, r)
    if (c === d) return c
    let u = zc(s, a),
      h = ts(u, o, r),
      f = h(e),
      p = h(t),
      m = Wc(c, f, d, p),
      b = o.separator || i || r.defaultSeparator || ''
    return m ? m.before + f + b + p + m.after : c + b + d
  }
  getLargestUnit() {
    switch (this.severity) {
      case 7:
      case 6:
      case 5:
        return 'year'
      case 4:
        return 'month'
      case 3:
        return 'week'
      case 2:
        return 'day'
      default:
        return 'time'
    }
  }
}
function ts(n, e, t) {
  let r = Object.keys(n).length
  return r === 1 && n.timeZoneName === 'short'
    ? (i) => Gr(i.timeZoneOffset)
    : r === 0 && e.week
    ? (i) => jc(t.computeWeekNumber(i.marker), t.weekText, t.weekTextLong, t.locale, e.week)
    : Hc(n, e, t)
}
function Hc(n, e, t) {
  ;(n = Object.assign({}, n)), (e = Object.assign({}, e)), Bc(n, e), (n.timeZone = 'UTC')
  let r = new Intl.DateTimeFormat(t.locale.codes, n),
    i
  if (e.omitZeroMinute) {
    let s = Object.assign({}, n)
    delete s.minute, (i = new Intl.DateTimeFormat(t.locale.codes, s))
  }
  return (s) => {
    let { marker: o } = s,
      l
    i && !o.getUTCMinutes() ? (l = i) : (l = r)
    let a = l.format(o)
    return Lc(a, s, n, e, t)
  }
}
function Bc(n, e) {
  n.timeZoneName && (n.hour || (n.hour = '2-digit'), n.minute || (n.minute = '2-digit')),
    n.timeZoneName === 'long' && (n.timeZoneName = 'short'),
    e.omitZeroMinute && (n.second || n.millisecond) && delete e.omitZeroMinute
}
function Lc(n, e, t, r, i) {
  return (
    (n = n.replace(Oc, '')),
    t.timeZoneName === 'short' &&
      (n = Fc(n, i.timeZone === 'UTC' || e.timeZoneOffset == null ? 'UTC' : Gr(e.timeZoneOffset))),
    r.omitCommas && (n = n.replace(Mc, '').trim()),
    r.omitZeroMinute && (n = n.replace(':00', '')),
    r.meridiem === !1
      ? (n = n.replace(Zt, '').trim())
      : r.meridiem === 'narrow'
      ? (n = n.replace(Zt, (s, o) => o.toLocaleLowerCase()))
      : r.meridiem === 'short'
      ? (n = n.replace(Zt, (s, o) => `${o.toLocaleLowerCase()}m`))
      : r.meridiem === 'lowercase' && (n = n.replace(Zt, (s) => s.toLocaleLowerCase())),
    (n = n.replace(kc, ' ')),
    (n = n.trim()),
    n
  )
}
function Fc(n, e) {
  let t = !1
  return (n = n.replace(Nc, () => ((t = !0), e))), t || (n += ` ${e}`), n
}
function jc(n, e, t, r, i) {
  let s = []
  return (
    i === 'long' ? s.push(t) : (i === 'short' || i === 'narrow') && s.push(e),
    (i === 'long' || i === 'short') && s.push(' '),
    s.push(r.simpleNumberFormat.format(n)),
    r.options.direction === 'rtl' && s.reverse(),
    s.join('')
  )
}
function Uc(n, e, t) {
  return t.getMarkerYear(n) !== t.getMarkerYear(e)
    ? 5
    : t.getMarkerMonth(n) !== t.getMarkerMonth(e)
    ? 4
    : t.getMarkerDay(n) !== t.getMarkerDay(e)
    ? 2
    : Fe(n) !== Fe(e)
    ? 1
    : 0
}
function zc(n, e) {
  let t = {}
  for (let r in n) (!(r in Dn) || Dn[r] <= e) && (t[r] = n[r])
  return t
}
function Wc(n, e, t, r) {
  let i = 0
  for (; i < n.length; ) {
    let s = n.indexOf(e, i)
    if (s === -1) break
    let o = n.substr(0, s)
    i = s + e.length
    let l = n.substr(i),
      a = 0
    for (; a < t.length; ) {
      let c = t.indexOf(r, a)
      if (c === -1) break
      let d = t.substr(0, c)
      a = c + r.length
      let u = t.substr(a)
      if (o === d && l === u) return { before: o, after: l }
    }
  }
  return null
}
function ns(n, e) {
  let t = e.markerToArray(n.marker)
  return {
    marker: n.marker,
    timeZoneOffset: n.timeZoneOffset,
    array: t,
    year: t[0],
    month: t[1],
    day: t[2],
    hour: t[3],
    minute: t[4],
    second: t[5],
    millisecond: t[6]
  }
}
function wn(n, e, t, r) {
  let i = ns(n, t.calendarSystem),
    s = e ? ns(e, t.calendarSystem) : null
  return {
    date: i,
    start: i,
    end: s,
    timeZone: t.timeZone,
    localeCodes: t.locale.codes,
    defaultSeparator: r || t.defaultSeparator
  }
}
class Vc {
  constructor(e) {
    this.cmdStr = e
  }
  format(e, t, r) {
    return t.cmdFormatter(this.cmdStr, wn(e, null, t, r))
  }
  formatRange(e, t, r, i) {
    return r.cmdFormatter(this.cmdStr, wn(e, t, r, i))
  }
}
class Gc {
  constructor(e) {
    this.func = e
  }
  format(e, t, r) {
    return this.func(wn(e, null, t, r))
  }
  formatRange(e, t, r, i) {
    return this.func(wn(e, t, r, i))
  }
}
function V(n) {
  return typeof n == 'object' && n
    ? new Pc(n)
    : typeof n == 'string'
    ? new Vc(n)
    : typeof n == 'function'
    ? new Gc(n)
    : null
}
const rs = {
    navLinkDayClick: v,
    navLinkWeekClick: v,
    duration: M,
    bootstrapFontAwesome: v,
    buttonIcons: v,
    customButtons: v,
    defaultAllDayEventDuration: M,
    defaultTimedEventDuration: M,
    nextDayThreshold: M,
    scrollTime: M,
    scrollTimeReset: Boolean,
    slotMinTime: M,
    slotMaxTime: M,
    dayPopoverFormat: V,
    slotDuration: M,
    snapDuration: M,
    headerToolbar: v,
    footerToolbar: v,
    defaultRangeSeparator: String,
    titleRangeSeparator: String,
    forceEventDuration: Boolean,
    dayHeaders: Boolean,
    dayHeaderFormat: V,
    dayHeaderClassNames: v,
    dayHeaderContent: v,
    dayHeaderDidMount: v,
    dayHeaderWillUnmount: v,
    dayCellClassNames: v,
    dayCellContent: v,
    dayCellDidMount: v,
    dayCellWillUnmount: v,
    initialView: String,
    aspectRatio: Number,
    weekends: Boolean,
    weekNumberCalculation: v,
    weekNumbers: Boolean,
    weekNumberClassNames: v,
    weekNumberContent: v,
    weekNumberDidMount: v,
    weekNumberWillUnmount: v,
    editable: Boolean,
    viewClassNames: v,
    viewDidMount: v,
    viewWillUnmount: v,
    nowIndicator: Boolean,
    nowIndicatorClassNames: v,
    nowIndicatorContent: v,
    nowIndicatorDidMount: v,
    nowIndicatorWillUnmount: v,
    showNonCurrentDates: Boolean,
    lazyFetching: Boolean,
    startParam: String,
    endParam: String,
    timeZoneParam: String,
    timeZone: String,
    locales: v,
    locale: v,
    themeSystem: String,
    dragRevertDuration: Number,
    dragScroll: Boolean,
    allDayMaintainDuration: Boolean,
    unselectAuto: Boolean,
    dropAccept: v,
    eventOrder: ic,
    eventOrderStrict: Boolean,
    handleWindowResize: Boolean,
    windowResizeDelay: Number,
    longPressDelay: Number,
    eventDragMinDistance: Number,
    expandRows: Boolean,
    height: v,
    contentHeight: v,
    direction: String,
    weekNumberFormat: V,
    eventResizableFromStart: Boolean,
    displayEventTime: Boolean,
    displayEventEnd: Boolean,
    weekText: String,
    weekTextLong: String,
    progressiveEventRendering: Boolean,
    businessHours: v,
    initialDate: v,
    now: v,
    eventDataTransform: v,
    stickyHeaderDates: v,
    stickyFooterScrollbar: v,
    viewHeight: v,
    defaultAllDay: Boolean,
    eventSourceFailure: v,
    eventSourceSuccess: v,
    eventDisplay: String,
    eventStartEditable: Boolean,
    eventDurationEditable: Boolean,
    eventOverlap: v,
    eventConstraint: v,
    eventAllow: v,
    eventBackgroundColor: String,
    eventBorderColor: String,
    eventTextColor: String,
    eventColor: String,
    eventClassNames: v,
    eventContent: v,
    eventDidMount: v,
    eventWillUnmount: v,
    selectConstraint: v,
    selectOverlap: v,
    selectAllow: v,
    droppable: Boolean,
    unselectCancel: String,
    slotLabelFormat: v,
    slotLaneClassNames: v,
    slotLaneContent: v,
    slotLaneDidMount: v,
    slotLaneWillUnmount: v,
    slotLabelClassNames: v,
    slotLabelContent: v,
    slotLabelDidMount: v,
    slotLabelWillUnmount: v,
    dayMaxEvents: v,
    dayMaxEventRows: v,
    dayMinWidth: Number,
    slotLabelInterval: M,
    allDayText: String,
    allDayClassNames: v,
    allDayContent: v,
    allDayDidMount: v,
    allDayWillUnmount: v,
    slotMinWidth: Number,
    navLinks: Boolean,
    eventTimeFormat: V,
    rerenderDelay: Number,
    moreLinkText: v,
    moreLinkHint: v,
    selectMinDistance: Number,
    selectable: Boolean,
    selectLongPressDelay: Number,
    eventLongPressDelay: Number,
    selectMirror: Boolean,
    eventMaxStack: Number,
    eventMinHeight: Number,
    eventMinWidth: Number,
    eventShortHeight: Number,
    slotEventOverlap: Boolean,
    plugins: v,
    firstDay: Number,
    dayCount: Number,
    dateAlignment: String,
    dateIncrement: M,
    hiddenDays: v,
    fixedWeekCount: Boolean,
    validRange: v,
    visibleRange: v,
    titleFormat: v,
    eventInteractive: Boolean,
    noEventsText: String,
    viewHint: v,
    navLinkHint: v,
    closeHint: String,
    timeHint: String,
    eventHint: String,
    moreLinkClick: v,
    moreLinkClassNames: v,
    moreLinkContent: v,
    moreLinkDidMount: v,
    moreLinkWillUnmount: v,
    monthStartFormat: V,
    handleCustomRendering: v,
    customRenderingMetaMap: v
  },
  Mt = {
    eventDisplay: 'auto',
    defaultRangeSeparator: ' - ',
    titleRangeSeparator: ' – ',
    defaultTimedEventDuration: '01:00:00',
    defaultAllDayEventDuration: { day: 1 },
    forceEventDuration: !1,
    nextDayThreshold: '00:00:00',
    dayHeaders: !0,
    initialView: '',
    aspectRatio: 1.35,
    headerToolbar: { start: 'title', center: '', end: 'today prev,next' },
    weekends: !0,
    weekNumbers: !1,
    weekNumberCalculation: 'local',
    editable: !1,
    nowIndicator: !1,
    scrollTime: '06:00:00',
    scrollTimeReset: !0,
    slotMinTime: '00:00:00',
    slotMaxTime: '24:00:00',
    showNonCurrentDates: !0,
    lazyFetching: !0,
    startParam: 'start',
    endParam: 'end',
    timeZoneParam: 'timeZone',
    timeZone: 'local',
    locales: [],
    locale: '',
    themeSystem: 'standard',
    dragRevertDuration: 500,
    dragScroll: !0,
    allDayMaintainDuration: !1,
    unselectAuto: !0,
    dropAccept: '*',
    eventOrder: 'start,-duration,allDay,title',
    dayPopoverFormat: { month: 'long', day: 'numeric', year: 'numeric' },
    handleWindowResize: !0,
    windowResizeDelay: 100,
    longPressDelay: 1e3,
    eventDragMinDistance: 5,
    expandRows: !1,
    navLinks: !1,
    selectable: !1,
    eventMinHeight: 15,
    eventMinWidth: 30,
    eventShortHeight: 30,
    monthStartFormat: { month: 'long', day: 'numeric' }
  },
  is = {
    datesSet: v,
    eventsSet: v,
    eventAdd: v,
    eventChange: v,
    eventRemove: v,
    windowResize: v,
    eventClick: v,
    eventMouseEnter: v,
    eventMouseLeave: v,
    select: v,
    unselect: v,
    loading: v,
    _unmount: v,
    _beforeprint: v,
    _afterprint: v,
    _noEventDrop: v,
    _noEventResize: v,
    _resize: v,
    _scrollRequest: v
  },
  ss = {
    buttonText: v,
    buttonHints: v,
    views: v,
    plugins: v,
    initialEvents: v,
    events: v,
    eventSources: v
  },
  qe = {
    headerToolbar: Qe,
    footerToolbar: Qe,
    buttonText: Qe,
    buttonHints: Qe,
    buttonIcons: Qe,
    dateIncrement: Qe,
    plugins: Xt,
    events: Xt,
    eventSources: Xt,
    resources: Xt
  }
function Qe(n, e) {
  return typeof n == 'object' && typeof e == 'object' && n && e ? Ae(n, e) : n === e
}
function Xt(n, e) {
  return Array.isArray(n) && Array.isArray(e) ? Ue(n, e) : n === e
}
const Yc = {
  type: String,
  component: v,
  buttonText: String,
  buttonTextKey: String,
  dateProfileGeneratorClass: v,
  usesMinMaxTime: Boolean,
  classNames: v,
  content: v,
  didMount: v,
  willUnmount: v
}
function nr(n) {
  return qr(n, qe)
}
function Yr(n, e) {
  let t = {},
    r = {}
  for (let i in e) i in n && (t[i] = e[i](n[i]))
  for (let i in n) i in e || (r[i] = n[i])
  return { refined: t, extra: r }
}
function v(n) {
  return n
}
const { hasOwnProperty: Cn } = Object.prototype
function qr(n, e) {
  let t = {}
  if (e) {
    for (let r in e)
      if (e[r] === Qe) {
        let i = []
        for (let s = n.length - 1; s >= 0; s -= 1) {
          let o = n[s][r]
          if (typeof o == 'object' && o) i.unshift(o)
          else if (o !== void 0) {
            t[r] = o
            break
          }
        }
        i.length && (t[r] = qr(i))
      }
  }
  for (let r = n.length - 1; r >= 0; r -= 1) {
    let i = n[r]
    for (let s in i) s in t || (t[s] = i[s])
  }
  return t
}
function Je(n, e) {
  let t = {}
  for (let r in n) e(n[r], r) && (t[r] = n[r])
  return t
}
function Te(n, e) {
  let t = {}
  for (let r in n) t[r] = e(n[r], r)
  return t
}
function yo(n) {
  let e = {}
  for (let t of n) e[t] = !0
  return e
}
function Qr(n) {
  let e = []
  for (let t in n) e.push(n[t])
  return e
}
function Ae(n, e) {
  if (n === e) return !0
  for (let t in n) if (Cn.call(n, t) && !(t in e)) return !1
  for (let t in e) if (Cn.call(e, t) && n[t] !== e[t]) return !1
  return !0
}
const qc = /^on[A-Z]/
function Qc(n, e) {
  const t = Dr(n, e)
  for (let r of t) if (!qc.test(r)) return !1
  return !0
}
function Dr(n, e) {
  let t = []
  for (let r in n) Cn.call(n, r) && (r in e || t.push(r))
  for (let r in e) Cn.call(e, r) && n[r] !== e[r] && t.push(r)
  return t
}
function rr(n, e, t = {}) {
  if (n === e) return !0
  for (let r in e) if (!(r in n && Zc(n[r], e[r], t[r]))) return !1
  for (let r in n) if (!(r in e)) return !1
  return !0
}
function Zc(n, e, t) {
  return n === e || t === !0 ? !0 : t ? t(n, e) : !1
}
function Xc(n, e = 0, t, r = 1) {
  let i = []
  t == null && (t = Object.keys(n).length)
  for (let s = e; s < t; s += r) {
    let o = n[s]
    o !== void 0 && i.push(o)
  }
  return i
}
let Eo = {}
function $c(n, e) {
  Eo[n] = e
}
function Jc(n) {
  return new Eo[n]()
}
class Kc {
  getMarkerYear(e) {
    return e.getUTCFullYear()
  }
  getMarkerMonth(e) {
    return e.getUTCMonth()
  }
  getMarkerDay(e) {
    return e.getUTCDate()
  }
  arrayToMarker(e) {
    return te(e)
  }
  markerToArray(e) {
    return Le(e)
  }
}
$c('gregory', Kc)
const ed =
  /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/
function td(n) {
  let e = ed.exec(n)
  if (e) {
    let t = new Date(
      Date.UTC(
        Number(e[1]),
        e[3] ? Number(e[3]) - 1 : 0,
        Number(e[5] || 1),
        Number(e[7] || 0),
        Number(e[8] || 0),
        Number(e[10] || 0),
        e[12] ? +`0.${e[12]}` * 1e3 : 0
      )
    )
    if (vo(t)) {
      let r = null
      return (
        e[13] && (r = (e[15] === '-' ? -1 : 1) * (Number(e[16] || 0) * 60 + Number(e[18] || 0))),
        { marker: t, isTimeUnspecified: !e[6], timeZoneOffset: r }
      )
    }
  }
  return null
}
class nd {
  constructor(e) {
    let t = (this.timeZone = e.timeZone),
      r = t !== 'local' && t !== 'UTC'
    e.namedTimeZoneImpl && r && (this.namedTimeZoneImpl = new e.namedTimeZoneImpl(t)),
      (this.canComputeOffset = !!(!r || this.namedTimeZoneImpl)),
      (this.calendarSystem = Jc(e.calendarSystem)),
      (this.locale = e.locale),
      (this.weekDow = e.locale.week.dow),
      (this.weekDoy = e.locale.week.doy),
      e.weekNumberCalculation === 'ISO' && ((this.weekDow = 1), (this.weekDoy = 4)),
      typeof e.firstDay == 'number' && (this.weekDow = e.firstDay),
      typeof e.weekNumberCalculation == 'function' &&
        (this.weekNumberFunc = e.weekNumberCalculation),
      (this.weekText = e.weekText != null ? e.weekText : e.locale.options.weekText),
      (this.weekTextLong =
        (e.weekTextLong != null ? e.weekTextLong : e.locale.options.weekTextLong) || this.weekText),
      (this.cmdFormatter = e.cmdFormatter),
      (this.defaultSeparator = e.defaultSeparator)
  }
  createMarker(e) {
    let t = this.createMarkerMeta(e)
    return t === null ? null : t.marker
  }
  createNowMarker() {
    return this.canComputeOffset ? this.timestampToMarker(new Date().valueOf()) : te(Ji(new Date()))
  }
  createMarkerMeta(e) {
    if (typeof e == 'string') return this.parse(e)
    let t = null
    return (
      typeof e == 'number'
        ? (t = this.timestampToMarker(e))
        : e instanceof Date
        ? ((e = e.valueOf()), isNaN(e) || (t = this.timestampToMarker(e)))
        : Array.isArray(e) && (t = te(e)),
      t === null || !vo(t) ? null : { marker: t, isTimeUnspecified: !1, forcedTzo: null }
    )
  }
  parse(e) {
    let t = td(e)
    if (t === null) return null
    let { marker: r } = t,
      i = null
    return (
      t.timeZoneOffset !== null &&
        (this.canComputeOffset
          ? (r = this.timestampToMarker(r.valueOf() - t.timeZoneOffset * 60 * 1e3))
          : (i = t.timeZoneOffset)),
      { marker: r, isTimeUnspecified: t.isTimeUnspecified, forcedTzo: i }
    )
  }
  getYear(e) {
    return this.calendarSystem.getMarkerYear(e)
  }
  getMonth(e) {
    return this.calendarSystem.getMarkerMonth(e)
  }
  getDay(e) {
    return this.calendarSystem.getMarkerDay(e)
  }
  add(e, t) {
    let r = this.calendarSystem.markerToArray(e)
    return (
      (r[0] += t.years),
      (r[1] += t.months),
      (r[2] += t.days),
      (r[6] += t.milliseconds),
      this.calendarSystem.arrayToMarker(r)
    )
  }
  subtract(e, t) {
    let r = this.calendarSystem.markerToArray(e)
    return (
      (r[0] -= t.years),
      (r[1] -= t.months),
      (r[2] -= t.days),
      (r[6] -= t.milliseconds),
      this.calendarSystem.arrayToMarker(r)
    )
  }
  addYears(e, t) {
    let r = this.calendarSystem.markerToArray(e)
    return (r[0] += t), this.calendarSystem.arrayToMarker(r)
  }
  addMonths(e, t) {
    let r = this.calendarSystem.markerToArray(e)
    return (r[1] += t), this.calendarSystem.arrayToMarker(r)
  }
  diffWholeYears(e, t) {
    let { calendarSystem: r } = this
    return Fe(e) === Fe(t) &&
      r.getMarkerDay(e) === r.getMarkerDay(t) &&
      r.getMarkerMonth(e) === r.getMarkerMonth(t)
      ? r.getMarkerYear(t) - r.getMarkerYear(e)
      : null
  }
  diffWholeMonths(e, t) {
    let { calendarSystem: r } = this
    return Fe(e) === Fe(t) && r.getMarkerDay(e) === r.getMarkerDay(t)
      ? r.getMarkerMonth(t) - r.getMarkerMonth(e) + (r.getMarkerYear(t) - r.getMarkerYear(e)) * 12
      : null
  }
  greatestWholeUnit(e, t) {
    let r = this.diffWholeYears(e, t)
    return r !== null
      ? { unit: 'year', value: r }
      : ((r = this.diffWholeMonths(e, t)),
        r !== null
          ? { unit: 'month', value: r }
          : ((r = Dc(e, t)),
            r !== null
              ? { unit: 'week', value: r }
              : ((r = An(e, t)),
                r !== null
                  ? { unit: 'day', value: r }
                  : ((r = yc(e, t)),
                    dn(r)
                      ? { unit: 'hour', value: r }
                      : ((r = Ec(e, t)),
                        dn(r)
                          ? { unit: 'minute', value: r }
                          : ((r = Sc(e, t)),
                            dn(r)
                              ? { unit: 'second', value: r }
                              : { unit: 'millisecond', value: t.valueOf() - e.valueOf() }))))))
  }
  countDurationsBetween(e, t, r) {
    let i
    return r.years && ((i = this.diffWholeYears(e, t)), i !== null)
      ? i / pc(r)
      : r.months && ((i = this.diffWholeMonths(e, t)), i !== null)
      ? i / mc(r)
      : r.days && ((i = An(e, t)), i !== null)
      ? i / ft(r)
      : (t.valueOf() - e.valueOf()) / ge(r)
  }
  startOf(e, t) {
    return t === 'year'
      ? this.startOfYear(e)
      : t === 'month'
      ? this.startOfMonth(e)
      : t === 'week'
      ? this.startOfWeek(e)
      : t === 'day'
      ? F(e)
      : t === 'hour'
      ? wc(e)
      : t === 'minute'
      ? Cc(e)
      : t === 'second'
      ? _c(e)
      : null
  }
  startOfYear(e) {
    return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e)])
  }
  startOfMonth(e) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(e),
      this.calendarSystem.getMarkerMonth(e)
    ])
  }
  startOfWeek(e) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(e),
      this.calendarSystem.getMarkerMonth(e),
      e.getUTCDate() - ((e.getUTCDay() - this.weekDow + 7) % 7)
    ])
  }
  computeWeekNumber(e) {
    return this.weekNumberFunc
      ? this.weekNumberFunc(this.toDate(e))
      : Rc(e, this.weekDow, this.weekDoy)
  }
  format(e, t, r = {}) {
    return t.format(
      { marker: e, timeZoneOffset: r.forcedTzo != null ? r.forcedTzo : this.offsetForMarker(e) },
      this
    )
  }
  formatRange(e, t, r, i = {}) {
    return (
      i.isEndExclusive && (t = ze(t, -1)),
      r.formatRange(
        {
          marker: e,
          timeZoneOffset: i.forcedStartTzo != null ? i.forcedStartTzo : this.offsetForMarker(e)
        },
        {
          marker: t,
          timeZoneOffset: i.forcedEndTzo != null ? i.forcedEndTzo : this.offsetForMarker(t)
        },
        this,
        i.defaultSeparator
      )
    )
  }
  formatIso(e, t = {}) {
    let r = null
    return (
      t.omitTimeZoneOffset ||
        (t.forcedTzo != null ? (r = t.forcedTzo) : (r = this.offsetForMarker(e))),
      bo(e, r, t.omitTime)
    )
  }
  timestampToMarker(e) {
    return this.timeZone === 'local'
      ? te(Ji(new Date(e)))
      : this.timeZone === 'UTC' || !this.namedTimeZoneImpl
      ? new Date(e)
      : te(this.namedTimeZoneImpl.timestampToArray(e))
  }
  offsetForMarker(e) {
    return this.timeZone === 'local'
      ? -Ki(Le(e)).getTimezoneOffset()
      : this.timeZone === 'UTC'
      ? 0
      : this.namedTimeZoneImpl
      ? this.namedTimeZoneImpl.offsetForArray(Le(e))
      : null
  }
  toDate(e, t) {
    return this.timeZone === 'local'
      ? Ki(Le(e))
      : this.timeZone === 'UTC'
      ? new Date(e.valueOf())
      : this.namedTimeZoneImpl
      ? new Date(e.valueOf() - this.namedTimeZoneImpl.offsetForArray(Le(e)) * 1e3 * 60)
      : new Date(e.valueOf() - (t || 0))
  }
}
class Bt {
  constructor(e) {
    this.iconOverrideOption && this.setIconOverride(e[this.iconOverrideOption])
  }
  setIconOverride(e) {
    let t, r
    if (typeof e == 'object' && e) {
      t = Object.assign({}, this.iconClasses)
      for (r in e) t[r] = this.applyIconOverridePrefix(e[r])
      this.iconClasses = t
    } else e === !1 && (this.iconClasses = {})
  }
  applyIconOverridePrefix(e) {
    let t = this.iconOverridePrefix
    return t && e.indexOf(t) !== 0 && (e = t + e), e
  }
  getClass(e) {
    return this.classes[e] || ''
  }
  getIconClass(e, t) {
    let r
    return (
      t && this.rtlIconClasses
        ? (r = this.rtlIconClasses[e] || this.iconClasses[e])
        : (r = this.iconClasses[e]),
      r ? `${this.baseIconClass} ${r}` : ''
    )
  }
  getCustomButtonIconClass(e) {
    let t
    return this.iconOverrideCustomButtonOption && ((t = e[this.iconOverrideCustomButtonOption]), t)
      ? `${this.baseIconClass} ${this.applyIconOverridePrefix(t)}`
      : ''
  }
}
Bt.prototype.classes = {}
Bt.prototype.iconClasses = {}
Bt.prototype.baseIconClass = ''
Bt.prototype.iconOverridePrefix = ''
function os(n) {
  n()
  let e = C.debounceRendering,
    t = []
  function r(i) {
    t.push(i)
  }
  for (C.debounceRendering = r, Ot(g(rd, {}), document.createElement('div')); t.length; )
    t.shift()()
  C.debounceRendering = e
}
class rd extends le {
  render() {
    return g('div', {})
  }
  componentDidMount() {
    this.setState({})
  }
}
function So(n) {
  let e = Ta(n),
    t = e.Provider
  return (
    (e.Provider = function () {
      let r = !this.getChildContext,
        i = t.apply(this, arguments)
      if (r) {
        let s = []
        ;(this.shouldComponentUpdate = (o) => {
          this.props.value !== o.value &&
            s.forEach((l) => {
              ;(l.context = o.value), l.forceUpdate()
            })
        }),
          (this.sub = (o) => {
            s.push(o)
            let l = o.componentWillUnmount
            o.componentWillUnmount = () => {
              s.splice(s.indexOf(o), 1), l && l.call(o)
            }
          })
      }
      return i
    }),
    e
  )
}
class id {
  constructor(e, t, r, i) {
    ;(this.execFunc = e),
      (this.emitter = t),
      (this.scrollTime = r),
      (this.scrollTimeReset = i),
      (this.handleScrollRequest = (s) => {
        ;(this.queuedRequest = Object.assign({}, this.queuedRequest || {}, s)), this.drain()
      }),
      t.on('_scrollRequest', this.handleScrollRequest),
      this.fireInitialScroll()
  }
  detach() {
    this.emitter.off('_scrollRequest', this.handleScrollRequest)
  }
  update(e) {
    e && this.scrollTimeReset ? this.fireInitialScroll() : this.drain()
  }
  fireInitialScroll() {
    this.handleScrollRequest({ time: this.scrollTime })
  }
  drain() {
    this.queuedRequest && this.execFunc(this.queuedRequest) && (this.queuedRequest = null)
  }
}
const Me = So({})
function sd(n, e, t, r, i, s, o, l, a, c, d, u, h) {
  return {
    dateEnv: i,
    options: t,
    pluginHooks: o,
    emitter: c,
    dispatch: l,
    getCurrentData: a,
    calendarApi: d,
    viewSpec: n,
    viewApi: e,
    dateProfileGenerator: r,
    theme: s,
    isRtl: t.direction === 'rtl',
    addResizeHandler(f) {
      c.on('_resize', f)
    },
    removeResizeHandler(f) {
      c.off('_resize', f)
    },
    createScrollResponder(f) {
      return new id(f, c, M(t.scrollTime), t.scrollTimeReset)
    },
    registerInteractiveComponent: u,
    unregisterInteractiveComponent: h
  }
}
class rt extends le {
  shouldComponentUpdate(e, t) {
    return (
      this.debug && console.log(Dr(e, this.props), Dr(t, this.state)),
      !rr(this.props, e, this.propEquality) || !rr(this.state, t, this.stateEquality)
    )
  }
  safeSetState(e) {
    rr(this.state, Object.assign(Object.assign({}, this.state), e), this.stateEquality) ||
      this.setState(e)
  }
}
rt.addPropsEquality = od
rt.addStateEquality = ld
rt.contextType = Me
rt.prototype.propEquality = {}
rt.prototype.stateEquality = {}
class B extends rt {}
B.contextType = Me
function od(n) {
  let e = Object.create(this.prototype.propEquality)
  Object.assign(e, n), (this.prototype.propEquality = e)
}
function ld(n) {
  let e = Object.create(this.prototype.stateEquality)
  Object.assign(e, n), (this.prototype.stateEquality = e)
}
function xe(n, e) {
  typeof n == 'function' ? n(e) : n && (n.current = e)
}
class Zr extends B {
  constructor() {
    super(...arguments),
      (this.id = tt()),
      (this.queuedDomNodes = []),
      (this.currentDomNodes = []),
      (this.handleEl = (e) => {
        wr(this.props.generatorName, this.context.options) || this.updateElRef(e)
      }),
      (this.updateElRef = (e) => {
        this.props.elRef && xe(this.props.elRef, e)
      })
  }
  render() {
    const { props: e, context: t } = this,
      { options: r } = t,
      { customGenerator: i, defaultGenerator: s, renderProps: o } = e,
      l = Ao(e, [], this.handleEl)
    let a = !1,
      c,
      d = [],
      u
    if (i != null) {
      const h = typeof i == 'function' ? i(o, g) : i
      if (h === !0) a = !0
      else {
        const f = h && typeof h == 'object'
        f && 'html' in h
          ? (l.dangerouslySetInnerHTML = { __html: h.html })
          : f && 'domNodes' in h
          ? (d = Array.prototype.slice.call(h.domNodes))
          : (f ? Gs(h) : typeof h != 'function')
          ? (c = h)
          : (u = h)
      }
    } else a = !wr(e.generatorName, r)
    return (
      a && s && (c = s(o)),
      (this.queuedDomNodes = d),
      (this.currentGeneratorMeta = u),
      g(e.elTag, l, c)
    )
  }
  componentDidMount() {
    this.applyQueueudDomNodes(), this.triggerCustomRendering(!0)
  }
  componentDidUpdate() {
    this.applyQueueudDomNodes(), this.triggerCustomRendering(!0)
  }
  componentWillUnmount() {
    this.triggerCustomRendering(!1)
  }
  triggerCustomRendering(e) {
    var t
    const { props: r, context: i } = this,
      { handleCustomRendering: s, customRenderingMetaMap: o } = i.options
    if (s) {
      const l =
        (t = this.currentGeneratorMeta) !== null && t !== void 0
          ? t
          : o == null
          ? void 0
          : o[r.generatorName]
      l &&
        s(
          Object.assign(
            Object.assign(
              {
                id: this.id,
                isActive: e,
                containerEl: this.base,
                reportNewContainerEl: this.updateElRef,
                generatorMeta: l
              },
              r
            ),
            { elClasses: (r.elClasses || []).filter(ad) }
          )
        )
    }
  }
  applyQueueudDomNodes() {
    const { queuedDomNodes: e, currentDomNodes: t } = this,
      r = this.base
    if (!Ue(e, t)) {
      t.forEach(jr)
      for (let i of e) r.appendChild(i)
      this.currentDomNodes = e
    }
  }
}
Zr.addPropsEquality({ elClasses: Ue, elStyle: Ae, elAttrs: Qc, renderProps: Ae })
function wr(n, e) {
  var t
  return !!(
    e.handleCustomRendering &&
    n &&
    !((t = e.customRenderingMetaMap) === null || t === void 0) &&
    t[n]
  )
}
function Ao(n, e, t) {
  const r = Object.assign(Object.assign({}, n.elAttrs), { ref: t })
  return (
    (n.elClasses || e) &&
      (r.className = (n.elClasses || [])
        .concat(e || [])
        .concat(r.className || [])
        .filter(Boolean)
        .join(' ')),
    n.elStyle && (r.style = n.elStyle),
    r
  )
}
function ad(n) {
  return !!n
}
const Do = So(0)
class ce extends le {
  constructor() {
    super(...arguments),
      (this.InnerContent = cd.bind(void 0, this)),
      (this.handleEl = (e) => {
        ;(this.el = e), this.props.elRef && xe(this.props.elRef, e)
      })
  }
  render() {
    const { props: e } = this,
      t = dd(e.classNameGenerator, e.renderProps)
    if (e.children) {
      const r = Ao(e, t, this.handleEl),
        i = e.children(this.InnerContent, e.renderProps, r)
      return e.elTag ? g(e.elTag, r, i) : i
    } else
      return g(
        Zr,
        Object.assign(Object.assign({}, e), {
          elRef: this.handleEl,
          elTag: e.elTag || 'div',
          elClasses: (e.elClasses || []).concat(t),
          renderId: this.context
        })
      )
  }
  componentDidMount() {
    var e, t
    ;(t = (e = this.props).didMount) === null ||
      t === void 0 ||
      t.call(e, Object.assign(Object.assign({}, this.props.renderProps), { el: this.el }))
  }
  componentWillUnmount() {
    var e, t
    ;(t = (e = this.props).willUnmount) === null ||
      t === void 0 ||
      t.call(e, Object.assign(Object.assign({}, this.props.renderProps), { el: this.el }))
  }
}
ce.contextType = Do
function cd(n, e) {
  const t = n.props
  return g(
    Zr,
    Object.assign(
      {
        renderProps: t.renderProps,
        generatorName: t.generatorName,
        customGenerator: t.customGenerator,
        defaultGenerator: t.defaultGenerator,
        renderId: n.context
      },
      e
    )
  )
}
function dd(n, e) {
  const t = typeof n == 'function' ? n(e) : n || []
  return typeof t == 'string' ? [t] : t
}
class _n extends B {
  render() {
    let { props: e, context: t } = this,
      { options: r } = t,
      i = { view: t.viewApi }
    return g(
      ce,
      Object.assign({}, e, {
        elTag: e.elTag || 'div',
        elClasses: [...wo(e.viewSpec), ...(e.elClasses || [])],
        renderProps: i,
        classNameGenerator: r.viewClassNames,
        generatorName: void 0,
        didMount: r.viewDidMount,
        willUnmount: r.viewWillUnmount
      }),
      () => e.children
    )
  }
}
function wo(n) {
  return [`fc-${n.type}-view`, 'fc-view']
}
function ud(n, e) {
  let t = null,
    r = null
  return (
    n.start && (t = e.createMarker(n.start)),
    n.end && (r = e.createMarker(n.end)),
    (!t && !r) || (t && r && r < t) ? null : { start: t, end: r }
  )
}
function ls(n, e) {
  let t = [],
    { start: r } = e,
    i,
    s
  for (n.sort(fd), i = 0; i < n.length; i += 1)
    (s = n[i]), s.start > r && t.push({ start: r, end: s.start }), s.end > r && (r = s.end)
  return r < e.end && t.push({ start: r, end: e.end }), t
}
function fd(n, e) {
  return n.start.valueOf() - e.start.valueOf()
}
function Ke(n, e) {
  let { start: t, end: r } = n,
    i = null
  return (
    e.start !== null &&
      (t === null ? (t = e.start) : (t = new Date(Math.max(t.valueOf(), e.start.valueOf())))),
    e.end != null &&
      (r === null ? (r = e.end) : (r = new Date(Math.min(r.valueOf(), e.end.valueOf())))),
    (t === null || r === null || t < r) && (i = { start: t, end: r }),
    i
  )
}
function hd(n, e) {
  return (
    (n.start === null ? null : n.start.valueOf()) ===
      (e.start === null ? null : e.start.valueOf()) &&
    (n.end === null ? null : n.end.valueOf()) === (e.end === null ? null : e.end.valueOf())
  )
}
function Xr(n, e) {
  return (
    (n.end === null || e.start === null || n.end > e.start) &&
    (n.start === null || e.end === null || n.start < e.end)
  )
}
function Bn(n, e) {
  return (
    (n.start === null || (e.start !== null && e.start >= n.start)) &&
    (n.end === null || (e.end !== null && e.end <= n.end))
  )
}
function _e(n, e) {
  return (n.start === null || e >= n.start) && (n.end === null || e < n.end)
}
function gd(n, e) {
  return e.start != null && n < e.start
    ? e.start
    : e.end != null && n >= e.end
    ? new Date(e.end.valueOf() - 1)
    : n
}
function Co(n) {
  let e = Math.floor(nt(n.start, n.end)) || 1,
    t = F(n.start),
    r = $(t, e)
  return { start: t, end: r }
}
function _o(n, e = M(0)) {
  let t = null,
    r = null
  if (n.end) {
    r = F(n.end)
    let i = n.end.valueOf() - r.valueOf()
    i && i >= ge(e) && (r = $(r, 1))
  }
  return n.start && ((t = F(n.start)), r && r <= t && (r = $(t, 1))), { start: t, end: r }
}
function ct(n, e, t, r) {
  return r === 'year'
    ? M(t.diffWholeYears(n, e), 'year')
    : r === 'month'
    ? M(t.diffWholeMonths(n, e), 'month')
    : Ac(n, e)
}
function pd(n, e) {
  switch (e.type) {
    case 'CHANGE_DATE':
      return e.dateMarker
    default:
      return n
  }
}
function md(n, e) {
  let t = n.initialDate
  return t != null ? e.createMarker(t) : Lt(n.now, e)
}
function Lt(n, e) {
  return typeof n == 'function' && (n = n()), n == null ? e.createNowMarker() : e.createMarker(n)
}
class Ro {
  constructor(e) {
    ;(this.props = e), (this.nowDate = Lt(e.nowInput, e.dateEnv)), this.initHiddenDays()
  }
  buildPrev(e, t, r) {
    let { dateEnv: i } = this.props,
      s = i.subtract(i.startOf(t, e.currentRangeUnit), e.dateIncrement)
    return this.build(s, -1, r)
  }
  buildNext(e, t, r) {
    let { dateEnv: i } = this.props,
      s = i.add(i.startOf(t, e.currentRangeUnit), e.dateIncrement)
    return this.build(s, 1, r)
  }
  build(e, t, r = !0) {
    let { props: i } = this,
      s,
      o,
      l,
      a,
      c,
      d
    return (
      (s = this.buildValidRange()),
      (s = this.trimHiddenDays(s)),
      r && (e = gd(e, s)),
      (o = this.buildCurrentRangeInfo(e, t)),
      (l = /^(year|month|week|day)$/.test(o.unit)),
      (a = this.buildRenderRange(this.trimHiddenDays(o.range), o.unit, l)),
      (a = this.trimHiddenDays(a)),
      (c = a),
      i.showNonCurrentDates || (c = Ke(c, o.range)),
      (c = this.adjustActiveRange(c)),
      (c = Ke(c, s)),
      (d = Xr(o.range, s)),
      _e(a, e) || (e = a.start),
      {
        currentDate: e,
        validRange: s,
        currentRange: o.range,
        currentRangeUnit: o.unit,
        isRangeAllDay: l,
        activeRange: c,
        renderRange: a,
        slotMinTime: i.slotMinTime,
        slotMaxTime: i.slotMaxTime,
        isValid: d,
        dateIncrement: this.buildDateIncrement(o.duration)
      }
    )
  }
  buildValidRange() {
    let e = this.props.validRangeInput,
      t = typeof e == 'function' ? e.call(this.props.calendarApi, this.nowDate) : e
    return this.refineRange(t) || { start: null, end: null }
  }
  buildCurrentRangeInfo(e, t) {
    let { props: r } = this,
      i = null,
      s = null,
      o = null,
      l
    return (
      r.duration
        ? ((i = r.duration), (s = r.durationUnit), (o = this.buildRangeFromDuration(e, t, i, s)))
        : (l = this.props.dayCount)
        ? ((s = 'day'), (o = this.buildRangeFromDayCount(e, t, l)))
        : (o = this.buildCustomVisibleRange(e))
        ? (s = r.dateEnv.greatestWholeUnit(o.start, o.end).unit)
        : ((i = this.getFallbackDuration()),
          (s = Ar(i).unit),
          (o = this.buildRangeFromDuration(e, t, i, s))),
      { duration: i, unit: s, range: o }
    )
  }
  getFallbackDuration() {
    return M({ day: 1 })
  }
  adjustActiveRange(e) {
    let { dateEnv: t, usesMinMaxTime: r, slotMinTime: i, slotMaxTime: s } = this.props,
      { start: o, end: l } = e
    return (
      r &&
        (ft(i) < 0 && ((o = F(o)), (o = t.add(o, i))),
        ft(s) > 1 && ((l = F(l)), (l = $(l, -1)), (l = t.add(l, s)))),
      { start: o, end: l }
    )
  }
  buildRangeFromDuration(e, t, r, i) {
    let { dateEnv: s, dateAlignment: o } = this.props,
      l,
      a,
      c
    if (!o) {
      let { dateIncrement: u } = this.props
      u && ge(u) < ge(r) ? (o = Ar(u).unit) : (o = i)
    }
    ft(r) <= 1 && this.isHiddenDay(l) && ((l = this.skipHiddenDays(l, t)), (l = F(l)))
    function d() {
      ;(l = s.startOf(e, o)), (a = s.add(l, r)), (c = { start: l, end: a })
    }
    return d(), this.trimHiddenDays(c) || ((e = this.skipHiddenDays(e, t)), d()), c
  }
  buildRangeFromDayCount(e, t, r) {
    let { dateEnv: i, dateAlignment: s } = this.props,
      o = 0,
      l = e,
      a
    s && (l = i.startOf(l, s)), (l = F(l)), (l = this.skipHiddenDays(l, t)), (a = l)
    do (a = $(a, 1)), this.isHiddenDay(a) || (o += 1)
    while (o < r)
    return { start: l, end: a }
  }
  buildCustomVisibleRange(e) {
    let { props: t } = this,
      r = t.visibleRangeInput,
      i = typeof r == 'function' ? r.call(t.calendarApi, t.dateEnv.toDate(e)) : r,
      s = this.refineRange(i)
    return s && (s.start == null || s.end == null) ? null : s
  }
  buildRenderRange(e, t, r) {
    return e
  }
  buildDateIncrement(e) {
    let { dateIncrement: t } = this.props,
      r
    return t || ((r = this.props.dateAlignment) ? M(1, r) : e || M({ days: 1 }))
  }
  refineRange(e) {
    if (e) {
      let t = ud(e, this.props.dateEnv)
      return t && (t = _o(t)), t
    }
    return null
  }
  initHiddenDays() {
    let e = this.props.hiddenDays || [],
      t = [],
      r = 0,
      i
    for (this.props.weekends === !1 && e.push(0, 6), i = 0; i < 7; i += 1)
      (t[i] = e.indexOf(i) !== -1) || (r += 1)
    if (!r) throw new Error('invalid hiddenDays')
    this.isHiddenDayHash = t
  }
  trimHiddenDays(e) {
    let { start: t, end: r } = e
    return (
      t && (t = this.skipHiddenDays(t)),
      r && (r = this.skipHiddenDays(r, -1, !0)),
      t == null || r == null || t < r ? { start: t, end: r } : null
    )
  }
  isHiddenDay(e) {
    return e instanceof Date && (e = e.getUTCDay()), this.isHiddenDayHash[e]
  }
  skipHiddenDays(e, t = 1, r = !1) {
    for (; this.isHiddenDayHash[(e.getUTCDay() + (r ? t : 0) + 7) % 7]; ) e = $(e, t)
    return e
  }
}
function $r(n, e, t, r) {
  return {
    instanceId: tt(),
    defId: n,
    range: e,
    forcedStartTzo: t ?? null,
    forcedEndTzo: r ?? null
  }
}
function vd(n, e, t, r) {
  for (let i = 0; i < r.length; i += 1) {
    let s = r[i].parse(n, t)
    if (s) {
      let { allDay: o } = n
      return (
        o == null && ((o = e), o == null && ((o = s.allDayGuess), o == null && (o = !1))),
        { allDay: o, duration: s.duration, typeData: s.typeData, typeId: i }
      )
    }
  }
  return null
}
function et(n, e, t) {
  let { dateEnv: r, pluginHooks: i, options: s } = t,
    { defs: o, instances: l } = n
  l = Je(l, (a) => !o[a.defId].recurringDef)
  for (let a in o) {
    let c = o[a]
    if (c.recurringDef) {
      let { duration: d } = c.recurringDef
      d || (d = c.allDay ? s.defaultAllDayEventDuration : s.defaultTimedEventDuration)
      let u = bd(c, d, e, r, i.recurringTypes)
      for (let h of u) {
        let f = $r(a, { start: h, end: r.add(h, d) })
        l[f.instanceId] = f
      }
    }
  }
  return { defs: o, instances: l }
}
function bd(n, e, t, r, i) {
  let o = i[n.recurringDef.typeId].expand(
    n.recurringDef.typeData,
    { start: r.subtract(t.start, e), end: t.end },
    r
  )
  return n.allDay && (o = o.map(F)), o
}
const fn = { id: String, groupId: String, title: String, url: String, interactive: Boolean },
  To = { start: v, end: v, date: v, allDay: Boolean },
  yd = Object.assign(Object.assign(Object.assign({}, fn), To), { extendedProps: v })
function xo(n, e, t, r, i = Jr(t), s, o) {
  let { refined: l, extra: a } = Io(n, t, i),
    c = Sd(e, t),
    d = vd(l, c, t.dateEnv, t.pluginHooks.recurringTypes)
  if (d) {
    let h = Cr(l, a, e ? e.sourceId : '', d.allDay, !!d.duration, t, s)
    return (
      (h.recurringDef = { typeId: d.typeId, typeData: d.typeData, duration: d.duration }),
      { def: h, instance: null }
    )
  }
  let u = Ed(l, c, t, r)
  if (u) {
    let h = Cr(l, a, e ? e.sourceId : '', u.allDay, u.hasEnd, t, s),
      f = $r(h.defId, u.range, u.forcedStartTzo, u.forcedEndTzo)
    return (
      o && h.publicId && o[h.publicId] && (f.instanceId = o[h.publicId]), { def: h, instance: f }
    )
  }
  return null
}
function Io(n, e, t = Jr(e)) {
  return Yr(n, t)
}
function Jr(n) {
  return Object.assign(Object.assign(Object.assign({}, Rn), yd), n.pluginHooks.eventRefiners)
}
function Cr(n, e, t, r, i, s, o) {
  let l = {
    title: n.title || '',
    groupId: n.groupId || '',
    publicId: n.id || '',
    url: n.url || '',
    recurringDef: null,
    defId: (o && n.id ? o[n.id] : '') || tt(),
    sourceId: t,
    allDay: r,
    hasEnd: i,
    interactive: n.interactive,
    ui: Tn(n, s),
    extendedProps: Object.assign(Object.assign({}, n.extendedProps || {}), e)
  }
  for (let a of s.pluginHooks.eventDefMemberAdders) Object.assign(l, a(n))
  return Object.freeze(l.ui.classNames), Object.freeze(l.extendedProps), l
}
function Ed(n, e, t, r) {
  let { allDay: i } = n,
    s,
    o = null,
    l = !1,
    a,
    c = null,
    d = n.start != null ? n.start : n.date
  if (((s = t.dateEnv.createMarkerMeta(d)), s)) o = s.marker
  else if (!r) return null
  return (
    n.end != null && (a = t.dateEnv.createMarkerMeta(n.end)),
    i == null &&
      (e != null ? (i = e) : (i = (!s || s.isTimeUnspecified) && (!a || a.isTimeUnspecified))),
    i && o && (o = F(o)),
    a && ((c = a.marker), i && (c = F(c)), o && c <= o && (c = null)),
    c
      ? (l = !0)
      : r ||
        ((l = t.options.forceEventDuration || !1),
        (c = t.dateEnv.add(
          o,
          i ? t.options.defaultAllDayEventDuration : t.options.defaultTimedEventDuration
        ))),
    {
      allDay: i,
      hasEnd: l,
      range: { start: o, end: c },
      forcedStartTzo: s ? s.forcedTzo : null,
      forcedEndTzo: a ? a.forcedTzo : null
    }
  )
}
function Sd(n, e) {
  let t = null
  return n && (t = n.defaultAllDay), t == null && (t = e.options.defaultAllDay), t
}
function Nt(n, e, t, r, i, s) {
  let o = ae(),
    l = Jr(t)
  for (let a of n) {
    let c = xo(a, e, t, r, l, i, s)
    c && _r(c, o)
  }
  return o
}
function _r(n, e = ae()) {
  return (
    (e.defs[n.def.defId] = n.def),
    n.instance && (e.instances[n.instance.instanceId] = n.instance),
    e
  )
}
function Kr(n, e) {
  let t = n.instances[e]
  if (t) {
    let r = n.defs[t.defId],
      i = Ln(n, (s) => Ad(r, s))
    return (i.defs[r.defId] = r), (i.instances[t.instanceId] = t), i
  }
  return ae()
}
function Ad(n, e) {
  return !!(n.groupId && n.groupId === e.groupId)
}
function ae() {
  return { defs: {}, instances: {} }
}
function ei(n, e) {
  return {
    defs: Object.assign(Object.assign({}, n.defs), e.defs),
    instances: Object.assign(Object.assign({}, n.instances), e.instances)
  }
}
function Ln(n, e) {
  let t = Je(n.defs, e),
    r = Je(n.instances, (i) => t[i.defId])
  return { defs: t, instances: r }
}
function Dd(n, e) {
  let { defs: t, instances: r } = n,
    i = {},
    s = {}
  for (let o in t) e.defs[o] || (i[o] = t[o])
  for (let o in r) !e.instances[o] && i[r[o].defId] && (s[o] = r[o])
  return { defs: i, instances: s }
}
function wd(n, e) {
  return Array.isArray(n)
    ? Nt(n, null, e, !0)
    : typeof n == 'object' && n
    ? Nt([n], null, e, !0)
    : n != null
    ? String(n)
    : null
}
function as(n) {
  return Array.isArray(n) ? n : typeof n == 'string' ? n.split(/\s+/) : []
}
const Rn = {
    display: String,
    editable: Boolean,
    startEditable: Boolean,
    durationEditable: Boolean,
    constraint: v,
    overlap: v,
    allow: v,
    className: as,
    classNames: as,
    color: String,
    backgroundColor: String,
    borderColor: String,
    textColor: String
  },
  Cd = {
    display: null,
    startEditable: null,
    durationEditable: null,
    constraints: [],
    overlap: null,
    allows: [],
    backgroundColor: '',
    borderColor: '',
    textColor: '',
    classNames: []
  }
function Tn(n, e) {
  let t = wd(n.constraint, e)
  return {
    display: n.display || null,
    startEditable: n.startEditable != null ? n.startEditable : n.editable,
    durationEditable: n.durationEditable != null ? n.durationEditable : n.editable,
    constraints: t != null ? [t] : [],
    overlap: n.overlap != null ? n.overlap : null,
    allows: n.allow != null ? [n.allow] : [],
    backgroundColor: n.backgroundColor || n.color || '',
    borderColor: n.borderColor || n.color || '',
    textColor: n.textColor || '',
    classNames: (n.className || []).concat(n.classNames || [])
  }
}
function Mo(n) {
  return n.reduce(_d, Cd)
}
function _d(n, e) {
  return {
    display: e.display != null ? e.display : n.display,
    startEditable: e.startEditable != null ? e.startEditable : n.startEditable,
    durationEditable: e.durationEditable != null ? e.durationEditable : n.durationEditable,
    constraints: n.constraints.concat(e.constraints),
    overlap: typeof e.overlap == 'boolean' ? e.overlap : n.overlap,
    allows: n.allows.concat(e.allows),
    backgroundColor: e.backgroundColor || n.backgroundColor,
    borderColor: e.borderColor || n.borderColor,
    textColor: e.textColor || n.textColor,
    classNames: n.classNames.concat(e.classNames)
  }
}
const Rd = {
  id: String,
  defaultAllDay: Boolean,
  url: String,
  format: String,
  events: v,
  eventDataTransform: v,
  success: v,
  failure: v
}
function ko(n, e, t = Oo(e)) {
  let r
  if (
    (typeof n == 'string'
      ? (r = { url: n })
      : typeof n == 'function' || Array.isArray(n)
      ? (r = { events: n })
      : typeof n == 'object' && n && (r = n),
    r)
  ) {
    let { refined: i, extra: s } = Yr(r, t),
      o = Td(i, e)
    if (o)
      return {
        _raw: n,
        isFetching: !1,
        latestFetchId: '',
        fetchRange: null,
        defaultAllDay: i.defaultAllDay,
        eventDataTransform: i.eventDataTransform,
        success: i.success,
        failure: i.failure,
        publicId: i.id || '',
        sourceId: tt(),
        sourceDefId: o.sourceDefId,
        meta: o.meta,
        ui: Tn(i, e),
        extendedProps: s
      }
  }
  return null
}
function Oo(n) {
  return Object.assign(Object.assign(Object.assign({}, Rn), Rd), n.pluginHooks.eventSourceRefiners)
}
function Td(n, e) {
  let t = e.pluginHooks.eventSourceDefs
  for (let r = t.length - 1; r >= 0; r -= 1) {
    let s = t[r].parseMeta(n)
    if (s) return { sourceDefId: r, meta: s }
  }
  return null
}
function xd(n, e, t, r, i) {
  switch (e.type) {
    case 'RECEIVE_EVENTS':
      return Id(n, t[e.sourceId], e.fetchId, e.fetchRange, e.rawEvents, i)
    case 'RESET_RAW_EVENTS':
      return Md(n, t[e.sourceId], e.rawEvents, r.activeRange, i)
    case 'ADD_EVENTS':
      return kd(n, e.eventStore, r ? r.activeRange : null, i)
    case 'RESET_EVENTS':
      return e.eventStore
    case 'MERGE_EVENTS':
      return ei(n, e.eventStore)
    case 'PREV':
    case 'NEXT':
    case 'CHANGE_DATE':
    case 'CHANGE_VIEW_TYPE':
      return r ? et(n, r.activeRange, i) : n
    case 'REMOVE_EVENTS':
      return Dd(n, e.eventStore)
    case 'REMOVE_EVENT_SOURCE':
      return Po(n, e.sourceId)
    case 'REMOVE_ALL_EVENT_SOURCES':
      return Ln(n, (s) => !s.sourceId)
    case 'REMOVE_ALL_EVENTS':
      return ae()
    default:
      return n
  }
}
function Id(n, e, t, r, i, s) {
  if (e && t === e.latestFetchId) {
    let o = Nt(No(i, e, s), e, s)
    return r && (o = et(o, r, s)), ei(Po(n, e.sourceId), o)
  }
  return n
}
function Md(n, e, t, r, i) {
  const { defIdMap: s, instanceIdMap: o } = Nd(n)
  let l = Nt(No(t, e, i), e, i, !1, s, o)
  return et(l, r, i)
}
function No(n, e, t) {
  let r = t.options.eventDataTransform,
    i = e ? e.eventDataTransform : null
  return i && (n = cs(n, i)), r && (n = cs(n, r)), n
}
function cs(n, e) {
  let t
  if (!e) t = n
  else {
    t = []
    for (let r of n) {
      let i = e(r)
      i ? t.push(i) : i == null && t.push(r)
    }
  }
  return t
}
function kd(n, e, t, r) {
  return t && (e = et(e, t, r)), ei(n, e)
}
function ds(n, e, t) {
  let { defs: r } = n,
    i = Te(n.instances, (s) =>
      r[s.defId].allDay
        ? s
        : Object.assign(Object.assign({}, s), {
            range: {
              start: t.createMarker(e.toDate(s.range.start, s.forcedStartTzo)),
              end: t.createMarker(e.toDate(s.range.end, s.forcedEndTzo))
            },
            forcedStartTzo: t.canComputeOffset ? null : s.forcedStartTzo,
            forcedEndTzo: t.canComputeOffset ? null : s.forcedEndTzo
          })
    )
  return { defs: r, instances: i }
}
function Po(n, e) {
  return Ln(n, (t) => t.sourceId !== e)
}
function Od(n, e) {
  return { defs: n.defs, instances: Je(n.instances, (t) => !e[t.instanceId]) }
}
function Nd(n) {
  const { defs: e, instances: t } = n,
    r = {},
    i = {}
  for (let s in e) {
    const o = e[s],
      { publicId: l } = o
    l && (r[l] = s)
  }
  for (let s in t) {
    const o = t[s],
      l = e[o.defId],
      { publicId: a } = l
    a && (i[a] = s)
  }
  return { defIdMap: r, instanceIdMap: i }
}
class Fn {
  constructor() {
    ;(this.handlers = {}), (this.thisContext = null)
  }
  setThisContext(e) {
    this.thisContext = e
  }
  setOptions(e) {
    this.options = e
  }
  on(e, t) {
    Pd(this.handlers, e, t)
  }
  off(e, t) {
    Hd(this.handlers, e, t)
  }
  trigger(e, ...t) {
    let r = this.handlers[e] || [],
      i = this.options && this.options[e],
      s = [].concat(i || [], r)
    for (let o of s) o.apply(this.thisContext, t)
  }
  hasHandlers(e) {
    return !!((this.handlers[e] && this.handlers[e].length) || (this.options && this.options[e]))
  }
}
function Pd(n, e, t) {
  ;(n[e] || (n[e] = [])).push(t)
}
function Hd(n, e, t) {
  t ? n[e] && (n[e] = n[e].filter((r) => r !== t)) : delete n[e]
}
const Bd = {
  startTime: '09:00',
  endTime: '17:00',
  daysOfWeek: [1, 2, 3, 4, 5],
  display: 'inverse-background',
  classNames: 'fc-non-business',
  groupId: '_businessHours'
}
function Ld(n, e) {
  return Nt(Fd(n), null, e)
}
function Fd(n) {
  let e
  return (
    n === !0
      ? (e = [{}])
      : Array.isArray(n)
      ? (e = n.filter((t) => t.daysOfWeek))
      : typeof n == 'object' && n
      ? (e = [n])
      : (e = []),
    (e = e.map((t) => Object.assign(Object.assign({}, Bd), t))),
    e
  )
}
function Ho(n, e, t) {
  t.emitter.trigger(
    'select',
    Object.assign(Object.assign({}, ti(n, t)), {
      jsEvent: e ? e.origEvent : null,
      view: t.viewApi || t.calendarApi.view
    })
  )
}
function jd(n, e) {
  e.emitter.trigger('unselect', {
    jsEvent: n ? n.origEvent : null,
    view: e.viewApi || e.calendarApi.view
  })
}
function ti(n, e) {
  let t = {}
  for (let r of e.pluginHooks.dateSpanTransforms) Object.assign(t, r(n, e))
  return Object.assign(t, eu(n, e.dateEnv)), t
}
function us(n, e, t) {
  let { dateEnv: r, options: i } = t,
    s = e
  return (
    n
      ? ((s = F(s)), (s = r.add(s, i.defaultAllDayEventDuration)))
      : (s = r.add(s, i.defaultTimedEventDuration)),
    s
  )
}
function ni(n, e, t, r) {
  let i = xn(n.defs, e),
    s = ae()
  for (let o in n.defs) {
    let l = n.defs[o]
    s.defs[o] = Ud(l, i[o], t, r)
  }
  for (let o in n.instances) {
    let l = n.instances[o],
      a = s.defs[l.defId]
    s.instances[o] = zd(l, a, i[l.defId], t, r)
  }
  return s
}
function Ud(n, e, t, r) {
  let i = t.standardProps || {}
  i.hasEnd == null && e.durationEditable && (t.startDelta || t.endDelta) && (i.hasEnd = !0)
  let s = Object.assign(Object.assign(Object.assign({}, n), i), {
    ui: Object.assign(Object.assign({}, n.ui), i.ui)
  })
  t.extendedProps &&
    (s.extendedProps = Object.assign(Object.assign({}, s.extendedProps), t.extendedProps))
  for (let o of r.pluginHooks.eventDefMutationAppliers) o(s, t, r)
  return !s.hasEnd && r.options.forceEventDuration && (s.hasEnd = !0), s
}
function zd(n, e, t, r, i) {
  let { dateEnv: s } = i,
    o = r.standardProps && r.standardProps.allDay === !0,
    l = r.standardProps && r.standardProps.hasEnd === !1,
    a = Object.assign({}, n)
  return (
    o && (a.range = Co(a.range)),
    r.datesDelta &&
      t.startEditable &&
      (a.range = {
        start: s.add(a.range.start, r.datesDelta),
        end: s.add(a.range.end, r.datesDelta)
      }),
    r.startDelta &&
      t.durationEditable &&
      (a.range = { start: s.add(a.range.start, r.startDelta), end: a.range.end }),
    r.endDelta &&
      t.durationEditable &&
      (a.range = { start: a.range.start, end: s.add(a.range.end, r.endDelta) }),
    l && (a.range = { start: a.range.start, end: us(e.allDay, a.range.start, i) }),
    e.allDay && (a.range = { start: F(a.range.start), end: F(a.range.end) }),
    a.range.end < a.range.start && (a.range.end = us(e.allDay, a.range.start, i)),
    a
  )
}
class lt {
  constructor(e, t) {
    ;(this.context = e), (this.internalEventSource = t)
  }
  remove() {
    this.context.dispatch({
      type: 'REMOVE_EVENT_SOURCE',
      sourceId: this.internalEventSource.sourceId
    })
  }
  refetch() {
    this.context.dispatch({
      type: 'FETCH_EVENT_SOURCES',
      sourceIds: [this.internalEventSource.sourceId],
      isRefetch: !0
    })
  }
  get id() {
    return this.internalEventSource.publicId
  }
  get url() {
    return this.internalEventSource.meta.url
  }
  get format() {
    return this.internalEventSource.meta.format
  }
}
class z {
  constructor(e, t, r) {
    ;(this._context = e), (this._def = t), (this._instance = r || null)
  }
  setProp(e, t) {
    if (e in To)
      console.warn(
        "Could not set date-related prop 'name'. Use one of the date-related methods instead."
      )
    else if (e === 'id') (t = fn[e](t)), this.mutate({ standardProps: { publicId: t } })
    else if (e in fn) (t = fn[e](t)), this.mutate({ standardProps: { [e]: t } })
    else if (e in Rn) {
      let r = Rn[e](t)
      e === 'color'
        ? (r = { backgroundColor: t, borderColor: t })
        : e === 'editable'
        ? (r = { startEditable: t, durationEditable: t })
        : (r = { [e]: t }),
        this.mutate({ standardProps: { ui: r } })
    } else console.warn(`Could not set prop '${e}'. Use setExtendedProp instead.`)
  }
  setExtendedProp(e, t) {
    this.mutate({ extendedProps: { [e]: t } })
  }
  setStart(e, t = {}) {
    let { dateEnv: r } = this._context,
      i = r.createMarker(e)
    if (i && this._instance) {
      let s = this._instance.range,
        o = ct(s.start, i, r, t.granularity)
      t.maintainDuration ? this.mutate({ datesDelta: o }) : this.mutate({ startDelta: o })
    }
  }
  setEnd(e, t = {}) {
    let { dateEnv: r } = this._context,
      i
    if (!(e != null && ((i = r.createMarker(e)), !i)) && this._instance)
      if (i) {
        let s = ct(this._instance.range.end, i, r, t.granularity)
        this.mutate({ endDelta: s })
      } else this.mutate({ standardProps: { hasEnd: !1 } })
  }
  setDates(e, t, r = {}) {
    let { dateEnv: i } = this._context,
      s = { allDay: r.allDay },
      o = i.createMarker(e),
      l
    if (o && !(t != null && ((l = i.createMarker(t)), !l)) && this._instance) {
      let a = this._instance.range
      r.allDay === !0 && (a = Co(a))
      let c = ct(a.start, o, i, r.granularity)
      if (l) {
        let d = ct(a.end, l, i, r.granularity)
        fc(c, d)
          ? this.mutate({ datesDelta: c, standardProps: s })
          : this.mutate({ startDelta: c, endDelta: d, standardProps: s })
      } else (s.hasEnd = !1), this.mutate({ datesDelta: c, standardProps: s })
    }
  }
  moveStart(e) {
    let t = M(e)
    t && this.mutate({ startDelta: t })
  }
  moveEnd(e) {
    let t = M(e)
    t && this.mutate({ endDelta: t })
  }
  moveDates(e) {
    let t = M(e)
    t && this.mutate({ datesDelta: t })
  }
  setAllDay(e, t = {}) {
    let r = { allDay: e },
      { maintainDuration: i } = t
    i == null && (i = this._context.options.allDayMaintainDuration),
      this._def.allDay !== e && (r.hasEnd = i),
      this.mutate({ standardProps: r })
  }
  formatRange(e) {
    let { dateEnv: t } = this._context,
      r = this._instance,
      i = V(e)
    return this._def.hasEnd
      ? t.formatRange(r.range.start, r.range.end, i, {
          forcedStartTzo: r.forcedStartTzo,
          forcedEndTzo: r.forcedEndTzo
        })
      : t.format(r.range.start, i, { forcedTzo: r.forcedStartTzo })
  }
  mutate(e) {
    let t = this._instance
    if (t) {
      let r = this._def,
        i = this._context,
        { eventStore: s } = i.getCurrentData(),
        o = Kr(s, t.instanceId)
      o = ni(
        o,
        {
          '': {
            display: '',
            startEditable: !0,
            durationEditable: !0,
            constraints: [],
            overlap: null,
            allows: [],
            backgroundColor: '',
            borderColor: '',
            textColor: '',
            classNames: []
          }
        },
        e,
        i
      )
      let a = new z(i, r, t)
      ;(this._def = o.defs[r.defId]),
        (this._instance = o.instances[t.instanceId]),
        i.dispatch({ type: 'MERGE_EVENTS', eventStore: o }),
        i.emitter.trigger('eventChange', {
          oldEvent: a,
          event: this,
          relatedEvents: Xe(o, i, t),
          revert() {
            i.dispatch({ type: 'RESET_EVENTS', eventStore: s })
          }
        })
    }
  }
  remove() {
    let e = this._context,
      t = Bo(this)
    e.dispatch({ type: 'REMOVE_EVENTS', eventStore: t }),
      e.emitter.trigger('eventRemove', {
        event: this,
        relatedEvents: [],
        revert() {
          e.dispatch({ type: 'MERGE_EVENTS', eventStore: t })
        }
      })
  }
  get source() {
    let { sourceId: e } = this._def
    return e ? new lt(this._context, this._context.getCurrentData().eventSources[e]) : null
  }
  get start() {
    return this._instance ? this._context.dateEnv.toDate(this._instance.range.start) : null
  }
  get end() {
    return this._instance && this._def.hasEnd
      ? this._context.dateEnv.toDate(this._instance.range.end)
      : null
  }
  get startStr() {
    let e = this._instance
    return e
      ? this._context.dateEnv.formatIso(e.range.start, {
          omitTime: this._def.allDay,
          forcedTzo: e.forcedStartTzo
        })
      : ''
  }
  get endStr() {
    let e = this._instance
    return e && this._def.hasEnd
      ? this._context.dateEnv.formatIso(e.range.end, {
          omitTime: this._def.allDay,
          forcedTzo: e.forcedEndTzo
        })
      : ''
  }
  get id() {
    return this._def.publicId
  }
  get groupId() {
    return this._def.groupId
  }
  get allDay() {
    return this._def.allDay
  }
  get title() {
    return this._def.title
  }
  get url() {
    return this._def.url
  }
  get display() {
    return this._def.ui.display || 'auto'
  }
  get startEditable() {
    return this._def.ui.startEditable
  }
  get durationEditable() {
    return this._def.ui.durationEditable
  }
  get constraint() {
    return this._def.ui.constraints[0] || null
  }
  get overlap() {
    return this._def.ui.overlap
  }
  get allow() {
    return this._def.ui.allows[0] || null
  }
  get backgroundColor() {
    return this._def.ui.backgroundColor
  }
  get borderColor() {
    return this._def.ui.borderColor
  }
  get textColor() {
    return this._def.ui.textColor
  }
  get classNames() {
    return this._def.ui.classNames
  }
  get extendedProps() {
    return this._def.extendedProps
  }
  toPlainObject(e = {}) {
    let t = this._def,
      { ui: r } = t,
      { startStr: i, endStr: s } = this,
      o = { allDay: t.allDay }
    return (
      t.title && (o.title = t.title),
      i && (o.start = i),
      s && (o.end = s),
      t.publicId && (o.id = t.publicId),
      t.groupId && (o.groupId = t.groupId),
      t.url && (o.url = t.url),
      r.display && r.display !== 'auto' && (o.display = r.display),
      e.collapseColor && r.backgroundColor && r.backgroundColor === r.borderColor
        ? (o.color = r.backgroundColor)
        : (r.backgroundColor && (o.backgroundColor = r.backgroundColor),
          r.borderColor && (o.borderColor = r.borderColor)),
      r.textColor && (o.textColor = r.textColor),
      r.classNames.length && (o.classNames = r.classNames),
      Object.keys(t.extendedProps).length &&
        (e.collapseExtendedProps
          ? Object.assign(o, t.extendedProps)
          : (o.extendedProps = t.extendedProps)),
      o
    )
  }
  toJSON() {
    return this.toPlainObject()
  }
}
function Bo(n) {
  let e = n._def,
    t = n._instance
  return { defs: { [e.defId]: e }, instances: t ? { [t.instanceId]: t } : {} }
}
function Xe(n, e, t) {
  let { defs: r, instances: i } = n,
    s = [],
    o = t ? t.instanceId : ''
  for (let l in i) {
    let a = i[l],
      c = r[a.defId]
    a.instanceId !== o && s.push(new z(e, c, a))
  }
  return s
}
function fs(n, e, t, r) {
  let i = {},
    s = {},
    o = {},
    l = [],
    a = [],
    c = xn(n.defs, e)
  for (let d in n.defs) {
    let u = n.defs[d]
    c[u.defId].display === 'inverse-background' &&
      (u.groupId ? ((i[u.groupId] = []), o[u.groupId] || (o[u.groupId] = u)) : (s[d] = []))
  }
  for (let d in n.instances) {
    let u = n.instances[d],
      h = n.defs[u.defId],
      f = c[h.defId],
      p = u.range,
      m = !h.allDay && r ? _o(p, r) : p,
      b = Ke(m, t)
    b &&
      (f.display === 'inverse-background'
        ? h.groupId
          ? i[h.groupId].push(b)
          : s[u.defId].push(b)
        : f.display !== 'none' &&
          (f.display === 'background' ? l : a).push({
            def: h,
            ui: f,
            instance: u,
            range: b,
            isStart: m.start && m.start.valueOf() === b.start.valueOf(),
            isEnd: m.end && m.end.valueOf() === b.end.valueOf()
          }))
  }
  for (let d in i) {
    let u = i[d],
      h = ls(u, t)
    for (let f of h) {
      let p = o[d],
        m = c[p.defId]
      l.push({ def: p, ui: m, instance: null, range: f, isStart: !1, isEnd: !1 })
    }
  }
  for (let d in s) {
    let u = s[d],
      h = ls(u, t)
    for (let f of h)
      l.push({ def: n.defs[d], ui: c[d], instance: null, range: f, isStart: !1, isEnd: !1 })
  }
  return { bg: l, fg: a }
}
function Wd(n) {
  return n.ui.display === 'background' || n.ui.display === 'inverse-background'
}
function hs(n, e) {
  n.fcSeg = e
}
function mt(n) {
  return n.fcSeg || n.parentNode.fcSeg || null
}
function xn(n, e) {
  return Te(n, (t) => Lo(t, e))
}
function Lo(n, e) {
  let t = []
  return e[''] && t.push(e['']), e[n.defId] && t.push(e[n.defId]), t.push(n.ui), Mo(t)
}
function Fo(n, e) {
  let t = n.map(Vd)
  return t.sort((r, i) => sc(r, i, e)), t.map((r) => r._seg)
}
function Vd(n) {
  let { eventRange: e } = n,
    t = e.def,
    r = e.instance ? e.instance.range : e.range,
    i = r.start ? r.start.valueOf() : 0,
    s = r.end ? r.end.valueOf() : 0
  return Object.assign(Object.assign(Object.assign({}, t.extendedProps), t), {
    id: t.publicId,
    start: i,
    end: s,
    duration: s - i,
    allDay: Number(t.allDay),
    _seg: n
  })
}
function Gd(n, e) {
  let { pluginHooks: t } = e,
    r = t.isDraggableTransformers,
    { def: i, ui: s } = n.eventRange,
    o = s.startEditable
  for (let l of r) o = l(o, i, s, e)
  return o
}
function Yd(n, e) {
  return n.isStart && n.eventRange.ui.durationEditable && e.options.eventResizableFromStart
}
function qd(n, e) {
  return n.isEnd && n.eventRange.ui.durationEditable
}
function jo(n, e, t, r, i, s, o) {
  let { dateEnv: l, options: a } = t,
    { displayEventTime: c, displayEventEnd: d } = a,
    u = n.eventRange.def,
    h = n.eventRange.instance
  c == null && (c = r !== !1), d == null && (d = i !== !1)
  let f = h.range.start,
    p = h.range.end,
    m = s || n.start || n.eventRange.range.start,
    b = o || n.end || n.eventRange.range.end,
    y = F(f).valueOf() === F(m).valueOf(),
    E = F(ze(p, -1)).valueOf() === F(ze(b, -1)).valueOf()
  return c && !u.allDay && (y || E)
    ? ((m = y ? f : m),
      (b = E ? p : b),
      d && u.hasEnd
        ? l.formatRange(m, b, e, {
            forcedStartTzo: s ? null : h.forcedStartTzo,
            forcedEndTzo: o ? null : h.forcedEndTzo
          })
        : l.format(m, e, { forcedTzo: s ? null : h.forcedStartTzo }))
    : ''
}
function je(n, e, t) {
  let r = n.eventRange.range
  return {
    isPast: r.end < (t || e.start),
    isFuture: r.start >= (t || e.end),
    isToday: e && _e(e, r.start)
  }
}
function Qd(n) {
  let e = ['fc-event']
  return (
    n.isMirror && e.push('fc-event-mirror'),
    n.isDraggable && e.push('fc-event-draggable'),
    (n.isStartResizable || n.isEndResizable) && e.push('fc-event-resizable'),
    n.isDragging && e.push('fc-event-dragging'),
    n.isResizing && e.push('fc-event-resizing'),
    n.isSelected && e.push('fc-event-selected'),
    n.isStart && e.push('fc-event-start'),
    n.isEnd && e.push('fc-event-end'),
    n.isPast && e.push('fc-event-past'),
    n.isToday && e.push('fc-event-today'),
    n.isFuture && e.push('fc-event-future'),
    e
  )
}
function Uo(n) {
  return n.instance ? n.instance.instanceId : `${n.def.defId}:${n.range.start.toISOString()}`
}
function zo(n, e) {
  let { def: t, instance: r } = n.eventRange,
    { url: i } = t
  if (i) return { href: i }
  let { emitter: s, options: o } = e,
    { eventInteractive: l } = o
  return (
    l == null && ((l = t.interactive), l == null && (l = !!s.hasHandlers('eventClick'))),
    l
      ? mo((a) => {
          s.trigger('eventClick', {
            el: a.target,
            event: new z(e, t, r),
            jsEvent: a,
            view: e.viewApi
          })
        })
      : {}
  )
}
const Zd = { start: v, end: v, allDay: Boolean }
function Xd(n, e, t) {
  let r = $d(n, e),
    { range: i } = r
  if (!i.start) return null
  if (!i.end) {
    if (t == null) return null
    i.end = e.add(i.start, t)
  }
  return r
}
function $d(n, e) {
  let { refined: t, extra: r } = Yr(n, Zd),
    i = t.start ? e.createMarkerMeta(t.start) : null,
    s = t.end ? e.createMarkerMeta(t.end) : null,
    { allDay: o } = t
  return (
    o == null && (o = i && i.isTimeUnspecified && (!s || s.isTimeUnspecified)),
    Object.assign({ range: { start: i ? i.marker : null, end: s ? s.marker : null }, allDay: o }, r)
  )
}
function Jd(n, e) {
  return hd(n.range, e.range) && n.allDay === e.allDay && Kd(n, e)
}
function Kd(n, e) {
  for (let t in e) if (t !== 'range' && t !== 'allDay' && n[t] !== e[t]) return !1
  for (let t in n) if (!(t in e)) return !1
  return !0
}
function eu(n, e) {
  return Object.assign(Object.assign({}, Vo(n.range, e, n.allDay)), { allDay: n.allDay })
}
function Wo(n, e, t) {
  return Object.assign(Object.assign({}, Vo(n, e, t)), { timeZone: e.timeZone })
}
function Vo(n, e, t) {
  return {
    start: e.toDate(n.start),
    end: e.toDate(n.end),
    startStr: e.formatIso(n.start, { omitTime: t }),
    endStr: e.formatIso(n.end, { omitTime: t })
  }
}
function tu(n, e, t) {
  let r = Io({ editable: !1 }, t),
    i = Cr(r.refined, r.extra, '', n.allDay, !0, t)
  return {
    def: i,
    ui: Lo(i, e),
    instance: $r(i.defId, n.range),
    range: n.range,
    isStart: !0,
    isEnd: !0
  }
}
function nu(n, e, t) {
  let r = !1,
    i = function (l) {
      r || ((r = !0), e(l))
    },
    s = function (l) {
      r || ((r = !0), t(l))
    },
    o = n(i, s)
  o && typeof o.then == 'function' && o.then(i, s)
}
class gs extends Error {
  constructor(e, t) {
    super(e), (this.response = t)
  }
}
function ru(n, e, t) {
  n = n.toUpperCase()
  const r = { method: n }
  return (
    n === 'GET'
      ? (e += (e.indexOf('?') === -1 ? '?' : '&') + new URLSearchParams(t))
      : ((r.body = new URLSearchParams(t)),
        (r.headers = { 'Content-Type': 'application/x-www-form-urlencoded' })),
    fetch(e, r).then((i) => {
      if (i.ok)
        return i.json().then(
          (s) => [s, i],
          () => {
            throw new gs('Failure parsing JSON', i)
          }
        )
      throw new gs('Request failed', i)
    })
  )
}
let ir
function Go() {
  return ir == null && (ir = iu()), ir
}
function iu() {
  if (typeof document > 'u') return !0
  let n = document.createElement('div')
  ;(n.style.position = 'absolute'),
    (n.style.top = '0px'),
    (n.style.left = '0px'),
    (n.innerHTML = '<table><tr><td><div></div></td></tr></table>'),
    (n.querySelector('table').style.height = '100px'),
    (n.querySelector('div').style.height = '100%'),
    document.body.appendChild(n)
  let t = n.querySelector('div').offsetHeight > 0
  return document.body.removeChild(n), t
}
class su extends B {
  constructor() {
    super(...arguments),
      (this.state = { forPrint: !1 }),
      (this.handleBeforePrint = () => {
        this.setState({ forPrint: !0 })
      }),
      (this.handleAfterPrint = () => {
        this.setState({ forPrint: !1 })
      })
  }
  render() {
    let { props: e } = this,
      { options: t } = e,
      { forPrint: r } = this.state,
      i = r || t.height === 'auto' || t.contentHeight === 'auto',
      s = !i && t.height != null ? t.height : '',
      o = [
        'fc',
        r ? 'fc-media-print' : 'fc-media-screen',
        `fc-direction-${t.direction}`,
        e.theme.getClass('root')
      ]
    return Go() || o.push('fc-liquid-hack'), e.children(o, s, i, r)
  }
  componentDidMount() {
    let { emitter: e } = this.props
    e.on('_beforeprint', this.handleBeforePrint), e.on('_afterprint', this.handleAfterPrint)
  }
  componentWillUnmount() {
    let { emitter: e } = this.props
    e.off('_beforeprint', this.handleBeforePrint), e.off('_afterprint', this.handleAfterPrint)
  }
}
class bt {
  constructor(e) {
    ;(this.component = e.component), (this.isHitComboAllowed = e.isHitComboAllowed || null)
  }
  destroy() {}
}
function ou(n, e) {
  return {
    component: n,
    el: e.el,
    useEventCenter: e.useEventCenter != null ? e.useEventCenter : !0,
    isHitComboAllowed: e.isHitComboAllowed || null
  }
}
function ri(n) {
  return { [n.component.uid]: n }
}
const Rr = {}
class lu {
  getCurrentData() {
    return this.currentDataManager.getCurrentData()
  }
  dispatch(e) {
    this.currentDataManager.dispatch(e)
  }
  get view() {
    return this.getCurrentData().viewApi
  }
  batchRendering(e) {
    e()
  }
  updateSize() {
    this.trigger('_resize', !0)
  }
  setOption(e, t) {
    this.dispatch({ type: 'SET_OPTION', optionName: e, rawOptionValue: t })
  }
  getOption(e) {
    return this.currentDataManager.currentCalendarOptionsInput[e]
  }
  getAvailableLocaleCodes() {
    return Object.keys(this.getCurrentData().availableRawLocales)
  }
  on(e, t) {
    let { currentDataManager: r } = this
    r.currentCalendarOptionsRefiners[e]
      ? r.emitter.on(e, t)
      : console.warn(`Unknown listener name '${e}'`)
  }
  off(e, t) {
    this.currentDataManager.emitter.off(e, t)
  }
  trigger(e, ...t) {
    this.currentDataManager.emitter.trigger(e, ...t)
  }
  changeView(e, t) {
    this.batchRendering(() => {
      if ((this.unselect(), t))
        if (t.start && t.end)
          this.dispatch({ type: 'CHANGE_VIEW_TYPE', viewType: e }),
            this.dispatch({ type: 'SET_OPTION', optionName: 'visibleRange', rawOptionValue: t })
        else {
          let { dateEnv: r } = this.getCurrentData()
          this.dispatch({ type: 'CHANGE_VIEW_TYPE', viewType: e, dateMarker: r.createMarker(t) })
        }
      else this.dispatch({ type: 'CHANGE_VIEW_TYPE', viewType: e })
    })
  }
  zoomTo(e, t) {
    let r = this.getCurrentData(),
      i
    ;(t = t || 'day'),
      (i = r.viewSpecs[t] || this.getUnitViewSpec(t)),
      this.unselect(),
      i
        ? this.dispatch({ type: 'CHANGE_VIEW_TYPE', viewType: i.type, dateMarker: e })
        : this.dispatch({ type: 'CHANGE_DATE', dateMarker: e })
  }
  getUnitViewSpec(e) {
    let { viewSpecs: t, toolbarConfig: r } = this.getCurrentData(),
      i = [].concat(
        r.header ? r.header.viewsWithButtons : [],
        r.footer ? r.footer.viewsWithButtons : []
      ),
      s,
      o
    for (let l in t) i.push(l)
    for (s = 0; s < i.length; s += 1) if (((o = t[i[s]]), o && o.singleUnit === e)) return o
    return null
  }
  prev() {
    this.unselect(), this.dispatch({ type: 'PREV' })
  }
  next() {
    this.unselect(), this.dispatch({ type: 'NEXT' })
  }
  prevYear() {
    let e = this.getCurrentData()
    this.unselect(),
      this.dispatch({ type: 'CHANGE_DATE', dateMarker: e.dateEnv.addYears(e.currentDate, -1) })
  }
  nextYear() {
    let e = this.getCurrentData()
    this.unselect(),
      this.dispatch({ type: 'CHANGE_DATE', dateMarker: e.dateEnv.addYears(e.currentDate, 1) })
  }
  today() {
    let e = this.getCurrentData()
    this.unselect(),
      this.dispatch({ type: 'CHANGE_DATE', dateMarker: Lt(e.calendarOptions.now, e.dateEnv) })
  }
  gotoDate(e) {
    let t = this.getCurrentData()
    this.unselect(), this.dispatch({ type: 'CHANGE_DATE', dateMarker: t.dateEnv.createMarker(e) })
  }
  incrementDate(e) {
    let t = this.getCurrentData(),
      r = M(e)
    r &&
      (this.unselect(),
      this.dispatch({ type: 'CHANGE_DATE', dateMarker: t.dateEnv.add(t.currentDate, r) }))
  }
  getDate() {
    let e = this.getCurrentData()
    return e.dateEnv.toDate(e.currentDate)
  }
  formatDate(e, t) {
    let { dateEnv: r } = this.getCurrentData()
    return r.format(r.createMarker(e), V(t))
  }
  formatRange(e, t, r) {
    let { dateEnv: i } = this.getCurrentData()
    return i.formatRange(i.createMarker(e), i.createMarker(t), V(r), r)
  }
  formatIso(e, t) {
    let { dateEnv: r } = this.getCurrentData()
    return r.formatIso(r.createMarker(e), { omitTime: t })
  }
  select(e, t) {
    let r
    t == null
      ? e.start != null
        ? (r = e)
        : (r = { start: e, end: null })
      : (r = { start: e, end: t })
    let i = this.getCurrentData(),
      s = Xd(r, i.dateEnv, M({ days: 1 }))
    s && (this.dispatch({ type: 'SELECT_DATES', selection: s }), Ho(s, null, i))
  }
  unselect(e) {
    let t = this.getCurrentData()
    t.dateSelection && (this.dispatch({ type: 'UNSELECT_DATES' }), jd(e, t))
  }
  addEvent(e, t) {
    if (e instanceof z) {
      let o = e._def,
        l = e._instance
      return (
        this.getCurrentData().eventStore.defs[o.defId] ||
          (this.dispatch({ type: 'ADD_EVENTS', eventStore: _r({ def: o, instance: l }) }),
          this.triggerEventAdd(e)),
        e
      )
    }
    let r = this.getCurrentData(),
      i
    if (t instanceof lt) i = t.internalEventSource
    else if (typeof t == 'boolean') t && ([i] = Qr(r.eventSources))
    else if (t != null) {
      let o = this.getEventSourceById(t)
      if (!o) return console.warn(`Could not find an event source with ID "${t}"`), null
      i = o.internalEventSource
    }
    let s = xo(e, i, r, !1)
    if (s) {
      let o = new z(r, s.def, s.def.recurringDef ? null : s.instance)
      return this.dispatch({ type: 'ADD_EVENTS', eventStore: _r(s) }), this.triggerEventAdd(o), o
    }
    return null
  }
  triggerEventAdd(e) {
    let { emitter: t } = this.getCurrentData()
    t.trigger('eventAdd', {
      event: e,
      relatedEvents: [],
      revert: () => {
        this.dispatch({ type: 'REMOVE_EVENTS', eventStore: Bo(e) })
      }
    })
  }
  getEventById(e) {
    let t = this.getCurrentData(),
      { defs: r, instances: i } = t.eventStore
    e = String(e)
    for (let s in r) {
      let o = r[s]
      if (o.publicId === e) {
        if (o.recurringDef) return new z(t, o, null)
        for (let l in i) {
          let a = i[l]
          if (a.defId === o.defId) return new z(t, o, a)
        }
      }
    }
    return null
  }
  getEvents() {
    let e = this.getCurrentData()
    return Xe(e.eventStore, e)
  }
  removeAllEvents() {
    this.dispatch({ type: 'REMOVE_ALL_EVENTS' })
  }
  getEventSources() {
    let e = this.getCurrentData(),
      t = e.eventSources,
      r = []
    for (let i in t) r.push(new lt(e, t[i]))
    return r
  }
  getEventSourceById(e) {
    let t = this.getCurrentData(),
      r = t.eventSources
    e = String(e)
    for (let i in r) if (r[i].publicId === e) return new lt(t, r[i])
    return null
  }
  addEventSource(e) {
    let t = this.getCurrentData()
    if (e instanceof lt)
      return (
        t.eventSources[e.internalEventSource.sourceId] ||
          this.dispatch({ type: 'ADD_EVENT_SOURCES', sources: [e.internalEventSource] }),
        e
      )
    let r = ko(e, t)
    return r ? (this.dispatch({ type: 'ADD_EVENT_SOURCES', sources: [r] }), new lt(t, r)) : null
  }
  removeAllEventSources() {
    this.dispatch({ type: 'REMOVE_ALL_EVENT_SOURCES' })
  }
  refetchEvents() {
    this.dispatch({ type: 'FETCH_EVENT_SOURCES', isRefetch: !0 })
  }
  scrollToTime(e) {
    let t = M(e)
    t && this.trigger('_scrollRequest', { time: t })
  }
}
function au(n, e) {
  return n.left >= e.left && n.left < e.right && n.top >= e.top && n.top < e.bottom
}
function Yo(n, e) {
  let t = {
    left: Math.max(n.left, e.left),
    right: Math.min(n.right, e.right),
    top: Math.max(n.top, e.top),
    bottom: Math.min(n.bottom, e.bottom)
  }
  return t.left < t.right && t.top < t.bottom ? t : !1
}
function cu(n, e) {
  return {
    left: Math.min(Math.max(n.left, e.left), e.right),
    top: Math.min(Math.max(n.top, e.top), e.bottom)
  }
}
function du(n) {
  return { left: (n.left + n.right) / 2, top: (n.top + n.bottom) / 2 }
}
function uu(n, e) {
  return { left: n.left - e.left, top: n.top - e.top }
}
const sr = ae()
class fu {
  constructor() {
    ;(this.getKeysForEventDefs = _(this._getKeysForEventDefs)),
      (this.splitDateSelection = _(this._splitDateSpan)),
      (this.splitEventStore = _(this._splitEventStore)),
      (this.splitIndividualUi = _(this._splitIndividualUi)),
      (this.splitEventDrag = _(this._splitInteraction)),
      (this.splitEventResize = _(this._splitInteraction)),
      (this.eventUiBuilders = {})
  }
  splitProps(e) {
    let t = this.getKeyInfo(e),
      r = this.getKeysForEventDefs(e.eventStore),
      i = this.splitDateSelection(e.dateSelection),
      s = this.splitIndividualUi(e.eventUiBases, r),
      o = this.splitEventStore(e.eventStore, r),
      l = this.splitEventDrag(e.eventDrag),
      a = this.splitEventResize(e.eventResize),
      c = {}
    this.eventUiBuilders = Te(t, (d, u) => this.eventUiBuilders[u] || _(hu))
    for (let d in t) {
      let u = t[d],
        h = o[d] || sr,
        f = this.eventUiBuilders[d]
      c[d] = {
        businessHours: u.businessHours || e.businessHours,
        dateSelection: i[d] || null,
        eventStore: h,
        eventUiBases: f(e.eventUiBases[''], u.ui, s[d]),
        eventSelection: h.instances[e.eventSelection] ? e.eventSelection : '',
        eventDrag: l[d] || null,
        eventResize: a[d] || null
      }
    }
    return c
  }
  _splitDateSpan(e) {
    let t = {}
    if (e) {
      let r = this.getKeysForDateSpan(e)
      for (let i of r) t[i] = e
    }
    return t
  }
  _getKeysForEventDefs(e) {
    return Te(e.defs, (t) => this.getKeysForEventDef(t))
  }
  _splitEventStore(e, t) {
    let { defs: r, instances: i } = e,
      s = {}
    for (let o in r) for (let l of t[o]) s[l] || (s[l] = ae()), (s[l].defs[o] = r[o])
    for (let o in i) {
      let l = i[o]
      for (let a of t[l.defId]) s[a] && (s[a].instances[o] = l)
    }
    return s
  }
  _splitIndividualUi(e, t) {
    let r = {}
    for (let i in e) if (i) for (let s of t[i]) r[s] || (r[s] = {}), (r[s][i] = e[i])
    return r
  }
  _splitInteraction(e) {
    let t = {}
    if (e) {
      let r = this._splitEventStore(e.affectedEvents, this._getKeysForEventDefs(e.affectedEvents)),
        i = this._getKeysForEventDefs(e.mutatedEvents),
        s = this._splitEventStore(e.mutatedEvents, i),
        o = (l) => {
          t[l] ||
            (t[l] = { affectedEvents: r[l] || sr, mutatedEvents: s[l] || sr, isEvent: e.isEvent })
        }
      for (let l in r) o(l)
      for (let l in s) o(l)
    }
    return t
  }
}
function hu(n, e, t) {
  let r = []
  n && r.push(n), e && r.push(e)
  let i = { '': Mo(r) }
  return t && Object.assign(i, t), i
}
function qo(n, e, t, r) {
  return {
    dow: n.getUTCDay(),
    isDisabled: !!(r && !_e(r.activeRange, n)),
    isOther: !!(r && !_e(r.currentRange, n)),
    isToday: !!(e && _e(e, n)),
    isPast: !!(t ? n < t : e && n < e.start),
    isFuture: !!(t ? n > t : e && n >= e.end)
  }
}
function ii(n, e) {
  let t = ['fc-day', `fc-day-${vc[n.dow]}`]
  return (
    n.isDisabled
      ? t.push('fc-day-disabled')
      : (n.isToday && (t.push('fc-day-today'), t.push(e.getClass('today'))),
        n.isPast && t.push('fc-day-past'),
        n.isFuture && t.push('fc-day-future'),
        n.isOther && t.push('fc-day-other')),
    t
  )
}
const gu = V({ year: 'numeric', month: 'long', day: 'numeric' }),
  pu = V({ week: 'long' })
function In(n, e, t = 'day', r = !0) {
  const { dateEnv: i, options: s, calendarApi: o } = n
  let l = i.format(e, t === 'week' ? pu : gu)
  if (s.navLinks) {
    let a = i.toDate(e)
    const c = (d) => {
      let u = t === 'day' ? s.navLinkDayClick : t === 'week' ? s.navLinkWeekClick : null
      typeof u == 'function'
        ? u.call(o, i.toDate(e), d)
        : (typeof u == 'string' && (t = u), o.zoomTo(e, t))
    }
    return Object.assign(
      { title: It(s.navLinkHint, [l, a], l), 'data-navlink': '' },
      r ? po(c) : { onClick: c }
    )
  }
  return { 'aria-label': l }
}
let or = null
function mu() {
  return or === null && (or = vu()), or
}
function vu() {
  let n = document.createElement('div')
  xt(n, {
    position: 'absolute',
    top: -1e3,
    left: 0,
    border: 0,
    padding: 0,
    overflow: 'scroll',
    direction: 'rtl'
  }),
    (n.innerHTML = '<div></div>'),
    document.body.appendChild(n)
  let t = n.firstChild.getBoundingClientRect().left > n.getBoundingClientRect().left
  return jr(n), t
}
let lr
function bu() {
  return lr || (lr = yu()), lr
}
function yu() {
  let n = document.createElement('div')
  ;(n.style.overflow = 'scroll'),
    (n.style.position = 'absolute'),
    (n.style.top = '-9999px'),
    (n.style.left = '-9999px'),
    document.body.appendChild(n)
  let e = Qo(n)
  return document.body.removeChild(n), e
}
function Qo(n) {
  return { x: n.offsetHeight - n.clientHeight, y: n.offsetWidth - n.clientWidth }
}
function Eu(n, e = !1) {
  let t = window.getComputedStyle(n),
    r = parseInt(t.borderLeftWidth, 10) || 0,
    i = parseInt(t.borderRightWidth, 10) || 0,
    s = parseInt(t.borderTopWidth, 10) || 0,
    o = parseInt(t.borderBottomWidth, 10) || 0,
    l = Qo(n),
    a = l.y - r - i,
    c = l.x - s - o,
    d = {
      borderLeft: r,
      borderRight: i,
      borderTop: s,
      borderBottom: o,
      scrollbarBottom: c,
      scrollbarLeft: 0,
      scrollbarRight: 0
    }
  return (
    mu() && t.direction === 'rtl' ? (d.scrollbarLeft = a) : (d.scrollbarRight = a),
    e &&
      ((d.paddingLeft = parseInt(t.paddingLeft, 10) || 0),
      (d.paddingRight = parseInt(t.paddingRight, 10) || 0),
      (d.paddingTop = parseInt(t.paddingTop, 10) || 0),
      (d.paddingBottom = parseInt(t.paddingBottom, 10) || 0)),
    d
  )
}
function Su(n, e = !1, t) {
  let r = t ? n.getBoundingClientRect() : si(n),
    i = Eu(n, e),
    s = {
      left: r.left + i.borderLeft + i.scrollbarLeft,
      right: r.right - i.borderRight - i.scrollbarRight,
      top: r.top + i.borderTop,
      bottom: r.bottom - i.borderBottom - i.scrollbarBottom
    }
  return (
    e &&
      ((s.left += i.paddingLeft),
      (s.right -= i.paddingRight),
      (s.top += i.paddingTop),
      (s.bottom -= i.paddingBottom)),
    s
  )
}
function si(n) {
  let e = n.getBoundingClientRect()
  return {
    left: e.left + window.pageXOffset,
    top: e.top + window.pageYOffset,
    right: e.right + window.pageXOffset,
    bottom: e.bottom + window.pageYOffset
  }
}
function Au(n) {
  let e = Zo(n),
    t = n.getBoundingClientRect()
  for (let r of e) {
    let i = Yo(t, r.getBoundingClientRect())
    if (i) t = i
    else return null
  }
  return t
}
function Zo(n) {
  let e = []
  for (; n instanceof HTMLElement; ) {
    let t = window.getComputedStyle(n)
    if (t.position === 'fixed') break
    ;/(auto|scroll)/.test(t.overflow + t.overflowY + t.overflowX) && e.push(n), (n = n.parentNode)
  }
  return e
}
class vt {
  constructor(e, t, r, i) {
    this.els = t
    let s = (this.originClientRect = e.getBoundingClientRect())
    r && this.buildElHorizontals(s.left), i && this.buildElVerticals(s.top)
  }
  buildElHorizontals(e) {
    let t = [],
      r = []
    for (let i of this.els) {
      let s = i.getBoundingClientRect()
      t.push(s.left - e), r.push(s.right - e)
    }
    ;(this.lefts = t), (this.rights = r)
  }
  buildElVerticals(e) {
    let t = [],
      r = []
    for (let i of this.els) {
      let s = i.getBoundingClientRect()
      t.push(s.top - e), r.push(s.bottom - e)
    }
    ;(this.tops = t), (this.bottoms = r)
  }
  leftToIndex(e) {
    let { lefts: t, rights: r } = this,
      i = t.length,
      s
    for (s = 0; s < i; s += 1) if (e >= t[s] && e < r[s]) return s
  }
  topToIndex(e) {
    let { tops: t, bottoms: r } = this,
      i = t.length,
      s
    for (s = 0; s < i; s += 1) if (e >= t[s] && e < r[s]) return s
  }
  getWidth(e) {
    return this.rights[e] - this.lefts[e]
  }
  getHeight(e) {
    return this.bottoms[e] - this.tops[e]
  }
  similarTo(e) {
    return (
      $t(this.tops || [], e.tops || []) &&
      $t(this.bottoms || [], e.bottoms || []) &&
      $t(this.lefts || [], e.lefts || []) &&
      $t(this.rights || [], e.rights || [])
    )
  }
}
function $t(n, e) {
  const t = n.length
  if (t !== e.length) return !1
  for (let r = 0; r < t; r++) if (Math.round(n[r]) !== Math.round(e[r])) return !1
  return !0
}
class oi {
  getMaxScrollTop() {
    return this.getScrollHeight() - this.getClientHeight()
  }
  getMaxScrollLeft() {
    return this.getScrollWidth() - this.getClientWidth()
  }
  canScrollVertically() {
    return this.getMaxScrollTop() > 0
  }
  canScrollHorizontally() {
    return this.getMaxScrollLeft() > 0
  }
  canScrollUp() {
    return this.getScrollTop() > 0
  }
  canScrollDown() {
    return this.getScrollTop() < this.getMaxScrollTop()
  }
  canScrollLeft() {
    return this.getScrollLeft() > 0
  }
  canScrollRight() {
    return this.getScrollLeft() < this.getMaxScrollLeft()
  }
}
class Du extends oi {
  constructor(e) {
    super(), (this.el = e)
  }
  getScrollTop() {
    return this.el.scrollTop
  }
  getScrollLeft() {
    return this.el.scrollLeft
  }
  setScrollTop(e) {
    this.el.scrollTop = e
  }
  setScrollLeft(e) {
    this.el.scrollLeft = e
  }
  getScrollWidth() {
    return this.el.scrollWidth
  }
  getScrollHeight() {
    return this.el.scrollHeight
  }
  getClientHeight() {
    return this.el.clientHeight
  }
  getClientWidth() {
    return this.el.clientWidth
  }
}
class wu extends oi {
  getScrollTop() {
    return window.pageYOffset
  }
  getScrollLeft() {
    return window.pageXOffset
  }
  setScrollTop(e) {
    window.scroll(window.pageXOffset, e)
  }
  setScrollLeft(e) {
    window.scroll(e, window.pageYOffset)
  }
  getScrollWidth() {
    return document.documentElement.scrollWidth
  }
  getScrollHeight() {
    return document.documentElement.scrollHeight
  }
  getClientHeight() {
    return document.documentElement.clientHeight
  }
  getClientWidth() {
    return document.documentElement.clientWidth
  }
}
class De extends B {
  constructor() {
    super(...arguments), (this.uid = tt())
  }
  prepareHits() {}
  queryHit(e, t, r, i) {
    return null
  }
  isValidSegDownEl(e) {
    return !this.props.eventDrag && !this.props.eventResize && !X(e, '.fc-event-mirror')
  }
  isValidDateDownEl(e) {
    return (
      !X(e, '.fc-event:not(.fc-bg-event)') &&
      !X(e, '.fc-more-link') &&
      !X(e, 'a[data-navlink]') &&
      !X(e, '.fc-popover')
    )
  }
}
class Xo {
  constructor(e = (t) => t.thickness) {
    ;(this.getEntryThickness = e),
      (this.strictOrder = !1),
      (this.allowReslicing = !1),
      (this.maxCoord = -1),
      (this.maxStackCnt = -1),
      (this.levelCoords = []),
      (this.entriesByLevel = []),
      (this.stackCnts = {})
  }
  addSegs(e) {
    let t = []
    for (let r of e) this.insertEntry(r, t)
    return t
  }
  insertEntry(e, t) {
    let r = this.findInsertion(e)
    return this.isInsertionValid(r, e)
      ? (this.insertEntryAt(e, r), 1)
      : this.handleInvalidInsertion(r, e, t)
  }
  isInsertionValid(e, t) {
    return (
      (this.maxCoord === -1 || e.levelCoord + this.getEntryThickness(t) <= this.maxCoord) &&
      (this.maxStackCnt === -1 || e.stackCnt < this.maxStackCnt)
    )
  }
  handleInvalidInsertion(e, t, r) {
    return this.allowReslicing && e.touchingEntry
      ? this.splitEntry(t, e.touchingEntry, r)
      : (r.push(t), 0)
  }
  splitEntry(e, t, r) {
    let i = 0,
      s = [],
      o = e.span,
      l = t.span
    return (
      o.start < l.start &&
        (i += this.insertEntry(
          { index: e.index, thickness: e.thickness, span: { start: o.start, end: l.start } },
          s
        )),
      o.end > l.end &&
        (i += this.insertEntry(
          { index: e.index, thickness: e.thickness, span: { start: l.end, end: o.end } },
          s
        )),
      i
        ? (r.push({ index: e.index, thickness: e.thickness, span: li(l, o) }, ...s), i)
        : (r.push(e), 0)
    )
  }
  insertEntryAt(e, t) {
    let { entriesByLevel: r, levelCoords: i } = this
    t.lateral === -1
      ? (ar(i, t.level, t.levelCoord), ar(r, t.level, [e]))
      : ar(r[t.level], t.lateral, e),
      (this.stackCnts[$e(e)] = t.stackCnt)
  }
  findInsertion(e) {
    let { levelCoords: t, entriesByLevel: r, strictOrder: i, stackCnts: s } = this,
      o = t.length,
      l = 0,
      a = -1,
      c = -1,
      d = null,
      u = 0
    for (let p = 0; p < o; p += 1) {
      let m = t[p]
      if (!i && m >= l + this.getEntryThickness(e)) break
      let b = r[p],
        y,
        E = xr(b, e.span.start, Tr),
        w = E[0] + E[1]
      for (; (y = b[w]) && y.span.start < e.span.end; ) {
        let D = m + this.getEntryThickness(y)
        D > l && ((l = D), (d = y), (a = p), (c = w)),
          D === l && (u = Math.max(u, s[$e(y)] + 1)),
          (w += 1)
      }
    }
    let h = 0
    if (d) for (h = a + 1; h < o && t[h] < l; ) h += 1
    let f = -1
    return (
      h < o && t[h] === l && (f = xr(r[h], e.span.end, Tr)[0]),
      {
        touchingLevel: a,
        touchingLateral: c,
        touchingEntry: d,
        stackCnt: u,
        levelCoord: l,
        level: h,
        lateral: f
      }
    )
  }
  toRects() {
    let { entriesByLevel: e, levelCoords: t } = this,
      r = e.length,
      i = []
    for (let s = 0; s < r; s += 1) {
      let o = e[s],
        l = t[s]
      for (let a of o)
        i.push(
          Object.assign(Object.assign({}, a), {
            thickness: this.getEntryThickness(a),
            levelCoord: l
          })
        )
    }
    return i
  }
}
function Tr(n) {
  return n.span.end
}
function $e(n) {
  return n.index + ':' + n.span.start
}
function Cu(n) {
  let e = []
  for (let t of n) {
    let r = [],
      i = { span: t.span, entries: [t] }
    for (let s of e)
      li(s.span, i.span)
        ? (i = { entries: s.entries.concat(i.entries), span: _u(s.span, i.span) })
        : r.push(s)
    r.push(i), (e = r)
  }
  return e
}
function _u(n, e) {
  return { start: Math.min(n.start, e.start), end: Math.max(n.end, e.end) }
}
function li(n, e) {
  let t = Math.max(n.start, e.start),
    r = Math.min(n.end, e.end)
  return t < r ? { start: t, end: r } : null
}
function ar(n, e, t) {
  n.splice(e, 0, t)
}
function xr(n, e, t) {
  let r = 0,
    i = n.length
  if (!i || e < t(n[r])) return [0, 0]
  if (e > t(n[i - 1])) return [i, 0]
  for (; r < i; ) {
    let s = Math.floor(r + (i - r) / 2),
      o = t(n[s])
    if (e < o) i = s
    else if (e > o) r = s + 1
    else return [s, 1]
  }
  return [r, 0]
}
class Ru {
  constructor(e, t) {
    this.emitter = new Fn()
  }
  destroy() {}
  setMirrorIsVisible(e) {}
  setMirrorNeedsRevert(e) {}
  setAutoScrollEnabled(e) {}
}
const ai = {}
function Tu(n, e) {
  return !n || e > 10
    ? V({ weekday: 'short' })
    : e > 1
    ? V({ weekday: 'short', month: 'numeric', day: 'numeric', omitCommas: !0 })
    : V({ weekday: 'long' })
}
const $o = 'fc-col-header-cell'
function Jo(n) {
  return n.text
}
class xu extends B {
  render() {
    let { dateEnv: e, options: t, theme: r, viewApi: i } = this.context,
      { props: s } = this,
      { date: o, dateProfile: l } = s,
      a = qo(o, s.todayRange, null, l),
      c = [$o].concat(ii(a, r)),
      d = e.format(o, s.dayHeaderFormat),
      u = !a.isDisabled && s.colCnt > 1 ? In(this.context, o) : {},
      h = Object.assign(
        Object.assign(Object.assign({ date: e.toDate(o), view: i }, s.extraRenderProps), {
          text: d
        }),
        a
      )
    return g(
      ce,
      {
        elTag: 'th',
        elClasses: c,
        elAttrs: Object.assign(
          { role: 'columnheader', colSpan: s.colSpan, 'data-date': a.isDisabled ? void 0 : Vr(o) },
          s.extraDataAttrs
        ),
        renderProps: h,
        generatorName: 'dayHeaderContent',
        customGenerator: t.dayHeaderContent,
        defaultGenerator: Jo,
        classNameGenerator: t.dayHeaderClassNames,
        didMount: t.dayHeaderDidMount,
        willUnmount: t.dayHeaderWillUnmount
      },
      (f) =>
        g(
          'div',
          { className: 'fc-scrollgrid-sync-inner' },
          !a.isDisabled &&
            g(f, {
              elTag: 'a',
              elAttrs: u,
              elClasses: ['fc-col-header-cell-cushion', s.isSticky && 'fc-sticky']
            })
        )
    )
  }
}
const Iu = V({ weekday: 'long' })
class Mu extends B {
  render() {
    let { props: e } = this,
      { dateEnv: t, theme: r, viewApi: i, options: s } = this.context,
      o = $(new Date(2592e5), e.dow),
      l = { dow: e.dow, isDisabled: !1, isFuture: !1, isPast: !1, isToday: !1, isOther: !1 },
      a = t.format(o, e.dayHeaderFormat),
      c = Object.assign(
        Object.assign(
          Object.assign(Object.assign({ date: o }, l), { view: i }),
          e.extraRenderProps
        ),
        { text: a }
      )
    return g(
      ce,
      {
        elTag: 'th',
        elClasses: [$o, ...ii(l, r), ...(e.extraClassNames || [])],
        elAttrs: Object.assign({ role: 'columnheader', colSpan: e.colSpan }, e.extraDataAttrs),
        renderProps: c,
        generatorName: 'dayHeaderContent',
        customGenerator: s.dayHeaderContent,
        defaultGenerator: Jo,
        classNameGenerator: s.dayHeaderClassNames,
        didMount: s.dayHeaderDidMount,
        willUnmount: s.dayHeaderWillUnmount
      },
      (d) =>
        g(
          'div',
          { className: 'fc-scrollgrid-sync-inner' },
          g(d, {
            elTag: 'a',
            elClasses: ['fc-col-header-cell-cushion', e.isSticky && 'fc-sticky'],
            elAttrs: { 'aria-label': t.format(o, Iu) }
          })
        )
    )
  }
}
class Ft extends le {
  constructor(e, t) {
    super(e, t),
      (this.initialNowDate = Lt(t.options.now, t.dateEnv)),
      (this.initialNowQueriedMs = new Date().valueOf()),
      (this.state = this.computeTiming().currentState)
  }
  render() {
    let { props: e, state: t } = this
    return e.children(t.nowDate, t.todayRange)
  }
  componentDidMount() {
    this.setTimeout()
  }
  componentDidUpdate(e) {
    e.unit !== this.props.unit && (this.clearTimeout(), this.setTimeout())
  }
  componentWillUnmount() {
    this.clearTimeout()
  }
  computeTiming() {
    let { props: e, context: t } = this,
      r = ze(this.initialNowDate, new Date().valueOf() - this.initialNowQueriedMs),
      i = t.dateEnv.startOf(r, e.unit),
      s = t.dateEnv.add(i, M(1, e.unit)),
      o = s.valueOf() - r.valueOf()
    return (
      (o = Math.min(1e3 * 60 * 60 * 24, o)),
      {
        currentState: { nowDate: i, todayRange: ps(i) },
        nextState: { nowDate: s, todayRange: ps(s) },
        waitMs: o
      }
    )
  }
  setTimeout() {
    let { nextState: e, waitMs: t } = this.computeTiming()
    this.timeoutId = setTimeout(() => {
      this.setState(e, () => {
        this.setTimeout()
      })
    }, t)
  }
  clearTimeout() {
    this.timeoutId && clearTimeout(this.timeoutId)
  }
}
Ft.contextType = Me
function ps(n) {
  let e = F(n),
    t = $(e, 1)
  return { start: e, end: t }
}
class Ko extends B {
  constructor() {
    super(...arguments), (this.createDayHeaderFormatter = _(ku))
  }
  render() {
    let { context: e } = this,
      { dates: t, dateProfile: r, datesRepDistinctDays: i, renderIntro: s } = this.props,
      o = this.createDayHeaderFormatter(e.options.dayHeaderFormat, i, t.length)
    return g(Ft, { unit: 'day' }, (l, a) =>
      g(
        'tr',
        { role: 'row' },
        s && s('day'),
        t.map((c) =>
          i
            ? g(xu, {
                key: c.toISOString(),
                date: c,
                dateProfile: r,
                todayRange: a,
                colCnt: t.length,
                dayHeaderFormat: o
              })
            : g(Mu, { key: c.getUTCDay(), dow: c.getUTCDay(), dayHeaderFormat: o })
        )
      )
    )
  }
}
function ku(n, e, t) {
  return n || Tu(e, t)
}
class el {
  constructor(e, t) {
    let r = e.start,
      { end: i } = e,
      s = [],
      o = [],
      l = -1
    for (; r < i; )
      t.isHiddenDay(r) ? s.push(l + 0.5) : ((l += 1), s.push(l), o.push(r)), (r = $(r, 1))
    ;(this.dates = o), (this.indices = s), (this.cnt = o.length)
  }
  sliceRange(e) {
    let t = this.getDateDayIndex(e.start),
      r = this.getDateDayIndex($(e.end, -1)),
      i = Math.max(0, t),
      s = Math.min(this.cnt - 1, r)
    return (
      (i = Math.ceil(i)),
      (s = Math.floor(s)),
      i <= s ? { firstIndex: i, lastIndex: s, isStart: t === i, isEnd: r === s } : null
    )
  }
  getDateDayIndex(e) {
    let { indices: t } = this,
      r = Math.floor(nt(this.dates[0], e))
    return r < 0 ? t[0] - 1 : r >= t.length ? t[t.length - 1] + 1 : t[r]
  }
}
class tl {
  constructor(e, t) {
    let { dates: r } = e,
      i,
      s,
      o
    if (t) {
      for (s = r[0].getUTCDay(), i = 1; i < r.length && r[i].getUTCDay() !== s; i += 1);
      o = Math.ceil(r.length / i)
    } else (o = 1), (i = r.length)
    ;(this.rowCnt = o),
      (this.colCnt = i),
      (this.daySeries = e),
      (this.cells = this.buildCells()),
      (this.headerDates = this.buildHeaderDates())
  }
  buildCells() {
    let e = []
    for (let t = 0; t < this.rowCnt; t += 1) {
      let r = []
      for (let i = 0; i < this.colCnt; i += 1) r.push(this.buildCell(t, i))
      e.push(r)
    }
    return e
  }
  buildCell(e, t) {
    let r = this.daySeries.dates[e * this.colCnt + t]
    return { key: r.toISOString(), date: r }
  }
  buildHeaderDates() {
    let e = []
    for (let t = 0; t < this.colCnt; t += 1) e.push(this.cells[0][t].date)
    return e
  }
  sliceRange(e) {
    let { colCnt: t } = this,
      r = this.daySeries.sliceRange(e),
      i = []
    if (r) {
      let { firstIndex: s, lastIndex: o } = r,
        l = s
      for (; l <= o; ) {
        let a = Math.floor(l / t),
          c = Math.min((a + 1) * t, o + 1)
        i.push({
          row: a,
          firstCol: l % t,
          lastCol: (c - 1) % t,
          isStart: r.isStart && l === s,
          isEnd: r.isEnd && c - 1 === o
        }),
          (l = c)
      }
    }
    return i
  }
}
class nl {
  constructor() {
    ;(this.sliceBusinessHours = _(this._sliceBusinessHours)),
      (this.sliceDateSelection = _(this._sliceDateSpan)),
      (this.sliceEventStore = _(this._sliceEventStore)),
      (this.sliceEventDrag = _(this._sliceInteraction)),
      (this.sliceEventResize = _(this._sliceInteraction)),
      (this.forceDayIfListItem = !1)
  }
  sliceProps(e, t, r, i, ...s) {
    let { eventUiBases: o } = e,
      l = this.sliceEventStore(e.eventStore, o, t, r, ...s)
    return {
      dateSelectionSegs: this.sliceDateSelection(e.dateSelection, t, r, o, i, ...s),
      businessHourSegs: this.sliceBusinessHours(e.businessHours, t, r, i, ...s),
      fgEventSegs: l.fg,
      bgEventSegs: l.bg,
      eventDrag: this.sliceEventDrag(e.eventDrag, o, t, r, ...s),
      eventResize: this.sliceEventResize(e.eventResize, o, t, r, ...s),
      eventSelection: e.eventSelection
    }
  }
  sliceNowDate(e, t, r, i, ...s) {
    return this._sliceDateSpan(
      { range: { start: e, end: ze(e, 1) }, allDay: !1 },
      t,
      r,
      {},
      i,
      ...s
    )
  }
  _sliceBusinessHours(e, t, r, i, ...s) {
    return e ? this._sliceEventStore(et(e, Jt(t, !!r), i), {}, t, r, ...s).bg : []
  }
  _sliceEventStore(e, t, r, i, ...s) {
    if (e) {
      let o = fs(e, t, Jt(r, !!i), i)
      return { bg: this.sliceEventRanges(o.bg, s), fg: this.sliceEventRanges(o.fg, s) }
    }
    return { bg: [], fg: [] }
  }
  _sliceInteraction(e, t, r, i, ...s) {
    if (!e) return null
    let o = fs(e.mutatedEvents, t, Jt(r, !!i), i)
    return {
      segs: this.sliceEventRanges(o.fg, s),
      affectedInstances: e.affectedEvents.instances,
      isEvent: e.isEvent
    }
  }
  _sliceDateSpan(e, t, r, i, s, ...o) {
    if (!e) return []
    let l = Jt(t, !!r),
      a = Ke(e.range, l)
    if (a) {
      e = Object.assign(Object.assign({}, e), { range: a })
      let c = tu(e, i, s),
        d = this.sliceRange(e.range, ...o)
      for (let u of d) u.eventRange = c
      return d
    }
    return []
  }
  sliceEventRanges(e, t) {
    let r = []
    for (let i of e) r.push(...this.sliceEventRange(i, t))
    return r
  }
  sliceEventRange(e, t) {
    let r = e.range
    this.forceDayIfListItem &&
      e.ui.display === 'list-item' &&
      (r = { start: r.start, end: $(r.start, 1) })
    let i = this.sliceRange(r, ...t)
    for (let s of i)
      (s.eventRange = e), (s.isStart = e.isStart && s.isStart), (s.isEnd = e.isEnd && s.isEnd)
    return i
  }
}
function Jt(n, e) {
  let t = n.activeRange
  return e
    ? t
    : {
        start: ze(t.start, n.slotMinTime.milliseconds),
        end: ze(t.end, n.slotMaxTime.milliseconds - 864e5)
      }
}
function rl(n, e, t) {
  let { instances: r } = n.mutatedEvents
  for (let i in r) if (!Bn(e.validRange, r[i].range)) return !1
  return il({ eventDrag: n }, t)
}
function Ou(n, e, t) {
  return Bn(e.validRange, n.range) ? il({ dateSelection: n }, t) : !1
}
function il(n, e) {
  let t = e.getCurrentData(),
    r = Object.assign(
      {
        businessHours: t.businessHours,
        dateSelection: '',
        eventStore: t.eventStore,
        eventUiBases: t.eventUiBases,
        eventSelection: '',
        eventDrag: null,
        eventResize: null
      },
      n
    )
  return (e.pluginHooks.isPropsValid || Nu)(r, e)
}
function Nu(n, e, t = {}, r) {
  return !((n.eventDrag && !Pu(n, e, t, r)) || (n.dateSelection && !Hu(n, e, t, r)))
}
function Pu(n, e, t, r) {
  let i = e.getCurrentData(),
    s = n.eventDrag,
    o = s.mutatedEvents,
    l = o.defs,
    a = o.instances,
    c = xn(l, s.isEvent ? n.eventUiBases : { '': i.selectionConfig })
  r && (c = Te(c, r))
  let d = Od(n.eventStore, s.affectedEvents.instances),
    u = d.defs,
    h = d.instances,
    f = xn(u, n.eventUiBases)
  for (let p in a) {
    let m = a[p],
      b = m.range,
      y = c[m.defId],
      E = l[m.defId]
    if (!sl(y.constraints, b, d, n.businessHours, e)) return !1
    let { eventOverlap: w } = e.options,
      D = typeof w == 'function' ? w : null
    for (let x in h) {
      let k = h[x]
      if (
        Xr(b, k.range) &&
        ((f[k.defId].overlap === !1 && s.isEvent) ||
          y.overlap === !1 ||
          (D && !D(new z(e, u[k.defId], k), new z(e, E, m))))
      )
        return !1
    }
    let P = i.eventStore
    for (let x of y.allows) {
      let k = Object.assign(Object.assign({}, t), { range: m.range, allDay: E.allDay }),
        A = P.defs[E.defId],
        O = P.instances[p],
        L
      if ((A ? (L = new z(e, A, O)) : (L = new z(e, E)), !x(ti(k, e), L))) return !1
    }
  }
  return !0
}
function Hu(n, e, t, r) {
  let i = n.eventStore,
    s = i.defs,
    o = i.instances,
    l = n.dateSelection,
    a = l.range,
    { selectionConfig: c } = e.getCurrentData()
  if ((r && (c = r(c)), !sl(c.constraints, a, i, n.businessHours, e))) return !1
  let { selectOverlap: d } = e.options,
    u = typeof d == 'function' ? d : null
  for (let h in o) {
    let f = o[h]
    if (Xr(a, f.range) && (c.overlap === !1 || (u && !u(new z(e, s[f.defId], f), null)))) return !1
  }
  for (let h of c.allows) {
    let f = Object.assign(Object.assign({}, t), l)
    if (!h(ti(f, e), null)) return !1
  }
  return !0
}
function sl(n, e, t, r, i) {
  for (let s of n) if (!Lu(Bu(s, e, t, r, i), e)) return !1
  return !0
}
function Bu(n, e, t, r, i) {
  return n === 'businessHours'
    ? cr(et(r, e, i))
    : typeof n == 'string'
    ? cr(Ln(t, (s) => s.groupId === n))
    : typeof n == 'object' && n
    ? cr(et(n, e, i))
    : []
}
function cr(n) {
  let { instances: e } = n,
    t = []
  for (let r in e) t.push(e[r].range)
  return t
}
function Lu(n, e) {
  for (let t of n) if (Bn(t, e)) return !0
  return !1
}
const Kt = /^(visible|hidden)$/
class Fu extends B {
  constructor() {
    super(...arguments),
      (this.handleEl = (e) => {
        ;(this.el = e), xe(this.props.elRef, e)
      })
  }
  render() {
    let { props: e } = this,
      { liquid: t, liquidIsAbsolute: r } = e,
      i = t && r,
      s = ['fc-scroller']
    return (
      t && (r ? s.push('fc-scroller-liquid-absolute') : s.push('fc-scroller-liquid')),
      g(
        'div',
        {
          ref: this.handleEl,
          className: s.join(' '),
          style: {
            overflowX: e.overflowX,
            overflowY: e.overflowY,
            left: (i && -(e.overcomeLeft || 0)) || '',
            right: (i && -(e.overcomeRight || 0)) || '',
            bottom: (i && -(e.overcomeBottom || 0)) || '',
            marginLeft: (!i && -(e.overcomeLeft || 0)) || '',
            marginRight: (!i && -(e.overcomeRight || 0)) || '',
            marginBottom: (!i && -(e.overcomeBottom || 0)) || '',
            maxHeight: e.maxHeight || ''
          }
        },
        e.children
      )
    )
  }
  needsXScrolling() {
    if (Kt.test(this.props.overflowX)) return !1
    let { el: e } = this,
      t = this.el.getBoundingClientRect().width - this.getYScrollbarWidth(),
      { children: r } = e
    for (let i = 0; i < r.length; i += 1) if (r[i].getBoundingClientRect().width > t) return !0
    return !1
  }
  needsYScrolling() {
    if (Kt.test(this.props.overflowY)) return !1
    let { el: e } = this,
      t = this.el.getBoundingClientRect().height - this.getXScrollbarWidth(),
      { children: r } = e
    for (let i = 0; i < r.length; i += 1) if (r[i].getBoundingClientRect().height > t) return !0
    return !1
  }
  getXScrollbarWidth() {
    return Kt.test(this.props.overflowX) ? 0 : this.el.offsetHeight - this.el.clientHeight
  }
  getYScrollbarWidth() {
    return Kt.test(this.props.overflowY) ? 0 : this.el.offsetWidth - this.el.clientWidth
  }
}
class we {
  constructor(e) {
    ;(this.masterCallback = e),
      (this.currentMap = {}),
      (this.depths = {}),
      (this.callbackMap = {}),
      (this.handleValue = (t, r) => {
        let { depths: i, currentMap: s } = this,
          o = !1,
          l = !1
        t !== null
          ? ((o = r in s), (s[r] = t), (i[r] = (i[r] || 0) + 1), (l = !0))
          : ((i[r] -= 1), i[r] || (delete s[r], delete this.callbackMap[r], (o = !0))),
          this.masterCallback &&
            (o && this.masterCallback(null, String(r)), l && this.masterCallback(t, String(r)))
      })
  }
  createRef(e) {
    let t = this.callbackMap[e]
    return (
      t ||
        (t = this.callbackMap[e] =
          (r) => {
            this.handleValue(r, String(e))
          }),
      t
    )
  }
  collect(e, t, r) {
    return Xc(this.currentMap, e, t, r)
  }
  getAll() {
    return Qr(this.currentMap)
  }
}
function ju(n) {
  let e = Za(n, '.fc-scrollgrid-shrink'),
    t = 0
  for (let r of e) t = Math.max(t, cc(r))
  return Math.ceil(t)
}
function ol(n, e) {
  return n.liquid && e.liquid
}
function Uu(n, e) {
  return e.maxHeight != null || ol(n, e)
}
function zu(n, e, t, r) {
  let { expandRows: i } = t
  return typeof e.content == 'function'
    ? e.content(t)
    : g(
        'table',
        {
          role: 'presentation',
          className: [e.tableClassName, n.syncRowHeights ? 'fc-scrollgrid-sync-table' : ''].join(
            ' '
          ),
          style: {
            minWidth: t.tableMinWidth,
            width: t.clientWidth,
            height: i ? t.clientHeight : ''
          }
        },
        t.tableColGroupNode,
        g(
          r ? 'thead' : 'tbody',
          { role: 'presentation' },
          typeof e.rowContent == 'function' ? e.rowContent(t) : e.rowContent
        )
      )
}
function Wu(n, e) {
  return Ue(n, e, Ae)
}
function Vu(n, e) {
  let t = []
  for (let r of n) {
    let i = r.span || 1
    for (let s = 0; s < i; s += 1)
      t.push(
        g('col', {
          style: { width: r.width === 'shrink' ? Gu(e) : r.width || '', minWidth: r.minWidth || '' }
        })
      )
  }
  return g('colgroup', {}, ...t)
}
function Gu(n) {
  return n ?? 4
}
function Yu(n) {
  for (let e of n) if (e.width === 'shrink') return !0
  return !1
}
function qu(n, e) {
  let t = ['fc-scrollgrid', e.theme.getClass('table')]
  return n && t.push('fc-scrollgrid-liquid'), t
}
function Qu(n, e) {
  let t = ['fc-scrollgrid-section', `fc-scrollgrid-section-${n.type}`, n.className]
  return (
    e && n.liquid && n.maxHeight == null && t.push('fc-scrollgrid-section-liquid'),
    n.isSticky && t.push('fc-scrollgrid-section-sticky'),
    t
  )
}
function Ir(n) {
  return g('div', {
    className: 'fc-scrollgrid-sticky-shim',
    style: { width: n.clientWidth, minWidth: n.tableMinWidth }
  })
}
function Mn(n) {
  let { stickyHeaderDates: e } = n
  return (e == null || e === 'auto') && (e = n.height === 'auto' || n.viewHeight === 'auto'), e
}
function ll(n) {
  let { stickyFooterScrollbar: e } = n
  return (e == null || e === 'auto') && (e = n.height === 'auto' || n.viewHeight === 'auto'), e
}
class ci extends B {
  constructor() {
    super(...arguments),
      (this.processCols = _((e) => e, Wu)),
      (this.renderMicroColGroup = _(Vu)),
      (this.scrollerRefs = new we()),
      (this.scrollerElRefs = new we(this._handleScrollerEl.bind(this))),
      (this.state = {
        shrinkWidth: null,
        forceYScrollbars: !1,
        scrollerClientWidths: {},
        scrollerClientHeights: {}
      }),
      (this.handleSizing = () => {
        this.safeSetState(
          Object.assign({ shrinkWidth: this.computeShrinkWidth() }, this.computeScrollerDims())
        )
      })
  }
  render() {
    let { props: e, state: t, context: r } = this,
      i = e.sections || [],
      s = this.processCols(e.cols),
      o = this.renderMicroColGroup(s, t.shrinkWidth),
      l = qu(e.liquid, r)
    e.collapsibleWidth && l.push('fc-scrollgrid-collapsible')
    let a = i.length,
      c = 0,
      d,
      u = [],
      h = [],
      f = []
    for (; c < a && (d = i[c]).type === 'header'; ) u.push(this.renderSection(d, o, !0)), (c += 1)
    for (; c < a && (d = i[c]).type === 'body'; ) h.push(this.renderSection(d, o, !1)), (c += 1)
    for (; c < a && (d = i[c]).type === 'footer'; ) f.push(this.renderSection(d, o, !0)), (c += 1)
    let p = !Go()
    const m = { role: 'rowgroup' }
    return g(
      'table',
      { role: 'grid', className: l.join(' '), style: { height: e.height } },
      !!(!p && u.length) && g('thead', m, ...u),
      !!(!p && h.length) && g('tbody', m, ...h),
      !!(!p && f.length) && g('tfoot', m, ...f),
      p && g('tbody', m, ...u, ...h, ...f)
    )
  }
  renderSection(e, t, r) {
    return 'outerContent' in e
      ? g(j, { key: e.key }, e.outerContent)
      : g(
          'tr',
          { key: e.key, role: 'presentation', className: Qu(e, this.props.liquid).join(' ') },
          this.renderChunkTd(e, t, e.chunk, r)
        )
  }
  renderChunkTd(e, t, r, i) {
    if ('outerContent' in r) return r.outerContent
    let { props: s } = this,
      { forceYScrollbars: o, scrollerClientWidths: l, scrollerClientHeights: a } = this.state,
      c = Uu(s, e),
      d = ol(s, e),
      u = s.liquid ? (o ? 'scroll' : c ? 'auto' : 'hidden') : 'visible',
      h = e.key,
      f = zu(
        e,
        r,
        {
          tableColGroupNode: t,
          tableMinWidth: '',
          clientWidth: !s.collapsibleWidth && l[h] !== void 0 ? l[h] : null,
          clientHeight: a[h] !== void 0 ? a[h] : null,
          expandRows: e.expandRows,
          syncRowHeights: !1,
          rowSyncHeights: [],
          reportRowHeightChange: () => {}
        },
        i
      )
    return g(
      i ? 'th' : 'td',
      { ref: r.elRef, role: 'presentation' },
      g(
        'div',
        { className: `fc-scroller-harness${d ? ' fc-scroller-harness-liquid' : ''}` },
        g(
          Fu,
          {
            ref: this.scrollerRefs.createRef(h),
            elRef: this.scrollerElRefs.createRef(h),
            overflowY: u,
            overflowX: s.liquid ? 'hidden' : 'visible',
            maxHeight: e.maxHeight,
            liquid: d,
            liquidIsAbsolute: !0
          },
          f
        )
      )
    )
  }
  _handleScrollerEl(e, t) {
    let r = Zu(this.props.sections, t)
    r && xe(r.chunk.scrollerElRef, e)
  }
  componentDidMount() {
    this.handleSizing(), this.context.addResizeHandler(this.handleSizing)
  }
  componentDidUpdate() {
    this.handleSizing()
  }
  componentWillUnmount() {
    this.context.removeResizeHandler(this.handleSizing)
  }
  computeShrinkWidth() {
    return Yu(this.props.cols) ? ju(this.scrollerElRefs.getAll()) : 0
  }
  computeScrollerDims() {
    let e = bu(),
      { scrollerRefs: t, scrollerElRefs: r } = this,
      i = !1,
      s = {},
      o = {}
    for (let l in t.currentMap) {
      let a = t.currentMap[l]
      if (a && a.needsYScrolling()) {
        i = !0
        break
      }
    }
    for (let l of this.props.sections) {
      let a = l.key,
        c = r.currentMap[a]
      if (c) {
        let d = c.parentNode
        ;(s[a] = Math.floor(d.getBoundingClientRect().width - (i ? e.y : 0))),
          (o[a] = Math.floor(d.getBoundingClientRect().height))
      }
    }
    return { forceYScrollbars: i, scrollerClientWidths: s, scrollerClientHeights: o }
  }
}
ci.addStateEquality({ scrollerClientWidths: Ae, scrollerClientHeights: Ae })
function Zu(n, e) {
  for (let t of n) if (t.key === e) return t
  return null
}
class di extends B {
  constructor() {
    super(...arguments),
      (this.handleEl = (e) => {
        ;(this.el = e), e && hs(e, this.props.seg)
      })
  }
  render() {
    const { props: e, context: t } = this,
      { options: r } = t,
      { seg: i } = e,
      { eventRange: s } = i,
      { ui: o } = s,
      l = {
        event: new z(t, s.def, s.instance),
        view: t.viewApi,
        timeText: e.timeText,
        textColor: o.textColor,
        backgroundColor: o.backgroundColor,
        borderColor: o.borderColor,
        isDraggable: !e.disableDragging && Gd(i, t),
        isStartResizable: !e.disableResizing && Yd(i, t),
        isEndResizable: !e.disableResizing && qd(i),
        isMirror: !!(e.isDragging || e.isResizing || e.isDateSelecting),
        isStart: !!i.isStart,
        isEnd: !!i.isEnd,
        isPast: !!e.isPast,
        isFuture: !!e.isFuture,
        isToday: !!e.isToday,
        isSelected: !!e.isSelected,
        isDragging: !!e.isDragging,
        isResizing: !!e.isResizing
      }
    return g(
      ce,
      Object.assign({}, e, {
        elRef: this.handleEl,
        elClasses: [...Qd(l), ...i.eventRange.ui.classNames, ...(e.elClasses || [])],
        renderProps: l,
        generatorName: 'eventContent',
        customGenerator: r.eventContent,
        defaultGenerator: e.defaultGenerator,
        classNameGenerator: r.eventClassNames,
        didMount: r.eventDidMount,
        willUnmount: r.eventWillUnmount
      })
    )
  }
  componentDidUpdate(e) {
    this.el && this.props.seg !== e.seg && hs(this.el, this.props.seg)
  }
}
class al extends B {
  render() {
    let { props: e, context: t } = this,
      { options: r } = t,
      { seg: i } = e,
      { ui: s } = i.eventRange,
      o = r.eventTimeFormat || e.defaultTimeFormat,
      l = jo(i, o, t, e.defaultDisplayEventTime, e.defaultDisplayEventEnd)
    return g(
      di,
      Object.assign({}, e, {
        elTag: 'a',
        elStyle: { borderColor: s.borderColor, backgroundColor: s.backgroundColor },
        elAttrs: zo(i, t),
        defaultGenerator: Xu,
        timeText: l
      }),
      (a, c) =>
        g(
          j,
          null,
          g(a, { elTag: 'div', elClasses: ['fc-event-main'], elStyle: { color: c.textColor } }),
          !!c.isStartResizable &&
            g('div', { className: 'fc-event-resizer fc-event-resizer-start' }),
          !!c.isEndResizable && g('div', { className: 'fc-event-resizer fc-event-resizer-end' })
        )
    )
  }
}
function Xu(n) {
  return g(
    'div',
    { className: 'fc-event-main-frame' },
    n.timeText && g('div', { className: 'fc-event-time' }, n.timeText),
    g(
      'div',
      { className: 'fc-event-title-container' },
      g('div', { className: 'fc-event-title fc-sticky' }, n.event.title || g(j, null, ' '))
    )
  )
}
const ui = (n) =>
    g(Me.Consumer, null, (e) => {
      let { options: t } = e,
        r = { isAxis: n.isAxis, date: e.dateEnv.toDate(n.date), view: e.viewApi }
      return g(
        ce,
        Object.assign({}, n, {
          elTag: n.elTag || 'div',
          renderProps: r,
          generatorName: 'nowIndicatorContent',
          customGenerator: t.nowIndicatorContent,
          classNameGenerator: t.nowIndicatorClassNames,
          didMount: t.nowIndicatorDidMount,
          willUnmount: t.nowIndicatorWillUnmount
        })
      )
    }),
  $u = V({ day: 'numeric' })
class fi extends B {
  constructor() {
    super(...arguments), (this.refineRenderProps = un(Ju))
  }
  render() {
    let { props: e, context: t } = this,
      { options: r } = t,
      i = this.refineRenderProps({
        date: e.date,
        dateProfile: e.dateProfile,
        todayRange: e.todayRange,
        isMonthStart: e.isMonthStart || !1,
        showDayNumber: e.showDayNumber,
        extraRenderProps: e.extraRenderProps,
        viewApi: t.viewApi,
        dateEnv: t.dateEnv,
        monthStartFormat: r.monthStartFormat
      })
    return g(
      ce,
      Object.assign({}, e, {
        elClasses: [...ii(i, t.theme), ...(e.elClasses || [])],
        elAttrs: Object.assign(
          Object.assign({}, e.elAttrs),
          i.isDisabled ? {} : { 'data-date': Vr(e.date) }
        ),
        renderProps: i,
        generatorName: 'dayCellContent',
        customGenerator: r.dayCellContent,
        defaultGenerator: e.defaultGenerator,
        classNameGenerator: i.isDisabled ? void 0 : r.dayCellClassNames,
        didMount: r.dayCellDidMount,
        willUnmount: r.dayCellWillUnmount
      })
    )
  }
}
function hi(n) {
  return !!(n.dayCellContent || wr('dayCellContent', n))
}
function Ju(n) {
  let { date: e, dateEnv: t, dateProfile: r, isMonthStart: i } = n,
    s = qo(e, n.todayRange, null, r),
    o = n.showDayNumber ? t.format(e, i ? n.monthStartFormat : $u) : ''
  return Object.assign(
    Object.assign(Object.assign({ date: t.toDate(e), view: n.viewApi }, s), {
      isMonthStart: i,
      dayNumberText: o
    }),
    n.extraRenderProps
  )
}
class cl extends B {
  render() {
    let { props: e } = this,
      { seg: t } = e
    return g(di, {
      elTag: 'div',
      elClasses: ['fc-bg-event'],
      elStyle: { backgroundColor: t.eventRange.ui.backgroundColor },
      defaultGenerator: Ku,
      seg: t,
      timeText: '',
      isDragging: !1,
      isResizing: !1,
      isDateSelecting: !1,
      isSelected: !1,
      isPast: e.isPast,
      isFuture: e.isFuture,
      isToday: e.isToday,
      disableDragging: !0,
      disableResizing: !0
    })
  }
}
function Ku(n) {
  let { title: e } = n.event
  return e && g('div', { className: 'fc-event-title' }, n.event.title)
}
function dl(n) {
  return g('div', { className: `fc-${n}` })
}
const ul = (n) =>
  g(Me.Consumer, null, (e) => {
    let { dateEnv: t, options: r } = e,
      { date: i } = n,
      s = r.weekNumberFormat || n.defaultFormat,
      o = t.computeWeekNumber(i),
      l = t.format(i, s)
    return g(
      ce,
      Object.assign({}, n, {
        renderProps: { num: o, text: l, date: i },
        generatorName: 'weekNumberContent',
        customGenerator: r.weekNumberContent,
        defaultGenerator: ef,
        classNameGenerator: r.weekNumberClassNames,
        didMount: r.weekNumberDidMount,
        willUnmount: r.weekNumberWillUnmount
      })
    )
  })
function ef(n) {
  return n.text
}
const dr = 10
class tf extends B {
  constructor() {
    super(...arguments),
      (this.state = { titleId: Pn() }),
      (this.handleRootEl = (e) => {
        ;(this.rootEl = e), this.props.elRef && xe(this.props.elRef, e)
      }),
      (this.handleDocumentMouseDown = (e) => {
        const t = ho(e)
        this.rootEl.contains(t) || this.handleCloseClick()
      }),
      (this.handleDocumentKeyDown = (e) => {
        e.key === 'Escape' && this.handleCloseClick()
      }),
      (this.handleCloseClick = () => {
        let { onClose: e } = this.props
        e && e()
      })
  }
  render() {
    let { theme: e, options: t } = this.context,
      { props: r, state: i } = this,
      s = ['fc-popover', e.getClass('popover')].concat(r.extraClassNames || [])
    return Pa(
      g(
        'div',
        Object.assign({}, r.extraAttrs, {
          id: r.id,
          className: s.join(' '),
          'aria-labelledby': i.titleId,
          ref: this.handleRootEl
        }),
        g(
          'div',
          { className: 'fc-popover-header ' + e.getClass('popoverHeader') },
          g('span', { className: 'fc-popover-title', id: i.titleId }, r.title),
          g('span', {
            className: 'fc-popover-close ' + e.getIconClass('close'),
            title: t.closeHint,
            onClick: this.handleCloseClick
          })
        ),
        g('div', { className: 'fc-popover-body ' + e.getClass('popoverContent') }, r.children)
      ),
      r.parentEl
    )
  }
  componentDidMount() {
    document.addEventListener('mousedown', this.handleDocumentMouseDown),
      document.addEventListener('keydown', this.handleDocumentKeyDown),
      this.updateSize()
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleDocumentMouseDown),
      document.removeEventListener('keydown', this.handleDocumentKeyDown)
  }
  updateSize() {
    let { isRtl: e } = this.context,
      { alignmentEl: t, alignGridTop: r } = this.props,
      { rootEl: i } = this,
      s = Au(t)
    if (s) {
      let o = i.getBoundingClientRect(),
        l = r ? X(t, '.fc-scrollgrid').getBoundingClientRect().top : s.top,
        a = e ? s.right - o.width : s.left
      ;(l = Math.max(l, dr)),
        (a = Math.min(a, document.documentElement.clientWidth - dr - o.width)),
        (a = Math.max(a, dr))
      let c = i.offsetParent.getBoundingClientRect()
      xt(i, { top: l - c.top, left: a - c.left })
    }
  }
}
class nf extends De {
  constructor() {
    super(...arguments),
      (this.handleRootEl = (e) => {
        ;(this.rootEl = e),
          e
            ? this.context.registerInteractiveComponent(this, { el: e, useEventCenter: !1 })
            : this.context.unregisterInteractiveComponent(this)
      })
  }
  render() {
    let { options: e, dateEnv: t } = this.context,
      { props: r } = this,
      { startDate: i, todayRange: s, dateProfile: o } = r,
      l = t.format(i, e.dayPopoverFormat)
    return g(fi, { elRef: this.handleRootEl, date: i, dateProfile: o, todayRange: s }, (a, c, d) =>
      g(
        tf,
        {
          elRef: d.ref,
          id: r.id,
          title: l,
          extraClassNames: ['fc-more-popover'].concat(d.className || []),
          extraAttrs: d,
          parentEl: r.parentEl,
          alignmentEl: r.alignmentEl,
          alignGridTop: r.alignGridTop,
          onClose: r.onClose
        },
        hi(e) && g(a, { elTag: 'div', elClasses: ['fc-more-popover-misc'] }),
        r.children
      )
    )
  }
  queryHit(e, t, r, i) {
    let { rootEl: s, props: o } = this
    return e >= 0 && e < r && t >= 0 && t < i
      ? {
          dateProfile: o.dateProfile,
          dateSpan: Object.assign(
            { allDay: !o.forceTimed, range: { start: o.startDate, end: o.endDate } },
            o.extraDateSpan
          ),
          dayEl: s,
          rect: { left: 0, top: 0, right: r, bottom: i },
          layer: 1
        }
      : null
  }
}
class fl extends B {
  constructor() {
    super(...arguments),
      (this.state = { isPopoverOpen: !1, popoverId: Pn() }),
      (this.handleLinkEl = (e) => {
        ;(this.linkEl = e), this.props.elRef && xe(this.props.elRef, e)
      }),
      (this.handleClick = (e) => {
        let { props: t, context: r } = this,
          { moreLinkClick: i } = r.options,
          s = ms(t).start
        function o(l) {
          let { def: a, instance: c, range: d } = l.eventRange
          return {
            event: new z(r, a, c),
            start: r.dateEnv.toDate(d.start),
            end: r.dateEnv.toDate(d.end),
            isStart: l.isStart,
            isEnd: l.isEnd
          }
        }
        typeof i == 'function' &&
          (i = i({
            date: s,
            allDay: !!t.allDayDate,
            allSegs: t.allSegs.map(o),
            hiddenSegs: t.hiddenSegs.map(o),
            jsEvent: e,
            view: r.viewApi
          })),
          !i || i === 'popover'
            ? this.setState({ isPopoverOpen: !0 })
            : typeof i == 'string' && r.calendarApi.zoomTo(s, i)
      }),
      (this.handlePopoverClose = () => {
        this.setState({ isPopoverOpen: !1 })
      })
  }
  render() {
    let { props: e, state: t } = this
    return g(Me.Consumer, null, (r) => {
      let { viewApi: i, options: s, calendarApi: o } = r,
        { moreLinkText: l } = s,
        { moreCnt: a } = e,
        c = ms(e),
        d = typeof l == 'function' ? l.call(o, a) : `+${a} ${l}`,
        u = It(s.moreLinkHint, [a], d),
        h = { num: a, shortText: `+${a}`, text: d, view: i }
      return g(
        j,
        null,
        !!e.moreCnt &&
          g(
            ce,
            {
              elTag: e.elTag || 'a',
              elRef: this.handleLinkEl,
              elClasses: [...(e.elClasses || []), 'fc-more-link'],
              elStyle: e.elStyle,
              elAttrs: Object.assign(
                Object.assign(Object.assign({}, e.elAttrs), po(this.handleClick)),
                {
                  title: u,
                  'aria-expanded': t.isPopoverOpen,
                  'aria-controls': t.isPopoverOpen ? t.popoverId : ''
                }
              ),
              renderProps: h,
              generatorName: 'moreLinkContent',
              customGenerator: s.moreLinkContent,
              defaultGenerator: e.defaultGenerator || rf,
              classNameGenerator: s.moreLinkClassNames,
              didMount: s.moreLinkDidMount,
              willUnmount: s.moreLinkWillUnmount
            },
            e.children
          ),
        t.isPopoverOpen &&
          g(
            nf,
            {
              id: t.popoverId,
              startDate: c.start,
              endDate: c.end,
              dateProfile: e.dateProfile,
              todayRange: e.todayRange,
              extraDateSpan: e.extraDateSpan,
              parentEl: this.parentEl,
              alignmentEl: e.alignmentElRef ? e.alignmentElRef.current : this.linkEl,
              alignGridTop: e.alignGridTop,
              forceTimed: e.forceTimed,
              onClose: this.handlePopoverClose
            },
            e.popoverContent()
          )
      )
    })
  }
  componentDidMount() {
    this.updateParentEl()
  }
  componentDidUpdate() {
    this.updateParentEl()
  }
  updateParentEl() {
    this.linkEl && (this.parentEl = X(this.linkEl, '.fc-view-harness'))
  }
}
function rf(n) {
  return n.text
}
function ms(n) {
  if (n.allDayDate) return { start: n.allDayDate, end: $(n.allDayDate, 1) }
  let { hiddenSegs: e } = n
  return { start: hl(e), end: of(e) }
}
function hl(n) {
  return n.reduce(sf).eventRange.range.start
}
function sf(n, e) {
  return n.eventRange.range.start < e.eventRange.range.start ? n : e
}
function of(n) {
  return n.reduce(lf).eventRange.range.end
}
function lf(n, e) {
  return n.eventRange.range.end > e.eventRange.range.end ? n : e
}
class af {
  constructor() {
    this.handlers = []
  }
  set(e) {
    this.currentValue = e
    for (let t of this.handlers) t(e)
  }
  subscribe(e) {
    this.handlers.push(e), this.currentValue !== void 0 && e(this.currentValue)
  }
}
class cf extends af {
  constructor() {
    super(...arguments), (this.map = new Map())
  }
  handle(e) {
    const { map: t } = this
    let r = !1
    e.isActive ? (t.set(e.id, e), (r = !0)) : t.has(e.id) && (t.delete(e.id), (r = !0)),
      r && this.set(t)
  }
}
const df = [],
  gl = {
    code: 'en',
    week: { dow: 0, doy: 4 },
    direction: 'ltr',
    buttonText: {
      prev: 'prev',
      next: 'next',
      prevYear: 'prev year',
      nextYear: 'next year',
      year: 'year',
      today: 'today',
      month: 'month',
      week: 'week',
      day: 'day',
      list: 'list'
    },
    weekText: 'W',
    weekTextLong: 'Week',
    closeHint: 'Close',
    timeHint: 'Time',
    eventHint: 'Event',
    allDayText: 'all-day',
    moreLinkText: 'more',
    noEventsText: 'No events to display'
  },
  pl = Object.assign(Object.assign({}, gl), {
    buttonHints: {
      prev: 'Previous $0',
      next: 'Next $0',
      today(n, e) {
        return e === 'day' ? 'Today' : `This ${n}`
      }
    },
    viewHint: '$0 view',
    navLinkHint: 'Go to $0',
    moreLinkHint(n) {
      return `Show ${n} more event${n === 1 ? '' : 's'}`
    }
  })
function uf(n) {
  let e = n.length > 0 ? n[0].code : 'en',
    t = df.concat(n),
    r = { en: pl }
  for (let i of t) r[i.code] = i
  return { map: r, defaultCode: e }
}
function ml(n, e) {
  return typeof n == 'object' && !Array.isArray(n) ? vl(n.code, [n.code], n) : ff(n, e)
}
function ff(n, e) {
  let t = [].concat(n || []),
    r = hf(t, e) || pl
  return vl(n, t, r)
}
function hf(n, e) {
  for (let t = 0; t < n.length; t += 1) {
    let r = n[t].toLocaleLowerCase().split('-')
    for (let i = r.length; i > 0; i -= 1) {
      let s = r.slice(0, i).join('-')
      if (e[s]) return e[s]
    }
  }
  return null
}
function vl(n, e, t) {
  let r = qr([gl, t], ['buttonText'])
  delete r.code
  let { week: i } = r
  return (
    delete r.week,
    { codeArg: n, codes: e, week: i, simpleNumberFormat: new Intl.NumberFormat(n), options: r }
  )
}
function ke(n) {
  return {
    id: tt(),
    name: n.name,
    premiumReleaseDate: n.premiumReleaseDate ? new Date(n.premiumReleaseDate) : void 0,
    deps: n.deps || [],
    reducers: n.reducers || [],
    isLoadingFuncs: n.isLoadingFuncs || [],
    contextInit: [].concat(n.contextInit || []),
    eventRefiners: n.eventRefiners || {},
    eventDefMemberAdders: n.eventDefMemberAdders || [],
    eventSourceRefiners: n.eventSourceRefiners || {},
    isDraggableTransformers: n.isDraggableTransformers || [],
    eventDragMutationMassagers: n.eventDragMutationMassagers || [],
    eventDefMutationAppliers: n.eventDefMutationAppliers || [],
    dateSelectionTransformers: n.dateSelectionTransformers || [],
    datePointTransforms: n.datePointTransforms || [],
    dateSpanTransforms: n.dateSpanTransforms || [],
    views: n.views || {},
    viewPropsTransformers: n.viewPropsTransformers || [],
    isPropsValid: n.isPropsValid || null,
    externalDefTransforms: n.externalDefTransforms || [],
    viewContainerAppends: n.viewContainerAppends || [],
    eventDropTransformers: n.eventDropTransformers || [],
    componentInteractions: n.componentInteractions || [],
    calendarInteractions: n.calendarInteractions || [],
    themeClasses: n.themeClasses || {},
    eventSourceDefs: n.eventSourceDefs || [],
    cmdFormatter: n.cmdFormatter,
    recurringTypes: n.recurringTypes || [],
    namedTimeZonedImpl: n.namedTimeZonedImpl,
    initialView: n.initialView || '',
    elementDraggingImpl: n.elementDraggingImpl,
    optionChangeHandlers: n.optionChangeHandlers || {},
    scrollGridImpl: n.scrollGridImpl || null,
    listenerRefiners: n.listenerRefiners || {},
    optionRefiners: n.optionRefiners || {},
    propSetHandlers: n.propSetHandlers || {}
  }
}
function gf(n, e) {
  let t = {},
    r = {
      premiumReleaseDate: void 0,
      reducers: [],
      isLoadingFuncs: [],
      contextInit: [],
      eventRefiners: {},
      eventDefMemberAdders: [],
      eventSourceRefiners: {},
      isDraggableTransformers: [],
      eventDragMutationMassagers: [],
      eventDefMutationAppliers: [],
      dateSelectionTransformers: [],
      datePointTransforms: [],
      dateSpanTransforms: [],
      views: {},
      viewPropsTransformers: [],
      isPropsValid: null,
      externalDefTransforms: [],
      viewContainerAppends: [],
      eventDropTransformers: [],
      componentInteractions: [],
      calendarInteractions: [],
      themeClasses: {},
      eventSourceDefs: [],
      cmdFormatter: null,
      recurringTypes: [],
      namedTimeZonedImpl: null,
      initialView: '',
      elementDraggingImpl: null,
      optionChangeHandlers: {},
      scrollGridImpl: null,
      listenerRefiners: {},
      optionRefiners: {},
      propSetHandlers: {}
    }
  function i(s) {
    for (let o of s) {
      const l = o.name,
        a = t[l]
      a === void 0
        ? ((t[l] = o.id), i(o.deps), (r = mf(r, o)))
        : a !== o.id && console.warn(`Duplicate plugin '${l}'`)
    }
  }
  return n && i(n), i(e), r
}
function pf() {
  let n = [],
    e = [],
    t
  return (r, i) => ((!t || !Ue(r, n) || !Ue(i, e)) && (t = gf(r, i)), (n = r), (e = i), t)
}
function mf(n, e) {
  return {
    premiumReleaseDate: vf(n.premiumReleaseDate, e.premiumReleaseDate),
    reducers: n.reducers.concat(e.reducers),
    isLoadingFuncs: n.isLoadingFuncs.concat(e.isLoadingFuncs),
    contextInit: n.contextInit.concat(e.contextInit),
    eventRefiners: Object.assign(Object.assign({}, n.eventRefiners), e.eventRefiners),
    eventDefMemberAdders: n.eventDefMemberAdders.concat(e.eventDefMemberAdders),
    eventSourceRefiners: Object.assign(
      Object.assign({}, n.eventSourceRefiners),
      e.eventSourceRefiners
    ),
    isDraggableTransformers: n.isDraggableTransformers.concat(e.isDraggableTransformers),
    eventDragMutationMassagers: n.eventDragMutationMassagers.concat(e.eventDragMutationMassagers),
    eventDefMutationAppliers: n.eventDefMutationAppliers.concat(e.eventDefMutationAppliers),
    dateSelectionTransformers: n.dateSelectionTransformers.concat(e.dateSelectionTransformers),
    datePointTransforms: n.datePointTransforms.concat(e.datePointTransforms),
    dateSpanTransforms: n.dateSpanTransforms.concat(e.dateSpanTransforms),
    views: Object.assign(Object.assign({}, n.views), e.views),
    viewPropsTransformers: n.viewPropsTransformers.concat(e.viewPropsTransformers),
    isPropsValid: e.isPropsValid || n.isPropsValid,
    externalDefTransforms: n.externalDefTransforms.concat(e.externalDefTransforms),
    viewContainerAppends: n.viewContainerAppends.concat(e.viewContainerAppends),
    eventDropTransformers: n.eventDropTransformers.concat(e.eventDropTransformers),
    calendarInteractions: n.calendarInteractions.concat(e.calendarInteractions),
    componentInteractions: n.componentInteractions.concat(e.componentInteractions),
    themeClasses: Object.assign(Object.assign({}, n.themeClasses), e.themeClasses),
    eventSourceDefs: n.eventSourceDefs.concat(e.eventSourceDefs),
    cmdFormatter: e.cmdFormatter || n.cmdFormatter,
    recurringTypes: n.recurringTypes.concat(e.recurringTypes),
    namedTimeZonedImpl: e.namedTimeZonedImpl || n.namedTimeZonedImpl,
    initialView: n.initialView || e.initialView,
    elementDraggingImpl: n.elementDraggingImpl || e.elementDraggingImpl,
    optionChangeHandlers: Object.assign(
      Object.assign({}, n.optionChangeHandlers),
      e.optionChangeHandlers
    ),
    scrollGridImpl: e.scrollGridImpl || n.scrollGridImpl,
    listenerRefiners: Object.assign(Object.assign({}, n.listenerRefiners), e.listenerRefiners),
    optionRefiners: Object.assign(Object.assign({}, n.optionRefiners), e.optionRefiners),
    propSetHandlers: Object.assign(Object.assign({}, n.propSetHandlers), e.propSetHandlers)
  }
}
function vf(n, e) {
  return n === void 0 ? e : e === void 0 ? n : new Date(Math.max(n.valueOf(), e.valueOf()))
}
class We extends Bt {}
We.prototype.classes = {
  root: 'fc-theme-standard',
  tableCellShaded: 'fc-cell-shaded',
  buttonGroup: 'fc-button-group',
  button: 'fc-button fc-button-primary',
  buttonActive: 'fc-button-active'
}
We.prototype.baseIconClass = 'fc-icon'
We.prototype.iconClasses = {
  close: 'fc-icon-x',
  prev: 'fc-icon-chevron-left',
  next: 'fc-icon-chevron-right',
  prevYear: 'fc-icon-chevrons-left',
  nextYear: 'fc-icon-chevrons-right'
}
We.prototype.rtlIconClasses = {
  prev: 'fc-icon-chevron-right',
  next: 'fc-icon-chevron-left',
  prevYear: 'fc-icon-chevrons-right',
  nextYear: 'fc-icon-chevrons-left'
}
We.prototype.iconOverrideOption = 'buttonIcons'
We.prototype.iconOverrideCustomButtonOption = 'icon'
We.prototype.iconOverridePrefix = 'fc-icon-'
function bf(n, e) {
  let t = {},
    r
  for (r in n) Mr(r, t, n, e)
  for (r in e) Mr(r, t, n, e)
  return t
}
function Mr(n, e, t, r) {
  if (e[n]) return e[n]
  let i = yf(n, e, t, r)
  return i && (e[n] = i), i
}
function yf(n, e, t, r) {
  let i = t[n],
    s = r[n],
    o = (d) => (i && i[d] !== null ? i[d] : s && s[d] !== null ? s[d] : null),
    l = o('component'),
    a = o('superType'),
    c = null
  if (a) {
    if (a === n) throw new Error("Can't have a custom view type that references itself")
    c = Mr(a, e, t, r)
  }
  return (
    !l && c && (l = c.component),
    l
      ? {
          type: n,
          component: l,
          defaults: Object.assign(Object.assign({}, c ? c.defaults : {}), i ? i.rawOptions : {}),
          overrides: Object.assign(Object.assign({}, c ? c.overrides : {}), s ? s.rawOptions : {})
        }
      : null
  )
}
function vs(n) {
  return Te(n, Ef)
}
function Ef(n) {
  let e = typeof n == 'function' ? { component: n } : n,
    { component: t } = e
  return (
    e.content
      ? (t = bs(e))
      : t &&
        !(t.prototype instanceof B) &&
        (t = bs(Object.assign(Object.assign({}, e), { content: t }))),
    { superType: e.type, component: t, rawOptions: e }
  )
}
function bs(n) {
  return (e) =>
    g(Me.Consumer, null, (t) =>
      g(ce, {
        elTag: 'div',
        elClasses: wo(t.viewSpec),
        renderProps: Object.assign(Object.assign({}, e), {
          nextDayThreshold: t.options.nextDayThreshold
        }),
        generatorName: void 0,
        customGenerator: n.content,
        classNameGenerator: n.classNames,
        didMount: n.didMount,
        willUnmount: n.willUnmount
      })
    )
}
function Sf(n, e, t, r) {
  let i = vs(n),
    s = vs(e.views),
    o = bf(i, s)
  return Te(o, (l) => Af(l, s, e, t, r))
}
function Af(n, e, t, r, i) {
  let s = n.overrides.duration || n.defaults.duration || r.duration || t.duration,
    o = null,
    l = '',
    a = '',
    c = {}
  if (s && ((o = Df(s)), o)) {
    let h = Ar(o)
    ;(l = h.unit), h.value === 1 && ((a = l), (c = e[l] ? e[l].rawOptions : {}))
  }
  let d = (h) => {
      let f = h.buttonText || {},
        p = n.defaults.buttonTextKey
      return p != null && f[p] != null
        ? f[p]
        : f[n.type] != null
        ? f[n.type]
        : f[a] != null
        ? f[a]
        : null
    },
    u = (h) => {
      let f = h.buttonHints || {},
        p = n.defaults.buttonTextKey
      return p != null && f[p] != null
        ? f[p]
        : f[n.type] != null
        ? f[n.type]
        : f[a] != null
        ? f[a]
        : null
    }
  return {
    type: n.type,
    component: n.component,
    duration: o,
    durationUnit: l,
    singleUnit: a,
    optionDefaults: n.defaults,
    optionOverrides: Object.assign(Object.assign({}, c), n.overrides),
    buttonTextOverride: d(r) || d(t) || n.overrides.buttonText,
    buttonTextDefault: d(i) || n.defaults.buttonText || d(Mt) || n.type,
    buttonTitleOverride: u(r) || u(t) || n.overrides.buttonHint,
    buttonTitleDefault: u(i) || n.defaults.buttonHint || u(Mt)
  }
}
let ys = {}
function Df(n) {
  let e = JSON.stringify(n),
    t = ys[e]
  return t === void 0 && ((t = M(n)), (ys[e] = t)), t
}
function wf(n, e) {
  switch (e.type) {
    case 'CHANGE_VIEW_TYPE':
      n = e.viewType
  }
  return n
}
function Cf(n, e) {
  switch (e.type) {
    case 'SET_OPTION':
      return Object.assign(Object.assign({}, n), { [e.optionName]: e.rawOptionValue })
    default:
      return n
  }
}
function _f(n, e, t, r) {
  let i
  switch (e.type) {
    case 'CHANGE_VIEW_TYPE':
      return r.build(e.dateMarker || t)
    case 'CHANGE_DATE':
      return r.build(e.dateMarker)
    case 'PREV':
      if (((i = r.buildPrev(n, t)), i.isValid)) return i
      break
    case 'NEXT':
      if (((i = r.buildNext(n, t)), i.isValid)) return i
      break
  }
  return n
}
function Rf(n, e, t) {
  let r = e ? e.activeRange : null
  return yl({}, Nf(n, t), r, t)
}
function Tf(n, e, t, r) {
  let i = t ? t.activeRange : null
  switch (e.type) {
    case 'ADD_EVENT_SOURCES':
      return yl(n, e.sources, i, r)
    case 'REMOVE_EVENT_SOURCE':
      return If(n, e.sourceId)
    case 'PREV':
    case 'NEXT':
    case 'CHANGE_DATE':
    case 'CHANGE_VIEW_TYPE':
      return t ? El(n, i, r) : n
    case 'FETCH_EVENT_SOURCES':
      return gi(n, e.sourceIds ? yo(e.sourceIds) : Sl(n, r), i, e.isRefetch || !1, r)
    case 'RECEIVE_EVENTS':
    case 'RECEIVE_EVENT_ERROR':
      return Of(n, e.sourceId, e.fetchId, e.fetchRange)
    case 'REMOVE_ALL_EVENT_SOURCES':
      return {}
    default:
      return n
  }
}
function xf(n, e, t) {
  let r = e ? e.activeRange : null
  return gi(n, Sl(n, t), r, !0, t)
}
function bl(n) {
  for (let e in n) if (n[e].isFetching) return !0
  return !1
}
function yl(n, e, t, r) {
  let i = {}
  for (let s of e) i[s.sourceId] = s
  return t && (i = El(i, t, r)), Object.assign(Object.assign({}, n), i)
}
function If(n, e) {
  return Je(n, (t) => t.sourceId !== e)
}
function El(n, e, t) {
  return gi(
    n,
    Je(n, (r) => Mf(r, e, t)),
    e,
    !1,
    t
  )
}
function Mf(n, e, t) {
  return Al(n, t)
    ? !t.options.lazyFetching ||
        !n.fetchRange ||
        n.isFetching ||
        e.start < n.fetchRange.start ||
        e.end > n.fetchRange.end
    : !n.latestFetchId
}
function gi(n, e, t, r, i) {
  let s = {}
  for (let o in n) {
    let l = n[o]
    e[o] ? (s[o] = kf(l, t, r, i)) : (s[o] = l)
  }
  return s
}
function kf(n, e, t, r) {
  let { options: i, calendarApi: s } = r,
    o = r.pluginHooks.eventSourceDefs[n.sourceDefId],
    l = tt()
  return (
    o.fetch(
      { eventSource: n, range: e, isRefetch: t, context: r },
      (a) => {
        let { rawEvents: c } = a
        i.eventSourceSuccess && (c = i.eventSourceSuccess.call(s, c, a.response) || c),
          n.success && (c = n.success.call(s, c, a.response) || c),
          r.dispatch({
            type: 'RECEIVE_EVENTS',
            sourceId: n.sourceId,
            fetchId: l,
            fetchRange: e,
            rawEvents: c
          })
      },
      (a) => {
        let c = !1
        i.eventSourceFailure && (i.eventSourceFailure.call(s, a), (c = !0)),
          n.failure && (n.failure(a), (c = !0)),
          c || console.warn(a.message, a),
          r.dispatch({
            type: 'RECEIVE_EVENT_ERROR',
            sourceId: n.sourceId,
            fetchId: l,
            fetchRange: e,
            error: a
          })
      }
    ),
    Object.assign(Object.assign({}, n), { isFetching: !0, latestFetchId: l })
  )
}
function Of(n, e, t, r) {
  let i = n[e]
  return i && t === i.latestFetchId
    ? Object.assign(Object.assign({}, n), {
        [e]: Object.assign(Object.assign({}, i), { isFetching: !1, fetchRange: r })
      })
    : n
}
function Sl(n, e) {
  return Je(n, (t) => Al(t, e))
}
function Nf(n, e) {
  let t = Oo(e),
    r = [].concat(n.eventSources || []),
    i = []
  n.initialEvents && r.unshift(n.initialEvents), n.events && r.unshift(n.events)
  for (let s of r) {
    let o = ko(s, e, t)
    o && i.push(o)
  }
  return i
}
function Al(n, e) {
  return !e.pluginHooks.eventSourceDefs[n.sourceDefId].ignoreRange
}
function Pf(n, e) {
  switch (e.type) {
    case 'UNSELECT_DATES':
      return null
    case 'SELECT_DATES':
      return e.selection
    default:
      return n
  }
}
function Hf(n, e) {
  switch (e.type) {
    case 'UNSELECT_EVENT':
      return ''
    case 'SELECT_EVENT':
      return e.eventInstanceId
    default:
      return n
  }
}
function Bf(n, e) {
  let t
  switch (e.type) {
    case 'UNSET_EVENT_DRAG':
      return null
    case 'SET_EVENT_DRAG':
      return (
        (t = e.state),
        { affectedEvents: t.affectedEvents, mutatedEvents: t.mutatedEvents, isEvent: t.isEvent }
      )
    default:
      return n
  }
}
function Lf(n, e) {
  let t
  switch (e.type) {
    case 'UNSET_EVENT_RESIZE':
      return null
    case 'SET_EVENT_RESIZE':
      return (
        (t = e.state),
        { affectedEvents: t.affectedEvents, mutatedEvents: t.mutatedEvents, isEvent: t.isEvent }
      )
    default:
      return n
  }
}
function Ff(n, e, t, r, i) {
  let s = n.headerToolbar ? Es(n.headerToolbar, n, e, t, r, i) : null,
    o = n.footerToolbar ? Es(n.footerToolbar, n, e, t, r, i) : null
  return { header: s, footer: o }
}
function Es(n, e, t, r, i, s) {
  let o = {},
    l = [],
    a = !1
  for (let c in n) {
    let d = n[c],
      u = jf(d, e, t, r, i, s)
    ;(o[c] = u.widgets), l.push(...u.viewsWithButtons), (a = a || u.hasTitle)
  }
  return { sectionWidgets: o, viewsWithButtons: l, hasTitle: a }
}
function jf(n, e, t, r, i, s) {
  let o = e.direction === 'rtl',
    l = e.customButtons || {},
    a = t.buttonText || {},
    c = e.buttonText || {},
    d = t.buttonHints || {},
    u = e.buttonHints || {},
    h = n ? n.split(' ') : [],
    f = [],
    p = !1
  return {
    widgets: h.map((b) =>
      b.split(',').map((y) => {
        if (y === 'title') return (p = !0), { buttonName: y }
        let E, w, D, P, x, k
        if ((E = l[y]))
          (D = (A) => {
            E.click && E.click.call(A.target, A, A.target)
          }),
            (P = r.getCustomButtonIconClass(E)) || (P = r.getIconClass(y, o)) || (x = E.text),
            (k = E.hint || E.text)
        else if ((w = i[y])) {
          f.push(y),
            (D = () => {
              s.changeView(y)
            }),
            (x = w.buttonTextOverride) || (P = r.getIconClass(y, o)) || (x = w.buttonTextDefault)
          let A = w.buttonTextOverride || w.buttonTextDefault
          k = It(w.buttonTitleOverride || w.buttonTitleDefault || e.viewHint, [A, y], A)
        } else if (s[y])
          if (
            ((D = () => {
              s[y]()
            }),
            (x = a[y]) || (P = r.getIconClass(y, o)) || (x = c[y]),
            y === 'prevYear' || y === 'nextYear')
          ) {
            let A = y === 'prevYear' ? 'prev' : 'next'
            k = It(d[A] || u[A], [c.year || 'year', 'year'], c[y])
          } else k = (A) => It(d[y] || u[y], [c[A] || A, A], c[y])
        return { buttonName: y, buttonClick: D, buttonIcon: P, buttonText: x, buttonHint: k }
      })
    ),
    viewsWithButtons: f,
    hasTitle: p
  }
}
class Uf {
  constructor(e, t, r) {
    ;(this.type = e), (this.getCurrentData = t), (this.dateEnv = r)
  }
  get calendar() {
    return this.getCurrentData().calendarApi
  }
  get title() {
    return this.getCurrentData().viewTitle
  }
  get activeStart() {
    return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start)
  }
  get activeEnd() {
    return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end)
  }
  get currentStart() {
    return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start)
  }
  get currentEnd() {
    return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end)
  }
  getOption(e) {
    return this.getCurrentData().options[e]
  }
}
let zf = {
  ignoreRange: !0,
  parseMeta(n) {
    return Array.isArray(n.events) ? n.events : null
  },
  fetch(n, e) {
    e({ rawEvents: n.eventSource.meta })
  }
}
const Wf = ke({ name: 'array-event-source', eventSourceDefs: [zf] })
let Vf = {
  parseMeta(n) {
    return typeof n.events == 'function' ? n.events : null
  },
  fetch(n, e, t) {
    const { dateEnv: r } = n.context,
      i = n.eventSource.meta
    nu(i.bind(null, Wo(n.range, r)), (s) => e({ rawEvents: s }), t)
  }
}
const Gf = ke({ name: 'func-event-source', eventSourceDefs: [Vf] }),
  Yf = {
    method: String,
    extraParams: v,
    startParam: String,
    endParam: String,
    timeZoneParam: String
  }
let qf = {
  parseMeta(n) {
    return n.url && (n.format === 'json' || !n.format)
      ? {
          url: n.url,
          format: 'json',
          method: (n.method || 'GET').toUpperCase(),
          extraParams: n.extraParams,
          startParam: n.startParam,
          endParam: n.endParam,
          timeZoneParam: n.timeZoneParam
        }
      : null
  },
  fetch(n, e, t) {
    const { meta: r } = n.eventSource,
      i = Zf(r, n.range, n.context)
    ru(r.method, r.url, i).then(([s, o]) => {
      e({ rawEvents: s, response: o })
    }, t)
  }
}
const Qf = ke({ name: 'json-event-source', eventSourceRefiners: Yf, eventSourceDefs: [qf] })
function Zf(n, e, t) {
  let { dateEnv: r, options: i } = t,
    s,
    o,
    l,
    a,
    c = {}
  return (
    (s = n.startParam),
    s == null && (s = i.startParam),
    (o = n.endParam),
    o == null && (o = i.endParam),
    (l = n.timeZoneParam),
    l == null && (l = i.timeZoneParam),
    typeof n.extraParams == 'function' ? (a = n.extraParams()) : (a = n.extraParams || {}),
    Object.assign(c, a),
    (c[s] = r.formatIso(e.start)),
    (c[o] = r.formatIso(e.end)),
    r.timeZone !== 'local' && (c[l] = r.timeZone),
    c
  )
}
const Xf = { daysOfWeek: v, startTime: M, endTime: M, duration: M, startRecur: v, endRecur: v }
let $f = {
  parse(n, e) {
    if (n.daysOfWeek || n.startTime || n.endTime || n.startRecur || n.endRecur) {
      let t = {
          daysOfWeek: n.daysOfWeek || null,
          startTime: n.startTime || null,
          endTime: n.endTime || null,
          startRecur: n.startRecur ? e.createMarker(n.startRecur) : null,
          endRecur: n.endRecur ? e.createMarker(n.endRecur) : null
        },
        r
      return (
        n.duration && (r = n.duration),
        !r && n.startTime && n.endTime && (r = hc(n.endTime, n.startTime)),
        { allDayGuess: !n.startTime && !n.endTime, duration: r, typeData: t }
      )
    }
    return null
  },
  expand(n, e, t) {
    let r = Ke(e, { start: n.startRecur, end: n.endRecur })
    return r ? Kf(n.daysOfWeek, n.startTime, r, t) : []
  }
}
const Jf = ke({ name: 'simple-recurring-event', recurringTypes: [$f], eventRefiners: Xf })
function Kf(n, e, t, r) {
  let i = n ? yo(n) : null,
    s = F(t.start),
    o = t.end,
    l = []
  for (; s < o; ) {
    let a
    ;(!i || i[s.getUTCDay()]) && (e ? (a = r.add(s, e)) : (a = s), l.push(a)), (s = $(s, 1))
  }
  return l
}
const eh = ke({
  name: 'change-handler',
  optionChangeHandlers: {
    events(n, e) {
      Ss([n], e)
    },
    eventSources: Ss
  }
})
function Ss(n, e) {
  let t = Qr(e.getCurrentData().eventSources)
  if (t.length === 1 && n.length === 1 && Array.isArray(t[0]._raw) && Array.isArray(n[0])) {
    e.dispatch({ type: 'RESET_RAW_EVENTS', sourceId: t[0].sourceId, rawEvents: n[0] })
    return
  }
  let r = []
  for (let i of n) {
    let s = !1
    for (let o = 0; o < t.length; o += 1)
      if (t[o]._raw === i) {
        t.splice(o, 1), (s = !0)
        break
      }
    s || r.push(i)
  }
  for (let i of t) e.dispatch({ type: 'REMOVE_EVENT_SOURCE', sourceId: i.sourceId })
  for (let i of r) e.calendarApi.addEventSource(i)
}
function th(n, e) {
  e.emitter.trigger(
    'datesSet',
    Object.assign(Object.assign({}, Wo(n.activeRange, e.dateEnv)), { view: e.viewApi })
  )
}
function nh(n, e) {
  let { emitter: t } = e
  t.hasHandlers('eventsSet') && t.trigger('eventsSet', Xe(n, e))
}
const rh = [
  Wf,
  Gf,
  Qf,
  Jf,
  eh,
  ke({
    name: 'misc',
    isLoadingFuncs: [(n) => bl(n.eventSources)],
    propSetHandlers: { dateProfile: th, eventStore: nh }
  })
]
class ih {
  constructor(e, t) {
    ;(this.runTaskOption = e),
      (this.drainedOption = t),
      (this.queue = []),
      (this.delayedRunner = new Fr(this.drain.bind(this)))
  }
  request(e, t) {
    this.queue.push(e), this.delayedRunner.request(t)
  }
  pause(e) {
    this.delayedRunner.pause(e)
  }
  resume(e, t) {
    this.delayedRunner.resume(e, t)
  }
  drain() {
    let { queue: e } = this
    for (; e.length; ) {
      let t = [],
        r
      for (; (r = e.shift()); ) this.runTask(r), t.push(r)
      this.drained(t)
    }
  }
  runTask(e) {
    this.runTaskOption && this.runTaskOption(e)
  }
  drained(e) {
    this.drainedOption && this.drainedOption(e)
  }
}
function sh(n, e, t) {
  let r
  return (
    /^(year|month)$/.test(n.currentRangeUnit) ? (r = n.currentRange) : (r = n.activeRange),
    t.formatRange(r.start, r.end, V(e.titleFormat || oh(n)), {
      isEndExclusive: n.isRangeAllDay,
      defaultSeparator: e.titleRangeSeparator
    })
  )
}
function oh(n) {
  let { currentRangeUnit: e } = n
  if (e === 'year') return { year: 'numeric' }
  if (e === 'month') return { year: 'numeric', month: 'long' }
  let t = An(n.currentRange.start, n.currentRange.end)
  return t !== null && t > 1
    ? { year: 'numeric', month: 'short', day: 'numeric' }
    : { year: 'numeric', month: 'long', day: 'numeric' }
}
class lh {
  constructor(e) {
    ;(this.computeCurrentViewData = _(this._computeCurrentViewData)),
      (this.organizeRawLocales = _(uf)),
      (this.buildLocale = _(ml)),
      (this.buildPluginHooks = pf()),
      (this.buildDateEnv = _(ah)),
      (this.buildTheme = _(ch)),
      (this.parseToolbars = _(Ff)),
      (this.buildViewSpecs = _(Sf)),
      (this.buildDateProfileGenerator = un(dh)),
      (this.buildViewApi = _(uh)),
      (this.buildViewUiProps = un(gh)),
      (this.buildEventUiBySource = _(fh, Ae)),
      (this.buildEventUiBases = _(hh)),
      (this.parseContextBusinessHours = un(ph)),
      (this.buildTitle = _(sh)),
      (this.emitter = new Fn()),
      (this.actionRunner = new ih(this._handleAction.bind(this), this.updateData.bind(this))),
      (this.currentCalendarOptionsInput = {}),
      (this.currentCalendarOptionsRefined = {}),
      (this.currentViewOptionsInput = {}),
      (this.currentViewOptionsRefined = {}),
      (this.currentCalendarOptionsRefiners = {}),
      (this.optionsForRefining = []),
      (this.optionsForHandling = []),
      (this.getCurrentData = () => this.data),
      (this.dispatch = (h) => {
        this.actionRunner.request(h)
      }),
      (this.props = e),
      this.actionRunner.pause()
    let t = {},
      r = this.computeOptionsData(e.optionOverrides, t, e.calendarApi),
      i = r.calendarOptions.initialView || r.pluginHooks.initialView,
      s = this.computeCurrentViewData(i, r, e.optionOverrides, t)
    ;(e.calendarApi.currentDataManager = this),
      this.emitter.setThisContext(e.calendarApi),
      this.emitter.setOptions(s.options)
    let o = md(r.calendarOptions, r.dateEnv),
      l = s.dateProfileGenerator.build(o)
    _e(l.activeRange, o) || (o = l.currentRange.start)
    let a = {
      dateEnv: r.dateEnv,
      options: r.calendarOptions,
      pluginHooks: r.pluginHooks,
      calendarApi: e.calendarApi,
      dispatch: this.dispatch,
      emitter: this.emitter,
      getCurrentData: this.getCurrentData
    }
    for (let h of r.pluginHooks.contextInit) h(a)
    let c = Rf(r.calendarOptions, l, a),
      d = {
        dynamicOptionOverrides: t,
        currentViewType: i,
        currentDate: o,
        dateProfile: l,
        businessHours: this.parseContextBusinessHours(a),
        eventSources: c,
        eventUiBases: {},
        eventStore: ae(),
        renderableEventStore: ae(),
        dateSelection: null,
        eventSelection: '',
        eventDrag: null,
        eventResize: null,
        selectionConfig: this.buildViewUiProps(a).selectionConfig
      },
      u = Object.assign(Object.assign({}, a), d)
    for (let h of r.pluginHooks.reducers) Object.assign(d, h(null, null, u))
    ur(d, a) && this.emitter.trigger('loading', !0),
      (this.state = d),
      this.updateData(),
      this.actionRunner.resume()
  }
  resetOptions(e, t) {
    let { props: r } = this
    t === void 0
      ? (r.optionOverrides = e)
      : ((r.optionOverrides = Object.assign(Object.assign({}, r.optionOverrides || {}), e)),
        this.optionsForRefining.push(...t)),
      (t === void 0 || t.length) && this.actionRunner.request({ type: 'NOTHING' })
  }
  _handleAction(e) {
    let { props: t, state: r, emitter: i } = this,
      s = Cf(r.dynamicOptionOverrides, e),
      o = this.computeOptionsData(t.optionOverrides, s, t.calendarApi),
      l = wf(r.currentViewType, e),
      a = this.computeCurrentViewData(l, o, t.optionOverrides, s)
    ;(t.calendarApi.currentDataManager = this),
      i.setThisContext(t.calendarApi),
      i.setOptions(a.options)
    let c = {
        dateEnv: o.dateEnv,
        options: o.calendarOptions,
        pluginHooks: o.pluginHooks,
        calendarApi: t.calendarApi,
        dispatch: this.dispatch,
        emitter: i,
        getCurrentData: this.getCurrentData
      },
      { currentDate: d, dateProfile: u } = r
    this.data &&
      this.data.dateProfileGenerator !== a.dateProfileGenerator &&
      (u = a.dateProfileGenerator.build(d)),
      (d = pd(d, e)),
      (u = _f(u, e, d, a.dateProfileGenerator)),
      (e.type === 'PREV' || e.type === 'NEXT' || !_e(u.currentRange, d)) &&
        (d = u.currentRange.start)
    let h = Tf(r.eventSources, e, u, c),
      f = xd(r.eventStore, e, h, u, c),
      m = (bl(h) && !a.options.progressiveEventRendering && r.renderableEventStore) || f,
      { eventUiSingleBase: b, selectionConfig: y } = this.buildViewUiProps(c),
      E = this.buildEventUiBySource(h),
      w = this.buildEventUiBases(m.defs, b, E),
      D = {
        dynamicOptionOverrides: s,
        currentViewType: l,
        currentDate: d,
        dateProfile: u,
        eventSources: h,
        eventStore: f,
        renderableEventStore: m,
        selectionConfig: y,
        eventUiBases: w,
        businessHours: this.parseContextBusinessHours(c),
        dateSelection: Pf(r.dateSelection, e),
        eventSelection: Hf(r.eventSelection, e),
        eventDrag: Bf(r.eventDrag, e),
        eventResize: Lf(r.eventResize, e)
      },
      P = Object.assign(Object.assign({}, c), D)
    for (let A of o.pluginHooks.reducers) Object.assign(D, A(r, e, P))
    let x = ur(r, c),
      k = ur(D, c)
    !x && k ? i.trigger('loading', !0) : x && !k && i.trigger('loading', !1),
      (this.state = D),
      t.onAction && t.onAction(e)
  }
  updateData() {
    let { props: e, state: t } = this,
      r = this.data,
      i = this.computeOptionsData(e.optionOverrides, t.dynamicOptionOverrides, e.calendarApi),
      s = this.computeCurrentViewData(
        t.currentViewType,
        i,
        e.optionOverrides,
        t.dynamicOptionOverrides
      ),
      o = (this.data = Object.assign(
        Object.assign(
          Object.assign(
            {
              viewTitle: this.buildTitle(t.dateProfile, s.options, i.dateEnv),
              calendarApi: e.calendarApi,
              dispatch: this.dispatch,
              emitter: this.emitter,
              getCurrentData: this.getCurrentData
            },
            i
          ),
          s
        ),
        t
      )),
      l = i.pluginHooks.optionChangeHandlers,
      a = r && r.calendarOptions,
      c = i.calendarOptions
    if (a && a !== c) {
      a.timeZone !== c.timeZone &&
        ((t.eventSources = o.eventSources = xf(o.eventSources, t.dateProfile, o)),
        (t.eventStore = o.eventStore = ds(o.eventStore, r.dateEnv, o.dateEnv)),
        (t.renderableEventStore = o.renderableEventStore =
          ds(o.renderableEventStore, r.dateEnv, o.dateEnv)))
      for (let d in l) (this.optionsForHandling.indexOf(d) !== -1 || a[d] !== c[d]) && l[d](c[d], o)
    }
    ;(this.optionsForHandling = []), e.onData && e.onData(o)
  }
  computeOptionsData(e, t, r) {
    if (
      !this.optionsForRefining.length &&
      e === this.stableOptionOverrides &&
      t === this.stableDynamicOptionOverrides
    )
      return this.stableCalendarOptionsData
    let {
      refinedOptions: i,
      pluginHooks: s,
      localeDefaults: o,
      availableLocaleData: l,
      extra: a
    } = this.processRawCalendarOptions(e, t)
    As(a)
    let c = this.buildDateEnv(
        i.timeZone,
        i.locale,
        i.weekNumberCalculation,
        i.firstDay,
        i.weekText,
        s,
        l,
        i.defaultRangeSeparator
      ),
      d = this.buildViewSpecs(
        s.views,
        this.stableOptionOverrides,
        this.stableDynamicOptionOverrides,
        o
      ),
      u = this.buildTheme(i, s),
      h = this.parseToolbars(i, this.stableOptionOverrides, u, d, r)
    return (this.stableCalendarOptionsData = {
      calendarOptions: i,
      pluginHooks: s,
      dateEnv: c,
      viewSpecs: d,
      theme: u,
      toolbarConfig: h,
      localeDefaults: o,
      availableRawLocales: l.map
    })
  }
  processRawCalendarOptions(e, t) {
    let { locales: r, locale: i } = nr([Mt, e, t]),
      s = this.organizeRawLocales(r),
      o = s.map,
      l = this.buildLocale(i || s.defaultCode, o).options,
      a = this.buildPluginHooks(e.plugins || [], rh),
      c = (this.currentCalendarOptionsRefiners = Object.assign(
        Object.assign(
          Object.assign(Object.assign(Object.assign({}, rs), is), ss),
          a.listenerRefiners
        ),
        a.optionRefiners
      )),
      d = {},
      u = nr([Mt, l, e, t]),
      h = {},
      f = this.currentCalendarOptionsInput,
      p = this.currentCalendarOptionsRefined,
      m = !1
    for (let b in u)
      this.optionsForRefining.indexOf(b) === -1 &&
      (u[b] === f[b] || (qe[b] && b in f && qe[b](f[b], u[b])))
        ? (h[b] = p[b])
        : c[b]
        ? ((h[b] = c[b](u[b])), (m = !0))
        : (d[b] = f[b])
    return (
      m &&
        ((this.currentCalendarOptionsInput = u),
        (this.currentCalendarOptionsRefined = h),
        (this.stableOptionOverrides = e),
        (this.stableDynamicOptionOverrides = t)),
      this.optionsForHandling.push(...this.optionsForRefining),
      (this.optionsForRefining = []),
      {
        rawOptions: this.currentCalendarOptionsInput,
        refinedOptions: this.currentCalendarOptionsRefined,
        pluginHooks: a,
        availableLocaleData: s,
        localeDefaults: l,
        extra: d
      }
    )
  }
  _computeCurrentViewData(e, t, r, i) {
    let s = t.viewSpecs[e]
    if (!s)
      throw new Error(
        `viewType "${e}" is not available. Please make sure you've loaded all neccessary plugins`
      )
    let { refinedOptions: o, extra: l } = this.processRawViewOptions(
      s,
      t.pluginHooks,
      t.localeDefaults,
      r,
      i
    )
    As(l)
    let a = this.buildDateProfileGenerator({
        dateProfileGeneratorClass: s.optionDefaults.dateProfileGeneratorClass,
        duration: s.duration,
        durationUnit: s.durationUnit,
        usesMinMaxTime: s.optionDefaults.usesMinMaxTime,
        dateEnv: t.dateEnv,
        calendarApi: this.props.calendarApi,
        slotMinTime: o.slotMinTime,
        slotMaxTime: o.slotMaxTime,
        showNonCurrentDates: o.showNonCurrentDates,
        dayCount: o.dayCount,
        dateAlignment: o.dateAlignment,
        dateIncrement: o.dateIncrement,
        hiddenDays: o.hiddenDays,
        weekends: o.weekends,
        nowInput: o.now,
        validRangeInput: o.validRange,
        visibleRangeInput: o.visibleRange,
        fixedWeekCount: o.fixedWeekCount
      }),
      c = this.buildViewApi(e, this.getCurrentData, t.dateEnv)
    return { viewSpec: s, options: o, dateProfileGenerator: a, viewApi: c }
  }
  processRawViewOptions(e, t, r, i, s) {
    let o = nr([Mt, e.optionDefaults, r, i, e.optionOverrides, s]),
      l = Object.assign(
        Object.assign(
          Object.assign(Object.assign(Object.assign(Object.assign({}, rs), is), ss), Yc),
          t.listenerRefiners
        ),
        t.optionRefiners
      ),
      a = {},
      c = this.currentViewOptionsInput,
      d = this.currentViewOptionsRefined,
      u = !1,
      h = {}
    for (let f in o)
      o[f] === c[f] || (qe[f] && qe[f](o[f], c[f]))
        ? (a[f] = d[f])
        : (o[f] === this.currentCalendarOptionsInput[f] ||
          (qe[f] && qe[f](o[f], this.currentCalendarOptionsInput[f]))
            ? f in this.currentCalendarOptionsRefined &&
              (a[f] = this.currentCalendarOptionsRefined[f])
            : l[f]
            ? (a[f] = l[f](o[f]))
            : (h[f] = o[f]),
          (u = !0))
    return (
      u && ((this.currentViewOptionsInput = o), (this.currentViewOptionsRefined = a)),
      {
        rawOptions: this.currentViewOptionsInput,
        refinedOptions: this.currentViewOptionsRefined,
        extra: h
      }
    )
  }
}
function ah(n, e, t, r, i, s, o, l) {
  let a = ml(e || o.defaultCode, o.map)
  return new nd({
    calendarSystem: 'gregory',
    timeZone: n,
    namedTimeZoneImpl: s.namedTimeZonedImpl,
    locale: a,
    weekNumberCalculation: t,
    firstDay: r,
    weekText: i,
    cmdFormatter: s.cmdFormatter,
    defaultSeparator: l
  })
}
function ch(n, e) {
  let t = e.themeClasses[n.themeSystem] || We
  return new t(n)
}
function dh(n) {
  let e = n.dateProfileGeneratorClass || Ro
  return new e(n)
}
function uh(n, e, t) {
  return new Uf(n, e, t)
}
function fh(n) {
  return Te(n, (e) => e.ui)
}
function hh(n, e, t) {
  let r = { '': e }
  for (let i in n) {
    let s = n[i]
    s.sourceId && t[s.sourceId] && (r[i] = t[s.sourceId])
  }
  return r
}
function gh(n) {
  let { options: e } = n
  return {
    eventUiSingleBase: Tn(
      {
        display: e.eventDisplay,
        editable: e.editable,
        startEditable: e.eventStartEditable,
        durationEditable: e.eventDurationEditable,
        constraint: e.eventConstraint,
        overlap: typeof e.eventOverlap == 'boolean' ? e.eventOverlap : void 0,
        allow: e.eventAllow,
        backgroundColor: e.eventBackgroundColor,
        borderColor: e.eventBorderColor,
        textColor: e.eventTextColor,
        color: e.eventColor
      },
      n
    ),
    selectionConfig: Tn(
      {
        constraint: e.selectConstraint,
        overlap: typeof e.selectOverlap == 'boolean' ? e.selectOverlap : void 0,
        allow: e.selectAllow
      },
      n
    )
  }
}
function ur(n, e) {
  for (let t of e.pluginHooks.isLoadingFuncs) if (t(n)) return !0
  return !1
}
function ph(n) {
  return Ld(n.options.businessHours, n)
}
function As(n, e) {
  for (let t in n) console.warn(`Unknown option '${t}'` + (e ? ` for view '${e}'` : ''))
}
class mh extends B {
  render() {
    let e = this.props.widgetGroups.map((t) => this.renderWidgetGroup(t))
    return g('div', { className: 'fc-toolbar-chunk' }, ...e)
  }
  renderWidgetGroup(e) {
    let { props: t } = this,
      { theme: r } = this.context,
      i = [],
      s = !0
    for (let o of e) {
      let { buttonName: l, buttonClick: a, buttonText: c, buttonIcon: d, buttonHint: u } = o
      if (l === 'title')
        (s = !1), i.push(g('h2', { className: 'fc-toolbar-title', id: t.titleId }, t.title))
      else {
        let h = l === t.activeButton,
          f =
            (!t.isTodayEnabled && l === 'today') ||
            (!t.isPrevEnabled && l === 'prev') ||
            (!t.isNextEnabled && l === 'next'),
          p = [`fc-${l}-button`, r.getClass('button')]
        h && p.push(r.getClass('buttonActive')),
          i.push(
            g(
              'button',
              {
                type: 'button',
                title: typeof u == 'function' ? u(t.navUnit) : u,
                disabled: f,
                'aria-pressed': h,
                className: p.join(' '),
                onClick: a
              },
              c || (d ? g('span', { className: d }) : '')
            )
          )
      }
    }
    if (i.length > 1) {
      let o = (s && r.getClass('buttonGroup')) || ''
      return g('div', { className: o }, ...i)
    }
    return i[0]
  }
}
class Ds extends B {
  render() {
    let { model: e, extraClassName: t } = this.props,
      r = !1,
      i,
      s,
      o = e.sectionWidgets,
      l = o.center
    return (
      o.left ? ((r = !0), (i = o.left)) : (i = o.start),
      o.right ? ((r = !0), (s = o.right)) : (s = o.end),
      g(
        'div',
        { className: [t || '', 'fc-toolbar', r ? 'fc-toolbar-ltr' : ''].join(' ') },
        this.renderSection('start', i || []),
        this.renderSection('center', l || []),
        this.renderSection('end', s || [])
      )
    )
  }
  renderSection(e, t) {
    let { props: r } = this
    return g(mh, {
      key: e,
      widgetGroups: t,
      title: r.title,
      navUnit: r.navUnit,
      activeButton: r.activeButton,
      isTodayEnabled: r.isTodayEnabled,
      isPrevEnabled: r.isPrevEnabled,
      isNextEnabled: r.isNextEnabled,
      titleId: r.titleId
    })
  }
}
class vh extends B {
  constructor() {
    super(...arguments),
      (this.state = { availableWidth: null }),
      (this.handleEl = (e) => {
        ;(this.el = e), xe(this.props.elRef, e), this.updateAvailableWidth()
      }),
      (this.handleResize = () => {
        this.updateAvailableWidth()
      })
  }
  render() {
    let { props: e, state: t } = this,
      { aspectRatio: r } = e,
      i = [
        'fc-view-harness',
        r || e.liquid || e.height ? 'fc-view-harness-active' : 'fc-view-harness-passive'
      ],
      s = '',
      o = ''
    return (
      r
        ? t.availableWidth !== null
          ? (s = t.availableWidth / r)
          : (o = `${(1 / r) * 100}%`)
        : (s = e.height || ''),
      g(
        'div',
        {
          'aria-labelledby': e.labeledById,
          ref: this.handleEl,
          className: i.join(' '),
          style: { height: s, paddingBottom: o }
        },
        e.children
      )
    )
  }
  componentDidMount() {
    this.context.addResizeHandler(this.handleResize)
  }
  componentWillUnmount() {
    this.context.removeResizeHandler(this.handleResize)
  }
  updateAvailableWidth() {
    this.el && this.props.aspectRatio && this.setState({ availableWidth: this.el.offsetWidth })
  }
}
class bh extends bt {
  constructor(e) {
    super(e),
      (this.handleSegClick = (t, r) => {
        let { component: i } = this,
          { context: s } = i,
          o = mt(r)
        if (o && i.isValidSegDownEl(t.target)) {
          let l = X(t.target, '.fc-event-forced-url'),
            a = l ? l.querySelector('a[href]').href : ''
          s.emitter.trigger('eventClick', {
            el: r,
            event: new z(i.context, o.eventRange.def, o.eventRange.instance),
            jsEvent: t,
            view: s.viewApi
          }),
            a && !t.defaultPrevented && (window.location.href = a)
        }
      }),
      (this.destroy = go(e.el, 'click', '.fc-event', this.handleSegClick))
  }
}
class yh extends bt {
  constructor(e) {
    super(e),
      (this.handleEventElRemove = (t) => {
        t === this.currentSegEl && this.handleSegLeave(null, this.currentSegEl)
      }),
      (this.handleSegEnter = (t, r) => {
        mt(r) && ((this.currentSegEl = r), this.triggerEvent('eventMouseEnter', t, r))
      }),
      (this.handleSegLeave = (t, r) => {
        this.currentSegEl &&
          ((this.currentSegEl = null), this.triggerEvent('eventMouseLeave', t, r))
      }),
      (this.removeHoverListeners = Ja(e.el, '.fc-event', this.handleSegEnter, this.handleSegLeave))
  }
  destroy() {
    this.removeHoverListeners()
  }
  triggerEvent(e, t, r) {
    let { component: i } = this,
      { context: s } = i,
      o = mt(r)
    ;(!t || i.isValidSegDownEl(t.target)) &&
      s.emitter.trigger(e, {
        el: r,
        event: new z(s, o.eventRange.def, o.eventRange.instance),
        jsEvent: t,
        view: s.viewApi
      })
  }
}
class Eh extends rt {
  constructor() {
    super(...arguments),
      (this.buildViewContext = _(sd)),
      (this.buildViewPropTransformers = _(Ah)),
      (this.buildToolbarProps = _(Sh)),
      (this.headerRef = K()),
      (this.footerRef = K()),
      (this.interactionsStore = {}),
      (this.state = { viewLabelId: Pn() }),
      (this.registerInteractiveComponent = (e, t) => {
        let r = ou(e, t),
          o = [bh, yh].concat(this.props.pluginHooks.componentInteractions).map((l) => new l(r))
        ;(this.interactionsStore[e.uid] = o), (Rr[e.uid] = r)
      }),
      (this.unregisterInteractiveComponent = (e) => {
        let t = this.interactionsStore[e.uid]
        if (t) {
          for (let r of t) r.destroy()
          delete this.interactionsStore[e.uid]
        }
        delete Rr[e.uid]
      }),
      (this.resizeRunner = new Fr(() => {
        this.props.emitter.trigger('_resize', !0),
          this.props.emitter.trigger('windowResize', { view: this.props.viewApi })
      })),
      (this.handleWindowResize = (e) => {
        let { options: t } = this.props
        t.handleWindowResize &&
          e.target === window &&
          this.resizeRunner.request(t.windowResizeDelay)
      })
  }
  render() {
    let { props: e } = this,
      { toolbarConfig: t, options: r } = e,
      i = this.buildToolbarProps(
        e.viewSpec,
        e.dateProfile,
        e.dateProfileGenerator,
        e.currentDate,
        Lt(e.options.now, e.dateEnv),
        e.viewTitle
      ),
      s = !1,
      o = '',
      l
    e.isHeightAuto || e.forPrint
      ? (o = '')
      : r.height != null
      ? (s = !0)
      : r.contentHeight != null
      ? (o = r.contentHeight)
      : (l = Math.max(r.aspectRatio, 0.5))
    let a = this.buildViewContext(
        e.viewSpec,
        e.viewApi,
        e.options,
        e.dateProfileGenerator,
        e.dateEnv,
        e.theme,
        e.pluginHooks,
        e.dispatch,
        e.getCurrentData,
        e.emitter,
        e.calendarApi,
        this.registerInteractiveComponent,
        this.unregisterInteractiveComponent
      ),
      c = t.header && t.header.hasTitle ? this.state.viewLabelId : ''
    return g(
      Me.Provider,
      { value: a },
      t.header &&
        g(
          Ds,
          Object.assign(
            {
              ref: this.headerRef,
              extraClassName: 'fc-header-toolbar',
              model: t.header,
              titleId: c
            },
            i
          )
        ),
      g(
        vh,
        { liquid: s, height: o, aspectRatio: l, labeledById: c },
        this.renderView(e),
        this.buildAppendContent()
      ),
      t.footer &&
        g(
          Ds,
          Object.assign(
            {
              ref: this.footerRef,
              extraClassName: 'fc-footer-toolbar',
              model: t.footer,
              titleId: ''
            },
            i
          )
        )
    )
  }
  componentDidMount() {
    let { props: e } = this
    ;(this.calendarInteractions = e.pluginHooks.calendarInteractions.map((r) => new r(e))),
      window.addEventListener('resize', this.handleWindowResize)
    let { propSetHandlers: t } = e.pluginHooks
    for (let r in t) t[r](e[r], e)
  }
  componentDidUpdate(e) {
    let { props: t } = this,
      { propSetHandlers: r } = t.pluginHooks
    for (let i in r) t[i] !== e[i] && r[i](t[i], t)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize), this.resizeRunner.clear()
    for (let e of this.calendarInteractions) e.destroy()
    this.props.emitter.trigger('_unmount')
  }
  buildAppendContent() {
    let { props: e } = this,
      t = e.pluginHooks.viewContainerAppends.map((r) => r(e))
    return g(j, {}, ...t)
  }
  renderView(e) {
    let { pluginHooks: t } = e,
      { viewSpec: r } = e,
      i = {
        dateProfile: e.dateProfile,
        businessHours: e.businessHours,
        eventStore: e.renderableEventStore,
        eventUiBases: e.eventUiBases,
        dateSelection: e.dateSelection,
        eventSelection: e.eventSelection,
        eventDrag: e.eventDrag,
        eventResize: e.eventResize,
        isHeightAuto: e.isHeightAuto,
        forPrint: e.forPrint
      },
      s = this.buildViewPropTransformers(t.viewPropsTransformers)
    for (let l of s) Object.assign(i, l.transform(i, e))
    let o = r.component
    return g(o, Object.assign({}, i))
  }
}
function Sh(n, e, t, r, i, s) {
  let o = t.build(i, void 0, !1),
    l = t.buildPrev(e, r, !1),
    a = t.buildNext(e, r, !1)
  return {
    title: s,
    activeButton: n.type,
    navUnit: n.singleUnit,
    isTodayEnabled: o.isValid && !_e(e.currentRange, i),
    isPrevEnabled: l.isValid,
    isNextEnabled: a.isValid
  }
}
function Ah(n) {
  return n.map((e) => new e())
}
let Dh = class extends lu {
  constructor(e, t = {}) {
    super(),
      (this.isRendering = !1),
      (this.isRendered = !1),
      (this.currentClassNames = []),
      (this.customContentRenderId = 0),
      (this.handleAction = (r) => {
        switch (r.type) {
          case 'SET_EVENT_DRAG':
          case 'SET_EVENT_RESIZE':
            this.renderRunner.tryDrain()
        }
      }),
      (this.handleData = (r) => {
        ;(this.currentData = r), this.renderRunner.request(r.calendarOptions.rerenderDelay)
      }),
      (this.handleRenderRequest = () => {
        if (this.isRendering) {
          this.isRendered = !0
          let { currentData: r } = this
          os(() => {
            Ot(
              g(
                su,
                { options: r.calendarOptions, theme: r.theme, emitter: r.emitter },
                (i, s, o, l) => (
                  this.setClassNames(i),
                  this.setHeight(s),
                  g(
                    Do.Provider,
                    { value: this.customContentRenderId },
                    g(Eh, Object.assign({ isHeightAuto: o, forPrint: l }, r))
                  )
                )
              ),
              this.el
            )
          })
        } else
          this.isRendered &&
            ((this.isRendered = !1), Ot(null, this.el), this.setClassNames([]), this.setHeight(''))
      }),
      Wa(e),
      (this.el = e),
      (this.renderRunner = new Fr(this.handleRenderRequest)),
      new lh({
        optionOverrides: t,
        calendarApi: this,
        onAction: this.handleAction,
        onData: this.handleData
      })
  }
  render() {
    let e = this.isRendering
    e ? (this.customContentRenderId += 1) : (this.isRendering = !0),
      this.renderRunner.request(),
      e && this.updateSize()
  }
  destroy() {
    this.isRendering && ((this.isRendering = !1), this.renderRunner.request())
  }
  updateSize() {
    os(() => {
      super.updateSize()
    })
  }
  batchRendering(e) {
    this.renderRunner.pause('batchRendering'), e(), this.renderRunner.resume('batchRendering')
  }
  pauseRendering() {
    this.renderRunner.pause('pauseRendering')
  }
  resumeRendering() {
    this.renderRunner.resume('pauseRendering', !0)
  }
  resetOptions(e, t) {
    this.currentDataManager.resetOptions(e, t)
  }
  setClassNames(e) {
    if (!Ue(e, this.currentClassNames)) {
      let { classList: t } = this.el
      for (let r of this.currentClassNames) t.remove(r)
      for (let r of e) t.add(r)
      this.currentClassNames = e
    }
  }
  setHeight(e) {
    fo(this.el, 'height', e)
  }
}
const wh = parseInt(String(hr.version).split('.')[0]),
  Ch = wh < 18
class Dl extends se.Component {
  constructor() {
    super(...arguments),
      (this.elRef = se.createRef()),
      (this.isUpdating = !1),
      (this.isUnmounting = !1),
      (this.state = { customRenderingMap: new Map() }),
      (this.requestResize = () => {
        this.isUnmounting ||
          (this.cancelResize(),
          (this.resizeId = requestAnimationFrame(() => {
            this.doResize()
          })))
      })
  }
  render() {
    const e = []
    for (const t of this.state.customRenderingMap.values())
      e.push(hr.createElement(_h, { key: t.id, customRendering: t }))
    return hr.createElement('div', { ref: this.elRef }, e)
  }
  componentDidMount() {
    const e = new cf()
    ;(this.handleCustomRendering = e.handle.bind(e)),
      (this.calendar = new Dh(
        this.elRef.current,
        Object.assign(Object.assign({}, this.props), {
          handleCustomRendering: this.handleCustomRendering
        })
      )),
      this.calendar.render()
    let t
    e.subscribe((r) => {
      const i = Date.now(),
        s = !t
      ;(Ch || s || this.isUpdating || this.isUnmounting || i - t < 100 ? wl : Is.flushSync)(() => {
        this.setState({ customRenderingMap: r }, () => {
          ;(t = i), s ? this.doResize() : this.requestResize()
        })
      })
    })
  }
  componentDidUpdate() {
    ;(this.isUpdating = !0),
      this.calendar.resetOptions(
        Object.assign(Object.assign({}, this.props), {
          handleCustomRendering: this.handleCustomRendering
        })
      ),
      (this.isUpdating = !1)
  }
  componentWillUnmount() {
    ;(this.isUnmounting = !0), this.cancelResize(), this.calendar.destroy()
  }
  doResize() {
    this.calendar.updateSize()
  }
  cancelResize() {
    this.resizeId !== void 0 && (cancelAnimationFrame(this.resizeId), (this.resizeId = void 0))
  }
  getApi() {
    return this.calendar
  }
}
Dl.act = wl
class _h extends se.PureComponent {
  render() {
    const { customRendering: e } = this.props,
      { generatorMeta: t } = e,
      r = typeof t == 'function' ? t(e.renderProps) : t
    return Is.createPortal(r, e.containerEl)
  }
}
function wl(n) {
  n()
}
var Rh =
  ':root{--fc-daygrid-event-dot-width:8px}.fc-daygrid-day-events:after,.fc-daygrid-day-events:before,.fc-daygrid-day-frame:after,.fc-daygrid-day-frame:before,.fc-daygrid-event-harness:after,.fc-daygrid-event-harness:before{clear:both;content:"";display:table}.fc .fc-daygrid-body{position:relative;z-index:1}.fc .fc-daygrid-day.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-daygrid-day-frame{min-height:100%;position:relative}.fc .fc-daygrid-day-top{display:flex;flex-direction:row-reverse}.fc .fc-day-other .fc-daygrid-day-top{opacity:.3}.fc .fc-daygrid-day-number{padding:4px;position:relative;z-index:4}.fc .fc-daygrid-month-start{font-size:1.1em;font-weight:700}.fc .fc-daygrid-day-events{margin-top:1px}.fc .fc-daygrid-body-balanced .fc-daygrid-day-events{left:0;position:absolute;right:0}.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events{min-height:2em;position:relative}.fc .fc-daygrid-body-natural .fc-daygrid-day-events{margin-bottom:1em}.fc .fc-daygrid-event-harness{position:relative}.fc .fc-daygrid-event-harness-abs{left:0;position:absolute;right:0;top:0}.fc .fc-daygrid-bg-harness{bottom:0;position:absolute;top:0}.fc .fc-daygrid-day-bg .fc-non-business{z-index:1}.fc .fc-daygrid-day-bg .fc-bg-event{z-index:2}.fc .fc-daygrid-day-bg .fc-highlight{z-index:3}.fc .fc-daygrid-event{margin-top:1px;z-index:6}.fc .fc-daygrid-event.fc-event-mirror{z-index:7}.fc .fc-daygrid-day-bottom{font-size:.85em;margin:0 2px}.fc .fc-daygrid-day-bottom:after,.fc .fc-daygrid-day-bottom:before{clear:both;content:"";display:table}.fc .fc-daygrid-more-link{border-radius:3px;cursor:pointer;line-height:1;margin-top:1px;max-width:100%;overflow:hidden;padding:2px;position:relative;white-space:nowrap;z-index:4}.fc .fc-daygrid-more-link:hover{background-color:rgba(0,0,0,.1)}.fc .fc-daygrid-week-number{background-color:var(--fc-neutral-bg-color);color:var(--fc-neutral-text-color);min-width:1.5em;padding:2px;position:absolute;text-align:center;top:0;z-index:5}.fc .fc-more-popover .fc-popover-body{min-width:220px;padding:10px}.fc-direction-ltr .fc-daygrid-event.fc-event-start,.fc-direction-rtl .fc-daygrid-event.fc-event-end{margin-left:2px}.fc-direction-ltr .fc-daygrid-event.fc-event-end,.fc-direction-rtl .fc-daygrid-event.fc-event-start{margin-right:2px}.fc-direction-ltr .fc-daygrid-more-link{float:left}.fc-direction-ltr .fc-daygrid-week-number{border-radius:0 0 3px 0;left:0}.fc-direction-rtl .fc-daygrid-more-link{float:right}.fc-direction-rtl .fc-daygrid-week-number{border-radius:0 0 0 3px;right:0}.fc-liquid-hack .fc-daygrid-day-frame{position:static}.fc-daygrid-event{border-radius:3px;font-size:var(--fc-small-font-size);position:relative;white-space:nowrap}.fc-daygrid-block-event .fc-event-time{font-weight:700}.fc-daygrid-block-event .fc-event-time,.fc-daygrid-block-event .fc-event-title{padding:1px}.fc-daygrid-dot-event{align-items:center;display:flex;padding:2px 0}.fc-daygrid-dot-event .fc-event-title{flex-grow:1;flex-shrink:1;font-weight:700;min-width:0;overflow:hidden}.fc-daygrid-dot-event.fc-event-mirror,.fc-daygrid-dot-event:hover{background:rgba(0,0,0,.1)}.fc-daygrid-dot-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-daygrid-event-dot{border:calc(var(--fc-daygrid-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-daygrid-event-dot-width)/2);box-sizing:content-box;height:0;margin:0 4px;width:0}.fc-direction-ltr .fc-daygrid-event .fc-event-time{margin-right:3px}.fc-direction-rtl .fc-daygrid-event .fc-event-time{margin-left:3px}'
Lr(Rh)
function en(n, e) {
  let t = []
  for (let r = 0; r < e; r += 1) t[r] = []
  for (let r of n) t[r.row].push(r)
  return t
}
function tn(n, e) {
  let t = []
  for (let r = 0; r < e; r += 1) t[r] = []
  for (let r of n) t[r.firstCol].push(r)
  return t
}
function ws(n, e) {
  let t = []
  if (n) {
    for (let r = 0; r < e; r += 1)
      t[r] = { affectedInstances: n.affectedInstances, isEvent: n.isEvent, segs: [] }
    for (let r of n.segs) t[r.row].segs.push(r)
  } else for (let r = 0; r < e; r += 1) t[r] = null
  return t
}
const Cl = V({ hour: 'numeric', minute: '2-digit', omitZeroMinute: !0, meridiem: 'narrow' })
function _l(n) {
  let { display: e } = n.eventRange.ui
  return (
    e === 'list-item' ||
    (e === 'auto' && !n.eventRange.def.allDay && n.firstCol === n.lastCol && n.isStart && n.isEnd)
  )
}
class Rl extends B {
  render() {
    let { props: e } = this
    return g(
      al,
      Object.assign({}, e, {
        elClasses: ['fc-daygrid-event', 'fc-daygrid-block-event', 'fc-h-event'],
        defaultTimeFormat: Cl,
        defaultDisplayEventEnd: e.defaultDisplayEventEnd,
        disableResizing: !e.seg.eventRange.def.allDay
      })
    )
  }
}
class Tl extends B {
  render() {
    let { props: e, context: t } = this,
      { options: r } = t,
      { seg: i } = e,
      s = r.eventTimeFormat || Cl,
      o = jo(i, s, t, !0, e.defaultDisplayEventEnd)
    return g(
      di,
      Object.assign({}, e, {
        elTag: 'a',
        elClasses: ['fc-daygrid-event', 'fc-daygrid-dot-event'],
        elAttrs: zo(e.seg, t),
        defaultGenerator: Th,
        timeText: o,
        isResizing: !1,
        isDateSelecting: !1
      })
    )
  }
}
function Th(n) {
  return g(
    j,
    null,
    g('div', {
      className: 'fc-daygrid-event-dot',
      style: { borderColor: n.borderColor || n.backgroundColor }
    }),
    n.timeText && g('div', { className: 'fc-event-time' }, n.timeText),
    g('div', { className: 'fc-event-title' }, n.event.title || g(j, null, ' '))
  )
}
class xh extends B {
  constructor() {
    super(...arguments), (this.compileSegs = _(Ih))
  }
  render() {
    let { props: e } = this,
      { allSegs: t, invisibleSegs: r } = this.compileSegs(e.singlePlacements)
    return g(fl, {
      elClasses: ['fc-daygrid-more-link'],
      dateProfile: e.dateProfile,
      todayRange: e.todayRange,
      allDayDate: e.allDayDate,
      moreCnt: e.moreCnt,
      allSegs: t,
      hiddenSegs: r,
      alignmentElRef: e.alignmentElRef,
      alignGridTop: e.alignGridTop,
      extraDateSpan: e.extraDateSpan,
      popoverContent: () => {
        let i =
          (e.eventDrag ? e.eventDrag.affectedInstances : null) ||
          (e.eventResize ? e.eventResize.affectedInstances : null) ||
          {}
        return g(
          j,
          null,
          t.map((s) => {
            let o = s.eventRange.instance.instanceId
            return g(
              'div',
              {
                className: 'fc-daygrid-event-harness',
                key: o,
                style: { visibility: i[o] ? 'hidden' : '' }
              },
              _l(s)
                ? g(
                    Tl,
                    Object.assign(
                      {
                        seg: s,
                        isDragging: !1,
                        isSelected: o === e.eventSelection,
                        defaultDisplayEventEnd: !1
                      },
                      je(s, e.todayRange)
                    )
                  )
                : g(
                    Rl,
                    Object.assign(
                      {
                        seg: s,
                        isDragging: !1,
                        isResizing: !1,
                        isDateSelecting: !1,
                        isSelected: o === e.eventSelection,
                        defaultDisplayEventEnd: !1
                      },
                      je(s, e.todayRange)
                    )
                  )
            )
          })
        )
      }
    })
  }
}
function Ih(n) {
  let e = [],
    t = []
  for (let r of n) e.push(r.seg), r.isVisible || t.push(r.seg)
  return { allSegs: e, invisibleSegs: t }
}
const Mh = V({ week: 'narrow' })
class kh extends De {
  constructor() {
    super(...arguments),
      (this.rootElRef = K()),
      (this.state = { dayNumberId: Pn() }),
      (this.handleRootEl = (e) => {
        xe(this.rootElRef, e), xe(this.props.elRef, e)
      })
  }
  render() {
    let { context: e, props: t, state: r, rootElRef: i } = this,
      { options: s, dateEnv: o } = e,
      { date: l, dateProfile: a } = t
    const c = t.showDayNumber && Nh(l, a.currentRange, o)
    return g(
      fi,
      {
        elTag: 'td',
        elRef: this.handleRootEl,
        elClasses: ['fc-daygrid-day', ...(t.extraClassNames || [])],
        elAttrs: Object.assign(
          Object.assign(
            Object.assign({}, t.extraDataAttrs),
            t.showDayNumber ? { 'aria-labelledby': r.dayNumberId } : {}
          ),
          { role: 'gridcell' }
        ),
        defaultGenerator: Oh,
        date: l,
        dateProfile: a,
        todayRange: t.todayRange,
        showDayNumber: t.showDayNumber,
        isMonthStart: c,
        extraRenderProps: t.extraRenderProps
      },
      (d, u) =>
        g(
          'div',
          {
            ref: t.innerElRef,
            className: 'fc-daygrid-day-frame fc-scrollgrid-sync-inner',
            style: { minHeight: t.minHeight }
          },
          t.showWeekNumber &&
            g(ul, {
              elTag: 'a',
              elClasses: ['fc-daygrid-week-number'],
              elAttrs: In(e, l, 'week'),
              date: l,
              defaultFormat: Mh
            }),
          !u.isDisabled && (t.showDayNumber || hi(s) || t.forceDayTop)
            ? g(
                'div',
                { className: 'fc-daygrid-day-top' },
                g(d, {
                  elTag: 'a',
                  elClasses: ['fc-daygrid-day-number', c && 'fc-daygrid-month-start'],
                  elAttrs: Object.assign(Object.assign({}, In(e, l)), { id: r.dayNumberId })
                })
              )
            : t.showDayNumber
            ? g(
                'div',
                { className: 'fc-daygrid-day-top', style: { visibility: 'hidden' } },
                g('a', { className: 'fc-daygrid-day-number' }, ' ')
              )
            : void 0,
          g(
            'div',
            { className: 'fc-daygrid-day-events', ref: t.fgContentElRef },
            t.fgContent,
            g(
              'div',
              { className: 'fc-daygrid-day-bottom', style: { marginTop: t.moreMarginTop } },
              g(xh, {
                allDayDate: l,
                singlePlacements: t.singlePlacements,
                moreCnt: t.moreCnt,
                alignmentElRef: i,
                alignGridTop: !t.showDayNumber,
                extraDateSpan: t.extraDateSpan,
                dateProfile: t.dateProfile,
                eventSelection: t.eventSelection,
                eventDrag: t.eventDrag,
                eventResize: t.eventResize,
                todayRange: t.todayRange
              })
            )
          ),
          g('div', { className: 'fc-daygrid-day-bg' }, t.bgContent)
        )
    )
  }
}
function Oh(n) {
  return n.dayNumberText || g(j, null, ' ')
}
function Nh(n, e, t) {
  const { start: r, end: i } = e,
    s = ze(i, -1),
    o = t.getYear(r),
    l = t.getMonth(r),
    a = t.getYear(s),
    c = t.getMonth(s)
  return (
    !(o === a && l === c) &&
    (n.valueOf() === r.valueOf() || (t.getDay(n) === 1 && n.valueOf() < i.valueOf()))
  )
}
function xl(n) {
  return n.eventRange.instance.instanceId + ':' + n.firstCol
}
function Il(n) {
  return xl(n) + ':' + n.lastCol
}
function Ph(n, e, t, r, i, s, o) {
  let l = new Lh((y) => {
    let E = n[y.index].eventRange.instance.instanceId + ':' + y.span.start + ':' + (y.span.end - 1)
    return i[E]
  })
  ;(l.allowReslicing = !0),
    (l.strictOrder = r),
    e === !0 || t === !0
      ? ((l.maxCoord = s), (l.hiddenConsumes = !0))
      : typeof e == 'number'
      ? (l.maxStackCnt = e)
      : typeof t == 'number' && ((l.maxStackCnt = t), (l.hiddenConsumes = !0))
  let a = [],
    c = []
  for (let y = 0; y < n.length; y += 1) {
    let E = n[y],
      w = Il(E)
    i[w] != null ? a.push({ index: y, span: { start: E.firstCol, end: E.lastCol + 1 } }) : c.push(E)
  }
  let d = l.addSegs(a),
    u = l.toRects(),
    { singleColPlacements: h, multiColPlacements: f, leftoverMargins: p } = Hh(u, n, o),
    m = [],
    b = []
  for (let y of c) {
    f[y.firstCol].push({ seg: y, isVisible: !1, isAbsolute: !0, absoluteTop: 0, marginTop: 0 })
    for (let E = y.firstCol; E <= y.lastCol; E += 1)
      h[E].push({
        seg: ht(y, E, E + 1, o),
        isVisible: !1,
        isAbsolute: !1,
        absoluteTop: 0,
        marginTop: 0
      })
  }
  for (let y = 0; y < o.length; y += 1) m.push(0)
  for (let y of d) {
    let E = n[y.index],
      w = y.span
    f[w.start].push({
      seg: ht(E, w.start, w.end, o),
      isVisible: !1,
      isAbsolute: !0,
      absoluteTop: 0,
      marginTop: 0
    })
    for (let D = w.start; D < w.end; D += 1)
      (m[D] += 1),
        h[D].push({
          seg: ht(E, D, D + 1, o),
          isVisible: !1,
          isAbsolute: !1,
          absoluteTop: 0,
          marginTop: 0
        })
  }
  for (let y = 0; y < o.length; y += 1) b.push(p[y])
  return { singleColPlacements: h, multiColPlacements: f, moreCnts: m, moreMarginTops: b }
}
function Hh(n, e, t) {
  let r = Bh(n, t.length),
    i = [],
    s = [],
    o = []
  for (let l = 0; l < t.length; l += 1) {
    let a = r[l],
      c = [],
      d = 0,
      u = 0
    for (let f of a) {
      let p = e[f.index]
      c.push({
        seg: ht(p, l, l + 1, t),
        isVisible: !0,
        isAbsolute: !1,
        absoluteTop: f.levelCoord,
        marginTop: f.levelCoord - d
      }),
        (d = f.levelCoord + f.thickness)
    }
    let h = []
    ;(d = 0), (u = 0)
    for (let f of a) {
      let p = e[f.index],
        m = f.span.end - f.span.start > 1,
        b = f.span.start === l
      ;(u += f.levelCoord - d),
        (d = f.levelCoord + f.thickness),
        m
          ? ((u += f.thickness),
            b &&
              h.push({
                seg: ht(p, f.span.start, f.span.end, t),
                isVisible: !0,
                isAbsolute: !0,
                absoluteTop: f.levelCoord,
                marginTop: 0
              }))
          : b &&
            (h.push({
              seg: ht(p, f.span.start, f.span.end, t),
              isVisible: !0,
              isAbsolute: !1,
              absoluteTop: f.levelCoord,
              marginTop: u
            }),
            (u = 0))
    }
    i.push(c), s.push(h), o.push(u)
  }
  return { singleColPlacements: i, multiColPlacements: s, leftoverMargins: o }
}
function Bh(n, e) {
  let t = []
  for (let r = 0; r < e; r += 1) t.push([])
  for (let r of n) for (let i = r.span.start; i < r.span.end; i += 1) t[i].push(r)
  return t
}
function ht(n, e, t, r) {
  if (n.firstCol === e && n.lastCol === t - 1) return n
  let i = n.eventRange,
    s = i.range,
    o = Ke(s, { start: r[e].date, end: $(r[t - 1].date, 1) })
  return Object.assign(Object.assign({}, n), {
    firstCol: e,
    lastCol: t - 1,
    eventRange: {
      def: i.def,
      ui: Object.assign(Object.assign({}, i.ui), { durationEditable: !1 }),
      instance: i.instance,
      range: o
    },
    isStart: n.isStart && o.start.valueOf() === s.start.valueOf(),
    isEnd: n.isEnd && o.end.valueOf() === s.end.valueOf()
  })
}
class Lh extends Xo {
  constructor() {
    super(...arguments), (this.hiddenConsumes = !1), (this.forceHidden = {})
  }
  addSegs(e) {
    const t = super.addSegs(e),
      { entriesByLevel: r } = this,
      i = (s) => !this.forceHidden[$e(s)]
    for (let s = 0; s < r.length; s += 1) r[s] = r[s].filter(i)
    return t
  }
  handleInvalidInsertion(e, t, r) {
    const { entriesByLevel: i, forceHidden: s } = this,
      { touchingEntry: o, touchingLevel: l, touchingLateral: a } = e
    if (this.hiddenConsumes && o) {
      const c = $e(o)
      if (!s[c])
        if (this.allowReslicing) {
          const d = Object.assign(Object.assign({}, o), { span: li(o.span, t.span) }),
            u = $e(d)
          ;(s[u] = !0), (i[l][a] = d), this.splitEntry(o, t, r)
        } else (s[c] = !0), r.push(o)
    }
    return super.handleInvalidInsertion(e, t, r)
  }
}
class Ml extends De {
  constructor() {
    super(...arguments),
      (this.cellElRefs = new we()),
      (this.frameElRefs = new we()),
      (this.fgElRefs = new we()),
      (this.segHarnessRefs = new we()),
      (this.rootElRef = K()),
      (this.state = { framePositions: null, maxContentHeight: null, segHeights: {} }),
      (this.handleResize = (e) => {
        e && this.updateSizing(!0)
      })
  }
  render() {
    let { props: e, state: t, context: r } = this,
      { options: i } = r,
      s = e.cells.length,
      o = tn(e.businessHourSegs, s),
      l = tn(e.bgEventSegs, s),
      a = tn(this.getHighlightSegs(), s),
      c = tn(this.getMirrorSegs(), s),
      {
        singleColPlacements: d,
        multiColPlacements: u,
        moreCnts: h,
        moreMarginTops: f
      } = Ph(
        Fo(e.fgEventSegs, i.eventOrder),
        e.dayMaxEvents,
        e.dayMaxEventRows,
        i.eventOrderStrict,
        t.segHeights,
        t.maxContentHeight,
        e.cells
      ),
      p =
        (e.eventDrag && e.eventDrag.affectedInstances) ||
        (e.eventResize && e.eventResize.affectedInstances) ||
        {}
    return g(
      'tr',
      { ref: this.rootElRef, role: 'row' },
      e.renderIntro && e.renderIntro(),
      e.cells.map((m, b) => {
        let y = this.renderFgSegs(b, e.forPrint ? d[b] : u[b], e.todayRange, p),
          E = this.renderFgSegs(
            b,
            Fh(c[b], u),
            e.todayRange,
            {},
            !!e.eventDrag,
            !!e.eventResize,
            !1
          )
        return g(kh, {
          key: m.key,
          elRef: this.cellElRefs.createRef(m.key),
          innerElRef: this.frameElRefs.createRef(m.key),
          dateProfile: e.dateProfile,
          date: m.date,
          showDayNumber: e.showDayNumbers,
          showWeekNumber: e.showWeekNumbers && b === 0,
          forceDayTop: e.showWeekNumbers,
          todayRange: e.todayRange,
          eventSelection: e.eventSelection,
          eventDrag: e.eventDrag,
          eventResize: e.eventResize,
          extraRenderProps: m.extraRenderProps,
          extraDataAttrs: m.extraDataAttrs,
          extraClassNames: m.extraClassNames,
          extraDateSpan: m.extraDateSpan,
          moreCnt: h[b],
          moreMarginTop: f[b],
          singlePlacements: d[b],
          fgContentElRef: this.fgElRefs.createRef(m.key),
          fgContent: g(j, null, g(j, null, y), g(j, null, E)),
          bgContent: g(
            j,
            null,
            this.renderFillSegs(a[b], 'highlight'),
            this.renderFillSegs(o[b], 'non-business'),
            this.renderFillSegs(l[b], 'bg-event')
          ),
          minHeight: e.cellMinHeight
        })
      })
    )
  }
  componentDidMount() {
    this.updateSizing(!0), this.context.addResizeHandler(this.handleResize)
  }
  componentDidUpdate(e, t) {
    let r = this.props
    this.updateSizing(!Ae(e, r))
  }
  componentWillUnmount() {
    this.context.removeResizeHandler(this.handleResize)
  }
  getHighlightSegs() {
    let { props: e } = this
    return e.eventDrag && e.eventDrag.segs.length
      ? e.eventDrag.segs
      : e.eventResize && e.eventResize.segs.length
      ? e.eventResize.segs
      : e.dateSelectionSegs
  }
  getMirrorSegs() {
    let { props: e } = this
    return e.eventResize && e.eventResize.segs.length ? e.eventResize.segs : []
  }
  renderFgSegs(e, t, r, i, s, o, l) {
    let { context: a } = this,
      { eventSelection: c } = this.props,
      { framePositions: d } = this.state,
      u = this.props.cells.length === 1,
      h = s || o || l,
      f = []
    if (d)
      for (let p of t) {
        let { seg: m } = p,
          { instanceId: b } = m.eventRange.instance,
          y = p.isVisible && !i[b],
          E = p.isAbsolute,
          w = '',
          D = ''
        E &&
          (a.isRtl
            ? ((D = 0), (w = d.lefts[m.lastCol] - d.lefts[m.firstCol]))
            : ((w = 0), (D = d.rights[m.firstCol] - d.rights[m.lastCol]))),
          f.push(
            g(
              'div',
              {
                className: 'fc-daygrid-event-harness' + (E ? ' fc-daygrid-event-harness-abs' : ''),
                key: xl(m),
                ref: h ? null : this.segHarnessRefs.createRef(Il(m)),
                style: {
                  visibility: y ? '' : 'hidden',
                  marginTop: E ? '' : p.marginTop,
                  top: E ? p.absoluteTop : '',
                  left: w,
                  right: D
                }
              },
              _l(m)
                ? g(
                    Tl,
                    Object.assign(
                      { seg: m, isDragging: s, isSelected: b === c, defaultDisplayEventEnd: u },
                      je(m, r)
                    )
                  )
                : g(
                    Rl,
                    Object.assign(
                      {
                        seg: m,
                        isDragging: s,
                        isResizing: o,
                        isDateSelecting: l,
                        isSelected: b === c,
                        defaultDisplayEventEnd: u
                      },
                      je(m, r)
                    )
                  )
            )
          )
      }
    return f
  }
  renderFillSegs(e, t) {
    let { isRtl: r } = this.context,
      { todayRange: i } = this.props,
      { framePositions: s } = this.state,
      o = []
    if (s)
      for (let l of e) {
        let a = r
          ? { right: 0, left: s.lefts[l.lastCol] - s.lefts[l.firstCol] }
          : { left: 0, right: s.rights[l.firstCol] - s.rights[l.lastCol] }
        o.push(
          g(
            'div',
            { key: Uo(l.eventRange), className: 'fc-daygrid-bg-harness', style: a },
            t === 'bg-event' ? g(cl, Object.assign({ seg: l }, je(l, i))) : dl(t)
          )
        )
      }
    return g(j, {}, ...o)
  }
  updateSizing(e) {
    let { props: t, state: r, frameElRefs: i } = this
    if (!t.forPrint && t.clientWidth !== null) {
      if (e) {
        let a = t.cells.map((c) => i.currentMap[c.key])
        if (a.length) {
          let c = this.rootElRef.current,
            d = new vt(c, a, !0, !1)
          ;(!r.framePositions || !r.framePositions.similarTo(d)) &&
            this.setState({ framePositions: new vt(c, a, !0, !1) })
        }
      }
      const s = this.state.segHeights,
        o = this.querySegHeights(),
        l = t.dayMaxEvents === !0 || t.dayMaxEventRows === !0
      this.safeSetState({
        segHeights: Object.assign(Object.assign({}, s), o),
        maxContentHeight: l ? this.computeMaxContentHeight() : null
      })
    }
  }
  querySegHeights() {
    let e = this.segHarnessRefs.currentMap,
      t = {}
    for (let r in e) {
      let i = Math.round(e[r].getBoundingClientRect().height)
      t[r] = Math.max(t[r] || 0, i)
    }
    return t
  }
  computeMaxContentHeight() {
    let e = this.props.cells[0].key,
      t = this.cellElRefs.currentMap[e],
      r = this.fgElRefs.currentMap[e]
    return t.getBoundingClientRect().bottom - r.getBoundingClientRect().top
  }
  getCellEls() {
    let e = this.cellElRefs.currentMap
    return this.props.cells.map((t) => e[t.key])
  }
}
Ml.addStateEquality({ segHeights: Ae })
function Fh(n, e) {
  if (!n.length) return []
  let t = jh(e)
  return n.map((r) => ({
    seg: r,
    isVisible: !0,
    isAbsolute: !0,
    absoluteTop: t[r.eventRange.instance.instanceId],
    marginTop: 0
  }))
}
function jh(n) {
  let e = {}
  for (let t of n) for (let r of t) e[r.seg.eventRange.instance.instanceId] = r.absoluteTop
  return e
}
class Uh extends De {
  constructor() {
    super(...arguments),
      (this.splitBusinessHourSegs = _(en)),
      (this.splitBgEventSegs = _(en)),
      (this.splitFgEventSegs = _(en)),
      (this.splitDateSelectionSegs = _(en)),
      (this.splitEventDrag = _(ws)),
      (this.splitEventResize = _(ws)),
      (this.rowRefs = new we())
  }
  render() {
    let { props: e, context: t } = this,
      r = e.cells.length,
      i = this.splitBusinessHourSegs(e.businessHourSegs, r),
      s = this.splitBgEventSegs(e.bgEventSegs, r),
      o = this.splitFgEventSegs(e.fgEventSegs, r),
      l = this.splitDateSelectionSegs(e.dateSelectionSegs, r),
      a = this.splitEventDrag(e.eventDrag, r),
      c = this.splitEventResize(e.eventResize, r),
      d = r >= 7 && e.clientWidth ? e.clientWidth / t.options.aspectRatio / 6 : null
    return g(Ft, { unit: 'day' }, (u, h) =>
      g(
        j,
        null,
        e.cells.map((f, p) =>
          g(Ml, {
            ref: this.rowRefs.createRef(p),
            key: f.length ? f[0].date.toISOString() : p,
            showDayNumbers: r > 1,
            showWeekNumbers: e.showWeekNumbers,
            todayRange: h,
            dateProfile: e.dateProfile,
            cells: f,
            renderIntro: e.renderRowIntro,
            businessHourSegs: i[p],
            eventSelection: e.eventSelection,
            bgEventSegs: s[p].filter(zh),
            fgEventSegs: o[p],
            dateSelectionSegs: l[p],
            eventDrag: a[p],
            eventResize: c[p],
            dayMaxEvents: e.dayMaxEvents,
            dayMaxEventRows: e.dayMaxEventRows,
            clientWidth: e.clientWidth,
            clientHeight: e.clientHeight,
            cellMinHeight: d,
            forPrint: e.forPrint
          })
        )
      )
    )
  }
  componentDidMount() {
    this.registerInteractiveComponent()
  }
  componentDidUpdate() {
    this.registerInteractiveComponent()
  }
  registerInteractiveComponent() {
    if (!this.rootEl) {
      const e = this.rowRefs.currentMap[0].getCellEls()[0],
        t = e ? e.closest('.fc-daygrid-body') : null
      t &&
        ((this.rootEl = t),
        this.context.registerInteractiveComponent(this, {
          el: t,
          isHitComboAllowed: this.props.isHitComboAllowed
        }))
    }
  }
  componentWillUnmount() {
    this.rootEl && (this.context.unregisterInteractiveComponent(this), (this.rootEl = null))
  }
  prepareHits() {
    ;(this.rowPositions = new vt(
      this.rootEl,
      this.rowRefs.collect().map((e) => e.getCellEls()[0]),
      !1,
      !0
    )),
      (this.colPositions = new vt(this.rootEl, this.rowRefs.currentMap[0].getCellEls(), !0, !1))
  }
  queryHit(e, t) {
    let { colPositions: r, rowPositions: i } = this,
      s = r.leftToIndex(e),
      o = i.topToIndex(t)
    if (o != null && s != null) {
      let l = this.props.cells[o][s]
      return {
        dateProfile: this.props.dateProfile,
        dateSpan: Object.assign({ range: this.getCellRange(o, s), allDay: !0 }, l.extraDateSpan),
        dayEl: this.getCellEl(o, s),
        rect: { left: r.lefts[s], right: r.rights[s], top: i.tops[o], bottom: i.bottoms[o] },
        layer: 0
      }
    }
    return null
  }
  getCellEl(e, t) {
    return this.rowRefs.currentMap[e].getCellEls()[t]
  }
  getCellRange(e, t) {
    let r = this.props.cells[e][t].date,
      i = $(r, 1)
    return { start: r, end: i }
  }
}
function zh(n) {
  return n.eventRange.def.allDay
}
class Wh extends De {
  constructor() {
    super(...arguments), (this.elRef = K()), (this.needsScrollReset = !1)
  }
  render() {
    let { props: e } = this,
      { dayMaxEventRows: t, dayMaxEvents: r, expandRows: i } = e,
      s = r === !0 || t === !0
    s && !i && ((s = !1), (t = null), (r = null))
    let o = [
      'fc-daygrid-body',
      s ? 'fc-daygrid-body-balanced' : 'fc-daygrid-body-unbalanced',
      i ? '' : 'fc-daygrid-body-natural'
    ]
    return g(
      'div',
      {
        ref: this.elRef,
        className: o.join(' '),
        style: { width: e.clientWidth, minWidth: e.tableMinWidth }
      },
      g(
        'table',
        {
          role: 'presentation',
          className: 'fc-scrollgrid-sync-table',
          style: {
            width: e.clientWidth,
            minWidth: e.tableMinWidth,
            height: i ? e.clientHeight : ''
          }
        },
        e.colGroupNode,
        g(
          'tbody',
          { role: 'presentation' },
          g(Uh, {
            dateProfile: e.dateProfile,
            cells: e.cells,
            renderRowIntro: e.renderRowIntro,
            showWeekNumbers: e.showWeekNumbers,
            clientWidth: e.clientWidth,
            clientHeight: e.clientHeight,
            businessHourSegs: e.businessHourSegs,
            bgEventSegs: e.bgEventSegs,
            fgEventSegs: e.fgEventSegs,
            dateSelectionSegs: e.dateSelectionSegs,
            eventSelection: e.eventSelection,
            eventDrag: e.eventDrag,
            eventResize: e.eventResize,
            dayMaxEvents: r,
            dayMaxEventRows: t,
            forPrint: e.forPrint,
            isHitComboAllowed: e.isHitComboAllowed
          })
        )
      )
    )
  }
  componentDidMount() {
    this.requestScrollReset()
  }
  componentDidUpdate(e) {
    e.dateProfile !== this.props.dateProfile ? this.requestScrollReset() : this.flushScrollReset()
  }
  requestScrollReset() {
    ;(this.needsScrollReset = !0), this.flushScrollReset()
  }
  flushScrollReset() {
    if (this.needsScrollReset && this.props.clientWidth) {
      const e = Vh(this.elRef.current, this.props.dateProfile)
      if (e) {
        const t = e.closest('.fc-daygrid-body'),
          r = t.closest('.fc-scroller'),
          i = e.getBoundingClientRect().top - t.getBoundingClientRect().top
        r.scrollTop = i ? i + 1 : 0
      }
      this.needsScrollReset = !1
    }
  }
}
function Vh(n, e) {
  let t
  return (
    e.currentRangeUnit.match(/year|month/) &&
      (t = n.querySelector(`[data-date="${xc(e.currentDate)}-01"]`)),
    t || (t = n.querySelector(`[data-date="${Vr(e.currentDate)}"]`)),
    t
  )
}
class Gh extends nl {
  constructor() {
    super(...arguments), (this.forceDayIfListItem = !0)
  }
  sliceRange(e, t) {
    return t.sliceRange(e)
  }
}
class kl extends De {
  constructor() {
    super(...arguments), (this.slicer = new Gh()), (this.tableRef = K())
  }
  render() {
    let { props: e, context: t } = this
    return g(
      Wh,
      Object.assign(
        { ref: this.tableRef },
        this.slicer.sliceProps(e, e.dateProfile, e.nextDayThreshold, t, e.dayTableModel),
        {
          dateProfile: e.dateProfile,
          cells: e.dayTableModel.cells,
          colGroupNode: e.colGroupNode,
          tableMinWidth: e.tableMinWidth,
          renderRowIntro: e.renderRowIntro,
          dayMaxEvents: e.dayMaxEvents,
          dayMaxEventRows: e.dayMaxEventRows,
          showWeekNumbers: e.showWeekNumbers,
          expandRows: e.expandRows,
          headerAlignElRef: e.headerAlignElRef,
          clientWidth: e.clientWidth,
          clientHeight: e.clientHeight,
          forPrint: e.forPrint
        }
      )
    )
  }
}
class Yh extends Ro {
  buildRenderRange(e, t, r) {
    let i = super.buildRenderRange(e, t, r),
      { props: s } = this
    return qh({
      currentRange: i,
      snapToWeek: /^(year|month)$/.test(t),
      fixedWeekCount: s.fixedWeekCount,
      dateEnv: s.dateEnv
    })
  }
}
function qh(n) {
  let { dateEnv: e, currentRange: t } = n,
    { start: r, end: i } = t,
    s
  if (
    (n.snapToWeek &&
      ((r = e.startOfWeek(r)),
      (s = e.startOfWeek(i)),
      s.valueOf() !== i.valueOf() && (i = $i(s, 1))),
    n.fixedWeekCount)
  ) {
    let o = e.startOfWeek(e.startOfMonth($(t.end, -1))),
      l = Math.ceil(bc(o, i))
    i = $i(i, 6 - l)
  }
  return { start: r, end: i }
}
class Qh extends De {
  constructor() {
    super(...arguments), (this.headerElRef = K())
  }
  renderSimpleLayout(e, t) {
    let { props: r, context: i } = this,
      s = [],
      o = Mn(i.options)
    return (
      e &&
        s.push({
          type: 'header',
          key: 'header',
          isSticky: o,
          chunk: { elRef: this.headerElRef, tableClassName: 'fc-col-header', rowContent: e }
        }),
      s.push({ type: 'body', key: 'body', liquid: !0, chunk: { content: t } }),
      g(
        _n,
        { elClasses: ['fc-daygrid'], viewSpec: i.viewSpec },
        g(ci, {
          liquid: !r.isHeightAuto && !r.forPrint,
          collapsibleWidth: r.forPrint,
          cols: [],
          sections: s
        })
      )
    )
  }
  renderHScrollLayout(e, t, r, i) {
    let s = this.context.pluginHooks.scrollGridImpl
    if (!s) throw new Error('No ScrollGrid implementation')
    let { props: o, context: l } = this,
      a = !o.forPrint && Mn(l.options),
      c = !o.forPrint && ll(l.options),
      d = []
    return (
      e &&
        d.push({
          type: 'header',
          key: 'header',
          isSticky: a,
          chunks: [
            { key: 'main', elRef: this.headerElRef, tableClassName: 'fc-col-header', rowContent: e }
          ]
        }),
      d.push({ type: 'body', key: 'body', liquid: !0, chunks: [{ key: 'main', content: t }] }),
      c &&
        d.push({
          type: 'footer',
          key: 'footer',
          isSticky: !0,
          chunks: [{ key: 'main', content: Ir }]
        }),
      g(
        _n,
        { elClasses: ['fc-daygrid'], viewSpec: l.viewSpec },
        g(s, {
          liquid: !o.isHeightAuto && !o.forPrint,
          forPrint: o.forPrint,
          collapsibleWidth: o.forPrint,
          colGroups: [{ cols: [{ span: r, minWidth: i }] }],
          sections: d
        })
      )
    )
  }
}
class Zh extends Qh {
  constructor() {
    super(...arguments),
      (this.buildDayTableModel = _(Xh)),
      (this.headerRef = K()),
      (this.tableRef = K())
  }
  render() {
    let { options: e, dateProfileGenerator: t } = this.context,
      { props: r } = this,
      i = this.buildDayTableModel(r.dateProfile, t),
      s =
        e.dayHeaders &&
        g(Ko, {
          ref: this.headerRef,
          dateProfile: r.dateProfile,
          dates: i.headerDates,
          datesRepDistinctDays: i.rowCnt === 1
        }),
      o = (l) =>
        g(kl, {
          ref: this.tableRef,
          dateProfile: r.dateProfile,
          dayTableModel: i,
          businessHours: r.businessHours,
          dateSelection: r.dateSelection,
          eventStore: r.eventStore,
          eventUiBases: r.eventUiBases,
          eventSelection: r.eventSelection,
          eventDrag: r.eventDrag,
          eventResize: r.eventResize,
          nextDayThreshold: e.nextDayThreshold,
          colGroupNode: l.tableColGroupNode,
          tableMinWidth: l.tableMinWidth,
          dayMaxEvents: e.dayMaxEvents,
          dayMaxEventRows: e.dayMaxEventRows,
          showWeekNumbers: e.weekNumbers,
          expandRows: !r.isHeightAuto,
          headerAlignElRef: this.headerElRef,
          clientWidth: l.clientWidth,
          clientHeight: l.clientHeight,
          forPrint: r.forPrint
        })
    return e.dayMinWidth
      ? this.renderHScrollLayout(s, o, i.colCnt, e.dayMinWidth)
      : this.renderSimpleLayout(s, o)
  }
}
function Xh(n, e) {
  let t = new el(n.renderRange, e)
  return new tl(t, /year|month|week/.test(n.currentRangeUnit))
}
var $h = ke({
    name: '@fullcalendar/daygrid',
    initialView: 'dayGridMonth',
    views: {
      dayGrid: { component: Zh, dateProfileGeneratorClass: Yh },
      dayGridDay: { type: 'dayGrid', duration: { days: 1 } },
      dayGridWeek: { type: 'dayGrid', duration: { weeks: 1 } },
      dayGridMonth: { type: 'dayGrid', duration: { months: 1 }, fixedWeekCount: !0 },
      dayGridYear: { type: 'dayGrid', duration: { years: 1 } }
    }
  }),
  Jh =
    '.fc-v-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-v-event .fc-event-main{color:var(--fc-event-text-color);height:100%}.fc-v-event .fc-event-main-frame{display:flex;flex-direction:column;height:100%}.fc-v-event .fc-event-time{flex-grow:0;flex-shrink:0;max-height:100%;overflow:hidden}.fc-v-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-height:0}.fc-v-event .fc-event-title{bottom:0;max-height:100%;overflow:hidden;top:0}.fc-v-event:not(.fc-event-start){border-top-left-radius:0;border-top-right-radius:0;border-top-width:0}.fc-v-event:not(.fc-event-end){border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-width:0}.fc-v-event.fc-event-selected:before{left:-10px;right:-10px}.fc-v-event .fc-event-resizer-start{cursor:n-resize}.fc-v-event .fc-event-resizer-end{cursor:s-resize}.fc-v-event:not(.fc-event-selected) .fc-event-resizer{height:var(--fc-event-resizer-thickness);left:0;right:0}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-start{top:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer{left:50%;margin-left:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-start{top:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc .fc-timegrid .fc-daygrid-body{z-index:2}.fc .fc-timegrid-divider{padding:0 0 2px}.fc .fc-timegrid-body{min-height:100%;position:relative;z-index:1}.fc .fc-timegrid-axis-chunk{position:relative}.fc .fc-timegrid-axis-chunk>table,.fc .fc-timegrid-slots{position:relative;z-index:1}.fc .fc-timegrid-slot{border-bottom:0;height:1.5em}.fc .fc-timegrid-slot:empty:before{content:"\\00a0"}.fc .fc-timegrid-slot-minor{border-top-style:dotted}.fc .fc-timegrid-slot-label-cushion{display:inline-block;white-space:nowrap}.fc .fc-timegrid-slot-label{vertical-align:middle}.fc .fc-timegrid-axis-cushion,.fc .fc-timegrid-slot-label-cushion{padding:0 4px}.fc .fc-timegrid-axis-frame-liquid{height:100%}.fc .fc-timegrid-axis-frame{align-items:center;display:flex;justify-content:flex-end;overflow:hidden}.fc .fc-timegrid-axis-cushion{flex-shrink:0;max-width:60px}.fc-direction-ltr .fc-timegrid-slot-label-frame{text-align:right}.fc-direction-rtl .fc-timegrid-slot-label-frame{text-align:left}.fc-liquid-hack .fc-timegrid-axis-frame-liquid{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-timegrid-col-frame{min-height:100%;position:relative}.fc-media-screen.fc-liquid-hack .fc-timegrid-col-frame{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols{bottom:0;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols>table{height:100%}.fc-media-screen .fc-timegrid-col-bg,.fc-media-screen .fc-timegrid-col-events,.fc-media-screen .fc-timegrid-now-indicator-container{left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col-bg{z-index:2}.fc .fc-timegrid-col-bg .fc-non-business{z-index:1}.fc .fc-timegrid-col-bg .fc-bg-event{z-index:2}.fc .fc-timegrid-col-bg .fc-highlight{z-index:3}.fc .fc-timegrid-bg-harness{left:0;position:absolute;right:0}.fc .fc-timegrid-col-events{z-index:3}.fc .fc-timegrid-now-indicator-container{bottom:0;overflow:hidden}.fc-direction-ltr .fc-timegrid-col-events{margin:0 2.5% 0 2px}.fc-direction-rtl .fc-timegrid-col-events{margin:0 2px 0 2.5%}.fc-timegrid-event-harness{position:absolute}.fc-timegrid-event-harness>.fc-timegrid-event{bottom:0;left:0;position:absolute;right:0;top:0}.fc-timegrid-event-harness-inset .fc-timegrid-event,.fc-timegrid-event.fc-event-mirror,.fc-timegrid-more-link{box-shadow:0 0 0 1px var(--fc-page-bg-color)}.fc-timegrid-event,.fc-timegrid-more-link{border-radius:3px;font-size:var(--fc-small-font-size)}.fc-timegrid-event{margin-bottom:1px}.fc-timegrid-event .fc-event-main{padding:1px 1px 0}.fc-timegrid-event .fc-event-time{font-size:var(--fc-small-font-size);margin-bottom:1px;white-space:nowrap}.fc-timegrid-event-short .fc-event-main-frame{flex-direction:row;overflow:hidden}.fc-timegrid-event-short .fc-event-time:after{content:"\\00a0-\\00a0"}.fc-timegrid-event-short .fc-event-title{font-size:var(--fc-small-font-size)}.fc-timegrid-more-link{background:var(--fc-more-link-bg-color);color:var(--fc-more-link-text-color);cursor:pointer;margin-bottom:1px;position:absolute;z-index:9999}.fc-timegrid-more-link-inner{padding:3px 2px;top:0}.fc-direction-ltr .fc-timegrid-more-link{right:0}.fc-direction-rtl .fc-timegrid-more-link{left:0}.fc .fc-timegrid-now-indicator-line{border-color:var(--fc-now-indicator-color);border-style:solid;border-width:1px 0 0;left:0;position:absolute;right:0;z-index:4}.fc .fc-timegrid-now-indicator-arrow{border-color:var(--fc-now-indicator-color);border-style:solid;margin-top:-5px;position:absolute;z-index:4}.fc-direction-ltr .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 0 5px 6px;left:0}.fc-direction-rtl .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 6px 5px 0;right:0}'
Lr(Jh)
class Kh extends fu {
  getKeyInfo() {
    return { allDay: {}, timed: {} }
  }
  getKeysForDateSpan(e) {
    return e.allDay ? ['allDay'] : ['timed']
  }
  getKeysForEventDef(e) {
    return e.allDay ? (Wd(e) ? ['timed', 'allDay'] : ['allDay']) : ['timed']
  }
}
const eg = V({ hour: 'numeric', minute: '2-digit', omitZeroMinute: !0, meridiem: 'short' })
function Ol(n) {
  let e = [
    'fc-timegrid-slot',
    'fc-timegrid-slot-label',
    n.isLabeled ? 'fc-scrollgrid-shrink' : 'fc-timegrid-slot-minor'
  ]
  return g(Me.Consumer, null, (t) => {
    if (!n.isLabeled) return g('td', { className: e.join(' '), 'data-time': n.isoTimeStr })
    let { dateEnv: r, options: i, viewApi: s } = t,
      o =
        i.slotLabelFormat == null
          ? eg
          : Array.isArray(i.slotLabelFormat)
          ? V(i.slotLabelFormat[0])
          : V(i.slotLabelFormat),
      l = { level: 0, time: n.time, date: r.toDate(n.date), view: s, text: r.format(n.date, o) }
    return g(
      ce,
      {
        elTag: 'td',
        elClasses: e,
        elAttrs: { 'data-time': n.isoTimeStr },
        renderProps: l,
        generatorName: 'slotLabelContent',
        customGenerator: i.slotLabelContent,
        defaultGenerator: tg,
        classNameGenerator: i.slotLabelClassNames,
        didMount: i.slotLabelDidMount,
        willUnmount: i.slotLabelWillUnmount
      },
      (a) =>
        g(
          'div',
          { className: 'fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame' },
          g(a, {
            elTag: 'div',
            elClasses: ['fc-timegrid-slot-label-cushion', 'fc-scrollgrid-shrink-cushion']
          })
        )
    )
  })
}
function tg(n) {
  return n.text
}
class ng extends B {
  render() {
    return this.props.slatMetas.map((e) => g('tr', { key: e.key }, g(Ol, Object.assign({}, e))))
  }
}
const rg = V({ week: 'short' }),
  ig = 5
class sg extends De {
  constructor() {
    super(...arguments),
      (this.allDaySplitter = new Kh()),
      (this.headerElRef = K()),
      (this.rootElRef = K()),
      (this.scrollerElRef = K()),
      (this.state = { slatCoords: null }),
      (this.handleScrollTopRequest = (e) => {
        let t = this.scrollerElRef.current
        t && (t.scrollTop = e)
      }),
      (this.renderHeadAxis = (e, t = '') => {
        let { options: r } = this.context,
          { dateProfile: i } = this.props,
          s = i.renderRange,
          l = nt(s.start, s.end) === 1 ? In(this.context, s.start, 'week') : {}
        return r.weekNumbers && e === 'day'
          ? g(
              ul,
              {
                elTag: 'th',
                elClasses: ['fc-timegrid-axis', 'fc-scrollgrid-shrink'],
                elAttrs: { 'aria-hidden': !0 },
                date: s.start,
                defaultFormat: rg
              },
              (a) =>
                g(
                  'div',
                  {
                    className: [
                      'fc-timegrid-axis-frame',
                      'fc-scrollgrid-shrink-frame',
                      'fc-timegrid-axis-frame-liquid'
                    ].join(' '),
                    style: { height: t }
                  },
                  g(a, {
                    elTag: 'a',
                    elClasses: [
                      'fc-timegrid-axis-cushion',
                      'fc-scrollgrid-shrink-cushion',
                      'fc-scrollgrid-sync-inner'
                    ],
                    elAttrs: l
                  })
                )
            )
          : g(
              'th',
              { 'aria-hidden': !0, className: 'fc-timegrid-axis' },
              g('div', { className: 'fc-timegrid-axis-frame', style: { height: t } })
            )
      }),
      (this.renderTableRowAxis = (e) => {
        let { options: t, viewApi: r } = this.context,
          i = { text: t.allDayText, view: r }
        return g(
          ce,
          {
            elTag: 'td',
            elClasses: ['fc-timegrid-axis', 'fc-scrollgrid-shrink'],
            elAttrs: { 'aria-hidden': !0 },
            renderProps: i,
            generatorName: 'allDayContent',
            customGenerator: t.allDayContent,
            defaultGenerator: og,
            classNameGenerator: t.allDayClassNames,
            didMount: t.allDayDidMount,
            willUnmount: t.allDayWillUnmount
          },
          (s) =>
            g(
              'div',
              {
                className: [
                  'fc-timegrid-axis-frame',
                  'fc-scrollgrid-shrink-frame',
                  e == null ? ' fc-timegrid-axis-frame-liquid' : ''
                ].join(' '),
                style: { height: e }
              },
              g(s, {
                elTag: 'span',
                elClasses: [
                  'fc-timegrid-axis-cushion',
                  'fc-scrollgrid-shrink-cushion',
                  'fc-scrollgrid-sync-inner'
                ]
              })
            )
        )
      }),
      (this.handleSlatCoords = (e) => {
        this.setState({ slatCoords: e })
      })
  }
  renderSimpleLayout(e, t, r) {
    let { context: i, props: s } = this,
      o = [],
      l = Mn(i.options)
    return (
      e &&
        o.push({
          type: 'header',
          key: 'header',
          isSticky: l,
          chunk: { elRef: this.headerElRef, tableClassName: 'fc-col-header', rowContent: e }
        }),
      t &&
        (o.push({ type: 'body', key: 'all-day', chunk: { content: t } }),
        o.push({
          type: 'body',
          key: 'all-day-divider',
          outerContent: g(
            'tr',
            { role: 'presentation', className: 'fc-scrollgrid-section' },
            g('td', { className: 'fc-timegrid-divider ' + i.theme.getClass('tableCellShaded') })
          )
        })),
      o.push({
        type: 'body',
        key: 'body',
        liquid: !0,
        expandRows: !!i.options.expandRows,
        chunk: { scrollerElRef: this.scrollerElRef, content: r }
      }),
      g(
        _n,
        { elRef: this.rootElRef, elClasses: ['fc-timegrid'], viewSpec: i.viewSpec },
        g(ci, {
          liquid: !s.isHeightAuto && !s.forPrint,
          collapsibleWidth: s.forPrint,
          cols: [{ width: 'shrink' }],
          sections: o
        })
      )
    )
  }
  renderHScrollLayout(e, t, r, i, s, o, l) {
    let a = this.context.pluginHooks.scrollGridImpl
    if (!a) throw new Error('No ScrollGrid implementation')
    let { context: c, props: d } = this,
      u = !d.forPrint && Mn(c.options),
      h = !d.forPrint && ll(c.options),
      f = []
    e &&
      f.push({
        type: 'header',
        key: 'header',
        isSticky: u,
        syncRowHeights: !0,
        chunks: [
          {
            key: 'axis',
            rowContent: (m) =>
              g('tr', { role: 'presentation' }, this.renderHeadAxis('day', m.rowSyncHeights[0]))
          },
          { key: 'cols', elRef: this.headerElRef, tableClassName: 'fc-col-header', rowContent: e }
        ]
      }),
      t &&
        (f.push({
          type: 'body',
          key: 'all-day',
          syncRowHeights: !0,
          chunks: [
            {
              key: 'axis',
              rowContent: (m) =>
                g('tr', { role: 'presentation' }, this.renderTableRowAxis(m.rowSyncHeights[0]))
            },
            { key: 'cols', content: t }
          ]
        }),
        f.push({
          key: 'all-day-divider',
          type: 'body',
          outerContent: g(
            'tr',
            { role: 'presentation', className: 'fc-scrollgrid-section' },
            g('td', {
              colSpan: 2,
              className: 'fc-timegrid-divider ' + c.theme.getClass('tableCellShaded')
            })
          )
        }))
    let p = c.options.nowIndicator
    return (
      f.push({
        type: 'body',
        key: 'body',
        liquid: !0,
        expandRows: !!c.options.expandRows,
        chunks: [
          {
            key: 'axis',
            content: (m) =>
              g(
                'div',
                { className: 'fc-timegrid-axis-chunk' },
                g(
                  'table',
                  { 'aria-hidden': !0, style: { height: m.expandRows ? m.clientHeight : '' } },
                  m.tableColGroupNode,
                  g('tbody', null, g(ng, { slatMetas: o }))
                ),
                g(
                  'div',
                  { className: 'fc-timegrid-now-indicator-container' },
                  g(Ft, { unit: p ? 'minute' : 'day' }, (b) => {
                    let y = p && l && l.safeComputeTop(b)
                    return typeof y == 'number'
                      ? g(ui, {
                          elClasses: ['fc-timegrid-now-indicator-arrow'],
                          elStyle: { top: y },
                          isAxis: !0,
                          date: b
                        })
                      : null
                  })
                )
              )
          },
          { key: 'cols', scrollerElRef: this.scrollerElRef, content: r }
        ]
      }),
      h &&
        f.push({
          key: 'footer',
          type: 'footer',
          isSticky: !0,
          chunks: [
            { key: 'axis', content: Ir },
            { key: 'cols', content: Ir }
          ]
        }),
      g(
        _n,
        { elRef: this.rootElRef, elClasses: ['fc-timegrid'], viewSpec: c.viewSpec },
        g(a, {
          liquid: !d.isHeightAuto && !d.forPrint,
          forPrint: d.forPrint,
          collapsibleWidth: !1,
          colGroups: [
            { width: 'shrink', cols: [{ width: 'shrink' }] },
            { cols: [{ span: i, minWidth: s }] }
          ],
          sections: f
        })
      )
    )
  }
  getAllDayMaxEventProps() {
    let { dayMaxEvents: e, dayMaxEventRows: t } = this.context.options
    return (
      (e === !0 || t === !0) && ((e = void 0), (t = ig)), { dayMaxEvents: e, dayMaxEventRows: t }
    )
  }
}
function og(n) {
  return n.text
}
class lg {
  constructor(e, t, r) {
    ;(this.positions = e), (this.dateProfile = t), (this.slotDuration = r)
  }
  safeComputeTop(e) {
    let { dateProfile: t } = this
    if (_e(t.currentRange, e)) {
      let r = F(e),
        i = e.valueOf() - r.valueOf()
      if (i >= ge(t.slotMinTime) && i < ge(t.slotMaxTime)) return this.computeTimeTop(M(i))
    }
    return null
  }
  computeDateTop(e, t) {
    return t || (t = F(e)), this.computeTimeTop(M(e.valueOf() - t.valueOf()))
  }
  computeTimeTop(e) {
    let { positions: t, dateProfile: r } = this,
      i = t.els.length,
      s = (e.milliseconds - ge(r.slotMinTime)) / ge(this.slotDuration),
      o,
      l
    return (
      (s = Math.max(0, s)),
      (s = Math.min(i, s)),
      (o = Math.floor(s)),
      (o = Math.min(o, i - 1)),
      (l = s - o),
      t.tops[o] + t.getHeight(o) * l
    )
  }
}
class ag extends B {
  render() {
    let { props: e, context: t } = this,
      { options: r } = t,
      { slatElRefs: i } = e
    return g(
      'tbody',
      null,
      e.slatMetas.map((s, o) => {
        let l = { time: s.time, date: t.dateEnv.toDate(s.date), view: t.viewApi }
        return g(
          'tr',
          { key: s.key, ref: i.createRef(s.key) },
          e.axis && g(Ol, Object.assign({}, s)),
          g(ce, {
            elTag: 'td',
            elClasses: [
              'fc-timegrid-slot',
              'fc-timegrid-slot-lane',
              !s.isLabeled && 'fc-timegrid-slot-minor'
            ],
            elAttrs: { 'data-time': s.isoTimeStr },
            renderProps: l,
            generatorName: 'slotLaneContent',
            customGenerator: r.slotLaneContent,
            classNameGenerator: r.slotLaneClassNames,
            didMount: r.slotLaneDidMount,
            willUnmount: r.slotLaneWillUnmount
          })
        )
      })
    )
  }
}
class cg extends B {
  constructor() {
    super(...arguments), (this.rootElRef = K()), (this.slatElRefs = new we())
  }
  render() {
    let { props: e, context: t } = this
    return g(
      'div',
      { ref: this.rootElRef, className: 'fc-timegrid-slots' },
      g(
        'table',
        {
          'aria-hidden': !0,
          className: t.theme.getClass('table'),
          style: { minWidth: e.tableMinWidth, width: e.clientWidth, height: e.minHeight }
        },
        e.tableColGroupNode,
        g(ag, { slatElRefs: this.slatElRefs, axis: e.axis, slatMetas: e.slatMetas })
      )
    )
  }
  componentDidMount() {
    this.updateSizing()
  }
  componentDidUpdate() {
    this.updateSizing()
  }
  componentWillUnmount() {
    this.props.onCoords && this.props.onCoords(null)
  }
  updateSizing() {
    let { context: e, props: t } = this
    t.onCoords &&
      t.clientWidth !== null &&
      this.rootElRef.current.offsetHeight &&
      t.onCoords(
        new lg(
          new vt(this.rootElRef.current, dg(this.slatElRefs.currentMap, t.slatMetas), !1, !0),
          this.props.dateProfile,
          e.options.slotDuration
        )
      )
  }
}
function dg(n, e) {
  return e.map((t) => n[t.key])
}
function Et(n, e) {
  let t = [],
    r
  for (r = 0; r < e; r += 1) t.push([])
  if (n) for (r = 0; r < n.length; r += 1) t[n[r].col].push(n[r])
  return t
}
function Cs(n, e) {
  let t = []
  if (n) {
    for (let r = 0; r < e; r += 1)
      t[r] = { affectedInstances: n.affectedInstances, isEvent: n.isEvent, segs: [] }
    for (let r of n.segs) t[r.col].segs.push(r)
  } else for (let r = 0; r < e; r += 1) t[r] = null
  return t
}
class ug extends B {
  render() {
    let { props: e } = this
    return g(
      fl,
      {
        elClasses: ['fc-timegrid-more-link'],
        elStyle: { top: e.top, bottom: e.bottom },
        allDayDate: null,
        moreCnt: e.hiddenSegs.length,
        allSegs: e.hiddenSegs,
        hiddenSegs: e.hiddenSegs,
        extraDateSpan: e.extraDateSpan,
        dateProfile: e.dateProfile,
        todayRange: e.todayRange,
        popoverContent: () => Pl(e.hiddenSegs, e),
        defaultGenerator: fg,
        forceTimed: !0
      },
      (t) => g(t, { elTag: 'div', elClasses: ['fc-timegrid-more-link-inner', 'fc-sticky'] })
    )
  }
}
function fg(n) {
  return n.shortText
}
function hg(n, e, t) {
  let r = new Xo()
  e != null && (r.strictOrder = e), t != null && (r.maxStackCnt = t)
  let i = r.addSegs(n),
    s = Cu(i),
    o = gg(r)
  return (o = bg(o, 1)), { segRects: yg(o), hiddenGroups: s }
}
function gg(n) {
  const { entriesByLevel: e } = n,
    t = pi(
      (r, i) => r + ':' + i,
      (r, i) => {
        let s = vg(n, r, i),
          o = _s(s, t),
          l = e[r][i]
        return [Object.assign(Object.assign({}, l), { nextLevelNodes: o[0] }), l.thickness + o[1]]
      }
    )
  return _s(e.length ? { level: 0, lateralStart: 0, lateralEnd: e[0].length } : null, t)[0]
}
function _s(n, e) {
  if (!n) return [[], 0]
  let { level: t, lateralStart: r, lateralEnd: i } = n,
    s = r,
    o = []
  for (; s < i; ) o.push(e(t, s)), (s += 1)
  return o.sort(pg), [o.map(mg), o[0][1]]
}
function pg(n, e) {
  return e[1] - n[1]
}
function mg(n) {
  return n[0]
}
function vg(n, e, t) {
  let { levelCoords: r, entriesByLevel: i } = n,
    s = i[e][t],
    o = r[e] + s.thickness,
    l = r.length,
    a = e
  for (; a < l && r[a] < o; a += 1);
  for (; a < l; a += 1) {
    let c = i[a],
      d,
      u = xr(c, s.span.start, Tr),
      h = u[0] + u[1],
      f = h
    for (; (d = c[f]) && d.span.start < s.span.end; ) f += 1
    if (h < f) return { level: a, lateralStart: h, lateralEnd: f }
  }
  return null
}
function bg(n, e) {
  const t = pi(
    (r, i, s) => $e(r),
    (r, i, s) => {
      let { nextLevelNodes: o, thickness: l } = r,
        a = l + s,
        c = l / a,
        d,
        u = []
      if (!o.length) d = e
      else
        for (let f of o)
          if (d === void 0) {
            let p = t(f, i, a)
            ;(d = p[0]), u.push(p[1])
          } else {
            let p = t(f, d, 0)
            u.push(p[1])
          }
      let h = (d - i) * c
      return [d - h, Object.assign(Object.assign({}, r), { thickness: h, nextLevelNodes: u })]
    }
  )
  return n.map((r) => t(r, 0, 0)[1])
}
function yg(n) {
  let e = []
  const t = pi(
    (i, s, o) => $e(i),
    (i, s, o) => {
      let l = Object.assign(Object.assign({}, i), { levelCoord: s, stackDepth: o, stackForward: 0 })
      return e.push(l), (l.stackForward = r(i.nextLevelNodes, s + i.thickness, o + 1) + 1)
    }
  )
  function r(i, s, o) {
    let l = 0
    for (let a of i) l = Math.max(t(a, s, o), l)
    return l
  }
  return r(n, 0, 0), e
}
function pi(n, e) {
  const t = {}
  return (...r) => {
    let i = n(...r)
    return i in t ? t[i] : (t[i] = e(...r))
  }
}
function Rs(n, e, t = null, r = 0) {
  let i = []
  if (t)
    for (let s = 0; s < n.length; s += 1) {
      let o = n[s],
        l = t.computeDateTop(o.start, e),
        a = Math.max(l + (r || 0), t.computeDateTop(o.end, e))
      i.push({ start: Math.round(l), end: Math.round(a) })
    }
  return i
}
function Eg(n, e, t, r) {
  let i = [],
    s = []
  for (let c = 0; c < n.length; c += 1) {
    let d = e[c]
    d ? i.push({ index: c, thickness: 1, span: d }) : s.push(n[c])
  }
  let { segRects: o, hiddenGroups: l } = hg(i, t, r),
    a = []
  for (let c of o) a.push({ seg: n[c.index], rect: c })
  for (let c of s) a.push({ seg: c, rect: null })
  return { segPlacements: a, hiddenGroups: l }
}
const Sg = V({ hour: 'numeric', minute: '2-digit', meridiem: !1 })
class Nl extends B {
  render() {
    return g(
      al,
      Object.assign({}, this.props, {
        elClasses: [
          'fc-timegrid-event',
          'fc-v-event',
          this.props.isShort && 'fc-timegrid-event-short'
        ],
        defaultTimeFormat: Sg
      })
    )
  }
}
class Ag extends B {
  constructor() {
    super(...arguments), (this.sortEventSegs = _(Fo))
  }
  render() {
    let { props: e, context: t } = this,
      { options: r } = t,
      i = r.selectMirror,
      s =
        (e.eventDrag && e.eventDrag.segs) ||
        (e.eventResize && e.eventResize.segs) ||
        (i && e.dateSelectionSegs) ||
        [],
      o =
        (e.eventDrag && e.eventDrag.affectedInstances) ||
        (e.eventResize && e.eventResize.affectedInstances) ||
        {},
      l = this.sortEventSegs(e.fgEventSegs, r.eventOrder)
    return g(
      fi,
      {
        elTag: 'td',
        elRef: e.elRef,
        elClasses: ['fc-timegrid-col', ...(e.extraClassNames || [])],
        elAttrs: Object.assign({ role: 'gridcell' }, e.extraDataAttrs),
        date: e.date,
        dateProfile: e.dateProfile,
        todayRange: e.todayRange,
        extraRenderProps: e.extraRenderProps
      },
      (a) =>
        g(
          'div',
          { className: 'fc-timegrid-col-frame' },
          g(
            'div',
            { className: 'fc-timegrid-col-bg' },
            this.renderFillSegs(e.businessHourSegs, 'non-business'),
            this.renderFillSegs(e.bgEventSegs, 'bg-event'),
            this.renderFillSegs(e.dateSelectionSegs, 'highlight')
          ),
          g('div', { className: 'fc-timegrid-col-events' }, this.renderFgSegs(l, o, !1, !1, !1)),
          g(
            'div',
            { className: 'fc-timegrid-col-events' },
            this.renderFgSegs(s, {}, !!e.eventDrag, !!e.eventResize, !!i, 'mirror')
          ),
          g(
            'div',
            { className: 'fc-timegrid-now-indicator-container' },
            this.renderNowIndicator(e.nowIndicatorSegs)
          ),
          hi(r) && g(a, { elTag: 'div', elClasses: ['fc-timegrid-col-misc'] })
        )
    )
  }
  renderFgSegs(e, t, r, i, s, o) {
    let { props: l } = this
    return l.forPrint ? Pl(e, l) : this.renderPositionedFgSegs(e, t, r, i, s, o)
  }
  renderPositionedFgSegs(e, t, r, i, s, o) {
    let {
        eventMaxStack: l,
        eventShortHeight: a,
        eventOrderStrict: c,
        eventMinHeight: d
      } = this.context.options,
      { date: u, slatCoords: h, eventSelection: f, todayRange: p, nowDate: m } = this.props,
      b = r || i || s,
      y = Rs(e, u, h, d),
      { segPlacements: E, hiddenGroups: w } = Eg(e, y, c, l)
    return g(
      j,
      null,
      this.renderHiddenGroups(w, e),
      E.map((D) => {
        let { seg: P, rect: x } = D,
          k = P.eventRange.instance.instanceId,
          A = b || !!(!t[k] && x),
          O = fr(x && x.span),
          L = !b && x ? this.computeSegHStyle(x) : { left: 0, right: 0 },
          ne = !!x && x.stackForward > 0,
          pe = !!x && x.span.end - x.span.start < a
        return g(
          'div',
          {
            className: 'fc-timegrid-event-harness' + (ne ? ' fc-timegrid-event-harness-inset' : ''),
            key: o || k,
            style: Object.assign(Object.assign({ visibility: A ? '' : 'hidden' }, O), L)
          },
          g(
            Nl,
            Object.assign(
              {
                seg: P,
                isDragging: r,
                isResizing: i,
                isDateSelecting: s,
                isSelected: k === f,
                isShort: pe
              },
              je(P, p, m)
            )
          )
        )
      })
    )
  }
  renderHiddenGroups(e, t) {
    let {
      extraDateSpan: r,
      dateProfile: i,
      todayRange: s,
      nowDate: o,
      eventSelection: l,
      eventDrag: a,
      eventResize: c
    } = this.props
    return g(
      j,
      null,
      e.map((d) => {
        let u = fr(d.span),
          h = Dg(d.entries, t)
        return g(ug, {
          key: bo(hl(h)),
          hiddenSegs: h,
          top: u.top,
          bottom: u.bottom,
          extraDateSpan: r,
          dateProfile: i,
          todayRange: s,
          nowDate: o,
          eventSelection: l,
          eventDrag: a,
          eventResize: c
        })
      })
    )
  }
  renderFillSegs(e, t) {
    let { props: r, context: i } = this,
      o = Rs(e, r.date, r.slatCoords, i.options.eventMinHeight).map((l, a) => {
        let c = e[a]
        return g(
          'div',
          { key: Uo(c.eventRange), className: 'fc-timegrid-bg-harness', style: fr(l) },
          t === 'bg-event'
            ? g(cl, Object.assign({ seg: c }, je(c, r.todayRange, r.nowDate)))
            : dl(t)
        )
      })
    return g(j, null, o)
  }
  renderNowIndicator(e) {
    let { slatCoords: t, date: r } = this.props
    return t
      ? e.map((i, s) =>
          g(ui, {
            key: s,
            elClasses: ['fc-timegrid-now-indicator-line'],
            elStyle: { top: t.computeDateTop(i.start, r) },
            isAxis: !1,
            date: r
          })
        )
      : null
  }
  computeSegHStyle(e) {
    let { isRtl: t, options: r } = this.context,
      i = r.slotEventOverlap,
      s = e.levelCoord,
      o = e.levelCoord + e.thickness,
      l,
      a
    i && (o = Math.min(1, s + (o - s) * 2)), t ? ((l = 1 - o), (a = s)) : ((l = s), (a = 1 - o))
    let c = { zIndex: e.stackDepth + 1, left: l * 100 + '%', right: a * 100 + '%' }
    return i && !e.stackForward && (c[t ? 'marginLeft' : 'marginRight'] = 10 * 2), c
  }
}
function Pl(n, { todayRange: e, nowDate: t, eventSelection: r, eventDrag: i, eventResize: s }) {
  let o = (i ? i.affectedInstances : null) || (s ? s.affectedInstances : null) || {}
  return g(
    j,
    null,
    n.map((l) => {
      let a = l.eventRange.instance.instanceId
      return g(
        'div',
        { key: a, style: { visibility: o[a] ? 'hidden' : '' } },
        g(
          Nl,
          Object.assign(
            {
              seg: l,
              isDragging: !1,
              isResizing: !1,
              isDateSelecting: !1,
              isSelected: a === r,
              isShort: !1
            },
            je(l, e, t)
          )
        )
      )
    })
  )
}
function fr(n) {
  return n ? { top: n.start, bottom: -n.end } : { top: '', bottom: '' }
}
function Dg(n, e) {
  return n.map((t) => e[t.index])
}
class wg extends B {
  constructor() {
    super(...arguments),
      (this.splitFgEventSegs = _(Et)),
      (this.splitBgEventSegs = _(Et)),
      (this.splitBusinessHourSegs = _(Et)),
      (this.splitNowIndicatorSegs = _(Et)),
      (this.splitDateSelectionSegs = _(Et)),
      (this.splitEventDrag = _(Cs)),
      (this.splitEventResize = _(Cs)),
      (this.rootElRef = K()),
      (this.cellElRefs = new we())
  }
  render() {
    let { props: e, context: t } = this,
      r = t.options.nowIndicator && e.slatCoords && e.slatCoords.safeComputeTop(e.nowDate),
      i = e.cells.length,
      s = this.splitFgEventSegs(e.fgEventSegs, i),
      o = this.splitBgEventSegs(e.bgEventSegs, i),
      l = this.splitBusinessHourSegs(e.businessHourSegs, i),
      a = this.splitNowIndicatorSegs(e.nowIndicatorSegs, i),
      c = this.splitDateSelectionSegs(e.dateSelectionSegs, i),
      d = this.splitEventDrag(e.eventDrag, i),
      u = this.splitEventResize(e.eventResize, i)
    return g(
      'div',
      { className: 'fc-timegrid-cols', ref: this.rootElRef },
      g(
        'table',
        { role: 'presentation', style: { minWidth: e.tableMinWidth, width: e.clientWidth } },
        e.tableColGroupNode,
        g(
          'tbody',
          { role: 'presentation' },
          g(
            'tr',
            { role: 'row' },
            e.axis &&
              g(
                'td',
                { 'aria-hidden': !0, className: 'fc-timegrid-col fc-timegrid-axis' },
                g(
                  'div',
                  { className: 'fc-timegrid-col-frame' },
                  g(
                    'div',
                    { className: 'fc-timegrid-now-indicator-container' },
                    typeof r == 'number' &&
                      g(ui, {
                        elClasses: ['fc-timegrid-now-indicator-arrow'],
                        elStyle: { top: r },
                        isAxis: !0,
                        date: e.nowDate
                      })
                  )
                )
              ),
            e.cells.map((h, f) =>
              g(Ag, {
                key: h.key,
                elRef: this.cellElRefs.createRef(h.key),
                dateProfile: e.dateProfile,
                date: h.date,
                nowDate: e.nowDate,
                todayRange: e.todayRange,
                extraRenderProps: h.extraRenderProps,
                extraDataAttrs: h.extraDataAttrs,
                extraClassNames: h.extraClassNames,
                extraDateSpan: h.extraDateSpan,
                fgEventSegs: s[f],
                bgEventSegs: o[f],
                businessHourSegs: l[f],
                nowIndicatorSegs: a[f],
                dateSelectionSegs: c[f],
                eventDrag: d[f],
                eventResize: u[f],
                slatCoords: e.slatCoords,
                eventSelection: e.eventSelection,
                forPrint: e.forPrint
              })
            )
          )
        )
      )
    )
  }
  componentDidMount() {
    this.updateCoords()
  }
  componentDidUpdate() {
    this.updateCoords()
  }
  updateCoords() {
    let { props: e } = this
    e.onColCoords &&
      e.clientWidth !== null &&
      e.onColCoords(new vt(this.rootElRef.current, Cg(this.cellElRefs.currentMap, e.cells), !0, !1))
  }
}
function Cg(n, e) {
  return e.map((t) => n[t.key])
}
class _g extends De {
  constructor() {
    super(...arguments),
      (this.processSlotOptions = _(Rg)),
      (this.state = { slatCoords: null }),
      (this.handleRootEl = (e) => {
        e
          ? this.context.registerInteractiveComponent(this, {
              el: e,
              isHitComboAllowed: this.props.isHitComboAllowed
            })
          : this.context.unregisterInteractiveComponent(this)
      }),
      (this.handleScrollRequest = (e) => {
        let { onScrollTopRequest: t } = this.props,
          { slatCoords: r } = this.state
        if (t && r) {
          if (e.time) {
            let i = r.computeTimeTop(e.time)
            ;(i = Math.ceil(i)), i && (i += 1), t(i)
          }
          return !0
        }
        return !1
      }),
      (this.handleColCoords = (e) => {
        this.colCoords = e
      }),
      (this.handleSlatCoords = (e) => {
        this.setState({ slatCoords: e }), this.props.onSlatCoords && this.props.onSlatCoords(e)
      })
  }
  render() {
    let { props: e, state: t } = this
    return g(
      'div',
      {
        className: 'fc-timegrid-body',
        ref: this.handleRootEl,
        style: { width: e.clientWidth, minWidth: e.tableMinWidth }
      },
      g(cg, {
        axis: e.axis,
        dateProfile: e.dateProfile,
        slatMetas: e.slatMetas,
        clientWidth: e.clientWidth,
        minHeight: e.expandRows ? e.clientHeight : '',
        tableMinWidth: e.tableMinWidth,
        tableColGroupNode: e.axis ? e.tableColGroupNode : null,
        onCoords: this.handleSlatCoords
      }),
      g(wg, {
        cells: e.cells,
        axis: e.axis,
        dateProfile: e.dateProfile,
        businessHourSegs: e.businessHourSegs,
        bgEventSegs: e.bgEventSegs,
        fgEventSegs: e.fgEventSegs,
        dateSelectionSegs: e.dateSelectionSegs,
        eventSelection: e.eventSelection,
        eventDrag: e.eventDrag,
        eventResize: e.eventResize,
        todayRange: e.todayRange,
        nowDate: e.nowDate,
        nowIndicatorSegs: e.nowIndicatorSegs,
        clientWidth: e.clientWidth,
        tableMinWidth: e.tableMinWidth,
        tableColGroupNode: e.tableColGroupNode,
        slatCoords: t.slatCoords,
        onColCoords: this.handleColCoords,
        forPrint: e.forPrint
      })
    )
  }
  componentDidMount() {
    this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest)
  }
  componentDidUpdate(e) {
    this.scrollResponder.update(e.dateProfile !== this.props.dateProfile)
  }
  componentWillUnmount() {
    this.scrollResponder.detach()
  }
  queryHit(e, t) {
    let { dateEnv: r, options: i } = this.context,
      { colCoords: s } = this,
      { dateProfile: o } = this.props,
      { slatCoords: l } = this.state,
      { snapDuration: a, snapsPerSlot: c } = this.processSlotOptions(
        this.props.slotDuration,
        i.snapDuration
      ),
      d = s.leftToIndex(e),
      u = l.positions.topToIndex(t)
    if (d != null && u != null) {
      let h = this.props.cells[d],
        f = l.positions.tops[u],
        p = l.positions.getHeight(u),
        m = (t - f) / p,
        b = Math.floor(m * c),
        y = u * c + b,
        E = this.props.cells[d].date,
        w = Sr(o.slotMinTime, gc(a, y)),
        D = r.add(E, w),
        P = r.add(D, a)
      return {
        dateProfile: o,
        dateSpan: Object.assign({ range: { start: D, end: P }, allDay: !1 }, h.extraDateSpan),
        dayEl: s.els[d],
        rect: { left: s.lefts[d], right: s.rights[d], top: f, bottom: f + p },
        layer: 0
      }
    }
    return null
  }
}
function Rg(n, e) {
  let t = e || n,
    r = Wr(n, t)
  return r === null && ((t = n), (r = 1)), { snapDuration: t, snapsPerSlot: r }
}
class Tg extends nl {
  sliceRange(e, t) {
    let r = []
    for (let i = 0; i < t.length; i += 1) {
      let s = Ke(e, t[i])
      s &&
        r.push({
          start: s.start,
          end: s.end,
          isStart: s.start.valueOf() === e.start.valueOf(),
          isEnd: s.end.valueOf() === e.end.valueOf(),
          col: i
        })
    }
    return r
  }
}
class xg extends De {
  constructor() {
    super(...arguments),
      (this.buildDayRanges = _(Ig)),
      (this.slicer = new Tg()),
      (this.timeColsRef = K())
  }
  render() {
    let { props: e, context: t } = this,
      { dateProfile: r, dayTableModel: i } = e,
      { nowIndicator: s, nextDayThreshold: o } = t.options,
      l = this.buildDayRanges(i, r, t.dateEnv)
    return g(Ft, { unit: s ? 'minute' : 'day' }, (a, c) =>
      g(
        _g,
        Object.assign({ ref: this.timeColsRef }, this.slicer.sliceProps(e, r, null, t, l), {
          forPrint: e.forPrint,
          axis: e.axis,
          dateProfile: r,
          slatMetas: e.slatMetas,
          slotDuration: e.slotDuration,
          cells: i.cells[0],
          tableColGroupNode: e.tableColGroupNode,
          tableMinWidth: e.tableMinWidth,
          clientWidth: e.clientWidth,
          clientHeight: e.clientHeight,
          expandRows: e.expandRows,
          nowDate: a,
          nowIndicatorSegs: s && this.slicer.sliceNowDate(a, r, o, t, l),
          todayRange: c,
          onScrollTopRequest: e.onScrollTopRequest,
          onSlatCoords: e.onSlatCoords
        })
      )
    )
  }
}
function Ig(n, e, t) {
  let r = []
  for (let i of n.headerDates)
    r.push({ start: t.add(i, e.slotMinTime), end: t.add(i, e.slotMaxTime) })
  return r
}
const Ts = [{ hours: 1 }, { minutes: 30 }, { minutes: 15 }, { seconds: 30 }, { seconds: 15 }]
function Mg(n, e, t, r, i) {
  let s = new Date(0),
    o = n,
    l = M(0),
    a = t || kg(r),
    c = []
  for (; ge(o) < ge(e); ) {
    let d = i.add(s, o),
      u = Wr(l, a) !== null
    c.push({ date: d, time: o, key: d.toISOString(), isoTimeStr: Ic(d), isLabeled: u }),
      (o = Sr(o, r)),
      (l = Sr(l, r))
  }
  return c
}
function kg(n) {
  let e, t, r
  for (e = Ts.length - 1; e >= 0; e -= 1)
    if (((t = M(Ts[e])), (r = Wr(t, n)), r !== null && r > 1)) return t
  return n
}
class Og extends sg {
  constructor() {
    super(...arguments), (this.buildTimeColsModel = _(Ng)), (this.buildSlatMetas = _(Mg))
  }
  render() {
    let { options: e, dateEnv: t, dateProfileGenerator: r } = this.context,
      { props: i } = this,
      { dateProfile: s } = i,
      o = this.buildTimeColsModel(s, r),
      l = this.allDaySplitter.splitProps(i),
      a = this.buildSlatMetas(s.slotMinTime, s.slotMaxTime, e.slotLabelInterval, e.slotDuration, t),
      { dayMinWidth: c } = e,
      d = !c,
      u = c,
      h =
        e.dayHeaders &&
        g(Ko, {
          dates: o.headerDates,
          dateProfile: s,
          datesRepDistinctDays: !0,
          renderIntro: d ? this.renderHeadAxis : null
        }),
      f =
        e.allDaySlot !== !1 &&
        ((m) =>
          g(
            kl,
            Object.assign(
              {},
              l.allDay,
              {
                dateProfile: s,
                dayTableModel: o,
                nextDayThreshold: e.nextDayThreshold,
                tableMinWidth: m.tableMinWidth,
                colGroupNode: m.tableColGroupNode,
                renderRowIntro: d ? this.renderTableRowAxis : null,
                showWeekNumbers: !1,
                expandRows: !1,
                headerAlignElRef: this.headerElRef,
                clientWidth: m.clientWidth,
                clientHeight: m.clientHeight,
                forPrint: i.forPrint
              },
              this.getAllDayMaxEventProps()
            )
          )),
      p = (m) =>
        g(
          xg,
          Object.assign({}, l.timed, {
            dayTableModel: o,
            dateProfile: s,
            axis: d,
            slotDuration: e.slotDuration,
            slatMetas: a,
            forPrint: i.forPrint,
            tableColGroupNode: m.tableColGroupNode,
            tableMinWidth: m.tableMinWidth,
            clientWidth: m.clientWidth,
            clientHeight: m.clientHeight,
            onSlatCoords: this.handleSlatCoords,
            expandRows: m.expandRows,
            onScrollTopRequest: this.handleScrollTopRequest
          })
        )
    return u
      ? this.renderHScrollLayout(h, f, p, o.colCnt, c, a, this.state.slatCoords)
      : this.renderSimpleLayout(h, f, p)
  }
}
function Ng(n, e) {
  let t = new el(n.renderRange, e)
  return new tl(t, !1)
}
const Pg = { allDaySlot: Boolean }
var Hg = ke({
  name: '@fullcalendar/timegrid',
  initialView: 'timeGridWeek',
  optionRefiners: Pg,
  views: {
    timeGrid: {
      component: Og,
      usesMinMaxTime: !0,
      allDaySlot: !0,
      slotDuration: '00:30:00',
      slotEventOverlap: !0
    },
    timeGridDay: { type: 'timeGrid', duration: { days: 1 } },
    timeGridWeek: { type: 'timeGrid', duration: { weeks: 1 } }
  }
})
ai.touchMouseIgnoreWait = 500
let kr = 0,
  kn = 0,
  Or = !1
class Hl {
  constructor(e) {
    ;(this.subjectEl = null),
      (this.selector = ''),
      (this.handleSelector = ''),
      (this.shouldIgnoreMove = !1),
      (this.shouldWatchScroll = !0),
      (this.isDragging = !1),
      (this.isTouchDragging = !1),
      (this.wasTouchScroll = !1),
      (this.handleMouseDown = (t) => {
        if (!this.shouldIgnoreMouse() && Bg(t) && this.tryStart(t)) {
          let r = this.createEventFromMouse(t, !0)
          this.emitter.trigger('pointerdown', r),
            this.initScrollWatch(r),
            this.shouldIgnoreMove || document.addEventListener('mousemove', this.handleMouseMove),
            document.addEventListener('mouseup', this.handleMouseUp)
        }
      }),
      (this.handleMouseMove = (t) => {
        let r = this.createEventFromMouse(t)
        this.recordCoords(r), this.emitter.trigger('pointermove', r)
      }),
      (this.handleMouseUp = (t) => {
        document.removeEventListener('mousemove', this.handleMouseMove),
          document.removeEventListener('mouseup', this.handleMouseUp),
          this.emitter.trigger('pointerup', this.createEventFromMouse(t)),
          this.cleanup()
      }),
      (this.handleTouchStart = (t) => {
        if (this.tryStart(t)) {
          this.isTouchDragging = !0
          let r = this.createEventFromTouch(t, !0)
          this.emitter.trigger('pointerdown', r), this.initScrollWatch(r)
          let i = t.target
          this.shouldIgnoreMove || i.addEventListener('touchmove', this.handleTouchMove),
            i.addEventListener('touchend', this.handleTouchEnd),
            i.addEventListener('touchcancel', this.handleTouchEnd),
            window.addEventListener('scroll', this.handleTouchScroll, !0)
        }
      }),
      (this.handleTouchMove = (t) => {
        let r = this.createEventFromTouch(t)
        this.recordCoords(r), this.emitter.trigger('pointermove', r)
      }),
      (this.handleTouchEnd = (t) => {
        if (this.isDragging) {
          let r = t.target
          r.removeEventListener('touchmove', this.handleTouchMove),
            r.removeEventListener('touchend', this.handleTouchEnd),
            r.removeEventListener('touchcancel', this.handleTouchEnd),
            window.removeEventListener('scroll', this.handleTouchScroll, !0),
            this.emitter.trigger('pointerup', this.createEventFromTouch(t)),
            this.cleanup(),
            (this.isTouchDragging = !1),
            Lg()
        }
      }),
      (this.handleTouchScroll = () => {
        this.wasTouchScroll = !0
      }),
      (this.handleScroll = (t) => {
        if (!this.shouldIgnoreMove) {
          let r = window.pageXOffset - this.prevScrollX + this.prevPageX,
            i = window.pageYOffset - this.prevScrollY + this.prevPageY
          this.emitter.trigger('pointermove', {
            origEvent: t,
            isTouch: this.isTouchDragging,
            subjectEl: this.subjectEl,
            pageX: r,
            pageY: i,
            deltaX: r - this.origPageX,
            deltaY: i - this.origPageY
          })
        }
      }),
      (this.containerEl = e),
      (this.emitter = new Fn()),
      e.addEventListener('mousedown', this.handleMouseDown),
      e.addEventListener('touchstart', this.handleTouchStart, { passive: !0 }),
      Fg()
  }
  destroy() {
    this.containerEl.removeEventListener('mousedown', this.handleMouseDown),
      this.containerEl.removeEventListener('touchstart', this.handleTouchStart, { passive: !0 }),
      jg()
  }
  tryStart(e) {
    let t = this.querySubjectEl(e),
      r = e.target
    return t && (!this.handleSelector || X(r, this.handleSelector))
      ? ((this.subjectEl = t), (this.isDragging = !0), (this.wasTouchScroll = !1), !0)
      : !1
  }
  cleanup() {
    ;(Or = !1), (this.isDragging = !1), (this.subjectEl = null), this.destroyScrollWatch()
  }
  querySubjectEl(e) {
    return this.selector ? X(e.target, this.selector) : this.containerEl
  }
  shouldIgnoreMouse() {
    return kr || this.isTouchDragging
  }
  cancelTouchScroll() {
    this.isDragging && (Or = !0)
  }
  initScrollWatch(e) {
    this.shouldWatchScroll &&
      (this.recordCoords(e), window.addEventListener('scroll', this.handleScroll, !0))
  }
  recordCoords(e) {
    this.shouldWatchScroll &&
      ((this.prevPageX = e.pageX),
      (this.prevPageY = e.pageY),
      (this.prevScrollX = window.pageXOffset),
      (this.prevScrollY = window.pageYOffset))
  }
  destroyScrollWatch() {
    this.shouldWatchScroll && window.removeEventListener('scroll', this.handleScroll, !0)
  }
  createEventFromMouse(e, t) {
    let r = 0,
      i = 0
    return (
      t
        ? ((this.origPageX = e.pageX), (this.origPageY = e.pageY))
        : ((r = e.pageX - this.origPageX), (i = e.pageY - this.origPageY)),
      {
        origEvent: e,
        isTouch: !1,
        subjectEl: this.subjectEl,
        pageX: e.pageX,
        pageY: e.pageY,
        deltaX: r,
        deltaY: i
      }
    )
  }
  createEventFromTouch(e, t) {
    let r = e.touches,
      i,
      s,
      o = 0,
      l = 0
    return (
      r && r.length ? ((i = r[0].pageX), (s = r[0].pageY)) : ((i = e.pageX), (s = e.pageY)),
      t
        ? ((this.origPageX = i), (this.origPageY = s))
        : ((o = i - this.origPageX), (l = s - this.origPageY)),
      {
        origEvent: e,
        isTouch: !0,
        subjectEl: this.subjectEl,
        pageX: i,
        pageY: s,
        deltaX: o,
        deltaY: l
      }
    )
  }
}
function Bg(n) {
  return n.button === 0 && !n.ctrlKey
}
function Lg() {
  ;(kr += 1),
    setTimeout(() => {
      kr -= 1
    }, ai.touchMouseIgnoreWait)
}
function Fg() {
  ;(kn += 1), kn === 1 && window.addEventListener('touchmove', Bl, { passive: !1 })
}
function jg() {
  ;(kn -= 1), kn || window.removeEventListener('touchmove', Bl, { passive: !1 })
}
function Bl(n) {
  Or && n.preventDefault()
}
class Ug {
  constructor() {
    ;(this.isVisible = !1),
      (this.sourceEl = null),
      (this.mirrorEl = null),
      (this.sourceElRect = null),
      (this.parentNode = document.body),
      (this.zIndex = 9999),
      (this.revertDuration = 0)
  }
  start(e, t, r) {
    ;(this.sourceEl = e),
      (this.sourceElRect = this.sourceEl.getBoundingClientRect()),
      (this.origScreenX = t - window.pageXOffset),
      (this.origScreenY = r - window.pageYOffset),
      (this.deltaX = 0),
      (this.deltaY = 0),
      this.updateElPosition()
  }
  handleMove(e, t) {
    ;(this.deltaX = e - window.pageXOffset - this.origScreenX),
      (this.deltaY = t - window.pageYOffset - this.origScreenY),
      this.updateElPosition()
  }
  setIsVisible(e) {
    e
      ? this.isVisible ||
        (this.mirrorEl && (this.mirrorEl.style.display = ''),
        (this.isVisible = e),
        this.updateElPosition())
      : this.isVisible &&
        (this.mirrorEl && (this.mirrorEl.style.display = 'none'), (this.isVisible = e))
  }
  stop(e, t) {
    let r = () => {
      this.cleanup(), t()
    }
    e && this.mirrorEl && this.isVisible && this.revertDuration && (this.deltaX || this.deltaY)
      ? this.doRevertAnimation(r, this.revertDuration)
      : setTimeout(r, 0)
  }
  doRevertAnimation(e, t) {
    let r = this.mirrorEl,
      i = this.sourceEl.getBoundingClientRect()
    ;(r.style.transition = 'top ' + t + 'ms,left ' + t + 'ms'),
      xt(r, { left: i.left, top: i.top }),
      Ka(r, () => {
        ;(r.style.transition = ''), e()
      })
  }
  cleanup() {
    this.mirrorEl && (jr(this.mirrorEl), (this.mirrorEl = null)), (this.sourceEl = null)
  }
  updateElPosition() {
    this.sourceEl &&
      this.isVisible &&
      xt(this.getMirrorEl(), {
        left: this.sourceElRect.left + this.deltaX,
        top: this.sourceElRect.top + this.deltaY
      })
  }
  getMirrorEl() {
    let e = this.sourceElRect,
      t = this.mirrorEl
    return (
      t ||
        ((t = this.mirrorEl = this.sourceEl.cloneNode(!0)),
        (t.style.userSelect = 'none'),
        (t.style.webkitUserSelect = 'none'),
        t.classList.add('fc-event-dragging'),
        xt(t, {
          position: 'fixed',
          zIndex: this.zIndex,
          visibility: '',
          boxSizing: 'border-box',
          width: e.right - e.left,
          height: e.bottom - e.top,
          right: 'auto',
          bottom: 'auto',
          margin: 0
        }),
        this.parentNode.appendChild(t)),
      t
    )
  }
}
class Ll extends oi {
  constructor(e, t) {
    super(),
      (this.handleScroll = () => {
        ;(this.scrollTop = this.scrollController.getScrollTop()),
          (this.scrollLeft = this.scrollController.getScrollLeft()),
          this.handleScrollChange()
      }),
      (this.scrollController = e),
      (this.doesListening = t),
      (this.scrollTop = this.origScrollTop = e.getScrollTop()),
      (this.scrollLeft = this.origScrollLeft = e.getScrollLeft()),
      (this.scrollWidth = e.getScrollWidth()),
      (this.scrollHeight = e.getScrollHeight()),
      (this.clientWidth = e.getClientWidth()),
      (this.clientHeight = e.getClientHeight()),
      (this.clientRect = this.computeClientRect()),
      this.doesListening && this.getEventTarget().addEventListener('scroll', this.handleScroll)
  }
  destroy() {
    this.doesListening && this.getEventTarget().removeEventListener('scroll', this.handleScroll)
  }
  getScrollTop() {
    return this.scrollTop
  }
  getScrollLeft() {
    return this.scrollLeft
  }
  setScrollTop(e) {
    this.scrollController.setScrollTop(e),
      this.doesListening ||
        ((this.scrollTop = Math.max(Math.min(e, this.getMaxScrollTop()), 0)),
        this.handleScrollChange())
  }
  setScrollLeft(e) {
    this.scrollController.setScrollLeft(e),
      this.doesListening ||
        ((this.scrollLeft = Math.max(Math.min(e, this.getMaxScrollLeft()), 0)),
        this.handleScrollChange())
  }
  getClientWidth() {
    return this.clientWidth
  }
  getClientHeight() {
    return this.clientHeight
  }
  getScrollWidth() {
    return this.scrollWidth
  }
  getScrollHeight() {
    return this.scrollHeight
  }
  handleScrollChange() {}
}
class Fl extends Ll {
  constructor(e, t) {
    super(new Du(e), t)
  }
  getEventTarget() {
    return this.scrollController.el
  }
  computeClientRect() {
    return Su(this.scrollController.el)
  }
}
class zg extends Ll {
  constructor(e) {
    super(new wu(), e)
  }
  getEventTarget() {
    return window
  }
  computeClientRect() {
    return {
      left: this.scrollLeft,
      right: this.scrollLeft + this.clientWidth,
      top: this.scrollTop,
      bottom: this.scrollTop + this.clientHeight
    }
  }
  handleScrollChange() {
    this.clientRect = this.computeClientRect()
  }
}
const xs = typeof performance == 'function' ? performance.now : Date.now
class Wg {
  constructor() {
    ;(this.isEnabled = !0),
      (this.scrollQuery = [window, '.fc-scroller']),
      (this.edgeThreshold = 50),
      (this.maxVelocity = 300),
      (this.pointerScreenX = null),
      (this.pointerScreenY = null),
      (this.isAnimating = !1),
      (this.scrollCaches = null),
      (this.everMovedUp = !1),
      (this.everMovedDown = !1),
      (this.everMovedLeft = !1),
      (this.everMovedRight = !1),
      (this.animate = () => {
        if (this.isAnimating) {
          let e = this.computeBestEdge(
            this.pointerScreenX + window.pageXOffset,
            this.pointerScreenY + window.pageYOffset
          )
          if (e) {
            let t = xs()
            this.handleSide(e, (t - this.msSinceRequest) / 1e3), this.requestAnimation(t)
          } else this.isAnimating = !1
        }
      })
  }
  start(e, t, r) {
    this.isEnabled &&
      ((this.scrollCaches = this.buildCaches(r)),
      (this.pointerScreenX = null),
      (this.pointerScreenY = null),
      (this.everMovedUp = !1),
      (this.everMovedDown = !1),
      (this.everMovedLeft = !1),
      (this.everMovedRight = !1),
      this.handleMove(e, t))
  }
  handleMove(e, t) {
    if (this.isEnabled) {
      let r = e - window.pageXOffset,
        i = t - window.pageYOffset,
        s = this.pointerScreenY === null ? 0 : i - this.pointerScreenY,
        o = this.pointerScreenX === null ? 0 : r - this.pointerScreenX
      s < 0 ? (this.everMovedUp = !0) : s > 0 && (this.everMovedDown = !0),
        o < 0 ? (this.everMovedLeft = !0) : o > 0 && (this.everMovedRight = !0),
        (this.pointerScreenX = r),
        (this.pointerScreenY = i),
        this.isAnimating || ((this.isAnimating = !0), this.requestAnimation(xs()))
    }
  }
  stop() {
    if (this.isEnabled) {
      this.isAnimating = !1
      for (let e of this.scrollCaches) e.destroy()
      this.scrollCaches = null
    }
  }
  requestAnimation(e) {
    ;(this.msSinceRequest = e), requestAnimationFrame(this.animate)
  }
  handleSide(e, t) {
    let { scrollCache: r } = e,
      { edgeThreshold: i } = this,
      s = i - e.distance,
      o = ((s * s) / (i * i)) * this.maxVelocity * t,
      l = 1
    switch (e.name) {
      case 'left':
        l = -1
      case 'right':
        r.setScrollLeft(r.getScrollLeft() + o * l)
        break
      case 'top':
        l = -1
      case 'bottom':
        r.setScrollTop(r.getScrollTop() + o * l)
        break
    }
  }
  computeBestEdge(e, t) {
    let { edgeThreshold: r } = this,
      i = null,
      s = this.scrollCaches || []
    for (let o of s) {
      let l = o.clientRect,
        a = e - l.left,
        c = l.right - e,
        d = t - l.top,
        u = l.bottom - t
      a >= 0 &&
        c >= 0 &&
        d >= 0 &&
        u >= 0 &&
        (d <= r &&
          this.everMovedUp &&
          o.canScrollUp() &&
          (!i || i.distance > d) &&
          (i = { scrollCache: o, name: 'top', distance: d }),
        u <= r &&
          this.everMovedDown &&
          o.canScrollDown() &&
          (!i || i.distance > u) &&
          (i = { scrollCache: o, name: 'bottom', distance: u }),
        a <= r &&
          this.everMovedLeft &&
          o.canScrollLeft() &&
          (!i || i.distance > a) &&
          (i = { scrollCache: o, name: 'left', distance: a }),
        c <= r &&
          this.everMovedRight &&
          o.canScrollRight() &&
          (!i || i.distance > c) &&
          (i = { scrollCache: o, name: 'right', distance: c }))
    }
    return i
  }
  buildCaches(e) {
    return this.queryScrollEls(e).map((t) => (t === window ? new zg(!1) : new Fl(t, !1)))
  }
  queryScrollEls(e) {
    let t = []
    for (let r of this.scrollQuery)
      typeof r == 'object'
        ? t.push(r)
        : t.push(...Array.prototype.slice.call(e.getRootNode().querySelectorAll(r)))
    return t
  }
}
class jt extends Ru {
  constructor(e, t) {
    super(e),
      (this.containerEl = e),
      (this.delay = null),
      (this.minDistance = 0),
      (this.touchScrollAllowed = !0),
      (this.mirrorNeedsRevert = !1),
      (this.isInteracting = !1),
      (this.isDragging = !1),
      (this.isDelayEnded = !1),
      (this.isDistanceSurpassed = !1),
      (this.delayTimeoutId = null),
      (this.onPointerDown = (i) => {
        this.isDragging ||
          ((this.isInteracting = !0),
          (this.isDelayEnded = !1),
          (this.isDistanceSurpassed = !1),
          ec(document.body),
          nc(document.body),
          i.isTouch || i.origEvent.preventDefault(),
          this.emitter.trigger('pointerdown', i),
          this.isInteracting &&
            !this.pointer.shouldIgnoreMove &&
            (this.mirror.setIsVisible(!1),
            this.mirror.start(i.subjectEl, i.pageX, i.pageY),
            this.startDelay(i),
            this.minDistance || this.handleDistanceSurpassed(i)))
      }),
      (this.onPointerMove = (i) => {
        if (this.isInteracting) {
          if ((this.emitter.trigger('pointermove', i), !this.isDistanceSurpassed)) {
            let s = this.minDistance,
              o,
              { deltaX: l, deltaY: a } = i
            ;(o = l * l + a * a), o >= s * s && this.handleDistanceSurpassed(i)
          }
          this.isDragging &&
            (i.origEvent.type !== 'scroll' &&
              (this.mirror.handleMove(i.pageX, i.pageY),
              this.autoScroller.handleMove(i.pageX, i.pageY)),
            this.emitter.trigger('dragmove', i))
        }
      }),
      (this.onPointerUp = (i) => {
        this.isInteracting &&
          ((this.isInteracting = !1),
          tc(document.body),
          rc(document.body),
          this.emitter.trigger('pointerup', i),
          this.isDragging && (this.autoScroller.stop(), this.tryStopDrag(i)),
          this.delayTimeoutId && (clearTimeout(this.delayTimeoutId), (this.delayTimeoutId = null)))
      })
    let r = (this.pointer = new Hl(e))
    r.emitter.on('pointerdown', this.onPointerDown),
      r.emitter.on('pointermove', this.onPointerMove),
      r.emitter.on('pointerup', this.onPointerUp),
      t && (r.selector = t),
      (this.mirror = new Ug()),
      (this.autoScroller = new Wg())
  }
  destroy() {
    this.pointer.destroy(), this.onPointerUp({})
  }
  startDelay(e) {
    typeof this.delay == 'number'
      ? (this.delayTimeoutId = setTimeout(() => {
          ;(this.delayTimeoutId = null), this.handleDelayEnd(e)
        }, this.delay))
      : this.handleDelayEnd(e)
  }
  handleDelayEnd(e) {
    ;(this.isDelayEnded = !0), this.tryStartDrag(e)
  }
  handleDistanceSurpassed(e) {
    ;(this.isDistanceSurpassed = !0), this.tryStartDrag(e)
  }
  tryStartDrag(e) {
    this.isDelayEnded &&
      this.isDistanceSurpassed &&
      (!this.pointer.wasTouchScroll || this.touchScrollAllowed) &&
      ((this.isDragging = !0),
      (this.mirrorNeedsRevert = !1),
      this.autoScroller.start(e.pageX, e.pageY, this.containerEl),
      this.emitter.trigger('dragstart', e),
      this.touchScrollAllowed === !1 && this.pointer.cancelTouchScroll())
  }
  tryStopDrag(e) {
    this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, e))
  }
  stopDrag(e) {
    ;(this.isDragging = !1), this.emitter.trigger('dragend', e)
  }
  setIgnoreMove(e) {
    this.pointer.shouldIgnoreMove = e
  }
  setMirrorIsVisible(e) {
    this.mirror.setIsVisible(e)
  }
  setMirrorNeedsRevert(e) {
    this.mirrorNeedsRevert = e
  }
  setAutoScrollEnabled(e) {
    this.autoScroller.isEnabled = e
  }
}
class Vg {
  constructor(e) {
    ;(this.origRect = si(e)), (this.scrollCaches = Zo(e).map((t) => new Fl(t, !0)))
  }
  destroy() {
    for (let e of this.scrollCaches) e.destroy()
  }
  computeLeft() {
    let e = this.origRect.left
    for (let t of this.scrollCaches) e += t.origScrollLeft - t.getScrollLeft()
    return e
  }
  computeTop() {
    let e = this.origRect.top
    for (let t of this.scrollCaches) e += t.origScrollTop - t.getScrollTop()
    return e
  }
  isWithinClipping(e, t) {
    let r = { left: e, top: t }
    for (let i of this.scrollCaches) if (!Gg(i.getEventTarget()) && !au(r, i.clientRect)) return !1
    return !0
  }
}
function Gg(n) {
  let e = n.tagName
  return e === 'HTML' || e === 'BODY'
}
class jn {
  constructor(e, t) {
    ;(this.useSubjectCenter = !1),
      (this.requireInitial = !0),
      (this.initialHit = null),
      (this.movingHit = null),
      (this.finalHit = null),
      (this.handlePointerDown = (r) => {
        let { dragging: i } = this
        ;(this.initialHit = null),
          (this.movingHit = null),
          (this.finalHit = null),
          this.prepareHits(),
          this.processFirstCoord(r),
          this.initialHit || !this.requireInitial
            ? (i.setIgnoreMove(!1), this.emitter.trigger('pointerdown', r))
            : i.setIgnoreMove(!0)
      }),
      (this.handleDragStart = (r) => {
        this.emitter.trigger('dragstart', r), this.handleMove(r, !0)
      }),
      (this.handleDragMove = (r) => {
        this.emitter.trigger('dragmove', r), this.handleMove(r)
      }),
      (this.handlePointerUp = (r) => {
        this.releaseHits(), this.emitter.trigger('pointerup', r)
      }),
      (this.handleDragEnd = (r) => {
        this.movingHit && this.emitter.trigger('hitupdate', null, !0, r),
          (this.finalHit = this.movingHit),
          (this.movingHit = null),
          this.emitter.trigger('dragend', r)
      }),
      (this.droppableStore = t),
      e.emitter.on('pointerdown', this.handlePointerDown),
      e.emitter.on('dragstart', this.handleDragStart),
      e.emitter.on('dragmove', this.handleDragMove),
      e.emitter.on('pointerup', this.handlePointerUp),
      e.emitter.on('dragend', this.handleDragEnd),
      (this.dragging = e),
      (this.emitter = new Fn())
  }
  processFirstCoord(e) {
    let t = { left: e.pageX, top: e.pageY },
      r = t,
      i = e.subjectEl,
      s
    i instanceof HTMLElement && ((s = si(i)), (r = cu(r, s)))
    let o = (this.initialHit = this.queryHitForOffset(r.left, r.top))
    if (o) {
      if (this.useSubjectCenter && s) {
        let l = Yo(s, o.rect)
        l && (r = du(l))
      }
      this.coordAdjust = uu(r, t)
    } else this.coordAdjust = { left: 0, top: 0 }
  }
  handleMove(e, t) {
    let r = this.queryHitForOffset(e.pageX + this.coordAdjust.left, e.pageY + this.coordAdjust.top)
    ;(t || !Un(this.movingHit, r)) &&
      ((this.movingHit = r), this.emitter.trigger('hitupdate', r, !1, e))
  }
  prepareHits() {
    this.offsetTrackers = Te(this.droppableStore, (e) => (e.component.prepareHits(), new Vg(e.el)))
  }
  releaseHits() {
    let { offsetTrackers: e } = this
    for (let t in e) e[t].destroy()
    this.offsetTrackers = {}
  }
  queryHitForOffset(e, t) {
    let { droppableStore: r, offsetTrackers: i } = this,
      s = null
    for (let o in r) {
      let l = r[o].component,
        a = i[o]
      if (a && a.isWithinClipping(e, t)) {
        let c = a.computeLeft(),
          d = a.computeTop(),
          u = e - c,
          h = t - d,
          { origRect: f } = a,
          p = f.right - f.left,
          m = f.bottom - f.top
        if (u >= 0 && u < p && h >= 0 && h < m) {
          let b = l.queryHit(u, h, p, m)
          b &&
            Bn(b.dateProfile.activeRange, b.dateSpan.range) &&
            (!s || b.layer > s.layer) &&
            ((b.componentId = o),
            (b.context = l.context),
            (b.rect.left += c),
            (b.rect.right += c),
            (b.rect.top += d),
            (b.rect.bottom += d),
            (s = b))
        }
      }
    }
    return s
  }
}
function Un(n, e) {
  return !n && !e ? !0 : !!n != !!e ? !1 : Jd(n.dateSpan, e.dateSpan)
}
function jl(n, e) {
  let t = {}
  for (let r of e.pluginHooks.datePointTransforms) Object.assign(t, r(n, e))
  return Object.assign(t, Yg(n, e.dateEnv)), t
}
function Yg(n, e) {
  return {
    date: e.toDate(n.range.start),
    dateStr: e.formatIso(n.range.start, { omitTime: n.allDay }),
    allDay: n.allDay
  }
}
class qg extends bt {
  constructor(e) {
    super(e),
      (this.handlePointerDown = (r) => {
        let { dragging: i } = this,
          s = r.origEvent.target
        i.setIgnoreMove(!this.component.isValidDateDownEl(s))
      }),
      (this.handleDragEnd = (r) => {
        let { component: i } = this,
          { pointer: s } = this.dragging
        if (!s.wasTouchScroll) {
          let { initialHit: o, finalHit: l } = this.hitDragging
          if (o && l && Un(o, l)) {
            let { context: a } = i,
              c = Object.assign(Object.assign({}, jl(o.dateSpan, a)), {
                dayEl: o.dayEl,
                jsEvent: r.origEvent,
                view: a.viewApi || a.calendarApi.view
              })
            a.emitter.trigger('dateClick', c)
          }
        }
      }),
      (this.dragging = new jt(e.el)),
      (this.dragging.autoScroller.isEnabled = !1)
    let t = (this.hitDragging = new jn(this.dragging, ri(e)))
    t.emitter.on('pointerdown', this.handlePointerDown), t.emitter.on('dragend', this.handleDragEnd)
  }
  destroy() {
    this.dragging.destroy()
  }
}
class Qg extends bt {
  constructor(e) {
    super(e),
      (this.dragSelection = null),
      (this.handlePointerDown = (o) => {
        let { component: l, dragging: a } = this,
          { options: c } = l.context,
          d = c.selectable && l.isValidDateDownEl(o.origEvent.target)
        a.setIgnoreMove(!d), (a.delay = o.isTouch ? Zg(l) : null)
      }),
      (this.handleDragStart = (o) => {
        this.component.context.calendarApi.unselect(o)
      }),
      (this.handleHitUpdate = (o, l) => {
        let { context: a } = this.component,
          c = null,
          d = !1
        if (o) {
          let u = this.hitDragging.initialHit
          ;(o.componentId === u.componentId &&
            this.isHitComboAllowed &&
            !this.isHitComboAllowed(u, o)) ||
            (c = Xg(u, o, a.pluginHooks.dateSelectionTransformers)),
            (!c || !Ou(c, o.dateProfile, a)) && ((d = !0), (c = null))
        }
        c
          ? a.dispatch({ type: 'SELECT_DATES', selection: c })
          : l || a.dispatch({ type: 'UNSELECT_DATES' }),
          d ? Ur() : zr(),
          l || (this.dragSelection = c)
      }),
      (this.handlePointerUp = (o) => {
        this.dragSelection &&
          (Ho(this.dragSelection, o, this.component.context), (this.dragSelection = null))
      })
    let { component: t } = e,
      { options: r } = t.context,
      i = (this.dragging = new jt(e.el))
    ;(i.touchScrollAllowed = !1),
      (i.minDistance = r.selectMinDistance || 0),
      (i.autoScroller.isEnabled = r.dragScroll)
    let s = (this.hitDragging = new jn(this.dragging, ri(e)))
    s.emitter.on('pointerdown', this.handlePointerDown),
      s.emitter.on('dragstart', this.handleDragStart),
      s.emitter.on('hitupdate', this.handleHitUpdate),
      s.emitter.on('pointerup', this.handlePointerUp)
  }
  destroy() {
    this.dragging.destroy()
  }
}
function Zg(n) {
  let { options: e } = n.context,
    t = e.selectLongPressDelay
  return t == null && (t = e.longPressDelay), t
}
function Xg(n, e, t) {
  let r = n.dateSpan,
    i = e.dateSpan,
    s = [r.range.start, r.range.end, i.range.start, i.range.end]
  s.sort(ac)
  let o = {}
  for (let l of t) {
    let a = l(n, e)
    if (a === !1) return null
    a && Object.assign(o, a)
  }
  return (o.range = { start: s[0], end: s[3] }), (o.allDay = r.allDay), o
}
class Ut extends bt {
  constructor(e) {
    super(e),
      (this.subjectEl = null),
      (this.subjectSeg = null),
      (this.isDragging = !1),
      (this.eventRange = null),
      (this.relevantEvents = null),
      (this.receivingContext = null),
      (this.validMutation = null),
      (this.mutatedRelevantEvents = null),
      (this.handlePointerDown = (o) => {
        let l = o.origEvent.target,
          { component: a, dragging: c } = this,
          { mirror: d } = c,
          { options: u } = a.context,
          h = a.context
        this.subjectEl = o.subjectEl
        let f = (this.subjectSeg = mt(o.subjectEl)),
          m = (this.eventRange = f.eventRange).instance.instanceId
        ;(this.relevantEvents = Kr(h.getCurrentData().eventStore, m)),
          (c.minDistance = o.isTouch ? 0 : u.eventDragMinDistance),
          (c.delay = o.isTouch && m !== a.props.eventSelection ? Jg(a) : null),
          u.fixedMirrorParent ? (d.parentNode = u.fixedMirrorParent) : (d.parentNode = X(l, '.fc')),
          (d.revertDuration = u.dragRevertDuration)
        let b = a.isValidSegDownEl(l) && !X(l, '.fc-event-resizer')
        c.setIgnoreMove(!b),
          (this.isDragging = b && o.subjectEl.classList.contains('fc-event-draggable'))
      }),
      (this.handleDragStart = (o) => {
        let l = this.component.context,
          a = this.eventRange,
          c = a.instance.instanceId
        o.isTouch
          ? c !== this.component.props.eventSelection &&
            l.dispatch({ type: 'SELECT_EVENT', eventInstanceId: c })
          : l.dispatch({ type: 'UNSELECT_EVENT' }),
          this.isDragging &&
            (l.calendarApi.unselect(o),
            l.emitter.trigger('eventDragStart', {
              el: this.subjectEl,
              event: new z(l, a.def, a.instance),
              jsEvent: o.origEvent,
              view: l.viewApi
            }))
      }),
      (this.handleHitUpdate = (o, l) => {
        if (!this.isDragging) return
        let a = this.relevantEvents,
          c = this.hitDragging.initialHit,
          d = this.component.context,
          u = null,
          h = null,
          f = null,
          p = !1,
          m = { affectedEvents: a, mutatedEvents: ae(), isEvent: !0 }
        if (o) {
          u = o.context
          let b = u.options
          d === u || (b.editable && b.droppable)
            ? ((h = $g(c, o, u.getCurrentData().pluginHooks.eventDragMutationMassagers)),
              h &&
                ((f = ni(a, u.getCurrentData().eventUiBases, h, u)),
                (m.mutatedEvents = f),
                rl(m, o.dateProfile, u) ||
                  ((p = !0), (h = null), (f = null), (m.mutatedEvents = ae()))))
            : (u = null)
        }
        this.displayDrag(u, m),
          p ? Ur() : zr(),
          l ||
            (d === u && Un(c, o) && (h = null),
            this.dragging.setMirrorNeedsRevert(!h),
            this.dragging.setMirrorIsVisible(
              !o || !this.subjectEl.getRootNode().querySelector('.fc-event-mirror')
            ),
            (this.receivingContext = u),
            (this.validMutation = h),
            (this.mutatedRelevantEvents = f))
      }),
      (this.handlePointerUp = () => {
        this.isDragging || this.cleanup()
      }),
      (this.handleDragEnd = (o) => {
        if (this.isDragging) {
          let l = this.component.context,
            a = l.viewApi,
            { receivingContext: c, validMutation: d } = this,
            u = this.eventRange.def,
            h = this.eventRange.instance,
            f = new z(l, u, h),
            p = this.relevantEvents,
            m = this.mutatedRelevantEvents,
            { finalHit: b } = this.hitDragging
          if (
            (this.clearDrag(),
            l.emitter.trigger('eventDragStop', {
              el: this.subjectEl,
              event: f,
              jsEvent: o.origEvent,
              view: a
            }),
            d)
          ) {
            if (c === l) {
              let y = new z(l, m.defs[u.defId], h ? m.instances[h.instanceId] : null)
              l.dispatch({ type: 'MERGE_EVENTS', eventStore: m })
              let E = {
                  oldEvent: f,
                  event: y,
                  relatedEvents: Xe(m, l, h),
                  revert() {
                    l.dispatch({ type: 'MERGE_EVENTS', eventStore: p })
                  }
                },
                w = {}
              for (let D of l.getCurrentData().pluginHooks.eventDropTransformers)
                Object.assign(w, D(d, l))
              l.emitter.trigger(
                'eventDrop',
                Object.assign(Object.assign(Object.assign({}, E), w), {
                  el: o.subjectEl,
                  delta: d.datesDelta,
                  jsEvent: o.origEvent,
                  view: a
                })
              ),
                l.emitter.trigger('eventChange', E)
            } else if (c) {
              let y = {
                event: f,
                relatedEvents: Xe(p, l, h),
                revert() {
                  l.dispatch({ type: 'MERGE_EVENTS', eventStore: p })
                }
              }
              l.emitter.trigger(
                'eventLeave',
                Object.assign(Object.assign({}, y), { draggedEl: o.subjectEl, view: a })
              ),
                l.dispatch({ type: 'REMOVE_EVENTS', eventStore: p }),
                l.emitter.trigger('eventRemove', y)
              let E = m.defs[u.defId],
                w = m.instances[h.instanceId],
                D = new z(c, E, w)
              c.dispatch({ type: 'MERGE_EVENTS', eventStore: m })
              let P = {
                event: D,
                relatedEvents: Xe(m, c, w),
                revert() {
                  c.dispatch({ type: 'REMOVE_EVENTS', eventStore: m })
                }
              }
              c.emitter.trigger('eventAdd', P),
                o.isTouch && c.dispatch({ type: 'SELECT_EVENT', eventInstanceId: h.instanceId }),
                c.emitter.trigger(
                  'drop',
                  Object.assign(Object.assign({}, jl(b.dateSpan, c)), {
                    draggedEl: o.subjectEl,
                    jsEvent: o.origEvent,
                    view: b.context.viewApi
                  })
                ),
                c.emitter.trigger(
                  'eventReceive',
                  Object.assign(Object.assign({}, P), {
                    draggedEl: o.subjectEl,
                    view: b.context.viewApi
                  })
                )
            }
          } else l.emitter.trigger('_noEventDrop')
        }
        this.cleanup()
      })
    let { component: t } = this,
      { options: r } = t.context,
      i = (this.dragging = new jt(e.el))
    ;(i.pointer.selector = Ut.SELECTOR),
      (i.touchScrollAllowed = !1),
      (i.autoScroller.isEnabled = r.dragScroll)
    let s = (this.hitDragging = new jn(this.dragging, Rr))
    ;(s.useSubjectCenter = e.useEventCenter),
      s.emitter.on('pointerdown', this.handlePointerDown),
      s.emitter.on('dragstart', this.handleDragStart),
      s.emitter.on('hitupdate', this.handleHitUpdate),
      s.emitter.on('pointerup', this.handlePointerUp),
      s.emitter.on('dragend', this.handleDragEnd)
  }
  destroy() {
    this.dragging.destroy()
  }
  displayDrag(e, t) {
    let r = this.component.context,
      i = this.receivingContext
    i &&
      i !== e &&
      (i === r
        ? i.dispatch({
            type: 'SET_EVENT_DRAG',
            state: { affectedEvents: t.affectedEvents, mutatedEvents: ae(), isEvent: !0 }
          })
        : i.dispatch({ type: 'UNSET_EVENT_DRAG' })),
      e && e.dispatch({ type: 'SET_EVENT_DRAG', state: t })
  }
  clearDrag() {
    let e = this.component.context,
      { receivingContext: t } = this
    t && t.dispatch({ type: 'UNSET_EVENT_DRAG' }),
      e !== t && e.dispatch({ type: 'UNSET_EVENT_DRAG' })
  }
  cleanup() {
    ;(this.subjectSeg = null),
      (this.isDragging = !1),
      (this.eventRange = null),
      (this.relevantEvents = null),
      (this.receivingContext = null),
      (this.validMutation = null),
      (this.mutatedRelevantEvents = null)
  }
}
Ut.SELECTOR = '.fc-event-draggable, .fc-event-resizable'
function $g(n, e, t) {
  let r = n.dateSpan,
    i = e.dateSpan,
    s = r.range.start,
    o = i.range.start,
    l = {}
  r.allDay !== i.allDay &&
    ((l.allDay = i.allDay),
    (l.hasEnd = e.context.options.allDayMaintainDuration),
    i.allDay && (s = F(s)))
  let a = ct(s, o, n.context.dateEnv, n.componentId === e.componentId ? n.largeUnit : null)
  a.milliseconds && (l.allDay = !1)
  let c = { datesDelta: a, standardProps: l }
  for (let d of t) d(c, n, e)
  return c
}
function Jg(n) {
  let { options: e } = n.context,
    t = e.eventLongPressDelay
  return t == null && (t = e.longPressDelay), t
}
class Kg extends bt {
  constructor(e) {
    super(e),
      (this.draggingSegEl = null),
      (this.draggingSeg = null),
      (this.eventRange = null),
      (this.relevantEvents = null),
      (this.validMutation = null),
      (this.mutatedRelevantEvents = null),
      (this.handlePointerDown = (s) => {
        let { component: o } = this,
          l = this.querySegEl(s),
          a = mt(l),
          c = (this.eventRange = a.eventRange)
        ;(this.dragging.minDistance = o.context.options.eventDragMinDistance),
          this.dragging.setIgnoreMove(
            !this.component.isValidSegDownEl(s.origEvent.target) ||
              (s.isTouch && this.component.props.eventSelection !== c.instance.instanceId)
          )
      }),
      (this.handleDragStart = (s) => {
        let { context: o } = this.component,
          l = this.eventRange
        this.relevantEvents = Kr(o.getCurrentData().eventStore, this.eventRange.instance.instanceId)
        let a = this.querySegEl(s)
        ;(this.draggingSegEl = a),
          (this.draggingSeg = mt(a)),
          o.calendarApi.unselect(),
          o.emitter.trigger('eventResizeStart', {
            el: a,
            event: new z(o, l.def, l.instance),
            jsEvent: s.origEvent,
            view: o.viewApi
          })
      }),
      (this.handleHitUpdate = (s, o, l) => {
        let { context: a } = this.component,
          c = this.relevantEvents,
          d = this.hitDragging.initialHit,
          u = this.eventRange.instance,
          h = null,
          f = null,
          p = !1,
          m = { affectedEvents: c, mutatedEvents: ae(), isEvent: !0 }
        s &&
          ((s.componentId === d.componentId &&
            this.isHitComboAllowed &&
            !this.isHitComboAllowed(d, s)) ||
            (h = ep(d, s, l.subjectEl.classList.contains('fc-event-resizer-start'), u.range))),
          h &&
            ((f = ni(c, a.getCurrentData().eventUiBases, h, a)),
            (m.mutatedEvents = f),
            rl(m, s.dateProfile, a) ||
              ((p = !0), (h = null), (f = null), (m.mutatedEvents = null))),
          f
            ? a.dispatch({ type: 'SET_EVENT_RESIZE', state: m })
            : a.dispatch({ type: 'UNSET_EVENT_RESIZE' }),
          p ? Ur() : zr(),
          o ||
            (h && Un(d, s) && (h = null),
            (this.validMutation = h),
            (this.mutatedRelevantEvents = f))
      }),
      (this.handleDragEnd = (s) => {
        let { context: o } = this.component,
          l = this.eventRange.def,
          a = this.eventRange.instance,
          c = new z(o, l, a),
          d = this.relevantEvents,
          u = this.mutatedRelevantEvents
        if (
          (o.emitter.trigger('eventResizeStop', {
            el: this.draggingSegEl,
            event: c,
            jsEvent: s.origEvent,
            view: o.viewApi
          }),
          this.validMutation)
        ) {
          let h = new z(o, u.defs[l.defId], a ? u.instances[a.instanceId] : null)
          o.dispatch({ type: 'MERGE_EVENTS', eventStore: u })
          let f = {
            oldEvent: c,
            event: h,
            relatedEvents: Xe(u, o, a),
            revert() {
              o.dispatch({ type: 'MERGE_EVENTS', eventStore: d })
            }
          }
          o.emitter.trigger(
            'eventResize',
            Object.assign(Object.assign({}, f), {
              el: this.draggingSegEl,
              startDelta: this.validMutation.startDelta || M(0),
              endDelta: this.validMutation.endDelta || M(0),
              jsEvent: s.origEvent,
              view: o.viewApi
            })
          ),
            o.emitter.trigger('eventChange', f)
        } else o.emitter.trigger('_noEventResize')
        ;(this.draggingSeg = null), (this.relevantEvents = null), (this.validMutation = null)
      })
    let { component: t } = e,
      r = (this.dragging = new jt(e.el))
    ;(r.pointer.selector = '.fc-event-resizer'),
      (r.touchScrollAllowed = !1),
      (r.autoScroller.isEnabled = t.context.options.dragScroll)
    let i = (this.hitDragging = new jn(this.dragging, ri(e)))
    i.emitter.on('pointerdown', this.handlePointerDown),
      i.emitter.on('dragstart', this.handleDragStart),
      i.emitter.on('hitupdate', this.handleHitUpdate),
      i.emitter.on('dragend', this.handleDragEnd)
  }
  destroy() {
    this.dragging.destroy()
  }
  querySegEl(e) {
    return X(e.subjectEl, '.fc-event')
  }
}
function ep(n, e, t, r) {
  let i = n.context.dateEnv,
    s = n.dateSpan.range.start,
    o = e.dateSpan.range.start,
    l = ct(s, o, i, n.largeUnit)
  if (t) {
    if (i.add(r.start, l) < r.end) return { startDelta: l }
  } else if (i.add(r.end, l) > r.start) return { endDelta: l }
  return null
}
class tp {
  constructor(e) {
    ;(this.context = e),
      (this.isRecentPointerDateSelect = !1),
      (this.matchesCancel = !1),
      (this.matchesEvent = !1),
      (this.onSelect = (r) => {
        r.jsEvent && (this.isRecentPointerDateSelect = !0)
      }),
      (this.onDocumentPointerDown = (r) => {
        let i = this.context.options.unselectCancel,
          s = ho(r.origEvent)
        ;(this.matchesCancel = !!X(s, i)), (this.matchesEvent = !!X(s, Ut.SELECTOR))
      }),
      (this.onDocumentPointerUp = (r) => {
        let { context: i } = this,
          { documentPointer: s } = this,
          o = i.getCurrentData()
        if (!s.wasTouchScroll) {
          if (o.dateSelection && !this.isRecentPointerDateSelect) {
            let l = i.options.unselectAuto
            l && (!l || !this.matchesCancel) && i.calendarApi.unselect(r)
          }
          o.eventSelection && !this.matchesEvent && i.dispatch({ type: 'UNSELECT_EVENT' })
        }
        this.isRecentPointerDateSelect = !1
      })
    let t = (this.documentPointer = new Hl(document))
    ;(t.shouldIgnoreMove = !0),
      (t.shouldWatchScroll = !1),
      t.emitter.on('pointerdown', this.onDocumentPointerDown),
      t.emitter.on('pointerup', this.onDocumentPointerUp),
      e.emitter.on('select', this.onSelect)
  }
  destroy() {
    this.context.emitter.off('select', this.onSelect), this.documentPointer.destroy()
  }
}
const np = { fixedMirrorParent: v },
  rp = {
    dateClick: v,
    eventDragStart: v,
    eventDragStop: v,
    eventDrop: v,
    eventResizeStart: v,
    eventResizeStop: v,
    eventResize: v,
    drop: v,
    eventReceive: v,
    eventLeave: v
  }
ai.dataAttrPrefix = ''
var ip = ke({
  name: '@fullcalendar/interaction',
  componentInteractions: [qg, Qg, Ut, Kg],
  calendarInteractions: [tp],
  elementDraggingImpl: jt,
  optionRefiners: np,
  listenerRefiners: rp
})
const { Search: sp } = Yl,
  Ul = (n) =>
    [...n.classList].includes('fc-daygrid-day')
      ? new Date(n.getAttribute('data-date'))
      : Ul(n.parentElement),
  fp = () => {
    const [n, e] = se.useState([]),
      [t, r] = se.useState({ color: '#007bff', name: 'health', describe: '正常' }),
      i = se.useRef(null),
      [s, o] = Vl(Gl),
      [l, a] = se.useState({}),
      [c, d] = se.useState(),
      [u, h] = se.useState(),
      f = se.useRef(null),
      p = (A) => {
        const O = A.originalEvent
        h(O)
      },
      m = (A) => {
        const O = A.item,
          L = { value: O.innerHTML, color: O.style.backgroundColor }
        a(L)
      }
    se.useEffect(() => {
      u && b(u)
    }, [u]),
      se.useEffect(() => {
        const A = document.getElementById('sortable')
        new T(A, {
          animation: 150,
          forceFallback: !0,
          fallbackClass: 'dragged-item',
          onEnd: p,
          onStart: m
        }),
          w(t)
      }, [])
    const b = (A) => {
        try {
          A.preventDefault()
          const L = {
            id: new Date().toISOString(),
            title: l.value,
            backgroundColor: l.color,
            borderColor: l.color
          }
          c
            ? ((L.start = c.startStr), (L.end = c.endStr), (L.allDay = c.allDay), d(null))
            : ((L.start = Ul(A.target)), (L.allDay = !0)),
            l && o([...s, L])
        } catch (O) {
          console.log(O)
        }
      },
      [y] = se.useState([
        { color: '#007bff', name: 'health', describe: '正常' },
        { color: '#ffc107', name: 'same', describe: '一般' },
        { color: '#dc3545', name: 'warn', describe: '警告' },
        { color: '#6c757d', name: 'ordinary', describe: '普通' }
      ]),
      E = (A) => {
        A && e([...n, { ...t, value: A }])
      },
      w = (A) => {
        var ne, pe, de, me, Oe, fe
        r(A)
        const O =
          (me =
            (de =
              (pe = (ne = i == null ? void 0 : i.current) == null ? void 0 : ne.input) == null
                ? void 0
                : pe.parentNode) == null
              ? void 0
              : de.nextSibling) == null
            ? void 0
            : me.firstChild
        O.style.backgroundColor = A.color
        const L =
          (fe = (Oe = i == null ? void 0 : i.current) == null ? void 0 : Oe.input) == null
            ? void 0
            : fe.parentNode
        L.style.borderColor = A.color
      },
      D = (A) => {
        d(A), A.view.calendar
      },
      P = (A) =>
        Wt('div', {
          style: {
            backgroundColor: A.backgroundColor,
            width: '100%',
            borderRadius: '3px',
            color: '#fff'
          },
          children: [ve('b', { children: A.timeText }), ' ', ve('i', { children: A.event.title })]
        }),
      x = (A) => {},
      k = (A) => {
        const O = s.map((L) => (L.id === A.event.id && (L.start = A.event.start), L))
        o(O)
      }
    return Wt(ql, {
      title: '工作日历',
      source: '工作日历',
      className: 'calendar',
      children: [
        Wt('div', {
          className: 'eventList',
          style: { position: 'sticky', top: '10px' },
          children: [
            ve(Zl, {
              title: '任务清单',
              style: { width: 300 },
              children: ve('div', {
                id: 'sortable',
                children: n.map((A) =>
                  ve(
                    'p',
                    { className: 'task', style: { backgroundColor: A.color }, children: A.value },
                    A.color
                  )
                )
              })
            }),
            Wt(Ql, {
              title: '添加事件',
              bordered: !1,
              style: { width: 300 },
              children: [
                ve('div', {
                  className: 'icon-block',
                  children: y.map((A) =>
                    ve(
                      'p',
                      {
                        onClick: () => w(A),
                        className: 'son',
                        style: { backgroundColor: A.color }
                      },
                      A.name
                    )
                  )
                }),
                ve(sp, {
                  ref: i,
                  className: t.name,
                  placeholder: '添加事件',
                  allowClear: !0,
                  enterButton: '添加',
                  onSearch: E
                })
              ]
            })
          ]
        }),
        ve('div', {
          id: 'sortable2',
          className: 'app-card demo-app-main',
          children: ve(Dl, {
            ref: f,
            plugins: [$h, Hg, ip],
            headerToolbar: {
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            initialView: 'dayGridMonth',
            editable: !0,
            selectable: !0,
            selectMirror: !0,
            dayMaxEvents: !0,
            locale: Aa,
            events: s,
            eventContent: P,
            eventClick: x,
            select: D,
            eventChange: k
          })
        })
      ]
    })
  }
export { fp as default }
//# sourceMappingURL=index-c97f9d97.js.map

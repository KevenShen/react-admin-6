import {
  aE as Cn,
  a2 as Xn,
  r as a,
  G as dt,
  h as pe,
  ab as Un,
  ac as Gn,
  ad as Jn,
  ae as Yn,
  R as te,
  e as G,
  f as X,
  O as W,
  M as $t,
  m as Yt,
  n as qt,
  aS as Wr,
  p as wt,
  aT as Vr,
  aU as yn,
  aV as Xr,
  aK as Ur,
  aW as qn,
  l as ot,
  aq as Gr,
  aX as Jr,
  aY as Yr,
  w as qr,
  a5 as Qn,
  v as Zn,
  am as $n,
  x as wn,
  aD as er,
  _ as ge,
  N as tr,
  aZ as ct,
  a as Qr,
  a_ as En,
  a$ as nr,
  b0 as rr,
  i as ut,
  g as at,
  k as fe,
  aF as Qt,
  b1 as In,
  t as Zr,
  b2 as ht,
  b3 as Rn,
  b4 as eo,
  b5 as Nn,
  af as Pn,
  aj as to,
  I as no,
  b6 as ro,
  K as or,
  Y as On,
  b7 as ar,
  b8 as Tn,
  b9 as St,
  ba as oo,
  bb as ao,
  L as ir,
  u as io,
  bc as lo,
  a4 as so,
  Q as co,
  ao as it,
  an as uo,
  S as fo,
  bd as po,
  ar as mo
} from './index-7ec5c925.js'
import { T as go, c as ho, a as _t, b as vo, d as bo } from './index-fa08fb69.js'
const xo = (e) => ({
  color: e.colorLink,
  textDecoration: 'none',
  outline: 'none',
  cursor: 'pointer',
  transition: `color ${e.motionDurationSlow}`,
  '&:focus, &:hover': { color: e.colorLinkHover },
  '&:active': { color: e.colorLinkActive }
})
function Ht(e) {
  return e != null && e === e.window
}
function So(e, t) {
  var o, r
  if (typeof window > 'u') return 0
  const n = t ? 'scrollTop' : 'scrollLeft'
  let i = 0
  return (
    Ht(e)
      ? (i = e[t ? 'pageYOffset' : 'pageXOffset'])
      : e instanceof Document
      ? (i = e.documentElement[n])
      : (e instanceof HTMLElement || e) && (i = e[n]),
    e &&
      !Ht(e) &&
      typeof i != 'number' &&
      (i =
        (r = ((o = e.ownerDocument) !== null && o !== void 0 ? o : e).documentElement) === null ||
        r === void 0
          ? void 0
          : r[n]),
    i
  )
}
function Co(e, t, o, r) {
  const n = o - t
  return (e /= r / 2), e < 1 ? (n / 2) * e * e * e + t : (n / 2) * ((e -= 2) * e * e + 2) + t
}
function yo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
  const { getContainer: o = () => window, callback: r, duration: n = 450 } = t,
    i = o(),
    l = So(i, !0),
    s = Date.now(),
    d = () => {
      const f = Date.now() - s,
        u = Co(f > n ? n : f, l, e, n)
      Ht(i)
        ? i.scrollTo(window.pageXOffset, u)
        : i instanceof Document || i.constructor.name === 'HTMLDocument'
        ? (i.documentElement.scrollTop = u)
        : (i.scrollTop = u),
        f < n ? Cn(d) : typeof r == 'function' && r()
    }
  Cn(d)
}
var lr = function (t) {
    if (Xn() && window.document.documentElement) {
      var o = Array.isArray(t) ? t : [t],
        r = window.document.documentElement
      return o.some(function (n) {
        return n in r.style
      })
    }
    return !1
  },
  $o = function (t, o) {
    if (!lr(t)) return !1
    var r = document.createElement('div'),
      n = r.style[t]
    return (r.style[t] = o), r.style[t] !== n
  }
function wo(e, t) {
  return !Array.isArray(e) && t !== void 0 ? $o(e, t) : lr(e)
}
function Eo(e, t, o) {
  var r = o || {},
    n = r.noTrailing,
    i = n === void 0 ? !1 : n,
    l = r.noLeading,
    s = l === void 0 ? !1 : l,
    d = r.debounceMode,
    c = d === void 0 ? void 0 : d,
    f,
    u = !1,
    p = 0
  function m() {
    f && clearTimeout(f)
  }
  function g(v) {
    var b = v || {},
      x = b.upcomingOnly,
      E = x === void 0 ? !1 : x
    m(), (u = !E)
  }
  function h() {
    for (var v = arguments.length, b = new Array(v), x = 0; x < v; x++) b[x] = arguments[x]
    var E = this,
      P = Date.now() - p
    if (u) return
    function C() {
      ;(p = Date.now()), t.apply(E, b)
    }
    function y() {
      f = void 0
    }
    !s && c && !f && C(),
      m(),
      c === void 0 && P > e
        ? s
          ? ((p = Date.now()), i || (f = setTimeout(c ? y : C, e)))
          : C()
        : i !== !0 && (f = setTimeout(c ? y : C, c === void 0 ? e - P : e))
  }
  return (h.cancel = g), h
}
function Io(e, t, o) {
  var r = o || {},
    n = r.atBegin,
    i = n === void 0 ? !1 : n
  return Eo(e, t, { debounceMode: i !== !1 })
}
function zn(e) {
  var t = e.getBoundingClientRect(),
    o = document.documentElement
  return {
    left:
      t.left +
      (window.pageXOffset || o.scrollLeft) -
      (o.clientLeft || document.body.clientLeft || 0),
    top: t.top + (window.pageYOffset || o.scrollTop) - (o.clientTop || document.body.clientTop || 0)
  }
}
var Ro = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z'
        }
      }
    ]
  },
  name: 'double-left',
  theme: 'outlined'
}
const No = Ro
var Po = function (t, o) {
  return a.createElement(dt, pe({}, t, { ref: o, icon: No }))
}
const Oo = a.forwardRef(Po)
var To = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z'
        }
      }
    ]
  },
  name: 'double-right',
  theme: 'outlined'
}
const zo = To
var Do = function (t, o) {
  return a.createElement(dt, pe({}, t, { ref: o, icon: zo }))
}
const Bo = a.forwardRef(Do)
var Qe = {
  ZERO: 48,
  NINE: 57,
  NUMPAD_ZERO: 96,
  NUMPAD_NINE: 105,
  BACKSPACE: 8,
  DELETE: 46,
  ENTER: 13,
  ARROW_UP: 38,
  ARROW_DOWN: 40
}
const Mo = {
  items_per_page: '条/页',
  jump_to: '跳至',
  jump_to_confirm: '确定',
  page: '页',
  prev_page: '上一页',
  next_page: '下一页',
  prev_5: '向前 5 页',
  next_5: '向后 5 页',
  prev_3: '向前 3 页',
  next_3: '向后 3 页',
  page_size: '页码'
}
var sr = (function (e) {
  Un(o, e)
  var t = Gn(o)
  function o() {
    var r
    Jn(this, o)
    for (var n = arguments.length, i = new Array(n), l = 0; l < n; l++) i[l] = arguments[l]
    return (
      (r = t.call.apply(t, [this].concat(i))),
      (r.state = { goInputText: '' }),
      (r.getValidValue = function () {
        var s = r.state.goInputText
        return !s || Number.isNaN(s) ? void 0 : Number(s)
      }),
      (r.buildOptionText = function (s) {
        return ''.concat(s, ' ').concat(r.props.locale.items_per_page)
      }),
      (r.changeSize = function (s) {
        r.props.changeSize(Number(s))
      }),
      (r.handleChange = function (s) {
        r.setState({ goInputText: s.target.value })
      }),
      (r.handleBlur = function (s) {
        var d = r.props,
          c = d.goButton,
          f = d.quickGo,
          u = d.rootPrefixCls,
          p = r.state.goInputText
        c ||
          p === '' ||
          (r.setState({ goInputText: '' }),
          !(
            s.relatedTarget &&
            (s.relatedTarget.className.indexOf(''.concat(u, '-item-link')) >= 0 ||
              s.relatedTarget.className.indexOf(''.concat(u, '-item')) >= 0)
          ) && f(r.getValidValue()))
      }),
      (r.go = function (s) {
        var d = r.state.goInputText
        d !== '' &&
          (s.keyCode === Qe.ENTER || s.type === 'click') &&
          (r.setState({ goInputText: '' }), r.props.quickGo(r.getValidValue()))
      }),
      r
    )
  }
  return (
    Yn(o, [
      {
        key: 'getPageSizeOptions',
        value: function () {
          var n = this.props,
            i = n.pageSize,
            l = n.pageSizeOptions
          return l.some(function (s) {
            return s.toString() === i.toString()
          })
            ? l
            : l.concat([i.toString()]).sort(function (s, d) {
                var c = Number.isNaN(Number(s)) ? 0 : Number(s),
                  f = Number.isNaN(Number(d)) ? 0 : Number(d)
                return c - f
              })
        }
      },
      {
        key: 'render',
        value: function () {
          var n = this,
            i = this.props,
            l = i.pageSize,
            s = i.locale,
            d = i.rootPrefixCls,
            c = i.changeSize,
            f = i.quickGo,
            u = i.goButton,
            p = i.selectComponentClass,
            m = i.buildOptionText,
            g = i.selectPrefixCls,
            h = i.disabled,
            v = this.state.goInputText,
            b = ''.concat(d, '-options'),
            x = p,
            E = null,
            P = null,
            C = null
          if (!c && !f) return null
          var y = this.getPageSizeOptions()
          if (c && x) {
            var T = y.map(function (k, _) {
              return te.createElement(
                x.Option,
                { key: _, value: k.toString() },
                (m || n.buildOptionText)(k)
              )
            })
            E = te.createElement(
              x,
              {
                disabled: h,
                prefixCls: g,
                showSearch: !1,
                className: ''.concat(b, '-size-changer'),
                optionLabelProp: 'children',
                dropdownMatchSelectWidth: !1,
                value: (l || y[0]).toString(),
                onChange: this.changeSize,
                getPopupContainer: function (_) {
                  return _.parentNode
                },
                'aria-label': s.page_size,
                defaultOpen: !1
              },
              T
            )
          }
          return (
            f &&
              (u &&
                (C =
                  typeof u == 'boolean'
                    ? te.createElement(
                        'button',
                        {
                          type: 'button',
                          onClick: this.go,
                          onKeyUp: this.go,
                          disabled: h,
                          className: ''.concat(b, '-quick-jumper-button')
                        },
                        s.jump_to_confirm
                      )
                    : te.createElement('span', { onClick: this.go, onKeyUp: this.go }, u)),
              (P = te.createElement(
                'div',
                { className: ''.concat(b, '-quick-jumper') },
                s.jump_to,
                te.createElement('input', {
                  disabled: h,
                  type: 'text',
                  value: v,
                  onChange: this.handleChange,
                  onKeyUp: this.go,
                  onBlur: this.handleBlur,
                  'aria-label': s.page
                }),
                s.page,
                C
              ))),
            te.createElement('li', { className: ''.concat(b) }, E, P)
          )
        }
      }
    ]),
    o
  )
})(te.Component)
sr.defaultProps = { pageSizeOptions: ['10', '20', '50', '100'] }
var lt = function (t) {
  var o,
    r = t.rootPrefixCls,
    n = t.page,
    i = t.active,
    l = t.className,
    s = t.showTitle,
    d = t.onClick,
    c = t.onKeyPress,
    f = t.itemRender,
    u = ''.concat(r, '-item'),
    p = G(
      u,
      ''.concat(u, '-').concat(n),
      ((o = {}),
      X(o, ''.concat(u, '-active'), i),
      X(o, ''.concat(u, '-disabled'), !n),
      X(o, t.className, l),
      o)
    ),
    m = function () {
      d(n)
    },
    g = function (v) {
      c(v, d, n)
    }
  return te.createElement(
    'li',
    { title: s ? n.toString() : null, className: p, onClick: m, onKeyPress: g, tabIndex: 0 },
    f(n, 'page', te.createElement('a', { rel: 'nofollow' }, n))
  )
}
function kt() {}
function Dn(e) {
  var t = Number(e)
  return typeof t == 'number' && !Number.isNaN(t) && isFinite(t) && Math.floor(t) === t
}
var Lo = function (t, o, r) {
  return r
}
function Ge(e, t, o) {
  var r = typeof e > 'u' ? t.pageSize : e
  return Math.floor((o.total - 1) / r) + 1
}
var cr = (function (e) {
  Un(o, e)
  var t = Gn(o)
  function o(r) {
    var n
    Jn(this, o),
      (n = t.call(this, r)),
      (n.paginationNode = te.createRef()),
      (n.getJumpPrevPage = function () {
        return Math.max(1, n.state.current - (n.props.showLessItems ? 3 : 5))
      }),
      (n.getJumpNextPage = function () {
        return Math.min(
          Ge(void 0, n.state, n.props),
          n.state.current + (n.props.showLessItems ? 3 : 5)
        )
      }),
      (n.getItemIcon = function (c, f) {
        var u = n.props.prefixCls,
          p =
            c ||
            te.createElement('button', {
              type: 'button',
              'aria-label': f,
              className: ''.concat(u, '-item-link')
            })
        return typeof c == 'function' && (p = te.createElement(c, W({}, n.props))), p
      }),
      (n.isValid = function (c) {
        var f = n.props.total
        return Dn(c) && c !== n.state.current && Dn(f) && f > 0
      }),
      (n.shouldDisplayQuickJumper = function () {
        var c = n.props,
          f = c.showQuickJumper,
          u = c.total,
          p = n.state.pageSize
        return u <= p ? !1 : f
      }),
      (n.handleKeyDown = function (c) {
        ;(c.keyCode === Qe.ARROW_UP || c.keyCode === Qe.ARROW_DOWN) && c.preventDefault()
      }),
      (n.handleKeyUp = function (c) {
        var f = n.getValidValue(c),
          u = n.state.currentInputValue
        f !== u && n.setState({ currentInputValue: f }),
          c.keyCode === Qe.ENTER
            ? n.handleChange(f)
            : c.keyCode === Qe.ARROW_UP
            ? n.handleChange(f - 1)
            : c.keyCode === Qe.ARROW_DOWN && n.handleChange(f + 1)
      }),
      (n.handleBlur = function (c) {
        var f = n.getValidValue(c)
        n.handleChange(f)
      }),
      (n.changePageSize = function (c) {
        var f = n.state.current,
          u = Ge(c, n.state, n.props)
        ;(f = f > u ? u : f),
          u === 0 && (f = n.state.current),
          typeof c == 'number' &&
            ('pageSize' in n.props || n.setState({ pageSize: c }),
            'current' in n.props || n.setState({ current: f, currentInputValue: f })),
          n.props.onShowSizeChange(f, c),
          'onChange' in n.props && n.props.onChange && n.props.onChange(f, c)
      }),
      (n.handleChange = function (c) {
        var f = n.props,
          u = f.disabled,
          p = f.onChange,
          m = n.state,
          g = m.pageSize,
          h = m.current,
          v = m.currentInputValue
        if (n.isValid(c) && !u) {
          var b = Ge(void 0, n.state, n.props),
            x = c
          return (
            c > b ? (x = b) : c < 1 && (x = 1),
            'current' in n.props || n.setState({ current: x }),
            x !== v && n.setState({ currentInputValue: x }),
            p(x, g),
            x
          )
        }
        return h
      }),
      (n.prev = function () {
        n.hasPrev() && n.handleChange(n.state.current - 1)
      }),
      (n.next = function () {
        n.hasNext() && n.handleChange(n.state.current + 1)
      }),
      (n.jumpPrev = function () {
        n.handleChange(n.getJumpPrevPage())
      }),
      (n.jumpNext = function () {
        n.handleChange(n.getJumpNextPage())
      }),
      (n.hasPrev = function () {
        return n.state.current > 1
      }),
      (n.hasNext = function () {
        return n.state.current < Ge(void 0, n.state, n.props)
      }),
      (n.runIfEnter = function (c, f) {
        if (c.key === 'Enter' || c.charCode === 13) {
          for (var u = arguments.length, p = new Array(u > 2 ? u - 2 : 0), m = 2; m < u; m++)
            p[m - 2] = arguments[m]
          f.apply(void 0, p)
        }
      }),
      (n.runIfEnterPrev = function (c) {
        n.runIfEnter(c, n.prev)
      }),
      (n.runIfEnterNext = function (c) {
        n.runIfEnter(c, n.next)
      }),
      (n.runIfEnterJumpPrev = function (c) {
        n.runIfEnter(c, n.jumpPrev)
      }),
      (n.runIfEnterJumpNext = function (c) {
        n.runIfEnter(c, n.jumpNext)
      }),
      (n.handleGoTO = function (c) {
        ;(c.keyCode === Qe.ENTER || c.type === 'click') && n.handleChange(n.state.currentInputValue)
      }),
      (n.renderPrev = function (c) {
        var f = n.props,
          u = f.prevIcon,
          p = f.itemRender,
          m = p(c, 'prev', n.getItemIcon(u, 'prev page')),
          g = !n.hasPrev()
        return a.isValidElement(m) ? a.cloneElement(m, { disabled: g }) : m
      }),
      (n.renderNext = function (c) {
        var f = n.props,
          u = f.nextIcon,
          p = f.itemRender,
          m = p(c, 'next', n.getItemIcon(u, 'next page')),
          g = !n.hasNext()
        return a.isValidElement(m) ? a.cloneElement(m, { disabled: g }) : m
      })
    var i = r.onChange !== kt,
      l = 'current' in r
    l &&
      !i &&
      console.warn(
        'Warning: You provided a `current` prop to a Pagination component without an `onChange` handler. This will render a read-only component.'
      )
    var s = r.defaultCurrent
    'current' in r && (s = r.current)
    var d = r.defaultPageSize
    return (
      'pageSize' in r && (d = r.pageSize),
      (s = Math.min(s, Ge(d, void 0, r))),
      (n.state = { current: s, currentInputValue: s, pageSize: d }),
      n
    )
  }
  return (
    Yn(
      o,
      [
        {
          key: 'componentDidUpdate',
          value: function (n, i) {
            var l = this.props.prefixCls
            if (i.current !== this.state.current && this.paginationNode.current) {
              var s = this.paginationNode.current.querySelector(
                '.'.concat(l, '-item-').concat(i.current)
              )
              if (s && document.activeElement === s) {
                var d
                s == null || (d = s.blur) === null || d === void 0 || d.call(s)
              }
            }
          }
        },
        {
          key: 'getValidValue',
          value: function (n) {
            var i = n.target.value,
              l = Ge(void 0, this.state, this.props),
              s = this.state.currentInputValue,
              d
            return (
              i === ''
                ? (d = i)
                : Number.isNaN(Number(i))
                ? (d = s)
                : i >= l
                ? (d = l)
                : (d = Number(i)),
              d
            )
          }
        },
        {
          key: 'getShowSizeChanger',
          value: function () {
            var n = this.props,
              i = n.showSizeChanger,
              l = n.total,
              s = n.totalBoundaryShowSizeChanger
            return typeof i < 'u' ? i : l > s
          }
        },
        {
          key: 'render',
          value: function () {
            var n = this,
              i = this.props,
              l = i.prefixCls,
              s = i.className,
              d = i.style,
              c = i.disabled,
              f = i.hideOnSinglePage,
              u = i.total,
              p = i.locale,
              m = i.showQuickJumper,
              g = i.showLessItems,
              h = i.showTitle,
              v = i.showTotal,
              b = i.simple,
              x = i.itemRender,
              E = i.showPrevNextJumpers,
              P = i.jumpPrevIcon,
              C = i.jumpNextIcon,
              y = i.selectComponentClass,
              T = i.selectPrefixCls,
              k = i.pageSizeOptions,
              _ = this.state,
              $ = _.current,
              D = _.pageSize,
              I = _.currentInputValue
            if (f === !0 && u <= D) return null
            var w = Ge(void 0, this.state, this.props),
              B = [],
              ne = null,
              K = null,
              z = null,
              Y = null,
              F = null,
              oe = m && m.goButton,
              M = g ? 1 : 2,
              ue = $ - 1 > 0 ? $ - 1 : 0,
              be = $ + 1 < w ? $ + 1 : w,
              ae = Object.keys(this.props).reduce(function (J, Z) {
                return (
                  (Z.substr(0, 5) === 'data-' || Z.substr(0, 5) === 'aria-' || Z === 'role') &&
                    (J[Z] = n.props[Z]),
                  J
                )
              }, {}),
              he =
                v &&
                te.createElement(
                  'li',
                  { className: ''.concat(l, '-total-text') },
                  v(u, [u === 0 ? 0 : ($ - 1) * D + 1, $ * D > u ? u : $ * D])
                )
            if (b)
              return (
                oe &&
                  (typeof oe == 'boolean'
                    ? (F = te.createElement(
                        'button',
                        { type: 'button', onClick: this.handleGoTO, onKeyUp: this.handleGoTO },
                        p.jump_to_confirm
                      ))
                    : (F = te.createElement(
                        'span',
                        { onClick: this.handleGoTO, onKeyUp: this.handleGoTO },
                        oe
                      )),
                  (F = te.createElement(
                    'li',
                    {
                      title: h ? ''.concat(p.jump_to).concat($, '/').concat(w) : null,
                      className: ''.concat(l, '-simple-pager')
                    },
                    F
                  ))),
                te.createElement(
                  'ul',
                  pe(
                    {
                      className: G(
                        l,
                        ''.concat(l, '-simple'),
                        X({}, ''.concat(l, '-disabled'), c),
                        s
                      ),
                      style: d,
                      ref: this.paginationNode
                    },
                    ae
                  ),
                  he,
                  te.createElement(
                    'li',
                    {
                      title: h ? p.prev_page : null,
                      onClick: this.prev,
                      tabIndex: this.hasPrev() ? 0 : null,
                      onKeyPress: this.runIfEnterPrev,
                      className: G(
                        ''.concat(l, '-prev'),
                        X({}, ''.concat(l, '-disabled'), !this.hasPrev())
                      ),
                      'aria-disabled': !this.hasPrev()
                    },
                    this.renderPrev(ue)
                  ),
                  te.createElement(
                    'li',
                    {
                      title: h ? ''.concat($, '/').concat(w) : null,
                      className: ''.concat(l, '-simple-pager')
                    },
                    te.createElement('input', {
                      type: 'text',
                      value: I,
                      disabled: c,
                      onKeyDown: this.handleKeyDown,
                      onKeyUp: this.handleKeyUp,
                      onChange: this.handleKeyUp,
                      onBlur: this.handleBlur,
                      size: 3
                    }),
                    te.createElement('span', { className: ''.concat(l, '-slash') }, '/'),
                    w
                  ),
                  te.createElement(
                    'li',
                    {
                      title: h ? p.next_page : null,
                      onClick: this.next,
                      tabIndex: this.hasPrev() ? 0 : null,
                      onKeyPress: this.runIfEnterNext,
                      className: G(
                        ''.concat(l, '-next'),
                        X({}, ''.concat(l, '-disabled'), !this.hasNext())
                      ),
                      'aria-disabled': !this.hasNext()
                    },
                    this.renderNext(be)
                  ),
                  F
                )
              )
            if (w <= 3 + M * 2) {
              var H = {
                locale: p,
                rootPrefixCls: l,
                onClick: this.handleChange,
                onKeyPress: this.runIfEnter,
                showTitle: h,
                itemRender: x
              }
              w ||
                B.push(
                  te.createElement(
                    lt,
                    pe({}, H, {
                      key: 'noPager',
                      page: 1,
                      className: ''.concat(l, '-item-disabled')
                    })
                  )
                )
              for (var q = 1; q <= w; q += 1) {
                var Ce = $ === q
                B.push(te.createElement(lt, pe({}, H, { key: q, page: q, active: Ce })))
              }
            } else {
              var ce = g ? p.prev_3 : p.prev_5,
                U = g ? p.next_3 : p.next_5
              E &&
                ((ne = te.createElement(
                  'li',
                  {
                    title: h ? ce : null,
                    key: 'prev',
                    onClick: this.jumpPrev,
                    tabIndex: 0,
                    onKeyPress: this.runIfEnterJumpPrev,
                    className: G(
                      ''.concat(l, '-jump-prev'),
                      X({}, ''.concat(l, '-jump-prev-custom-icon'), !!P)
                    )
                  },
                  x(this.getJumpPrevPage(), 'jump-prev', this.getItemIcon(P, 'prev page'))
                )),
                (K = te.createElement(
                  'li',
                  {
                    title: h ? U : null,
                    key: 'next',
                    tabIndex: 0,
                    onClick: this.jumpNext,
                    onKeyPress: this.runIfEnterJumpNext,
                    className: G(
                      ''.concat(l, '-jump-next'),
                      X({}, ''.concat(l, '-jump-next-custom-icon'), !!C)
                    )
                  },
                  x(this.getJumpNextPage(), 'jump-next', this.getItemIcon(C, 'next page'))
                ))),
                (Y = te.createElement(lt, {
                  locale: p,
                  last: !0,
                  rootPrefixCls: l,
                  onClick: this.handleChange,
                  onKeyPress: this.runIfEnter,
                  key: w,
                  page: w,
                  active: !1,
                  showTitle: h,
                  itemRender: x
                })),
                (z = te.createElement(lt, {
                  locale: p,
                  rootPrefixCls: l,
                  onClick: this.handleChange,
                  onKeyPress: this.runIfEnter,
                  key: 1,
                  page: 1,
                  active: !1,
                  showTitle: h,
                  itemRender: x
                }))
              var j = Math.max(1, $ - M),
                N = Math.min($ + M, w)
              $ - 1 <= M && (N = 1 + M * 2), w - $ <= M && (j = w - M * 2)
              for (var R = j; R <= N; R += 1) {
                var O = $ === R
                B.push(
                  te.createElement(lt, {
                    locale: p,
                    rootPrefixCls: l,
                    onClick: this.handleChange,
                    onKeyPress: this.runIfEnter,
                    key: R,
                    page: R,
                    active: O,
                    showTitle: h,
                    itemRender: x
                  })
                )
              }
              $ - 1 >= M * 2 &&
                $ !== 1 + 2 &&
                ((B[0] = a.cloneElement(B[0], {
                  className: ''.concat(l, '-item-after-jump-prev')
                })),
                B.unshift(ne)),
                w - $ >= M * 2 &&
                  $ !== w - 2 &&
                  ((B[B.length - 1] = a.cloneElement(B[B.length - 1], {
                    className: ''.concat(l, '-item-before-jump-next')
                  })),
                  B.push(K)),
                j !== 1 && B.unshift(z),
                N !== w && B.push(Y)
            }
            var S = !this.hasPrev() || !w,
              L = !this.hasNext() || !w
            return te.createElement(
              'ul',
              pe(
                {
                  className: G(l, s, X({}, ''.concat(l, '-disabled'), c)),
                  style: d,
                  ref: this.paginationNode
                },
                ae
              ),
              he,
              te.createElement(
                'li',
                {
                  title: h ? p.prev_page : null,
                  onClick: this.prev,
                  tabIndex: S ? null : 0,
                  onKeyPress: this.runIfEnterPrev,
                  className: G(''.concat(l, '-prev'), X({}, ''.concat(l, '-disabled'), S)),
                  'aria-disabled': S
                },
                this.renderPrev(ue)
              ),
              B,
              te.createElement(
                'li',
                {
                  title: h ? p.next_page : null,
                  onClick: this.next,
                  tabIndex: L ? null : 0,
                  onKeyPress: this.runIfEnterNext,
                  className: G(''.concat(l, '-next'), X({}, ''.concat(l, '-disabled'), L)),
                  'aria-disabled': L
                },
                this.renderNext(be)
              ),
              te.createElement(sr, {
                disabled: c,
                locale: p,
                rootPrefixCls: l,
                selectComponentClass: y,
                selectPrefixCls: T,
                changeSize: this.getShowSizeChanger() ? this.changePageSize : null,
                current: $,
                pageSize: D,
                pageSizeOptions: k,
                quickGo: this.shouldDisplayQuickJumper() ? this.handleChange : null,
                goButton: oe
              })
            )
          }
        }
      ],
      [
        {
          key: 'getDerivedStateFromProps',
          value: function (n, i) {
            var l = {}
            if (
              ('current' in n &&
                ((l.current = n.current),
                n.current !== i.current && (l.currentInputValue = l.current)),
              'pageSize' in n && n.pageSize !== i.pageSize)
            ) {
              var s = i.current,
                d = Ge(n.pageSize, i, n)
              ;(s = s > d ? d : s),
                'current' in n || ((l.current = s), (l.currentInputValue = s)),
                (l.pageSize = n.pageSize)
            }
            return l
          }
        }
      ]
    ),
    o
  )
})(te.Component)
cr.defaultProps = {
  defaultCurrent: 1,
  total: 0,
  defaultPageSize: 10,
  onChange: kt,
  className: '',
  selectPrefixCls: 'rc-select',
  prefixCls: 'rc-pagination',
  selectComponentClass: null,
  hideOnSinglePage: !1,
  showPrevNextJumpers: !0,
  showQuickJumper: !1,
  showLessItems: !1,
  showTitle: !0,
  onShowSizeChange: kt,
  locale: Mo,
  style: {},
  itemRender: Lo,
  totalBoundaryShowSizeChanger: 50
}
const dr = (e) => a.createElement($t, Object.assign({}, e, { size: 'small' })),
  ur = (e) => a.createElement($t, Object.assign({}, e, { size: 'middle' }))
dr.Option = $t.Option
ur.Option = $t.Option
const jo = (e) => {
    const { componentCls: t } = e
    return {
      [`${t}-disabled`]: {
        '&, &:hover': {
          cursor: 'not-allowed',
          [`${t}-item-link`]: { color: e.colorTextDisabled, cursor: 'not-allowed' }
        },
        '&:focus-visible': {
          cursor: 'not-allowed',
          [`${t}-item-link`]: { color: e.colorTextDisabled, cursor: 'not-allowed' }
        }
      },
      [`&${t}-disabled`]: {
        cursor: 'not-allowed',
        [`${t}-item`]: {
          cursor: 'not-allowed',
          '&:hover, &:active': { backgroundColor: 'transparent' },
          a: {
            color: e.colorTextDisabled,
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'not-allowed'
          },
          '&-active': {
            borderColor: e.colorBorder,
            backgroundColor: e.paginationItemDisabledBgActive,
            '&:hover, &:active': { backgroundColor: e.paginationItemDisabledBgActive },
            a: { color: e.paginationItemDisabledColorActive }
          }
        },
        [`${t}-item-link`]: {
          color: e.colorTextDisabled,
          cursor: 'not-allowed',
          '&:hover, &:active': { backgroundColor: 'transparent' },
          [`${t}-simple&`]: { backgroundColor: 'transparent' }
        },
        [`${t}-item-link-icon`]: { opacity: 0 },
        [`${t}-item-ellipsis`]: { opacity: 1 },
        [`${t}-simple-pager`]: { color: e.colorTextDisabled }
      }
    }
  },
  _o = (e) => {
    const { componentCls: t } = e
    return {
      [`&${t}-mini ${t}-total-text, &${t}-mini ${t}-simple-pager`]: {
        height: e.paginationItemSizeSM,
        lineHeight: `${e.paginationItemSizeSM}px`
      },
      [`&${t}-mini ${t}-item`]: {
        minWidth: e.paginationItemSizeSM,
        height: e.paginationItemSizeSM,
        margin: 0,
        lineHeight: `${e.paginationItemSizeSM - 2}px`
      },
      [`&${t}-mini ${t}-item:not(${t}-item-active)`]: {
        backgroundColor: 'transparent',
        borderColor: 'transparent'
      },
      [`&${t}-mini ${t}-prev, &${t}-mini ${t}-next`]: {
        minWidth: e.paginationItemSizeSM,
        height: e.paginationItemSizeSM,
        margin: 0,
        lineHeight: `${e.paginationItemSizeSM}px`
      },
      [`
    &${t}-mini ${t}-prev ${t}-item-link,
    &${t}-mini ${t}-next ${t}-item-link
    `]: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        '&::after': { height: e.paginationItemSizeSM, lineHeight: `${e.paginationItemSizeSM}px` }
      },
      [`&${t}-mini ${t}-jump-prev, &${t}-mini ${t}-jump-next`]: {
        height: e.paginationItemSizeSM,
        marginInlineEnd: 0,
        lineHeight: `${e.paginationItemSizeSM}px`
      },
      [`&${t}-mini ${t}-options`]: {
        marginInlineStart: e.paginationMiniOptionsMarginInlineStart,
        '&-size-changer': { top: e.paginationMiniOptionsSizeChangerTop },
        '&-quick-jumper': {
          height: e.paginationItemSizeSM,
          lineHeight: `${e.paginationItemSizeSM}px`,
          input: Object.assign(Object.assign({}, Vr(e)), {
            width: e.paginationMiniQuickJumperInputWidth,
            height: e.controlHeightSM
          })
        }
      }
    }
  },
  Fo = (e) => {
    const { componentCls: t } = e
    return {
      [`
    &${t}-simple ${t}-prev,
    &${t}-simple ${t}-next
    `]: {
        height: e.paginationItemSizeSM,
        lineHeight: `${e.paginationItemSizeSM}px`,
        verticalAlign: 'top',
        [`${t}-item-link`]: {
          height: e.paginationItemSizeSM,
          backgroundColor: 'transparent',
          border: 0,
          '&::after': { height: e.paginationItemSizeSM, lineHeight: `${e.paginationItemSizeSM}px` }
        }
      },
      [`&${t}-simple ${t}-simple-pager`]: {
        display: 'inline-block',
        height: e.paginationItemSizeSM,
        marginInlineEnd: e.marginXS,
        input: {
          boxSizing: 'border-box',
          height: '100%',
          marginInlineEnd: e.marginXS,
          padding: `0 ${e.paginationItemPaddingInline}px`,
          textAlign: 'center',
          backgroundColor: e.paginationItemInputBg,
          border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
          borderRadius: e.borderRadius,
          outline: 'none',
          transition: `border-color ${e.motionDurationMid}`,
          color: 'inherit',
          '&:hover': { borderColor: e.colorPrimary },
          '&:focus': {
            borderColor: e.colorPrimaryHover,
            boxShadow: `${e.inputOutlineOffset}px 0 ${e.controlOutlineWidth}px ${e.controlOutline}`
          },
          '&[disabled]': {
            color: e.colorTextDisabled,
            backgroundColor: e.colorBgContainerDisabled,
            borderColor: e.colorBorder,
            cursor: 'not-allowed'
          }
        }
      }
    }
  },
  Ho = (e) => {
    const { componentCls: t } = e
    return {
      [`${t}-jump-prev, ${t}-jump-next`]: {
        outline: 0,
        [`${t}-item-container`]: {
          position: 'relative',
          [`${t}-item-link-icon`]: {
            color: e.colorPrimary,
            fontSize: e.fontSizeSM,
            opacity: 0,
            transition: `all ${e.motionDurationMid}`,
            '&-svg': { top: 0, insetInlineEnd: 0, bottom: 0, insetInlineStart: 0, margin: 'auto' }
          },
          [`${t}-item-ellipsis`]: {
            position: 'absolute',
            top: 0,
            insetInlineEnd: 0,
            bottom: 0,
            insetInlineStart: 0,
            display: 'block',
            margin: 'auto',
            color: e.colorTextDisabled,
            fontFamily: 'Arial, Helvetica, sans-serif',
            letterSpacing: e.paginationEllipsisLetterSpacing,
            textAlign: 'center',
            textIndent: e.paginationEllipsisTextIndent,
            opacity: 1,
            transition: `all ${e.motionDurationMid}`
          }
        },
        '&:hover': {
          [`${t}-item-link-icon`]: { opacity: 1 },
          [`${t}-item-ellipsis`]: { opacity: 0 }
        },
        '&:focus-visible': Object.assign(
          { [`${t}-item-link-icon`]: { opacity: 1 }, [`${t}-item-ellipsis`]: { opacity: 0 } },
          yn(e)
        )
      },
      [`
    ${t}-prev,
    ${t}-jump-prev,
    ${t}-jump-next
    `]: { marginInlineEnd: e.marginXS },
      [`
    ${t}-prev,
    ${t}-next,
    ${t}-jump-prev,
    ${t}-jump-next
    `]: {
        display: 'inline-block',
        minWidth: e.paginationItemSize,
        height: e.paginationItemSize,
        color: e.colorText,
        fontFamily: e.paginationFontFamily,
        lineHeight: `${e.paginationItemSize}px`,
        textAlign: 'center',
        verticalAlign: 'middle',
        listStyle: 'none',
        borderRadius: e.borderRadius,
        cursor: 'pointer',
        transition: `all ${e.motionDurationMid}`
      },
      [`${t}-prev, ${t}-next`]: {
        fontFamily: 'Arial, Helvetica, sans-serif',
        outline: 0,
        button: { color: e.colorText, cursor: 'pointer', userSelect: 'none' },
        [`${t}-item-link`]: {
          display: 'block',
          width: '100%',
          height: '100%',
          padding: 0,
          fontSize: e.fontSizeSM,
          textAlign: 'center',
          backgroundColor: 'transparent',
          border: `${e.lineWidth}px ${e.lineType} transparent`,
          borderRadius: e.borderRadius,
          outline: 'none',
          transition: `border ${e.motionDurationMid}`
        },
        [`&:focus-visible ${t}-item-link`]: Object.assign({}, yn(e)),
        [`&:hover ${t}-item-link`]: { backgroundColor: e.colorBgTextHover },
        [`&:active ${t}-item-link`]: { backgroundColor: e.colorBgTextActive },
        [`&${t}-disabled:hover`]: { [`${t}-item-link`]: { backgroundColor: 'transparent' } }
      },
      [`${t}-slash`]: {
        marginInlineEnd: e.paginationSlashMarginInlineEnd,
        marginInlineStart: e.paginationSlashMarginInlineStart
      },
      [`${t}-options`]: {
        display: 'inline-block',
        marginInlineStart: e.margin,
        verticalAlign: 'middle',
        '&-size-changer.-select': { display: 'inline-block', width: 'auto' },
        '&-quick-jumper': {
          display: 'inline-block',
          height: e.controlHeight,
          marginInlineStart: e.marginXS,
          lineHeight: `${e.controlHeight}px`,
          verticalAlign: 'top',
          input: Object.assign(Object.assign({}, Xr(e)), {
            width: e.controlHeightLG * 1.25,
            height: e.controlHeight,
            boxSizing: 'border-box',
            margin: 0,
            marginInlineStart: e.marginXS,
            marginInlineEnd: e.marginXS
          })
        }
      }
    }
  },
  ko = (e) => {
    const { componentCls: t } = e
    return {
      [`${t}-item`]: Object.assign(
        Object.assign(
          {
            display: 'inline-block',
            minWidth: e.paginationItemSize,
            height: e.paginationItemSize,
            marginInlineEnd: e.marginXS,
            fontFamily: e.paginationFontFamily,
            lineHeight: `${e.paginationItemSize - 2}px`,
            textAlign: 'center',
            verticalAlign: 'middle',
            listStyle: 'none',
            backgroundColor: 'transparent',
            border: `${e.lineWidth}px ${e.lineType} transparent`,
            borderRadius: e.borderRadius,
            outline: 0,
            cursor: 'pointer',
            userSelect: 'none',
            a: {
              display: 'block',
              padding: `0 ${e.paginationItemPaddingInline}px`,
              color: e.colorText,
              transition: 'none',
              '&:hover': { textDecoration: 'none' }
            },
            [`&:not(${t}-item-active)`]: {
              '&:hover': {
                transition: `all ${e.motionDurationMid}`,
                backgroundColor: e.colorBgTextHover
              },
              '&:active': { backgroundColor: e.colorBgTextActive }
            }
          },
          Ur(e)
        ),
        {
          '&-active': {
            fontWeight: e.paginationFontWeightActive,
            backgroundColor: e.paginationItemBgActive,
            borderColor: e.colorPrimary,
            a: { color: e.colorPrimary },
            '&:hover': { borderColor: e.colorPrimaryHover },
            '&:hover a': { color: e.colorPrimaryHover }
          }
        }
      )
    }
  },
  Ao = (e) => {
    const { componentCls: t } = e
    return {
      [t]: Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(Object.assign({}, wt(e)), {
                    'ul, ol': { margin: 0, padding: 0, listStyle: 'none' },
                    '&::after': {
                      display: 'block',
                      clear: 'both',
                      height: 0,
                      overflow: 'hidden',
                      visibility: 'hidden',
                      content: '""'
                    },
                    [`${t}-total-text`]: {
                      display: 'inline-block',
                      height: e.paginationItemSize,
                      marginInlineEnd: e.marginXS,
                      lineHeight: `${e.paginationItemSize - 2}px`,
                      verticalAlign: 'middle'
                    }
                  }),
                  ko(e)
                ),
                Ho(e)
              ),
              Fo(e)
            ),
            _o(e)
          ),
          jo(e)
        ),
        {
          [`@media only screen and (max-width: ${e.screenLG}px)`]: {
            [`${t}-item`]: { '&-after-jump-prev, &-before-jump-next': { display: 'none' } }
          },
          [`@media only screen and (max-width: ${e.screenSM}px)`]: {
            [`${t}-options`]: { display: 'none' }
          }
        }
      ),
      [`&${e.componentCls}-rtl`]: { direction: 'rtl' }
    }
  },
  Ko = (e) => {
    const { componentCls: t } = e
    return {
      [`${t}${t}-disabled`]: {
        '&, &:hover': { [`${t}-item-link`]: { borderColor: e.colorBorder } },
        '&:focus-visible': { [`${t}-item-link`]: { borderColor: e.colorBorder } },
        [`${t}-item, ${t}-item-link`]: {
          backgroundColor: e.colorBgContainerDisabled,
          borderColor: e.colorBorder,
          [`&:hover:not(${t}-item-active)`]: {
            backgroundColor: e.colorBgContainerDisabled,
            borderColor: e.colorBorder,
            a: { color: e.colorTextDisabled }
          },
          [`&${t}-item-active`]: { backgroundColor: e.paginationItemDisabledBgActive }
        },
        [`${t}-prev, ${t}-next`]: {
          '&:hover button': {
            backgroundColor: e.colorBgContainerDisabled,
            borderColor: e.colorBorder,
            color: e.colorTextDisabled
          },
          [`${t}-item-link`]: {
            backgroundColor: e.colorBgContainerDisabled,
            borderColor: e.colorBorder
          }
        }
      },
      [t]: {
        [`${t}-prev, ${t}-next`]: {
          '&:hover button': {
            borderColor: e.colorPrimaryHover,
            backgroundColor: e.paginationItemBg
          },
          [`${t}-item-link`]: {
            backgroundColor: e.paginationItemLinkBg,
            borderColor: e.colorBorder
          },
          [`&:hover ${t}-item-link`]: {
            borderColor: e.colorPrimary,
            backgroundColor: e.paginationItemBg,
            color: e.colorPrimary
          },
          [`&${t}-disabled`]: {
            [`${t}-item-link`]: { borderColor: e.colorBorder, color: e.colorTextDisabled }
          }
        },
        [`${t}-item`]: {
          backgroundColor: e.paginationItemBg,
          border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
          [`&:hover:not(${t}-item-active)`]: {
            borderColor: e.colorPrimary,
            backgroundColor: e.paginationItemBg,
            a: { color: e.colorPrimary }
          },
          '&-active': { borderColor: e.colorPrimary }
        }
      }
    }
  },
  Wo = Yt('Pagination', (e) => {
    const t = qt(
      e,
      {
        paginationItemSize: e.controlHeight,
        paginationFontFamily: e.fontFamily,
        paginationItemBg: e.colorBgContainer,
        paginationItemBgActive: e.colorBgContainer,
        paginationFontWeightActive: e.fontWeightStrong,
        paginationItemSizeSM: e.controlHeightSM,
        paginationItemInputBg: e.colorBgContainer,
        paginationMiniOptionsSizeChangerTop: 0,
        paginationItemDisabledBgActive: e.controlItemBgActiveDisabled,
        paginationItemDisabledColorActive: e.colorTextDisabled,
        paginationItemLinkBg: e.colorBgContainer,
        inputOutlineOffset: '0 0',
        paginationMiniOptionsMarginInlineStart: e.marginXXS / 2,
        paginationMiniQuickJumperInputWidth: e.controlHeightLG * 1.1,
        paginationItemPaddingInline: e.marginXXS * 1.5,
        paginationEllipsisLetterSpacing: e.marginXXS / 2,
        paginationSlashMarginInlineStart: e.marginXXS,
        paginationSlashMarginInlineEnd: e.marginSM,
        paginationEllipsisTextIndent: '0.13em'
      },
      Wr(e)
    )
    return [Ao(t), e.wireframe && Ko(t)]
  })
var Vo =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var o = {}
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (o[r] = e[r])
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++)
        t.indexOf(r[n]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[n]) &&
          (o[r[n]] = e[r[n]])
    return o
  }
const Xo = (e) => {
    var {
        prefixCls: t,
        selectPrefixCls: o,
        className: r,
        rootClassName: n,
        size: i,
        locale: l,
        selectComponentClass: s,
        responsive: d,
        showSizeChanger: c
      } = e,
      f = Vo(e, [
        'prefixCls',
        'selectPrefixCls',
        'className',
        'rootClassName',
        'size',
        'locale',
        'selectComponentClass',
        'responsive',
        'showSizeChanger'
      ])
    const { xs: u } = qn(d),
      { getPrefixCls: p, direction: m, pagination: g = {} } = a.useContext(ot),
      h = p('pagination', t),
      [v, b] = Wo(h),
      x = c ?? g.showSizeChanger,
      E = () => {
        const _ = a.createElement('span', { className: `${h}-item-ellipsis` }, '•••')
        let $ = a.createElement(
            'button',
            { className: `${h}-item-link`, type: 'button', tabIndex: -1 },
            a.createElement(Yr, null)
          ),
          D = a.createElement(
            'button',
            { className: `${h}-item-link`, type: 'button', tabIndex: -1 },
            a.createElement(qr, null)
          ),
          I = a.createElement(
            'a',
            { className: `${h}-item-link` },
            a.createElement(
              'div',
              { className: `${h}-item-container` },
              a.createElement(Oo, { className: `${h}-item-link-icon` }),
              _
            )
          ),
          w = a.createElement(
            'a',
            { className: `${h}-item-link` },
            a.createElement(
              'div',
              { className: `${h}-item-container` },
              a.createElement(Bo, { className: `${h}-item-link-icon` }),
              _
            )
          )
        return (
          m === 'rtl' && (([$, D] = [D, $]), ([I, w] = [w, I])),
          { prevIcon: $, nextIcon: D, jumpPrevIcon: I, jumpNextIcon: w }
        )
      },
      [P] = Gr('Pagination', Jr),
      C = Object.assign(Object.assign({}, P), l),
      y = i === 'small' || !!(u && !i && d),
      T = p('select', o),
      k = G({ [`${h}-mini`]: y, [`${h}-rtl`]: m === 'rtl' }, r, n, b)
    return v(
      a.createElement(
        cr,
        Object.assign({}, E(), f, {
          prefixCls: h,
          selectPrefixCls: T,
          className: k,
          selectComponentClass: s || (y ? dr : ur),
          locale: C,
          showSizeChanger: x
        })
      )
    )
  },
  Uo = Xo,
  Go = new Qn('antSpinMove', { to: { opacity: 1 } }),
  Jo = new Qn('antRotate', { to: { transform: 'rotate(405deg)' } }),
  Yo = (e) => ({
    [`${e.componentCls}`]: Object.assign(Object.assign({}, wt(e)), {
      position: 'absolute',
      display: 'none',
      color: e.colorPrimary,
      textAlign: 'center',
      verticalAlign: 'middle',
      opacity: 0,
      transition: `transform ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`,
      '&-spinning': { position: 'static', display: 'inline-block', opacity: 1 },
      '&-nested-loading': {
        position: 'relative',
        [`> div > ${e.componentCls}`]: {
          position: 'absolute',
          top: 0,
          insetInlineStart: 0,
          zIndex: 4,
          display: 'block',
          width: '100%',
          height: '100%',
          maxHeight: e.contentHeight,
          [`${e.componentCls}-dot`]: {
            position: 'absolute',
            top: '50%',
            insetInlineStart: '50%',
            margin: -e.spinDotSize / 2
          },
          [`${e.componentCls}-text`]: {
            position: 'absolute',
            top: '50%',
            width: '100%',
            paddingTop: (e.spinDotSize - e.fontSize) / 2 + 2,
            textShadow: `0 1px 2px ${e.colorBgContainer}`
          },
          [`&${e.componentCls}-show-text ${e.componentCls}-dot`]: {
            marginTop: -(e.spinDotSize / 2) - 10
          },
          '&-sm': {
            [`${e.componentCls}-dot`]: { margin: -e.spinDotSizeSM / 2 },
            [`${e.componentCls}-text`]: { paddingTop: (e.spinDotSizeSM - e.fontSize) / 2 + 2 },
            [`&${e.componentCls}-show-text ${e.componentCls}-dot`]: {
              marginTop: -(e.spinDotSizeSM / 2) - 10
            }
          },
          '&-lg': {
            [`${e.componentCls}-dot`]: { margin: -(e.spinDotSizeLG / 2) },
            [`${e.componentCls}-text`]: { paddingTop: (e.spinDotSizeLG - e.fontSize) / 2 + 2 },
            [`&${e.componentCls}-show-text ${e.componentCls}-dot`]: {
              marginTop: -(e.spinDotSizeLG / 2) - 10
            }
          }
        },
        [`${e.componentCls}-container`]: {
          position: 'relative',
          transition: `opacity ${e.motionDurationSlow}`,
          '&::after': {
            position: 'absolute',
            top: 0,
            insetInlineEnd: 0,
            bottom: 0,
            insetInlineStart: 0,
            zIndex: 10,
            width: '100%',
            height: '100%',
            background: e.colorBgContainer,
            opacity: 0,
            transition: `all ${e.motionDurationSlow}`,
            content: '""',
            pointerEvents: 'none'
          }
        },
        [`${e.componentCls}-blur`]: {
          clear: 'both',
          opacity: 0.5,
          userSelect: 'none',
          pointerEvents: 'none',
          '&::after': { opacity: 0.4, pointerEvents: 'auto' }
        }
      },
      '&-tip': { color: e.spinDotDefault },
      [`${e.componentCls}-dot`]: {
        position: 'relative',
        display: 'inline-block',
        fontSize: e.spinDotSize,
        width: '1em',
        height: '1em',
        '&-item': {
          position: 'absolute',
          display: 'block',
          width: (e.spinDotSize - e.marginXXS / 2) / 2,
          height: (e.spinDotSize - e.marginXXS / 2) / 2,
          backgroundColor: e.colorPrimary,
          borderRadius: '100%',
          transform: 'scale(0.75)',
          transformOrigin: '50% 50%',
          opacity: 0.3,
          animationName: Go,
          animationDuration: '1s',
          animationIterationCount: 'infinite',
          animationTimingFunction: 'linear',
          animationDirection: 'alternate',
          '&:nth-child(1)': { top: 0, insetInlineStart: 0 },
          '&:nth-child(2)': { top: 0, insetInlineEnd: 0, animationDelay: '0.4s' },
          '&:nth-child(3)': { insetInlineEnd: 0, bottom: 0, animationDelay: '0.8s' },
          '&:nth-child(4)': { bottom: 0, insetInlineStart: 0, animationDelay: '1.2s' }
        },
        '&-spin': {
          transform: 'rotate(45deg)',
          animationName: Jo,
          animationDuration: '1.2s',
          animationIterationCount: 'infinite',
          animationTimingFunction: 'linear'
        }
      },
      [`&-sm ${e.componentCls}-dot`]: {
        fontSize: e.spinDotSizeSM,
        i: {
          width: (e.spinDotSizeSM - e.marginXXS / 2) / 2,
          height: (e.spinDotSizeSM - e.marginXXS / 2) / 2
        }
      },
      [`&-lg ${e.componentCls}-dot`]: {
        fontSize: e.spinDotSizeLG,
        i: {
          width: (e.spinDotSizeLG - e.marginXXS) / 2,
          height: (e.spinDotSizeLG - e.marginXXS) / 2
        }
      },
      [`&${e.componentCls}-show-text ${e.componentCls}-text`]: { display: 'block' }
    })
  }),
  qo = Yt(
    'Spin',
    (e) => {
      const t = qt(e, {
        spinDotDefault: e.colorTextDescription,
        spinDotSize: e.controlHeightLG / 2,
        spinDotSizeSM: e.controlHeightLG * 0.35,
        spinDotSizeLG: e.controlHeight
      })
      return [Yo(t)]
    },
    { contentHeight: 400 }
  )
var Qo =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var o = {}
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (o[r] = e[r])
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++)
        t.indexOf(r[n]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[n]) &&
          (o[r[n]] = e[r[n]])
    return o
  }
let bt = null
function Zo(e, t) {
  const { indicator: o } = t,
    r = `${e}-dot`
  return o === null
    ? null
    : $n(o)
    ? wn(o, { className: G(o.props.className, r) })
    : $n(bt)
    ? wn(bt, { className: G(bt.props.className, r) })
    : a.createElement(
        'span',
        { className: G(r, `${e}-dot-spin`) },
        a.createElement('i', { className: `${e}-dot-item` }),
        a.createElement('i', { className: `${e}-dot-item` }),
        a.createElement('i', { className: `${e}-dot-item` }),
        a.createElement('i', { className: `${e}-dot-item` })
      )
}
function ea(e, t) {
  return !!e && !!t && !isNaN(Number(t))
}
const ta = (e) => {
    const {
        spinPrefixCls: t,
        spinning: o = !0,
        delay: r = 0,
        className: n,
        rootClassName: i,
        size: l = 'default',
        tip: s,
        wrapperClassName: d,
        style: c,
        children: f,
        hashId: u
      } = e,
      p = Qo(e, [
        'spinPrefixCls',
        'spinning',
        'delay',
        'className',
        'rootClassName',
        'size',
        'tip',
        'wrapperClassName',
        'style',
        'children',
        'hashId'
      ]),
      [m, g] = a.useState(() => o && !ea(o, r))
    a.useEffect(() => {
      if (o) {
        const C = Io(r, () => {
          g(!0)
        })
        return (
          C(),
          () => {
            var y
            ;(y = C == null ? void 0 : C.cancel) === null || y === void 0 || y.call(C)
          }
        )
      }
      g(!1)
    }, [r, o])
    const h = a.useMemo(() => typeof f < 'u', [f]),
      { direction: v } = a.useContext(ot),
      b = G(
        t,
        {
          [`${t}-sm`]: l === 'small',
          [`${t}-lg`]: l === 'large',
          [`${t}-spinning`]: m,
          [`${t}-show-text`]: !!s,
          [`${t}-rtl`]: v === 'rtl'
        },
        n,
        i,
        u
      ),
      x = G(`${t}-container`, { [`${t}-blur`]: m }),
      E = Zn(p, ['indicator', 'prefixCls']),
      P = a.createElement(
        'div',
        Object.assign({}, E, { style: c, className: b, 'aria-live': 'polite', 'aria-busy': m }),
        Zo(t, e),
        s ? a.createElement('div', { className: `${t}-text` }, s) : null
      )
    return h
      ? a.createElement(
          'div',
          Object.assign({}, E, { className: G(`${t}-nested-loading`, d, u) }),
          m && a.createElement('div', { key: 'loading' }, P),
          a.createElement('div', { className: x, key: 'container' }, f)
        )
      : P
  },
  fr = (e) => {
    const { prefixCls: t } = e,
      { getPrefixCls: o } = a.useContext(ot),
      r = o('spin', t),
      [n, i] = qo(r),
      l = Object.assign(Object.assign({}, e), { spinPrefixCls: r, hashId: i })
    return n(a.createElement(ta, Object.assign({}, l)))
  }
fr.setDefaultIndicator = (e) => {
  bt = e
}
const na = fr
function ra() {
  const e = Object.assign({}, arguments.length <= 0 ? void 0 : arguments[0])
  for (let t = 1; t < arguments.length; t++) {
    const o = t < 0 || arguments.length <= t ? void 0 : arguments[t]
    o &&
      Object.keys(o).forEach((r) => {
        const n = o[r]
        n !== void 0 && (e[r] = n)
      })
  }
  return e
}
var oa = {
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
  theme: 'outlined'
}
const aa = oa
var ia = function (t, o) {
  return a.createElement(dt, pe({}, t, { ref: o, icon: aa }))
}
const la = a.forwardRef(ia)
var sa = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z'
        }
      }
    ]
  },
  name: 'caret-up',
  theme: 'outlined'
}
const ca = sa
var da = function (t, o) {
  return a.createElement(dt, pe({}, t, { ref: o, icon: ca }))
}
const ua = a.forwardRef(da)
var fa = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M349 838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V642H349v196zm531.1-684H143.9c-24.5 0-39.8 26.7-27.5 48l221.3 376h348.8l221.3-376c12.1-21.3-3.2-48-27.7-48z'
        }
      }
    ]
  },
  name: 'filter',
  theme: 'filled'
}
const pa = fa
var ma = function (t, o) {
  return a.createElement(dt, pe({}, t, { ref: o, icon: pa }))
}
const ga = a.forwardRef(ma)
var Ye = {}
function ha(e) {
  var t = a.createContext(void 0),
    o = function (n) {
      var i = n.value,
        l = n.children,
        s = a.useRef(i)
      s.current = i
      var d = a.useState(function () {
          return {
            getValue: function () {
              return s.current
            },
            listeners: new Set()
          }
        }),
        c = ge(d, 1),
        f = c[0]
      return (
        tr(
          function () {
            Qr.unstable_batchedUpdates(function () {
              f.listeners.forEach(function (u) {
                u(i)
              })
            })
          },
          [i]
        ),
        a.createElement(t.Provider, { value: f }, l)
      )
    }
  return { Context: t, Provider: o, defaultValue: e }
}
function He(e, t) {
  var o = er(
      typeof t == 'function'
        ? t
        : function (u) {
            if (t === void 0) return u
            if (!Array.isArray(t)) return u[t]
            var p = {}
            return (
              t.forEach(function (m) {
                p[m] = u[m]
              }),
              p
            )
          }
    ),
    r = a.useContext(e == null ? void 0 : e.Context),
    n = r || {},
    i = n.listeners,
    l = n.getValue,
    s = a.useRef()
  s.current = o(r ? l() : e == null ? void 0 : e.defaultValue)
  var d = a.useState({}),
    c = ge(d, 2),
    f = c[1]
  return (
    tr(
      function () {
        if (!r) return
        function u(p) {
          var m = o(p)
          ct(s.current, m, !0) || f({})
        }
        return (
          i.add(u),
          function () {
            i.delete(u)
          }
        )
      },
      [r]
    ),
    s.current
  )
}
function va() {
  var e = a.createContext(null)
  function t() {
    return a.useContext(e)
  }
  function o(n, i) {
    var l = En(n),
      s = function (c, f) {
        var u = l ? { ref: f } : {},
          p = a.useRef(0),
          m = a.useRef(c),
          g = t()
        return g !== null
          ? a.createElement(n, pe({}, c, u))
          : ((!i || i(m.current, c)) && (p.current += 1),
            (m.current = c),
            a.createElement(e.Provider, { value: p.current }, a.createElement(n, pe({}, c, u))))
      }
    return l ? a.forwardRef(s) : s
  }
  function r(n, i) {
    var l = En(n),
      s = function (c, f) {
        var u = l ? { ref: f } : {}
        return t(), a.createElement(n, pe({}, c, u))
      }
    return l ? a.memo(a.forwardRef(s), i) : a.memo(s, i)
  }
  return { makeImmutable: o, responseImmutable: r, useImmutableMark: t }
}
var Zt = va(),
  ba = Zt.makeImmutable,
  Et = Zt.responseImmutable,
  xa = Zt.useImmutableMark,
  _e = ha()
function Sa(e, t) {
  var o = a.useRef(0)
  o.current += 1
  var r = a.useRef(e),
    n = []
  Object.keys(e || {}).map(function (l) {
    var s
    ;(e == null ? void 0 : e[l]) !== ((s = r.current) === null || s === void 0 ? void 0 : s[l]) &&
      n.push(l)
  }),
    (r.current = e)
  var i = a.useRef([])
  return (
    n.length && (i.current = n),
    a.useDebugValue(o.current),
    a.useDebugValue(i.current.join(', ')),
    t && console.log(''.concat(t, ':'), o.current, i.current),
    o.current
  )
}
var Ca = a.memo(function () {
  var e = Sa()
  return a.createElement('h1', null, 'Render Times: ', e)
})
Ca.displayName = 'RenderBlock'
var pr = a.createContext({ renderWithProps: !1 }),
  ya = 'RC_TABLE_KEY'
function $a(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e]
}
function It(e) {
  var t = [],
    o = {}
  return (
    e.forEach(function (r) {
      for (var n = r || {}, i = n.key, l = n.dataIndex, s = i || $a(l).join('-') || ya; o[s]; )
        s = ''.concat(s, '_next')
      ;(o[s] = !0), t.push(s)
    }),
    t
  )
}
function At(e) {
  return e != null
}
function wa(e) {
  return e && ut(e) === 'object' && !Array.isArray(e) && !a.isValidElement(e)
}
function Ea(e, t, o, r, n, i) {
  var l = a.useContext(pr),
    s = xa(),
    d = nr(
      function () {
        if (At(r)) return [r]
        var c = t == null || t === '' ? [] : Array.isArray(t) ? t : [t],
          f = rr(e, c),
          u = f,
          p = void 0
        if (n) {
          var m = n(f, e, o)
          wa(m) ? ((u = m.children), (p = m.props), (l.renderWithProps = !0)) : (u = m)
        }
        return [u, p]
      },
      [s, e, r, t, n, o],
      function (c, f) {
        if (i) {
          var u = ge(c, 2),
            p = u[1],
            m = ge(f, 2),
            g = m[1]
          return i(g, p)
        }
        return l.renderWithProps ? !0 : !ct(c, f, !0)
      }
    )
  return d
}
function Ia(e, t, o, r) {
  var n = e + t - 1
  return e <= r && n >= o
}
function Ra(e, t) {
  return He(_e, function (o) {
    var r = Ia(e, t || 1, o.hoverStartRow, o.hoverEndRow)
    return [r, o.onHover]
  })
}
var Na = function (t) {
  var o = t.ellipsis,
    r = t.rowType,
    n = t.children,
    i,
    l = o === !0 ? { showTitle: !0 } : o
  return (
    l &&
      (l.showTitle || r === 'header') &&
      (typeof n == 'string' || typeof n == 'number'
        ? (i = n.toString())
        : a.isValidElement(n) && typeof n.props.children == 'string' && (i = n.props.children)),
    i
  )
}
function Pa(e) {
  var t,
    o,
    r,
    n,
    i,
    l,
    s,
    d,
    c = e.component,
    f = e.children,
    u = e.ellipsis,
    p = e.scope,
    m = e.prefixCls,
    g = e.className,
    h = e.align,
    v = e.record,
    b = e.render,
    x = e.dataIndex,
    E = e.renderIndex,
    P = e.shouldCellUpdate,
    C = e.index,
    y = e.rowType,
    T = e.colSpan,
    k = e.rowSpan,
    _ = e.fixLeft,
    $ = e.fixRight,
    D = e.firstFixLeft,
    I = e.lastFixLeft,
    w = e.firstFixRight,
    B = e.lastFixRight,
    ne = e.appendNode,
    K = e.additionalProps,
    z = K === void 0 ? {} : K,
    Y = e.isSticky,
    F = ''.concat(m, '-cell'),
    oe = He(_e, ['supportSticky', 'allColumnsFixedLeft']),
    M = oe.supportSticky,
    ue = oe.allColumnsFixedLeft,
    be = Ea(v, x, E, f, b, P),
    ae = ge(be, 2),
    he = ae[0],
    H = ae[1],
    q = {},
    Ce = typeof _ == 'number' && M,
    ce = typeof $ == 'number' && M
  Ce && ((q.position = 'sticky'), (q.left = _)), ce && ((q.position = 'sticky'), (q.right = $))
  var U =
      (t =
        (o = (r = H == null ? void 0 : H.colSpan) !== null && r !== void 0 ? r : z.colSpan) !==
          null && o !== void 0
          ? o
          : T) !== null && t !== void 0
        ? t
        : 1,
    j =
      (n =
        (i = (l = H == null ? void 0 : H.rowSpan) !== null && l !== void 0 ? l : z.rowSpan) !==
          null && i !== void 0
          ? i
          : k) !== null && n !== void 0
        ? n
        : 1,
    N = Ra(C, j),
    R = ge(N, 2),
    O = R[0],
    S = R[1],
    L = function ($e) {
      var De
      v && S(C, C + j - 1),
        z == null || (De = z.onMouseEnter) === null || De === void 0 || De.call(z, $e)
    },
    J = function ($e) {
      var De
      v && S(-1, -1), z == null || (De = z.onMouseLeave) === null || De === void 0 || De.call(z, $e)
    }
  if (U === 0 || j === 0) return null
  var Z =
      (s = z.title) !== null && s !== void 0 ? s : Na({ rowType: y, ellipsis: u, children: he }),
    ye = G(
      F,
      g,
      ((d = {}),
      X(d, ''.concat(F, '-fix-left'), Ce && M),
      X(d, ''.concat(F, '-fix-left-first'), D && M),
      X(d, ''.concat(F, '-fix-left-last'), I && M),
      X(d, ''.concat(F, '-fix-left-all'), I && ue && M),
      X(d, ''.concat(F, '-fix-right'), ce && M),
      X(d, ''.concat(F, '-fix-right-first'), w && M),
      X(d, ''.concat(F, '-fix-right-last'), B && M),
      X(d, ''.concat(F, '-ellipsis'), u),
      X(d, ''.concat(F, '-with-append'), ne),
      X(d, ''.concat(F, '-fix-sticky'), (Ce || ce) && Y && M),
      X(d, ''.concat(F, '-row-hover'), !H && O),
      d),
      z.className,
      H == null ? void 0 : H.className
    ),
    Re = {}
  h && (Re.textAlign = h)
  var Ke = W(W(W(W({}, z.style), Re), q), H == null ? void 0 : H.style),
    ve = he
  return (
    ut(ve) === 'object' && !Array.isArray(ve) && !a.isValidElement(ve) && (ve = null),
    u && (I || w) && (ve = a.createElement('span', { className: ''.concat(F, '-content') }, ve)),
    a.createElement(
      c,
      pe({}, H, z, {
        className: ye,
        style: Ke,
        title: Z,
        scope: p,
        onMouseEnter: L,
        onMouseLeave: J,
        colSpan: U !== 1 ? U : null,
        rowSpan: j !== 1 ? j : null
      }),
      ne,
      ve
    )
  )
}
const Rt = a.memo(Pa)
function en(e, t, o, r, n, i) {
  var l = o[e] || {},
    s = o[t] || {},
    d,
    c
  l.fixed === 'left'
    ? (d = r.left[n === 'rtl' ? t : e])
    : s.fixed === 'right' && (c = r.right[n === 'rtl' ? e : t])
  var f = !1,
    u = !1,
    p = !1,
    m = !1,
    g = o[t + 1],
    h = o[e - 1],
    v = !(i != null && i.children)
  if (n === 'rtl') {
    if (d !== void 0) {
      var b = h && h.fixed === 'left'
      m = !b && v
    } else if (c !== void 0) {
      var x = g && g.fixed === 'right'
      p = !x && v
    }
  } else if (d !== void 0) {
    var E = g && g.fixed === 'left'
    f = !E && v
  } else if (c !== void 0) {
    var P = h && h.fixed === 'right'
    u = !P && v
  }
  return {
    fixLeft: d,
    fixRight: c,
    lastFixLeft: f,
    firstFixRight: u,
    lastFixRight: p,
    firstFixLeft: m,
    isSticky: r.isSticky
  }
}
var mr = a.createContext({})
function Oa(e) {
  var t = e.className,
    o = e.index,
    r = e.children,
    n = e.colSpan,
    i = n === void 0 ? 1 : n,
    l = e.rowSpan,
    s = e.align,
    d = He(_e, ['prefixCls', 'direction']),
    c = d.prefixCls,
    f = d.direction,
    u = a.useContext(mr),
    p = u.scrollColumnIndex,
    m = u.stickyOffsets,
    g = u.flattenColumns,
    h = u.columns,
    v = o + i - 1,
    b = v + 1 === p ? i + 1 : i,
    x = en(o, o + b - 1, g, m, f, h == null ? void 0 : h[o])
  return a.createElement(
    Rt,
    pe(
      {
        className: t,
        index: o,
        component: 'td',
        prefixCls: c,
        record: null,
        dataIndex: null,
        align: s,
        colSpan: b,
        rowSpan: l,
        render: function () {
          return r
        }
      },
      x
    )
  )
}
var Ta = ['children']
function za(e) {
  var t = e.children,
    o = at(e, Ta)
  return a.createElement('tr', o, t)
}
function Nt(e) {
  var t = e.children
  return t
}
Nt.Row = za
Nt.Cell = Oa
function Da(e) {
  var t = e.children,
    o = e.stickyOffsets,
    r = e.flattenColumns,
    n = e.columns,
    i = He(_e, 'prefixCls'),
    l = r.length - 1,
    s = r[l],
    d = a.useMemo(
      function () {
        return {
          stickyOffsets: o,
          flattenColumns: r,
          scrollColumnIndex: s != null && s.scrollbar ? l : null,
          columns: n
        }
      },
      [s, r, l, o, n]
    )
  return a.createElement(
    mr.Provider,
    { value: d },
    a.createElement('tfoot', { className: ''.concat(i, '-summary') }, t)
  )
}
const vt = Et(Da)
var gr = Nt
function Ba(e) {
  return null
}
function Ma(e) {
  return null
}
function hr(e, t, o, r, n, i) {
  var l = []
  l.push({ record: e, indent: t, index: i })
  var s = n(e),
    d = r == null ? void 0 : r.has(s)
  if (e && Array.isArray(e[o]) && d)
    for (var c = 0; c < e[o].length; c += 1) {
      var f = hr(e[o][c], t + 1, o, r, n, c)
      l.push.apply(l, fe(f))
    }
  return l
}
function La(e, t, o, r) {
  var n = a.useMemo(
    function () {
      if (o != null && o.size) {
        for (var i = [], l = 0; l < (e == null ? void 0 : e.length); l += 1) {
          var s = e[l]
          i.push.apply(i, fe(hr(s, 0, t, o, r, l)))
        }
        return i
      }
      return e == null
        ? void 0
        : e.map(function (d, c) {
            return { record: d, indent: 0, index: c }
          })
    },
    [e, t, o, r]
  )
  return n
}
function vr(e) {
  var t = e.prefixCls,
    o = e.children,
    r = e.component,
    n = e.cellComponent,
    i = e.className,
    l = e.expanded,
    s = e.colSpan,
    d = e.isEmpty,
    c = He(_e, ['scrollbarSize', 'fixHeader', 'fixColumn', 'componentWidth', 'horizonScroll']),
    f = c.scrollbarSize,
    u = c.fixHeader,
    p = c.fixColumn,
    m = c.componentWidth,
    g = c.horizonScroll,
    h = o
  return (
    (d ? g : p) &&
      (h = a.createElement(
        'div',
        {
          style: { width: m - (u ? f : 0), position: 'sticky', left: 0, overflow: 'hidden' },
          className: ''.concat(t, '-expanded-row-fixed')
        },
        m !== 0 && h
      )),
    a.createElement(
      r,
      { className: i, style: { display: l ? null : 'none' } },
      a.createElement(Rt, { component: n, prefixCls: t, colSpan: s }, h)
    )
  )
}
function br(e) {
  var t = e.className,
    o = e.style,
    r = e.record,
    n = e.index,
    i = e.renderIndex,
    l = e.rowKey,
    s = e.rowExpandable,
    d = e.expandedKeys,
    c = e.onRow,
    f = e.indent,
    u = f === void 0 ? 0 : f,
    p = e.rowComponent,
    m = e.cellComponent,
    g = e.scopeCellComponent,
    h = e.childrenColumnName,
    v = He(_e, [
      'prefixCls',
      'fixedInfoList',
      'flattenColumns',
      'expandableType',
      'expandRowByClick',
      'onTriggerExpand',
      'rowClassName',
      'expandedRowClassName',
      'indentSize',
      'expandIcon',
      'expandedRowRender',
      'expandIconColumnIndex'
    ]),
    b = v.prefixCls,
    x = v.fixedInfoList,
    E = v.flattenColumns,
    P = v.expandableType,
    C = v.expandRowByClick,
    y = v.onTriggerExpand,
    T = v.rowClassName,
    k = v.expandedRowClassName,
    _ = v.indentSize,
    $ = v.expandIcon,
    D = v.expandedRowRender,
    I = v.expandIconColumnIndex,
    w = a.useState(!1),
    B = ge(w, 2),
    ne = B[0],
    K = B[1],
    z = d && d.has(l)
  a.useEffect(
    function () {
      z && K(!0)
    },
    [z]
  )
  var Y = P === 'row' && (!s || s(r)),
    F = P === 'nest',
    oe = h && r && r[h],
    M = Y || F,
    ue = a.useRef(y)
  ue.current = y
  var be = function () {
      ue.current.apply(ue, arguments)
    },
    ae = c == null ? void 0 : c(r, n),
    he = function (R) {
      var O
      C && M && be(r, R)
      for (var S = arguments.length, L = new Array(S > 1 ? S - 1 : 0), J = 1; J < S; J++)
        L[J - 1] = arguments[J]
      ae == null || (O = ae.onClick) === null || O === void 0 || O.call.apply(O, [ae, R].concat(L))
    },
    H
  typeof T == 'string' ? (H = T) : typeof T == 'function' && (H = T(r, n, u))
  var q = It(E),
    Ce = a.createElement(
      p,
      pe({}, ae, {
        'data-row-key': l,
        className: G(
          t,
          ''.concat(b, '-row'),
          ''.concat(b, '-row-level-').concat(u),
          H,
          ae && ae.className
        ),
        style: W(W({}, o), ae ? ae.style : null),
        onClick: he
      }),
      E.map(function (N, R) {
        var O = N.render,
          S = N.dataIndex,
          L = N.className,
          J = q[R],
          Z = x[R],
          ye
        R === (I || 0) &&
          F &&
          (ye = a.createElement(
            a.Fragment,
            null,
            a.createElement('span', {
              style: { paddingLeft: ''.concat(_ * u, 'px') },
              className: ''.concat(b, '-row-indent indent-level-').concat(u)
            }),
            $({ prefixCls: b, expanded: z, expandable: oe, record: r, onExpand: be })
          ))
        var Re
        return (
          N.onCell && (Re = N.onCell(r, n)),
          a.createElement(
            Rt,
            pe(
              {
                className: L,
                ellipsis: N.ellipsis,
                align: N.align,
                scope: N.rowScope,
                component: N.rowScope ? g : m,
                prefixCls: b,
                key: J,
                record: r,
                index: n,
                renderIndex: i,
                dataIndex: S,
                render: O,
                shouldCellUpdate: N.shouldCellUpdate,
                expanded: ye && z
              },
              Z,
              { appendNode: ye, additionalProps: Re }
            )
          )
        )
      })
    ),
    ce
  if (Y && (ne || z)) {
    var U = D(r, n, u + 1, z),
      j = k && k(r, n, u)
    ce = a.createElement(
      vr,
      {
        expanded: z,
        className: G(
          ''.concat(b, '-expanded-row'),
          ''.concat(b, '-expanded-row-level-').concat(u + 1),
          j
        ),
        prefixCls: b,
        component: p,
        cellComponent: m,
        colSpan: E.length,
        isEmpty: !1
      },
      U
    )
  }
  return a.createElement(a.Fragment, null, Ce, ce)
}
br.displayName = 'BodyRow'
const ja = Et(br)
function _a(e) {
  var t = e.columnKey,
    o = e.onColumnResize,
    r = a.useRef()
  return (
    a.useEffect(function () {
      r.current && o(t, r.current.offsetWidth)
    }, []),
    a.createElement(
      Qt,
      { data: t },
      a.createElement(
        'td',
        { ref: r, style: { padding: 0, border: 0, height: 0 } },
        a.createElement('div', { style: { height: 0, overflow: 'hidden' } }, ' ')
      )
    )
  )
}
function Fa(e) {
  var t = e.prefixCls,
    o = e.columnsKey,
    r = e.onColumnResize
  return a.createElement(
    'tr',
    {
      'aria-hidden': 'true',
      className: ''.concat(t, '-measure-row'),
      style: { height: 0, fontSize: 0 }
    },
    a.createElement(
      Qt.Collection,
      {
        onBatchResize: function (i) {
          i.forEach(function (l) {
            var s = l.data,
              d = l.size
            r(s, d.offsetWidth)
          })
        }
      },
      o.map(function (n) {
        return a.createElement(_a, { key: n, columnKey: n, onColumnResize: r })
      })
    )
  )
}
function xr(e) {
  var t = e.data,
    o = e.getRowKey,
    r = e.measureColumnWidth,
    n = e.expandedKeys,
    i = e.onRow,
    l = e.rowExpandable,
    s = e.emptyNode,
    d = e.childrenColumnName,
    c = He(_e, ['prefixCls', 'getComponent', 'onColumnResize', 'flattenColumns']),
    f = c.prefixCls,
    u = c.getComponent,
    p = c.onColumnResize,
    m = c.flattenColumns,
    g = La(t, d, n, o),
    h = a.useRef({ renderWithProps: !1 }),
    v = u(['body', 'wrapper'], 'tbody'),
    b = u(['body', 'row'], 'tr'),
    x = u(['body', 'cell'], 'td'),
    E = u(['body', 'cell'], 'th'),
    P
  t.length
    ? (P = g.map(function (y, T) {
        var k = y.record,
          _ = y.indent,
          $ = y.index,
          D = o(k, T)
        return a.createElement(ja, {
          key: D,
          rowKey: D,
          record: k,
          index: T,
          renderIndex: $,
          rowComponent: b,
          cellComponent: x,
          scopeCellComponent: E,
          expandedKeys: n,
          onRow: i,
          getRowKey: o,
          rowExpandable: l,
          childrenColumnName: d,
          indent: _
        })
      }))
    : (P = a.createElement(
        vr,
        {
          expanded: !0,
          className: ''.concat(f, '-placeholder'),
          prefixCls: f,
          component: b,
          cellComponent: x,
          colSpan: m.length,
          isEmpty: !0
        },
        s
      ))
  var C = It(m)
  return a.createElement(
    pr.Provider,
    { value: h.current },
    a.createElement(
      v,
      { className: ''.concat(f, '-tbody') },
      r && a.createElement(Fa, { prefixCls: f, columnsKey: C, onColumnResize: p }),
      P
    )
  )
}
xr.displayName = 'Body'
const Ha = Et(xr)
var ka = ['expandable'],
  st = 'RC_TABLE_INTERNAL_COL_DEFINE'
function Aa(e) {
  var t = e.expandable,
    o = at(e, ka),
    r
  return (
    'expandable' in e ? (r = W(W({}, o), t)) : (r = o),
    r.showExpandColumn === !1 && (r.expandIconColumnIndex = -1),
    r
  )
}
var Ka = ['columnType']
function Sr(e) {
  for (
    var t = e.colWidths,
      o = e.columns,
      r = e.columCount,
      n = [],
      i = r || o.length,
      l = !1,
      s = i - 1;
    s >= 0;
    s -= 1
  ) {
    var d = t[s],
      c = o && o[s],
      f = c && c[st]
    if (d || f || l) {
      var u = f || {}
      u.columnType
      var p = at(u, Ka)
      n.unshift(a.createElement('col', pe({ key: s, style: { width: d } }, p))), (l = !0)
    }
  }
  return a.createElement('colgroup', null, n)
}
var Wa = [
  'className',
  'noData',
  'columns',
  'flattenColumns',
  'colWidths',
  'columCount',
  'stickyOffsets',
  'direction',
  'fixHeader',
  'stickyTopOffset',
  'stickyBottomOffset',
  'stickyClassName',
  'onScroll',
  'maxContentScroll',
  'children'
]
function Va(e, t) {
  return a.useMemo(
    function () {
      for (var o = [], r = 0; r < t; r += 1) {
        var n = e[r]
        if (n !== void 0) o[r] = n
        else return null
      }
      return o
    },
    [e.join('_'), t]
  )
}
var Cr = a.forwardRef(function (e, t) {
  var o = e.className,
    r = e.noData,
    n = e.columns,
    i = e.flattenColumns,
    l = e.colWidths,
    s = e.columCount,
    d = e.stickyOffsets,
    c = e.direction,
    f = e.fixHeader,
    u = e.stickyTopOffset,
    p = e.stickyBottomOffset,
    m = e.stickyClassName,
    g = e.onScroll,
    h = e.maxContentScroll,
    v = e.children,
    b = at(e, Wa),
    x = He(_e, ['prefixCls', 'scrollbarSize', 'isSticky']),
    E = x.prefixCls,
    P = x.scrollbarSize,
    C = x.isSticky,
    y = C && !f ? 0 : P,
    T = a.useRef(null),
    k = a.useCallback(function (K) {
      In(t, K), In(T, K)
    }, [])
  a.useEffect(function () {
    var K
    function z(Y) {
      var F = Y,
        oe = F.currentTarget,
        M = F.deltaX
      M && (g({ currentTarget: oe, scrollLeft: oe.scrollLeft + M }), Y.preventDefault())
    }
    return (
      (K = T.current) === null || K === void 0 || K.addEventListener('wheel', z),
      function () {
        var Y
        ;(Y = T.current) === null || Y === void 0 || Y.removeEventListener('wheel', z)
      }
    )
  }, [])
  var _ = a.useMemo(
      function () {
        return i.every(function (K) {
          return K.width >= 0
        })
      },
      [i]
    ),
    $ = i[i.length - 1],
    D = {
      fixed: $ ? $.fixed : null,
      scrollbar: !0,
      onHeaderCell: function () {
        return { className: ''.concat(E, '-cell-scrollbar') }
      }
    },
    I = a.useMemo(
      function () {
        return y ? [].concat(fe(n), [D]) : n
      },
      [y, n]
    ),
    w = a.useMemo(
      function () {
        return y ? [].concat(fe(i), [D]) : i
      },
      [y, i]
    ),
    B = a.useMemo(
      function () {
        var K = d.right,
          z = d.left
        return W(
          W({}, d),
          {},
          {
            left:
              c === 'rtl'
                ? [].concat(
                    fe(
                      z.map(function (Y) {
                        return Y + y
                      })
                    ),
                    [0]
                  )
                : z,
            right:
              c === 'rtl'
                ? K
                : [].concat(
                    fe(
                      K.map(function (Y) {
                        return Y + y
                      })
                    ),
                    [0]
                  ),
            isSticky: C
          }
        )
      },
      [y, d, C]
    ),
    ne = Va(l, s)
  return a.createElement(
    'div',
    {
      style: W({ overflow: 'hidden' }, C ? { top: u, bottom: p } : {}),
      ref: k,
      className: G(o, X({}, m, !!m))
    },
    a.createElement(
      'table',
      { style: { tableLayout: 'fixed', visibility: r || ne ? null : 'hidden' } },
      (!r || !h || _) &&
        a.createElement(Sr, {
          colWidths: ne ? [].concat(fe(ne), [y]) : [],
          columCount: s + 1,
          columns: w
        }),
      v(W(W({}, b), {}, { stickyOffsets: B, columns: I, flattenColumns: w }))
    )
  )
})
Cr.displayName = 'FixedHolder'
const Bn = a.memo(Cr)
function yr(e) {
  var t = e.cells,
    o = e.stickyOffsets,
    r = e.flattenColumns,
    n = e.rowComponent,
    i = e.cellComponent,
    l = e.tdCellComponent,
    s = e.onHeaderRow,
    d = e.index,
    c = He(_e, ['prefixCls', 'direction']),
    f = c.prefixCls,
    u = c.direction,
    p
  s &&
    (p = s(
      t.map(function (g) {
        return g.column
      }),
      d
    ))
  var m = It(
    t.map(function (g) {
      return g.column
    })
  )
  return a.createElement(
    n,
    p,
    t.map(function (g, h) {
      var v = g.column,
        b = en(g.colStart, g.colEnd, r, o, u, v),
        x
      return (
        v && v.onHeaderCell && (x = g.column.onHeaderCell(v)),
        a.createElement(
          Rt,
          pe(
            {},
            g,
            {
              scope: v.title ? (g.colSpan > 1 ? 'colgroup' : 'col') : null,
              ellipsis: v.ellipsis,
              align: v.align,
              component: v.title ? i : l,
              prefixCls: f,
              key: m[h]
            },
            b,
            { additionalProps: x, rowType: 'header' }
          )
        )
      )
    })
  )
}
yr.displayName = 'HeaderRow'
function Xa(e) {
  var t = []
  function o(l, s) {
    var d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0
    t[d] = t[d] || []
    var c = s,
      f = l.filter(Boolean).map(function (u) {
        var p = {
            key: u.key,
            className: u.className || '',
            children: u.title,
            column: u,
            colStart: c
          },
          m = 1,
          g = u.children
        return (
          g &&
            g.length > 0 &&
            ((m = o(g, c, d + 1).reduce(function (h, v) {
              return h + v
            }, 0)),
            (p.hasSubColumns = !0)),
          'colSpan' in u && (m = u.colSpan),
          'rowSpan' in u && (p.rowSpan = u.rowSpan),
          (p.colSpan = m),
          (p.colEnd = p.colStart + m - 1),
          t[d].push(p),
          (c += m),
          m
        )
      })
    return f
  }
  o(e, 0)
  for (
    var r = t.length,
      n = function (s) {
        t[s].forEach(function (d) {
          !('rowSpan' in d) && !d.hasSubColumns && (d.rowSpan = r - s)
        })
      },
      i = 0;
    i < r;
    i += 1
  )
    n(i)
  return t
}
function Ua(e) {
  var t = e.stickyOffsets,
    o = e.columns,
    r = e.flattenColumns,
    n = e.onHeaderRow,
    i = He(_e, ['prefixCls', 'getComponent']),
    l = i.prefixCls,
    s = i.getComponent,
    d = a.useMemo(
      function () {
        return Xa(o)
      },
      [o]
    ),
    c = s(['header', 'wrapper'], 'thead'),
    f = s(['header', 'row'], 'tr'),
    u = s(['header', 'cell'], 'th'),
    p = s(['header', 'cell'], 'td')
  return a.createElement(
    c,
    { className: ''.concat(l, '-thead') },
    d.map(function (m, g) {
      var h = a.createElement(yr, {
        key: g,
        flattenColumns: r,
        cells: m,
        stickyOffsets: t,
        rowComponent: f,
        cellComponent: u,
        tdCellComponent: p,
        onHeaderRow: n,
        index: g
      })
      return h
    })
  )
}
const Mn = Et(Ua)
var Ga = ['children'],
  Ja = ['fixed']
function tn(e) {
  return Zr(e)
    .filter(function (t) {
      return a.isValidElement(t)
    })
    .map(function (t) {
      var o = t.key,
        r = t.props,
        n = r.children,
        i = at(r, Ga),
        l = W({ key: o }, i)
      return n && (l.children = tn(n)), l
    })
}
function Kt(e) {
  return e
    .filter(function (t) {
      return t && ut(t) === 'object'
    })
    .reduce(function (t, o) {
      var r = o.fixed,
        n = r === !0 ? 'left' : r,
        i = o.children
      return i && i.length > 0
        ? [].concat(
            fe(t),
            fe(
              Kt(i).map(function (l) {
                return W({ fixed: n }, l)
              })
            )
          )
        : [].concat(fe(t), [W(W({}, o), {}, { fixed: n })])
    }, [])
}
function Ya(e) {
  return e.map(function (t) {
    var o = t.fixed,
      r = at(t, Ja),
      n = o
    return o === 'left' ? (n = 'right') : o === 'right' && (n = 'left'), W({ fixed: n }, r)
  })
}
function qa(e, t) {
  var o = e.prefixCls,
    r = e.columns,
    n = e.children,
    i = e.expandable,
    l = e.expandedKeys,
    s = e.columnTitle,
    d = e.getRowKey,
    c = e.onTriggerExpand,
    f = e.expandIcon,
    u = e.rowExpandable,
    p = e.expandIconColumnIndex,
    m = e.direction,
    g = e.expandRowByClick,
    h = e.columnWidth,
    v = e.fixed,
    b = a.useMemo(
      function () {
        return r || tn(n)
      },
      [r, n]
    ),
    x = a.useMemo(
      function () {
        if (i) {
          var C,
            y = b.slice()
          if (!y.includes(Ye)) {
            var T = p || 0
            T >= 0 && y.splice(T, 0, Ye)
          }
          var k = y.indexOf(Ye)
          y = y.filter(function (I, w) {
            return I !== Ye || w === k
          })
          var _ = b[k],
            $
          ;(v === 'left' || v) && !p
            ? ($ = 'left')
            : (v === 'right' || v) && p === b.length
            ? ($ = 'right')
            : ($ = _ ? _.fixed : null)
          var D =
            ((C = {}),
            X(C, st, { className: ''.concat(o, '-expand-icon-col'), columnType: 'EXPAND_COLUMN' }),
            X(C, 'title', s),
            X(C, 'fixed', $),
            X(C, 'className', ''.concat(o, '-row-expand-icon-cell')),
            X(C, 'width', h),
            X(C, 'render', function (w, B, ne) {
              var K = d(B, ne),
                z = l.has(K),
                Y = u ? u(B) : !0,
                F = f({ prefixCls: o, expanded: z, expandable: Y, record: B, onExpand: c })
              return g
                ? a.createElement(
                    'span',
                    {
                      onClick: function (M) {
                        return M.stopPropagation()
                      }
                    },
                    F
                  )
                : F
            }),
            C)
          return y.map(function (I) {
            return I === Ye ? D : I
          })
        }
        return b.filter(function (I) {
          return I !== Ye
        })
      },
      [i, b, d, l, f, m]
    ),
    E = a.useMemo(
      function () {
        var C = x
        return (
          t && (C = t(C)),
          C.length ||
            (C = [
              {
                render: function () {
                  return null
                }
              }
            ]),
          C
        )
      },
      [t, x, m]
    ),
    P = a.useMemo(
      function () {
        return m === 'rtl' ? Ya(Kt(E)) : Kt(E)
      },
      [E, m]
    )
  return [E, P]
}
function Qa(e) {
  var t,
    o = e.prefixCls,
    r = e.record,
    n = e.onExpand,
    i = e.expanded,
    l = e.expandable,
    s = ''.concat(o, '-row-expand-icon')
  if (!l) return a.createElement('span', { className: G(s, ''.concat(o, '-row-spaced')) })
  var d = function (f) {
    n(r, f), f.stopPropagation()
  }
  return a.createElement('span', {
    className: G(
      s,
      ((t = {}),
      X(t, ''.concat(o, '-row-expanded'), i),
      X(t, ''.concat(o, '-row-collapsed'), !i),
      t)
    ),
    onClick: d
  })
}
function Za(e, t, o) {
  var r = []
  function n(i) {
    ;(i || []).forEach(function (l, s) {
      r.push(t(l, s)), n(l[o])
    })
  }
  return n(e), r
}
function ei(e, t, o) {
  var r = Aa(e),
    n = r.expandIcon,
    i = r.expandedRowKeys,
    l = r.defaultExpandedRowKeys,
    s = r.defaultExpandAllRows,
    d = r.expandedRowRender,
    c = r.onExpand,
    f = r.onExpandedRowsChange,
    u = r.childrenColumnName,
    p = n || Qa,
    m = u || 'children',
    g = a.useMemo(
      function () {
        return d
          ? 'row'
          : (e.expandable && e.internalHooks === Ct && e.expandable.__PARENT_RENDER_ICON__) ||
            t.some(function (C) {
              return C && ut(C) === 'object' && C[m]
            })
          ? 'nest'
          : !1
      },
      [!!d, t]
    ),
    h = a.useState(function () {
      return l || (s ? Za(t, o, m) : [])
    }),
    v = ge(h, 2),
    b = v[0],
    x = v[1],
    E = a.useMemo(
      function () {
        return new Set(i || b || [])
      },
      [i, b]
    ),
    P = a.useCallback(
      function (C) {
        var y = o(C, t.indexOf(C)),
          T,
          k = E.has(y)
        k ? (E.delete(y), (T = fe(E))) : (T = [].concat(fe(E), [y])), x(T), c && c(!k, C), f && f(T)
      },
      [o, E, t, c, f]
    )
  return [r, g, E, p, m, P]
}
function ti(e, t, o, r) {
  var n = e.map(function (i, l) {
    return en(l, l, e, t, o, r == null ? void 0 : r[l])
  })
  return nr(
    function () {
      return n
    },
    [n],
    function (i, l) {
      return !ct(i, l)
    }
  )
}
function $r(e) {
  var t = a.useRef(e),
    o = a.useState({}),
    r = ge(o, 2),
    n = r[1],
    i = a.useRef(null),
    l = a.useRef([])
  function s(d) {
    l.current.push(d)
    var c = Promise.resolve()
    ;(i.current = c),
      c.then(function () {
        if (i.current === c) {
          var f = l.current,
            u = t.current
          ;(l.current = []),
            f.forEach(function (p) {
              t.current = p(t.current)
            }),
            (i.current = null),
            u !== t.current && n({})
        }
      })
  }
  return (
    a.useEffect(function () {
      return function () {
        i.current = null
      }
    }, []),
    [t.current, s]
  )
}
function ni(e) {
  var t = a.useRef(e || null),
    o = a.useRef()
  function r() {
    window.clearTimeout(o.current)
  }
  function n(l) {
    ;(t.current = l),
      r(),
      (o.current = window.setTimeout(function () {
        ;(t.current = null), (o.current = void 0)
      }, 100))
  }
  function i() {
    return t.current
  }
  return (
    a.useEffect(function () {
      return r
    }, []),
    [n, i]
  )
}
function ri() {
  var e = a.useState(-1),
    t = ge(e, 2),
    o = t[0],
    r = t[1],
    n = a.useState(-1),
    i = ge(n, 2),
    l = i[0],
    s = i[1],
    d = a.useCallback(function (c, f) {
      r(c), s(f)
    }, [])
  return [o, l, d]
}
var Ln = Xn() ? window : null
function oi(e, t) {
  var o = ut(e) === 'object' ? e : {},
    r = o.offsetHeader,
    n = r === void 0 ? 0 : r,
    i = o.offsetSummary,
    l = i === void 0 ? 0 : i,
    s = o.offsetScroll,
    d = s === void 0 ? 0 : s,
    c = o.getContainer,
    f =
      c === void 0
        ? function () {
            return Ln
          }
        : c,
    u = f() || Ln
  return a.useMemo(
    function () {
      var p = !!e
      return {
        isSticky: p,
        stickyClassName: p ? ''.concat(t, '-sticky-holder') : '',
        offsetHeader: n,
        offsetSummary: l,
        offsetScroll: d,
        container: u
      }
    },
    [d, n, l, t, u]
  )
}
function ai(e, t, o) {
  var r = a.useMemo(
    function () {
      for (var n = [], i = [], l = 0, s = 0, d = 0; d < t; d += 1)
        if (o === 'rtl') {
          ;(i[d] = s), (s += e[d] || 0)
          var c = t - d - 1
          ;(n[c] = l), (l += e[c] || 0)
        } else {
          ;(n[d] = l), (l += e[d] || 0)
          var f = t - d - 1
          ;(i[f] = s), (s += e[f] || 0)
        }
      return { left: n, right: i }
    },
    [e, t, o]
  )
  return r
}
function jn(e) {
  var t = e.className,
    o = e.children
  return a.createElement('div', { className: t }, o)
}
var ii = function (t, o) {
  var r,
    n,
    i = t.scrollBodyRef,
    l = t.onScroll,
    s = t.offsetScroll,
    d = t.container,
    c = He(_e, 'prefixCls'),
    f = ((r = i.current) === null || r === void 0 ? void 0 : r.scrollWidth) || 0,
    u = ((n = i.current) === null || n === void 0 ? void 0 : n.clientWidth) || 0,
    p = f && u * (u / f),
    m = a.useRef(),
    g = $r({ scrollLeft: 0, isHiddenScrollBar: !1 }),
    h = ge(g, 2),
    v = h[0],
    b = h[1],
    x = a.useRef({ delta: 0, x: 0 }),
    E = a.useState(!1),
    P = ge(E, 2),
    C = P[0],
    y = P[1],
    T = function () {
      y(!1)
    },
    k = function (w) {
      w.persist(),
        (x.current.delta = w.pageX - v.scrollLeft),
        (x.current.x = 0),
        y(!0),
        w.preventDefault()
    },
    _ = function (w) {
      var B,
        ne = w || ((B = window) === null || B === void 0 ? void 0 : B.event),
        K = ne.buttons
      if (!C || K === 0) {
        C && y(!1)
        return
      }
      var z = x.current.x + w.pageX - x.current.x - x.current.delta
      z <= 0 && (z = 0),
        z + p >= u && (z = u - p),
        l({ scrollLeft: (z / u) * (f + 2) }),
        (x.current.x = w.pageX)
    },
    $ = function () {
      if (i.current) {
        var w = zn(i.current).top,
          B = w + i.current.offsetHeight,
          ne =
            d === window
              ? document.documentElement.scrollTop + window.innerHeight
              : zn(d).top + d.clientHeight
        B - Rn() <= ne || w >= ne - s
          ? b(function (K) {
              return W(W({}, K), {}, { isHiddenScrollBar: !0 })
            })
          : b(function (K) {
              return W(W({}, K), {}, { isHiddenScrollBar: !1 })
            })
      }
    },
    D = function (w) {
      b(function (B) {
        return W(W({}, B), {}, { scrollLeft: (w / f) * u || 0 })
      })
    }
  return (
    a.useImperativeHandle(o, function () {
      return { setScrollLeft: D }
    }),
    a.useEffect(
      function () {
        var I = ht(document.body, 'mouseup', T, !1),
          w = ht(document.body, 'mousemove', _, !1)
        return (
          $(),
          function () {
            I.remove(), w.remove()
          }
        )
      },
      [p, C]
    ),
    a.useEffect(
      function () {
        var I = ht(d, 'scroll', $, !1),
          w = ht(window, 'resize', $, !1)
        return function () {
          I.remove(), w.remove()
        }
      },
      [d]
    ),
    a.useEffect(
      function () {
        v.isHiddenScrollBar ||
          b(function (I) {
            var w = i.current
            return w
              ? W(W({}, I), {}, { scrollLeft: (w.scrollLeft / w.scrollWidth) * w.clientWidth })
              : I
          })
      },
      [v.isHiddenScrollBar]
    ),
    f <= u || !p || v.isHiddenScrollBar
      ? null
      : a.createElement(
          'div',
          {
            style: { height: Rn(), width: u, bottom: s },
            className: ''.concat(c, '-sticky-scroll')
          },
          a.createElement('div', {
            onMouseDown: k,
            ref: m,
            className: G(
              ''.concat(c, '-sticky-scroll-bar'),
              X({}, ''.concat(c, '-sticky-scroll-bar-active'), C)
            ),
            style: {
              width: ''.concat(p, 'px'),
              transform: 'translate3d('.concat(v.scrollLeft, 'px, 0, 0)')
            }
          })
        )
  )
}
const li = a.forwardRef(ii)
var si = [],
  ci = {},
  Ct = 'rc-table-internal-hook'
function di() {
  return 'No Data'
}
function ui(e) {
  var t,
    o = W({ rowKey: 'key', prefixCls: 'rc-table', emptyText: di }, e),
    r = o.prefixCls,
    n = o.className,
    i = o.rowClassName,
    l = o.style,
    s = o.data,
    d = o.rowKey,
    c = o.scroll,
    f = o.tableLayout,
    u = o.direction,
    p = o.title,
    m = o.footer,
    g = o.summary,
    h = o.caption,
    v = o.id,
    b = o.showHeader,
    x = o.components,
    E = o.emptyText,
    P = o.onRow,
    C = o.onHeaderRow,
    y = o.internalHooks,
    T = o.transformColumns,
    k = o.internalRefs,
    _ = o.sticky,
    $ = s || si,
    D = !!$.length,
    I = a.useCallback(
      function (ee, se) {
        return rr(x, ee) || se
      },
      [x]
    ),
    w = a.useMemo(
      function () {
        return typeof d == 'function'
          ? d
          : function (ee) {
              var se = ee && ee[d]
              return se
            }
      },
      [d]
    ),
    B = ri(),
    ne = ge(B, 3),
    K = ne[0],
    z = ne[1],
    Y = ne[2],
    F = ei(o, $, w),
    oe = ge(F, 6),
    M = oe[0],
    ue = oe[1],
    be = oe[2],
    ae = oe[3],
    he = oe[4],
    H = oe[5],
    q = a.useState(0),
    Ce = ge(q, 2),
    ce = Ce[0],
    U = Ce[1],
    j = qa(
      W(
        W(W({}, o), M),
        {},
        {
          expandable: !!M.expandedRowRender,
          columnTitle: M.columnTitle,
          expandedKeys: be,
          getRowKey: w,
          onTriggerExpand: H,
          expandIcon: ae,
          expandIconColumnIndex: M.expandIconColumnIndex,
          direction: u
        }
      ),
      y === Ct ? T : null
    ),
    N = ge(j, 2),
    R = N[0],
    O = N[1],
    S = a.useMemo(
      function () {
        return { columns: R, flattenColumns: O }
      },
      [R, O]
    ),
    L = a.useRef(),
    J = a.useRef(),
    Z = a.useRef(),
    ye = a.useRef(),
    Re = a.useRef(),
    Ke = a.useState(!1),
    ve = ge(Ke, 2),
    ke = ve[0],
    $e = ve[1],
    De = a.useState(!1),
    Q = ge(De, 2),
    re = Q[0],
    ie = Q[1],
    xe = $r(new Map()),
    me = ge(xe, 2),
    A = me[0],
    Ne = me[1],
    Be = It(O),
    Le = Be.map(function (ee) {
      return A.get(ee)
    }),
    Ae = a.useMemo(
      function () {
        return Le
      },
      [Le.join('_')]
    ),
    Me = ai(Ae, O.length, u),
    Oe = c && At(c.y),
    we = (c && At(c.x)) || !!M.fixed,
    Te =
      we &&
      O.some(function (ee) {
        var se = ee.fixed
        return se
      }),
    ze = a.useRef(),
    Ee = oi(_, r),
    Se = Ee.isSticky,
    Ie = Ee.offsetHeader,
    et = Ee.offsetSummary,
    V = Ee.offsetScroll,
    de = Ee.stickyClassName,
    Pe = Ee.container,
    le = a.useMemo(
      function () {
        return g == null ? void 0 : g($)
      },
      [g, $]
    ),
    Fe = (Oe || Se) && a.isValidElement(le) && le.type === Nt && le.props.fixed,
    qe,
    tt,
    We
  Oe && (tt = { overflowY: 'scroll', maxHeight: c.y }),
    we &&
      ((qe = { overflowX: 'auto' }),
      Oe || (tt = { overflowY: 'hidden' }),
      (We = {
        width: (c == null ? void 0 : c.x) === !0 ? 'auto' : c == null ? void 0 : c.x,
        minWidth: '100%'
      }))
  var nn = a.useCallback(function (ee, se) {
      eo(L.current) &&
        Ne(function (je) {
          if (je.get(ee) !== se) {
            var Xe = new Map(je)
            return Xe.set(ee, se), Xe
          }
          return je
        })
    }, []),
    Dr = ni(null),
    rn = ge(Dr, 2),
    Br = rn[0],
    on = rn[1]
  function pt(ee, se) {
    se &&
      (typeof se == 'function'
        ? se(ee)
        : se.scrollLeft !== ee &&
          ((se.scrollLeft = ee),
          se.scrollLeft !== ee &&
            setTimeout(function () {
              se.scrollLeft = ee
            }, 0)))
  }
  var nt = er(function (ee) {
      var se = ee.currentTarget,
        je = ee.scrollLeft,
        Xe = u === 'rtl',
        Ue = typeof je == 'number' ? je : se.scrollLeft,
        Sn = se || ci
      if (!on() || on() === Sn) {
        var Mt
        Br(Sn),
          pt(Ue, J.current),
          pt(Ue, Z.current),
          pt(Ue, Re.current),
          pt(Ue, (Mt = ze.current) === null || Mt === void 0 ? void 0 : Mt.setScrollLeft)
      }
      if (se) {
        var Lt = se.scrollWidth,
          jt = se.clientWidth
        if (Lt === jt) {
          $e(!1), ie(!1)
          return
        }
        Xe ? ($e(-Ue < Lt - jt), ie(-Ue > 0)) : ($e(Ue > 0), ie(Ue < Lt - jt))
      }
    }),
    an = function () {
      we && Z.current ? nt({ currentTarget: Z.current }) : ($e(!1), ie(!1))
    },
    Mr = function (se) {
      var je = se.width
      je !== ce && (an(), U(L.current ? L.current.offsetWidth : je))
    },
    ln = a.useRef(!1)
  a.useEffect(
    function () {
      ln.current && an()
    },
    [we, s, R.length]
  ),
    a.useEffect(function () {
      ln.current = !0
    }, [])
  var Lr = a.useState(0),
    sn = ge(Lr, 2),
    mt = sn[0],
    cn = sn[1],
    jr = a.useState(!0),
    dn = ge(jr, 2),
    un = dn[0],
    _r = dn[1]
  a.useEffect(function () {
    Z.current instanceof Element ? cn(Nn(Z.current).width) : cn(Nn(ye.current).width),
      _r(wo('position', 'sticky'))
  }, []),
    a.useEffect(function () {
      y === Ct && k && (k.body.current = Z.current)
    })
  var Fr = a.useCallback(
      function (ee) {
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(Mn, ee),
          Fe === 'top' && a.createElement(vt, ee, le)
        )
      },
      [Fe, le]
    ),
    Hr = a.useCallback(
      function (ee) {
        return a.createElement(vt, ee, le)
      },
      [le]
    ),
    fn = I(['table'], 'table'),
    gt = a.useMemo(
      function () {
        return (
          f ||
          (Te
            ? (c == null ? void 0 : c.x) === 'max-content'
              ? 'auto'
              : 'fixed'
            : Oe ||
              Se ||
              O.some(function (ee) {
                var se = ee.ellipsis
                return se
              })
            ? 'fixed'
            : 'auto')
        )
      },
      [Oe, Te, O, f, Se]
    ),
    Tt,
    zt = {
      colWidths: Ae,
      columCount: O.length,
      stickyOffsets: Me,
      onHeaderRow: C,
      fixHeader: Oe,
      scroll: c
    },
    kr = a.useMemo(
      function () {
        return D ? null : typeof E == 'function' ? E() : E
      },
      [D, E]
    ),
    pn = a.createElement(Ha, {
      data: $,
      measureColumnWidth: Oe || we || Se,
      expandedKeys: be,
      rowExpandable: M.rowExpandable,
      getRowKey: w,
      onRow: P,
      emptyNode: kr,
      childrenColumnName: he
    }),
    mn = a.createElement(Sr, {
      colWidths: O.map(function (ee) {
        var se = ee.width
        return se
      }),
      columns: O
    }),
    gn =
      h != null ? a.createElement('caption', { className: ''.concat(r, '-caption') }, h) : void 0,
    hn = I(['body']),
    Ar = Pn(o, { data: !0 }),
    vn = Pn(o, { aria: !0 })
  if (Oe || Se) {
    var Dt
    typeof hn == 'function'
      ? ((Dt = hn($, { scrollbarSize: mt, ref: Z, onScroll: nt })),
        (zt.colWidths = O.map(function (ee, se) {
          var je = ee.width,
            Xe = se === R.length - 1 ? je - mt : je
          return typeof Xe == 'number' && !Number.isNaN(Xe) ? Xe : 0
        })))
      : (Dt = a.createElement(
          'div',
          { style: W(W({}, qe), tt), onScroll: nt, ref: Z, className: G(''.concat(r, '-body')) },
          a.createElement(
            fn,
            pe({ style: W(W({}, We), {}, { tableLayout: gt }) }, vn),
            gn,
            mn,
            pn,
            !Fe &&
              le &&
              a.createElement(vt, { stickyOffsets: Me, flattenColumns: O, columns: R }, le)
          )
        ))
    var bn = W(
      W(W({ noData: !$.length, maxContentScroll: we && c.x === 'max-content' }, zt), S),
      {},
      { direction: u, stickyClassName: de, onScroll: nt }
    )
    Tt = a.createElement(
      a.Fragment,
      null,
      b !== !1 &&
        a.createElement(
          Bn,
          pe({}, bn, { stickyTopOffset: Ie, className: ''.concat(r, '-header'), ref: J }),
          Fr
        ),
      Dt,
      Fe &&
        Fe !== 'top' &&
        a.createElement(
          Bn,
          pe({}, bn, { stickyBottomOffset: et, className: ''.concat(r, '-summary'), ref: Re }),
          Hr
        ),
      Se &&
        a.createElement(li, {
          ref: ze,
          offsetScroll: V,
          scrollBodyRef: Z,
          onScroll: nt,
          container: Pe
        })
    )
  } else
    Tt = a.createElement(
      'div',
      { style: W(W({}, qe), tt), className: G(''.concat(r, '-content')), onScroll: nt, ref: Z },
      a.createElement(
        fn,
        pe({ style: W(W({}, We), {}, { tableLayout: gt }) }, vn),
        gn,
        mn,
        b !== !1 && a.createElement(Mn, pe({}, zt, S)),
        pn,
        le && a.createElement(vt, { stickyOffsets: Me, flattenColumns: O, columns: R }, le)
      )
    )
  var Bt = a.createElement(
    'div',
    pe(
      {
        className: G(
          r,
          n,
          ((t = {}),
          X(t, ''.concat(r, '-rtl'), u === 'rtl'),
          X(t, ''.concat(r, '-ping-left'), ke),
          X(t, ''.concat(r, '-ping-right'), re),
          X(t, ''.concat(r, '-layout-fixed'), f === 'fixed'),
          X(t, ''.concat(r, '-fixed-header'), Oe),
          X(t, ''.concat(r, '-fixed-column'), Te),
          X(t, ''.concat(r, '-scroll-horizontal'), we),
          X(t, ''.concat(r, '-has-fix-left'), O[0] && O[0].fixed),
          X(
            t,
            ''.concat(r, '-has-fix-right'),
            O[O.length - 1] && O[O.length - 1].fixed === 'right'
          ),
          t)
        ),
        style: l,
        id: v,
        ref: L
      },
      Ar
    ),
    p && a.createElement(jn, { className: ''.concat(r, '-title') }, p($)),
    a.createElement('div', { ref: ye, className: ''.concat(r, '-container') }, Tt),
    m && a.createElement(jn, { className: ''.concat(r, '-footer') }, m($))
  )
  we && (Bt = a.createElement(Qt, { onResize: Mr }, Bt))
  var xn = ti(O, Me, u, R),
    Kr = a.useMemo(
      function () {
        return {
          prefixCls: r,
          getComponent: I,
          scrollbarSize: mt,
          direction: u,
          fixedInfoList: xn,
          isSticky: Se,
          supportSticky: un,
          componentWidth: ce,
          fixHeader: Oe,
          fixColumn: Te,
          horizonScroll: we,
          tableLayout: gt,
          rowClassName: i,
          expandedRowClassName: M.expandedRowClassName,
          expandIcon: ae,
          expandableType: ue,
          expandRowByClick: M.expandRowByClick,
          expandedRowRender: M.expandedRowRender,
          onTriggerExpand: H,
          expandIconColumnIndex: M.expandIconColumnIndex,
          indentSize: M.indentSize,
          allColumnsFixedLeft: O.every(function (ee) {
            return ee.fixed === 'left'
          }),
          columns: R,
          flattenColumns: O,
          onColumnResize: nn,
          hoverStartRow: K,
          hoverEndRow: z,
          onHover: Y
        }
      },
      [
        r,
        I,
        mt,
        u,
        xn,
        Se,
        un,
        ce,
        Oe,
        Te,
        we,
        gt,
        i,
        M.expandedRowClassName,
        ae,
        ue,
        M.expandRowByClick,
        M.expandedRowRender,
        H,
        M.expandIconColumnIndex,
        M.indentSize,
        R,
        O,
        nn,
        K,
        z,
        Y
      ]
    )
  return a.createElement(_e.Provider, { value: Kr }, Bt)
}
function wr(e) {
  return ba(ui, e)
}
var Pt = wr()
Pt.EXPAND_COLUMN = Ye
Pt.Column = Ba
Pt.ColumnGroup = Ma
Pt.Summary = gr
function fi(e) {
  return null
}
function pi(e) {
  return null
}
function mi(e) {
  return function (o) {
    let { prefixCls: r, onExpand: n, record: i, expanded: l, expandable: s } = o
    const d = `${r}-row-expand-icon`
    return a.createElement('button', {
      type: 'button',
      onClick: (c) => {
        n(i, c), c.stopPropagation()
      },
      className: G(d, {
        [`${d}-spaced`]: !s,
        [`${d}-expanded`]: s && l,
        [`${d}-collapsed`]: s && !l
      }),
      'aria-label': l ? e.collapse : e.expand,
      'aria-expanded': l
    })
  }
}
function Ze(e, t) {
  return 'key' in e && e.key !== void 0 && e.key !== null
    ? e.key
    : e.dataIndex
    ? Array.isArray(e.dataIndex)
      ? e.dataIndex.join('.')
      : e.dataIndex
    : t
}
function ft(e, t) {
  return t ? `${t}-${e}` : `${e}`
}
function Ot(e, t) {
  return typeof e == 'function' ? e(t) : e
}
function gi(e, t) {
  const o = Ot(e, t)
  return Object.prototype.toString.call(o) === '[object Object]' ? '' : o
}
function hi(e) {
  const t = a.useRef(e),
    o = to()
  return [
    () => t.current,
    (r) => {
      ;(t.current = r), o()
    }
  ]
}
function _n(e) {
  let { value: t, onChange: o, filterSearch: r, tablePrefixCls: n, locale: i } = e
  return r
    ? a.createElement(
        'div',
        { className: `${n}-filter-dropdown-search` },
        a.createElement(no, {
          prefix: a.createElement(ro, null),
          placeholder: i.filterSearchPlaceholder,
          onChange: o,
          value: t,
          htmlSize: 1,
          className: `${n}-filter-dropdown-search-input`
        })
      )
    : null
}
const vi = (e) => {
    const { keyCode: t } = e
    t === or.ENTER && e.stopPropagation()
  },
  bi = (e) =>
    a.createElement(
      'div',
      { className: e.className, onClick: (t) => t.stopPropagation(), onKeyDown: vi },
      e.children
    ),
  xi = bi
function Si(e) {
  return e.some((t) => {
    let { children: o } = t
    return o
  })
}
function Er(e, t) {
  return typeof t == 'string' || typeof t == 'number'
    ? t == null
      ? void 0
      : t.toString().toLowerCase().includes(e.trim().toLowerCase())
    : !1
}
function Ir(e) {
  let {
    filters: t,
    prefixCls: o,
    filteredKeys: r,
    filterMultiple: n,
    searchValue: i,
    filterSearch: l
  } = e
  return t.map((s, d) => {
    const c = String(s.value)
    if (s.children)
      return {
        key: c || d,
        label: s.text,
        popupClassName: `${o}-dropdown-submenu`,
        children: Ir({
          filters: s.children,
          prefixCls: o,
          filteredKeys: r,
          filterMultiple: n,
          searchValue: i,
          filterSearch: l
        })
      }
    const f = n ? St : ir,
      u = {
        key: s.value !== void 0 ? c : d,
        label: a.createElement(
          a.Fragment,
          null,
          a.createElement(f, { checked: r.includes(c) }),
          a.createElement('span', null, s.text)
        )
      }
    return i.trim() ? (typeof l == 'function' ? (l(i, s) ? u : null) : Er(i, s.text) ? u : null) : u
  })
}
function Ci(e) {
  var t, o
  const {
      tablePrefixCls: r,
      prefixCls: n,
      column: i,
      dropdownPrefixCls: l,
      columnKey: s,
      filterMultiple: d,
      filterMode: c = 'menu',
      filterSearch: f = !1,
      filterState: u,
      triggerFilter: p,
      locale: m,
      children: g,
      getPopupContainer: h
    } = e,
    {
      filterDropdownOpen: v,
      onFilterDropdownOpenChange: b,
      filterResetToDefaultFilteredValue: x,
      defaultFilteredValue: E,
      filterDropdownVisible: P,
      onFilterDropdownVisibleChange: C
    } = i,
    [y, T] = a.useState(!1),
    k = !!(
      u &&
      ((!((t = u.filteredKeys) === null || t === void 0) && t.length) || u.forceFiltered)
    ),
    _ = (S) => {
      T(S), b == null || b(S), C == null || C(S)
    },
    $ = (o = v ?? P) !== null && o !== void 0 ? o : y,
    D = u == null ? void 0 : u.filteredKeys,
    [I, w] = hi(D || []),
    B = (S) => {
      let { selectedKeys: L } = S
      w(L)
    },
    ne = (S, L) => {
      let { node: J, checked: Z } = L
      B(d ? { selectedKeys: S } : { selectedKeys: Z && J.key ? [J.key] : [] })
    }
  a.useEffect(() => {
    y && B({ selectedKeys: D || [] })
  }, [D])
  const [K, z] = a.useState([]),
    Y = (S) => {
      z(S)
    },
    [F, oe] = a.useState(''),
    M = (S) => {
      const { value: L } = S.target
      oe(L)
    }
  a.useEffect(() => {
    y || oe('')
  }, [y])
  const ue = (S) => {
      const L = S && S.length ? S : null
      if ((L === null && (!u || !u.filteredKeys)) || ct(L, u == null ? void 0 : u.filteredKeys, !0))
        return null
      p({ column: i, key: s, filteredKeys: L })
    },
    be = () => {
      _(!1), ue(I())
    },
    ae = function () {
      let { confirm: S, closeDropdown: L } =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : { confirm: !1, closeDropdown: !1 }
      S && ue([]), L && _(!1), oe(''), w(x ? (E || []).map((J) => String(J)) : [])
    },
    he = function () {
      let { closeDropdown: S } =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { closeDropdown: !0 }
      S && _(!1), ue(I())
    },
    H = (S) => {
      S && D !== void 0 && w(D || []), _(S), !S && !i.filterDropdown && be()
    },
    q = G({ [`${l}-menu-without-submenu`]: !Si(i.filters || []) }),
    Ce = (S) => {
      if (S.target.checked) {
        const L = rt(i == null ? void 0 : i.filters).map((J) => String(J))
        w(L)
      } else w([])
    },
    ce = (S) => {
      let { filters: L } = S
      return (L || []).map((J, Z) => {
        const ye = String(J.value),
          Re = { title: J.text, key: J.value !== void 0 ? ye : Z }
        return J.children && (Re.children = ce({ filters: J.children })), Re
      })
    },
    U = (S) => {
      var L
      return Object.assign(Object.assign({}, S), {
        text: S.title,
        value: S.key,
        children: ((L = S.children) === null || L === void 0 ? void 0 : L.map((J) => U(J))) || []
      })
    }
  let j
  if (typeof i.filterDropdown == 'function')
    j = i.filterDropdown({
      prefixCls: `${l}-custom`,
      setSelectedKeys: (S) => B({ selectedKeys: S }),
      selectedKeys: I(),
      confirm: he,
      clearFilters: ae,
      filters: i.filters,
      visible: $,
      close: () => {
        _(!1)
      }
    })
  else if (i.filterDropdown) j = i.filterDropdown
  else {
    const S = I() || [],
      L = () =>
        (i.filters || []).length === 0
          ? a.createElement(Tn, {
              image: Tn.PRESENTED_IMAGE_SIMPLE,
              description: m.filterEmptyText,
              imageStyle: { height: 24 },
              style: { margin: 0, padding: '16px 0' }
            })
          : c === 'tree'
          ? a.createElement(
              a.Fragment,
              null,
              a.createElement(_n, {
                filterSearch: f,
                value: F,
                onChange: M,
                tablePrefixCls: r,
                locale: m
              }),
              a.createElement(
                'div',
                { className: `${r}-filter-dropdown-tree` },
                d
                  ? a.createElement(
                      St,
                      {
                        checked: S.length === rt(i.filters).length,
                        indeterminate: S.length > 0 && S.length < rt(i.filters).length,
                        className: `${r}-filter-dropdown-checkall`,
                        onChange: Ce
                      },
                      m.filterCheckall
                    )
                  : null,
                a.createElement(go, {
                  checkable: !0,
                  selectable: !1,
                  blockNode: !0,
                  multiple: d,
                  checkStrictly: !d,
                  className: `${l}-menu`,
                  onCheck: ne,
                  checkedKeys: S,
                  selectedKeys: S,
                  showIcon: !1,
                  treeData: ce({ filters: i.filters }),
                  autoExpandParent: !0,
                  defaultExpandAll: !0,
                  filterTreeNode: F.trim()
                    ? (Z) => (typeof f == 'function' ? f(F, U(Z)) : Er(F, Z.title))
                    : void 0
                })
              )
            )
          : a.createElement(
              a.Fragment,
              null,
              a.createElement(_n, {
                filterSearch: f,
                value: F,
                onChange: M,
                tablePrefixCls: r,
                locale: m
              }),
              a.createElement(oo, {
                selectable: !0,
                multiple: d,
                prefixCls: `${l}-menu`,
                className: q,
                onSelect: B,
                onDeselect: B,
                selectedKeys: S,
                getPopupContainer: h,
                openKeys: K,
                onOpenChange: Y,
                items: Ir({
                  filters: i.filters || [],
                  filterSearch: f,
                  prefixCls: n,
                  filteredKeys: I(),
                  filterMultiple: d,
                  searchValue: F
                })
              })
            ),
      J = () =>
        x
          ? ct(
              (E || []).map((Z) => String(Z)),
              S,
              !0
            )
          : S.length === 0
    j = a.createElement(
      a.Fragment,
      null,
      L(),
      a.createElement(
        'div',
        { className: `${n}-dropdown-btns` },
        a.createElement(
          On,
          { type: 'link', size: 'small', disabled: J(), onClick: () => ae() },
          m.filterReset
        ),
        a.createElement(On, { type: 'primary', size: 'small', onClick: be }, m.filterConfirm)
      )
    )
  }
  i.filterDropdown && (j = a.createElement(ao, { selectable: void 0 }, j))
  const N = () => a.createElement(xi, { className: `${n}-dropdown` }, j)
  let R
  typeof i.filterIcon == 'function'
    ? (R = i.filterIcon(k))
    : i.filterIcon
    ? (R = i.filterIcon)
    : (R = a.createElement(ga, null))
  const { direction: O } = a.useContext(ot)
  return a.createElement(
    'div',
    { className: `${n}-column` },
    a.createElement('span', { className: `${r}-column-title` }, g),
    a.createElement(
      ar,
      {
        dropdownRender: N,
        trigger: ['click'],
        open: $,
        onOpenChange: H,
        getPopupContainer: h,
        placement: O === 'rtl' ? 'bottomLeft' : 'bottomRight'
      },
      a.createElement(
        'span',
        {
          role: 'button',
          tabIndex: -1,
          className: G(`${n}-trigger`, { active: k }),
          onClick: (S) => {
            S.stopPropagation()
          }
        },
        R
      )
    )
  )
}
function Wt(e, t, o) {
  let r = []
  return (
    (e || []).forEach((n, i) => {
      var l
      const s = ft(i, o)
      if (n.filters || 'filterDropdown' in n || 'onFilter' in n)
        if ('filteredValue' in n) {
          let d = n.filteredValue
          'filterDropdown' in n ||
            (d = (l = d == null ? void 0 : d.map(String)) !== null && l !== void 0 ? l : d),
            r.push({ column: n, key: Ze(n, s), filteredKeys: d, forceFiltered: n.filtered })
        } else
          r.push({
            column: n,
            key: Ze(n, s),
            filteredKeys: t && n.defaultFilteredValue ? n.defaultFilteredValue : void 0,
            forceFiltered: n.filtered
          })
      'children' in n && (r = [].concat(fe(r), fe(Wt(n.children, t, s))))
    }),
    r
  )
}
function Rr(e, t, o, r, n, i, l, s) {
  return o.map((d, c) => {
    const f = ft(c, s),
      { filterMultiple: u = !0, filterMode: p, filterSearch: m } = d
    let g = d
    if (g.filters || g.filterDropdown) {
      const h = Ze(g, f),
        v = r.find((b) => {
          let { key: x } = b
          return h === x
        })
      g = Object.assign(Object.assign({}, g), {
        title: (b) =>
          a.createElement(
            Ci,
            {
              tablePrefixCls: e,
              prefixCls: `${e}-filter`,
              dropdownPrefixCls: t,
              column: g,
              columnKey: h,
              filterState: v,
              filterMultiple: u,
              filterMode: p,
              filterSearch: m,
              triggerFilter: i,
              locale: n,
              getPopupContainer: l
            },
            Ot(d.title, b)
          )
      })
    }
    return (
      'children' in g &&
        (g = Object.assign(Object.assign({}, g), {
          children: Rr(e, t, g.children, r, n, i, l, f)
        })),
      g
    )
  })
}
function rt(e) {
  let t = []
  return (
    (e || []).forEach((o) => {
      let { value: r, children: n } = o
      t.push(r), n && (t = [].concat(fe(t), fe(rt(n))))
    }),
    t
  )
}
function Fn(e) {
  const t = {}
  return (
    e.forEach((o) => {
      let { key: r, filteredKeys: n, column: i } = o
      const { filters: l, filterDropdown: s } = i
      if (s) t[r] = n || null
      else if (Array.isArray(n)) {
        const d = rt(l)
        t[r] = d.filter((c) => n.includes(String(c)))
      } else t[r] = null
    }),
    t
  )
}
function Hn(e, t) {
  return t.reduce((o, r) => {
    const {
      column: { onFilter: n, filters: i },
      filteredKeys: l
    } = r
    return n && l && l.length
      ? o.filter((s) =>
          l.some((d) => {
            const c = rt(i),
              f = c.findIndex((p) => String(p) === String(d)),
              u = f !== -1 ? c[f] : d
            return n(u, s)
          })
        )
      : o
  }, e)
}
const Nr = (e) => e.flatMap((t) => ('children' in t ? [t].concat(fe(Nr(t.children || []))) : [t]))
function yi(e) {
  let {
    prefixCls: t,
    dropdownPrefixCls: o,
    mergedColumns: r,
    onFilterChange: n,
    getPopupContainer: i,
    locale: l
  } = e
  const s = Nr(r || []),
    [d, c] = a.useState(() => Wt(s, !0)),
    f = a.useMemo(() => {
      const g = Wt(s, !1)
      if (g.length === 0) return g
      let h = !0
      if (
        (g.forEach((v) => {
          let { filteredKeys: b } = v
          b !== void 0 && (h = !1)
        }),
        h)
      ) {
        const v = (s || []).map((b, x) => Ze(b, ft(x)))
        return d
          .filter((b) => {
            let { key: x } = b
            return v.includes(x)
          })
          .map((b) => {
            const x = s[v.findIndex((E) => E === b.key)]
            return Object.assign(Object.assign({}, b), {
              column: Object.assign(Object.assign({}, b.column), x),
              forceFiltered: x.filtered
            })
          })
      }
      return g
    }, [s, d]),
    u = a.useMemo(() => Fn(f), [f]),
    p = (g) => {
      const h = f.filter((v) => {
        let { key: b } = v
        return b !== g.key
      })
      h.push(g), c(h), n(Fn(h), h)
    }
  return [(g) => Rr(t, o, g, f, l, p, i), f, u]
}
function $i(e, t, o) {
  const r = a.useRef({})
  function n(i) {
    if (
      !r.current ||
      r.current.data !== e ||
      r.current.childrenColumnName !== t ||
      r.current.getRowKey !== o
    ) {
      let s = function (d) {
        d.forEach((c, f) => {
          const u = o(c, f)
          l.set(u, c), c && typeof c == 'object' && t in c && s(c[t] || [])
        })
      }
      const l = new Map()
      s(e), (r.current = { data: e, childrenColumnName: t, kvMap: l, getRowKey: o })
    }
    return r.current.kvMap.get(i)
  }
  return [n]
}
var wi =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var o = {}
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (o[r] = e[r])
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++)
        t.indexOf(r[n]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[n]) &&
          (o[r[n]] = e[r[n]])
    return o
  }
const Pr = 10
function Ei(e, t) {
  const o = { current: e.current, pageSize: e.pageSize }
  return (
    Object.keys(t && typeof t == 'object' ? t : {}).forEach((n) => {
      const i = e[n]
      typeof i != 'function' && (o[n] = i)
    }),
    o
  )
}
function Ii(e, t, o) {
  const r = o && typeof o == 'object' ? o : {},
    { total: n = 0 } = r,
    i = wi(r, ['total']),
    [l, s] = a.useState(() => ({
      current: 'defaultCurrent' in i ? i.defaultCurrent : 1,
      pageSize: 'defaultPageSize' in i ? i.defaultPageSize : Pr
    })),
    d = ra(l, i, { total: n > 0 ? n : e }),
    c = Math.ceil((n || e) / d.pageSize)
  d.current > c && (d.current = c || 1)
  const f = (p, m) => {
      s({ current: p ?? 1, pageSize: m || d.pageSize })
    },
    u = (p, m) => {
      var g
      o && ((g = o.onChange) === null || g === void 0 || g.call(o, p, m)),
        f(p, m),
        t(p, m || (d == null ? void 0 : d.pageSize))
    }
  return o === !1 ? [{}, () => {}] : [Object.assign(Object.assign({}, d), { onChange: u }), f]
}
const Je = {},
  Vt = 'SELECT_ALL',
  Xt = 'SELECT_INVERT',
  Ut = 'SELECT_NONE',
  kn = []
function Or(e, t) {
  let o = []
  return (
    (t || []).forEach((r) => {
      o.push(r), r && typeof r == 'object' && e in r && (o = [].concat(fe(o), fe(Or(e, r[e]))))
    }),
    o
  )
}
function Ri(e, t) {
  const {
      preserveSelectedRowKeys: o,
      selectedRowKeys: r,
      defaultSelectedRowKeys: n,
      getCheckboxProps: i,
      onChange: l,
      onSelect: s,
      onSelectAll: d,
      onSelectInvert: c,
      onSelectNone: f,
      onSelectMultiple: u,
      columnWidth: p,
      type: m,
      selections: g,
      fixed: h,
      renderCell: v,
      hideSelectAll: b,
      checkStrictly: x = !0
    } = t || {},
    {
      prefixCls: E,
      data: P,
      pageData: C,
      getRecordByKey: y,
      getRowKey: T,
      expandType: k,
      childrenColumnName: _,
      locale: $,
      getPopupContainer: D
    } = e,
    [I, w] = io(r || n || kn, { value: r }),
    B = a.useRef(new Map()),
    ne = a.useCallback(
      (U) => {
        if (o) {
          const j = new Map()
          U.forEach((N) => {
            let R = y(N)
            !R && B.current.has(N) && (R = B.current.get(N)), j.set(N, R)
          }),
            (B.current = j)
        }
      },
      [y, o]
    )
  a.useEffect(() => {
    ne(I)
  }, [I])
  const { keyEntities: K } = a.useMemo(
      () => (x ? { keyEntities: null } : ho(P, { externalGetKey: T, childrenPropName: _ })),
      [P, T, x, _]
    ),
    z = a.useMemo(() => Or(_, C), [C, _]),
    Y = a.useMemo(() => {
      const U = new Map()
      return (
        z.forEach((j, N) => {
          const R = T(j, N),
            O = (i ? i(j) : null) || {}
          U.set(R, O)
        }),
        U
      )
    }, [z, T, i]),
    F = a.useCallback(
      (U) => {
        var j
        return !!(!((j = Y.get(T(U))) === null || j === void 0) && j.disabled)
      },
      [Y, T]
    ),
    [oe, M] = a.useMemo(() => {
      if (x) return [I || [], []]
      const { checkedKeys: U, halfCheckedKeys: j } = _t(I, !0, K, F)
      return [U || [], j]
    }, [I, x, K, F]),
    ue = a.useMemo(() => {
      const U = m === 'radio' ? oe.slice(0, 1) : oe
      return new Set(U)
    }, [oe, m]),
    be = a.useMemo(() => (m === 'radio' ? new Set() : new Set(M)), [M, m]),
    [ae, he] = a.useState(null)
  a.useEffect(() => {
    t || w(kn)
  }, [!!t])
  const H = a.useCallback(
      (U, j) => {
        let N, R
        ne(U),
          o
            ? ((N = U), (R = U.map((O) => B.current.get(O))))
            : ((N = []),
              (R = []),
              U.forEach((O) => {
                const S = y(O)
                S !== void 0 && (N.push(O), R.push(S))
              })),
          w(N),
          l == null || l(N, R, { type: j })
      },
      [w, y, l, o]
    ),
    q = a.useCallback(
      (U, j, N, R) => {
        if (s) {
          const O = N.map((S) => y(S))
          s(y(U), j, O, R)
        }
        H(N, 'single')
      },
      [s, y, H]
    ),
    Ce = a.useMemo(
      () =>
        !g || b
          ? null
          : (g === !0 ? [Vt, Xt, Ut] : g)
              .map((j) =>
                j === Vt
                  ? {
                      key: 'all',
                      text: $.selectionAll,
                      onSelect() {
                        H(
                          P.map((N, R) => T(N, R)).filter((N) => {
                            const R = Y.get(N)
                            return !(R != null && R.disabled) || ue.has(N)
                          }),
                          'all'
                        )
                      }
                    }
                  : j === Xt
                  ? {
                      key: 'invert',
                      text: $.selectInvert,
                      onSelect() {
                        const N = new Set(ue)
                        C.forEach((O, S) => {
                          const L = T(O, S),
                            J = Y.get(L)
                          ;(J != null && J.disabled) || (N.has(L) ? N.delete(L) : N.add(L))
                        })
                        const R = Array.from(N)
                        c && c(R), H(R, 'invert')
                      }
                    }
                  : j === Ut
                  ? {
                      key: 'none',
                      text: $.selectNone,
                      onSelect() {
                        f == null || f(),
                          H(
                            Array.from(ue).filter((N) => {
                              const R = Y.get(N)
                              return R == null ? void 0 : R.disabled
                            }),
                            'none'
                          )
                      }
                    }
                  : j
              )
              .map((j) =>
                Object.assign(Object.assign({}, j), {
                  onSelect: function () {
                    for (var N, R, O = arguments.length, S = new Array(O), L = 0; L < O; L++)
                      S[L] = arguments[L]
                    ;(R = j.onSelect) === null ||
                      R === void 0 ||
                      (N = R).call.apply(N, [j].concat(S)),
                      he(null)
                  }
                })
              ),
      [g, ue, C, T, c, H]
    )
  return [
    a.useCallback(
      (U) => {
        var j
        if (!t) return U.filter((Q) => Q !== Je)
        let N = fe(U)
        const R = new Set(ue),
          O = z.map(T).filter((Q) => !Y.get(Q).disabled),
          S = O.every((Q) => R.has(Q)),
          L = O.some((Q) => R.has(Q)),
          J = () => {
            const Q = []
            S
              ? O.forEach((ie) => {
                  R.delete(ie), Q.push(ie)
                })
              : O.forEach((ie) => {
                  R.has(ie) || (R.add(ie), Q.push(ie))
                })
            const re = Array.from(R)
            d == null ||
              d(
                !S,
                re.map((ie) => y(ie)),
                Q.map((ie) => y(ie))
              ),
              H(re, 'all'),
              he(null)
          }
        let Z
        if (m !== 'radio') {
          let Q
          if (Ce) {
            const A = {
              getPopupContainer: D,
              items: Ce.map((Ne, Be) => {
                const { key: Le, text: Ae, onSelect: Me } = Ne
                return {
                  key: Le || Be,
                  onClick: () => {
                    Me == null || Me(O)
                  },
                  label: Ae
                }
              })
            }
            Q = a.createElement(
              'div',
              { className: `${E}-selection-extra` },
              a.createElement(
                ar,
                { menu: A, getPopupContainer: D },
                a.createElement('span', null, a.createElement(lo, null))
              )
            )
          }
          const re = z
              .map((A, Ne) => {
                const Be = T(A, Ne),
                  Le = Y.get(Be) || {}
                return Object.assign({ checked: R.has(Be) }, Le)
              })
              .filter((A) => {
                let { disabled: Ne } = A
                return Ne
              }),
            ie = !!re.length && re.length === z.length,
            xe =
              ie &&
              re.every((A) => {
                let { checked: Ne } = A
                return Ne
              }),
            me =
              ie &&
              re.some((A) => {
                let { checked: Ne } = A
                return Ne
              })
          Z =
            !b &&
            a.createElement(
              'div',
              { className: `${E}-selection` },
              a.createElement(St, {
                checked: ie ? xe : !!z.length && S,
                indeterminate: ie ? !xe && me : !S && L,
                onChange: J,
                disabled: z.length === 0 || ie,
                'aria-label': Q ? 'Custom selection' : 'Select all',
                skipGroup: !0
              }),
              Q
            )
        }
        let ye
        m === 'radio'
          ? (ye = (Q, re, ie) => {
              const xe = T(re, ie),
                me = R.has(xe)
              return {
                node: a.createElement(
                  ir,
                  Object.assign({}, Y.get(xe), {
                    checked: me,
                    onClick: (A) => A.stopPropagation(),
                    onChange: (A) => {
                      R.has(xe) || q(xe, !0, [xe], A.nativeEvent)
                    }
                  })
                ),
                checked: me
              }
            })
          : (ye = (Q, re, ie) => {
              var xe
              const me = T(re, ie),
                A = R.has(me),
                Ne = be.has(me),
                Be = Y.get(me)
              let Le
              return (
                k === 'nest'
                  ? (Le = Ne)
                  : (Le =
                      (xe = Be == null ? void 0 : Be.indeterminate) !== null && xe !== void 0
                        ? xe
                        : Ne),
                {
                  node: a.createElement(
                    St,
                    Object.assign({}, Be, {
                      indeterminate: Le,
                      checked: A,
                      skipGroup: !0,
                      onClick: (Ae) => Ae.stopPropagation(),
                      onChange: (Ae) => {
                        let { nativeEvent: Me } = Ae
                        const { shiftKey: Oe } = Me
                        let we = -1,
                          Te = -1
                        if (Oe && x) {
                          const ze = new Set([ae, me])
                          O.some((Ee, Se) => {
                            if (ze.has(Ee))
                              if (we === -1) we = Se
                              else return (Te = Se), !0
                            return !1
                          })
                        }
                        if (Te !== -1 && we !== Te && x) {
                          const ze = O.slice(we, Te + 1),
                            Ee = []
                          A
                            ? ze.forEach((Ie) => {
                                R.has(Ie) && (Ee.push(Ie), R.delete(Ie))
                              })
                            : ze.forEach((Ie) => {
                                R.has(Ie) || (Ee.push(Ie), R.add(Ie))
                              })
                          const Se = Array.from(R)
                          u == null ||
                            u(
                              !A,
                              Se.map((Ie) => y(Ie)),
                              Ee.map((Ie) => y(Ie))
                            ),
                            H(Se, 'multiple')
                        } else {
                          const ze = oe
                          if (x) {
                            const Ee = A ? vo(ze, me) : bo(ze, me)
                            q(me, !A, Ee, Me)
                          } else {
                            const Ee = _t([].concat(fe(ze), [me]), !0, K, F),
                              { checkedKeys: Se, halfCheckedKeys: Ie } = Ee
                            let et = Se
                            if (A) {
                              const V = new Set(Se)
                              V.delete(me),
                                (et = _t(
                                  Array.from(V),
                                  { checked: !1, halfCheckedKeys: Ie },
                                  K,
                                  F
                                ).checkedKeys)
                            }
                            q(me, !A, et, Me)
                          }
                        }
                        he(A ? null : me)
                      }
                    })
                  ),
                  checked: A
                }
              )
            })
        const Re = (Q, re, ie) => {
          const { node: xe, checked: me } = ye(Q, re, ie)
          return v ? v(me, re, ie, xe) : xe
        }
        if (!N.includes(Je))
          if (
            N.findIndex((Q) => {
              var re
              return (
                ((re = Q[st]) === null || re === void 0 ? void 0 : re.columnType) ===
                'EXPAND_COLUMN'
              )
            }) === 0
          ) {
            const [Q, ...re] = N
            N = [Q, Je].concat(fe(re))
          } else N = [Je].concat(fe(N))
        const Ke = N.indexOf(Je)
        N = N.filter((Q, re) => Q !== Je || re === Ke)
        const ve = N[Ke - 1],
          ke = N[Ke + 1]
        let $e = h
        $e === void 0 &&
          ((ke == null ? void 0 : ke.fixed) !== void 0
            ? ($e = ke.fixed)
            : (ve == null ? void 0 : ve.fixed) !== void 0 && ($e = ve.fixed)),
          $e &&
            ve &&
            ((j = ve[st]) === null || j === void 0 ? void 0 : j.columnType) === 'EXPAND_COLUMN' &&
            ve.fixed === void 0 &&
            (ve.fixed = $e)
        const De = {
          fixed: $e,
          width: p,
          className: `${E}-selection-column`,
          title: t.columnTitle || Z,
          render: Re,
          [st]: { className: `${E}-selection-col` }
        }
        return N.map((Q) => (Q === Je ? De : Q))
      },
      [T, z, t, oe, ue, be, p, Ce, k, ae, Y, u, q, F]
    ),
    ue
  ]
}
const xt = 'ascend',
  Ft = 'descend'
function yt(e) {
  return typeof e.sorter == 'object' && typeof e.sorter.multiple == 'number'
    ? e.sorter.multiple
    : !1
}
function An(e) {
  return typeof e == 'function' ? e : e && typeof e == 'object' && e.compare ? e.compare : !1
}
function Ni(e, t) {
  return t ? e[e.indexOf(t) + 1] : e[0]
}
function Gt(e, t, o) {
  let r = []
  function n(i, l) {
    r.push({ column: i, key: Ze(i, l), multiplePriority: yt(i), sortOrder: i.sortOrder })
  }
  return (
    (e || []).forEach((i, l) => {
      const s = ft(l, o)
      i.children
        ? ('sortOrder' in i && n(i, s), (r = [].concat(fe(r), fe(Gt(i.children, t, s)))))
        : i.sorter &&
          ('sortOrder' in i
            ? n(i, s)
            : t &&
              i.defaultSortOrder &&
              r.push({
                column: i,
                key: Ze(i, s),
                multiplePriority: yt(i),
                sortOrder: i.defaultSortOrder
              }))
    }),
    r
  )
}
function Tr(e, t, o, r, n, i, l, s) {
  return (t || []).map((d, c) => {
    const f = ft(c, s)
    let u = d
    if (u.sorter) {
      const p = u.sortDirections || n,
        m = u.showSorterTooltip === void 0 ? l : u.showSorterTooltip,
        g = Ze(u, f),
        h = o.find((_) => {
          let { key: $ } = _
          return $ === g
        }),
        v = h ? h.sortOrder : null,
        b = Ni(p, v),
        x =
          p.includes(xt) &&
          a.createElement(ua, { className: G(`${e}-column-sorter-up`, { active: v === xt }) }),
        E =
          p.includes(Ft) &&
          a.createElement(la, { className: G(`${e}-column-sorter-down`, { active: v === Ft }) }),
        { cancelSort: P, triggerAsc: C, triggerDesc: y } = i || {}
      let T = P
      b === Ft ? (T = y) : b === xt && (T = C)
      const k = typeof m == 'object' ? m : { title: T }
      u = Object.assign(Object.assign({}, u), {
        className: G(u.className, { [`${e}-column-sort`]: v }),
        title: (_) => {
          const $ = a.createElement(
            'div',
            { className: `${e}-column-sorters` },
            a.createElement('span', { className: `${e}-column-title` }, Ot(d.title, _)),
            a.createElement(
              'span',
              { className: G(`${e}-column-sorter`, { [`${e}-column-sorter-full`]: !!(x && E) }) },
              a.createElement(
                'span',
                { className: `${e}-column-sorter-inner`, 'aria-hidden': 'true' },
                x,
                E
              )
            )
          )
          return m ? a.createElement(so, Object.assign({}, k), $) : $
        },
        onHeaderCell: (_) => {
          const $ = (d.onHeaderCell && d.onHeaderCell(_)) || {},
            D = $.onClick,
            I = $.onKeyDown
          ;($.onClick = (ne) => {
            r({ column: d, key: g, sortOrder: b, multiplePriority: yt(d) }), D == null || D(ne)
          }),
            ($.onKeyDown = (ne) => {
              ne.keyCode === or.ENTER &&
                (r({ column: d, key: g, sortOrder: b, multiplePriority: yt(d) }),
                I == null || I(ne))
            })
          const w = gi(d.title, {}),
            B = w == null ? void 0 : w.toString()
          return (
            v
              ? ($['aria-sort'] = v === 'ascend' ? 'ascending' : 'descending')
              : ($['aria-label'] = B || ''),
            ($.className = G($.className, `${e}-column-has-sorters`)),
            ($.tabIndex = 0),
            d.ellipsis && ($.title = (w ?? '').toString()),
            $
          )
        }
      })
    }
    return (
      'children' in u &&
        (u = Object.assign(Object.assign({}, u), {
          children: Tr(e, u.children, o, r, n, i, l, f)
        })),
      u
    )
  })
}
function Kn(e) {
  const { column: t, sortOrder: o } = e
  return { column: t, order: o, field: t.dataIndex, columnKey: t.key }
}
function Wn(e) {
  const t = e
    .filter((o) => {
      let { sortOrder: r } = o
      return r
    })
    .map(Kn)
  return t.length === 0 && e.length
    ? Object.assign(Object.assign({}, Kn(e[e.length - 1])), { column: void 0 })
    : t.length <= 1
    ? t[0] || {}
    : t
}
function Jt(e, t, o) {
  const r = t.slice().sort((l, s) => s.multiplePriority - l.multiplePriority),
    n = e.slice(),
    i = r.filter((l) => {
      let {
        column: { sorter: s },
        sortOrder: d
      } = l
      return An(s) && d
    })
  return i.length
    ? n
        .sort((l, s) => {
          for (let d = 0; d < i.length; d += 1) {
            const c = i[d],
              {
                column: { sorter: f },
                sortOrder: u
              } = c,
              p = An(f)
            if (p && u) {
              const m = p(l, s, u)
              if (m !== 0) return u === xt ? m : -m
            }
          }
          return 0
        })
        .map((l) => {
          const s = l[o]
          return s ? Object.assign(Object.assign({}, l), { [o]: Jt(s, t, o) }) : l
        })
    : n
}
function Pi(e) {
  let {
    prefixCls: t,
    mergedColumns: o,
    onSorterChange: r,
    sortDirections: n,
    tableLocale: i,
    showSorterTooltip: l
  } = e
  const [s, d] = a.useState(Gt(o, !0)),
    c = a.useMemo(() => {
      let g = !0
      const h = Gt(o, !1)
      if (!h.length) return s
      const v = []
      function b(E) {
        g ? v.push(E) : v.push(Object.assign(Object.assign({}, E), { sortOrder: null }))
      }
      let x = null
      return (
        h.forEach((E) => {
          x === null
            ? (b(E), E.sortOrder && (E.multiplePriority === !1 ? (g = !1) : (x = !0)))
            : ((x && E.multiplePriority !== !1) || (g = !1), b(E))
        }),
        v
      )
    }, [o, s]),
    f = a.useMemo(() => {
      const g = c.map((h) => {
        let { column: v, sortOrder: b } = h
        return { column: v, order: b }
      })
      return { sortColumns: g, sortColumn: g[0] && g[0].column, sortOrder: g[0] && g[0].order }
    }, [c])
  function u(g) {
    let h
    g.multiplePriority === !1 || !c.length || c[0].multiplePriority === !1
      ? (h = [g])
      : (h = [].concat(
          fe(
            c.filter((v) => {
              let { key: b } = v
              return b !== g.key
            })
          ),
          [g]
        )),
      d(h),
      r(Wn(h), h)
  }
  return [(g) => Tr(t, g, c, u, n, i, l), c, f, () => Wn(c)]
}
function zr(e, t) {
  return e.map((o) => {
    const r = Object.assign({}, o)
    return (r.title = Ot(o.title, t)), 'children' in r && (r.children = zr(r.children, t)), r
  })
}
function Oi(e) {
  return [a.useCallback((o) => zr(o, e), [e])]
}
const Ti = wr((e, t) => {
    const { _renderTimes: o } = e,
      { _renderTimes: r } = t
    return o !== r
  }),
  zi = (e) => {
    const { componentCls: t } = e,
      o = `${e.lineWidth}px ${e.lineType} ${e.tableBorderColor}`,
      r = (n, i, l) => ({
        [`&${t}-${n}`]: {
          [`> ${t}-container`]: {
            [`> ${t}-content, > ${t}-body`]: {
              '\n            > table > tbody > tr > th,\n            > table > tbody > tr > td\n          ':
                { [`> ${t}-expanded-row-fixed`]: { margin: `-${i}px -${l + e.lineWidth}px` } }
            }
          }
        }
      })
    return {
      [`${t}-wrapper`]: {
        [`${t}${t}-bordered`]: Object.assign(
          Object.assign(
            Object.assign(
              {
                [`> ${t}-title`]: { border: o, borderBottom: 0 },
                [`> ${t}-container`]: {
                  borderInlineStart: o,
                  [`
            > ${t}-content,
            > ${t}-header,
            > ${t}-body,
            > ${t}-summary
          `]: {
                    '> table': {
                      '\n                > thead > tr > th,\n                > tbody > tr > th,\n                > tbody > tr > td,\n                > tfoot > tr > th,\n                > tfoot > tr > td\n              ':
                        { borderInlineEnd: o },
                      '> thead': {
                        '> tr:not(:last-child) > th': { borderBottom: o },
                        '> tr > th::before': { backgroundColor: 'transparent !important' }
                      },
                      '\n                > thead > tr,\n                > tbody > tr,\n                > tfoot > tr\n              ':
                        { [`> ${t}-cell-fix-right-first::after`]: { borderInlineEnd: o } },
                      '\n                > tbody > tr > th,\n                > tbody > tr > td\n              ':
                        {
                          [`> ${t}-expanded-row-fixed`]: {
                            margin: `-${e.tablePaddingVertical}px -${
                              e.tablePaddingHorizontal + e.lineWidth
                            }px`,
                            '&::after': {
                              position: 'absolute',
                              top: 0,
                              insetInlineEnd: e.lineWidth,
                              bottom: 0,
                              borderInlineEnd: o,
                              content: '""'
                            }
                          }
                        }
                    }
                  },
                  [`
            > ${t}-content,
            > ${t}-header
          `]: { '> table': { borderTop: o } }
                },
                [`&${t}-scroll-horizontal`]: {
                  [`> ${t}-container > ${t}-body`]: {
                    '> table > tbody': {
                      [`
                > tr${t}-expanded-row,
                > tr${t}-placeholder
              `]: { '> th, > td': { borderInlineEnd: 0 } }
                    }
                  }
                }
              },
              r('middle', e.tablePaddingVerticalMiddle, e.tablePaddingHorizontalMiddle)
            ),
            r('small', e.tablePaddingVerticalSmall, e.tablePaddingHorizontalSmall)
          ),
          { [`> ${t}-footer`]: { border: o, borderTop: 0 } }
        ),
        [`${t}-cell`]: {
          [`${t}-container:first-child`]: { borderTop: 0 },
          '&-scrollbar:not([rowspan])': {
            boxShadow: `0 ${e.lineWidth}px 0 ${e.lineWidth}px ${e.tableHeaderBg}`
          }
        }
      }
    }
  },
  Di = zi,
  Bi = (e) => {
    const { componentCls: t } = e
    return {
      [`${t}-wrapper`]: {
        [`${t}-cell-ellipsis`]: Object.assign(Object.assign({}, co), {
          wordBreak: 'keep-all',
          [`
          &${t}-cell-fix-left-last,
          &${t}-cell-fix-right-first
        `]: {
            overflow: 'visible',
            [`${t}-cell-content`]: {
              display: 'block',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }
          },
          [`${t}-column-title`]: {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            wordBreak: 'keep-all'
          }
        })
      }
    }
  },
  Mi = Bi,
  Li = (e) => {
    const { componentCls: t } = e
    return {
      [`${t}-wrapper`]: {
        [`${t}-tbody > tr${t}-placeholder`]: {
          textAlign: 'center',
          color: e.colorTextDisabled,
          '\n          &:hover > th,\n          &:hover > td,\n        ': {
            background: e.colorBgContainer
          }
        }
      }
    }
  },
  ji = Li,
  _i = (e) => {
    const {
        componentCls: t,
        antCls: o,
        controlInteractiveSize: r,
        motionDurationSlow: n,
        lineWidth: i,
        paddingXS: l,
        lineType: s,
        tableBorderColor: d,
        tableExpandIconBg: c,
        tableExpandColumnWidth: f,
        borderRadius: u,
        fontSize: p,
        fontSizeSM: m,
        lineHeight: g,
        tablePaddingVertical: h,
        tablePaddingHorizontal: v,
        tableExpandedRowBg: b,
        paddingXXS: x
      } = e,
      E = r / 2 - i,
      P = E * 2 + i * 3,
      C = `${i}px ${s} ${d}`,
      y = x - i
    return {
      [`${t}-wrapper`]: {
        [`${t}-expand-icon-col`]: { width: f },
        [`${t}-row-expand-icon-cell`]: {
          textAlign: 'center',
          [`${t}-row-expand-icon`]: { display: 'inline-flex', float: 'none', verticalAlign: 'sub' }
        },
        [`${t}-row-indent`]: { height: 1, float: 'left' },
        [`${t}-row-expand-icon`]: Object.assign(Object.assign({}, xo(e)), {
          position: 'relative',
          float: 'left',
          boxSizing: 'border-box',
          width: P,
          height: P,
          padding: 0,
          color: 'inherit',
          lineHeight: `${P}px`,
          background: c,
          border: C,
          borderRadius: u,
          transform: `scale(${r / P})`,
          transition: `all ${n}`,
          userSelect: 'none',
          '&:focus, &:hover, &:active': { borderColor: 'currentcolor' },
          '&::before, &::after': {
            position: 'absolute',
            background: 'currentcolor',
            transition: `transform ${n} ease-out`,
            content: '""'
          },
          '&::before': { top: E, insetInlineEnd: y, insetInlineStart: y, height: i },
          '&::after': {
            top: y,
            bottom: y,
            insetInlineStart: E,
            width: i,
            transform: 'rotate(90deg)'
          },
          '&-collapsed::before': { transform: 'rotate(-180deg)' },
          '&-collapsed::after': { transform: 'rotate(0deg)' },
          '&-spaced': {
            '&::before, &::after': { display: 'none', content: 'none' },
            background: 'transparent',
            border: 0,
            visibility: 'hidden'
          }
        }),
        [`${t}-row-indent + ${t}-row-expand-icon`]: {
          marginTop: (p * g - i * 3) / 2 - Math.ceil((m * 1.4 - i * 3) / 2),
          marginInlineEnd: l
        },
        [`tr${t}-expanded-row`]: {
          '&, &:hover': { '> th, > td': { background: b } },
          [`${o}-descriptions-view`]: { display: 'flex', table: { flex: 'auto', width: 'auto' } }
        },
        [`${t}-expanded-row-fixed`]: {
          position: 'relative',
          margin: `-${h}px -${v}px`,
          padding: `${h}px ${v}px`
        }
      }
    }
  },
  Fi = _i,
  Hi = (e) => {
    const {
        componentCls: t,
        antCls: o,
        iconCls: r,
        tableFilterDropdownWidth: n,
        tableFilterDropdownSearchWidth: i,
        paddingXXS: l,
        paddingXS: s,
        colorText: d,
        lineWidth: c,
        lineType: f,
        tableBorderColor: u,
        tableHeaderIconColor: p,
        fontSizeSM: m,
        tablePaddingHorizontal: g,
        borderRadius: h,
        motionDurationSlow: v,
        colorTextDescription: b,
        colorPrimary: x,
        tableHeaderFilterActiveBg: E,
        colorTextDisabled: P,
        tableFilterDropdownBg: C,
        tableFilterDropdownHeight: y,
        controlItemBgHover: T,
        controlItemBgActive: k,
        boxShadowSecondary: _
      } = e,
      $ = `${o}-dropdown`,
      D = `${t}-filter-dropdown`,
      I = `${o}-tree`,
      w = `${c}px ${f} ${u}`
    return [
      {
        [`${t}-wrapper`]: {
          [`${t}-filter-column`]: { display: 'flex', justifyContent: 'space-between' },
          [`${t}-filter-trigger`]: {
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            marginBlock: -l,
            marginInline: `${l}px ${-g / 2}px`,
            padding: `0 ${l}px`,
            color: p,
            fontSize: m,
            borderRadius: h,
            cursor: 'pointer',
            transition: `all ${v}`,
            '&:hover': { color: b, background: E },
            '&.active': { color: x }
          }
        }
      },
      {
        [`${o}-dropdown`]: {
          [D]: Object.assign(Object.assign({}, wt(e)), {
            minWidth: n,
            backgroundColor: C,
            borderRadius: h,
            boxShadow: _,
            [`${$}-menu`]: {
              maxHeight: y,
              overflowX: 'hidden',
              border: 0,
              boxShadow: 'none',
              '&:empty::after': {
                display: 'block',
                padding: `${s}px 0`,
                color: P,
                fontSize: m,
                textAlign: 'center',
                content: '"Not Found"'
              }
            },
            [`${D}-tree`]: {
              paddingBlock: `${s}px 0`,
              paddingInline: s,
              [I]: { padding: 0 },
              [`${I}-treenode ${I}-node-content-wrapper:hover`]: { backgroundColor: T },
              [`${I}-treenode-checkbox-checked ${I}-node-content-wrapper`]: {
                '&, &:hover': { backgroundColor: k }
              }
            },
            [`${D}-search`]: {
              padding: s,
              borderBottom: w,
              '&-input': { input: { minWidth: i }, [r]: { color: P } }
            },
            [`${D}-checkall`]: { width: '100%', marginBottom: l, marginInlineStart: l },
            [`${D}-btns`]: {
              display: 'flex',
              justifyContent: 'space-between',
              padding: `${s - c}px ${s}px`,
              overflow: 'hidden',
              borderTop: w
            }
          })
        }
      },
      {
        [`${o}-dropdown ${D}, ${D}-submenu`]: {
          [`${o}-checkbox-wrapper + span`]: { paddingInlineStart: s, color: d },
          '> ul': { maxHeight: 'calc(100vh - 130px)', overflowX: 'hidden', overflowY: 'auto' }
        }
      }
    ]
  },
  ki = Hi,
  Ai = (e) => {
    const {
        componentCls: t,
        lineWidth: o,
        colorSplit: r,
        motionDurationSlow: n,
        zIndexTableFixed: i,
        tableBg: l,
        zIndexTableSticky: s
      } = e,
      d = r
    return {
      [`${t}-wrapper`]: {
        [`
        ${t}-cell-fix-left,
        ${t}-cell-fix-right
      `]: { position: 'sticky !important', zIndex: i, background: l },
        [`
        ${t}-cell-fix-left-first::after,
        ${t}-cell-fix-left-last::after
      `]: {
          position: 'absolute',
          top: 0,
          right: { _skip_check_: !0, value: 0 },
          bottom: -o,
          width: 30,
          transform: 'translateX(100%)',
          transition: `box-shadow ${n}`,
          content: '""',
          pointerEvents: 'none'
        },
        [`${t}-cell-fix-left-all::after`]: { display: 'none' },
        [`
        ${t}-cell-fix-right-first::after,
        ${t}-cell-fix-right-last::after
      `]: {
          position: 'absolute',
          top: 0,
          bottom: -o,
          left: { _skip_check_: !0, value: 0 },
          width: 30,
          transform: 'translateX(-100%)',
          transition: `box-shadow ${n}`,
          content: '""',
          pointerEvents: 'none'
        },
        [`${t}-container`]: {
          '&::before, &::after': {
            position: 'absolute',
            top: 0,
            bottom: 0,
            zIndex: s + 1,
            width: 30,
            transition: `box-shadow ${n}`,
            content: '""',
            pointerEvents: 'none'
          },
          '&::before': { insetInlineStart: 0 },
          '&::after': { insetInlineEnd: 0 }
        },
        [`${t}-ping-left`]: {
          [`&:not(${t}-has-fix-left) ${t}-container`]: {
            position: 'relative',
            '&::before': { boxShadow: `inset 10px 0 8px -8px ${d}` }
          },
          [`
          ${t}-cell-fix-left-first::after,
          ${t}-cell-fix-left-last::after
        `]: { boxShadow: `inset 10px 0 8px -8px ${d}` },
          [`${t}-cell-fix-left-last::before`]: { backgroundColor: 'transparent !important' }
        },
        [`${t}-ping-right`]: {
          [`&:not(${t}-has-fix-right) ${t}-container`]: {
            position: 'relative',
            '&::after': { boxShadow: `inset -10px 0 8px -8px ${d}` }
          },
          [`
          ${t}-cell-fix-right-first::after,
          ${t}-cell-fix-right-last::after
        `]: { boxShadow: `inset -10px 0 8px -8px ${d}` }
        }
      }
    }
  },
  Ki = Ai,
  Wi = (e) => {
    const { componentCls: t, antCls: o } = e
    return {
      [`${t}-wrapper`]: {
        [`${t}-pagination${o}-pagination`]: { margin: `${e.margin}px 0` },
        [`${t}-pagination`]: {
          display: 'flex',
          flexWrap: 'wrap',
          rowGap: e.paddingXS,
          '> *': { flex: 'none' },
          '&-left': { justifyContent: 'flex-start' },
          '&-center': { justifyContent: 'center' },
          '&-right': { justifyContent: 'flex-end' }
        }
      }
    }
  },
  Vi = Wi,
  Xi = (e) => {
    const { componentCls: t, tableRadius: o } = e
    return {
      [`${t}-wrapper`]: {
        [t]: {
          [`${t}-title, ${t}-header`]: { borderRadius: `${o}px ${o}px 0 0` },
          [`${t}-title + ${t}-container`]: {
            borderStartStartRadius: 0,
            borderStartEndRadius: 0,
            table: {
              borderRadius: 0,
              '> thead > tr:first-child': {
                'th:first-child': { borderRadius: 0 },
                'th:last-child': { borderRadius: 0 }
              }
            }
          },
          '&-container': {
            borderStartStartRadius: o,
            borderStartEndRadius: o,
            'table > thead > tr:first-child': {
              '> *:first-child': { borderStartStartRadius: o },
              '> *:last-child': { borderStartEndRadius: o }
            }
          },
          '&-footer': { borderRadius: `0 0 ${o}px ${o}px` }
        }
      }
    }
  },
  Ui = Xi,
  Gi = (e) => {
    const { componentCls: t } = e
    return {
      [`${t}-wrapper-rtl`]: {
        direction: 'rtl',
        table: { direction: 'rtl' },
        [`${t}-pagination-left`]: { justifyContent: 'flex-end' },
        [`${t}-pagination-right`]: { justifyContent: 'flex-start' },
        [`${t}-row-expand-icon`]: {
          '&::after': { transform: 'rotate(-90deg)' },
          '&-collapsed::before': { transform: 'rotate(180deg)' },
          '&-collapsed::after': { transform: 'rotate(0deg)' }
        },
        [`${t}-container`]: {
          '&::before': { insetInlineStart: 'unset', insetInlineEnd: 0 },
          '&::after': { insetInlineStart: 0, insetInlineEnd: 'unset' }
        }
      }
    }
  },
  Ji = Gi,
  Yi = (e) => {
    const {
      componentCls: t,
      antCls: o,
      iconCls: r,
      fontSizeIcon: n,
      paddingXS: i,
      tableHeaderIconColor: l,
      tableHeaderIconColorHover: s
    } = e
    return {
      [`${t}-wrapper`]: {
        [`${t}-selection-col`]: { width: e.tableSelectionColumnWidth },
        [`${t}-bordered ${t}-selection-col`]: { width: e.tableSelectionColumnWidth + i * 2 },
        [`
        table tr th${t}-selection-column,
        table tr td${t}-selection-column
      `]: {
          paddingInlineEnd: e.paddingXS,
          paddingInlineStart: e.paddingXS,
          textAlign: 'center',
          [`${o}-radio-wrapper`]: { marginInlineEnd: 0 }
        },
        [`table tr th${t}-selection-column${t}-cell-fix-left`]: { zIndex: e.zIndexTableFixed + 1 },
        [`table tr th${t}-selection-column::after`]: { backgroundColor: 'transparent !important' },
        [`${t}-selection`]: {
          position: 'relative',
          display: 'inline-flex',
          flexDirection: 'column'
        },
        [`${t}-selection-extra`]: {
          position: 'absolute',
          top: 0,
          zIndex: 1,
          cursor: 'pointer',
          transition: `all ${e.motionDurationSlow}`,
          marginInlineStart: '100%',
          paddingInlineStart: `${e.tablePaddingHorizontal / 4}px`,
          [r]: { color: l, fontSize: n, verticalAlign: 'baseline', '&:hover': { color: s } }
        }
      }
    }
  },
  qi = Yi,
  Qi = (e) => {
    const { componentCls: t } = e,
      o = (r, n, i, l) => ({
        [`${t}${t}-${r}`]: {
          fontSize: l,
          [`
        ${t}-title,
        ${t}-footer,
        ${t}-thead > tr > th,
        ${t}-tbody > tr > th,
        ${t}-tbody > tr > td,
        tfoot > tr > th,
        tfoot > tr > td
      `]: { padding: `${n}px ${i}px` },
          [`${t}-filter-trigger`]: { marginInlineEnd: `-${i / 2}px` },
          [`${t}-expanded-row-fixed`]: { margin: `-${n}px -${i}px` },
          [`${t}-tbody`]: {
            [`${t}-wrapper:only-child ${t}`]: {
              marginBlock: `-${n}px`,
              marginInline: `${e.tableExpandColumnWidth - i}px -${i}px`
            }
          },
          [`${t}-selection-column`]: { paddingInlineStart: `${i / 4}px` }
        }
      })
    return {
      [`${t}-wrapper`]: Object.assign(
        Object.assign(
          {},
          o(
            'middle',
            e.tablePaddingVerticalMiddle,
            e.tablePaddingHorizontalMiddle,
            e.tableFontSizeMiddle
          )
        ),
        o('small', e.tablePaddingVerticalSmall, e.tablePaddingHorizontalSmall, e.tableFontSizeSmall)
      )
    }
  },
  Zi = Qi,
  el = (e) => {
    const {
      componentCls: t,
      marginXXS: o,
      fontSizeIcon: r,
      tableHeaderIconColor: n,
      tableHeaderIconColorHover: i
    } = e
    return {
      [`${t}-wrapper`]: {
        [`${t}-thead th${t}-column-has-sorters`]: {
          outline: 'none',
          cursor: 'pointer',
          transition: `all ${e.motionDurationSlow}`,
          '&:hover': {
            background: e.tableHeaderSortHoverBg,
            '&::before': { backgroundColor: 'transparent !important' }
          },
          '&:focus-visible': { color: e.colorPrimary },
          [`
          &${t}-cell-fix-left:hover,
          &${t}-cell-fix-right:hover
        `]: { background: e.tableFixedHeaderSortActiveBg }
        },
        [`${t}-thead th${t}-column-sort`]: {
          background: e.tableHeaderSortBg,
          '&::before': { backgroundColor: 'transparent !important' }
        },
        [`td${t}-column-sort`]: { background: e.tableBodySortBg },
        [`${t}-column-title`]: { position: 'relative', zIndex: 1, flex: 1 },
        [`${t}-column-sorters`]: {
          display: 'flex',
          flex: 'auto',
          alignItems: 'center',
          justifyContent: 'space-between',
          '&::after': {
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            content: '""'
          }
        },
        [`${t}-column-sorter`]: {
          marginInlineStart: o,
          color: n,
          fontSize: 0,
          transition: `color ${e.motionDurationSlow}`,
          '&-inner': { display: 'inline-flex', flexDirection: 'column', alignItems: 'center' },
          '&-up, &-down': { fontSize: r, '&.active': { color: e.colorPrimary } },
          [`${t}-column-sorter-up + ${t}-column-sorter-down`]: { marginTop: '-0.3em' }
        },
        [`${t}-column-sorters:hover ${t}-column-sorter`]: { color: i }
      }
    }
  },
  tl = el,
  nl = (e) => {
    const {
        componentCls: t,
        opacityLoading: o,
        tableScrollThumbBg: r,
        tableScrollThumbBgHover: n,
        tableScrollThumbSize: i,
        tableScrollBg: l,
        zIndexTableSticky: s
      } = e,
      d = `${e.lineWidth}px ${e.lineType} ${e.tableBorderColor}`
    return {
      [`${t}-wrapper`]: {
        [`${t}-sticky`]: {
          '&-holder': { position: 'sticky', zIndex: s, background: e.colorBgContainer },
          '&-scroll': {
            position: 'sticky',
            bottom: 0,
            height: `${i}px !important`,
            zIndex: s,
            display: 'flex',
            alignItems: 'center',
            background: l,
            borderTop: d,
            opacity: o,
            '&:hover': { transformOrigin: 'center bottom' },
            '&-bar': {
              height: i,
              backgroundColor: r,
              borderRadius: 100,
              transition: `all ${e.motionDurationSlow}, transform none`,
              position: 'absolute',
              bottom: 0,
              '&:hover, &-active': { backgroundColor: n }
            }
          }
        }
      }
    }
  },
  rl = nl,
  ol = (e) => {
    const { componentCls: t, lineWidth: o, tableBorderColor: r } = e,
      n = `${o}px ${e.lineType} ${r}`
    return {
      [`${t}-wrapper`]: {
        [`${t}-summary`]: {
          position: 'relative',
          zIndex: e.zIndexTableFixed,
          background: e.tableBg,
          '> tr': { '> th, > td': { borderBottom: n } }
        },
        [`div${t}-summary`]: { boxShadow: `0 -${o}px 0 ${r}` }
      }
    }
  },
  Vn = ol,
  al = (e) => {
    const {
        componentCls: t,
        fontWeightStrong: o,
        tablePaddingVertical: r,
        tablePaddingHorizontal: n,
        lineWidth: i,
        lineType: l,
        tableBorderColor: s,
        tableFontSize: d,
        tableBg: c,
        tableRadius: f,
        tableHeaderTextColor: u,
        motionDurationMid: p,
        tableHeaderBg: m,
        tableHeaderCellSplitColor: g,
        tableRowHoverBg: h,
        tableSelectedRowBg: v,
        tableSelectedRowHoverBg: b,
        tableFooterTextColor: x,
        tableFooterBg: E,
        paddingContentVerticalLG: P
      } = e,
      C = `${i}px ${l} ${s}`
    return {
      [`${t}-wrapper`]: Object.assign(Object.assign({ clear: 'both', maxWidth: '100%' }, uo()), {
        [t]: Object.assign(Object.assign({}, wt(e)), {
          fontSize: d,
          background: c,
          borderRadius: `${f}px ${f}px 0 0`
        }),
        table: {
          width: '100%',
          textAlign: 'start',
          borderRadius: `${f}px ${f}px 0 0`,
          borderCollapse: 'separate',
          borderSpacing: 0
        },
        [`
          ${t}-thead > tr > th,
          ${t}-tbody > tr > th,
          ${t}-tbody > tr > td,
          tfoot > tr > th,
          tfoot > tr > td
        `]: { position: 'relative', padding: `${P}px ${n}px`, overflowWrap: 'break-word' },
        [`${t}-title`]: { padding: `${r}px ${n}px` },
        [`${t}-thead`]: {
          '\n          > tr > th,\n          > tr > td\n        ': {
            position: 'relative',
            color: u,
            fontWeight: o,
            textAlign: 'start',
            background: m,
            borderBottom: C,
            transition: `background ${p} ease`,
            "&[colspan]:not([colspan='1'])": { textAlign: 'center' },
            [`&:not(:last-child):not(${t}-selection-column):not(${t}-row-expand-icon-cell):not([colspan])::before`]:
              {
                position: 'absolute',
                top: '50%',
                insetInlineEnd: 0,
                width: 1,
                height: '1.6em',
                backgroundColor: g,
                transform: 'translateY(-50%)',
                transition: `background-color ${p}`,
                content: '""'
              }
          },
          '> tr:not(:last-child) > th[colspan]': { borderBottom: 0 }
        },
        [`${t}-tbody`]: {
          '> tr': {
            '> th, > td': {
              transition: `background ${p}, border-color ${p}`,
              borderBottom: C,
              [`
              > ${t}-wrapper:only-child,
              > ${t}-expanded-row-fixed > ${t}-wrapper:only-child
            `]: {
                [t]: {
                  marginBlock: `-${r}px`,
                  marginInline: `${e.tableExpandColumnWidth - n}px -${n}px`,
                  [`${t}-tbody > tr:last-child > td`]: {
                    borderBottom: 0,
                    '&:first-child, &:last-child': { borderRadius: 0 }
                  }
                }
              }
            },
            '> th': {
              position: 'relative',
              color: u,
              fontWeight: o,
              textAlign: 'start',
              background: m,
              borderBottom: C,
              transition: `background ${p} ease`
            },
            [`
            &${t}-row:hover > th,
            &${t}-row:hover > td,
            > th${t}-cell-row-hover
            > td${t}-cell-row-hover
          `]: { background: h },
            [`&${t}-row-selected`]: {
              '> th, > td': { background: v },
              '&:hover > th, &:hover > td': { background: b }
            }
          }
        },
        [`${t}-footer`]: { padding: `${r}px ${n}px`, color: x, background: E }
      })
    }
  },
  il = Yt('Table', (e) => {
    const {
        controlItemBgActive: t,
        controlItemBgActiveHover: o,
        colorTextPlaceholder: r,
        colorTextHeading: n,
        colorSplit: i,
        colorBorderSecondary: l,
        fontSize: s,
        padding: d,
        paddingXS: c,
        paddingSM: f,
        controlHeight: u,
        colorFillAlter: p,
        colorIcon: m,
        colorIconHover: g,
        opacityLoading: h,
        colorBgContainer: v,
        borderRadiusLG: b,
        colorFillContent: x,
        colorFillSecondary: E,
        controlInteractiveSize: P
      } = e,
      C = new it(m),
      y = new it(g),
      T = t,
      k = 2,
      _ = new it(E).onBackground(v).toHexShortString(),
      $ = new it(x).onBackground(v).toHexShortString(),
      D = new it(p).onBackground(v).toHexShortString(),
      I = qt(e, {
        tableFontSize: s,
        tableBg: v,
        tableRadius: b,
        tablePaddingVertical: d,
        tablePaddingHorizontal: d,
        tablePaddingVerticalMiddle: f,
        tablePaddingHorizontalMiddle: c,
        tablePaddingVerticalSmall: c,
        tablePaddingHorizontalSmall: c,
        tableBorderColor: l,
        tableHeaderTextColor: n,
        tableHeaderBg: D,
        tableFooterTextColor: n,
        tableFooterBg: D,
        tableHeaderCellSplitColor: l,
        tableHeaderSortBg: _,
        tableHeaderSortHoverBg: $,
        tableHeaderIconColor: C.clone()
          .setAlpha(C.getAlpha() * h)
          .toRgbString(),
        tableHeaderIconColorHover: y
          .clone()
          .setAlpha(y.getAlpha() * h)
          .toRgbString(),
        tableBodySortBg: D,
        tableFixedHeaderSortActiveBg: _,
        tableHeaderFilterActiveBg: x,
        tableFilterDropdownBg: v,
        tableRowHoverBg: D,
        tableSelectedRowBg: T,
        tableSelectedRowHoverBg: o,
        zIndexTableFixed: k,
        zIndexTableSticky: k + 1,
        tableFontSizeMiddle: s,
        tableFontSizeSmall: s,
        tableSelectionColumnWidth: u,
        tableExpandIconBg: v,
        tableExpandColumnWidth: P + 2 * e.padding,
        tableExpandedRowBg: p,
        tableFilterDropdownWidth: 120,
        tableFilterDropdownHeight: 264,
        tableFilterDropdownSearchWidth: 140,
        tableScrollThumbSize: 8,
        tableScrollThumbBg: r,
        tableScrollThumbBgHover: n,
        tableScrollBg: i
      })
    return [
      al(I),
      Vi(I),
      Vn(I),
      tl(I),
      ki(I),
      Di(I),
      Ui(I),
      Fi(I),
      Vn(I),
      ji(I),
      qi(I),
      Ki(I),
      rl(I),
      Mi(I),
      Zi(I),
      Ji(I)
    ]
  }),
  ll = []
function sl(e, t) {
  const { getPopupContainer: o } = a.useContext(ot),
    {
      prefixCls: r,
      className: n,
      rootClassName: i,
      style: l,
      size: s,
      bordered: d,
      dropdownPrefixCls: c,
      dataSource: f,
      pagination: u,
      rowSelection: p,
      rowKey: m = 'key',
      rowClassName: g,
      columns: h,
      children: v,
      childrenColumnName: b,
      onChange: x,
      getPopupContainer: E,
      loading: P,
      expandIcon: C,
      expandable: y,
      expandedRowRender: T,
      expandIconColumnIndex: k,
      indentSize: _,
      scroll: $,
      sortDirections: D,
      locale: I,
      showSorterTooltip: w = !0
    } = e,
    B = a.useMemo(() => h || tn(v), [h, v]),
    ne = a.useMemo(() => B.some((V) => V.responsive), [B]),
    K = qn(ne),
    z = a.useMemo(() => {
      const V = new Set(Object.keys(K).filter((de) => K[de]))
      return B.filter((de) => !de.responsive || de.responsive.some((Pe) => V.has(Pe)))
    }, [B, K]),
    Y = Zn(e, ['className', 'style', 'columns']),
    F = a.useContext(fo),
    { locale: oe = mo, direction: M, renderEmpty: ue, getPrefixCls: be } = a.useContext(ot),
    ae = s || F,
    he = Object.assign(Object.assign({}, oe.Table), I),
    H = f || ll,
    q = be('table', r),
    Ce = be('dropdown', c),
    ce = Object.assign({ childrenColumnName: b, expandIconColumnIndex: k }, y),
    { childrenColumnName: U = 'children' } = ce,
    j = a.useMemo(
      () =>
        H.some((V) => (V == null ? void 0 : V[U]))
          ? 'nest'
          : T || (y && y.expandedRowRender)
          ? 'row'
          : null,
      [H]
    ),
    N = { body: a.useRef() },
    R = a.useMemo(() => (typeof m == 'function' ? m : (V) => (V == null ? void 0 : V[m])), [m]),
    [O] = $i(H, U, R),
    S = {},
    L = function (V, de) {
      let Pe = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1
      const le = Object.assign(Object.assign({}, S), V)
      Pe &&
        (S.resetPagination(),
        le.pagination.current && (le.pagination.current = 1),
        u && u.onChange && u.onChange(1, le.pagination.pageSize)),
        $ &&
          $.scrollToFirstRowOnChange !== !1 &&
          N.body.current &&
          yo(0, { getContainer: () => N.body.current }),
        x == null ||
          x(le.pagination, le.filters, le.sorter, {
            currentDataSource: Hn(Jt(H, le.sorterStates, U), le.filterStates),
            action: de
          })
    },
    J = (V, de) => {
      L({ sorter: V, sorterStates: de }, 'sort', !1)
    },
    [Z, ye, Re, Ke] = Pi({
      prefixCls: q,
      mergedColumns: z,
      onSorterChange: J,
      sortDirections: D || ['ascend', 'descend'],
      tableLocale: he,
      showSorterTooltip: w
    }),
    ve = a.useMemo(() => Jt(H, ye, U), [H, ye])
  ;(S.sorter = Ke()), (S.sorterStates = ye)
  const ke = (V, de) => {
      L({ filters: V, filterStates: de }, 'filter', !0)
    },
    [$e, De, Q] = yi({
      prefixCls: q,
      locale: he,
      dropdownPrefixCls: Ce,
      mergedColumns: z,
      onFilterChange: ke,
      getPopupContainer: E || o
    }),
    re = Hn(ve, De)
  ;(S.filters = Q), (S.filterStates = De)
  const ie = a.useMemo(() => {
      const V = {}
      return (
        Object.keys(Q).forEach((de) => {
          Q[de] !== null && (V[de] = Q[de])
        }),
        Object.assign(Object.assign({}, Re), { filters: V })
      )
    }, [Re, Q]),
    [xe] = Oi(ie),
    me = (V, de) => {
      L(
        {
          pagination: Object.assign(Object.assign({}, S.pagination), { current: V, pageSize: de })
        },
        'paginate'
      )
    },
    [A, Ne] = Ii(re.length, me, u)
  ;(S.pagination = u === !1 ? {} : Ei(A, u)), (S.resetPagination = Ne)
  const Be = a.useMemo(() => {
      if (u === !1 || !A.pageSize) return re
      const { current: V = 1, total: de, pageSize: Pe = Pr } = A
      return re.length < de
        ? re.length > Pe
          ? re.slice((V - 1) * Pe, V * Pe)
          : re
        : re.slice((V - 1) * Pe, V * Pe)
    }, [!!u, re, A && A.current, A && A.pageSize, A && A.total]),
    [Le, Ae] = Ri(
      {
        prefixCls: q,
        data: re,
        pageData: Be,
        getRowKey: R,
        getRecordByKey: O,
        expandType: j,
        childrenColumnName: U,
        locale: he,
        getPopupContainer: E || o
      },
      p
    ),
    Me = (V, de, Pe) => {
      let le
      return (
        typeof g == 'function' ? (le = G(g(V, de, Pe))) : (le = G(g)),
        G({ [`${q}-row-selected`]: Ae.has(R(V, de)) }, le)
      )
    }
  ;(ce.__PARENT_RENDER_ICON__ = ce.expandIcon),
    (ce.expandIcon = ce.expandIcon || C || mi(he)),
    j === 'nest' && ce.expandIconColumnIndex === void 0
      ? (ce.expandIconColumnIndex = p ? 1 : 0)
      : ce.expandIconColumnIndex > 0 && p && (ce.expandIconColumnIndex -= 1),
    typeof ce.indentSize != 'number' && (ce.indentSize = typeof _ == 'number' ? _ : 15)
  const Oe = a.useCallback((V) => xe(Le($e(Z(V)))), [Z, $e, Le])
  let we, Te
  if (u !== !1 && A != null && A.total) {
    let V
    A.size ? (V = A.size) : (V = ae === 'small' || ae === 'middle' ? 'small' : void 0)
    const de = (Fe) =>
        a.createElement(
          Uo,
          Object.assign({}, A, {
            className: G(`${q}-pagination ${q}-pagination-${Fe}`, A.className),
            size: V
          })
        ),
      Pe = M === 'rtl' ? 'left' : 'right',
      { position: le } = A
    if (le !== null && Array.isArray(le)) {
      const Fe = le.find((We) => We.includes('top')),
        qe = le.find((We) => We.includes('bottom')),
        tt = le.every((We) => `${We}` == 'none')
      !Fe && !qe && !tt && (Te = de(Pe)),
        Fe && (we = de(Fe.toLowerCase().replace('top', ''))),
        qe && (Te = de(qe.toLowerCase().replace('bottom', '')))
    } else Te = de(Pe)
  }
  let ze
  typeof P == 'boolean'
    ? (ze = { spinning: P })
    : typeof P == 'object' && (ze = Object.assign({ spinning: !0 }, P))
  const [Ee, Se] = il(q),
    Ie = G(`${q}-wrapper`, { [`${q}-wrapper-rtl`]: M === 'rtl' }, n, i, Se),
    et =
      (I && I.emptyText) ||
      (ue == null ? void 0 : ue('Table')) ||
      a.createElement(po, { componentName: 'Table' })
  return Ee(
    a.createElement(
      'div',
      { ref: t, className: Ie, style: l },
      a.createElement(
        na,
        Object.assign({ spinning: !1 }, ze),
        we,
        a.createElement(
          Ti,
          Object.assign({}, Y, {
            columns: z,
            direction: M,
            expandable: ce,
            prefixCls: q,
            className: G({
              [`${q}-middle`]: ae === 'middle',
              [`${q}-small`]: ae === 'small',
              [`${q}-bordered`]: d,
              [`${q}-empty`]: H.length === 0
            }),
            data: Be,
            rowKey: R,
            rowClassName: Me,
            emptyText: et,
            internalHooks: Ct,
            internalRefs: N,
            transformColumns: Oe
          })
        ),
        Te
      )
    )
  )
}
const cl = a.forwardRef(sl)
function dl(e, t) {
  const o = a.useRef(0)
  return (
    (o.current += 1), a.createElement(cl, Object.assign({}, e, { ref: t, _renderTimes: o.current }))
  )
}
const Ve = a.forwardRef(dl)
Ve.SELECTION_COLUMN = Je
Ve.EXPAND_COLUMN = Ye
Ve.SELECTION_ALL = Vt
Ve.SELECTION_INVERT = Xt
Ve.SELECTION_NONE = Ut
Ve.Column = fi
Ve.ColumnGroup = pi
Ve.Summary = gr
const pl = Ve
export { fi as C, pl as T }
//# sourceMappingURL=Table-e3aebe67.js.map

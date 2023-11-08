import {
  R as c,
  _ as J,
  e as O,
  f as w,
  g as ne,
  h as W,
  C as ae,
  K as X,
  u as te,
  t as Q,
  i as oe,
  k as re,
  r as A,
  l as U,
  m as le,
  n as se,
  o as ie,
  p as ce,
  q as de,
  S as ue,
  s as me,
  v as q,
  w as pe,
  x as F,
  j as V
} from './index-7ec5c925.js'
var Y = c.forwardRef(function (n, e) {
  var a,
    t = n.prefixCls,
    l = n.forceRender,
    h = n.className,
    x = n.style,
    i = n.children,
    m = n.isActive,
    p = n.role,
    I = c.useState(m || l),
    o = J(I, 2),
    f = o[0],
    s = o[1]
  return (
    c.useEffect(
      function () {
        ;(l || m) && s(!0)
      },
      [l, m]
    ),
    f
      ? c.createElement(
          'div',
          {
            ref: e,
            className: O(
              ''.concat(t, '-content'),
              ((a = {}),
              w(a, ''.concat(t, '-content-active'), m),
              w(a, ''.concat(t, '-content-inactive'), !m),
              a),
              h
            ),
            style: x,
            role: p
          },
          c.createElement('div', { className: ''.concat(t, '-content-box') }, i)
        )
      : null
  )
})
Y.displayName = 'PanelContent'
var fe = [
    'showArrow',
    'headerClass',
    'isActive',
    'onItemClick',
    'forceRender',
    'className',
    'prefixCls',
    'collapsible',
    'accordion',
    'panelKey',
    'extra',
    'header',
    'expandIcon',
    'openMotion',
    'destroyInactivePanel',
    'children'
  ],
  ge = c.forwardRef(function (n, e) {
    var a,
      t,
      l = n.showArrow,
      h = l === void 0 ? !0 : l,
      x = n.headerClass,
      i = n.isActive,
      m = n.onItemClick,
      p = n.forceRender,
      I = n.className,
      o = n.prefixCls,
      f = n.collapsible,
      s = n.accordion,
      _ = n.panelKey,
      $ = n.extra,
      k = n.header,
      N = n.expandIcon,
      b = n.openMotion,
      C = n.destroyInactivePanel,
      E = n.children,
      B = ne(n, fe),
      v = f === 'disabled',
      d = f === 'header',
      g = f === 'icon',
      r = $ != null && typeof $ != 'boolean',
      y = function () {
        m == null || m(_)
      },
      P = function (S) {
        ;(S.key === 'Enter' || S.keyCode === X.ENTER || S.which === X.ENTER) && y()
      },
      u = typeof N == 'function' ? N(n) : c.createElement('i', { className: 'arrow' })
    u &&
      (u = c.createElement(
        'div',
        {
          className: ''.concat(o, '-expand-icon'),
          onClick: ['header', 'icon'].includes(f) ? y : void 0
        },
        u
      ))
    var K = O(
        ((a = {}),
        w(a, ''.concat(o, '-item'), !0),
        w(a, ''.concat(o, '-item-active'), i),
        w(a, ''.concat(o, '-item-disabled'), v),
        a),
        I
      ),
      T = O(
        ((t = {}),
        w(t, ''.concat(o, '-header'), !0),
        w(t, 'headerClass', x),
        w(t, ''.concat(o, '-header-collapsible-only'), d),
        w(t, ''.concat(o, '-icon-collapsible-only'), g),
        t)
      ),
      R = { className: T, 'aria-expanded': i, 'aria-disabled': v, onKeyPress: P }
    return (
      !d && !g && ((R.onClick = y), (R.role = s ? 'tab' : 'button'), (R.tabIndex = v ? -1 : 0)),
      c.createElement(
        'div',
        W({}, B, { ref: e, className: K }),
        c.createElement(
          'div',
          R,
          h && u,
          c.createElement(
            'span',
            { className: ''.concat(o, '-header-text'), onClick: f === 'header' ? y : void 0 },
            k
          ),
          r && c.createElement('div', { className: ''.concat(o, '-extra') }, $)
        ),
        c.createElement(
          ae,
          W({ visible: i, leavedClassName: ''.concat(o, '-content-hidden') }, b, {
            forceRender: p,
            removeOnLeave: C
          }),
          function (M, S) {
            var j = M.className,
              z = M.style
            return c.createElement(
              Y,
              {
                ref: S,
                prefixCls: o,
                className: j,
                style: z,
                isActive: i,
                forceRender: p,
                role: s ? 'tabpanel' : void 0
              },
              E
            )
          }
        )
      )
    )
  })
function Ce(n) {
  var e = n
  if (!Array.isArray(e)) {
    var a = oe(e)
    e = a === 'number' || a === 'string' ? [e] : []
  }
  return e.map(function (t) {
    return String(t)
  })
}
var ve = c.forwardRef(function (n, e) {
  var a = n.prefixCls,
    t = a === void 0 ? 'rc-collapse' : a,
    l = n.destroyInactivePanel,
    h = l === void 0 ? !1 : l,
    x = n.style,
    i = n.accordion,
    m = n.className,
    p = n.children,
    I = n.collapsible,
    o = n.openMotion,
    f = n.expandIcon,
    s = n.activeKey,
    _ = n.defaultActiveKey,
    $ = n.onChange,
    k = O(t, m),
    N = te([], {
      value: s,
      onChange: function (r) {
        return $ == null ? void 0 : $(r)
      },
      defaultValue: _,
      postState: Ce
    }),
    b = J(N, 2),
    C = b[0],
    E = b[1],
    B = function (r) {
      return E(function () {
        if (i) return C[0] === r ? [] : [r]
        var y = C.indexOf(r),
          P = y > -1
        return P
          ? C.filter(function (u) {
              return u !== r
            })
          : [].concat(re(C), [r])
      })
    },
    v = function (r, y) {
      if (!r) return null
      var P = r.key || String(y),
        u = r.props,
        K = u.header,
        T = u.headerClass,
        R = u.destroyInactivePanel,
        M = u.collapsible,
        S = u.onItemClick,
        j = !1
      i ? (j = C[0] === P) : (j = C.indexOf(P) > -1)
      var z = M ?? I,
        ee = function (D) {
          z !== 'disabled' && (B(D), S == null || S(D))
        },
        H = {
          key: P,
          panelKey: P,
          header: K,
          headerClass: T,
          isActive: j,
          prefixCls: t,
          destroyInactivePanel: R ?? h,
          openMotion: o,
          accordion: i,
          children: r.props.children,
          onItemClick: ee,
          expandIcon: f,
          collapsible: z
        }
      return typeof r.type == 'string'
        ? r
        : (Object.keys(H).forEach(function (G) {
            typeof H[G] > 'u' && delete H[G]
          }),
          c.cloneElement(r, H))
    },
    d = Q(p).map(v)
  return c.createElement('div', { ref: e, className: k, style: x, role: i ? 'tablist' : void 0 }, d)
})
const L = Object.assign(ve, { Panel: ge })
L.Panel
const xe = A.forwardRef((n, e) => {
    const { getPrefixCls: a } = A.useContext(U),
      { prefixCls: t, className: l = '', showArrow: h = !0 } = n,
      x = a('collapse', t),
      i = O({ [`${x}-no-arrow`]: !h }, l)
    return A.createElement(L.Panel, Object.assign({ ref: e }, n, { prefixCls: x, className: i }))
  }),
  $e = xe,
  he = (n) => {
    const {
        componentCls: e,
        collapseContentBg: a,
        padding: t,
        collapseContentPaddingHorizontal: l,
        collapseHeaderBg: h,
        collapseHeaderPadding: x,
        collapseHeaderPaddingSM: i,
        collapseHeaderPaddingLG: m,
        collapsePanelBorderRadius: p,
        lineWidth: I,
        lineType: o,
        colorBorder: f,
        colorText: s,
        colorTextHeading: _,
        colorTextDisabled: $,
        fontSize: k,
        fontSizeLG: N,
        lineHeight: b,
        marginSM: C,
        paddingSM: E,
        paddingLG: B,
        motionDurationSlow: v,
        fontSizeIcon: d
      } = n,
      g = `${I}px ${o} ${f}`
    return {
      [e]: Object.assign(Object.assign({}, ce(n)), {
        backgroundColor: h,
        border: g,
        borderBottom: 0,
        borderRadius: `${p}px`,
        '&-rtl': { direction: 'rtl' },
        [`& > ${e}-item`]: {
          borderBottom: g,
          '&:last-child': {
            [`
            &,
            & > ${e}-header`]: { borderRadius: `0 0 ${p}px ${p}px` }
          },
          [`> ${e}-header`]: {
            position: 'relative',
            display: 'flex',
            flexWrap: 'nowrap',
            alignItems: 'flex-start',
            padding: x,
            color: _,
            lineHeight: b,
            cursor: 'pointer',
            transition: `all ${v}, visibility 0s`,
            [`> ${e}-header-text`]: { flex: 'auto' },
            '&:focus': { outline: 'none' },
            [`${e}-expand-icon`]: {
              height: k * b,
              display: 'flex',
              alignItems: 'center',
              paddingInlineEnd: C
            },
            [`${e}-arrow`]: Object.assign(Object.assign({}, de()), {
              fontSize: d,
              svg: { transition: `transform ${v}` }
            }),
            [`${e}-header-text`]: { marginInlineEnd: 'auto' }
          },
          [`${e}-header-collapsible-only`]: {
            cursor: 'default',
            [`${e}-header-text`]: { flex: 'none', cursor: 'pointer' }
          },
          [`${e}-icon-collapsible-only`]: {
            cursor: 'default',
            [`${e}-expand-icon`]: { cursor: 'pointer' }
          },
          [`&${e}-no-arrow`]: { [`> ${e}-header`]: { paddingInlineStart: E } }
        },
        [`${e}-content`]: {
          color: s,
          backgroundColor: a,
          borderTop: g,
          [`& > ${e}-content-box`]: { padding: `${t}px ${l}px` },
          '&-hidden': { display: 'none' }
        },
        '&-small': {
          [`> ${e}-item`]: {
            [`> ${e}-header`]: { padding: i },
            [`> ${e}-content > ${e}-content-box`]: { padding: E }
          }
        },
        '&-large': {
          [`> ${e}-item`]: {
            fontSize: N,
            [`> ${e}-header`]: { padding: m, [`> ${e}-expand-icon`]: { height: N * b } },
            [`> ${e}-content > ${e}-content-box`]: { padding: B }
          }
        },
        [`${e}-item:last-child`]: { [`> ${e}-content`]: { borderRadius: `0 0 ${p}px ${p}px` } },
        [`& ${e}-item-disabled > ${e}-header`]: {
          '\n          &,\n          & > .arrow\n        ': { color: $, cursor: 'not-allowed' }
        },
        [`&${e}-icon-position-end`]: {
          [`& > ${e}-item`]: {
            [`> ${e}-header`]: {
              [`${e}-expand-icon`]: { order: 1, paddingInlineEnd: 0, paddingInlineStart: C }
            }
          }
        }
      })
    }
  },
  be = (n) => {
    const { componentCls: e } = n,
      a = `> ${e}-item > ${e}-header ${e}-arrow svg`
    return { [`${e}-rtl`]: { [a]: { transform: 'rotate(180deg)' } } }
  },
  ye = (n) => {
    const { componentCls: e, collapseHeaderBg: a, paddingXXS: t, colorBorder: l } = n
    return {
      [`${e}-borderless`]: {
        backgroundColor: a,
        border: 0,
        [`> ${e}-item`]: { borderBottom: `1px solid ${l}` },
        [`
        > ${e}-item:last-child,
        > ${e}-item:last-child ${e}-header
      `]: { borderRadius: 0 },
        [`> ${e}-item:last-child`]: { borderBottom: 0 },
        [`> ${e}-item > ${e}-content`]: { backgroundColor: 'transparent', borderTop: 0 },
        [`> ${e}-item > ${e}-content > ${e}-content-box`]: { paddingTop: t }
      }
    }
  },
  Pe = (n) => {
    const { componentCls: e, paddingSM: a } = n
    return {
      [`${e}-ghost`]: {
        backgroundColor: 'transparent',
        border: 0,
        [`> ${e}-item`]: {
          borderBottom: 0,
          [`> ${e}-content`]: {
            backgroundColor: 'transparent',
            border: 0,
            [`> ${e}-content-box`]: { paddingBlock: a }
          }
        }
      }
    }
  },
  Ie = le('Collapse', (n) => {
    const e = se(n, {
      collapseContentBg: n.colorBgContainer,
      collapseHeaderBg: n.colorFillAlter,
      collapseHeaderPadding: `${n.paddingSM}px ${n.padding}px`,
      collapseHeaderPaddingSM: `${n.paddingXS}px ${n.paddingSM}px`,
      collapseHeaderPaddingLG: `${n.padding}px ${n.paddingLG}px`,
      collapsePanelBorderRadius: n.borderRadiusLG,
      collapseContentPaddingHorizontal: 16
    })
    return [he(e), ye(e), Pe(e), be(e), ie(e)]
  }),
  Ne = A.forwardRef((n, e) => {
    const { getPrefixCls: a, direction: t } = A.useContext(U),
      l = A.useContext(ue),
      {
        prefixCls: h,
        className: x,
        rootClassName: i,
        bordered: m = !0,
        ghost: p,
        size: I,
        expandIconPosition: o = 'start'
      } = n,
      f = I || l || 'middle',
      s = a('collapse', h),
      _ = a(),
      [$, k] = Ie(s),
      N = A.useMemo(() => (o === 'left' ? 'start' : o === 'right' ? 'end' : o), [o]),
      b = function () {
        let v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
        const { expandIcon: d } = n,
          g = d ? d(v) : A.createElement(pe, { rotate: v.isActive ? 90 : void 0 })
        return F(g, () => ({ className: O(g.props.className, `${s}-arrow`) }))
      },
      C = O(
        `${s}-icon-position-${N}`,
        {
          [`${s}-borderless`]: !m,
          [`${s}-rtl`]: t === 'rtl',
          [`${s}-ghost`]: !!p,
          [`${s}-${f}`]: f !== 'middle'
        },
        x,
        i,
        k
      ),
      E = Object.assign(Object.assign({}, me(_)), {
        motionAppear: !1,
        leavedClassName: `${s}-content-hidden`
      }),
      B = () => {
        const { children: v } = n
        return Q(v).map((d, g) => {
          var r
          if (!((r = d.props) === null || r === void 0) && r.disabled) {
            const y = d.key || String(g),
              { disabled: P, collapsible: u } = d.props,
              K = Object.assign(Object.assign({}, q(d.props, ['disabled'])), {
                key: y,
                collapsible: u ?? (P ? 'disabled' : void 0)
              })
            return F(d, K)
          }
          return d
        })
      }
    return $(
      A.createElement(
        L,
        Object.assign({ ref: e, openMotion: E }, q(n, ['rootClassName']), {
          expandIcon: b,
          prefixCls: s,
          className: C
        }),
        B()
      )
    )
  }),
  Z = Object.assign(Ne, { Panel: $e })
const { Panel: Se } = Z,
  Ae = (n) => {
    const { title: e, children: a, className: t, style: l } = n
    return V(Z, {
      defaultActiveKey: [e],
      expandIconPosition: 'end',
      className: 'collcard ' + t,
      style: l,
      children: V(Se, { header: e, children: a }, e)
    })
  }
export { Ae as C }
//# sourceMappingURL=index-16b13495.js.map

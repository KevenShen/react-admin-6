import { r as Hr, G as Zi, h as qi, d as gt, X as pn, j as Xe, Y as _t } from './index-7ec5c925.js'
import { P as Qi } from './index-75272ee3.js'
import es from './AddUser-3e44aee0.js'
import rs from './EditUser-4d71e785.js'
import { T as ts, C as et } from './Table-e3aebe67.js'
import { a as ns } from './user-d95f46ea.js'
import { E as as } from './EditOutlined-b7b41a9c.js'
import { D as is } from './DeleteOutlined-51525ffd.js'
import './PlusOutlined-b08ffc51.js'
import './index-a65e002a.js'
import './AddPos-9656684f.js'
import './menu-40c162b1.js'
import './index-be5ad900.js'
import './index-fa08fb69.js'
var ss = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M859.9 780H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM505.7 669a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V176c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8z'
        }
      }
    ]
  },
  name: 'vertical-align-bottom',
  theme: 'outlined'
}
const fs = ss
var ls = function (t, r) {
  return Hr.createElement(Zi, qi({}, t, { ref: r, icon: fs }))
}
const os = Hr.forwardRef(ls)
/*! xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com */ var Jt = {}
Jt.version = '0.18.5'
var ra = 1252,
  cs = [874, 932, 936, 949, 950, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1e4],
  ta = function (e) {
    cs.indexOf(e) != -1 && (ra = e)
  }
function hs() {
  ta(1252)
}
var Ot = function (e) {
  ta(e)
}
function us() {
  Ot(1200), hs()
}
function xs(e) {
  for (var t = [], r = 0; r < e.length >> 1; ++r)
    t[r] = String.fromCharCode(e.charCodeAt(2 * r + 1) + (e.charCodeAt(2 * r) << 8))
  return t.join('')
}
var Vt = function (t) {
    return String.fromCharCode(t)
  },
  dn = function (t) {
    return String.fromCharCode(t)
  },
  Vr,
  Nr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
function Dt(e) {
  for (var t = '', r = 0, n = 0, a = 0, i = 0, s = 0, f = 0, o = 0, l = 0; l < e.length; )
    (r = e.charCodeAt(l++)),
      (i = r >> 2),
      (n = e.charCodeAt(l++)),
      (s = ((r & 3) << 4) | (n >> 4)),
      (a = e.charCodeAt(l++)),
      (f = ((n & 15) << 2) | (a >> 6)),
      (o = a & 63),
      isNaN(n) ? (f = o = 64) : isNaN(a) && (o = 64),
      (t += Nr.charAt(i) + Nr.charAt(s) + Nr.charAt(f) + Nr.charAt(o))
  return t
}
function Or(e) {
  var t = '',
    r = 0,
    n = 0,
    a = 0,
    i = 0,
    s = 0,
    f = 0,
    o = 0
  e = e.replace(/[^\w\+\/\=]/g, '')
  for (var l = 0; l < e.length; )
    (i = Nr.indexOf(e.charAt(l++))),
      (s = Nr.indexOf(e.charAt(l++))),
      (r = (i << 2) | (s >> 4)),
      (t += String.fromCharCode(r)),
      (f = Nr.indexOf(e.charAt(l++))),
      (n = ((s & 15) << 4) | (f >> 2)),
      f !== 64 && (t += String.fromCharCode(n)),
      (o = Nr.indexOf(e.charAt(l++))),
      (a = ((f & 3) << 6) | o),
      o !== 64 && (t += String.fromCharCode(a))
  return t
}
var ue = (function () {
    return (
      typeof Buffer < 'u' &&
      typeof process < 'u' &&
      typeof process.versions < 'u' &&
      !!process.versions.node
    )
  })(),
  Rr = (function () {
    if (typeof Buffer < 'u') {
      var e = !Buffer.from
      if (!e)
        try {
          Buffer.from('foo', 'utf8')
        } catch {
          e = !0
        }
      return e
        ? function (t, r) {
            return r ? new Buffer(t, r) : new Buffer(t)
          }
        : Buffer.from.bind(Buffer)
    }
    return function () {}
  })()
function zr(e) {
  return ue
    ? Buffer.alloc
      ? Buffer.alloc(e)
      : new Buffer(e)
    : typeof Uint8Array < 'u'
    ? new Uint8Array(e)
    : new Array(e)
}
function vn(e) {
  return ue
    ? Buffer.allocUnsafe
      ? Buffer.allocUnsafe(e)
      : new Buffer(e)
    : typeof Uint8Array < 'u'
    ? new Uint8Array(e)
    : new Array(e)
}
var pr = function (t) {
  return ue
    ? Rr(t, 'binary')
    : t.split('').map(function (r) {
        return r.charCodeAt(0) & 255
      })
}
function c0(e) {
  if (typeof ArrayBuffer > 'u') return pr(e)
  for (var t = new ArrayBuffer(e.length), r = new Uint8Array(t), n = 0; n != e.length; ++n)
    r[n] = e.charCodeAt(n) & 255
  return t
}
function Pt(e) {
  if (Array.isArray(e))
    return e
      .map(function (n) {
        return String.fromCharCode(n)
      })
      .join('')
  for (var t = [], r = 0; r < e.length; ++r) t[r] = String.fromCharCode(e[r])
  return t.join('')
}
function ps(e) {
  if (typeof Uint8Array > 'u') throw new Error('Unsupported')
  return new Uint8Array(e)
}
var be = ue
  ? function (e) {
      return Buffer.concat(
        e.map(function (t) {
          return Buffer.isBuffer(t) ? t : Rr(t)
        })
      )
    }
  : function (e) {
      if (typeof Uint8Array < 'u') {
        var t = 0,
          r = 0
        for (t = 0; t < e.length; ++t) r += e[t].length
        var n = new Uint8Array(r),
          a = 0
        for (t = 0, r = 0; t < e.length; r += a, ++t)
          if (((a = e[t].length), e[t] instanceof Uint8Array)) n.set(e[t], r)
          else {
            if (typeof e[t] == 'string') throw 'wtf'
            n.set(new Uint8Array(e[t]), r)
          }
        return n
      }
      return [].concat.apply(
        [],
        e.map(function (i) {
          return Array.isArray(i) ? i : [].slice.call(i)
        })
      )
    }
function ds(e) {
  for (var t = [], r = 0, n = e.length + 250, a = zr(e.length + 255), i = 0; i < e.length; ++i) {
    var s = e.charCodeAt(i)
    if (s < 128) a[r++] = s
    else if (s < 2048) (a[r++] = 192 | ((s >> 6) & 31)), (a[r++] = 128 | (s & 63))
    else if (s >= 55296 && s < 57344) {
      s = (s & 1023) + 64
      var f = e.charCodeAt(++i) & 1023
      ;(a[r++] = 240 | ((s >> 8) & 7)),
        (a[r++] = 128 | ((s >> 2) & 63)),
        (a[r++] = 128 | ((f >> 6) & 15) | ((s & 3) << 4)),
        (a[r++] = 128 | (f & 63))
    } else
      (a[r++] = 224 | ((s >> 12) & 15)), (a[r++] = 128 | ((s >> 6) & 63)), (a[r++] = 128 | (s & 63))
    r > n && (t.push(a.slice(0, r)), (r = 0), (a = zr(65535)), (n = 65530))
  }
  return t.push(a.slice(0, r)), be(t)
}
var wt = /\u0000/g,
  Gt = /[\u0001-\u0006]/g
function st(e) {
  for (var t = '', r = e.length - 1; r >= 0; ) t += e.charAt(r--)
  return t
}
function dr(e, t) {
  var r = '' + e
  return r.length >= t ? r : Fe('0', t - r.length) + r
}
function M0(e, t) {
  var r = '' + e
  return r.length >= t ? r : Fe(' ', t - r.length) + r
}
function Zt(e, t) {
  var r = '' + e
  return r.length >= t ? r : r + Fe(' ', t - r.length)
}
function vs(e, t) {
  var r = '' + Math.round(e)
  return r.length >= t ? r : Fe('0', t - r.length) + r
}
function ms(e, t) {
  var r = '' + e
  return r.length >= t ? r : Fe('0', t - r.length) + r
}
var mn = Math.pow(2, 32)
function rt(e, t) {
  if (e > mn || e < -mn) return vs(e, t)
  var r = Math.round(e)
  return ms(r, t)
}
function qt(e, t) {
  return (
    (t = t || 0),
    e.length >= 7 + t &&
      (e.charCodeAt(t) | 32) === 103 &&
      (e.charCodeAt(t + 1) | 32) === 101 &&
      (e.charCodeAt(t + 2) | 32) === 110 &&
      (e.charCodeAt(t + 3) | 32) === 101 &&
      (e.charCodeAt(t + 4) | 32) === 114 &&
      (e.charCodeAt(t + 5) | 32) === 97 &&
      (e.charCodeAt(t + 6) | 32) === 108
  )
}
var gn = [
    ['Sun', 'Sunday'],
    ['Mon', 'Monday'],
    ['Tue', 'Tuesday'],
    ['Wed', 'Wednesday'],
    ['Thu', 'Thursday'],
    ['Fri', 'Friday'],
    ['Sat', 'Saturday']
  ],
  S0 = [
    ['J', 'Jan', 'January'],
    ['F', 'Feb', 'February'],
    ['M', 'Mar', 'March'],
    ['A', 'Apr', 'April'],
    ['M', 'May', 'May'],
    ['J', 'Jun', 'June'],
    ['J', 'Jul', 'July'],
    ['A', 'Aug', 'August'],
    ['S', 'Sep', 'September'],
    ['O', 'Oct', 'October'],
    ['N', 'Nov', 'November'],
    ['D', 'Dec', 'December']
  ]
function gs(e) {
  return (
    e || (e = {}),
    (e[0] = 'General'),
    (e[1] = '0'),
    (e[2] = '0.00'),
    (e[3] = '#,##0'),
    (e[4] = '#,##0.00'),
    (e[9] = '0%'),
    (e[10] = '0.00%'),
    (e[11] = '0.00E+00'),
    (e[12] = '# ?/?'),
    (e[13] = '# ??/??'),
    (e[14] = 'm/d/yy'),
    (e[15] = 'd-mmm-yy'),
    (e[16] = 'd-mmm'),
    (e[17] = 'mmm-yy'),
    (e[18] = 'h:mm AM/PM'),
    (e[19] = 'h:mm:ss AM/PM'),
    (e[20] = 'h:mm'),
    (e[21] = 'h:mm:ss'),
    (e[22] = 'm/d/yy h:mm'),
    (e[37] = '#,##0 ;(#,##0)'),
    (e[38] = '#,##0 ;[Red](#,##0)'),
    (e[39] = '#,##0.00;(#,##0.00)'),
    (e[40] = '#,##0.00;[Red](#,##0.00)'),
    (e[45] = 'mm:ss'),
    (e[46] = '[h]:mm:ss'),
    (e[47] = 'mmss.0'),
    (e[48] = '##0.0E+0'),
    (e[49] = '@'),
    (e[56] = '"上午/下午 "hh"時"mm"分"ss"秒 "'),
    e
  )
}
var ye = {
    0: 'General',
    1: '0',
    2: '0.00',
    3: '#,##0',
    4: '#,##0.00',
    9: '0%',
    10: '0.00%',
    11: '0.00E+00',
    12: '# ?/?',
    13: '# ??/??',
    14: 'm/d/yy',
    15: 'd-mmm-yy',
    16: 'd-mmm',
    17: 'mmm-yy',
    18: 'h:mm AM/PM',
    19: 'h:mm:ss AM/PM',
    20: 'h:mm',
    21: 'h:mm:ss',
    22: 'm/d/yy h:mm',
    37: '#,##0 ;(#,##0)',
    38: '#,##0 ;[Red](#,##0)',
    39: '#,##0.00;(#,##0.00)',
    40: '#,##0.00;[Red](#,##0.00)',
    45: 'mm:ss',
    46: '[h]:mm:ss',
    47: 'mmss.0',
    48: '##0.0E+0',
    49: '@',
    56: '"上午/下午 "hh"時"mm"分"ss"秒 "'
  },
  _n = {
    5: 37,
    6: 38,
    7: 39,
    8: 40,
    23: 0,
    24: 0,
    25: 0,
    26: 0,
    27: 14,
    28: 14,
    29: 14,
    30: 14,
    31: 14,
    50: 14,
    51: 14,
    52: 14,
    53: 14,
    54: 14,
    55: 14,
    56: 14,
    57: 14,
    58: 14,
    59: 1,
    60: 2,
    61: 3,
    62: 4,
    67: 9,
    68: 10,
    69: 12,
    70: 13,
    71: 14,
    72: 14,
    73: 15,
    74: 16,
    75: 17,
    76: 20,
    77: 21,
    78: 22,
    79: 45,
    80: 46,
    81: 47,
    82: 0
  },
  _s = {
    5: '"$"#,##0_);\\("$"#,##0\\)',
    63: '"$"#,##0_);\\("$"#,##0\\)',
    6: '"$"#,##0_);[Red]\\("$"#,##0\\)',
    64: '"$"#,##0_);[Red]\\("$"#,##0\\)',
    7: '"$"#,##0.00_);\\("$"#,##0.00\\)',
    65: '"$"#,##0.00_);\\("$"#,##0.00\\)',
    8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
    66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
    41: '_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)',
    42: '_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)',
    43: '_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)',
    44: '_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)'
  }
function Qt(e, t, r) {
  for (
    var n = e < 0 ? -1 : 1, a = e * n, i = 0, s = 1, f = 0, o = 1, l = 0, c = 0, d = Math.floor(a);
    l < t && ((d = Math.floor(a)), (f = d * s + i), (c = d * l + o), !(a - d < 5e-8));

  )
    (a = 1 / (a - d)), (i = s), (s = f), (o = l), (l = c)
  if ((c > t && (l > t ? ((c = o), (f = i)) : ((c = l), (f = s))), !r)) return [0, n * f, c]
  var x = Math.floor((n * f) / c)
  return [x, n * f - x * c, c]
}
function Xt(e, t, r) {
  if (e > 2958465 || e < 0) return null
  var n = e | 0,
    a = Math.floor(86400 * (e - n)),
    i = 0,
    s = [],
    f = { D: n, T: a, u: 86400 * (e - n) - a, y: 0, m: 0, d: 0, H: 0, M: 0, S: 0, q: 0 }
  if (
    (Math.abs(f.u) < 1e-6 && (f.u = 0),
    t && t.date1904 && (n += 1462),
    f.u > 0.9999 && ((f.u = 0), ++a == 86400 && ((f.T = a = 0), ++n, ++f.D)),
    n === 60)
  )
    (s = r ? [1317, 10, 29] : [1900, 2, 29]), (i = 3)
  else if (n === 0) (s = r ? [1317, 8, 29] : [1900, 1, 0]), (i = 6)
  else {
    n > 60 && --n
    var o = new Date(1900, 0, 1)
    o.setDate(o.getDate() + n - 1),
      (s = [o.getFullYear(), o.getMonth() + 1, o.getDate()]),
      (i = o.getDay()),
      n < 60 && (i = (i + 6) % 7),
      r && (i = ys(o, s))
  }
  return (
    (f.y = s[0]),
    (f.m = s[1]),
    (f.d = s[2]),
    (f.S = a % 60),
    (a = Math.floor(a / 60)),
    (f.M = a % 60),
    (a = Math.floor(a / 60)),
    (f.H = a),
    (f.q = i),
    f
  )
}
var na = new Date(1899, 11, 31, 0, 0, 0),
  Ts = na.getTime(),
  Es = new Date(1900, 2, 1, 0, 0, 0)
function aa(e, t) {
  var r = e.getTime()
  return (
    t ? (r -= 1461 * 24 * 60 * 60 * 1e3) : e >= Es && (r += 24 * 60 * 60 * 1e3),
    (r - (Ts + (e.getTimezoneOffset() - na.getTimezoneOffset()) * 6e4)) / (24 * 60 * 60 * 1e3)
  )
}
function B0(e) {
  return e.indexOf('.') == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/, '$1')
}
function ws(e) {
  return e.indexOf('E') == -1
    ? e
    : e.replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/, '$1E').replace(/(E[+-])(\d)$/, '$10$2')
}
function Ss(e) {
  var t = e < 0 ? 12 : 11,
    r = B0(e.toFixed(12))
  return r.length <= t || ((r = e.toPrecision(10)), r.length <= t) ? r : e.toExponential(5)
}
function As(e) {
  var t = B0(e.toFixed(11))
  return t.length > (e < 0 ? 12 : 11) || t === '0' || t === '-0' ? e.toPrecision(6) : t
}
function Fs(e) {
  var t = Math.floor(Math.log(Math.abs(e)) * Math.LOG10E),
    r
  return (
    t >= -4 && t <= -1
      ? (r = e.toPrecision(10 + t))
      : Math.abs(t) <= 9
      ? (r = Ss(e))
      : t === 10
      ? (r = e.toFixed(10).substr(0, 12))
      : (r = As(e)),
    B0(ws(r.toUpperCase()))
  )
}
function N0(e, t) {
  switch (typeof e) {
    case 'string':
      return e
    case 'boolean':
      return e ? 'TRUE' : 'FALSE'
    case 'number':
      return (e | 0) === e ? e.toString(10) : Fs(e)
    case 'undefined':
      return ''
    case 'object':
      if (e == null) return ''
      if (e instanceof Date) return Pr(14, aa(e, t && t.date1904), t)
  }
  throw new Error('unsupported value in General format: ' + e)
}
function ys(e, t) {
  t[0] -= 581
  var r = e.getDay()
  return e < 60 && (r = (r + 6) % 7), r
}
function Cs(e, t, r, n) {
  var a = '',
    i = 0,
    s = 0,
    f = r.y,
    o,
    l = 0
  switch (e) {
    case 98:
      f = r.y + 543
    case 121:
      switch (t.length) {
        case 1:
        case 2:
          ;(o = f % 100), (l = 2)
          break
        default:
          ;(o = f % 1e4), (l = 4)
          break
      }
      break
    case 109:
      switch (t.length) {
        case 1:
        case 2:
          ;(o = r.m), (l = t.length)
          break
        case 3:
          return S0[r.m - 1][1]
        case 5:
          return S0[r.m - 1][0]
        default:
          return S0[r.m - 1][2]
      }
      break
    case 100:
      switch (t.length) {
        case 1:
        case 2:
          ;(o = r.d), (l = t.length)
          break
        case 3:
          return gn[r.q][0]
        default:
          return gn[r.q][1]
      }
      break
    case 104:
      switch (t.length) {
        case 1:
        case 2:
          ;(o = 1 + ((r.H + 11) % 12)), (l = t.length)
          break
        default:
          throw 'bad hour format: ' + t
      }
      break
    case 72:
      switch (t.length) {
        case 1:
        case 2:
          ;(o = r.H), (l = t.length)
          break
        default:
          throw 'bad hour format: ' + t
      }
      break
    case 77:
      switch (t.length) {
        case 1:
        case 2:
          ;(o = r.M), (l = t.length)
          break
        default:
          throw 'bad minute format: ' + t
      }
      break
    case 115:
      if (t != 's' && t != 'ss' && t != '.0' && t != '.00' && t != '.000')
        throw 'bad second format: ' + t
      return r.u === 0 && (t == 's' || t == 'ss')
        ? dr(r.S, t.length)
        : (n >= 2 ? (s = n === 3 ? 1e3 : 100) : (s = n === 1 ? 10 : 1),
          (i = Math.round(s * (r.S + r.u))),
          i >= 60 * s && (i = 0),
          t === 's'
            ? i === 0
              ? '0'
              : '' + i / s
            : ((a = dr(i, 2 + n)), t === 'ss' ? a.substr(0, 2) : '.' + a.substr(2, t.length - 1)))
    case 90:
      switch (t) {
        case '[h]':
        case '[hh]':
          o = r.D * 24 + r.H
          break
        case '[m]':
        case '[mm]':
          o = (r.D * 24 + r.H) * 60 + r.M
          break
        case '[s]':
        case '[ss]':
          o = ((r.D * 24 + r.H) * 60 + r.M) * 60 + Math.round(r.S + r.u)
          break
        default:
          throw 'bad abstime format: ' + t
      }
      l = t.length === 3 ? 1 : 2
      break
    case 101:
      ;(o = f), (l = 1)
      break
  }
  var c = l > 0 ? dr(o, l) : ''
  return c
}
function kr(e) {
  var t = 3
  if (e.length <= t) return e
  for (var r = e.length % t, n = e.substr(0, r); r != e.length; r += t)
    n += (n.length > 0 ? ',' : '') + e.substr(r, t)
  return n
}
var ia = /%/g
function Os(e, t, r) {
  var n = t.replace(ia, ''),
    a = t.length - n.length
  return Fr(e, n, r * Math.pow(10, 2 * a)) + Fe('%', a)
}
function Ds(e, t, r) {
  for (var n = t.length - 1; t.charCodeAt(n - 1) === 44; ) --n
  return Fr(e, t.substr(0, n), r / Math.pow(10, 3 * (t.length - n)))
}
function sa(e, t) {
  var r,
    n = e.indexOf('E') - e.indexOf('.') - 1
  if (e.match(/^#+0.0E\+0$/)) {
    if (t == 0) return '0.0E+0'
    if (t < 0) return '-' + sa(e, -t)
    var a = e.indexOf('.')
    a === -1 && (a = e.indexOf('E'))
    var i = Math.floor(Math.log(t) * Math.LOG10E) % a
    if (
      (i < 0 && (i += a),
      (r = (t / Math.pow(10, i)).toPrecision(n + 1 + ((a + i) % a))),
      r.indexOf('e') === -1)
    ) {
      var s = Math.floor(Math.log(t) * Math.LOG10E)
      for (
        r.indexOf('.') === -1
          ? (r = r.charAt(0) + '.' + r.substr(1) + 'E+' + (s - r.length + i))
          : (r += 'E+' + (s - i));
        r.substr(0, 2) === '0.';

      )
        (r = r.charAt(0) + r.substr(2, a) + '.' + r.substr(2 + a)),
          (r = r.replace(/^0+([1-9])/, '$1').replace(/^0+\./, '0.'))
      r = r.replace(/\+-/, '-')
    }
    r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function (f, o, l, c) {
      return o + l + c.substr(0, (a + i) % a) + '.' + c.substr(i) + 'E'
    })
  } else r = t.toExponential(n)
  return (
    e.match(/E\+00$/) &&
      r.match(/e[+-]\d$/) &&
      (r = r.substr(0, r.length - 1) + '0' + r.charAt(r.length - 1)),
    e.match(/E\-/) && r.match(/e\+/) && (r = r.replace(/e\+/, 'e')),
    r.replace('e', 'E')
  )
}
var fa = /# (\?+)( ?)\/( ?)(\d+)/
function Rs(e, t, r) {
  var n = parseInt(e[4], 10),
    a = Math.round(t * n),
    i = Math.floor(a / n),
    s = a - i * n,
    f = n
  return (
    r +
    (i === 0 ? '' : '' + i) +
    ' ' +
    (s === 0
      ? Fe(' ', e[1].length + 1 + e[4].length)
      : M0(s, e[1].length) + e[2] + '/' + e[3] + dr(f, e[4].length))
  )
}
function Is(e, t, r) {
  return r + (t === 0 ? '' : '' + t) + Fe(' ', e[1].length + 2 + e[4].length)
}
var la = /^#*0*\.([0#]+)/,
  oa = /\).*[0#]/,
  ca = /\(###\) ###\\?-####/
function Ye(e) {
  for (var t = '', r, n = 0; n != e.length; ++n)
    switch ((r = e.charCodeAt(n))) {
      case 35:
        break
      case 63:
        t += ' '
        break
      case 48:
        t += '0'
        break
      default:
        t += String.fromCharCode(r)
    }
  return t
}
function Tn(e, t) {
  var r = Math.pow(10, t)
  return '' + Math.round(e * r) / r
}
function En(e, t) {
  var r = e - Math.floor(e),
    n = Math.pow(10, t)
  return t < ('' + Math.round(r * n)).length ? 0 : Math.round(r * n)
}
function Ns(e, t) {
  return t < ('' + Math.round((e - Math.floor(e)) * Math.pow(10, t))).length ? 1 : 0
}
function ks(e) {
  return e < 2147483647 && e > -2147483648
    ? '' + (e >= 0 ? e | 0 : (e - 1) | 0)
    : '' + Math.floor(e)
}
function lr(e, t, r) {
  if (e.charCodeAt(0) === 40 && !t.match(oa)) {
    var n = t.replace(/\( */, '').replace(/ \)/, '').replace(/\)/, '')
    return r >= 0 ? lr('n', n, r) : '(' + lr('n', n, -r) + ')'
  }
  if (t.charCodeAt(t.length - 1) === 44) return Ds(e, t, r)
  if (t.indexOf('%') !== -1) return Os(e, t, r)
  if (t.indexOf('E') !== -1) return sa(t, r)
  if (t.charCodeAt(0) === 36) return '$' + lr(e, t.substr(t.charAt(1) == ' ' ? 2 : 1), r)
  var a,
    i,
    s,
    f,
    o = Math.abs(r),
    l = r < 0 ? '-' : ''
  if (t.match(/^00+$/)) return l + rt(o, t.length)
  if (t.match(/^[#?]+$/))
    return (
      (a = rt(r, 0)),
      a === '0' && (a = ''),
      a.length > t.length ? a : Ye(t.substr(0, t.length - a.length)) + a
    )
  if ((i = t.match(fa))) return Rs(i, o, l)
  if (t.match(/^#+0+$/)) return l + rt(o, t.length - t.indexOf('0'))
  if ((i = t.match(la)))
    return (
      (a = Tn(r, i[1].length)
        .replace(/^([^\.]+)$/, '$1.' + Ye(i[1]))
        .replace(/\.$/, '.' + Ye(i[1]))
        .replace(/\.(\d*)$/, function (E, u) {
          return '.' + u + Fe('0', Ye(i[1]).length - u.length)
        })),
      t.indexOf('0.') !== -1 ? a : a.replace(/^0\./, '.')
    )
  if (((t = t.replace(/^#+([0.])/, '$1')), (i = t.match(/^(0*)\.(#*)$/))))
    return (
      l +
      Tn(o, i[2].length)
        .replace(/\.(\d*[1-9])0*$/, '.$1')
        .replace(/^(-?\d*)$/, '$1.')
        .replace(/^0\./, i[1].length ? '0.' : '.')
    )
  if ((i = t.match(/^#{1,3},##0(\.?)$/))) return l + kr(rt(o, 0))
  if ((i = t.match(/^#,##0\.([#0]*0)$/)))
    return r < 0
      ? '-' + lr(e, t, -r)
      : kr('' + (Math.floor(r) + Ns(r, i[1].length))) + '.' + dr(En(r, i[1].length), i[1].length)
  if ((i = t.match(/^#,#*,#0/))) return lr(e, t.replace(/^#,#*,/, ''), r)
  if ((i = t.match(/^([0#]+)(\\?-([0#]+))+$/)))
    return (
      (a = st(lr(e, t.replace(/[\\-]/g, ''), r))),
      (s = 0),
      st(
        st(t.replace(/\\/g, '')).replace(/[0#]/g, function (E) {
          return s < a.length ? a.charAt(s++) : E === '0' ? '0' : ''
        })
      )
    )
  if (t.match(ca))
    return (
      (a = lr(e, '##########', r)), '(' + a.substr(0, 3) + ') ' + a.substr(3, 3) + '-' + a.substr(6)
    )
  var c = ''
  if ((i = t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (s = Math.min(i[4].length, 7)),
      (f = Qt(o, Math.pow(10, s) - 1, !1)),
      (a = '' + l),
      (c = Fr('n', i[1], f[1])),
      c.charAt(c.length - 1) == ' ' && (c = c.substr(0, c.length - 1) + '0'),
      (a += c + i[2] + '/' + i[3]),
      (c = Zt(f[2], s)),
      c.length < i[4].length && (c = Ye(i[4].substr(i[4].length - c.length)) + c),
      (a += c),
      a
    )
  if ((i = t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (s = Math.min(Math.max(i[1].length, i[4].length), 7)),
      (f = Qt(o, Math.pow(10, s) - 1, !0)),
      l +
        (f[0] || (f[1] ? '' : '0')) +
        ' ' +
        (f[1]
          ? M0(f[1], s) + i[2] + '/' + i[3] + Zt(f[2], s)
          : Fe(' ', 2 * s + 1 + i[2].length + i[3].length))
    )
  if ((i = t.match(/^[#0?]+$/)))
    return (a = rt(r, 0)), t.length <= a.length ? a : Ye(t.substr(0, t.length - a.length)) + a
  if ((i = t.match(/^([#0?]+)\.([#0]+)$/))) {
    ;(a = '' + r.toFixed(Math.min(i[2].length, 10)).replace(/([^0])0+$/, '$1')),
      (s = a.indexOf('.'))
    var d = t.indexOf('.') - s,
      x = t.length - a.length - d
    return Ye(t.substr(0, d) + a + t.substr(t.length - x))
  }
  if ((i = t.match(/^00,000\.([#0]*0)$/)))
    return (
      (s = En(r, i[1].length)),
      r < 0
        ? '-' + lr(e, t, -r)
        : kr(ks(r))
            .replace(/^\d,\d{3}$/, '0$&')
            .replace(/^\d*$/, function (E) {
              return '00,' + (E.length < 3 ? dr(0, 3 - E.length) : '') + E
            }) +
          '.' +
          dr(s, i[1].length)
    )
  switch (t) {
    case '###,##0.00':
      return lr(e, '#,##0.00', r)
    case '###,###':
    case '##,###':
    case '#,###':
      var p = kr(rt(o, 0))
      return p !== '0' ? l + p : ''
    case '###,###.00':
      return lr(e, '###,##0.00', r).replace(/^0\./, '.')
    case '#,###.00':
      return lr(e, '#,##0.00', r).replace(/^0\./, '.')
  }
  throw new Error('unsupported format |' + t + '|')
}
function Ps(e, t, r) {
  for (var n = t.length - 1; t.charCodeAt(n - 1) === 44; ) --n
  return Fr(e, t.substr(0, n), r / Math.pow(10, 3 * (t.length - n)))
}
function Ls(e, t, r) {
  var n = t.replace(ia, ''),
    a = t.length - n.length
  return Fr(e, n, r * Math.pow(10, 2 * a)) + Fe('%', a)
}
function ha(e, t) {
  var r,
    n = e.indexOf('E') - e.indexOf('.') - 1
  if (e.match(/^#+0.0E\+0$/)) {
    if (t == 0) return '0.0E+0'
    if (t < 0) return '-' + ha(e, -t)
    var a = e.indexOf('.')
    a === -1 && (a = e.indexOf('E'))
    var i = Math.floor(Math.log(t) * Math.LOG10E) % a
    if (
      (i < 0 && (i += a),
      (r = (t / Math.pow(10, i)).toPrecision(n + 1 + ((a + i) % a))),
      !r.match(/[Ee]/))
    ) {
      var s = Math.floor(Math.log(t) * Math.LOG10E)
      r.indexOf('.') === -1
        ? (r = r.charAt(0) + '.' + r.substr(1) + 'E+' + (s - r.length + i))
        : (r += 'E+' + (s - i)),
        (r = r.replace(/\+-/, '-'))
    }
    r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function (f, o, l, c) {
      return o + l + c.substr(0, (a + i) % a) + '.' + c.substr(i) + 'E'
    })
  } else r = t.toExponential(n)
  return (
    e.match(/E\+00$/) &&
      r.match(/e[+-]\d$/) &&
      (r = r.substr(0, r.length - 1) + '0' + r.charAt(r.length - 1)),
    e.match(/E\-/) && r.match(/e\+/) && (r = r.replace(/e\+/, 'e')),
    r.replace('e', 'E')
  )
}
function gr(e, t, r) {
  if (e.charCodeAt(0) === 40 && !t.match(oa)) {
    var n = t.replace(/\( */, '').replace(/ \)/, '').replace(/\)/, '')
    return r >= 0 ? gr('n', n, r) : '(' + gr('n', n, -r) + ')'
  }
  if (t.charCodeAt(t.length - 1) === 44) return Ps(e, t, r)
  if (t.indexOf('%') !== -1) return Ls(e, t, r)
  if (t.indexOf('E') !== -1) return ha(t, r)
  if (t.charCodeAt(0) === 36) return '$' + gr(e, t.substr(t.charAt(1) == ' ' ? 2 : 1), r)
  var a,
    i,
    s,
    f,
    o = Math.abs(r),
    l = r < 0 ? '-' : ''
  if (t.match(/^00+$/)) return l + dr(o, t.length)
  if (t.match(/^[#?]+$/))
    return (
      (a = '' + r),
      r === 0 && (a = ''),
      a.length > t.length ? a : Ye(t.substr(0, t.length - a.length)) + a
    )
  if ((i = t.match(fa))) return Is(i, o, l)
  if (t.match(/^#+0+$/)) return l + dr(o, t.length - t.indexOf('0'))
  if ((i = t.match(la)))
    return (
      (a = ('' + r).replace(/^([^\.]+)$/, '$1.' + Ye(i[1])).replace(/\.$/, '.' + Ye(i[1]))),
      (a = a.replace(/\.(\d*)$/, function (E, u) {
        return '.' + u + Fe('0', Ye(i[1]).length - u.length)
      })),
      t.indexOf('0.') !== -1 ? a : a.replace(/^0\./, '.')
    )
  if (((t = t.replace(/^#+([0.])/, '$1')), (i = t.match(/^(0*)\.(#*)$/))))
    return (
      l +
      ('' + o)
        .replace(/\.(\d*[1-9])0*$/, '.$1')
        .replace(/^(-?\d*)$/, '$1.')
        .replace(/^0\./, i[1].length ? '0.' : '.')
    )
  if ((i = t.match(/^#{1,3},##0(\.?)$/))) return l + kr('' + o)
  if ((i = t.match(/^#,##0\.([#0]*0)$/)))
    return r < 0 ? '-' + gr(e, t, -r) : kr('' + r) + '.' + Fe('0', i[1].length)
  if ((i = t.match(/^#,#*,#0/))) return gr(e, t.replace(/^#,#*,/, ''), r)
  if ((i = t.match(/^([0#]+)(\\?-([0#]+))+$/)))
    return (
      (a = st(gr(e, t.replace(/[\\-]/g, ''), r))),
      (s = 0),
      st(
        st(t.replace(/\\/g, '')).replace(/[0#]/g, function (E) {
          return s < a.length ? a.charAt(s++) : E === '0' ? '0' : ''
        })
      )
    )
  if (t.match(ca))
    return (
      (a = gr(e, '##########', r)), '(' + a.substr(0, 3) + ') ' + a.substr(3, 3) + '-' + a.substr(6)
    )
  var c = ''
  if ((i = t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (s = Math.min(i[4].length, 7)),
      (f = Qt(o, Math.pow(10, s) - 1, !1)),
      (a = '' + l),
      (c = Fr('n', i[1], f[1])),
      c.charAt(c.length - 1) == ' ' && (c = c.substr(0, c.length - 1) + '0'),
      (a += c + i[2] + '/' + i[3]),
      (c = Zt(f[2], s)),
      c.length < i[4].length && (c = Ye(i[4].substr(i[4].length - c.length)) + c),
      (a += c),
      a
    )
  if ((i = t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (s = Math.min(Math.max(i[1].length, i[4].length), 7)),
      (f = Qt(o, Math.pow(10, s) - 1, !0)),
      l +
        (f[0] || (f[1] ? '' : '0')) +
        ' ' +
        (f[1]
          ? M0(f[1], s) + i[2] + '/' + i[3] + Zt(f[2], s)
          : Fe(' ', 2 * s + 1 + i[2].length + i[3].length))
    )
  if ((i = t.match(/^[#0?]+$/)))
    return (a = '' + r), t.length <= a.length ? a : Ye(t.substr(0, t.length - a.length)) + a
  if ((i = t.match(/^([#0]+)\.([#0]+)$/))) {
    ;(a = '' + r.toFixed(Math.min(i[2].length, 10)).replace(/([^0])0+$/, '$1')),
      (s = a.indexOf('.'))
    var d = t.indexOf('.') - s,
      x = t.length - a.length - d
    return Ye(t.substr(0, d) + a + t.substr(t.length - x))
  }
  if ((i = t.match(/^00,000\.([#0]*0)$/)))
    return r < 0
      ? '-' + gr(e, t, -r)
      : kr('' + r)
          .replace(/^\d,\d{3}$/, '0$&')
          .replace(/^\d*$/, function (E) {
            return '00,' + (E.length < 3 ? dr(0, 3 - E.length) : '') + E
          }) +
          '.' +
          dr(0, i[1].length)
  switch (t) {
    case '###,###':
    case '##,###':
    case '#,###':
      var p = kr('' + o)
      return p !== '0' ? l + p : ''
    default:
      if (t.match(/\.[0#?]*$/))
        return gr(e, t.slice(0, t.lastIndexOf('.')), r) + Ye(t.slice(t.lastIndexOf('.')))
  }
  throw new Error('unsupported format |' + t + '|')
}
function Fr(e, t, r) {
  return (r | 0) === r ? gr(e, t, r) : lr(e, t, r)
}
function Ms(e) {
  for (var t = [], r = !1, n = 0, a = 0; n < e.length; ++n)
    switch (e.charCodeAt(n)) {
      case 34:
        r = !r
        break
      case 95:
      case 42:
      case 92:
        ++n
        break
      case 59:
        ;(t[t.length] = e.substr(a, n - a)), (a = n + 1)
    }
  if (((t[t.length] = e.substr(a)), r === !0))
    throw new Error('Format |' + e + '| unterminated string ')
  return t
}
var ua = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/
function xa(e) {
  for (var t = 0, r = '', n = ''; t < e.length; )
    switch ((r = e.charAt(t))) {
      case 'G':
        qt(e, t) && (t += 6), t++
        break
      case '"':
        for (; e.charCodeAt(++t) !== 34 && t < e.length; );
        ++t
        break
      case '\\':
        t += 2
        break
      case '_':
        t += 2
        break
      case '@':
        ++t
        break
      case 'B':
      case 'b':
        if (e.charAt(t + 1) === '1' || e.charAt(t + 1) === '2') return !0
      case 'M':
      case 'D':
      case 'Y':
      case 'H':
      case 'S':
      case 'E':
      case 'm':
      case 'd':
      case 'y':
      case 'h':
      case 's':
      case 'e':
      case 'g':
        return !0
      case 'A':
      case 'a':
      case '上':
        if (
          e.substr(t, 3).toUpperCase() === 'A/P' ||
          e.substr(t, 5).toUpperCase() === 'AM/PM' ||
          e.substr(t, 5).toUpperCase() === '上午/下午'
        )
          return !0
        ++t
        break
      case '[':
        for (n = r; e.charAt(t++) !== ']' && t < e.length; ) n += e.charAt(t)
        if (n.match(ua)) return !0
        break
      case '.':
      case '0':
      case '#':
        for (
          ;
          t < e.length &&
          ('0#?.,E+-%'.indexOf((r = e.charAt(++t))) > -1 ||
            (r == '\\' && e.charAt(t + 1) == '-' && '0#'.indexOf(e.charAt(t + 2)) > -1));

        );
        break
      case '?':
        for (; e.charAt(++t) === r; );
        break
      case '*':
        ++t, (e.charAt(t) == ' ' || e.charAt(t) == '*') && ++t
        break
      case '(':
      case ')':
        ++t
        break
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        for (; t < e.length && '0123456789'.indexOf(e.charAt(++t)) > -1; );
        break
      case ' ':
        ++t
        break
      default:
        ++t
        break
    }
  return !1
}
function Bs(e, t, r, n) {
  for (var a = [], i = '', s = 0, f = '', o = 't', l, c, d, x = 'H'; s < e.length; )
    switch ((f = e.charAt(s))) {
      case 'G':
        if (!qt(e, s)) throw new Error('unrecognized character ' + f + ' in ' + e)
        ;(a[a.length] = { t: 'G', v: 'General' }), (s += 7)
        break
      case '"':
        for (i = ''; (d = e.charCodeAt(++s)) !== 34 && s < e.length; ) i += String.fromCharCode(d)
        ;(a[a.length] = { t: 't', v: i }), ++s
        break
      case '\\':
        var p = e.charAt(++s),
          E = p === '(' || p === ')' ? p : 't'
        ;(a[a.length] = { t: E, v: p }), ++s
        break
      case '_':
        ;(a[a.length] = { t: 't', v: ' ' }), (s += 2)
        break
      case '@':
        ;(a[a.length] = { t: 'T', v: t }), ++s
        break
      case 'B':
      case 'b':
        if (e.charAt(s + 1) === '1' || e.charAt(s + 1) === '2') {
          if (l == null && ((l = Xt(t, r, e.charAt(s + 1) === '2')), l == null)) return ''
          ;(a[a.length] = { t: 'X', v: e.substr(s, 2) }), (o = f), (s += 2)
          break
        }
      case 'M':
      case 'D':
      case 'Y':
      case 'H':
      case 'S':
      case 'E':
        f = f.toLowerCase()
      case 'm':
      case 'd':
      case 'y':
      case 'h':
      case 's':
      case 'e':
      case 'g':
        if (t < 0 || (l == null && ((l = Xt(t, r)), l == null))) return ''
        for (i = f; ++s < e.length && e.charAt(s).toLowerCase() === f; ) i += f
        f === 'm' && o.toLowerCase() === 'h' && (f = 'M'),
          f === 'h' && (f = x),
          (a[a.length] = { t: f, v: i }),
          (o = f)
        break
      case 'A':
      case 'a':
      case '上':
        var u = { t: f, v: f }
        if (
          (l == null && (l = Xt(t, r)),
          e.substr(s, 3).toUpperCase() === 'A/P'
            ? (l != null && (u.v = l.H >= 12 ? 'P' : 'A'), (u.t = 'T'), (x = 'h'), (s += 3))
            : e.substr(s, 5).toUpperCase() === 'AM/PM'
            ? (l != null && (u.v = l.H >= 12 ? 'PM' : 'AM'), (u.t = 'T'), (s += 5), (x = 'h'))
            : e.substr(s, 5).toUpperCase() === '上午/下午'
            ? (l != null && (u.v = l.H >= 12 ? '下午' : '上午'), (u.t = 'T'), (s += 5), (x = 'h'))
            : ((u.t = 't'), ++s),
          l == null && u.t === 'T')
        )
          return ''
        ;(a[a.length] = u), (o = f)
        break
      case '[':
        for (i = f; e.charAt(s++) !== ']' && s < e.length; ) i += e.charAt(s)
        if (i.slice(-1) !== ']') throw 'unterminated "[" block: |' + i + '|'
        if (i.match(ua)) {
          if (l == null && ((l = Xt(t, r)), l == null)) return ''
          ;(a[a.length] = { t: 'Z', v: i.toLowerCase() }), (o = i.charAt(1))
        } else
          i.indexOf('$') > -1 &&
            ((i = (i.match(/\$([^-\[\]]*)/) || [])[1] || '$'),
            xa(e) || (a[a.length] = { t: 't', v: i }))
        break
      case '.':
        if (l != null) {
          for (i = f; ++s < e.length && (f = e.charAt(s)) === '0'; ) i += f
          a[a.length] = { t: 's', v: i }
          break
        }
      case '0':
      case '#':
        for (i = f; ++s < e.length && '0#?.,E+-%'.indexOf((f = e.charAt(s))) > -1; ) i += f
        a[a.length] = { t: 'n', v: i }
        break
      case '?':
        for (i = f; e.charAt(++s) === f; ) i += f
        ;(a[a.length] = { t: f, v: i }), (o = f)
        break
      case '*':
        ++s, (e.charAt(s) == ' ' || e.charAt(s) == '*') && ++s
        break
      case '(':
      case ')':
        ;(a[a.length] = { t: n === 1 ? 't' : f, v: f }), ++s
        break
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        for (i = f; s < e.length && '0123456789'.indexOf(e.charAt(++s)) > -1; ) i += e.charAt(s)
        a[a.length] = { t: 'D', v: i }
        break
      case ' ':
        ;(a[a.length] = { t: f, v: f }), ++s
        break
      case '$':
        ;(a[a.length] = { t: 't', v: '$' }), ++s
        break
      default:
        if (",$-+/():!^&'~{}<>=€acfijklopqrtuvwxzP".indexOf(f) === -1)
          throw new Error('unrecognized character ' + f + ' in ' + e)
        ;(a[a.length] = { t: 't', v: f }), ++s
        break
    }
  var _ = 0,
    O = 0,
    R
  for (s = a.length - 1, o = 't'; s >= 0; --s)
    switch (a[s].t) {
      case 'h':
      case 'H':
        ;(a[s].t = x), (o = 'h'), _ < 1 && (_ = 1)
        break
      case 's':
        ;(R = a[s].v.match(/\.0+$/)) && (O = Math.max(O, R[0].length - 1)), _ < 3 && (_ = 3)
      case 'd':
      case 'y':
      case 'M':
      case 'e':
        o = a[s].t
        break
      case 'm':
        o === 's' && ((a[s].t = 'M'), _ < 2 && (_ = 2))
        break
      case 'X':
        break
      case 'Z':
        _ < 1 && a[s].v.match(/[Hh]/) && (_ = 1),
          _ < 2 && a[s].v.match(/[Mm]/) && (_ = 2),
          _ < 3 && a[s].v.match(/[Ss]/) && (_ = 3)
    }
  switch (_) {
    case 0:
      break
    case 1:
      l.u >= 0.5 && ((l.u = 0), ++l.S),
        l.S >= 60 && ((l.S = 0), ++l.M),
        l.M >= 60 && ((l.M = 0), ++l.H)
      break
    case 2:
      l.u >= 0.5 && ((l.u = 0), ++l.S), l.S >= 60 && ((l.S = 0), ++l.M)
      break
  }
  var y = '',
    M
  for (s = 0; s < a.length; ++s)
    switch (a[s].t) {
      case 't':
      case 'T':
      case ' ':
      case 'D':
        break
      case 'X':
        ;(a[s].v = ''), (a[s].t = ';')
        break
      case 'd':
      case 'm':
      case 'y':
      case 'h':
      case 'H':
      case 'M':
      case 's':
      case 'e':
      case 'b':
      case 'Z':
        ;(a[s].v = Cs(a[s].t.charCodeAt(0), a[s].v, l, O)), (a[s].t = 't')
        break
      case 'n':
      case '?':
        for (
          M = s + 1;
          a[M] != null &&
          ((f = a[M].t) === '?' ||
            f === 'D' ||
            ((f === ' ' || f === 't') &&
              a[M + 1] != null &&
              (a[M + 1].t === '?' || (a[M + 1].t === 't' && a[M + 1].v === '/'))) ||
            (a[s].t === '(' && (f === ' ' || f === 'n' || f === ')')) ||
            (f === 't' &&
              (a[M].v === '/' || (a[M].v === ' ' && a[M + 1] != null && a[M + 1].t == '?'))));

        )
          (a[s].v += a[M].v), (a[M] = { v: '', t: ';' }), ++M
        ;(y += a[s].v), (s = M - 1)
        break
      case 'G':
        ;(a[s].t = 't'), (a[s].v = N0(t, r))
        break
    }
  var Y = '',
    ee,
    C
  if (y.length > 0) {
    y.charCodeAt(0) == 40
      ? ((ee = t < 0 && y.charCodeAt(0) === 45 ? -t : t), (C = Fr('n', y, ee)))
      : ((ee = t < 0 && n > 1 ? -t : t),
        (C = Fr('n', y, ee)),
        ee < 0 && a[0] && a[0].t == 't' && ((C = C.substr(1)), (a[0].v = '-' + a[0].v))),
      (M = C.length - 1)
    var b = a.length
    for (s = 0; s < a.length; ++s)
      if (a[s] != null && a[s].t != 't' && a[s].v.indexOf('.') > -1) {
        b = s
        break
      }
    var L = a.length
    if (b === a.length && C.indexOf('E') === -1) {
      for (s = a.length - 1; s >= 0; --s)
        a[s] == null ||
          'n?'.indexOf(a[s].t) === -1 ||
          (M >= a[s].v.length - 1
            ? ((M -= a[s].v.length), (a[s].v = C.substr(M + 1, a[s].v.length)))
            : M < 0
            ? (a[s].v = '')
            : ((a[s].v = C.substr(0, M + 1)), (M = -1)),
          (a[s].t = 't'),
          (L = s))
      M >= 0 && L < a.length && (a[L].v = C.substr(0, M + 1) + a[L].v)
    } else if (b !== a.length && C.indexOf('E') === -1) {
      for (M = C.indexOf('.') - 1, s = b; s >= 0; --s)
        if (!(a[s] == null || 'n?'.indexOf(a[s].t) === -1)) {
          for (
            c = a[s].v.indexOf('.') > -1 && s === b ? a[s].v.indexOf('.') - 1 : a[s].v.length - 1,
              Y = a[s].v.substr(c + 1);
            c >= 0;
            --c
          )
            M >= 0 &&
              (a[s].v.charAt(c) === '0' || a[s].v.charAt(c) === '#') &&
              (Y = C.charAt(M--) + Y)
          ;(a[s].v = Y), (a[s].t = 't'), (L = s)
        }
      for (
        M >= 0 && L < a.length && (a[L].v = C.substr(0, M + 1) + a[L].v),
          M = C.indexOf('.') + 1,
          s = b;
        s < a.length;
        ++s
      )
        if (!(a[s] == null || ('n?('.indexOf(a[s].t) === -1 && s !== b))) {
          for (
            c = a[s].v.indexOf('.') > -1 && s === b ? a[s].v.indexOf('.') + 1 : 0,
              Y = a[s].v.substr(0, c);
            c < a[s].v.length;
            ++c
          )
            M < C.length && (Y += C.charAt(M++))
          ;(a[s].v = Y), (a[s].t = 't'), (L = s)
        }
    }
  }
  for (s = 0; s < a.length; ++s)
    a[s] != null &&
      'n?'.indexOf(a[s].t) > -1 &&
      ((ee = n > 1 && t < 0 && s > 0 && a[s - 1].v === '-' ? -t : t),
      (a[s].v = Fr(a[s].t, a[s].v, ee)),
      (a[s].t = 't'))
  var V = ''
  for (s = 0; s !== a.length; ++s) a[s] != null && (V += a[s].v)
  return V
}
var wn = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/
function Sn(e, t) {
  if (t == null) return !1
  var r = parseFloat(t[2])
  switch (t[1]) {
    case '=':
      if (e == r) return !0
      break
    case '>':
      if (e > r) return !0
      break
    case '<':
      if (e < r) return !0
      break
    case '<>':
      if (e != r) return !0
      break
    case '>=':
      if (e >= r) return !0
      break
    case '<=':
      if (e <= r) return !0
      break
  }
  return !1
}
function Us(e, t) {
  var r = Ms(e),
    n = r.length,
    a = r[n - 1].indexOf('@')
  if ((n < 4 && a > -1 && --n, r.length > 4))
    throw new Error('cannot find right format for |' + r.join('|') + '|')
  if (typeof t != 'number') return [4, r.length === 4 || a > -1 ? r[r.length - 1] : '@']
  switch (r.length) {
    case 1:
      r = a > -1 ? ['General', 'General', 'General', r[0]] : [r[0], r[0], r[0], '@']
      break
    case 2:
      r = a > -1 ? [r[0], r[0], r[0], r[1]] : [r[0], r[1], r[0], '@']
      break
    case 3:
      r = a > -1 ? [r[0], r[1], r[0], r[2]] : [r[0], r[1], r[2], '@']
      break
  }
  var i = t > 0 ? r[0] : t < 0 ? r[1] : r[2]
  if (r[0].indexOf('[') === -1 && r[1].indexOf('[') === -1) return [n, i]
  if (r[0].match(/\[[=<>]/) != null || r[1].match(/\[[=<>]/) != null) {
    var s = r[0].match(wn),
      f = r[1].match(wn)
    return Sn(t, s) ? [n, r[0]] : Sn(t, f) ? [n, r[1]] : [n, r[s != null && f != null ? 2 : 1]]
  }
  return [n, i]
}
function Pr(e, t, r) {
  r == null && (r = {})
  var n = ''
  switch (typeof e) {
    case 'string':
      e == 'm/d/yy' && r.dateNF ? (n = r.dateNF) : (n = e)
      break
    case 'number':
      e == 14 && r.dateNF ? (n = r.dateNF) : (n = (r.table != null ? r.table : ye)[e]),
        n == null && (n = (r.table && r.table[_n[e]]) || ye[_n[e]]),
        n == null && (n = _s[e] || 'General')
      break
  }
  if (qt(n, 0)) return N0(t, r)
  t instanceof Date && (t = aa(t, r.date1904))
  var a = Us(n, t)
  if (qt(a[1])) return N0(t, r)
  if (t === !0) t = 'TRUE'
  else if (t === !1) t = 'FALSE'
  else if (t === '' || t == null) return ''
  return Bs(a[1], t, r, a[0])
}
function pa(e, t) {
  if (typeof t != 'number') {
    t = +t || -1
    for (var r = 0; r < 392; ++r) {
      if (ye[r] == null) {
        t < 0 && (t = r)
        continue
      }
      if (ye[r] == e) {
        t = r
        break
      }
    }
    t < 0 && (t = 391)
  }
  return (ye[t] = e), t
}
function h0(e) {
  for (var t = 0; t != 392; ++t) e[t] !== void 0 && pa(e[t], t)
}
function u0() {
  ye = gs()
}
var da = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g
function bs(e) {
  var t = typeof e == 'number' ? ye[e] : e
  return (t = t.replace(da, '(\\d+)')), new RegExp('^' + t + '$')
}
function Ws(e, t, r) {
  var n = -1,
    a = -1,
    i = -1,
    s = -1,
    f = -1,
    o = -1
  ;(t.match(da) || []).forEach(function (d, x) {
    var p = parseInt(r[x + 1], 10)
    switch (d.toLowerCase().charAt(0)) {
      case 'y':
        n = p
        break
      case 'd':
        i = p
        break
      case 'h':
        s = p
        break
      case 's':
        o = p
        break
      case 'm':
        s >= 0 ? (f = p) : (a = p)
        break
    }
  }),
    o >= 0 && f == -1 && a >= 0 && ((f = a), (a = -1))
  var l =
    ('' + (n >= 0 ? n : new Date().getFullYear())).slice(-4) +
    '-' +
    ('00' + (a >= 1 ? a : 1)).slice(-2) +
    '-' +
    ('00' + (i >= 1 ? i : 1)).slice(-2)
  l.length == 7 && (l = '0' + l), l.length == 8 && (l = '20' + l)
  var c =
    ('00' + (s >= 0 ? s : 0)).slice(-2) +
    ':' +
    ('00' + (f >= 0 ? f : 0)).slice(-2) +
    ':' +
    ('00' + (o >= 0 ? o : 0)).slice(-2)
  return s == -1 && f == -1 && o == -1 ? l : n == -1 && a == -1 && i == -1 ? c : l + 'T' + c
}
var Hs = (function () {
    var e = {}
    e.version = '1.2.0'
    function t() {
      for (var C = 0, b = new Array(256), L = 0; L != 256; ++L)
        (C = L),
          (C = C & 1 ? -306674912 ^ (C >>> 1) : C >>> 1),
          (C = C & 1 ? -306674912 ^ (C >>> 1) : C >>> 1),
          (C = C & 1 ? -306674912 ^ (C >>> 1) : C >>> 1),
          (C = C & 1 ? -306674912 ^ (C >>> 1) : C >>> 1),
          (C = C & 1 ? -306674912 ^ (C >>> 1) : C >>> 1),
          (C = C & 1 ? -306674912 ^ (C >>> 1) : C >>> 1),
          (C = C & 1 ? -306674912 ^ (C >>> 1) : C >>> 1),
          (C = C & 1 ? -306674912 ^ (C >>> 1) : C >>> 1),
          (b[L] = C)
      return typeof Int32Array < 'u' ? new Int32Array(b) : b
    }
    var r = t()
    function n(C) {
      var b = 0,
        L = 0,
        V = 0,
        G = typeof Int32Array < 'u' ? new Int32Array(4096) : new Array(4096)
      for (V = 0; V != 256; ++V) G[V] = C[V]
      for (V = 0; V != 256; ++V)
        for (L = C[V], b = 256 + V; b < 4096; b += 256) L = G[b] = (L >>> 8) ^ C[L & 255]
      var z = []
      for (V = 1; V != 16; ++V)
        z[V - 1] =
          typeof Int32Array < 'u'
            ? G.subarray(V * 256, V * 256 + 256)
            : G.slice(V * 256, V * 256 + 256)
      return z
    }
    var a = n(r),
      i = a[0],
      s = a[1],
      f = a[2],
      o = a[3],
      l = a[4],
      c = a[5],
      d = a[6],
      x = a[7],
      p = a[8],
      E = a[9],
      u = a[10],
      _ = a[11],
      O = a[12],
      R = a[13],
      y = a[14]
    function M(C, b) {
      for (var L = b ^ -1, V = 0, G = C.length; V < G; )
        L = (L >>> 8) ^ r[(L ^ C.charCodeAt(V++)) & 255]
      return ~L
    }
    function Y(C, b) {
      for (var L = b ^ -1, V = C.length - 15, G = 0; G < V; )
        L =
          y[C[G++] ^ (L & 255)] ^
          R[C[G++] ^ ((L >> 8) & 255)] ^
          O[C[G++] ^ ((L >> 16) & 255)] ^
          _[C[G++] ^ (L >>> 24)] ^
          u[C[G++]] ^
          E[C[G++]] ^
          p[C[G++]] ^
          x[C[G++]] ^
          d[C[G++]] ^
          c[C[G++]] ^
          l[C[G++]] ^
          o[C[G++]] ^
          f[C[G++]] ^
          s[C[G++]] ^
          i[C[G++]] ^
          r[C[G++]]
      for (V += 15; G < V; ) L = (L >>> 8) ^ r[(L ^ C[G++]) & 255]
      return ~L
    }
    function ee(C, b) {
      for (var L = b ^ -1, V = 0, G = C.length, z = 0, re = 0; V < G; )
        (z = C.charCodeAt(V++)),
          z < 128
            ? (L = (L >>> 8) ^ r[(L ^ z) & 255])
            : z < 2048
            ? ((L = (L >>> 8) ^ r[(L ^ (192 | ((z >> 6) & 31))) & 255]),
              (L = (L >>> 8) ^ r[(L ^ (128 | (z & 63))) & 255]))
            : z >= 55296 && z < 57344
            ? ((z = (z & 1023) + 64),
              (re = C.charCodeAt(V++) & 1023),
              (L = (L >>> 8) ^ r[(L ^ (240 | ((z >> 8) & 7))) & 255]),
              (L = (L >>> 8) ^ r[(L ^ (128 | ((z >> 2) & 63))) & 255]),
              (L = (L >>> 8) ^ r[(L ^ (128 | ((re >> 6) & 15) | ((z & 3) << 4))) & 255]),
              (L = (L >>> 8) ^ r[(L ^ (128 | (re & 63))) & 255]))
            : ((L = (L >>> 8) ^ r[(L ^ (224 | ((z >> 12) & 15))) & 255]),
              (L = (L >>> 8) ^ r[(L ^ (128 | ((z >> 6) & 63))) & 255]),
              (L = (L >>> 8) ^ r[(L ^ (128 | (z & 63))) & 255]))
      return ~L
    }
    return (e.table = r), (e.bstr = M), (e.buf = Y), (e.str = ee), e
  })(),
  _e = (function () {
    var t = {}
    t.version = '1.2.1'
    function r(h, g) {
      for (
        var v = h.split('/'), m = g.split('/'), T = 0, w = 0, I = Math.min(v.length, m.length);
        T < I;
        ++T
      ) {
        if ((w = v[T].length - m[T].length)) return w
        if (v[T] != m[T]) return v[T] < m[T] ? -1 : 1
      }
      return v.length - m.length
    }
    function n(h) {
      if (h.charAt(h.length - 1) == '/')
        return h.slice(0, -1).indexOf('/') === -1 ? h : n(h.slice(0, -1))
      var g = h.lastIndexOf('/')
      return g === -1 ? h : h.slice(0, g + 1)
    }
    function a(h) {
      if (h.charAt(h.length - 1) == '/') return a(h.slice(0, -1))
      var g = h.lastIndexOf('/')
      return g === -1 ? h : h.slice(g + 1)
    }
    function i(h, g) {
      typeof g == 'string' && (g = new Date(g))
      var v = g.getHours()
      ;(v = (v << 6) | g.getMinutes()), (v = (v << 5) | (g.getSeconds() >>> 1)), h.write_shift(2, v)
      var m = g.getFullYear() - 1980
      ;(m = (m << 4) | (g.getMonth() + 1)), (m = (m << 5) | g.getDate()), h.write_shift(2, m)
    }
    function s(h) {
      var g = h.read_shift(2) & 65535,
        v = h.read_shift(2) & 65535,
        m = new Date(),
        T = v & 31
      v >>>= 5
      var w = v & 15
      ;(v >>>= 4), m.setMilliseconds(0), m.setFullYear(v + 1980), m.setMonth(w - 1), m.setDate(T)
      var I = g & 31
      g >>>= 5
      var U = g & 63
      return (g >>>= 6), m.setHours(g), m.setMinutes(U), m.setSeconds(I << 1), m
    }
    function f(h) {
      tr(h, 0)
      for (var g = {}, v = 0; h.l <= h.length - 4; ) {
        var m = h.read_shift(2),
          T = h.read_shift(2),
          w = h.l + T,
          I = {}
        switch (m) {
          case 21589:
            ;(v = h.read_shift(1)),
              v & 1 && (I.mtime = h.read_shift(4)),
              T > 5 && (v & 2 && (I.atime = h.read_shift(4)), v & 4 && (I.ctime = h.read_shift(4))),
              I.mtime && (I.mt = new Date(I.mtime * 1e3))
            break
        }
        ;(h.l = w), (g[m] = I)
      }
      return g
    }
    var o
    function l() {
      return o || (o = {})
    }
    function c(h, g) {
      if (h[0] == 80 && h[1] == 75) return xn(h, g)
      if ((h[0] | 32) == 109 && (h[1] | 32) == 105) return zi(h, g)
      if (h.length < 512) throw new Error('CFB file size ' + h.length + ' < 512')
      var v = 3,
        m = 512,
        T = 0,
        w = 0,
        I = 0,
        U = 0,
        D = 0,
        N = [],
        k = h.slice(0, 512)
      tr(k, 0)
      var X = d(k)
      switch (((v = X[0]), v)) {
        case 3:
          m = 512
          break
        case 4:
          m = 4096
          break
        case 0:
          if (X[1] == 0) return xn(h, g)
        default:
          throw new Error('Major Version: Expected 3 or 4 saw ' + v)
      }
      m !== 512 && ((k = h.slice(0, m)), tr(k, 28))
      var Z = h.slice(0, m)
      x(k, v)
      var te = k.read_shift(4, 'i')
      if (v === 3 && te !== 0) throw new Error('# Directory Sectors: Expected 0 saw ' + te)
      ;(k.l += 4),
        (I = k.read_shift(4, 'i')),
        (k.l += 4),
        k.chk('00100000', 'Mini Stream Cutoff Size: '),
        (U = k.read_shift(4, 'i')),
        (T = k.read_shift(4, 'i')),
        (D = k.read_shift(4, 'i')),
        (w = k.read_shift(4, 'i'))
      for (var K = -1, Q = 0; Q < 109 && ((K = k.read_shift(4, 'i')), !(K < 0)); ++Q) N[Q] = K
      var fe = p(h, m)
      _(D, w, fe, m, N)
      var we = R(fe, I, N, m)
      ;(we[I].name = '!Directory'),
        T > 0 && U !== re && (we[U].name = '!MiniFAT'),
        (we[N[0]].name = '!FAT'),
        (we.fat_addrs = N),
        (we.ssz = m)
      var Se = {},
        Ge = [],
        dt = [],
        vt = []
      y(I, we, fe, Ge, T, Se, dt, U), E(dt, vt, Ge), Ge.shift()
      var mt = { FileIndex: dt, FullPaths: vt }
      return g && g.raw && (mt.raw = { header: Z, sectors: fe }), mt
    }
    function d(h) {
      if (h[h.l] == 80 && h[h.l + 1] == 75) return [0, 0]
      h.chk(ge, 'Header Signature: '), (h.l += 16)
      var g = h.read_shift(2, 'u')
      return [h.read_shift(2, 'u'), g]
    }
    function x(h, g) {
      var v = 9
      switch (((h.l += 2), (v = h.read_shift(2)))) {
        case 9:
          if (g != 3) throw new Error('Sector Shift: Expected 9 saw ' + v)
          break
        case 12:
          if (g != 4) throw new Error('Sector Shift: Expected 12 saw ' + v)
          break
        default:
          throw new Error('Sector Shift: Expected 9 or 12 saw ' + v)
      }
      h.chk('0600', 'Mini Sector Shift: '), h.chk('000000000000', 'Reserved: ')
    }
    function p(h, g) {
      for (var v = Math.ceil(h.length / g) - 1, m = [], T = 1; T < v; ++T)
        m[T - 1] = h.slice(T * g, (T + 1) * g)
      return (m[v - 1] = h.slice(v * g)), m
    }
    function E(h, g, v) {
      for (var m = 0, T = 0, w = 0, I = 0, U = 0, D = v.length, N = [], k = []; m < D; ++m)
        (N[m] = k[m] = m), (g[m] = v[m])
      for (; U < k.length; ++U)
        (m = k[U]),
          (T = h[m].L),
          (w = h[m].R),
          (I = h[m].C),
          N[m] === m &&
            (T !== -1 && N[T] !== T && (N[m] = N[T]), w !== -1 && N[w] !== w && (N[m] = N[w])),
          I !== -1 && (N[I] = m),
          T !== -1 && m != N[m] && ((N[T] = N[m]), k.lastIndexOf(T) < U && k.push(T)),
          w !== -1 && m != N[m] && ((N[w] = N[m]), k.lastIndexOf(w) < U && k.push(w))
      for (m = 1; m < D; ++m)
        N[m] === m &&
          (w !== -1 && N[w] !== w ? (N[m] = N[w]) : T !== -1 && N[T] !== T && (N[m] = N[T]))
      for (m = 1; m < D; ++m)
        if (h[m].type !== 0) {
          if (((U = m), U != N[U]))
            do (U = N[U]), (g[m] = g[U] + '/' + g[m])
            while (U !== 0 && N[U] !== -1 && U != N[U])
          N[m] = -1
        }
      for (g[0] += '/', m = 1; m < D; ++m) h[m].type !== 2 && (g[m] += '/')
    }
    function u(h, g, v) {
      for (var m = h.start, T = h.size, w = [], I = m; v && T > 0 && I >= 0; )
        w.push(g.slice(I * z, I * z + z)), (T -= z), (I = Gr(v, I * 4))
      return w.length === 0 ? B(0) : be(w).slice(0, h.size)
    }
    function _(h, g, v, m, T) {
      var w = re
      if (h === re) {
        if (g !== 0) throw new Error('DIFAT chain shorter than expected')
      } else if (h !== -1) {
        var I = v[h],
          U = (m >>> 2) - 1
        if (!I) return
        for (var D = 0; D < U && (w = Gr(I, D * 4)) !== re; ++D) T.push(w)
        _(Gr(I, m - 4), g - 1, v, m, T)
      }
    }
    function O(h, g, v, m, T) {
      var w = [],
        I = []
      T || (T = [])
      var U = m - 1,
        D = 0,
        N = 0
      for (D = g; D >= 0; ) {
        ;(T[D] = !0), (w[w.length] = D), I.push(h[D])
        var k = v[Math.floor((D * 4) / m)]
        if (((N = (D * 4) & U), m < 4 + N))
          throw new Error('FAT boundary crossed: ' + D + ' 4 ' + m)
        if (!h[k]) break
        D = Gr(h[k], N)
      }
      return { nodes: w, data: In([I]) }
    }
    function R(h, g, v, m) {
      var T = h.length,
        w = [],
        I = [],
        U = [],
        D = [],
        N = m - 1,
        k = 0,
        X = 0,
        Z = 0,
        te = 0
      for (k = 0; k < T; ++k)
        if (((U = []), (Z = k + g), Z >= T && (Z -= T), !I[Z])) {
          D = []
          var K = []
          for (X = Z; X >= 0; ) {
            ;(K[X] = !0), (I[X] = !0), (U[U.length] = X), D.push(h[X])
            var Q = v[Math.floor((X * 4) / m)]
            if (((te = (X * 4) & N), m < 4 + te))
              throw new Error('FAT boundary crossed: ' + X + ' 4 ' + m)
            if (!h[Q] || ((X = Gr(h[Q], te)), K[X])) break
          }
          w[Z] = { nodes: U, data: In([D]) }
        }
      return w
    }
    function y(h, g, v, m, T, w, I, U) {
      for (
        var D = 0, N = m.length ? 2 : 0, k = g[h].data, X = 0, Z = 0, te;
        X < k.length;
        X += 128
      ) {
        var K = k.slice(X, X + 128)
        tr(K, 64), (Z = K.read_shift(2)), (te = V0(K, 0, Z - N)), m.push(te)
        var Q = {
            name: te,
            type: K.read_shift(1),
            color: K.read_shift(1),
            L: K.read_shift(4, 'i'),
            R: K.read_shift(4, 'i'),
            C: K.read_shift(4, 'i'),
            clsid: K.read_shift(16),
            state: K.read_shift(4, 'i'),
            start: 0,
            size: 0
          },
          fe = K.read_shift(2) + K.read_shift(2) + K.read_shift(2) + K.read_shift(2)
        fe !== 0 && (Q.ct = M(K, K.l - 8))
        var we = K.read_shift(2) + K.read_shift(2) + K.read_shift(2) + K.read_shift(2)
        we !== 0 && (Q.mt = M(K, K.l - 8)),
          (Q.start = K.read_shift(4, 'i')),
          (Q.size = K.read_shift(4, 'i')),
          Q.size < 0 && Q.start < 0 && ((Q.size = Q.type = 0), (Q.start = re), (Q.name = '')),
          Q.type === 5
            ? ((D = Q.start), T > 0 && D !== re && (g[D].name = '!StreamData'))
            : Q.size >= 4096
            ? ((Q.storage = 'fat'),
              g[Q.start] === void 0 && (g[Q.start] = O(v, Q.start, g.fat_addrs, g.ssz)),
              (g[Q.start].name = Q.name),
              (Q.content = g[Q.start].data.slice(0, Q.size)))
            : ((Q.storage = 'minifat'),
              Q.size < 0
                ? (Q.size = 0)
                : D !== re &&
                  Q.start !== re &&
                  g[D] &&
                  (Q.content = u(Q, g[D].data, (g[U] || {}).data))),
          Q.content && tr(Q.content, 0),
          (w[te] = Q),
          I.push(Q)
      }
    }
    function M(h, g) {
      return new Date(((ar(h, g + 4) / 1e7) * Math.pow(2, 32) + ar(h, g) / 1e7 - 11644473600) * 1e3)
    }
    function Y(h, g) {
      return l(), c(o.readFileSync(h), g)
    }
    function ee(h, g) {
      var v = g && g.type
      switch ((v || (ue && Buffer.isBuffer(h) && (v = 'buffer')), v || 'base64')) {
        case 'file':
          return Y(h, g)
        case 'base64':
          return c(pr(Or(h)), g)
        case 'binary':
          return c(pr(h), g)
      }
      return c(h, g)
    }
    function C(h, g) {
      var v = g || {},
        m = v.root || 'Root Entry'
      if (
        (h.FullPaths || (h.FullPaths = []),
        h.FileIndex || (h.FileIndex = []),
        h.FullPaths.length !== h.FileIndex.length)
      )
        throw new Error('inconsistent CFB structure')
      h.FullPaths.length === 0 &&
        ((h.FullPaths[0] = m + '/'), (h.FileIndex[0] = { name: m, type: 5 })),
        v.CLSID && (h.FileIndex[0].clsid = v.CLSID),
        b(h)
    }
    function b(h) {
      var g = 'Sh33tJ5'
      if (!_e.find(h, '/' + g)) {
        var v = B(4)
        ;(v[0] = 55),
          (v[1] = v[3] = 50),
          (v[2] = 54),
          h.FileIndex.push({ name: g, type: 2, content: v, size: 4, L: 69, R: 69, C: 69 }),
          h.FullPaths.push(h.FullPaths[0] + g),
          L(h)
      }
    }
    function L(h, g) {
      C(h)
      for (var v = !1, m = !1, T = h.FullPaths.length - 1; T >= 0; --T) {
        var w = h.FileIndex[T]
        switch (w.type) {
          case 0:
            m ? (v = !0) : (h.FileIndex.pop(), h.FullPaths.pop())
            break
          case 1:
          case 2:
          case 5:
            ;(m = !0),
              isNaN(w.R * w.L * w.C) && (v = !0),
              w.R > -1 && w.L > -1 && w.R == w.L && (v = !0)
            break
          default:
            v = !0
            break
        }
      }
      if (!(!v && !g)) {
        var I = new Date(1987, 1, 19),
          U = 0,
          D = Object.create ? Object.create(null) : {},
          N = []
        for (T = 0; T < h.FullPaths.length; ++T)
          (D[h.FullPaths[T]] = !0),
            h.FileIndex[T].type !== 0 && N.push([h.FullPaths[T], h.FileIndex[T]])
        for (T = 0; T < N.length; ++T) {
          var k = n(N[T][0])
          ;(m = D[k]),
            m ||
              (N.push([
                k,
                { name: a(k).replace('/', ''), type: 1, clsid: Me, ct: I, mt: I, content: null }
              ]),
              (D[k] = !0))
        }
        for (
          N.sort(function (te, K) {
            return r(te[0], K[0])
          }),
            h.FullPaths = [],
            h.FileIndex = [],
            T = 0;
          T < N.length;
          ++T
        )
          (h.FullPaths[T] = N[T][0]), (h.FileIndex[T] = N[T][1])
        for (T = 0; T < N.length; ++T) {
          var X = h.FileIndex[T],
            Z = h.FullPaths[T]
          if (
            ((X.name = a(Z).replace('/', '')),
            (X.L = X.R = X.C = -(X.color = 1)),
            (X.size = X.content ? X.content.length : 0),
            (X.start = 0),
            (X.clsid = X.clsid || Me),
            T === 0)
          )
            (X.C = N.length > 1 ? 1 : -1), (X.size = 0), (X.type = 5)
          else if (Z.slice(-1) == '/') {
            for (U = T + 1; U < N.length && n(h.FullPaths[U]) != Z; ++U);
            for (
              X.C = U >= N.length ? -1 : U, U = T + 1;
              U < N.length && n(h.FullPaths[U]) != n(Z);
              ++U
            );
            ;(X.R = U >= N.length ? -1 : U), (X.type = 1)
          } else n(h.FullPaths[T + 1] || '') == n(Z) && (X.R = T + 1), (X.type = 2)
        }
      }
    }
    function V(h, g) {
      var v = g || {}
      if (v.fileType == 'mad') return Ki(h, v)
      switch ((L(h), v.fileType)) {
        case 'zip':
          return bi(h, v)
      }
      var m = (function (te) {
          for (var K = 0, Q = 0, fe = 0; fe < te.FileIndex.length; ++fe) {
            var we = te.FileIndex[fe]
            if (we.content) {
              var Se = we.content.length
              Se > 0 && (Se < 4096 ? (K += (Se + 63) >> 6) : (Q += (Se + 511) >> 9))
            }
          }
          for (
            var Ge = (te.FullPaths.length + 3) >> 2,
              dt = (K + 7) >> 3,
              vt = (K + 127) >> 7,
              mt = dt + Q + Ge + vt,
              Wr = (mt + 127) >> 7,
              w0 = Wr <= 109 ? 0 : Math.ceil((Wr - 109) / 127);
            (mt + Wr + w0 + 127) >> 7 > Wr;

          )
            w0 = ++Wr <= 109 ? 0 : Math.ceil((Wr - 109) / 127)
          var Sr = [1, w0, Wr, vt, Ge, Q, K, 0]
          return (
            (te.FileIndex[0].size = K << 6),
            (Sr[7] =
              (te.FileIndex[0].start = Sr[0] + Sr[1] + Sr[2] + Sr[3] + Sr[4] + Sr[5]) +
              ((Sr[6] + 7) >> 3)),
            Sr
          )
        })(h),
        T = B(m[7] << 9),
        w = 0,
        I = 0
      {
        for (w = 0; w < 8; ++w) T.write_shift(1, le[w])
        for (w = 0; w < 8; ++w) T.write_shift(2, 0)
        for (
          T.write_shift(2, 62),
            T.write_shift(2, 3),
            T.write_shift(2, 65534),
            T.write_shift(2, 9),
            T.write_shift(2, 6),
            w = 0;
          w < 3;
          ++w
        )
          T.write_shift(2, 0)
        for (
          T.write_shift(4, 0),
            T.write_shift(4, m[2]),
            T.write_shift(4, m[0] + m[1] + m[2] + m[3] - 1),
            T.write_shift(4, 0),
            T.write_shift(4, 4096),
            T.write_shift(4, m[3] ? m[0] + m[1] + m[2] - 1 : re),
            T.write_shift(4, m[3]),
            T.write_shift(-4, m[1] ? m[0] - 1 : re),
            T.write_shift(4, m[1]),
            w = 0;
          w < 109;
          ++w
        )
          T.write_shift(-4, w < m[2] ? m[1] + w : -1)
      }
      if (m[1])
        for (I = 0; I < m[1]; ++I) {
          for (; w < 236 + I * 127; ++w) T.write_shift(-4, w < m[2] ? m[1] + w : -1)
          T.write_shift(-4, I === m[1] - 1 ? re : I + 1)
        }
      var U = function (te) {
        for (I += te; w < I - 1; ++w) T.write_shift(-4, w + 1)
        te && (++w, T.write_shift(-4, re))
      }
      for (I = w = 0, I += m[1]; w < I; ++w) T.write_shift(-4, Ce.DIFSECT)
      for (I += m[2]; w < I; ++w) T.write_shift(-4, Ce.FATSECT)
      U(m[3]), U(m[4])
      for (var D = 0, N = 0, k = h.FileIndex[0]; D < h.FileIndex.length; ++D)
        (k = h.FileIndex[D]),
          k.content && ((N = k.content.length), !(N < 4096) && ((k.start = I), U((N + 511) >> 9)))
      for (U((m[6] + 7) >> 3); T.l & 511; ) T.write_shift(-4, Ce.ENDOFCHAIN)
      for (I = w = 0, D = 0; D < h.FileIndex.length; ++D)
        (k = h.FileIndex[D]),
          k.content &&
            ((N = k.content.length), !(!N || N >= 4096) && ((k.start = I), U((N + 63) >> 6)))
      for (; T.l & 511; ) T.write_shift(-4, Ce.ENDOFCHAIN)
      for (w = 0; w < m[4] << 2; ++w) {
        var X = h.FullPaths[w]
        if (!X || X.length === 0) {
          for (D = 0; D < 17; ++D) T.write_shift(4, 0)
          for (D = 0; D < 3; ++D) T.write_shift(4, -1)
          for (D = 0; D < 12; ++D) T.write_shift(4, 0)
          continue
        }
        ;(k = h.FileIndex[w]), w === 0 && (k.start = k.size ? k.start - 1 : re)
        var Z = (w === 0 && v.root) || k.name
        if (
          ((N = 2 * (Z.length + 1)),
          T.write_shift(64, Z, 'utf16le'),
          T.write_shift(2, N),
          T.write_shift(1, k.type),
          T.write_shift(1, k.color),
          T.write_shift(-4, k.L),
          T.write_shift(-4, k.R),
          T.write_shift(-4, k.C),
          k.clsid)
        )
          T.write_shift(16, k.clsid, 'hex')
        else for (D = 0; D < 4; ++D) T.write_shift(4, 0)
        T.write_shift(4, k.state || 0),
          T.write_shift(4, 0),
          T.write_shift(4, 0),
          T.write_shift(4, 0),
          T.write_shift(4, 0),
          T.write_shift(4, k.start),
          T.write_shift(4, k.size),
          T.write_shift(4, 0)
      }
      for (w = 1; w < h.FileIndex.length; ++w)
        if (((k = h.FileIndex[w]), k.size >= 4096))
          if (((T.l = (k.start + 1) << 9), ue && Buffer.isBuffer(k.content)))
            k.content.copy(T, T.l, 0, k.size), (T.l += (k.size + 511) & -512)
          else {
            for (D = 0; D < k.size; ++D) T.write_shift(1, k.content[D])
            for (; D & 511; ++D) T.write_shift(1, 0)
          }
      for (w = 1; w < h.FileIndex.length; ++w)
        if (((k = h.FileIndex[w]), k.size > 0 && k.size < 4096))
          if (ue && Buffer.isBuffer(k.content))
            k.content.copy(T, T.l, 0, k.size), (T.l += (k.size + 63) & -64)
          else {
            for (D = 0; D < k.size; ++D) T.write_shift(1, k.content[D])
            for (; D & 63; ++D) T.write_shift(1, 0)
          }
      if (ue) T.l = T.length
      else for (; T.l < T.length; ) T.write_shift(1, 0)
      return T
    }
    function G(h, g) {
      var v = h.FullPaths.map(function (D) {
          return D.toUpperCase()
        }),
        m = v.map(function (D) {
          var N = D.split('/')
          return N[N.length - (D.slice(-1) == '/' ? 2 : 1)]
        }),
        T = !1
      g.charCodeAt(0) === 47 ? ((T = !0), (g = v[0].slice(0, -1) + g)) : (T = g.indexOf('/') !== -1)
      var w = g.toUpperCase(),
        I = T === !0 ? v.indexOf(w) : m.indexOf(w)
      if (I !== -1) return h.FileIndex[I]
      var U = !w.match(Gt)
      for (w = w.replace(wt, ''), U && (w = w.replace(Gt, '!')), I = 0; I < v.length; ++I)
        if (
          (U ? v[I].replace(Gt, '!') : v[I]).replace(wt, '') == w ||
          (U ? m[I].replace(Gt, '!') : m[I]).replace(wt, '') == w
        )
          return h.FileIndex[I]
      return null
    }
    var z = 64,
      re = -2,
      ge = 'd0cf11e0a1b11ae1',
      le = [208, 207, 17, 224, 161, 177, 26, 225],
      Me = '00000000000000000000000000000000',
      Ce = {
        MAXREGSECT: -6,
        DIFSECT: -4,
        FATSECT: -3,
        ENDOFCHAIN: re,
        FREESECT: -1,
        HEADER_SIGNATURE: ge,
        HEADER_MINOR_VERSION: '3e00',
        MAXREGSID: -6,
        NOSTREAM: -1,
        HEADER_CLSID: Me,
        EntryTypes: ['unknown', 'storage', 'stream', 'lockbytes', 'property', 'root']
      }
    function hr(h, g, v) {
      l()
      var m = V(h, v)
      o.writeFileSync(g, m)
    }
    function Ne(h) {
      for (var g = new Array(h.length), v = 0; v < h.length; ++v) g[v] = String.fromCharCode(h[v])
      return g.join('')
    }
    function sr(h, g) {
      var v = V(h, g)
      switch ((g && g.type) || 'buffer') {
        case 'file':
          return l(), o.writeFileSync(g.filename, v), v
        case 'binary':
          return typeof v == 'string' ? v : Ne(v)
        case 'base64':
          return Dt(typeof v == 'string' ? v : Ne(v))
        case 'buffer':
          if (ue) return Buffer.isBuffer(v) ? v : Rr(v)
        case 'array':
          return typeof v == 'string' ? pr(v) : v
      }
      return v
    }
    var er
    function S(h) {
      try {
        var g = h.InflateRaw,
          v = new g()
        if ((v._processChunk(new Uint8Array([3, 0]), v._finishFlushFlag), v.bytesRead)) er = h
        else throw new Error('zlib does not expose bytesRead')
      } catch (m) {
        console.error('cannot use native zlib: ' + (m.message || m))
      }
    }
    function P(h, g) {
      if (!er) return hn(h, g)
      var v = er.InflateRaw,
        m = new v(),
        T = m._processChunk(h.slice(h.l), m._finishFlushFlag)
      return (h.l += m.bytesRead), T
    }
    function F(h) {
      return er ? er.deflateRawSync(h) : an(h)
    }
    var A = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
      H = [
        3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115,
        131, 163, 195, 227, 258
      ],
      ie = [
        1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537,
        2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577
      ]
    function se(h) {
      var g = (((h << 1) | (h << 11)) & 139536) | (((h << 5) | (h << 15)) & 558144)
      return ((g >> 16) | (g >> 8) | g) & 255
    }
    for (
      var ae = typeof Uint8Array < 'u', q = ae ? new Uint8Array(256) : [], Te = 0;
      Te < 256;
      ++Te
    )
      q[Te] = se(Te)
    function ce(h, g) {
      var v = q[h & 255]
      return g <= 8
        ? v >>> (8 - g)
        : ((v = (v << 8) | q[(h >> 8) & 255]),
          g <= 16 ? v >>> (16 - g) : ((v = (v << 8) | q[(h >> 16) & 255]), v >>> (24 - g)))
    }
    function je(h, g) {
      var v = g & 7,
        m = g >>> 3
      return ((h[m] | (v <= 6 ? 0 : h[m + 1] << 8)) >>> v) & 3
    }
    function xe(h, g) {
      var v = g & 7,
        m = g >>> 3
      return ((h[m] | (v <= 5 ? 0 : h[m + 1] << 8)) >>> v) & 7
    }
    function Er(h, g) {
      var v = g & 7,
        m = g >>> 3
      return ((h[m] | (v <= 4 ? 0 : h[m + 1] << 8)) >>> v) & 15
    }
    function Ae(h, g) {
      var v = g & 7,
        m = g >>> 3
      return ((h[m] | (v <= 3 ? 0 : h[m + 1] << 8)) >>> v) & 31
    }
    function ne(h, g) {
      var v = g & 7,
        m = g >>> 3
      return ((h[m] | (v <= 1 ? 0 : h[m + 1] << 8)) >>> v) & 127
    }
    function fr(h, g, v) {
      var m = g & 7,
        T = g >>> 3,
        w = (1 << v) - 1,
        I = h[T] >>> m
      return (
        v < 8 - m ||
          ((I |= h[T + 1] << (8 - m)), v < 16 - m) ||
          ((I |= h[T + 2] << (16 - m)), v < 24 - m) ||
          (I |= h[T + 3] << (24 - m)),
        I & w
      )
    }
    function wr(h, g, v) {
      var m = g & 7,
        T = g >>> 3
      return (
        m <= 5
          ? (h[T] |= (v & 7) << m)
          : ((h[T] |= (v << m) & 255), (h[T + 1] = (v & 7) >> (8 - m))),
        g + 3
      )
    }
    function Ur(h, g, v) {
      var m = g & 7,
        T = g >>> 3
      return (v = (v & 1) << m), (h[T] |= v), g + 1
    }
    function Qr(h, g, v) {
      var m = g & 7,
        T = g >>> 3
      return (v <<= m), (h[T] |= v & 255), (v >>>= 8), (h[T + 1] = v), g + 8
    }
    function nn(h, g, v) {
      var m = g & 7,
        T = g >>> 3
      return (
        (v <<= m), (h[T] |= v & 255), (v >>>= 8), (h[T + 1] = v & 255), (h[T + 2] = v >>> 8), g + 16
      )
    }
    function g0(h, g) {
      var v = h.length,
        m = 2 * v > g ? 2 * v : g + 5,
        T = 0
      if (v >= g) return h
      if (ue) {
        var w = vn(m)
        if (h.copy) h.copy(w)
        else for (; T < h.length; ++T) w[T] = h[T]
        return w
      } else if (ae) {
        var I = new Uint8Array(m)
        if (I.set) I.set(h)
        else for (; T < v; ++T) I[T] = h[T]
        return I
      }
      return (h.length = m), h
    }
    function mr(h) {
      for (var g = new Array(h), v = 0; v < h; ++v) g[v] = 0
      return g
    }
    function Wt(h, g, v) {
      var m = 1,
        T = 0,
        w = 0,
        I = 0,
        U = 0,
        D = h.length,
        N = ae ? new Uint16Array(32) : mr(32)
      for (w = 0; w < 32; ++w) N[w] = 0
      for (w = D; w < v; ++w) h[w] = 0
      D = h.length
      var k = ae ? new Uint16Array(D) : mr(D)
      for (w = 0; w < D; ++w) N[(T = h[w])]++, m < T && (m = T), (k[w] = 0)
      for (N[0] = 0, w = 1; w <= m; ++w) N[w + 16] = U = (U + N[w - 1]) << 1
      for (w = 0; w < D; ++w) (U = h[w]), U != 0 && (k[w] = N[U + 16]++)
      var X = 0
      for (w = 0; w < D; ++w)
        if (((X = h[w]), X != 0))
          for (U = ce(k[w], m) >> (m - X), I = (1 << (m + 4 - X)) - 1; I >= 0; --I)
            g[U | (I << X)] = (X & 15) | (w << 4)
      return m
    }
    var _0 = ae ? new Uint16Array(512) : mr(512),
      T0 = ae ? new Uint16Array(32) : mr(32)
    if (!ae) {
      for (var br = 0; br < 512; ++br) _0[br] = 0
      for (br = 0; br < 32; ++br) T0[br] = 0
    }
    ;(function () {
      for (var h = [], g = 0; g < 32; g++) h.push(5)
      Wt(h, T0, 32)
      var v = []
      for (g = 0; g <= 143; g++) v.push(8)
      for (; g <= 255; g++) v.push(9)
      for (; g <= 279; g++) v.push(7)
      for (; g <= 287; g++) v.push(8)
      Wt(v, _0, 288)
    })()
    var Li = (function () {
      for (var g = ae ? new Uint8Array(32768) : [], v = 0, m = 0; v < ie.length - 1; ++v)
        for (; m < ie[v + 1]; ++m) g[m] = v
      for (; m < 32768; ++m) g[m] = 29
      var T = ae ? new Uint8Array(259) : []
      for (v = 0, m = 0; v < H.length - 1; ++v) for (; m < H[v + 1]; ++m) T[m] = v
      function w(U, D) {
        for (var N = 0; N < U.length; ) {
          var k = Math.min(65535, U.length - N),
            X = N + k == U.length
          for (D.write_shift(1, +X), D.write_shift(2, k), D.write_shift(2, ~k & 65535); k-- > 0; )
            D[D.l++] = U[N++]
        }
        return D.l
      }
      function I(U, D) {
        for (var N = 0, k = 0, X = ae ? new Uint16Array(32768) : []; k < U.length; ) {
          var Z = Math.min(65535, U.length - k)
          if (Z < 10) {
            for (
              N = wr(D, N, +(k + Z == U.length)),
                N & 7 && (N += 8 - (N & 7)),
                D.l = (N / 8) | 0,
                D.write_shift(2, Z),
                D.write_shift(2, ~Z & 65535);
              Z-- > 0;

            )
              D[D.l++] = U[k++]
            N = D.l * 8
            continue
          }
          N = wr(D, N, +(k + Z == U.length) + 2)
          for (var te = 0; Z-- > 0; ) {
            var K = U[k]
            te = ((te << 5) ^ K) & 32767
            var Q = -1,
              fe = 0
            if ((Q = X[te]) && ((Q |= k & -32768), Q > k && (Q -= 32768), Q < k))
              for (; U[Q + fe] == U[k + fe] && fe < 250; ) ++fe
            if (fe > 2) {
              ;(K = T[fe]),
                K <= 22
                  ? (N = Qr(D, N, q[K + 1] >> 1) - 1)
                  : (Qr(D, N, 3), (N += 5), Qr(D, N, q[K - 23] >> 5), (N += 3))
              var we = K < 8 ? 0 : (K - 4) >> 2
              we > 0 && (nn(D, N, fe - H[K]), (N += we)),
                (K = g[k - Q]),
                (N = Qr(D, N, q[K] >> 3)),
                (N -= 3)
              var Se = K < 4 ? 0 : (K - 2) >> 1
              Se > 0 && (nn(D, N, k - Q - ie[K]), (N += Se))
              for (var Ge = 0; Ge < fe; ++Ge)
                (X[te] = k & 32767), (te = ((te << 5) ^ U[k]) & 32767), ++k
              Z -= fe - 1
            } else
              K <= 143 ? (K = K + 48) : (N = Ur(D, N, 1)),
                (N = Qr(D, N, q[K])),
                (X[te] = k & 32767),
                ++k
          }
          N = Qr(D, N, 0) - 1
        }
        return (D.l = ((N + 7) / 8) | 0), D.l
      }
      return function (D, N) {
        return D.length < 8 ? w(D, N) : I(D, N)
      }
    })()
    function an(h) {
      var g = B(50 + Math.floor(h.length * 1.1)),
        v = Li(h, g)
      return g.slice(0, v)
    }
    var sn = ae ? new Uint16Array(32768) : mr(32768),
      fn = ae ? new Uint16Array(32768) : mr(32768),
      ln = ae ? new Uint16Array(128) : mr(128),
      on = 1,
      cn = 1
    function Mi(h, g) {
      var v = Ae(h, g) + 257
      g += 5
      var m = Ae(h, g) + 1
      g += 5
      var T = Er(h, g) + 4
      g += 4
      for (
        var w = 0,
          I = ae ? new Uint8Array(19) : mr(19),
          U = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          D = 1,
          N = ae ? new Uint8Array(8) : mr(8),
          k = ae ? new Uint8Array(8) : mr(8),
          X = I.length,
          Z = 0;
        Z < T;
        ++Z
      )
        (I[A[Z]] = w = xe(h, g)), D < w && (D = w), N[w]++, (g += 3)
      var te = 0
      for (N[0] = 0, Z = 1; Z <= D; ++Z) k[Z] = te = (te + N[Z - 1]) << 1
      for (Z = 0; Z < X; ++Z) (te = I[Z]) != 0 && (U[Z] = k[te]++)
      var K = 0
      for (Z = 0; Z < X; ++Z)
        if (((K = I[Z]), K != 0)) {
          te = q[U[Z]] >> (8 - K)
          for (var Q = (1 << (7 - K)) - 1; Q >= 0; --Q) ln[te | (Q << K)] = (K & 7) | (Z << 3)
        }
      var fe = []
      for (D = 1; fe.length < v + m; )
        switch (((te = ln[ne(h, g)]), (g += te & 7), (te >>>= 3))) {
          case 16:
            for (w = 3 + je(h, g), g += 2, te = fe[fe.length - 1]; w-- > 0; ) fe.push(te)
            break
          case 17:
            for (w = 3 + xe(h, g), g += 3; w-- > 0; ) fe.push(0)
            break
          case 18:
            for (w = 11 + ne(h, g), g += 7; w-- > 0; ) fe.push(0)
            break
          default:
            fe.push(te), D < te && (D = te)
            break
        }
      var we = fe.slice(0, v),
        Se = fe.slice(v)
      for (Z = v; Z < 286; ++Z) we[Z] = 0
      for (Z = m; Z < 30; ++Z) Se[Z] = 0
      return (on = Wt(we, sn, 286)), (cn = Wt(Se, fn, 30)), g
    }
    function Bi(h, g) {
      if (h[0] == 3 && !(h[1] & 3)) return [zr(g), 2]
      for (
        var v = 0, m = 0, T = vn(g || 1 << 18), w = 0, I = T.length >>> 0, U = 0, D = 0;
        !(m & 1);

      ) {
        if (((m = xe(h, v)), (v += 3), m >>> 1))
          m >> 1 == 1 ? ((U = 9), (D = 5)) : ((v = Mi(h, v)), (U = on), (D = cn))
        else {
          v & 7 && (v += 8 - (v & 7))
          var N = h[v >>> 3] | (h[(v >>> 3) + 1] << 8)
          if (((v += 32), N > 0))
            for (!g && I < w + N && ((T = g0(T, w + N)), (I = T.length)); N-- > 0; )
              (T[w++] = h[v >>> 3]), (v += 8)
          continue
        }
        for (;;) {
          !g && I < w + 32767 && ((T = g0(T, w + 32767)), (I = T.length))
          var k = fr(h, v, U),
            X = m >>> 1 == 1 ? _0[k] : sn[k]
          if (((v += X & 15), (X >>>= 4), !((X >>> 8) & 255))) T[w++] = X
          else {
            if (X == 256) break
            X -= 257
            var Z = X < 8 ? 0 : (X - 4) >> 2
            Z > 5 && (Z = 0)
            var te = w + H[X]
            Z > 0 && ((te += fr(h, v, Z)), (v += Z)),
              (k = fr(h, v, D)),
              (X = m >>> 1 == 1 ? T0[k] : fn[k]),
              (v += X & 15),
              (X >>>= 4)
            var K = X < 4 ? 0 : (X - 2) >> 1,
              Q = ie[X]
            for (
              K > 0 && ((Q += fr(h, v, K)), (v += K)),
                !g && I < te && ((T = g0(T, te + 100)), (I = T.length));
              w < te;

            )
              (T[w] = T[w - Q]), ++w
          }
        }
      }
      return g ? [T, (v + 7) >>> 3] : [T.slice(0, w), (v + 7) >>> 3]
    }
    function hn(h, g) {
      var v = h.slice(h.l || 0),
        m = Bi(v, g)
      return (h.l += m[1]), m[0]
    }
    function un(h, g) {
      if (h) typeof console < 'u' && console.error(g)
      else throw new Error(g)
    }
    function xn(h, g) {
      var v = h
      tr(v, 0)
      var m = [],
        T = [],
        w = { FileIndex: m, FullPaths: T }
      C(w, { root: g.root })
      for (
        var I = v.length - 4;
        (v[I] != 80 || v[I + 1] != 75 || v[I + 2] != 5 || v[I + 3] != 6) && I >= 0;

      )
        --I
      ;(v.l = I + 4), (v.l += 4)
      var U = v.read_shift(2)
      v.l += 6
      var D = v.read_shift(4)
      for (v.l = D, I = 0; I < U; ++I) {
        v.l += 20
        var N = v.read_shift(4),
          k = v.read_shift(4),
          X = v.read_shift(2),
          Z = v.read_shift(2),
          te = v.read_shift(2)
        v.l += 8
        var K = v.read_shift(4),
          Q = f(v.slice(v.l + X, v.l + X + Z))
        v.l += X + Z + te
        var fe = v.l
        ;(v.l = K + 4), Ui(v, N, k, w, Q), (v.l = fe)
      }
      return w
    }
    function Ui(h, g, v, m, T) {
      h.l += 2
      var w = h.read_shift(2),
        I = h.read_shift(2),
        U = s(h)
      if (w & 8257) throw new Error('Unsupported ZIP encryption')
      for (
        var D = h.read_shift(4),
          N = h.read_shift(4),
          k = h.read_shift(4),
          X = h.read_shift(2),
          Z = h.read_shift(2),
          te = '',
          K = 0;
        K < X;
        ++K
      )
        te += String.fromCharCode(h[h.l++])
      if (Z) {
        var Q = f(h.slice(h.l, h.l + Z))
        ;(Q[21589] || {}).mt && (U = Q[21589].mt), ((T || {})[21589] || {}).mt && (U = T[21589].mt)
      }
      h.l += Z
      var fe = h.slice(h.l, h.l + N)
      switch (I) {
        case 8:
          fe = P(h, k)
          break
        case 0:
          break
        default:
          throw new Error('Unsupported ZIP Compression method ' + I)
      }
      var we = !1
      w & 8 &&
        ((D = h.read_shift(4)),
        D == 134695760 && ((D = h.read_shift(4)), (we = !0)),
        (N = h.read_shift(4)),
        (k = h.read_shift(4))),
        N != g && un(we, 'Bad compressed size: ' + g + ' != ' + N),
        k != v && un(we, 'Bad uncompressed size: ' + v + ' != ' + k),
        E0(m, te, fe, { unsafe: !0, mt: U })
    }
    function bi(h, g) {
      var v = g || {},
        m = [],
        T = [],
        w = B(1),
        I = v.compression ? 8 : 0,
        U = 0,
        D = 0,
        N = 0,
        k = 0,
        X = 0,
        Z = h.FullPaths[0],
        te = Z,
        K = h.FileIndex[0],
        Q = [],
        fe = 0
      for (D = 1; D < h.FullPaths.length; ++D)
        if (
          ((te = h.FullPaths[D].slice(Z.length)),
          (K = h.FileIndex[D]),
          !(!K.size || !K.content || te == 'Sh33tJ5'))
        ) {
          var we = k,
            Se = B(te.length)
          for (N = 0; N < te.length; ++N) Se.write_shift(1, te.charCodeAt(N) & 127)
          ;(Se = Se.slice(0, Se.l)), (Q[X] = Hs.buf(K.content, 0))
          var Ge = K.content
          I == 8 && (Ge = F(Ge)),
            (w = B(30)),
            w.write_shift(4, 67324752),
            w.write_shift(2, 20),
            w.write_shift(2, U),
            w.write_shift(2, I),
            K.mt ? i(w, K.mt) : w.write_shift(4, 0),
            w.write_shift(-4, Q[X]),
            w.write_shift(4, Ge.length),
            w.write_shift(4, K.content.length),
            w.write_shift(2, Se.length),
            w.write_shift(2, 0),
            (k += w.length),
            m.push(w),
            (k += Se.length),
            m.push(Se),
            (k += Ge.length),
            m.push(Ge),
            (w = B(46)),
            w.write_shift(4, 33639248),
            w.write_shift(2, 0),
            w.write_shift(2, 20),
            w.write_shift(2, U),
            w.write_shift(2, I),
            w.write_shift(4, 0),
            w.write_shift(-4, Q[X]),
            w.write_shift(4, Ge.length),
            w.write_shift(4, K.content.length),
            w.write_shift(2, Se.length),
            w.write_shift(2, 0),
            w.write_shift(2, 0),
            w.write_shift(2, 0),
            w.write_shift(2, 0),
            w.write_shift(4, 0),
            w.write_shift(4, we),
            (fe += w.l),
            T.push(w),
            (fe += Se.length),
            T.push(Se),
            ++X
        }
      return (
        (w = B(22)),
        w.write_shift(4, 101010256),
        w.write_shift(2, 0),
        w.write_shift(2, 0),
        w.write_shift(2, X),
        w.write_shift(2, X),
        w.write_shift(4, fe),
        w.write_shift(4, k),
        w.write_shift(2, 0),
        be([be(m), be(T), w])
      )
    }
    var Ht = {
      htm: 'text/html',
      xml: 'text/xml',
      gif: 'image/gif',
      jpg: 'image/jpeg',
      png: 'image/png',
      mso: 'application/x-mso',
      thmx: 'application/vnd.ms-officetheme',
      sh33tj5: 'application/octet-stream'
    }
    function Wi(h, g) {
      if (h.ctype) return h.ctype
      var v = h.name || '',
        m = v.match(/\.([^\.]+)$/)
      return (m && Ht[m[1]]) || (g && ((m = (v = g).match(/[\.\\]([^\.\\])+$/)), m && Ht[m[1]]))
        ? Ht[m[1]]
        : 'application/octet-stream'
    }
    function Hi(h) {
      for (var g = Dt(h), v = [], m = 0; m < g.length; m += 76) v.push(g.slice(m, m + 76))
      return (
        v.join(`\r
`) +
        `\r
`
      )
    }
    function Vi(h) {
      var g = h.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g, function (N) {
        var k = N.charCodeAt(0).toString(16).toUpperCase()
        return '=' + (k.length == 1 ? '0' + k : k)
      })
      ;(g = g.replace(/ $/gm, '=20').replace(/\t$/gm, '=09')),
        g.charAt(0) ==
          `
` && (g = '=0D' + g.slice(1)),
        (g = g
          .replace(/\r(?!\n)/gm, '=0D')
          .replace(
            /\n\n/gm,
            `
=0A`
          )
          .replace(/([^\r\n])\n/gm, '$1=0A'))
      for (
        var v = [],
          m = g.split(`\r
`),
          T = 0;
        T < m.length;
        ++T
      ) {
        var w = m[T]
        if (w.length == 0) {
          v.push('')
          continue
        }
        for (var I = 0; I < w.length; ) {
          var U = 76,
            D = w.slice(I, I + U)
          D.charAt(U - 1) == '='
            ? U--
            : D.charAt(U - 2) == '='
            ? (U -= 2)
            : D.charAt(U - 3) == '=' && (U -= 3),
            (D = w.slice(I, I + U)),
            (I += U),
            I < w.length && (D += '='),
            v.push(D)
        }
      }
      return v.join(`\r
`)
    }
    function Gi(h) {
      for (var g = [], v = 0; v < h.length; ++v) {
        for (var m = h[v]; v <= h.length && m.charAt(m.length - 1) == '='; )
          m = m.slice(0, m.length - 1) + h[++v]
        g.push(m)
      }
      for (var T = 0; T < g.length; ++T)
        g[T] = g[T].replace(/[=][0-9A-Fa-f]{2}/g, function (w) {
          return String.fromCharCode(parseInt(w.slice(1), 16))
        })
      return pr(
        g.join(`\r
`)
      )
    }
    function Xi(h, g, v) {
      for (var m = '', T = '', w = '', I, U = 0; U < 10; ++U) {
        var D = g[U]
        if (!D || D.match(/^\s*$/)) break
        var N = D.match(/^(.*?):\s*([^\s].*)$/)
        if (N)
          switch (N[1].toLowerCase()) {
            case 'content-location':
              m = N[2].trim()
              break
            case 'content-type':
              w = N[2].trim()
              break
            case 'content-transfer-encoding':
              T = N[2].trim()
              break
          }
      }
      switch ((++U, T.toLowerCase())) {
        case 'base64':
          I = pr(Or(g.slice(U).join('')))
          break
        case 'quoted-printable':
          I = Gi(g.slice(U))
          break
        default:
          throw new Error('Unsupported Content-Transfer-Encoding ' + T)
      }
      var k = E0(h, m.slice(v.length), I, { unsafe: !0 })
      w && (k.ctype = w)
    }
    function zi(h, g) {
      if (Ne(h.slice(0, 13)).toLowerCase() != 'mime-version:')
        throw new Error('Unsupported MAD header')
      var v = (g && g.root) || '',
        m = (ue && Buffer.isBuffer(h) ? h.toString('binary') : Ne(h)).split(`\r
`),
        T = 0,
        w = ''
      for (T = 0; T < m.length; ++T)
        if (
          ((w = m[T]),
          !!/^Content-Location:/i.test(w) &&
            ((w = w.slice(w.indexOf('file'))),
            v || (v = w.slice(0, w.lastIndexOf('/') + 1)),
            w.slice(0, v.length) != v))
        )
          for (
            ;
            v.length > 0 &&
            ((v = v.slice(0, v.length - 1)),
            (v = v.slice(0, v.lastIndexOf('/') + 1)),
            w.slice(0, v.length) != v);

          );
      var I = (m[1] || '').match(/boundary="(.*?)"/)
      if (!I) throw new Error('MAD cannot find boundary')
      var U = '--' + (I[1] || ''),
        D = [],
        N = [],
        k = { FileIndex: D, FullPaths: N }
      C(k)
      var X,
        Z = 0
      for (T = 0; T < m.length; ++T) {
        var te = m[T]
        ;(te !== U && te !== U + '--') || (Z++ && Xi(k, m.slice(X, T), v), (X = T))
      }
      return k
    }
    function Ki(h, g) {
      var v = g || {},
        m = v.boundary || 'SheetJS'
      m = '------=' + m
      for (
        var T = [
            'MIME-Version: 1.0',
            'Content-Type: multipart/related; boundary="' + m.slice(2) + '"',
            '',
            '',
            ''
          ],
          w = h.FullPaths[0],
          I = w,
          U = h.FileIndex[0],
          D = 1;
        D < h.FullPaths.length;
        ++D
      )
        if (
          ((I = h.FullPaths[D].slice(w.length)),
          (U = h.FileIndex[D]),
          !(!U.size || !U.content || I == 'Sh33tJ5'))
        ) {
          I = I.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g, function (fe) {
            return '_x' + fe.charCodeAt(0).toString(16) + '_'
          }).replace(/[\u0080-\uFFFF]/g, function (fe) {
            return '_u' + fe.charCodeAt(0).toString(16) + '_'
          })
          for (
            var N = U.content,
              k = ue && Buffer.isBuffer(N) ? N.toString('binary') : Ne(N),
              X = 0,
              Z = Math.min(1024, k.length),
              te = 0,
              K = 0;
            K <= Z;
            ++K
          )
            (te = k.charCodeAt(K)) >= 32 && te < 128 && ++X
          var Q = X >= (Z * 4) / 5
          T.push(m),
            T.push('Content-Location: ' + (v.root || 'file:///C:/SheetJS/') + I),
            T.push('Content-Transfer-Encoding: ' + (Q ? 'quoted-printable' : 'base64')),
            T.push('Content-Type: ' + Wi(U, I)),
            T.push(''),
            T.push(Q ? Vi(k) : Hi(k))
        }
      return (
        T.push(
          m +
            `--\r
`
        ),
        T.join(`\r
`)
      )
    }
    function ji(h) {
      var g = {}
      return C(g, h), g
    }
    function E0(h, g, v, m) {
      var T = m && m.unsafe
      T || C(h)
      var w = !T && _e.find(h, g)
      if (!w) {
        var I = h.FullPaths[0]
        g.slice(0, I.length) == I
          ? (I = g)
          : (I.slice(-1) != '/' && (I += '/'), (I = (I + g).replace('//', '/'))),
          (w = { name: a(g), type: 2 }),
          h.FileIndex.push(w),
          h.FullPaths.push(I),
          T || _e.utils.cfb_gc(h)
      }
      return (
        (w.content = v),
        (w.size = v ? v.length : 0),
        m && (m.CLSID && (w.clsid = m.CLSID), m.mt && (w.mt = m.mt), m.ct && (w.ct = m.ct)),
        w
      )
    }
    function Yi(h, g) {
      C(h)
      var v = _e.find(h, g)
      if (v) {
        for (var m = 0; m < h.FileIndex.length; ++m)
          if (h.FileIndex[m] == v) return h.FileIndex.splice(m, 1), h.FullPaths.splice(m, 1), !0
      }
      return !1
    }
    function $i(h, g, v) {
      C(h)
      var m = _e.find(h, g)
      if (m) {
        for (var T = 0; T < h.FileIndex.length; ++T)
          if (h.FileIndex[T] == m) return (h.FileIndex[T].name = a(v)), (h.FullPaths[T] = v), !0
      }
      return !1
    }
    function Ji(h) {
      L(h, !0)
    }
    return (
      (t.find = G),
      (t.read = ee),
      (t.parse = c),
      (t.write = sr),
      (t.writeFile = hr),
      (t.utils = {
        cfb_new: ji,
        cfb_add: E0,
        cfb_del: Yi,
        cfb_mov: $i,
        cfb_gc: Ji,
        ReadShift: At,
        CheckField: ka,
        prep_blob: tr,
        bconcat: be,
        use_zlib: S,
        _deflateRaw: an,
        _inflateRaw: hn,
        consts: Ce
      }),
      t
    )
  })()
function Vs(e) {
  return typeof e == 'string' ? c0(e) : Array.isArray(e) ? ps(e) : e
}
function Lt(e, t, r) {
  if (typeof Deno < 'u') {
    if (r && typeof t == 'string')
      switch (r) {
        case 'utf8':
          t = new TextEncoder(r).encode(t)
          break
        case 'binary':
          t = c0(t)
          break
        default:
          throw new Error('Unsupported encoding ' + r)
      }
    return Deno.writeFileSync(e, t)
  }
  var n = r == 'utf8' ? Ar(t) : t
  if (typeof IE_SaveFile < 'u') return IE_SaveFile(n, e)
  if (typeof Blob < 'u') {
    var a = new Blob([Vs(n)], { type: 'application/octet-stream' })
    if (typeof navigator < 'u' && navigator.msSaveBlob) return navigator.msSaveBlob(a, e)
    if (typeof saveAs < 'u') return saveAs(a, e)
    if (
      typeof URL < 'u' &&
      typeof document < 'u' &&
      document.createElement &&
      URL.createObjectURL
    ) {
      var i = URL.createObjectURL(a)
      if (typeof chrome == 'object' && typeof (chrome.downloads || {}).download == 'function')
        return (
          URL.revokeObjectURL &&
            typeof setTimeout < 'u' &&
            setTimeout(function () {
              URL.revokeObjectURL(i)
            }, 6e4),
          chrome.downloads.download({ url: i, filename: e, saveAs: !0 })
        )
      var s = document.createElement('a')
      if (s.download != null)
        return (
          (s.download = e),
          (s.href = i),
          document.body.appendChild(s),
          s.click(),
          document.body.removeChild(s),
          URL.revokeObjectURL &&
            typeof setTimeout < 'u' &&
            setTimeout(function () {
              URL.revokeObjectURL(i)
            }, 6e4),
          i
        )
    }
  }
  if (typeof $ < 'u' && typeof File < 'u' && typeof Folder < 'u')
    try {
      var f = File(e)
      return (
        f.open('w'),
        (f.encoding = 'binary'),
        Array.isArray(t) && (t = Pt(t)),
        f.write(t),
        f.close(),
        t
      )
    } catch (o) {
      if (!o.message || !o.message.match(/onstruct/)) throw o
    }
  throw new Error('cannot save file ' + e)
}
function Ve(e) {
  for (var t = Object.keys(e), r = [], n = 0; n < t.length; ++n)
    Object.prototype.hasOwnProperty.call(e, t[n]) && r.push(t[n])
  return r
}
function An(e, t) {
  for (var r = [], n = Ve(e), a = 0; a !== n.length; ++a)
    r[e[n[a]][t]] == null && (r[e[n[a]][t]] = n[a])
  return r
}
function U0(e) {
  for (var t = [], r = Ve(e), n = 0; n !== r.length; ++n) t[e[r[n]]] = r[n]
  return t
}
function x0(e) {
  for (var t = [], r = Ve(e), n = 0; n !== r.length; ++n) t[e[r[n]]] = parseInt(r[n], 10)
  return t
}
function Gs(e) {
  for (var t = [], r = Ve(e), n = 0; n !== r.length; ++n)
    t[e[r[n]]] == null && (t[e[r[n]]] = []), t[e[r[n]]].push(r[n])
  return t
}
var e0 = new Date(1899, 11, 30, 0, 0, 0)
function qe(e, t) {
  var r = e.getTime()
  t && (r -= 1462 * 24 * 60 * 60 * 1e3)
  var n = e0.getTime() + (e.getTimezoneOffset() - e0.getTimezoneOffset()) * 6e4
  return (r - n) / (24 * 60 * 60 * 1e3)
}
var va = new Date(),
  Xs = e0.getTime() + (va.getTimezoneOffset() - e0.getTimezoneOffset()) * 6e4,
  Fn = va.getTimezoneOffset()
function ma(e) {
  var t = new Date()
  return (
    t.setTime(e * 24 * 60 * 60 * 1e3 + Xs),
    t.getTimezoneOffset() !== Fn && t.setTime(t.getTime() + (t.getTimezoneOffset() - Fn) * 6e4),
    t
  )
}
var yn = new Date('2017-02-19T19:06:09.000Z'),
  ga = isNaN(yn.getFullYear()) ? new Date('2/19/17') : yn,
  zs = ga.getFullYear() == 2017
function Je(e, t) {
  var r = new Date(e)
  if (zs)
    return (
      t > 0
        ? r.setTime(r.getTime() + r.getTimezoneOffset() * 60 * 1e3)
        : t < 0 && r.setTime(r.getTime() - r.getTimezoneOffset() * 60 * 1e3),
      r
    )
  if (e instanceof Date) return e
  if (ga.getFullYear() == 1917 && !isNaN(r.getFullYear())) {
    var n = r.getFullYear()
    return e.indexOf('' + n) > -1 || r.setFullYear(r.getFullYear() + 100), r
  }
  var a = e.match(/\d+/g) || ['2017', '2', '19', '0', '0', '0'],
    i = new Date(+a[0], +a[1] - 1, +a[2], +a[3] || 0, +a[4] || 0, +a[5] || 0)
  return e.indexOf('Z') > -1 && (i = new Date(i.getTime() - i.getTimezoneOffset() * 60 * 1e3)), i
}
function p0(e, t) {
  if (ue && Buffer.isBuffer(e)) {
    if (t) {
      if (e[0] == 255 && e[1] == 254) return Ar(e.slice(2).toString('utf16le'))
      if (e[1] == 254 && e[2] == 255) return Ar(xs(e.slice(2).toString('binary')))
    }
    return e.toString('binary')
  }
  if (typeof TextDecoder < 'u')
    try {
      if (t) {
        if (e[0] == 255 && e[1] == 254) return Ar(new TextDecoder('utf-16le').decode(e.slice(2)))
        if (e[0] == 254 && e[1] == 255) return Ar(new TextDecoder('utf-16be').decode(e.slice(2)))
      }
      var r = {
        '€': '',
        '‚': '',
        ƒ: '',
        '„': '',
        '…': '',
        '†': '',
        '‡': '',
        ˆ: '',
        '‰': '',
        Š: '',
        '‹': '',
        Œ: '',
        Ž: '',
        '‘': '',
        '’': '',
        '“': '',
        '”': '',
        '•': '',
        '–': '',
        '—': '',
        '˜': '',
        '™': '',
        š: '',
        '›': '',
        œ: '',
        ž: '',
        Ÿ: ''
      }
      return (
        Array.isArray(e) && (e = new Uint8Array(e)),
        new TextDecoder('latin1').decode(e).replace(/[€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ]/g, function (i) {
          return r[i] || i
        })
      )
    } catch {}
  for (var n = [], a = 0; a != e.length; ++a) n.push(String.fromCharCode(e[a]))
  return n.join('')
}
function Qe(e) {
  if (typeof JSON < 'u' && !Array.isArray(e)) return JSON.parse(JSON.stringify(e))
  if (typeof e != 'object' || e == null) return e
  if (e instanceof Date) return new Date(e.getTime())
  var t = {}
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = Qe(e[r]))
  return t
}
function Fe(e, t) {
  for (var r = ''; r.length < t; ) r += e
  return r
}
function yr(e) {
  var t = Number(e)
  if (!isNaN(t)) return isFinite(t) ? t : NaN
  if (!/\d/.test(e)) return t
  var r = 1,
    n = e
      .replace(/([\d]),([\d])/g, '$1$2')
      .replace(/[$]/g, '')
      .replace(/[%]/g, function () {
        return (r *= 100), ''
      })
  return !isNaN((t = Number(n))) ||
    ((n = n.replace(/[(](.*)[)]/, function (a, i) {
      return (r = -r), i
    })),
    !isNaN((t = Number(n))))
    ? t / r
    : t
}
var Ks = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december'
]
function Rt(e) {
  var t = new Date(e),
    r = new Date(NaN),
    n = t.getYear(),
    a = t.getMonth(),
    i = t.getDate()
  if (isNaN(i)) return r
  var s = e.toLowerCase()
  if (s.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)) {
    if (
      ((s = s.replace(/[^a-z]/g, '').replace(/([^a-z]|^)[ap]m?([^a-z]|$)/, '')),
      s.length > 3 && Ks.indexOf(s) == -1)
    )
      return r
  } else if (s.match(/[a-z]/)) return r
  return n < 0 || n > 8099 ? r : (a > 0 || i > 1) && n != 101 ? t : e.match(/[^-0-9:,\/\\]/) ? r : t
}
function oe(e, t, r) {
  if (e.FullPaths) {
    if (typeof r == 'string') {
      var n
      return ue ? (n = Rr(r)) : (n = ds(r)), _e.utils.cfb_add(e, t, n)
    }
    _e.utils.cfb_add(e, t, r)
  } else e.file(t, r)
}
function b0() {
  return _e.utils.cfb_new()
}
var Re = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r
`,
  js = { '&quot;': '"', '&apos;': "'", '&gt;': '>', '&lt;': '<', '&amp;': '&' },
  W0 = U0(js),
  H0 = /[&<>'"]/g,
  Ys = /[\u0000-\u0008\u000b-\u001f]/g
function ve(e) {
  var t = e + ''
  return t
    .replace(H0, function (r) {
      return W0[r]
    })
    .replace(Ys, function (r) {
      return '_x' + ('000' + r.charCodeAt(0).toString(16)).slice(-4) + '_'
    })
}
function Cn(e) {
  return ve(e).replace(/ /g, '_x0020_')
}
var _a = /[\u0000-\u001f]/g
function $s(e) {
  var t = e + ''
  return t
    .replace(H0, function (r) {
      return W0[r]
    })
    .replace(/\n/g, '<br/>')
    .replace(_a, function (r) {
      return '&#x' + ('000' + r.charCodeAt(0).toString(16)).slice(-4) + ';'
    })
}
function Js(e) {
  var t = e + ''
  return t
    .replace(H0, function (r) {
      return W0[r]
    })
    .replace(_a, function (r) {
      return '&#x' + r.charCodeAt(0).toString(16).toUpperCase() + ';'
    })
}
function Zs(e) {
  return e.replace(/(\r\n|[\r\n])/g, '&#10;')
}
function qs(e) {
  switch (e) {
    case 1:
    case !0:
    case '1':
    case 'true':
    case 'TRUE':
      return !0
    default:
      return !1
  }
}
function A0(e) {
  for (var t = '', r = 0, n = 0, a = 0, i = 0, s = 0, f = 0; r < e.length; ) {
    if (((n = e.charCodeAt(r++)), n < 128)) {
      t += String.fromCharCode(n)
      continue
    }
    if (((a = e.charCodeAt(r++)), n > 191 && n < 224)) {
      ;(s = (n & 31) << 6), (s |= a & 63), (t += String.fromCharCode(s))
      continue
    }
    if (((i = e.charCodeAt(r++)), n < 240)) {
      t += String.fromCharCode(((n & 15) << 12) | ((a & 63) << 6) | (i & 63))
      continue
    }
    ;(s = e.charCodeAt(r++)),
      (f = (((n & 7) << 18) | ((a & 63) << 12) | ((i & 63) << 6) | (s & 63)) - 65536),
      (t += String.fromCharCode(55296 + ((f >>> 10) & 1023))),
      (t += String.fromCharCode(56320 + (f & 1023)))
  }
  return t
}
function On(e) {
  var t = zr(2 * e.length),
    r,
    n,
    a = 1,
    i = 0,
    s = 0,
    f
  for (n = 0; n < e.length; n += a)
    (a = 1),
      (f = e.charCodeAt(n)) < 128
        ? (r = f)
        : f < 224
        ? ((r = (f & 31) * 64 + (e.charCodeAt(n + 1) & 63)), (a = 2))
        : f < 240
        ? ((r = (f & 15) * 4096 + (e.charCodeAt(n + 1) & 63) * 64 + (e.charCodeAt(n + 2) & 63)),
          (a = 3))
        : ((a = 4),
          (r =
            (f & 7) * 262144 +
            (e.charCodeAt(n + 1) & 63) * 4096 +
            (e.charCodeAt(n + 2) & 63) * 64 +
            (e.charCodeAt(n + 3) & 63)),
          (r -= 65536),
          (s = 55296 + ((r >>> 10) & 1023)),
          (r = 56320 + (r & 1023))),
      s !== 0 && ((t[i++] = s & 255), (t[i++] = s >>> 8), (s = 0)),
      (t[i++] = r % 256),
      (t[i++] = r >>> 8)
  return t.slice(0, i).toString('ucs2')
}
function Dn(e) {
  return Rr(e, 'binary').toString('utf8')
}
var zt = 'foo bar bazâð£',
  St = (ue && ((Dn(zt) == A0(zt) && Dn) || (On(zt) == A0(zt) && On))) || A0,
  Ar = ue
    ? function (e) {
        return Rr(e, 'utf8').toString('binary')
      }
    : function (e) {
        for (var t = [], r = 0, n = 0, a = 0; r < e.length; )
          switch (((n = e.charCodeAt(r++)), !0)) {
            case n < 128:
              t.push(String.fromCharCode(n))
              break
            case n < 2048:
              t.push(String.fromCharCode(192 + (n >> 6))),
                t.push(String.fromCharCode(128 + (n & 63)))
              break
            case n >= 55296 && n < 57344:
              ;(n -= 55296),
                (a = e.charCodeAt(r++) - 56320 + (n << 10)),
                t.push(String.fromCharCode(240 + ((a >> 18) & 7))),
                t.push(String.fromCharCode(144 + ((a >> 12) & 63))),
                t.push(String.fromCharCode(128 + ((a >> 6) & 63))),
                t.push(String.fromCharCode(128 + (a & 63)))
              break
            default:
              t.push(String.fromCharCode(224 + (n >> 12))),
                t.push(String.fromCharCode(128 + ((n >> 6) & 63))),
                t.push(String.fromCharCode(128 + (n & 63)))
          }
        return t.join('')
      },
  Qs = (function () {
    var e = [
      ['nbsp', ' '],
      ['middot', '·'],
      ['quot', '"'],
      ['apos', "'"],
      ['gt', '>'],
      ['lt', '<'],
      ['amp', '&']
    ].map(function (t) {
      return [new RegExp('&' + t[0] + ';', 'ig'), t[1]]
    })
    return function (r) {
      for (
        var n = r
            .replace(/^[\t\n\r ]+/, '')
            .replace(/[\t\n\r ]+$/, '')
            .replace(/>\s+/g, '>')
            .replace(/\s+</g, '<')
            .replace(/[\t\n\r ]+/g, ' ')
            .replace(
              /<\s*[bB][rR]\s*\/?>/g,
              `
`
            )
            .replace(/<[^>]*>/g, ''),
          a = 0;
        a < e.length;
        ++a
      )
        n = n.replace(e[a][0], e[a][1])
      return n
    }
  })(),
  Ta = /(^\s|\s$|\n)/
function We(e, t) {
  return '<' + e + (t.match(Ta) ? ' xml:space="preserve"' : '') + '>' + t + '</' + e + '>'
}
function It(e) {
  return Ve(e)
    .map(function (t) {
      return ' ' + t + '="' + e[t] + '"'
    })
    .join('')
}
function j(e, t, r) {
  return (
    '<' +
    e +
    (r != null ? It(r) : '') +
    (t != null ? (t.match(Ta) ? ' xml:space="preserve"' : '') + '>' + t + '</' + e : '/') +
    '>'
  )
}
function k0(e, t) {
  try {
    return e.toISOString().replace(/\.\d*/, '')
  } catch (r) {
    if (t) throw r
  }
  return ''
}
function ef(e, t) {
  switch (typeof e) {
    case 'string':
      var r = j('vt:lpwstr', ve(e))
      return t && (r = r.replace(/&quot;/g, '_x0022_')), r
    case 'number':
      return j((e | 0) == e ? 'vt:i4' : 'vt:r8', ve(String(e)))
    case 'boolean':
      return j('vt:bool', e ? 'true' : 'false')
  }
  if (e instanceof Date) return j('vt:filetime', k0(e))
  throw new Error('Unable to serialize ' + e)
}
var ke = {
    CORE_PROPS: 'http://schemas.openxmlformats.org/package/2006/metadata/core-properties',
    CUST_PROPS: 'http://schemas.openxmlformats.org/officeDocument/2006/custom-properties',
    EXT_PROPS: 'http://schemas.openxmlformats.org/officeDocument/2006/extended-properties',
    CT: 'http://schemas.openxmlformats.org/package/2006/content-types',
    RELS: 'http://schemas.openxmlformats.org/package/2006/relationships',
    TCMNT: 'http://schemas.microsoft.com/office/spreadsheetml/2018/threadedcomments',
    dc: 'http://purl.org/dc/elements/1.1/',
    dcterms: 'http://purl.org/dc/terms/',
    dcmitype: 'http://purl.org/dc/dcmitype/',
    mx: 'http://schemas.microsoft.com/office/mac/excel/2008/main',
    r: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships',
    sjs: 'http://schemas.openxmlformats.org/package/2006/sheetjs/core-properties',
    vt: 'http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes',
    xsi: 'http://www.w3.org/2001/XMLSchema-instance',
    xsd: 'http://www.w3.org/2001/XMLSchema'
  },
  ht = [
    'http://schemas.openxmlformats.org/spreadsheetml/2006/main',
    'http://purl.oclc.org/ooxml/spreadsheetml/main',
    'http://schemas.microsoft.com/office/excel/2006/main',
    'http://schemas.microsoft.com/office/excel/2006/2'
  ],
  nr = {
    o: 'urn:schemas-microsoft-com:office:office',
    x: 'urn:schemas-microsoft-com:office:excel',
    ss: 'urn:schemas-microsoft-com:office:spreadsheet',
    dt: 'uuid:C2F41010-65B3-11d1-A29F-00AA00C14882',
    mv: 'http://macVmlSchemaUri',
    v: 'urn:schemas-microsoft-com:vml',
    html: 'http://www.w3.org/TR/REC-html40'
  }
function rf(e, t) {
  for (
    var r = 1 - 2 * (e[t + 7] >>> 7),
      n = ((e[t + 7] & 127) << 4) + ((e[t + 6] >>> 4) & 15),
      a = e[t + 6] & 15,
      i = 5;
    i >= 0;
    --i
  )
    a = a * 256 + e[t + i]
  return n == 2047
    ? a == 0
      ? r * (1 / 0)
      : NaN
    : (n == 0 ? (n = -1022) : ((n -= 1023), (a += Math.pow(2, 52))), r * Math.pow(2, n - 52) * a)
}
function tf(e, t, r) {
  var n = (t < 0 || 1 / t == -1 / 0 ? 1 : 0) << 7,
    a = 0,
    i = 0,
    s = n ? -t : t
  isFinite(s)
    ? s == 0
      ? (a = i = 0)
      : ((a = Math.floor(Math.log(s) / Math.LN2)),
        (i = s * Math.pow(2, 52 - a)),
        a <= -1023 && (!isFinite(i) || i < Math.pow(2, 52))
          ? (a = -1022)
          : ((i -= Math.pow(2, 52)), (a += 1023)))
    : ((a = 2047), (i = isNaN(t) ? 26985 : 0))
  for (var f = 0; f <= 5; ++f, i /= 256) e[r + f] = i & 255
  ;(e[r + 6] = ((a & 15) << 4) | (i & 15)), (e[r + 7] = (a >> 4) | n)
}
var Rn = function (e) {
    for (var t = [], r = 10240, n = 0; n < e[0].length; ++n)
      if (e[0][n])
        for (var a = 0, i = e[0][n].length; a < i; a += r) t.push.apply(t, e[0][n].slice(a, a + r))
    return t
  },
  In = ue
    ? function (e) {
        return e[0].length > 0 && Buffer.isBuffer(e[0][0])
          ? Buffer.concat(
              e[0].map(function (t) {
                return Buffer.isBuffer(t) ? t : Rr(t)
              })
            )
          : Rn(e)
      }
    : Rn,
  Nn = function (e, t, r) {
    for (var n = [], a = t; a < r; a += 2) n.push(String.fromCharCode(Et(e, a)))
    return n.join('').replace(wt, '')
  },
  V0 = ue
    ? function (e, t, r) {
        return Buffer.isBuffer(e) ? e.toString('utf16le', t, r).replace(wt, '') : Nn(e, t, r)
      }
    : Nn,
  kn = function (e, t, r) {
    for (var n = [], a = t; a < t + r; ++a) n.push(('0' + e[a].toString(16)).slice(-2))
    return n.join('')
  },
  Ea = ue
    ? function (e, t, r) {
        return Buffer.isBuffer(e) ? e.toString('hex', t, t + r) : kn(e, t, r)
      }
    : kn,
  Pn = function (e, t, r) {
    for (var n = [], a = t; a < r; a++) n.push(String.fromCharCode(at(e, a)))
    return n.join('')
  },
  Mt = ue
    ? function (t, r, n) {
        return Buffer.isBuffer(t) ? t.toString('utf8', r, n) : Pn(t, r, n)
      }
    : Pn,
  wa = function (e, t) {
    var r = ar(e, t)
    return r > 0 ? Mt(e, t + 4, t + 4 + r - 1) : ''
  },
  Sa = wa,
  Aa = function (e, t) {
    var r = ar(e, t)
    return r > 0 ? Mt(e, t + 4, t + 4 + r - 1) : ''
  },
  Fa = Aa,
  ya = function (e, t) {
    var r = 2 * ar(e, t)
    return r > 0 ? Mt(e, t + 4, t + 4 + r - 1) : ''
  },
  Ca = ya,
  Oa = function (t, r) {
    var n = ar(t, r)
    return n > 0 ? V0(t, r + 4, r + 4 + n) : ''
  },
  Da = Oa,
  Ra = function (e, t) {
    var r = ar(e, t)
    return r > 0 ? Mt(e, t + 4, t + 4 + r) : ''
  },
  Ia = Ra,
  Na = function (e, t) {
    return rf(e, t)
  },
  r0 = Na,
  G0 = function (t) {
    return Array.isArray(t) || (typeof Uint8Array < 'u' && t instanceof Uint8Array)
  }
ue &&
  ((Sa = function (t, r) {
    if (!Buffer.isBuffer(t)) return wa(t, r)
    var n = t.readUInt32LE(r)
    return n > 0 ? t.toString('utf8', r + 4, r + 4 + n - 1) : ''
  }),
  (Fa = function (t, r) {
    if (!Buffer.isBuffer(t)) return Aa(t, r)
    var n = t.readUInt32LE(r)
    return n > 0 ? t.toString('utf8', r + 4, r + 4 + n - 1) : ''
  }),
  (Ca = function (t, r) {
    if (!Buffer.isBuffer(t)) return ya(t, r)
    var n = 2 * t.readUInt32LE(r)
    return t.toString('utf16le', r + 4, r + 4 + n - 1)
  }),
  (Da = function (t, r) {
    if (!Buffer.isBuffer(t)) return Oa(t, r)
    var n = t.readUInt32LE(r)
    return t.toString('utf16le', r + 4, r + 4 + n)
  }),
  (Ia = function (t, r) {
    if (!Buffer.isBuffer(t)) return Ra(t, r)
    var n = t.readUInt32LE(r)
    return t.toString('utf8', r + 4, r + 4 + n)
  }),
  (r0 = function (t, r) {
    return Buffer.isBuffer(t) ? t.readDoubleLE(r) : Na(t, r)
  }),
  (G0 = function (t) {
    return (
      Buffer.isBuffer(t) || Array.isArray(t) || (typeof Uint8Array < 'u' && t instanceof Uint8Array)
    )
  }))
var at = function (e, t) {
    return e[t]
  },
  Et = function (e, t) {
    return e[t + 1] * 256 + e[t]
  },
  nf = function (e, t) {
    var r = e[t + 1] * 256 + e[t]
    return r < 32768 ? r : (65535 - r + 1) * -1
  },
  ar = function (e, t) {
    return e[t + 3] * (1 << 24) + (e[t + 2] << 16) + (e[t + 1] << 8) + e[t]
  },
  Gr = function (e, t) {
    return (e[t + 3] << 24) | (e[t + 2] << 16) | (e[t + 1] << 8) | e[t]
  },
  af = function (e, t) {
    return (e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3]
  }
function At(e, t) {
  var r = '',
    n,
    a,
    i = [],
    s,
    f,
    o,
    l
  switch (t) {
    case 'dbcs':
      if (((l = this.l), ue && Buffer.isBuffer(this)))
        r = this.slice(this.l, this.l + 2 * e).toString('utf16le')
      else for (o = 0; o < e; ++o) (r += String.fromCharCode(Et(this, l))), (l += 2)
      e *= 2
      break
    case 'utf8':
      r = Mt(this, this.l, this.l + e)
      break
    case 'utf16le':
      ;(e *= 2), (r = V0(this, this.l, this.l + e))
      break
    case 'wstr':
      return At.call(this, e, 'dbcs')
    case 'lpstr-ansi':
      ;(r = Sa(this, this.l)), (e = 4 + ar(this, this.l))
      break
    case 'lpstr-cp':
      ;(r = Fa(this, this.l)), (e = 4 + ar(this, this.l))
      break
    case 'lpwstr':
      ;(r = Ca(this, this.l)), (e = 4 + 2 * ar(this, this.l))
      break
    case 'lpp4':
      ;(e = 4 + ar(this, this.l)), (r = Da(this, this.l)), e & 2 && (e += 2)
      break
    case '8lpp4':
      ;(e = 4 + ar(this, this.l)), (r = Ia(this, this.l)), e & 3 && (e += 4 - (e & 3))
      break
    case 'cstr':
      for (e = 0, r = ''; (s = at(this, this.l + e++)) !== 0; ) i.push(Vt(s))
      r = i.join('')
      break
    case '_wstr':
      for (e = 0, r = ''; (s = Et(this, this.l + e)) !== 0; ) i.push(Vt(s)), (e += 2)
      ;(e += 2), (r = i.join(''))
      break
    case 'dbcs-cont':
      for (r = '', l = this.l, o = 0; o < e; ++o) {
        if (this.lens && this.lens.indexOf(l) !== -1)
          return (
            (s = at(this, l)),
            (this.l = l + 1),
            (f = At.call(this, e - o, s ? 'dbcs-cont' : 'sbcs-cont')),
            i.join('') + f
          )
        i.push(Vt(Et(this, l))), (l += 2)
      }
      ;(r = i.join('')), (e *= 2)
      break
    case 'cpstr':
    case 'sbcs-cont':
      for (r = '', l = this.l, o = 0; o != e; ++o) {
        if (this.lens && this.lens.indexOf(l) !== -1)
          return (
            (s = at(this, l)),
            (this.l = l + 1),
            (f = At.call(this, e - o, s ? 'dbcs-cont' : 'sbcs-cont')),
            i.join('') + f
          )
        i.push(Vt(at(this, l))), (l += 1)
      }
      r = i.join('')
      break
    default:
      switch (e) {
        case 1:
          return (n = at(this, this.l)), this.l++, n
        case 2:
          return (n = (t === 'i' ? nf : Et)(this, this.l)), (this.l += 2), n
        case 4:
        case -4:
          return t === 'i' || !(this[this.l + 3] & 128)
            ? ((n = (e > 0 ? Gr : af)(this, this.l)), (this.l += 4), n)
            : ((a = ar(this, this.l)), (this.l += 4), a)
        case 8:
        case -8:
          if (t === 'f')
            return (
              e == 8
                ? (a = r0(this, this.l))
                : (a = r0(
                    [
                      this[this.l + 7],
                      this[this.l + 6],
                      this[this.l + 5],
                      this[this.l + 4],
                      this[this.l + 3],
                      this[this.l + 2],
                      this[this.l + 1],
                      this[this.l + 0]
                    ],
                    0
                  )),
              (this.l += 8),
              a
            )
          e = 8
        case 16:
          r = Ea(this, this.l, e)
          break
      }
  }
  return (this.l += e), r
}
var sf = function (e, t, r) {
    ;(e[r] = t & 255),
      (e[r + 1] = (t >>> 8) & 255),
      (e[r + 2] = (t >>> 16) & 255),
      (e[r + 3] = (t >>> 24) & 255)
  },
  ff = function (e, t, r) {
    ;(e[r] = t & 255),
      (e[r + 1] = (t >> 8) & 255),
      (e[r + 2] = (t >> 16) & 255),
      (e[r + 3] = (t >> 24) & 255)
  },
  lf = function (e, t, r) {
    ;(e[r] = t & 255), (e[r + 1] = (t >>> 8) & 255)
  }
function of(e, t, r) {
  var n = 0,
    a = 0
  if (r === 'dbcs') {
    for (a = 0; a != t.length; ++a) lf(this, t.charCodeAt(a), this.l + 2 * a)
    n = 2 * t.length
  } else if (r === 'sbcs') {
    for (t = t.replace(/[^\x00-\x7F]/g, '_'), a = 0; a != t.length; ++a)
      this[this.l + a] = t.charCodeAt(a) & 255
    n = t.length
  } else if (r === 'hex') {
    for (; a < e; ++a) this[this.l++] = parseInt(t.slice(2 * a, 2 * a + 2), 16) || 0
    return this
  } else if (r === 'utf16le') {
    var i = Math.min(this.l + e, this.length)
    for (a = 0; a < Math.min(t.length, e); ++a) {
      var s = t.charCodeAt(a)
      ;(this[this.l++] = s & 255), (this[this.l++] = s >> 8)
    }
    for (; this.l < i; ) this[this.l++] = 0
    return this
  } else
    switch (e) {
      case 1:
        ;(n = 1), (this[this.l] = t & 255)
        break
      case 2:
        ;(n = 2), (this[this.l] = t & 255), (t >>>= 8), (this[this.l + 1] = t & 255)
        break
      case 3:
        ;(n = 3),
          (this[this.l] = t & 255),
          (t >>>= 8),
          (this[this.l + 1] = t & 255),
          (t >>>= 8),
          (this[this.l + 2] = t & 255)
        break
      case 4:
        ;(n = 4), sf(this, t, this.l)
        break
      case 8:
        if (((n = 8), r === 'f')) {
          tf(this, t, this.l)
          break
        }
      case 16:
        break
      case -4:
        ;(n = 4), ff(this, t, this.l)
        break
    }
  return (this.l += n), this
}
function ka(e, t) {
  var r = Ea(this, this.l, e.length >> 1)
  if (r !== e) throw new Error(t + 'Expected ' + e + ' saw ' + r)
  this.l += e.length >> 1
}
function tr(e, t) {
  ;(e.l = t), (e.read_shift = At), (e.chk = ka), (e.write_shift = of)
}
function Tr(e, t) {
  e.l += t
}
function B(e) {
  var t = zr(e)
  return tr(t, 0), t
}
function Ze() {
  var e = [],
    t = ue ? 256 : 2048,
    r = function (l) {
      var c = B(l)
      return tr(c, 0), c
    },
    n = r(t),
    a = function () {
      n &&
        (n.length > n.l && ((n = n.slice(0, n.l)), (n.l = n.length)),
        n.length > 0 && e.push(n),
        (n = null))
    },
    i = function (l) {
      return n && l < n.length - n.l ? n : (a(), (n = r(Math.max(l + 1, t))))
    },
    s = function () {
      return a(), be(e)
    },
    f = function (l) {
      a(), (n = l), n.l == null && (n.l = n.length), i(t)
    }
  return { next: i, push: f, end: s, _bufs: e }
}
function W(e, t, r, n) {
  var a = +t,
    i
  if (!isNaN(a)) {
    n || (n = nu[a].p || (r || []).length || 0),
      (i = 1 + (a >= 128 ? 1 : 0) + 1),
      n >= 128 && ++i,
      n >= 16384 && ++i,
      n >= 2097152 && ++i
    var s = e.next(i)
    a <= 127 ? s.write_shift(1, a) : (s.write_shift(1, (a & 127) + 128), s.write_shift(1, a >> 7))
    for (var f = 0; f != 4; ++f)
      if (n >= 128) s.write_shift(1, (n & 127) + 128), (n >>= 7)
      else {
        s.write_shift(1, n)
        break
      }
    n > 0 && G0(r) && e.push(r)
  }
}
function Ft(e, t, r) {
  var n = Qe(e)
  if (
    (t.s
      ? (n.cRel && (n.c += t.s.c), n.rRel && (n.r += t.s.r))
      : (n.cRel && (n.c += t.c), n.rRel && (n.r += t.r)),
    !r || r.biff < 12)
  ) {
    for (; n.c >= 256; ) n.c -= 256
    for (; n.r >= 65536; ) n.r -= 65536
  }
  return n
}
function Ln(e, t, r) {
  var n = Qe(e)
  return (n.s = Ft(n.s, t.s, r)), (n.e = Ft(n.e, t.s, r)), n
}
function yt(e, t) {
  if (e.cRel && e.c < 0) for (e = Qe(e); e.c < 0; ) e.c += t > 8 ? 16384 : 256
  if (e.rRel && e.r < 0) for (e = Qe(e); e.r < 0; ) e.r += t > 8 ? 1048576 : t > 5 ? 65536 : 16384
  var r = me(e)
  return !e.cRel && e.cRel != null && (r = uf(r)), !e.rRel && e.rRel != null && (r = cf(r)), r
}
function F0(e, t) {
  return e.s.r == 0 &&
    !e.s.rRel &&
    e.e.r == (t.biff >= 12 ? 1048575 : t.biff >= 8 ? 65536 : 16384) &&
    !e.e.rRel
    ? (e.s.cRel ? '' : '$') + ze(e.s.c) + ':' + (e.e.cRel ? '' : '$') + ze(e.e.c)
    : e.s.c == 0 && !e.s.cRel && e.e.c == (t.biff >= 12 ? 16383 : 255) && !e.e.cRel
    ? (e.s.rRel ? '' : '$') + He(e.s.r) + ':' + (e.e.rRel ? '' : '$') + He(e.e.r)
    : yt(e.s, t.biff) + ':' + yt(e.e, t.biff)
}
function X0(e) {
  return parseInt(hf(e), 10) - 1
}
function He(e) {
  return '' + (e + 1)
}
function cf(e) {
  return e.replace(/([A-Z]|^)(\d+)$/, '$1$$$2')
}
function hf(e) {
  return e.replace(/\$(\d+)$/, '$1')
}
function z0(e) {
  for (var t = xf(e), r = 0, n = 0; n !== t.length; ++n) r = 26 * r + t.charCodeAt(n) - 64
  return r - 1
}
function ze(e) {
  if (e < 0) throw new Error('invalid column ' + e)
  var t = ''
  for (++e; e; e = Math.floor((e - 1) / 26)) t = String.fromCharCode(((e - 1) % 26) + 65) + t
  return t
}
function uf(e) {
  return e.replace(/^([A-Z])/, '$$$1')
}
function xf(e) {
  return e.replace(/^\$([A-Z])/, '$1')
}
function pf(e) {
  return e.replace(/(\$?[A-Z]*)(\$?\d*)/, '$1,$2').split(',')
}
function Pe(e) {
  for (var t = 0, r = 0, n = 0; n < e.length; ++n) {
    var a = e.charCodeAt(n)
    a >= 48 && a <= 57 ? (t = 10 * t + (a - 48)) : a >= 65 && a <= 90 && (r = 26 * r + (a - 64))
  }
  return { c: r - 1, r: t - 1 }
}
function me(e) {
  for (var t = e.c + 1, r = ''; t; t = ((t - 1) / 26) | 0)
    r = String.fromCharCode(((t - 1) % 26) + 65) + r
  return r + (e.r + 1)
}
function ir(e) {
  var t = e.indexOf(':')
  return t == -1 ? { s: Pe(e), e: Pe(e) } : { s: Pe(e.slice(0, t)), e: Pe(e.slice(t + 1)) }
}
function De(e, t) {
  return typeof t > 'u' || typeof t == 'number'
    ? De(e.s, e.e)
    : (typeof e != 'string' && (e = me(e)),
      typeof t != 'string' && (t = me(t)),
      e == t ? e : e + ':' + t)
}
function Ee(e) {
  var t = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } },
    r = 0,
    n = 0,
    a = 0,
    i = e.length
  for (r = 0; n < i && !((a = e.charCodeAt(n) - 64) < 1 || a > 26); ++n) r = 26 * r + a
  for (t.s.c = --r, r = 0; n < i && !((a = e.charCodeAt(n) - 48) < 0 || a > 9); ++n) r = 10 * r + a
  if (((t.s.r = --r), n === i || a != 10)) return (t.e.c = t.s.c), (t.e.r = t.s.r), t
  for (++n, r = 0; n != i && !((a = e.charCodeAt(n) - 64) < 1 || a > 26); ++n) r = 26 * r + a
  for (t.e.c = --r, r = 0; n != i && !((a = e.charCodeAt(n) - 48) < 0 || a > 9); ++n) r = 10 * r + a
  return (t.e.r = --r), t
}
function Mn(e, t) {
  var r = e.t == 'd' && t instanceof Date
  if (e.z != null)
    try {
      return (e.w = Pr(e.z, r ? qe(t) : t))
    } catch {}
  try {
    return (e.w = Pr((e.XF || {}).numFmtId || (r ? 14 : 0), r ? qe(t) : t))
  } catch {
    return '' + t
  }
}
function Dr(e, t, r) {
  return e == null || e.t == null || e.t == 'z'
    ? ''
    : e.w !== void 0
    ? e.w
    : (e.t == 'd' && !e.z && r && r.dateNF && (e.z = r.dateNF),
      e.t == 'e' ? Bt[e.v] || e.v : t == null ? Mn(e, e.v) : Mn(e, t))
}
function Yr(e, t) {
  var r = t && t.sheet ? t.sheet : 'Sheet1',
    n = {}
  return (n[r] = e), { SheetNames: [r], Sheets: n }
}
function Pa(e, t, r) {
  var n = r || {},
    a = e ? Array.isArray(e) : n.dense,
    i = e || (a ? [] : {}),
    s = 0,
    f = 0
  if (i && n.origin != null) {
    if (typeof n.origin == 'number') s = n.origin
    else {
      var o = typeof n.origin == 'string' ? Pe(n.origin) : n.origin
      ;(s = o.r), (f = o.c)
    }
    i['!ref'] || (i['!ref'] = 'A1:A1')
  }
  var l = { s: { c: 1e7, r: 1e7 }, e: { c: 0, r: 0 } }
  if (i['!ref']) {
    var c = Ee(i['!ref'])
    ;(l.s.c = c.s.c),
      (l.s.r = c.s.r),
      (l.e.c = Math.max(l.e.c, c.e.c)),
      (l.e.r = Math.max(l.e.r, c.e.r)),
      s == -1 && (l.e.r = s = c.e.r + 1)
  }
  for (var d = 0; d != t.length; ++d)
    if (t[d]) {
      if (!Array.isArray(t[d])) throw new Error('aoa_to_sheet expects an array of arrays')
      for (var x = 0; x != t[d].length; ++x)
        if (!(typeof t[d][x] > 'u')) {
          var p = { v: t[d][x] },
            E = s + d,
            u = f + x
          if (
            (l.s.r > E && (l.s.r = E),
            l.s.c > u && (l.s.c = u),
            l.e.r < E && (l.e.r = E),
            l.e.c < u && (l.e.c = u),
            t[d][x] &&
              typeof t[d][x] == 'object' &&
              !Array.isArray(t[d][x]) &&
              !(t[d][x] instanceof Date))
          )
            p = t[d][x]
          else if ((Array.isArray(p.v) && ((p.f = t[d][x][1]), (p.v = p.v[0])), p.v === null))
            if (p.f) p.t = 'n'
            else if (n.nullError) (p.t = 'e'), (p.v = 0)
            else if (n.sheetStubs) p.t = 'z'
            else continue
          else
            typeof p.v == 'number'
              ? (p.t = 'n')
              : typeof p.v == 'boolean'
              ? (p.t = 'b')
              : p.v instanceof Date
              ? ((p.z = n.dateNF || ye[14]),
                n.cellDates
                  ? ((p.t = 'd'), (p.w = Pr(p.z, qe(p.v))))
                  : ((p.t = 'n'), (p.v = qe(p.v)), (p.w = Pr(p.z, p.v))))
              : (p.t = 's')
          if (a) i[E] || (i[E] = []), i[E][u] && i[E][u].z && (p.z = i[E][u].z), (i[E][u] = p)
          else {
            var _ = me({ c: u, r: E })
            i[_] && i[_].z && (p.z = i[_].z), (i[_] = p)
          }
        }
    }
  return l.s.c < 1e7 && (i['!ref'] = De(l)), i
}
function ut(e, t) {
  return Pa(null, e, t)
}
function df(e) {
  return e.read_shift(4, 'i')
}
function vr(e, t) {
  return t || (t = B(4)), t.write_shift(4, e), t
}
function Ke(e) {
  var t = e.read_shift(4)
  return t === 0 ? '' : e.read_shift(t, 'dbcs')
}
function Le(e, t) {
  var r = !1
  return (
    t == null && ((r = !0), (t = B(4 + 2 * e.length))),
    t.write_shift(4, e.length),
    e.length > 0 && t.write_shift(0, e, 'dbcs'),
    r ? t.slice(0, t.l) : t
  )
}
function vf(e) {
  return { ich: e.read_shift(2), ifnt: e.read_shift(2) }
}
function mf(e, t) {
  return t || (t = B(4)), t.write_shift(2, e.ich || 0), t.write_shift(2, e.ifnt || 0), t
}
function K0(e, t) {
  var r = e.l,
    n = e.read_shift(1),
    a = Ke(e),
    i = [],
    s = { t: a, h: a }
  if (n & 1) {
    for (var f = e.read_shift(4), o = 0; o != f; ++o) i.push(vf(e))
    s.r = i
  } else s.r = [{ ich: 0, ifnt: 0 }]
  return (e.l = r + t), s
}
function gf(e, t) {
  var r = !1
  return (
    t == null && ((r = !0), (t = B(15 + 4 * e.t.length))),
    t.write_shift(1, 0),
    Le(e.t, t),
    r ? t.slice(0, t.l) : t
  )
}
var _f = K0
function Tf(e, t) {
  var r = !1
  return (
    t == null && ((r = !0), (t = B(23 + 4 * e.t.length))),
    t.write_shift(1, 1),
    Le(e.t, t),
    t.write_shift(4, 1),
    mf({ ich: 0, ifnt: 0 }, t),
    r ? t.slice(0, t.l) : t
  )
}
function cr(e) {
  var t = e.read_shift(4),
    r = e.read_shift(2)
  return (r += e.read_shift(1) << 16), e.l++, { c: t, iStyleRef: r }
}
function $r(e, t) {
  return (
    t == null && (t = B(8)),
    t.write_shift(-4, e.c),
    t.write_shift(3, e.iStyleRef || e.s),
    t.write_shift(1, 0),
    t
  )
}
function Jr(e) {
  var t = e.read_shift(2)
  return (t += e.read_shift(1) << 16), e.l++, { c: -1, iStyleRef: t }
}
function Zr(e, t) {
  return t == null && (t = B(4)), t.write_shift(3, e.iStyleRef || e.s), t.write_shift(1, 0), t
}
var Ef = Ke,
  La = Le
function j0(e) {
  var t = e.read_shift(4)
  return t === 0 || t === 4294967295 ? '' : e.read_shift(t, 'dbcs')
}
function t0(e, t) {
  var r = !1
  return (
    t == null && ((r = !0), (t = B(127))),
    t.write_shift(4, e.length > 0 ? e.length : 4294967295),
    e.length > 0 && t.write_shift(0, e, 'dbcs'),
    r ? t.slice(0, t.l) : t
  )
}
var wf = Ke,
  P0 = j0,
  Y0 = t0
function Ma(e) {
  var t = e.slice(e.l, e.l + 4),
    r = t[0] & 1,
    n = t[0] & 2
  e.l += 4
  var a = n === 0 ? r0([0, 0, 0, 0, t[0] & 252, t[1], t[2], t[3]], 0) : Gr(t, 0) >> 2
  return r ? a / 100 : a
}
function Ba(e, t) {
  t == null && (t = B(4))
  var r = 0,
    n = 0,
    a = e * 100
  if (
    (e == (e | 0) && e >= -(1 << 29) && e < 1 << 29
      ? (n = 1)
      : a == (a | 0) && a >= -(1 << 29) && a < 1 << 29 && ((n = 1), (r = 1)),
    n)
  )
    t.write_shift(-4, ((r ? a : e) << 2) + (r + 2))
  else throw new Error('unsupported RkNumber ' + e)
}
function Ua(e) {
  var t = { s: {}, e: {} }
  return (
    (t.s.r = e.read_shift(4)),
    (t.e.r = e.read_shift(4)),
    (t.s.c = e.read_shift(4)),
    (t.e.c = e.read_shift(4)),
    t
  )
}
function Sf(e, t) {
  return (
    t || (t = B(16)),
    t.write_shift(4, e.s.r),
    t.write_shift(4, e.e.r),
    t.write_shift(4, e.s.c),
    t.write_shift(4, e.e.c),
    t
  )
}
var qr = Ua,
  xt = Sf
function pt(e) {
  if (e.length - e.l < 8) throw 'XLS Xnum Buffer underflow'
  return e.read_shift(8, 'f')
}
function Kr(e, t) {
  return (t || B(8)).write_shift(8, e, 'f')
}
function Af(e) {
  var t = {},
    r = e.read_shift(1),
    n = r >>> 1,
    a = e.read_shift(1),
    i = e.read_shift(2, 'i'),
    s = e.read_shift(1),
    f = e.read_shift(1),
    o = e.read_shift(1)
  switch ((e.l++, n)) {
    case 0:
      t.auto = 1
      break
    case 1:
      t.index = a
      var l = kf[a]
      l && (t.rgb = jn(l))
      break
    case 2:
      t.rgb = jn([s, f, o])
      break
    case 3:
      t.theme = a
      break
  }
  return i != 0 && (t.tint = i > 0 ? i / 32767 : i / 32768), t
}
function n0(e, t) {
  if ((t || (t = B(8)), !e || e.auto)) return t.write_shift(4, 0), t.write_shift(4, 0), t
  e.index != null
    ? (t.write_shift(1, 2), t.write_shift(1, e.index))
    : e.theme != null
    ? (t.write_shift(1, 6), t.write_shift(1, e.theme))
    : (t.write_shift(1, 5), t.write_shift(1, 0))
  var r = e.tint || 0
  if (
    (r > 0 ? (r *= 32767) : r < 0 && (r *= 32768), t.write_shift(2, r), !e.rgb || e.theme != null)
  )
    t.write_shift(2, 0), t.write_shift(1, 0), t.write_shift(1, 0)
  else {
    var n = e.rgb || 'FFFFFF'
    typeof n == 'number' && (n = ('000000' + n.toString(16)).slice(-6)),
      t.write_shift(1, parseInt(n.slice(0, 2), 16)),
      t.write_shift(1, parseInt(n.slice(2, 4), 16)),
      t.write_shift(1, parseInt(n.slice(4, 6), 16)),
      t.write_shift(1, 255)
  }
  return t
}
function Ff(e) {
  var t = e.read_shift(1)
  e.l++
  var r = {
    fBold: t & 1,
    fItalic: t & 2,
    fUnderline: t & 4,
    fStrikeout: t & 8,
    fOutline: t & 16,
    fShadow: t & 32,
    fCondense: t & 64,
    fExtend: t & 128
  }
  return r
}
function yf(e, t) {
  t || (t = B(2))
  var r =
    (e.italic ? 2 : 0) |
    (e.strike ? 8 : 0) |
    (e.outline ? 16 : 0) |
    (e.shadow ? 32 : 0) |
    (e.condense ? 64 : 0) |
    (e.extend ? 128 : 0)
  return t.write_shift(1, r), t.write_shift(1, 0), t
}
var ba = 2,
  rr = 3,
  Kt = 11,
  a0 = 19,
  jt = 64,
  Cf = 65,
  Of = 71,
  Df = 4108,
  Rf = 4126,
  Ue = 80,
  Bn = {
    1: { n: 'CodePage', t: ba },
    2: { n: 'Category', t: Ue },
    3: { n: 'PresentationFormat', t: Ue },
    4: { n: 'ByteCount', t: rr },
    5: { n: 'LineCount', t: rr },
    6: { n: 'ParagraphCount', t: rr },
    7: { n: 'SlideCount', t: rr },
    8: { n: 'NoteCount', t: rr },
    9: { n: 'HiddenCount', t: rr },
    10: { n: 'MultimediaClipCount', t: rr },
    11: { n: 'ScaleCrop', t: Kt },
    12: { n: 'HeadingPairs', t: Df },
    13: { n: 'TitlesOfParts', t: Rf },
    14: { n: 'Manager', t: Ue },
    15: { n: 'Company', t: Ue },
    16: { n: 'LinksUpToDate', t: Kt },
    17: { n: 'CharacterCount', t: rr },
    19: { n: 'SharedDoc', t: Kt },
    22: { n: 'HyperlinksChanged', t: Kt },
    23: { n: 'AppVersion', t: rr, p: 'version' },
    24: { n: 'DigSig', t: Cf },
    26: { n: 'ContentType', t: Ue },
    27: { n: 'ContentStatus', t: Ue },
    28: { n: 'Language', t: Ue },
    29: { n: 'Version', t: Ue },
    255: {},
    2147483648: { n: 'Locale', t: a0 },
    2147483651: { n: 'Behavior', t: a0 },
    1919054434: {}
  },
  Un = {
    1: { n: 'CodePage', t: ba },
    2: { n: 'Title', t: Ue },
    3: { n: 'Subject', t: Ue },
    4: { n: 'Author', t: Ue },
    5: { n: 'Keywords', t: Ue },
    6: { n: 'Comments', t: Ue },
    7: { n: 'Template', t: Ue },
    8: { n: 'LastAuthor', t: Ue },
    9: { n: 'RevNumber', t: Ue },
    10: { n: 'EditTime', t: jt },
    11: { n: 'LastPrinted', t: jt },
    12: { n: 'CreatedDate', t: jt },
    13: { n: 'ModifiedDate', t: jt },
    14: { n: 'PageCount', t: rr },
    15: { n: 'WordCount', t: rr },
    16: { n: 'CharCount', t: rr },
    17: { n: 'Thumbnail', t: Of },
    18: { n: 'Application', t: Ue },
    19: { n: 'DocSecurity', t: rr },
    255: {},
    2147483648: { n: 'Locale', t: a0 },
    2147483651: { n: 'Behavior', t: a0 },
    1919054434: {}
  }
function If(e) {
  return e.map(function (t) {
    return [(t >> 16) & 255, (t >> 8) & 255, t & 255]
  })
}
var Nf = If([
    0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 0, 16777215, 16711680, 65280, 255,
    16776960, 16711935, 65535, 8388608, 32768, 128, 8421376, 8388736, 32896, 12632256, 8421504,
    10066431, 10040166, 16777164, 13434879, 6684774, 16744576, 26316, 13421823, 128, 16711935,
    16776960, 65535, 8388736, 8388608, 32896, 255, 52479, 13434879, 13434828, 16777113, 10079487,
    16751052, 13408767, 16764057, 3368703, 3394764, 10079232, 16763904, 16750848, 16737792, 6710937,
    9868950, 13158, 3381606, 13056, 3355392, 10040064, 10040166, 3355545, 3355443, 16777215, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
  ]),
  kf = Qe(Nf),
  Bt = {
    0: '#NULL!',
    7: '#DIV/0!',
    15: '#VALUE!',
    23: '#REF!',
    29: '#NAME?',
    36: '#NUM!',
    42: '#N/A',
    43: '#GETTING_DATA',
    255: '#WTF?'
  },
  Pf = {
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml': 'workbooks',
    'application/vnd.ms-excel.sheet.macroEnabled.main+xml': 'workbooks',
    'application/vnd.ms-excel.sheet.binary.macroEnabled.main': 'workbooks',
    'application/vnd.ms-excel.addin.macroEnabled.main+xml': 'workbooks',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml': 'workbooks',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml': 'sheets',
    'application/vnd.ms-excel.worksheet': 'sheets',
    'application/vnd.ms-excel.binIndexWs': 'TODO',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml': 'charts',
    'application/vnd.ms-excel.chartsheet': 'charts',
    'application/vnd.ms-excel.macrosheet+xml': 'macros',
    'application/vnd.ms-excel.macrosheet': 'macros',
    'application/vnd.ms-excel.intlmacrosheet': 'TODO',
    'application/vnd.ms-excel.binIndexMs': 'TODO',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml': 'dialogs',
    'application/vnd.ms-excel.dialogsheet': 'dialogs',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml': 'strs',
    'application/vnd.ms-excel.sharedStrings': 'strs',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml': 'styles',
    'application/vnd.ms-excel.styles': 'styles',
    'application/vnd.openxmlformats-package.core-properties+xml': 'coreprops',
    'application/vnd.openxmlformats-officedocument.custom-properties+xml': 'custprops',
    'application/vnd.openxmlformats-officedocument.extended-properties+xml': 'extprops',
    'application/vnd.openxmlformats-officedocument.customXmlProperties+xml': 'TODO',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty': 'TODO',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml': 'comments',
    'application/vnd.ms-excel.comments': 'comments',
    'application/vnd.ms-excel.threadedcomments+xml': 'threadedcomments',
    'application/vnd.ms-excel.person+xml': 'people',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml': 'metadata',
    'application/vnd.ms-excel.sheetMetadata': 'metadata',
    'application/vnd.ms-excel.pivotTable': 'TODO',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml': 'TODO',
    'application/vnd.openxmlformats-officedocument.drawingml.chart+xml': 'TODO',
    'application/vnd.ms-office.chartcolorstyle+xml': 'TODO',
    'application/vnd.ms-office.chartstyle+xml': 'TODO',
    'application/vnd.ms-office.chartex+xml': 'TODO',
    'application/vnd.ms-excel.calcChain': 'calcchains',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml': 'calcchains',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings': 'TODO',
    'application/vnd.ms-office.activeX': 'TODO',
    'application/vnd.ms-office.activeX+xml': 'TODO',
    'application/vnd.ms-excel.attachedToolbars': 'TODO',
    'application/vnd.ms-excel.connections': 'TODO',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml': 'TODO',
    'application/vnd.ms-excel.externalLink': 'links',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml': 'links',
    'application/vnd.ms-excel.pivotCacheDefinition': 'TODO',
    'application/vnd.ms-excel.pivotCacheRecords': 'TODO',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml': 'TODO',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml': 'TODO',
    'application/vnd.ms-excel.queryTable': 'TODO',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml': 'TODO',
    'application/vnd.ms-excel.userNames': 'TODO',
    'application/vnd.ms-excel.revisionHeaders': 'TODO',
    'application/vnd.ms-excel.revisionLog': 'TODO',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml': 'TODO',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml': 'TODO',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml': 'TODO',
    'application/vnd.ms-excel.tableSingleCells': 'TODO',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml': 'TODO',
    'application/vnd.ms-excel.slicer': 'TODO',
    'application/vnd.ms-excel.slicerCache': 'TODO',
    'application/vnd.ms-excel.slicer+xml': 'TODO',
    'application/vnd.ms-excel.slicerCache+xml': 'TODO',
    'application/vnd.ms-excel.wsSortMap': 'TODO',
    'application/vnd.ms-excel.table': 'TODO',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml': 'TODO',
    'application/vnd.openxmlformats-officedocument.theme+xml': 'themes',
    'application/vnd.openxmlformats-officedocument.themeOverride+xml': 'TODO',
    'application/vnd.ms-excel.Timeline+xml': 'TODO',
    'application/vnd.ms-excel.TimelineCache+xml': 'TODO',
    'application/vnd.ms-office.vbaProject': 'vba',
    'application/vnd.ms-office.vbaProjectSignature': 'TODO',
    'application/vnd.ms-office.volatileDependencies': 'TODO',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml': 'TODO',
    'application/vnd.ms-excel.controlproperties+xml': 'TODO',
    'application/vnd.openxmlformats-officedocument.model+data': 'TODO',
    'application/vnd.ms-excel.Survey+xml': 'TODO',
    'application/vnd.openxmlformats-officedocument.drawing+xml': 'drawings',
    'application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml': 'TODO',
    'application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml': 'TODO',
    'application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml': 'TODO',
    'application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml': 'TODO',
    'application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml': 'TODO',
    'application/vnd.openxmlformats-officedocument.vmlDrawing': 'TODO',
    'application/vnd.openxmlformats-package.relationships+xml': 'rels',
    'application/vnd.openxmlformats-officedocument.oleObject': 'TODO',
    'image/png': 'TODO',
    sheet: 'js'
  },
  Yt = {
    workbooks: {
      xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml',
      xlsm: 'application/vnd.ms-excel.sheet.macroEnabled.main+xml',
      xlsb: 'application/vnd.ms-excel.sheet.binary.macroEnabled.main',
      xlam: 'application/vnd.ms-excel.addin.macroEnabled.main+xml',
      xltx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml'
    },
    strs: {
      xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml',
      xlsb: 'application/vnd.ms-excel.sharedStrings'
    },
    comments: {
      xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml',
      xlsb: 'application/vnd.ms-excel.comments'
    },
    sheets: {
      xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml',
      xlsb: 'application/vnd.ms-excel.worksheet'
    },
    charts: {
      xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml',
      xlsb: 'application/vnd.ms-excel.chartsheet'
    },
    dialogs: {
      xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml',
      xlsb: 'application/vnd.ms-excel.dialogsheet'
    },
    macros: {
      xlsx: 'application/vnd.ms-excel.macrosheet+xml',
      xlsb: 'application/vnd.ms-excel.macrosheet'
    },
    metadata: {
      xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml',
      xlsb: 'application/vnd.ms-excel.sheetMetadata'
    },
    styles: {
      xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml',
      xlsb: 'application/vnd.ms-excel.styles'
    }
  }
function Wa() {
  return {
    workbooks: [],
    sheets: [],
    charts: [],
    dialogs: [],
    macros: [],
    rels: [],
    strs: [],
    comments: [],
    threadedcomments: [],
    links: [],
    coreprops: [],
    extprops: [],
    custprops: [],
    themes: [],
    styles: [],
    calcchains: [],
    vba: [],
    drawings: [],
    metadata: [],
    people: [],
    TODO: [],
    xmlns: ''
  }
}
function Ha(e, t) {
  var r = Gs(Pf),
    n = [],
    a
  ;(n[n.length] = Re),
    (n[n.length] = j('Types', null, { xmlns: ke.CT, 'xmlns:xsd': ke.xsd, 'xmlns:xsi': ke.xsi })),
    (n = n.concat(
      [
        ['xml', 'application/xml'],
        ['bin', 'application/vnd.ms-excel.sheet.binary.macroEnabled.main'],
        ['vml', 'application/vnd.openxmlformats-officedocument.vmlDrawing'],
        ['data', 'application/vnd.openxmlformats-officedocument.model+data'],
        ['bmp', 'image/bmp'],
        ['png', 'image/png'],
        ['gif', 'image/gif'],
        ['emf', 'image/x-emf'],
        ['wmf', 'image/x-wmf'],
        ['jpg', 'image/jpeg'],
        ['jpeg', 'image/jpeg'],
        ['tif', 'image/tiff'],
        ['tiff', 'image/tiff'],
        ['pdf', 'application/pdf'],
        ['rels', 'application/vnd.openxmlformats-package.relationships+xml']
      ].map(function (o) {
        return j('Default', null, { Extension: o[0], ContentType: o[1] })
      })
    ))
  var i = function (o) {
      e[o] &&
        e[o].length > 0 &&
        ((a = e[o][0]),
        (n[n.length] = j('Override', null, {
          PartName: (a[0] == '/' ? '' : '/') + a,
          ContentType: Yt[o][t.bookType] || Yt[o].xlsx
        })))
    },
    s = function (o) {
      ;(e[o] || []).forEach(function (l) {
        n[n.length] = j('Override', null, {
          PartName: (l[0] == '/' ? '' : '/') + l,
          ContentType: Yt[o][t.bookType] || Yt[o].xlsx
        })
      })
    },
    f = function (o) {
      ;(e[o] || []).forEach(function (l) {
        n[n.length] = j('Override', null, {
          PartName: (l[0] == '/' ? '' : '/') + l,
          ContentType: r[o][0]
        })
      })
    }
  return (
    i('workbooks'),
    s('sheets'),
    s('charts'),
    f('themes'),
    ['strs', 'styles'].forEach(i),
    ['coreprops', 'extprops', 'custprops'].forEach(f),
    f('vba'),
    f('comments'),
    f('threadedcomments'),
    f('drawings'),
    s('metadata'),
    f('people'),
    n.length > 2 && ((n[n.length] = '</Types>'), (n[1] = n[1].replace('/>', '>'))),
    n.join('')
  )
}
var he = {
  WB: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument',
  SHEET: 'http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument',
  HLINK: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink',
  VML: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing',
  XPATH: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath',
  XMISS: 'http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing',
  XLINK: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink',
  CXML: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml',
  CXMLP: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps',
  CMNT: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments',
  CORE_PROPS:
    'http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties',
  EXT_PROPS:
    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties',
  CUST_PROPS:
    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties',
  SST: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings',
  STY: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles',
  THEME: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme',
  CHART: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart',
  CHARTEX: 'http://schemas.microsoft.com/office/2014/relationships/chartEx',
  CS: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet',
  WS: [
    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet',
    'http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet'
  ],
  DS: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet',
  MS: 'http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet',
  IMG: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/image',
  DRAW: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing',
  XLMETA: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata',
  TCMNT: 'http://schemas.microsoft.com/office/2017/10/relationships/threadedComment',
  PEOPLE: 'http://schemas.microsoft.com/office/2017/10/relationships/person',
  VBA: 'http://schemas.microsoft.com/office/2006/relationships/vbaProject'
}
function Va(e) {
  var t = e.lastIndexOf('/')
  return e.slice(0, t + 1) + '_rels/' + e.slice(t + 1) + '.rels'
}
function ft(e) {
  var t = [Re, j('Relationships', null, { xmlns: ke.RELS })]
  return (
    Ve(e['!id']).forEach(function (r) {
      t[t.length] = j('Relationship', null, e['!id'][r])
    }),
    t.length > 2 && ((t[t.length] = '</Relationships>'), (t[1] = t[1].replace('/>', '>'))),
    t.join('')
  )
}
function de(e, t, r, n, a, i) {
  if ((a || (a = {}), e['!id'] || (e['!id'] = {}), e['!idx'] || (e['!idx'] = 1), t < 0))
    for (t = e['!idx']; e['!id']['rId' + t]; ++t);
  if (
    ((e['!idx'] = t + 1),
    (a.Id = 'rId' + t),
    (a.Type = n),
    (a.Target = r),
    i
      ? (a.TargetMode = i)
      : [he.HLINK, he.XPATH, he.XMISS].indexOf(a.Type) > -1 && (a.TargetMode = 'External'),
    e['!id'][a.Id])
  )
    throw new Error('Cannot rewrite rId ' + t)
  return (e['!id'][a.Id] = a), (e[('/' + a.Target).replace('//', '/')] = a), t
}
function Lf(e) {
  var t = [Re]
  t.push(`<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2">
`),
    t.push(`  <manifest:file-entry manifest:full-path="/" manifest:version="1.2" manifest:media-type="application/vnd.oasis.opendocument.spreadsheet"/>
`)
  for (var r = 0; r < e.length; ++r)
    t.push(
      '  <manifest:file-entry manifest:full-path="' +
        e[r][0] +
        '" manifest:media-type="' +
        e[r][1] +
        `"/>
`
    )
  return t.push('</manifest:manifest>'), t.join('')
}
function bn(e, t, r) {
  return [
    '  <rdf:Description rdf:about="' +
      e +
      `">
`,
    '    <rdf:type rdf:resource="http://docs.oasis-open.org/ns/office/1.2/meta/' +
      (r || 'odf') +
      '#' +
      t +
      `"/>
`,
    `  </rdf:Description>
`
  ].join('')
}
function Mf(e, t) {
  return [
    '  <rdf:Description rdf:about="' +
      e +
      `">
`,
    '    <ns0:hasPart xmlns:ns0="http://docs.oasis-open.org/ns/office/1.2/meta/pkg#" rdf:resource="' +
      t +
      `"/>
`,
    `  </rdf:Description>
`
  ].join('')
}
function Bf(e) {
  var t = [Re]
  t.push(`<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
`)
  for (var r = 0; r != e.length; ++r) t.push(bn(e[r][0], e[r][1])), t.push(Mf('', e[r][0]))
  return t.push(bn('', 'Document', 'pkg')), t.push('</rdf:RDF>'), t.join('')
}
function Ga() {
  return (
    '<office:document-meta xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xlink="http://www.w3.org/1999/xlink" office:version="1.2"><office:meta><meta:generator>SheetJS ' +
    Jt.version +
    '</meta:generator></office:meta></office:document-meta>'
  )
}
var Xr = [
  ['cp:category', 'Category'],
  ['cp:contentStatus', 'ContentStatus'],
  ['cp:keywords', 'Keywords'],
  ['cp:lastModifiedBy', 'LastAuthor'],
  ['cp:lastPrinted', 'LastPrinted'],
  ['cp:revision', 'RevNumber'],
  ['cp:version', 'Version'],
  ['dc:creator', 'Author'],
  ['dc:description', 'Comments'],
  ['dc:identifier', 'Identifier'],
  ['dc:language', 'Language'],
  ['dc:subject', 'Subject'],
  ['dc:title', 'Title'],
  ['dcterms:created', 'CreatedDate', 'date'],
  ['dcterms:modified', 'ModifiedDate', 'date']
]
function y0(e, t, r, n, a) {
  a[e] != null ||
    t == null ||
    t === '' ||
    ((a[e] = t), (t = ve(t)), (n[n.length] = r ? j(e, t, r) : We(e, t)))
}
function Xa(e, t) {
  var r = t || {},
    n = [
      Re,
      j('cp:coreProperties', null, {
        'xmlns:cp': ke.CORE_PROPS,
        'xmlns:dc': ke.dc,
        'xmlns:dcterms': ke.dcterms,
        'xmlns:dcmitype': ke.dcmitype,
        'xmlns:xsi': ke.xsi
      })
    ],
    a = {}
  if (!e && !r.Props) return n.join('')
  e &&
    (e.CreatedDate != null &&
      y0(
        'dcterms:created',
        typeof e.CreatedDate == 'string' ? e.CreatedDate : k0(e.CreatedDate, r.WTF),
        { 'xsi:type': 'dcterms:W3CDTF' },
        n,
        a
      ),
    e.ModifiedDate != null &&
      y0(
        'dcterms:modified',
        typeof e.ModifiedDate == 'string' ? e.ModifiedDate : k0(e.ModifiedDate, r.WTF),
        { 'xsi:type': 'dcterms:W3CDTF' },
        n,
        a
      ))
  for (var i = 0; i != Xr.length; ++i) {
    var s = Xr[i],
      f = r.Props && r.Props[s[1]] != null ? r.Props[s[1]] : e ? e[s[1]] : null
    f === !0 ? (f = '1') : f === !1 ? (f = '0') : typeof f == 'number' && (f = String(f)),
      f != null && y0(s[0], f, null, n, a)
  }
  return (
    n.length > 2 && ((n[n.length] = '</cp:coreProperties>'), (n[1] = n[1].replace('/>', '>'))),
    n.join('')
  )
}
var lt = [
    ['Application', 'Application', 'string'],
    ['AppVersion', 'AppVersion', 'string'],
    ['Company', 'Company', 'string'],
    ['DocSecurity', 'DocSecurity', 'string'],
    ['Manager', 'Manager', 'string'],
    ['HyperlinksChanged', 'HyperlinksChanged', 'bool'],
    ['SharedDoc', 'SharedDoc', 'bool'],
    ['LinksUpToDate', 'LinksUpToDate', 'bool'],
    ['ScaleCrop', 'ScaleCrop', 'bool'],
    ['HeadingPairs', 'HeadingPairs', 'raw'],
    ['TitlesOfParts', 'TitlesOfParts', 'raw']
  ],
  za = ['Worksheets', 'SheetNames', 'NamedRanges', 'DefinedNames', 'Chartsheets', 'ChartNames']
function Ka(e) {
  var t = [],
    r = j
  return (
    e || (e = {}),
    (e.Application = 'SheetJS'),
    (t[t.length] = Re),
    (t[t.length] = j('Properties', null, { xmlns: ke.EXT_PROPS, 'xmlns:vt': ke.vt })),
    lt.forEach(function (n) {
      if (e[n[1]] !== void 0) {
        var a
        switch (n[2]) {
          case 'string':
            a = ve(String(e[n[1]]))
            break
          case 'bool':
            a = e[n[1]] ? 'true' : 'false'
            break
        }
        a !== void 0 && (t[t.length] = r(n[0], a))
      }
    }),
    (t[t.length] = r(
      'HeadingPairs',
      r(
        'vt:vector',
        r('vt:variant', '<vt:lpstr>Worksheets</vt:lpstr>') +
          r('vt:variant', r('vt:i4', String(e.Worksheets))),
        { size: 2, baseType: 'variant' }
      )
    )),
    (t[t.length] = r(
      'TitlesOfParts',
      r(
        'vt:vector',
        e.SheetNames.map(function (n) {
          return '<vt:lpstr>' + ve(n) + '</vt:lpstr>'
        }).join(''),
        { size: e.Worksheets, baseType: 'lpstr' }
      )
    )),
    t.length > 2 && ((t[t.length] = '</Properties>'), (t[1] = t[1].replace('/>', '>'))),
    t.join('')
  )
}
function ja(e) {
  var t = [Re, j('Properties', null, { xmlns: ke.CUST_PROPS, 'xmlns:vt': ke.vt })]
  if (!e) return t.join('')
  var r = 1
  return (
    Ve(e).forEach(function (a) {
      ++r,
        (t[t.length] = j('property', ef(e[a], !0), {
          fmtid: '{D5CDD505-2E9C-101B-9397-08002B2CF9AE}',
          pid: r,
          name: ve(a)
        }))
    }),
    t.length > 2 && ((t[t.length] = '</Properties>'), (t[1] = t[1].replace('/>', '>'))),
    t.join('')
  )
}
var Wn = {
  Title: 'Title',
  Subject: 'Subject',
  Author: 'Author',
  Keywords: 'Keywords',
  Comments: 'Description',
  LastAuthor: 'LastAuthor',
  RevNumber: 'Revision',
  Application: 'AppName',
  LastPrinted: 'LastPrinted',
  CreatedDate: 'Created',
  ModifiedDate: 'LastSaved',
  Category: 'Category',
  Manager: 'Manager',
  Company: 'Company',
  AppVersion: 'Version',
  ContentStatus: 'ContentStatus',
  Identifier: 'Identifier',
  Language: 'Language'
}
function Uf(e, t) {
  var r = []
  return (
    Ve(Wn)
      .map(function (n) {
        for (var a = 0; a < Xr.length; ++a) if (Xr[a][1] == n) return Xr[a]
        for (a = 0; a < lt.length; ++a) if (lt[a][1] == n) return lt[a]
        throw n
      })
      .forEach(function (n) {
        if (e[n[1]] != null) {
          var a = t && t.Props && t.Props[n[1]] != null ? t.Props[n[1]] : e[n[1]]
          switch (n[2]) {
            case 'date':
              a = new Date(a).toISOString().replace(/\.\d*Z/, 'Z')
              break
          }
          typeof a == 'number'
            ? (a = String(a))
            : a === !0 || a === !1
            ? (a = a ? '1' : '0')
            : a instanceof Date && (a = new Date(a).toISOString().replace(/\.\d*Z/, '')),
            r.push(We(Wn[n[1]] || n[1], a))
        }
      }),
    j('DocumentProperties', r.join(''), { xmlns: nr.o })
  )
}
function bf(e, t) {
  var r = ['Worksheets', 'SheetNames'],
    n = 'CustomDocumentProperties',
    a = []
  return (
    e &&
      Ve(e).forEach(function (i) {
        if (Object.prototype.hasOwnProperty.call(e, i)) {
          for (var s = 0; s < Xr.length; ++s) if (i == Xr[s][1]) return
          for (s = 0; s < lt.length; ++s) if (i == lt[s][1]) return
          for (s = 0; s < r.length; ++s) if (i == r[s]) return
          var f = e[i],
            o = 'string'
          typeof f == 'number'
            ? ((o = 'float'), (f = String(f)))
            : f === !0 || f === !1
            ? ((o = 'boolean'), (f = f ? '1' : '0'))
            : (f = String(f)),
            a.push(j(Cn(i), f, { 'dt:dt': o }))
        }
      }),
    t &&
      Ve(t).forEach(function (i) {
        if (
          Object.prototype.hasOwnProperty.call(t, i) &&
          !(e && Object.prototype.hasOwnProperty.call(e, i))
        ) {
          var s = t[i],
            f = 'string'
          typeof s == 'number'
            ? ((f = 'float'), (s = String(s)))
            : s === !0 || s === !1
            ? ((f = 'boolean'), (s = s ? '1' : '0'))
            : s instanceof Date
            ? ((f = 'dateTime.tz'), (s = s.toISOString()))
            : (s = String(s)),
            a.push(j(Cn(i), s, { 'dt:dt': f }))
        }
      }),
    '<' + n + ' xmlns="' + nr.o + '">' + a.join('') + '</' + n + '>'
  )
}
function Wf(e) {
  var t = typeof e == 'string' ? new Date(Date.parse(e)) : e,
    r = t.getTime() / 1e3 + 11644473600,
    n = r % Math.pow(2, 32),
    a = (r - n) / Math.pow(2, 32)
  ;(n *= 1e7), (a *= 1e7)
  var i = (n / Math.pow(2, 32)) | 0
  i > 0 && ((n = n % Math.pow(2, 32)), (a += i))
  var s = B(8)
  return s.write_shift(4, n), s.write_shift(4, a), s
}
function Hn(e, t) {
  var r = B(4),
    n = B(4)
  switch ((r.write_shift(4, e == 80 ? 31 : e), e)) {
    case 3:
      n.write_shift(-4, t)
      break
    case 5:
      ;(n = B(8)), n.write_shift(8, t, 'f')
      break
    case 11:
      n.write_shift(4, t ? 1 : 0)
      break
    case 64:
      n = Wf(t)
      break
    case 31:
    case 80:
      for (
        n = B(4 + 2 * (t.length + 1) + (t.length % 2 ? 0 : 2)),
          n.write_shift(4, t.length + 1),
          n.write_shift(0, t, 'dbcs');
        n.l != n.length;

      )
        n.write_shift(1, 0)
      break
    default:
      throw new Error('TypedPropertyValue unrecognized type ' + e + ' ' + t)
  }
  return be([r, n])
}
var Ya = ['CodePage', 'Thumbnail', '_PID_LINKBASE', '_PID_HLINKS', 'SystemIdentifier', 'FMTID']
function Hf(e) {
  switch (typeof e) {
    case 'boolean':
      return 11
    case 'number':
      return (e | 0) == e ? 3 : 5
    case 'string':
      return 31
    case 'object':
      if (e instanceof Date) return 64
      break
  }
  return -1
}
function Vn(e, t, r) {
  var n = B(8),
    a = [],
    i = [],
    s = 8,
    f = 0,
    o = B(8),
    l = B(8)
  if (
    (o.write_shift(4, 2),
    o.write_shift(4, 1200),
    l.write_shift(4, 1),
    i.push(o),
    a.push(l),
    (s += 8 + o.length),
    !t)
  ) {
    ;(l = B(8)), l.write_shift(4, 0), a.unshift(l)
    var c = [B(4)]
    for (c[0].write_shift(4, e.length), f = 0; f < e.length; ++f) {
      var d = e[f][0]
      for (
        o = B(4 + 4 + 2 * (d.length + 1) + (d.length % 2 ? 0 : 2)),
          o.write_shift(4, f + 2),
          o.write_shift(4, d.length + 1),
          o.write_shift(0, d, 'dbcs');
        o.l != o.length;

      )
        o.write_shift(1, 0)
      c.push(o)
    }
    ;(o = be(c)), i.unshift(o), (s += 8 + o.length)
  }
  for (f = 0; f < e.length; ++f)
    if (
      !(t && !t[e[f][0]]) &&
      !(Ya.indexOf(e[f][0]) > -1 || za.indexOf(e[f][0]) > -1) &&
      e[f][1] != null
    ) {
      var x = e[f][1],
        p = 0
      if (t) {
        p = +t[e[f][0]]
        var E = r[p]
        if (E.p == 'version' && typeof x == 'string') {
          var u = x.split('.')
          x = (+u[0] << 16) + (+u[1] || 0)
        }
        o = Hn(E.t, x)
      } else {
        var _ = Hf(x)
        _ == -1 && ((_ = 31), (x = String(x))), (o = Hn(_, x))
      }
      i.push(o), (l = B(8)), l.write_shift(4, t ? p : 2 + f), a.push(l), (s += 8 + o.length)
    }
  var O = 8 * (i.length + 1)
  for (f = 0; f < i.length; ++f) a[f].write_shift(4, O), (O += i[f].length)
  return n.write_shift(4, s), n.write_shift(4, i.length), be([n].concat(a).concat(i))
}
function Gn(e, t, r, n, a, i) {
  var s = B(a ? 68 : 48),
    f = [s]
  s.write_shift(2, 65534),
    s.write_shift(2, 0),
    s.write_shift(4, 842412599),
    s.write_shift(16, _e.utils.consts.HEADER_CLSID, 'hex'),
    s.write_shift(4, a ? 2 : 1),
    s.write_shift(16, t, 'hex'),
    s.write_shift(4, a ? 68 : 48)
  var o = Vn(e, r, n)
  if ((f.push(o), a)) {
    var l = Vn(a, null, null)
    s.write_shift(16, i, 'hex'), s.write_shift(4, 68 + o.length), f.push(l)
  }
  return be(f)
}
function Vf(e, t) {
  t || (t = B(e))
  for (var r = 0; r < e; ++r) t.write_shift(1, 0)
  return t
}
function Gf(e, t) {
  return e.read_shift(t) === 1
}
function $e(e, t) {
  return t || (t = B(2)), t.write_shift(2, +!!e), t
}
function $a(e) {
  return e.read_shift(2, 'u')
}
function or(e, t) {
  return t || (t = B(2)), t.write_shift(2, e), t
}
function Ja(e, t, r) {
  return (
    r || (r = B(2)), r.write_shift(1, t == 'e' ? +e : +!!e), r.write_shift(1, t == 'e' ? 1 : 0), r
  )
}
function Za(e, t, r) {
  var n = e.read_shift(r && r.biff >= 12 ? 2 : 1),
    a = 'sbcs-cont'
  if ((r && r.biff >= 8, !r || r.biff == 8)) {
    var i = e.read_shift(1)
    i && (a = 'dbcs-cont')
  } else r.biff == 12 && (a = 'wstr')
  r.biff >= 2 && r.biff <= 5 && (a = 'cpstr')
  var s = n ? e.read_shift(n, a) : ''
  return s
}
function Xf(e) {
  var t = e.t || '',
    r = B(3 + 0)
  r.write_shift(2, t.length), r.write_shift(1, 1)
  var n = B(2 * t.length)
  n.write_shift(2 * t.length, t, 'utf16le')
  var a = [r, n]
  return be(a)
}
function zf(e, t, r) {
  var n
  if (r) {
    if (r.biff >= 2 && r.biff <= 5) return e.read_shift(t, 'cpstr')
    if (r.biff >= 12) return e.read_shift(t, 'dbcs-cont')
  }
  var a = e.read_shift(1)
  return a === 0 ? (n = e.read_shift(t, 'sbcs-cont')) : (n = e.read_shift(t, 'dbcs-cont')), n
}
function Kf(e, t, r) {
  var n = e.read_shift(r && r.biff == 2 ? 1 : 2)
  return n === 0 ? (e.l++, '') : zf(e, n, r)
}
function jf(e, t, r) {
  if (r.biff > 5) return Kf(e, t, r)
  var n = e.read_shift(1)
  return n === 0 ? (e.l++, '') : e.read_shift(n, r.biff <= 4 || !e.lens ? 'cpstr' : 'sbcs-cont')
}
function qa(e, t, r) {
  return (
    r || (r = B(3 + 2 * e.length)),
    r.write_shift(2, e.length),
    r.write_shift(1, 1),
    r.write_shift(31, e, 'utf16le'),
    r
  )
}
function Xn(e, t) {
  t || (t = B(6 + e.length * 2)), t.write_shift(4, 1 + e.length)
  for (var r = 0; r < e.length; ++r) t.write_shift(2, e.charCodeAt(r))
  return t.write_shift(2, 0), t
}
function Yf(e) {
  var t = B(512),
    r = 0,
    n = e.Target
  n.slice(0, 7) == 'file://' && (n = n.slice(7))
  var a = n.indexOf('#'),
    i = a > -1 ? 31 : 23
  switch (n.charAt(0)) {
    case '#':
      i = 28
      break
    case '.':
      i &= -3
      break
  }
  t.write_shift(4, 2), t.write_shift(4, i)
  var s = [8, 6815827, 6619237, 4849780, 83]
  for (r = 0; r < s.length; ++r) t.write_shift(4, s[r])
  if (i == 28) (n = n.slice(1)), Xn(n, t)
  else if (i & 2) {
    for (s = 'e0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b'.split(' '), r = 0; r < s.length; ++r)
      t.write_shift(1, parseInt(s[r], 16))
    var f = a > -1 ? n.slice(0, a) : n
    for (t.write_shift(4, 2 * (f.length + 1)), r = 0; r < f.length; ++r)
      t.write_shift(2, f.charCodeAt(r))
    t.write_shift(2, 0), i & 8 && Xn(a > -1 ? n.slice(a + 1) : '', t)
  } else {
    for (s = '03 03 00 00 00 00 00 00 c0 00 00 00 00 00 00 46'.split(' '), r = 0; r < s.length; ++r)
      t.write_shift(1, parseInt(s[r], 16))
    for (var o = 0; n.slice(o * 3, o * 3 + 3) == '../' || n.slice(o * 3, o * 3 + 3) == '..\\'; ) ++o
    for (
      t.write_shift(2, o), t.write_shift(4, n.length - 3 * o + 1), r = 0;
      r < n.length - 3 * o;
      ++r
    )
      t.write_shift(1, n.charCodeAt(r + 3 * o) & 255)
    for (t.write_shift(1, 0), t.write_shift(2, 65535), t.write_shift(2, 57005), r = 0; r < 6; ++r)
      t.write_shift(4, 0)
  }
  return t.slice(0, t.l)
}
function jr(e, t, r, n) {
  return n || (n = B(6)), n.write_shift(2, e), n.write_shift(2, t), n.write_shift(2, r || 0), n
}
function $f(e, t, r) {
  var n = r.biff > 8 ? 4 : 2,
    a = e.read_shift(n),
    i = e.read_shift(n, 'i'),
    s = e.read_shift(n, 'i')
  return [a, i, s]
}
function Jf(e) {
  var t = e.read_shift(2),
    r = e.read_shift(2),
    n = e.read_shift(2),
    a = e.read_shift(2)
  return { s: { c: n, r: t }, e: { c: a, r } }
}
function Qa(e, t) {
  return (
    t || (t = B(8)),
    t.write_shift(2, e.s.r),
    t.write_shift(2, e.e.r),
    t.write_shift(2, e.s.c),
    t.write_shift(2, e.e.c),
    t
  )
}
function $0(e, t, r) {
  var n = 1536,
    a = 16
  switch (r.bookType) {
    case 'biff8':
      break
    case 'biff5':
      ;(n = 1280), (a = 8)
      break
    case 'biff4':
      ;(n = 4), (a = 6)
      break
    case 'biff3':
      ;(n = 3), (a = 6)
      break
    case 'biff2':
      ;(n = 2), (a = 4)
      break
    case 'xla':
      break
    default:
      throw new Error('unsupported BIFF version')
  }
  var i = B(a)
  return (
    i.write_shift(2, n),
    i.write_shift(2, t),
    a > 4 && i.write_shift(2, 29282),
    a > 6 && i.write_shift(2, 1997),
    a > 8 &&
      (i.write_shift(2, 49161), i.write_shift(2, 1), i.write_shift(2, 1798), i.write_shift(2, 0)),
    i
  )
}
function Zf(e, t) {
  var r = !t || t.biff == 8,
    n = B(r ? 112 : 54)
  for (
    n.write_shift(t.biff == 8 ? 2 : 1, 7),
      r && n.write_shift(1, 0),
      n.write_shift(4, 859007059),
      n.write_shift(4, 5458548 | (r ? 0 : 536870912));
    n.l < n.length;

  )
    n.write_shift(1, r ? 0 : 32)
  return n
}
function qf(e, t) {
  var r = !t || t.biff >= 8 ? 2 : 1,
    n = B(8 + r * e.name.length)
  n.write_shift(4, e.pos),
    n.write_shift(1, e.hs || 0),
    n.write_shift(1, e.dt),
    n.write_shift(1, e.name.length),
    t.biff >= 8 && n.write_shift(1, 1),
    n.write_shift(r * e.name.length, e.name, t.biff < 8 ? 'sbcs' : 'utf16le')
  var a = n.slice(0, n.l)
  return (a.l = n.l), a
}
function Qf(e, t) {
  var r = B(8)
  r.write_shift(4, e.Count), r.write_shift(4, e.Unique)
  for (var n = [], a = 0; a < e.length; ++a) n[a] = Xf(e[a])
  var i = be([r].concat(n))
  return (
    (i.parts = [r.length].concat(
      n.map(function (s) {
        return s.length
      })
    )),
    i
  )
}
function el() {
  var e = B(18)
  return (
    e.write_shift(2, 0),
    e.write_shift(2, 0),
    e.write_shift(2, 29280),
    e.write_shift(2, 17600),
    e.write_shift(2, 56),
    e.write_shift(2, 0),
    e.write_shift(2, 0),
    e.write_shift(2, 1),
    e.write_shift(2, 500),
    e
  )
}
function rl(e) {
  var t = B(18),
    r = 1718
  return (
    e && e.RTL && (r |= 64),
    t.write_shift(2, r),
    t.write_shift(4, 0),
    t.write_shift(4, 64),
    t.write_shift(4, 0),
    t.write_shift(4, 0),
    t
  )
}
function tl(e, t) {
  var r = e.name || 'Arial',
    n = t && t.biff == 5,
    a = n ? 15 + r.length : 16 + 2 * r.length,
    i = B(a)
  return (
    i.write_shift(2, (e.sz || 12) * 20),
    i.write_shift(4, 0),
    i.write_shift(2, 400),
    i.write_shift(4, 0),
    i.write_shift(2, 0),
    i.write_shift(1, r.length),
    n || i.write_shift(1, 1),
    i.write_shift((n ? 1 : 2) * r.length, r, n ? 'sbcs' : 'utf16le'),
    i
  )
}
function nl(e, t, r, n) {
  var a = B(10)
  return jr(e, t, n, a), a.write_shift(4, r), a
}
function al(e, t, r, n, a) {
  var i = !a || a.biff == 8,
    s = B(6 + 2 + +i + (1 + i) * r.length)
  return (
    jr(e, t, n, s),
    s.write_shift(2, r.length),
    i && s.write_shift(1, 1),
    s.write_shift((1 + i) * r.length, r, i ? 'utf16le' : 'sbcs'),
    s
  )
}
function il(e, t, r, n) {
  var a = r && r.biff == 5
  n || (n = B(a ? 3 + t.length : 5 + 2 * t.length)),
    n.write_shift(2, e),
    n.write_shift(a ? 1 : 2, t.length),
    a || n.write_shift(1, 1),
    n.write_shift((a ? 1 : 2) * t.length, t, a ? 'sbcs' : 'utf16le')
  var i = n.length > n.l ? n.slice(0, n.l) : n
  return i.l == null && (i.l = i.length), i
}
function sl(e, t) {
  var r = t.biff == 8 || !t.biff ? 4 : 2,
    n = B(2 * r + 6)
  return (
    n.write_shift(r, e.s.r),
    n.write_shift(r, e.e.r + 1),
    n.write_shift(2, e.s.c),
    n.write_shift(2, e.e.c + 1),
    n.write_shift(2, 0),
    n
  )
}
function zn(e, t, r, n) {
  var a = r && r.biff == 5
  n || (n = B(a ? 16 : 20)),
    n.write_shift(2, 0),
    e.style
      ? (n.write_shift(2, e.numFmtId || 0), n.write_shift(2, 65524))
      : (n.write_shift(2, e.numFmtId || 0), n.write_shift(2, t << 4))
  var i = 0
  return (
    e.numFmtId > 0 && a && (i |= 1024),
    n.write_shift(4, i),
    n.write_shift(4, 0),
    a || n.write_shift(4, 0),
    n.write_shift(2, 0),
    n
  )
}
function fl(e) {
  var t = B(8)
  return (
    t.write_shift(4, 0),
    t.write_shift(2, e[0] ? e[0] + 1 : 0),
    t.write_shift(2, e[1] ? e[1] + 1 : 0),
    t
  )
}
function ll(e, t, r, n, a, i) {
  var s = B(8)
  return jr(e, t, n, s), Ja(r, i, s), s
}
function ol(e, t, r, n) {
  var a = B(14)
  return jr(e, t, n, a), Kr(r, a), a
}
function cl(e, t, r) {
  if (r.biff < 8) return hl(e, t, r)
  for (var n = [], a = e.l + t, i = e.read_shift(r.biff > 8 ? 4 : 2); i-- !== 0; )
    n.push($f(e, r.biff > 8 ? 12 : 6, r))
  if (e.l != a) throw new Error('Bad ExternSheet: ' + e.l + ' != ' + a)
  return n
}
function hl(e, t, r) {
  e[e.l + 1] == 3 && e[e.l]++
  var n = Za(e, t, r)
  return n.charCodeAt(0) == 3 ? n.slice(1) : n
}
function ul(e) {
  var t = B(2 + e.length * 8)
  t.write_shift(2, e.length)
  for (var r = 0; r < e.length; ++r) Qa(e[r], t)
  return t
}
function xl(e) {
  var t = B(24),
    r = Pe(e[0])
  t.write_shift(2, r.r), t.write_shift(2, r.r), t.write_shift(2, r.c), t.write_shift(2, r.c)
  for (var n = 'd0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b'.split(' '), a = 0; a < 16; ++a)
    t.write_shift(1, parseInt(n[a], 16))
  return be([t, Yf(e[1])])
}
function pl(e) {
  var t = e[1].Tooltip,
    r = B(10 + 2 * (t.length + 1))
  r.write_shift(2, 2048)
  var n = Pe(e[0])
  r.write_shift(2, n.r), r.write_shift(2, n.r), r.write_shift(2, n.c), r.write_shift(2, n.c)
  for (var a = 0; a < t.length; ++a) r.write_shift(2, t.charCodeAt(a))
  return r.write_shift(2, 0), r
}
function dl(e) {
  return e || (e = B(4)), e.write_shift(2, 1), e.write_shift(2, 1), e
}
function vl(e, t, r) {
  if (!r.cellStyles) return Tr(e, t)
  var n = r && r.biff >= 12 ? 4 : 2,
    a = e.read_shift(n),
    i = e.read_shift(n),
    s = e.read_shift(n),
    f = e.read_shift(n),
    o = e.read_shift(2)
  n == 2 && (e.l += 2)
  var l = { s: a, e: i, w: s, ixfe: f, flags: o }
  return (r.biff >= 5 || !r.biff) && (l.level = (o >> 8) & 7), l
}
function ml(e, t) {
  var r = B(12)
  r.write_shift(2, t), r.write_shift(2, t), r.write_shift(2, e.width * 256), r.write_shift(2, 0)
  var n = 0
  return (
    e.hidden && (n |= 1),
    r.write_shift(1, n),
    (n = e.level || 0),
    r.write_shift(1, n),
    r.write_shift(2, 0),
    r
  )
}
function gl(e) {
  for (var t = B(2 * e), r = 0; r < e; ++r) t.write_shift(2, r + 1)
  return t
}
function _l(e, t, r) {
  var n = B(15)
  return bt(n, e, t), n.write_shift(8, r, 'f'), n
}
function Tl(e, t, r) {
  var n = B(9)
  return bt(n, e, t), n.write_shift(2, r), n
}
var El = (function () {
    var e = {
        1: 437,
        2: 850,
        3: 1252,
        4: 1e4,
        100: 852,
        101: 866,
        102: 865,
        103: 861,
        104: 895,
        105: 620,
        106: 737,
        107: 857,
        120: 950,
        121: 949,
        122: 936,
        123: 932,
        124: 874,
        125: 1255,
        126: 1256,
        150: 10007,
        151: 10029,
        152: 10006,
        200: 1250,
        201: 1251,
        202: 1254,
        203: 1253,
        0: 20127,
        8: 865,
        9: 437,
        10: 850,
        11: 437,
        13: 437,
        14: 850,
        15: 437,
        16: 850,
        17: 437,
        18: 850,
        19: 932,
        20: 850,
        21: 437,
        22: 850,
        23: 865,
        24: 437,
        25: 437,
        26: 850,
        27: 437,
        28: 863,
        29: 850,
        31: 852,
        34: 852,
        35: 852,
        36: 860,
        37: 850,
        38: 866,
        55: 850,
        64: 852,
        77: 936,
        78: 949,
        79: 950,
        80: 874,
        87: 1252,
        88: 1252,
        89: 1252,
        108: 863,
        134: 737,
        135: 852,
        136: 857,
        204: 1257,
        255: 16969
      },
      t = U0({
        1: 437,
        2: 850,
        3: 1252,
        4: 1e4,
        100: 852,
        101: 866,
        102: 865,
        103: 861,
        104: 895,
        105: 620,
        106: 737,
        107: 857,
        120: 950,
        121: 949,
        122: 936,
        123: 932,
        124: 874,
        125: 1255,
        126: 1256,
        150: 10007,
        151: 10029,
        152: 10006,
        200: 1250,
        201: 1251,
        202: 1254,
        203: 1253,
        0: 20127
      })
    function r(f, o) {
      var l = [],
        c = zr(1)
      switch (o.type) {
        case 'base64':
          c = pr(Or(f))
          break
        case 'binary':
          c = pr(f)
          break
        case 'buffer':
        case 'array':
          c = f
          break
      }
      tr(c, 0)
      var d = c.read_shift(1),
        x = !!(d & 136),
        p = !1,
        E = !1
      switch (d) {
        case 2:
          break
        case 3:
          break
        case 48:
          ;(p = !0), (x = !0)
          break
        case 49:
          ;(p = !0), (x = !0)
          break
        case 131:
          break
        case 139:
          break
        case 140:
          E = !0
          break
        case 245:
          break
        default:
          throw new Error('DBF Unsupported Version: ' + d.toString(16))
      }
      var u = 0,
        _ = 521
      d == 2 && (u = c.read_shift(2)),
        (c.l += 3),
        d != 2 && (u = c.read_shift(4)),
        u > 1048576 && (u = 1e6),
        d != 2 && (_ = c.read_shift(2))
      var O = c.read_shift(2),
        R = o.codepage || 1252
      d != 2 &&
        ((c.l += 16), c.read_shift(1), c[c.l] !== 0 && (R = e[c[c.l]]), (c.l += 1), (c.l += 2)),
        E && (c.l += 36)
      for (
        var y = [],
          M = {},
          Y = Math.min(c.length, d == 2 ? 521 : _ - 10 - (p ? 264 : 0)),
          ee = E ? 32 : 11;
        c.l < Y && c[c.l] != 13;

      )
        switch (
          ((M = {}),
          (M.name = Vr.utils.decode(R, c.slice(c.l, c.l + ee)).replace(/[\u0000\r\n].*$/g, '')),
          (c.l += ee),
          (M.type = String.fromCharCode(c.read_shift(1))),
          d != 2 && !E && (M.offset = c.read_shift(4)),
          (M.len = c.read_shift(1)),
          d == 2 && (M.offset = c.read_shift(2)),
          (M.dec = c.read_shift(1)),
          M.name.length && y.push(M),
          d != 2 && (c.l += E ? 13 : 14),
          M.type)
        ) {
          case 'B':
            ;(!p || M.len != 8) && o.WTF && console.log('Skipping ' + M.name + ':' + M.type)
            break
          case 'G':
          case 'P':
            o.WTF && console.log('Skipping ' + M.name + ':' + M.type)
            break
          case '+':
          case '0':
          case '@':
          case 'C':
          case 'D':
          case 'F':
          case 'I':
          case 'L':
          case 'M':
          case 'N':
          case 'O':
          case 'T':
          case 'Y':
            break
          default:
            throw new Error('Unknown Field Type: ' + M.type)
        }
      if ((c[c.l] !== 13 && (c.l = _ - 1), c.read_shift(1) !== 13))
        throw new Error('DBF Terminator not found ' + c.l + ' ' + c[c.l])
      c.l = _
      var C = 0,
        b = 0
      for (l[0] = [], b = 0; b != y.length; ++b) l[0][b] = y[b].name
      for (; u-- > 0; ) {
        if (c[c.l] === 42) {
          c.l += O
          continue
        }
        for (++c.l, l[++C] = [], b = 0, b = 0; b != y.length; ++b) {
          var L = c.slice(c.l, c.l + y[b].len)
          ;(c.l += y[b].len), tr(L, 0)
          var V = Vr.utils.decode(R, L)
          switch (y[b].type) {
            case 'C':
              V.trim().length && (l[C][b] = V.replace(/\s+$/, ''))
              break
            case 'D':
              V.length === 8
                ? (l[C][b] = new Date(+V.slice(0, 4), +V.slice(4, 6) - 1, +V.slice(6, 8)))
                : (l[C][b] = V)
              break
            case 'F':
              l[C][b] = parseFloat(V.trim())
              break
            case '+':
            case 'I':
              l[C][b] = E ? L.read_shift(-4, 'i') ^ 2147483648 : L.read_shift(4, 'i')
              break
            case 'L':
              switch (V.trim().toUpperCase()) {
                case 'Y':
                case 'T':
                  l[C][b] = !0
                  break
                case 'N':
                case 'F':
                  l[C][b] = !1
                  break
                case '':
                case '?':
                  break
                default:
                  throw new Error('DBF Unrecognized L:|' + V + '|')
              }
              break
            case 'M':
              if (!x) throw new Error('DBF Unexpected MEMO for type ' + d.toString(16))
              l[C][b] = '##MEMO##' + (E ? parseInt(V.trim(), 10) : L.read_shift(4))
              break
            case 'N':
              ;(V = V.replace(/\u0000/g, '').trim()), V && V != '.' && (l[C][b] = +V || 0)
              break
            case '@':
              l[C][b] = new Date(L.read_shift(-8, 'f') - 621356832e5)
              break
            case 'T':
              l[C][b] = new Date((L.read_shift(4) - 2440588) * 864e5 + L.read_shift(4))
              break
            case 'Y':
              l[C][b] = L.read_shift(4, 'i') / 1e4 + (L.read_shift(4, 'i') / 1e4) * Math.pow(2, 32)
              break
            case 'O':
              l[C][b] = -L.read_shift(-8, 'f')
              break
            case 'B':
              if (p && y[b].len == 8) {
                l[C][b] = L.read_shift(8, 'f')
                break
              }
            case 'G':
            case 'P':
              L.l += y[b].len
              break
            case '0':
              if (y[b].name === '_NullFlags') break
            default:
              throw new Error('DBF Unsupported data type ' + y[b].type)
          }
        }
      }
      if (d != 2 && c.l < c.length && c[c.l++] != 26)
        throw new Error(
          'DBF EOF Marker missing ' + (c.l - 1) + ' of ' + c.length + ' ' + c[c.l - 1].toString(16)
        )
      return o && o.sheetRows && (l = l.slice(0, o.sheetRows)), (o.DBF = y), l
    }
    function n(f, o) {
      var l = o || {}
      l.dateNF || (l.dateNF = 'yyyymmdd')
      var c = ut(r(f, l), l)
      return (
        (c['!cols'] = l.DBF.map(function (d) {
          return { wch: d.len, DBF: d }
        })),
        delete l.DBF,
        c
      )
    }
    function a(f, o) {
      try {
        return Yr(n(f, o), o)
      } catch (l) {
        if (o && o.WTF) throw l
      }
      return { SheetNames: [], Sheets: {} }
    }
    var i = { B: 8, C: 250, L: 1, D: 8, '?': 0, '': 0 }
    function s(f, o) {
      var l = o || {}
      if ((+l.codepage >= 0 && Ot(+l.codepage), l.type == 'string'))
        throw new Error('Cannot write DBF to JS string')
      var c = Ze(),
        d = o0(f, { header: 1, raw: !0, cellDates: !0 }),
        x = d[0],
        p = d.slice(1),
        E = f['!cols'] || [],
        u = 0,
        _ = 0,
        O = 0,
        R = 1
      for (u = 0; u < x.length; ++u) {
        if (((E[u] || {}).DBF || {}).name) {
          ;(x[u] = E[u].DBF.name), ++O
          continue
        }
        if (x[u] != null) {
          if ((++O, typeof x[u] == 'number' && (x[u] = x[u].toString(10)), typeof x[u] != 'string'))
            throw new Error('DBF Invalid column name ' + x[u] + ' |' + typeof x[u] + '|')
          if (x.indexOf(x[u]) !== u) {
            for (_ = 0; _ < 1024; ++_)
              if (x.indexOf(x[u] + '_' + _) == -1) {
                x[u] += '_' + _
                break
              }
          }
        }
      }
      var y = Ee(f['!ref']),
        M = [],
        Y = [],
        ee = []
      for (u = 0; u <= y.e.c - y.s.c; ++u) {
        var C = '',
          b = '',
          L = 0,
          V = []
        for (_ = 0; _ < p.length; ++_) p[_][u] != null && V.push(p[_][u])
        if (V.length == 0 || x[u] == null) {
          M[u] = '?'
          continue
        }
        for (_ = 0; _ < V.length; ++_) {
          switch (typeof V[_]) {
            case 'number':
              b = 'B'
              break
            case 'string':
              b = 'C'
              break
            case 'boolean':
              b = 'L'
              break
            case 'object':
              b = V[_] instanceof Date ? 'D' : 'C'
              break
            default:
              b = 'C'
          }
          ;(L = Math.max(L, String(V[_]).length)), (C = C && C != b ? 'C' : b)
        }
        L > 250 && (L = 250),
          (b = ((E[u] || {}).DBF || {}).type),
          b == 'C' && E[u].DBF.len > L && (L = E[u].DBF.len),
          C == 'B' && b == 'N' && ((C = 'N'), (ee[u] = E[u].DBF.dec), (L = E[u].DBF.len)),
          (Y[u] = C == 'C' || b == 'N' ? L : i[C] || 0),
          (R += Y[u]),
          (M[u] = C)
      }
      var G = c.next(32)
      for (
        G.write_shift(4, 318902576),
          G.write_shift(4, p.length),
          G.write_shift(2, 296 + 32 * O),
          G.write_shift(2, R),
          u = 0;
        u < 4;
        ++u
      )
        G.write_shift(4, 0)
      for (G.write_shift(4, 0 | ((+t[ra] || 3) << 8)), u = 0, _ = 0; u < x.length; ++u)
        if (x[u] != null) {
          var z = c.next(32),
            re = (x[u].slice(-10) + '\0\0\0\0\0\0\0\0\0\0\0').slice(0, 11)
          z.write_shift(1, re, 'sbcs'),
            z.write_shift(1, M[u] == '?' ? 'C' : M[u], 'sbcs'),
            z.write_shift(4, _),
            z.write_shift(1, Y[u] || i[M[u]] || 0),
            z.write_shift(1, ee[u] || 0),
            z.write_shift(1, 2),
            z.write_shift(4, 0),
            z.write_shift(1, 0),
            z.write_shift(4, 0),
            z.write_shift(4, 0),
            (_ += Y[u] || i[M[u]] || 0)
        }
      var ge = c.next(264)
      for (ge.write_shift(4, 13), u = 0; u < 65; ++u) ge.write_shift(4, 0)
      for (u = 0; u < p.length; ++u) {
        var le = c.next(R)
        for (le.write_shift(1, 0), _ = 0; _ < x.length; ++_)
          if (x[_] != null)
            switch (M[_]) {
              case 'L':
                le.write_shift(1, p[u][_] == null ? 63 : p[u][_] ? 84 : 70)
                break
              case 'B':
                le.write_shift(8, p[u][_] || 0, 'f')
                break
              case 'N':
                var Me = '0'
                for (
                  typeof p[u][_] == 'number' && (Me = p[u][_].toFixed(ee[_] || 0)), O = 0;
                  O < Y[_] - Me.length;
                  ++O
                )
                  le.write_shift(1, 32)
                le.write_shift(1, Me, 'sbcs')
                break
              case 'D':
                p[u][_]
                  ? (le.write_shift(4, ('0000' + p[u][_].getFullYear()).slice(-4), 'sbcs'),
                    le.write_shift(2, ('00' + (p[u][_].getMonth() + 1)).slice(-2), 'sbcs'),
                    le.write_shift(2, ('00' + p[u][_].getDate()).slice(-2), 'sbcs'))
                  : le.write_shift(8, '00000000', 'sbcs')
                break
              case 'C':
                var Ce = String(p[u][_] != null ? p[u][_] : '').slice(0, Y[_])
                for (le.write_shift(1, Ce, 'sbcs'), O = 0; O < Y[_] - Ce.length; ++O)
                  le.write_shift(1, 32)
                break
            }
      }
      return c.next(1).write_shift(1, 26), c.end()
    }
    return { to_workbook: a, to_sheet: n, from_sheet: s }
  })(),
  wl = (function () {
    var e = {
        AA: 'À',
        BA: 'Á',
        CA: 'Â',
        DA: 195,
        HA: 'Ä',
        JA: 197,
        AE: 'È',
        BE: 'É',
        CE: 'Ê',
        HE: 'Ë',
        AI: 'Ì',
        BI: 'Í',
        CI: 'Î',
        HI: 'Ï',
        AO: 'Ò',
        BO: 'Ó',
        CO: 'Ô',
        DO: 213,
        HO: 'Ö',
        AU: 'Ù',
        BU: 'Ú',
        CU: 'Û',
        HU: 'Ü',
        Aa: 'à',
        Ba: 'á',
        Ca: 'â',
        Da: 227,
        Ha: 'ä',
        Ja: 229,
        Ae: 'è',
        Be: 'é',
        Ce: 'ê',
        He: 'ë',
        Ai: 'ì',
        Bi: 'í',
        Ci: 'î',
        Hi: 'ï',
        Ao: 'ò',
        Bo: 'ó',
        Co: 'ô',
        Do: 245,
        Ho: 'ö',
        Au: 'ù',
        Bu: 'ú',
        Cu: 'û',
        Hu: 'ü',
        KC: 'Ç',
        Kc: 'ç',
        q: 'æ',
        z: 'œ',
        a: 'Æ',
        j: 'Œ',
        DN: 209,
        Dn: 241,
        Hy: 255,
        S: 169,
        c: 170,
        R: 174,
        'B ': 180,
        0: 176,
        1: 177,
        2: 178,
        3: 179,
        5: 181,
        6: 182,
        7: 183,
        Q: 185,
        k: 186,
        b: 208,
        i: 216,
        l: 222,
        s: 240,
        y: 248,
        '!': 161,
        '"': 162,
        '#': 163,
        '(': 164,
        '%': 165,
        "'": 167,
        'H ': 168,
        '+': 171,
        ';': 187,
        '<': 188,
        '=': 189,
        '>': 190,
        '?': 191,
        '{': 223
      },
      t = new RegExp(
        '\x1BN(' +
          Ve(e)
            .join('|')
            .replace(/\|\|\|/, '|\\||')
            .replace(/([?()+])/g, '\\$1') +
          '|\\|)',
        'gm'
      ),
      r = function (x, p) {
        var E = e[p]
        return typeof E == 'number' ? dn(E) : E
      },
      n = function (x, p, E) {
        var u = ((p.charCodeAt(0) - 32) << 4) | (E.charCodeAt(0) - 48)
        return u == 59 ? x : dn(u)
      }
    e['|'] = 254
    function a(x, p) {
      switch (p.type) {
        case 'base64':
          return i(Or(x), p)
        case 'binary':
          return i(x, p)
        case 'buffer':
          return i(ue && Buffer.isBuffer(x) ? x.toString('binary') : Pt(x), p)
        case 'array':
          return i(p0(x), p)
      }
      throw new Error('Unrecognized type ' + p.type)
    }
    function i(x, p) {
      var E = x.split(/[\n\r]+/),
        u = -1,
        _ = -1,
        O = 0,
        R = 0,
        y = [],
        M = [],
        Y = null,
        ee = {},
        C = [],
        b = [],
        L = [],
        V = 0,
        G
      for (+p.codepage >= 0 && Ot(+p.codepage); O !== E.length; ++O) {
        V = 0
        var z = E[O].trim()
            .replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, n)
            .replace(t, r),
          re = z
            .replace(/;;/g, '\0')
            .split(';')
            .map(function (A) {
              return A.replace(/\u0000/g, ';')
            }),
          ge = re[0],
          le
        if (z.length > 0)
          switch (ge) {
            case 'ID':
              break
            case 'E':
              break
            case 'B':
              break
            case 'O':
              break
            case 'W':
              break
            case 'P':
              re[1].charAt(0) == 'P' && M.push(z.slice(3).replace(/;;/g, ';'))
              break
            case 'C':
              var Me = !1,
                Ce = !1,
                hr = !1,
                Ne = !1,
                sr = -1,
                er = -1
              for (R = 1; R < re.length; ++R)
                switch (re[R].charAt(0)) {
                  case 'A':
                    break
                  case 'X':
                    ;(_ = parseInt(re[R].slice(1)) - 1), (Ce = !0)
                    break
                  case 'Y':
                    for (u = parseInt(re[R].slice(1)) - 1, Ce || (_ = 0), G = y.length; G <= u; ++G)
                      y[G] = []
                    break
                  case 'K':
                    ;(le = re[R].slice(1)),
                      le.charAt(0) === '"'
                        ? (le = le.slice(1, le.length - 1))
                        : le === 'TRUE'
                        ? (le = !0)
                        : le === 'FALSE'
                        ? (le = !1)
                        : isNaN(yr(le))
                        ? isNaN(Rt(le).getDate()) || (le = Je(le))
                        : ((le = yr(le)), Y !== null && xa(Y) && (le = ma(le))),
                      (Me = !0)
                    break
                  case 'E':
                    Ne = !0
                    var S = Eo(re[R].slice(1), { r: u, c: _ })
                    y[u][_] = [y[u][_], S]
                    break
                  case 'S':
                    ;(hr = !0), (y[u][_] = [y[u][_], 'S5S'])
                    break
                  case 'G':
                    break
                  case 'R':
                    sr = parseInt(re[R].slice(1)) - 1
                    break
                  case 'C':
                    er = parseInt(re[R].slice(1)) - 1
                    break
                  default:
                    if (p && p.WTF) throw new Error('SYLK bad record ' + z)
                }
              if (
                (Me &&
                  (y[u][_] && y[u][_].length == 2 ? (y[u][_][0] = le) : (y[u][_] = le), (Y = null)),
                hr)
              ) {
                if (Ne) throw new Error('SYLK shared formula cannot have own formula')
                var P = sr > -1 && y[sr][er]
                if (!P || !P[1]) throw new Error('SYLK shared formula cannot find base')
                y[u][_][1] = wo(P[1], { r: u - sr, c: _ - er })
              }
              break
            case 'F':
              var F = 0
              for (R = 1; R < re.length; ++R)
                switch (re[R].charAt(0)) {
                  case 'X':
                    ;(_ = parseInt(re[R].slice(1)) - 1), ++F
                    break
                  case 'Y':
                    for (u = parseInt(re[R].slice(1)) - 1, G = y.length; G <= u; ++G) y[G] = []
                    break
                  case 'M':
                    V = parseInt(re[R].slice(1)) / 20
                    break
                  case 'F':
                    break
                  case 'G':
                    break
                  case 'P':
                    Y = M[parseInt(re[R].slice(1))]
                    break
                  case 'S':
                    break
                  case 'D':
                    break
                  case 'N':
                    break
                  case 'W':
                    for (
                      L = re[R].slice(1).split(' '), G = parseInt(L[0], 10);
                      G <= parseInt(L[1], 10);
                      ++G
                    )
                      (V = parseInt(L[2], 10)),
                        (b[G - 1] = V === 0 ? { hidden: !0 } : { wch: V }),
                        J0(b[G - 1])
                    break
                  case 'C':
                    ;(_ = parseInt(re[R].slice(1)) - 1), b[_] || (b[_] = {})
                    break
                  case 'R':
                    ;(u = parseInt(re[R].slice(1)) - 1),
                      C[u] || (C[u] = {}),
                      V > 0 ? ((C[u].hpt = V), (C[u].hpx = ai(V))) : V === 0 && (C[u].hidden = !0)
                    break
                  default:
                    if (p && p.WTF) throw new Error('SYLK bad record ' + z)
                }
              F < 1 && (Y = null)
              break
            default:
              if (p && p.WTF) throw new Error('SYLK bad record ' + z)
          }
      }
      return (
        C.length > 0 && (ee['!rows'] = C),
        b.length > 0 && (ee['!cols'] = b),
        p && p.sheetRows && (y = y.slice(0, p.sheetRows)),
        [y, ee]
      )
    }
    function s(x, p) {
      var E = a(x, p),
        u = E[0],
        _ = E[1],
        O = ut(u, p)
      return (
        Ve(_).forEach(function (R) {
          O[R] = _[R]
        }),
        O
      )
    }
    function f(x, p) {
      return Yr(s(x, p), p)
    }
    function o(x, p, E, u) {
      var _ = 'C;Y' + (E + 1) + ';X' + (u + 1) + ';K'
      switch (x.t) {
        case 'n':
          ;(_ += x.v || 0), x.f && !x.F && (_ += ';E' + q0(x.f, { r: E, c: u }))
          break
        case 'b':
          _ += x.v ? 'TRUE' : 'FALSE'
          break
        case 'e':
          _ += x.w || x.v
          break
        case 'd':
          _ += '"' + (x.w || x.v) + '"'
          break
        case 's':
          _ += '"' + x.v.replace(/"/g, '').replace(/;/g, ';;') + '"'
          break
      }
      return _
    }
    function l(x, p) {
      p.forEach(function (E, u) {
        var _ = 'F;W' + (u + 1) + ' ' + (u + 1) + ' '
        E.hidden
          ? (_ += '0')
          : (typeof E.width == 'number' && !E.wpx && (E.wpx = i0(E.width)),
            typeof E.wpx == 'number' && !E.wch && (E.wch = s0(E.wpx)),
            typeof E.wch == 'number' && (_ += Math.round(E.wch))),
          _.charAt(_.length - 1) != ' ' && x.push(_)
      })
    }
    function c(x, p) {
      p.forEach(function (E, u) {
        var _ = 'F;'
        E.hidden
          ? (_ += 'M0;')
          : E.hpt
          ? (_ += 'M' + 20 * E.hpt + ';')
          : E.hpx && (_ += 'M' + 20 * f0(E.hpx) + ';'),
          _.length > 2 && x.push(_ + 'R' + (u + 1))
      })
    }
    function d(x, p) {
      var E = ['ID;PWXL;N;E'],
        u = [],
        _ = Ee(x['!ref']),
        O,
        R = Array.isArray(x),
        y = `\r
`
      E.push('P;PGeneral'),
        E.push('F;P0;DG0G8;M255'),
        x['!cols'] && l(E, x['!cols']),
        x['!rows'] && c(E, x['!rows']),
        E.push(
          'B;Y' +
            (_.e.r - _.s.r + 1) +
            ';X' +
            (_.e.c - _.s.c + 1) +
            ';D' +
            [_.s.c, _.s.r, _.e.c, _.e.r].join(' ')
        )
      for (var M = _.s.r; M <= _.e.r; ++M)
        for (var Y = _.s.c; Y <= _.e.c; ++Y) {
          var ee = me({ r: M, c: Y })
          ;(O = R ? (x[M] || [])[Y] : x[ee]),
            !(!O || (O.v == null && (!O.f || O.F))) && u.push(o(O, x, M, Y))
        }
      return E.join(y) + y + u.join(y) + y + 'E' + y
    }
    return { to_workbook: f, to_sheet: s, from_sheet: d }
  })(),
  Sl = (function () {
    function e(i, s) {
      switch (s.type) {
        case 'base64':
          return t(Or(i), s)
        case 'binary':
          return t(i, s)
        case 'buffer':
          return t(ue && Buffer.isBuffer(i) ? i.toString('binary') : Pt(i), s)
        case 'array':
          return t(p0(i), s)
      }
      throw new Error('Unrecognized type ' + s.type)
    }
    function t(i, s) {
      for (
        var f = i.split(`
`),
          o = -1,
          l = -1,
          c = 0,
          d = [];
        c !== f.length;
        ++c
      ) {
        if (f[c].trim() === 'BOT') {
          ;(d[++o] = []), (l = 0)
          continue
        }
        if (!(o < 0)) {
          var x = f[c].trim().split(','),
            p = x[0],
            E = x[1]
          ++c
          for (var u = f[c] || ''; (u.match(/["]/g) || []).length & 1 && c < f.length - 1; )
            u +=
              `
` + f[++c]
          switch (((u = u.trim()), +p)) {
            case -1:
              if (u === 'BOT') {
                ;(d[++o] = []), (l = 0)
                continue
              } else if (u !== 'EOD') throw new Error('Unrecognized DIF special command ' + u)
              break
            case 0:
              u === 'TRUE'
                ? (d[o][l] = !0)
                : u === 'FALSE'
                ? (d[o][l] = !1)
                : isNaN(yr(E))
                ? isNaN(Rt(E).getDate())
                  ? (d[o][l] = E)
                  : (d[o][l] = Je(E))
                : (d[o][l] = yr(E)),
                ++l
              break
            case 1:
              ;(u = u.slice(1, u.length - 1)),
                (u = u.replace(/""/g, '"')),
                u && u.match(/^=".*"$/) && (u = u.slice(2, -1)),
                (d[o][l++] = u !== '' ? u : null)
              break
          }
          if (u === 'EOD') break
        }
      }
      return s && s.sheetRows && (d = d.slice(0, s.sheetRows)), d
    }
    function r(i, s) {
      return ut(e(i, s), s)
    }
    function n(i, s) {
      return Yr(r(i, s), s)
    }
    var a = (function () {
      var i = function (o, l, c, d, x) {
          o.push(l), o.push(c + ',' + d), o.push('"' + x.replace(/"/g, '""') + '"')
        },
        s = function (o, l, c, d) {
          o.push(l + ',' + c), o.push(l == 1 ? '"' + d.replace(/"/g, '""') + '"' : d)
        }
      return function (o) {
        var l = [],
          c = Ee(o['!ref']),
          d,
          x = Array.isArray(o)
        i(l, 'TABLE', 0, 1, 'sheetjs'),
          i(l, 'VECTORS', 0, c.e.r - c.s.r + 1, ''),
          i(l, 'TUPLES', 0, c.e.c - c.s.c + 1, ''),
          i(l, 'DATA', 0, 0, '')
        for (var p = c.s.r; p <= c.e.r; ++p) {
          s(l, -1, 0, 'BOT')
          for (var E = c.s.c; E <= c.e.c; ++E) {
            var u = me({ r: p, c: E })
            if (((d = x ? (o[p] || [])[E] : o[u]), !d)) {
              s(l, 1, 0, '')
              continue
            }
            switch (d.t) {
              case 'n':
                var _ = d.w
                !_ && d.v != null && (_ = d.v),
                  _ == null
                    ? d.f && !d.F
                      ? s(l, 1, 0, '=' + d.f)
                      : s(l, 1, 0, '')
                    : s(l, 0, _, 'V')
                break
              case 'b':
                s(l, 0, d.v ? 1 : 0, d.v ? 'TRUE' : 'FALSE')
                break
              case 's':
                s(l, 1, 0, isNaN(d.v) ? d.v : '="' + d.v + '"')
                break
              case 'd':
                d.w || (d.w = Pr(d.z || ye[14], qe(Je(d.v)))), s(l, 0, d.w, 'V')
                break
              default:
                s(l, 1, 0, '')
            }
          }
        }
        s(l, -1, 0, 'EOD')
        var O = `\r
`,
          R = l.join(O)
        return R
      }
    })()
    return { to_workbook: n, to_sheet: r, from_sheet: a }
  })(),
  ei = (function () {
    function e(d) {
      return d
        .replace(/\\b/g, '\\')
        .replace(/\\c/g, ':')
        .replace(
          /\\n/g,
          `
`
        )
    }
    function t(d) {
      return d.replace(/\\/g, '\\b').replace(/:/g, '\\c').replace(/\n/g, '\\n')
    }
    function r(d, x) {
      for (
        var p = d.split(`
`),
          E = -1,
          u = -1,
          _ = 0,
          O = [];
        _ !== p.length;
        ++_
      ) {
        var R = p[_].trim().split(':')
        if (R[0] === 'cell') {
          var y = Pe(R[1])
          if (O.length <= y.r) for (E = O.length; E <= y.r; ++E) O[E] || (O[E] = [])
          switch (((E = y.r), (u = y.c), R[2])) {
            case 't':
              O[E][u] = e(R[3])
              break
            case 'v':
              O[E][u] = +R[3]
              break
            case 'vtf':
              var M = R[R.length - 1]
            case 'vtc':
              switch (R[3]) {
                case 'nl':
                  O[E][u] = !!+R[4]
                  break
                default:
                  O[E][u] = +R[4]
                  break
              }
              R[2] == 'vtf' && (O[E][u] = [O[E][u], M])
          }
        }
      }
      return x && x.sheetRows && (O = O.slice(0, x.sheetRows)), O
    }
    function n(d, x) {
      return ut(r(d, x), x)
    }
    function a(d, x) {
      return Yr(n(d, x), x)
    }
    var i = [
        'socialcalc:version:1.5',
        'MIME-Version: 1.0',
        'Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave'
      ].join(`
`),
      s =
        ['--SocialCalcSpreadsheetControlSave', 'Content-type: text/plain; charset=UTF-8'].join(`
`) +
        `
`,
      f = ['# SocialCalc Spreadsheet Control Save', 'part:sheet'].join(`
`),
      o = '--SocialCalcSpreadsheetControlSave--'
    function l(d) {
      if (!d || !d['!ref']) return ''
      for (
        var x = [], p = [], E, u = '', _ = ir(d['!ref']), O = Array.isArray(d), R = _.s.r;
        R <= _.e.r;
        ++R
      )
        for (var y = _.s.c; y <= _.e.c; ++y)
          if (
            ((u = me({ r: R, c: y })),
            (E = O ? (d[R] || [])[y] : d[u]),
            !(!E || E.v == null || E.t === 'z'))
          ) {
            switch (((p = ['cell', u, 't']), E.t)) {
              case 's':
              case 'str':
                p.push(t(E.v))
                break
              case 'n':
                E.f
                  ? ((p[2] = 'vtf'), (p[3] = 'n'), (p[4] = E.v), (p[5] = t(E.f)))
                  : ((p[2] = 'v'), (p[3] = E.v))
                break
              case 'b':
                ;(p[2] = 'vt' + (E.f ? 'f' : 'c')),
                  (p[3] = 'nl'),
                  (p[4] = E.v ? '1' : '0'),
                  (p[5] = t(E.f || (E.v ? 'TRUE' : 'FALSE')))
                break
              case 'd':
                var M = qe(Je(E.v))
                ;(p[2] = 'vtc'),
                  (p[3] = 'nd'),
                  (p[4] = '' + M),
                  (p[5] = E.w || Pr(E.z || ye[14], M))
                break
              case 'e':
                continue
            }
            x.push(p.join(':'))
          }
      return (
        x.push('sheet:c:' + (_.e.c - _.s.c + 1) + ':r:' + (_.e.r - _.s.r + 1) + ':tvf:1'),
        x.push('valueformat:1:text-wiki'),
        x.join(`
`)
      )
    }
    function c(d) {
      return [i, s, f, s, l(d), o].join(`
`)
    }
    return { to_workbook: a, to_sheet: n, from_sheet: c }
  })(),
  Al = (function () {
    function e(c, d, x, p, E) {
      E.raw
        ? (d[x][p] = c)
        : c === '' ||
          (c === 'TRUE'
            ? (d[x][p] = !0)
            : c === 'FALSE'
            ? (d[x][p] = !1)
            : isNaN(yr(c))
            ? isNaN(Rt(c).getDate())
              ? (d[x][p] = c)
              : (d[x][p] = Je(c))
            : (d[x][p] = yr(c)))
    }
    function t(c, d) {
      var x = d || {},
        p = []
      if (!c || c.length === 0) return p
      for (var E = c.split(/[\r\n]/), u = E.length - 1; u >= 0 && E[u].length === 0; ) --u
      for (var _ = 10, O = 0, R = 0; R <= u; ++R)
        (O = E[R].indexOf(' ')), O == -1 ? (O = E[R].length) : O++, (_ = Math.max(_, O))
      for (R = 0; R <= u; ++R) {
        p[R] = []
        var y = 0
        for (e(E[R].slice(0, _).trim(), p, R, y, x), y = 1; y <= (E[R].length - _) / 10 + 1; ++y)
          e(E[R].slice(_ + (y - 1) * 10, _ + y * 10).trim(), p, R, y, x)
      }
      return x.sheetRows && (p = p.slice(0, x.sheetRows)), p
    }
    var r = { 44: ',', 9: '	', 59: ';', 124: '|' },
      n = { 44: 3, 9: 2, 59: 1, 124: 0 }
    function a(c) {
      for (var d = {}, x = !1, p = 0, E = 0; p < c.length; ++p)
        (E = c.charCodeAt(p)) == 34 ? (x = !x) : !x && E in r && (d[E] = (d[E] || 0) + 1)
      E = []
      for (p in d) Object.prototype.hasOwnProperty.call(d, p) && E.push([d[p], p])
      if (!E.length) {
        d = n
        for (p in d) Object.prototype.hasOwnProperty.call(d, p) && E.push([d[p], p])
      }
      return (
        E.sort(function (u, _) {
          return u[0] - _[0] || n[u[1]] - n[_[1]]
        }),
        r[E.pop()[1]] || 44
      )
    }
    function i(c, d) {
      var x = d || {},
        p = '',
        E = x.dense ? [] : {},
        u = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } }
      c.slice(0, 4) == 'sep='
        ? c.charCodeAt(5) == 13 && c.charCodeAt(6) == 10
          ? ((p = c.charAt(4)), (c = c.slice(7)))
          : c.charCodeAt(5) == 13 || c.charCodeAt(5) == 10
          ? ((p = c.charAt(4)), (c = c.slice(6)))
          : (p = a(c.slice(0, 1024)))
        : x && x.FS
        ? (p = x.FS)
        : (p = a(c.slice(0, 1024)))
      var _ = 0,
        O = 0,
        R = 0,
        y = 0,
        M = 0,
        Y = p.charCodeAt(0),
        ee = !1,
        C = 0,
        b = c.charCodeAt(0)
      c = c.replace(
        /\r\n/gm,
        `
`
      )
      var L = x.dateNF != null ? bs(x.dateNF) : null
      function V() {
        var G = c.slice(y, M),
          z = {}
        if (
          (G.charAt(0) == '"' &&
            G.charAt(G.length - 1) == '"' &&
            (G = G.slice(1, -1).replace(/""/g, '"')),
          G.length === 0)
        )
          z.t = 'z'
        else if (x.raw) (z.t = 's'), (z.v = G)
        else if (G.trim().length === 0) (z.t = 's'), (z.v = G)
        else if (G.charCodeAt(0) == 61)
          G.charCodeAt(1) == 34 && G.charCodeAt(G.length - 1) == 34
            ? ((z.t = 's'), (z.v = G.slice(2, -1).replace(/""/g, '"')))
            : So(G)
            ? ((z.t = 'n'), (z.f = G.slice(1)))
            : ((z.t = 's'), (z.v = G))
        else if (G == 'TRUE') (z.t = 'b'), (z.v = !0)
        else if (G == 'FALSE') (z.t = 'b'), (z.v = !1)
        else if (!isNaN((R = yr(G)))) (z.t = 'n'), x.cellText !== !1 && (z.w = G), (z.v = R)
        else if (!isNaN(Rt(G).getDate()) || (L && G.match(L))) {
          z.z = x.dateNF || ye[14]
          var re = 0
          L && G.match(L) && ((G = Ws(G, x.dateNF, G.match(L) || [])), (re = 1)),
            x.cellDates ? ((z.t = 'd'), (z.v = Je(G, re))) : ((z.t = 'n'), (z.v = qe(Je(G, re)))),
            x.cellText !== !1 && (z.w = Pr(z.z, z.v instanceof Date ? qe(z.v) : z.v)),
            x.cellNF || delete z.z
        } else (z.t = 's'), (z.v = G)
        if (
          (z.t == 'z' ||
            (x.dense ? (E[_] || (E[_] = []), (E[_][O] = z)) : (E[me({ c: O, r: _ })] = z)),
          (y = M + 1),
          (b = c.charCodeAt(y)),
          u.e.c < O && (u.e.c = O),
          u.e.r < _ && (u.e.r = _),
          C == Y)
        )
          ++O
        else if (((O = 0), ++_, x.sheetRows && x.sheetRows <= _)) return !0
      }
      e: for (; M < c.length; ++M)
        switch ((C = c.charCodeAt(M))) {
          case 34:
            b === 34 && (ee = !ee)
            break
          case Y:
          case 10:
          case 13:
            if (!ee && V()) break e
            break
        }
      return M - y > 0 && V(), (E['!ref'] = De(u)), E
    }
    function s(c, d) {
      return !(d && d.PRN) ||
        d.FS ||
        c.slice(0, 4) == 'sep=' ||
        c.indexOf('	') >= 0 ||
        c.indexOf(',') >= 0 ||
        c.indexOf(';') >= 0
        ? i(c, d)
        : ut(t(c, d), d)
    }
    function f(c, d) {
      var x = '',
        p = d.type == 'string' ? [0, 0, 0, 0] : Bu(c, d)
      switch (d.type) {
        case 'base64':
          x = Or(c)
          break
        case 'binary':
          x = c
          break
        case 'buffer':
          d.codepage == 65001
            ? (x = c.toString('utf8'))
            : d.codepage && typeof Vr < 'u'
            ? (x = Vr.utils.decode(d.codepage, c))
            : (x = ue && Buffer.isBuffer(c) ? c.toString('binary') : Pt(c))
          break
        case 'array':
          x = p0(c)
          break
        case 'string':
          x = c
          break
        default:
          throw new Error('Unrecognized type ' + d.type)
      }
      return (
        p[0] == 239 && p[1] == 187 && p[2] == 191
          ? (x = St(x.slice(3)))
          : d.type != 'string' && d.type != 'buffer' && d.codepage == 65001
          ? (x = St(x))
          : d.type == 'binary' &&
            typeof Vr < 'u' &&
            d.codepage &&
            (x = Vr.utils.decode(d.codepage, Vr.utils.encode(28591, x))),
        x.slice(0, 19) == 'socialcalc:version:'
          ? ei.to_sheet(d.type == 'string' ? x : St(x), d)
          : s(x, d)
      )
    }
    function o(c, d) {
      return Yr(f(c, d), d)
    }
    function l(c) {
      for (var d = [], x = Ee(c['!ref']), p, E = Array.isArray(c), u = x.s.r; u <= x.e.r; ++u) {
        for (var _ = [], O = x.s.c; O <= x.e.c; ++O) {
          var R = me({ r: u, c: O })
          if (((p = E ? (c[u] || [])[O] : c[R]), !p || p.v == null)) {
            _.push('          ')
            continue
          }
          for (var y = (p.w || (Dr(p), p.w) || '').slice(0, 10); y.length < 10; ) y += ' '
          _.push(y + (O === 0 ? ' ' : ''))
        }
        d.push(_.join(''))
      }
      return d.join(`
`)
    }
    return { to_workbook: o, to_sheet: f, from_sheet: l }
  })(),
  Kn = (function () {
    function e(S, P, F) {
      if (S) {
        tr(S, S.l || 0)
        for (var A = F.Enum || sr; S.l < S.length; ) {
          var H = S.read_shift(2),
            ie = A[H] || A[65535],
            se = S.read_shift(2),
            ae = S.l + se,
            q = ie.f && ie.f(S, se, F)
          if (((S.l = ae), P(q, ie, H))) return
        }
      }
    }
    function t(S, P) {
      switch (P.type) {
        case 'base64':
          return r(pr(Or(S)), P)
        case 'binary':
          return r(pr(S), P)
        case 'buffer':
        case 'array':
          return r(S, P)
      }
      throw 'Unsupported type ' + P.type
    }
    function r(S, P) {
      if (!S) return S
      var F = P || {},
        A = F.dense ? [] : {},
        H = 'Sheet1',
        ie = '',
        se = 0,
        ae = {},
        q = [],
        Te = [],
        ce = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } },
        je = F.sheetRows || 0
      if (S[2] == 0 && (S[3] == 8 || S[3] == 9) && S.length >= 16 && S[14] == 5 && S[15] === 108)
        throw new Error('Unsupported Works 3 for Mac file')
      if (S[2] == 2)
        (F.Enum = sr),
          e(
            S,
            function (ne, fr, wr) {
              switch (wr) {
                case 0:
                  ;(F.vers = ne), ne >= 4096 && (F.qpro = !0)
                  break
                case 6:
                  ce = ne
                  break
                case 204:
                  ne && (ie = ne)
                  break
                case 222:
                  ie = ne
                  break
                case 15:
                case 51:
                  F.qpro || (ne[1].v = ne[1].v.slice(1))
                case 13:
                case 14:
                case 16:
                  wr == 14 &&
                    (ne[2] & 112) == 112 &&
                    (ne[2] & 15) > 1 &&
                    (ne[2] & 15) < 15 &&
                    ((ne[1].z = F.dateNF || ye[14]),
                    F.cellDates && ((ne[1].t = 'd'), (ne[1].v = ma(ne[1].v)))),
                    F.qpro &&
                      ne[3] > se &&
                      ((A['!ref'] = De(ce)),
                      (ae[H] = A),
                      q.push(H),
                      (A = F.dense ? [] : {}),
                      (ce = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }),
                      (se = ne[3]),
                      (H = ie || 'Sheet' + (se + 1)),
                      (ie = ''))
                  var Ur = F.dense ? (A[ne[0].r] || [])[ne[0].c] : A[me(ne[0])]
                  if (Ur) {
                    ;(Ur.t = ne[1].t),
                      (Ur.v = ne[1].v),
                      ne[1].z != null && (Ur.z = ne[1].z),
                      ne[1].f != null && (Ur.f = ne[1].f)
                    break
                  }
                  F.dense
                    ? (A[ne[0].r] || (A[ne[0].r] = []), (A[ne[0].r][ne[0].c] = ne[1]))
                    : (A[me(ne[0])] = ne[1])
                  break
              }
            },
            F
          )
      else if (S[2] == 26 || S[2] == 14)
        (F.Enum = er),
          S[2] == 14 && ((F.qpro = !0), (S.l = 0)),
          e(
            S,
            function (ne, fr, wr) {
              switch (wr) {
                case 204:
                  H = ne
                  break
                case 22:
                  ne[1].v = ne[1].v.slice(1)
                case 23:
                case 24:
                case 25:
                case 37:
                case 39:
                case 40:
                  if (
                    (ne[3] > se &&
                      ((A['!ref'] = De(ce)),
                      (ae[H] = A),
                      q.push(H),
                      (A = F.dense ? [] : {}),
                      (ce = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }),
                      (se = ne[3]),
                      (H = 'Sheet' + (se + 1))),
                    je > 0 && ne[0].r >= je)
                  )
                    break
                  F.dense
                    ? (A[ne[0].r] || (A[ne[0].r] = []), (A[ne[0].r][ne[0].c] = ne[1]))
                    : (A[me(ne[0])] = ne[1]),
                    ce.e.c < ne[0].c && (ce.e.c = ne[0].c),
                    ce.e.r < ne[0].r && (ce.e.r = ne[0].r)
                  break
                case 27:
                  ne[14e3] && (Te[ne[14e3][0]] = ne[14e3][1])
                  break
                case 1537:
                  ;(Te[ne[0]] = ne[1]), ne[0] == se && (H = ne[1])
                  break
              }
            },
            F
          )
      else throw new Error('Unrecognized LOTUS BOF ' + S[2])
      if (((A['!ref'] = De(ce)), (ae[ie || H] = A), q.push(ie || H), !Te.length))
        return { SheetNames: q, Sheets: ae }
      for (var xe = {}, Er = [], Ae = 0; Ae < Te.length; ++Ae)
        ae[q[Ae]]
          ? (Er.push(Te[Ae] || q[Ae]), (xe[Te[Ae]] = ae[Te[Ae]] || ae[q[Ae]]))
          : (Er.push(Te[Ae]), (xe[Te[Ae]] = { '!ref': 'A1' }))
      return { SheetNames: Er, Sheets: xe }
    }
    function n(S, P) {
      var F = P || {}
      if ((+F.codepage >= 0 && Ot(+F.codepage), F.type == 'string'))
        throw new Error('Cannot write WK1 to JS string')
      var A = Ze(),
        H = Ee(S['!ref']),
        ie = Array.isArray(S),
        se = []
      J(A, 0, i(1030)), J(A, 6, o(H))
      for (var ae = Math.min(H.e.r, 8191), q = H.s.r; q <= ae; ++q)
        for (var Te = He(q), ce = H.s.c; ce <= H.e.c; ++ce) {
          q === H.s.r && (se[ce] = ze(ce))
          var je = se[ce] + Te,
            xe = ie ? (S[q] || [])[ce] : S[je]
          if (!(!xe || xe.t == 'z'))
            if (xe.t == 'n')
              (xe.v | 0) == xe.v && xe.v >= -32768 && xe.v <= 32767
                ? J(A, 13, p(q, ce, xe.v))
                : J(A, 14, u(q, ce, xe.v))
            else {
              var Er = Dr(xe)
              J(A, 15, d(q, ce, Er.slice(0, 239)))
            }
        }
      return J(A, 1), A.end()
    }
    function a(S, P) {
      var F = P || {}
      if ((+F.codepage >= 0 && Ot(+F.codepage), F.type == 'string'))
        throw new Error('Cannot write WK3 to JS string')
      var A = Ze()
      J(A, 0, s(S))
      for (var H = 0, ie = 0; H < S.SheetNames.length; ++H)
        (S.Sheets[S.SheetNames[H]] || {})['!ref'] && J(A, 27, Ne(S.SheetNames[H], ie++))
      var se = 0
      for (H = 0; H < S.SheetNames.length; ++H) {
        var ae = S.Sheets[S.SheetNames[H]]
        if (!(!ae || !ae['!ref'])) {
          for (
            var q = Ee(ae['!ref']),
              Te = Array.isArray(ae),
              ce = [],
              je = Math.min(q.e.r, 8191),
              xe = q.s.r;
            xe <= je;
            ++xe
          )
            for (var Er = He(xe), Ae = q.s.c; Ae <= q.e.c; ++Ae) {
              xe === q.s.r && (ce[Ae] = ze(Ae))
              var ne = ce[Ae] + Er,
                fr = Te ? (ae[xe] || [])[Ae] : ae[ne]
              if (!(!fr || fr.t == 'z'))
                if (fr.t == 'n') J(A, 23, V(xe, Ae, se, fr.v))
                else {
                  var wr = Dr(fr)
                  J(A, 22, C(xe, Ae, se, wr.slice(0, 239)))
                }
            }
          ++se
        }
      }
      return J(A, 1), A.end()
    }
    function i(S) {
      var P = B(2)
      return P.write_shift(2, S), P
    }
    function s(S) {
      var P = B(26)
      P.write_shift(2, 4096), P.write_shift(2, 4), P.write_shift(4, 0)
      for (var F = 0, A = 0, H = 0, ie = 0; ie < S.SheetNames.length; ++ie) {
        var se = S.SheetNames[ie],
          ae = S.Sheets[se]
        if (!(!ae || !ae['!ref'])) {
          ++H
          var q = ir(ae['!ref'])
          F < q.e.r && (F = q.e.r), A < q.e.c && (A = q.e.c)
        }
      }
      return (
        F > 8191 && (F = 8191),
        P.write_shift(2, F),
        P.write_shift(1, H),
        P.write_shift(1, A),
        P.write_shift(2, 0),
        P.write_shift(2, 0),
        P.write_shift(1, 1),
        P.write_shift(1, 2),
        P.write_shift(4, 0),
        P.write_shift(4, 0),
        P
      )
    }
    function f(S, P, F) {
      var A = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } }
      return P == 8 && F.qpro
        ? ((A.s.c = S.read_shift(1)),
          S.l++,
          (A.s.r = S.read_shift(2)),
          (A.e.c = S.read_shift(1)),
          S.l++,
          (A.e.r = S.read_shift(2)),
          A)
        : ((A.s.c = S.read_shift(2)),
          (A.s.r = S.read_shift(2)),
          P == 12 && F.qpro && (S.l += 2),
          (A.e.c = S.read_shift(2)),
          (A.e.r = S.read_shift(2)),
          P == 12 && F.qpro && (S.l += 2),
          A.s.c == 65535 && (A.s.c = A.e.c = A.s.r = A.e.r = 0),
          A)
    }
    function o(S) {
      var P = B(8)
      return (
        P.write_shift(2, S.s.c),
        P.write_shift(2, S.s.r),
        P.write_shift(2, S.e.c),
        P.write_shift(2, S.e.r),
        P
      )
    }
    function l(S, P, F) {
      var A = [{ c: 0, r: 0 }, { t: 'n', v: 0 }, 0, 0]
      return (
        F.qpro && F.vers != 20768
          ? ((A[0].c = S.read_shift(1)),
            (A[3] = S.read_shift(1)),
            (A[0].r = S.read_shift(2)),
            (S.l += 2))
          : ((A[2] = S.read_shift(1)), (A[0].c = S.read_shift(2)), (A[0].r = S.read_shift(2))),
        A
      )
    }
    function c(S, P, F) {
      var A = S.l + P,
        H = l(S, P, F)
      if (((H[1].t = 's'), F.vers == 20768)) {
        S.l++
        var ie = S.read_shift(1)
        return (H[1].v = S.read_shift(ie, 'utf8')), H
      }
      return F.qpro && S.l++, (H[1].v = S.read_shift(A - S.l, 'cstr')), H
    }
    function d(S, P, F) {
      var A = B(7 + F.length)
      A.write_shift(1, 255), A.write_shift(2, P), A.write_shift(2, S), A.write_shift(1, 39)
      for (var H = 0; H < A.length; ++H) {
        var ie = F.charCodeAt(H)
        A.write_shift(1, ie >= 128 ? 95 : ie)
      }
      return A.write_shift(1, 0), A
    }
    function x(S, P, F) {
      var A = l(S, P, F)
      return (A[1].v = S.read_shift(2, 'i')), A
    }
    function p(S, P, F) {
      var A = B(7)
      return (
        A.write_shift(1, 255), A.write_shift(2, P), A.write_shift(2, S), A.write_shift(2, F, 'i'), A
      )
    }
    function E(S, P, F) {
      var A = l(S, P, F)
      return (A[1].v = S.read_shift(8, 'f')), A
    }
    function u(S, P, F) {
      var A = B(13)
      return (
        A.write_shift(1, 255), A.write_shift(2, P), A.write_shift(2, S), A.write_shift(8, F, 'f'), A
      )
    }
    function _(S, P, F) {
      var A = S.l + P,
        H = l(S, P, F)
      if (((H[1].v = S.read_shift(8, 'f')), F.qpro)) S.l = A
      else {
        var ie = S.read_shift(2)
        M(S.slice(S.l, S.l + ie), H), (S.l += ie)
      }
      return H
    }
    function O(S, P, F) {
      var A = P & 32768
      return (
        (P &= -32769),
        (P = (A ? S : 0) + (P >= 8192 ? P - 16384 : P)),
        (A ? '' : '$') + (F ? ze(P) : He(P))
      )
    }
    var R = {
        51: ['FALSE', 0],
        52: ['TRUE', 0],
        70: ['LEN', 1],
        80: ['SUM', 69],
        81: ['AVERAGEA', 69],
        82: ['COUNTA', 69],
        83: ['MINA', 69],
        84: ['MAXA', 69],
        111: ['T', 1]
      },
      y = [
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '+',
        '-',
        '*',
        '/',
        '^',
        '=',
        '<>',
        '<=',
        '>=',
        '<',
        '>',
        '',
        '',
        '',
        '',
        '&',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
      ]
    function M(S, P) {
      tr(S, 0)
      for (var F = [], A = 0, H = '', ie = '', se = '', ae = ''; S.l < S.length; ) {
        var q = S[S.l++]
        switch (q) {
          case 0:
            F.push(S.read_shift(8, 'f'))
            break
          case 1:
            ;(ie = O(P[0].c, S.read_shift(2), !0)),
              (H = O(P[0].r, S.read_shift(2), !1)),
              F.push(ie + H)
            break
          case 2:
            {
              var Te = O(P[0].c, S.read_shift(2), !0),
                ce = O(P[0].r, S.read_shift(2), !1)
              ;(ie = O(P[0].c, S.read_shift(2), !0)),
                (H = O(P[0].r, S.read_shift(2), !1)),
                F.push(Te + ce + ':' + ie + H)
            }
            break
          case 3:
            if (S.l < S.length) {
              console.error('WK1 premature formula end')
              return
            }
            break
          case 4:
            F.push('(' + F.pop() + ')')
            break
          case 5:
            F.push(S.read_shift(2))
            break
          case 6:
            {
              for (var je = ''; (q = S[S.l++]); ) je += String.fromCharCode(q)
              F.push('"' + je.replace(/"/g, '""') + '"')
            }
            break
          case 8:
            F.push('-' + F.pop())
            break
          case 23:
            F.push('+' + F.pop())
            break
          case 22:
            F.push('NOT(' + F.pop() + ')')
            break
          case 20:
          case 21:
            ;(ae = F.pop()),
              (se = F.pop()),
              F.push(['AND', 'OR'][q - 20] + '(' + se + ',' + ae + ')')
            break
          default:
            if (q < 32 && y[q]) (ae = F.pop()), (se = F.pop()), F.push(se + y[q] + ae)
            else if (R[q]) {
              if (((A = R[q][1]), A == 69 && (A = S[S.l++]), A > F.length)) {
                console.error(
                  'WK1 bad formula parse 0x' + q.toString(16) + ':|' + F.join('|') + '|'
                )
                return
              }
              var xe = F.slice(-A)
              ;(F.length -= A), F.push(R[q][0] + '(' + xe.join(',') + ')')
            } else
              return q <= 7
                ? console.error('WK1 invalid opcode ' + q.toString(16))
                : q <= 24
                ? console.error('WK1 unsupported op ' + q.toString(16))
                : q <= 30
                ? console.error('WK1 invalid opcode ' + q.toString(16))
                : q <= 115
                ? console.error('WK1 unsupported function opcode ' + q.toString(16))
                : console.error('WK1 unrecognized opcode ' + q.toString(16))
        }
      }
      F.length == 1
        ? (P[1].f = '' + F[0])
        : console.error('WK1 bad formula parse |' + F.join('|') + '|')
    }
    function Y(S) {
      var P = [{ c: 0, r: 0 }, { t: 'n', v: 0 }, 0]
      return (P[0].r = S.read_shift(2)), (P[3] = S[S.l++]), (P[0].c = S[S.l++]), P
    }
    function ee(S, P) {
      var F = Y(S)
      return (F[1].t = 's'), (F[1].v = S.read_shift(P - 4, 'cstr')), F
    }
    function C(S, P, F, A) {
      var H = B(6 + A.length)
      H.write_shift(2, S), H.write_shift(1, F), H.write_shift(1, P), H.write_shift(1, 39)
      for (var ie = 0; ie < A.length; ++ie) {
        var se = A.charCodeAt(ie)
        H.write_shift(1, se >= 128 ? 95 : se)
      }
      return H.write_shift(1, 0), H
    }
    function b(S, P) {
      var F = Y(S)
      F[1].v = S.read_shift(2)
      var A = F[1].v >> 1
      if (F[1].v & 1)
        switch (A & 7) {
          case 0:
            A = (A >> 3) * 5e3
            break
          case 1:
            A = (A >> 3) * 500
            break
          case 2:
            A = (A >> 3) / 20
            break
          case 3:
            A = (A >> 3) / 200
            break
          case 4:
            A = (A >> 3) / 2e3
            break
          case 5:
            A = (A >> 3) / 2e4
            break
          case 6:
            A = (A >> 3) / 16
            break
          case 7:
            A = (A >> 3) / 64
            break
        }
      return (F[1].v = A), F
    }
    function L(S, P) {
      var F = Y(S),
        A = S.read_shift(4),
        H = S.read_shift(4),
        ie = S.read_shift(2)
      if (ie == 65535)
        return (
          A === 0 && H === 3221225472
            ? ((F[1].t = 'e'), (F[1].v = 15))
            : A === 0 && H === 3489660928
            ? ((F[1].t = 'e'), (F[1].v = 42))
            : (F[1].v = 0),
          F
        )
      var se = ie & 32768
      return (
        (ie = (ie & 32767) - 16446),
        (F[1].v = (1 - se * 2) * (H * Math.pow(2, ie + 32) + A * Math.pow(2, ie))),
        F
      )
    }
    function V(S, P, F, A) {
      var H = B(14)
      if ((H.write_shift(2, S), H.write_shift(1, F), H.write_shift(1, P), A == 0))
        return H.write_shift(4, 0), H.write_shift(4, 0), H.write_shift(2, 65535), H
      var ie = 0,
        se = 0,
        ae = 0,
        q = 0
      return (
        A < 0 && ((ie = 1), (A = -A)),
        (se = Math.log2(A) | 0),
        (A /= Math.pow(2, se - 31)),
        (q = A >>> 0),
        q & 2147483648 || ((A /= 2), ++se, (q = A >>> 0)),
        (A -= q),
        (q |= 2147483648),
        (q >>>= 0),
        (A *= Math.pow(2, 32)),
        (ae = A >>> 0),
        H.write_shift(4, ae),
        H.write_shift(4, q),
        (se += 16383 + (ie ? 32768 : 0)),
        H.write_shift(2, se),
        H
      )
    }
    function G(S, P) {
      var F = L(S)
      return (S.l += P - 14), F
    }
    function z(S, P) {
      var F = Y(S),
        A = S.read_shift(4)
      return (F[1].v = A >> 6), F
    }
    function re(S, P) {
      var F = Y(S),
        A = S.read_shift(8, 'f')
      return (F[1].v = A), F
    }
    function ge(S, P) {
      var F = re(S)
      return (S.l += P - 10), F
    }
    function le(S, P) {
      return S[S.l + P - 1] == 0 ? S.read_shift(P, 'cstr') : ''
    }
    function Me(S, P) {
      var F = S[S.l++]
      F > P - 1 && (F = P - 1)
      for (var A = ''; A.length < F; ) A += String.fromCharCode(S[S.l++])
      return A
    }
    function Ce(S, P, F) {
      if (!(!F.qpro || P < 21)) {
        var A = S.read_shift(1)
        ;(S.l += 17), (S.l += 1), (S.l += 2)
        var H = S.read_shift(P - 21, 'cstr')
        return [A, H]
      }
    }
    function hr(S, P) {
      for (var F = {}, A = S.l + P; S.l < A; ) {
        var H = S.read_shift(2)
        if (H == 14e3) {
          for (F[H] = [0, ''], F[H][0] = S.read_shift(2); S[S.l]; )
            (F[H][1] += String.fromCharCode(S[S.l])), S.l++
          S.l++
        }
      }
      return F
    }
    function Ne(S, P) {
      var F = B(5 + S.length)
      F.write_shift(2, 14e3), F.write_shift(2, P)
      for (var A = 0; A < S.length; ++A) {
        var H = S.charCodeAt(A)
        F[F.l++] = H > 127 ? 95 : H
      }
      return (F[F.l++] = 0), F
    }
    var sr = {
        0: { n: 'BOF', f: $a },
        1: { n: 'EOF' },
        2: { n: 'CALCMODE' },
        3: { n: 'CALCORDER' },
        4: { n: 'SPLIT' },
        5: { n: 'SYNC' },
        6: { n: 'RANGE', f },
        7: { n: 'WINDOW1' },
        8: { n: 'COLW1' },
        9: { n: 'WINTWO' },
        10: { n: 'COLW2' },
        11: { n: 'NAME' },
        12: { n: 'BLANK' },
        13: { n: 'INTEGER', f: x },
        14: { n: 'NUMBER', f: E },
        15: { n: 'LABEL', f: c },
        16: { n: 'FORMULA', f: _ },
        24: { n: 'TABLE' },
        25: { n: 'ORANGE' },
        26: { n: 'PRANGE' },
        27: { n: 'SRANGE' },
        28: { n: 'FRANGE' },
        29: { n: 'KRANGE1' },
        32: { n: 'HRANGE' },
        35: { n: 'KRANGE2' },
        36: { n: 'PROTEC' },
        37: { n: 'FOOTER' },
        38: { n: 'HEADER' },
        39: { n: 'SETUP' },
        40: { n: 'MARGINS' },
        41: { n: 'LABELFMT' },
        42: { n: 'TITLES' },
        43: { n: 'SHEETJS' },
        45: { n: 'GRAPH' },
        46: { n: 'NGRAPH' },
        47: { n: 'CALCCOUNT' },
        48: { n: 'UNFORMATTED' },
        49: { n: 'CURSORW12' },
        50: { n: 'WINDOW' },
        51: { n: 'STRING', f: c },
        55: { n: 'PASSWORD' },
        56: { n: 'LOCKED' },
        60: { n: 'QUERY' },
        61: { n: 'QUERYNAME' },
        62: { n: 'PRINT' },
        63: { n: 'PRINTNAME' },
        64: { n: 'GRAPH2' },
        65: { n: 'GRAPHNAME' },
        66: { n: 'ZOOM' },
        67: { n: 'SYMSPLIT' },
        68: { n: 'NSROWS' },
        69: { n: 'NSCOLS' },
        70: { n: 'RULER' },
        71: { n: 'NNAME' },
        72: { n: 'ACOMM' },
        73: { n: 'AMACRO' },
        74: { n: 'PARSE' },
        102: { n: 'PRANGES??' },
        103: { n: 'RRANGES??' },
        104: { n: 'FNAME??' },
        105: { n: 'MRANGES??' },
        204: { n: 'SHEETNAMECS', f: le },
        222: { n: 'SHEETNAMELP', f: Me },
        65535: { n: '' }
      },
      er = {
        0: { n: 'BOF' },
        1: { n: 'EOF' },
        2: { n: 'PASSWORD' },
        3: { n: 'CALCSET' },
        4: { n: 'WINDOWSET' },
        5: { n: 'SHEETCELLPTR' },
        6: { n: 'SHEETLAYOUT' },
        7: { n: 'COLUMNWIDTH' },
        8: { n: 'HIDDENCOLUMN' },
        9: { n: 'USERRANGE' },
        10: { n: 'SYSTEMRANGE' },
        11: { n: 'ZEROFORCE' },
        12: { n: 'SORTKEYDIR' },
        13: { n: 'FILESEAL' },
        14: { n: 'DATAFILLNUMS' },
        15: { n: 'PRINTMAIN' },
        16: { n: 'PRINTSTRING' },
        17: { n: 'GRAPHMAIN' },
        18: { n: 'GRAPHSTRING' },
        19: { n: '??' },
        20: { n: 'ERRCELL' },
        21: { n: 'NACELL' },
        22: { n: 'LABEL16', f: ee },
        23: { n: 'NUMBER17', f: L },
        24: { n: 'NUMBER18', f: b },
        25: { n: 'FORMULA19', f: G },
        26: { n: 'FORMULA1A' },
        27: { n: 'XFORMAT', f: hr },
        28: { n: 'DTLABELMISC' },
        29: { n: 'DTLABELCELL' },
        30: { n: 'GRAPHWINDOW' },
        31: { n: 'CPA' },
        32: { n: 'LPLAUTO' },
        33: { n: 'QUERY' },
        34: { n: 'HIDDENSHEET' },
        35: { n: '??' },
        37: { n: 'NUMBER25', f: z },
        38: { n: '??' },
        39: { n: 'NUMBER27', f: re },
        40: { n: 'FORMULA28', f: ge },
        142: { n: '??' },
        147: { n: '??' },
        150: { n: '??' },
        151: { n: '??' },
        152: { n: '??' },
        153: { n: '??' },
        154: { n: '??' },
        155: { n: '??' },
        156: { n: '??' },
        163: { n: '??' },
        174: { n: '??' },
        175: { n: '??' },
        176: { n: '??' },
        177: { n: '??' },
        184: { n: '??' },
        185: { n: '??' },
        186: { n: '??' },
        187: { n: '??' },
        188: { n: '??' },
        195: { n: '??' },
        201: { n: '??' },
        204: { n: 'SHEETNAMECS', f: le },
        205: { n: '??' },
        206: { n: '??' },
        207: { n: '??' },
        208: { n: '??' },
        256: { n: '??' },
        259: { n: '??' },
        260: { n: '??' },
        261: { n: '??' },
        262: { n: '??' },
        263: { n: '??' },
        265: { n: '??' },
        266: { n: '??' },
        267: { n: '??' },
        268: { n: '??' },
        270: { n: '??' },
        271: { n: '??' },
        384: { n: '??' },
        389: { n: '??' },
        390: { n: '??' },
        393: { n: '??' },
        396: { n: '??' },
        512: { n: '??' },
        514: { n: '??' },
        513: { n: '??' },
        516: { n: '??' },
        517: { n: '??' },
        640: { n: '??' },
        641: { n: '??' },
        642: { n: '??' },
        643: { n: '??' },
        644: { n: '??' },
        645: { n: '??' },
        646: { n: '??' },
        647: { n: '??' },
        648: { n: '??' },
        658: { n: '??' },
        659: { n: '??' },
        660: { n: '??' },
        661: { n: '??' },
        662: { n: '??' },
        665: { n: '??' },
        666: { n: '??' },
        768: { n: '??' },
        772: { n: '??' },
        1537: { n: 'SHEETINFOQP', f: Ce },
        1600: { n: '??' },
        1602: { n: '??' },
        1793: { n: '??' },
        1794: { n: '??' },
        1795: { n: '??' },
        1796: { n: '??' },
        1920: { n: '??' },
        2048: { n: '??' },
        2049: { n: '??' },
        2052: { n: '??' },
        2688: { n: '??' },
        10998: { n: '??' },
        12849: { n: '??' },
        28233: { n: '??' },
        28484: { n: '??' },
        65535: { n: '' }
      }
    return { sheet_to_wk1: n, book_to_wk3: a, to_workbook: t }
  })(),
  Fl = /^\s|\s$|[\t\n\r]/
function ri(e, t) {
  if (!t.bookSST) return ''
  var r = [Re]
  r[r.length] = j('sst', null, { xmlns: ht[0], count: e.Count, uniqueCount: e.Unique })
  for (var n = 0; n != e.length; ++n)
    if (e[n] != null) {
      var a = e[n],
        i = '<si>'
      a.r
        ? (i += a.r)
        : ((i += '<t'),
          a.t || (a.t = ''),
          a.t.match(Fl) && (i += ' xml:space="preserve"'),
          (i += '>' + ve(a.t) + '</t>')),
        (i += '</si>'),
        (r[r.length] = i)
    }
  return r.length > 2 && ((r[r.length] = '</sst>'), (r[1] = r[1].replace('/>', '>'))), r.join('')
}
function yl(e) {
  return [e.read_shift(4), e.read_shift(4)]
}
function Cl(e, t) {
  return t || (t = B(8)), t.write_shift(4, e.Count), t.write_shift(4, e.Unique), t
}
var Ol = gf
function Dl(e) {
  var t = Ze()
  W(t, 159, Cl(e))
  for (var r = 0; r < e.length; ++r) W(t, 19, Ol(e[r]))
  return W(t, 160), t.end()
}
function Rl(e) {
  for (var t = [], r = e.split(''), n = 0; n < r.length; ++n) t[n] = r[n].charCodeAt(0)
  return t
}
function ti(e) {
  var t = 0,
    r,
    n = Rl(e),
    a = n.length + 1,
    i,
    s,
    f,
    o,
    l
  for (r = zr(a), r[0] = n.length, i = 1; i != a; ++i) r[i] = n[i - 1]
  for (i = a - 1; i >= 0; --i)
    (s = r[i]), (f = t & 16384 ? 1 : 0), (o = (t << 1) & 32767), (l = f | o), (t = l ^ s)
  return t ^ 52811
}
var Il = (function () {
  function e(a, i) {
    switch (i.type) {
      case 'base64':
        return t(Or(a), i)
      case 'binary':
        return t(a, i)
      case 'buffer':
        return t(ue && Buffer.isBuffer(a) ? a.toString('binary') : Pt(a), i)
      case 'array':
        return t(p0(a), i)
    }
    throw new Error('Unrecognized type ' + i.type)
  }
  function t(a, i) {
    var s = i || {},
      f = s.dense ? [] : {},
      o = a.match(/\\trowd.*?\\row\b/g)
    if (!o.length) throw new Error('RTF missing table')
    var l = { s: { c: 0, r: 0 }, e: { c: 0, r: o.length - 1 } }
    return (
      o.forEach(function (c, d) {
        Array.isArray(f) && (f[d] = [])
        for (var x = /\\\w+\b/g, p = 0, E, u = -1; (E = x.exec(c)); ) {
          switch (E[0]) {
            case '\\cell':
              var _ = c.slice(p, x.lastIndex - E[0].length)
              if ((_[0] == ' ' && (_ = _.slice(1)), ++u, _.length)) {
                var O = { v: _, t: 's' }
                Array.isArray(f) ? (f[d][u] = O) : (f[me({ r: d, c: u })] = O)
              }
              break
          }
          p = x.lastIndex
        }
        u > l.e.c && (l.e.c = u)
      }),
      (f['!ref'] = De(l)),
      f
    )
  }
  function r(a, i) {
    return Yr(e(a, i), i)
  }
  function n(a) {
    for (
      var i = ['{\\rtf1\\ansi'], s = Ee(a['!ref']), f, o = Array.isArray(a), l = s.s.r;
      l <= s.e.r;
      ++l
    ) {
      i.push('\\trowd\\trautofit1')
      for (var c = s.s.c; c <= s.e.c; ++c) i.push('\\cellx' + (c + 1))
      for (i.push('\\pard\\intbl'), c = s.s.c; c <= s.e.c; ++c) {
        var d = me({ r: l, c })
        ;(f = o ? (a[l] || [])[c] : a[d]),
          !(!f || (f.v == null && (!f.f || f.F))) &&
            (i.push(' ' + (f.w || (Dr(f), f.w))), i.push('\\cell'))
      }
      i.push('\\pard\\intbl\\row')
    }
    return i.join('') + '}'
  }
  return { to_workbook: r, to_sheet: e, from_sheet: n }
})()
function jn(e) {
  for (var t = 0, r = 1; t != 3; ++t) r = r * 256 + (e[t] > 255 ? 255 : e[t] < 0 ? 0 : e[t])
  return r.toString(16).toUpperCase().slice(1)
}
var Nl = 6,
  Cr = Nl
function i0(e) {
  return Math.floor((e + Math.round(128 / Cr) / 256) * Cr)
}
function s0(e) {
  return Math.floor(((e - 5) / Cr) * 100 + 0.5) / 100
}
function L0(e) {
  return Math.round(((e * Cr + 5) / Cr) * 256) / 256
}
function J0(e) {
  e.width
    ? ((e.wpx = i0(e.width)), (e.wch = s0(e.wpx)), (e.MDW = Cr))
    : e.wpx
    ? ((e.wch = s0(e.wpx)), (e.width = L0(e.wch)), (e.MDW = Cr))
    : typeof e.wch == 'number' && ((e.width = L0(e.wch)), (e.wpx = i0(e.width)), (e.MDW = Cr)),
    e.customWidth && delete e.customWidth
}
var kl = 96,
  ni = kl
function f0(e) {
  return (e * 96) / ni
}
function ai(e) {
  return (e * ni) / 96
}
function Pl(e) {
  var t = ['<numFmts>']
  return (
    [
      [5, 8],
      [23, 26],
      [41, 44],
      [50, 392]
    ].forEach(function (r) {
      for (var n = r[0]; n <= r[1]; ++n)
        e[n] != null && (t[t.length] = j('numFmt', null, { numFmtId: n, formatCode: ve(e[n]) }))
    }),
    t.length === 1
      ? ''
      : ((t[t.length] = '</numFmts>'),
        (t[0] = j('numFmts', null, { count: t.length - 2 }).replace('/>', '>')),
        t.join(''))
  )
}
function Ll(e) {
  var t = []
  return (
    (t[t.length] = j('cellXfs', null)),
    e.forEach(function (r) {
      t[t.length] = j('xf', null, r)
    }),
    (t[t.length] = '</cellXfs>'),
    t.length === 2
      ? ''
      : ((t[0] = j('cellXfs', null, { count: t.length - 2 }).replace('/>', '>')), t.join(''))
  )
}
function ii(e, t) {
  var r = [Re, j('styleSheet', null, { xmlns: ht[0], 'xmlns:vt': ke.vt })],
    n
  return (
    e.SSF && (n = Pl(e.SSF)) != null && (r[r.length] = n),
    (r[r.length] =
      '<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>'),
    (r[r.length] =
      '<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>'),
    (r[r.length] =
      '<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>'),
    (r[r.length] =
      '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>'),
    (n = Ll(t.cellXfs)) && (r[r.length] = n),
    (r[r.length] =
      '<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>'),
    (r[r.length] = '<dxfs count="0"/>'),
    (r[r.length] =
      '<tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4"/>'),
    r.length > 2 && ((r[r.length] = '</styleSheet>'), (r[1] = r[1].replace('/>', '>'))),
    r.join('')
  )
}
function Ml(e, t) {
  var r = e.read_shift(2),
    n = Ke(e)
  return [r, n]
}
function Bl(e, t, r) {
  r || (r = B(6 + 4 * t.length)), r.write_shift(2, e), Le(t, r)
  var n = r.length > r.l ? r.slice(0, r.l) : r
  return r.l == null && (r.l = r.length), n
}
function Ul(e, t, r) {
  var n = {}
  n.sz = e.read_shift(2) / 20
  var a = Ff(e)
  a.fItalic && (n.italic = 1),
    a.fCondense && (n.condense = 1),
    a.fExtend && (n.extend = 1),
    a.fShadow && (n.shadow = 1),
    a.fOutline && (n.outline = 1),
    a.fStrikeout && (n.strike = 1)
  var i = e.read_shift(2)
  switch ((i === 700 && (n.bold = 1), e.read_shift(2))) {
    case 1:
      n.vertAlign = 'superscript'
      break
    case 2:
      n.vertAlign = 'subscript'
      break
  }
  var s = e.read_shift(1)
  s != 0 && (n.underline = s)
  var f = e.read_shift(1)
  f > 0 && (n.family = f)
  var o = e.read_shift(1)
  switch ((o > 0 && (n.charset = o), e.l++, (n.color = Af(e)), e.read_shift(1))) {
    case 1:
      n.scheme = 'major'
      break
    case 2:
      n.scheme = 'minor'
      break
  }
  return (n.name = Ke(e)), n
}
function bl(e, t) {
  t || (t = B(25 + 4 * 32)),
    t.write_shift(2, e.sz * 20),
    yf(e, t),
    t.write_shift(2, e.bold ? 700 : 400)
  var r = 0
  e.vertAlign == 'superscript' ? (r = 1) : e.vertAlign == 'subscript' && (r = 2),
    t.write_shift(2, r),
    t.write_shift(1, e.underline || 0),
    t.write_shift(1, e.family || 0),
    t.write_shift(1, e.charset || 0),
    t.write_shift(1, 0),
    n0(e.color, t)
  var n = 0
  return (
    e.scheme == 'major' && (n = 1),
    e.scheme == 'minor' && (n = 2),
    t.write_shift(1, n),
    Le(e.name, t),
    t.length > t.l ? t.slice(0, t.l) : t
  )
}
var Wl = [
    'none',
    'solid',
    'mediumGray',
    'darkGray',
    'lightGray',
    'darkHorizontal',
    'darkVertical',
    'darkDown',
    'darkUp',
    'darkGrid',
    'darkTrellis',
    'lightHorizontal',
    'lightVertical',
    'lightDown',
    'lightUp',
    'lightGrid',
    'lightTrellis',
    'gray125',
    'gray0625'
  ],
  C0,
  Hl = Tr
function Yn(e, t) {
  t || (t = B(4 * 3 + 8 * 7 + 16 * 1)), C0 || (C0 = U0(Wl))
  var r = C0[e.patternType]
  r == null && (r = 40), t.write_shift(4, r)
  var n = 0
  if (r != 40) for (n0({ auto: 1 }, t), n0({ auto: 1 }, t); n < 12; ++n) t.write_shift(4, 0)
  else {
    for (; n < 4; ++n) t.write_shift(4, 0)
    for (; n < 12; ++n) t.write_shift(4, 0)
  }
  return t.length > t.l ? t.slice(0, t.l) : t
}
function Vl(e, t) {
  var r = e.l + t,
    n = e.read_shift(2),
    a = e.read_shift(2)
  return (e.l = r), { ixfe: n, numFmtId: a }
}
function si(e, t, r) {
  r || (r = B(16)),
    r.write_shift(2, t || 0),
    r.write_shift(2, e.numFmtId || 0),
    r.write_shift(2, 0),
    r.write_shift(2, 0),
    r.write_shift(2, 0),
    r.write_shift(1, 0),
    r.write_shift(1, 0)
  var n = 0
  return r.write_shift(1, n), r.write_shift(1, 0), r.write_shift(1, 0), r.write_shift(1, 0), r
}
function Tt(e, t) {
  return (
    t || (t = B(10)),
    t.write_shift(1, 0),
    t.write_shift(1, 0),
    t.write_shift(4, 0),
    t.write_shift(4, 0),
    t
  )
}
var Gl = Tr
function Xl(e, t) {
  return (
    t || (t = B(51)),
    t.write_shift(1, 0),
    Tt(null, t),
    Tt(null, t),
    Tt(null, t),
    Tt(null, t),
    Tt(null, t),
    t.length > t.l ? t.slice(0, t.l) : t
  )
}
function zl(e, t) {
  return (
    t || (t = B(12 + 4 * 10)),
    t.write_shift(4, e.xfId),
    t.write_shift(2, 1),
    t.write_shift(1, +e.builtinId),
    t.write_shift(1, 0),
    t0(e.name || '', t),
    t.length > t.l ? t.slice(0, t.l) : t
  )
}
function Kl(e, t, r) {
  var n = B(2052)
  return n.write_shift(4, e), t0(t, n), t0(r, n), n.length > n.l ? n.slice(0, n.l) : n
}
function jl(e, t) {
  if (t) {
    var r = 0
    ;[
      [5, 8],
      [23, 26],
      [41, 44],
      [50, 392]
    ].forEach(function (n) {
      for (var a = n[0]; a <= n[1]; ++a) t[a] != null && ++r
    }),
      r != 0 &&
        (W(e, 615, vr(r)),
        [
          [5, 8],
          [23, 26],
          [41, 44],
          [50, 392]
        ].forEach(function (n) {
          for (var a = n[0]; a <= n[1]; ++a) t[a] != null && W(e, 44, Bl(a, t[a]))
        }),
        W(e, 616))
  }
}
function Yl(e) {
  var t = 1
  W(e, 611, vr(t)),
    W(e, 43, bl({ sz: 12, color: { theme: 1 }, name: 'Calibri', family: 2, scheme: 'minor' })),
    W(e, 612)
}
function $l(e) {
  var t = 2
  W(e, 603, vr(t)),
    W(e, 45, Yn({ patternType: 'none' })),
    W(e, 45, Yn({ patternType: 'gray125' })),
    W(e, 604)
}
function Jl(e) {
  var t = 1
  W(e, 613, vr(t)), W(e, 46, Xl()), W(e, 614)
}
function Zl(e) {
  var t = 1
  W(e, 626, vr(t)),
    W(e, 47, si({ numFmtId: 0, fontId: 0, fillId: 0, borderId: 0 }, 65535)),
    W(e, 627)
}
function ql(e, t) {
  W(e, 617, vr(t.length)),
    t.forEach(function (r) {
      W(e, 47, si(r, 0))
    }),
    W(e, 618)
}
function Ql(e) {
  var t = 1
  W(e, 619, vr(t)), W(e, 48, zl({ xfId: 0, builtinId: 0, name: 'Normal' })), W(e, 620)
}
function eo(e) {
  var t = 0
  W(e, 505, vr(t)), W(e, 506)
}
function ro(e) {
  var t = 0
  W(e, 508, Kl(t, 'TableStyleMedium9', 'PivotStyleMedium4')), W(e, 509)
}
function to(e, t) {
  var r = Ze()
  return (
    W(r, 278),
    jl(r, e.SSF),
    Yl(r),
    $l(r),
    Jl(r),
    Zl(r),
    ql(r, t.cellXfs),
    Ql(r),
    eo(r),
    ro(r),
    W(r, 279),
    r.end()
  )
}
function fi(e, t) {
  if (t && t.themeXLSX) return t.themeXLSX
  if (e && typeof e.raw == 'string') return e.raw
  var r = [Re]
  return (
    (r[r.length] =
      '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">'),
    (r[r.length] = '<a:themeElements>'),
    (r[r.length] = '<a:clrScheme name="Office">'),
    (r[r.length] = '<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>'),
    (r[r.length] = '<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>'),
    (r[r.length] = '<a:dk2><a:srgbClr val="1F497D"/></a:dk2>'),
    (r[r.length] = '<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>'),
    (r[r.length] = '<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>'),
    (r[r.length] = '<a:accent2><a:srgbClr val="C0504D"/></a:accent2>'),
    (r[r.length] = '<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>'),
    (r[r.length] = '<a:accent4><a:srgbClr val="8064A2"/></a:accent4>'),
    (r[r.length] = '<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>'),
    (r[r.length] = '<a:accent6><a:srgbClr val="F79646"/></a:accent6>'),
    (r[r.length] = '<a:hlink><a:srgbClr val="0000FF"/></a:hlink>'),
    (r[r.length] = '<a:folHlink><a:srgbClr val="800080"/></a:folHlink>'),
    (r[r.length] = '</a:clrScheme>'),
    (r[r.length] = '<a:fontScheme name="Office">'),
    (r[r.length] = '<a:majorFont>'),
    (r[r.length] = '<a:latin typeface="Cambria"/>'),
    (r[r.length] = '<a:ea typeface=""/>'),
    (r[r.length] = '<a:cs typeface=""/>'),
    (r[r.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>'),
    (r[r.length] = '<a:font script="Hang" typeface="맑은 고딕"/>'),
    (r[r.length] = '<a:font script="Hans" typeface="宋体"/>'),
    (r[r.length] = '<a:font script="Hant" typeface="新細明體"/>'),
    (r[r.length] = '<a:font script="Arab" typeface="Times New Roman"/>'),
    (r[r.length] = '<a:font script="Hebr" typeface="Times New Roman"/>'),
    (r[r.length] = '<a:font script="Thai" typeface="Tahoma"/>'),
    (r[r.length] = '<a:font script="Ethi" typeface="Nyala"/>'),
    (r[r.length] = '<a:font script="Beng" typeface="Vrinda"/>'),
    (r[r.length] = '<a:font script="Gujr" typeface="Shruti"/>'),
    (r[r.length] = '<a:font script="Khmr" typeface="MoolBoran"/>'),
    (r[r.length] = '<a:font script="Knda" typeface="Tunga"/>'),
    (r[r.length] = '<a:font script="Guru" typeface="Raavi"/>'),
    (r[r.length] = '<a:font script="Cans" typeface="Euphemia"/>'),
    (r[r.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>'),
    (r[r.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>'),
    (r[r.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>'),
    (r[r.length] = '<a:font script="Thaa" typeface="MV Boli"/>'),
    (r[r.length] = '<a:font script="Deva" typeface="Mangal"/>'),
    (r[r.length] = '<a:font script="Telu" typeface="Gautami"/>'),
    (r[r.length] = '<a:font script="Taml" typeface="Latha"/>'),
    (r[r.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>'),
    (r[r.length] = '<a:font script="Orya" typeface="Kalinga"/>'),
    (r[r.length] = '<a:font script="Mlym" typeface="Kartika"/>'),
    (r[r.length] = '<a:font script="Laoo" typeface="DokChampa"/>'),
    (r[r.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>'),
    (r[r.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>'),
    (r[r.length] = '<a:font script="Viet" typeface="Times New Roman"/>'),
    (r[r.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>'),
    (r[r.length] = '<a:font script="Geor" typeface="Sylfaen"/>'),
    (r[r.length] = '</a:majorFont>'),
    (r[r.length] = '<a:minorFont>'),
    (r[r.length] = '<a:latin typeface="Calibri"/>'),
    (r[r.length] = '<a:ea typeface=""/>'),
    (r[r.length] = '<a:cs typeface=""/>'),
    (r[r.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>'),
    (r[r.length] = '<a:font script="Hang" typeface="맑은 고딕"/>'),
    (r[r.length] = '<a:font script="Hans" typeface="宋体"/>'),
    (r[r.length] = '<a:font script="Hant" typeface="新細明體"/>'),
    (r[r.length] = '<a:font script="Arab" typeface="Arial"/>'),
    (r[r.length] = '<a:font script="Hebr" typeface="Arial"/>'),
    (r[r.length] = '<a:font script="Thai" typeface="Tahoma"/>'),
    (r[r.length] = '<a:font script="Ethi" typeface="Nyala"/>'),
    (r[r.length] = '<a:font script="Beng" typeface="Vrinda"/>'),
    (r[r.length] = '<a:font script="Gujr" typeface="Shruti"/>'),
    (r[r.length] = '<a:font script="Khmr" typeface="DaunPenh"/>'),
    (r[r.length] = '<a:font script="Knda" typeface="Tunga"/>'),
    (r[r.length] = '<a:font script="Guru" typeface="Raavi"/>'),
    (r[r.length] = '<a:font script="Cans" typeface="Euphemia"/>'),
    (r[r.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>'),
    (r[r.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>'),
    (r[r.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>'),
    (r[r.length] = '<a:font script="Thaa" typeface="MV Boli"/>'),
    (r[r.length] = '<a:font script="Deva" typeface="Mangal"/>'),
    (r[r.length] = '<a:font script="Telu" typeface="Gautami"/>'),
    (r[r.length] = '<a:font script="Taml" typeface="Latha"/>'),
    (r[r.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>'),
    (r[r.length] = '<a:font script="Orya" typeface="Kalinga"/>'),
    (r[r.length] = '<a:font script="Mlym" typeface="Kartika"/>'),
    (r[r.length] = '<a:font script="Laoo" typeface="DokChampa"/>'),
    (r[r.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>'),
    (r[r.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>'),
    (r[r.length] = '<a:font script="Viet" typeface="Arial"/>'),
    (r[r.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>'),
    (r[r.length] = '<a:font script="Geor" typeface="Sylfaen"/>'),
    (r[r.length] = '</a:minorFont>'),
    (r[r.length] = '</a:fontScheme>'),
    (r[r.length] = '<a:fmtScheme name="Office">'),
    (r[r.length] = '<a:fillStyleLst>'),
    (r[r.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>'),
    (r[r.length] = '<a:gradFill rotWithShape="1">'),
    (r[r.length] = '<a:gsLst>'),
    (r[r.length] =
      '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>'),
    (r[r.length] =
      '<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>'),
    (r[r.length] =
      '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
    (r[r.length] = '</a:gsLst>'),
    (r[r.length] = '<a:lin ang="16200000" scaled="1"/>'),
    (r[r.length] = '</a:gradFill>'),
    (r[r.length] = '<a:gradFill rotWithShape="1">'),
    (r[r.length] = '<a:gsLst>'),
    (r[r.length] =
      '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>'),
    (r[r.length] =
      '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
    (r[r.length] = '</a:gsLst>'),
    (r[r.length] = '<a:lin ang="16200000" scaled="0"/>'),
    (r[r.length] = '</a:gradFill>'),
    (r[r.length] = '</a:fillStyleLst>'),
    (r[r.length] = '<a:lnStyleLst>'),
    (r[r.length] =
      '<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>'),
    (r[r.length] =
      '<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>'),
    (r[r.length] =
      '<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>'),
    (r[r.length] = '</a:lnStyleLst>'),
    (r[r.length] = '<a:effectStyleLst>'),
    (r[r.length] = '<a:effectStyle>'),
    (r[r.length] = '<a:effectLst>'),
    (r[r.length] =
      '<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>'),
    (r[r.length] = '</a:effectLst>'),
    (r[r.length] = '</a:effectStyle>'),
    (r[r.length] = '<a:effectStyle>'),
    (r[r.length] = '<a:effectLst>'),
    (r[r.length] =
      '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>'),
    (r[r.length] = '</a:effectLst>'),
    (r[r.length] = '</a:effectStyle>'),
    (r[r.length] = '<a:effectStyle>'),
    (r[r.length] = '<a:effectLst>'),
    (r[r.length] =
      '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>'),
    (r[r.length] = '</a:effectLst>'),
    (r[r.length] =
      '<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>'),
    (r[r.length] = '<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>'),
    (r[r.length] = '</a:effectStyle>'),
    (r[r.length] = '</a:effectStyleLst>'),
    (r[r.length] = '<a:bgFillStyleLst>'),
    (r[r.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>'),
    (r[r.length] = '<a:gradFill rotWithShape="1">'),
    (r[r.length] = '<a:gsLst>'),
    (r[r.length] =
      '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
    (r[r.length] =
      '<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
    (r[r.length] =
      '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>'),
    (r[r.length] = '</a:gsLst>'),
    (r[r.length] =
      '<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>'),
    (r[r.length] = '</a:gradFill>'),
    (r[r.length] = '<a:gradFill rotWithShape="1">'),
    (r[r.length] = '<a:gsLst>'),
    (r[r.length] =
      '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>'),
    (r[r.length] =
      '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>'),
    (r[r.length] = '</a:gsLst>'),
    (r[r.length] =
      '<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>'),
    (r[r.length] = '</a:gradFill>'),
    (r[r.length] = '</a:bgFillStyleLst>'),
    (r[r.length] = '</a:fmtScheme>'),
    (r[r.length] = '</a:themeElements>'),
    (r[r.length] = '<a:objectDefaults>'),
    (r[r.length] = '<a:spDef>'),
    (r[r.length] =
      '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>'),
    (r[r.length] = '</a:spDef>'),
    (r[r.length] = '<a:lnDef>'),
    (r[r.length] =
      '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>'),
    (r[r.length] = '</a:lnDef>'),
    (r[r.length] = '</a:objectDefaults>'),
    (r[r.length] = '<a:extraClrSchemeLst/>'),
    (r[r.length] = '</a:theme>'),
    r.join('')
  )
}
function no(e, t) {
  return { flags: e.read_shift(4), version: e.read_shift(4), name: Ke(e) }
}
function ao(e) {
  var t = B(12 + 2 * e.name.length)
  return t.write_shift(4, e.flags), t.write_shift(4, e.version), Le(e.name, t), t.slice(0, t.l)
}
function io(e) {
  for (var t = [], r = e.read_shift(4); r-- > 0; ) t.push([e.read_shift(4), e.read_shift(4)])
  return t
}
function so(e) {
  var t = B(4 + 8 * e.length)
  t.write_shift(4, e.length)
  for (var r = 0; r < e.length; ++r) t.write_shift(4, e[r][0]), t.write_shift(4, e[r][1])
  return t
}
function fo(e, t) {
  var r = B(8 + 2 * t.length)
  return r.write_shift(4, e), Le(t, r), r.slice(0, r.l)
}
function lo(e) {
  return (e.l += 4), e.read_shift(4) != 0
}
function oo(e, t) {
  var r = B(8)
  return r.write_shift(4, e), r.write_shift(4, t ? 1 : 0), r
}
function co() {
  var e = Ze()
  return (
    W(e, 332),
    W(e, 334, vr(1)),
    W(e, 335, ao({ name: 'XLDAPR', version: 12e4, flags: 3496657072 })),
    W(e, 336),
    W(e, 339, fo(1, 'XLDAPR')),
    W(e, 52),
    W(e, 35, vr(514)),
    W(e, 4096, vr(0)),
    W(e, 4097, or(1)),
    W(e, 36),
    W(e, 53),
    W(e, 340),
    W(e, 337, oo(1, !0)),
    W(e, 51, so([[1, 0]])),
    W(e, 338),
    W(e, 333),
    e.end()
  )
}
function li() {
  var e = [Re]
  return (
    e.push(`<metadata xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:xlrd="http://schemas.microsoft.com/office/spreadsheetml/2017/richdata" xmlns:xda="http://schemas.microsoft.com/office/spreadsheetml/2017/dynamicarray">
  <metadataTypes count="1">
    <metadataType name="XLDAPR" minSupportedVersion="120000" copy="1" pasteAll="1" pasteValues="1" merge="1" splitFirst="1" rowColShift="1" clearFormats="1" clearComments="1" assign="1" coerce="1" cellMeta="1"/>
  </metadataTypes>
  <futureMetadata name="XLDAPR" count="1">
    <bk>
      <extLst>
        <ext uri="{bdbb8cdc-fa1e-496e-a857-3c3f30c029c3}">
          <xda:dynamicArrayProperties fDynamic="1" fCollapsed="0"/>
        </ext>
      </extLst>
    </bk>
  </futureMetadata>
  <cellMetadata count="1">
    <bk>
      <rc t="1" v="0"/>
    </bk>
  </cellMetadata>
</metadata>`),
    e.join('')
  )
}
function ho(e) {
  var t = {}
  t.i = e.read_shift(4)
  var r = {}
  ;(r.r = e.read_shift(4)), (r.c = e.read_shift(4)), (t.r = me(r))
  var n = e.read_shift(1)
  return n & 2 && (t.l = '1'), n & 8 && (t.a = '1'), t
}
var it = 1024
function oi(e, t) {
  for (
    var r = [21600, 21600],
      n = ['m0,0l0', r[1], r[0], r[1], r[0], '0xe'].join(','),
      a = [
        j('xml', null, {
          'xmlns:v': nr.v,
          'xmlns:o': nr.o,
          'xmlns:x': nr.x,
          'xmlns:mv': nr.mv
        }).replace(/\/>/, '>'),
        j('o:shapelayout', j('o:idmap', null, { 'v:ext': 'edit', data: e }), { 'v:ext': 'edit' }),
        j(
          'v:shapetype',
          [
            j('v:stroke', null, { joinstyle: 'miter' }),
            j('v:path', null, { gradientshapeok: 't', 'o:connecttype': 'rect' })
          ].join(''),
          { id: '_x0000_t202', 'o:spt': 202, coordsize: r.join(','), path: n }
        )
      ];
    it < e * 1e3;

  )
    it += 1e3
  return (
    t.forEach(function (i) {
      var s = Pe(i[0]),
        f = { color2: '#BEFF82', type: 'gradient' }
      f.type == 'gradient' && (f.angle = '-180')
      var o =
          f.type == 'gradient'
            ? j('o:fill', null, { type: 'gradientUnscaled', 'v:ext': 'view' })
            : null,
        l = j('v:fill', o, f),
        c = { on: 't', obscured: 't' }
      ++it,
        (a = a.concat([
          '<v:shape' +
            It({
              id: '_x0000_s' + it,
              type: '#_x0000_t202',
              style:
                'position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10' +
                (i[1].hidden ? ';visibility:hidden' : ''),
              fillcolor: '#ECFAD4',
              strokecolor: '#edeaa1'
            }) +
            '>',
          l,
          j('v:shadow', null, c),
          j('v:path', null, { 'o:connecttype': 'none' }),
          '<v:textbox><div style="text-align:left"></div></v:textbox>',
          '<x:ClientData ObjectType="Note">',
          '<x:MoveWithCells/>',
          '<x:SizeWithCells/>',
          We('x:Anchor', [s.c + 1, 0, s.r + 1, 0, s.c + 3, 20, s.r + 5, 20].join(',')),
          We('x:AutoFill', 'False'),
          We('x:Row', String(s.r)),
          We('x:Column', String(s.c)),
          i[1].hidden ? '' : '<x:Visible/>',
          '</x:ClientData>',
          '</v:shape>'
        ]))
    }),
    a.push('</xml>'),
    a.join('')
  )
}
function ci(e) {
  var t = [Re, j('comments', null, { xmlns: ht[0] })],
    r = []
  return (
    t.push('<authors>'),
    e.forEach(function (n) {
      n[1].forEach(function (a) {
        var i = ve(a.a)
        r.indexOf(i) == -1 && (r.push(i), t.push('<author>' + i + '</author>')),
          a.T &&
            a.ID &&
            r.indexOf('tc=' + a.ID) == -1 &&
            (r.push('tc=' + a.ID), t.push('<author>tc=' + a.ID + '</author>'))
      })
    }),
    r.length == 0 && (r.push('SheetJ5'), t.push('<author>SheetJ5</author>')),
    t.push('</authors>'),
    t.push('<commentList>'),
    e.forEach(function (n) {
      var a = 0,
        i = []
      if (
        (n[1][0] && n[1][0].T && n[1][0].ID
          ? (a = r.indexOf('tc=' + n[1][0].ID))
          : n[1].forEach(function (o) {
              o.a && (a = r.indexOf(ve(o.a))), i.push(o.t || '')
            }),
        t.push('<comment ref="' + n[0] + '" authorId="' + a + '"><text>'),
        i.length <= 1)
      )
        t.push(We('t', ve(i[0] || '')))
      else {
        for (
          var s =
              `Comment:
    ` +
              i[0] +
              `
`,
            f = 1;
          f < i.length;
          ++f
        )
          s +=
            `Reply:
    ` +
            i[f] +
            `
`
        t.push(We('t', ve(s)))
      }
      t.push('</text></comment>')
    }),
    t.push('</commentList>'),
    t.length > 2 && ((t[t.length] = '</comments>'), (t[1] = t[1].replace('/>', '>'))),
    t.join('')
  )
}
function uo(e, t, r) {
  var n = [Re, j('ThreadedComments', null, { xmlns: ke.TCMNT }).replace(/[\/]>/, '>')]
  return (
    e.forEach(function (a) {
      var i = ''
      ;(a[1] || []).forEach(function (s, f) {
        if (!s.T) {
          delete s.ID
          return
        }
        s.a && t.indexOf(s.a) == -1 && t.push(s.a)
        var o = {
          ref: a[0],
          id: '{54EE7951-7262-4200-6969-' + ('000000000000' + r.tcid++).slice(-12) + '}'
        }
        f == 0 ? (i = o.id) : (o.parentId = i),
          (s.ID = o.id),
          s.a &&
            (o.personId =
              '{54EE7950-7262-4200-6969-' + ('000000000000' + t.indexOf(s.a)).slice(-12) + '}'),
          n.push(j('threadedComment', We('text', s.t || ''), o))
      })
    }),
    n.push('</ThreadedComments>'),
    n.join('')
  )
}
function xo(e) {
  var t = [Re, j('personList', null, { xmlns: ke.TCMNT, 'xmlns:x': ht[0] }).replace(/[\/]>/, '>')]
  return (
    e.forEach(function (r, n) {
      t.push(
        j('person', null, {
          displayName: r,
          id: '{54EE7950-7262-4200-6969-' + ('000000000000' + n).slice(-12) + '}',
          userId: r,
          providerId: 'None'
        })
      )
    }),
    t.push('</personList>'),
    t.join('')
  )
}
function po(e) {
  var t = {}
  t.iauthor = e.read_shift(4)
  var r = qr(e)
  return (t.rfx = r.s), (t.ref = me(r.s)), (e.l += 16), t
}
function vo(e, t) {
  return (
    t == null && (t = B(36)),
    t.write_shift(4, e[1].iauthor),
    xt(e[0], t),
    t.write_shift(4, 0),
    t.write_shift(4, 0),
    t.write_shift(4, 0),
    t.write_shift(4, 0),
    t
  )
}
var mo = Ke
function go(e) {
  return Le(e.slice(0, 54))
}
function _o(e) {
  var t = Ze(),
    r = []
  return (
    W(t, 628),
    W(t, 630),
    e.forEach(function (n) {
      n[1].forEach(function (a) {
        r.indexOf(a.a) > -1 || (r.push(a.a.slice(0, 54)), W(t, 632, go(a.a)))
      })
    }),
    W(t, 631),
    W(t, 633),
    e.forEach(function (n) {
      n[1].forEach(function (a) {
        a.iauthor = r.indexOf(a.a)
        var i = { s: Pe(n[0]), e: Pe(n[0]) }
        W(t, 635, vo([i, a])),
          a.t && a.t.length > 0 && W(t, 637, Tf(a)),
          W(t, 636),
          delete a.iauthor
      })
    }),
    W(t, 634),
    W(t, 629),
    t.end()
  )
}
function To(e, t) {
  t.FullPaths.forEach(function (r, n) {
    if (n != 0) {
      var a = r.replace(/[^\/]*[\/]/, '/_VBA_PROJECT_CUR/')
      a.slice(-1) !== '/' && _e.utils.cfb_add(e, a, t.FileIndex[n].content)
    }
  })
}
var hi = ['xlsb', 'xlsm', 'xlam', 'biff8', 'xla'],
  Eo = (function () {
    var e = /(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g,
      t = { r: 0, c: 0 }
    function r(n, a, i, s) {
      var f = !1,
        o = !1
      i.length == 0 ? (o = !0) : i.charAt(0) == '[' && ((o = !0), (i = i.slice(1, -1))),
        s.length == 0 ? (f = !0) : s.charAt(0) == '[' && ((f = !0), (s = s.slice(1, -1)))
      var l = i.length > 0 ? parseInt(i, 10) | 0 : 0,
        c = s.length > 0 ? parseInt(s, 10) | 0 : 0
      return (
        f ? (c += t.c) : --c,
        o ? (l += t.r) : --l,
        a + (f ? '' : '$') + ze(c) + (o ? '' : '$') + He(l)
      )
    }
    return function (a, i) {
      return (t = i), a.replace(e, r)
    }
  })(),
  Z0 =
    /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g,
  q0 = (function () {
    return function (t, r) {
      return t.replace(Z0, function (n, a, i, s, f, o) {
        var l = z0(s) - (i ? 0 : r.c),
          c = X0(o) - (f ? 0 : r.r),
          d = c == 0 ? '' : f ? c + 1 : '[' + c + ']',
          x = l == 0 ? '' : i ? l + 1 : '[' + l + ']'
        return a + 'R' + d + 'C' + x
      })
    }
  })()
function wo(e, t) {
  return e.replace(Z0, function (r, n, a, i, s, f) {
    return n + (a == '$' ? a + i : ze(z0(i) + t.c)) + (s == '$' ? s + f : He(X0(f) + t.r))
  })
}
function So(e) {
  return e.length != 1
}
function Oe(e) {
  e.l += 1
}
function Lr(e, t) {
  var r = e.read_shift(t == 1 ? 1 : 2)
  return [r & 16383, (r >> 14) & 1, (r >> 15) & 1]
}
function ui(e, t, r) {
  var n = 2
  if (r) {
    if (r.biff >= 2 && r.biff <= 5) return xi(e)
    r.biff == 12 && (n = 4)
  }
  var a = e.read_shift(n),
    i = e.read_shift(n),
    s = Lr(e, 2),
    f = Lr(e, 2)
  return {
    s: { r: a, c: s[0], cRel: s[1], rRel: s[2] },
    e: { r: i, c: f[0], cRel: f[1], rRel: f[2] }
  }
}
function xi(e) {
  var t = Lr(e, 2),
    r = Lr(e, 2),
    n = e.read_shift(1),
    a = e.read_shift(1)
  return {
    s: { r: t[0], c: n, cRel: t[1], rRel: t[2] },
    e: { r: r[0], c: a, cRel: r[1], rRel: r[2] }
  }
}
function Ao(e, t, r) {
  if (r.biff < 8) return xi(e)
  var n = e.read_shift(r.biff == 12 ? 4 : 2),
    a = e.read_shift(r.biff == 12 ? 4 : 2),
    i = Lr(e, 2),
    s = Lr(e, 2)
  return {
    s: { r: n, c: i[0], cRel: i[1], rRel: i[2] },
    e: { r: a, c: s[0], cRel: s[1], rRel: s[2] }
  }
}
function pi(e, t, r) {
  if (r && r.biff >= 2 && r.biff <= 5) return Fo(e)
  var n = e.read_shift(r && r.biff == 12 ? 4 : 2),
    a = Lr(e, 2)
  return { r: n, c: a[0], cRel: a[1], rRel: a[2] }
}
function Fo(e) {
  var t = Lr(e, 2),
    r = e.read_shift(1)
  return { r: t[0], c: r, cRel: t[1], rRel: t[2] }
}
function yo(e) {
  var t = e.read_shift(2),
    r = e.read_shift(2)
  return { r: t, c: r & 255, fQuoted: !!(r & 16384), cRel: r >> 15, rRel: r >> 15 }
}
function Co(e, t, r) {
  var n = r && r.biff ? r.biff : 8
  if (n >= 2 && n <= 5) return Oo(e)
  var a = e.read_shift(n >= 12 ? 4 : 2),
    i = e.read_shift(2),
    s = (i & 16384) >> 14,
    f = (i & 32768) >> 15
  if (((i &= 16383), f == 1)) for (; a > 524287; ) a -= 1048576
  if (s == 1) for (; i > 8191; ) i = i - 16384
  return { r: a, c: i, cRel: s, rRel: f }
}
function Oo(e) {
  var t = e.read_shift(2),
    r = e.read_shift(1),
    n = (t & 32768) >> 15,
    a = (t & 16384) >> 14
  return (
    (t &= 16383),
    n == 1 && t >= 8192 && (t = t - 16384),
    a == 1 && r >= 128 && (r = r - 256),
    { r: t, c: r, cRel: a, rRel: n }
  )
}
function Do(e, t, r) {
  var n = (e[e.l++] & 96) >> 5,
    a = ui(e, r.biff >= 2 && r.biff <= 5 ? 6 : 8, r)
  return [n, a]
}
function Ro(e, t, r) {
  var n = (e[e.l++] & 96) >> 5,
    a = e.read_shift(2, 'i'),
    i = 8
  if (r)
    switch (r.biff) {
      case 5:
        ;(e.l += 12), (i = 6)
        break
      case 12:
        i = 12
        break
    }
  var s = ui(e, i, r)
  return [n, a, s]
}
function Io(e, t, r) {
  var n = (e[e.l++] & 96) >> 5
  return (e.l += r && r.biff > 8 ? 12 : r.biff < 8 ? 6 : 8), [n]
}
function No(e, t, r) {
  var n = (e[e.l++] & 96) >> 5,
    a = e.read_shift(2),
    i = 8
  if (r)
    switch (r.biff) {
      case 5:
        ;(e.l += 12), (i = 6)
        break
      case 12:
        i = 12
        break
    }
  return (e.l += i), [n, a]
}
function ko(e, t, r) {
  var n = (e[e.l++] & 96) >> 5,
    a = Ao(e, t - 1, r)
  return [n, a]
}
function Po(e, t, r) {
  var n = (e[e.l++] & 96) >> 5
  return (e.l += r.biff == 2 ? 6 : r.biff == 12 ? 14 : 7), [n]
}
function $n(e) {
  var t = e[e.l + 1] & 1,
    r = 1
  return (e.l += 4), [t, r]
}
function Lo(e, t, r) {
  e.l += 2
  for (var n = e.read_shift(r && r.biff == 2 ? 1 : 2), a = [], i = 0; i <= n; ++i)
    a.push(e.read_shift(r && r.biff == 2 ? 1 : 2))
  return a
}
function Mo(e, t, r) {
  var n = e[e.l + 1] & 255 ? 1 : 0
  return (e.l += 2), [n, e.read_shift(r && r.biff == 2 ? 1 : 2)]
}
function Bo(e, t, r) {
  var n = e[e.l + 1] & 255 ? 1 : 0
  return (e.l += 2), [n, e.read_shift(r && r.biff == 2 ? 1 : 2)]
}
function Uo(e) {
  var t = e[e.l + 1] & 255 ? 1 : 0
  return (e.l += 2), [t, e.read_shift(2)]
}
function bo(e, t, r) {
  var n = e[e.l + 1] & 255 ? 1 : 0
  return (e.l += r && r.biff == 2 ? 3 : 4), [n]
}
function di(e) {
  var t = e.read_shift(1),
    r = e.read_shift(1)
  return [t, r]
}
function Wo(e) {
  return e.read_shift(2), di(e)
}
function Ho(e) {
  return e.read_shift(2), di(e)
}
function Vo(e, t, r) {
  var n = (e[e.l] & 96) >> 5
  e.l += 1
  var a = pi(e, 0, r)
  return [n, a]
}
function Go(e, t, r) {
  var n = (e[e.l] & 96) >> 5
  e.l += 1
  var a = Co(e, 0, r)
  return [n, a]
}
function Xo(e, t, r) {
  var n = (e[e.l] & 96) >> 5
  e.l += 1
  var a = e.read_shift(2)
  r && r.biff == 5 && (e.l += 12)
  var i = pi(e, 0, r)
  return [n, a, i]
}
function zo(e, t, r) {
  var n = (e[e.l] & 96) >> 5
  e.l += 1
  var a = e.read_shift(r && r.biff <= 3 ? 1 : 2)
  return [zc[a], gi[a], n]
}
function Ko(e, t, r) {
  var n = e[e.l++],
    a = e.read_shift(1),
    i = r && r.biff <= 3 ? [n == 88 ? -1 : 0, e.read_shift(1)] : jo(e)
  return [a, (i[0] === 0 ? gi : Xc)[i[1]]]
}
function jo(e) {
  return [e[e.l + 1] >> 7, e.read_shift(2) & 32767]
}
function Yo(e, t, r) {
  e.l += r && r.biff == 2 ? 3 : 4
}
function $o(e, t, r) {
  if ((e.l++, r && r.biff == 12)) return [e.read_shift(4, 'i'), 0]
  var n = e.read_shift(2),
    a = e.read_shift(r && r.biff == 2 ? 1 : 2)
  return [n, a]
}
function Jo(e) {
  return e.l++, Bt[e.read_shift(1)]
}
function Zo(e) {
  return e.l++, e.read_shift(2)
}
function qo(e) {
  return e.l++, e.read_shift(1) !== 0
}
function Qo(e) {
  return e.l++, pt(e)
}
function ec(e, t, r) {
  return e.l++, Za(e, t - 1, r)
}
function rc(e, t) {
  var r = [e.read_shift(1)]
  if (t == 12)
    switch (r[0]) {
      case 2:
        r[0] = 4
        break
      case 4:
        r[0] = 16
        break
      case 0:
        r[0] = 1
        break
      case 1:
        r[0] = 2
        break
    }
  switch (r[0]) {
    case 4:
      ;(r[1] = Gf(e, 1) ? 'TRUE' : 'FALSE'), t != 12 && (e.l += 7)
      break
    case 37:
    case 16:
      ;(r[1] = Bt[e[e.l]]), (e.l += t == 12 ? 4 : 8)
      break
    case 0:
      e.l += 8
      break
    case 1:
      r[1] = pt(e)
      break
    case 2:
      r[1] = jf(e, 0, { biff: t > 0 && t < 8 ? 2 : t })
      break
    default:
      throw new Error('Bad SerAr: ' + r[0])
  }
  return r
}
function tc(e, t, r) {
  for (var n = e.read_shift(r.biff == 12 ? 4 : 2), a = [], i = 0; i != n; ++i)
    a.push((r.biff == 12 ? qr : Jf)(e))
  return a
}
function nc(e, t, r) {
  var n = 0,
    a = 0
  r.biff == 12
    ? ((n = e.read_shift(4)), (a = e.read_shift(4)))
    : ((a = 1 + e.read_shift(1)), (n = 1 + e.read_shift(2))),
    r.biff >= 2 && r.biff < 8 && (--n, --a == 0 && (a = 256))
  for (var i = 0, s = []; i != n && (s[i] = []); ++i)
    for (var f = 0; f != a; ++f) s[i][f] = rc(e, r.biff)
  return s
}
function ac(e, t, r) {
  var n = (e.read_shift(1) >>> 5) & 3,
    a = !r || r.biff >= 8 ? 4 : 2,
    i = e.read_shift(a)
  switch (r.biff) {
    case 2:
      e.l += 5
      break
    case 3:
    case 4:
      e.l += 8
      break
    case 5:
      e.l += 12
      break
  }
  return [n, 0, i]
}
function ic(e, t, r) {
  if (r.biff == 5) return sc(e)
  var n = (e.read_shift(1) >>> 5) & 3,
    a = e.read_shift(2),
    i = e.read_shift(4)
  return [n, a, i]
}
function sc(e) {
  var t = (e.read_shift(1) >>> 5) & 3,
    r = e.read_shift(2, 'i')
  e.l += 8
  var n = e.read_shift(2)
  return (e.l += 12), [t, r, n]
}
function fc(e, t, r) {
  var n = (e.read_shift(1) >>> 5) & 3
  e.l += r && r.biff == 2 ? 3 : 4
  var a = e.read_shift(r && r.biff == 2 ? 1 : 2)
  return [n, a]
}
function lc(e, t, r) {
  var n = (e.read_shift(1) >>> 5) & 3,
    a = e.read_shift(r && r.biff == 2 ? 1 : 2)
  return [n, a]
}
function oc(e, t, r) {
  var n = (e.read_shift(1) >>> 5) & 3
  return (e.l += 4), r.biff < 8 && e.l--, r.biff == 12 && (e.l += 2), [n]
}
function cc(e, t, r) {
  var n = (e[e.l++] & 96) >> 5,
    a = e.read_shift(2),
    i = 4
  if (r)
    switch (r.biff) {
      case 5:
        i = 15
        break
      case 12:
        i = 6
        break
    }
  return (e.l += i), [n, a]
}
var hc = Tr,
  uc = Tr,
  xc = Tr
function Ut(e, t, r) {
  return (e.l += 2), [yo(e)]
}
function Q0(e) {
  return (e.l += 6), []
}
var pc = Ut,
  dc = Q0,
  vc = Q0,
  mc = Ut
function vi(e) {
  return (e.l += 2), [$a(e), e.read_shift(2) & 1]
}
var gc = Ut,
  _c = vi,
  Tc = Q0,
  Ec = Ut,
  wc = Ut,
  Sc = [
    'Data',
    'All',
    'Headers',
    '??',
    '?Data2',
    '??',
    '?DataHeaders',
    '??',
    'Totals',
    '??',
    '??',
    '??',
    '?DataTotals',
    '??',
    '??',
    '??',
    '?Current'
  ]
function Ac(e) {
  e.l += 2
  var t = e.read_shift(2),
    r = e.read_shift(2),
    n = e.read_shift(4),
    a = e.read_shift(2),
    i = e.read_shift(2),
    s = Sc[(r >> 2) & 31]
  return { ixti: t, coltype: r & 3, rt: s, idx: n, c: a, C: i }
}
function Fc(e) {
  return (e.l += 2), [e.read_shift(4)]
}
function yc(e, t, r) {
  return (e.l += 5), (e.l += 2), (e.l += r.biff == 2 ? 1 : 4), ['PTGSHEET']
}
function Cc(e, t, r) {
  return (e.l += r.biff == 2 ? 4 : 5), ['PTGENDSHEET']
}
function Oc(e) {
  var t = (e.read_shift(1) >>> 5) & 3,
    r = e.read_shift(2)
  return [t, r]
}
function Dc(e) {
  var t = (e.read_shift(1) >>> 5) & 3,
    r = e.read_shift(2)
  return [t, r]
}
function Rc(e) {
  return (e.l += 4), [0, 0]
}
var Jn = {
    1: { n: 'PtgExp', f: $o },
    2: { n: 'PtgTbl', f: xc },
    3: { n: 'PtgAdd', f: Oe },
    4: { n: 'PtgSub', f: Oe },
    5: { n: 'PtgMul', f: Oe },
    6: { n: 'PtgDiv', f: Oe },
    7: { n: 'PtgPower', f: Oe },
    8: { n: 'PtgConcat', f: Oe },
    9: { n: 'PtgLt', f: Oe },
    10: { n: 'PtgLe', f: Oe },
    11: { n: 'PtgEq', f: Oe },
    12: { n: 'PtgGe', f: Oe },
    13: { n: 'PtgGt', f: Oe },
    14: { n: 'PtgNe', f: Oe },
    15: { n: 'PtgIsect', f: Oe },
    16: { n: 'PtgUnion', f: Oe },
    17: { n: 'PtgRange', f: Oe },
    18: { n: 'PtgUplus', f: Oe },
    19: { n: 'PtgUminus', f: Oe },
    20: { n: 'PtgPercent', f: Oe },
    21: { n: 'PtgParen', f: Oe },
    22: { n: 'PtgMissArg', f: Oe },
    23: { n: 'PtgStr', f: ec },
    26: { n: 'PtgSheet', f: yc },
    27: { n: 'PtgEndSheet', f: Cc },
    28: { n: 'PtgErr', f: Jo },
    29: { n: 'PtgBool', f: qo },
    30: { n: 'PtgInt', f: Zo },
    31: { n: 'PtgNum', f: Qo },
    32: { n: 'PtgArray', f: Po },
    33: { n: 'PtgFunc', f: zo },
    34: { n: 'PtgFuncVar', f: Ko },
    35: { n: 'PtgName', f: ac },
    36: { n: 'PtgRef', f: Vo },
    37: { n: 'PtgArea', f: Do },
    38: { n: 'PtgMemArea', f: fc },
    39: { n: 'PtgMemErr', f: hc },
    40: { n: 'PtgMemNoMem', f: uc },
    41: { n: 'PtgMemFunc', f: lc },
    42: { n: 'PtgRefErr', f: oc },
    43: { n: 'PtgAreaErr', f: Io },
    44: { n: 'PtgRefN', f: Go },
    45: { n: 'PtgAreaN', f: ko },
    46: { n: 'PtgMemAreaN', f: Oc },
    47: { n: 'PtgMemNoMemN', f: Dc },
    57: { n: 'PtgNameX', f: ic },
    58: { n: 'PtgRef3d', f: Xo },
    59: { n: 'PtgArea3d', f: Ro },
    60: { n: 'PtgRefErr3d', f: cc },
    61: { n: 'PtgAreaErr3d', f: No },
    255: {}
  },
  Ic = {
    64: 32,
    96: 32,
    65: 33,
    97: 33,
    66: 34,
    98: 34,
    67: 35,
    99: 35,
    68: 36,
    100: 36,
    69: 37,
    101: 37,
    70: 38,
    102: 38,
    71: 39,
    103: 39,
    72: 40,
    104: 40,
    73: 41,
    105: 41,
    74: 42,
    106: 42,
    75: 43,
    107: 43,
    76: 44,
    108: 44,
    77: 45,
    109: 45,
    78: 46,
    110: 46,
    79: 47,
    111: 47,
    88: 34,
    120: 34,
    89: 57,
    121: 57,
    90: 58,
    122: 58,
    91: 59,
    123: 59,
    92: 60,
    124: 60,
    93: 61,
    125: 61
  },
  Nc = {
    1: { n: 'PtgElfLel', f: vi },
    2: { n: 'PtgElfRw', f: Ec },
    3: { n: 'PtgElfCol', f: pc },
    6: { n: 'PtgElfRwV', f: wc },
    7: { n: 'PtgElfColV', f: mc },
    10: { n: 'PtgElfRadical', f: gc },
    11: { n: 'PtgElfRadicalS', f: Tc },
    13: { n: 'PtgElfColS', f: dc },
    15: { n: 'PtgElfColSV', f: vc },
    16: { n: 'PtgElfRadicalLel', f: _c },
    25: { n: 'PtgList', f: Ac },
    29: { n: 'PtgSxName', f: Fc },
    255: {}
  },
  kc = {
    0: { n: 'PtgAttrNoop', f: Rc },
    1: { n: 'PtgAttrSemi', f: bo },
    2: { n: 'PtgAttrIf', f: Bo },
    4: { n: 'PtgAttrChoose', f: Lo },
    8: { n: 'PtgAttrGoto', f: Mo },
    16: { n: 'PtgAttrSum', f: Yo },
    32: { n: 'PtgAttrBaxcel', f: $n },
    33: { n: 'PtgAttrBaxcel', f: $n },
    64: { n: 'PtgAttrSpace', f: Wo },
    65: { n: 'PtgAttrSpaceSemi', f: Ho },
    128: { n: 'PtgAttrIfError', f: Uo },
    255: {}
  }
function Pc(e, t, r, n) {
  if (n.biff < 8) return Tr(e, t)
  for (var a = e.l + t, i = [], s = 0; s !== r.length; ++s)
    switch (r[s][0]) {
      case 'PtgArray':
        ;(r[s][1] = nc(e, 0, n)), i.push(r[s][1])
        break
      case 'PtgMemArea':
        ;(r[s][2] = tc(e, r[s][1], n)), i.push(r[s][2])
        break
      case 'PtgExp':
        n && n.biff == 12 && ((r[s][1][1] = e.read_shift(4)), i.push(r[s][1]))
        break
      case 'PtgList':
      case 'PtgElfRadicalS':
      case 'PtgElfColS':
      case 'PtgElfColSV':
        throw 'Unsupported ' + r[s][0]
    }
  return (t = a - e.l), t !== 0 && i.push(Tr(e, t)), i
}
function Lc(e, t, r) {
  for (var n = e.l + t, a, i, s = []; n != e.l; )
    (t = n - e.l),
      (i = e[e.l]),
      (a = Jn[i] || Jn[Ic[i]]),
      (i === 24 || i === 25) && (a = (i === 24 ? Nc : kc)[e[e.l + 1]]),
      !a || !a.f ? Tr(e, t) : s.push([a.n, a.f(e, t, r)])
  return s
}
function Mc(e) {
  for (var t = [], r = 0; r < e.length; ++r) {
    for (var n = e[r], a = [], i = 0; i < n.length; ++i) {
      var s = n[i]
      if (s)
        switch (s[0]) {
          case 2:
            a.push('"' + s[1].replace(/"/g, '""') + '"')
            break
          default:
            a.push(s[1])
        }
      else a.push('')
    }
    t.push(a.join(','))
  }
  return t.join(';')
}
var Bc = {
  PtgAdd: '+',
  PtgConcat: '&',
  PtgDiv: '/',
  PtgEq: '=',
  PtgGe: '>=',
  PtgGt: '>',
  PtgLe: '<=',
  PtgLt: '<',
  PtgMul: '*',
  PtgNe: '<>',
  PtgPower: '^',
  PtgSub: '-'
}
function Uc(e, t) {
  if (!e && !(t && t.biff <= 5 && t.biff >= 2)) throw new Error('empty sheet name')
  return /[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(e) ? "'" + e + "'" : e
}
function mi(e, t, r) {
  if (!e) return 'SH33TJSERR0'
  if (r.biff > 8 && (!e.XTI || !e.XTI[t])) return e.SheetNames[t]
  if (!e.XTI) return 'SH33TJSERR6'
  var n = e.XTI[t]
  if (r.biff < 8) return t > 1e4 && (t -= 65536), t < 0 && (t = -t), t == 0 ? '' : e.XTI[t - 1]
  if (!n) return 'SH33TJSERR1'
  var a = ''
  if (r.biff > 8)
    switch (e[n[0]][0]) {
      case 357:
        return (
          (a = n[1] == -1 ? '#REF' : e.SheetNames[n[1]]),
          n[1] == n[2] ? a : a + ':' + e.SheetNames[n[2]]
        )
      case 358:
        return r.SID != null ? e.SheetNames[r.SID] : 'SH33TJSSAME' + e[n[0]][0]
      case 355:
      default:
        return 'SH33TJSSRC' + e[n[0]][0]
    }
  switch (e[n[0]][0][0]) {
    case 1025:
      return (
        (a = n[1] == -1 ? '#REF' : e.SheetNames[n[1]] || 'SH33TJSERR3'),
        n[1] == n[2] ? a : a + ':' + e.SheetNames[n[2]]
      )
    case 14849:
      return e[n[0]]
        .slice(1)
        .map(function (i) {
          return i.Name
        })
        .join(';;')
    default:
      return e[n[0]][0][3]
        ? ((a = n[1] == -1 ? '#REF' : e[n[0]][0][3][n[1]] || 'SH33TJSERR4'),
          n[1] == n[2] ? a : a + ':' + e[n[0]][0][3][n[2]])
        : 'SH33TJSERR2'
  }
}
function Zn(e, t, r) {
  var n = mi(e, t, r)
  return n == '#REF' ? n : Uc(n, r)
}
function ct(e, t, r, n, a) {
  var i = (a && a.biff) || 8,
    s = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } },
    f = [],
    o,
    l,
    c,
    d = 0,
    x = 0,
    p,
    E = ''
  if (!e[0] || !e[0][0]) return ''
  for (var u = -1, _ = '', O = 0, R = e[0].length; O < R; ++O) {
    var y = e[0][O]
    switch (y[0]) {
      case 'PtgUminus':
        f.push('-' + f.pop())
        break
      case 'PtgUplus':
        f.push('+' + f.pop())
        break
      case 'PtgPercent':
        f.push(f.pop() + '%')
        break
      case 'PtgAdd':
      case 'PtgConcat':
      case 'PtgDiv':
      case 'PtgEq':
      case 'PtgGe':
      case 'PtgGt':
      case 'PtgLe':
      case 'PtgLt':
      case 'PtgMul':
      case 'PtgNe':
      case 'PtgPower':
      case 'PtgSub':
        if (((o = f.pop()), (l = f.pop()), u >= 0)) {
          switch (e[0][u][1][0]) {
            case 0:
              _ = Fe(' ', e[0][u][1][1])
              break
            case 1:
              _ = Fe('\r', e[0][u][1][1])
              break
            default:
              if (((_ = ''), a.WTF)) throw new Error('Unexpected PtgAttrSpaceType ' + e[0][u][1][0])
          }
          ;(l = l + _), (u = -1)
        }
        f.push(l + Bc[y[0]] + o)
        break
      case 'PtgIsect':
        ;(o = f.pop()), (l = f.pop()), f.push(l + ' ' + o)
        break
      case 'PtgUnion':
        ;(o = f.pop()), (l = f.pop()), f.push(l + ',' + o)
        break
      case 'PtgRange':
        ;(o = f.pop()), (l = f.pop()), f.push(l + ':' + o)
        break
      case 'PtgAttrChoose':
        break
      case 'PtgAttrGoto':
        break
      case 'PtgAttrIf':
        break
      case 'PtgAttrIfError':
        break
      case 'PtgRef':
        ;(c = Ft(y[1][1], s, a)), f.push(yt(c, i))
        break
      case 'PtgRefN':
        ;(c = r ? Ft(y[1][1], r, a) : y[1][1]), f.push(yt(c, i))
        break
      case 'PtgRef3d':
        ;(d = y[1][1]), (c = Ft(y[1][2], s, a)), (E = Zn(n, d, a)), f.push(E + '!' + yt(c, i))
        break
      case 'PtgFunc':
      case 'PtgFuncVar':
        var M = y[1][0],
          Y = y[1][1]
        M || (M = 0), (M &= 127)
        var ee = M == 0 ? [] : f.slice(-M)
        ;(f.length -= M), Y === 'User' && (Y = ee.shift()), f.push(Y + '(' + ee.join(',') + ')')
        break
      case 'PtgBool':
        f.push(y[1] ? 'TRUE' : 'FALSE')
        break
      case 'PtgInt':
        f.push(y[1])
        break
      case 'PtgNum':
        f.push(String(y[1]))
        break
      case 'PtgStr':
        f.push('"' + y[1].replace(/"/g, '""') + '"')
        break
      case 'PtgErr':
        f.push(y[1])
        break
      case 'PtgAreaN':
        ;(p = Ln(y[1][1], r ? { s: r } : s, a)), f.push(F0(p, a))
        break
      case 'PtgArea':
        ;(p = Ln(y[1][1], s, a)), f.push(F0(p, a))
        break
      case 'PtgArea3d':
        ;(d = y[1][1]), (p = y[1][2]), (E = Zn(n, d, a)), f.push(E + '!' + F0(p, a))
        break
      case 'PtgAttrSum':
        f.push('SUM(' + f.pop() + ')')
        break
      case 'PtgAttrBaxcel':
      case 'PtgAttrSemi':
        break
      case 'PtgName':
        x = y[1][2]
        var C = (n.names || [])[x - 1] || (n[0] || [])[x],
          b = C ? C.Name : 'SH33TJSNAME' + String(x)
        b && b.slice(0, 6) == '_xlfn.' && !a.xlfn && (b = b.slice(6)), f.push(b)
        break
      case 'PtgNameX':
        var L = y[1][1]
        x = y[1][2]
        var V
        if (a.biff <= 5) L < 0 && (L = -L), n[L] && (V = n[L][x])
        else {
          var G = ''
          if (
            (((n[L] || [])[0] || [])[0] == 14849 ||
              (((n[L] || [])[0] || [])[0] == 1025
                ? n[L][x] && n[L][x].itab > 0 && (G = n.SheetNames[n[L][x].itab - 1] + '!')
                : (G = n.SheetNames[x - 1] + '!')),
            n[L] && n[L][x])
          )
            G += n[L][x].Name
          else if (n[0] && n[0][x]) G += n[0][x].Name
          else {
            var z = (mi(n, L, a) || '').split(';;')
            z[x - 1] ? (G = z[x - 1]) : (G += 'SH33TJSERRX')
          }
          f.push(G)
          break
        }
        V || (V = { Name: 'SH33TJSERRY' }), f.push(V.Name)
        break
      case 'PtgParen':
        var re = '(',
          ge = ')'
        if (u >= 0) {
          switch (((_ = ''), e[0][u][1][0])) {
            case 2:
              re = Fe(' ', e[0][u][1][1]) + re
              break
            case 3:
              re = Fe('\r', e[0][u][1][1]) + re
              break
            case 4:
              ge = Fe(' ', e[0][u][1][1]) + ge
              break
            case 5:
              ge = Fe('\r', e[0][u][1][1]) + ge
              break
            default:
              if (a.WTF) throw new Error('Unexpected PtgAttrSpaceType ' + e[0][u][1][0])
          }
          u = -1
        }
        f.push(re + f.pop() + ge)
        break
      case 'PtgRefErr':
        f.push('#REF!')
        break
      case 'PtgRefErr3d':
        f.push('#REF!')
        break
      case 'PtgExp':
        c = { c: y[1][1], r: y[1][0] }
        var le = { c: r.c, r: r.r }
        if (n.sharedf[me(c)]) {
          var Me = n.sharedf[me(c)]
          f.push(ct(Me, s, le, n, a))
        } else {
          var Ce = !1
          for (o = 0; o != n.arrayf.length; ++o)
            if (
              ((l = n.arrayf[o]),
              !(c.c < l[0].s.c || c.c > l[0].e.c) && !(c.r < l[0].s.r || c.r > l[0].e.r))
            ) {
              f.push(ct(l[1], s, le, n, a)), (Ce = !0)
              break
            }
          Ce || f.push(y[1])
        }
        break
      case 'PtgArray':
        f.push('{' + Mc(y[1]) + '}')
        break
      case 'PtgMemArea':
        break
      case 'PtgAttrSpace':
      case 'PtgAttrSpaceSemi':
        u = O
        break
      case 'PtgTbl':
        break
      case 'PtgMemErr':
        break
      case 'PtgMissArg':
        f.push('')
        break
      case 'PtgAreaErr':
        f.push('#REF!')
        break
      case 'PtgAreaErr3d':
        f.push('#REF!')
        break
      case 'PtgList':
        f.push('Table' + y[1].idx + '[#' + y[1].rt + ']')
        break
      case 'PtgMemAreaN':
      case 'PtgMemNoMemN':
      case 'PtgAttrNoop':
      case 'PtgSheet':
      case 'PtgEndSheet':
        break
      case 'PtgMemFunc':
        break
      case 'PtgMemNoMem':
        break
      case 'PtgElfCol':
      case 'PtgElfColS':
      case 'PtgElfColSV':
      case 'PtgElfColV':
      case 'PtgElfLel':
      case 'PtgElfRadical':
      case 'PtgElfRadicalLel':
      case 'PtgElfRadicalS':
      case 'PtgElfRw':
      case 'PtgElfRwV':
        throw new Error('Unsupported ELFs')
      case 'PtgSxName':
        throw new Error('Unrecognized Formula Token: ' + String(y))
      default:
        throw new Error('Unrecognized Formula Token: ' + String(y))
    }
    var hr = ['PtgAttrSpace', 'PtgAttrSpaceSemi', 'PtgAttrGoto']
    if (a.biff != 3 && u >= 0 && hr.indexOf(e[0][O][0]) == -1) {
      y = e[0][u]
      var Ne = !0
      switch (y[1][0]) {
        case 4:
          Ne = !1
        case 0:
          _ = Fe(' ', y[1][1])
          break
        case 5:
          Ne = !1
        case 1:
          _ = Fe('\r', y[1][1])
          break
        default:
          if (((_ = ''), a.WTF)) throw new Error('Unexpected PtgAttrSpaceType ' + y[1][0])
      }
      f.push((Ne ? _ : '') + f.pop() + (Ne ? '' : _)), (u = -1)
    }
  }
  if (f.length > 1 && a.WTF) throw new Error('bad formula stack')
  return f[0]
}
function bc(e) {
  if (e == null) {
    var t = B(8)
    return (
      t.write_shift(1, 3),
      t.write_shift(1, 0),
      t.write_shift(2, 0),
      t.write_shift(2, 0),
      t.write_shift(2, 65535),
      t
    )
  } else if (typeof e == 'number') return Kr(e)
  return Kr(0)
}
function Wc(e, t, r, n, a) {
  var i = jr(t, r, a),
    s = bc(e.v),
    f = B(6),
    o = 33
  f.write_shift(2, o), f.write_shift(4, 0)
  for (var l = B(e.bf.length), c = 0; c < e.bf.length; ++c) l[c] = e.bf[c]
  var d = be([i, s, f, l])
  return d
}
function d0(e, t, r) {
  var n = e.read_shift(4),
    a = Lc(e, n, r),
    i = e.read_shift(4),
    s = i > 0 ? Pc(e, i, a, r) : null
  return [a, s]
}
var Hc = d0,
  v0 = d0,
  Vc = d0,
  Gc = d0,
  Xc = {
    0: 'BEEP',
    1: 'OPEN',
    2: 'OPEN.LINKS',
    3: 'CLOSE.ALL',
    4: 'SAVE',
    5: 'SAVE.AS',
    6: 'FILE.DELETE',
    7: 'PAGE.SETUP',
    8: 'PRINT',
    9: 'PRINTER.SETUP',
    10: 'QUIT',
    11: 'NEW.WINDOW',
    12: 'ARRANGE.ALL',
    13: 'WINDOW.SIZE',
    14: 'WINDOW.MOVE',
    15: 'FULL',
    16: 'CLOSE',
    17: 'RUN',
    22: 'SET.PRINT.AREA',
    23: 'SET.PRINT.TITLES',
    24: 'SET.PAGE.BREAK',
    25: 'REMOVE.PAGE.BREAK',
    26: 'FONT',
    27: 'DISPLAY',
    28: 'PROTECT.DOCUMENT',
    29: 'PRECISION',
    30: 'A1.R1C1',
    31: 'CALCULATE.NOW',
    32: 'CALCULATION',
    34: 'DATA.FIND',
    35: 'EXTRACT',
    36: 'DATA.DELETE',
    37: 'SET.DATABASE',
    38: 'SET.CRITERIA',
    39: 'SORT',
    40: 'DATA.SERIES',
    41: 'TABLE',
    42: 'FORMAT.NUMBER',
    43: 'ALIGNMENT',
    44: 'STYLE',
    45: 'BORDER',
    46: 'CELL.PROTECTION',
    47: 'COLUMN.WIDTH',
    48: 'UNDO',
    49: 'CUT',
    50: 'COPY',
    51: 'PASTE',
    52: 'CLEAR',
    53: 'PASTE.SPECIAL',
    54: 'EDIT.DELETE',
    55: 'INSERT',
    56: 'FILL.RIGHT',
    57: 'FILL.DOWN',
    61: 'DEFINE.NAME',
    62: 'CREATE.NAMES',
    63: 'FORMULA.GOTO',
    64: 'FORMULA.FIND',
    65: 'SELECT.LAST.CELL',
    66: 'SHOW.ACTIVE.CELL',
    67: 'GALLERY.AREA',
    68: 'GALLERY.BAR',
    69: 'GALLERY.COLUMN',
    70: 'GALLERY.LINE',
    71: 'GALLERY.PIE',
    72: 'GALLERY.SCATTER',
    73: 'COMBINATION',
    74: 'PREFERRED',
    75: 'ADD.OVERLAY',
    76: 'GRIDLINES',
    77: 'SET.PREFERRED',
    78: 'AXES',
    79: 'LEGEND',
    80: 'ATTACH.TEXT',
    81: 'ADD.ARROW',
    82: 'SELECT.CHART',
    83: 'SELECT.PLOT.AREA',
    84: 'PATTERNS',
    85: 'MAIN.CHART',
    86: 'OVERLAY',
    87: 'SCALE',
    88: 'FORMAT.LEGEND',
    89: 'FORMAT.TEXT',
    90: 'EDIT.REPEAT',
    91: 'PARSE',
    92: 'JUSTIFY',
    93: 'HIDE',
    94: 'UNHIDE',
    95: 'WORKSPACE',
    96: 'FORMULA',
    97: 'FORMULA.FILL',
    98: 'FORMULA.ARRAY',
    99: 'DATA.FIND.NEXT',
    100: 'DATA.FIND.PREV',
    101: 'FORMULA.FIND.NEXT',
    102: 'FORMULA.FIND.PREV',
    103: 'ACTIVATE',
    104: 'ACTIVATE.NEXT',
    105: 'ACTIVATE.PREV',
    106: 'UNLOCKED.NEXT',
    107: 'UNLOCKED.PREV',
    108: 'COPY.PICTURE',
    109: 'SELECT',
    110: 'DELETE.NAME',
    111: 'DELETE.FORMAT',
    112: 'VLINE',
    113: 'HLINE',
    114: 'VPAGE',
    115: 'HPAGE',
    116: 'VSCROLL',
    117: 'HSCROLL',
    118: 'ALERT',
    119: 'NEW',
    120: 'CANCEL.COPY',
    121: 'SHOW.CLIPBOARD',
    122: 'MESSAGE',
    124: 'PASTE.LINK',
    125: 'APP.ACTIVATE',
    126: 'DELETE.ARROW',
    127: 'ROW.HEIGHT',
    128: 'FORMAT.MOVE',
    129: 'FORMAT.SIZE',
    130: 'FORMULA.REPLACE',
    131: 'SEND.KEYS',
    132: 'SELECT.SPECIAL',
    133: 'APPLY.NAMES',
    134: 'REPLACE.FONT',
    135: 'FREEZE.PANES',
    136: 'SHOW.INFO',
    137: 'SPLIT',
    138: 'ON.WINDOW',
    139: 'ON.DATA',
    140: 'DISABLE.INPUT',
    142: 'OUTLINE',
    143: 'LIST.NAMES',
    144: 'FILE.CLOSE',
    145: 'SAVE.WORKBOOK',
    146: 'DATA.FORM',
    147: 'COPY.CHART',
    148: 'ON.TIME',
    149: 'WAIT',
    150: 'FORMAT.FONT',
    151: 'FILL.UP',
    152: 'FILL.LEFT',
    153: 'DELETE.OVERLAY',
    155: 'SHORT.MENUS',
    159: 'SET.UPDATE.STATUS',
    161: 'COLOR.PALETTE',
    162: 'DELETE.STYLE',
    163: 'WINDOW.RESTORE',
    164: 'WINDOW.MAXIMIZE',
    166: 'CHANGE.LINK',
    167: 'CALCULATE.DOCUMENT',
    168: 'ON.KEY',
    169: 'APP.RESTORE',
    170: 'APP.MOVE',
    171: 'APP.SIZE',
    172: 'APP.MINIMIZE',
    173: 'APP.MAXIMIZE',
    174: 'BRING.TO.FRONT',
    175: 'SEND.TO.BACK',
    185: 'MAIN.CHART.TYPE',
    186: 'OVERLAY.CHART.TYPE',
    187: 'SELECT.END',
    188: 'OPEN.MAIL',
    189: 'SEND.MAIL',
    190: 'STANDARD.FONT',
    191: 'CONSOLIDATE',
    192: 'SORT.SPECIAL',
    193: 'GALLERY.3D.AREA',
    194: 'GALLERY.3D.COLUMN',
    195: 'GALLERY.3D.LINE',
    196: 'GALLERY.3D.PIE',
    197: 'VIEW.3D',
    198: 'GOAL.SEEK',
    199: 'WORKGROUP',
    200: 'FILL.GROUP',
    201: 'UPDATE.LINK',
    202: 'PROMOTE',
    203: 'DEMOTE',
    204: 'SHOW.DETAIL',
    206: 'UNGROUP',
    207: 'OBJECT.PROPERTIES',
    208: 'SAVE.NEW.OBJECT',
    209: 'SHARE',
    210: 'SHARE.NAME',
    211: 'DUPLICATE',
    212: 'APPLY.STYLE',
    213: 'ASSIGN.TO.OBJECT',
    214: 'OBJECT.PROTECTION',
    215: 'HIDE.OBJECT',
    216: 'SET.EXTRACT',
    217: 'CREATE.PUBLISHER',
    218: 'SUBSCRIBE.TO',
    219: 'ATTRIBUTES',
    220: 'SHOW.TOOLBAR',
    222: 'PRINT.PREVIEW',
    223: 'EDIT.COLOR',
    224: 'SHOW.LEVELS',
    225: 'FORMAT.MAIN',
    226: 'FORMAT.OVERLAY',
    227: 'ON.RECALC',
    228: 'EDIT.SERIES',
    229: 'DEFINE.STYLE',
    240: 'LINE.PRINT',
    243: 'ENTER.DATA',
    249: 'GALLERY.RADAR',
    250: 'MERGE.STYLES',
    251: 'EDITION.OPTIONS',
    252: 'PASTE.PICTURE',
    253: 'PASTE.PICTURE.LINK',
    254: 'SPELLING',
    256: 'ZOOM',
    259: 'INSERT.OBJECT',
    260: 'WINDOW.MINIMIZE',
    265: 'SOUND.NOTE',
    266: 'SOUND.PLAY',
    267: 'FORMAT.SHAPE',
    268: 'EXTEND.POLYGON',
    269: 'FORMAT.AUTO',
    272: 'GALLERY.3D.BAR',
    273: 'GALLERY.3D.SURFACE',
    274: 'FILL.AUTO',
    276: 'CUSTOMIZE.TOOLBAR',
    277: 'ADD.TOOL',
    278: 'EDIT.OBJECT',
    279: 'ON.DOUBLECLICK',
    280: 'ON.ENTRY',
    281: 'WORKBOOK.ADD',
    282: 'WORKBOOK.MOVE',
    283: 'WORKBOOK.COPY',
    284: 'WORKBOOK.OPTIONS',
    285: 'SAVE.WORKSPACE',
    288: 'CHART.WIZARD',
    289: 'DELETE.TOOL',
    290: 'MOVE.TOOL',
    291: 'WORKBOOK.SELECT',
    292: 'WORKBOOK.ACTIVATE',
    293: 'ASSIGN.TO.TOOL',
    295: 'COPY.TOOL',
    296: 'RESET.TOOL',
    297: 'CONSTRAIN.NUMERIC',
    298: 'PASTE.TOOL',
    302: 'WORKBOOK.NEW',
    305: 'SCENARIO.CELLS',
    306: 'SCENARIO.DELETE',
    307: 'SCENARIO.ADD',
    308: 'SCENARIO.EDIT',
    309: 'SCENARIO.SHOW',
    310: 'SCENARIO.SHOW.NEXT',
    311: 'SCENARIO.SUMMARY',
    312: 'PIVOT.TABLE.WIZARD',
    313: 'PIVOT.FIELD.PROPERTIES',
    314: 'PIVOT.FIELD',
    315: 'PIVOT.ITEM',
    316: 'PIVOT.ADD.FIELDS',
    318: 'OPTIONS.CALCULATION',
    319: 'OPTIONS.EDIT',
    320: 'OPTIONS.VIEW',
    321: 'ADDIN.MANAGER',
    322: 'MENU.EDITOR',
    323: 'ATTACH.TOOLBARS',
    324: 'VBAActivate',
    325: 'OPTIONS.CHART',
    328: 'VBA.INSERT.FILE',
    330: 'VBA.PROCEDURE.DEFINITION',
    336: 'ROUTING.SLIP',
    338: 'ROUTE.DOCUMENT',
    339: 'MAIL.LOGON',
    342: 'INSERT.PICTURE',
    343: 'EDIT.TOOL',
    344: 'GALLERY.DOUGHNUT',
    350: 'CHART.TREND',
    352: 'PIVOT.ITEM.PROPERTIES',
    354: 'WORKBOOK.INSERT',
    355: 'OPTIONS.TRANSITION',
    356: 'OPTIONS.GENERAL',
    370: 'FILTER.ADVANCED',
    373: 'MAIL.ADD.MAILER',
    374: 'MAIL.DELETE.MAILER',
    375: 'MAIL.REPLY',
    376: 'MAIL.REPLY.ALL',
    377: 'MAIL.FORWARD',
    378: 'MAIL.NEXT.LETTER',
    379: 'DATA.LABEL',
    380: 'INSERT.TITLE',
    381: 'FONT.PROPERTIES',
    382: 'MACRO.OPTIONS',
    383: 'WORKBOOK.HIDE',
    384: 'WORKBOOK.UNHIDE',
    385: 'WORKBOOK.DELETE',
    386: 'WORKBOOK.NAME',
    388: 'GALLERY.CUSTOM',
    390: 'ADD.CHART.AUTOFORMAT',
    391: 'DELETE.CHART.AUTOFORMAT',
    392: 'CHART.ADD.DATA',
    393: 'AUTO.OUTLINE',
    394: 'TAB.ORDER',
    395: 'SHOW.DIALOG',
    396: 'SELECT.ALL',
    397: 'UNGROUP.SHEETS',
    398: 'SUBTOTAL.CREATE',
    399: 'SUBTOTAL.REMOVE',
    400: 'RENAME.OBJECT',
    412: 'WORKBOOK.SCROLL',
    413: 'WORKBOOK.NEXT',
    414: 'WORKBOOK.PREV',
    415: 'WORKBOOK.TAB.SPLIT',
    416: 'FULL.SCREEN',
    417: 'WORKBOOK.PROTECT',
    420: 'SCROLLBAR.PROPERTIES',
    421: 'PIVOT.SHOW.PAGES',
    422: 'TEXT.TO.COLUMNS',
    423: 'FORMAT.CHARTTYPE',
    424: 'LINK.FORMAT',
    425: 'TRACER.DISPLAY',
    430: 'TRACER.NAVIGATE',
    431: 'TRACER.CLEAR',
    432: 'TRACER.ERROR',
    433: 'PIVOT.FIELD.GROUP',
    434: 'PIVOT.FIELD.UNGROUP',
    435: 'CHECKBOX.PROPERTIES',
    436: 'LABEL.PROPERTIES',
    437: 'LISTBOX.PROPERTIES',
    438: 'EDITBOX.PROPERTIES',
    439: 'PIVOT.REFRESH',
    440: 'LINK.COMBO',
    441: 'OPEN.TEXT',
    442: 'HIDE.DIALOG',
    443: 'SET.DIALOG.FOCUS',
    444: 'ENABLE.OBJECT',
    445: 'PUSHBUTTON.PROPERTIES',
    446: 'SET.DIALOG.DEFAULT',
    447: 'FILTER',
    448: 'FILTER.SHOW.ALL',
    449: 'CLEAR.OUTLINE',
    450: 'FUNCTION.WIZARD',
    451: 'ADD.LIST.ITEM',
    452: 'SET.LIST.ITEM',
    453: 'REMOVE.LIST.ITEM',
    454: 'SELECT.LIST.ITEM',
    455: 'SET.CONTROL.VALUE',
    456: 'SAVE.COPY.AS',
    458: 'OPTIONS.LISTS.ADD',
    459: 'OPTIONS.LISTS.DELETE',
    460: 'SERIES.AXES',
    461: 'SERIES.X',
    462: 'SERIES.Y',
    463: 'ERRORBAR.X',
    464: 'ERRORBAR.Y',
    465: 'FORMAT.CHART',
    466: 'SERIES.ORDER',
    467: 'MAIL.LOGOFF',
    468: 'CLEAR.ROUTING.SLIP',
    469: 'APP.ACTIVATE.MICROSOFT',
    470: 'MAIL.EDIT.MAILER',
    471: 'ON.SHEET',
    472: 'STANDARD.WIDTH',
    473: 'SCENARIO.MERGE',
    474: 'SUMMARY.INFO',
    475: 'FIND.FILE',
    476: 'ACTIVE.CELL.FONT',
    477: 'ENABLE.TIPWIZARD',
    478: 'VBA.MAKE.ADDIN',
    480: 'INSERTDATATABLE',
    481: 'WORKGROUP.OPTIONS',
    482: 'MAIL.SEND.MAILER',
    485: 'AUTOCORRECT',
    489: 'POST.DOCUMENT',
    491: 'PICKLIST',
    493: 'VIEW.SHOW',
    494: 'VIEW.DEFINE',
    495: 'VIEW.DELETE',
    509: 'SHEET.BACKGROUND',
    510: 'INSERT.MAP.OBJECT',
    511: 'OPTIONS.MENONO',
    517: 'MSOCHECKS',
    518: 'NORMAL',
    519: 'LAYOUT',
    520: 'RM.PRINT.AREA',
    521: 'CLEAR.PRINT.AREA',
    522: 'ADD.PRINT.AREA',
    523: 'MOVE.BRK',
    545: 'HIDECURR.NOTE',
    546: 'HIDEALL.NOTES',
    547: 'DELETE.NOTE',
    548: 'TRAVERSE.NOTES',
    549: 'ACTIVATE.NOTES',
    620: 'PROTECT.REVISIONS',
    621: 'UNPROTECT.REVISIONS',
    647: 'OPTIONS.ME',
    653: 'WEB.PUBLISH',
    667: 'NEWWEBQUERY',
    673: 'PIVOT.TABLE.CHART',
    753: 'OPTIONS.SAVE',
    755: 'OPTIONS.SPELL',
    808: 'HIDEALL.INKANNOTS'
  },
  gi = {
    0: 'COUNT',
    1: 'IF',
    2: 'ISNA',
    3: 'ISERROR',
    4: 'SUM',
    5: 'AVERAGE',
    6: 'MIN',
    7: 'MAX',
    8: 'ROW',
    9: 'COLUMN',
    10: 'NA',
    11: 'NPV',
    12: 'STDEV',
    13: 'DOLLAR',
    14: 'FIXED',
    15: 'SIN',
    16: 'COS',
    17: 'TAN',
    18: 'ATAN',
    19: 'PI',
    20: 'SQRT',
    21: 'EXP',
    22: 'LN',
    23: 'LOG10',
    24: 'ABS',
    25: 'INT',
    26: 'SIGN',
    27: 'ROUND',
    28: 'LOOKUP',
    29: 'INDEX',
    30: 'REPT',
    31: 'MID',
    32: 'LEN',
    33: 'VALUE',
    34: 'TRUE',
    35: 'FALSE',
    36: 'AND',
    37: 'OR',
    38: 'NOT',
    39: 'MOD',
    40: 'DCOUNT',
    41: 'DSUM',
    42: 'DAVERAGE',
    43: 'DMIN',
    44: 'DMAX',
    45: 'DSTDEV',
    46: 'VAR',
    47: 'DVAR',
    48: 'TEXT',
    49: 'LINEST',
    50: 'TREND',
    51: 'LOGEST',
    52: 'GROWTH',
    53: 'GOTO',
    54: 'HALT',
    55: 'RETURN',
    56: 'PV',
    57: 'FV',
    58: 'NPER',
    59: 'PMT',
    60: 'RATE',
    61: 'MIRR',
    62: 'IRR',
    63: 'RAND',
    64: 'MATCH',
    65: 'DATE',
    66: 'TIME',
    67: 'DAY',
    68: 'MONTH',
    69: 'YEAR',
    70: 'WEEKDAY',
    71: 'HOUR',
    72: 'MINUTE',
    73: 'SECOND',
    74: 'NOW',
    75: 'AREAS',
    76: 'ROWS',
    77: 'COLUMNS',
    78: 'OFFSET',
    79: 'ABSREF',
    80: 'RELREF',
    81: 'ARGUMENT',
    82: 'SEARCH',
    83: 'TRANSPOSE',
    84: 'ERROR',
    85: 'STEP',
    86: 'TYPE',
    87: 'ECHO',
    88: 'SET.NAME',
    89: 'CALLER',
    90: 'DEREF',
    91: 'WINDOWS',
    92: 'SERIES',
    93: 'DOCUMENTS',
    94: 'ACTIVE.CELL',
    95: 'SELECTION',
    96: 'RESULT',
    97: 'ATAN2',
    98: 'ASIN',
    99: 'ACOS',
    100: 'CHOOSE',
    101: 'HLOOKUP',
    102: 'VLOOKUP',
    103: 'LINKS',
    104: 'INPUT',
    105: 'ISREF',
    106: 'GET.FORMULA',
    107: 'GET.NAME',
    108: 'SET.VALUE',
    109: 'LOG',
    110: 'EXEC',
    111: 'CHAR',
    112: 'LOWER',
    113: 'UPPER',
    114: 'PROPER',
    115: 'LEFT',
    116: 'RIGHT',
    117: 'EXACT',
    118: 'TRIM',
    119: 'REPLACE',
    120: 'SUBSTITUTE',
    121: 'CODE',
    122: 'NAMES',
    123: 'DIRECTORY',
    124: 'FIND',
    125: 'CELL',
    126: 'ISERR',
    127: 'ISTEXT',
    128: 'ISNUMBER',
    129: 'ISBLANK',
    130: 'T',
    131: 'N',
    132: 'FOPEN',
    133: 'FCLOSE',
    134: 'FSIZE',
    135: 'FREADLN',
    136: 'FREAD',
    137: 'FWRITELN',
    138: 'FWRITE',
    139: 'FPOS',
    140: 'DATEVALUE',
    141: 'TIMEVALUE',
    142: 'SLN',
    143: 'SYD',
    144: 'DDB',
    145: 'GET.DEF',
    146: 'REFTEXT',
    147: 'TEXTREF',
    148: 'INDIRECT',
    149: 'REGISTER',
    150: 'CALL',
    151: 'ADD.BAR',
    152: 'ADD.MENU',
    153: 'ADD.COMMAND',
    154: 'ENABLE.COMMAND',
    155: 'CHECK.COMMAND',
    156: 'RENAME.COMMAND',
    157: 'SHOW.BAR',
    158: 'DELETE.MENU',
    159: 'DELETE.COMMAND',
    160: 'GET.CHART.ITEM',
    161: 'DIALOG.BOX',
    162: 'CLEAN',
    163: 'MDETERM',
    164: 'MINVERSE',
    165: 'MMULT',
    166: 'FILES',
    167: 'IPMT',
    168: 'PPMT',
    169: 'COUNTA',
    170: 'CANCEL.KEY',
    171: 'FOR',
    172: 'WHILE',
    173: 'BREAK',
    174: 'NEXT',
    175: 'INITIATE',
    176: 'REQUEST',
    177: 'POKE',
    178: 'EXECUTE',
    179: 'TERMINATE',
    180: 'RESTART',
    181: 'HELP',
    182: 'GET.BAR',
    183: 'PRODUCT',
    184: 'FACT',
    185: 'GET.CELL',
    186: 'GET.WORKSPACE',
    187: 'GET.WINDOW',
    188: 'GET.DOCUMENT',
    189: 'DPRODUCT',
    190: 'ISNONTEXT',
    191: 'GET.NOTE',
    192: 'NOTE',
    193: 'STDEVP',
    194: 'VARP',
    195: 'DSTDEVP',
    196: 'DVARP',
    197: 'TRUNC',
    198: 'ISLOGICAL',
    199: 'DCOUNTA',
    200: 'DELETE.BAR',
    201: 'UNREGISTER',
    204: 'USDOLLAR',
    205: 'FINDB',
    206: 'SEARCHB',
    207: 'REPLACEB',
    208: 'LEFTB',
    209: 'RIGHTB',
    210: 'MIDB',
    211: 'LENB',
    212: 'ROUNDUP',
    213: 'ROUNDDOWN',
    214: 'ASC',
    215: 'DBCS',
    216: 'RANK',
    219: 'ADDRESS',
    220: 'DAYS360',
    221: 'TODAY',
    222: 'VDB',
    223: 'ELSE',
    224: 'ELSE.IF',
    225: 'END.IF',
    226: 'FOR.CELL',
    227: 'MEDIAN',
    228: 'SUMPRODUCT',
    229: 'SINH',
    230: 'COSH',
    231: 'TANH',
    232: 'ASINH',
    233: 'ACOSH',
    234: 'ATANH',
    235: 'DGET',
    236: 'CREATE.OBJECT',
    237: 'VOLATILE',
    238: 'LAST.ERROR',
    239: 'CUSTOM.UNDO',
    240: 'CUSTOM.REPEAT',
    241: 'FORMULA.CONVERT',
    242: 'GET.LINK.INFO',
    243: 'TEXT.BOX',
    244: 'INFO',
    245: 'GROUP',
    246: 'GET.OBJECT',
    247: 'DB',
    248: 'PAUSE',
    251: 'RESUME',
    252: 'FREQUENCY',
    253: 'ADD.TOOLBAR',
    254: 'DELETE.TOOLBAR',
    255: 'User',
    256: 'RESET.TOOLBAR',
    257: 'EVALUATE',
    258: 'GET.TOOLBAR',
    259: 'GET.TOOL',
    260: 'SPELLING.CHECK',
    261: 'ERROR.TYPE',
    262: 'APP.TITLE',
    263: 'WINDOW.TITLE',
    264: 'SAVE.TOOLBAR',
    265: 'ENABLE.TOOL',
    266: 'PRESS.TOOL',
    267: 'REGISTER.ID',
    268: 'GET.WORKBOOK',
    269: 'AVEDEV',
    270: 'BETADIST',
    271: 'GAMMALN',
    272: 'BETAINV',
    273: 'BINOMDIST',
    274: 'CHIDIST',
    275: 'CHIINV',
    276: 'COMBIN',
    277: 'CONFIDENCE',
    278: 'CRITBINOM',
    279: 'EVEN',
    280: 'EXPONDIST',
    281: 'FDIST',
    282: 'FINV',
    283: 'FISHER',
    284: 'FISHERINV',
    285: 'FLOOR',
    286: 'GAMMADIST',
    287: 'GAMMAINV',
    288: 'CEILING',
    289: 'HYPGEOMDIST',
    290: 'LOGNORMDIST',
    291: 'LOGINV',
    292: 'NEGBINOMDIST',
    293: 'NORMDIST',
    294: 'NORMSDIST',
    295: 'NORMINV',
    296: 'NORMSINV',
    297: 'STANDARDIZE',
    298: 'ODD',
    299: 'PERMUT',
    300: 'POISSON',
    301: 'TDIST',
    302: 'WEIBULL',
    303: 'SUMXMY2',
    304: 'SUMX2MY2',
    305: 'SUMX2PY2',
    306: 'CHITEST',
    307: 'CORREL',
    308: 'COVAR',
    309: 'FORECAST',
    310: 'FTEST',
    311: 'INTERCEPT',
    312: 'PEARSON',
    313: 'RSQ',
    314: 'STEYX',
    315: 'SLOPE',
    316: 'TTEST',
    317: 'PROB',
    318: 'DEVSQ',
    319: 'GEOMEAN',
    320: 'HARMEAN',
    321: 'SUMSQ',
    322: 'KURT',
    323: 'SKEW',
    324: 'ZTEST',
    325: 'LARGE',
    326: 'SMALL',
    327: 'QUARTILE',
    328: 'PERCENTILE',
    329: 'PERCENTRANK',
    330: 'MODE',
    331: 'TRIMMEAN',
    332: 'TINV',
    334: 'MOVIE.COMMAND',
    335: 'GET.MOVIE',
    336: 'CONCATENATE',
    337: 'POWER',
    338: 'PIVOT.ADD.DATA',
    339: 'GET.PIVOT.TABLE',
    340: 'GET.PIVOT.FIELD',
    341: 'GET.PIVOT.ITEM',
    342: 'RADIANS',
    343: 'DEGREES',
    344: 'SUBTOTAL',
    345: 'SUMIF',
    346: 'COUNTIF',
    347: 'COUNTBLANK',
    348: 'SCENARIO.GET',
    349: 'OPTIONS.LISTS.GET',
    350: 'ISPMT',
    351: 'DATEDIF',
    352: 'DATESTRING',
    353: 'NUMBERSTRING',
    354: 'ROMAN',
    355: 'OPEN.DIALOG',
    356: 'SAVE.DIALOG',
    357: 'VIEW.GET',
    358: 'GETPIVOTDATA',
    359: 'HYPERLINK',
    360: 'PHONETIC',
    361: 'AVERAGEA',
    362: 'MAXA',
    363: 'MINA',
    364: 'STDEVPA',
    365: 'VARPA',
    366: 'STDEVA',
    367: 'VARA',
    368: 'BAHTTEXT',
    369: 'THAIDAYOFWEEK',
    370: 'THAIDIGIT',
    371: 'THAIMONTHOFYEAR',
    372: 'THAINUMSOUND',
    373: 'THAINUMSTRING',
    374: 'THAISTRINGLENGTH',
    375: 'ISTHAIDIGIT',
    376: 'ROUNDBAHTDOWN',
    377: 'ROUNDBAHTUP',
    378: 'THAIYEAR',
    379: 'RTD',
    380: 'CUBEVALUE',
    381: 'CUBEMEMBER',
    382: 'CUBEMEMBERPROPERTY',
    383: 'CUBERANKEDMEMBER',
    384: 'HEX2BIN',
    385: 'HEX2DEC',
    386: 'HEX2OCT',
    387: 'DEC2BIN',
    388: 'DEC2HEX',
    389: 'DEC2OCT',
    390: 'OCT2BIN',
    391: 'OCT2HEX',
    392: 'OCT2DEC',
    393: 'BIN2DEC',
    394: 'BIN2OCT',
    395: 'BIN2HEX',
    396: 'IMSUB',
    397: 'IMDIV',
    398: 'IMPOWER',
    399: 'IMABS',
    400: 'IMSQRT',
    401: 'IMLN',
    402: 'IMLOG2',
    403: 'IMLOG10',
    404: 'IMSIN',
    405: 'IMCOS',
    406: 'IMEXP',
    407: 'IMARGUMENT',
    408: 'IMCONJUGATE',
    409: 'IMAGINARY',
    410: 'IMREAL',
    411: 'COMPLEX',
    412: 'IMSUM',
    413: 'IMPRODUCT',
    414: 'SERIESSUM',
    415: 'FACTDOUBLE',
    416: 'SQRTPI',
    417: 'QUOTIENT',
    418: 'DELTA',
    419: 'GESTEP',
    420: 'ISEVEN',
    421: 'ISODD',
    422: 'MROUND',
    423: 'ERF',
    424: 'ERFC',
    425: 'BESSELJ',
    426: 'BESSELK',
    427: 'BESSELY',
    428: 'BESSELI',
    429: 'XIRR',
    430: 'XNPV',
    431: 'PRICEMAT',
    432: 'YIELDMAT',
    433: 'INTRATE',
    434: 'RECEIVED',
    435: 'DISC',
    436: 'PRICEDISC',
    437: 'YIELDDISC',
    438: 'TBILLEQ',
    439: 'TBILLPRICE',
    440: 'TBILLYIELD',
    441: 'PRICE',
    442: 'YIELD',
    443: 'DOLLARDE',
    444: 'DOLLARFR',
    445: 'NOMINAL',
    446: 'EFFECT',
    447: 'CUMPRINC',
    448: 'CUMIPMT',
    449: 'EDATE',
    450: 'EOMONTH',
    451: 'YEARFRAC',
    452: 'COUPDAYBS',
    453: 'COUPDAYS',
    454: 'COUPDAYSNC',
    455: 'COUPNCD',
    456: 'COUPNUM',
    457: 'COUPPCD',
    458: 'DURATION',
    459: 'MDURATION',
    460: 'ODDLPRICE',
    461: 'ODDLYIELD',
    462: 'ODDFPRICE',
    463: 'ODDFYIELD',
    464: 'RANDBETWEEN',
    465: 'WEEKNUM',
    466: 'AMORDEGRC',
    467: 'AMORLINC',
    468: 'CONVERT',
    724: 'SHEETJS',
    469: 'ACCRINT',
    470: 'ACCRINTM',
    471: 'WORKDAY',
    472: 'NETWORKDAYS',
    473: 'GCD',
    474: 'MULTINOMIAL',
    475: 'LCM',
    476: 'FVSCHEDULE',
    477: 'CUBEKPIMEMBER',
    478: 'CUBESET',
    479: 'CUBESETCOUNT',
    480: 'IFERROR',
    481: 'COUNTIFS',
    482: 'SUMIFS',
    483: 'AVERAGEIF',
    484: 'AVERAGEIFS'
  },
  zc = {
    2: 1,
    3: 1,
    10: 0,
    15: 1,
    16: 1,
    17: 1,
    18: 1,
    19: 0,
    20: 1,
    21: 1,
    22: 1,
    23: 1,
    24: 1,
    25: 1,
    26: 1,
    27: 2,
    30: 2,
    31: 3,
    32: 1,
    33: 1,
    34: 0,
    35: 0,
    38: 1,
    39: 2,
    40: 3,
    41: 3,
    42: 3,
    43: 3,
    44: 3,
    45: 3,
    47: 3,
    48: 2,
    53: 1,
    61: 3,
    63: 0,
    65: 3,
    66: 3,
    67: 1,
    68: 1,
    69: 1,
    70: 1,
    71: 1,
    72: 1,
    73: 1,
    74: 0,
    75: 1,
    76: 1,
    77: 1,
    79: 2,
    80: 2,
    83: 1,
    85: 0,
    86: 1,
    89: 0,
    90: 1,
    94: 0,
    95: 0,
    97: 2,
    98: 1,
    99: 1,
    101: 3,
    102: 3,
    105: 1,
    106: 1,
    108: 2,
    111: 1,
    112: 1,
    113: 1,
    114: 1,
    117: 2,
    118: 1,
    119: 4,
    121: 1,
    126: 1,
    127: 1,
    128: 1,
    129: 1,
    130: 1,
    131: 1,
    133: 1,
    134: 1,
    135: 1,
    136: 2,
    137: 2,
    138: 2,
    140: 1,
    141: 1,
    142: 3,
    143: 4,
    144: 4,
    161: 1,
    162: 1,
    163: 1,
    164: 1,
    165: 2,
    172: 1,
    175: 2,
    176: 2,
    177: 3,
    178: 2,
    179: 1,
    184: 1,
    186: 1,
    189: 3,
    190: 1,
    195: 3,
    196: 3,
    197: 1,
    198: 1,
    199: 3,
    201: 1,
    207: 4,
    210: 3,
    211: 1,
    212: 2,
    213: 2,
    214: 1,
    215: 1,
    225: 0,
    229: 1,
    230: 1,
    231: 1,
    232: 1,
    233: 1,
    234: 1,
    235: 3,
    244: 1,
    247: 4,
    252: 2,
    257: 1,
    261: 1,
    271: 1,
    273: 4,
    274: 2,
    275: 2,
    276: 2,
    277: 3,
    278: 3,
    279: 1,
    280: 3,
    281: 3,
    282: 3,
    283: 1,
    284: 1,
    285: 2,
    286: 4,
    287: 3,
    288: 2,
    289: 4,
    290: 3,
    291: 3,
    292: 3,
    293: 4,
    294: 1,
    295: 3,
    296: 1,
    297: 3,
    298: 1,
    299: 2,
    300: 3,
    301: 3,
    302: 4,
    303: 2,
    304: 2,
    305: 2,
    306: 2,
    307: 2,
    308: 2,
    309: 3,
    310: 2,
    311: 2,
    312: 2,
    313: 2,
    314: 2,
    315: 2,
    316: 4,
    325: 2,
    326: 2,
    327: 2,
    328: 2,
    331: 2,
    332: 2,
    337: 2,
    342: 1,
    343: 1,
    346: 2,
    347: 1,
    350: 4,
    351: 3,
    352: 1,
    353: 2,
    360: 1,
    368: 1,
    369: 1,
    370: 1,
    371: 1,
    372: 1,
    373: 1,
    374: 1,
    375: 1,
    376: 1,
    377: 1,
    378: 1,
    382: 3,
    385: 1,
    392: 1,
    393: 1,
    396: 2,
    397: 2,
    398: 2,
    399: 1,
    400: 1,
    401: 1,
    402: 1,
    403: 1,
    404: 1,
    405: 1,
    406: 1,
    407: 1,
    408: 1,
    409: 1,
    410: 1,
    414: 4,
    415: 1,
    416: 1,
    417: 2,
    420: 1,
    421: 1,
    422: 2,
    424: 1,
    425: 2,
    426: 2,
    427: 2,
    428: 2,
    430: 3,
    438: 3,
    439: 3,
    440: 3,
    443: 2,
    444: 2,
    445: 2,
    446: 2,
    447: 6,
    448: 6,
    449: 2,
    450: 2,
    464: 2,
    468: 3,
    476: 2,
    479: 1,
    480: 2,
    65535: 0
  }
function Kc(e) {
  var t = 'of:=' + e.replace(Z0, '$1[.$2$3$4$5]').replace(/\]:\[/g, ':')
  return t.replace(/;/g, '|').replace(/,/g, ';')
}
function jc(e) {
  return e.replace(/\./, '!')
}
var Ct = typeof Map < 'u'
function en(e, t, r) {
  var n = 0,
    a = e.length
  if (r) {
    if (Ct ? r.has(t) : Object.prototype.hasOwnProperty.call(r, t)) {
      for (var i = Ct ? r.get(t) : r[t]; n < i.length; ++n)
        if (e[i[n]].t === t) return e.Count++, i[n]
    }
  } else for (; n < a; ++n) if (e[n].t === t) return e.Count++, n
  return (
    (e[a] = { t }),
    e.Count++,
    e.Unique++,
    r &&
      (Ct
        ? (r.has(t) || r.set(t, []), r.get(t).push(a))
        : (Object.prototype.hasOwnProperty.call(r, t) || (r[t] = []), r[t].push(a))),
    a
  )
}
function m0(e, t) {
  var r = { min: e + 1, max: e + 1 },
    n = -1
  return (
    t.MDW && (Cr = t.MDW),
    t.width != null
      ? (r.customWidth = 1)
      : t.wpx != null
      ? (n = s0(t.wpx))
      : t.wch != null && (n = t.wch),
    n > -1 ? ((r.width = L0(n)), (r.customWidth = 1)) : t.width != null && (r.width = t.width),
    t.hidden && (r.hidden = !0),
    t.level != null && (r.outlineLevel = r.level = t.level),
    r
  )
}
function _i(e, t) {
  if (e) {
    var r = [0.7, 0.7, 0.75, 0.75, 0.3, 0.3]
    t == 'xlml' && (r = [1, 1, 1, 1, 0.5, 0.5]),
      e.left == null && (e.left = r[0]),
      e.right == null && (e.right = r[1]),
      e.top == null && (e.top = r[2]),
      e.bottom == null && (e.bottom = r[3]),
      e.header == null && (e.header = r[4]),
      e.footer == null && (e.footer = r[5])
  }
}
function Br(e, t, r) {
  var n = r.revssf[t.z != null ? t.z : 'General'],
    a = 60,
    i = e.length
  if (n == null && r.ssf) {
    for (; a < 392; ++a)
      if (r.ssf[a] == null) {
        pa(t.z, a), (r.ssf[a] = t.z), (r.revssf[t.z] = n = a)
        break
      }
  }
  for (a = 0; a != i; ++a) if (e[a].numFmtId === n) return a
  return (
    (e[i] = { numFmtId: n, fontId: 0, fillId: 0, borderId: 0, xfId: 0, applyNumberFormat: 1 }), i
  )
}
function Yc(e, t, r) {
  if (e && e['!ref']) {
    var n = Ee(e['!ref'])
    if (n.e.c < n.s.c || n.e.r < n.s.r) throw new Error('Bad range (' + r + '): ' + e['!ref'])
  }
}
function $c(e) {
  if (e.length === 0) return ''
  for (var t = '<mergeCells count="' + e.length + '">', r = 0; r != e.length; ++r)
    t += '<mergeCell ref="' + De(e[r]) + '"/>'
  return t + '</mergeCells>'
}
function Jc(e, t, r, n, a) {
  var i = !1,
    s = {},
    f = null
  if (n.bookType !== 'xlsx' && t.vbaraw) {
    var o = t.SheetNames[r]
    try {
      t.Workbook && (o = t.Workbook.Sheets[r].CodeName || o)
    } catch {}
    ;(i = !0), (s.codeName = Ar(ve(o)))
  }
  if (e && e['!outline']) {
    var l = { summaryBelow: 1, summaryRight: 1 }
    e['!outline'].above && (l.summaryBelow = 0),
      e['!outline'].left && (l.summaryRight = 0),
      (f = (f || '') + j('outlinePr', null, l))
  }
  ;(!i && !f) || (a[a.length] = j('sheetPr', f, s))
}
var Zc = ['objects', 'scenarios', 'selectLockedCells', 'selectUnlockedCells'],
  qc = [
    'formatColumns',
    'formatRows',
    'formatCells',
    'insertColumns',
    'insertRows',
    'insertHyperlinks',
    'deleteColumns',
    'deleteRows',
    'sort',
    'autoFilter',
    'pivotTables'
  ]
function Qc(e) {
  var t = { sheet: 1 }
  return (
    Zc.forEach(function (r) {
      e[r] != null && e[r] && (t[r] = '1')
    }),
    qc.forEach(function (r) {
      e[r] != null && !e[r] && (t[r] = '0')
    }),
    e.password && (t.password = ti(e.password).toString(16).toUpperCase()),
    j('sheetProtection', null, t)
  )
}
function e1(e) {
  return _i(e), j('pageMargins', null, e)
}
function r1(e, t) {
  for (var r = ['<cols>'], n, a = 0; a != t.length; ++a)
    (n = t[a]) && (r[r.length] = j('col', null, m0(a, n)))
  return (r[r.length] = '</cols>'), r.join('')
}
function t1(e, t, r, n) {
  var a = typeof e.ref == 'string' ? e.ref : De(e.ref)
  r.Workbook || (r.Workbook = { Sheets: [] }), r.Workbook.Names || (r.Workbook.Names = [])
  var i = r.Workbook.Names,
    s = ir(a)
  s.s.r == s.e.r && ((s.e.r = ir(t['!ref']).e.r), (a = De(s)))
  for (var f = 0; f < i.length; ++f) {
    var o = i[f]
    if (o.Name == '_xlnm._FilterDatabase' && o.Sheet == n) {
      o.Ref = "'" + r.SheetNames[n] + "'!" + a
      break
    }
  }
  return (
    f == i.length &&
      i.push({ Name: '_xlnm._FilterDatabase', Sheet: n, Ref: "'" + r.SheetNames[n] + "'!" + a }),
    j('autoFilter', null, { ref: a })
  )
}
function n1(e, t, r, n) {
  var a = { workbookViewId: '0' }
  return (
    (((n || {}).Workbook || {}).Views || [])[0] &&
      (a.rightToLeft = n.Workbook.Views[0].RTL ? '1' : '0'),
    j('sheetViews', j('sheetView', null, a), {})
  )
}
function a1(e, t, r, n) {
  if (
    (e.c && r['!comments'].push([t, e.c]),
    (e.v === void 0 && typeof e.f != 'string') || (e.t === 'z' && !e.f))
  )
    return ''
  var a = '',
    i = e.t,
    s = e.v
  if (e.t !== 'z')
    switch (e.t) {
      case 'b':
        a = e.v ? '1' : '0'
        break
      case 'n':
        a = '' + e.v
        break
      case 'e':
        a = Bt[e.v]
        break
      case 'd':
        n && n.cellDates
          ? (a = Je(e.v, -1).toISOString())
          : ((e = Qe(e)), (e.t = 'n'), (a = '' + (e.v = qe(Je(e.v))))),
          typeof e.z > 'u' && (e.z = ye[14])
        break
      default:
        a = e.v
        break
    }
  var f = We('v', ve(a)),
    o = { r: t },
    l = Br(n.cellXfs, e, n)
  switch ((l !== 0 && (o.s = l), e.t)) {
    case 'n':
      break
    case 'd':
      o.t = 'd'
      break
    case 'b':
      o.t = 'b'
      break
    case 'e':
      o.t = 'e'
      break
    case 'z':
      break
    default:
      if (e.v == null) {
        delete e.t
        break
      }
      if (e.v.length > 32767) throw new Error('Text length must not exceed 32767 characters')
      if (n && n.bookSST) {
        ;(f = We('v', '' + en(n.Strings, e.v, n.revStrings))), (o.t = 's')
        break
      }
      o.t = 'str'
      break
  }
  if ((e.t != i && ((e.t = i), (e.v = s)), typeof e.f == 'string' && e.f)) {
    var c = e.F && e.F.slice(0, t.length) == t ? { t: 'array', ref: e.F } : null
    f = j('f', ve(e.f), c) + (e.v != null ? f : '')
  }
  return e.l && r['!links'].push([t, e.l]), e.D && (o.cm = 1), j('c', f, o)
}
function i1(e, t, r, n) {
  var a = [],
    i = [],
    s = Ee(e['!ref']),
    f = '',
    o,
    l = '',
    c = [],
    d = 0,
    x = 0,
    p = e['!rows'],
    E = Array.isArray(e),
    u = { r: l },
    _,
    O = -1
  for (x = s.s.c; x <= s.e.c; ++x) c[x] = ze(x)
  for (d = s.s.r; d <= s.e.r; ++d) {
    for (i = [], l = He(d), x = s.s.c; x <= s.e.c; ++x) {
      o = c[x] + l
      var R = E ? (e[d] || [])[x] : e[o]
      R !== void 0 && (f = a1(R, o, e, t)) != null && i.push(f)
    }
    ;(i.length > 0 || (p && p[d])) &&
      ((u = { r: l }),
      p &&
        p[d] &&
        ((_ = p[d]),
        _.hidden && (u.hidden = 1),
        (O = -1),
        _.hpx ? (O = f0(_.hpx)) : _.hpt && (O = _.hpt),
        O > -1 && ((u.ht = O), (u.customHeight = 1)),
        _.level && (u.outlineLevel = _.level)),
      (a[a.length] = j('row', i.join(''), u)))
  }
  if (p)
    for (; d < p.length; ++d)
      p &&
        p[d] &&
        ((u = { r: d + 1 }),
        (_ = p[d]),
        _.hidden && (u.hidden = 1),
        (O = -1),
        _.hpx ? (O = f0(_.hpx)) : _.hpt && (O = _.hpt),
        O > -1 && ((u.ht = O), (u.customHeight = 1)),
        _.level && (u.outlineLevel = _.level),
        (a[a.length] = j('row', '', u)))
  return a.join('')
}
function Ti(e, t, r, n) {
  var a = [Re, j('worksheet', null, { xmlns: ht[0], 'xmlns:r': ke.r })],
    i = r.SheetNames[e],
    s = 0,
    f = '',
    o = r.Sheets[i]
  o == null && (o = {})
  var l = o['!ref'] || 'A1',
    c = Ee(l)
  if (c.e.c > 16383 || c.e.r > 1048575) {
    if (t.WTF) throw new Error('Range ' + l + ' exceeds format limit A1:XFD1048576')
    ;(c.e.c = Math.min(c.e.c, 16383)), (c.e.r = Math.min(c.e.c, 1048575)), (l = De(c))
  }
  n || (n = {}), (o['!comments'] = [])
  var d = []
  Jc(o, r, e, t, a),
    (a[a.length] = j('dimension', null, { ref: l })),
    (a[a.length] = n1(o, t, e, r)),
    t.sheetFormat &&
      (a[a.length] = j('sheetFormatPr', null, {
        defaultRowHeight: t.sheetFormat.defaultRowHeight || '16',
        baseColWidth: t.sheetFormat.baseColWidth || '10',
        outlineLevelRow: t.sheetFormat.outlineLevelRow || '7'
      })),
    o['!cols'] != null && o['!cols'].length > 0 && (a[a.length] = r1(o, o['!cols'])),
    (a[(s = a.length)] = '<sheetData/>'),
    (o['!links'] = []),
    o['!ref'] != null && ((f = i1(o, t)), f.length > 0 && (a[a.length] = f)),
    a.length > s + 1 && ((a[a.length] = '</sheetData>'), (a[s] = a[s].replace('/>', '>'))),
    o['!protect'] && (a[a.length] = Qc(o['!protect'])),
    o['!autofilter'] != null && (a[a.length] = t1(o['!autofilter'], o, r, e)),
    o['!merges'] != null && o['!merges'].length > 0 && (a[a.length] = $c(o['!merges']))
  var x = -1,
    p,
    E = -1
  return (
    o['!links'].length > 0 &&
      ((a[a.length] = '<hyperlinks>'),
      o['!links'].forEach(function (u) {
        u[1].Target &&
          ((p = { ref: u[0] }),
          u[1].Target.charAt(0) != '#' &&
            ((E = de(n, -1, ve(u[1].Target).replace(/#.*$/, ''), he.HLINK)),
            (p['r:id'] = 'rId' + E)),
          (x = u[1].Target.indexOf('#')) > -1 && (p.location = ve(u[1].Target.slice(x + 1))),
          u[1].Tooltip && (p.tooltip = ve(u[1].Tooltip)),
          (a[a.length] = j('hyperlink', null, p)))
      }),
      (a[a.length] = '</hyperlinks>')),
    delete o['!links'],
    o['!margins'] != null && (a[a.length] = e1(o['!margins'])),
    (!t || t.ignoreEC || t.ignoreEC == null) &&
      (a[a.length] = We(
        'ignoredErrors',
        j('ignoredError', null, { numberStoredAsText: 1, sqref: l })
      )),
    d.length > 0 &&
      ((E = de(n, -1, '../drawings/drawing' + (e + 1) + '.xml', he.DRAW)),
      (a[a.length] = j('drawing', null, { 'r:id': 'rId' + E })),
      (o['!drawing'] = d)),
    o['!comments'].length > 0 &&
      ((E = de(n, -1, '../drawings/vmlDrawing' + (e + 1) + '.vml', he.VML)),
      (a[a.length] = j('legacyDrawing', null, { 'r:id': 'rId' + E })),
      (o['!legacy'] = E)),
    a.length > 1 && ((a[a.length] = '</worksheet>'), (a[1] = a[1].replace('/>', '>'))),
    a.join('')
  )
}
function s1(e, t) {
  var r = {},
    n = e.l + t
  ;(r.r = e.read_shift(4)), (e.l += 4)
  var a = e.read_shift(2)
  e.l += 1
  var i = e.read_shift(1)
  return (
    (e.l = n), i & 7 && (r.level = i & 7), i & 16 && (r.hidden = !0), i & 32 && (r.hpt = a / 20), r
  )
}
function f1(e, t, r) {
  var n = B(145),
    a = (r['!rows'] || [])[e] || {}
  n.write_shift(4, e), n.write_shift(4, 0)
  var i = 320
  a.hpx ? (i = f0(a.hpx) * 20) : a.hpt && (i = a.hpt * 20), n.write_shift(2, i), n.write_shift(1, 0)
  var s = 0
  a.level && (s |= a.level),
    a.hidden && (s |= 16),
    (a.hpx || a.hpt) && (s |= 32),
    n.write_shift(1, s),
    n.write_shift(1, 0)
  var f = 0,
    o = n.l
  n.l += 4
  for (var l = { r: e, c: 0 }, c = 0; c < 16; ++c)
    if (!(t.s.c > (c + 1) << 10 || t.e.c < c << 10)) {
      for (var d = -1, x = -1, p = c << 10; p < (c + 1) << 10; ++p) {
        l.c = p
        var E = Array.isArray(r) ? (r[l.r] || [])[l.c] : r[me(l)]
        E && (d < 0 && (d = p), (x = p))
      }
      d < 0 || (++f, n.write_shift(4, d), n.write_shift(4, x))
    }
  var u = n.l
  return (n.l = o), n.write_shift(4, f), (n.l = u), n.length > n.l ? n.slice(0, n.l) : n
}
function l1(e, t, r, n) {
  var a = f1(n, r, t)
  ;(a.length > 17 || (t['!rows'] || [])[n]) && W(e, 0, a)
}
var o1 = qr,
  c1 = xt
function h1() {}
function u1(e, t) {
  var r = {},
    n = e[e.l]
  return ++e.l, (r.above = !(n & 64)), (r.left = !(n & 128)), (e.l += 18), (r.name = Ef(e)), r
}
function x1(e, t, r) {
  r == null && (r = B(84 + 4 * e.length))
  var n = 192
  t && (t.above && (n &= -65), t.left && (n &= -129)), r.write_shift(1, n)
  for (var a = 1; a < 3; ++a) r.write_shift(1, 0)
  return n0({ auto: 1 }, r), r.write_shift(-4, -1), r.write_shift(-4, -1), La(e, r), r.slice(0, r.l)
}
function p1(e) {
  var t = cr(e)
  return [t]
}
function d1(e, t, r) {
  return r == null && (r = B(8)), $r(t, r)
}
function v1(e) {
  var t = Jr(e)
  return [t]
}
function m1(e, t, r) {
  return r == null && (r = B(4)), Zr(t, r)
}
function g1(e) {
  var t = cr(e),
    r = e.read_shift(1)
  return [t, r, 'b']
}
function _1(e, t, r) {
  return r == null && (r = B(9)), $r(t, r), r.write_shift(1, e.v ? 1 : 0), r
}
function T1(e) {
  var t = Jr(e),
    r = e.read_shift(1)
  return [t, r, 'b']
}
function E1(e, t, r) {
  return r == null && (r = B(5)), Zr(t, r), r.write_shift(1, e.v ? 1 : 0), r
}
function w1(e) {
  var t = cr(e),
    r = e.read_shift(1)
  return [t, r, 'e']
}
function S1(e, t, r) {
  return r == null && (r = B(9)), $r(t, r), r.write_shift(1, e.v), r
}
function A1(e) {
  var t = Jr(e),
    r = e.read_shift(1)
  return [t, r, 'e']
}
function F1(e, t, r) {
  return (
    r == null && (r = B(8)),
    Zr(t, r),
    r.write_shift(1, e.v),
    r.write_shift(2, 0),
    r.write_shift(1, 0),
    r
  )
}
function y1(e) {
  var t = cr(e),
    r = e.read_shift(4)
  return [t, r, 's']
}
function C1(e, t, r) {
  return r == null && (r = B(12)), $r(t, r), r.write_shift(4, t.v), r
}
function O1(e) {
  var t = Jr(e),
    r = e.read_shift(4)
  return [t, r, 's']
}
function D1(e, t, r) {
  return r == null && (r = B(8)), Zr(t, r), r.write_shift(4, t.v), r
}
function R1(e) {
  var t = cr(e),
    r = pt(e)
  return [t, r, 'n']
}
function I1(e, t, r) {
  return r == null && (r = B(16)), $r(t, r), Kr(e.v, r), r
}
function N1(e) {
  var t = Jr(e),
    r = pt(e)
  return [t, r, 'n']
}
function k1(e, t, r) {
  return r == null && (r = B(12)), Zr(t, r), Kr(e.v, r), r
}
function P1(e) {
  var t = cr(e),
    r = Ma(e)
  return [t, r, 'n']
}
function L1(e, t, r) {
  return r == null && (r = B(12)), $r(t, r), Ba(e.v, r), r
}
function M1(e) {
  var t = Jr(e),
    r = Ma(e)
  return [t, r, 'n']
}
function B1(e, t, r) {
  return r == null && (r = B(8)), Zr(t, r), Ba(e.v, r), r
}
function U1(e) {
  var t = cr(e),
    r = K0(e)
  return [t, r, 'is']
}
function b1(e) {
  var t = cr(e),
    r = Ke(e)
  return [t, r, 'str']
}
function W1(e, t, r) {
  return (
    r == null && (r = B(12 + 4 * e.v.length)),
    $r(t, r),
    Le(e.v, r),
    r.length > r.l ? r.slice(0, r.l) : r
  )
}
function H1(e) {
  var t = Jr(e),
    r = Ke(e)
  return [t, r, 'str']
}
function V1(e, t, r) {
  return (
    r == null && (r = B(8 + 4 * e.v.length)),
    Zr(t, r),
    Le(e.v, r),
    r.length > r.l ? r.slice(0, r.l) : r
  )
}
function G1(e, t, r) {
  var n = e.l + t,
    a = cr(e)
  a.r = r['!row']
  var i = e.read_shift(1),
    s = [a, i, 'b']
  if (r.cellFormula) {
    e.l += 2
    var f = v0(e, n - e.l, r)
    s[3] = ct(f, null, a, r.supbooks, r)
  } else e.l = n
  return s
}
function X1(e, t, r) {
  var n = e.l + t,
    a = cr(e)
  a.r = r['!row']
  var i = e.read_shift(1),
    s = [a, i, 'e']
  if (r.cellFormula) {
    e.l += 2
    var f = v0(e, n - e.l, r)
    s[3] = ct(f, null, a, r.supbooks, r)
  } else e.l = n
  return s
}
function z1(e, t, r) {
  var n = e.l + t,
    a = cr(e)
  a.r = r['!row']
  var i = pt(e),
    s = [a, i, 'n']
  if (r.cellFormula) {
    e.l += 2
    var f = v0(e, n - e.l, r)
    s[3] = ct(f, null, a, r.supbooks, r)
  } else e.l = n
  return s
}
function K1(e, t, r) {
  var n = e.l + t,
    a = cr(e)
  a.r = r['!row']
  var i = Ke(e),
    s = [a, i, 'str']
  if (r.cellFormula) {
    e.l += 2
    var f = v0(e, n - e.l, r)
    s[3] = ct(f, null, a, r.supbooks, r)
  } else e.l = n
  return s
}
var j1 = qr,
  Y1 = xt
function $1(e, t) {
  return t == null && (t = B(4)), t.write_shift(4, e), t
}
function J1(e, t) {
  var r = e.l + t,
    n = qr(e),
    a = j0(e),
    i = Ke(e),
    s = Ke(e),
    f = Ke(e)
  e.l = r
  var o = { rfx: n, relId: a, loc: i, display: f }
  return s && (o.Tooltip = s), o
}
function Z1(e, t) {
  var r = B(50 + 4 * (e[1].Target.length + (e[1].Tooltip || '').length))
  xt({ s: Pe(e[0]), e: Pe(e[0]) }, r), Y0('rId' + t, r)
  var n = e[1].Target.indexOf('#'),
    a = n == -1 ? '' : e[1].Target.slice(n + 1)
  return Le(a || '', r), Le(e[1].Tooltip || '', r), Le('', r), r.slice(0, r.l)
}
function q1() {}
function Q1(e, t, r) {
  var n = e.l + t,
    a = Ua(e),
    i = e.read_shift(1),
    s = [a]
  if (((s[2] = i), r.cellFormula)) {
    var f = Hc(e, n - e.l, r)
    s[1] = f
  } else e.l = n
  return s
}
function eh(e, t, r) {
  var n = e.l + t,
    a = qr(e),
    i = [a]
  if (r.cellFormula) {
    var s = Gc(e, n - e.l, r)
    ;(i[1] = s), (e.l = n)
  } else e.l = n
  return i
}
function rh(e, t, r) {
  r == null && (r = B(18))
  var n = m0(e, t)
  r.write_shift(-4, e),
    r.write_shift(-4, e),
    r.write_shift(4, (n.width || 10) * 256),
    r.write_shift(4, 0)
  var a = 0
  return (
    t.hidden && (a |= 1),
    typeof n.width == 'number' && (a |= 2),
    t.level && (a |= t.level << 8),
    r.write_shift(2, a),
    r
  )
}
var Ei = ['left', 'right', 'top', 'bottom', 'header', 'footer']
function th(e) {
  var t = {}
  return (
    Ei.forEach(function (r) {
      t[r] = pt(e)
    }),
    t
  )
}
function nh(e, t) {
  return (
    t == null && (t = B(6 * 8)),
    _i(e),
    Ei.forEach(function (r) {
      Kr(e[r], t)
    }),
    t
  )
}
function ah(e) {
  var t = e.read_shift(2)
  return (e.l += 28), { RTL: t & 32 }
}
function ih(e, t, r) {
  r == null && (r = B(30))
  var n = 924
  return (
    (((t || {}).Views || [])[0] || {}).RTL && (n |= 32),
    r.write_shift(2, n),
    r.write_shift(4, 0),
    r.write_shift(4, 0),
    r.write_shift(4, 0),
    r.write_shift(1, 0),
    r.write_shift(1, 0),
    r.write_shift(2, 0),
    r.write_shift(2, 100),
    r.write_shift(2, 0),
    r.write_shift(2, 0),
    r.write_shift(2, 0),
    r.write_shift(4, 0),
    r
  )
}
function sh(e) {
  var t = B(24)
  return t.write_shift(4, 4), t.write_shift(4, 1), xt(e, t), t
}
function fh(e, t) {
  return (
    t == null && (t = B(16 * 4 + 2)),
    t.write_shift(2, e.password ? ti(e.password) : 0),
    t.write_shift(4, 1),
    [
      ['objects', !1],
      ['scenarios', !1],
      ['formatCells', !0],
      ['formatColumns', !0],
      ['formatRows', !0],
      ['insertColumns', !0],
      ['insertRows', !0],
      ['insertHyperlinks', !0],
      ['deleteColumns', !0],
      ['deleteRows', !0],
      ['selectLockedCells', !1],
      ['sort', !0],
      ['autoFilter', !0],
      ['pivotTables', !0],
      ['selectUnlockedCells', !1]
    ].forEach(function (r) {
      r[1]
        ? t.write_shift(4, e[r[0]] != null && !e[r[0]] ? 1 : 0)
        : t.write_shift(4, e[r[0]] != null && e[r[0]] ? 0 : 1)
    }),
    t
  )
}
function lh() {}
function oh() {}
function ch(e, t, r, n, a, i, s) {
  if (t.v === void 0) return !1
  var f = ''
  switch (t.t) {
    case 'b':
      f = t.v ? '1' : '0'
      break
    case 'd':
      ;(t = Qe(t)), (t.z = t.z || ye[14]), (t.v = qe(Je(t.v))), (t.t = 'n')
      break
    case 'n':
    case 'e':
      f = '' + t.v
      break
    default:
      f = t.v
      break
  }
  var o = { r, c: n }
  switch (
    ((o.s = Br(a.cellXfs, t, a)),
    t.l && i['!links'].push([me(o), t.l]),
    t.c && i['!comments'].push([me(o), t.c]),
    t.t)
  ) {
    case 's':
    case 'str':
      return (
        a.bookSST
          ? ((f = en(a.Strings, t.v, a.revStrings)),
            (o.t = 's'),
            (o.v = f),
            s ? W(e, 18, D1(t, o)) : W(e, 7, C1(t, o)))
          : ((o.t = 'str'), s ? W(e, 17, V1(t, o)) : W(e, 6, W1(t, o))),
        !0
      )
    case 'n':
      return (
        t.v == (t.v | 0) && t.v > -1e3 && t.v < 1e3
          ? s
            ? W(e, 13, B1(t, o))
            : W(e, 2, L1(t, o))
          : s
          ? W(e, 16, k1(t, o))
          : W(e, 5, I1(t, o)),
        !0
      )
    case 'b':
      return (o.t = 'b'), s ? W(e, 15, E1(t, o)) : W(e, 4, _1(t, o)), !0
    case 'e':
      return (o.t = 'e'), s ? W(e, 14, F1(t, o)) : W(e, 3, S1(t, o)), !0
  }
  return s ? W(e, 12, m1(t, o)) : W(e, 1, d1(t, o)), !0
}
function hh(e, t, r, n) {
  var a = Ee(t['!ref'] || 'A1'),
    i,
    s = '',
    f = []
  W(e, 145)
  var o = Array.isArray(t),
    l = a.e.r
  t['!rows'] && (l = Math.max(a.e.r, t['!rows'].length - 1))
  for (var c = a.s.r; c <= l; ++c) {
    ;(s = He(c)), l1(e, t, a, c)
    var d = !1
    if (c <= a.e.r)
      for (var x = a.s.c; x <= a.e.c; ++x) {
        c === a.s.r && (f[x] = ze(x)), (i = f[x] + s)
        var p = o ? (t[c] || [])[x] : t[i]
        if (!p) {
          d = !1
          continue
        }
        d = ch(e, p, c, x, n, t, d)
      }
  }
  W(e, 146)
}
function uh(e, t) {
  !t ||
    !t['!merges'] ||
    (W(e, 177, $1(t['!merges'].length)),
    t['!merges'].forEach(function (r) {
      W(e, 176, Y1(r))
    }),
    W(e, 178))
}
function xh(e, t) {
  !t ||
    !t['!cols'] ||
    (W(e, 390),
    t['!cols'].forEach(function (r, n) {
      r && W(e, 60, rh(n, r))
    }),
    W(e, 391))
}
function ph(e, t) {
  !t || !t['!ref'] || (W(e, 648), W(e, 649, sh(Ee(t['!ref']))), W(e, 650))
}
function dh(e, t, r) {
  t['!links'].forEach(function (n) {
    if (n[1].Target) {
      var a = de(r, -1, n[1].Target.replace(/#.*$/, ''), he.HLINK)
      W(e, 494, Z1(n, a))
    }
  }),
    delete t['!links']
}
function vh(e, t, r, n) {
  if (t['!comments'].length > 0) {
    var a = de(n, -1, '../drawings/vmlDrawing' + (r + 1) + '.vml', he.VML)
    W(e, 551, Y0('rId' + a)), (t['!legacy'] = a)
  }
}
function mh(e, t, r, n) {
  if (t['!autofilter']) {
    var a = t['!autofilter'],
      i = typeof a.ref == 'string' ? a.ref : De(a.ref)
    r.Workbook || (r.Workbook = { Sheets: [] }), r.Workbook.Names || (r.Workbook.Names = [])
    var s = r.Workbook.Names,
      f = ir(i)
    f.s.r == f.e.r && ((f.e.r = ir(t['!ref']).e.r), (i = De(f)))
    for (var o = 0; o < s.length; ++o) {
      var l = s[o]
      if (l.Name == '_xlnm._FilterDatabase' && l.Sheet == n) {
        l.Ref = "'" + r.SheetNames[n] + "'!" + i
        break
      }
    }
    o == s.length &&
      s.push({ Name: '_xlnm._FilterDatabase', Sheet: n, Ref: "'" + r.SheetNames[n] + "'!" + i }),
      W(e, 161, xt(Ee(i))),
      W(e, 162)
  }
}
function gh(e, t, r) {
  W(e, 133), W(e, 137, ih(t, r)), W(e, 138), W(e, 134)
}
function _h(e, t) {
  t['!protect'] && W(e, 535, fh(t['!protect']))
}
function Th(e, t, r, n) {
  var a = Ze(),
    i = r.SheetNames[e],
    s = r.Sheets[i] || {},
    f = i
  try {
    r && r.Workbook && (f = r.Workbook.Sheets[e].CodeName || f)
  } catch {}
  var o = Ee(s['!ref'] || 'A1')
  if (o.e.c > 16383 || o.e.r > 1048575) {
    if (t.WTF)
      throw new Error('Range ' + (s['!ref'] || 'A1') + ' exceeds format limit A1:XFD1048576')
    ;(o.e.c = Math.min(o.e.c, 16383)), (o.e.r = Math.min(o.e.c, 1048575))
  }
  return (
    (s['!links'] = []),
    (s['!comments'] = []),
    W(a, 129),
    (r.vbaraw || s['!outline']) && W(a, 147, x1(f, s['!outline'])),
    W(a, 148, c1(o)),
    gh(a, s, r.Workbook),
    xh(a, s),
    hh(a, s, e, t),
    _h(a, s),
    mh(a, s, r, e),
    uh(a, s),
    dh(a, s, n),
    s['!margins'] && W(a, 476, nh(s['!margins'])),
    (!t || t.ignoreEC || t.ignoreEC == null) && ph(a, s),
    vh(a, s, e, n),
    W(a, 130),
    a.end()
  )
}
function Eh(e, t) {
  e.l += 10
  var r = Ke(e)
  return { name: r }
}
var wh = [
  ['allowRefreshQuery', !1, 'bool'],
  ['autoCompressPictures', !0, 'bool'],
  ['backupFile', !1, 'bool'],
  ['checkCompatibility', !1, 'bool'],
  ['CodeName', ''],
  ['date1904', !1, 'bool'],
  ['defaultThemeVersion', 0, 'int'],
  ['filterPrivacy', !1, 'bool'],
  ['hidePivotFieldList', !1, 'bool'],
  ['promptedSolutions', !1, 'bool'],
  ['publishItems', !1, 'bool'],
  ['refreshAllConnections', !1, 'bool'],
  ['saveExternalLinkValues', !0, 'bool'],
  ['showBorderUnselectedTables', !0, 'bool'],
  ['showInkAnnotation', !0, 'bool'],
  ['showObjects', 'all'],
  ['showPivotChartFilter', !1, 'bool'],
  ['updateLinks', 'userSet']
]
function Sh(e) {
  return !e.Workbook || !e.Workbook.WBProps
    ? 'false'
    : qs(e.Workbook.WBProps.date1904)
    ? 'true'
    : 'false'
}
var Ah = '][*?/\\'.split('')
function wi(e, t) {
  if (e.length > 31) {
    if (t) return !1
    throw new Error('Sheet names cannot exceed 31 chars')
  }
  var r = !0
  return (
    Ah.forEach(function (n) {
      if (e.indexOf(n) != -1) {
        if (!t) throw new Error('Sheet name cannot contain : \\ / ? * [ ]')
        r = !1
      }
    }),
    r
  )
}
function Fh(e, t, r) {
  e.forEach(function (n, a) {
    wi(n)
    for (var i = 0; i < a; ++i) if (n == e[i]) throw new Error('Duplicate Sheet Name: ' + n)
    if (r) {
      var s = (t && t[a] && t[a].CodeName) || n
      if (s.charCodeAt(0) == 95 && s.length > 22) throw new Error('Bad Code Name: Worksheet' + s)
    }
  })
}
function yh(e) {
  if (!e || !e.SheetNames || !e.Sheets) throw new Error('Invalid Workbook')
  if (!e.SheetNames.length) throw new Error('Workbook is empty')
  var t = (e.Workbook && e.Workbook.Sheets) || []
  Fh(e.SheetNames, t, !!e.vbaraw)
  for (var r = 0; r < e.SheetNames.length; ++r) Yc(e.Sheets[e.SheetNames[r]], e.SheetNames[r], r)
}
function Si(e) {
  var t = [Re]
  t[t.length] = j('workbook', null, { xmlns: ht[0], 'xmlns:r': ke.r })
  var r = e.Workbook && (e.Workbook.Names || []).length > 0,
    n = { codeName: 'ThisWorkbook' }
  e.Workbook &&
    e.Workbook.WBProps &&
    (wh.forEach(function (f) {
      e.Workbook.WBProps[f[0]] != null &&
        e.Workbook.WBProps[f[0]] != f[1] &&
        (n[f[0]] = e.Workbook.WBProps[f[0]])
    }),
    e.Workbook.WBProps.CodeName && ((n.codeName = e.Workbook.WBProps.CodeName), delete n.CodeName)),
    (t[t.length] = j('workbookPr', null, n))
  var a = (e.Workbook && e.Workbook.Sheets) || [],
    i = 0
  if (a && a[0] && a[0].Hidden) {
    for (
      t[t.length] = '<bookViews>', i = 0;
      i != e.SheetNames.length && !(!a[i] || !a[i].Hidden);
      ++i
    );
    i == e.SheetNames.length && (i = 0),
      (t[t.length] = '<workbookView firstSheet="' + i + '" activeTab="' + i + '"/>'),
      (t[t.length] = '</bookViews>')
  }
  for (t[t.length] = '<sheets>', i = 0; i != e.SheetNames.length; ++i) {
    var s = { name: ve(e.SheetNames[i].slice(0, 31)) }
    if (((s.sheetId = '' + (i + 1)), (s['r:id'] = 'rId' + (i + 1)), a[i]))
      switch (a[i].Hidden) {
        case 1:
          s.state = 'hidden'
          break
        case 2:
          s.state = 'veryHidden'
          break
      }
    t[t.length] = j('sheet', null, s)
  }
  return (
    (t[t.length] = '</sheets>'),
    r &&
      ((t[t.length] = '<definedNames>'),
      e.Workbook &&
        e.Workbook.Names &&
        e.Workbook.Names.forEach(function (f) {
          var o = { name: f.Name }
          f.Comment && (o.comment = f.Comment),
            f.Sheet != null && (o.localSheetId = '' + f.Sheet),
            f.Hidden && (o.hidden = '1'),
            f.Ref && (t[t.length] = j('definedName', ve(f.Ref), o))
        }),
      (t[t.length] = '</definedNames>')),
    t.length > 2 && ((t[t.length] = '</workbook>'), (t[1] = t[1].replace('/>', '>'))),
    t.join('')
  )
}
function Ch(e, t) {
  var r = {}
  return (
    (r.Hidden = e.read_shift(4)),
    (r.iTabID = e.read_shift(4)),
    (r.strRelID = P0(e)),
    (r.name = Ke(e)),
    r
  )
}
function Oh(e, t) {
  return (
    t || (t = B(127)),
    t.write_shift(4, e.Hidden),
    t.write_shift(4, e.iTabID),
    Y0(e.strRelID, t),
    Le(e.name.slice(0, 31), t),
    t.length > t.l ? t.slice(0, t.l) : t
  )
}
function Dh(e, t) {
  var r = {},
    n = e.read_shift(4)
  r.defaultThemeVersion = e.read_shift(4)
  var a = t > 8 ? Ke(e) : ''
  return (
    a.length > 0 && (r.CodeName = a),
    (r.autoCompressPictures = !!(n & 65536)),
    (r.backupFile = !!(n & 64)),
    (r.checkCompatibility = !!(n & 4096)),
    (r.date1904 = !!(n & 1)),
    (r.filterPrivacy = !!(n & 8)),
    (r.hidePivotFieldList = !!(n & 1024)),
    (r.promptedSolutions = !!(n & 16)),
    (r.publishItems = !!(n & 2048)),
    (r.refreshAllConnections = !!(n & 262144)),
    (r.saveExternalLinkValues = !!(n & 128)),
    (r.showBorderUnselectedTables = !!(n & 4)),
    (r.showInkAnnotation = !!(n & 32)),
    (r.showObjects = ['all', 'placeholders', 'none'][(n >> 13) & 3]),
    (r.showPivotChartFilter = !!(n & 32768)),
    (r.updateLinks = ['userSet', 'never', 'always'][(n >> 8) & 3]),
    r
  )
}
function Rh(e, t) {
  t || (t = B(72))
  var r = 0
  return (
    e && e.filterPrivacy && (r |= 8),
    t.write_shift(4, r),
    t.write_shift(4, 0),
    La((e && e.CodeName) || 'ThisWorkbook', t),
    t.slice(0, t.l)
  )
}
function Ih(e, t, r) {
  var n = e.l + t
  ;(e.l += 4), (e.l += 1)
  var a = e.read_shift(4),
    i = wf(e),
    s = Vc(e, 0, r),
    f = j0(e)
  e.l = n
  var o = { Name: i, Ptg: s }
  return a < 268435455 && (o.Sheet = a), f && (o.Comment = f), o
}
function Nh(e, t) {
  W(e, 143)
  for (var r = 0; r != t.SheetNames.length; ++r) {
    var n =
        (t.Workbook && t.Workbook.Sheets && t.Workbook.Sheets[r] && t.Workbook.Sheets[r].Hidden) ||
        0,
      a = { Hidden: n, iTabID: r + 1, strRelID: 'rId' + (r + 1), name: t.SheetNames[r] }
    W(e, 156, Oh(a))
  }
  W(e, 144)
}
function kh(e, t) {
  t || (t = B(127))
  for (var r = 0; r != 4; ++r) t.write_shift(4, 0)
  return (
    Le('SheetJS', t),
    Le(Jt.version, t),
    Le(Jt.version, t),
    Le('7262', t),
    t.length > t.l ? t.slice(0, t.l) : t
  )
}
function Ph(e, t) {
  t || (t = B(29)),
    t.write_shift(-4, 0),
    t.write_shift(-4, 460),
    t.write_shift(4, 28800),
    t.write_shift(4, 17600),
    t.write_shift(4, 500),
    t.write_shift(4, e),
    t.write_shift(4, e)
  var r = 120
  return t.write_shift(1, r), t.length > t.l ? t.slice(0, t.l) : t
}
function Lh(e, t) {
  if (!(!t.Workbook || !t.Workbook.Sheets)) {
    for (var r = t.Workbook.Sheets, n = 0, a = -1, i = -1; n < r.length; ++n)
      !r[n] || (!r[n].Hidden && a == -1) ? (a = n) : r[n].Hidden == 1 && i == -1 && (i = n)
    i > a || (W(e, 135), W(e, 158, Ph(a)), W(e, 136))
  }
}
function Mh(e, t) {
  var r = Ze()
  return (
    W(r, 131),
    W(r, 128, kh()),
    W(r, 153, Rh((e.Workbook && e.Workbook.WBProps) || null)),
    Lh(r, e),
    Nh(r, e),
    W(r, 132),
    r.end()
  )
}
function Bh(e, t, r) {
  return (t.slice(-4) === '.bin' ? Mh : Si)(e)
}
function Uh(e, t, r, n, a) {
  return (t.slice(-4) === '.bin' ? Th : Ti)(e, r, n, a)
}
function bh(e, t, r) {
  return (t.slice(-4) === '.bin' ? to : ii)(e, r)
}
function Wh(e, t, r) {
  return (t.slice(-4) === '.bin' ? Dl : ri)(e, r)
}
function Hh(e, t, r) {
  return (t.slice(-4) === '.bin' ? _o : ci)(e)
}
function Vh(e) {
  return (e.slice(-4) === '.bin' ? co : li)()
}
function Gh(e, t) {
  var r = []
  return (
    e.Props && r.push(Uf(e.Props, t)), e.Custprops && r.push(bf(e.Props, e.Custprops)), r.join('')
  )
}
function Xh() {
  return ''
}
function zh(e, t) {
  var r = ['<Style ss:ID="Default" ss:Name="Normal"><NumberFormat/></Style>']
  return (
    t.cellXfs.forEach(function (n, a) {
      var i = []
      i.push(j('NumberFormat', null, { 'ss:Format': ve(ye[n.numFmtId]) }))
      var s = { 'ss:ID': 's' + (21 + a) }
      r.push(j('Style', i.join(''), s))
    }),
    j('Styles', r.join(''))
  )
}
function Ai(e) {
  return j('NamedRange', null, {
    'ss:Name': e.Name,
    'ss:RefersTo': '=' + q0(e.Ref, { r: 0, c: 0 })
  })
}
function Kh(e) {
  if (!((e || {}).Workbook || {}).Names) return ''
  for (var t = e.Workbook.Names, r = [], n = 0; n < t.length; ++n) {
    var a = t[n]
    a.Sheet == null && (a.Name.match(/^_xlfn\./) || r.push(Ai(a)))
  }
  return j('Names', r.join(''))
}
function jh(e, t, r, n) {
  if (!e || !((n || {}).Workbook || {}).Names) return ''
  for (var a = n.Workbook.Names, i = [], s = 0; s < a.length; ++s) {
    var f = a[s]
    f.Sheet == r && (f.Name.match(/^_xlfn\./) || i.push(Ai(f)))
  }
  return i.join('')
}
function Yh(e, t, r, n) {
  if (!e) return ''
  var a = []
  if (
    (e['!margins'] &&
      (a.push('<PageSetup>'),
      e['!margins'].header && a.push(j('Header', null, { 'x:Margin': e['!margins'].header })),
      e['!margins'].footer && a.push(j('Footer', null, { 'x:Margin': e['!margins'].footer })),
      a.push(
        j('PageMargins', null, {
          'x:Bottom': e['!margins'].bottom || '0.75',
          'x:Left': e['!margins'].left || '0.7',
          'x:Right': e['!margins'].right || '0.7',
          'x:Top': e['!margins'].top || '0.75'
        })
      ),
      a.push('</PageSetup>')),
    n && n.Workbook && n.Workbook.Sheets && n.Workbook.Sheets[r])
  )
    if (n.Workbook.Sheets[r].Hidden)
      a.push(j('Visible', n.Workbook.Sheets[r].Hidden == 1 ? 'SheetHidden' : 'SheetVeryHidden', {}))
    else {
      for (var i = 0; i < r && !(n.Workbook.Sheets[i] && !n.Workbook.Sheets[i].Hidden); ++i);
      i == r && a.push('<Selected/>')
    }
  return (
    ((((n || {}).Workbook || {}).Views || [])[0] || {}).RTL && a.push('<DisplayRightToLeft/>'),
    e['!protect'] &&
      (a.push(We('ProtectContents', 'True')),
      e['!protect'].objects && a.push(We('ProtectObjects', 'True')),
      e['!protect'].scenarios && a.push(We('ProtectScenarios', 'True')),
      e['!protect'].selectLockedCells != null && !e['!protect'].selectLockedCells
        ? a.push(We('EnableSelection', 'NoSelection'))
        : e['!protect'].selectUnlockedCells != null &&
          !e['!protect'].selectUnlockedCells &&
          a.push(We('EnableSelection', 'UnlockedCells')),
      [
        ['formatCells', 'AllowFormatCells'],
        ['formatColumns', 'AllowSizeCols'],
        ['formatRows', 'AllowSizeRows'],
        ['insertColumns', 'AllowInsertCols'],
        ['insertRows', 'AllowInsertRows'],
        ['insertHyperlinks', 'AllowInsertHyperlinks'],
        ['deleteColumns', 'AllowDeleteCols'],
        ['deleteRows', 'AllowDeleteRows'],
        ['sort', 'AllowSort'],
        ['autoFilter', 'AllowFilter'],
        ['pivotTables', 'AllowUsePivotTables']
      ].forEach(function (s) {
        e['!protect'][s[0]] && a.push('<' + s[1] + '/>')
      })),
    a.length == 0 ? '' : j('WorksheetOptions', a.join(''), { xmlns: nr.x })
  )
}
function $h(e) {
  return e
    .map(function (t) {
      var r = Zs(t.t || ''),
        n = j('ss:Data', r, { xmlns: 'http://www.w3.org/TR/REC-html40' })
      return j('Comment', n, { 'ss:Author': t.a })
    })
    .join('')
}
function Jh(e, t, r, n, a, i, s) {
  if (!e || (e.v == null && e.f == null)) return ''
  var f = {}
  if ((e.f && (f['ss:Formula'] = '=' + ve(q0(e.f, s))), e.F && e.F.slice(0, t.length) == t)) {
    var o = Pe(e.F.slice(t.length + 1))
    f['ss:ArrayRange'] =
      'RC:R' +
      (o.r == s.r ? '' : '[' + (o.r - s.r) + ']') +
      'C' +
      (o.c == s.c ? '' : '[' + (o.c - s.c) + ']')
  }
  if (
    (e.l &&
      e.l.Target &&
      ((f['ss:HRef'] = ve(e.l.Target)), e.l.Tooltip && (f['x:HRefScreenTip'] = ve(e.l.Tooltip))),
    r['!merges'])
  )
    for (var l = r['!merges'], c = 0; c != l.length; ++c)
      l[c].s.c != s.c ||
        l[c].s.r != s.r ||
        (l[c].e.c > l[c].s.c && (f['ss:MergeAcross'] = l[c].e.c - l[c].s.c),
        l[c].e.r > l[c].s.r && (f['ss:MergeDown'] = l[c].e.r - l[c].s.r))
  var d = '',
    x = ''
  switch (e.t) {
    case 'z':
      if (!n.sheetStubs) return ''
      break
    case 'n':
      ;(d = 'Number'), (x = String(e.v))
      break
    case 'b':
      ;(d = 'Boolean'), (x = e.v ? '1' : '0')
      break
    case 'e':
      ;(d = 'Error'), (x = Bt[e.v])
      break
    case 'd':
      ;(d = 'DateTime'), (x = new Date(e.v).toISOString()), e.z == null && (e.z = e.z || ye[14])
      break
    case 's':
      ;(d = 'String'), (x = Js(e.v || ''))
      break
  }
  var p = Br(n.cellXfs, e, n)
  ;(f['ss:StyleID'] = 's' + (21 + p)), (f['ss:Index'] = s.c + 1)
  var E = e.v != null ? x : '',
    u = e.t == 'z' ? '' : '<Data ss:Type="' + d + '">' + E + '</Data>'
  return (e.c || []).length > 0 && (u += $h(e.c)), j('Cell', u, f)
}
function Zh(e, t) {
  var r = '<Row ss:Index="' + (e + 1) + '"'
  return (
    t &&
      (t.hpt && !t.hpx && (t.hpx = ai(t.hpt)),
      t.hpx && (r += ' ss:AutoFitHeight="0" ss:Height="' + t.hpx + '"'),
      t.hidden && (r += ' ss:Hidden="1"')),
    r + '>'
  )
}
function qh(e, t, r, n) {
  if (!e['!ref']) return ''
  var a = Ee(e['!ref']),
    i = e['!merges'] || [],
    s = 0,
    f = []
  e['!cols'] &&
    e['!cols'].forEach(function (_, O) {
      J0(_)
      var R = !!_.width,
        y = m0(O, _),
        M = { 'ss:Index': O + 1 }
      R && (M['ss:Width'] = i0(y.width)),
        _.hidden && (M['ss:Hidden'] = '1'),
        f.push(j('Column', null, M))
    })
  for (var o = Array.isArray(e), l = a.s.r; l <= a.e.r; ++l) {
    for (var c = [Zh(l, (e['!rows'] || [])[l])], d = a.s.c; d <= a.e.c; ++d) {
      var x = !1
      for (s = 0; s != i.length; ++s)
        if (!(i[s].s.c > d) && !(i[s].s.r > l) && !(i[s].e.c < d) && !(i[s].e.r < l)) {
          ;(i[s].s.c != d || i[s].s.r != l) && (x = !0)
          break
        }
      if (!x) {
        var p = { r: l, c: d },
          E = me(p),
          u = o ? (e[l] || [])[d] : e[E]
        c.push(Jh(u, E, e, t, r, n, p))
      }
    }
    c.push('</Row>'), c.length > 2 && f.push(c.join(''))
  }
  return f.join('')
}
function Qh(e, t, r) {
  var n = [],
    a = r.SheetNames[e],
    i = r.Sheets[a],
    s = i ? jh(i, t, e, r) : ''
  return (
    s.length > 0 && n.push('<Names>' + s + '</Names>'),
    (s = i ? qh(i, t, e, r) : ''),
    s.length > 0 && n.push('<Table>' + s + '</Table>'),
    n.push(Yh(i, t, e, r)),
    n.join('')
  )
}
function eu(e, t) {
  t || (t = {}),
    e.SSF || (e.SSF = Qe(ye)),
    e.SSF &&
      (u0(),
      h0(e.SSF),
      (t.revssf = x0(e.SSF)),
      (t.revssf[e.SSF[65535]] = 0),
      (t.ssf = e.SSF),
      (t.cellXfs = []),
      Br(t.cellXfs, {}, { revssf: { General: 0 } }))
  var r = []
  r.push(Gh(e, t)), r.push(Xh()), r.push(''), r.push('')
  for (var n = 0; n < e.SheetNames.length; ++n)
    r.push(j('Worksheet', Qh(n, t, e), { 'ss:Name': ve(e.SheetNames[n]) }))
  return (
    (r[2] = zh(e, t)),
    (r[3] = Kh(e)),
    Re +
      j('Workbook', r.join(''), {
        xmlns: nr.ss,
        'xmlns:o': nr.o,
        'xmlns:x': nr.x,
        'xmlns:ss': nr.ss,
        'xmlns:dt': nr.dt,
        'xmlns:html': nr.html
      })
  )
}
var O0 = {
  SI: 'e0859ff2f94f6810ab9108002b27b3d9',
  DSI: '02d5cdd59c2e1b10939708002b2cf9ae',
  UDI: '05d5cdd59c2e1b10939708002b2cf9ae'
}
function ru(e, t) {
  var r = [],
    n = [],
    a = [],
    i = 0,
    s,
    f = An(Bn, 'n'),
    o = An(Un, 'n')
  if (e.Props)
    for (s = Ve(e.Props), i = 0; i < s.length; ++i)
      (Object.prototype.hasOwnProperty.call(f, s[i])
        ? r
        : Object.prototype.hasOwnProperty.call(o, s[i])
        ? n
        : a
      ).push([s[i], e.Props[s[i]]])
  if (e.Custprops)
    for (s = Ve(e.Custprops), i = 0; i < s.length; ++i)
      Object.prototype.hasOwnProperty.call(e.Props || {}, s[i]) ||
        (Object.prototype.hasOwnProperty.call(f, s[i])
          ? r
          : Object.prototype.hasOwnProperty.call(o, s[i])
          ? n
          : a
        ).push([s[i], e.Custprops[s[i]]])
  var l = []
  for (i = 0; i < a.length; ++i)
    Ya.indexOf(a[i][0]) > -1 || za.indexOf(a[i][0]) > -1 || (a[i][1] != null && l.push(a[i]))
  n.length && _e.utils.cfb_add(t, '/SummaryInformation', Gn(n, O0.SI, o, Un)),
    (r.length || l.length) &&
      _e.utils.cfb_add(
        t,
        '/DocumentSummaryInformation',
        Gn(r, O0.DSI, f, Bn, l.length ? l : null, O0.UDI)
      )
}
function tu(e, t) {
  var r = t || {},
    n = _e.utils.cfb_new({ root: 'R' }),
    a = '/Workbook'
  switch (r.bookType || 'xls') {
    case 'xls':
      r.bookType = 'biff8'
    case 'xla':
      r.bookType || (r.bookType = 'xla')
    case 'biff8':
      ;(a = '/Workbook'), (r.biff = 8)
      break
    case 'biff5':
      ;(a = '/Book'), (r.biff = 5)
      break
    default:
      throw new Error('invalid type ' + r.bookType + ' for XLS CFB')
  }
  return (
    _e.utils.cfb_add(n, a, Fi(e, r)),
    r.biff == 8 && (e.Props || e.Custprops) && ru(e, n),
    r.biff == 8 &&
      e.vbaraw &&
      To(n, _e.read(e.vbaraw, { type: typeof e.vbaraw == 'string' ? 'binary' : 'buffer' })),
    n
  )
}
var nu = {
  0: { f: s1 },
  1: { f: p1 },
  2: { f: P1 },
  3: { f: w1 },
  4: { f: g1 },
  5: { f: R1 },
  6: { f: b1 },
  7: { f: y1 },
  8: { f: K1 },
  9: { f: z1 },
  10: { f: G1 },
  11: { f: X1 },
  12: { f: v1 },
  13: { f: M1 },
  14: { f: A1 },
  15: { f: T1 },
  16: { f: N1 },
  17: { f: H1 },
  18: { f: O1 },
  19: { f: K0 },
  20: {},
  21: {},
  22: {},
  23: {},
  24: {},
  25: {},
  26: {},
  27: {},
  28: {},
  29: {},
  30: {},
  31: {},
  32: {},
  33: {},
  34: {},
  35: { T: 1 },
  36: { T: -1 },
  37: { T: 1 },
  38: { T: -1 },
  39: { f: Ih },
  40: {},
  42: {},
  43: { f: Ul },
  44: { f: Ml },
  45: { f: Hl },
  46: { f: Gl },
  47: { f: Vl },
  48: {},
  49: { f: df },
  50: {},
  51: { f: io },
  52: { T: 1 },
  53: { T: -1 },
  54: { T: 1 },
  55: { T: -1 },
  56: { T: 1 },
  57: { T: -1 },
  58: {},
  59: {},
  60: { f: vl },
  62: { f: U1 },
  63: { f: ho },
  64: { f: lh },
  65: {},
  66: {},
  67: {},
  68: {},
  69: {},
  70: {},
  128: {},
  129: { T: 1 },
  130: { T: -1 },
  131: { T: 1, f: Tr, p: 0 },
  132: { T: -1 },
  133: { T: 1 },
  134: { T: -1 },
  135: { T: 1 },
  136: { T: -1 },
  137: { T: 1, f: ah },
  138: { T: -1 },
  139: { T: 1 },
  140: { T: -1 },
  141: { T: 1 },
  142: { T: -1 },
  143: { T: 1 },
  144: { T: -1 },
  145: { T: 1 },
  146: { T: -1 },
  147: { f: u1 },
  148: { f: o1, p: 16 },
  151: { f: q1 },
  152: {},
  153: { f: Dh },
  154: {},
  155: {},
  156: { f: Ch },
  157: {},
  158: {},
  159: { T: 1, f: yl },
  160: { T: -1 },
  161: { T: 1, f: qr },
  162: { T: -1 },
  163: { T: 1 },
  164: { T: -1 },
  165: { T: 1 },
  166: { T: -1 },
  167: {},
  168: {},
  169: {},
  170: {},
  171: {},
  172: { T: 1 },
  173: { T: -1 },
  174: {},
  175: {},
  176: { f: j1 },
  177: { T: 1 },
  178: { T: -1 },
  179: { T: 1 },
  180: { T: -1 },
  181: { T: 1 },
  182: { T: -1 },
  183: { T: 1 },
  184: { T: -1 },
  185: { T: 1 },
  186: { T: -1 },
  187: { T: 1 },
  188: { T: -1 },
  189: { T: 1 },
  190: { T: -1 },
  191: { T: 1 },
  192: { T: -1 },
  193: { T: 1 },
  194: { T: -1 },
  195: { T: 1 },
  196: { T: -1 },
  197: { T: 1 },
  198: { T: -1 },
  199: { T: 1 },
  200: { T: -1 },
  201: { T: 1 },
  202: { T: -1 },
  203: { T: 1 },
  204: { T: -1 },
  205: { T: 1 },
  206: { T: -1 },
  207: { T: 1 },
  208: { T: -1 },
  209: { T: 1 },
  210: { T: -1 },
  211: { T: 1 },
  212: { T: -1 },
  213: { T: 1 },
  214: { T: -1 },
  215: { T: 1 },
  216: { T: -1 },
  217: { T: 1 },
  218: { T: -1 },
  219: { T: 1 },
  220: { T: -1 },
  221: { T: 1 },
  222: { T: -1 },
  223: { T: 1 },
  224: { T: -1 },
  225: { T: 1 },
  226: { T: -1 },
  227: { T: 1 },
  228: { T: -1 },
  229: { T: 1 },
  230: { T: -1 },
  231: { T: 1 },
  232: { T: -1 },
  233: { T: 1 },
  234: { T: -1 },
  235: { T: 1 },
  236: { T: -1 },
  237: { T: 1 },
  238: { T: -1 },
  239: { T: 1 },
  240: { T: -1 },
  241: { T: 1 },
  242: { T: -1 },
  243: { T: 1 },
  244: { T: -1 },
  245: { T: 1 },
  246: { T: -1 },
  247: { T: 1 },
  248: { T: -1 },
  249: { T: 1 },
  250: { T: -1 },
  251: { T: 1 },
  252: { T: -1 },
  253: { T: 1 },
  254: { T: -1 },
  255: { T: 1 },
  256: { T: -1 },
  257: { T: 1 },
  258: { T: -1 },
  259: { T: 1 },
  260: { T: -1 },
  261: { T: 1 },
  262: { T: -1 },
  263: { T: 1 },
  264: { T: -1 },
  265: { T: 1 },
  266: { T: -1 },
  267: { T: 1 },
  268: { T: -1 },
  269: { T: 1 },
  270: { T: -1 },
  271: { T: 1 },
  272: { T: -1 },
  273: { T: 1 },
  274: { T: -1 },
  275: { T: 1 },
  276: { T: -1 },
  277: {},
  278: { T: 1 },
  279: { T: -1 },
  280: { T: 1 },
  281: { T: -1 },
  282: { T: 1 },
  283: { T: 1 },
  284: { T: -1 },
  285: { T: 1 },
  286: { T: -1 },
  287: { T: 1 },
  288: { T: -1 },
  289: { T: 1 },
  290: { T: -1 },
  291: { T: 1 },
  292: { T: -1 },
  293: { T: 1 },
  294: { T: -1 },
  295: { T: 1 },
  296: { T: -1 },
  297: { T: 1 },
  298: { T: -1 },
  299: { T: 1 },
  300: { T: -1 },
  301: { T: 1 },
  302: { T: -1 },
  303: { T: 1 },
  304: { T: -1 },
  305: { T: 1 },
  306: { T: -1 },
  307: { T: 1 },
  308: { T: -1 },
  309: { T: 1 },
  310: { T: -1 },
  311: { T: 1 },
  312: { T: -1 },
  313: { T: -1 },
  314: { T: 1 },
  315: { T: -1 },
  316: { T: 1 },
  317: { T: -1 },
  318: { T: 1 },
  319: { T: -1 },
  320: { T: 1 },
  321: { T: -1 },
  322: { T: 1 },
  323: { T: -1 },
  324: { T: 1 },
  325: { T: -1 },
  326: { T: 1 },
  327: { T: -1 },
  328: { T: 1 },
  329: { T: -1 },
  330: { T: 1 },
  331: { T: -1 },
  332: { T: 1 },
  333: { T: -1 },
  334: { T: 1 },
  335: { f: no },
  336: { T: -1 },
  337: { f: lo, T: 1 },
  338: { T: -1 },
  339: { T: 1 },
  340: { T: -1 },
  341: { T: 1 },
  342: { T: -1 },
  343: { T: 1 },
  344: { T: -1 },
  345: { T: 1 },
  346: { T: -1 },
  347: { T: 1 },
  348: { T: -1 },
  349: { T: 1 },
  350: { T: -1 },
  351: {},
  352: {},
  353: { T: 1 },
  354: { T: -1 },
  355: { f: P0 },
  357: {},
  358: {},
  359: {},
  360: { T: 1 },
  361: {},
  362: { f: cl },
  363: {},
  364: {},
  366: {},
  367: {},
  368: {},
  369: {},
  370: {},
  371: {},
  372: { T: 1 },
  373: { T: -1 },
  374: { T: 1 },
  375: { T: -1 },
  376: { T: 1 },
  377: { T: -1 },
  378: { T: 1 },
  379: { T: -1 },
  380: { T: 1 },
  381: { T: -1 },
  382: { T: 1 },
  383: { T: -1 },
  384: { T: 1 },
  385: { T: -1 },
  386: { T: 1 },
  387: { T: -1 },
  388: { T: 1 },
  389: { T: -1 },
  390: { T: 1 },
  391: { T: -1 },
  392: { T: 1 },
  393: { T: -1 },
  394: { T: 1 },
  395: { T: -1 },
  396: {},
  397: {},
  398: {},
  399: {},
  400: {},
  401: { T: 1 },
  403: {},
  404: {},
  405: {},
  406: {},
  407: {},
  408: {},
  409: {},
  410: {},
  411: {},
  412: {},
  413: {},
  414: {},
  415: {},
  416: {},
  417: {},
  418: {},
  419: {},
  420: {},
  421: {},
  422: { T: 1 },
  423: { T: 1 },
  424: { T: -1 },
  425: { T: -1 },
  426: { f: Q1 },
  427: { f: eh },
  428: {},
  429: { T: 1 },
  430: { T: -1 },
  431: { T: 1 },
  432: { T: -1 },
  433: { T: 1 },
  434: { T: -1 },
  435: { T: 1 },
  436: { T: -1 },
  437: { T: 1 },
  438: { T: -1 },
  439: { T: 1 },
  440: { T: -1 },
  441: { T: 1 },
  442: { T: -1 },
  443: { T: 1 },
  444: { T: -1 },
  445: { T: 1 },
  446: { T: -1 },
  447: { T: 1 },
  448: { T: -1 },
  449: { T: 1 },
  450: { T: -1 },
  451: { T: 1 },
  452: { T: -1 },
  453: { T: 1 },
  454: { T: -1 },
  455: { T: 1 },
  456: { T: -1 },
  457: { T: 1 },
  458: { T: -1 },
  459: { T: 1 },
  460: { T: -1 },
  461: { T: 1 },
  462: { T: -1 },
  463: { T: 1 },
  464: { T: -1 },
  465: { T: 1 },
  466: { T: -1 },
  467: { T: 1 },
  468: { T: -1 },
  469: { T: 1 },
  470: { T: -1 },
  471: {},
  472: {},
  473: { T: 1 },
  474: { T: -1 },
  475: {},
  476: { f: th },
  477: {},
  478: {},
  479: { T: 1 },
  480: { T: -1 },
  481: { T: 1 },
  482: { T: -1 },
  483: { T: 1 },
  484: { T: -1 },
  485: { f: h1 },
  486: { T: 1 },
  487: { T: -1 },
  488: { T: 1 },
  489: { T: -1 },
  490: { T: 1 },
  491: { T: -1 },
  492: { T: 1 },
  493: { T: -1 },
  494: { f: J1 },
  495: { T: 1 },
  496: { T: -1 },
  497: { T: 1 },
  498: { T: -1 },
  499: {},
  500: { T: 1 },
  501: { T: -1 },
  502: { T: 1 },
  503: { T: -1 },
  504: {},
  505: { T: 1 },
  506: { T: -1 },
  507: {},
  508: { T: 1 },
  509: { T: -1 },
  510: { T: 1 },
  511: { T: -1 },
  512: {},
  513: {},
  514: { T: 1 },
  515: { T: -1 },
  516: { T: 1 },
  517: { T: -1 },
  518: { T: 1 },
  519: { T: -1 },
  520: { T: 1 },
  521: { T: -1 },
  522: {},
  523: {},
  524: {},
  525: {},
  526: {},
  527: {},
  528: { T: 1 },
  529: { T: -1 },
  530: { T: 1 },
  531: { T: -1 },
  532: { T: 1 },
  533: { T: -1 },
  534: {},
  535: {},
  536: {},
  537: {},
  538: { T: 1 },
  539: { T: -1 },
  540: { T: 1 },
  541: { T: -1 },
  542: { T: 1 },
  548: {},
  549: {},
  550: { f: P0 },
  551: {},
  552: {},
  553: {},
  554: { T: 1 },
  555: { T: -1 },
  556: { T: 1 },
  557: { T: -1 },
  558: { T: 1 },
  559: { T: -1 },
  560: { T: 1 },
  561: { T: -1 },
  562: {},
  564: {},
  565: { T: 1 },
  566: { T: -1 },
  569: { T: 1 },
  570: { T: -1 },
  572: {},
  573: { T: 1 },
  574: { T: -1 },
  577: {},
  578: {},
  579: {},
  580: {},
  581: {},
  582: {},
  583: {},
  584: {},
  585: {},
  586: {},
  587: {},
  588: { T: -1 },
  589: {},
  590: { T: 1 },
  591: { T: -1 },
  592: { T: 1 },
  593: { T: -1 },
  594: { T: 1 },
  595: { T: -1 },
  596: {},
  597: { T: 1 },
  598: { T: -1 },
  599: { T: 1 },
  600: { T: -1 },
  601: { T: 1 },
  602: { T: -1 },
  603: { T: 1 },
  604: { T: -1 },
  605: { T: 1 },
  606: { T: -1 },
  607: {},
  608: { T: 1 },
  609: { T: -1 },
  610: {},
  611: { T: 1 },
  612: { T: -1 },
  613: { T: 1 },
  614: { T: -1 },
  615: { T: 1 },
  616: { T: -1 },
  617: { T: 1 },
  618: { T: -1 },
  619: { T: 1 },
  620: { T: -1 },
  625: {},
  626: { T: 1 },
  627: { T: -1 },
  628: { T: 1 },
  629: { T: -1 },
  630: { T: 1 },
  631: { T: -1 },
  632: { f: mo },
  633: { T: 1 },
  634: { T: -1 },
  635: { T: 1, f: po },
  636: { T: -1 },
  637: { f: _f },
  638: { T: 1 },
  639: {},
  640: { T: -1 },
  641: { T: 1 },
  642: { T: -1 },
  643: { T: 1 },
  644: {},
  645: { T: -1 },
  646: { T: 1 },
  648: { T: 1 },
  649: {},
  650: { T: -1 },
  651: { f: Eh },
  652: {},
  653: { T: 1 },
  654: { T: -1 },
  655: { T: 1 },
  656: { T: -1 },
  657: { T: 1 },
  658: { T: -1 },
  659: {},
  660: { T: 1 },
  661: {},
  662: { T: -1 },
  663: {},
  664: { T: 1 },
  665: {},
  666: { T: -1 },
  667: {},
  668: {},
  669: {},
  671: { T: 1 },
  672: { T: -1 },
  673: { T: 1 },
  674: { T: -1 },
  675: {},
  676: {},
  677: {},
  678: {},
  679: {},
  680: {},
  681: {},
  1024: {},
  1025: {},
  1026: { T: 1 },
  1027: { T: -1 },
  1028: { T: 1 },
  1029: { T: -1 },
  1030: {},
  1031: { T: 1 },
  1032: { T: -1 },
  1033: { T: 1 },
  1034: { T: -1 },
  1035: {},
  1036: {},
  1037: {},
  1038: { T: 1 },
  1039: { T: -1 },
  1040: {},
  1041: { T: 1 },
  1042: { T: -1 },
  1043: {},
  1044: {},
  1045: {},
  1046: { T: 1 },
  1047: { T: -1 },
  1048: { T: 1 },
  1049: { T: -1 },
  1050: {},
  1051: { T: 1 },
  1052: { T: 1 },
  1053: { f: oh },
  1054: { T: 1 },
  1055: {},
  1056: { T: 1 },
  1057: { T: -1 },
  1058: { T: 1 },
  1059: { T: -1 },
  1061: {},
  1062: { T: 1 },
  1063: { T: -1 },
  1064: { T: 1 },
  1065: { T: -1 },
  1066: { T: 1 },
  1067: { T: -1 },
  1068: { T: 1 },
  1069: { T: -1 },
  1070: { T: 1 },
  1071: { T: -1 },
  1072: { T: 1 },
  1073: { T: -1 },
  1075: { T: 1 },
  1076: { T: -1 },
  1077: { T: 1 },
  1078: { T: -1 },
  1079: { T: 1 },
  1080: { T: -1 },
  1081: { T: 1 },
  1082: { T: -1 },
  1083: { T: 1 },
  1084: { T: -1 },
  1085: {},
  1086: { T: 1 },
  1087: { T: -1 },
  1088: { T: 1 },
  1089: { T: -1 },
  1090: { T: 1 },
  1091: { T: -1 },
  1092: { T: 1 },
  1093: { T: -1 },
  1094: { T: 1 },
  1095: { T: -1 },
  1096: {},
  1097: { T: 1 },
  1098: {},
  1099: { T: -1 },
  1100: { T: 1 },
  1101: { T: -1 },
  1102: {},
  1103: {},
  1104: {},
  1105: {},
  1111: {},
  1112: {},
  1113: { T: 1 },
  1114: { T: -1 },
  1115: { T: 1 },
  1116: { T: -1 },
  1117: {},
  1118: { T: 1 },
  1119: { T: -1 },
  1120: { T: 1 },
  1121: { T: -1 },
  1122: { T: 1 },
  1123: { T: -1 },
  1124: { T: 1 },
  1125: { T: -1 },
  1126: {},
  1128: { T: 1 },
  1129: { T: -1 },
  1130: {},
  1131: { T: 1 },
  1132: { T: -1 },
  1133: { T: 1 },
  1134: { T: -1 },
  1135: { T: 1 },
  1136: { T: -1 },
  1137: { T: 1 },
  1138: { T: -1 },
  1139: { T: 1 },
  1140: { T: -1 },
  1141: {},
  1142: { T: 1 },
  1143: { T: -1 },
  1144: { T: 1 },
  1145: { T: -1 },
  1146: {},
  1147: { T: 1 },
  1148: { T: -1 },
  1149: { T: 1 },
  1150: { T: -1 },
  1152: { T: 1 },
  1153: { T: -1 },
  1154: { T: -1 },
  1155: { T: -1 },
  1156: { T: -1 },
  1157: { T: 1 },
  1158: { T: -1 },
  1159: { T: 1 },
  1160: { T: -1 },
  1161: { T: 1 },
  1162: { T: -1 },
  1163: { T: 1 },
  1164: { T: -1 },
  1165: { T: 1 },
  1166: { T: -1 },
  1167: { T: 1 },
  1168: { T: -1 },
  1169: { T: 1 },
  1170: { T: -1 },
  1171: {},
  1172: { T: 1 },
  1173: { T: -1 },
  1177: {},
  1178: { T: 1 },
  1180: {},
  1181: {},
  1182: {},
  2048: { T: 1 },
  2049: { T: -1 },
  2050: {},
  2051: { T: 1 },
  2052: { T: -1 },
  2053: {},
  2054: {},
  2055: { T: 1 },
  2056: { T: -1 },
  2057: { T: 1 },
  2058: { T: -1 },
  2060: {},
  2067: {},
  2068: { T: 1 },
  2069: { T: -1 },
  2070: {},
  2071: {},
  2072: { T: 1 },
  2073: { T: -1 },
  2075: {},
  2076: {},
  2077: { T: 1 },
  2078: { T: -1 },
  2079: {},
  2080: { T: 1 },
  2081: { T: -1 },
  2082: {},
  2083: { T: 1 },
  2084: { T: -1 },
  2085: { T: 1 },
  2086: { T: -1 },
  2087: { T: 1 },
  2088: { T: -1 },
  2089: { T: 1 },
  2090: { T: -1 },
  2091: {},
  2092: {},
  2093: { T: 1 },
  2094: { T: -1 },
  2095: {},
  2096: { T: 1 },
  2097: { T: -1 },
  2098: { T: 1 },
  2099: { T: -1 },
  2100: { T: 1 },
  2101: { T: -1 },
  2102: {},
  2103: { T: 1 },
  2104: { T: -1 },
  2105: {},
  2106: { T: 1 },
  2107: { T: -1 },
  2108: {},
  2109: { T: 1 },
  2110: { T: -1 },
  2111: { T: 1 },
  2112: { T: -1 },
  2113: { T: 1 },
  2114: { T: -1 },
  2115: {},
  2116: {},
  2117: {},
  2118: { T: 1 },
  2119: { T: -1 },
  2120: {},
  2121: { T: 1 },
  2122: { T: -1 },
  2123: { T: 1 },
  2124: { T: -1 },
  2125: {},
  2126: { T: 1 },
  2127: { T: -1 },
  2128: {},
  2129: { T: 1 },
  2130: { T: -1 },
  2131: { T: 1 },
  2132: { T: -1 },
  2133: { T: 1 },
  2134: {},
  2135: {},
  2136: {},
  2137: { T: 1 },
  2138: { T: -1 },
  2139: { T: 1 },
  2140: { T: -1 },
  2141: {},
  3072: {},
  3073: {},
  4096: { T: 1 },
  4097: { T: -1 },
  5002: { T: 1 },
  5003: { T: -1 },
  5081: { T: 1 },
  5082: { T: -1 },
  5083: {},
  5084: { T: 1 },
  5085: { T: -1 },
  5086: { T: 1 },
  5087: { T: -1 },
  5088: {},
  5089: {},
  5090: {},
  5092: { T: 1 },
  5093: { T: -1 },
  5094: {},
  5095: { T: 1 },
  5096: { T: -1 },
  5097: {},
  5099: {},
  65535: { n: '' }
}
function J(e, t, r, n) {
  var a = t
  if (!isNaN(a)) {
    var i = n || (r || []).length || 0,
      s = e.next(4)
    s.write_shift(2, a), s.write_shift(2, i), i > 0 && G0(r) && e.push(r)
  }
}
function au(e, t, r, n) {
  var a = n || (r || []).length || 0
  if (a <= 8224) return J(e, t, r, a)
  var i = t
  if (!isNaN(i)) {
    for (var s = r.parts || [], f = 0, o = 0, l = 0; l + (s[f] || 8224) <= 8224; )
      (l += s[f] || 8224), f++
    var c = e.next(4)
    for (c.write_shift(2, i), c.write_shift(2, l), e.push(r.slice(o, o + l)), o += l; o < a; ) {
      for (c = e.next(4), c.write_shift(2, 60), l = 0; l + (s[f] || 8224) <= 8224; )
        (l += s[f] || 8224), f++
      c.write_shift(2, l), e.push(r.slice(o, o + l)), (o += l)
    }
  }
}
function bt(e, t, r) {
  return (
    e || (e = B(7)),
    e.write_shift(2, t),
    e.write_shift(2, r),
    e.write_shift(2, 0),
    e.write_shift(1, 0),
    e
  )
}
function iu(e, t, r, n) {
  var a = B(9)
  return bt(a, e, t), Ja(r, n || 'b', a), a
}
function su(e, t, r) {
  var n = B(8 + 2 * r.length)
  return (
    bt(n, e, t),
    n.write_shift(1, r.length),
    n.write_shift(r.length, r, 'sbcs'),
    n.l < n.length ? n.slice(0, n.l) : n
  )
}
function fu(e, t, r, n) {
  if (t.v != null)
    switch (t.t) {
      case 'd':
      case 'n':
        var a = t.t == 'd' ? qe(Je(t.v)) : t.v
        a == (a | 0) && a >= 0 && a < 65536 ? J(e, 2, Tl(r, n, a)) : J(e, 3, _l(r, n, a))
        return
      case 'b':
      case 'e':
        J(e, 5, iu(r, n, t.v, t.t))
        return
      case 's':
      case 'str':
        J(e, 4, su(r, n, (t.v || '').slice(0, 255)))
        return
    }
  J(e, 1, bt(null, r, n))
}
function lu(e, t, r, n) {
  var a = Array.isArray(t),
    i = Ee(t['!ref'] || 'A1'),
    s,
    f = '',
    o = []
  if (i.e.c > 255 || i.e.r > 16383) {
    if (n.WTF) throw new Error('Range ' + (t['!ref'] || 'A1') + ' exceeds format limit A1:IV16384')
    ;(i.e.c = Math.min(i.e.c, 255)), (i.e.r = Math.min(i.e.c, 16383)), (s = De(i))
  }
  for (var l = i.s.r; l <= i.e.r; ++l) {
    f = He(l)
    for (var c = i.s.c; c <= i.e.c; ++c) {
      l === i.s.r && (o[c] = ze(c)), (s = o[c] + f)
      var d = a ? (t[l] || [])[c] : t[s]
      d && fu(e, d, l, c)
    }
  }
}
function ou(e, t) {
  for (var r = t || {}, n = Ze(), a = 0, i = 0; i < e.SheetNames.length; ++i)
    e.SheetNames[i] == r.sheet && (a = i)
  if (a == 0 && r.sheet && e.SheetNames[0] != r.sheet)
    throw new Error('Sheet not found: ' + r.sheet)
  return (
    J(n, r.biff == 4 ? 1033 : r.biff == 3 ? 521 : 9, $0(e, 16, r)),
    lu(n, e.Sheets[e.SheetNames[a]], a, r),
    J(n, 10),
    n.end()
  )
}
function cu(e, t, r) {
  J(e, 49, tl({ sz: 12, color: { theme: 1 }, name: 'Arial', family: 2, scheme: 'minor' }, r))
}
function hu(e, t, r) {
  t &&
    [
      [5, 8],
      [23, 26],
      [41, 44],
      [50, 392]
    ].forEach(function (n) {
      for (var a = n[0]; a <= n[1]; ++a) t[a] != null && J(e, 1054, il(a, t[a], r))
    })
}
function uu(e, t) {
  var r = B(19)
  r.write_shift(4, 2151),
    r.write_shift(4, 0),
    r.write_shift(4, 0),
    r.write_shift(2, 3),
    r.write_shift(1, 1),
    r.write_shift(4, 0),
    J(e, 2151, r),
    (r = B(39)),
    r.write_shift(4, 2152),
    r.write_shift(4, 0),
    r.write_shift(4, 0),
    r.write_shift(2, 3),
    r.write_shift(1, 0),
    r.write_shift(4, 0),
    r.write_shift(2, 1),
    r.write_shift(4, 4),
    r.write_shift(2, 0),
    Qa(Ee(t['!ref'] || 'A1'), r),
    r.write_shift(4, 4),
    J(e, 2152, r)
}
function xu(e, t) {
  for (var r = 0; r < 16; ++r) J(e, 224, zn({ numFmtId: 0, style: !0 }, 0, t))
  t.cellXfs.forEach(function (n) {
    J(e, 224, zn(n, 0, t))
  })
}
function pu(e, t) {
  for (var r = 0; r < t['!links'].length; ++r) {
    var n = t['!links'][r]
    J(e, 440, xl(n)), n[1].Tooltip && J(e, 2048, pl(n))
  }
  delete t['!links']
}
function du(e, t) {
  if (t) {
    var r = 0
    t.forEach(function (n, a) {
      ++r <= 256 && n && J(e, 125, ml(m0(a, n), a))
    })
  }
}
function vu(e, t, r, n, a) {
  var i = 16 + Br(a.cellXfs, t, a)
  if (t.v == null && !t.bf) {
    J(e, 513, jr(r, n, i))
    return
  }
  if (t.bf) J(e, 6, Wc(t, r, n, a, i))
  else
    switch (t.t) {
      case 'd':
      case 'n':
        var s = t.t == 'd' ? qe(Je(t.v)) : t.v
        J(e, 515, ol(r, n, s, i))
        break
      case 'b':
      case 'e':
        J(e, 517, ll(r, n, t.v, i, a, t.t))
        break
      case 's':
      case 'str':
        if (a.bookSST) {
          var f = en(a.Strings, t.v, a.revStrings)
          J(e, 253, nl(r, n, f, i))
        } else J(e, 516, al(r, n, (t.v || '').slice(0, 255), i, a))
        break
      default:
        J(e, 513, jr(r, n, i))
    }
}
function mu(e, t, r) {
  var n = Ze(),
    a = r.SheetNames[e],
    i = r.Sheets[a] || {},
    s = (r || {}).Workbook || {},
    f = (s.Sheets || [])[e] || {},
    o = Array.isArray(i),
    l = t.biff == 8,
    c,
    d = '',
    x = [],
    p = Ee(i['!ref'] || 'A1'),
    E = l ? 65536 : 16384
  if (p.e.c > 255 || p.e.r >= E) {
    if (t.WTF) throw new Error('Range ' + (i['!ref'] || 'A1') + ' exceeds format limit A1:IV16384')
    ;(p.e.c = Math.min(p.e.c, 255)), (p.e.r = Math.min(p.e.c, E - 1))
  }
  J(n, 2057, $0(r, 16, t)),
    J(n, 13, or(1)),
    J(n, 12, or(100)),
    J(n, 15, $e(!0)),
    J(n, 17, $e(!1)),
    J(n, 16, Kr(0.001)),
    J(n, 95, $e(!0)),
    J(n, 42, $e(!1)),
    J(n, 43, $e(!1)),
    J(n, 130, or(1)),
    J(n, 128, fl([0, 0])),
    J(n, 131, $e(!1)),
    J(n, 132, $e(!1)),
    l && du(n, i['!cols']),
    J(n, 512, sl(p, t)),
    l && (i['!links'] = [])
  for (var u = p.s.r; u <= p.e.r; ++u) {
    d = He(u)
    for (var _ = p.s.c; _ <= p.e.c; ++_) {
      u === p.s.r && (x[_] = ze(_)), (c = x[_] + d)
      var O = o ? (i[u] || [])[_] : i[c]
      O && (vu(n, O, u, _, t), l && O.l && i['!links'].push([c, O.l]))
    }
  }
  var R = f.CodeName || f.name || a
  return (
    l && J(n, 574, rl((s.Views || [])[0])),
    l && (i['!merges'] || []).length && J(n, 229, ul(i['!merges'])),
    l && pu(n, i),
    J(n, 442, qa(R)),
    l && uu(n, i),
    J(n, 10),
    n.end()
  )
}
function gu(e, t, r) {
  var n = Ze(),
    a = (e || {}).Workbook || {},
    i = a.Sheets || [],
    s = a.WBProps || {},
    f = r.biff == 8,
    o = r.biff == 5
  if (
    (J(n, 2057, $0(e, 5, r)),
    r.bookType == 'xla' && J(n, 135),
    J(n, 225, f ? or(1200) : null),
    J(n, 193, Vf(2)),
    o && J(n, 191),
    o && J(n, 192),
    J(n, 226),
    J(n, 92, Zf('SheetJS', r)),
    J(n, 66, or(f ? 1200 : 1252)),
    f && J(n, 353, or(0)),
    f && J(n, 448),
    J(n, 317, gl(e.SheetNames.length)),
    f && e.vbaraw && J(n, 211),
    f && e.vbaraw)
  ) {
    var l = s.CodeName || 'ThisWorkbook'
    J(n, 442, qa(l))
  }
  J(n, 156, or(17)),
    J(n, 25, $e(!1)),
    J(n, 18, $e(!1)),
    J(n, 19, or(0)),
    f && J(n, 431, $e(!1)),
    f && J(n, 444, or(0)),
    J(n, 61, el()),
    J(n, 64, $e(!1)),
    J(n, 141, or(0)),
    J(n, 34, $e(Sh(e) == 'true')),
    J(n, 14, $e(!0)),
    f && J(n, 439, $e(!1)),
    J(n, 218, or(0)),
    cu(n, e, r),
    hu(n, e.SSF, r),
    xu(n, r),
    f && J(n, 352, $e(!1))
  var c = n.end(),
    d = Ze()
  f && J(d, 140, dl()), f && r.Strings && au(d, 252, Qf(r.Strings)), J(d, 10)
  var x = d.end(),
    p = Ze(),
    E = 0,
    u = 0
  for (u = 0; u < e.SheetNames.length; ++u)
    E += (f ? 12 : 11) + (f ? 2 : 1) * e.SheetNames[u].length
  var _ = c.length + E + x.length
  for (u = 0; u < e.SheetNames.length; ++u) {
    var O = i[u] || {}
    J(p, 133, qf({ pos: _, hs: O.Hidden || 0, dt: 0, name: e.SheetNames[u] }, r)),
      (_ += t[u].length)
  }
  var R = p.end()
  if (E != R.length) throw new Error('BS8 ' + E + ' != ' + R.length)
  var y = []
  return c.length && y.push(c), R.length && y.push(R), x.length && y.push(x), be(y)
}
function _u(e, t) {
  var r = t || {},
    n = []
  e && !e.SSF && (e.SSF = Qe(ye)),
    e &&
      e.SSF &&
      (u0(), h0(e.SSF), (r.revssf = x0(e.SSF)), (r.revssf[e.SSF[65535]] = 0), (r.ssf = e.SSF)),
    (r.Strings = []),
    (r.Strings.Count = 0),
    (r.Strings.Unique = 0),
    rn(r),
    (r.cellXfs = []),
    Br(r.cellXfs, {}, { revssf: { General: 0 } }),
    e.Props || (e.Props = {})
  for (var a = 0; a < e.SheetNames.length; ++a) n[n.length] = mu(a, r, e)
  return n.unshift(gu(e, n, r)), be(n)
}
function Fi(e, t) {
  for (var r = 0; r <= e.SheetNames.length; ++r) {
    var n = e.Sheets[e.SheetNames[r]]
    if (!(!n || !n['!ref'])) {
      var a = ir(n['!ref'])
      a.e.c > 255 &&
        typeof console < 'u' &&
        console.error &&
        console.error(
          "Worksheet '" + e.SheetNames[r] + "' extends beyond column IV (255).  Data may be lost."
        )
    }
  }
  var i = t || {}
  switch (i.biff || 2) {
    case 8:
    case 5:
      return _u(e, t)
    case 4:
    case 3:
    case 2:
      return ou(e, t)
  }
  throw new Error('invalid type ' + i.bookType + ' for BIFF')
}
function Tu(e, t, r, n) {
  for (var a = e['!merges'] || [], i = [], s = t.s.c; s <= t.e.c; ++s) {
    for (var f = 0, o = 0, l = 0; l < a.length; ++l)
      if (!(a[l].s.r > r || a[l].s.c > s) && !(a[l].e.r < r || a[l].e.c < s)) {
        if (a[l].s.r < r || a[l].s.c < s) {
          f = -1
          break
        }
        ;(f = a[l].e.r - a[l].s.r + 1), (o = a[l].e.c - a[l].s.c + 1)
        break
      }
    if (!(f < 0)) {
      var c = me({ r, c: s }),
        d = n.dense ? (e[r] || [])[s] : e[c],
        x = (d && d.v != null && (d.h || $s(d.w || (Dr(d), d.w) || ''))) || '',
        p = {}
      f > 1 && (p.rowspan = f),
        o > 1 && (p.colspan = o),
        n.editable
          ? (x = '<span contenteditable="true">' + x + '</span>')
          : d &&
            ((p['data-t'] = (d && d.t) || 'z'),
            d.v != null && (p['data-v'] = d.v),
            d.z != null && (p['data-z'] = d.z),
            d.l &&
              (d.l.Target || '#').charAt(0) != '#' &&
              (x = '<a href="' + d.l.Target + '">' + x + '</a>')),
        (p.id = (n.id || 'sjs') + '-' + c),
        i.push(j('td', x, p))
    }
  }
  var E = '<tr>'
  return E + i.join('') + '</tr>'
}
var Eu = '<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>',
  wu = '</body></html>'
function Su(e, t, r) {
  var n = []
  return n.join('') + '<table' + (r && r.id ? ' id="' + r.id + '"' : '') + '>'
}
function yi(e, t) {
  var r = t || {},
    n = r.header != null ? r.header : Eu,
    a = r.footer != null ? r.footer : wu,
    i = [n],
    s = ir(e['!ref'])
  ;(r.dense = Array.isArray(e)), i.push(Su(e, s, r))
  for (var f = s.s.r; f <= s.e.r; ++f) i.push(Tu(e, s, f, r))
  return i.push('</table>' + a), i.join('')
}
function Ci(e, t, r) {
  var n = r || {},
    a = 0,
    i = 0
  if (n.origin != null)
    if (typeof n.origin == 'number') a = n.origin
    else {
      var s = typeof n.origin == 'string' ? Pe(n.origin) : n.origin
      ;(a = s.r), (i = s.c)
    }
  var f = t.getElementsByTagName('tr'),
    o = Math.min(n.sheetRows || 1e7, f.length),
    l = { s: { r: 0, c: 0 }, e: { r: a, c: i } }
  if (e['!ref']) {
    var c = ir(e['!ref'])
    ;(l.s.r = Math.min(l.s.r, c.s.r)),
      (l.s.c = Math.min(l.s.c, c.s.c)),
      (l.e.r = Math.max(l.e.r, c.e.r)),
      (l.e.c = Math.max(l.e.c, c.e.c)),
      a == -1 && (l.e.r = a = c.e.r + 1)
  }
  var d = [],
    x = 0,
    p = e['!rows'] || (e['!rows'] = []),
    E = 0,
    u = 0,
    _ = 0,
    O = 0,
    R = 0,
    y = 0
  for (e['!cols'] || (e['!cols'] = []); E < f.length && u < o; ++E) {
    var M = f[E]
    if (qn(M)) {
      if (n.display) continue
      p[u] = { hidden: !0 }
    }
    var Y = M.children
    for (_ = O = 0; _ < Y.length; ++_) {
      var ee = Y[_]
      if (!(n.display && qn(ee))) {
        var C = ee.hasAttribute('data-v')
            ? ee.getAttribute('data-v')
            : ee.hasAttribute('v')
            ? ee.getAttribute('v')
            : Qs(ee.innerHTML),
          b = ee.getAttribute('data-z') || ee.getAttribute('z')
        for (x = 0; x < d.length; ++x) {
          var L = d[x]
          L.s.c == O + i && L.s.r < u + a && u + a <= L.e.r && ((O = L.e.c + 1 - i), (x = -1))
        }
        ;(y = +ee.getAttribute('colspan') || 1),
          ((R = +ee.getAttribute('rowspan') || 1) > 1 || y > 1) &&
            d.push({
              s: { r: u + a, c: O + i },
              e: { r: u + a + (R || 1) - 1, c: O + i + (y || 1) - 1 }
            })
        var V = { t: 's', v: C },
          G = ee.getAttribute('data-t') || ee.getAttribute('t') || ''
        C != null &&
          (C.length == 0
            ? (V.t = G || 'z')
            : n.raw ||
              C.trim().length == 0 ||
              G == 's' ||
              (C === 'TRUE'
                ? (V = { t: 'b', v: !0 })
                : C === 'FALSE'
                ? (V = { t: 'b', v: !1 })
                : isNaN(yr(C))
                ? isNaN(Rt(C).getDate()) ||
                  ((V = { t: 'd', v: Je(C) }),
                  n.cellDates || (V = { t: 'n', v: qe(V.v) }),
                  (V.z = n.dateNF || ye[14]))
                : (V = { t: 'n', v: yr(C) }))),
          V.z === void 0 && b != null && (V.z = b)
        var z = '',
          re = ee.getElementsByTagName('A')
        if (re && re.length)
          for (
            var ge = 0;
            ge < re.length &&
            !(
              re[ge].hasAttribute('href') && ((z = re[ge].getAttribute('href')), z.charAt(0) != '#')
            );
            ++ge
          );
        z && z.charAt(0) != '#' && (V.l = { Target: z }),
          n.dense
            ? (e[u + a] || (e[u + a] = []), (e[u + a][O + i] = V))
            : (e[me({ c: O + i, r: u + a })] = V),
          l.e.c < O + i && (l.e.c = O + i),
          (O += y)
      }
    }
    ++u
  }
  return (
    d.length && (e['!merges'] = (e['!merges'] || []).concat(d)),
    (l.e.r = Math.max(l.e.r, u - 1 + a)),
    (e['!ref'] = De(l)),
    u >= o && (e['!fullref'] = De(((l.e.r = f.length - E + u - 1 + a), l))),
    e
  )
}
function Oi(e, t) {
  var r = t || {},
    n = r.dense ? [] : {}
  return Ci(n, e, t)
}
function Au(e, t) {
  return Yr(Oi(e, t), t)
}
function qn(e) {
  var t = '',
    r = Fu(e)
  return (
    r && (t = r(e).getPropertyValue('display')), t || (t = e.style && e.style.display), t === 'none'
  )
}
function Fu(e) {
  return e.ownerDocument.defaultView &&
    typeof e.ownerDocument.defaultView.getComputedStyle == 'function'
    ? e.ownerDocument.defaultView.getComputedStyle
    : typeof getComputedStyle == 'function'
    ? getComputedStyle
    : null
}
var yu = (function () {
    var e = [
        '<office:master-styles>',
        '<style:master-page style:name="mp1" style:page-layout-name="mp1">',
        '<style:header/>',
        '<style:header-left style:display="false"/>',
        '<style:footer/>',
        '<style:footer-left style:display="false"/>',
        '</style:master-page>',
        '</office:master-styles>'
      ].join(''),
      t =
        '<office:document-styles ' +
        It({
          'xmlns:office': 'urn:oasis:names:tc:opendocument:xmlns:office:1.0',
          'xmlns:table': 'urn:oasis:names:tc:opendocument:xmlns:table:1.0',
          'xmlns:style': 'urn:oasis:names:tc:opendocument:xmlns:style:1.0',
          'xmlns:text': 'urn:oasis:names:tc:opendocument:xmlns:text:1.0',
          'xmlns:draw': 'urn:oasis:names:tc:opendocument:xmlns:drawing:1.0',
          'xmlns:fo': 'urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0',
          'xmlns:xlink': 'http://www.w3.org/1999/xlink',
          'xmlns:dc': 'http://purl.org/dc/elements/1.1/',
          'xmlns:number': 'urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0',
          'xmlns:svg': 'urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0',
          'xmlns:of': 'urn:oasis:names:tc:opendocument:xmlns:of:1.2',
          'office:version': '1.2'
        }) +
        '>' +
        e +
        '</office:document-styles>'
    return function () {
      return Re + t
    }
  })(),
  Qn = (function () {
    var e = function (i) {
        return ve(i)
          .replace(/  +/g, function (s) {
            return '<text:s text:c="' + s.length + '"/>'
          })
          .replace(/\t/g, '<text:tab/>')
          .replace(/\n/g, '</text:p><text:p>')
          .replace(/^ /, '<text:s/>')
          .replace(/ $/, '<text:s/>')
      },
      t = `          <table:table-cell />
`,
      r = `          <table:covered-table-cell/>
`,
      n = function (i, s, f) {
        var o = []
        o.push(
          '      <table:table table:name="' +
            ve(s.SheetNames[f]) +
            `" table:style-name="ta1">
`
        )
        var l = 0,
          c = 0,
          d = ir(i['!ref'] || 'A1'),
          x = i['!merges'] || [],
          p = 0,
          E = Array.isArray(i)
        if (i['!cols'])
          for (c = 0; c <= d.e.c; ++c)
            o.push(
              '        <table:table-column' +
                (i['!cols'][c] ? ' table:style-name="co' + i['!cols'][c].ods + '"' : '') +
                `></table:table-column>
`
            )
        var u = '',
          _ = i['!rows'] || []
        for (l = 0; l < d.s.r; ++l)
          (u = _[l] ? ' table:style-name="ro' + _[l].ods + '"' : ''),
            o.push(
              '        <table:table-row' +
                u +
                `></table:table-row>
`
            )
        for (; l <= d.e.r; ++l) {
          for (
            u = _[l] ? ' table:style-name="ro' + _[l].ods + '"' : '',
              o.push(
                '        <table:table-row' +
                  u +
                  `>
`
              ),
              c = 0;
            c < d.s.c;
            ++c
          )
            o.push(t)
          for (; c <= d.e.c; ++c) {
            var O = !1,
              R = {},
              y = ''
            for (p = 0; p != x.length; ++p)
              if (!(x[p].s.c > c) && !(x[p].s.r > l) && !(x[p].e.c < c) && !(x[p].e.r < l)) {
                ;(x[p].s.c != c || x[p].s.r != l) && (O = !0),
                  (R['table:number-columns-spanned'] = x[p].e.c - x[p].s.c + 1),
                  (R['table:number-rows-spanned'] = x[p].e.r - x[p].s.r + 1)
                break
              }
            if (O) {
              o.push(r)
              continue
            }
            var M = me({ r: l, c }),
              Y = E ? (i[l] || [])[c] : i[M]
            if (
              Y &&
              Y.f &&
              ((R['table:formula'] = ve(Kc(Y.f))), Y.F && Y.F.slice(0, M.length) == M)
            ) {
              var ee = ir(Y.F)
              ;(R['table:number-matrix-columns-spanned'] = ee.e.c - ee.s.c + 1),
                (R['table:number-matrix-rows-spanned'] = ee.e.r - ee.s.r + 1)
            }
            if (!Y) {
              o.push(t)
              continue
            }
            switch (Y.t) {
              case 'b':
                ;(y = Y.v ? 'TRUE' : 'FALSE'),
                  (R['office:value-type'] = 'boolean'),
                  (R['office:boolean-value'] = Y.v ? 'true' : 'false')
                break
              case 'n':
                ;(y = Y.w || String(Y.v || 0)),
                  (R['office:value-type'] = 'float'),
                  (R['office:value'] = Y.v || 0)
                break
              case 's':
              case 'str':
                ;(y = Y.v == null ? '' : Y.v), (R['office:value-type'] = 'string')
                break
              case 'd':
                ;(y = Y.w || Je(Y.v).toISOString()),
                  (R['office:value-type'] = 'date'),
                  (R['office:date-value'] = Je(Y.v).toISOString()),
                  (R['table:style-name'] = 'ce1')
                break
              default:
                o.push(t)
                continue
            }
            var C = e(y)
            if (Y.l && Y.l.Target) {
              var b = Y.l.Target
              ;(b = b.charAt(0) == '#' ? '#' + jc(b.slice(1)) : b),
                b.charAt(0) != '#' && !b.match(/^\w+:/) && (b = '../' + b),
                (C = j('text:a', C, { 'xlink:href': b.replace(/&/g, '&amp;') }))
            }
            o.push(
              '          ' +
                j('table:table-cell', j('text:p', C, {}), R) +
                `
`
            )
          }
          o.push(`        </table:table-row>
`)
        }
        return (
          o.push(`      </table:table>
`),
          o.join('')
        )
      },
      a = function (i, s) {
        i.push(` <office:automatic-styles>
`),
          i.push(`  <number:date-style style:name="N37" number:automatic-order="true">
`),
          i.push(`   <number:month number:style="long"/>
`),
          i.push(`   <number:text>/</number:text>
`),
          i.push(`   <number:day number:style="long"/>
`),
          i.push(`   <number:text>/</number:text>
`),
          i.push(`   <number:year/>
`),
          i.push(`  </number:date-style>
`)
        var f = 0
        s.SheetNames.map(function (l) {
          return s.Sheets[l]
        }).forEach(function (l) {
          if (l && l['!cols']) {
            for (var c = 0; c < l['!cols'].length; ++c)
              if (l['!cols'][c]) {
                var d = l['!cols'][c]
                if (d.width == null && d.wpx == null && d.wch == null) continue
                J0(d), (d.ods = f)
                var x = l['!cols'][c].wpx + 'px'
                i.push(
                  '  <style:style style:name="co' +
                    f +
                    `" style:family="table-column">
`
                ),
                  i.push(
                    '   <style:table-column-properties fo:break-before="auto" style:column-width="' +
                      x +
                      `"/>
`
                  ),
                  i.push(`  </style:style>
`),
                  ++f
              }
          }
        })
        var o = 0
        s.SheetNames.map(function (l) {
          return s.Sheets[l]
        }).forEach(function (l) {
          if (l && l['!rows']) {
            for (var c = 0; c < l['!rows'].length; ++c)
              if (l['!rows'][c]) {
                l['!rows'][c].ods = o
                var d = l['!rows'][c].hpx + 'px'
                i.push(
                  '  <style:style style:name="ro' +
                    o +
                    `" style:family="table-row">
`
                ),
                  i.push(
                    '   <style:table-row-properties fo:break-before="auto" style:row-height="' +
                      d +
                      `"/>
`
                  ),
                  i.push(`  </style:style>
`),
                  ++o
              }
          }
        }),
          i.push(`  <style:style style:name="ta1" style:family="table" style:master-page-name="mp1">
`),
          i.push(`   <style:table-properties table:display="true" style:writing-mode="lr-tb"/>
`),
          i.push(`  </style:style>
`),
          i.push(`  <style:style style:name="ce1" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N37"/>
`),
          i.push(` </office:automatic-styles>
`)
      }
    return function (s, f) {
      var o = [Re],
        l = It({
          'xmlns:office': 'urn:oasis:names:tc:opendocument:xmlns:office:1.0',
          'xmlns:table': 'urn:oasis:names:tc:opendocument:xmlns:table:1.0',
          'xmlns:style': 'urn:oasis:names:tc:opendocument:xmlns:style:1.0',
          'xmlns:text': 'urn:oasis:names:tc:opendocument:xmlns:text:1.0',
          'xmlns:draw': 'urn:oasis:names:tc:opendocument:xmlns:drawing:1.0',
          'xmlns:fo': 'urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0',
          'xmlns:xlink': 'http://www.w3.org/1999/xlink',
          'xmlns:dc': 'http://purl.org/dc/elements/1.1/',
          'xmlns:meta': 'urn:oasis:names:tc:opendocument:xmlns:meta:1.0',
          'xmlns:number': 'urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0',
          'xmlns:presentation': 'urn:oasis:names:tc:opendocument:xmlns:presentation:1.0',
          'xmlns:svg': 'urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0',
          'xmlns:chart': 'urn:oasis:names:tc:opendocument:xmlns:chart:1.0',
          'xmlns:dr3d': 'urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0',
          'xmlns:math': 'http://www.w3.org/1998/Math/MathML',
          'xmlns:form': 'urn:oasis:names:tc:opendocument:xmlns:form:1.0',
          'xmlns:script': 'urn:oasis:names:tc:opendocument:xmlns:script:1.0',
          'xmlns:ooo': 'http://openoffice.org/2004/office',
          'xmlns:ooow': 'http://openoffice.org/2004/writer',
          'xmlns:oooc': 'http://openoffice.org/2004/calc',
          'xmlns:dom': 'http://www.w3.org/2001/xml-events',
          'xmlns:xforms': 'http://www.w3.org/2002/xforms',
          'xmlns:xsd': 'http://www.w3.org/2001/XMLSchema',
          'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
          'xmlns:sheet': 'urn:oasis:names:tc:opendocument:sh33tjs:1.0',
          'xmlns:rpt': 'http://openoffice.org/2005/report',
          'xmlns:of': 'urn:oasis:names:tc:opendocument:xmlns:of:1.2',
          'xmlns:xhtml': 'http://www.w3.org/1999/xhtml',
          'xmlns:grddl': 'http://www.w3.org/2003/g/data-view#',
          'xmlns:tableooo': 'http://openoffice.org/2009/table',
          'xmlns:drawooo': 'http://openoffice.org/2010/draw',
          'xmlns:calcext': 'urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0',
          'xmlns:loext': 'urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0',
          'xmlns:field': 'urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0',
          'xmlns:formx': 'urn:openoffice:names:experimental:ooxml-odf-interop:xmlns:form:1.0',
          'xmlns:css3t': 'http://www.w3.org/TR/css3-text/',
          'office:version': '1.2'
        }),
        c = It({
          'xmlns:config': 'urn:oasis:names:tc:opendocument:xmlns:config:1.0',
          'office:mimetype': 'application/vnd.oasis.opendocument.spreadsheet'
        })
      f.bookType == 'fods'
        ? (o.push(
            '<office:document' +
              l +
              c +
              `>
`
          ),
          o.push(Ga().replace(/office:document-meta/g, 'office:meta')))
        : o.push(
            '<office:document-content' +
              l +
              `>
`
          ),
        a(o, s),
        o.push(`  <office:body>
`),
        o.push(`    <office:spreadsheet>
`)
      for (var d = 0; d != s.SheetNames.length; ++d) o.push(n(s.Sheets[s.SheetNames[d]], s, d))
      return (
        o.push(`    </office:spreadsheet>
`),
        o.push(`  </office:body>
`),
        f.bookType == 'fods' ? o.push('</office:document>') : o.push('</office:document-content>'),
        o.join('')
      )
    }
  })()
function Di(e, t) {
  if (t.bookType == 'fods') return Qn(e, t)
  var r = b0(),
    n = '',
    a = [],
    i = []
  return (
    (n = 'mimetype'),
    oe(r, n, 'application/vnd.oasis.opendocument.spreadsheet'),
    (n = 'content.xml'),
    oe(r, n, Qn(e, t)),
    a.push([n, 'text/xml']),
    i.push([n, 'ContentFile']),
    (n = 'styles.xml'),
    oe(r, n, yu(e, t)),
    a.push([n, 'text/xml']),
    i.push([n, 'StylesFile']),
    (n = 'meta.xml'),
    oe(r, n, Re + Ga()),
    a.push([n, 'text/xml']),
    i.push([n, 'MetadataFile']),
    (n = 'manifest.rdf'),
    oe(r, n, Bf(i)),
    a.push([n, 'application/rdf+xml']),
    (n = 'META-INF/manifest.xml'),
    oe(r, n, Lf(a)),
    r
  )
}
/*! sheetjs (C) 2013-present SheetJS -- http://sheetjs.com */ function l0(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength)
}
function Cu(e) {
  return typeof TextEncoder < 'u' ? new TextEncoder().encode(e) : pr(Ar(e))
}
function Ou(e, t) {
  e: for (var r = 0; r <= e.length - t.length; ++r) {
    for (var n = 0; n < t.length; ++n) if (e[r + n] != t[n]) continue e
    return !0
  }
  return !1
}
function Mr(e) {
  var t = e.reduce(function (a, i) {
      return a + i.length
    }, 0),
    r = new Uint8Array(t),
    n = 0
  return (
    e.forEach(function (a) {
      r.set(a, n), (n += a.length)
    }),
    r
  )
}
function Du(e, t, r) {
  var n = Math.floor(r == 0 ? 0 : Math.LOG10E * Math.log(Math.abs(r))) + 6176 - 20,
    a = r / Math.pow(10, n - 6176)
  ;(e[t + 15] |= n >> 7), (e[t + 14] |= (n & 127) << 1)
  for (var i = 0; a >= 1; ++i, a /= 256) e[t + i] = a & 255
  e[t + 15] |= r >= 0 ? 0 : 128
}
function Nt(e, t) {
  var r = t ? t[0] : 0,
    n = e[r] & 127
  e: if (
    e[r++] >= 128 &&
    ((n |= (e[r] & 127) << 7),
    e[r++] < 128 ||
      ((n |= (e[r] & 127) << 14), e[r++] < 128) ||
      ((n |= (e[r] & 127) << 21), e[r++] < 128) ||
      ((n += (e[r] & 127) * Math.pow(2, 28)), ++r, e[r++] < 128) ||
      ((n += (e[r] & 127) * Math.pow(2, 35)), ++r, e[r++] < 128) ||
      ((n += (e[r] & 127) * Math.pow(2, 42)), ++r, e[r++] < 128))
  )
    break e
  return t && (t[0] = r), n
}
function pe(e) {
  var t = new Uint8Array(7)
  t[0] = e & 127
  var r = 1
  e: if (e > 127) {
    if (
      ((t[r - 1] |= 128),
      (t[r] = (e >> 7) & 127),
      ++r,
      e <= 16383 ||
        ((t[r - 1] |= 128), (t[r] = (e >> 14) & 127), ++r, e <= 2097151) ||
        ((t[r - 1] |= 128), (t[r] = (e >> 21) & 127), ++r, e <= 268435455) ||
        ((t[r - 1] |= 128), (t[r] = ((e / 256) >>> 21) & 127), ++r, e <= 34359738367) ||
        ((t[r - 1] |= 128), (t[r] = ((e / 65536) >>> 21) & 127), ++r, e <= 4398046511103))
    )
      break e
    ;(t[r - 1] |= 128), (t[r] = ((e / 16777216) >>> 21) & 127), ++r
  }
  return t.slice(0, r)
}
function ot(e) {
  var t = 0,
    r = e[t] & 127
  e: if (e[t++] >= 128) {
    if (
      ((r |= (e[t] & 127) << 7),
      e[t++] < 128 ||
        ((r |= (e[t] & 127) << 14), e[t++] < 128) ||
        ((r |= (e[t] & 127) << 21), e[t++] < 128))
    )
      break e
    r |= (e[t] & 127) << 28
  }
  return r
}
function Ie(e) {
  for (var t = [], r = [0]; r[0] < e.length; ) {
    var n = r[0],
      a = Nt(e, r),
      i = a & 7
    a = Math.floor(a / 8)
    var s = 0,
      f
    if (a == 0) break
    switch (i) {
      case 0:
        {
          for (var o = r[0]; e[r[0]++] >= 128; );
          f = e.slice(o, r[0])
        }
        break
      case 5:
        ;(s = 4), (f = e.slice(r[0], r[0] + s)), (r[0] += s)
        break
      case 1:
        ;(s = 8), (f = e.slice(r[0], r[0] + s)), (r[0] += s)
        break
      case 2:
        ;(s = Nt(e, r)), (f = e.slice(r[0], r[0] + s)), (r[0] += s)
        break
      case 3:
      case 4:
      default:
        throw new Error('PB Type '.concat(i, ' for Field ').concat(a, ' at offset ').concat(n))
    }
    var l = { data: f, type: i }
    t[a] == null ? (t[a] = [l]) : t[a].push(l)
  }
  return t
}
function Be(e) {
  var t = []
  return (
    e.forEach(function (r, n) {
      r.forEach(function (a) {
        a.data &&
          (t.push(pe(n * 8 + a.type)), a.type == 2 && t.push(pe(a.data.length)), t.push(a.data))
      })
    }),
    Mr(t)
  )
}
function ur(e) {
  for (var t, r = [], n = [0]; n[0] < e.length; ) {
    var a = Nt(e, n),
      i = Ie(e.slice(n[0], n[0] + a))
    n[0] += a
    var s = { id: ot(i[1][0].data), messages: [] }
    i[2].forEach(function (f) {
      var o = Ie(f.data),
        l = ot(o[3][0].data)
      s.messages.push({ meta: o, data: e.slice(n[0], n[0] + l) }), (n[0] += l)
    }),
      (t = i[3]) != null && t[0] && (s.merge = ot(i[3][0].data) >>> 0 > 0),
      r.push(s)
  }
  return r
}
function tt(e) {
  var t = []
  return (
    e.forEach(function (r) {
      var n = []
      ;(n[1] = [{ data: pe(r.id), type: 0 }]),
        (n[2] = []),
        r.merge != null && (n[3] = [{ data: pe(+!!r.merge), type: 0 }])
      var a = []
      r.messages.forEach(function (s) {
        a.push(s.data),
          (s.meta[3] = [{ type: 0, data: pe(s.data.length) }]),
          n[2].push({ data: Be(s.meta), type: 2 })
      })
      var i = Be(n)
      t.push(pe(i.length)),
        t.push(i),
        a.forEach(function (s) {
          return t.push(s)
        })
    }),
    Mr(t)
  )
}
function Ru(e, t) {
  if (e != 0) throw new Error('Unexpected Snappy chunk type '.concat(e))
  for (var r = [0], n = Nt(t, r), a = []; r[0] < t.length; ) {
    var i = t[r[0]] & 3
    if (i == 0) {
      var s = t[r[0]++] >> 2
      if (s < 60) ++s
      else {
        var f = s - 59
        ;(s = t[r[0]]),
          f > 1 && (s |= t[r[0] + 1] << 8),
          f > 2 && (s |= t[r[0] + 2] << 16),
          f > 3 && (s |= t[r[0] + 3] << 24),
          (s >>>= 0),
          s++,
          (r[0] += f)
      }
      a.push(t.slice(r[0], r[0] + s)), (r[0] += s)
      continue
    } else {
      var o = 0,
        l = 0
      if (
        (i == 1
          ? ((l = ((t[r[0]] >> 2) & 7) + 4), (o = (t[r[0]++] & 224) << 3), (o |= t[r[0]++]))
          : ((l = (t[r[0]++] >> 2) + 1),
            i == 2
              ? ((o = t[r[0]] | (t[r[0] + 1] << 8)), (r[0] += 2))
              : ((o =
                  (t[r[0]] | (t[r[0] + 1] << 8) | (t[r[0] + 2] << 16) | (t[r[0] + 3] << 24)) >>> 0),
                (r[0] += 4))),
        (a = [Mr(a)]),
        o == 0)
      )
        throw new Error('Invalid offset 0')
      if (o > a[0].length) throw new Error('Invalid offset beyond length')
      if (l >= o)
        for (a.push(a[0].slice(-o)), l -= o; l >= a[a.length - 1].length; )
          a.push(a[a.length - 1]), (l -= a[a.length - 1].length)
      a.push(a[0].slice(-o, -o + l))
    }
  }
  var c = Mr(a)
  if (c.length != n) throw new Error('Unexpected length: '.concat(c.length, ' != ').concat(n))
  return c
}
function xr(e) {
  for (var t = [], r = 0; r < e.length; ) {
    var n = e[r++],
      a = e[r] | (e[r + 1] << 8) | (e[r + 2] << 16)
    ;(r += 3), t.push(Ru(n, e.slice(r, r + a))), (r += a)
  }
  if (r !== e.length) throw new Error('data is not a valid framed stream!')
  return Mr(t)
}
function nt(e) {
  for (var t = [], r = 0; r < e.length; ) {
    var n = Math.min(e.length - r, 268435455),
      a = new Uint8Array(4)
    t.push(a)
    var i = pe(n),
      s = i.length
    t.push(i),
      n <= 60
        ? (s++, t.push(new Uint8Array([(n - 1) << 2])))
        : n <= 256
        ? ((s += 2), t.push(new Uint8Array([240, (n - 1) & 255])))
        : n <= 65536
        ? ((s += 3), t.push(new Uint8Array([244, (n - 1) & 255, ((n - 1) >> 8) & 255])))
        : n <= 16777216
        ? ((s += 4),
          t.push(new Uint8Array([248, (n - 1) & 255, ((n - 1) >> 8) & 255, ((n - 1) >> 16) & 255])))
        : n <= 4294967296 &&
          ((s += 5),
          t.push(
            new Uint8Array([
              252,
              (n - 1) & 255,
              ((n - 1) >> 8) & 255,
              ((n - 1) >> 16) & 255,
              ((n - 1) >>> 24) & 255
            ])
          )),
      t.push(e.slice(r, r + n)),
      (s += n),
      (a[0] = 0),
      (a[1] = s & 255),
      (a[2] = (s >> 8) & 255),
      (a[3] = (s >> 16) & 255),
      (r += n)
  }
  return Mr(t)
}
function D0(e, t) {
  var r = new Uint8Array(32),
    n = l0(r),
    a = 12,
    i = 0
  switch (((r[0] = 5), e.t)) {
    case 'n':
      ;(r[1] = 2), Du(r, a, e.v), (i |= 1), (a += 16)
      break
    case 'b':
      ;(r[1] = 6), n.setFloat64(a, e.v ? 1 : 0, !0), (i |= 2), (a += 8)
      break
    case 's':
      if (t.indexOf(e.v) == -1) throw new Error('Value '.concat(e.v, ' missing from SST!'))
      ;(r[1] = 3), n.setUint32(a, t.indexOf(e.v), !0), (i |= 8), (a += 4)
      break
    default:
      throw 'unsupported cell type ' + e.t
  }
  return n.setUint32(8, i, !0), r.slice(0, a)
}
function R0(e, t) {
  var r = new Uint8Array(32),
    n = l0(r),
    a = 12,
    i = 0
  switch (((r[0] = 3), e.t)) {
    case 'n':
      ;(r[2] = 2), n.setFloat64(a, e.v, !0), (i |= 32), (a += 8)
      break
    case 'b':
      ;(r[2] = 6), n.setFloat64(a, e.v ? 1 : 0, !0), (i |= 32), (a += 8)
      break
    case 's':
      if (t.indexOf(e.v) == -1) throw new Error('Value '.concat(e.v, ' missing from SST!'))
      ;(r[2] = 3), n.setUint32(a, t.indexOf(e.v), !0), (i |= 16), (a += 4)
      break
    default:
      throw 'unsupported cell type ' + e.t
  }
  return n.setUint32(4, i, !0), r.slice(0, a)
}
function Ir(e) {
  var t = Ie(e)
  return Nt(t[1][0].data)
}
function Iu(e, t, r) {
  var n, a, i, s
  if (!((n = e[6]) != null && n[0]) || !((a = e[7]) != null && a[0]))
    throw 'Mutation only works on post-BNC storages!'
  var f =
    (((s = (i = e[8]) == null ? void 0 : i[0]) == null ? void 0 : s.data) &&
      ot(e[8][0].data) > 0) ||
    !1
  if (f) throw 'Math only works with normal offsets'
  for (
    var o = 0, l = l0(e[7][0].data), c = 0, d = [], x = l0(e[4][0].data), p = 0, E = [], u = 0;
    u < t.length;
    ++u
  ) {
    if (t[u] == null) {
      l.setUint16(u * 2, 65535, !0), x.setUint16(u * 2, 65535)
      continue
    }
    l.setUint16(u * 2, c, !0), x.setUint16(u * 2, p, !0)
    var _, O
    switch (typeof t[u]) {
      case 'string':
        ;(_ = D0({ t: 's', v: t[u] }, r)), (O = R0({ t: 's', v: t[u] }, r))
        break
      case 'number':
        ;(_ = D0({ t: 'n', v: t[u] }, r)), (O = R0({ t: 'n', v: t[u] }, r))
        break
      case 'boolean':
        ;(_ = D0({ t: 'b', v: t[u] }, r)), (O = R0({ t: 'b', v: t[u] }, r))
        break
      default:
        throw new Error('Unsupported value ' + t[u])
    }
    d.push(_), (c += _.length), E.push(O), (p += O.length), ++o
  }
  for (e[2][0].data = pe(o); u < e[7][0].data.length / 2; ++u)
    l.setUint16(u * 2, 65535, !0), x.setUint16(u * 2, 65535, !0)
  return (e[6][0].data = Mr(d)), (e[3][0].data = Mr(E)), o
}
function Nu(e, t) {
  if (!t || !t.numbers) throw new Error('Must pass a `numbers` option -- check the README')
  var r = e.Sheets[e.SheetNames[0]]
  e.SheetNames.length > 1 &&
    console.error('The Numbers writer currently writes only the first table')
  var n = ir(r['!ref'])
  n.s.r = n.s.c = 0
  var a = !1
  n.e.c > 9 && ((a = !0), (n.e.c = 9)),
    n.e.r > 49 && ((a = !0), (n.e.r = 49)),
    a && console.error('The Numbers writer is currently limited to '.concat(De(n)))
  var i = o0(r, { range: n, header: 1 }),
    s = ['~Sh33tJ5~']
  i.forEach(function (P) {
    return P.forEach(function (F) {
      typeof F == 'string' && s.push(F)
    })
  })
  var f = {},
    o = [],
    l = _e.read(t.numbers, { type: 'base64' })
  l.FileIndex.map(function (P, F) {
    return [P, l.FullPaths[F]]
  }).forEach(function (P) {
    var F = P[0],
      A = P[1]
    if (F.type == 2 && F.name.match(/\.iwa/)) {
      var H = F.content,
        ie = xr(H),
        se = ur(ie)
      se.forEach(function (ae) {
        o.push(ae.id),
          (f[ae.id] = { deps: [], location: A, type: ot(ae.messages[0].meta[1][0].data) })
      })
    }
  }),
    o.sort(function (P, F) {
      return P - F
    })
  var c = o
    .filter(function (P) {
      return P > 1
    })
    .map(function (P) {
      return [P, pe(P)]
    })
  l.FileIndex.map(function (P, F) {
    return [P, l.FullPaths[F]]
  }).forEach(function (P) {
    var F = P[0]
    if ((P[1], !!F.name.match(/\.iwa/))) {
      var A = ur(xr(F.content))
      A.forEach(function (H) {
        H.messages.forEach(function (ie) {
          c.forEach(function (se) {
            H.messages.some(function (ae) {
              return ot(ae.meta[1][0].data) != 11006 && Ou(ae.data, se[1])
            }) && f[se[0]].deps.push(H.id)
          })
        })
      })
    }
  })
  for (var d = _e.find(l, f[1].location), x = ur(xr(d.content)), p, E = 0; E < x.length; ++E) {
    var u = x[E]
    u.id == 1 && (p = u)
  }
  var _ = Ir(Ie(p.messages[0].data)[1][0].data)
  for (d = _e.find(l, f[_].location), x = ur(xr(d.content)), E = 0; E < x.length; ++E)
    (u = x[E]), u.id == _ && (p = u)
  for (
    _ = Ir(Ie(p.messages[0].data)[2][0].data),
      d = _e.find(l, f[_].location),
      x = ur(xr(d.content)),
      E = 0;
    E < x.length;
    ++E
  )
    (u = x[E]), u.id == _ && (p = u)
  for (
    _ = Ir(Ie(p.messages[0].data)[2][0].data),
      d = _e.find(l, f[_].location),
      x = ur(xr(d.content)),
      E = 0;
    E < x.length;
    ++E
  )
    (u = x[E]), u.id == _ && (p = u)
  var O = Ie(p.messages[0].data)
  {
    ;(O[6][0].data = pe(n.e.r + 1)), (O[7][0].data = pe(n.e.c + 1))
    var R = Ir(O[46][0].data),
      y = _e.find(l, f[R].location),
      M = ur(xr(y.content))
    {
      for (var Y = 0; Y < M.length && M[Y].id != R; ++Y);
      if (M[Y].id != R) throw 'Bad ColumnRowUIDMapArchive'
      var ee = Ie(M[Y].messages[0].data)
      ;(ee[1] = []), (ee[2] = []), (ee[3] = [])
      for (var C = 0; C <= n.e.c; ++C) {
        var b = []
        ;(b[1] = b[2] = [{ type: 0, data: pe(C + 420690) }]),
          ee[1].push({ type: 2, data: Be(b) }),
          ee[2].push({ type: 0, data: pe(C) }),
          ee[3].push({ type: 0, data: pe(C) })
      }
      ;(ee[4] = []), (ee[5] = []), (ee[6] = [])
      for (var L = 0; L <= n.e.r; ++L)
        (b = []),
          (b[1] = b[2] = [{ type: 0, data: pe(L + 726270) }]),
          ee[4].push({ type: 2, data: Be(b) }),
          ee[5].push({ type: 0, data: pe(L) }),
          ee[6].push({ type: 0, data: pe(L) })
      M[Y].messages[0].data = Be(ee)
    }
    ;(y.content = nt(tt(M))), (y.size = y.content.length), delete O[46]
    var V = Ie(O[4][0].data)
    {
      V[7][0].data = pe(n.e.r + 1)
      var G = Ie(V[1][0].data),
        z = Ir(G[2][0].data)
      ;(y = _e.find(l, f[z].location)), (M = ur(xr(y.content)))
      {
        if (M[0].id != z) throw 'Bad HeaderStorageBucket'
        var re = Ie(M[0].messages[0].data)
        for (L = 0; L < i.length; ++L) {
          var ge = Ie(re[2][0].data)
          ;(ge[1][0].data = pe(L)),
            (ge[4][0].data = pe(i[L].length)),
            (re[2][L] = { type: re[2][0].type, data: Be(ge) })
        }
        M[0].messages[0].data = Be(re)
      }
      ;(y.content = nt(tt(M))), (y.size = y.content.length)
      var le = Ir(V[2][0].data)
      ;(y = _e.find(l, f[le].location)), (M = ur(xr(y.content)))
      {
        if (M[0].id != le) throw 'Bad HeaderStorageBucket'
        for (re = Ie(M[0].messages[0].data), C = 0; C <= n.e.c; ++C)
          (ge = Ie(re[2][0].data)),
            (ge[1][0].data = pe(C)),
            (ge[4][0].data = pe(n.e.r + 1)),
            (re[2][C] = { type: re[2][0].type, data: Be(ge) })
        M[0].messages[0].data = Be(re)
      }
      ;(y.content = nt(tt(M))), (y.size = y.content.length)
      var Me = Ir(V[4][0].data)
      ;(function () {
        for (
          var P = _e.find(l, f[Me].location), F = ur(xr(P.content)), A, H = 0;
          H < F.length;
          ++H
        ) {
          var ie = F[H]
          ie.id == Me && (A = ie)
        }
        var se = Ie(A.messages[0].data)
        {
          se[3] = []
          var ae = []
          s.forEach(function (ce, je) {
            ;(ae[1] = [{ type: 0, data: pe(je) }]),
              (ae[2] = [{ type: 0, data: pe(1) }]),
              (ae[3] = [{ type: 2, data: Cu(ce) }]),
              se[3].push({ type: 2, data: Be(ae) })
          })
        }
        A.messages[0].data = Be(se)
        var q = tt(F),
          Te = nt(q)
        ;(P.content = Te), (P.size = P.content.length)
      })()
      var Ce = Ie(V[3][0].data)
      {
        var hr = Ce[1][0]
        delete Ce[2]
        var Ne = Ie(hr.data)
        {
          var sr = Ir(Ne[2][0].data)
          ;(function () {
            for (
              var P = _e.find(l, f[sr].location), F = ur(xr(P.content)), A, H = 0;
              H < F.length;
              ++H
            ) {
              var ie = F[H]
              ie.id == sr && (A = ie)
            }
            var se = Ie(A.messages[0].data)
            {
              delete se[6], delete Ce[7]
              var ae = new Uint8Array(se[5][0].data)
              se[5] = []
              for (var q = 0, Te = 0; Te <= n.e.r; ++Te) {
                var ce = Ie(ae)
                ;(q += Iu(ce, i[Te], s)),
                  (ce[1][0].data = pe(Te)),
                  se[5].push({ data: Be(ce), type: 2 })
              }
              ;(se[1] = [{ type: 0, data: pe(n.e.c + 1) }]),
                (se[2] = [{ type: 0, data: pe(n.e.r + 1) }]),
                (se[3] = [{ type: 0, data: pe(q) }]),
                (se[4] = [{ type: 0, data: pe(n.e.r + 1) }])
            }
            A.messages[0].data = Be(se)
            var je = tt(F),
              xe = nt(je)
            ;(P.content = xe), (P.size = P.content.length)
          })()
        }
        hr.data = Be(Ne)
      }
      V[3][0].data = Be(Ce)
    }
    O[4][0].data = Be(V)
  }
  p.messages[0].data = Be(O)
  var er = tt(x),
    S = nt(er)
  return (d.content = S), (d.size = d.content.length), l
}
function ku(e) {
  return function (r) {
    for (var n = 0; n != e.length; ++n) {
      var a = e[n]
      r[a[0]] === void 0 && (r[a[0]] = a[1]), a[2] === 'n' && (r[a[0]] = Number(r[a[0]]))
    }
  }
}
function rn(e) {
  ku([
    ['cellDates', !1],
    ['bookSST', !1],
    ['bookType', 'xlsx'],
    ['compression', !1],
    ['WTF', !1]
  ])(e)
}
function Pu(e, t) {
  return t.bookType == 'ods'
    ? Di(e, t)
    : t.bookType == 'numbers'
    ? Nu(e, t)
    : t.bookType == 'xlsb'
    ? Lu(e, t)
    : Mu(e, t)
}
function Lu(e, t) {
  ;(it = 1024),
    e && !e.SSF && (e.SSF = Qe(ye)),
    e &&
      e.SSF &&
      (u0(), h0(e.SSF), (t.revssf = x0(e.SSF)), (t.revssf[e.SSF[65535]] = 0), (t.ssf = e.SSF)),
    (t.rels = {}),
    (t.wbrels = {}),
    (t.Strings = []),
    (t.Strings.Count = 0),
    (t.Strings.Unique = 0),
    Ct
      ? (t.revStrings = new Map())
      : ((t.revStrings = {}), (t.revStrings.foo = []), delete t.revStrings.foo)
  var r = t.bookType == 'xlsb' ? 'bin' : 'xml',
    n = hi.indexOf(t.bookType) > -1,
    a = Wa()
  rn((t = t || {}))
  var i = b0(),
    s = '',
    f = 0
  if (
    ((t.cellXfs = []),
    Br(t.cellXfs, {}, { revssf: { General: 0 } }),
    e.Props || (e.Props = {}),
    (s = 'docProps/core.xml'),
    oe(i, s, Xa(e.Props, t)),
    a.coreprops.push(s),
    de(t.rels, 2, s, he.CORE_PROPS),
    (s = 'docProps/app.xml'),
    !(e.Props && e.Props.SheetNames))
  )
    if (!e.Workbook || !e.Workbook.Sheets) e.Props.SheetNames = e.SheetNames
    else {
      for (var o = [], l = 0; l < e.SheetNames.length; ++l)
        (e.Workbook.Sheets[l] || {}).Hidden != 2 && o.push(e.SheetNames[l])
      e.Props.SheetNames = o
    }
  for (
    e.Props.Worksheets = e.Props.SheetNames.length,
      oe(i, s, Ka(e.Props)),
      a.extprops.push(s),
      de(t.rels, 3, s, he.EXT_PROPS),
      e.Custprops !== e.Props &&
        Ve(e.Custprops || {}).length > 0 &&
        ((s = 'docProps/custom.xml'),
        oe(i, s, ja(e.Custprops)),
        a.custprops.push(s),
        de(t.rels, 4, s, he.CUST_PROPS)),
      f = 1;
    f <= e.SheetNames.length;
    ++f
  ) {
    var c = { '!id': {} },
      d = e.Sheets[e.SheetNames[f - 1]],
      x = (d || {})['!type'] || 'sheet'
    switch (x) {
      case 'chart':
      default:
        ;(s = 'xl/worksheets/sheet' + f + '.' + r),
          oe(i, s, Uh(f - 1, s, t, e, c)),
          a.sheets.push(s),
          de(t.wbrels, -1, 'worksheets/sheet' + f + '.' + r, he.WS[0])
    }
    if (d) {
      var p = d['!comments'],
        E = !1,
        u = ''
      p &&
        p.length > 0 &&
        ((u = 'xl/comments' + f + '.' + r),
        oe(i, u, Hh(p, u)),
        a.comments.push(u),
        de(c, -1, '../comments' + f + '.' + r, he.CMNT),
        (E = !0)),
        d['!legacy'] && E && oe(i, 'xl/drawings/vmlDrawing' + f + '.vml', oi(f, d['!comments'])),
        delete d['!comments'],
        delete d['!legacy']
    }
    c['!id'].rId1 && oe(i, Va(s), ft(c))
  }
  return (
    t.Strings != null &&
      t.Strings.length > 0 &&
      ((s = 'xl/sharedStrings.' + r),
      oe(i, s, Wh(t.Strings, s, t)),
      a.strs.push(s),
      de(t.wbrels, -1, 'sharedStrings.' + r, he.SST)),
    (s = 'xl/workbook.' + r),
    oe(i, s, Bh(e, s)),
    a.workbooks.push(s),
    de(t.rels, 1, s, he.WB),
    (s = 'xl/theme/theme1.xml'),
    oe(i, s, fi(e.Themes, t)),
    a.themes.push(s),
    de(t.wbrels, -1, 'theme/theme1.xml', he.THEME),
    (s = 'xl/styles.' + r),
    oe(i, s, bh(e, s, t)),
    a.styles.push(s),
    de(t.wbrels, -1, 'styles.' + r, he.STY),
    e.vbaraw &&
      n &&
      ((s = 'xl/vbaProject.bin'),
      oe(i, s, e.vbaraw),
      a.vba.push(s),
      de(t.wbrels, -1, 'vbaProject.bin', he.VBA)),
    (s = 'xl/metadata.' + r),
    oe(i, s, Vh(s)),
    a.metadata.push(s),
    de(t.wbrels, -1, 'metadata.' + r, he.XLMETA),
    oe(i, '[Content_Types].xml', Ha(a, t)),
    oe(i, '_rels/.rels', ft(t.rels)),
    oe(i, 'xl/_rels/workbook.' + r + '.rels', ft(t.wbrels)),
    delete t.revssf,
    delete t.ssf,
    i
  )
}
function Mu(e, t) {
  ;(it = 1024),
    e && !e.SSF && (e.SSF = Qe(ye)),
    e &&
      e.SSF &&
      (u0(), h0(e.SSF), (t.revssf = x0(e.SSF)), (t.revssf[e.SSF[65535]] = 0), (t.ssf = e.SSF)),
    (t.rels = {}),
    (t.wbrels = {}),
    (t.Strings = []),
    (t.Strings.Count = 0),
    (t.Strings.Unique = 0),
    Ct
      ? (t.revStrings = new Map())
      : ((t.revStrings = {}), (t.revStrings.foo = []), delete t.revStrings.foo)
  var r = 'xml',
    n = hi.indexOf(t.bookType) > -1,
    a = Wa()
  rn((t = t || {}))
  var i = b0(),
    s = '',
    f = 0
  if (
    ((t.cellXfs = []),
    Br(t.cellXfs, {}, { revssf: { General: 0 } }),
    e.Props || (e.Props = {}),
    (s = 'docProps/core.xml'),
    oe(i, s, Xa(e.Props, t)),
    a.coreprops.push(s),
    de(t.rels, 2, s, he.CORE_PROPS),
    (s = 'docProps/app.xml'),
    !(e.Props && e.Props.SheetNames))
  )
    if (!e.Workbook || !e.Workbook.Sheets) e.Props.SheetNames = e.SheetNames
    else {
      for (var o = [], l = 0; l < e.SheetNames.length; ++l)
        (e.Workbook.Sheets[l] || {}).Hidden != 2 && o.push(e.SheetNames[l])
      e.Props.SheetNames = o
    }
  ;(e.Props.Worksheets = e.Props.SheetNames.length),
    oe(i, s, Ka(e.Props)),
    a.extprops.push(s),
    de(t.rels, 3, s, he.EXT_PROPS),
    e.Custprops !== e.Props &&
      Ve(e.Custprops || {}).length > 0 &&
      ((s = 'docProps/custom.xml'),
      oe(i, s, ja(e.Custprops)),
      a.custprops.push(s),
      de(t.rels, 4, s, he.CUST_PROPS))
  var c = ['SheetJ5']
  for (t.tcid = 0, f = 1; f <= e.SheetNames.length; ++f) {
    var d = { '!id': {} },
      x = e.Sheets[e.SheetNames[f - 1]],
      p = (x || {})['!type'] || 'sheet'
    switch (p) {
      case 'chart':
      default:
        ;(s = 'xl/worksheets/sheet' + f + '.' + r),
          oe(i, s, Ti(f - 1, t, e, d)),
          a.sheets.push(s),
          de(t.wbrels, -1, 'worksheets/sheet' + f + '.' + r, he.WS[0])
    }
    if (x) {
      var E = x['!comments'],
        u = !1,
        _ = ''
      if (E && E.length > 0) {
        var O = !1
        E.forEach(function (R) {
          R[1].forEach(function (y) {
            y.T == !0 && (O = !0)
          })
        }),
          O &&
            ((_ = 'xl/threadedComments/threadedComment' + f + '.' + r),
            oe(i, _, uo(E, c, t)),
            a.threadedcomments.push(_),
            de(d, -1, '../threadedComments/threadedComment' + f + '.' + r, he.TCMNT)),
          (_ = 'xl/comments' + f + '.' + r),
          oe(i, _, ci(E)),
          a.comments.push(_),
          de(d, -1, '../comments' + f + '.' + r, he.CMNT),
          (u = !0)
      }
      x['!legacy'] && u && oe(i, 'xl/drawings/vmlDrawing' + f + '.vml', oi(f, x['!comments'])),
        delete x['!comments'],
        delete x['!legacy']
    }
    d['!id'].rId1 && oe(i, Va(s), ft(d))
  }
  return (
    t.Strings != null &&
      t.Strings.length > 0 &&
      ((s = 'xl/sharedStrings.' + r),
      oe(i, s, ri(t.Strings, t)),
      a.strs.push(s),
      de(t.wbrels, -1, 'sharedStrings.' + r, he.SST)),
    (s = 'xl/workbook.' + r),
    oe(i, s, Si(e)),
    a.workbooks.push(s),
    de(t.rels, 1, s, he.WB),
    (s = 'xl/theme/theme1.xml'),
    oe(i, s, fi(e.Themes, t)),
    a.themes.push(s),
    de(t.wbrels, -1, 'theme/theme1.xml', he.THEME),
    (s = 'xl/styles.' + r),
    oe(i, s, ii(e, t)),
    a.styles.push(s),
    de(t.wbrels, -1, 'styles.' + r, he.STY),
    e.vbaraw &&
      n &&
      ((s = 'xl/vbaProject.bin'),
      oe(i, s, e.vbaraw),
      a.vba.push(s),
      de(t.wbrels, -1, 'vbaProject.bin', he.VBA)),
    (s = 'xl/metadata.' + r),
    oe(i, s, li()),
    a.metadata.push(s),
    de(t.wbrels, -1, 'metadata.' + r, he.XLMETA),
    c.length > 1 &&
      ((s = 'xl/persons/person.xml'),
      oe(i, s, xo(c)),
      a.people.push(s),
      de(t.wbrels, -1, 'persons/person.xml', he.PEOPLE)),
    oe(i, '[Content_Types].xml', Ha(a, t)),
    oe(i, '_rels/.rels', ft(t.rels)),
    oe(i, 'xl/_rels/workbook.' + r + '.rels', ft(t.wbrels)),
    delete t.revssf,
    delete t.ssf,
    i
  )
}
function Bu(e, t) {
  var r = ''
  switch ((t || {}).type || 'base64') {
    case 'buffer':
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]]
    case 'base64':
      r = Or(e.slice(0, 12))
      break
    case 'binary':
      r = e
      break
    case 'array':
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]]
    default:
      throw new Error('Unrecognized type ' + ((t && t.type) || 'undefined'))
  }
  return [
    r.charCodeAt(0),
    r.charCodeAt(1),
    r.charCodeAt(2),
    r.charCodeAt(3),
    r.charCodeAt(4),
    r.charCodeAt(5),
    r.charCodeAt(6),
    r.charCodeAt(7)
  ]
}
function Ri(e, t) {
  switch (t.type) {
    case 'base64':
    case 'binary':
      break
    case 'buffer':
    case 'array':
      t.type = ''
      break
    case 'file':
      return Lt(t.file, _e.write(e, { type: ue ? 'buffer' : '' }))
    case 'string':
      throw new Error("'string' output type invalid for '" + t.bookType + "' files")
    default:
      throw new Error('Unrecognized type ' + t.type)
  }
  return _e.write(e, t)
}
function Uu(e, t) {
  var r = Qe(t || {}),
    n = Pu(e, r)
  return bu(n, r)
}
function bu(e, t) {
  var r = {},
    n = ue ? 'nodebuffer' : typeof Uint8Array < 'u' ? 'array' : 'string'
  if ((t.compression && (r.compression = 'DEFLATE'), t.password)) r.type = n
  else
    switch (t.type) {
      case 'base64':
        r.type = 'base64'
        break
      case 'binary':
        r.type = 'string'
        break
      case 'string':
        throw new Error("'string' output type invalid for '" + t.bookType + "' files")
      case 'buffer':
      case 'file':
        r.type = n
        break
      default:
        throw new Error('Unrecognized type ' + t.type)
    }
  var a = e.FullPaths
    ? _e.write(e, {
        fileType: 'zip',
        type: { nodebuffer: 'buffer', string: 'binary' }[r.type] || r.type,
        compression: !!t.compression
      })
    : e.generate(r)
  if (typeof Deno < 'u' && typeof a == 'string') {
    if (t.type == 'binary' || t.type == 'base64') return a
    a = new Uint8Array(c0(a))
  }
  return t.password && typeof encrypt_agile < 'u'
    ? Ri(encrypt_agile(a, t.password), t)
    : t.type === 'file'
    ? Lt(t.file, a)
    : t.type == 'string'
    ? St(a)
    : a
}
function Wu(e, t) {
  var r = t || {},
    n = tu(e, r)
  return Ri(n, r)
}
function _r(e, t, r) {
  r || (r = '')
  var n = r + e
  switch (t.type) {
    case 'base64':
      return Dt(Ar(n))
    case 'binary':
      return Ar(n)
    case 'string':
      return e
    case 'file':
      return Lt(t.file, n, 'utf8')
    case 'buffer':
      return ue
        ? Rr(n, 'utf8')
        : typeof TextEncoder < 'u'
        ? new TextEncoder().encode(n)
        : _r(n, { type: 'binary' })
            .split('')
            .map(function (a) {
              return a.charCodeAt(0)
            })
  }
  throw new Error('Unrecognized type ' + t.type)
}
function Hu(e, t) {
  switch (t.type) {
    case 'base64':
      return Dt(e)
    case 'binary':
      return e
    case 'string':
      return e
    case 'file':
      return Lt(t.file, e, 'binary')
    case 'buffer':
      return ue
        ? Rr(e, 'binary')
        : e.split('').map(function (r) {
            return r.charCodeAt(0)
          })
  }
  throw new Error('Unrecognized type ' + t.type)
}
function $t(e, t) {
  switch (t.type) {
    case 'string':
    case 'base64':
    case 'binary':
      for (var r = '', n = 0; n < e.length; ++n) r += String.fromCharCode(e[n])
      return t.type == 'base64' ? Dt(r) : t.type == 'string' ? St(r) : r
    case 'file':
      return Lt(t.file, e)
    case 'buffer':
      return e
    default:
      throw new Error('Unrecognized type ' + t.type)
  }
}
function Ii(e, t) {
  us(), yh(e)
  var r = Qe(t || {})
  if ((r.cellStyles && ((r.cellNF = !0), (r.sheetStubs = !0)), r.type == 'array')) {
    r.type = 'binary'
    var n = Ii(e, r)
    return (r.type = 'array'), c0(n)
  }
  var a = 0
  if (
    r.sheet &&
    (typeof r.sheet == 'number' ? (a = r.sheet) : (a = e.SheetNames.indexOf(r.sheet)),
    !e.SheetNames[a])
  )
    throw new Error('Sheet not found: ' + r.sheet + ' : ' + typeof r.sheet)
  switch (r.bookType || 'xlsb') {
    case 'xml':
    case 'xlml':
      return _r(eu(e, r), r)
    case 'slk':
    case 'sylk':
      return _r(wl.from_sheet(e.Sheets[e.SheetNames[a]], r), r)
    case 'htm':
    case 'html':
      return _r(yi(e.Sheets[e.SheetNames[a]], r), r)
    case 'txt':
      return Hu(Ni(e.Sheets[e.SheetNames[a]], r), r)
    case 'csv':
      return _r(tn(e.Sheets[e.SheetNames[a]], r), r, '\uFEFF')
    case 'dif':
      return _r(Sl.from_sheet(e.Sheets[e.SheetNames[a]], r), r)
    case 'dbf':
      return $t(El.from_sheet(e.Sheets[e.SheetNames[a]], r), r)
    case 'prn':
      return _r(Al.from_sheet(e.Sheets[e.SheetNames[a]], r), r)
    case 'rtf':
      return _r(Il.from_sheet(e.Sheets[e.SheetNames[a]], r), r)
    case 'eth':
      return _r(ei.from_sheet(e.Sheets[e.SheetNames[a]], r), r)
    case 'fods':
      return _r(Di(e, r), r)
    case 'wk1':
      return $t(Kn.sheet_to_wk1(e.Sheets[e.SheetNames[a]], r), r)
    case 'wk3':
      return $t(Kn.book_to_wk3(e, r), r)
    case 'biff2':
      r.biff || (r.biff = 2)
    case 'biff3':
      r.biff || (r.biff = 3)
    case 'biff4':
      return r.biff || (r.biff = 4), $t(Fi(e, r), r)
    case 'biff5':
      r.biff || (r.biff = 5)
    case 'biff8':
    case 'xla':
    case 'xls':
      return r.biff || (r.biff = 8), Wu(e, r)
    case 'xlsx':
    case 'xlsm':
    case 'xlam':
    case 'xlsb':
    case 'numbers':
    case 'ods':
      return Uu(e, r)
    default:
      throw new Error('Unrecognized bookType |' + r.bookType + '|')
  }
}
function Vu(e) {
  if (!e.bookType) {
    var t = { xls: 'biff8', htm: 'html', slk: 'sylk', socialcalc: 'eth', Sh33tJS: 'WTF' },
      r = e.file.slice(e.file.lastIndexOf('.')).toLowerCase()
    r.match(/^\.[a-z]+$/) && (e.bookType = r.slice(1)), (e.bookType = t[e.bookType] || e.bookType)
  }
}
function Gu(e, t, r) {
  var n = r || {}
  return (n.type = 'file'), (n.file = t), Vu(n), Ii(e, n)
}
function Xu(e, t, r, n, a, i, s, f) {
  var o = He(r),
    l = f.defval,
    c = f.raw || !Object.prototype.hasOwnProperty.call(f, 'raw'),
    d = !0,
    x = a === 1 ? [] : {}
  if (a !== 1)
    if (Object.defineProperty)
      try {
        Object.defineProperty(x, '__rowNum__', { value: r, enumerable: !1 })
      } catch {
        x.__rowNum__ = r
      }
    else x.__rowNum__ = r
  if (!s || e[r])
    for (var p = t.s.c; p <= t.e.c; ++p) {
      var E = s ? e[r][p] : e[n[p] + o]
      if (E === void 0 || E.t === void 0) {
        if (l === void 0) continue
        i[p] != null && (x[i[p]] = l)
        continue
      }
      var u = E.v
      switch (E.t) {
        case 'z':
          if (u == null) break
          continue
        case 'e':
          u = u == 0 ? null : void 0
          break
        case 's':
        case 'd':
        case 'b':
        case 'n':
          break
        default:
          throw new Error('unrecognized type ' + E.t)
      }
      if (i[p] != null) {
        if (u == null)
          if (E.t == 'e' && u === null) x[i[p]] = null
          else if (l !== void 0) x[i[p]] = l
          else if (c && u === null) x[i[p]] = null
          else continue
        else x[i[p]] = c && (E.t !== 'n' || (E.t === 'n' && f.rawNumbers !== !1)) ? u : Dr(E, u, f)
        u != null && (d = !1)
      }
    }
  return { row: x, isempty: d }
}
function o0(e, t) {
  if (e == null || e['!ref'] == null) return []
  var r = { t: 'n', v: 0 },
    n = 0,
    a = 1,
    i = [],
    s = 0,
    f = '',
    o = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } },
    l = t || {},
    c = l.range != null ? l.range : e['!ref']
  switch (
    (l.header === 1
      ? (n = 1)
      : l.header === 'A'
      ? (n = 2)
      : Array.isArray(l.header)
      ? (n = 3)
      : l.header == null && (n = 0),
    typeof c)
  ) {
    case 'string':
      o = Ee(c)
      break
    case 'number':
      ;(o = Ee(e['!ref'])), (o.s.r = c)
      break
    default:
      o = c
  }
  n > 0 && (a = 0)
  var d = He(o.s.r),
    x = [],
    p = [],
    E = 0,
    u = 0,
    _ = Array.isArray(e),
    O = o.s.r,
    R = 0,
    y = {}
  _ && !e[O] && (e[O] = [])
  var M = (l.skipHidden && e['!cols']) || [],
    Y = (l.skipHidden && e['!rows']) || []
  for (R = o.s.c; R <= o.e.c; ++R)
    if (!(M[R] || {}).hidden)
      switch (((x[R] = ze(R)), (r = _ ? e[O][R] : e[x[R] + d]), n)) {
        case 1:
          i[R] = R - o.s.c
          break
        case 2:
          i[R] = x[R]
          break
        case 3:
          i[R] = l.header[R - o.s.c]
          break
        default:
          if (
            (r == null && (r = { w: '__EMPTY', t: 's' }),
            (f = s = Dr(r, null, l)),
            (u = y[s] || 0),
            !u)
          )
            y[s] = 1
          else {
            do f = s + '_' + u++
            while (y[f])
            ;(y[s] = u), (y[f] = 1)
          }
          i[R] = f
      }
  for (O = o.s.r + a; O <= o.e.r; ++O)
    if (!(Y[O] || {}).hidden) {
      var ee = Xu(e, o, O, x, n, i, _, l)
      ;(ee.isempty === !1 || (n === 1 ? l.blankrows !== !1 : l.blankrows)) && (p[E++] = ee.row)
    }
  return (p.length = E), p
}
var ea = /"/g
function zu(e, t, r, n, a, i, s, f) {
  for (var o = !0, l = [], c = '', d = He(r), x = t.s.c; x <= t.e.c; ++x)
    if (n[x]) {
      var p = f.dense ? (e[r] || [])[x] : e[n[x] + d]
      if (p == null) c = ''
      else if (p.v != null) {
        ;(o = !1), (c = '' + (f.rawNumbers && p.t == 'n' ? p.v : Dr(p, null, f)))
        for (var E = 0, u = 0; E !== c.length; ++E)
          if ((u = c.charCodeAt(E)) === a || u === i || u === 34 || f.forceQuotes) {
            c = '"' + c.replace(ea, '""') + '"'
            break
          }
        c == 'ID' && (c = '"ID"')
      } else
        p.f != null && !p.F
          ? ((o = !1),
            (c = '=' + p.f),
            c.indexOf(',') >= 0 && (c = '"' + c.replace(ea, '""') + '"'))
          : (c = '')
      l.push(c)
    }
  return f.blankrows === !1 && o ? null : l.join(s)
}
function tn(e, t) {
  var r = [],
    n = t ?? {}
  if (e == null || e['!ref'] == null) return ''
  var a = Ee(e['!ref']),
    i = n.FS !== void 0 ? n.FS : ',',
    s = i.charCodeAt(0),
    f =
      n.RS !== void 0
        ? n.RS
        : `
`,
    o = f.charCodeAt(0),
    l = new RegExp((i == '|' ? '\\|' : i) + '+$'),
    c = '',
    d = []
  n.dense = Array.isArray(e)
  for (
    var x = (n.skipHidden && e['!cols']) || [], p = (n.skipHidden && e['!rows']) || [], E = a.s.c;
    E <= a.e.c;
    ++E
  )
    (x[E] || {}).hidden || (d[E] = ze(E))
  for (var u = 0, _ = a.s.r; _ <= a.e.r; ++_)
    (p[_] || {}).hidden ||
      ((c = zu(e, a, _, d, s, o, i, n)),
      c != null &&
        (n.strip && (c = c.replace(l, '')),
        (c || n.blankrows !== !1) && r.push((u++ ? f : '') + c)))
  return delete n.dense, r.join('')
}
function Ni(e, t) {
  t || (t = {}),
    (t.FS = '	'),
    (t.RS = `
`)
  var r = tn(e, t)
  return r
}
function Ku(e) {
  var t = '',
    r,
    n = ''
  if (e == null || e['!ref'] == null) return []
  var a = Ee(e['!ref']),
    i = '',
    s = [],
    f,
    o = [],
    l = Array.isArray(e)
  for (f = a.s.c; f <= a.e.c; ++f) s[f] = ze(f)
  for (var c = a.s.r; c <= a.e.r; ++c)
    for (i = He(c), f = a.s.c; f <= a.e.c; ++f)
      if (((t = s[f] + i), (r = l ? (e[c] || [])[f] : e[t]), (n = ''), r !== void 0)) {
        if (r.F != null) {
          if (((t = r.F), !r.f)) continue
          ;(n = r.f), t.indexOf(':') == -1 && (t = t + ':' + t)
        }
        if (r.f != null) n = r.f
        else {
          if (r.t == 'z') continue
          if (r.t == 'n' && r.v != null) n = '' + r.v
          else if (r.t == 'b') n = r.v ? 'TRUE' : 'FALSE'
          else if (r.w !== void 0) n = "'" + r.w
          else {
            if (r.v === void 0) continue
            r.t == 's' ? (n = "'" + r.v) : (n = '' + r.v)
          }
        }
        o[o.length] = t + '=' + n
      }
  return o
}
function ki(e, t, r) {
  var n = r || {},
    a = +!n.skipHeader,
    i = e || {},
    s = 0,
    f = 0
  if (i && n.origin != null)
    if (typeof n.origin == 'number') s = n.origin
    else {
      var o = typeof n.origin == 'string' ? Pe(n.origin) : n.origin
      ;(s = o.r), (f = o.c)
    }
  var l,
    c = { s: { c: 0, r: 0 }, e: { c: f, r: s + t.length - 1 + a } }
  if (i['!ref']) {
    var d = Ee(i['!ref'])
    ;(c.e.c = Math.max(c.e.c, d.e.c)),
      (c.e.r = Math.max(c.e.r, d.e.r)),
      s == -1 && ((s = d.e.r + 1), (c.e.r = s + t.length - 1 + a))
  } else s == -1 && ((s = 0), (c.e.r = t.length - 1 + a))
  var x = n.header || [],
    p = 0
  t.forEach(function (u, _) {
    Ve(u).forEach(function (O) {
      ;(p = x.indexOf(O)) == -1 && (x[(p = x.length)] = O)
      var R = u[O],
        y = 'z',
        M = '',
        Y = me({ c: f + p, r: s + _ + a })
      ;(l = kt(i, Y)),
        R && typeof R == 'object' && !(R instanceof Date)
          ? (i[Y] = R)
          : (typeof R == 'number'
              ? (y = 'n')
              : typeof R == 'boolean'
              ? (y = 'b')
              : typeof R == 'string'
              ? (y = 's')
              : R instanceof Date
              ? ((y = 'd'), n.cellDates || ((y = 'n'), (R = qe(R))), (M = n.dateNF || ye[14]))
              : R === null && n.nullError && ((y = 'e'), (R = 0)),
            l
              ? ((l.t = y), (l.v = R), delete l.w, delete l.R, M && (l.z = M))
              : (i[Y] = l = { t: y, v: R }),
            M && (l.z = M))
    })
  }),
    (c.e.c = Math.max(c.e.c, f + x.length - 1))
  var E = He(s)
  if (a) for (p = 0; p < x.length; ++p) i[ze(p + f) + E] = { t: 's', v: x[p] }
  return (i['!ref'] = De(c)), i
}
function ju(e, t) {
  return ki(null, e, t)
}
function kt(e, t, r) {
  if (typeof t == 'string') {
    if (Array.isArray(e)) {
      var n = Pe(t)
      return e[n.r] || (e[n.r] = []), e[n.r][n.c] || (e[n.r][n.c] = { t: 'z' })
    }
    return e[t] || (e[t] = { t: 'z' })
  }
  return typeof t != 'number' ? kt(e, me(t)) : kt(e, me({ r: t, c: r || 0 }))
}
function Yu(e, t) {
  if (typeof t == 'number') {
    if (t >= 0 && e.SheetNames.length > t) return t
    throw new Error('Cannot find sheet # ' + t)
  } else if (typeof t == 'string') {
    var r = e.SheetNames.indexOf(t)
    if (r > -1) return r
    throw new Error('Cannot find sheet name |' + t + '|')
  } else throw new Error('Cannot find sheet |' + t + '|')
}
function $u() {
  return { SheetNames: [], Sheets: {} }
}
function Ju(e, t, r, n) {
  var a = 1
  if (!r) for (; a <= 65535 && e.SheetNames.indexOf((r = 'Sheet' + a)) != -1; ++a, r = void 0);
  if (!r || e.SheetNames.length >= 65535) throw new Error('Too many worksheets')
  if (n && e.SheetNames.indexOf(r) >= 0) {
    var i = r.match(/(^.*?)(\d+)$/)
    a = (i && +i[2]) || 0
    var s = (i && i[1]) || r
    for (++a; a <= 65535 && e.SheetNames.indexOf((r = s + a)) != -1; ++a);
  }
  if ((wi(r), e.SheetNames.indexOf(r) >= 0))
    throw new Error('Worksheet with name |' + r + '| already exists!')
  return e.SheetNames.push(r), (e.Sheets[r] = t), r
}
function Zu(e, t, r) {
  e.Workbook || (e.Workbook = {}), e.Workbook.Sheets || (e.Workbook.Sheets = [])
  var n = Yu(e, t)
  switch ((e.Workbook.Sheets[n] || (e.Workbook.Sheets[n] = {}), r)) {
    case 0:
    case 1:
    case 2:
      break
    default:
      throw new Error('Bad sheet visibility setting ' + r)
  }
  e.Workbook.Sheets[n].Hidden = r
}
function qu(e, t) {
  return (e.z = t), e
}
function Pi(e, t, r) {
  return t ? ((e.l = { Target: t }), r && (e.l.Tooltip = r)) : delete e.l, e
}
function Qu(e, t, r) {
  return Pi(e, '#' + t, r)
}
function ex(e, t, r) {
  e.c || (e.c = []), e.c.push({ t, a: r || 'SheetJS' })
}
function rx(e, t, r, n) {
  for (
    var a = typeof t != 'string' ? t : Ee(t), i = typeof t == 'string' ? t : De(t), s = a.s.r;
    s <= a.e.r;
    ++s
  )
    for (var f = a.s.c; f <= a.e.c; ++f) {
      var o = kt(e, s, f)
      ;(o.t = 'n'), (o.F = i), delete o.v, s == a.s.r && f == a.s.c && ((o.f = r), n && (o.D = !0))
    }
  return e
}
var I0 = {
  encode_col: ze,
  encode_row: He,
  encode_cell: me,
  encode_range: De,
  decode_col: z0,
  decode_row: X0,
  split_cell: pf,
  decode_cell: Pe,
  decode_range: ir,
  format_cell: Dr,
  sheet_add_aoa: Pa,
  sheet_add_json: ki,
  sheet_add_dom: Ci,
  aoa_to_sheet: ut,
  json_to_sheet: ju,
  table_to_sheet: Oi,
  table_to_book: Au,
  sheet_to_csv: tn,
  sheet_to_txt: Ni,
  sheet_to_json: o0,
  sheet_to_html: yi,
  sheet_to_formulae: Ku,
  sheet_to_row_object_array: o0,
  sheet_get_cell: kt,
  book_new: $u,
  book_append_sheet: Ju,
  book_set_sheet_visibility: Zu,
  cell_set_number_format: qu,
  cell_set_hyperlink: Pi,
  cell_set_internal_link: Qu,
  cell_add_comment: ex,
  sheet_set_array_formula: rx,
  consts: { SHEET_VISIBLE: 0, SHEET_HIDDEN: 1, SHEET_VERY_HIDDEN: 2 }
}
function tx(e, t) {
  const r = { name: '姓名', age: '年龄', city: '城市' },
    n = e.map((s) => {
      const f = {}
      for (const o in s) f[r[o] || o] = s[o]
      return f
    }),
    a = I0.json_to_sheet(n, { header: ['姓名', '年龄', '城市'] })
  a['!cols'] = Object.keys(a).map(() => ({ wch: 15 }))
  const i = I0.book_new()
  I0.book_append_sheet(i, a, 'Sheet1'), Gu(i, t)
}
const mx = () => {
  console.log('用户岗位 渲染')
  const e = Hr.useRef(null),
    t = Hr.useRef(null),
    [r, n] = Hr.useState([])
  Hr.useState([])
  const a = async () => {
    const { data: f } = await ns({ param: {}, pageInfo: { pageNum: 1, pageSize: 10 } })
    n(f)
  }
  return (
    Hr.useEffect(() => {
      a()
    }, []),
    gt(Qi, {
      title: '岗位管理',
      source: '在这里，你可以对系统中的用户岗位进行管理，用户登录必须选择一个岗位。',
      children: [
        gt('div', {
          className: 'app-card pos',
          children: [
            gt(pn, {
              wrap: !0,
              children: [
                Xe(_t, { type: 'primary', onClick: a, children: '查询' }),
                Xe(_t, {
                  type: 'primary',
                  onClick: () => {
                    var f
                    return (f = e == null ? void 0 : e.current) == null ? void 0 : f.showModal()
                  },
                  className: 'btn-pink',
                  children: '新增'
                }),
                Xe(_t, {
                  type: 'primary',
                  onClick: () => {
                    tx(
                      [
                        { name: 'John', age: 30, city: 'New York' },
                        { name: 'Jane', age: 40, city: 'San Francisco' }
                      ],
                      '测试.xlsx'
                    )
                  },
                  icon: Xe(os, {}),
                  children: '导出'
                })
              ]
            }),
            gt(ts, {
              bordered: !0,
              dataSource: r,
              rowKey: (f) => f.id,
              children: [
                Xe(
                  et,
                  {
                    title: '用户id',
                    dataIndex: 'user',
                    render: (f) =>
                      typeof f == 'object' && f !== null && 'userId' in f ? f.userId : '未知'
                  },
                  'user.id'
                ),
                Xe(
                  et,
                  {
                    title: '用户名',
                    dataIndex: 'user',
                    render: (f) =>
                      typeof f == 'object' && f !== null && 'nickname' in f ? f.nickname : '未知'
                  },
                  'user.nickname'
                ),
                Xe(
                  et,
                  {
                    title: '登录名',
                    dataIndex: 'user',
                    render: (f) =>
                      typeof f == 'object' && f !== null && 'username' in f ? f.username : '未知'
                  },
                  'user.username'
                ),
                Xe(
                  et,
                  {
                    title: '更新时间',
                    dataIndex: 'user',
                    render: (f) =>
                      typeof f == 'object' && f !== null && 'updateTime' in f
                        ? f.updateTime
                        : '未知'
                  },
                  'user.updateTime'
                ),
                Xe(
                  et,
                  {
                    title: '创建时间',
                    dataIndex: 'user',
                    render: (f) =>
                      typeof f == 'object' && f !== null && 'createTime' in f
                        ? f.createTime
                        : '未知'
                  },
                  'user.createTime'
                ),
                Xe(
                  et,
                  {
                    title: '操作',
                    render: (f, o) =>
                      gt(pn, {
                        children: [
                          Xe(_t, {
                            type: 'primary',
                            onClick: () => {
                              var l
                              return (l = t == null ? void 0 : t.current) == null
                                ? void 0
                                : l.showModal(o.postList, o.user_id)
                            },
                            shape: 'circle',
                            icon: Xe(as, {})
                          }),
                          Xe(_t, { type: 'primary', danger: !0, shape: 'circle', icon: Xe(is, {}) })
                        ]
                      })
                  },
                  'action'
                )
              ]
            })
          ]
        }),
        Xe(es, { ref: e }),
        Xe(rs, { ref: t, getList: a })
      ]
    })
  )
}
export { mx as default }
//# sourceMappingURL=index-f87e3cc2.js.map

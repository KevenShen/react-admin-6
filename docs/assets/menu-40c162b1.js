import { J as t } from './index-7ec5c925.js'
function n(e) {
  return t({ url: `role/getmenu/${e}`, method: 'get' })
}
function r(e) {
  return t({ url: 'role/editmenu', method: 'post', data: e })
}
function u() {
  return t({ url: 'pos/all', method: 'get' })
}
function s(e) {
  return t({ url: 'pos/menu', method: 'post', data: e })
}
export { s as a, r as e, n as g, u as p }
//# sourceMappingURL=menu-40c162b1.js.map

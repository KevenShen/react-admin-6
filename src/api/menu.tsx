import request from '@/utils/request'

export function getmenu(id) {
  return request({
    url: `role/getmenu/${id}`,
    method: 'get'
  })
}
export function editmenu(data) {
  return request({
    url: 'role/editmenu',
    method: 'post',
    data
  })
}

export function posAll() {
  return request({
    url: 'pos/all',
    method: 'get'
  })
}

import request from '@/utils/request'

export function getLogList(type) {
  return request({
    url: `/logs/list?type=${type}`,
    method: 'get'
  })
}

export function getLogdetail(detail) {
  return request({
    url: `/logs/detail?name=${detail}`,
    method: 'get'
  })
}

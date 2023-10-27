import request from '@/utils/request'

export function getlivelist(data = {}) {
  return request({
    url: '/live/list',
    method: 'post',
    data
  })
}

import request from '@/utils/request'

export function getUserList(data) {
  return request({
    url: '/user/getUserList',
    method: 'post',
    data
  })
}

export function sign(data) {
  return request({
    url: '/user/sign',
    method: 'post',
    data
  })
}
export function update(data) {
  return request({
    url: '/user/update',
    method: 'post',
    data
  })
}
export function getUserPosList(data) {
  return request({
    url: '/user/getUserPosList',
    method: 'post',
    data
  })
}
export function getUserNameList(data) {
  return request({
    url: '/user/getUserNameList',
    method: 'post',
    data
  })
}

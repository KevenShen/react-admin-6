import request from '@/utils/request'

export function getUserList(data) {
  return request({
    url: '/user/getUserList',
    method: 'post',
    data
  })
}

export function createUser(data) {
  return request({
    url: '/user/createUser',
    method: 'post',
    data
  })
}

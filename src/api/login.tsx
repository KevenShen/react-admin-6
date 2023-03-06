import request from '@/utils/request'

export function userLogin(data) {
  return request({
    url: '/auth/login',
    method: 'post',
    data
  })
}

export function userLogout(data) {
  return request({
    url: '/logout',
    method: 'post',
    data
  })
}

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

export function getMenu() {
  return request({
    url: '/menu/list',
    method: 'get'
  })
}

export function getRole() {
  return request({
    url: '/role/all',
    method: 'get'
  })
}
export function updateRole(data) {
  return request({
    url: '/role/update',
    method: 'post',
    data
  })
}

export function getRoleById(id) {
  return request({
    url: `/role/all/${id}`,
    method: 'get'
  })
}

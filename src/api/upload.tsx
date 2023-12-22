import request from '@/utils/request'

export function upload(data) {
  return request({
    url: '/upload',
    method: 'post',
    data
  })
}
export function uploadChunk(formData) {
  return request({
    url: '/upload/uploadchunk',
    method: 'post',
    data: formData
  })
}

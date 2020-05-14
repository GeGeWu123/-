import request from '@/utils/request'

export function videoList(data) {
  return request({
    url: '/video/list',
    method: 'post',
    data: data
  })
}

export function getById(data) {
  return request({
    url: '/video/getById',
    method: 'post',
    data
  })
}

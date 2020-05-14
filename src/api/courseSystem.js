import request from '@/utils/request'

export function getList(data) {
  return request({
    url: '/courseSystem/getList',
    method: 'post',
    data: data
  })
}

export function getById(id) {
  return request({
    url: '/courseSystem/getById' + '?id=' + id,
    method: 'post'
  })
}

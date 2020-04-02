import request from '@/utils/request'

export function getEducateDirection(data) {
  return request({
    url: '/get/trainDirection',
    method: 'post',
    data
  })
}

import request from '@/utils/request'

export function robotRequest(question) {
  return request({
    url: '/robot/request' + '?question=' + question,
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  })
}

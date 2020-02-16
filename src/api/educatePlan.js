import request from '@/utils/request'

export function getEducatePlan(data) {
  return request({
    url: '/trainProgram/page/init',
    method: 'get',
    data
  })
}


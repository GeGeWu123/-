import request from '@/utils/request'

export function initTrainProgram(params) {
  return request({
    url: '/trainProgram/page/init',
    method: 'get',
    params
  })
}

export function findTrainProgramById(params) {
  return request({
    url: '/trainProgram/findById' + '?id=' + params,
    method: 'get',
    params
  })
}


import request from '@/utils/request'

// 查询培养方向
export function getEducateDirection(data) {
  return request({
    url: '/get/trainDirection',
    method: 'post',
    data
  })
}

// 根据培养方向Id查询开发流程
export function getProcess(id) {
  return request({
    url: '/get/process' + '?trainDirectionId=' + id,
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  })
}

// 根据流程id查询相关岗位
export function queryJob(id) {
  return request({
    url: '/query/job' + '?flowId=' + id,
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  })
}

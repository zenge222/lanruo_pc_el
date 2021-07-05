import api from '../api/apiConfig'
import request from '../api/request'

// 提交留言信息
export function _leaveMessage(data) {
  return request(api.leaveMessage, 'post', data)
}
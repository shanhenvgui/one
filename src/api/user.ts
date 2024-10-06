import request from '@/utils/request'

const api_prefix = '/api/app/member'

// 登录
export function login(data:any) {
    return request({
      url: `${api_prefix}/login`,
      method: 'post',
      data
    })
  }
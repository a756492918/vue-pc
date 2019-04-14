import axios from 'axios'
const baseURL = 'http://localhost:8888/api/private/v1/'
axios.defaults.baseURL = baseURL

// axios拦截
axios.interceptors.request.use(
  config => {
    let mytoken = localStorage.getItem('token')
    if (mytoken) { // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = mytoken
    }
    return config
  },
  err => {
    return Promise.reject(err)
  })

// 登录验证

export const User = params => {
  return axios.post('login', params).then(res => res.data)
}

// 获取用户列表

export const getuserlist = params => {
  return axios.get('users', params).then(res => res.data)
}

import Request from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const request = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      console.log('實例請求攔截')
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptors: (res) => {
      console.log('實例響應攔截')
      return res
    },
    responseInterceptorsCatch: (err) => {
      return err
    }
  }
})

export default request

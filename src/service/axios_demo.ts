import axios from 'axios'

// console.log(axios)
// axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
//   console.log(res)
// })

// // promise本身可以有類型
// new Promise<string>((resolve, reject) => {
//   resolve('88')
// }).then((res) => {
//   console.log(res)
// })

// 進行全局配置
axios.defaults.baseURL = 'http://httpbin.org'

// axios
//   .get('get', {
//     params: {
//       name: 'Louis'
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

// axios.post('post', { data: { name: 'Renny' } }).then((res) => {
//   console.log(res.data)
// })

// 多個請求
// axios
//   .all([
//     axios.get('get', {
//       params: {
//         name: 'Louis'
//       }
//     }),
//     axios.post('post', { data: { name: 'Renny' } })
//   ])
//   .then((res) => {
//     console.log(res[0])
//     console.log(res[1])
//   })

// axios攔截器 有請求攔截 和 響應攔截
// 都有兩個回調函數 一個是成功一個是失敗
// axios.interceptors.request.use(
//   (config) => {
//     console.log(config)
//     return config
//   },
//   (err) => {
//     return err
//   }
// )

// axios.interceptors.response.use(
//   (config) => {
//     return config
//   },
//   (err) => {
//     return err
//   }
// )

// axios.post('post', { data: { name: 'Renny' } }).then((res) => {
//   console.log(res.data)
// })

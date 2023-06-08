import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: `https://my-json-server.typicode.com/rezapazan/vm-service/`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

axiosInstance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default axiosInstance

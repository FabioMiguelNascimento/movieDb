import axios from 'axios'

const api = axios.create({
  baseURL: '/server',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response?.status === 401) {
      console.error('Unauthorized access')
    } else if (error.response?.status >= 500) {
      console.error('Server error')
    } else if (error.code === 'ECONNABORTED') {
      console.error('Request timeout')
    }

    return Promise.reject(error)
  }
)

export default api

import Axios from 'axios'
import qs from 'qs'
import { parseBody, parseError } from '../../utils/http'

// check dev mode
const dev = process.env.NODE_ENV !== 'production'

// base api
export const api = process.env.API_URL || 'http://localhost:8080'

// base url path
const baseURL = `${api}` // TODO: use constants for api version!

/**
 * Get axios instance
 * @type {AxiosInstance}
 */
const axios = Axios.create({
  baseURL,
  paramsSerializer: qs.stringify
})

/**
 * Define axios interceptors
 * @param store
 */
export const setInterceptors = (store) => {
  /**
   * Axios response interceptor
   */
  axios.interceptors.response.use(
    (response) =>
      parseBody(response),
    (error) =>
      Promise.reject(parseError(error.response))
  )

  /**
   * Axios request interceptor
   */
  axios.interceptors.request.use(
    (config) => {
      return config
    },
    (error) => Promise.reject(error)
  )
}

export default axios

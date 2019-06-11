import axios from '../../api'

const AUTH_PATH = '/' // TODO: check url name

/**
 * Fetch login
 * @param params
 * @return {AxiosPromise<any>}
 */
export const login = (params) =>
  axios.post(AUTH_PATH, params)

/**
 * Fetch logout
 * @return {AxiosPromise<any>}
 */
export const logout = () =>
  axios.post(AUTH_PATH)

import axios from '../../api'

const ACCOUNT_PATH = '/'

/**
 * @return {AxiosPromise<any>}
 */
export const fetchTestGET = () =>
  axios.get(`${ACCOUNT_PATH}`)

/**
 * @return {AxiosPromise<any>}
 */
export const fetchTestPOST = () =>
  axios.post(`${ACCOUNT_PATH}`, { param: true })

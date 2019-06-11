import { handleActions } from 'redux-actions'

import {
  loginRequest,
  testAction
} from '../../root/actions/account'

/**
 * Store initial state
 */
export const initialState = {
  // auth
  userName: '',
  password: '',

  //

  accountNumber: null,
  test: ''
}

/**
 * Account reducer
 * @type {reducerMapFunction}
 */
const accountReducer = handleActions({
  [loginRequest]: {
    FULFILLED: (state, action) => ({
      ...state,
      ...action.payload
    }),
    REJECTED: (state) => {
      return state
    }
  },
  [testAction]: (state, action) => ({ ...state, test: action.payload })
}, initialState)

/**
 * Default reducer
 */
export default accountReducer

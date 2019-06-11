import { handleActions } from 'redux-actions'

import { changeTheme, clearError, setError } from '../../root/actions/app'

/**
 * Store initial state
 */
export const initialState = {
  theme: '', // active theme for app (light || dark)
  error: { // Note: global error
    code: null,
    message: ''
  }
}

/**
 * App reducer
 * @type {reducerMapFunction}
 */
const appReducer = handleActions({
  [ changeTheme ]: (state, action) => ({
    ...state,
    theme: action.payload
  }),
  [ clearError ]: state => ({
    ...state,
    error: {
      code: null,
      message: ''
    }
  }),
  [ setError ]: (state, action) => ({
    ...state,
    error: { ...action.payload }
  })
}, initialState)

/**
 * Default reducer
 */
export default appReducer

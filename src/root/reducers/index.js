import { combineReducers } from 'redux'

import app, { initialState as appState } from '../../root/reducers/app'
import account, { initialState as accountState } from '../../root/reducers/account'

/**
 * Store initial state
 */
export const initialState = {
  app: appState,
  account: accountState,
}

/**
 * Combine reducers
 */
export default combineReducers({
  app,
  account
})

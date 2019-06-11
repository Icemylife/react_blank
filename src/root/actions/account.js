import { createActions } from 'redux-actions'
import { login } from '../../services/api/v1/auth'

const prefix = 'account'

export const {
  loginRequest,
  testAction
} = createActions({
  LOGIN_REQUEST: login,
  TEST_ACTION: () => 'test'
}, { prefix, namespace: ' ' })

// set default actions
export default {
  loginRequest,
  testAction
}

import { createActions } from 'redux-actions'

//

const prefix = 'app'

export const {
  setError,
  clearError,
  changeTheme
} = createActions({
  SET_ERROR: (error) => error,
  CLEAR_ERROR: null,
  CHANGE_THEME: (theme) => theme
}, { prefix, namespace: ' ' })

/**
 * Used as `mapDispatchToProps` in `connect`
 */
export default {
  setError,
  clearError,
  changeTheme
}

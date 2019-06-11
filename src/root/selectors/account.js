import { createStructuredSelector, createSelector } from 'reselect'
import { isAnonymous } from '../../utils/auth'

// get account from store
const getStatePortion = (state) => state.account

// check user is logged in
export const isLoggedIn = createSelector(
  getStatePortion,
  (account) => !isAnonymous(account)
)

// structured selector for Router component
export const mapStateToPropsRouter = createStructuredSelector({
  isLoggedIn
})

// default structured selector for application
export default createStructuredSelector({
  account: getStatePortion
})

import { createStructuredSelector, createSelector } from 'reselect'

// get app from store
const getStatePortion = (state) => state.app

// get app -> error from store
const getError = createSelector(
  getStatePortion,
  (app) => app.error
)

// get app -> theme from store
const getTheme = createSelector(
  getStatePortion,
  (app) => app.theme
)

/* used as `mapStateToProps` in `connect` */

// structured selector for ErrorPopup component
export const mapStateToPropsErrorPopup = createStructuredSelector({
  error: getError
})

// structured selector for ErrorPopup component
export const mapStateToPropsThemeSelection = createStructuredSelector({
  theme: getTheme
})

// default structured selector for application
export default createStructuredSelector({
  app: getStatePortion
})

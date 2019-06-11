import React from 'react'
import { Route, Redirect } from 'react-router'

/**
 * Router decorator with check user
 * @param Component
 * @param isLoggedIn
 * @param rest
 * @return {*}
 * @constructor
 */
const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    path={rest.path}
    exact={!!rest.exact}
    render={(props) => {
      return isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/auth',
            state: { from: rest.location }
          }}
        />
      )
    }}
  />
)

export default PrivateRoute

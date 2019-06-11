import React from 'react'
import { Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

/**
 * Custom route component
 * @param route
 * @param {Boolean} isLoggedIn
 * @returns {*}
 * @constructor
 */
const RouteWithSubRoutes = ({ isLoggedIn, ...route }) =>
  route.private
    ? <PrivateRoute {...route} isLoggedIn={isLoggedIn} />
    : <Route path={route.path}
      render={(props) => <route.component {...props} routes={route.routes} />} />

export default RouteWithSubRoutes

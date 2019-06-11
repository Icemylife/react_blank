import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import NotFoundScreen from '../screens/404'
import RouteWithSubRoutes from './RouteWithSubRoutes'

import { mapStateToPropsRouter as mapStateToProps } from '../../root/selectors/account'

class Router extends Component {
  render () {
    const { routes, isLoggedIn } = this.props

    return (
      <Switch>
        {routes.map((route) => (
          <RouteWithSubRoutes
            key={route.path}
            isLoggedIn={isLoggedIn}
            {...route}
          />
        ))}
        {/* <Redirect from='/' to='/auth' /> */}
        <Route component={NotFoundScreen} />
      </Switch>
    )
  }
}

export default connect(
  mapStateToProps,
  null
)(Router)

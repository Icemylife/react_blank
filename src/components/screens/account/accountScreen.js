import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import mapDispatchToProps from '../../../root/actions/account'
import mapStateToProps from '../../../root/selectors/account'

class AccountScreen extends Component {
  //

  render () {
    return (
      <div>
        <h1>AccountScreen</h1>
      </div>
    )
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AccountScreen)
)
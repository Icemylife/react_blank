import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import mapDispatchToProps from '../../../root/actions/account' // Note: use settings actions!!

class SettingsScreen extends Component {

  handleButton = () => {
    this.props.testAction()
  }

  render () {
    console.log('Props for SettingsScreen: ', this.props)
    return (
      <div>
        <h1>SettingsScreen {this.props.account.test}</h1>
        <button type='button' onClick={this.handleButton}>Click Me!</button>
      </div>
    )
  }
}

export default withRouter(
  connect(
    (state) => {
      return state
    },
    mapDispatchToProps
  )(SettingsScreen)
)

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { mapStateToPropsErrorPopup } from '../../root/selectors/app'
import { clearError, setError } from '../../root/actions/app'

class ErrorModal extends PureComponent {
  //

  closeModal = () =>
    this.props.clearError()

  render () {
    const { error: { code, message } } = this.props
    const visible = !!(code && message)

    return (
      <div className={`modal ${!visible ? 'hidden' : ''}`}>
        {visible ?
          <div className='modal-content'>
            <div className='modal-header'>
              <span className='modal-close' onClick={this.closeModal}>&times;</span>
              <h2>ERROR CODE: {code}</h2>
            </div>
            <div className='modal-body'>
              <p>Message: {message}</p>
            </div>
            <div className='modal-footer'>&nbsp;</div>
          </div>
          : null}
      </div>
    )
  }
}

export default connect(
  mapStateToPropsErrorPopup,
  { setError, clearError }
)(ErrorModal)

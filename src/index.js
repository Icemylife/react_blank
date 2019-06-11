import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import App from './App'
import store from './root/store'
import { setInterceptors } from './services/api'

import './index.css'

setInterceptors(store)

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
)
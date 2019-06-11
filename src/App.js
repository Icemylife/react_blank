import React from 'react'
import Router from './components/common/Router'
import ErrorModal from './components/common/ErrorModal'
import PortalControl from './components/common/PortalControl'
import routes from './root/routes'

import './App.css'

function App () {
  return (
    <div className='App'>
      <header className='App-header'>

        {/* Routes list */}
        <Router routes={routes} />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>

      {/* Use react portal */}
      <PortalControl>
        <ErrorModal />
      </PortalControl>
    </div>
  )
}

export default App

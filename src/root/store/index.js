import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createPromise } from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer, { initialState } from '../../root/reducers'

const promiseMiddleware = createPromise({
  promiseTypeDelimiter: '/' // set delimeter to '/' instead of default '_'
})

export const configureStore = (state = initialState) => {
  const middlewares = [
    thunkMiddleware,
    promiseMiddleware
  ]

  return createStore(
    rootReducer,
    state,
    composeWithDevTools(applyMiddleware(...middlewares))
  )
}

export default configureStore(initialState)

/* @flow */

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { combinedReducers } from './Reducers'

let middleware = [thunk]
const development = process.env.NODE_ENV === 'development'
if (development) {
  const createLogger = require('redux-logger')
  const logger = createLogger()
  middleware.push(logger)
}

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)
export const store = createStoreWithMiddleware(combinedReducers)

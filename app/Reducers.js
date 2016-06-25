/* @flow */

import { combineReducers } from 'redux'
import { results } from './Pactometro/Reducers/ResultsReducer'
import { calculation } from './Pactometro/Reducers/CalculationReducer'

const combinedReducers = combineReducers({
  results,
  calculation
})

export {
  combinedReducers
}

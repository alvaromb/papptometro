/* @flow */

import { handleActions } from 'redux-actions'
import t from 'tcomb-form-native'
import { resultMapper } from '../Models/PartyResult'

const ResultsResponseStruct = t.struct({
  isFetching: t.Bool,
  error: t.Bool,
  payload: t.Array,
})
const results = handleActions({
  GET_RESULTS: (state, action) => ResultsResponseStruct({
    isFetching: true,
    error: false,
    payload: []
  }),
  GET_RESULTS_SUCCESS: (state, action) => ResultsResponseStruct({
    isFetching: false,
    error: false,
    payload: action.payload.map(resultMapper)
  })
}, ResultsResponseStruct({
  isFetching: false,
  error: false,
  payload: []
}))

export {
  results
}

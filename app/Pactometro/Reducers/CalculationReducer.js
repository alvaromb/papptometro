/* @flow */

import { handleActions } from 'redux-actions'
import t from 'tcomb-form-native'
import { PartyResult } from '../Models/PartyResult'
import { _ } from 'lodash'

const CalculationStruct = t.struct({
  selectedParties: t.Array,
  total: t.Number,
})
const calculation = handleActions({
  ADD_PARTY: (state, action) => CalculationStruct({
    selectedParties: state.selectedParties.concat(action.payload),
    total: state.total + action.payload.result,
  }),
  REMOVE_PARTY: (state, action) => CalculationStruct({
    selectedParties: _.reject(state.selectedParties, action.payload),
    total: state.total - action.payload.result,
  }),
}, CalculationStruct({
  selectedParties: [],
  total: 0,
}))

export {
  calculation
}

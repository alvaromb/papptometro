/* @flow */

import { createAction } from 'redux-actions'

/**
 * Actions to add/remove a party to the coalition
 */
export const addPartyToCoalition = createAction('ADD_PARTY')
export const removePartyFromCoalition = createAction('REMOVE_PARTY')

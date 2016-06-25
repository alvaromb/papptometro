/* @flow */

import { PartyResult } from './PartyResult'

const mockResults = [
  PartyResult({
    partyName: 'Partido Popular',
    partyColor: '#1D84CE',
    result: 130,
  }),
  PartyResult({
    partyName: 'PSOE',
    partyColor: '#EF1C27',
    result: 87,
  }),
  PartyResult({
    partyName: 'Unidos Podemos',
    partyColor: '#672f6c',
    result: 87,
  }),
  PartyResult({
    partyName: 'Ciudadanos',
    partyColor: '#EB6109',
    result: 40,
  })
]

export {
  mockResults
}

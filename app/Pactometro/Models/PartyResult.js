/* @flow */

import t from 'tcomb-form-native'

const colorMap = {
  PODEMOS: '#672f6c',
  PP: '#1D84CE',
  PSOE: '#EF1C27',
  "C'S": '#EB6109',
}

function findColorForPartyName (partyName: string): string {
  if (colorMap.hasOwnProperty(partyName.toUpperCase())) {
    return colorMap[partyName.toUpperCase()]
  }
  return [
    '#FFAA00',
    '#4aae4a',
    '#FA743E',
    '#212765',
    '#b5cf18',
    '#45f5cf'
  ][Math.random()*6|0]
}

const PartyResult = t.struct({
  partyName: t.String,
  partyColor: t.String,
  result: t.Number,
})

function resultMapper (result: Object) {
  return PartyResult({
    partyName: result.partyName,
    result: parseInt(result.result),
    partyColor: findColorForPartyName(result.partyName)
  })
}

export {
  PartyResult,
  resultMapper
}

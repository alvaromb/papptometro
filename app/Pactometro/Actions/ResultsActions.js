/* @flow */

import { generateActionsForFetchWithTypeName } from 'redux-action-api-utils'
import RNFetchBlob from 'react-native-fetch-blob'
import { _ } from 'lodash'
import { xmlToJSON } from '../../Vendor/xmlToJSON'

const getResults = generateActionsForFetchWithTypeName('GET_RESULTS')
export function fetchResults (year?: string = '2016') {
  return function (dispatch: Function) {
    dispatch(getResults.start())
    RNFetchBlob.fetch('GET', `http://rsl00.epimg.net/elecciones/${year}/generales/congreso/index.xml2`)
      .then(response => {
        const xml = response.text()
        const data = xmlToJSON.parseString(xml)
        const antesInicio = data.escrutinio_sitio[0].antes_inicio
        const electionsStarted: boolean = (antesInicio) ? false : true
        if (!electionsStarted) {
          dispatch(getResults.success([]))
        } else {
          const partidos = data.escrutinio_sitio[0].resultados[0].partido
          const processedList = _.chain(partidos)
            .omitBy(p => p.electos[0]._text === 0)
            .map(p => ({
                partyName: p.nombre[0]._text,
                result: p.electos[0]._text,
              })
            )
            .value()
          dispatch(getResults.success(processedList))
        }
      })
  }
}

// Old version parsing Politikon website
// RNFetchBlob.fetch('GET', 'http://politikon.es/elecciones/')
//   .then(response => {
//     const html = response.text().replace(/([^;])\n/g, '$1')
//     // Not very proud of this...
//     const list = html.match(/Resultados:(.*?)<\/ul>/g)
//     if (list.length) {
//       const innerList = list[0]
//         .replace(/Resultados:<ul>/g, '')
//         .replace(/<\/ul>/g, '')
//         .split(/<li>(.*?)<\/li>/g)
//       const processedList = _.chain(innerList)
//         .omitBy(v => v === '')
//         .map(v => ({
//             partyName: v.substring(0, v.indexOf(':')),
//             result: v.substring(v.indexOf(':'), v.indexOf(' esc')).slice(1).trim()
//           })
//         )
//         .value()
//       dispatch(getResults.success(processedList))
//     } else {
//       dispatch(getResults.failure())
//     }
//   })

/* @flow */

import React from 'react'
import {
  View,
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
import { fetchResults } from '../Actions/ResultsActions'
import BarSum from './BarSum'
import TotalCounter from './TotalCounter'
import PartySelectBox from './PartySelectBox'
import { PAP_GREY } from '../../Colors'

class Pactometro extends React.Component {

  componentDidMount () {
    this.props.dispatch(fetchResults())
  }

  _renderPartyResults () {
    let results = []
    let key = 0
    this.props.results.payload.map(result => {
      results.push(
        <PartySelectBox key={key} result={result} />
      )
      key = key + 1
    })
    return results
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.barSumContainer}>
            <BarSum />
          </View>
          <View style={styles.totalContainer}>
            <TotalCounter />
          </View>
        </View>
        <View style={styles.bottomContainer}>
          {this._renderPartyResults()}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PAP_GREY,
  },
  topContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  barSumContainer: {
    flex: 1,
  },
  totalContainer: {
    width: 350,
  },
  bottomContainer: {
    padding: 15,
    height: 280,
    backgroundColor: PAP_GREY,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})

export default connect(state => ({
  results: state.results
}))(Pactometro)

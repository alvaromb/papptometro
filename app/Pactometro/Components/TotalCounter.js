/* @flow */

import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
import { PAP_DARK_GREY } from '../../Colors'

class TotalCounter extends React.Component {
  _renderAbsoluteMajority () {
    if (this.props.calculation.total >= 176) {
      return (
        <View style={{padding: 10}}>
          <Text style={styles.majAbs}>
            {[
              'Mayoría absoluta!',
              'Gobierno is coming',
              'Más os vale que esto sume',
              'Fumata blanca',
              'Habemus investidura',
              'Mayoría! Si no se llega a un acuerdo sobre el presidente, proponemos a Revilla'
            ][Math.random()*6|0]}
          </Text>
        </View>
      )
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.total}>
          {this.props.calculation.total}
        </Text>
        {this._renderAbsoluteMajority()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    margin: 30,
  },
  total: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginTop: 40,
    color: PAP_DARK_GREY,
    fontSize: 122,
    fontWeight: 'bold',
  },
  majAbs: {
    color: PAP_DARK_GREY,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    textAlign: 'center',
  }
})

export default connect(state => ({
  calculation: state.calculation
}))(TotalCounter)

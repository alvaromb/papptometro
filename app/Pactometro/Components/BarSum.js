/* @flow */

import React from 'react'
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Animation,
  PixelRatio,
} from 'react-native'
import { connect } from 'react-redux'
import { fetchResults } from '../Actions/ResultsActions'
import BarParty from './BarParty'
import { PAP_ALT_RED, PAP_RED, PAP_WHITE } from '../../Colors'

class BarSum extends React.Component {
  barWidth: number;
  state: Object;

  constructor (props: Object) {
    super(props)
    this.state = {
      barWidth: 0
    }
  }

  _renderBarCalculation () {
    let bars = []
    let i = 0
    this.props.results.payload.forEach(party => {
      bars.push(
        <BarParty key={`bar${i}`}
          result={party}
          barWidth={this.state.barWidth}
        />
      )
      i = i + 1
    })
    return bars
  }

  render () {
    return (
      <View style={styles.barContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity style={styles.update}
            onPress={() => this.props.dispatch(fetchResults())}>
            <Text style={styles.updateText}>
              Actualizar datos
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.update2015}
            onPress={() => this.props.dispatch(fetchResults('2015'))}>
            <Text style={styles.updateText2015}>
              Datos 2015
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bar} onLayout={event => {
            this.setState({barWidth: event.nativeEvent.layout.width})
          }}>
          {this._renderBarCalculation()}
        </View>
        <View style={styles.about}>
          <Text>
            El Papptómetro es un experimento de APSL.net, con la ayuda de Politikon.es
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  barContainer: {
    flex: 1,
    padding: 30,
  },
  bar: {
    flexDirection: 'row',
    height: 120,
    marginTop: 50,
    backgroundColor: 'white',
  },
  update: {
    height: 64,
    width: 200,
    borderWidth: 1 / PixelRatio.get(),
    borderRadius: 32,
    borderColor: PAP_RED,
    backgroundColor: PAP_ALT_RED,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  updateText: {
    color: PAP_WHITE,
    fontSize: 20,
    fontWeight: '500',
  },
  update2015: {
    height: 64,
    width: 200,
    borderWidth: 1 / PixelRatio.get(),
    borderRadius: 32,
    borderColor: PAP_RED,
    backgroundColor: PAP_WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  updateText2015: {
    color: PAP_ALT_RED,
    fontSize: 20,
    fontWeight: '500',
  },
  about: {
    paddingTop: 10,
  }
})

export default connect(state => ({
  results: state.results,
}))(BarSum)

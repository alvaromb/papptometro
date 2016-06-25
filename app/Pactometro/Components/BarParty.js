/* @flow */

import React, { PropTypes } from 'react'
import {
  View,
  LayoutAnimation,
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
import { PartyResult } from '../Models/PartyResult'
import { _ } from 'lodash'

class BarParty extends React.Component {
  state: Object;

  static propTypes = {
    barWidth: PropTypes.number.isRequired,
    result: PropTypes.instanceOf(PartyResult).isRequired,
  };

  render () {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
    let width = 0
    if (this.props.isSelected) {
      width = Math.ceil((this.props.result.result * this.props.barWidth) / 350)
    }
    return (
      <View
        style={{
          backgroundColor: this.props.result.partyColor,
          width: width,
          height: 120,
        }}
      />
    )
  }
}

export default connect((state, props) => ({
  isSelected: _.find(state.calculation.selectedParties, props.result)
}))(BarParty)

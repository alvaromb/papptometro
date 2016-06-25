/* @flow */

import React, { PropTypes } from 'react'
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
import { addPartyToCoalition, removePartyFromCoalition } from '../Actions/CalculationActions'
import { PartyResult } from '../Models/PartyResult'
import { PAP_DARK_GREY, PAP_WHITE } from '../../Colors'
import { _ } from 'lodash'

class PartySelectBox extends React.Component {
  state: Object;
  addParty: Function;

  static propTypes = {
    result: PropTypes.instanceOf(PartyResult).isRequired,
  };

  constructor (props: Object) {
    super(props)
    this.addParty = this._addParty.bind(this)
  }

  _addParty () {
    if (this.props.isSelected) {
      this.props.dispatch(removePartyFromCoalition(this.props.result))
    } else {
      this.props.dispatch(addPartyToCoalition(this.props.result))
    }
  }

  render () {
    const { result } = this.props
    return (
      <TouchableOpacity style={styles.topContainer} onPress={this.addParty}>
        <View style={styles.container}>
          <View style={[styles.partyContainer, {backgroundColor: result.partyColor}]} />
          <View style={styles.resultsContainer}>
            <Text style={styles.resultText}>
              {result.result}
            </Text>
          </View>
        </View>
        <View style={styles.nameContaier}>
          <Text style={styles.name}>
            {result.partyName}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  topContainer: {
    width: 160,
    height: 110,
    margin: 10,
  },
  nameContaier: {
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    textAlign: 'center',
    color: PAP_DARK_GREY,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    width: 160,
    height: 80,
    flexDirection: 'row',
  },
  partyContainer: {
    flex: 1,
  },
  resultsContainer: {
    flex: 1,
    backgroundColor: PAP_DARK_GREY,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultText: {
    color: PAP_WHITE,
    fontSize: 26,
    fontWeight: '500',
  }
})

export default connect((state, props) => ({
  isSelected: _.find(state.calculation.selectedParties, props.result)
}))(PartySelectBox)

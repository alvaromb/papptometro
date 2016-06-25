/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry, UIManager } from 'react-native'
import { Provider } from 'react-redux'
import { store } from './app/Stores'
import App from './app/App'

class papptometro extends Component {
  componentDidMount () {
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true)
  }

  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('papptometro', () => papptometro)

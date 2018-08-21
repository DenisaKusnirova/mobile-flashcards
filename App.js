import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import flashCardsReducer from './reducers'
import { Constants } from 'expo'
import Navigator from './components/Navigator'
import asyncStorage from './middleware/asyncStorage'
import logger from './middleware/logger'

const FlashcardsStatusBar = ({ backgroundColor, ...props }) => (
  <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(flashCardsReducer, applyMiddleware(logger))}>
        <View style={{ flex: 1 }}>
          <FlashcardsStatusBar backgroundColor={'#262626'} barStyle='light-content' />
          <Navigator />
        </View>
      </Provider>
    );
  }
}


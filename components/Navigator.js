import React from 'react'
import { createStackNavigator } from 'react-navigation'
import Dashboard from './Dashboard'
import IndividualDeck from './IndividualDeck'
import NewDeck from './NewDeck'
import NewQuestion from './NewQuestion'
import QuizView from './QuizView'

const Navigator = createStackNavigator(
  {
    Dashboard: Dashboard,
    IndividualDeck: IndividualDeck,
    NewDeck: NewDeck,
    NewQuestion: NewQuestion,
    QuizView: QuizView,
  },
  {
    initialRouteName: 'Dashboard',
  }
)

export default Navigator
import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native'
import { connect } from 'react-redux'
import { resetScore } from '../actions/scoreActions'
import { clearLocalNotification, setLocalNotification } from '../notification'

class IndividualDeck extends Component {
  static navigationOptions = {
    title: 'Udacicard'
  }
  getnumOfCards = () => {
    const { decks } = this.props
    const itemTitle = this.props.navigation.getParam('itemTitle', 'Undefined')

    if (decks[itemTitle].questions.length === 0) {
      return 'No cards'
    } else if (decks[itemTitle].questions.length === 1) {
      return '1 card'
    } else if (decks[itemTitle].questions.length > 1) {
      return decks[itemTitle].questions.length + ' cards'
    }
  }
  startQuiz = () => {
    const itemTitle = this.props.navigation.getParam('itemTitle', 'Undefined')

    this.props.resetScore()
    clearLocalNotification()
      .then(setLocalNotification)
    this.props.navigation.navigate('QuizView', { title: itemTitle })
  }

  render() {
    const { decks } = this.props
    const itemTitle = this.props.navigation.getParam('itemTitle', 'Undefined')

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Dashboard')}>
        </TouchableOpacity>
        <View>
          <Text style={styles.deckTitle}>{itemTitle}</Text>
          <Text style={styles.deckSubTitle}>{this.getnumOfCards()}</Text>
          {decks[itemTitle].questions.length === 0 &&
            <Text style={styles.note}>
              Please add a card to start the quiz
            </Text>
          }
        </View>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity
            style={styles.buttonOne}
            onPress={() => {this.props.navigation.navigate('NewQuestion', { title: itemTitle })}}
          >
            <Text style={styles.buttonText}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={decks[itemTitle].questions.length === 0 && true}
            style={styles.buttonTwo}
            onPress={() =>  this.startQuiz()}
          >
            <Text style={styles.buttonText}>Start Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f3f3',
    flex: 1,
    justifyContent: 'space-between',
    padding: 18,
    paddingBottom: 36
  },
  deckTitle: {
    fontSize: 56,
    padding: 4,
    color: '#333333',
    textAlign: 'center'
  },
  deckSubTitle: {
    fontSize: 32,
    padding: 4,
    color: '#333333',
    textAlign: 'center',
    paddingTop: 12
  },
  note: {
    fontSize: 20,
    padding: 4,
    color: '#ec5146',
    textAlign: 'center',
    paddingTop: 20
  },
  buttonOne: {
    borderStyle: 'solid',
    borderColor: '#bfbfbf',
    borderWidth: 1,
    borderRadius: 4,
    width: 260,
    height: 50,
    justifyContent: 'center',
    marginBottom: 12
  },
  buttonTwo: {
    backgroundColor: '#fcdc80',
    borderRadius: 4,
    width: 260,
    height: 50,
    justifyContent: 'center'
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 22
  }
})

const mapStateToProps = ({ decks }) => ({
  decks
})

export default connect(mapStateToProps, { resetScore })(IndividualDeck)
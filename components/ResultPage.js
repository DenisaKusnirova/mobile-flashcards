import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, DeviceEventEmitter } from 'react-native'
import PercentageCircle from 'react-native-percentage-circle'
import { connect } from 'react-redux'
import { resetScore } from '../actions/scoreActions'
import { RESET_INDEX_EVENT } from './QuizView';

class ResultPage extends Component {
  static navigationOptions = { header: null }

  restartQuiz = () => {
    DeviceEventEmitter.emit(RESET_INDEX_EVENT, {})
    this.props.navigation.goBack()
    this.props.resetScore()
  }

  render() {
    const { correctAnswers, incorrectAnswers } = this.props
    const correct = correctAnswers.length
    const incorrect = incorrectAnswers.length
    const total = incorrect + correct
    const percentage = (100 / total) * correct

    return (
      <View style={styles.container}>
        <Text style={{ paddingBottom: 10, fontSize: 28, textAlign: 'center' }}>Your score</Text>
        <Text style={[styles.text, { paddingBottom: 6 }]}>Correct answers: {correct}</Text>
        <Text style={[styles.text, { paddingBottom: 6 }]}>Incorrect answers: {incorrect}</Text>
        <Text style={[styles.text, { paddingBottom: 20 }]}>Total: {total}</Text>
        <PercentageCircle radius={35} percent={percentage} color={"#3498db"} />
        <View style={{marginTop: 100}}>
          <TouchableOpacity 
            style={styles.buttonOne}
            onPress={() => this.restartQuiz()}
          >
            <Text style={styles.buttonText}>Restart Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.buttonTwo}
            onPress={() => this.props.navigation.navigate('IndividualDeck')}
          >
            <Text style={styles.buttonText}>Back to Deck</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 22,
    textAlign: 'center'
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

const mapStateToProps = ({ score, decks }) => {
  const { correctAnswers } = score
  const { incorrectAnswers } = score

  return {
    correctAnswers,
    incorrectAnswers,
    decks
  }
}

export default connect(mapStateToProps, {resetScore})(ResultPage)

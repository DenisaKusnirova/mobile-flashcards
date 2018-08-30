import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import ResultPage from './ResultPage'
import { saveCorrectAnswer, saveIncorrectAnswer } from '../actions/scoreActions'

class QuizView extends Component {
  static navigationOptions = {
    headerTitle: 'Quiz'
  }
  state = {
    index: 0,
    showQuestion: true,
  }
  renderNextQuestion = () => {
    this.setState((prevState) => {
      return {
        index: prevState.index + 1,
        showQuestion: true
      }
    })
  }
  changeState = () => {
    this.setState((prevState) => ({ showQuestion: !prevState.showQuestion }))
  }
  saveCorrectAnswer = () => {
    const { decks } = this.props
    const title = this.props.navigation.state.params.title
    this.props.saveCorrectAnswer(decks[title].questions[this.state.index].question)
    this.renderNextQuestion()
  }
  saveIncorrectAnswer = () => {
    const { decks } = this.props
    const title = this.props.navigation.state.params.title
    this.props.saveIncorrectAnswer(decks[title].questions[this.state.index].question)
    this.renderNextQuestion()
  }

  render() {
    const { decks } = this.props
    const title = this.props.navigation.state.params.title
    const questionIndex = this.state.index + 1

    if (questionIndex > decks[title].questions.length) {
      return <ResultPage />
    }

    return (
      <View style={styles.container}>
        <Text>{questionIndex + '/' + decks[title].questions.length}</Text>
        <View>
          <Text style={styles.questionText}>
            {this.state.showQuestion
              ? decks[title].questions[this.state.index].question
              : decks[title].questions[this.state.index].answer
            }
          </Text>
          <TouchableOpacity
            style={{ paddingTop: 18 }}
            onPress={() => { this.changeState() }}
          >
            <Text style={styles.answer}>{this.state.showQuestion ? 'Answer' : 'Question'}</Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.buttonOne}
            onPress={() => this.saveCorrectAnswer()}
          >
            <Text style={styles.buttonText}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonTwo}
            onPress={() => this.saveIncorrectAnswer()}
          >
            <Text style={styles.buttonText}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f3f3',
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    padding: 18,
    paddingBottom: 36
  },
  questionText: {
    fontSize: 28,
    color: '#333333',
    textAlign: 'center'
  },
  answer: {
    fontSize: 20,
    textAlign: 'center',
    color: '#ff471a'
  },
  buttonOne: {
    backgroundColor: '#bfff80',
    borderRadius: 4,
    width: 260,
    height: 50,
    justifyContent: 'center',
    marginBottom: 12
  },
  buttonTwo: {
    backgroundColor: '#ec5146',
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

const mapStateToProps = (decks) => {
  return decks
}

export default connect(mapStateToProps, { saveCorrectAnswer, saveIncorrectAnswer })(QuizView) 
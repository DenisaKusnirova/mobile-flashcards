import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class QuizView extends Component {
  static navigationOptions = {
    title: 'Quiz'
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.questionText}>Does React Native work with Android?</Text>
          <TouchableOpacity style={{paddingTop: 30}}>
            <Text style={styles.answer}>Answer</Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center', paddingTop: 100}}>
          <TouchableOpacity style={styles.buttonOne}>
            <Text style={styles.buttonText}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonTwo}>
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
    flex: 1,
    justifyContent: 'center'
  },
  questionText: {
    fontSize: 50,
    padding: 4,
    color: '#333333',
    textAlign: 'center'
  },
  answer: {
    fontSize: 24,
    padding: 4,
    color: '#ec5146',
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

export default QuizView
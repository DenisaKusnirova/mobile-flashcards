import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PercentageCircle from 'react-native-percentage-circle'
import { connect } from 'react-redux'

class ResultPage extends Component {
  render() {
    const { correctAnswers, incorrectAnswers } = this.props
    const correct = correctAnswers.length
    const incorrect = incorrectAnswers.length
    const total =  incorrect + correct
    const percentage = (100 / total) * correct

    return (
      <View style={styles.container}>
        <Text style={{ paddingBottom: 10, fontSize: 28, textAlign: 'center'}}>Your score</Text>
        <Text style={[styles.text, { paddingBottom: 6}]}>Correct answers: {correct}</Text>
        <Text style={[styles.text, { paddingBottom: 6}]}>Incorrect answers: {incorrect}</Text>
        <Text style={[styles.text, { paddingBottom: 20}]}>Total: {total}</Text>
        <PercentageCircle radius={35} percent={percentage} color={"#3498db"} />
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
    padding: 18
  },
  text: {
    fontSize: 22,
    textAlign: 'center'
  }
})

const mapStateToProps = ({ score }) => {
  const { correctAnswers } = score
  const { incorrectAnswers } = score

  return {
    correctAnswers,
    incorrectAnswers
  }
}

export default connect(mapStateToProps)(ResultPage)

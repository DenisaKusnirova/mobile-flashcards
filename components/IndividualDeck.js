import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class IndividualDeck extends Component {
  static navigationOptions = {
    title: 'Udacicard',
  }

  render() {
    const { itemTitle, numOfQuestions } = this.props.navigation.state.params

    return (
      <View style={styles.container}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Dashboard')}>
      </TouchableOpacity>
        <View>
          <Text style={styles.deckTitle}>{itemTitle}</Text>
          <Text style={styles.deckSubTitle}>{numOfQuestions}</Text>
        </View>
        <View style={{alignItems: 'center', paddingTop: 140}}>
          <TouchableOpacity 
            style={styles.buttonOne}
            onPress={() => {this.props.navigation.navigate('NewQuestion')}}  
          >
            <Text style={styles.buttonText}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.buttonTwo}
            onPress={() => {this.props.navigation.navigate('QuizView')}}
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
    justifyContent: 'center'
  },
  deckTitle: {
    fontSize: 60,
    padding: 4,
    color: '#333333',
    textAlign: 'center'
  },
  deckSubTitle: {
    fontSize: 34,
    padding: 4,
    color: '#333333',
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

const mapStateToProps = (state, { navigation }) => {
  const { itemTitle } = navigation.state.params
   return {
    itemTitle
  }
}

export default connect(mapStateToProps)(IndividualDeck)
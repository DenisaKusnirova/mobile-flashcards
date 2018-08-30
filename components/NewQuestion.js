import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { addCardToDeck } from '../actions'

class NewDeck extends Component {
  state = {
    question: '',
    answer: ''
  }
  static navigationOptions = {
    title: 'Add Card'
  }
  addCard = () => {
    const { question, answer } = this.state
    const title = this.props.navigation.state.params.title
 
    this.props.addCardToDeck(title, { question, answer })
    this.props.navigation.navigate('IndividualDeck')
  }
  render() {
    return (
      <View style={styles.container}>
          <TextInput
            style={styles.input}
            onChangeText={(question) => this.setState({ question })}
            value={this.state.question}
            placeholder="Enter your new question here"
          />
          <TextInput
            style={styles.input}
            onChangeText={(answer) => this.setState({ answer })}
            value={this.state.answer}
            placeholder="Enter answer here"
          />
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity 
              style={styles.button}
              onPress={this.addCard}
            >
              <Text style={styles.buttonText}>Submit</Text>
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
  },
  header: {
    fontSize: 20,
    padding: 24,
    color: '#333333',
  },
  newDeckTitle: {
    fontSize: 34,
    padding: 4,
    color: '#333333',
    textAlign: 'center'
  },
  input: {
    height: 50,
    borderWidth: 1,
    marginTop: 40,
    marginLeft: 12,
    marginRight: 12,
    padding: 12
  },
  button: {
    marginTop: 40,
    backgroundColor: '#fcdc80',
    borderRadius: 4,
    width: 260,
    height: 50,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 22
  }
})

export default connect(null, { addCardToDeck })(NewDeck)
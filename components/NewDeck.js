import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { saveDeckTitle } from '../actions'

class NewDeck extends Component {
  state = {
    text: ''
  }
  static navigationOptions = {
    title: 'Udacicard'
  }
  saveNewDeck = () => {
    this.props.saveDeckTitle(this.state.text)
    this.props.navigation.navigate('Dashboard')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{justifyContent: 'center', flex: 1}}>
          <Text style={styles.newDeckTitle}>
            What is the title of your new deck?
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
            placeholder="New deck title"
          />
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity 
              style={styles.button}
              onPress={this.saveNewDeck}
            >
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
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
    marginTop: 80,
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 80,
    padding: 12
  },
  button: {
    backgroundColor: '#fcdc80',
    borderRadius: 4,
    width: 320,
    height: 50,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 22
  }
})

export default connect(null, { saveDeckTitle })(NewDeck)
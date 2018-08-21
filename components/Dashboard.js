import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { receiveAllDecks } from '../actions'

class Dashboard extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    const { decksKeys, decks } = this.props

    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={styles.header}>Decks</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => { this.props.navigation.navigate('NewDeck') }}
          >
            <Text style={styles.buttonText}>Add New Deck</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={decksKeys}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this.props.navigation.navigate(
              'IndividualDeck',
              { itemTitle: item, 
                numOfQuestions: Object.keys(decks[item].questions).length }
            )}>
              <View style={styles.deckContainer}>
                <Text style={styles.deckTitle}>{item}</Text>
                <Text style={styles.deckSubTitle}>
                  {Object.keys(decks[item].questions).length}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
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
    fontSize: 32,
    padding: 24,
    color: '#333333'
  },
  deckContainer: {
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 50,
    margin: 12,
    marginLeft: 16,
    marginRight: 16,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 4,
  },
  deckTitle: {
    fontSize: 32,
    padding: 4,
    color: '#333333',
    textAlign: 'center'
  },
  deckSubTitle: {
    fontSize: 22,
    padding: 4,
    color: '#333333',
    textAlign: 'center'
  },
  button: {
    borderStyle: 'solid',
    borderColor: '#bfbfbf',
    borderWidth: 1,
    borderRadius: 4,
    width: 120,
    height: 42,
    padding: 12,
    marginRight: 20,
    justifyContent: 'center'
  },
})

const mapStateToProps = ({ decks }) => ({
  decksKeys: Object.keys(decks),
  decks
})

export default connect(mapStateToProps)(Dashboard)


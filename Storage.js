import { AsyncStorage } from 'react-native'

const FLASHCARDS_KEY = 'FLASHCARDS_KEY'

export const clearStorage = () => {
  AsyncStorage.removeItem(FLASHCARDS_KEY)
}

export const getData = () => {
  return AsyncStorage.getItem(FLASHCARDS_KEY)
    .then((data) => {
      console.log('Get data', data)
      if (data) {
        return JSON.parse(data)
      }
      return null
    })
}

export const saveDeckTitle = (title) => {
  const newData = {
    [title]: {
      title,
      questions: []
    }
  }
  AsyncStorage.mergeItem(FLASHCARDS_KEY, JSON.stringify(newData))
}

export const addCardToDeck = (title, card) => {
  const newCard = {
    [title]: {
      questions: [
        card
      ]
    }
  }
  AsyncStorage.mergeItem(FLASHCARDS_KEY, JSON.stringify(newCard))
}


export const RECEIVE_ALL_DECKS = 'RECEIVE_ALL_DECKS'
export const SAVE_DECK_TITLE = 'SAVE_DECK_TITLE'
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'
export const LOAD_DATA_FROM_STORAGE = 'LOAD_DATA_FROM_STORAGE'

export const loadDataFromStorage = (data) => {
  return {
    type: LOAD_DATA_FROM_STORAGE,
    data
  }
}

export const receiveAllDecks = (decks) => {
  return {
    type: RECEIVE_ALL_DECKS,
    decks
  }
}

export const saveDeckTitle = (title) => {
  return {
    type: SAVE_DECK_TITLE,
    title
  }
}
export const addCardToDeck = (title, card) => {
  return {
    type: ADD_CARD_TO_DECK,
    title,
    card
  }
}
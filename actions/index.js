export const RECEIVE_ALL_DECKS = 'RECEIVE_ALL_DECKS'
export const RECEIVE_DECK = 'RECEIVE_DECK'
export const SAVE_DECK_TITLE = 'SAVE_DECK_TITLE'
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'

export const receiveAllDecks = (decks) => {
  return {
    type: RECEIVE_ALL_DECKS,
    decks
  }
}

export const receiveDeck = (id) => {
  return {
    type: RECEIVE_DECK,
    id
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
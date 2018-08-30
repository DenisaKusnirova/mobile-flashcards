import decksReducer from './decksReducer'
import { combineReducers } from 'redux'
import scoreReducer from './scoreReducer'

const flashCardsReducer = combineReducers({
  decks: decksReducer,
  score: scoreReducer
})

export default flashCardsReducer
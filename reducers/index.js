import decksReducer from './decksReducer'
import { combineReducers } from 'redux'

const flashCardsReducer = combineReducers({
    decks: decksReducer
})

export default flashCardsReducer
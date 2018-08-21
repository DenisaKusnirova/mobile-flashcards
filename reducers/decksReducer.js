import {
	RECEIVE_ALL_DECKS,
	RECEIVE_DECK,
	SAVE_DECK_TITLE,
	ADD_CARD_TO_DECK
} from '../actions'

let data = {
	React: {
		title: 'React',
		questions: [
			{
				question: 'What is React?',
				answer: 'A library for managing user interfaces'
			},
			{
				question: 'Where do you make Ajax requests in React?',
				answer: 'The componentDidMount lifecycle event'
			}
		]
	},
	JavaScript: {
		title: 'JavaScript',
		questions: [
			{
				question: 'What is a closure?',
				answer: 'The combination of a function and the lexical environment within which that function was declared.'
			}
		]
	}
}

export default decksReducer = (state = data, action) => {
	switch (action.type) {
		case RECEIVE_ALL_DECKS:
			return {
				...state,
				...action.decks
			}
		case RECEIVE_DECK:
			return state.map((deck) => deck.id !== action.id)
		case SAVE_DECK_TITLE:
			return {
				...state,
				[action.title]: {
					title: action.title,
					questions: []
				}
			}
		case ADD_CARD_TO_DECK:
			return {
				...state,
				[action.title]: action.card
			}
		default:
			return state
	}
}
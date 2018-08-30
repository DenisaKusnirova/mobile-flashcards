import {
	LOAD_DATA_FROM_STORAGE,
	RECEIVE_ALL_DECKS,
	SAVE_DECK_TITLE,
	ADD_CARD_TO_DECK,
} from '../actions'
import { getData, saveDeckTitle, addCardToDeck } from '../Storage'

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
				answer: 'The combination of a function and the lexical environment within which that function was declared.',
				correct: true
			}
		]
	}
}

export default decksReducer = (state = data, action) => {
	switch (action.type) {
		case LOAD_DATA_FROM_STORAGE:
			const data = action.data
			if (!data) {
				return state
			}
			return {
				...state,
				...data
			}
		case RECEIVE_ALL_DECKS:
			return {
				...state,
				...action.decks
			}
		case SAVE_DECK_TITLE:
			saveDeckTitle(action.title)
			return {
				...state,
				[action.title]: {
					title: action.title,
					questions: []
				}
			}
		case ADD_CARD_TO_DECK:
			addCardToDeck(action.title, action.card)
			return {
				...state,
				[action.title]: { 
					...state[action.title], 
					questions: [
						...state[action.title].questions,
						action.card
					]
				}
			}
		default:
			return state
	}
}
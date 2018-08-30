import { SAVE_CORRECT_ANSWER, SAVE_INCORRECT_ANSWER, RESET_SCORE } from '../actions/scoreActions'

let score = {
  correctAnswers: [],
  incorrectAnswers: []
}

export default scoreReducer = (state = score, action) => {
  switch (action.type) {
    case SAVE_CORRECT_ANSWER:
      return {
        ...state,
        correctAnswers: [ ...state.correctAnswers, action.question ]
      }
    case SAVE_INCORRECT_ANSWER:
      return {
        ...state,
        incorrectAnswers: [ ...state.incorrectAnswers, action.question]
      }
    case RESET_SCORE:
      return {
        correctAnswers: [],
        incorrectAnswers: []
      }
    default:
      return state
  }
}
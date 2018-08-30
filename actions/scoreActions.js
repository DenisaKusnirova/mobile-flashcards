export const SAVE_CORRECT_ANSWER = 'SAVE_CORRECT_ANSWER'
export const SAVE_INCORRECT_ANSWER = 'SAVE_INCORRECT_ANSWER'
export const RESET_SCORE = 'RESET_SCORE'

export const saveCorrectAnswer = (question) => {
  return {
    type: SAVE_CORRECT_ANSWER,
    question
  }
}

export const saveIncorrectAnswer = (question) => {
  return {
    type: SAVE_INCORRECT_ANSWER,
    question
  }
}

export const resetScore = () => {
  return {
    type: RESET_SCORE
  }
}



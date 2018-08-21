import { SAVE_DECK_TITLE, ADD_CARD_TO_DECK } from "../actions";
import { AsyncStorage } from 'react-native'

const KEY_DECK_TITLE = "KEY_DECK_TITLE"

export default store => next => action => {
    let result = next(action)

    switch (action.type) {
        case SAVE_DECK_TITLE:
            // TODO: Impl
            break
        case ADD_CARD_TO_DECK:
            // TODO: Impl
            break
        default:
            break
    }
    return result
}
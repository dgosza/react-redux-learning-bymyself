import { combineReducers } from 'redux'

import { counterReducer } from './Counter'
import { TextReducer } from './Text'

export default combineReducers({
    counter: counterReducer,
    text: TextReducer,
})
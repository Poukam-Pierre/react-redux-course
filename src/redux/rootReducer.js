import { combineReducers } from 'redux'

import icecreamReducer from './icecream/icecreamReducer'

import cakeReducer from './cake/cakeReducer'

const rootReducer = combineReducers({
    icecream: icecreamReducer,
    cake: cakeReducer
})

export default rootReducer

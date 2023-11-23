import { createStore } from 'redux'
// import cakeReducer from './cake/cakeReducer'
import icecreamReducer from './icecream/icecreamReducer'

const store = createStore(icecreamReducer)

export default store

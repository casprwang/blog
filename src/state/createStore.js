import { createStore } from 'redux'
import C from './constants.js'

import rootReducer from './reducers.js'

export default () => createStore(rootReducer)

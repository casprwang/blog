import C from './constants.js'
import { combineReducers } from 'redux'
import initialState from './initialState.js'

const incre = (state=0, action) => {
  if (action.type === C.INCREMENT) {
    return state + 1
  }
  return state
}

const increPost = (state = 4, action) => {
  if(action.type === C.INCREMENT_POST) {
    return state + 4
  }
  return state
}

export default combineReducers({
  count: incre,
  post: increPost
})

import C from "./constants.js"
import { combineReducers } from "redux"
import initialState from "./initialState.js"

const increLink = (state = 16, action) => {
  if (action.type === C.INCREMENT_LINK) {
    return state + 4
  }
  return state
}

const increNote = (state = 8, action) => {
  if (action.type === C.INCREMENT_NOTE) {
    return state + 4
  }
  return state
}

const increBlog = (state = 3, action) => {
  if (action.type === C.INCREMENT_BLOG) {
    return state + 2
  }
  return state
}

const toggle = (
  state = {
    blog: true,
    note: false,
    link: false,
  },
  action,
) => {
  switch (action.type) {
    case C.TOGGLE_BLOG:
      return {
        blog: true,
        note: false,
        link: false,
      }
    case C.TOGGLE_NOTE:
      return {
        blog: false,
        note: true,
        link: false,
      }
    case C.TOGGLE_LINK:
      return {
        blog: false,
        note: false,
        link: true,
      }
    default:
      return state
  }
}

export default combineReducers({
  link: increLink,
  note: increNote,
  blog: increBlog,
  tab: toggle,
})

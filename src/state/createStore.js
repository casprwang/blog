import { createStore } from "redux"

import rootReducer from "./reducers.js"

export default () => createStore(rootReducer)

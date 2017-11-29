import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import { renderToString } from 'react-dom/server'
import createStore from './src/state/createStore'

// exports.replaceRouterComponent = ({ history }) => {
//     const store = createStore()

//     const ConnectedRouterWrapper = ({ children }) => (
//         <Provider store={store}>
//             <Router history={history}>{children}</Router>
//         </Provider>
//     )

//     return ConnectedRouterWrapper
// }


exports.replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents
}) => {
  const sheet = new ServerStyleSheet()
  const store = createStore()

  replaceBodyHTMLString(
    renderToString(
      <Provider store={store}>
        <StyleSheetManager sheet={sheet.instance}>
          {bodyComponent}
        </StyleSheetManager>
      </Provider>
    )
  )

  setHeadComponents([sheet.getStyleElement()])
}

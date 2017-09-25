import React from 'react'
import { Header } from 'theme/containers/Header.js'

class FourOFour extends React.Component {
  render() {
    return (
      <div>
        <Header style={{ marginBottom: 0 }}>
          <div>
            <h1>Page not found</h1>
          </div>
          <p>Try to be smarter next time</p>
        </Header>
      </div>
    )
  }
}

export default FourOFour

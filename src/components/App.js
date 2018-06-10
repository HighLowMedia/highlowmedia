import React, { Component } from 'react'
import '../style/App.css'
import Shape from './Shape'

class App extends Component {
  render() {
    return (
      <div id="app">
        <div id="container-shape">
          <Shape
            shapeName = "logo"
          />
        </div>
      </div>
    )
  }
}

export default App

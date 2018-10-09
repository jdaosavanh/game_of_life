import React, { Component } from 'react'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import store from './store'
import Game from './components/Game/Game'

class App extends Component {

  render () {
    return (
      <Provider store={ store }>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">React game of life</h1>
          </header>
          <Game/>
        </div>
      </Provider>
    )
  }
}

export default App

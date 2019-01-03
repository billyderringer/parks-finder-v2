import React, {Component} from 'react'
import {Provider} from 'react-redux'
import store from '../store/'
import Fullscreen from 'react-full-screen'
import Body from "./body"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: 'tx',
      isFull: false
    }
    this.toggleFull = this.toggleFull.bind(this)
  }

  toggleFull() {
    this.setState({isFull: !this.state.isFull})
  }

  render() {
    return (
      <Provider store={store}>
        <Fullscreen enabled={this.state.isFull}
                    onChange={isFull => this.setState({isFull})}>
          <div className="fullscreen-enabled">
            <Body toggleFull={this.toggleFull}/>
          </div>
        </Fullscreen>
      </Provider>
    )
  }
}

export default App
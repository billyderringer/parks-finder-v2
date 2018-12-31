import React, {Component} from 'react'
import Fullscreen from 'react-full-screen'
import axios from 'axios'
import Header from "./header"
import Body from "./body"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: 'tx',
      isFull: false
    }
    this.toggleFull = this.toggleFull.bind(this)
    this.getParks = this.getParks.bind(this)
  }

  componentDidMount() {
    //this.getParks(this.state.location)
  }

  toggleFull() {
    this.setState({isFull: !this.state.isFull})
    console.log("toggled")
  }

  getParks(location) {
    let urlParks = 'https://api.nps.gov/api/v1/parks?stateCode='
      + location
      + '&api_key=5EB2wQMEMBCeQWwKEw6PXxXQJaxfojCMarMIHbD7'

    let urlCampgrounds = 'https://api.nps.gov/api/v1/campgrounds?stateCode='
      + location
      + '&api_key=5EB2wQMEMBCeQWwKEw6PXxXQJaxfojCMarMIHbD7'

    axios.get(urlParks)
      .then(res => {
        console.log(res)
        axios.get(urlCampgrounds)
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            console.log(err)
          })
      })
      .catch(err => {
        console.log(err)
      })

  }

  render() {
    return (
      <Fullscreen enabled={this.state.isFull}
                  onChange={isFull => this.setState({isFull})}>
        <div className="fullscreen-enabled">
          <Body toggleFull={this.toggleFull}/>
        </div>
      </Fullscreen>
    )
  }
}

export default App
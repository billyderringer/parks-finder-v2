import React, {Component} from 'react'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: 'tx'
    }
    this.getParks = this.getParks.bind(this);
  }

  componentDidMount() {
    this.getParks(this.state.location)
  }

  getParks(location) {
    let url = 'https://api.nps.gov/api/v1/parks?stateCode='
      + location
      + '&api_key=5EB2wQMEMBCeQWwKEw6PXxXQJaxfojCMarMIHbD7'

    axios.get(url)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })

  }

  render() {
    return (
      <div>
        <h1>New React App</h1>
      </div>
    )
  }
}

export default App
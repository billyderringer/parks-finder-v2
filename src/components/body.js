import React, {Component} from 'react'
import Loader from "./loader"
import Launch from "./stages/launch"
import Error from "./stages/error"
import Location from "./stages/location"

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: 'launch'
    }
    this.bodyRender = this.bodyRender.bind(this)
  }

  bodyRender(stage) {
    return (
      (() => {
        switch (stage) {
          case 'launch':
            return <Launch />
          case 'location':
            return <Location />
          default:
            return <Error />
        }
      })()
    )
  }

  render() {

    return (
      <React.Fragment>
        {this.bodyRender(this.state.stage)}
      </React.Fragment>
    )
  }
}

export default Body
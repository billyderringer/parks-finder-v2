import React, {Component} from 'react'
import Loader from "./loader"
import Launch from "./stages/launch"
import Error from "./stages/error"
import Location from "./stages/location"
import Header from "./header";

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
            return <React.Fragment>
              <Header toggleFull={this.props.toggleFull}/>
              <Launch />
            </React.Fragment>
          case 'location':
            return <React.Fragment>
              <Header toggleFull={this.props.toggleFull}
                      customClass="bg-blue"/>
              <Location />
            </React.Fragment>
          default:
            return <React.Fragment>
              <Header toggleFull={this.props.toggleFull}/>
              <Error />
            </React.Fragment>
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
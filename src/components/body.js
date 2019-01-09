import React, {Component} from 'react'
import {connect} from 'react-redux'
import Launch from "./stages/launch"
import Error from "./stages/error"
import Location from "./stages/location"
import Header from "./header";
import LoadingData from "./stages/loadingData"
import Results from "./stages/results"

class Body extends Component {
  constructor(props) {
    super(props);
    this.bodyRender = this.bodyRender.bind(this)
  }

  componentDidMount() {
    setTimeout(() =>
        this.props.updateStage('location')
      , 2000)
  }

  //Used for switching page layouts
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
          case 'data':
            return <React.Fragment>
              <Header toggleFull={this.props.toggleFull}/>
              <LoadingData />
            </React.Fragment>
          case 'results':
            return <React.Fragment>
              <Header toggleFull={this.props.toggleFull}/>
              <Results />
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
        {this.bodyRender(this.props.states.currentStage)}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    states: state.usStatesReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateStage: (stage) => {
      const action = {type: 'UPDATE_STAGE', stage}
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body)
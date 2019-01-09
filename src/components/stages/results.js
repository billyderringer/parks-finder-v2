import React, {Component} from 'react'
import {connect} from 'react-redux'

class Results extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const props = this.props.states
    const renderParks = props.currentLocationData ?
      props.currentLocationData.map((park, i) => {
        return <div key={i}>
          <img src={park.images[0]?
            park.images[0].url + "?width=150&quality=90"
            :"https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/EC9EA7D1-1DD8-B71B-0B1C5E81368CC585.jpg?width=150&quality=90"} alt="Not found"/>
          <h2>{park.fullName}</h2>
          <a href={park.url} target="_blank">Visit Site</a>
        </div>
      }):
      //error receiving data
      this.props.updateStage('error')
    return (
      <section className="app-results">
        {renderParks}
      </section>
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
    },
    updateLocation: (location) => {
      const action = {type: 'UPDATE_LOCATION', location}
      dispatch(action)
    },
    updateData: (data, stage) => {
      const action = {type: 'UPDATE_DATA', data, stage}
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results)
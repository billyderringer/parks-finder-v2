import React, {Component} from 'react'
import {connect} from 'react-redux'
import Footer from "../footer"
import ApiData from '../../api/apiData'

const api = new ApiData()

class Location extends Component{
  constructor(props) {
    super(props)
    this.state = {
      location: {
        code: this.props.states.currentLocation.code,
        name: this.props.states.currentLocation.name
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.updateCBData = this.updateCBData.bind(this)
  }

  handleChange({target}){
    const index = target.selectedIndex
    this.props.updateLocation(target[index])
    this.setState({location: target[index]})
  }

  handleSubmit(){
    const props = this.props.states
    //Main url goes here
    const parksUrl = {
        type: 'parks',
        url: 'https://api.nps.gov/api/v1/parks?stateCode='
          + props.currentLocation.code
          + '&fields=images&api_key='
          + process.env.API_KEY
    }
    //All endpoints to filter into main url goes here as array.
    //Must have type and url
    const filterUrls = [
      {
        type: 'campgrounds',
        url: 'https://api.nps.gov/api/v1/campgrounds?stateCode='
          + props.currentLocation.code
          + '&api_key='
          + process.env.API_KEY
      }
      ]

    api.getData(parksUrl, filterUrls, this.updateCBData)
  }

  updateCBData(data){
    this.props.updateData(data, 'results')
  }

  render() {
    return (
      <React.Fragment>
        <section className="app-loader bg-orange center-all">
          <select value={this.state.location.name}
                  onChange={this.handleChange}>
            {this.props.states.usStates.map((data,i)=>
              <option
                key={i}
                label={data.name}
                value={data.code}>
                {data.name}
              </option>
            )}
          </select>
          <button id="btn-state-search"
                  onClick={this.handleSubmit.bind(this)}>
            SEARCH
          </button>
        </section>
        <Footer footerClass="bg-blue center-all"
                stageTextClass="status-white"
                message="Choose Location " />
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

export default connect(mapStateToProps, mapDispatchToProps)(Location)
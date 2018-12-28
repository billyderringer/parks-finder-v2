import React, {Component} from 'react'
import CompassIcon from "./compassIcon"

class Header extends Component {
  render() {
    return (
      <header>
        <CompassIcon customClass="header-icon"
                     margin="0 15px 0 0"
                     iconDimensions="15vw"/>
        <h3>National Parks Finder</h3>
      </header>
    )
  }
}

export default Header
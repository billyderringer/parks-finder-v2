import React from 'react'
import CompassIcon from "./compassIcon"
import FullscreenIcon from "./fullscreenIcon"

function Header(props) {
  return (
    <header className={props.customClass}>{/*className used to change bg primarily*/}
      <div className="header-left center-all">
        <CompassIcon customClass="header-icon"
                     margin="0 15px 0 0"
                     iconDimensions="7vh"/>
        <h3>National Parks Finder</h3>
      </div>
      <div className="header-right">
        <button onClick={props.toggleFull}
                className="bg-blue">
          <FullscreenIcon customClass="fill-white"
                          iconDimensions="2vh"/>
          </button>
      </div>
    </header>
  )
}

export default Header
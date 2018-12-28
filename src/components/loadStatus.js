import React from 'react'
import Dots from "./stages/dots"

function LoadStatus(props) {
  return (
    <div className="center-all">
      <h6 className={props.customClass}>
        {props.message}
      </h6>
      <Dots />
    </div>

  )
}

export default LoadStatus
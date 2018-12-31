import React from 'react'
import DotsLoader from "./stages/dotsLoader"

function LoadStatus(props) {
  return (
    <div className="center-all">
      <h6 className={props.customClass}>
        {props.message}
      </h6>
      <DotsLoader />
    </div>

  )
}

export default LoadStatus
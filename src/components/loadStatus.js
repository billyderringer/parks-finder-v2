import React from 'react'

function LoadStatus(props) {
  return (
    <h6 className={props.customClass}>
      {props.message}
    </h6>
  )
}

export default LoadStatus
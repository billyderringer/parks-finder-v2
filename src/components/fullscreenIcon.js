import React from 'react'

function FullscreenIcon(props) {
  return (
    <svg width={props.iconDimensions}
         height={props.iconDimensions}
         className={props.customClass}
         viewBox="0 0 33 33">
      <g id="Layer_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer"/>
        <polygon className={props.customClass}
                 points="26,4 4,26 0,22 0,33 10,33 6,29 29,6 33,10 33,0 22,0 "/>
      </g>
    </svg>
  )
}

export default FullscreenIcon
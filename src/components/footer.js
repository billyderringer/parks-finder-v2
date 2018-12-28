import React from 'react'
import LoadStatus from "./loadStatus"

function Footer (props) {
  return (
    <footer className={props.footerClass}>
      <LoadStatus customClass={props.stageTextClass} message={props.message}/>
    </footer>
  )
}

export default Footer
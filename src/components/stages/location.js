import React from 'react'
import Loader from "../loader"
import Footer from "../footer"

function Location(props) {
  return (
    <React.Fragment>
      <section className="app-loader bg-orange center-all">

      </section>
      <Footer footerClass="bg-blue center-all"
              stageTextClass="status-white"
              message="Choose Location" />
    </React.Fragment>
  )
}

export default Location
import React from 'react'
import Footer from "../footer"

function Location(props) {
  return (
    <React.Fragment>
      <section className="app-loader bg-orange center-all">
        <select>
          <option selected disabled>Choose Location</option>
          <option value="TX">Tx</option>
        </select>
      </section>
      <Footer footerClass="bg-blue center-all"
              stageTextClass="status-white"
              message="Choose Location " />
    </React.Fragment>
  )
}

export default Location
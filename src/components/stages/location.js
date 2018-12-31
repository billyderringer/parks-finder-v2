import React from 'react'
import Footer from "../footer"
import Header from "../header";

function Location(props) {
  return (
    <React.Fragment>
      <section className="app-loader bg-orange center-all">
        <select>
          <option value="TX">Texas</option>
        </select>
      </section>
      <Footer footerClass="bg-blue center-all"
              stageTextClass="status-white"
              message="Choose Location " />
    </React.Fragment>
  )
}

export default Location
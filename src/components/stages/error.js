import React from 'react'
import Loader from "../loader"
import Footer from "../footer"

function Error(props) {
  return (
    <React.Fragment>
      <section className="app-loader center-all">
        <Loader />
        <div className="body-text">
          <h1>OOPS! Something<br />
            <span>went wrong!</span>
          </h1>
        </div>
      </section>
      <Footer  footerClass="bg-orange center-all"
               stageTextClass="status-white"
               message="Please Reload " />
    </React.Fragment>
  )
}

export default Error
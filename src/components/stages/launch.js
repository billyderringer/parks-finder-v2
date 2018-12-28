import React from 'react'
import Loader from "../loader"
import Footer from "../footer"

function Launch(props) {
    return (
      <React.Fragment>
        <section className="app-loader center-all">
          <Loader />
          <div className="body-text">
            <h1>Your Adventure<br />
              <span id="title-bottom">Awaits</span>
            </h1>
          </div>
        </section>
        <Footer footerClass="bg-orange center-all"
                stageTextClass="status-white"
                message="Loading App " />
      </React.Fragment>
    )
}

export default Launch
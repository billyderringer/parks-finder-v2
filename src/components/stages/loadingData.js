import React from 'react'
import Loader from "../loader";
import Footer from "../footer";

function LoadingData(props) {
  return (
    <React.Fragment>
      <section className="app-loader center-all">
        <Loader />
      </section>
      <Footer footerClass="bg-orange center-all"
              stageTextClass="status-white"
              message="Loading Data " />
    </React.Fragment>
  )
}

export default LoadingData
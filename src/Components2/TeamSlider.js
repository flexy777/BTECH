import React, { Component } from "react";
import Team from "../Components/App/Team";
class TeamSlider extends Component {
  render() {
    return (

<section className="wow animate__fadeIn">
          <div className="container">
            <div className="row text-left">
              <div className="col-12 col-md-6 text-left margin-2-half-rem-bottom sm-margin-3-rem-bottom">
                <h6  style={{color: "#d9b223", fontWeight:"bold"}}>
                Meet the Team
                </h6>
                <p  style={{lineHeight:"0px", color:"black", fontWeight:"500"}}>
                We have a very solid team who have experience in their respective fields
                </p>
              </div>
            </div>
            <div 
            className="row row-cols-1 row-cols-md-3 row-cols-sm-1 justify-content-center">
              <Team />
            </div>  
            {/* <div className="bg-medium-light-gray margin-6-rem-bottom margin-3-rem-top w-100 h-1px" />
            <div className="row align-items-center justify-content-center">
              <div
                className="col-12 col-xl-7 col-md-8 col-sm-10 text-center text-md-start sm-margin-30px-bottom wow animate__fadeIn"
                data-wow-delay="0.1s"
              >
                <h6 className="alt-font text-extra-dark-gray font-weight-500 mb-0 md-w-90 sm-w-100">
                  <strong className="text-decoration-underline">
                    Creative developers,
                  </strong>{" "}
                  clever thinkers and marketing superheroes apply for work with
                  us.
                </h6>
              </div>
              <div
                className="col-12 col-xl-5 col-md-4 text-center text-md-end wow animate__fadeIn"
                data-wow-delay="0.2s"
              >
                <a href="/contact-us">
                  <a
                    href="/contact-us"
                    className="btn btn-medium btn-fast-yellow btn-round-edge"
                  >
                    Join the team!
                  </a>
                  <span className="bg-yellow" />
                </a>
              </div>
            </div> */}
          </div>
        </section>

    )}}

    export default TeamSlider
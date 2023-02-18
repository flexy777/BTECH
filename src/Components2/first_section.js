import React, { Component } from "react";
class FirstSection extends Component {
  render() {
    return (
      <section
        className="parallax p-0"
        data-parallax-background-ratio="0.3"
        style={{
          backgroundImage: 'url("new_images/boolean_bg_left1.jpg")',
          //background: "#e9efff",
        }}
      >
        <div
          className="position-absolute cover-background top-0px left-0px w-100 h-100"
          data-parallax-background-ratio="0.5"
          // style={{
          //   backgroundImage:
          //     'url("images/home-design-agency-bg-img-01.png")',
          // }}
        />
        <div className="container-fluid first-section" >
          <div className="row" >
            <div className=" col-lg-6 d-flex flex-column  padding-8-rem-tb ">
              <h1
                className="font-weight-600 text-extra-dark-gray letter-spacing-minus-2px margin-2-half-rem-bottom sm-letter-spacing-minus-1-half xs-w-65"
                style={{
                  lineHeight: "95px",
                }}
              >
                Choose your Right
                <br /> Tech Partner
              </h1>
              <h5
                style={{
                  fontSize: "16px",
                }}
              >
                We are a full-service digital agency, specialising in building
                <br />
                the best, sophisticated modern technology, with the best
                <br /> service and a team of professionals.
              </h5>
              <br />
              {/* <br /> */}
              <div>
              <a href="#">
                <button className="btn btn-medium btn-yellow ">
                EXPLORE NOW
                <span className="m-2">
                  <i className="fas fa-arrow-circle-right"></i>
                </span>
                </button>
              </a>
              <a href="#">
                <button style={{marginLeft : "10px"}} className="btn btn-medium btn-lightb">
                CONTACT US
                <span className="m-2">
                  <i className="fas fa-arrow-circle-right"></i>
                </span>
                </button>
              </a>
              </div>
            </div>
            <div className="col-lg-6 "></div>
            
          </div>
        </div>
      </section>
    );
  }
}

export default FirstSection;

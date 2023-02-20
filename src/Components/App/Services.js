import React, { Component } from "react";
import AppLayer from "./AppLayer";
import Values from "./values";
import OurService from "./OurService";

class Services extends Component {
  render() {
    const imgStyle = {
      height: "50px",
      paddingBottom: "15px",
      textAlign: "left !important",
      marginTop: "50px"

    };
    return (
      <AppLayer navbarClass={"navbar navbar-expand-lg navbar-dark bg-transparent header-light fixed-top header-reverse-scroll"}>
        <section
          className="parallax bg-extra-dark-gray position-absolute"
          data-parallax-background-ratio="0.5"
          style={{ backgroundImage: 'url("Boolean_Images/Group 103.png")', height: "780px" }}
        >
          <div className="opacity-extra-medium bg-extra-dark-gray " />
          <div className="container ">
            <div className="row align-items-stretch justify-content-center small-screen" style={{ marginTop: "-10px" }}>
              <div className="col-12 col-xl-6 col-lg-7 col-md-8 position-relative page-title-extra-small text-center d-flex justify-content-center flex-column" >
                <h1 className="alt-font text-white opacity-6 margin-20px-bottom" style={{ marginTop: "-150px" }}>
                  SERVICES
                </h1>
                <h3 className="alt-font font-weight-500 letter-spacing-minus-1px line-height-50 sm-line-height-45 xs-line-height-30 no-margin-bottom"
                  style={{ color: "#d9b223" }}>
                  We’ve got you coveredIn all Aspect of I.T Solutions.
                </h3>
              </div>
            </div>
          </div>
        </section>

        <section className="position-relative overflow-visible" style={{ backgroundColor: "black" }}>
          <div className="container" style={{ marginTop: "-500px" }}>
            <img src="Boolean_Images/shutterstock_2016196394.png" alt="unknowkn" />
          </div>

          <div className="container text-center" style={{ marginTop: "40px" }} >
            <h5 className="alt-font font-weight-500 letter-spacing-minus-1px line-height-50 sm-line-height-45 xs-line-height-30 no-margin-bottom" style={{ color: "#d9b223" }}>THE BEST FEATURES WE PRESENT</h5>
            <div style={{ height: "350px", display: "flex", justifyContent: "space-around", textAlign: "left", marginTop: "25px" }}>
              <div style={{ margin: "15px", width: "40%", borderRadius: "10px", backgroundColor: "#191812", padding: "0px 15px 5px 20px" }}>
                <div className="feature-box-icon">
                  <img src="Boolean_Images/spanner.png" style={imgStyle} />
                </div>
                <div className="feature-box-content last-paragraph-no-margin">
                  <span className="text-extra-medium alt-font text-yellow text-gradient-orange-pink-hover d-block margin-5px-bottom font-weight-500">
                    BEST TECHNOLOGY TOOLS
                  </span>
                  <p>It’s easier to a develop a business with the latest modern technology tools that we have so as to give your business the opportunity to thrive and grow much bigger.</p>
                </div>
              </div>
              <div style={{ margin: "15px", width: "40%", borderRadius: "10px", backgroundColor: "#191812", padding: "0px 15px 5px 20px" }}>
                <div className="feature-box-icon">
                  <img src="Boolean_Images/stopwatch.png" style={imgStyle} />
                </div>
                <div className="feature-box-content last-paragraph-no-margin">
                  <span className="text-extra-medium alt-font text-yellow text-gradient-orange-pink-hover d-block margin-5px-bottom font-weight-500">
                    FAST & RESPONSIVE RESULTS
                  </span>
                  <p>We guarantee the impact of our work can be seen quickly and precisely because of our business strategy and a great team of professionals that works professionally.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="container text-center mt-5">
            <h1
              style={{
                fontSize: "4rem",
                fontWeight: "500",
                color: "black",
                WebkitTextStroke: " 1px #755e08"
              }}
            >
              OUR SERVICES
            </h1>

            <OurService />

          </div>
        </section>

        <section style={{ backgroundImage: 'url("Boolean_Images/Group 94.png")', backgroundSize: "100%", color: "white", fontWeight: "bold" }}>
          <div className="container" >
            <div className="row " >
              <div className="col-9">
                <h6><span style={{ color: "#d9b223" }}>Creative developers</span>, clever thinkers and marketing superheroes apply for work with us.</h6>
              </div>
              <div className="col-3">
                <a href="#">
                  <button className="btn btn-medium btn-yellow " style={{ width: "200px", height: "50px" }}>
                    JOIN THE TEAM
                    <span className="m-2">
                      <i className="fas fa-arrow-circle-right"></i>
                    </span>
                  </button>
                </a>
              </div>
            </div>

          </div>
        </section>


      </AppLayer>
    );
  }
}

export default Services;

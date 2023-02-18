import React, { Component } from "react";
import AppLayer from "./AppLayer";
import Team from "./Team";

class AboutUs extends Component {
  render() {
    return (
      <AppLayer
        navbarClass={
          "navbar navbar-expand-lg navbar-dark bg-transparent header-light fixed-top header-reverse-scroll"
        }
      >
        <section
          className="parallax"
          data-parallax-background-ratio="0.5"
          style={{ backgroundImage: 'url("Boolean_Images/Group 93.png")' }}
        >
          <div className="opacity-extra-medium bg-extra-dark" />
          <div className="container">
            <div className="row align-items-stretch justify-content-center small-screen">
              <div className="col-12 position-relative page-title-extra-small text-center d-flex align-items-center justify-content-center flex-column">
                <h1
                  style={{ fontSize: "25px" }}
                  className="alt-font text-white  margin-20px-bottom font-weight-300"
                >
                  WHAT WE DO?
                </h1>
                <h2
                  style={{ color: "#d9b223" }}
                  className="alt-font font-weight-500 w-55 md-w-65 sm-w-80 center-col xs-w-100 letter-spacing-minus-1px line-height-50 sm-line-height-45 xs-line-height-30 no-margin-bottom"
                >
                  We Bring Life To Your Idea
                </h2>
              </div>
              {/* <div className="down-section text-center">
                <a href="#about" className="section-link">
                  <i className="ti-arrow-down icon-extra-small text-black bg-yellow padding-15px-all xs-padding-10px-all border-radius-100" />
                </a>
              </div> */}
            </div>
          </div>
        </section>
        {/* end page title */}
        {/* start section */}
        <section style={{ background: "black" }}>
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div
                className="col-lg-6  text-center md-margin-30px-bottom wow animate__fadeIn"
                data-wow-delay="0.2s"
                style={{
                  width: "50%",
                }}
              >
                <img src="Boolean_Images/shutterstock_2120269418.png" alt="" />
              </div>

              <div className="col-lg-6 ">
                <h1
                  style={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    color: "#d9b223",
                  }}
                >
                  COMPANY OVERVIEW
                </h1>

                <p
                  style={{
                    color: "white",
                    fontWeight: "450",
                    // textAlign:"justify",
                    fontSize: "20px",
                    lineHeight: "2",
                  }}
                >
                  The Boolean Technology is a technology development and
                  consulting company in Abuja Nigeria. We are experienced in
                  designing and nurturing technology from nothing to a fully
                  functioning product. We make tailor made solutions
                  specifically for our clients, as we advice then on the best
                  course of actions to take to give maximum probability for
                  success.
                </p>
                <a href="#">
                  <button className="btn btn-medium btn-yellow ">
                    GET PROJECT QUOTE
                    <span className="m-2">
                      <i className="fas fa-arrow-circle-right"></i>
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section
          style={{
            // backgroundImage: 'url("Boolean_Images/Group 74.png")',
            // backgroundSize: "100%",
            background:"#624D01"
          }}
        >
          <div className="container">
            <div
              style={{
                width: "90%",
                margin: "auto",
                backgroundImage: 'url("Boolean_Images/Group 108.png")',
                backgroundSize: "100%",
                borderRadius: "20px",
                // height: "200px"
              }}
              className="row"
            >
              <div
                className="col-lg-4  text-center md-margin-30px-bottom wow animate__fadeIn"
                data-wow-delay="0.2s"
              >
                <div>
                  <h1
                    style={{
                      color: "#d9b223",
                      fontWeight: "bold",
                      fontSize: "50px",
                      marginBottom: "0px",
                    }}
                  >
                    300+
                  </h1>
                  <p style={{ color: "#d9b223", fontWeight: "bold" }}>
                    Projects Completed
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4  text-center md-margin-30px-bottom wow animate__fadeIn"
                data-wow-delay="0.2s"
              >
                <div>
                  <h1
                    style={{
                      color: "#d9b223",
                      fontWeight: "bold",
                      fontSize: "50px",
                      marginBottom: "0px",
                    }}
                  >
                    40+
                  </h1>
                  <p style={{ color: "#d9b223", fontWeight: "bold" }}>
                    Team Members
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4  text-center md-margin-30px-bottom wow animate__fadeIn"
                data-wow-delay="0.2s"
              >
                <div>
                  <h1
                    style={{
                      color: "#d9b223",
                      fontWeight: "bold",
                      fontSize: "50px",
                      marginBottom: "0px",
                    }}
                  >
                    1.1k+
                  </h1>
                  <p style={{ color: "#d9b223", fontWeight: "bold" }}>
                    Customers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end section */}
        {/* start section */}
        <section style={{ background: "black" }}>
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 ">
                <h1
                  style={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    color: "#d9b223",
                  }}
                >
                  OUR MISSION
                </h1>

                <p
                  style={{
                    color: "white",
                    fontWeight: "450",
                    // textAlign:"justify",
                    fontSize: "20px",
                    lineHeight: "2",
                  }}
                >
                  It is with passion and commitment to the advancement of
                  technology that we develop software to face real world
                  struggles. It is our love and dedication to the engineerinng
                  of each product that allows us get better with every product.
                </p>
                <a href="#">
                  <button className="btn btn-medium btn-yellow ">
                    READ MORE
                    <span className="m-2">
                      <i className="fas fa-arrow-circle-right"></i>
                    </span>
                  </button>
                </a>
              </div>
              <div
                className="col-lg-6  text-center md-margin-30px-bottom wow animate__fadeIn"
                data-wow-delay="0.2s"
                style={{
                  width: "50%",
                }}
              >
                <img src="Boolean_Images/shutterstock_1361068394.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* end section */}
        <section style={{ background: "black" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 ">
                <h1
                  style={{
                    fontSize: "5rem",
                    width:"600px",
                    height:"400px",
                    fontWeight: "bold",
                    color: "black",
                    rotate:"-90deg",
                    WebkitTextStroke:" 2px #d9b223"
                  }}
                >
                  OUR APPROACH
                </h1>
              </div>
              <div
                className="col-lg-8"
                data-wow-delay="0.2s"
                style={{
                  // width: "50%",
                  // color:"d9b223",
                  // fontSize:"50px",
                  fontWeight:"bold"

                }}
              >
                <h1 style={{fontSize:"50px", color:"#d9b223"}}>WE OFFER A FULL RANGE OF SOFTWARE DEVELOPMENT SERVICES!</h1>
                <p style={{color:"white"}}>
                  Our skilled strategists, designers, and developers are here to
                  take your project from idea to publication. Being a leading
                  software development company in Nigeria, our team is committed
                  to developing mobile app and web-based software solutions that
                  keep your users hooked.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* start section */}
        <section className="wow animate__fadeIn" style={{paddingBottom:"10px"}}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-lg-6 md-margin-50px-bottom wow animate__fadeIn">
                {/* start slider */}
                <div
                  className="swiper-container white-move border-all border-width-12px border-color-white box-shadow-large border-radius-8px"
                  data-slider-options='{ "slidesPerView": 1, "loop": true, "navigation": { "nextEl": ".swiper-button-next-nav", "prevEl": ".swiper-button-previous-nav" }, "keyboard": { "enabled": true, "onlyInViewport": true }, "effect": "slide" }'
                >
                  <div className="swiper-wrapper">
                    {/* start slider item */}
                    <div className="swiper-slide">
                      <img
                        src="Boolean_Images/shutterstock_1707351835.png"
                        alt=""
                      />
                    </div>
                    {/* end slider item */}
                    {/* start slider item */}
                    <div className="swiper-slide">
                      <img src="images/about-us-img-09.jpg" alt="" />
                    </div>
                    {/* end slider item */}
                    {/* start slider item */}
                    <div className="swiper-slide">
                      <img src="images/about-us-img-10.jpg" alt="" />
                    </div>
                    {/* end slider item */}
                  </div>
                  {/* start slider navigation */}
                  {/* <div className="swiper-button-next-nav swiper-button-next slider-navigation-style-01 light">
                    <i
                      className="feather icon-feather-arrow-right"
                      aria-hidden="true"
                    />
                  </div> */}
                  {/* <div className="swiper-button-previous-nav swiper-button-prev slider-navigation-style-01 light">
                    <i
                      className="feather icon-feather-arrow-left"
                      aria-hidden="true"
                    />
                  </div> */}
                  {/* end slider navigation */}
                </div>
                {/* end slider */}
              </div>
              <div
                className="col-12 col-lg-5 offset-lg-1 wow animate__fadeIn"
                data-wow-delay="0.2s"
              >
                <h5 className="alt-font text-extra-dark-gray font-weight-600">
                 IT IS <span style={{color:"#db9223"}}>TEAMWORK</span> THAT MAKES THE DREAM WORK.
                </h5>
                <p style={{color:"black", fontWeight:"400"}}>
                  With years of experience in the design and development
                  industry.
                  The Boolean Tech pride ourselves on creating unique, creative
                  &amp; quality designs that are developed on the best
                  technology available.
                </p>
                <ul className="p-0 list-style-02 margin-2-rem-top margin-3-rem-bottom">
                  <li className="margin-15px-bottom">
                    <i
                      className="feather icon-feather-arrow-right-circle text-large text-yellow margin-10px-right"
                      aria-hidden="true"
                    />
                    <span className="text-extra-dark-gray alt-font">
                      Beautiful applications
                    </span>
                  </li>
                  <li className="margin-15px-bottom">
                    <i
                      className="feather icon-feather-arrow-right-circle text-large text-yellow margin-10px-right"
                      aria-hidden="true"
                    />
                    <span className="text-extra-dark-gray alt-font">
                      Pixel perfect designs
                    </span>
                  </li>
                  <li className="margin-15px-bottom">
                    <i
                      className="feather icon-feather-arrow-right-circle text-large text-yellow margin-10px-right"
                      aria-hidden="true"
                    />
                    <span className="text-extra-dark-gray alt-font">
                      Creative takes on projects
                    </span>
                  </li>
                </ul>
                <a href="#">
                  <button className="btn btn-medium btn-yellow ">
                    Get Started Now
                    <span className="m-2">
                      <i className="fas fa-arrow-circle-right"></i>
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
       

       <section style={{backgroundImage: 'url("Boolean_Images/Group 94.png")', backgroundSize:"100%", color:"white", fontWeight:"bold"}}>
        <div className="container" >
          <div className="row " >
            <div className="col-9">
              <h6><span style={{ color: "#d9b223"}}>Creative developers</span>, clever thinkers and marketing superheroes apply for work with us.</h6>
            </div>
            <div className="col-3">
                <a href="#">
                  <button className="btn btn-medium btn-yellow " style={{width:"200px", height:"50px"}}>
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

export default AboutUs;
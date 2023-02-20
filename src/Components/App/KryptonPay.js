import React, { Component } from "react";
import AppLayer from "./AppLayer";

class KryptonPay extends Component {
  render() {
    return (
      <AppLayer
        navbarClass={
          "navbar navbar-expand-lg navbar-dark bg-transparent header-light fixed-top header-reverse-scroll"
        }
      >
        {/* start banner section */}
        <section
          style={{
            backgroundImage: 'url("Boolean_Images/Group 97.png")',
            backgroundSize: "100%",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div
                style={{
                  paddingLeft: "60px",
                }}
                className="col-lg-6"
              >
                <h1
                  style={{
                    fontSize: "4rem",
                    fontWeight: "bold",
                    color: "#d9b223",
                  }}
                >
                  <span style={{ color: "white" }}>WE MAKE YOUR</span>
                  <br />
                  BUSINESS REAL
                </h1>

                <p
                  style={{
                    color: "white",
                    fontWeight: "450",
                    width: "80%",
                    textAlign: "justify",
                    fontSize: "20px",
                    lineHeight: "2",
                  }}
                >
                  According to a new study, 90% of successful business today
                  have either website or Mobile application or even both.
                </p>
                <a href="#">
                  <button className="btn btn-medium btn-yellow ">
                    CONTACT US NOW
                    <span className="m-2">
                      <i className="fas fa-arrow-circle-right"></i>
                    </span>
                  </button>
                </a>
              </div>
              <div className="col-lg-6"></div>
            </div>
          </div>
        </section>
        {/* end banner section */}
        {/* start section */}
        <section
          style={{
            backgroundImage: 'url("Boolean_Images/Group 96.png")',
            backgroundSize: "100%",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div
                style={{
                  paddingLeft: "60px",
                }}
                className="col-lg-6"
              >
                <h1
                  style={{
                    fontSize: "4rem",
                    fontWeight: "bold",
                    color: "#d9b223",
                  }}
                >
                  ABOUT KRYPTON PAY
                </h1>

                <p
                  style={{
                    color: "white",
                    fontWeight: "450",
                    width: "80%",
                    textAlign: "justify",
                    fontSize: "20px",
                    lineHeight: "2",
                  }}
                >
                  We are a company invested in making it easy for businesses to
                  accept crypto payments with a priority on fast and secure
                  transactions.
                </p>
                <h1
                  style={{
                    color: "#d9b223",
                    fontSize: "40px",
                    fontWeight: "bold",
                    textDecoration: "underline",
                  }}
                >
                  SERVICES
                </h1>
                <p
                  style={{
                    color: "white",
                    fontSize: "20px",
                  }}
                >
                  Crypto Payment Solutions
                </p>
                <h1
                  style={{
                    color: "#d9b223",
                    fontSize: "40px",
                    fontWeight: "bold",
                    textDecoration: "underline",
                  }}
                >
                  CLIENT
                </h1>
                <p
                  style={{
                    color: "white",
                    fontSize: "20px",
                  }}
                >
                  Boolean Technologies
                </p>
              </div>
              <div className="col-lg-6">
                <h1
                  style={{
                    fontSize: "5rem",
                    width: "600px",
                    height: "400px",
                    fontWeight: "bold",
                    color: "transparent",
                    textAlign: "right",
                    rotate: "90deg",
                    WebkitTextStroke: " 2px #d9b223",
                  }}
                >
                  PRODUCTS
                </h1>
              </div>
            </div>
          </div>
        </section>
        {/* end section */}

        {/* start section */}
        <section style={{ background: "black", overflow:"visible" }}>
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
                  START ACCEPTING CRYPTO PAYMENTS TODAY!
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
                  Crypto payments are fast becoming a mainstream payment method,
                  make your business more durable by accepting payments from
                  crypto currency holders.
                </p>
                <a href="#">
                  <img
                    style={{ width: "170px" }}
                    src="Boolean_Images/playstore.png"
                  />
                </a>
                <a href="#">
                  <img
                    style={{ width: "150px", height: "45px" }}
                    src="Boolean_Images/appstore.png"
                  />
                </a>
              </div>
              <div
                className="col-lg-6  text-center wow animate__fadeIn"
                data-wow-delay="0.2s"
                style={{
                  width: "50%",
                  position:"relative",
                  marginTop:"-420px"
                }}
              >
                <img src="Boolean_Images/kp-2.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* end section */}
        {/* start section */}
        <section
          style={{
            backgroundImage: 'url("Boolean_Images/Group 94.png")',
            backgroundSize: "100%",
            color: "white",
            fontWeight: "bold",
          }}
        >
          <div className="container">
            <div className="row ">
              <div className="col-9">
                <h6>
                  <span style={{ color: "#d9b223" }}>Creative developers</span>,
                  clever thinkers and marketing superheroes apply for work with
                  us.
                </h6>
              </div>
              <div className="col-3">
                <a href="#">
                  <button
                    className="btn btn-medium btn-yellow "
                    style={{ width: "200px", height: "50px" }}
                  >
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

export default KryptonPay;
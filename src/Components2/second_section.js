import React, { Component } from "react";
import Values from "../Components/App/values";
class SecondSection extends Component {
  render() {
    const customStyle = {
      borderRadius: "10px",
      height: "400px",
      marginTop: "60px",
      color: "white",
      fontWeight: "bold",
      textAlign: "left",
    };
    return (
      <section className="bg-black wow animate__fadeIn">
        <div className="container">
          {/* <h4
            className="text-yellow"
            style={{ display: "flex", justifyContent: "Left" }}
          >
            Our Core Values
          </h4> */}
          <div className="row row-cols-1 row-cols-lg-3 row-cols-sm-2">
            <div className="col wow animate__fadeIn" data-wow-delay="0.4s">
              <div style={customStyle} className=" ">
                <h6>OUR SERVICES</h6>
                <div className="feature-box-content last-paragraph-no-margin">
                  <span className="text-extra-medium alt-font text-yellow text-gradient-orange-pink-hover d-block margin-4px-bottom font-weight-500">
                    {/* {title} */}{" "}
                    <h4>We provide the Very best of Services</h4>
                  </span>
                  <p>Some of the Services we provide are as follows</p>
                </div>
              </div>
            </div>

            <Values />
          </div>
        </div>
        <a href="#" style={{marginTop:"50px", display:"flex", justifyContent:"center"}}>
          <button className="btn btn-medium btn-yellow ">
            EXPLORE NOW
            <span className="m-2">
              <i className="fas fa-arrow-circle-right"></i>
            </span>
          </button>
        </a>
      </section>
    );
  }
}

export default SecondSection;

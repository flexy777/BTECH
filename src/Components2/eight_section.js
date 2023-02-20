import React, { Component } from "react";
class EightSection extends Component {
  render() {
    return (



      <section style={{background:"#A58903"}}>
        <div className="container">
          <div className="row align-items-center justify-content-center">

          <div
              className="col-lg-6  text-center md-margin-30px-bottom wow animate__fadeIn"
              data-wow-delay="0.2s"
              style={{
                width: "50%",
              }}
            >
              <img src="Boolean_Images/bulb.png" alt="" />
            </div>
           
            <div className="col-lg-6 ">
            {/* <h1 style={{fontSize:"2rem", fontWeight:"bold", color:"#d9b223"}}>OUR COMPANY</h1> */}
              <h1
              style={{
                fontSize:"70px",
                color:"white"
              }}
                className="alt-font font-weight-600 text-extra-dark-gray half-rem-bottom text-left text-lg-start wow animate__fadeInRight"
                data-wow-delay="0.2s"
              >
               We Are A Technology Agency
              </h1>
              <p
                style={{
                  color: "black",
                  fontWeight:"450",
                  // textAlign:"justify",
                  fontSize: "30px",
                  lineHeight:1.5
                }}
              >
               Express your mind we will build and design.
              </p>
              <a href="#">
                <button style={{border:"1px solid white", color:"white"}} className="btn btn-medium ">
                START PROJECT NOW
                <span className="m-2">
                  <i className="fas fa-arrow-circle-right"></i>
                </span>
                </button>
              </a>
            </div>

       
          </div>
          
        
        </div>
      </section>

    );
  }
}

export default EightSection;
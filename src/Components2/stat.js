import React, { Component } from "react";
class Stats extends Component {
  render() {
    return (
      <section style={{
        backgroundImage: 'url("Boolean_Images/Group 74.png")',
        backgroundSize: "100%"
      }} 
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
           
            <div className="col-lg-6 ">
            <h1 style={{fontSize:"2rem", fontWeight:"bold", color:"#d9b223", marginBottom:"0px"}}>WORK STATISTICS</h1>
              <h5
              style={{color:"white"}}
                className="alt-font font-weight-600 text-extra-dark-gray half-rem-bottom text-left text-lg-start wow animate__fadeInRight"
                data-wow-delay="0.2s"
              >
               How about some fact Numbers about us
              </h5>
            </div>

            <div
              className="col-lg-6  text-center md-margin-30px-bottom wow animate__fadeIn"
              data-wow-delay="0.2s"
            >
              <div className="d-flex justify-content-between">
              <div>
                <h1 style={{color:"#d9b223", fontWeight:"bold", fontSize:"50px", marginBottom:"0px"}}>300+</h1>
                <p style={{color:"#d9b223", fontWeight:"bold"}}>Projects Completed</p>
                </div>
                <div>
                <h1 style={{color:"white", fontWeight:"bold", fontSize:"50px", marginBottom:"0px"}}>40+</h1>
                <p style={{color:"white", fontWeight:"bold"}}>Team Members</p>
                </div>
                <div>
                <h1 style={{color:"white", fontWeight:"bold", fontSize:"50px", marginBottom:"0px"}}>1.1k+</h1>
                <p style={{color:"white", fontWeight:"bold"}}>Customers</p>
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </section>

      
    );
  }
}

export default Stats;

import React, { Component } from "react";
import ChooseUs from "../Components/App/ChooseUs";
class FifthSection extends Component {
  render() {
    return (
      <section className="bg-gradient-white-light-gray">
        <div className="text-center"  style={{color: "#d9b223", fontWeight:"bold",marginTop:"-50px", paddingBottom:"80px"}}>
          <h6>Why Choose Us</h6>
          <hr style={{width:"40px", margin:"auto", border:"2px solid #d9b223", borderRadius:"5px", opacity:"1",marginTop:"-20px"}}></hr>
        </div>
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center">
           
            <div className="col-lg-6 ">
            <img src="Boolean_Images/Group 73.png" alt="" />
            </div>

            <div
              className="col-lg-6  text-center md-margin-30px-bottom wow animate__fadeIn"
              data-wow-delay="0.2s"
            >
               <ChooseUs />
            </div>
          </div>
        
        </div>
      </section>
    );
  }
}

export default FifthSection;